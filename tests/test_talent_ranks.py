import json
from pathlib import Path
import pytest
from pvpcalc.sources import simc
from pvpcalc.ranks import rank_source, render_rank, rows_at_rank
from pvpcalc import tooltip_renderer

SPELLS = json.loads(
    (Path(__file__).parent / "fixtures/trait-rank-spells.json").read_text()
)
DUMP = simc.parse_dump(
    "World of Warcraft 12.1.0.69875 Live\n" + "\n".join(SPELLS.values()),
    class_slug="test",
)


def render(spell_id, text, rank, *, spec="Discipline", cls="Priest", tree="spec"):
    talent = dict(
        spell_id=spell_id,
        spec_name=spec,
        class_name=cls,
        tree_type=tree,
        max_ranks=2,
        node_type="single",
    )
    source = rank_source(DUMP, talent)
    result, diagnostics = render_rank(
        text, source, rank, spec_name=spec, spec_names=[spec]
    )
    assert diagnostics == []
    return result


@pytest.mark.parametrize("rank,percent,seconds", [(1, 15, 2), (2, 30, 4)])
def test_pain_and_suffering_uses_trait_values_not_spell_base(rank, percent, seconds):
    assert (
        render(
            390689,
            "Increases the damage of Shadow Word: Pain by 8% and increases its duration by 2 sec.",
            rank,
        )
        == f"Increases the damage of Shadow Word: Pain by {percent}% and increases its duration by {seconds} sec."
    )


@pytest.mark.parametrize("rank,percent", [(1, 5), (2, 10)])
def test_abyssal_reverie(rank, percent):
    assert (
        render(
            373054,
            "Atonement heals for 10% more when activated by Shadow spells.",
            rank,
        )
        == f"Atonement heals for {percent}% more when activated by Shadow spells."
    )


def test_only_ranked_values_change():
    assert (
        render(
            390832,
            "Mind Blast and Shadow Word: Death consume 1 sec of Shadow Word: Pain, dealing damage equal to 300% of the amount consumed.",
            2,
        )
        == "Mind Blast and Shadow Word: Death consume 2 sec of Shadow Word: Pain, dealing damage equal to 300% of the amount consumed."
    )
    assert (
        render(
            390691,
            "Casting Power Word: Shield increases your Haste by 5% for 4 sec.",
            2,
        )
        == "Casting Power Word: Shield increases your Haste by 10% for 4 sec."
    )


def test_nonlinear_rounding_and_repeated_values():
    text = "Increases the healing done by Holy Word: Serenity and Holy Word: Sanctify by 30%.\nIncreases the radius of Holy Word: Sanctify by 30%."
    assert (
        render(471668, text, 1, spec="Holy")
        == "Increases the healing done by Holy Word: Serenity and Holy Word: Sanctify by 13%.\nIncreases the radius of Holy Word: Sanctify by 15%."
    )
    assert "25%" in render(471668, text, 2, spec="Holy")


def test_independent_durations_with_same_surrounding_prose():
    text = "Avenging Wrath's cooldown is reduced by 30 sec, but its duration is reduced by 5.0 sec.\nAvenging Crusader's cooldown is reduced by 30.0 sec, but its duration is reduced by 3.0 sec."
    result = render(1241511, text, 1, spec="Holy", cls="Paladin")
    assert (
        result
        == "Avenging Wrath's cooldown is reduced by 15 sec, but its duration is reduced by 4 sec.\nAvenging Crusader's cooldown is reduced by 7.5 sec, but its duration is reduced by 2.5 sec."
    )


def test_fractional_and_formula_ranks():
    assert (
        render(
            193539,
            "Haste increased by 1.5%.",
            2,
            spec="Outlaw",
            cls="Rogue",
            tree="class",
        )
        == "Haste increased by 3%."
    )
    text = "Melee auto-attacks with Flametongue Weapon active have a 5% chance to reduce the cooldown of Lava Lash by 25% and increase the damage of Lava Lash by 20% for 8 sec."
    result = render(201900, text, 2, spec="Enhancement", cls="Shaman")
    assert (
        "by 50%" in result
        and "by 40%" in result
        and "5% chance" in result
        and "8 sec" in result
    )


