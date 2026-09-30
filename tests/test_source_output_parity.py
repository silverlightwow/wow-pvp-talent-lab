"""The same exact-build effect must render identically with or without Wowhead."""
from copy import deepcopy

import pytest

from pvpcalc import pipeline, tooltip_renderer
from pvpcalc.pvp_aura import PvpAuraRule
from pvpcalc.sources.simc import SimcDump, SimcSpell, effect_for_spell


@pytest.mark.parametrize(
    "spell_id,simc_label,wowhead_label,coefficient,multiplier,kind,dependency,tooltip,expected",
    [
        (1257065, "Health Leech (9)", "Drain Health (SP mod: 8.39552)",
         8.39552, 0.7, "direct", "REFERENCED",
         "Deals (839.552% of Spell Power) damage.", "781.6229%"),
        (1261153, "Apply Aura (6) | Periodic Damage (3): shadow every 1 seconds",
         "Apply Aura: Periodic Damage", 2.6325, 1.0, "periodic", "EMBEDDED",
         "Deals (1053% of Spell Power) damage over 4 sec.", "1400.49%"),
        (335467, "Apply Aura (6) | Periodic Health Leech (53): every 2 seconds",
         "Apply Aura: Periodically Leech Health", 2.61625, 0.87,
         "periodic", "REFERENCED",
         "Deals (261.625% of Spell Power) damage.", "302.7263%"),
        (100001, "Health Leech (9)", "Health drained from target",
         8.39552, 0.7, "direct", "REFERENCED",
         "Deals (839.552% of Spell Power) damage.", "781.6229%"),
    ],
)
def test_output_and_aura_are_independent_of_wowhead_availability(
    spell_id, simc_label, wowhead_label, coefficient, multiplier,
    kind, dependency, tooltip, expected,
):
    # Real source representations of direct, periodic and leech outputs. Their
    # IDs exist only in this regression fixture; production has no exceptions.
    dump = SimcDump(
        class_slug="warlock", build="12.1.0.69933", header="test", edges={},
        spells={spell_id: SimcSpell(
            spell_id=spell_id, name="Output", raw=(
                f"Name             : Output (id={spell_id})\n"
                f"#1 (id=1001) : {simc_label}\n"
                f"Base Value: 0 | SP Coefficient: {coefficient} | "
                f"PvP Coefficient: {multiplier}\n"
            ),
        )},
    )
    rules = [PvpAuraRule(
        aura_spell_id=1256906, aura_name="Affliction Warlock", spec_name="Affliction",
        drustvar_effect_id=1, game_effect_id=2, amount_kind=kind,
        value_pct=33, factor=1.33, affected_spells=((spell_id, "Output"),),
        family_flags=None, label_id=None, build=dump.build, is_hotfixed=False,
    )]
    fallback = pipeline._simc_row_from_effect(
        simc_dump=dump, spell_id=spell_id,
        simc_effect=effect_for_spell(dump, spell_id, 1),
        talent={}, sources=["simc", "drustvar"], confidence="high",
    )
    structured = dict(
        spell_id=spell_id, effect_index=1, effect_text=wowhead_label,
        base_value=None, pvp_multiplier=multiplier,
        sources=["wowhead"], confidence="medium", conflicts=[],
    )
    results = []
    for row in (structured, fallback):
        pipeline._fill_missing_base_values_from_simc([row], dump)
        row.update(
            effect_origin="DEPENDENCY", source_spell_id=spell_id,
            talent_spell_id=100, dependency_kind=dependency,
            dependency_path=[100, spell_id],
            dependency_relations=["spelldesc_ref" if dependency == "EMBEDDED"
                                  else "tooltip_value_ref"],
            dependency_effect_referenced=True,
        )
        pipeline._annotate_final_pvp_layers([row], rules, dump)
        audit = pipeline.SpecAuditResult(
            class_name="Warlock", spec_name="Affliction", metadata={},
            drustvar_builds=[], talents=[], spell_ids=[], wowhead_by_spell={},
            drustvar_by_spell={}, wowhead_candidate_ids=set(),
            drustvar_candidate_ids=set(), candidate_ids=set(), effect_rows=[],
            dependency_effect_rows=[row],
        )
        assert row["amount_kind"] == kind
        assert row["aura_factor"] == 1.33
        assert audit.render_effect_rows == [row]
        result = tooltip_renderer.render_pvp_tooltip(
            tooltip=tooltip, spec_name="Affliction", effect_rows=audit.render_effect_rows,
        )
        assert result["render_status"] == "COMPLETE"
        assert expected in result["pvp_tooltip"]
        results.append(result["pvp_tooltip"])
    assert results[0] == results[1]


@pytest.mark.parametrize("text,kind", [
    ("Drain Health", "direct"),
    ("Health Leech (9)", "direct"),
    ("Apply Aura: Periodic Leech", "periodic"),
    ("Apply Aura (6) | Periodic Health Leech (53)", "periodic"),
    ("Apply Aura: Periodically Leech Health", "periodic"),
    ("Apply Aura: Modifies Periodic Damage/Healing Done", None),
])
def test_output_aliases_do_not_turn_modifier_parameters_into_output(text, kind):
    assert pipeline._infer_amount_kind(text) == kind


def test_coefficient_metadata_does_not_allow_unrelated_embedded_effects():
    row = dict(
        spell_id=200, effect_index=1, effect_origin="DEPENDENCY",
        dependency_kind="EMBEDDED", dependency_path=[100, 200],
        dependency_relations=["trigger_spell"], is_final_pvp_modified=True,
        effect_text="Apply Aura: Periodic Damage", base_value=None,
        simc_sp_coefficient=2.5,
    )
    audit = pipeline.SpecAuditResult(
        class_name="Test", spec_name="Test", metadata={}, drustvar_builds=[],
        talents=[], spell_ids=[], wowhead_by_spell={}, drustvar_by_spell={},
        wowhead_candidate_ids=set(), drustvar_candidate_ids=set(),
        candidate_ids=set(), effect_rows=[], dependency_effect_rows=[deepcopy(row)],
    )
    assert audit.render_effect_rows == []
    row["dependency_relations"] = ["spelldesc_ref"]
    row["simc_sp_coefficient"] = 0
    audit.dependency_effect_rows = [row]
    assert audit.render_effect_rows == []
