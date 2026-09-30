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


@pytest.mark.parametrize('game_id,multiplier', [(1002, 0.33), (1001, 0.5)])
def test_wrong_identity_or_conflicting_current_coefficient_remains_blocking(game_id, multiplier):
    rows, resolved = fallback(game_id=game_id, multiplier=multiplier,
                              text="Apply Aura (6) | Add Percent Modifier (108): Spell Direct Amount (0)")
    assert not rows
    assert not resolved


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
