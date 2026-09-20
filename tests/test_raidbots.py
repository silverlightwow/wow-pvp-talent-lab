from pvpcalc.sources.raidbots import (
    normalize_spec_tree,
)


def test_raidbots_hero_tree_and_choice():

    talents = [
        {
            "traitTreeId": 795,
            "className": "Priest",
            "classId": 5,
            "specName": "Discipline",
            "specId": 256,

            "classNodes": [],
            "specNodes": [],

            "subTreeNodes": [
                {
                    "id": 99801,
                    "name": "Oracle / Voidweaver",
                    "entries": [
                        {
                            "id": 123290,
                            "name": "Oracle",
                            "traitSubTreeId": 20,
                            "traitTreeId": 795,
                            "nodes": [],
                        },
                        {
                            "id": 123288,
                            "name": "Voidweaver",
                            "traitSubTreeId": 18,
                            "traitTreeId": 795,
                            "nodes": [
                                94670,
                                94695,
                            ],
                        },
                    ],
                }
            ],

            "heroNodes": [
                {
                    "id": 94670,
                    "name": "Inner Quietus",
                    "type": "single",
                    "posX": 9000,
                    "posY": 5100,
                    "subTreeId": 18,
                    "prev": [110008],
                    "next": [100212],
                    "entries": [
                        {
                            "id": 117273,
                            "definitionId": 122285,
                            "type": "passive",
                            "name": "Inner Quietus",
                            "spellId": 448278,
                            "index": 100,
                        }
                    ],
                },

                {
                    "id": 94695,
                    "name": (
                        "Void Empowerment / "
                        "Darkening Horizon"
                    ),
                    "type": "choice",
                    "posX": 8400,
                    "posY": 5700,
                    "subTreeId": 18,
                    "prev": [],
                    "next": [],
                    "entries": [
                        {
                            "id": 125821,
                            "definitionId": 128681,
                            "name": "Void Empowerment",
                            "spellId": 450138,
                            "index": 100,
                        },
                        {
                            "id": 125982,
                            "definitionId": 130813,
                            "name": "Darkening Horizon",
                            "spellId": 449912,
                            "index": 200,
                        },
                    ],
                },
            ],
        }
    ]

    rows = normalize_spec_tree(
        talents,
        class_name="Priest",
        spec_name="Discipline",
        wow_build="12.1.0.69814",
        generated_at="test",
        content_hash="testhash",
    )

    assert len(rows) == 3

    iq = next(
        row
        for row in rows
        if row["spell_id"] == 448278
    )

    assert iq["tree_type"] == "hero"
    assert iq["hero_tree"] == "Voidweaver"
    assert iq["subtree_id"] == 18
    assert iq["node_id"] == 94670
    assert iq["entry_id"] == 117273

    choice = [
        row
        for row in rows
        if row["node_id"] == 94695
    ]

    assert len(choice) == 2

    assert {
        row["spell_id"]
        for row in choice
    } == {
        450138,
        449912,
    }


def test_required_point_gates_are_preserved():
    from pvpcalc.sources.raidbots import _normalize_collection
    rows = _normalize_collection(
        [dict(id=1, name='Gated talent', reqPoints=20, entries=[dict(id=2, spellId=3)])],
        tree_type='spec', hero_trees={}, class_name='Test', class_id=1,
        spec_name='Test', spec_id=1, trait_tree_id=1, wow_build='test',
        generated_at='test', content_hash='test',
    )
    assert rows[0]['required_points'] == 20