def test_qualitative_rank_switch():
    text = "Your damaging abilities have a chance to invoke Niuzao, causing him to charge to your target's location and Stomp, dealing (10% of Attack Power) Physical damage to your target and reduced damage to secondary targets."
    assert "have an increased chance" in render(
        387219, text, 2, spec="Brewmaster", cls="Monk"
    )


def test_pvp_effects_use_rank_base_and_keep_pvp_multiplier():
    rows = [
        dict(
            spell_id=390689,
            source_spell_id=390689,
            effect_index=1,
            base_value=8,
            final_pvp_multiplier=0.5,
            final_pvp_value=4,
        )
    ]
    rules = [dict(effect_index=1, values=[15, 30])]
    assert rows_at_rank(rows, rules, 2, 390689)[0]["final_pvp_value"] == 15
    assert rows[0]["base_value"] == 8


def test_symbolic_character_stats_keep_formula_and_scale_rank_coefficient():
    text = "When you use Barkskin or Survival Instincts, absorb [1875 / 100 * Attack Power * (1 + Versatility)] damage for 15 sec."
    assert render(
        385786, text, 2, spec="Guardian", cls="Druid", tree="class"
    ) == text.replace("1875", "3750")


def test_rank_formula_includes_referenced_stack_count():
    text = "Entering Eclipse increases your critical strike chance with Arcane or Nature spells by 20%, decreasing by 2% every 1 sec."
    assert render(394048, text, 1, spec="Balance", cls="Druid") == text.replace(
        "20%", "10%"
    ).replace("2%", "1%")
    text = "Each consecutive critical strike you deal increases critical strike damage you deal by 1%, up to 4% for 6 sec."
    assert render(383810, text, 2, spec="Fire", cls="Mage") == text.replace(
        "1%", "2%"
    ).replace("4%", "8%")


def test_client_formula_precision():
    assert (
        render(
            382424,
            "The cooldown of Ice Block is reduced by 30 sec.",
            1,
            spec="Fire",
            cls="Mage",
            tree="class",
        )
        == "The cooldown of Ice Block is reduced by 30 sec."
    )


@pytest.mark.parametrize(
    "tooltip,effect_text,multiplier,expected",
    [
        (
            "They are healed for [(540% of Spell Power)].",
            "Direct Heal (10) (SP mod: 5.4)",
            0.1638902,
            "They are healed for (88.5007% of Spell Power).",
        ),
        (
            "They are healed for [(1080% of Spell Power)].",
            "Direct Heal (10) (SP mod: 5.4)",
            0.1638902,
            "They are healed for (177.0014% of Spell Power).",
        ),
        (
            "Deals [(24% of Attack Power)] Holy damage.",
            "School Damage (Holy) (AP mod: 0.12)",
            0.81,
            "Deals (19.44% of Attack Power) Holy damage.",
        ),
        (
            "Deals [(6% of Attack Power)] Fire damage.",
            "School Damage (Fire) (AP mod: 0.12)",
            0.96,
            "Deals (5.76% of Attack Power) Fire damage.",
        ),
    ],
)
def test_referenced_spell_pvp_modifier_applies_at_every_rank(
    tooltip, effect_text, multiplier, expected
):
    row = dict(
        talent_spell_id=469411,
        source_spell_id=469413,
        effect_index=1,
        effect_text=effect_text,
        final_pvp_multiplier=multiplier,
        dependency_relations=["tooltip_value_ref"],
        dependency_path=[469411, 469413],
    )
    result = tooltip_renderer.render_pvp_tooltip(
        tooltip=tooltip,
        spec_name="Holy",
        effect_rows=[row],
        context_rows=[row],
    )
    assert result["pvp_tooltip"] == expected
    assert result["render_status"] == "COMPLETE"


