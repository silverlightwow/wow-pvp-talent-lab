from __future__ import annotations

from dataclasses import dataclass, field

from pvpcalc.sources import blizzard_hotfixes


HTML = """
<html><body>
<h3>September 22, 2026</h3>
<ul>
  <li>Player versus Player
    <ul>
      <li>Old Talent now reduces movement speed by 30% in PvP combat (was 40%).</li>
    </ul>
  </li>
</ul>
<h3>September 24, 2026</h3>
<ul>
  <li>Hunter
    <ul>
      <li>Improved Snaring now increases the movement speed reduction of Wing Clip by 10% in PvP combat.</li>
    </ul>
  </li>
  <li>Paladin
    <ul>
      <li>Consecrated Ground now reduces movement speed by 20% in PvP combat (was 50%).</li>
    </ul>
  </li>
  <li>Mage
    <ul>
      <li>Chrono Shift (PvP Talent) now reduces movement speed by 30% in PvP combat (was 50%).</li>
    </ul>
  </li>
  <li>Some PvE Talent damage increased by 20%. Does not apply to PvP combat.</li>
  <li>Ravage damage increased by 20% in PvP combat.</li>
  <li>Ebon Might grants 12% primary stat in PvP combat (was 10%).</li>
  <li>Pyroclasm now increases the damage of Pyroblast or Flamestrike by 160% in PvP combat (was 180%).</li>
  <li>Practiced Strikes increases the damage of Slam and Mortal Strike by 40% in PvP combat (was 25%).</li>
  <li>Focused Outburst now reduces the cast time of Prayer of Healing by 40% in PvP combat (was 15%).</li>
</ul>
<h3>Player versus Player</h3>
<ul>
  <li>Druid
    <ul>
      <li>Call of Ohn'ahra increases the cooldown of Nature's Swiftness by 60 seconds (was 30 seconds).</li>
    </ul>
  </li>
</ul>
<h3>Professions</h3>
<ul>
  <li>Fake Profession Talent increases the cooldown of Crafting by 90 seconds (was 30 seconds).</li>
</ul>
</body></html>
"""


@dataclass
class FakeTalent:
    talent_name: str
    spell_id: int
    pve_tooltip: str
    pvp_tooltip: str
    tooltip_changed: bool = False
    render_status: str = "UNCHANGED"
    changes: list[dict] = field(default_factory=list)
    diagnostics: list[dict] = field(default_factory=list)
    has_pvp_mechanics: bool = False
    mechanics: list[dict] = field(default_factory=list)
    rank_tooltips: list[dict] = field(default_factory=list)


@dataclass
class FakeCatalog:
    talents: list[FakeTalent]


def test_parse_current_absolute_pvp_hotfixes():
    items = blizzard_hotfixes.parse_official_pvp_hotfixes(HTML)
    by_name = {item.talent_name: item for item in items}

    assert by_name["Improved Snaring"].current_percent == 10
    assert by_name["Improved Snaring"].previous_percent is None
    assert by_name["Improved Snaring"].target_hint == "Wing Clip"

    assert by_name["Consecrated Ground"].current_percent == 20
    assert by_name["Consecrated Ground"].previous_percent == 50

    assert by_name["Chrono Shift"].talent_name == "Chrono Shift"
    assert "Some PvE Talent" not in by_name
    assert by_name["Ravage"].mode == "relative_increase"
    assert by_name["Ravage"].current_percent == 20
    assert by_name["Ebon Might"].current_percent == 12
    assert by_name["Ebon Might"].previous_percent == 10
    assert by_name["Pyroclasm"].current_percent == 160
    assert by_name["Practiced Strikes"].target_hint == "Slam and Mortal Strike"
    assert by_name["Focused Outburst"].target_hint == "Prayer of Healing"
    assert by_name["Call of Ohn'ahra"].unit == "seconds"
    assert by_name["Call of Ohn'ahra"].current_percent == 60
    assert by_name["Call of Ohn'ahra"].previous_percent == 30
    assert "Fake Profession Talent" not in by_name


