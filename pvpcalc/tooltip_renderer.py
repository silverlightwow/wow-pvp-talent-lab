from __future__ import annotations

import math
import re
from dataclasses import dataclass


# Legacy fallback for direct unit-level calls. Production catalog builds
# pass the complete current specialization list discovered from the pinned
# Raidbots snapshot, so spec-aware tooltip parsing is not Priest-specific.
DEFAULT_SPEC_NAMES = {
    "discipline": "Discipline",
    "holy": "Holy",
    "shadow": "Shadow",
}


def _spec_names_map(
    spec_names=None,
) -> dict[str, str]:
    names = (
        list(spec_names)
        if spec_names
        else list(
            DEFAULT_SPEC_NAMES.values()
        )
    )

    return {
        str(name).strip().casefold():
            str(name).strip()
        for name in names
        if str(name).strip()
    }


@dataclass(frozen=True)
class TooltipSegment:
    text: str
    specs: frozenset[str] | None


def _clean(text) -> str:
    return " ".join(
        str(text or "")
        .replace("\xa0", " ")
        .split()
    )


def _number(value):
    """
    Convert pandas/numpy/normal numeric values into float,
    treating NaN as missing.
    """

    if value is None:
        return None

    try:
        value = float(value)
    except (TypeError, ValueError):
        return None

    if math.isnan(value):
        return None

    return value


def _spec_label(
    line: str,
    spec_names=None,
) -> str | None:

    normalized = (
        _clean(line)
        .rstrip(",")
        .casefold()
    )

    return _spec_names_map(
        spec_names
    ).get(
        normalized
    )


# ============================================================
# SPEC-AWARE TOOLTIP PARSING
# ============================================================

def parse_tooltip_segments(
    tooltip: str,
    spec_names=None,
) -> list[TooltipSegment]:
    """
    Convert:

        Shadow
        ...
        Discipline,
        Holy
        ...

    into content segments with explicit spec scopes.

    Consecutive spec labels are treated as a shared scope:

        Discipline,
        Holy
        text

    -> text belongs to both Discipline and Holy.
    """

    lines = [
        _clean(line)
        for line in str(
            tooltip or ""
        ).splitlines()
        if _clean(line)
    ]

    segments = []

    active_specs = None
    pending_specs = []
    previous_was_label = False
    seen_spec_section = False

    for line in lines:

        label = _spec_label(
            line,
            spec_names,
        )

        if label is not None:

            # Beginning of a new spec group.
            if not previous_was_label:
                pending_specs = []

            if label not in pending_specs:
                pending_specs.append(
                    label
                )

            previous_was_label = True
            seen_spec_section = True
            continue

        # First content after one or multiple spec labels.
        if pending_specs:

            active_specs = frozenset(
                pending_specs
            )

            pending_specs = []

        elif not seen_spec_section:

            # Content before the first explicit spec header
            # is shared.
            active_specs = None

        # Otherwise keep active_specs until another spec
        # header starts.

        segments.append(
            TooltipSegment(
                text=line,
                specs=active_specs,
            )
        )

        previous_was_label = False

    return segments


def tooltip_for_spec(
    tooltip: str,
    spec_name: str,
    spec_names=None,
) -> str:

    names = _spec_names_map(
        spec_names
    )

    target = names.get(
        spec_name.casefold(),
        spec_name,
    )

    segments = (
        parse_tooltip_segments(
            tooltip,
            spec_names,
        )
    )

    selected = [
        segment.text
        for segment in segments
        if (
            segment.specs is None
            or target in segment.specs
        )
    ]

    return "\n".join(
        selected
    )


# ============================================================
# EFFECT -> PLAYER-FACING SEMANTIC VALUE
# ============================================================

_SP_MOD_RE = re.compile(
    r"SP mod:\s*"
    r"([+-]?\d+(?:\.\d+)?)",
    re.I,
)

_VISIBLE_SP_RE = re.compile(
    r"\(([+-]?\d+(?:\.\d+)?)%\s+of\s+Spell\s+Power\)",
    re.I,
)

_AP_MOD_RE = re.compile(
    r"AP mod:\s*"
    r"([+-]?\d+(?:\.\d+)?)",
    re.I,
)

