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

_SECONDS_RE = re.compile(
    r"(?<![\d.])(?P<value>\d+(?:\.\d+)?)\s*"
    r"(?P<suffix>seconds?|sec)\b",
    re.I,
)

_OLD_SECONDS_RE = re.compile(
    r"\(was\s+(?P<value>\d+(?:\.\d+)?)\s*"
    r"(?:seconds?|sec)\)",
    re.I,
)

_NAME_SPLIT_RE = re.compile(
    r"\s+(?:now\s+)?(?:increases|reduces|grants|causes|"
    r"deals|heals|damage|healing)\b",
    re.I,
)

_TARGET_OF_RE = re.compile(
    r"\bof\s+(?P<target>.+?)\s+by\s+"
    r"\d+(?:\.\d+)?\s*"
    r"(?:%|seconds?\b|sec\b)",
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
    unit: str = "percent"
    mode: str = "absolute"
    context_path: tuple[str, ...] = ()
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


def _direct_list_label(node) -> str:
    """Text owned by one list item, excluding nested sub-lists."""
    parts = []

    for child in getattr(
        node,
        "children",
        (),
    ):
        if getattr(
            child,
            "name",
            None,
        ) in {"ul", "ol"}:
            continue

        if hasattr(
            child,
            "get_text",
        ):
            value = child.get_text(
                " ",
                strip=True,
            )
        else:
            value = str(child)

        value = _clean_text(value)
        if value:
            parts.append(value)

    return _clean_text(
        " ".join(parts)
    )


def _inside_pvp_section(node) -> bool:
    """Recognize a leaf bullet nested below a Player versus Player label."""
    for parent in getattr(
        node,
        "parents",
        (),
    ):
        if getattr(
            parent,
            "name",
            None,
        ) != "li":
            continue

        label = _normalize_name(
            _direct_list_label(
                parent
            )
        )

        if label == "player versus player":
            return True

    return False



_CLASS_NAMES = {
    "death knight", "demon hunter", "druid", "evoker", "hunter", "mage",
    "monk", "paladin", "priest", "rogue", "shaman", "warlock", "warrior",
}

_SPEC_NAMES = {
    "blood", "frost", "unholy", "devourer", "havoc", "vengeance",
    "balance", "feral", "guardian", "restoration", "augmentation",
    "devastation", "preservation", "beast mastery", "marksmanship",
    "survival", "arcane", "fire", "brewmaster", "mistweaver",
    "windwalker", "holy", "protection", "retribution", "discipline",
    "shadow", "assassination", "outlaw", "subtlety", "elemental",
    "enhancement", "affliction", "demonology", "destruction", "arms",
    "fury",
}


def _list_context_path(node) -> tuple[str, ...]:
    """Return stable outer->inner list labels surrounding one hotfix leaf."""
    labels = []
    parents = [
        parent
        for parent in getattr(node, "parents", ())
        if getattr(parent, "name", None) == "li"
    ]
    for parent in reversed(parents):
        label = _clean_text(_direct_list_label(parent))
        if not label:
            continue
        if _normalize_name(label) == "player versus player":
            continue
        labels.append(label)
    return tuple(labels)


def _hotfix_applies_to_catalog(
    hotfix: OfficialPvpHotfix,
    spec_catalog,
) -> bool:
    path = {
        _normalize_name(item)
        for item in hotfix.context_path
        if _clean_text(item)
    }
    classes = path & _CLASS_NAMES
    specs = path & _SPEC_NAMES

    class_name = _normalize_name(
        getattr(spec_catalog, "class_name", "")
    )
    spec_name = _normalize_name(
        getattr(spec_catalog, "spec_name", "")
    )

    if classes and class_name and class_name not in classes:
        return False
    if specs and spec_name and spec_name not in specs:
        return False
    return True


def _extract_target_hint(
    text_before_was: str,
    *,
    unit: str,
) -> str | None:
    """Take the final 'of …' phrase immediately before the changed value.

    Talent names themselves can contain 'of' (Call of Ohn'ahra), so a regex
    beginning at the first 'of' is not safe.
    """
    unit_pattern = (
        r"(?:seconds?|sec)\b"
        if unit == "seconds"
        else r"%"
    )

    value_match = re.search(
        r"\s+by\s+"
        r"\d+(?:\.\d+)?\s*"
        + unit_pattern,
        text_before_was,
        re.I,
    )

    if value_match is None:
        return None

    prefix = text_before_was[
        :value_match.start()
    ]
    of_matches = list(
        re.finditer(
            r"\bof\b",
            prefix,
            re.I,
        )
    )

    if not of_matches:
        return None

    candidates = []

    for match in of_matches:
        candidate = _clean_text(
            prefix[
                match.end():
            ]
        )

        # The talent name itself may contain "of" (Call of Ohn'ahra).
        # Reject suffixes that still contain the action clause, then prefer
        # the longest remaining noun phrase. This also preserves names such
        # as "Prayer of Healing" instead of collapsing them to "Healing".
        if re.search(
            r"\b(?:now|increases|reduces|grants|causes|deals|heals)\b",
            candidate,
            re.I,
        ):
            continue

        if candidate:
            candidates.append(
                candidate
            )

    if not candidates:
        return None

    return max(
        candidates,
        key=len,
    )


def _parse_candidate(
    text: str,
    *,
    hotfix_date: date | None,
    in_pvp_section: bool = False,
    context_path: tuple[str, ...] = (),
) -> OfficialPvpHotfix | None:
    text = _clean_text(text)

    if "does not apply to pvp combat" in text.casefold():
        return None

    if (
        "pvp combat" not in text.casefold()
        and not in_pvp_section
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

    percent_values = [
        float(match.group("value"))
        for match in _PERCENT_RE.finditer(
            before_was
        )
    ]
    second_values = [
        float(match.group("value"))
        for match in _SECONDS_RE.finditer(
            before_was
        )
    ]

    # One directive must describe one unit family. Mixed-unit bullets stay
    # with the exact-build pipeline rather than relying on positional guesses.
    if percent_values and second_values:
        return None

    if percent_values:
        unit = "percent"
        values = percent_values
        previous_match = (
            _OLD_PERCENT_RE.search(
                text
            )
        )
    elif second_values:
        unit = "seconds"
        values = second_values
        previous_match = (
            _OLD_SECONDS_RE.search(
                text
            )
        )
    else:
        return None

    previous = (
        float(previous_match.group("value"))
        if previous_match
        else None
    )

    # Relative PvP tuning is not applied as a second text multiplier:
    # exact-build mechanics already contain the server-side coefficient/aura.
    # We still parse it so the refresh can prove that the corresponding
    # mechanic is present instead of silently publishing stale source data.
    removal_tuning = re.search(
        r"\bno\s+longer\s+"
        r"(?P<direction>increased|reduced)\s+by\s+"
        r"(?P<value>\d+(?:\.\d+)?)\s*%",
        before_was,
        re.I,
    )

    relative_tuning = re.search(
        r"\b(?P<direction>increased|reduced)\s+by\s+"
        r"(?P<value>\d+(?:\.\d+)?)\s*%",
        before_was,
        re.I,
    )

    mode = "absolute"

    if removal_tuning is not None:
        direction = (
            removal_tuning
            .group("direction")
            .casefold()
        )
        return OfficialPvpHotfix(
            talent_name=raw_name,
            current_percent=float(
                removal_tuning.group("value")
            ),
            previous_percent=None,
            target_hint=None,
            text=text,
            hotfix_date=hotfix_date,
            unit="percent",
            mode=(
                "remove_relative_increase"
                if direction == "increased"
                else "remove_relative_reduction"
            ),
            context_path=context_path,
        )

    if (
        unit == "percent"
        and relative_tuning is not None
        and previous is None
        and " now " not in text.casefold()
    ):
        direction = (
            relative_tuning
            .group("direction")
            .casefold()
        )
        spec_wide = (
            _normalize_name(raw_name)
            == "all"
            and "damage" in text.casefold()
        )
        return OfficialPvpHotfix(
            talent_name=(
                "__SPEC_DAMAGE__"
                if spec_wide
                else raw_name
            ),
            current_percent=float(
                relative_tuning.group("value")
            ),
            previous_percent=None,
            target_hint=None,
            text=text,
            hotfix_date=hotfix_date,
            unit="percent",
            mode=(
                (
                    "spec_relative_increase"
                    if direction == "increased"
                    else "spec_relative_reduction"
                )
                if spec_wide
                else (
                    "relative_increase"
                    if direction == "increased"
                    else "relative_reduction"
                )
            ),
            context_path=context_path,
        )

    if (
        previous is None
        and " now " not in text.casefold()
    ):
        return None

    target_hint = _extract_target_hint(
        before_was,
        unit=unit,
    )

    return OfficialPvpHotfix(
        talent_name=raw_name,
        current_percent=values[-1],
        previous_percent=previous,
        target_hint=target_hint,
        text=text,
        hotfix_date=hotfix_date,
        unit=unit,
        mode="absolute",
        context_path=context_path,
    )


def _top_level_section_marker(
    node,
    text: str,
) -> str | None:
    """Return a normalized article-section label for top-level headings.

    Blizzard's rolling hotfix article has used both heading tags and
    bold paragraphs for section names over time. Nested class/spec labels
    live inside list items and must not change the active section.
    """
    if getattr(
        node,
        "find_parent",
        None,
    ) is None:
        return None

    if node.find_parent("li") is not None:
        return None

    name = getattr(
        node,
        "name",
        None,
    )

    is_heading = name in {
        "h2", "h3", "h4", "h5", "h6"
    }

    is_bold_paragraph = (
        name == "p"
        and node.find(
            ["strong", "b"]
        ) is not None
        and len(text) <= 80
    )

    if not (
        is_heading
        or is_bold_paragraph
    ):
        return None

    return _normalize_name(
        text
    )


def parse_official_pvp_hotfixes(
    html: str,
    *,
    recent_days: int = 14,
) -> list[OfficialPvpHotfix]:
    soup = BeautifulSoup(html, "lxml")

    current_date = None
    active_section = None
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
            active_section = None
            continue

        section_marker = (
            _top_level_section_marker(
                node,
                text,
            )
        )

        if section_marker is not None:
            active_section = (
                "pvp"
                if section_marker
                == "player versus player"
                else None
            )

        if node.name != "li":
            continue

        # Parent list items include all nested child text. Only leaf bullets
        # are actual hotfix statements.
        if node.find("li") is not None:
            continue

        item = _parse_candidate(
            text,
            hotfix_date=current_date,
            in_pvp_section=(
                active_section == "pvp"
                or _inside_pvp_section(
                    node
                )
            ),
            context_path=_list_context_path(
                node
            ),
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
        "unit":
            item.unit,
        "mode":
            item.mode,
        "context_path":
            list(item.context_path),
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
                unit=str(
                    raw.get("unit")
                    or "percent"
                ),
                mode=str(
                    raw.get("mode")
                    or "absolute"
                ),
                context_path=tuple(
                    str(item)
                    for item in (
                        raw.get("context_path")
                        or []
                    )
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


def _format_number(
    value: float,
) -> str:
    if abs(
        value - round(value)
    ) <= 1e-9:
        return str(
            int(
                round(value)
            )
        )
    return f"{value:g}"



_COMPOSITE_PERCENT_RE = re.compile(
    r"\(\s*(?P<value>\d+(?:\.\d+)?)"
    r"(?P<tail>\s*\+\s*\d+(?:\.\d+)?\s*\)\s*%)"
)


@dataclass(frozen=True)
class _ValueMatch:
    token: str
    value: float
    start_pos: int
    end_pos: int

    def group(self, key=0):
        if key == 0:
            return self.token
        if key == "value":
            return _format_number(self.value)
        raise IndexError(key)

    def start(self, *_):
        return self.start_pos

    def end(self, *_):
        return self.end_pos


def _value_matches(
    segment: str,
    *,
    unit: str,
):
    if unit != "percent":
        return list(_SECONDS_RE.finditer(segment))

    composite = list(
        _COMPOSITE_PERCENT_RE.finditer(
            segment
        )
    )
    occupied = [
        (match.start(), match.end())
        for match in composite
    ]

    result = [
        _ValueMatch(
            token=match.group(0),
            value=float(match.group("value")),
            start_pos=match.start(),
            end_pos=match.end(),
        )
        for match in composite
    ]

    for match in _PERCENT_RE.finditer(
        segment
    ):
        if any(
            start <= match.start() < end
            for start, end in occupied
        ):
            continue
        result.append(match)

    return sorted(
        result,
        key=lambda match: match.start(),
    )


def _value_pattern(
    unit: str,
):
    return (
        _SECONDS_RE
        if unit == "seconds"
        else _PERCENT_RE
    )


def _match_value(
    match,
) -> float:
    return float(
        match.group("value")
    )


def _replacement_token(
    value: float,
    *,
    unit: str,
    template: str | None = None,
) -> str:
    number = _format_number(
        value
    )

    if unit == "seconds":
        template_cf = str(
            template
            or ""
        ).casefold()

        if "second" in template_cf:
            suffix = (
                "second"
                if abs(value - 1.0)
                <= 1e-9
                else "seconds"
            )
        else:
            suffix = "sec"

        return f"{number} {suffix}"

    if unit == "percent" and template:
        composite = _COMPOSITE_PERCENT_RE.fullmatch(
            str(template)
        )
        if composite is not None:
            return (
                str(template)[:composite.start("value")]
                + number
                + str(template)[composite.end("value"):]
            )

    return f"{number}%"


def _target_terms(
    target_hint: str | None,
) -> list[str]:
    if not target_hint:
        return []

    # Blizzard often writes "Slam and Mortal Strike" while the client
    # tooltip says "Mortal Strike and Slam". Match all named pieces without
    # making word order part of correctness.
    parts = re.split(
        r"\s*(?:,|\band\b|\bor\b)\s*",
        _normalize_name(
            target_hint
        ),
        flags=re.I,
    )

    return [
        part.strip(" .:")
        for part in parts
        if len(
            part.strip(" .:")
        ) >= 2
    ]


def _line_contains_target(
    line: str,
    target_hint: str | None,
) -> bool:
    terms = _target_terms(
        target_hint
    )

    if not terms:
        return True

    line_cf = _normalize_name(
        line
    )

    return all(
        term in line_cf
        for term in terms
    )


def _target_region(
    text: str,
    target_hint: str | None,
) -> tuple[int, int] | None:
    if not target_hint:
        return (0, len(text))

    offset = 0
    matches = []

    for line in str(
        text
        or ""
    ).splitlines(True):
        line_end = (
            offset
            + len(line)
        )

        if _line_contains_target(
            line,
            target_hint,
        ):
            matches.append(
                (offset, line_end)
            )

        offset = line_end

    if len(matches) == 1:
        return matches[0]

    return None


def _target_tail_offset(
    segment: str,
    target_hint: str | None,
) -> int | None:
    terms = _target_terms(
        target_hint
    )

    if not terms:
        return None

    segment_cf = _normalize_name(
        segment
    )
    ends = []

    for term in terms:
        position = segment_cf.find(
            term
        )
        if position < 0:
            return None
        ends.append(
            position
            + len(term)
        )

    # _normalize_name only changes punctuation/case/whitespace. For the
    # short one-line target regions used here, a normalized offset is a safe
    # lower bound for choosing values that occur after every named target.
    return max(ends)


def _select_value_match(
    segment: str,
    *,
    hotfix: OfficialPvpHotfix,
    prefer_previous: bool,
):
    matches = _value_matches(
        segment,
        unit=hotfix.unit,
    )

    if not matches:
        return None

    if (
        prefer_previous
        and hotfix.previous_percent
        is not None
    ):
        exact = [
            match
            for match in matches
            if abs(
                _match_value(match)
                - hotfix.previous_percent
            ) <= 1e-9
        ]

        if len(exact) == 1:
            return exact[0]

    tail = _target_tail_offset(
        segment,
        hotfix.target_hint,
    )

    if tail is not None:
        after_target = [
            match
            for match in matches
            if match.start() >= tail
        ]

        if len(after_target) == 1:
            return after_target[0]

    if len(matches) == 1:
        return matches[0]

    return None


def _region_has_current_value(
    segment: str,
    hotfix: OfficialPvpHotfix,
) -> bool:
    matches = _value_matches(
        segment,
        unit=hotfix.unit,
    )

    candidates = matches
    tail = _target_tail_offset(
        segment,
        hotfix.target_hint,
    )

    if tail is not None:
        after_target = [
            match
            for match in matches
            if match.start() >= tail
        ]
        if after_target:
            candidates = after_target

    return any(
        abs(
            _match_value(match)
            - hotfix.current_percent
        ) <= 1e-9
        for match in candidates
    )


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
    segment = pvp_tooltip[
        start:end
    ]

    match = _select_value_match(
        segment,
        hotfix=hotfix,
        prefer_previous=True,
    )

    if match is None:
        if _region_has_current_value(
            segment,
            hotfix,
        ):
            return (
                pvp_tooltip,
                None,
                "ALREADY_CURRENT",
            )

        return (
            pvp_tooltip,
            None,
            (
                "OLD_VALUE_NOT_UNIQUE"
                if hotfix.previous_percent
                is not None
                else
                "PREVIOUS_VALUE_NOT_UNIQUE"
            ),
        )

    actual_old = _match_value(
        match
    )
    actual_old_token = (
        match.group(0)
    )
    new_token = _replacement_token(
        hotfix.current_percent,
        unit=hotfix.unit,
        template=actual_old_token,
    )

    if abs(
        actual_old
        - hotfix.current_percent
    ) <= 1e-9:
        return (
            pvp_tooltip,
            None,
            "ALREADY_CURRENT",
        )

    absolute_start = (
        start
        + match.start()
    )
    absolute_end = (
        start
        + match.end()
    )

    updated = (
        pvp_tooltip[
            :absolute_start
        ]
        + new_token
        + pvp_tooltip[
            absolute_end:
        ]
    )

    # UI comparison highlights are indexed against the PvE tooltip. Select
    # the same semantic target there, rather than assuming Blizzard's
    # historical "(was X)" value still equals today's PvE value.
    pve_region = _target_region(
        pve_tooltip,
        hotfix.target_hint,
    )
    change = None

    if pve_region is not None:
        pve_start, pve_end = (
            pve_region
        )
        pve_segment = pve_tooltip[
            pve_start:pve_end
        ]
        pve_match = _select_value_match(
            pve_segment,
            hotfix=hotfix,
            prefer_previous=True,
        )

        if pve_match is not None:
            pve_old_token = (
                pve_match.group(0)
            )
            highlight_start = (
                pve_start
                + pve_match.start()
            )
            change = {
                "start":
                    highlight_start,
                "end":
                    highlight_start
                    + len(
                        pve_old_token
                    ),
                "old_token":
                    pve_old_token,
                "new_token":
                    _replacement_token(
                        hotfix.current_percent,
                        unit=hotfix.unit,
                        template=pve_old_token,
                    ),
                "kind":
                    (
                        "official_hotfix_seconds"
                        if hotfix.unit
                        == "seconds"
                        else
                        "official_hotfix_percent"
                    ),
                "effect_indexes":
                    [],
                "source":
                    "blizzard_hotfix",
            }

    return (
        updated,
        change,
        "APPLIED",
    )


def _with_authoritative_change(
    existing_changes,
    change: dict | None,
) -> list[dict]:
    """Store one official overlay while removing superseded overlaps.

    The normal pipeline may already have rendered an older PvP value from a
    lagging source. When an official Blizzard hotfix then replaces that same
    tooltip token, keeping both changes would expose an obsolete intermediate
    value in the UI (for example 25 -> 30 next to the authoritative 25 -> 40).
    """
    changes = list(
        existing_changes
        or []
    )

    if change is None:
        return changes

    try:
        start = int(
            change["start"]
        )
        end = int(
            change["end"]
        )
    except (
        KeyError,
        TypeError,
        ValueError,
    ):
        if change not in changes:
            changes.append(
                change
            )
        return changes

    kept = []

    for existing in changes:
        try:
            existing_start = int(
                existing["start"]
            )
            existing_end = int(
                existing["end"]
            )
        except (
            KeyError,
            TypeError,
            ValueError,
        ):
            kept.append(
                existing
            )
            continue

        overlaps = (
            max(
                start,
                existing_start,
            )
            < min(
                end,
                existing_end,
            )
        )

        if not overlaps:
            kept.append(
                existing
            )

    if change not in kept:
        kept.append(
            change
        )

    return kept


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
            rank["changes"] = (
                _with_authoritative_change(
                    rank.get("changes"),
                    change,
                )
            )

    return status



def _relative_hotfix_factor(
    hotfix: OfficialPvpHotfix,
) -> float | None:
    if hotfix.mode == "relative_increase":
        return 1.0 + hotfix.current_percent / 100.0
    if hotfix.mode == "relative_reduction":
        return 1.0 - hotfix.current_percent / 100.0
    return None


_RELATIVE_RENDER_NUMBER_RE = re.compile(
    r"^(?P<prefix>\s*)"
    r"(?P<value>[+-]?\d+(?:\.\d+)?)"
    r"(?P<suffix>%?)"
    r"(?P<tail>\s*)$"
)


def _relative_overlay_token(
    token: str,
    factor: float,
) -> str | None:
    match = _RELATIVE_RENDER_NUMBER_RE.fullmatch(
        str(token)
    )
    if match is None:
        return None

    raw_value = match.group("value")
    value = float(raw_value) * factor

    decimals = (
        len(raw_value.split(".", 1)[1])
        if "." in raw_value
        else 0
    )

    if decimals:
        rendered = (
            f"{value:.{decimals}f}"
            .rstrip("0")
            .rstrip(".")
        )
    else:
        rendered = _format_number(
            value
        )

    return (
        match.group("prefix")
        + rendered
        + match.group("suffix")
        + match.group("tail")
    )


def _apply_relative_hotfix_overlay(
    talent,
    hotfix: OfficialPvpHotfix,
) -> dict | None:
    """Apply a server-side official relative hotfix when sources lag.

    This is deliberately conservative. We only synthesize a numeric overlay
    when the already-rendered PvP tooltip exposes exactly one coefficient
    change tied to exactly one mechanic whose semantic type matches the
    Blizzard wording (damage or healing).
    """
    factor = _relative_hotfix_factor(
        hotfix
    )
    if factor is None:
        return None

    text_cf = hotfix.text.casefold()
    if "damage" in text_cf:
        semantic_terms = (
            "damage",
        )
    elif (
        "healing" in text_cf
        or " heal" in text_cf
    ):
        semantic_terms = (
            "heal",
            "healing",
        )
    else:
        return None

    candidates = []

    for change in (
        getattr(
            talent,
            "changes",
            None,
        )
        or []
    ):
        kind = str(
            change.get("kind")
            or ""
        ).casefold()

        if "coefficient" not in kind:
            continue

        effect_indexes = {
            int(index)
            for index in (
                change.get(
                    "effect_indexes"
                )
                or []
            )
            if index is not None
        }
        if not effect_indexes:
            continue

        current_token = str(
            change.get(
                "new_token"
            )
            or ""
        )
        overlay_token = (
            _relative_overlay_token(
                current_token,
                factor,
            )
        )
        if overlay_token is None:
            continue

        matching_mechanics = []

        for mechanic in (
            getattr(
                talent,
                "mechanics",
                None,
            )
            or []
        ):
            try:
                effect_index = int(
                    mechanic.get(
                        "effect_index"
                    )
                )
            except (
                TypeError,
                ValueError,
            ):
                continue

            effect_text = str(
                mechanic.get(
                    "effect_text"
                )
                or ""
            ).casefold()

            if (
                effect_index
                in effect_indexes
                and any(
                    term in effect_text
                    for term in semantic_terms
                )
            ):
                matching_mechanics.append(
                    mechanic
                )

        if len(
            matching_mechanics
        ) != 1:
            continue

        pvp_tooltip = str(
            getattr(
                talent,
                "pvp_tooltip",
                "",
            )
            or ""
        )

        if (
            not current_token
            or pvp_tooltip.count(
                current_token
            )
            != 1
        ):
            continue

        candidates.append(
            (
                change,
                matching_mechanics[0],
                current_token,
                overlay_token,
            )
        )

    if len(candidates) != 1:
        return None

    (
        change,
        mechanic,
        current_token,
        overlay_token,
    ) = candidates[0]

    old_final_multiplier = (
        mechanic.get(
            "final_pvp_multiplier"
        )
    )
    old_final_value = (
        mechanic.get(
            "final_pvp_value"
        )
    )

    try:
        old_final_multiplier = float(
            old_final_multiplier
        )
    except (
        TypeError,
        ValueError,
    ):
        return None

    new_final_multiplier = (
        old_final_multiplier
        * factor
    )

    pvp_tooltip = str(
        talent.pvp_tooltip
        or ""
    )
    talent.pvp_tooltip = (
        pvp_tooltip.replace(
            current_token,
            overlay_token,
            1,
        )
    )
    talent.tooltip_changed = (
        talent.pvp_tooltip
        != str(
            talent.pve_tooltip
            or ""
        )
    )
    talent.has_pvp_mechanics = True

    authoritative_change = {
        **change,
        "new_token":
            overlay_token,
        "kind":
            "official_hotfix_relative",
        "source":
            "blizzard_hotfix",
        "official_hotfix_factor":
            factor,
    }
    talent.changes = (
        _with_authoritative_change(
            talent.changes,
            authoritative_change,
        )
    )

    mechanic[
        "final_pvp_multiplier"
    ] = new_final_multiplier
    mechanic[
        "official_hotfix_factor"
    ] = factor
    mechanic[
        "official_hotfix_date"
    ] = (
        hotfix.hotfix_date.isoformat()
        if hotfix.hotfix_date
        else None
    )
    mechanic[
        "official_hotfix_source_url"
    ] = hotfix.source_url
    mechanic[
        "official_hotfix_text"
    ] = hotfix.text
    mechanic[
        "is_final_pvp_modified"
    ] = True

    if old_final_value is not None:
        try:
            mechanic[
                "final_pvp_value"
            ] = (
                float(
                    old_final_value
                )
                * factor
            )
        except (
            TypeError,
            ValueError,
        ):
            pass

    sources = list(
        mechanic.get(
            "sources"
        )
        or []
    )
    if "blizzard_hotfix" not in sources:
        sources.append(
            "blizzard_hotfix"
        )
    mechanic["sources"] = sources
    mechanic["confidence"] = "high"

    return {
        "source":
            "blizzard_official_overlay",
        "factor":
            factor,
        "effect_index":
            mechanic.get(
                "effect_index"
            ),
        "source_spell_id":
            mechanic.get(
                "source_spell_id"
            ),
        "old_rendered_token":
            current_token,
        "new_rendered_token":
            overlay_token,
        "old_final_pvp_multiplier":
            old_final_multiplier,
        "new_final_pvp_multiplier":
            new_final_multiplier,
    }


def _mechanic_proves_relative_hotfix(
    talent,
    hotfix: OfficialPvpHotfix,
) -> dict | None:
    expected = _relative_hotfix_factor(
        hotfix
    )
    if expected is None:
        return None

    for mechanic in (
        getattr(talent, "mechanics", None)
        or []
    ):
        candidates = [
            (
                "spell_pvp_multiplier",
                mechanic.get(
                    "spell_pvp_multiplier"
                ),
            ),
            (
                "aura_factor",
                mechanic.get(
                    "aura_factor"
                ),
            ),
            (
                "official_hotfix_factor",
                mechanic.get(
                    "official_hotfix_factor"
                ),
            ),
        ]

        for rule in (
            mechanic.get("aura_rules")
            or []
        ):
            candidates.append(
                (
                    "aura_rule",
                    rule.get("factor"),
                )
            )

        for source, raw_value in candidates:
            try:
                value = float(raw_value)
            except (TypeError, ValueError):
                continue

            if abs(value - expected) <= 1e-4:
                return {
                    "source": source,
                    "factor": value,
                    "expected_factor": expected,
                    "effect_index":
                        mechanic.get(
                            "effect_index"
                        ),
                    "source_spell_id":
                        mechanic.get(
                            "source_spell_id"
                        ),
                }

    return None



_RELATIVE_NAME_SUFFIXES = (
    " hunter",
    " pet",
    " direct",
    " periodic",
    " instant",
)


def _relative_name_candidates(
    talent_name: str,
) -> tuple[str, ...]:
    normalized = _normalize_name(
        talent_name
    )
    values = [normalized]
    for suffix in _RELATIVE_NAME_SUFFIXES:
        if normalized.endswith(suffix):
            base = normalized[
                :-len(suffix)
            ].strip()
            if base and base not in values:
                values.append(base)
    return tuple(values)


_MECHANIC_COEFFICIENT_RE = re.compile(
    r"\b(?:AP|SP)\s+mod:\s*"
    r"(?P<value>[+-]?\d+(?:\.\d+)?)",
    re.I,
)


def _embedded_hotfix_parent_candidates(
    spec_catalog,
    hotfix: OfficialPvpHotfix,
) -> list:
    """Find tree talents whose player text embeds a named child ability.

    This intentionally requires a standalone "Ability Name:" heading.
    Mere mentions such as "Wing Clip slows..." are not enough: baseline
    abilities are outside this talent-tree calculator and must not be
    mistaken for an embedded output spell.
    """
    target = _normalize_name(
        hotfix.talent_name
    )
    if (
        not target
        or target.startswith("__")
    ):
        return []

    result = []

    for talent in spec_catalog.talents:
        tooltip = str(
            getattr(
                talent,
                "pve_tooltip",
                "",
            )
            or getattr(
                talent,
                "pvp_tooltip",
                "",
            )
            or ""
        )

        headings = {
            _normalize_name(
                line.strip()[:-1]
            )
            for line in tooltip.splitlines()
            if (
                line.strip().endswith(":")
                and line.strip()[:-1]
            )
        }

        if target in headings:
            result.append(talent)

    return result


def _effective_mechanic_value(
    row: dict,
) -> float | None:
    """Return a comparable player-facing value for one mechanic row."""
    final_value = row.get(
        "final_pvp_value"
    )
    if final_value is not None:
        try:
            return float(final_value)
        except (TypeError, ValueError):
            pass

    try:
        final_multiplier = float(
            row.get(
                "final_pvp_multiplier"
            )
        )
    except (TypeError, ValueError):
        return None

    coefficient = (
        _MECHANIC_COEFFICIENT_RE.search(
            str(
                row.get(
                    "effect_text",
                    "",
                )
                or ""
            )
        )
    )

    if coefficient is not None:
        return (
            float(
                coefficient.group(
                    "value"
                )
            )
            * final_multiplier
        )

    try:
        base_value = float(
            row.get("base_value")
        )
    except (TypeError, ValueError):
        return None

    return (
        base_value
        * final_multiplier
    )


def _ratio_matches_relative_hotfix(
    old_value: float,
    new_value: float,
    hotfix: OfficialPvpHotfix,
) -> bool:
    expected = _relative_hotfix_factor(
        hotfix
    )
    if (
        expected is None
        or abs(old_value) <= 1e-12
    ):
        return False

    actual = new_value / old_value

    return abs(
        actual - expected
    ) <= 0.015


def _historical_relative_evidence(
    talent,
    hotfix: OfficialPvpHotfix,
    historical_talents_by_date,
) -> dict | None:
    if (
        not historical_talents_by_date
        or hotfix.hotfix_date is None
    ):
        return None

    baseline = historical_talents_by_date.get(
        hotfix.hotfix_date.isoformat()
    )
    if not baseline:
        return None

    old_talent = None
    spell_id = getattr(
        talent,
        "spell_id",
        None,
    )
    if spell_id is not None:
        old_talent = (
            baseline.get("by_spell", {})
            .get(str(int(spell_id)))
        )

    if old_talent is None:
        for name in _relative_name_candidates(
            getattr(talent, "talent_name", "")
        ):
            old_talent = (
                baseline.get("by_name", {})
                .get(name)
            )
            if old_talent is not None:
                break

    if old_talent is None:
        return None

    old_rows = {
        (
            int(row.get("source_spell_id") or 0),
            int(row.get("effect_index") or 0),
        ): row
        for row in (
            old_talent.get("mechanics")
            or []
        )
    }

    for row in (
        getattr(talent, "mechanics", None)
        or []
    ):
        key = (
            int(row.get("source_spell_id") or 0),
            int(row.get("effect_index") or 0),
        )
        old_row = old_rows.get(key)
        if old_row is None:
            continue

        old_effective = (
            _effective_mechanic_value(
                old_row
            )
        )
        new_effective = (
            _effective_mechanic_value(
                row
            )
        )

        if (
            old_effective is not None
            and new_effective is not None
            and _ratio_matches_relative_hotfix(
                old_effective,
                new_effective,
                hotfix,
            )
        ):
            return {
                "source":
                    "historical_verified_snapshot",
                "field":
                    "effective_player_value",
                "source_spell_id":
                    key[0],
                "effect_index":
                    key[1],
                "old_value":
                    old_effective,
                "new_value":
                    new_effective,
                "ratio":
                    new_effective
                    / old_effective,
                "baseline_commit":
                    baseline.get("commit"),
            }

        for field in (
            "spell_pvp_multiplier",
            "aura_factor",
            "final_pvp_multiplier",
        ):
            try:
                old_value = float(
                    old_row.get(field)
                )
                new_value = float(
                    row.get(field)
                )
            except (TypeError, ValueError):
                continue

            if not _ratio_matches_relative_hotfix(
                old_value,
                new_value,
                hotfix,
            ):
                continue

            return {
                "source":
                    "historical_verified_snapshot",
                "field":
                    field,
                "source_spell_id":
                    key[0],
                "effect_index":
                    key[1],
                "old_value":
                    old_value,
                "new_value":
                    new_value,
                "ratio":
                    new_value / old_value,
                "baseline_commit":
                    baseline.get("commit"),
            }

    return None


def _mechanic_contains_factor(
    talent,
    factor: float,
) -> dict | None:
    for mechanic in (
        getattr(talent, "mechanics", None)
        or []
    ):
        values = [
            (
                "spell_pvp_multiplier",
                mechanic.get(
                    "spell_pvp_multiplier"
                ),
            ),
            (
                "aura_factor",
                mechanic.get(
                    "aura_factor"
                ),
            ),
        ]
        values.extend(
            (
                "aura_rule",
                rule.get("factor"),
            )
            for rule in (
                mechanic.get("aura_rules")
                or []
            )
        )
        for source, raw in values:
            try:
                value = float(raw)
            except (TypeError, ValueError):
                continue
            if abs(value - factor) <= 1e-4:
                return {
                    "source": source,
                    "factor": value,
                    "source_spell_id":
                        mechanic.get(
                            "source_spell_id"
                        ),
                    "effect_index":
                        mechanic.get(
                            "effect_index"
                        ),
                }
    return None


def _spec_historical_relative_evidence(
    spec_catalog,
    hotfix: OfficialPvpHotfix,
    historical_talents_by_date,
) -> dict | None:
    if (
        not historical_talents_by_date
        or hotfix.hotfix_date is None
    ):
        return None

    baseline = historical_talents_by_date.get(
        hotfix.hotfix_date.isoformat()
    )
    if not baseline:
        return None

    expected_delta = (
        hotfix.current_percent / 100.0
        * (
            1.0
            if hotfix.mode
            == "spec_relative_increase"
            else -1.0
        )
    )
    old_by_spell = baseline.get(
        "by_spell",
        {},
    )
    changed = []

    for talent in spec_catalog.talents:
        spell_id = getattr(
            talent,
            "spell_id",
            None,
        )
        if spell_id is None:
            continue
        old_talent = old_by_spell.get(
            str(int(spell_id))
        )
        if old_talent is None:
            continue

        old_rows = {
            (
                int(row.get("source_spell_id") or 0),
                int(row.get("effect_index") or 0),
            ): row
            for row in (
                old_talent.get("mechanics")
                or []
            )
        }

        for row in (
            getattr(talent, "mechanics", None)
            or []
        ):
            key = (
                int(row.get("source_spell_id") or 0),
                int(row.get("effect_index") or 0),
            )
            old_row = old_rows.get(key)
            if old_row is None:
                continue
            try:
                old_value = float(
                    old_row.get("aura_factor")
                )
                new_value = float(
                    row.get("aura_factor")
                )
            except (TypeError, ValueError):
                continue

            delta = new_value - old_value
            if abs(
                delta - expected_delta
            ) > 0.011:
                continue

            changed.append(
                {
                    "talent_name":
                        getattr(
                            talent,
                            "talent_name",
                            "",
                        ),
                    "source_spell_id":
                        key[0],
                    "effect_index":
                        key[1],
                    "old_aura_factor":
                        old_value,
                    "new_aura_factor":
                        new_value,
                    "delta":
                        delta,
                    "expected_delta":
                        expected_delta,
                }
            )
            if len(changed) >= 3:
                return {
                    "source":
                        "historical_verified_snapshot",
                    "baseline_commit":
                        baseline.get("commit"),
                    "changed_effects":
                        changed,
                }

    return None


def apply_official_pvp_hotfixes(
    spec_catalog,
    hotfixes: list[OfficialPvpHotfix],
    *,
    historical_talents_by_date=None,
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
        if not _hotfix_applies_to_catalog(
            hotfix,
            spec_catalog,
        ):
            ignored.append(
                {
                    "talent_name": hotfix.talent_name,
                    "text": hotfix.text,
                    "date": (
                        hotfix.hotfix_date.isoformat()
                        if hotfix.hotfix_date
                        else None
                    ),
                    "reason": "SPEC_SCOPE_MISMATCH",
                    "context_path": list(
                        hotfix.context_path
                    ),
                }
            )
            continue

        if hotfix.mode.startswith(
            "spec_relative_"
        ):
            evidence = (
                _spec_historical_relative_evidence(
                    spec_catalog,
                    hotfix,
                    historical_talents_by_date,
                )
            )
            if evidence is None:
                unresolved.append(
                    {
                        "talent_name":
                            hotfix.talent_name,
                        "spell_id":
                            None,
                        "text":
                            hotfix.text,
                        "date": (
                            hotfix.hotfix_date
                            .isoformat()
                            if hotfix.hotfix_date
                            else None
                        ),
                        "reason":
                            "SPEC_WIDE_HOTFIX_NOT_IN_MECHANICS",
                        "rank_statuses":
                            [],
                    }
                )
            else:
                already_current.append(
                    {
                        "talent_name":
                            hotfix.talent_name,
                        "spell_id":
                            None,
                        "text":
                            hotfix.text,
                        "date": (
                            hotfix.hotfix_date
                            .isoformat()
                            if hotfix.hotfix_date
                            else None
                        ),
                        "evidence":
                            evidence,
                    }
                )
            continue

        lookup_names = (
            _relative_name_candidates(
                hotfix.talent_name
            )
            if hotfix.mode.startswith(
                "relative_"
            )
            else (
                _normalize_name(
                    hotfix.talent_name
                ),
            )
        )
        matches = []
        for lookup_name in lookup_names:
            matches = by_name.get(
                lookup_name,
                [],
            )
            if matches:
                break

        if (
            not matches
            and hotfix.mode.startswith(
                "relative_"
            )
        ):
            matches = (
                _embedded_hotfix_parent_candidates(
                    spec_catalog,
                    hotfix,
                )
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

            if hotfix.mode.startswith(
                "remove_relative_"
            ):
                removed_factor = (
                    1.0
                    + hotfix.current_percent / 100.0
                    if hotfix.mode
                    == "remove_relative_increase"
                    else
                    1.0
                    - hotfix.current_percent / 100.0
                )
                stale = (
                    _mechanic_contains_factor(
                        talent,
                        removed_factor,
                    )
                )
                if stale is not None:
                    unresolved.append(
                        {
                            "talent_name":
                                talent.talent_name,
                            "spell_id":
                                talent.spell_id,
                            "text":
                                hotfix.text,
                            "date": (
                                hotfix.hotfix_date
                                .isoformat()
                                if hotfix.hotfix_date
                                else None
                            ),
                            "reason":
                                "REMOVED_HOTFIX_FACTOR_STILL_PRESENT",
                            "evidence":
                                stale,
                            "rank_statuses":
                                [],
                        }
                    )
                else:
                    already_current.append(
                        {
                            "talent_name":
                                talent.talent_name,
                            "spell_id":
                                talent.spell_id,
                            "text":
                                hotfix.text,
                            "date": (
                                hotfix.hotfix_date
                                .isoformat()
                                if hotfix.hotfix_date
                                else None
                            ),
                            "evidence": {
                                "source":
                                    "removed_factor_absent",
                                "removed_factor":
                                    removed_factor,
                            },
                        }
                    )
                continue

            if hotfix.mode.startswith(
                "relative_"
            ):
                evidence = (
                    _mechanic_proves_relative_hotfix(
                        talent,
                        hotfix,
                    )
                )
                if evidence is None:
                    evidence = (
                        _historical_relative_evidence(
                            talent,
                            hotfix,
                            historical_talents_by_date,
                        )
                    )

                if evidence is not None:
                    talent.has_pvp_mechanics = True
                    diagnostic = {
                        "status":
                            "OFFICIAL_HOTFIX_CURRENT",
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
                            "RELATIVE_HOTFIX_EVIDENCE",
                        "evidence":
                            evidence,
                    }
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
                            "evidence":
                                evidence,
                        }
                    )
                else:
                    overlay = (
                        _apply_relative_hotfix_overlay(
                            talent,
                            hotfix,
                        )
                    )

                    if overlay is not None:
                        diagnostic = {
                            "status":
                                "OFFICIAL_HOTFIX_APPLIED",
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
                                "RELATIVE_HOTFIX_OVERLAY",
                            "evidence":
                                overlay,
                        }
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
                                "evidence":
                                    overlay,
                            }
                        )
                    else:
                        unresolved.append(
                            {
                                "talent_name":
                                    talent.talent_name,
                                "spell_id":
                                    talent.spell_id,
                                "text":
                                    hotfix.text,
                                "date": (
                                    hotfix.hotfix_date
                                    .isoformat()
                                    if hotfix.hotfix_date
                                    else None
                                ),
                                "reason":
                                    "RELATIVE_HOTFIX_NOT_IN_MECHANICS",
                                "rank_statuses":
                                    [],
                            }
                        )
                continue

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
                    talent.changes = (
                        _with_authoritative_change(
                            talent.changes,
                            change,
                        )
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