def test_apply_official_hotfix_overlay_and_highlight():
    catalog = FakeCatalog(
        talents=[
            FakeTalent(
                talent_name="Improved Snaring",
                spell_id=1268868,
                pve_tooltip=(
                    "Wing Clip slows an additional 25%.\n"
                    "Concussive Shot slows an additional 10%."
                ),
                pvp_tooltip=(
                    "Wing Clip slows an additional 25%.\n"
                    "Concussive Shot slows an additional 10%."
                ),
            ),
            FakeTalent(
                talent_name="Consecrated Ground",
                spell_id=204054,
                pve_tooltip=(
                    "Your Consecration is 15% larger, and enemies "
                    "within it have 50% reduced movement speed."
                ),
                pvp_tooltip=(
                    "Your Consecration is 15% larger, and enemies "
                    "within it have 50% reduced movement speed."
                ),
            ),
        ]
    )

    report = blizzard_hotfixes.apply_official_pvp_hotfixes(
        catalog,
        blizzard_hotfixes.parse_official_pvp_hotfixes(HTML),
    )

    assert report["unresolved"] == []

    snare = catalog.talents[0]
    assert "Wing Clip slows an additional 10%." in snare.pvp_tooltip
    assert "Concussive Shot slows an additional 10%." in snare.pvp_tooltip
    assert snare.tooltip_changed
    assert snare.changes[0]["old_token"] == "25%"
    assert snare.changes[0]["new_token"] == "10%"

    ground = catalog.talents[1]
    assert "20% reduced movement speed" in ground.pvp_tooltip
    assert ground.tooltip_changed
    assert ground.changes[0]["old_token"] == "50%"
    assert ground.changes[0]["new_token"] == "20%"


def test_official_hotfix_supersedes_overlapping_derived_change():
    pve = (
        "Mortal Strike and Slam damage increased by 25%.\n"
        "Cleave and Whirlwind damage increased by 15%."
    )
    old_start = pve.index("25")

    talent = FakeTalent(
        talent_name="Practiced Strikes",
        spell_id=429647,
        pve_tooltip=pve,
        pvp_tooltip=(
            "Mortal Strike and Slam damage increased by 30%.\n"
            "Cleave and Whirlwind damage increased by 15%."
        ),
        tooltip_changed=True,
        has_pvp_mechanics=True,
        changes=[
            {
                "start": old_start,
                "end": old_start + 2,
                "old_token": "25",
                "new_token": "30",
                "kind": "percent_value",
                "effect_indexes": [1],
            }
        ],
    )
    catalog = FakeCatalog(
        talents=[talent]
    )

    hotfix = next(
        item
        for item in (
            blizzard_hotfixes
            .parse_official_pvp_hotfixes(
                HTML
            )
        )
        if item.talent_name
        == "Practiced Strikes"
    )

    report = (
        blizzard_hotfixes
        .apply_official_pvp_hotfixes(
            catalog,
            [hotfix],
        )
    )

    assert report["unresolved"] == []
    assert (
        "damage increased by 40%."
        in talent.pvp_tooltip
    )
    assert len(talent.changes) == 1
    assert (
        talent.changes[0][
            "old_token"
        ]
        == "25%"
    )
    assert (
        talent.changes[0][
            "new_token"
        ]
        == "40%"
    )


def test_same_hotfix_is_idempotent_when_source_catches_up():
    catalog = FakeCatalog(
        talents=[
            FakeTalent(
                talent_name="Consecrated Ground",
                spell_id=204054,
                pve_tooltip=(
                    "Your Consecration is 15% larger, and enemies "
                    "within it have 50% reduced movement speed."
                ),
                pvp_tooltip=(
                    "Your Consecration is 15% larger, and enemies "
                    "within it have 20% reduced movement speed."
                ),
                tooltip_changed=True,
            ),
        ]
    )

    report = blizzard_hotfixes.apply_official_pvp_hotfixes(
        catalog,
        blizzard_hotfixes.parse_official_pvp_hotfixes(HTML),
    )

    assert report["unresolved"] == []
    assert report["applied"] == []
    assert len(report["already_current"]) == 1