_VISIBLE_AP_RE = re.compile(
    r"\(([+-]?\d+(?:\.\d+)?)%\s+of\s+Attack\s+Power\)",
    re.I,
)


def semantic_transform(
    effect_row,
    *,
    selected_tooltip: str,
):
    """
    Return the player-facing PvE -> PvP transformation.

    This deliberately does NOT perform text replacement.
    """

    effect_text = _clean(
        effect_row.get(
            "effect_text",
            ""
        )
    )

    source_text = _clean(
        " ".join(
            [
                effect_text,
                str(
                    effect_row.get(
                        "wowhead_raw",
                        "",
                    )
                    or ""
                ),
            ]
        )
    )

    base = _number(
        effect_row.get(
            "base_value"
        )
    )

    # Prefer COMPLETE production PvP state:
    #
    #   spell-specific PvP coefficient
    #   × matching specialization PvP Aura
    #
    # Fall back to legacy fields for old rows/tests.
    multiplier = _number(
        effect_row.get(
            "final_pvp_multiplier",
            effect_row.get(
                "pvp_multiplier"
            ),
        )
    )

    pvp = _number(
        effect_row.get(
            "final_pvp_value",
            effect_row.get(
                "pvp_value"
            ),
        )
    )


    # --------------------------------------------------------
    # Spell Power coefficient
    #
    # 5.75 -> 575% SP
    # PvP ×1.12 -> 644% SP
    # --------------------------------------------------------

    sp_match = _SP_MOD_RE.search(
        source_text
    )

    if (
        sp_match
        and multiplier is not None
    ):

        pve_coeff = float(
            sp_match.group(1)
        )

        old_value = (
            pve_coeff
            * 100.0
        )

        # Periodic effects are often stored as a PER-TICK SP
        # coefficient while the player tooltip shows the TOTAL over
        # the channel/DoT duration. When the per-tick coefficient is
        # not visible, accept a tooltip coefficient only if it is a
        # unique near-integer multiple of the datamined coefficient.
        #
        # Holy Fire:
        #   14.13% per tick × 7 = 98.91% shown
        #
        # Void Torrent:
        #   237.685% per tick × 3 = 713.055% shown
        if (
            "periodic" in source_text.casefold()
            and old_value > 0
        ):

            visible_values = [
                float(match.group(1))
                for match in _VISIBLE_SP_RE.finditer(
                    selected_tooltip
                )
            ]

            exact_visible = [
                value
                for value in visible_values
                if abs(
                    value
                    - old_value
                ) <= 1e-6
            ]

            if not exact_visible:

                aggregate_candidates = []

                for value in visible_values:

                    ratio = (
                        value
                        / old_value
                    )

                    nearest = round(
                        ratio
                    )

                    if (
                        nearest >= 2
                        and nearest <= 120
                        and abs(
                            ratio
                            - nearest
                        ) <= 1e-6
                    ):
                        aggregate_candidates.append(
                            value
                        )

                unique_candidates = sorted(
                    set(
                        aggregate_candidates
                    )
                )

                if len(
                    unique_candidates
                ) == 1:
                    old_value = (
                        unique_candidates[
                            0
                        ]
                    )

        return {
            "kind":
                "spell_power_coefficient",

            "old":
                old_value,

            "new":
                (
                    old_value
                    * multiplier
                ),

            "unit":
                "% SP",
        }


    # --------------------------------------------------------
    # Attack Power coefficient
    #
    # 9.72 -> 972% AP
    # PvP x1.273 -> 1237.356% AP
    # --------------------------------------------------------

    ap_match = _AP_MOD_RE.search(
        source_text
    )

    if (
        ap_match
        and multiplier is not None
    ):

        pve_coeff = float(
            ap_match.group(1)
        )

        old_value = (
            pve_coeff
            * 100.0
        )

        # Like SP coefficients, periodic physical effects may
        # expose a total coefficient in the player tooltip.
        if (
            "periodic" in source_text.casefold()
            and old_value > 0
        ):

            visible_values = [
                float(match.group(1))
                for match in _VISIBLE_AP_RE.finditer(
                    selected_tooltip
                )
            ]

            exact_visible = [
                value
                for value in visible_values
                if abs(
                    value
                    - old_value
                ) <= 1e-6
            ]

            if not exact_visible:

                aggregate_candidates = []

                for value in visible_values:

                    ratio = (
                        value
                        / old_value
                    )

                    nearest = round(
                        ratio
                    )

                    if (
                        nearest >= 2
                        and nearest <= 120
                        and abs(
                            ratio
                            - nearest
                        ) <= 1e-6
                    ):
                        aggregate_candidates.append(
                            value
                        )

                unique_candidates = sorted(
                    set(
                        aggregate_candidates
                    )
                )

                if len(
                    unique_candidates
                ) == 1:
                    old_value = (
                        unique_candidates[
                            0
                        ]
                    )

        return {
            "kind":
                "attack_power_coefficient",

            "old":
                old_value,

            "new":
                (
                    old_value
                    * multiplier
                ),

            "unit":
                "% AP",
        }


    # --------------------------------------------------------
    # Time Between Ticks
    #
    # DB -20% interval
    # -> tooltip 25% more often
    #
    # PvP -13%
    # -> tooltip 14.942528...% more often
    # --------------------------------------------------------

    if (
        "Time Between Ticks (19)"
        in effect_text
        and base is not None
        and pvp is not None
    ):

        pve_interval = (
            1.0 + base / 100.0
        )

        pvp_interval = (
            1.0 + pvp / 100.0
        )

        if (
            pve_interval <= 0
            or pvp_interval <= 0
        ):
            return None

        return {
            "kind":
                "frequency_more_often",

            "old":
                (
                    1.0 / pve_interval
                    - 1.0
                ) * 100.0,

            "new":
                (
                    1.0 / pvp_interval
                    - 1.0
                ) * 100.0,

            "unit":
                "%",
        }


    # --------------------------------------------------------
    # Millisecond-like Dummy value.
    #
    # We only accept this interpretation if the corresponding
    # seconds value is actually visible in the selected
    # player-facing tooltip.
    #
    # Divine Procession:
    #   2000 -> "2.0 sec"
    #   PvP 1000 -> "1.0 sec"
    # --------------------------------------------------------

    if (
        base is not None
        and pvp is not None
        and abs(base) >= 1000
    ):

        seconds = (
            abs(base) / 1000.0
        )

        seconds_pattern = re.compile(
            rf"(?<![\d.])"
            rf"{re.escape(str(seconds))}"
            rf"(?![\d.])"
            rf"\s*sec\b",
            re.I,
        )

        if seconds_pattern.search(
            selected_tooltip
        ):

            return {
                "kind":
                    "duration_seconds",

                "old":
                    seconds,

                "new":
                    abs(pvp) / 1000.0,

                "unit":
                    "sec",
            }


    # --------------------------------------------------------
    # Ordinary numeric SpellEffect.
    #
    # Negative DB values generally appear positively in prose:
    #
    #   Value -50
    #   "Reduces ... by 50%"
    #
    # Therefore use magnitudes for text rendering.
    # --------------------------------------------------------

    if (
        base is not None
        and pvp is not None
    ):

        return {
            "kind":
                "ordinary_value",

            "old":
                abs(base),

            "new":
                abs(pvp),

            "unit":
                None,
        }


    # No player-facing numeric value that we can derive
    # safely.
    return None


