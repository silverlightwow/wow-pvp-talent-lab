from pvpcalc import pipeline
from pvpcalc.pvp_aura import PvpAuraRule
from pvpcalc.sources.simc import SimcDump, SimcSpell


def _dump():
    return SimcDump(
        class_slug="test",
        build="12.1.0.test",
        header="test",
        spells={
            100: SimcSpell(
                spell_id=100,
                name="Labelled Damage",
                raw=(
                    "Name             : Labelled Damage (id=100)\n"
                    "Labels           : 4007\n"
                ),
            ),
            200: SimcSpell(
                spell_id=200,
                name="Indexed Parameter",
                raw=(
                    "Name             : Indexed Parameter (id=200)\n"
                    "Labels           : 25\n"
                ),
            ),
        },
        edges={},
    )


def test_pipeline_applies_label_targeted_output_aura():
    rules = [
        PvpAuraRule(
            aura_spell_id=1,
            aura_name="Test Aura",
            spec_name="Test",
            drustvar_effect_id=10,
            game_effect_id=20,
            amount_kind="direct",
            value_pct=25.0,
            factor=1.25,
            affected_spells=tuple(),
            family_flags=None,
            label_id=4007,
            build="12.1.0.test",
            is_hotfixed=False,
        )
    ]

    rows = [
        {
            "spell_id": 100,
            "source_spell_id": 100,
            "effect_index": 1,
            "effect_text": "School Damage (Fire)",
            "base_value": 80.0,
            "pvp_multiplier": 1.0,
        }
    ]

    pipeline._annotate_final_pvp_layers(
        rows,
        rules,
        _dump(),
    )

    row = rows[0]

    assert row["amount_kind"] == "direct"
    assert row["aura_factor"] == 1.25
    assert row["final_pvp_value"] == 100.0
    assert row["aura_rules"][0]["label_id"] == 4007


def test_pipeline_applies_effect_index_rule_without_amount_kind():
    rules = [
        PvpAuraRule(
            aura_spell_id=2,
            aura_name="Test Aura",
            spec_name="Test",
            drustvar_effect_id=11,
            game_effect_id=21,
            amount_kind="effect:2",
            value_pct=-50.0,
            factor=0.5,
            affected_spells=((200, "Indexed Parameter"),),
            family_flags=None,
            label_id=None,
            build="12.1.0.test",
            is_hotfixed=False,
        )
    ]

    rows = [
        {
            "spell_id": 200,
            "source_spell_id": 200,
            "effect_index": 2,
            "effect_text": "Apply Aura: Dummy",
            "base_value": 20.0,
            "pvp_multiplier": 1.0,
        },
        {
            "spell_id": 200,
            "source_spell_id": 200,
            "effect_index": 1,
            "effect_text": "Apply Aura: Dummy",
            "base_value": 20.0,
            "pvp_multiplier": 1.0,
        },
    ]

    pipeline._annotate_final_pvp_layers(
        rows,
        rules,
        _dump(),
    )

    assert rows[0]["amount_kind"] is None
    assert rows[0]["aura_factor"] == 0.5
    assert rows[0]["final_pvp_value"] == 10.0

    assert rows[1]["aura_factor"] == 1.0
    assert rows[1]["final_pvp_value"] == 20.0


def test_simc_materializes_aura_only_output_without_spell_pvp_coefficient():
    raw = (
        "Name             : Aura Only Damage (id=300)\n"
        "Labels           : 4007\n"
        "#1 (id=3001) : School Damage (Fire)\n"
        "Base Value: 0\n"
        "SP Coefficient: 1.5\n"
    )

    dump = SimcDump(
        class_slug="test",
        build="12.1.0.test",
        header="test",
        spells={
            300: SimcSpell(
                spell_id=300,
                name="Aura Only Damage",
                raw=raw,
            )
        },
        edges={},
    )

    rules = [
        PvpAuraRule(
            aura_spell_id=3,
            aura_name="Test Aura",
            spec_name="Test",
            drustvar_effect_id=12,
            game_effect_id=22,
            amount_kind="direct",
            value_pct=20.0,
            factor=1.2,
            affected_spells=tuple(),
            family_flags=None,
            label_id=4007,
            build="12.1.0.test",
            is_hotfixed=False,
        )
    ]

    rows = pipeline._build_simc_aura_rows(
        spell_ids={300},
        talent_by_spell={
            300: {
                "class_name": "Test",
                "spec_name": "Test",
                "talent_name": "Aura Only Damage",
                "tree_type": "spec",
                "hero_tree": None,
                "node_id": 3,
                "entry_id": 4,
            }
        },
        aura_rules=rules,
        simc_dump=dump,
        existing_keys=set(),
    )

    assert len(rows) == 1
    assert rows[0]["pvp_multiplier"] == 1.0
    assert rows[0]["base_value"] is None
    assert "SP mod: 1.5" in rows[0]["effect_text"]
    assert rows[0]["sources"] == ["simc", "drustvar"]

    pipeline._annotate_final_pvp_layers(
        rows,
        rules,
        dump,
    )

    assert rows[0]["aura_factor"] == 1.2
    assert rows[0]["final_pvp_multiplier"] == 1.2


def test_render_effect_rows_exclude_unreferenced_child_effects():
    audit = pipeline.SpecAuditResult(
        class_name="Test",
        spec_name="Test",
        metadata={"wowBuild": "12.1.0.test"},
        drustvar_builds=[],
        talents=[],
        spell_ids=[],
        wowhead_by_spell={},
        drustvar_by_spell={},
        wowhead_candidate_ids=set(),
        drustvar_candidate_ids=set(),
        candidate_ids=set(),
        effect_rows=[],
    )

    audit.dependency_effect_rows = [
        {
            "spell_id": 200,
            "effect_index": 1,
            "effect_origin": "DEPENDENCY",
            "dependency_kind": "REFERENCED",
            "dependency_effect_referenced": True,
            "is_final_pvp_modified": True,
            "base_value": 20,
            "final_pvp_value": 10,
        },
        {
            "spell_id": 200,
            "effect_index": 2,
            "effect_origin": "DEPENDENCY",
            "dependency_kind": "REFERENCED",
            "dependency_effect_referenced": False,
            "is_final_pvp_modified": True,
            "base_value": 15,
            "final_pvp_value": 5,
        },
    ]

    rows = audit.render_effect_rows

    assert len(rows) == 1
    assert rows[0]["effect_index"] == 1