def test_unresolvable_matching_hotfix_fails_closed():
    catalog = FakeCatalog(
        talents=[
            FakeTalent(
                talent_name="Consecrated Ground",
                spell_id=204054,
                pve_tooltip="No percentage is visible here.",
                pvp_tooltip="No percentage is visible here.",
            ),
        ]
    )

    report = blizzard_hotfixes.apply_official_pvp_hotfixes(
        catalog,
        blizzard_hotfixes.parse_official_pvp_hotfixes(HTML),
    )

    assert len(report["unresolved"]) == 1
    assert report["unresolved"][0]["reason"] == "OLD_VALUE_NOT_UNIQUE"



def test_official_value_overrides_stale_third_party_value():
    hotfixes = {
        item.talent_name: item
        for item in blizzard_hotfixes.parse_official_pvp_hotfixes(HTML)
    }
    catalog = FakeCatalog(
        talents=[
            FakeTalent(
                talent_name="Pyroclasm",
                spell_id=269650,
                pve_tooltip=(
                    "Consuming Hot Streak has a 15% chance to make your next "
                    "non-instant Pyroblast or Flamestrike cast within 20 sec "
                    "deal 230% additional damage."
                ),
                pvp_tooltip=(
                    "Consuming Hot Streak has a 15% chance to make your next "
                    "non-instant Pyroblast or Flamestrike cast within 20 sec "
                    "deal 230% additional damage."
                ),
            ),
            FakeTalent(
                talent_name="Practiced Strikes",
                spell_id=429647,
                pve_tooltip=(
                    "Mortal Strike and Slam damage increased by 25%.\n"
                    "Cleave and Whirlwind damage increased by 15%."
                ),
                pvp_tooltip=(
                    "Mortal Strike and Slam damage increased by 30%.\n"
                    "Cleave and Whirlwind damage increased by 15%."
                ),
                tooltip_changed=True,
            ),
        ]
    )

    report = blizzard_hotfixes.apply_official_pvp_hotfixes(
        catalog,
        [hotfixes["Pyroclasm"], hotfixes["Practiced Strikes"]],
    )

    assert report["unresolved"] == []
    pyro = catalog.talents[0]
    assert "160% additional damage" in pyro.pvp_tooltip
    assert pyro.changes[0]["old_token"] == "230%"
    assert pyro.changes[0]["new_token"] == "160%"

    practiced = catalog.talents[1]
    assert "Mortal Strike and Slam damage increased by 40%." in practiced.pvp_tooltip
    assert "Cleave and Whirlwind damage increased by 15%." in practiced.pvp_tooltip
    assert practiced.changes[-1]["old_token"] == "25%"
    assert practiced.changes[-1]["new_token"] == "40%"


def test_seconds_hotfix_inside_pvp_section():
    hotfixes = {
        item.talent_name: item
        for item in blizzard_hotfixes.parse_official_pvp_hotfixes(HTML)
    }
    catalog = FakeCatalog(
        talents=[
            FakeTalent(
                talent_name="Call of Ohn'ahra",
                spell_id=999001,
                pve_tooltip=(
                    "Nature's Swiftness cooldown is increased by 30 sec."
                ),
                pvp_tooltip=(
                    "Nature's Swiftness cooldown is increased by 30 sec."
                ),
            ),
        ]
    )

    report = blizzard_hotfixes.apply_official_pvp_hotfixes(
        catalog,
        [hotfixes["Call of Ohn'ahra"]],
    )

    assert report["unresolved"] == []
    talent = catalog.talents[0]
    assert "60 sec" in talent.pvp_tooltip
    assert talent.changes[0]["old_token"] == "30 sec"
    assert talent.changes[0]["new_token"] == "60 sec"



