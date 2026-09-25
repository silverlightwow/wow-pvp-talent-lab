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
