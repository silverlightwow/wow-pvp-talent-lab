"""Preserve effect identity and rendering when full Wowhead pages are blocked."""
import json

import pytest

from pvpcalc import pipeline, tooltip_renderer
from pvpcalc.models import EffectObservation
from pvpcalc.sources.simc import SimcDump, SimcEffect, SimcSpell


def fallback(*, game_id=1001, multiplier=0.33, text="Different source label"):
    dump = SimcDump(class_slug="test", build="12.1.0.69933", header="", edges={},
        spells={100: SimcSpell(spell_id=100, name="Modifier", raw=(
            "Name : Modifier (id=100)\n"
            "#1 (id=1001) : Apply Aura (6) | Add Percent Modifier (108): Spell Direct Amount (0)\n"
            "Base Value: 3 | PvP Coefficient: 0.33334\n"))})
    generated = {100: {1: SimcEffect(effect_index=1, effect_text="Apply Aura (6) | Aura Type (108)",
        base_value=3, sp_coefficient=None, pvp_coefficient=0.33334, game_effect_id=1001)}}
    dr = EffectObservation(source="drustvar", spell_id=100, spell_name="Modifier", effect_index=0,
        pvp_multiplier=multiplier, effect_text=text, patch=dump.build,
        raw=json.dumps({"game_effect_id": game_id}))
    return pipeline._build_generated_simc_fallback_rows(spell_ids={100},
        talent_by_spell={100: {}}, drustvar_by_spell={100: [dr]},
        generated_effects_by_spell=generated, simc_dump=dump)


def test_exact_identity_handles_renamed_effect_without_rounding_the_pvp_value():
    rows, resolved = fallback()
    assert resolved == {100}
    assert rows[0]['pvp_multiplier'] == 0.33334
    assert "Spell Direct Amount" in rows[0]['effect_text']


@pytest.mark.parametrize('hotfixed,newer,identity,old,generated_value', [
    (False,False,1001,1.45,1.34), (True,False,1001,1.45,1.34),
    (False,True,1001,1.45,1.34), (False,False,1002,1.45,1.34),
    (False,False,1001,1.6,1.34), (False,False,1001,1.45,1.3),
])
def test_mixed_hotfix_fields_prove_only_the_exact_old_to_new_transition(hotfixed,newer,identity,old,generated_value):
    raw = ('Name : Example (id=100)\n#1 (id=1001) : School Damage (2): cosmic\n'
           'Base Value: 0 | SP Coefficient: 3.67 | PvP Coefficient: 1.34\n'
           'Hotfixed : SP Coefficient (3.4 -> 3.67), PvP Coefficient (1.45 -> 1.34)\n')
    dump = SimcDump(class_slug='test',build='12.1.0.69933',header='',edges={},
                   spells={100:SimcSpell(spell_id=100,name='Example',raw=raw)})
    parsed = pipeline.simc.parse_spell_effects(dump.spells[100])[1]
    assert parsed.pvp_hotfix_previous == 1.45
    generated = SimcEffect(effect_index=1,effect_text='School Damage (2)',base_value=0,
        sp_coefficient=3.67,pvp_coefficient=generated_value,game_effect_id=1001)
    dr = EffectObservation(source='drustvar',spell_id=100,spell_name='Example',effect_index=0,
        pvp_multiplier=old,effect_text='School Damage (2): cosmic',
        patch='12.1.0.99999' if newer else dump.build,
        raw=json.dumps({'game_effect_id':identity,'is_hotfixed':hotfixed}))
    rows,resolved=pipeline._build_generated_simc_fallback_rows(spell_ids={100},talent_by_spell={100:{}},
        drustvar_by_spell={100:[dr]},generated_effects_by_spell={100:{1:generated}},simc_dump=dump)
    if not hotfixed and not newer and identity==1001 and old==1.45 and generated_value==1.34:
        assert resolved=={100} and rows[0]['pvp_multiplier']==1.34
        assert 'simc_exact_build_hotfix' in rows[0]['source_notes'][0]['resolved_by']
    else:
        assert not rows and not resolved