def test_hotfix_scope_prevents_cross_spec_name_collision():
    hotfix = blizzard_hotfixes.OfficialPvpHotfix(
        talent_name="Focused Outburst",
        current_percent=40,
        previous_percent=15,
        target_hint="Prayer of Healing",
        text=(
            "Focused Outburst now reduces the cast time of Prayer of Healing "
            "by 40% in PvP combat (was 15%)."
        ),
        hotfix_date=None,
        context_path=("Priest", "Holy", "Archon"),
    )

    shadow = FakeCatalog(
        talents=[
            FakeTalent(
                talent_name="Focused Outburst",
                spell_id=1272320,
                pve_tooltip=(
                    "Void Volley deals 5% increased damage and Shadow Word: "
                    "Madness casts during Voidform unleash a Void Volley at "
                    "your target at 25% effectiveness."
                ),
                pvp_tooltip=(
                    "Void Volley deals 5% increased damage and Shadow Word: "
                    "Madness casts during Voidform unleash a Void Volley at "
                    "your target at 25% effectiveness."
                ),
            )
        ]
    )
    shadow.class_name = "Priest"
    shadow.spec_name = "Shadow"

    report = blizzard_hotfixes.apply_official_pvp_hotfixes(
        shadow,
        [hotfix],
    )

    assert report["unresolved"] == []
    assert report["ignored_non_talent"][0]["reason"] == "SPEC_SCOPE_MISMATCH"


def test_current_additive_percent_expression_is_recognized():
    hotfix = blizzard_hotfixes.OfficialPvpHotfix(
        talent_name="Ebon Might",
        current_percent=12,
        previous_percent=10,
        target_hint=None,
        text="Ebon Might grants 12% primary stat in PvP combat (was 10%).",
        hotfix_date=None,
        context_path=("Evoker", "Augmentation"),
    )
    catalog = FakeCatalog(
        talents=[
            FakeTalent(
                talent_name="Ebon Might",
                spell_id=395152,
                pve_tooltip=(
                    "Increase allies' primary stat by (8 + 0)% of your own."
                ),
                pvp_tooltip=(
                    "Increase allies' primary stat by (12 + 0)% of your own."
                ),
            )
        ]
    )
    catalog.class_name = "Evoker"
    catalog.spec_name = "Augmentation"

    report = blizzard_hotfixes.apply_official_pvp_hotfixes(
        catalog,
        [hotfix],
    )

    assert report["unresolved"] == []
    assert len(report["already_current"]) == 1



def test_relative_hotfix_is_verified_against_exact_mechanic_factor():
    html = """
    <html><body>
    <h3>September 24, 2026</h3>
    <h3>Player versus Player</h3>
    <ul><li>Druid<ul><li>Feral<ul>
      <li>Example Claw damage increased by 20% in PvP combat.</li>
    </ul></li></ul></li></ul>
    </body></html>
    """
    hotfix = blizzard_hotfixes.parse_official_pvp_hotfixes(html)[0]
    assert hotfix.mode == "relative_increase"
    assert hotfix.current_percent == 20
    assert hotfix.context_path == ("Druid", "Feral")

    catalog = FakeCatalog(
        talents=[
            FakeTalent(
                talent_name="Example Claw",
                spell_id=123,
                pve_tooltip="Deals (100% of Attack Power) damage.",
                pvp_tooltip="Deals (120% of Attack Power) damage.",
                tooltip_changed=True,
                mechanics=[
                    {
                        "source_spell_id": 123,
                        "effect_index": 1,
                        "spell_pvp_multiplier": 1.2,
                        "aura_factor": 1.0,
                        "aura_rules": [],
                    }
                ],
            )
        ]
    )
    catalog.class_name = "Druid"
    catalog.spec_name = "Feral"

    report = blizzard_hotfixes.apply_official_pvp_hotfixes(
        catalog,
        [hotfix],
    )
    assert report["unresolved"] == []
    assert len(report["already_current"]) == 1
    assert report["already_current"][0]["evidence"]["factor"] == 1.2


