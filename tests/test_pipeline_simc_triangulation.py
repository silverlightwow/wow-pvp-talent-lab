from pvpcalc import pipeline, tooltip_renderer
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

    same_build = resolve(dict(item, source_build=dump.build))
    assert same_build is not None
    assert same_build["reason"] == "SUPERSEDED_DRUSTVAR_EFFECT"
    assert same_build["current_multiplier"] == -1
    assert same_build["source_build_relation"] == "same_build_conflict"
    assert same_build["resolved_by"] == [
        "wowhead",
        "simc_exact_build",
    ]

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


def test_practiced_strikes_exact_build_enrichment_renders_without_review():
    row = {
        "spell_id": 429647,
        "source_spell_id": 429647,
        "effect_index": 1,
        "effect_text": (
            "Apply Aura (6) | Add Percent Modifier (108): "
            "Spell Direct Amount (0)"
        ),
        "base_value": 25,
        "pvp_multiplier": 0.6,
        "pvp_value": 15,
        "sources": ["wowhead"],
    }

    generated = {
        429647: {
            1: SimcEffect(
                effect_index=1,
                effect_text=row["effect_text"],
                base_value=25,
                sp_coefficient=None,
                pvp_coefficient=1.2,
                game_effect_id=1114022,
                reference_contexts=(
                    "Mortal Strike and Slam damage increased by $s1%.",
                ),
                unit_hint="percent",
            )
        }
    }

    note = {
        "spell_id": 429647,
        "reason": "SUPERSEDED_DRUSTVAR_EFFECT",
        "effect_index": 1,
        "multiplier": 0.6,
        "previous_multiplier": 0.6,
        "current_multiplier": 1.2,
        "resolved_by": ["simc_exact_build_hotfix"],
    }

    rows = [row]
    pipeline._enrich_rows_from_generated_exact(
        rows,
        generated_effects_by_spell=generated,
        source_notes=[note],
    )
    pipeline._annotate_final_pvp_layers(
        rows,
        [],
    )

    rendered = tooltip_renderer.render_pvp_tooltip(
        tooltip=(
            "Mortal Strike and Slam damage increased by 25%.\n\n"
            "Cleave and Whirlwind damage increased by 25%."
        ),
        spec_name="Arms",
        spec_names=["Arms", "Fury", "Protection"],
        effect_rows=rows,
    )

    assert rendered["render_status"] == "COMPLETE"
    assert "Mortal Strike and Slam damage increased by 30%." in rendered["pvp_tooltip"]
    assert "Cleave and Whirlwind damage increased by 25%." in rendered["pvp_tooltip"]
    assert not any(
        item.get("status") == "REVIEW_REQUIRED"
        for item in rendered["diagnostics"]
    )


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


def test_generated_exact_build_uses_human_dump_semantics_for_generic_db2_labels():
    """Generic DB2 labels can borrow exact-build dump semantics for identity."""
    raw = (
        "Name             : Mind Flay: Insanity (id=391403)\n"
        "Effects          :\n"
        "#1 (id=1028897)  : Apply Aura (6) | Periodic Damage (3): "
        "shadow every 0.375 seconds\n"
        "                   Base Value: 0 | SP Coefficient: 1.55929 | "
        "PvP Coefficient: 0.76\n"
        "Hotfixed         : PvP Coefficient (0.875 -> 0.76)\n"
    )

    dump = SimcDump(
        class_slug="priest",
        build="12.1.0.69933",
        header="test",
        spells={
            391403: SimcSpell(
                spell_id=391403,
                name="Mind Flay: Insanity",
                raw=raw,
            )
        },
        edges={},
    )

    generated = {
        391403: {
            1: SimcEffect(
                effect_index=1,
                effect_text="Apply Aura (6) | Aura Type (3)",
                base_value=0,
                sp_coefficient=1.55929,
                pvp_coefficient=0.76,
                ap_coefficient=None,
                game_effect_id=1028897,
            )
        }
    }

    stale = EffectObservation(
        source="drustvar",
        spell_id=391403,
        spell_name="Mind Flay: Insanity",
        effect_index=1028897,
        base_value=None,
        pvp_multiplier=0.87,
        effect_text=(
            "Apply Aura (6) | Periodic Damage (3): "
            "shadow every 0.75 seconds"
        ),
        patch="12.1.0.69587",
        url="",
        raw="",
    )

    rows, resolved = (
        pipeline
        ._build_generated_simc_fallback_rows(
            spell_ids={391403},
            talent_by_spell={
                391403: {
                    "talent_name":
                        "Manifested Power",
                    "class_name":
                        "Priest",
                    "spec_name":
                        "Holy",
                }
            },
            drustvar_by_spell={
                391403: [stale]
            },
            generated_effects_by_spell=
                generated,
            simc_dump=dump,
        )
    )

    assert resolved == {391403}
    assert len(rows) == 1

    row = rows[0]

    assert row["effect_index"] == 1
    assert row["pvp_multiplier"] == 0.76
    assert row["simc_sp_coefficient"] == 1.55929
    assert row["drustvar_multiplier"] == 0.87
    assert (
        row["match_reason"]
        == "simc_generated_exact_build_stale_drustvar"
    )
    assert (
        "Periodic Damage (3)"
        in row["drustvar_effect_text"]
    )
    assert (
        row["source_notes"][0][
            "game_effect_id"
        ]
        == 1028897
    )


