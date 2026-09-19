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



def test_label_modify_effect_rule_targets_exact_effect():

    payload = {
        "versions": [
            "12.1.0.test",
        ],
        "auras": [
            {
                "id": 9000,
                "name": "Blood Death Knight",
                "spec": "Blood",
                "effects": [
                    {
                        "id": 10,
                        "effect_id": 5010,
                        "description": (
                            "PVP Multiplier (Label): "
                            "Modify Effect 2 (6)"
                        ),
                        "family_flags": 0,
                        "label_id": 4192,
                        "affected_spells": [],
                        "values": [
                            {
                                "version": "12.1.0.test",
                                "value": "-50",
                                "is_hotfixed": True,
                            }
                        ],
                    }
                ],
            }
        ],
    }

    rules = normalize_current_spec_aura(
        payload,
        spec_name="Blood",
        class_name="Death Knight",
    )

    assert len(rules) == 1
    assert rules[0].amount_kind == "effect:2"
    assert rules[0].label_id == 4192
    assert rules[0].factor == 0.5

    assert len(
        rules_for_spell(
            rules,
            12345,
            amount_kind=None,
            effect_index=2,
            spell_label_ids=(4192,),
        )
    ) == 1

    assert rules_for_spell(
        rules,
        12345,
        amount_kind=None,
        effect_index=1,
        spell_label_ids=(4192,),
    ) == []

    assert rules_for_spell(
        rules,
        12345,
        amount_kind=None,
        effect_index=2,
        spell_label_ids=(9999,),
    ) == []


def test_label_direct_amount_rule_uses_label_membership_and_kind():

    payload = {
        "versions": [
            "12.1.0.test",
        ],
        "auras": [
            {
                "id": 9001,
                "name": "Unholy Death Knight",
                "spec": "Unholy",
                "effects": [
                    {
                        "id": 11,
                        "effect_id": 5011,
                        "description": (
                            "PVP Multiplier (Label): "
                            "Direct Amount (0)"
                        ),
                        "family_flags": 0,
                        "label_id": 2915,
                        "affected_spells": [],
                        "values": [
                            {
                                "version": "12.1.0.test",
                                "value": "18",
                            }
                        ],
                    }
                ],
            }
        ],
    }

    rules = normalize_current_spec_aura(
        payload,
        spec_name="Unholy",
        class_name="Death Knight",
    )

    assert len(rules) == 1
    assert rules[0].amount_kind == "direct"
    assert rules[0].factor == 1.18

    assert len(
        rules_for_spell(
            rules,
            54321,
            amount_kind="direct",
            effect_index=1,
            spell_label_ids=(2915,),
        )
    ) == 1

    assert rules_for_spell(
        rules,
        54321,
        amount_kind="periodic",
        effect_index=1,
        spell_label_ids=(2915,),
    ) == []


def test_missing_spec_pvp_aura_is_valid_identity_state():

    payload = {
        "versions": [
            "12.1.0.test",
        ],
        "auras": [],
    }

    assert normalize_current_spec_aura(
        payload,
        spec_name="Test",
        class_name="Test",
    ) == []
