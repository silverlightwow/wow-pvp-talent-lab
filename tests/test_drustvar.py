from pvpcalc.sources.drustvar import (
    current_version,
    parse_spell_payload,
    normalize_current_auras,
)


def test_drustvar_inner_quietus_current_build():

    payload = {
        "versions": [
            "12.1.0.69587",
            "12.1.0.69497",
        ],
        "spells": [
            {
                "id": 448278,
                "name": "Inner Quietus",
                "effects": [
                    {
                        "id": 1744,
                        "effect_id": 1151713,
                        "description": (
                            "Apply Aura (6) | "
                            "Add Percent Modifier (108): "
                            "Spell Power (24)"
                        ),
                        "values": [
                            {
                                "version": "12.1.0.69497",
                                "value": "200",
                            },
                            {
                                "version": "12.1.0.69587",
                                "value": "250",
                            },
                        ],
                    }
                ],
            }
        ],
    }

    result = parse_spell_payload(
        payload,
        "priest",
    )

    assert current_version(payload) == "12.1.0.69587"

    assert len(result) == 1

    effect = result[0]

    assert effect.spell_id == 448278
    assert effect.pvp_multiplier == 2.5

    # Must take EXACT current build, not older 200%.
    assert effect.patch == "12.1.0.69587"


def test_pvp_aura_is_not_misinterpreted_as_spell_effectiveness():

    payload = {
        "versions": ["12.1.0.69587"],
        "auras": [
            {
                "id": 1256903,
                "name": "Discipline Priest",
                "class": "Priest",
                "spec": "Discipline",
                "class_slug": "discipline-priest",
                "effects": [
                    {
                        "id": 129,
                        "effect_id": 1264805,
                        "description": (
                            "PVP Multiplier: "
                            "Direct Amount (0)"
                        ),
                        "effect_type": "direct",
                        "affected_spells": [
                            {
                                "id": 585,
                                "name": "Smite",
                            }
                        ],
                        "values": [
                            {
                                "version": "12.1.0.69587",
                                "value": "50",
                                "is_hotfixed": False,
                            }
                        ],
                    }
                ],
            }
        ],
    }

    rows = normalize_current_auras(payload)

    assert len(rows) == 1

    row = rows[0]

    assert row["modifier_value"] == 50
    assert "pvp_multiplier" not in row

    assert row["affected_spells"][0]["id"] == 585
