from pvpcalc.models import EffectObservation
from pvpcalc.reconcile import (
    resolve_effect_matches,
    reconcile,
)


def obs(
    source,
    index,
    multiplier,
    text,
):
    return EffectObservation(
        source=source,
        spell_id=1,
        spell_name="Test",
        effect_index=index,
        base_value=20.0,
        pvp_multiplier=multiplier,
        effect_text=text,
    )


def test_rounded_multiplier_matches():

    wh = [
        obs(
            "wowhead",
            1,
            0.667,
            "Apply Aura: Mod Stat - % (Stamina)",
        )
    ]

    dr = [
        obs(
            "drustvar",
            0,
            0.66,
            "Apply Aura (6) | Add Percent Modifier (108): Stamina",
        )
    ]

    result = reconcile(
        wh,
        dr,
    )

    assert result[0].sources == [
        "wowhead",
        "drustvar",
    ]

    # Keep the more precise Wowhead value.
    assert result[0].pvp_multiplier == 0.667


def test_repeated_multiplier_uses_effect_semantics():

    wh = [
        obs(
            "wowhead",
            1,
            0.5,
            "Apply Aura: Modifies Power Cost (14)",
        ),
        obs(
            "wowhead",
            5,
            0.5,
            "Apply Aura: Modifies Resource Generation (34)",
        ),
        obs(
            "wowhead",
            6,
            0.5,
            "Apply Aura: Modifies Power Cost (39)",
        ),
    ]

    dr = [
        obs(
            "drustvar",
            0,
            0.5,
            "Apply Aura (6) | Add Percent Modifier (108): Spell Cost (14)",
        ),
        obs(
            "drustvar",
            0,
            0.5,
            "Apply Aura (6) | Add Percent Modifier (108): Resource Generation (34)",
        ),
        obs(
            "drustvar",
            0,
            0.5,
            "Apply Aura (6) | Add Percent Modifier (108): Spell Cost (39)",
        ),
    ]

    resolution = resolve_effect_matches(
        wh,
        dr,
    )

    assert len(
        resolution["matches"]
    ) == 3

    assert not resolution[
        "unmatched_drustvar"
    ]


def test_repeated_multiplier_does_not_guess_tie():

    wh = [
        obs(
            "wowhead",
            1,
            0.5,
            "Apply Aura: Dummy",
        ),
        obs(
            "wowhead",
            2,
            0.5,
            "Apply Aura: Dummy",
        ),
    ]

    dr = [
        obs(
            "drustvar",
            0,
            0.5,
            "Apply Aura (6) | Dummy (4)",
        ),
        obs(
            "drustvar",
            0,
            0.5,
            "Apply Aura (6) | Dummy (4)",
        ),
    ]

    resolution = resolve_effect_matches(
        wh,
        dr,
    )

    assert len(
        resolution["matches"]
    ) == 0

    assert len(
        resolution["unmatched_drustvar"]
    ) == 2



def test_semantic_match_unlocks_residual_unique_pair():

    wh = [
        obs(
            "wowhead",
            4,
            0.375,
            "Apply Aura: Modifies Damage/Healing Done",
        ),
        obs(
            "wowhead",
            5,
            0.375,
            (
                "Apply Aura: Modifies Periodic "
                "Damage/Healing Done (22)"
            ),
        ),
    ]

    dr = [
        obs(
            "drustvar",
            0,
            0.37,
            "Completely Unknown Modifier",
        ),
        obs(
            "drustvar",
            0,
            0.37,
            (
                "Apply Aura (6) | "
                "Add Percent Modifier (108): "
                "Periodic Damage/Healing Done (22)"
            ),
        ),
    ]

    resolution = resolve_effect_matches(
        wh,
        dr,
    )

    assert len(
        resolution["matches"]
    ) == 2

    assert not resolution[
        "unmatched_drustvar"
    ]

    assert not resolution[
        "unmatched_wowhead"
    ]

    matched_indices = {
        match.wowhead.effect_index
        for match in resolution["matches"]
    }

    assert matched_indices == {
        4,
        5,
    }

    reasons = {
        match.reason
        for match in resolution["matches"]
    }

    assert "semantic" in reasons
    assert "residual_unique" in reasons