def test_relative_hotfix_overlays_one_unambiguous_rendered_damage_effect():
    hotfix = blizzard_hotfixes.OfficialPvpHotfix(
        talent_name="Agony",
        current_percent=40,
        previous_percent=None,
        target_hint=None,
        text="Agony damage increased by 40% in PvP combat.",
        hotfix_date=__import__("datetime").date(2026, 9, 22),
        mode="relative_increase",
        context_path=("Warlock", "Affliction"),
    )

    pve = (
        "Inflicts increasing agony, causing "
        "(9.31297% of Spell Power) Shadow damage."
    )
    pvp = (
        "Inflicts increasing agony, causing "
        "(10.4045% of Spell Power) Shadow damage."
    )
    start = pve.index("9.31297")

    talent = FakeTalent(
        talent_name="Agony",
        spell_id=980,
        pve_tooltip=pve,
        pvp_tooltip=pvp,
        tooltip_changed=True,
        has_pvp_mechanics=True,
        changes=[
            {
                "start": start,
                "end": start + len("9.31297"),
                "old_token": "9.31297",
                "new_token": "10.4045",
                "kind": "spell_power_coefficient",
                "effect_indexes": [1],
            }
        ],
        mechanics=[
            {
                "source_spell_id": 980,
                "effect_index": 1,
                "effect_text": "Apply Aura: Periodic Damage",
                "spell_pvp_multiplier": 0.7,
                "aura_factor": 1.596,
                "final_pvp_multiplier": 1.1172,
                "final_pvp_value": None,
                "aura_rules": [],
                "sources": ["wowhead", "simc"],
                "confidence": "high",
            }
        ],
    )
    catalog = FakeCatalog(
        talents=[talent]
    )
    catalog.class_name = "Warlock"
    catalog.spec_name = "Affliction"

    report = (
        blizzard_hotfixes
        .apply_official_pvp_hotfixes(
            catalog,
            [hotfix],
        )
    )

    assert report["unresolved"] == []
    assert len(report["applied"]) == 1
    assert "14.5663% of Spell Power" in talent.pvp_tooltip
    assert len(talent.changes) == 1
    assert talent.changes[0]["new_token"] == "14.5663"
    assert talent.changes[0]["kind"] == "official_hotfix_relative"

    mechanic = talent.mechanics[0]
    assert mechanic["spell_pvp_multiplier"] == 0.7
    assert mechanic["official_hotfix_factor"] == 1.4
    assert abs(
        mechanic["final_pvp_multiplier"]
        - 1.56408
    ) < 1e-9
    assert "blizzard_hotfix" in mechanic["sources"]

    second = (
        blizzard_hotfixes
        .apply_official_pvp_hotfixes(
            catalog,
            [hotfix],
        )
    )
    assert second["unresolved"] == []
    assert len(second["already_current"]) == 1
    assert "14.5663% of Spell Power" in talent.pvp_tooltip
    assert abs(
        mechanic["final_pvp_multiplier"]
        - 1.56408
    ) < 1e-9


def test_relative_hotfix_fails_closed_without_source_evidence():
    hotfix = blizzard_hotfixes.OfficialPvpHotfix(
        talent_name="Example Claw",
        current_percent=20,
        previous_percent=None,
        target_hint=None,
        text="Example Claw damage increased by 20% in PvP combat.",
        hotfix_date=None,
        mode="relative_increase",
        context_path=("Druid", "Feral"),
    )
    catalog = FakeCatalog(
        talents=[
            FakeTalent(
                talent_name="Example Claw",
                spell_id=123,
                pve_tooltip="Deals damage.",
                pvp_tooltip="Deals damage.",
            )
        ]
    )
    catalog.class_name = "Druid"
    catalog.spec_name = "Feral"

    report = blizzard_hotfixes.apply_official_pvp_hotfixes(
        catalog,
        [hotfix],
    )
    assert len(report["unresolved"]) == 1
    assert report["unresolved"][0]["reason"] == "RELATIVE_HOTFIX_NOT_IN_MECHANICS"