# ============================================================
# NUMBER MATCHING
# ============================================================

_NUMBER_RE = re.compile(
    r"(?<![\d.])"
    r"([+-]?\d+(?:\.\d+)?)"
    r"(?![\d.])"
)


def _numeric_matches(
    text: str,
    *,
    value: float,
    kind: str,
):
    """
    Find numeric tokens representing the semantic PvE value.

    Some semantic types require contextual units.
    """

    matches = []

    for match in _NUMBER_RE.finditer(
        text
    ):

        try:
            observed = float(
                match.group(1)
            )
        except ValueError:
            continue

        if abs(
            observed - value
        ) > 1e-4:
            continue

        tail = text[
            match.end():
            match.end() + 40
        ]

        if (
            kind
            == "spell_power_coefficient"
        ):

            if not re.match(
                r"\s*%\s+of\s+Spell\s+Power",
                tail,
                re.I,
            ):
                continue


        elif (
            kind
            == "attack_power_coefficient"
        ):

            if not re.match(
                r"\s*%\s+of\s+Attack\s+Power",
                tail,
                re.I,
            ):
                continue


        elif (
            kind
            == "frequency_more_often"
        ):

            if not re.match(
                r"\s*%\s+more\s+often",
                tail,
                re.I,
            ):
                continue


        elif (
            kind
            == "duration_seconds"
        ):

            if not re.match(
                r"\s*sec\b",
                tail,
                re.I,
            ):
                continue


        matches.append(
            match
        )

    return matches