@pytest.mark.parametrize('game_id,multiplier', [(1002, 0.33), (1001, 0.5)])
def test_wrong_identity_or_conflicting_current_coefficient_remains_blocking(game_id, multiplier):
    rows, resolved = fallback(game_id=game_id, multiplier=multiplier,
                              text="Apply Aura (6) | Add Percent Modifier (108): Spell Direct Amount (0)")
    assert not rows
    assert not resolved


@pytest.mark.parametrize('index,multiplier,reason',[
    (1,1.34,None), (1,1.8,'CONFLICT_WITH_EXACT_GENERATED_EFFECT'),
    (2,1.34,'WOWHEAD_ONLY_MODIFIER'),
])
def test_generated_table_cross_checks_wowhead_only_modifiers_by_exact_spell_and_effect(index,multiplier,reason):
    dump=SimcDump(class_slug='test',build='12.1.0.69933',header='',edges={},spells={})
    generated={100:{1:SimcEffect(effect_index=1,effect_text='School Damage (2)',base_value=0,
        sp_coefficient=None,ap_coefficient=9.72,pvp_coefficient=1.34,game_effect_id=1001)}}
    warning=dict(spell_id=100,effect_index=index,multiplier=multiplier,reason='WOWHEAD_ONLY_MODIFIER')
    result=pipeline._filter_simc_corroborated_unresolved([warning],simc_dump=dump,
        wowhead_by_spell={},generated_effects_by_spell=generated)
    if reason is None:
        assert not result
    else:
        assert result[0]['reason']==reason


def test_generated_internal_modifier_does_not_rewrite_an_equal_visible_number():
    raw = ("Name : Stack Test (id=100)\n"
        "#1 (id=1001) : Apply Aura (6) | Dummy (4)\n"
        "Base Value: 4 | PvP Coefficient: 0.75\n"
        "#3 (id=1003) : Apply Aura (6) | Apply Flat Modifier w/ Label (219): Spell Max Stacks (37)\n"
        "Base Value: 4 | PvP Coefficient: 0.5\n"
        "Description : Attacks grant $s1 stacks.\n")
    dump = SimcDump(class_slug="test", build="12.1.0.69933", header="", edges={},
                    spells={100: SimcSpell(spell_id=100, name="Stack Test", raw=raw)})
    generated = {100: {3: SimcEffect(effect_index=3, effect_text="Apply Aura (6) | Aura Type (219)",
        base_value=4, sp_coefficient=None, pvp_coefficient=0.5, game_effect_id=1003)}}
    dr = EffectObservation(source="drustvar", spell_id=100, spell_name="Stack Test", effect_index=0,
        pvp_multiplier=0.5, effect_text="Apply Flat Modifier w/ Label (219): Spell Max Stacks (37)",
        patch=dump.build, raw=json.dumps({"game_effect_id": 1003}))
    rows, resolved = pipeline._build_generated_simc_fallback_rows(spell_ids={100},
        talent_by_spell={100: {}}, drustvar_by_spell={100: [dr]},
        generated_effects_by_spell=generated, simc_dump=dump)
    rows.append(pipeline._simc_row_from_effect(simc_dump=dump, spell_id=100,
        simc_effect=pipeline.simc.effect_for_spell(dump,100,1),talent={},sources=['simc'],confidence='high'))
    pipeline._fill_missing_base_values_from_simc(rows,dump)
    pipeline._annotate_final_pvp_layers(rows,[],dump)
    audit = pipeline.SpecAuditResult(class_name="Test",spec_name="Test",metadata={},drustvar_builds=[],
        talents=[],spell_ids=[],wowhead_by_spell={},drustvar_by_spell={},wowhead_candidate_ids=set(),
        drustvar_candidate_ids=set(),candidate_ids=set(),effect_rows=rows)
    assert resolved == {100}
    assert len(audit.render_effect_rows) == 1
    rendered = tooltip_renderer.render_pvp_tooltip(tooltip="Attacks grant 4 stacks.",spec_name="Test",
                                                  effect_rows=audit.render_effect_rows)
    assert rendered['pvp_tooltip'] == "Attacks grant 3 stacks."
    assert rendered['render_status'] == 'COMPLETE'
