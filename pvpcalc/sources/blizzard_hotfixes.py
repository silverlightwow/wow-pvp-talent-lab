from __future__ import annotations

from dataclasses import dataclass
from datetime import date, datetime, timedelta
import hashlib
import json
from pathlib import Path
import re
from typing import Any

from bs4 import BeautifulSoup

from ..http import CachedClient


OFFICIAL_HOTFIX_URL = (
    "https://news.blizzard.com/en-us/article/"
    "24296142/hotfixes-september-24-2026"
)

_DATE_RE = re.compile(
    r"^(January|February|March|April|May|June|July|August|"
    r"September|October|November|December)\s+\d{1,2},\s+\d{4}$"
)

_PERCENT_RE = re.compile(
    r"(?<![\d.])(?P<value>\d+(?:\.\d+)?)\s*%"
)

_OLD_PERCENT_RE = re.compile(
    r"\(was\s+(?P<value>\d+(?:\.\d+)?)\s*%\)",
    re.I,
)

_NAME_SPLIT_RE = re.compile(
    r"\s+(?:now\s+)?(?:increases|reduces|grants|causes|"
    r"deals|heals|damage|healing)\b",
    re.I,
)

_TARGET_OF_RE = re.compile(
    r"\bof\s+(?P<target>.+?)\s+by\s+"
    r"\d+(?:\.\d+)?\s*%",
    re.I,
)


@dataclass(frozen=True)
class OfficialPvpHotfix:
    talent_name: str
    current_percent: float
    previous_percent: float | None
    target_hint: str | None
    text: str
    hotfix_date: date | None
    source_url: str = OFFICIAL_HOTFIX_URL


def _clean_text(value: str) -> str:
    return re.sub(r"\s+", " ", str(value or "")).strip()


def _normalize_name(value: str) -> str:
    return (
        _clean_text(value)
        .replace("’", "'")
        .replace("‘", "'")
        .replace("–", "-")
        .casefold()
        .removesuffix(" (pvp talent)")
        .strip()
    )


def _parse_date(value: str) -> date | None:
    text = _clean_text(value)
    if not _DATE_RE.fullmatch(text):
        return None
    try:
        return datetime.strptime(text, "%B %d, %Y").date()
    except ValueError:
        return None


def _parse_candidate(
    text: str,
    *,
    hotfix_date: date | None,
) -> OfficialPvpHotfix | None:
    text = _clean_text(text)

    if (
        "pvp combat" not in text.casefold()
        or "does not apply to pvp combat" in text.casefold()
    ):
        return None

    # We only auto-overlay notes that state an absolute current percentage.
    # Relative-only notes such as "damage increased by 20%" remain owned by
    # the exact-build effect pipeline because applying them to arbitrary
    # tooltip numbers would be unsafe.
    split = _NAME_SPLIT_RE.search(text)
    if split is None:
        return None

    raw_name = text[:split.start()].strip()
    raw_name = re.sub(
        r"\s*\(PvP Talent\)\s*$",
        "",
        raw_name,
        flags=re.I,
    )

    if not raw_name:
        return None

    before_pvp = re.split(
        r"\bin PvP combat\b",
        text,
        maxsplit=1,
        flags=re.I,
    )[0]

    before_was = re.split(
        r"\(was\b",
        before_pvp,
        maxsplit=1,
        flags=re.I,
    )[0]

    values = [
        float(match.group("value"))
        for match in _PERCENT_RE.finditer(before_was)
    ]

    if not values:
        return None

    previous_match = _OLD_PERCENT_RE.search(text)
    previous = (
        float(previous_match.group("value"))
        if previous_match
        else None
    )

    # Relative tuning notes such as "Ravage damage increased by 20% in
    # PvP combat" describe a multiplier on an effect, not an absolute
    # tooltip percentage. The exact-build effect pipeline owns those.
    # This overlay is intentionally limited to absolute player-facing
    # percentages ("now reduces ... by 40%", "grants 12% ... (was 10%)",
    # etc.) where a deterministic text reconciliation is possible.
    relative_tuning = re.search(
        r"\b(?:damage|healing)\s+"
        r"(?:increased|reduced)\s+by\s+"
        r"\d+(?:\.\d+)?\s*%",
        text,
        re.I,
    )

    if relative_tuning is not None:
        return None

    if (
        previous is None
        and " now " not in text.casefold()
    ):
        return None

    target_match = _TARGET_OF_RE.search(before_was)
    target_hint = (
        _clean_text(target_match.group("target"))
        if target_match
        else None
    )

    return OfficialPvpHotfix(
        talent_name=raw_name,
        current_percent=values[-1],
        previous_percent=previous,
        target_hint=target_hint,
        text=text,
        hotfix_date=hotfix_date,
    )


