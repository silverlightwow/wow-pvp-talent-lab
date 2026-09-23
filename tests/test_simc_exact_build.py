import asyncio

from pvpcalc.sources import simc


class FakeClient:
    def __init__(self):
        self.text_urls = []
        self.json_calls = []

    async def get_text(self, url):
        self.text_urls.append(url)

        if "/midnight/" in url:
            return (
                "SimulationCraft test for World of Warcraft "
                "12.1.0.69875 Live\n"
            )

        if "/0908ace/" in url:
            return (
                "SimulationCraft test for World of Warcraft "
                "12.1.0.69814 Live\n"
            )

        raise AssertionError(url)

    async def get_json(self, url, params=None):
        self.json_calls.append((url, params))

        return [
            {
                "sha": "0908ace",
                "commit": {
                    "message": (
                        "[live] Game data update "
                        "(Build 69814)"
                    )
                },
            }
        ]


def test_fetch_dump_pins_previous_exact_build():
    client = FakeClient()

    dump = asyncio.run(
        simc.fetch_dump(
            client,
            "Priest",
            target_build="12.1.0.69814",
        )
    )

    assert dump.build == "12.1.0.69814"
    assert any(
        "/0908ace/SpellDataDump/priest.txt"
        in url
        for url in client.text_urls
    )

    assert client.json_calls
    _, params = client.json_calls[0]
    assert params["sha"] == "midnight"
    assert params["path"] == "SpellDataDump/priest.txt"


def test_dependency_effect_context_and_percent_unit():
    dependency = simc.SimcDependency(
        root_spell_id=403631,
        target_spell_id=409560,
        path_spell_ids=(403631, 409560),
        relations=("tooltip_value_ref",),
        evidence=(
            "Temporal Wound copies $409560s1% of damage dealt by allies.",
        ),
    )

    contexts = simc.dependency_effect_reference_contexts(
        dependency,
        409560,
        1,
    )

    assert contexts == (
        "Temporal Wound copies $409560s1% of damage dealt by allies.",
    )

    assert (
        simc.dependency_effect_unit_hint(
            dependency,
            409560,
            1,
        )
        == "percent"
    )


def test_dependency_effect_context_ignores_other_effects():
    dependency = simc.SimcDependency(
        root_spell_id=1,
        target_spell_id=2,
        path_spell_ids=(1, 2),
        relations=("tooltip_value_ref",),
        evidence=(
            "First value $2s1%, second value $2s2 sec.",
        ),
    )

    assert (
        simc.dependency_effect_unit_hint(
            dependency,
            2,
            2,
        )
        == "seconds"
    )

    assert (
        simc.dependency_effect_unit_hint(
            dependency,
            2,
            3,
        )
        is None
    )


def test_effect_reference_context_follows_named_variable():
    raw = (
        "Name             : Prismatic Barrier (id=235450)\n"
        "Description      : Shields you with an arcane force, absorbing "
        "$<shield> damage and reducing magic damage taken by $s3%.\n"
        "Variables        : $shield=$s2 / 100 * Total Health\n"
    )

    spell = simc.SimcSpell(
        spell_id=235450,
        name="Prismatic Barrier",
        raw=raw,
    )

    dump = simc.SimcDump(
        class_slug="mage",
        build="12.1.0.test",
        header="test",
        spells={235450: spell},
        edges={},
    )

    contexts = simc.effect_reference_contexts(
        dump,
        235450,
        2,
    )

    assert len(contexts) == 1
    assert "absorbing $<shield> damage" in contexts[0]


