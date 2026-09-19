from pvpcalc import pipeline
from pvpcalc.models import EffectObservation
from pvpcalc.sources.simc import SimcDump, SimcSpell


def _dump() -> SimcDump:
    raw = (
        "Name             : Test Spell (id=100)\n"
        "#1 (id=1001) : Apply Aura: Dummy\n"
        "Base Value: 20\n"
        "PvP Coefficient: 0.5\n"
        "#2 (id=1002) : Apply Aura: Modifies Damage/Healing Done\n"
        "Base Value: 30\n"
        "PvP Coefficient: 0.75\n"
    )

    return SimcDump(
        class_slug="test",
        build="12.1.0.test",
        header="test",
        spells={
            100: SimcSpell(
                spell_id=100,
                name="Test Spell",
                raw=raw,
            )
        },
        edges={},
    )


def _wowhead(index: int, multiplier: float, text: str):
    return EffectObservation(
        source="wowhead",
        spell_id=100,
        spell_name="Test Spell",
        effect_index=index,
        base_value=20,
        pvp_multiplier=multiplier,
        effect_text=text,
        patch=None,
        url="",
        raw="",
    )


def test_simc_corroborates_wowhead_only_same_effect_index():
    item = {
        "spell_id": 100,
        "side": "wowhead",
        "reason": "WOWHEAD_ONLY_MODIFIER",
        "effect_index": 2,
        "multiplier": 0.75,
        "effect_text": "Apply Aura: Modifies Damage/Healing Done",
    }

    assert pipeline._simc_corroborates_unresolved(
        item,
        simc_dump=_dump(),
        wowhead_by_spell={
            100: [
                _wowhead(
                    2,
                    0.75,
                    "Apply Aura: Modifies Damage/Healing Done",
                )
            ]
        },
    )


def test_simc_corroborates_unmatched_drustvar_via_same_wowhead_index():
    item = {
        "spell_id": 100,
        "side": "drustvar",
        "reason": "UNMATCHED_DRUSTVAR_EFFECT",
        "multiplier": 0.5,
        "effect_text": "Apply Aura (6) | Dummy (4)",
    }

    assert pipeline._simc_corroborates_unresolved(
        item,
        simc_dump=_dump(),
        wowhead_by_spell={
            100: [
                _wowhead(
                    1,
                    0.5,
                    "Apply Aura: Dummy",
                )
            ]
        },
    )


def test_simc_does_not_hide_missing_wowhead_structure():
    item = {
        "spell_id": 100,
        "side": "drustvar",
        "reason": "NO_WOWHEAD_EFFECTS",
        "multiplier": 0.5,
        "effect_text": "Apply Aura (6) | Dummy (4)",
    }

    assert not pipeline._simc_corroborates_unresolved(
        item,
        simc_dump=_dump(),
        wowhead_by_spell={100: []},
    )


def test_simc_requires_matching_coefficient():
    item = {
        "spell_id": 100,
        "side": "wowhead",
        "reason": "WOWHEAD_ONLY_MODIFIER",
        "effect_index": 2,
        "multiplier": 0.5,
        "effect_text": "Apply Aura: Modifies Damage/Healing Done",
    }

    assert not pipeline._simc_corroborates_unresolved(
        item,
        simc_dump=_dump(),
        wowhead_by_spell={
            100: [
                _wowhead(
                    2,
                    0.5,
                    "Apply Aura: Modifies Damage/Healing Done",
                )
            ]
        },
    )


def test_simc_fallback_builds_canonical_row_when_wowhead_has_no_effects():
    drustvar = EffectObservation(
        source="drustvar",
        spell_id=100,
        spell_name="Test Spell",
        effect_index=9001,
        base_value=None,
        pvp_multiplier=0.5,
        effect_text="Apply Aura (6) | Dummy (4)",
        patch="12.1.0.test",
        url="",
        raw="",
    )

    rows, resolved = pipeline._build_simc_fallback_rows(
        spell_ids={100},
        talent_by_spell={
            100: {
                "class_name": "Test",
                "spec_name": "Test",
                "talent_name": "Test Spell",
                "tree_type": "spec",
                "hero_tree": None,
                "node_id": 1,
                "entry_id": 2,
            }
        },
        drustvar_by_spell={
            100: [drustvar]
        },
        simc_dump=_dump(),
    )

    assert resolved == {100}
    assert len(rows) == 1

    row = rows[0]

    assert row["effect_index"] == 1
    assert row["base_value"] == 20
    assert row["pvp_multiplier"] == 0.5
    assert row["pvp_value"] == 10
    assert row["sources"] == ["simc", "drustvar"]
    assert row["wowhead_present"] is False
    assert row["confidence"] == "high"