def test_same_build_drustvar_conflict_is_kept_only_when_two_current_sources_agree():
    """Regression: Drustvar may stamp a stale row with the current build."""
    from pathlib import Path
    from dataclasses import replace
    from pvpcalc.sources.simc import parse_dump

    dump = parse_dump(
        Path("tests/fixtures/simc-1266151.txt").read_text(),
        class_slug="evoker",
    )
    wowhead = EffectObservation(
        source="wowhead",
        spell_id=1266151,
        spell_name="Strafing Run",
        effect_index=1,
        base_value=20,
        pvp_multiplier=-1,
        effect_text="Apply Aura: Modifies Periodic Damage/Healing Done (22)",
        patch=None,
        url="",
        raw="",
    )
    item = {
        "spell_id": 1266151,
        "talent_name": "Strafing Run",
        "side": "drustvar",
        "reason": "UNMATCHED_DRUSTVAR_EFFECT",
        "source_build": dump.build,
        "game_effect_id": 1278387,
        "multiplier": 0,
        "effect_text": (
            "Apply Aura (6) | Add Percent Modifier (108): "
            "Spell Direct Amount (0)"
        ),
    }

    resolved = pipeline._superseded_drustvar_effect(
        item,
        simc_dump=dump,
        wowhead_by_spell={1266151: [wowhead]},
    )
    assert resolved is not None
    assert resolved["current_multiplier"] == -1

    # Never hide a real two-source disagreement.
    conflict = replace(wowhead, pvp_multiplier=0)
    assert pipeline._superseded_drustvar_effect(
        item,
        simc_dump=dump,
        wowhead_by_spell={1266151: [conflict]},
    ) is None



def test_one_hop_embedded_spelldesc_coefficients_are_renderable():
    from pvpcalc.pipeline import SpecAuditResult

    direct_child = {
        "spell_id": 441591,
        "talent_spell_id": 441583,
        "source_spell_id": 441591,
        "effect_index": 1,
        "effect_origin": "DEPENDENCY",
        "dependency_kind": "EMBEDDED",
        "dependency_path": [441583, 441591],
        "dependency_relations": ["spelldesc_ref"],
        "dependency_effect_referenced": False,
        "effect_text": "School Damage (Physical) (AP mod: 2.0416 )",
        "base_value": None,
        "final_pvp_value": None,
        "final_pvp_multiplier": 1.056,
        "is_final_pvp_modified": True,
        "sources": ["wowhead", "drustvar", "simc"],
    }
    nested_internal = {
        **direct_child,
        "source_spell_id": 106951,
        "effect_index": 3,
        "dependency_path": [441583, 441591, 106951],
        "dependency_relations": ["spelldesc_ref", "tooltip_value_ref"],
        "effect_text": "Apply Aura: Modifies Damage/Healing Done",
        "base_value": 15,
        "final_pvp_value": 5,
    }

    audit = SpecAuditResult(
        class_name="Druid",
        spec_name="Feral",
        metadata={},
        drustvar_builds=[],
        talents=[],
        spell_ids=[],
        wowhead_by_spell={},
        drustvar_by_spell={},
        wowhead_candidate_ids=set(),
        drustvar_candidate_ids=set(),
        candidate_ids=set(),
        effect_rows=[],
        dependency_effect_rows=[direct_child, nested_internal],
    )

    rows = audit.render_effect_rows
    assert direct_child in rows
    assert nested_internal not in rows