def test_dependency_closure_preserves_parallel_child_evidence():
    text = (
        "SimulationCraft test for World of Warcraft 12.1.0.1 Live\n"
        "Name             : Parent (id=100)\n"
        "Description      : Child lasts $200d.\n"
        "Tooltip          : Copies $200s1% of damage.\n"
        "\n"
        "Name             : Child (id=200)\n"
        "Effects          :\n"
        "#1 (id=2001)     : Apply Aura (6) | Periodic Dummy (226)\n"
        "                   Base Value: 15 | PvP Coefficient: 1.5\n"
        "Description      : Child value $s1%.\n"
    )

    dump = simc.parse_dump(
        text,
        class_slug="test",
    )

    dependencies = simc.dependency_closure(
        dump,
        100,
        target_spell_ids={200},
    )

    assert len(dependencies) == 1
    dependency = dependencies[0]

    assert any(
        "$200d" in evidence
        for evidence in dependency.evidence
    )
    assert any(
        "$200s1%" in evidence
        for evidence in dependency.evidence
    )

    assert (
        simc.dependency_effect_unit_hint(
            dependency,
            200,
            1,
        )
        == "percent"
    )


def test_dependency_context_resolves_named_parent_variable():
    text = (
        "SimulationCraft test for World of Warcraft 12.1.0.1 Live\n"
        "Name             : Parent Brew (id=100)\n"
        "Description      : Increases health by 20% and reducing all "
        "damage you take by $<damage>%.\n"
        "Variables        : $damage=$200s2\n"
        "\n"
        "Name             : Child Brew (id=200)\n"
        "Effects          :\n"
        "#2 (id=2002)     : Dummy (3)\n"
        "                   Base Value: -20 | PvP Coefficient: 1.5\n"
    )

    dump = simc.parse_dump(
        text,
        class_slug="test",
    )

    dependency = simc.SimcDependency(
        root_spell_id=100,
        target_spell_id=200,
        path_spell_ids=(100, 200),
        relations=("tooltip_value_ref",),
        evidence=("Variables : $damage=$200s2",),
    )

    contexts = simc.dependency_effect_reference_contexts(
        dependency,
        200,
        2,
        dump=dump,
    )

    assert len(contexts) == 1
    assert "reducing all damage you take" in contexts[0]

    assert (
        simc.dependency_effect_unit_hint(
            dependency,
            200,
            2,
            dump=dump,
        )
        == "percent"
    )


def test_parent_effect_context_can_live_in_embedded_child_description():
    text = (
        "SimulationCraft test for World of Warcraft 12.1.0.1 Live\n"
        "Name             : Parent Surge (id=300)\n"
        "Description      : $@spelldesc301\n"
        "Effects          :\n"
        "#1 (id=3001)     : Apply Aura (6) | Dummy (4)\n"
        "                   Base Value: 55 | PvP Coefficient: 0.33\n"
        "\n"
        "Name             : Child Surge (id=301)\n"
        "Description      : Deal $300s1% damage to the target and "
        "$300s1% damage to nearby enemies.\n"
    )

    dump = simc.parse_dump(
        text,
        class_slug="test",
    )

    contexts = simc.dependent_effect_reference_contexts(
        dump,
        300,
        1,
    )

    assert len(contexts) == 1
    assert contexts[0].count("$300s1") == 2



def test_effect_parser_recovers_hotfix_back_to_neutral_pvp_multiplier():
    text = (
        "SimulationCraft test for World of Warcraft 12.1.0.69933 Live\n"
        "Name             : Ebon Might Test (id=395152)\n"
        "Effects          :\n"
        "#1 (id=1035393)  : Apply Aura (6) | Periodic Dummy (226)\n"
        "                   Base Value: 8 | PvP Coefficient: 1.5\n"
        "Hotfixed         : PvP Coefficient (1.25 -> 1.5)\n"
        "#2 (id=1035394)  : Apply Aura (6) | Modify Stat With Support Triggers (540)\n"
        "                   Base Value: 0\n"
        "Hotfixed         : PvP Coefficient (1.25 -> 1)\n"
    )

    dump = simc.parse_dump(
        text,
        class_slug="evoker",
    )

    effects = simc.parse_spell_effects(
        dump.spells[395152]
    )

    assert effects[1].pvp_coefficient == 1.5
    assert effects[1].pvp_hotfix_previous == 1.25
    assert effects[2].pvp_coefficient == 1.0
    assert effects[2].pvp_hotfix_previous == 1.25
    assert effects[2].game_effect_id == 1035394