def test_simc_effect_parser_preserves_attack_power_coefficient():
    raw = (
        "Name             : Physical Test (id=200)\n"
        "#1 (id=2001) : School Damage (Physical)\n"
        "Base Value: 0\n"
        "AP Coefficient: 9.72\n"
        "PvP Coefficient: 1.34\n"
    )

    dump = SimcDump(
        class_slug="test",
        build="12.1.0.test",
        header="test",
        spells={
            200: SimcSpell(
                spell_id=200,
                name="Physical Test",
                raw=raw,
            )
        },
        edges={},
    )

    effect = pipeline.simc.effect_for_spell(
        dump,
        200,
        1,
    )

    assert effect is not None
    assert effect.ap_coefficient == 9.72

    observations = pipeline._simc_effect_observations(
        dump,
        200,
    )

    assert len(observations) == 1
    assert observations[0].base_value is None
    assert "AP mod: 9.72" in observations[0].effect_text


def test_simc_pvp_universe_finds_modified_spells():
    ids = pipeline.simc.pvp_modified_spell_ids(
        _dump()
    )

    assert ids == {100}


def test_simc_fills_missing_wowhead_pvp_coefficient():
    rows = [
        {
            "spell_id": 100,
            "effect_index": 2,
            "effect_text": "Apply Aura: Modifies Damage/Healing Done",
            "base_value": 30,
            "pvp_multiplier": None,
            "pvp_value": None,
            "sources": ["wowhead"],
            "confidence": "medium",
            "conflicts": [],
        }
    ]

    pipeline._fill_missing_base_values_from_simc(
        rows,
        _dump(),
    )

    row = rows[0]

    assert row["pvp_multiplier"] == 0.75
    assert row["pvp_value"] == 22.5
    assert row["is_pvp_modified"] is True
    assert "simc" in row["sources"]
    assert row["pvp_multiplier_source"] == "simc_exact_build"


def test_simc_modified_rows_cover_missing_effect_identity():
    rows = pipeline._build_simc_modified_rows(
        spell_ids={100},
        talent_by_spell={
            100: {
                "class_name": "Test",
                "spec_name": "Test",
                "talent_name": "Test Spell",
                "tree_type": "spec",
                "hero_tree": None,
                "node_id": 1,
                "entry_id": 2,
            }
        },
        simc_dump=_dump(),
        existing_keys={
            (100, 1),
        },
    )

    assert len(rows) == 1
    assert rows[0]["effect_index"] == 2
    assert rows[0]["pvp_multiplier"] == 0.75
    assert rows[0]["sources"] == ["simc"]
    assert rows[0]["confidence"] == "medium"


def test_unique_generic_simc_effect_corroborates_missing_wowhead_pvp_line():
    raw = (
        "Name             : Generic Test (id=300)\n"
        "#1 (id=3001) : Dummy\n"
        "Base Value: 50\n"
        "PvP Coefficient: 0\n"
        "#2 (id=3002) : Apply Aura: Other\n"
        "Base Value: 10\n"
        "PvP Coefficient: 1\n"
    )

    dump = SimcDump(
        class_slug="test",
        build="12.1.0.test",
        header="test",
        spells={
            300: SimcSpell(
                spell_id=300,
                name="Generic Test",
                raw=raw,
            )
        },
        edges={},
    )

    item = {
        "spell_id": 300,
        "side": "drustvar",
        "reason": "UNMATCHED_DRUSTVAR_EFFECT",
        "multiplier": 0,
        "effect_text": "Dummy (3)",
    }

    wowhead = EffectObservation(
        source="wowhead",
        spell_id=300,
        spell_name="Generic Test",
        effect_index=1,
        base_value=50,
        pvp_multiplier=None,
        effect_text="Dummy",
        patch=None,
        url="",
        raw="",
    )

    assert pipeline._simc_corroborates_unresolved(
        item,
        simc_dump=dump,
        wowhead_by_spell={
            300: [wowhead]
        },
    )


def test_unique_generic_simc_effect_does_not_hide_explicit_wowhead_conflict():
    raw = (
        "Name             : Generic Test (id=300)\n"
        "#1 (id=3001) : Dummy\n"
        "Base Value: 50\n"
        "PvP Coefficient: 0\n"
    )

    dump = SimcDump(
        class_slug="test",
        build="12.1.0.test",
        header="test",
        spells={
            300: SimcSpell(
                spell_id=300,
                name="Generic Test",
                raw=raw,
            )
        },
        edges={},
    )

    item = {
        "spell_id": 300,
        "side": "drustvar",
        "reason": "UNMATCHED_DRUSTVAR_EFFECT",
        "multiplier": 0,
        "effect_text": "Dummy (3)",
    }

    wowhead = EffectObservation(
        source="wowhead",
        spell_id=300,
        spell_name="Generic Test",
        effect_index=1,
        base_value=50,
        pvp_multiplier=1,
        effect_text="Dummy",
        patch=None,
        url="",
        raw="",
    )

    assert not pipeline._simc_corroborates_unresolved(
        item,
        simc_dump=dump,
        wowhead_by_spell={
            300: [wowhead]
        },
    )