def parse_official_pvp_hotfixes(
    html: str,
    *,
    recent_days: int = 14,
) -> list[OfficialPvpHotfix]:
    soup = BeautifulSoup(html, "lxml")

    current_date = None
    parsed: list[OfficialPvpHotfix] = []

    for node in soup.find_all(
        ["h1", "h2", "h3", "h4", "p", "li"]
    ):
        text = _clean_text(
            node.get_text(" ", strip=True)
        )

        maybe_date = _parse_date(text)
        if maybe_date is not None:
            current_date = maybe_date
            continue

        if node.name != "li":
            continue

        # Parent list items include all nested child text. Only leaf bullets
        # are actual hotfix statements.
        if node.find("li") is not None:
            continue

        item = _parse_candidate(
            text,
            hotfix_date=current_date,
        )
        if item is not None:
            parsed.append(item)

    if not parsed:
        raise RuntimeError(
            "Official Blizzard hotfix page yielded no parseable PvP "
            "percentage changes; refusing to claim fresh verification."
        )

    dated = [
        item.hotfix_date
        for item in parsed
        if item.hotfix_date is not None
    ]

    if dated:
        cutoff = max(dated) - timedelta(
            days=max(0, int(recent_days) - 1)
        )
        parsed = [
            item
            for item in parsed
            if (
                item.hotfix_date is None
                or item.hotfix_date >= cutoff
            )
        ]

    # Apply chronologically. If Blizzard changes the same talent more than
    # once inside the rolling article, an older "was X" transition runs
    # before the newer one instead of overwriting it backwards.
    parsed.sort(
        key=lambda item: (
            item.hotfix_date or date.min,
            item.talent_name.casefold(),
            item.text,
        )
    )

    return parsed


async def fetch_official_pvp_hotfixes(
    client: CachedClient,
) -> list[OfficialPvpHotfix]:
    html = await client.get_text(
        OFFICIAL_HOTFIX_URL
    )
    return parse_official_pvp_hotfixes(
        html
    )


def _hotfix_dict(
    item: OfficialPvpHotfix,
) -> dict:
    return {
        "talent_name":
            item.talent_name,
        "current_percent":
            item.current_percent,
        "previous_percent":
            item.previous_percent,
        "target_hint":
            item.target_hint,
        "text":
            item.text,
        "hotfix_date": (
            item.hotfix_date.isoformat()
            if item.hotfix_date
            else None
        ),
        "source_url":
            item.source_url,
    }


def snapshot_for_hotfixes(
    hotfixes: list[OfficialPvpHotfix],
) -> dict:
    items = [
        _hotfix_dict(item)
        for item in hotfixes
    ]
    canonical = json.dumps(
        items,
        ensure_ascii=False,
        sort_keys=True,
        separators=(",", ":"),
    )
    dated = [
        item.hotfix_date
        for item in hotfixes
        if item.hotfix_date is not None
    ]

    return {
        "source":
            "Blizzard official hotfixes",
        "source_url":
            OFFICIAL_HOTFIX_URL,
        "latest_date": (
            max(dated).isoformat()
            if dated
            else None
        ),
        "snapshot_hash":
            hashlib.sha256(
                canonical.encode("utf-8")
            ).hexdigest(),
        "items":
            items,
    }


