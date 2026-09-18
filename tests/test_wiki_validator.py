from pvpcalc.models import (
    EffectObservation,
    WikiObservation,
)

from pvpcalc.validator import (
    summarize_history_evidence,
)


def effect(
    index,
    affected,
):
    return EffectObservation(
        source="wowhead",
        spell_id=448278,
        spell_name="Inner Quietus",
        effect_index=index,
        base_value=20.0,
        pvp_multiplier=1.0,
        effect_text="Test",
        raw=(
            "Test\n"
            "Affected Spells:\n"
            + "\n".join(affected)
        ),
    )


def test_spell_specific_history_does_not_leak():

    effects = [
        effect(
            1,
            [
                "Shadow Word: Pain",
                "Vampiric Touch",
            ],
        ),
        effect(
            2,
            [
                "Power Word: Shield",
                "Void Shield",
            ],
        ),
        effect(
            3,
            [
                "Shadow Word: Pain",
                "Vampiric Touch",
            ],
        ),
    ]

    wiki = WikiObservation(
        source="warcraft_wiki",
        spell_id=448278,
        spell_name="Inner Quietus",
        current_tooltip="",
        pvp_notes=[],
        page_url="test",
        changes=[
            {
                "date": "2025-03-11",
                "type": "hotfix",
                "version": None,
                "is_pvp": True,
                "text": (
                    "Now 25% more effective "
                    "in PvP combat."
                ),
            },
            {
                "date": "2024-12-17",
                "type": "patch",
                "version": "11.0.7",
                "is_pvp": True,
                "text": (
                    "Now increases "
                    "[ Power Word: Shield ] "
                    "'s absorption by 40% "
                    "in PvP combat."
                ),
            },
        ],
    )

    summaries = [
        summarize_history_evidence(
            effect_,
            wiki,
            all_wowhead_effects=effects,
        )
        for effect_ in effects
    ]

    assert [
        x["history_evidence_count"]
        for x in summaries
    ] == [
        1,
        2,
        1,
    ]

    assert [
        x["effect_related_history_count"]
        for x in summaries
    ] == [
        0,
        1,
        0,
    ]

    assert [
        x["talent_wide_history_count"]
        for x in summaries
    ] == [
        1,
        1,
        1,
    ]
