from pvpcalc import pipeline
from pvpcalc.models import EffectObservation
from pvpcalc.sources.simc import SimcDump, SimcEffect, SimcSpell


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


def test_simc_and_drustvar_corroborate_missing_wowhead_structure():
    item = {
        "spell_id": 100,
        "side": "drustvar",
        "reason": "NO_WOWHEAD_EFFECTS",
        "multiplier": 0.5,
        "effect_text": "Apply Aura (6) | Dummy (4)",
    }

    # Missing Wowhead Spell Details is a source-representation gap,
    # not an unknown game state, when exact-build SimC identifies a
    # semantically compatible effect and Drustvar independently agrees
    # on the current PvP coefficient. The pipeline materializes an
    # explicit SimC+Drustvar fallback row for this case.
    assert pipeline._simc_corroborates_unresolved(
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


def test_superseded_drustvar_requires_exact_effect_identity_and_current_agreement():
    from pathlib import Path
    from pvpcalc.sources.simc import parse_dump
    dump = parse_dump(Path('tests/fixtures/simc-1266151.txt').read_text(), class_slug='evoker')
    current = EffectObservation(
        source='wowhead', spell_id=1266151, spell_name='Strafing Run',
        effect_index=1, base_value=20, pvp_multiplier=-1,
        effect_text='Apply Aura: Modifies Periodic Damage/Healing Done (22)',
        patch=None, url='', raw='',
    )
    item = dict(
        spell_id=1266151, reason='UNMATCHED_DRUSTVAR_EFFECT',
        source_build='12.1.0.69587', game_effect_id=1278387, multiplier=0,
        effect_text='Apply Aura (6) | Add Percent Modifier (108): Spell Direct Amount (0)',
    )
    def resolve(row, wh=current):
        return pipeline._superseded_drustvar_effect(
            row, simc_dump=dump, wowhead_by_spell={1266151: [wh]}
        )
    result = resolve(item)
    assert result['reason'] == 'SUPERSEDED_DRUSTVAR_EFFECT'
    assert result['multiplier'] == 0  # Old source evidence is retained.
    assert result['current_multiplier'] == -1
    assert resolve(dict(item, game_effect_id=9999)) is None
    assert resolve(dict(item, source_build=dump.build)) is None
    assert resolve(dict(item, source_build='12.1.0.99999')) is None
    assert resolve(dict(item, source_build=None)) is None
    from dataclasses import replace
    conflicting = replace(current, pvp_multiplier=0)
    assert resolve(item, conflicting) is None



def test_superseded_drustvar_accepts_current_neutral_multiplier_omitted_by_wowhead():
    raw = (
        "Name             : Ebon Might Test (id=395152)\n"
        "#1 (id=1035393) : Apply Aura (6) | Periodic Dummy (226): every 1 seconds\n"
        "Base Value: 8\n"
        "PvP Coefficient: 1.5\n"
        "#2 (id=1035394) : Apply Aura (6) | Modify Stat With Support Triggers (540)\n"
        "Base Value: 0\n"
        "Hotfixed         : PvP Coefficient (1.25 -> 1)\n"
    )

    dump = SimcDump(
        class_slug="evoker",
        build="12.1.0.69933",
        header="test",
        spells={
            395152: SimcSpell(
                spell_id=395152,
                name="Ebon Might Test",
                raw=raw,
            )
        },
        edges={},
    )

    wowhead = EffectObservation(
        source="wowhead",
        spell_id=395152,
        spell_name="Ebon Might Test",
        effect_index=2,
        base_value=0,
        pvp_multiplier=None,
        effect_text="Apply Aura: Modify Stat With Support Triggers (540)",
        patch=None,
        url="",
        raw="",
    )

    item = {
        "spell_id": 395152,
        "talent_name": "Ebon Might",
        "side": "drustvar",
        "reason": "UNMATCHED_DRUSTVAR_EFFECT",
        "source_build": "12.1.0.69587",
        "game_effect_id": 1035394,
        "multiplier": 1.25,
        "effect_text": "Apply Aura (6) | Modify Stat With Support Triggers (540)",
    }

    resolved = pipeline._superseded_drustvar_effect(
        item,
        simc_dump=dump,
        wowhead_by_spell={395152: [wowhead]},
    )

    assert resolved is not None
    assert resolved["reason"] == "SUPERSEDED_DRUSTVAR_EFFECT"
    assert resolved["current_multiplier"] == 1.0
    assert resolved["effect_index"] == 2
    assert resolved["resolved_by"] == [
        "wowhead",
        "simc_exact_build",
    ]

def test_superseded_drustvar_accepts_exact_build_hotfix_with_stale_wowhead_semantics():
    """Exact hotfix provenance can resolve a stale source without text agreement."""
    raw = (
        "Name             : Ebon Might Test (id=395152)\n"
        "#2 (id=1035394) : Apply Aura (6) | Modify Stat With Support Triggers (540)\n"
        "Base Value: 0\n"
        "Hotfixed         : PvP Coefficient (1.25 -> 1)\n"
    )

    dump = SimcDump(
        class_slug="evoker",
        build="12.1.0.69933",
        header="test",
        spells={
            395152: SimcSpell(
                spell_id=395152,
                name="Ebon Might Test",
                raw=raw,
            )
        },
        edges={},
    )

    # Mirrors the real source-shape problem: Wowhead's wording for the
    # same effect index can lag/change independently from SimC semantics.
    stale_wowhead = EffectObservation(
        source="wowhead",
        spell_id=395152,
        spell_name="Ebon Might Test",
        effect_index=2,
        base_value=0,
        pvp_multiplier=1.25,
        effect_text="Apply Aura: Modify Critical Strike Chance % (1)",
        patch=None,
        url="",
        raw="",
    )

    item = {
        "spell_id": 395152,
        "talent_name": "Ebon Might",
        "side": "drustvar",
        "reason": "UNMATCHED_DRUSTVAR_EFFECT",
        "source_build": "12.1.0.69587",
        "game_effect_id": 1035394,
        "multiplier": 1.25,
        "effect_text": "Apply Aura (6) | Modify Stat With Support Triggers (540)",
    }

    resolved = pipeline._superseded_drustvar_effect(
        item,
        simc_dump=dump,
        wowhead_by_spell={395152: [stale_wowhead]},
    )

    assert resolved is not None
    assert resolved["reason"] == "SUPERSEDED_DRUSTVAR_EFFECT"
    assert resolved["previous_multiplier"] == 1.25
    assert resolved["current_multiplier"] == 1.0
    assert resolved["effect_index"] == 2
    assert resolved["resolved_by"] == ["simc_exact_build_hotfix"]

    # The historical transition must actually start at the stale
    # observation. Do not use build freshness alone to hide a conflict.
    assert pipeline._superseded_drustvar_effect(
        {**item, "multiplier": 1.2},
        simc_dump=dump,
        wowhead_by_spell={395152: [stale_wowhead]},
    ) is None




def test_generated_exact_build_supersedes_older_drustvar_when_wowhead_is_missing():
    dump = SimcDump(
        class_slug="hunter",
        build="12.1.0.69933",
        header="test",
        spells={},
        edges={},
        source_ref="exact-build",
    )

    generated = {
        1266081: {
            1: SimcEffect(
                effect_index=1,
                effect_text="School Damage (2)",
                base_value=0,
                sp_coefficient=None,
                pvp_coefficient=0.595,
                ap_coefficient=2.844,
                game_effect_id=1278279,
            )
        }
    }

    stale = EffectObservation(
        source="drustvar",
        spell_id=1266081,
        spell_name="Moonlight Chakram",
        effect_index=1278279,
        base_value=None,
        pvp_multiplier=0.7,
        effect_text="School Damage (2): physical",
        patch="12.1.0.69587",
        url="",
        raw="",
    )

    rows, resolved = (
        pipeline
        ._build_generated_simc_fallback_rows(
            spell_ids={1266081},
            talent_by_spell={
                1266081: {
                    "talent_name":
                        "Moonlight Chakram",
                    "class_name":
                        "Hunter",
                    "spec_name":
                        "Survival",
                }
            },
            drustvar_by_spell={
                1266081: [stale]
            },
            generated_effects_by_spell=
                generated,
            simc_dump=dump,
        )
    )

    assert resolved == {1266081}
    assert len(rows) == 1

    row = rows[0]

    assert row["effect_index"] == 1
    assert row["pvp_multiplier"] == 0.595
    assert row["simc_ap_coefficient"] == 2.844
    assert row["drustvar_multiplier"] == 0.7
    assert row["sources"] == [
        "simc_generated"
    ]
    assert (
        row["match_reason"]
        == "simc_generated_exact_build_stale_drustvar"
    )
    assert (
        row["source_notes"][0]["reason"]
        == "SUPERSEDED_DRUSTVAR_EFFECT"
    )
    assert (
        row["source_notes"][0]["source_build"]
        == "12.1.0.69587"
    )
    assert (
        row["source_notes"][0]["current_build"]
        == "12.1.0.69933"
    )


def test_generated_exact_build_does_not_hide_same_build_conflict():
    dump = SimcDump(
        class_slug="hunter",
        build="12.1.0.69933",
        header="test",
        spells={},
        edges={},
    )

    generated = {
        1266081: {
            1: SimcEffect(
                effect_index=1,
                effect_text="School Damage (2)",
                base_value=0,
                sp_coefficient=None,
                pvp_coefficient=0.595,
                ap_coefficient=2.844,
                game_effect_id=1278279,
            )
        }
    }

    current_conflict = EffectObservation(
        source="drustvar",
        spell_id=1266081,
        spell_name="Moonlight Chakram",
        effect_index=1278279,
        base_value=None,
        pvp_multiplier=0.7,
        effect_text="School Damage (2): physical",
        patch="12.1.0.69933",
        url="",
        raw="",
    )

    rows, resolved = (
        pipeline
        ._build_generated_simc_fallback_rows(
            spell_ids={1266081},
            talent_by_spell={1266081: {}},
            drustvar_by_spell={
                1266081: [current_conflict]
            },
            generated_effects_by_spell=
                generated,
            simc_dump=dump,
        )
    )

    assert rows == []
    assert resolved == set()



def test_generated_exact_enrichment_replaces_only_proven_stale_multiplier():
    rows = [
        {
            "spell_id": 429647,
            "source_spell_id": 429647,
            "effect_index": 1,
            "base_value": 25,
            "pvp_multiplier": 0.6,
            "pvp_value": 15,
            "sources": ["wowhead"],
        },
        {
            "spell_id": 429647,
            "source_spell_id": 429647,
            "effect_index": 3,
            "base_value": 25,
            "pvp_multiplier": 0.6,
            "pvp_value": 15,
            "sources": ["wowhead"],
        },
    ]

    generated = {
        429647: {
            1: SimcEffect(
                effect_index=1,
                effect_text="Apply Aura (6) | Aura Type (108)",
                base_value=25,
                sp_coefficient=None,
                pvp_coefficient=1.2,
                game_effect_id=1114022,
                reference_contexts=(
                    "Mortal Strike and Slam damage increased by $s1%.",
                ),
                unit_hint="percent",
            ),
            3: SimcEffect(
                effect_index=3,
                effect_text="Apply Aura (6) | Aura Type (108)",
                base_value=25,
                sp_coefficient=None,
                pvp_coefficient=0.6,
                game_effect_id=1210713,
                reference_contexts=(
                    "Shield Slam damage increased by $s3%.",
                ),
                unit_hint="percent",
            ),
        }
    }

    notes = [
        {
            "spell_id": 429647,
            "reason": "SUPERSEDED_DRUSTVAR_EFFECT",
            "effect_index": 1,
            "multiplier": 0.6,
            "previous_multiplier": 0.6,
            "current_multiplier": 1.2,
        }
    ]

    pipeline._enrich_rows_from_generated_exact(
        rows,
        generated_effects_by_spell=generated,
        source_notes=notes,
    )

    assert rows[0]["pvp_multiplier"] == 1.2
    assert rows[0]["pvp_value"] == 30
    assert rows[0]["reference_context_strict"] is True
    assert rows[0]["semantic_unit_hint"] == "percent"
    assert "simc_generated" in rows[0]["sources"]

    assert rows[1]["pvp_multiplier"] == 0.6
    assert rows[1]["pvp_value"] == 15
    assert rows[1]["reference_context_strict"] is True


def test_generated_exact_enrichment_never_overrides_unproven_conflict():
    rows = [
        {
            "spell_id": 10,
            "effect_index": 1,
            "base_value": 20,
            "pvp_multiplier": 0.5,
            "pvp_value": 10,
            "sources": ["wowhead"],
        }
    ]

    generated = {
        10: {
            1: SimcEffect(
                effect_index=1,
                effect_text="Dummy (3)",
                base_value=20,
                sp_coefficient=None,
                pvp_coefficient=0.75,
                game_effect_id=1001,
            )
        }
    }

    pipeline._enrich_rows_from_generated_exact(
        rows,
        generated_effects_by_spell=generated,
        source_notes=[],
    )

    assert rows[0]["pvp_multiplier"] == 0.5
    assert rows[0]["pvp_value"] == 10
