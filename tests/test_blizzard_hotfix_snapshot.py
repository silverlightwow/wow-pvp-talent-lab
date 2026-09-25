from __future__ import annotations

import json

from pvpcalc.sources import blizzard_hotfixes

from test_blizzard_hotfixes import HTML


def test_snapshot_round_trip(tmp_path):
    hotfixes = (
        blizzard_hotfixes
        .parse_official_pvp_hotfixes(
            HTML
        )
    )
    path = tmp_path / "hotfixes.json"

    written = (
        blizzard_hotfixes
        .write_hotfix_snapshot(
            path,
            hotfixes,
        )
    )
    loaded, canonical = (
        blizzard_hotfixes
        .read_hotfix_snapshot(
            path
        )
    )

    assert loaded == hotfixes
    assert (
        canonical["snapshot_hash"]
        == written["snapshot_hash"]
    )
    assert canonical["latest_date"] == "2026-09-24"


def test_snapshot_detects_tampering(tmp_path):
    hotfixes = (
        blizzard_hotfixes
        .parse_official_pvp_hotfixes(
            HTML
        )
    )
    path = tmp_path / "hotfixes.json"
    snapshot = (
        blizzard_hotfixes
        .write_hotfix_snapshot(
            path,
            hotfixes,
        )
    )

    payload = json.loads(
        path.read_text()
    )
    payload["items"][0][
        "current_percent"
    ] += 1
    path.write_text(
        json.dumps(payload)
    )

    try:
        blizzard_hotfixes.read_hotfix_snapshot(
            path
        )
    except ValueError as exc:
        assert "hash mismatch" in str(exc)
    else:
        raise AssertionError(
            "tampered snapshot was accepted"
        )
