from pvpcalc.pvp_aura import (
    normalize_current_spec_aura,
    rules_for_spell,
    combined_aura_factor,
)


def test_pvp_aura_percent_semantics():

    payload = {
        "versions": [
            "12.1.0.test",
        ],

        "auras": [
            {
                "id": 1256903,
                "name": "Discipline Priest",
                "spec": "Discipline",

                "effects": [
                    {
                        "id": 1,
                        "effect_id": 1001,
                        "description": (
                            "PVP Multiplier: "
                            "Absorb Amount (2)"
                        ),
                        "family_flags": 0,
                        "label_id": None,

                        "affected_spells": [
                            {
                                "id": 17,
                                "name":
                                    "Power Word: Shield",
                            }
                        ],

                        "values": [
                            {
                                "version":
                                    "12.1.0.test",
                                "value": "3",
                                "is_hotfixed": False,
                            }
                        ],
                    },

                    {
                        "id": 2,
                        "effect_id": 1002,
                        "description": (
                            "PVP Multiplier: "
                            "Absorb Amount (2)"
                        ),
                        "family_flags": 0,
                        "label_id": None,

                        "affected_spells": [
                            {
                                "id": 17,
                                "name":
                                    "Power Word: Shield",
                            }
                        ],

                        "values": [
                            {
                                "version":
                                    "12.1.0.test",
                                "value": "-8",
                                "is_hotfixed": False,
                            }
                        ],
                    },

                    # Historical-only duplicate:
                    # must NOT enter current state.
                    {
                        "id": 3,
                        "effect_id": 1003,
                        "description": (
                            "PVP Multiplier: "
                            "Absorb Amount (2)"
                        ),
                        "affected_spells": [
                            {
                                "id": 17,
                                "name":
                                    "Power Word: Shield",
                            }
                        ],
                        "values": [
                            {
                                "version":
                                    "12.0.7.old",
                                "value": "-20",
                            }
                        ],
                    },
                ],
            }
        ],
    }

    rules = normalize_current_spec_aura(
        payload,
        spec_name="Discipline",
    )

    assert len(rules) == 2

    assert [
        rule.value_pct
        for rule in rules
    ] == [
        3.0,
        -8.0,
    ]

    pws = rules_for_spell(
        rules,
        17,
        amount_kind="absorb",
    )

    assert len(pws) == 2

    expected = (
        (1 + 3 / 100)
        * (1 - 8 / 100)
    )

    actual = combined_aura_factor(
        rules,
        17,
        amount_kind="absorb",
    )

    assert abs(
        actual - expected
    ) < 1e-12
