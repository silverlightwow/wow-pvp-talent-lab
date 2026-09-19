from pvpcalc import tooltip_renderer


def test_periodic_total_spell_power_holy_fire():
    tooltip = (
        "0.24% of base mana\n"
        "40 yd range\n"
        "1.5 sec cast\n"
        "10 sec cooldown\n"
        "Consumes the enemy in Holy flames that cause "
        "(308% of Spell Power) Holy damage and an additional "
        "(98.91% of Spell Power) Holy damage over 7 sec."
    )

    rows = [
        {
            "effect_index": 1,
            "effect_text": "School Damage (Holy) (SP mod: 3.08)",
            "wowhead_raw": "Effect #1 School Damage (Holy) (SP mod: 3.08)",
            "base_value": None,
            "final_pvp_multiplier": 1.5,
            "final_pvp_value": None,
        },
        {
            "effect_index": 2,
            "effect_text": "Apply Aura: Periodic Damage",
            "wowhead_raw": (
                "Effect #2 Apply Aura: Periodic Damage "
                "Interval: 1 second (SP mod: 0.1413) "
                "PVP Multiplier: 1.65"
            ),
            "base_value": None,
            "final_pvp_multiplier": 1.65,
            "final_pvp_value": None,
        },
    ]

    result = tooltip_renderer.render_pvp_tooltip(
        tooltip=tooltip,
        spec_name="Holy",
        spec_names=["Discipline", "Holy", "Shadow"],
        effect_rows=rows,
    )

    assert result["render_status"] == "COMPLETE"
    assert "(462% of Spell Power)" in result["pvp_tooltip"]
    assert "(163.2015% of Spell Power)" in result["pvp_tooltip"]


def test_periodic_channel_total_spell_power_void_torrent():
    tooltip = (
        "40 yd range\n"
        "Channeled (3 sec cast)\n"
        "30 sec cooldown\n"
        "Channel a torrent of void energy into the target, "
        "dealing (713.055% of Spell Power) Shadow damage over "
        "3 sec."
    )

    rows = [
        {
            "effect_index": 1,
            "effect_text": "Apply Aura: Periodic Damage",
            "wowhead_raw": (
                "Effect #1 Apply Aura: Periodic Damage "
                "Interval: 1 second (SP mod: 2.37685) "
                "PVP Multiplier: 0.7"
            ),
            "base_value": None,
            "final_pvp_multiplier": 0.658,
            "final_pvp_value": None,
        },
    ]

    result = tooltip_renderer.render_pvp_tooltip(
        tooltip=tooltip,
        spec_name="Shadow",
        spec_names=["Discipline", "Holy", "Shadow"],
        effect_rows=rows,
    )

    assert result["render_status"] == "COMPLETE"
    assert "(469.1902% of Spell Power)" in result["pvp_tooltip"]


def test_repeated_equal_values_use_source_effect_ordinal():
    tooltip = (
        "Prayer of Mending reduces the cooldown of "
        "Holy Word: Serenity by 4 sec.\n"
        "Creating a Halo reduces the cooldown of "
        "Holy Word: Sanctify by 4 sec.\n"
        "Holy Fire reduces the cooldown of "
        "Holy Word: Chastise by 4 sec."
    )

    rows = [
        {
            "effect_index": 3,
            "effect_text": "Apply Aura: Dummy",
            "base_value": 4,
            "pvp_multiplier": 0.5,
            "pvp_value": 2,
            "final_pvp_multiplier": 0.5,
            "final_pvp_value": 2,
            "same_value_text_ordinal": 3,
            "same_value_text_count": 3,
        },
    ]

    result = tooltip_renderer.render_pvp_tooltip(
        tooltip=tooltip,
        spec_name="Holy",
        spec_names=["Discipline", "Holy", "Shadow"],
        effect_rows=rows,
    )

    assert result["render_status"] == "COMPLETE"
    assert result["pvp_tooltip"].count("4 sec") == 2
    assert "Holy Word: Chastise by 2 sec." in result["pvp_tooltip"]


def test_spec_branch_parsing_is_not_priest_specific():
    tooltip = (
        "Shared text\n"
        "Havoc\n"
        "Havoc-only 10%.\n"
        "Vengeance\n"
        "Vengeance-only 20%.\n"
        "Devourer\n"
        "Devourer-only 30%."
    )

    selected = tooltip_renderer.tooltip_for_spec(
        tooltip,
        "Devourer",
        ["Havoc", "Vengeance", "Devourer"],
    )

    assert "Shared text" in selected
    assert "Devourer-only 30%." in selected
    assert "Havoc-only" not in selected
    assert "Vengeance-only" not in selected


def test_attack_power_coefficient_aimed_shot():
    tooltip = (
        "35 Focus\n"
        "40 yd range\n"
        "2.5 sec cast\n"
        "15 sec recharge\n"
        "2 Charges\n"
        "A powerful aimed shot that deals "
        "(972% of Attack Power) Physical damage."
    )

    rows = [
        {
            "effect_index": 1,
            "effect_text": (
                "School Damage (Physical) "
                "(AP mod: 9.72)"
            ),
            "wowhead_raw": (
                "Effect #1 School Damage (Physical) "
                "(AP mod: 9.72)"
            ),
            "base_value": None,
            "final_pvp_multiplier": 1.273,
            "final_pvp_value": None,
        },
    ]

    result = tooltip_renderer.render_pvp_tooltip(
        tooltip=tooltip,
        spec_name="Marksmanship",
        spec_names=[
            "Beast Mastery",
            "Marksmanship",
            "Survival",
        ],
        effect_rows=rows,
    )

    assert result["render_status"] == "COMPLETE"
    assert "(1237.356% of Attack Power)" in result["pvp_tooltip"]
