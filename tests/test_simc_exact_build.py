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
    assert dump.source_ref == "0908ace"
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



def test_generated_spell_effect_parser_reads_hidden_exact_build_rows():
    text = """// generated client data
// 3 effects, wow build level 12.1.0.69933
static spelleffect_data_t __spelleffect_data[3] = {
  { 1278279, 1266081, 0, 2, 0, 0, 0x00000000, 0.000000, 0.050000, 0.000000, 0.000000, 2.844000, 0, 0.000000, 0.000000, 0.0000, 0, 0, { 0, 0, 0, 0 }, 0, 1.000000, 0.000000, 0.000000, 0, 0, 6, 0, 0.000000, 0.595000, 0, 0 },
  { 1106904, 427453, 0, 2, 0, 0, 0x00000000, 0.000000, 0.050000, 0.000000, 0.000000, 10.451600, 0, 0.000000, 0.000000, 0.0000, 0, 0, { 0, 0, 0, 0 }, 0, 1.000000, 0.000000, 0.000000, 0, 0, 6, 0, 0.000000, 0.544000, 0, 0 },
  { 1119306, 427453, 1, 64, 0, 0, 0x00000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0, 0.000000, 0.000000, 7.0000, 0, 0, { 0, 0, 0, 0 }, 1217116, 1.000000, 0.000000, 0.000000, 0, 0, 1, 0, 0.000000, 1.000000, 0, 0 },
};
"""

    parsed = simc.parse_generated_effects(
        text,
        {1266081, 427453},
        expected_build="12.1.0.69933",
    )

    moonlight = parsed[1266081][1]
    assert moonlight.game_effect_id == 1278279
    assert moonlight.effect_text == "School Damage (2)"
    assert moonlight.ap_coefficient == 2.844
    assert moonlight.sp_coefficient is None
    assert moonlight.pvp_coefficient == 0.595

    hammer_damage = parsed[427453][1]
    assert hammer_damage.game_effect_id == 1106904
    assert hammer_damage.ap_coefficient == 10.4516
    assert hammer_damage.pvp_coefficient == 0.544

    # DB2 index 1 is exposed as human-facing Effect #2.
    assert parsed[427453][2].game_effect_id == 1119306
    assert parsed[427453][2].pvp_coefficient == 1.0


def test_generated_spell_effect_parser_rejects_wrong_build():
    text = """// 1 effects, wow build level 12.1.0.69934
static spelleffect_data_t __spelleffect_data[1] = {
  { 1, 2, 0, 2, 0, 0, 0x0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, { 0, 0, 0, 0 }, 0, 1, 0, 0, 0, 0, 6, 0, 0, 0.5, 0, 0 },
};
"""

    import pytest

    with pytest.raises(
        RuntimeError,
        match="build mismatch",
    ):
        simc.parse_generated_effects(
            text,
            {2},
            expected_build="12.1.0.69933",
        )



def test_generated_apply_aura_preserves_aura_subtype_semantics():
    text = """// 1 effect, wow build level 12.1.0.69933
static spelleffect_data_t __spelleffect_data[1] = {
  { 1268633, 1259491, 0, 6, 4, 0, 0x0, 0, 0, 0, 0, 0, 0, 0, 0, 80.0000, 0, 0, { 0, 0, 0, 0 }, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0.3125, 0, 0 },
};
"""

    parsed = simc.parse_generated_effects(
        text,
        {1259491},
        expected_build="12.1.0.69933",
    )

    effect = parsed[1259491][1]

    assert effect.effect_text == (
        "Apply Aura (6) | Aura Type (4)"
    )
    assert effect.base_value == 80
    assert effect.pvp_coefficient == 0.3125


def test_generated_spelltext_extracts_effect_specific_branch_contexts():
    text = r"""// Spell text, wow build 12.1.0.69933
static constexpr std::array<spelltext_data_t, 1> __spelltext_data { {
  { 429647, "$?c1[Mortal Strike and Slam damage increased by $s1%.\r\n\r\nCleave and Whirlwind damage increased by $s2%][Shield Slam damage increased by $s3%.\r\n\r\nRevenge and Thunder Clap damage increased by $s4%].$?c3[\r\n\r\nShield Slam generates an additional ${$s5/10} Rage.][]", 0, 0 },
} };
"""

    parsed = simc.parse_generated_spelltexts(
        text,
        {429647},
        expected_build="12.1.0.69933",
    )

    contexts_1 = (
        simc._generated_effect_reference_contexts(
            parsed[429647],
            429647,
            1,
        )
    )
    contexts_3 = (
        simc._generated_effect_reference_contexts(
            parsed[429647],
            429647,
            3,
        )
    )

    assert contexts_1 == (
        "Mortal Strike and Slam damage increased by $s1%.",
    )
    assert contexts_3 == (
        "Shield Slam damage increased by $s3%.",
    )
    assert (
        simc._generated_effect_unit_hint(
            contexts_1,
            429647,
            1,
        )
        == "percent"
    )


