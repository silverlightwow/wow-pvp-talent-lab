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