def test_nested_embedded_spelldesc_value_reference_is_renderable():
    from pvpcalc.pipeline import SpecAuditResult

    nested_visible = {
        "spell_id": 443038,
        "talent_spell_id": 1248989,
        "source_spell_id": 443038,
        "effect_index": 1,
        "effect_origin": "DEPENDENCY",
        "dependency_kind": "EMBEDDED",
        "dependency_path": [1248989, 443028, 443038],
        "dependency_relations": ["spelldesc_ref", "tooltip_value_ref"],
        "dependency_effect_referenced": True,
        "effect_text": "School Damage (Nature) (AP mod: 1.65 )",
        "base_value": None,
        "final_pvp_value": None,
        "final_pvp_multiplier": 1.395,
        "is_final_pvp_modified": True,
        "sources": ["wowhead", "simc"],
    }
    nested_internal = {
        **nested_visible,
        "source_spell_id": 999999,
        "effect_index": 2,
        "dependency_path": [1248989, 443028, 999999],
        "dependency_relations": ["spelldesc_ref", "runtime_ref"],
    }

    audit = SpecAuditResult(
        class_name="Monk",
        spec_name="Windwalker",
        metadata={},
        drustvar_builds=[],
        talents=[],
        spell_ids=[],
        wowhead_by_spell={},
        drustvar_by_spell={},
        wowhead_candidate_ids=set(),
        drustvar_candidate_ids=set(),
        candidate_ids=set(),
        effect_rows=[],
        dependency_effect_rows=[nested_visible, nested_internal],
    )

    rows = audit.render_effect_rows
    assert nested_visible in rows
    assert nested_internal not in rows


def test_current_drustvar_hotfix_overrides_same_build_stale_sources():
    """Server-side hotfixes can land without a new client build."""
    from pathlib import Path
    from pvpcalc.sources.simc import parse_dump

    dump = parse_dump(
        Path("tests/fixtures/simc-1266151.txt").read_text(),
        class_slug="evoker",
    )
    effect = next(
        effect
        for effect in pipeline.simc.parse_spell_effects(
            dump.spells[1266151]
        ).values()
        if effect.game_effect_id == 1278387
    )

    row = {
        "spell_id": 1266151,
        "source_spell_id": 1266151,
        "effect_index": effect.effect_index,
        "base_value": 20.0,
        "pvp_multiplier": effect.pvp_coefficient,
        "pvp_value": 20.0 * float(effect.pvp_coefficient),
        "is_pvp_modified": True,
        "sources": ["wowhead", "simc"],
        "confidence": "high",
        "drustvar_matched": False,
    }
    unresolved = [{
        "spell_id": 1266151,
        "reason": "UNMATCHED_DRUSTVAR_EFFECT",
        "source_build": dump.build,
        "game_effect_id": 1278387,
        "multiplier": 0.0,
        "effect_text": "Apply Aura | Add Percent Modifier",
        "is_hotfixed": True,
    }]

    remaining = pipeline._apply_current_drustvar_hotfix_overrides(
        [row],
        unresolved,
        simc_dump=dump,
    )

    assert remaining == []
    assert row["pvp_multiplier"] == 0.0
    assert row["pvp_value"] == 0.0
    assert row["pvp_multiplier_source"] == "drustvar_current_hotfix"
    assert row["drustvar_matched"] is True
    assert row["source_notes"][-1]["reason"] == "CURRENT_DRUSTVAR_HOTFIX_OVERRIDE"