def test_pvp_dependencies_resolve_proven_specialization_branches():
    text = (
        "SimulationCraft test for World of Warcraft 12.1.0.69933 Live\n"
        "Name             : Holy Priest (id=137031)\n"
        "Class            : Holy Priest\n"
        "\n"
        "Name             : Shadow Priest (id=137033)\n"
        "Class            : Shadow Priest\n"
        "\n"
        "Name             : Manifested Power (id=453783)\n"
        "Description      : Creating a Halo "
        "$?a137033[upgrades Mind Flay. $@spelldesc391403]"
        "[grants Surge of Light. $@spelldesc109186]\n"
        "\n"
        "Name             : Surge of Light (id=109186)\n"
        "Description      : Holy child.\n"
        "\n"
        "Name             : Mind Flay: Insanity (id=391403)\n"
        "Description      : Shadow child.\n"
    )

    dump = simc.parse_dump(
        text,
        class_slug="priest",
    )

    kwargs = {
        "dump": dump,
        "talent_spell_ids": {453783},
        "pvp_spell_ids":
            {109186, 391403},
        "class_name": "Priest",
        "spec_names":
            [
                "Discipline",
                "Holy",
                "Shadow",
            ],
    }

    holy = simc.pvp_dependencies(
        spec_name="Holy",
        **kwargs,
    )
    shadow = simc.pvp_dependencies(
        spec_name="Shadow",
        **kwargs,
    )

    assert {
        row.target_spell_id
        for row in holy
    } == {109186}

    assert {
        row.target_spell_id
        for row in shadow
    } == {391403}


def test_unknown_specialization_conditions_are_not_pruned():
    text = (
        "SimulationCraft test for World of Warcraft 12.1.0.69933 Live\n"
        "Name             : Holy Priest (id=137031)\n"
        "Class            : Holy Priest\n"
        "\n"
        "Name             : Parent (id=100)\n"
        "Description      : $?a999999[$@spelldesc200][$@spelldesc300]\n"
        "\n"
        "Name             : First Child (id=200)\n"
        "Description      : First.\n"
        "\n"
        "Name             : Second Child (id=300)\n"
        "Description      : Second.\n"
    )

    dump = simc.parse_dump(
        text,
        class_slug="priest",
    )

    rows = simc.pvp_dependencies(
        dump,
        talent_spell_ids={100},
        pvp_spell_ids={200, 300},
        class_name="Priest",
        spec_name="Holy",
        spec_names=["Holy", "Shadow"],
    )

    assert {
        row.target_spell_id
        for row in rows
    } == {200, 300}



def test_scope_dump_resolves_spec_index_player_text():
    text = (
        "SimulationCraft test for World of Warcraft 12.1.0.69933 Live\n"
        "Name             : Practiced Strikes (id=429647)\n"
        "Effects          :\n"
        "#1 (id=1114022)  : Apply Aura (6) | Add Percent Modifier (108): "
        "Spell Direct Amount (0)\n"
        "                   Base Value: 25 | PvP Coefficient: 1.2\n"
        "#3 (id=1210713)  : Apply Aura (6) | Add Percent Modifier (108): "
        "Spell Direct Amount (0)\n"
        "                   Base Value: 25 | PvP Coefficient: 0.6\n"
        "Description      : $?c1[Mortal Strike and Slam damage increased "
        "by $s1%.][Shield Slam damage increased by $s3%.]"
        "$?c3[ Shield Slam generates Rage.][]\n"
    )

    dump = simc.parse_dump(
        text,
        class_slug="warrior",
    )

    arms = (
        simc.scope_dump_to_specialization(
            dump,
            class_name="Warrior",
            spec_name="Arms",
            spec_names=[
                "Arms",
                "Fury",
                "Protection",
            ],
        )
    )

    protection = (
        simc.scope_dump_to_specialization(
            dump,
            class_name="Warrior",
            spec_name="Protection",
            spec_names=[
                "Arms",
                "Fury",
                "Protection",
            ],
        )
    )

    arms_effect_1 = (
        simc.effect_reference_contexts(
            arms,
            429647,
            1,
        )
    )

    arms_effect_3 = (
        simc.effect_reference_contexts(
            arms,
            429647,
            3,
        )
    )

    protection_effect_1 = (
        simc.effect_reference_contexts(
            protection,
            429647,
            1,
        )
    )

    protection_effect_3 = (
        simc.effect_reference_contexts(
            protection,
            429647,
            3,
        )
    )

    assert any(
        "Mortal Strike" in context
        for context in arms_effect_1
    )
    assert arms_effect_3 == tuple()

    assert protection_effect_1 == tuple()
    assert any(
        "Shield Slam" in context
        for context
        in protection_effect_3
    )


def test_spec_index_scope_leaves_unknown_current_spec_unmodified():
    text = (
        "SimulationCraft test for World of Warcraft 12.1.0.69933 Live\n"
        "Name             : Parent (id=100)\n"
        "Description      : $?c1[$@spelldesc200][$@spelldesc300]\n"
        "\n"
        "Name             : First Child (id=200)\n"
        "Description      : First.\n"
        "\n"
        "Name             : Second Child (id=300)\n"
        "Description      : Second.\n"
    )

    dump = simc.parse_dump(
        text,
        class_slug="test",
    )

    scoped = (
        simc.scope_dump_to_specialization(
            dump,
            class_name="Test",
            spec_name="Unknown",
            spec_names=[
                "First",
                "Second",
            ],
        )
    )

    assert (
        scoped.spells[100].raw
        == dump.spells[100].raw
    )