def test_nested_dependency_does_not_claim_an_ancestor_coefficient():
    tooltip = "Deals (252% of Spell Power) Fire damage."
    direct = dict(
        talent_spell_id=1260745,
        source_spell_id=1236970,
        effect_index=1,
        effect_text="School Damage (Fire) (SP mod: 2.52)",
        final_pvp_multiplier=0.429,
        effect_origin="DEPENDENCY",
        dependency_kind="REFERENCED",
        dependency_relations=["tooltip_value_ref"],
        dependency_path=[1260745, 1236970],
    )
    nested = dict(
        talent_spell_id=1260745,
        source_spell_id=357212,
        effect_index=1,
        effect_text="School Damage (Fire) (SP mod: 4.4)",
        final_pvp_multiplier=1.3,
        effect_origin="DEPENDENCY",
        dependency_kind="REFERENCED",
        dependency_relations=["tooltip_value_ref", "spelldesc_ref"],
        dependency_path=[1260745, 1236970, 357211, 357212],
    )
    result = tooltip_renderer.render_pvp_tooltip(
        tooltip=tooltip,
        spec_name="Augmentation",
        effect_rows=[direct, nested],
        context_rows=[direct, nested],
    )
    assert result["pvp_tooltip"] == "Deals (108.108% of Spell Power) Fire damage."
    assert result["render_status"] == "COMPLETE"


def test_direct_dependency_does_not_claim_a_different_spec_coefficient():
    tooltip = "Deals [(92.8% of Spell Power) * 7] Frost damage."
    meteor = dict(
        talent_spell_id=431095,
        source_spell_id=351140,
        effect_index=1,
        effect_text="School Damage (Fire) (SP mod: 9)",
        final_pvp_multiplier=0.738192,
        effect_origin="DEPENDENCY",
        dependency_kind="REFERENCED",
        dependency_relations=["tooltip_value_ref"],
        dependency_path=[431095, 351140],
    )
    comet = dict(
        talent_spell_id=431095,
        source_spell_id=438609,
        effect_index=1,
        effect_text="School Damage (Frost) (SP mod: 0.928)",
        final_pvp_multiplier=0.728,
        effect_origin="DEPENDENCY",
        dependency_kind="REFERENCED",
        dependency_relations=["tooltip_value_ref"],
        dependency_path=[431095, 438609],
    )
    result = tooltip_renderer.render_pvp_tooltip(
        tooltip=tooltip,
        spec_name="Fire",
        effect_rows=[meteor, comet],
        context_rows=[meteor, comet],
    )
    assert result["pvp_tooltip"] == (
        "Deals [(67.5584% of Spell Power) * 7] Frost damage."
    )
    assert not any(
        diagnostic.get("status") == "CONFLICTING_TRANSFORMS"
        for diagnostic in result["diagnostics"]
    )


def test_direct_two_rank_modifier_keeps_each_rank_value():
    row = dict(
        talent_spell_id=1241958,
        source_spell_id=1241958,
        effect_index=1,
        effect_text="Apply Aura: Dummy",
        base_value=50,
        final_pvp_value=20,
        final_pvp_multiplier=0.4,
        semantic_unit_hint="percent",
        dependency_relations=[],
    )
    for pve, pvp in [(25, 10), (50, 20)]:
        ranked = dict(row, base_value=pve, final_pvp_value=pvp)
        result = tooltip_renderer.render_pvp_tooltip(
            tooltip=f"Hammer of Wrath deals up to {pve}% additional damage.",
            spec_name="Holy",
            effect_rows=[ranked],
            context_rows=[ranked],
        )
        assert f"up to {pvp}% additional" in result["pvp_tooltip"]
        assert result["render_status"] == "COMPLETE"


def test_ranked_millisecond_override_matches_player_facing_rounding():
    row = dict(
        talent_spell_id=382424,
        source_spell_id=382424,
        effect_index=1,
        effect_text="Apply Aura: Mod Cooldown Ms (1560)",
        base_value=-29999,
        final_pvp_value=-14999.5,
        final_pvp_multiplier=0.5,
        dependency_relations=[],
        display_formula=dict(
            old=29.999,
            new=14.9995,
            kind="ordinary_value",
            divisor=-1000,
            precision=4,
        ),
    )
    result = tooltip_renderer.render_pvp_tooltip(
        tooltip="The cooldown of Ice Block is reduced by 30 sec.",
        spec_name="Fire",
        effect_rows=[row],
        context_rows=[row],
    )
    assert result["pvp_tooltip"] == (
        "The cooldown of Ice Block is reduced by 15 sec."
    )
    assert result["render_status"] == "COMPLETE"