def hotfixes_from_snapshot(
    snapshot: dict,
) -> list[OfficialPvpHotfix]:
    if (
        not isinstance(snapshot, dict)
        or not isinstance(
            snapshot.get("items"),
            list,
        )
    ):
        raise ValueError(
            "Invalid official hotfix snapshot"
        )

    result = []

    for raw in snapshot["items"]:
        raw_date = raw.get(
            "hotfix_date"
        )
        result.append(
            OfficialPvpHotfix(
                talent_name=str(
                    raw["talent_name"]
                ),
                current_percent=float(
                    raw["current_percent"]
                ),
                previous_percent=(
                    float(
                        raw[
                            "previous_percent"
                        ]
                    )
                    if raw.get(
                        "previous_percent"
                    )
                    is not None
                    else None
                ),
                target_hint=(
                    str(raw["target_hint"])
                    if raw.get(
                        "target_hint"
                    )
                    else None
                ),
                text=str(
                    raw["text"]
                ),
                hotfix_date=(
                    date.fromisoformat(
                        str(raw_date)
                    )
                    if raw_date
                    else None
                ),
                source_url=str(
                    raw.get(
                        "source_url"
                    )
                    or OFFICIAL_HOTFIX_URL
                ),
            )
        )

    calculated = snapshot_for_hotfixes(
        result
    )

    expected_hash = snapshot.get(
        "snapshot_hash"
    )
    if (
        expected_hash
        and expected_hash
        != calculated[
            "snapshot_hash"
        ]
    ):
        raise ValueError(
            "Official hotfix snapshot hash mismatch"
        )

    return result


