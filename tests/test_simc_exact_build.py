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