# ============================================================
# DISPLAY FORMATTING
# ============================================================

def _smart_regular_number(
    value: float,
) -> str:
    """
    Preserve exact information unless the parsed PvP
    coefficient clearly encodes an intended nearby integer.

    Examples:
        25.020 -> 25
        20.001 -> 20
        50.050 -> 50
        4.002  -> 4

    Atonement:
        63.94 remains 63.94
    """

    nearest = round(
        value
    )

    if abs(
        value - nearest
    ) <= 0.051:
        return str(
            int(nearest)
        )

    return (
        f"{value:.4f}"
        .rstrip("0")
        .rstrip(".")
    )


def _format_new_value(
    value: float,
    *,
    kind: str,
    old_token: str,
) -> str:

    if (
        kind
        == "frequency_more_often"
    ):

        return (
            f"{value:.4f}"
            .rstrip("0")
            .rstrip(".")
        )


    if (
        kind
        in {
            "spell_power_coefficient",
            "attack_power_coefficient",
        }
    ):

        nearest = round(
            value
        )

        if abs(
            value - nearest
        ) < 1e-8:

            return str(
                int(nearest)
            )

        return (
            f"{value:.4f}"
            .rstrip("0")
            .rstrip(".")
        )


    if (
        kind
        == "duration_seconds"
    ):

        # Preserve player-facing decimal style:
        #
        # 2.0 sec -> 1.0 sec
        if "." in old_token:

            decimals = len(
                old_token.split(
                    ".",
                    1,
                )[1]
            )

            return (
                f"{value:.{decimals}f}"
            )

        return (
            f"{value:g}"
        )


    return _smart_regular_number(
        value
    )


# ============================================================
# CONSERVATIVE RENDERER
# ============================================================