def write_hotfix_snapshot(
    path: str | Path,
    hotfixes: list[OfficialPvpHotfix],
) -> dict:
    snapshot = snapshot_for_hotfixes(
        hotfixes
    )
    Path(path).write_text(
        json.dumps(
            snapshot,
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )
    return snapshot


def read_hotfix_snapshot(
    path: str | Path,
) -> tuple[list[OfficialPvpHotfix], dict]:
    snapshot = json.loads(
        Path(path).read_text(
            encoding="utf-8"
        )
    )
    hotfixes = hotfixes_from_snapshot(
        snapshot
    )
    canonical = snapshot_for_hotfixes(
        hotfixes
    )
    return hotfixes, canonical


def _format_percent(value: float) -> str:
    if abs(value - round(value)) <= 1e-9:
        return f"{int(round(value))}%"
    return f"{value:g}%"


def _target_region(
    text: str,
    target_hint: str | None,
) -> tuple[int, int] | None:
    if not target_hint:
        return (0, len(text))

    target_cf = _normalize_name(target_hint)

    offset = 0
    matches = []

    for line in str(text or "").splitlines(True):
        line_end = offset + len(line)
        if target_cf in _normalize_name(line):
            matches.append(
                (offset, line_end)
            )
        offset = line_end

    if len(matches) == 1:
        return matches[0]

    return None


def _replace_one_percent(
    *,
    pve_tooltip: str,
    pvp_tooltip: str,
    hotfix: OfficialPvpHotfix,
) -> tuple[str, dict[str, Any] | None, str]:
    region = _target_region(
        pvp_tooltip,
        hotfix.target_hint,
    )

    if region is None:
        return (
            pvp_tooltip,
            None,
            "AMBIGUOUS_TARGET_REGION",
        )

    start, end = region
    segment = pvp_tooltip[start:end]
    new_token = _format_percent(
        hotfix.current_percent
    )

    # If the selected target sentence already contains the official current
    # value and the old value is absent, the normal source pipeline has
    # caught up and no overlay is necessary.
    old_token = (
        _format_percent(
            hotfix.previous_percent
        )
        if hotfix.previous_percent
        is not None
        else None
    )

    if (
        new_token in segment
        and (
            old_token is None
            or old_token not in segment
        )
    ):
        return (
            pvp_tooltip,
            None,
            "ALREADY_CURRENT",
        )

    if old_token is not None:
        local_positions = [
            match.start()
            for match in re.finditer(
                re.escape(old_token),
                segment,
            )
        ]

        if len(local_positions) != 1:
            return (
                pvp_tooltip,
                None,
                "OLD_VALUE_NOT_UNIQUE",
            )

        local_start = local_positions[0]
        local_end = (
            local_start
            + len(old_token)
        )
    else:
        # For a "now ... by N%" hotfix without a "(was X%)" clause, only
        # infer the previous value when the named target sentence exposes
        # exactly one percentage. This is what keeps the overlay generic
        # without guessing among unrelated tooltip numbers.
        local_matches = list(
            _PERCENT_RE.finditer(
                segment
            )
        )

        if len(local_matches) != 1:
            return (
                pvp_tooltip,
                None,
                "PREVIOUS_VALUE_NOT_UNIQUE",
            )

        match = local_matches[0]
        old_token = match.group(0)
        local_start = match.start()
        local_end = match.end()

        try:
            old_value = float(
                match.group("value")
            )
        except ValueError:
            return (
                pvp_tooltip,
                None,
                "PREVIOUS_VALUE_INVALID",
            )

        if (
            abs(
                old_value
                - hotfix.current_percent
            )
            <= 1e-9
        ):
            return (
                pvp_tooltip,
                None,
                "ALREADY_CURRENT",
            )

    absolute_start = start + local_start
    absolute_end = start + local_end

    updated = (
        pvp_tooltip[:absolute_start]
        + new_token
        + pvp_tooltip[absolute_end:]
    )

    # UI comparison highlights are indexed against the PvE tooltip, not the
    # already-transformed PvP string. Prefer the exact old token there.
    pve_region = _target_region(
        pve_tooltip,
        hotfix.target_hint,
    )
    change = None

    if pve_region is not None:
        pve_start, pve_end = pve_region
        pve_segment = pve_tooltip[
            pve_start:pve_end
        ]
        pve_positions = [
            match.start()
            for match in re.finditer(
                re.escape(old_token),
                pve_segment,
            )
        ]

        if len(pve_positions) == 1:
            highlight_start = (
                pve_start
                + pve_positions[0]
            )
            change = {
                "start": highlight_start,
                "end": (
                    highlight_start
                    + len(old_token)
                ),
                "old_token": old_token,
                "new_token": new_token,
                "kind": "official_hotfix_percent",
                "effect_indexes": [],
                "source": "blizzard_hotfix",
            }

    return (
        updated,
        change,
        "APPLIED",
    )


def _apply_to_rank_dict(
    rank: dict,
    hotfix: OfficialPvpHotfix,
) -> str:
    pve = str(
        rank.get("pve_tooltip")
        or ""
    )
    pvp = str(
        rank.get("pvp_tooltip")
        or pve
    )

    updated, change, status = (
        _replace_one_percent(
            pve_tooltip=pve,
            pvp_tooltip=pvp,
            hotfix=hotfix,
        )
    )

    if status == "APPLIED":
        rank["pvp_tooltip"] = updated
        rank["tooltip_changed"] = (
            updated != pve
        )
        if change is not None:
            changes = list(
                rank.get("changes")
                or []
            )
            if change not in changes:
                changes.append(change)
            rank["changes"] = changes

    return status


def apply_official_pvp_hotfixes(
    spec_catalog,
    hotfixes: list[OfficialPvpHotfix],
) -> dict:
    by_name: dict[str, list] = {}

    for talent in spec_catalog.talents:
        by_name.setdefault(
            _normalize_name(
                talent.talent_name
            ),
            [],
        ).append(talent)

    applied = []
    already_current = []
    unresolved = []
    ignored = []

    for hotfix in hotfixes:
        matches = by_name.get(
            _normalize_name(
                hotfix.talent_name
            ),
            [],
        )

        if not matches:
            ignored.append(
                {
                    "talent_name":
                        hotfix.talent_name,
                    "text":
                        hotfix.text,
                    "date": (
                        hotfix.hotfix_date
                        .isoformat()
                        if hotfix.hotfix_date
                        else None
                    ),
                }
            )
            continue

        for talent in matches:
            pve = str(
                talent.pve_tooltip
                or ""
            )
            pvp = str(
                talent.pvp_tooltip
                or pve
            )

            updated, change, status = (
                _replace_one_percent(
                    pve_tooltip=pve,
                    pvp_tooltip=pvp,
                    hotfix=hotfix,
                )
            )

            rank_statuses = []
            for rank in (
                talent.rank_tooltips
                or []
            ):
                rank_statuses.append(
                    _apply_to_rank_dict(
                        rank,
                        hotfix,
                    )
                )

            diagnostic = {
                "status": (
                    "OFFICIAL_HOTFIX_APPLIED"
                    if status == "APPLIED"
                    else
                    "OFFICIAL_HOTFIX_CURRENT"
                    if status == "ALREADY_CURRENT"
                    else
                    "OFFICIAL_HOTFIX_UNRESOLVED"
                ),
                "source":
                    "blizzard_hotfix",
                "source_url":
                    hotfix.source_url,
                "hotfix_date": (
                    hotfix.hotfix_date
                    .isoformat()
                    if hotfix.hotfix_date
                    else None
                ),
                "hotfix_text":
                    hotfix.text,
                "reason":
                    status,
            }

            if status == "APPLIED":
                talent.pvp_tooltip = updated
                talent.tooltip_changed = (
                    updated != pve
                )
                talent.render_status = (
                    "CHANGED"
                    if talent.tooltip_changed
                    else talent.render_status
                )
                talent.has_pvp_mechanics = True

                if change is not None:
                    if change not in talent.changes:
                        talent.changes.append(
                            change
                        )

                talent.diagnostics.append(
                    diagnostic
                )
                applied.append(
                    {
                        "talent_name":
                            talent.talent_name,
                        "spell_id":
                            talent.spell_id,
                        "text":
                            hotfix.text,
                        "date":
                            diagnostic[
                                "hotfix_date"
                            ],
                    }
                )
                continue

            if status == "ALREADY_CURRENT":
                talent.has_pvp_mechanics = True
                talent.diagnostics.append(
                    diagnostic
                )
                already_current.append(
                    {
                        "talent_name":
                            talent.talent_name,
                        "spell_id":
                            talent.spell_id,
                        "text":
                            hotfix.text,
                        "date":
                            diagnostic[
                                "hotfix_date"
                            ],
                    }
                )
                continue

            # A current official note names a talent in this catalog but
            # cannot be reconciled with the player-facing text. Failing
            # closed is preferable to publishing a green VERIFIED badge
            # over stale data.
            unresolved.append(
                {
                    "talent_name":
                        talent.talent_name,
                    "spell_id":
                        talent.spell_id,
                    "text":
                        hotfix.text,
                    "date":
                        diagnostic[
                            "hotfix_date"
                        ],
                    "reason":
                        status,
                    "rank_statuses":
                        rank_statuses,
                }
            )

    snapshot = snapshot_for_hotfixes(
        hotfixes
    )

    return {
        "source":
            snapshot["source"],
        "source_url":
            snapshot["source_url"],
        "latest_date":
            snapshot["latest_date"],
        "snapshot_hash":
            snapshot["snapshot_hash"],
        "applied":
            applied,
        "already_current":
            already_current,
        "unresolved":
            unresolved,
        "ignored_non_talent":
            ignored,
    }