def test_relative_hotfix_can_use_pre_hotfix_verified_snapshot():
    hotfix = blizzard_hotfixes.OfficialPvpHotfix(
        talent_name="Example Strike",
        current_percent=100,
        previous_percent=None,
        target_hint=None,
        text="Example Strike damage increased by 100% in PvP combat.",
        hotfix_date=__import__("datetime").date(2026, 9, 22),
        mode="relative_increase",
        context_path=("Death Knight", "Unholy"),
    )
    talent = FakeTalent(
        talent_name="Example Strike",
        spell_id=123,
        pve_tooltip="Deals damage.",
        pvp_tooltip="Deals damage.",
        mechanics=[
            {
                "source_spell_id": 456,
                "effect_index": 1,
                "spell_pvp_multiplier": 2.704,
                "aura_factor": 1.02,
                "final_pvp_multiplier": 2.75808,
                "aura_rules": [],
            }
        ],
    )
    catalog = FakeCatalog(talents=[talent])
    catalog.class_name = "Death Knight"
    catalog.spec_name = "Unholy"
    baseline = {
        "2026-09-22": {
            "commit": "oldverified",
            "by_spell": {
                "123": {
                    "spell_id": 123,
                    "talent_name": "Example Strike",
                    "mechanics": [
                        {
                            "source_spell_id": 456,
                            "effect_index": 1,
                            "spell_pvp_multiplier": 1.352,
                            "aura_factor": 1.02,
                            "final_pvp_multiplier": 1.37904,
                        }
                    ],
                }
            },
            "by_name": {},
        }
    }

    report = blizzard_hotfixes.apply_official_pvp_hotfixes(
        catalog,
        [hotfix],
        historical_talents_by_date=baseline,
    )
    assert report["unresolved"] == []
    evidence = report["already_current"][0]["evidence"]
    assert evidence["source"] == "historical_verified_snapshot"
    assert evidence["old_value"] == 1.352
    assert evidence["new_value"] == 2.704


def test_relative_hotfix_name_suffix_can_map_to_parent_talent():
    hotfix = blizzard_hotfixes.OfficialPvpHotfix(
        talent_name="Takedown Pet",
        current_percent=15,
        previous_percent=None,
        target_hint=None,
        text="Takedown Pet damage reduced by 15% in PvP combat.",
        hotfix_date=None,
        mode="relative_reduction",
        context_path=("Hunter", "Survival"),
    )
    talent = FakeTalent(
        talent_name="Takedown",
        spell_id=123,
        pve_tooltip="Deals damage.",
        pvp_tooltip="Deals damage.",
        mechanics=[
            {
                "source_spell_id": 456,
                "effect_index": 1,
                "spell_pvp_multiplier": 0.85,
                "aura_factor": 1.0,
                "final_pvp_multiplier": 0.85,
                "aura_rules": [],
            }
        ],
    )
    catalog = FakeCatalog(talents=[talent])
    catalog.class_name = "Hunter"
    catalog.spec_name = "Survival"

    report = blizzard_hotfixes.apply_official_pvp_hotfixes(
        catalog,
        [hotfix],
    )
    assert report["unresolved"] == []
    assert report["already_current"][0]["talent_name"] == "Takedown"



def test_removed_pvp_increase_is_tracked_as_absence():
    html = """
    <html><body>
    <h3>September 22, 2026</h3>
    <h3>Player versus Player</h3>
    <ul><li>Priest<ul><li>Discipline<ul>
      <li>Atonement healing is no longer increased by 40% in PvP combat.</li>
    </ul></li></ul></li></ul>
    </body></html>
    """
    hotfix = blizzard_hotfixes.parse_official_pvp_hotfixes(html)[0]
    assert hotfix.mode == "remove_relative_increase"
    catalog = FakeCatalog(
        talents=[
            FakeTalent(
                talent_name="Atonement",
                spell_id=81749,
                pve_tooltip="Healing.",
                pvp_tooltip="Healing.",
                mechanics=[],
            )
        ]
    )
    catalog.class_name = "Priest"
    catalog.spec_name = "Discipline"
    report = blizzard_hotfixes.apply_official_pvp_hotfixes(
        catalog,
        [hotfix],
    )
    assert report["unresolved"] == []
    assert report["already_current"][0]["evidence"]["removed_factor"] == 1.4