def render_pvp_tooltip(
    *,
    tooltip: str,
    spec_name: str,
    effect_rows,
    spec_names=None,
):
    """
    Render a spec-specific PvP tooltip.

    Safety rules:

    1. Select the current spec branch FIRST.
    2. Convert DB effects into player-facing semantic values.
    3. Collapse duplicate effects that encode the same textual
       transformation.
    4. Replace only when the old value maps to exactly ONE
       visible numeric token.
    5. Never guess when one old value maps to different PvP
       values.
    """

    pve_text = tooltip_for_spec(
        tooltip,
        spec_name,
        spec_names,
    )

    pvp_text = pve_text

    diagnostics = []

    transforms = []


    # --------------------------------------------------------
    # Build semantic transforms
    # --------------------------------------------------------

    for row in effect_rows:

        transform = semantic_transform(
            row,
            selected_tooltip=pve_text,
        )

        effect_index = row.get(
            "effect_index"
        )

        if transform is None:

            diagnostics.append(
                {
                    "effect_index":
                        effect_index,

                    "status":
                        "NO_RENDERABLE_VALUE",

                    "reason":
                        (
                            "No safe player-facing "
                            "numeric transformation"
                        ),
                }
            )

            continue

        transforms.append(
            {
                **transform,

                "effect_index":
                    effect_index,

                "match_ordinal":
                    row.get(
                        "same_value_text_ordinal"
                    ),

                "match_group_count":
                    row.get(
                        "same_value_text_count"
                    ),
            }
        )


    # --------------------------------------------------------
    # Group duplicate transforms.
    #
    # Mental Agility is a good example: several DB effects can
    # describe the same visible "50% -> 25%" parameter.
    # --------------------------------------------------------

    grouped = {}

    for transform in transforms:

        key = (
            transform["kind"],
            round(
                transform["old"],
                8,
            ),
            round(
                transform["new"],
                8,
            ),
        )

        grouped.setdefault(
            key,
            {
                **transform,
                "effect_indexes": [],
            }
        )

        grouped[
            key
        ][
            "effect_indexes"
        ].append(
            transform[
                "effect_index"
            ]
        )


    # --------------------------------------------------------
    # Prevent conflicting transformations of the same visible
    # PvE number.
    # --------------------------------------------------------

    by_old = {}

    for transform in grouped.values():

        old_key = round(
            transform["old"],
            8,
        )

        by_old.setdefault(
            old_key,
            [],
        ).append(
            transform
        )


    blocked = set()

    for old_key, candidates in (
        by_old.items()
    ):

        distinct_new = {
            (
                candidate["kind"],
                round(
                    candidate["new"],
                    8,
                ),
            )
            for candidate in candidates
        }

        if len(
            distinct_new
        ) <= 1:
            continue

        for candidate in candidates:

            blocked.add(
                (
                    candidate["kind"],
                    round(
                        candidate["old"],
                        8,
                    ),
                    round(
                        candidate["new"],
                        8,
                    ),
                )
            )

        diagnostics.append(
            {
                "effect_index":
                    None,

                "status":
                    "CONFLICTING_TRANSFORMS",

                "reason":
                    (
                        f"PvE value {old_key} "
                        f"maps to multiple PvP values"
                    ),

                "candidates":
                    candidates,
            }
        )


    # --------------------------------------------------------
    # Apply only unique mappings
    # --------------------------------------------------------

    replacements = []


    for key, transform in (
        grouped.items()
    ):

        if key in blocked:
            continue

        # Always search the ORIGINAL spec-selected tooltip.
        #
        # This prevents an earlier replacement from making a
        # later transformation accidentally match.
        matches = _numeric_matches(
            pve_text,
            value=transform[
                "old"
            ],
            kind=transform[
                "kind"
            ],
        )

        if len(matches) == 0:

            # Search the original FULL tooltip as a diagnostic.
            #
            # If the semantic PvE value exists there but vanished
            # after spec selection, this is strong evidence that
            # the modified effect belongs to another spec branch.
            full_matches = _numeric_matches(
                tooltip,
                value=transform[
                    "old"
                ],
                kind=transform[
                    "kind"
                ],
            )

            if full_matches:

                status = (
                    "OTHER_SPEC_BRANCH"
                )

            else:

                status = (
                    "NOT_VISIBLE_IN_TOOLTIP"
                )

            diagnostics.append(
                {
                    "effect_indexes":
                        transform[
                            "effect_indexes"
                        ],

                    "status":
                        status,

                    "kind":
                        transform["kind"],

                    "old":
                        transform["old"],

                    "new":
                        transform["new"],

                    "full_tooltip_match_count":
                        len(full_matches),
                }
            )

            continue


        if len(matches) > 1:

            # A single modified effect can still map deterministically
            # when its source ordinal identifies one occurrence among
            # repeated equal-value sibling effects.
            match_ordinal = (
                transform.get(
                    "match_ordinal"
                )
            )

            match_group_count = (
                transform.get(
                    "match_group_count"
                )
            )

            if (
                match_ordinal is not None
                and match_group_count
                == len(matches)
                and 1
                <= int(match_ordinal)
                <= len(matches)
            ):

                match = matches[
                    int(
                        match_ordinal
                    )
                    - 1
                ]

                old_token = (
                    match.group(1)
                )

                new_token = (
                    _format_new_value(
                        transform[
                            "new"
                        ],
                        kind=transform[
                            "kind"
                        ],
                        old_token=old_token,
                    )
                )

                replacements.append(
                    {
                        "start":
                            match.start(1),

                        "end":
                            match.end(1),

                        "old_token":
                            old_token,

                        "new_token":
                            new_token,

                        "kind":
                            transform[
                                "kind"
                            ],

                        "effect_indexes":
                            transform[
                                "effect_indexes"
                            ],
                    }
                )

                continue

            # If N independent effects collapse to the exact same
            # PvE -> PvP transform and that value occurs exactly N
            # times in the selected tooltip, replacing all N tokens
            # is deterministic. This covers talents such as Holy
            # Preventive Measures, whose direct and periodic effects
            # both render as separate "40%" values and both become
            # the same PvP value.
            if (
                len(
                    transform[
                        "effect_indexes"
                    ]
                )
                == len(matches)
            ):

                for match in matches:

                    old_token = (
                        match.group(1)
                    )

                    new_token = (
                        _format_new_value(
                            transform[
                                "new"
                            ],
                            kind=transform[
                                "kind"
                            ],
                            old_token=old_token,
                        )
                    )

                    replacements.append(
                        {
                            "start":
                                match.start(1),

                            "end":
                                match.end(1),

                            "old_token":
                                old_token,

                            "new_token":
                                new_token,

                            "kind":
                                transform[
                                    "kind"
                                ],

                            "effect_indexes":
                                transform[
                                    "effect_indexes"
                                ],
                        }
                    )

                continue

            diagnostics.append(
                {
                    "effect_indexes":
                        transform[
                            "effect_indexes"
                        ],

                    "status":
                        "AMBIGUOUS_TEXT_MATCH",

                    "kind":
                        transform["kind"],

                    "old":
                        transform["old"],

                    "new":
                        transform["new"],

                    "match_count":
                        len(matches),
                }
            )

            continue


        match = matches[0]

        old_token = (
            match.group(1)
        )

        new_token = (
            _format_new_value(
                transform[
                    "new"
                ],
                kind=transform[
                    "kind"
                ],
                old_token=old_token,
            )
        )

        replacements.append(
            {
                "start":
                    match.start(1),

                "end":
                    match.end(1),

                "old_token":
                    old_token,

                "new_token":
                    new_token,

                "kind":
                    transform[
                        "kind"
                    ],

                "effect_indexes":
                    transform[
                        "effect_indexes"
                    ],
            }
        )


    # --------------------------------------------------------
    # Apply right-to-left so offsets remain stable.
    # --------------------------------------------------------

    for replacement in sorted(
        replacements,
        key=lambda x: x["start"],
        reverse=True,
    ):

        pvp_text = (
            pvp_text[
                :replacement["start"]
            ]
            + replacement[
                "new_token"
            ]
            + pvp_text[
                replacement["end"]:
            ]
        )


    for replacement in sorted(
        replacements,
        key=lambda x: x["start"],
    ):

        diagnostics.append(
            {
                "effect_indexes":
                    replacement[
                        "effect_indexes"
                    ],

                "status":
                    "APPLIED",

                "kind":
                    replacement[
                        "kind"
                    ],

                "old":
                    replacement[
                        "old_token"
                    ],

                "new":
                    replacement[
                        "new_token"
                    ],
            }
        )


    # ========================================================
    # Final safety status
    # ========================================================

    diagnostic_statuses = {
        item["status"]
        for item in diagnostics
    }

    blocking_statuses = {
        "NO_RENDERABLE_VALUE",
        "NOT_VISIBLE_IN_TOOLTIP",
        "AMBIGUOUS_TEXT_MATCH",
        "CONFLICTING_TRANSFORMS",
    }

    has_blocking = bool(
        diagnostic_statuses
        & blocking_statuses
    )

    has_applied = (
        "APPLIED"
        in diagnostic_statuses
    )

    has_other_spec = (
        "OTHER_SPEC_BRANCH"
        in diagnostic_statuses
    )

    if has_blocking:

        render_status = (
            "REVIEW_REQUIRED"
        )

    elif has_applied:

        # Other-spec effects may coexist with successfully
        # rendered current-spec effects.
        render_status = (
            "COMPLETE"
        )

    elif has_other_spec:

        render_status = (
            "UNCHANGED_FOR_SPEC"
        )

    else:

        render_status = (
            "NO_CHANGE"
        )


    return {
        "spec_name":
            spec_name,

        "render_status":
            render_status,

        "pve_tooltip":
            pve_text,

        "pvp_tooltip":
            pvp_text,

        "changed":
            (
                pvp_text
                != pve_text
            ),

        "replacements":
            replacements,

        "diagnostics":
            diagnostics,
    }