def test_current_drustvar_hotfix_is_never_dismissed_as_stale():
    from pathlib import Path
    from pvpcalc.models import EffectObservation
    from pvpcalc.sources.simc import parse_dump

    dump = parse_dump(
        Path("tests/fixtures/simc-1266151.txt").read_text(),
        class_slug="evoker",
    )
    wowhead = EffectObservation(
        source="wowhead",
        spell_id=1266151,
        spell_name="Synthetic",
        effect_index=1,
        base_value=20,
        pvp_multiplier=-1,
        effect_text="Apply Aura: Modifies Periodic Damage/Healing Done (22)",
        patch=None,
        url="",
        raw="",
    )
    item = {
        "spell_id": 1266151,
        "reason": "UNMATCHED_DRUSTVAR_EFFECT",
        "source_build": dump.build,
        "game_effect_id": 1278387,
        "multiplier": 0,
        "effect_text": "Apply Aura | Add Percent Modifier",
        "is_hotfixed": True,
    }

    assert pipeline._superseded_drustvar_effect(
        item,
        simc_dump=dump,
        wowhead_by_spell={1266151: [wowhead]},
    ) is None


def test_exact_build_simc_hotfix_supersedes_stale_wowhead_multiplier():
    raw = (
        "Name             : Hotfix Test (id=100)\n"
        "#1 (id=1001) : Apply Aura: Dummy\n"
        "Base Value: 20\n"
        "PvP Coefficient: 0.5\n"
        "#2 (id=1002) : Apply Aura: Modifies Damage/Healing Done\n"
        "Base Value: 30\n"
        "Hotfixed         : PvP Coefficient (0.75 -> 0.9)\n"
    )
    dump = SimcDump(
        class_slug="test",
        build="12.1.0.69933",
        header="test",
        spells={
            100: SimcSpell(
                spell_id=100,
                name="Hotfix Test",
                raw=raw,
            )
        },
        edges={},
    )
    rows = [{
        "spell_id": 100,
        "effect_index": 2,
        "effect_text": "Apply Aura: Modifies Damage/Healing Done",
        "base_value": 30,
        "pvp_multiplier": 0.75,
        "pvp_value": 22.5,
        "is_pvp_modified": True,
        "sources": ["wowhead", "drustvar"],
        "confidence": "high",
        "conflicts": [],
    }]

    pipeline._fill_missing_base_values_from_simc(
        rows,
        dump,
    )

    row = rows[0]
    assert row["pvp_multiplier"] == 0.9
    assert row["pvp_value"] == 27.0
    assert row["pvp_multiplier_source"] == "simc_exact_build_hotfix"
    assert row["simc_hotfix_previous"] == 0.75
    assert row["simc_hotfix_current"] == 0.9
    assert "simc" in row["sources"]
    assert any(
        note.get("reason") == "SIMC_EXACT_BUILD_HOTFIX"
        for note in row["source_notes"]
    )


def test_exact_build_simc_hotfix_does_not_override_unrelated_disagreement():
    raw = (
        "Name             : Hotfix Test (id=100)\n"
        "#2 (id=1002) : Apply Aura: Modifies Damage/Healing Done\n"
        "Base Value: 30\n"
        "Hotfixed         : PvP Coefficient (0.75 -> 0.9)\n"
    )
    dump = SimcDump(
        class_slug="test",
        build="12.1.0.69933",
        header="test",
        spells={
            100: SimcSpell(
                spell_id=100,
                name="Hotfix Test",
                raw=raw,
            )
        },
        edges={},
    )
    rows = [{
        "spell_id": 100,
        "effect_index": 2,
        "effect_text": "Apply Aura: Modifies Damage/Healing Done",
        "base_value": 30,
        "pvp_multiplier": 0.7,
        "pvp_value": 21.0,
        "is_pvp_modified": True,
        "sources": ["wowhead"],
        "confidence": "medium",
        "conflicts": [],
    }]

    pipeline._fill_missing_base_values_from_simc(
        rows,
        dump,
    )

    row = rows[0]
    assert row["pvp_multiplier"] == 0.7
    assert row["pvp_value"] == 21.0
    assert row.get("pvp_multiplier_source") != "simc_exact_build_hotfix"