def test_spec_wide_relative_hotfix_uses_multiple_historical_effects():
    hotfix = blizzard_hotfixes.OfficialPvpHotfix(
        talent_name="__SPEC_DAMAGE__",
        current_percent=5,
        previous_percent=None,
        target_hint=None,
        text="All damage increased by 5% in PvP combat.",
        hotfix_date=__import__("datetime").date(2026, 9, 22),
        mode="spec_relative_increase",
        context_path=("Rogue", "Outlaw"),
    )
    talents = []
    old_by_spell = {}
    for index in range(3):
        spell_id = 100 + index
        talents.append(
            FakeTalent(
                talent_name=f"Talent {index}",
                spell_id=spell_id,
                pve_tooltip="Deals damage.",
                pvp_tooltip="Deals damage.",
                mechanics=[
                    {
                        "source_spell_id": spell_id,
                        "effect_index": 1,
                        "spell_pvp_multiplier": 1.0,
                        "aura_factor": 0.99,
                        "final_pvp_multiplier": 0.99,
                    }
                ],
            )
        )
        old_by_spell[str(spell_id)] = {
            "spell_id": spell_id,
            "talent_name": f"Talent {index}",
            "mechanics": [
                {
                    "source_spell_id": spell_id,
                    "effect_index": 1,
                    "spell_pvp_multiplier": 1.0,
                    "aura_factor": 0.94,
                    "final_pvp_multiplier": 0.94,
                }
            ],
        }
    catalog = FakeCatalog(talents=talents)
    catalog.class_name = "Rogue"
    catalog.spec_name = "Outlaw"
    report = blizzard_hotfixes.apply_official_pvp_hotfixes(
        catalog,
        [hotfix],
        historical_talents_by_date={
            "2026-09-22": {
                "commit": "baseline",
                "by_spell": old_by_spell,
                "by_name": {},
            }
        },
    )
    assert report["unresolved"] == []
    assert len(report["already_current"][0]["evidence"]["changed_effects"]) == 3



def test_parse_spec_wide_relative_damage_hotfix():
    html = """
    <html><body>
    <h3>September 22, 2026</h3>
    <h3>Player versus Player</h3>
    <ul><li>Rogue<ul><li>Outlaw<ul>
      <li>All damage increased by 5% in PvP combat.</li>
    </ul></li></ul></li></ul>
    </body></html>
    """
    item = blizzard_hotfixes.parse_official_pvp_hotfixes(html)[0]
    assert item.talent_name == "__SPEC_DAMAGE__"
    assert item.mode == "spec_relative_increase"
    assert item.context_path == ("Rogue", "Outlaw")


def test_historical_relative_evidence_requires_announced_ratio():
    hotfix = blizzard_hotfixes.OfficialPvpHotfix(
        talent_name="Example Strike",
        current_percent=20,
        previous_percent=None,
        target_hint=None,
        text="Example Strike damage increased by 20% in PvP combat.",
        hotfix_date=__import__("datetime").date(2026, 9, 22),
        mode="relative_increase",
        context_path=("Warrior", "Arms"),
    )
    talent = FakeTalent(
        talent_name="Example Strike",
        spell_id=123,
        pve_tooltip="Deals damage.",
        pvp_tooltip="Deals damage.",
        mechanics=[{
            "source_spell_id": 456,
            "effect_index": 1,
            "spell_pvp_multiplier": 1.10,
            "aura_factor": 1.0,
            "final_pvp_multiplier": 1.10,
        }],
    )
    catalog = FakeCatalog(talents=[talent])
    catalog.class_name = "Warrior"
    catalog.spec_name = "Arms"
    baseline = {
        "2026-09-22": {
            "commit": "oldverified",
            "by_spell": {
                "123": {
                    "mechanics": [{
                        "source_spell_id": 456,
                        "effect_index": 1,
                        "spell_pvp_multiplier": 1.0,
                        "aura_factor": 1.0,
                        "final_pvp_multiplier": 1.0,
                    }],
                }
            },
            "by_name": {},
        }
    }
    report = blizzard_hotfixes.apply_official_pvp_hotfixes(
        catalog,
        [hotfix],
        historical_talents_by_date=baseline,
    )
    assert len(report["unresolved"]) == 1
    assert report["already_current"] == []


