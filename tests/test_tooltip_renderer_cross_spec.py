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


def test_duration_semantics_choose_seconds_not_yards():
    tooltip = (
        "Increases the duration of your Sigils by 2 sec "
        "and radius by 2 yds."
    )

    rows = [
        {
            "effect_index": 2,
            "effect_text": "Apply Aura: Modifies Buff Duration (1)",
            "base_value": 2,
            "final_pvp_multiplier": 0.5,
            "final_pvp_value": 1,
        },
    ]

    result = tooltip_renderer.render_pvp_tooltip(
        tooltip=tooltip,
        spec_name="Vengeance",
        spec_names=["Havoc", "Vengeance", "Devourer"],
        effect_rows=rows,
    )

    assert result["render_status"] == "COMPLETE"
    assert "duration of your Sigils by 1 sec" in result["pvp_tooltip"]
    assert "radius by 2 yds" in result["pvp_tooltip"]


def test_range_semantics_choose_yards_not_percent():
    tooltip = (
        "Blind and Shroud of Concealment have 10% reduced cooldown.\n"
        "Pick Pocket and Sap have 10 yd increased range."
    )

    rows = [
        {
            "effect_index": 2,
            "effect_text": "Apply Aura: Modifies Range (5)",
            "base_value": 10,
            "final_pvp_multiplier": 0.5,
            "final_pvp_value": 5,
        },
    ]

    result = tooltip_renderer.render_pvp_tooltip(
        tooltip=tooltip,
        spec_name="Outlaw",
        spec_names=["Assassination", "Outlaw", "Subtlety"],
        effect_rows=rows,
    )

    assert result["render_status"] == "COMPLETE"
    assert "10% reduced cooldown" in result["pvp_tooltip"]
    assert "5 yd increased range" in result["pvp_tooltip"]


def test_percent_semantics_do_not_match_milliseconds():
    tooltip = (
        "Every 5 Regrowths makes your next spell instant "
        "and increases damage it deals by 100%.\n"
        "(100ms cooldown)"
    )

    rows = [
        {
            "effect_index": 2,
            "effect_text": "Apply Aura: Modifies Damage/Healing Done",
            "base_value": 100,
            "final_pvp_multiplier": 0.25,
            "final_pvp_value": 25,
        },
    ]

    result = tooltip_renderer.render_pvp_tooltip(
        tooltip=tooltip,
        spec_name="Restoration",
        spec_names=["Balance", "Feral", "Guardian", "Restoration"],
        effect_rows=rows,
    )

    assert result["render_status"] == "COMPLETE"
    assert "damage it deals by 25%" in result["pvp_tooltip"]
    assert "(100ms cooldown)" in result["pvp_tooltip"]


def test_repeated_spell_power_formula_references_all_update():
    tooltip = (
        "Call down a burst of energy, causing "
        "(93% of Spell Power) Arcane damage to the target, and "
        "[(93% of Spell Power) * 70 / 100] Arcane damage to "
        "all other enemies."
    )

    rows = [
        {
            "effect_index": 1,
            "effect_text": "School Damage (Arcane) (SP mod: 0.93)",
            "wowhead_raw": (
                "Effect #1 School Damage (Arcane) "
                "(SP mod: 0.93)"
            ),
            "base_value": None,
            "final_pvp_multiplier": 0.6324,
            "final_pvp_value": None,
        },
    ]

    result = tooltip_renderer.render_pvp_tooltip(
        tooltip=tooltip,
        spec_name="Restoration",
        spec_names=["Balance", "Feral", "Guardian", "Restoration"],
        effect_rows=rows,
    )

    assert result["render_status"] == "COMPLETE"
    assert result["pvp_tooltip"].count(
        "(58.8132% of Spell Power)"
    ) == 2


def test_duplicate_cooldown_encodings_collapse_to_one_visible_change():
    tooltip = (
        "Reduces the cooldown of Flame Shock and Voltaic Blaze "
        "by 1.5 sec.\n"
        "Flame Shock deals damage 15% faster."
    )

    rows = [
        {
            "effect_index": 2,
            "effect_text": "Apply Aura: Modifies Cooldown (11)",
            "base_value": -1.5,
            "final_pvp_multiplier": 2,
            "final_pvp_value": -3,
        },
        {
            "effect_index": 3,
            "effect_text": (
                "Apply Aura: Add Modifier - Flat (Label): "
                "Modifies Cooldown (11)"
            ),
            "base_value": -1500,
            "final_pvp_multiplier": 2,
            "final_pvp_value": -3000,
        },
    ]

    result = tooltip_renderer.render_pvp_tooltip(
        tooltip=tooltip,
        spec_name="Elemental",
        spec_names=["Elemental", "Enhancement", "Restoration"],
        effect_rows=rows,
    )

    assert result["render_status"] == "COMPLETE"
    assert "by 3.0 sec" in result["pvp_tooltip"]
    assert "15% faster" in result["pvp_tooltip"]


def test_damage_healing_context_selects_bonus_not_proc_chance():
    tooltip = (
        "Holy Power spending abilities have a 15% chance to make your "
        "next Holy Power spending ability free and deal 15% increased "
        "damage and healing."
    )

    rows = [
        {
            "effect_index": 2,
            "effect_text": "Apply Aura: Modifies Damage/Healing Done",
            "base_value": 15,
            "final_pvp_multiplier": 0.666667,
            "final_pvp_value": 10.000005,
        },
    ]

    result = tooltip_renderer.render_pvp_tooltip(
        tooltip=tooltip,
        spec_name="Protection",
        spec_names=["Holy", "Protection", "Retribution"],
        effect_rows=rows,
    )

    assert result["render_status"] == "COMPLETE"
    assert "15% chance" in result["pvp_tooltip"]
    assert "deal 10% increased damage and healing" in result["pvp_tooltip"]


def test_damage_taken_context_selects_mitigation_value():
    tooltip = (
        "You deal 5% more damage and take 5% less damage.\n"
        "Size increased by 5%."
    )

    rows = [
        {
            "effect_index": 4,
            "effect_text": (
                "Apply Aura: Mod % Damage Taken "
                "(Arcane, Fire, Frost, Holy, Nature, Physical, Shadow)"
            ),
            "base_value": -5,
            "final_pvp_multiplier": 0.6,
            "final_pvp_value": -3,
        },
    ]

    result = tooltip_renderer.render_pvp_tooltip(
        tooltip=tooltip,
        spec_name="Protection",
        spec_names=["Arms", "Fury", "Protection"],
        effect_rows=rows,
    )

    assert result["render_status"] == "COMPLETE"
    assert "deal 5% more damage" in result["pvp_tooltip"]
    assert "take 3% less damage" in result["pvp_tooltip"]
    assert "Size increased by 5%" in result["pvp_tooltip"]


def test_run_speed_context_selects_speed_bonus_not_floor():
    tooltip = (
        "For 10 sec, while upon your Death Charger your movement "
        "speed is increased by 100%, you cannot be slowed below "
        "100% of normal speed."
    )

    rows = [
        {
            "effect_index": 5,
            "effect_text": "Apply Aura: Increase Run Speed %",
            "base_value": 100,
            "final_pvp_multiplier": 0.8,
            "final_pvp_value": 80,
        },
    ]

    result = tooltip_renderer.render_pvp_tooltip(
        tooltip=tooltip,
        spec_name="Frost",
        spec_names=["Blood", "Frost", "Unholy"],
        effect_rows=rows,
    )

    assert result["render_status"] == "COMPLETE"
    assert "speed is increased by 80%" in result["pvp_tooltip"]
    assert "below 100% of normal speed" in result["pvp_tooltip"]
