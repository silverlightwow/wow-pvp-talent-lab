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