def test_historical_relative_evidence_uses_composed_player_value():
    hotfix = blizzard_hotfixes.OfficialPvpHotfix(
        talent_name="Child Strike",
        current_percent=20,
        previous_percent=None,
        target_hint=None,
        text="Child Strike damage increased by 20%.",
        hotfix_date=__import__("datetime").date(2026, 9, 22),
        mode="relative_increase",
        context_path=("Paladin", "Retribution"),
    )
    talent = FakeTalent(
        talent_name="Parent Talent",
        spell_id=123,
        pve_tooltip="Parent.\nChild Strike:\nDeals damage.",
        pvp_tooltip="Parent.\nChild Strike:\nDeals damage.",
        mechanics=[{
            "source_spell_id": 456,
            "effect_index": 1,
            "effect_text": "School Damage (Holy) (AP mod: 10.4516 )",
            "spell_pvp_multiplier": 0.544,
            "aura_factor": 1.173,
            "final_pvp_multiplier": 0.638112,
        }],
    )
    catalog = FakeCatalog(talents=[talent])
    catalog.class_name = "Paladin"
    catalog.spec_name = "Retribution"
    baseline = {
        "2026-09-22": {
            "commit": "oldverified",
            "by_spell": {
                "123": {
                    "mechanics": [{
                        "source_spell_id": 456,
                        "effect_index": 1,
                        "effect_text": "School Damage (Holy) (AP mod: 6.96774 )",
                        "spell_pvp_multiplier": 0.68,
                        "aura_factor": 1.173,
                        "final_pvp_multiplier": 0.79764,
                    }],
                }
            },
            "by_name": {},
        }
    }

    report = blizzard_hotfixes.apply_official_pvp_hotfixes(
        catalog,
        [hotfix],
        historical_talents_by_date=baseline,
    )
    assert report["unresolved"] == []
    assert report["ignored_non_talent"] == []
    assert len(report["already_current"]) == 1
    assert report["already_current"][0]["talent_name"] == "Parent Talent"
    evidence = report["already_current"][0]["evidence"]
    assert evidence["field"] == "effective_player_value"
    assert abs(evidence["ratio"] - 1.2) < 1e-4


def test_embedded_hotfix_parent_requires_standalone_heading():
    hotfix = blizzard_hotfixes.OfficialPvpHotfix(
        talent_name="Baseline Slow",
        current_percent=20,
        previous_percent=None,
        target_hint=None,
        text="Baseline Slow damage increased by 20% in PvP combat.",
        hotfix_date=__import__("datetime").date(2026, 9, 22),
        mode="relative_increase",
        context_path=("Hunter",),
    )
    talent = FakeTalent(
        talent_name="Related Talent",
        spell_id=123,
        pve_tooltip="Baseline Slow is improved by this talent.",
        pvp_tooltip="Baseline Slow is improved by this talent.",
    )
    catalog = FakeCatalog(talents=[talent])
    catalog.class_name = "Hunter"
    catalog.spec_name = "Marksmanship"

    report = blizzard_hotfixes.apply_official_pvp_hotfixes(
        catalog,
        [hotfix],
    )
    assert report["already_current"] == []
    assert report["unresolved"] == []
    assert len(report["ignored_non_talent"]) == 1


def test_spec_wide_relative_hotfix_rejects_wrong_aura_delta():
    hotfix = blizzard_hotfixes.OfficialPvpHotfix(
        talent_name="__SPEC_DAMAGE__",
        current_percent=5,
        previous_percent=None,
        target_hint=None,
        text="All damage increased by 5% in PvP combat.",
        hotfix_date=__import__("datetime").date(2026, 9, 22),
        mode="spec_relative_increase",
        context_path=("Rogue", "Outlaw"),
    )
    talents = []
    old_by_spell = {}
    for index in range(3):
        spell_id = 200 + index
        talents.append(FakeTalent(
            talent_name=f"Talent {index}",
            spell_id=spell_id,
            pve_tooltip="Deals damage.",
            pvp_tooltip="Deals damage.",
            mechanics=[{
                "source_spell_id": spell_id,
                "effect_index": 1,
                "aura_factor": 0.96,
            }],
        ))
        old_by_spell[str(spell_id)] = {
            "mechanics": [{
                "source_spell_id": spell_id,
                "effect_index": 1,
                "aura_factor": 0.94,
            }],
        }
    catalog = FakeCatalog(talents=talents)
    catalog.class_name = "Rogue"
    catalog.spec_name = "Outlaw"
    report = blizzard_hotfixes.apply_official_pvp_hotfixes(
        catalog,
        [hotfix],
        historical_talents_by_date={
            "2026-09-22": {
                "commit": "baseline",
                "by_spell": old_by_spell,
                "by_name": {},
            }
        },
    )
    assert len(report["unresolved"]) == 1
    assert report["already_current"] == []
