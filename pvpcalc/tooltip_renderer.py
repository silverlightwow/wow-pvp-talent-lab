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
    # Wowhead also labels branches such as "Holy (Ultimate Serenity)".
    normalized = re.sub(r"\s+\([^()]+\)$", "", normalized)

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

        # A single inline span can label a shared specialization section.
        shared_labels = [_spec_label(part.strip(), spec_names) for part in line.split(",") if part.strip()]
        if len(shared_labels) > 1 and all(shared_labels):
            if not previous_was_label:
                pending_specs = []
            pending_specs.extend(label for label in shared_labels if label not in pending_specs)
            previous_was_label = True
            seen_spec_section = True
            continue

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

    # Inline [Holy: 50 / 50] branches are local expressions, not section
    # headings. Resolve them before interpreting the surrounding paragraphs.
    labels = "|".join(re.escape(name) for name in names.values())
    label_pattern = re.compile(r"^(" + labels + r")\s*:\s*(.*)$", re.I | re.S)
    def inline_branch(match):
        body = match[1].strip()
        if not label_pattern.match(body):
            return match[0]  # Arithmetic brackets remain meaningful text.
        default = ""
        for part in re.split(r"\s+/\s+", body):
            branch = label_pattern.match(part.strip())
            if branch:
                if branch[1].casefold() == target.casefold():
                    return branch[2].strip()
            else:
                default = part.strip()
        return default
    tooltip = re.sub(r"\[([^\[\]]*)\]", inline_branch, str(tooltip or ""))

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

    return "\n".join(selected).strip()


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


def _dependency_rank_coefficient(
    effect_row,
    *,
    selected_tooltip: str,
    pattern,
    source_value: float,
) -> float:
    """Use the visible ranked coefficient for an explicit spell reference.

    Some talents are only rank controllers. Their description multiplies a
    separate damage/heal spell by the talent rank, while the PvP coefficient
    belongs to that referenced spell. In that shape the source SpellEffect is
    still, for example, 540% SP, but rank two visibly contains 1080% SP. The
    same referenced-spell PvP multiplier applies to both visible ranks.

    Stay conservative: this is only enabled for the proven tooltip-value
    dependency, and only when the player tooltip exposes one unambiguous
    coefficient of the expected stat family.
    """

    source_spell_id = effect_row.get("source_spell_id")
    talent_spell_id = effect_row.get("talent_spell_id")
    relations = set(effect_row.get("dependency_relations") or [])
    dependency_path = list(effect_row.get("dependency_path") or [])

    if (
        source_spell_id == talent_spell_id
        or "tooltip_value_ref" not in relations
        or len(dependency_path) != 2
        or dependency_path[0] != talent_spell_id
        or dependency_path[-1] != source_spell_id
    ):
        return source_value

    visible_values = sorted(
        {
            float(match.group(1))
            for match in pattern.finditer(selected_tooltip)
        }
    )

    if any(abs(value - source_value) <= 1e-6 for value in visible_values):
        return source_value

    if len(visible_values) == 1:
        return visible_values[0]

    return source_value


def semantic_transform(
    effect_row,
    *,
    selected_tooltip: str,
):
    """
    Return the player-facing PvE -> PvP transformation.

    This deliberately does NOT perform text replacement.
    """

    display = effect_row.get("display_formula")
    if display:
        return {"kind": display["kind"], "old": display["old"], "new": display["new"]}

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

    semantic_unit_hint = (
        effect_row.get(
            "semantic_unit_hint"
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


    # A non-zero sign flip cannot be represented by a numeric
    # substitution alone. When the player-facing tooltip explicitly
    # contains directional percentage prose ("20% increased",
    # "reduced by 20%", ...), preserve the sign information so the
    # renderer can flip BOTH the number and the nearby direction word.
    #
    # If no such wording is visible we stay conservative and require
    # review rather than inventing prose.
    if (
        base is not None
        and pvp is not None
        and abs(base) > 1e-12
        and abs(pvp) > 1e-12
        and (
            float(base)
            * float(pvp)
            < 0
        )
    ):
        old_value = abs(
            float(base)
        )

        direction_words = (
            (
                "increased",
                "increase",
                "increases",
                "increasing",
                "additional",
                "more",
            )
            if float(base) > 0
            else (
                "reduced",
                "reduce",
                "reduces",
                "reducing",
                "decreased",
                "decrease",
                "decreases",
                "decreasing",
                "less",
            )
        )

        percent_matches = (
            _numeric_matches(
                selected_tooltip,
                value=old_value,
                kind="percent_value",
            )
        )

        has_directional_phrase = False

        for numeric_match in percent_matches:
            window = selected_tooltip[
                max(
                    0,
                    numeric_match.start(1) - 42,
                ):
                min(
                    len(selected_tooltip),
                    numeric_match.end(1) + 42,
                )
            ].casefold()

            if any(
                re.search(
                    rf"\b{re.escape(word)}\b",
                    window,
                )
                for word in direction_words
            ):
                has_directional_phrase = True
                break

        if not has_directional_phrase:
            return None

        return {
            "kind":
                "percent_direction_flip",

            "old":
                old_value,

            "new":
                abs(
                    float(pvp)
                ),

            "unit":
                "%",

            "direction_from_sign":
                (
                    1
                    if float(base) > 0
                    else -1
                ),
        }


    # --------------------------------------------------------
    # Spell Power coefficient
    #
    # 5.75 -> 575% SP
    # PvP ×1.12 -> 644% SP
    # --------------------------------------------------------

    sp_match = _SP_MOD_RE.search(
        source_text
    )

    simc_sp_coefficient = _number(
        effect_row.get(
            "simc_sp_coefficient"
        )
    )

    simc_ap_coefficient = _number(
        effect_row.get(
            "simc_ap_coefficient"
        )
    )

    # Wowhead's compact effect text does not always expose coefficients
    # even when exact-build SimC has the same concrete SpellEffect.
    # Use that exact-build coefficient as a fallback, but only when the
    # other coefficient family is absent/zero so we never guess whether
    # a hybrid effect is SP- or AP-driven.
    fallback_sp_coefficient = (
        simc_sp_coefficient
        if (
            simc_sp_coefficient is not None
            and abs(simc_sp_coefficient) > 1e-12
            and (
                simc_ap_coefficient is None
                or abs(simc_ap_coefficient) <= 1e-12
            )
        )
        else None
    )

    if (
        (sp_match or fallback_sp_coefficient is not None)
        and multiplier is not None
    ):

        pve_coeff = (
            float(sp_match.group(1))
            if sp_match
            else float(fallback_sp_coefficient)
        )

        old_value = (
            pve_coeff
            * 100.0
        )

        old_value = _dependency_rank_coefficient(
            effect_row,
            selected_tooltip=selected_tooltip,
            pattern=_VISIBLE_SP_RE,
            source_value=old_value,
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

    fallback_ap_coefficient = (
        simc_ap_coefficient
        if (
            simc_ap_coefficient is not None
            and abs(simc_ap_coefficient) > 1e-12
            and (
                simc_sp_coefficient is None
                or abs(simc_sp_coefficient) <= 1e-12
            )
        )
        else None
    )

    if (
        (ap_match or fallback_ap_coefficient is not None)
        and multiplier is not None
    ):

        pve_coeff = (
            float(ap_match.group(1))
            if ap_match
            else float(fallback_ap_coefficient)
        )

        old_value = (
            pve_coeff
            * 100.0
        )

        old_value = _dependency_rank_coefficient(
            effect_row,
            selected_tooltip=selected_tooltip,
            pattern=_VISIBLE_AP_RE,
            source_value=old_value,
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
                    (
                        float(round(abs(pvp) / 1000.0))
                        if abs(
                            abs(pvp) / 1000.0
                            - round(abs(pvp) / 1000.0)
                        ) <= 0.01
                        else abs(pvp) / 1000.0
                    ),

                "unit":
                    "sec",
            }

        # Trait rank data occasionally stores a player-facing whole second
        # one millisecond below that value (for example 29,999 ms -> 30 sec).
        # Match that display rounding narrowly instead of dropping the PvP
        # transform for just that rank.
        rounded_seconds = round(seconds)

        if (
            abs(seconds - rounded_seconds) <= 0.01
            and _numeric_matches(
                selected_tooltip,
                value=float(rounded_seconds),
                kind="duration_seconds",
            )
        ):

            return {
                "kind":
                    "duration_seconds",

                "old":
                    float(rounded_seconds),

                "new":
                    (
                        float(round(abs(pvp) / 1000.0))
                        if abs(
                            abs(pvp) / 1000.0
                            - round(abs(pvp) / 1000.0)
                        ) <= 0.01
                        else abs(pvp) / 1000.0
                    ),

                "unit":
                    "sec",
            }


    # --------------------------------------------------------
    # Unit-aware ordinary SpellEffects.
    #
    # A raw numeric value is not enough when the same number appears
    # several times in a tooltip. Use the SpellEffect semantic type to
    # constrain matching whenever the source makes the unit explicit.
    # --------------------------------------------------------

    if (
        base is not None
        and pvp is not None
    ):

        effect_cf = (
            effect_text.casefold()
        )

        if semantic_unit_hint == "percent":

            return {
                "kind":
                    "percent_value",

                "old":
                    abs(base),

                "new":
                    abs(pvp),

                "unit":
                    "%",
            }


        if semantic_unit_hint == "yards":

            return {
                "kind":
                    "distance_yards",

                "old":
                    abs(base),

                "new":
                    abs(pvp),

                "unit":
                    "yd",
            }


        if (
            semantic_unit_hint
            == "seconds"
            and abs(base) < 1000
        ):

            return {
                "kind":
                    "duration_seconds",

                "old":
                    abs(base),

                "new":
                    abs(pvp),

                "unit":
                    "sec",
            }


        # Cooldown / buff-duration values expressed directly in
        # seconds. Millisecond-backed values were handled above.
        if (
            abs(base) < 1000
            and (
                "cooldown" in effect_cf
                or (
                    "duration" in effect_cf
                    and "duration %" not in effect_cf
                )
            )
        ):

            return {
                "kind":
                    "duration_seconds",

                "old":
                    abs(base),

                "new":
                    abs(pvp),

                "unit":
                    "sec",
            }


        if (
            "range" in effect_cf
        ):

            return {
                "kind":
                    "distance_yards",

                "old":
                    abs(base),

                "new":
                    abs(pvp),

                "unit":
                    "yd",
            }


        percent_signals = (
            "damage/healing",
            "damage healing",
            "damage done",
            "damage taken",
            "healing done",
            "healing taken",
            "run speed %",
            "movement speed %",
            "attack speed %",
            "casting speed %",
            "critical strike",
            "duration %",
            "chance",
            "percent",
        )

        if any(
            signal in effect_cf
            for signal in percent_signals
        ):

            return {
                "kind":
                    "percent_value",

                "old":
                    abs(base),

                "new":
                    abs(pvp),

                "unit":
                    "%",
            }


        # Negative DB values generally appear positively in prose:
        #
        #   Value -50
        #   "Reduces ... by 50%"
        #
        # Therefore use magnitudes for text rendering.
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


        elif (
            kind
            == "distance_yards"
        ):

            if not re.match(
                r"\s*(?:yds?|yards?)\b",
                tail,
                re.I,
            ):
                continue


        elif (
            kind
            in {
                "percent_value",
                "percent_direction_flip",
            }
        ):

            if not re.match(
                r"\s*%",
                tail,
                re.I,
            ):
                continue


        matches.append(
            match
        )

    return matches


_CONTEXT_STOPWORDS = {
    "about",
    "after",
    "again",
    "against",
    "also",
    "and",
    "are",
    "before",
    "being",
    "between",
    "cast",
    "causing",
    "each",
    "effect",
    "from",
    "have",
    "into",
    "more",
    "next",
    "other",
    "over",
    "spell",
    "that",
    "their",
    "then",
    "this",
    "your",
    "with",
}


def _context_words(
    value: str,
) -> set[str]:

    cleaned = re.sub(
        r"\$[^\s\]\[(),]+",
        " ",
        str(value or ""),
    )

    words = {
        word.casefold()
        for word in re.findall(
            r"[A-Za-z][A-Za-z'-]{3,}",
            cleaned,
        )
    }

    return {
        word
        for word in words
        if word not in _CONTEXT_STOPWORDS
    }


def _reference_effect_patterns(
    effect_index,
    *,
    source_spell_id=None,
    effect_origin=None,
):
    if effect_index is None:
        return tuple()

    index = int(effect_index)

    # Dependency rows must match the qualified child token. A parent
    # and child can both have Effect #3 in the same formula, and using
    # an unqualified $s3 there would attach the child's PvP modifier to
    # the parent's unrelated value.
    if (
        effect_origin == "DEPENDENCY"
        and source_spell_id is not None
    ):
        return (
            re.compile(
                r"\$"
                + str(int(source_spell_id))
                + rf"s{index}(?!\d)",
                re.I,
            ),
        )

    patterns = [
        re.compile(
            rf"\$s{index}(?!\d)",
            re.I,
        ),
    ]

    if source_spell_id is not None:
        patterns.append(
            re.compile(
                r"\$"
                + str(int(source_spell_id))
                + rf"s{index}(?!\d)",
                re.I,
            )
        )

    return tuple(patterns)


def _reference_effect_occurrence_count(
    reference_contexts,
    effect_index,
    *,
    source_spell_id=None,
    effect_origin=None,
) -> int:
    """Count explicit SimC references to one concrete SpellEffect."""

    patterns = _reference_effect_patterns(
        effect_index,
        source_spell_id=source_spell_id,
        effect_origin=effect_origin,
    )

    return sum(
        sum(
            len(pattern.findall(str(context or "")))
            for pattern in patterns
        )
        for context in (
            reference_contexts
            or []
        )
    )


def _reference_context_words_for_effect(
    reference_contexts,
    effect_index,
    *,
    source_spell_id=None,
    effect_origin=None,
) -> set[str]:
    """
    Prefer words local to the exact effect token over all words in a
    long formula line. Parent and child can share the same effect index.
    """

    patterns = _reference_effect_patterns(
        effect_index,
        source_spell_id=source_spell_id,
        effect_origin=effect_origin,
    )

    local_words = set()

    for context in (
        reference_contexts
        or []
    ):
        text = str(context or "")

        for pattern in patterns:
            for match in pattern.finditer(text):
                left = max(
                    0,
                    match.start() - 75,
                )
                right = min(
                    len(text),
                    match.end() + 75,
                )
                local_words.update(
                    _context_words(
                        text[left:right]
                    )
                )

    if len(local_words) >= 2:
        return local_words

    fallback = set()

    for context in (
        reference_contexts
        or []
    ):
        fallback.update(
            _context_words(
                context
            )
        )

    return fallback

def _select_reference_context_matches(
    text: str,
    matches,
    *,
    reference_contexts,
    effect_index,
    source_spell_id=None,
    effect_origin=None,
):
    """
    Select N repeated equal-value tokens when exact SimC provenance
    explicitly references the same SpellEffect N times.

    We still require context-word support and a material score gap after
    the Nth selected token. This is intentionally conservative.
    """

    expected = _reference_effect_occurrence_count(
        reference_contexts,
        effect_index,
        source_spell_id=source_spell_id,
        effect_origin=effect_origin,
    )

    if expected <= 1:
        return []

    if expected == len(matches):
        return list(matches)

    if expected > len(matches):
        return []

    context_words = (
        _reference_context_words_for_effect(
            reference_contexts,
            effect_index,
            source_spell_id=source_spell_id,
            effect_origin=effect_origin,
        )
    )

    if len(context_words) < 2:
        return []

    # First try a stronger structural signal: if the provenance text
    # with N explicit references maps to one unique player-facing line
    # containing exactly N matching values, that line is the safe target.
    line_candidates = []

    offset = 0

    for line in text.splitlines(
        keepends=True
    ):
        line_start = offset
        line_end = offset + len(line)
        offset = line_end

        line_matches = [
            match
            for match in matches
            if (
                line_start
                <= match.start(1)
                < line_end
            )
        ]

        if len(line_matches) != expected:
            continue

        line_words = set(
            _context_words(
                line
            )
        )

        overlap = len(
            context_words
            & line_words
        )

        if overlap >= 3:
            line_candidates.append(
                (
                    overlap,
                    line_matches,
                )
            )

    line_candidates.sort(
        key=lambda item:
            -item[0]
    )

    if line_candidates:

        best_overlap, best_matches = (
            line_candidates[0]
        )

        second_overlap = (
            line_candidates[1][0]
            if len(line_candidates) > 1
            else 0
        )

        if (
            best_overlap
            - second_overlap
            >= 2
        ):
            return best_matches

    word_positions = {}

    for word in context_words:
        positions = [
            (
                found.start()
                + found.end()
            ) / 2.0
            for found in re.finditer(
                rf"\b{re.escape(word)}\b",
                text,
                re.I,
            )
        ]

        if positions:
            word_positions[word] = positions

    if len(word_positions) < 2:
        return []

    scored = []

    for match in matches:
        center = (
            match.start(1)
            + match.end(1)
        ) / 2.0

        contributions = []

        for positions in word_positions.values():
            distance = min(
                abs(center - position)
                for position in positions
            )

            if distance <= 110:
                contributions.append(
                    1.0 - distance / 110.0
                )

        score = sum(contributions)
        support = sum(
            contribution > 0
            for contribution in contributions
        )

        scored.append(
            (score, support, match)
        )

    scored.sort(
        key=lambda item: (
            -item[0],
            -item[1],
        )
    )

    selected = scored[:expected]
    remainder = scored[expected:]

    if any(
        support < 2 or score < 0.7
        for score, support, _ in selected
    ):
        return []

    if remainder:
        selected_floor = min(
            score
            for score, _, _ in selected
        )
        next_score = remainder[0][0]

        if (
            selected_floor
            - next_score
            < 0.35
        ):
            return []

    return [
        match
        for _, _, match
        in sorted(
            selected,
            key=lambda item:
                item[2].start(1),
        )
    ]


def _ordered_context_words(
    value: str,
) -> list[str]:
    """Ordered version of _context_words for directional provenance."""

    cleaned = re.sub(
        r"\$[^\s\]\[(),]+",
        " ",
        str(value or ""),
    )

    return [
        word.casefold()
        for word in re.findall(
            r"[A-Za-z][A-Za-z'-]{3,}",
            cleaned,
        )
        if word.casefold()
        not in _CONTEXT_STOPWORDS
    ]


def _select_directional_reference_match(
    text: str,
    matches,
    *,
    reference_contexts,
    effect_index=None,
    source_spell_id=None,
    effect_origin=None,
):
    """
    Match repeated equal values using the words immediately before and
    after the exact SimC $sN / $SpellIDsN token.

    This keeps provenance directional. It is materially stronger than a
    bag-of-words score when two equal values occur in the same sentence,
    e.g. Frostfire Empowerment's "deal 60%" vs "explode for 60%".
    """

    patterns = _reference_effect_patterns(
        effect_index,
        source_spell_id=source_spell_id,
        effect_origin=effect_origin,
    )

    if not patterns:
        return None

    signatures = []

    for context in (
        reference_contexts
        or []
    ):
        source = str(
            context or ""
        )

        for pattern in patterns:
            for ref in pattern.finditer(
                source
            ):
                before_words = (
                    _ordered_context_words(
                        source[
                            max(
                                0,
                                ref.start() - 80,
                            ):
                            ref.start()
                        ]
                    )
                )

                after_words = (
                    _ordered_context_words(
                        source[
                            ref.end():
                            min(
                                len(source),
                                ref.end() + 80,
                            )
                        ]
                    )
                )

                before = set(
                    before_words[-5:]
                )

                after = set(
                    after_words[:5]
                )

                if (
                    len(before)
                    + len(after)
                    >= 2
                ):
                    signatures.append(
                        (
                            before,
                            after,
                        )
                    )

    if not signatures:
        return None

    scored = []

    for match in matches:
        before_words = (
            _ordered_context_words(
                text[
                    max(
                        0,
                        match.start(1) - 80,
                    ):
                    match.start(1)
                ]
            )
        )

        after_words = (
            _ordered_context_words(
                text[
                    match.end(1):
                    min(
                        len(text),
                        match.end(1) + 80,
                    )
                ]
            )
        )

        visible_before = set(
            before_words[-5:]
        )

        visible_after = set(
            after_words[:5]
        )

        best = (
            0,
            0,
        )

        for (
            reference_before,
            reference_after,
        ) in signatures:
            before_overlap = len(
                reference_before
                & visible_before
            )

            after_overlap = len(
                reference_after
                & visible_after
            )

            support = (
                before_overlap
                + after_overlap
            )

            # Same-side words are deliberate provenance evidence.
            score = (
                2 * before_overlap
                + 2 * after_overlap
            )

            if (
                score,
                support,
            ) > best:
                best = (
                    score,
                    support,
                )

        scored.append(
            (
                best[0],
                best[1],
                match,
            )
        )

    scored.sort(
        key=lambda item: (
            -item[0],
            -item[1],
            item[2].start(1),
        )
    )

    best_score, best_support, best_match = (
        scored[0]
    )

    if (
        best_support < 2
        or best_score < 4
    ):
        return None

    if len(scored) > 1:
        second_score = (
            scored[1][0]
        )

        if (
            best_score
            - second_score
            < 2
        ):
            return None

    return best_match


def _select_reference_context_match(
    text: str,
    matches,
    *,
    reference_contexts,
    effect_index=None,
    source_spell_id=None,
    effect_origin=None,
):
    """
    Use exact-build SimC Description/Tooltip text around $sN as a
    provenance-backed disambiguator for repeated equal values.

    Selection is deliberately conservative: at least two distinctive
    context words must support the winner, and it must beat the second
    candidate by a material margin.
    """

    directional_match = (
        _select_directional_reference_match(
            text,
            matches,
            reference_contexts=
                reference_contexts,
            effect_index=
                effect_index,
            source_spell_id=
                source_spell_id,
            effect_origin=
                effect_origin,
        )
    )

    if directional_match is not None:
        return directional_match

    context_words = (
        _reference_context_words_for_effect(
            reference_contexts,
            effect_index,
            source_spell_id=source_spell_id,
            effect_origin=effect_origin,
        )
    )

    if len(context_words) < 2:
        return None

    word_positions = {}

    for word in context_words:

        positions = [
            (
                match.start()
                + match.end()
            )
            / 2.0
            for match in re.finditer(
                rf"\b{re.escape(word)}\b",
                text,
                re.I,
            )
        ]

        if positions:
            word_positions[
                word
            ] = positions

    if len(word_positions) < 2:
        return None

    scored = []

    for match in matches:

        center = (
            match.start(1)
            + match.end(1)
        ) / 2.0

        contributions = []

        for positions in (
            word_positions.values()
        ):

            distance = min(
                abs(
                    center
                    - position
                )
                for position
                in positions
            )

            if distance <= 100:

                contributions.append(
                    1.0
                    - (
                        distance
                        / 100.0
                    )
                )

        score = sum(
            contributions
        )

        support = sum(
            contribution > 0
            for contribution
            in contributions
        )

        scored.append(
            (
                score,
                support,
                match,
            )
        )

    scored.sort(
        key=lambda item: (
            -item[0],
            -item[1],
        )
    )

    best_score, best_support, best = (
        scored[0]
    )

    if (
        best_support < 2
        or best_score < 0.7
    ):
        return None

    if len(scored) > 1:

        second_score = (
            scored[1][0]
        )

        if (
            best_score
            - second_score
            < 0.35
        ):
            return None

    return best


def _context_anchor_patterns(
    effect_text: str,
) -> tuple[str, ...]:
    """
    Strong semantic anchors only. These are intentionally sparse:
    if the SpellEffect does not provide a distinctive player-facing
    concept we leave the repeated number ambiguous.
    """

    text = str(
        effect_text or ""
    ).casefold()

    if (
        "damage/healing" in text
        or "damage healing" in text
    ):
        return (
            r"damage\s+(?:and|/)\s*healing",
            r"healing\s+(?:and|/)\s*damage",
        )

    if (
        "damage taken" in text
    ):
        return (
            r"damage\s+(?:you\s+)?take",
            r"take\s+[^.!?\n]{0,30}?damage",
            r"damage\s+taken",
        )

    if (
        "healing taken" in text
    ):
        return (
            r"healing\s+(?:you\s+)?(?:take|receive)",
            r"healing\s+taken",
        )

    if (
        "run speed" in text
        or "movement speed" in text
    ):
        return (
            r"(?:movement|run)\s+speed",
        )

    if (
        "critical strike" in text
    ):
        return (
            r"critical\s+strike",
        )

    if (
        "mastery" in text
    ):
        return (
            r"mastery",
        )

    if (
        "absorb" in text
    ):
        return (
            r"absorb(?:s|ing|ed)?",
        )

    return tuple()


def _affected_spell_names(
    row,
) -> tuple[str, ...]:
    """
    Extract explicit Affected Spells names from source evidence.

    These names are useful as exclusion anchors: an unmodified sibling
    effect can prove which repeated visible number belongs to it, leaving
    the remaining occurrence for the modified effect.
    """

    raw = str(
        row.get(
            "wowhead_raw",
            "",
        )
        or ""
    )

    lines = [
        line.strip()
        for line in raw.splitlines()
    ]

    names = []
    active = False

    for line in lines:

        if line.casefold() == "affected spells:":
            active = True
            continue

        if not active:
            continue

        if not line:
            continue

        lower = line.casefold()

        if (
            lower == "see more"
            or lower.startswith("trait #")
            or lower.startswith("value:")
            or lower.startswith("pvp multiplier:")
        ):
            if lower != "see more":
                break
            continue

        # Avoid obvious metadata accidentally appearing in the tail.
        if re.match(
            r"^(effect|radius|interval|server-side script)\b",
            line,
            re.I,
        ):
            break

        if line not in names:
            names.append(line)

    return tuple(names)


def _select_by_unmodified_sibling_context(
    text: str,
    matches,
    *,
    target_old: float,
    context_rows,
):
    """
    Resolve a repeated value by excluding occurrences proven to belong
    to an unmodified sibling SpellEffect.

    Example: Desperate Instincts contains two visible 10% values. The
    sibling effect that explicitly modifies Blur remains 10% in PvP,
    while the separate modified Dummy effect becomes 5%. The word
    "Blur" identifies the unchanged occurrence, so the other 10% is the
    only safe replacement target.
    """

    claimed = set()

    for row in (
        context_rows
        or []
    ):

        base = _number(
            row.get(
                "base_value"
            )
        )

        if (
            base is None
            or abs(
                abs(base)
                - abs(float(target_old))
            ) > 1e-4
        ):
            continue

        final_multiplier = _number(
            row.get(
                "final_pvp_multiplier"
            )
        )

        if (
            row.get(
                "is_final_pvp_modified",
                False,
            )
            or (
                final_multiplier is not None
                and abs(
                    final_multiplier - 1.0
                ) > 1e-9
            )
        ):
            continue

        anchors = list(
            _affected_spell_names(
                row
            )
        )

        if not anchors:
            continue

        anchor_positions = []

        for anchor in anchors:

            if len(anchor) < 3:
                continue

            for found in re.finditer(
                re.escape(anchor),
                text,
                re.I,
            ):
                anchor_positions.append(
                    (
                        found.start()
                        + found.end()
                    )
                    / 2.0
                )

        if not anchor_positions:
            continue

        distances = []

        for index, match in enumerate(
            matches
        ):

            center = (
                match.start(1)
                + match.end(1)
            ) / 2.0

            distance = min(
                abs(
                    center - position
                )
                for position
                in anchor_positions
            )

            distances.append(
                (
                    distance,
                    index,
                )
            )

        distances.sort()

        best_distance, best_index = (
            distances[0]
        )

        if best_distance > 100:
            continue

        if len(distances) > 1:

            second_distance = (
                distances[1][0]
            )

            if (
                second_distance
                - best_distance
                < 12
            ):
                continue

        claimed.add(
            best_index
        )

    remaining = [
        match
        for index, match
        in enumerate(matches)
        if index not in claimed
    ]

    if len(remaining) == 1:
        return remaining[0]

    return None


def _select_repeated_formula_variable_matches(
    text: str,
    matches,
):
    """
    Select repeated numeric tokens that are clearly part of the same
    algebraic player-facing formula while equal standalone unit values
    remain untouched.

    Example (Frozen Dominion):
        lasts 4 sec longer
        (4 * $mastery)% ... (4 * $mastery * 5)%

    With no source-side $sN text available, the two formula occurrences
    are still structurally distinct from the duration token. Requiring
    at least two formula matches keeps this fallback conservative.
    """

    formula_matches = []

    for match in matches:
        left = max(
            0,
            match.start(1) - 18,
        )
        right = min(
            len(text),
            match.end(1) + 34,
        )

        window = text[
            left:right
        ]

        has_variable = bool(
            re.search(
                r"\$[A-Za-z_][A-Za-z0-9_]*",
                window,
            )
        )

        has_operator = bool(
            re.search(
                r"[*\/]",
                window,
            )
        )

        if (
            has_variable
            and has_operator
        ):
            formula_matches.append(
                match
            )

    if len(formula_matches) < 2:
        return []

    # Every selected occurrence must belong to a formula and at least
    # one equal-valued token must remain outside those formulas. This
    # makes the fallback useful specifically for formula-vs-unit
    # ambiguity instead of becoming a generic "replace all" rule.
    if (
        len(formula_matches)
        >= len(matches)
    ):
        return []

    return formula_matches


def _select_contextual_match(
    text: str,
    matches,
    *,
    effect_text: str,
):
    """
    Pick a repeated equal-value token only when a strong semantic
    phrase from the SpellEffect is uniquely and materially closer to
    one occurrence than to the others.
    """

    anchors = (
        _context_anchor_patterns(
            effect_text
        )
    )

    if not anchors:
        return None

    positions = []

    for pattern in anchors:
        for anchor in re.finditer(
            pattern,
            text,
            re.I,
        ):
            positions.append(
                (
                    anchor.start()
                    + anchor.end()
                )
                / 2.0
            )

    if not positions:
        return None

    scored = []

    for match in matches:
        center = (
            match.start(1)
            + match.end(1)
        ) / 2.0

        distance = min(
            abs(
                center
                - position
            )
            for position in positions
        )

        scored.append(
            (
                distance,
                match,
            )
        )

    scored.sort(
        key=lambda item:
            item[0]
    )

    best_distance = (
        scored[0][0]
    )

    if best_distance > 80:
        return None

    if len(scored) > 1:

        second_distance = (
            scored[1][0]
        )

        # Require a real separation. A phrase shared by the entire
        # sentence should not arbitrarily select one of two values.
        if (
            second_distance
            - best_distance
            < 8
        ):
            return None

    return scored[0][1]


def _conflicting_transforms_have_disjoint_targets(
    text: str,
    candidates,
) -> bool:
    """
    Different PvP transforms may share the same visible PvE value yet
    still be unambiguous when exact source provenance points each one to
    a different occurrence.

    Frostfire Empowerment is the canonical case: one 60% is the child
    spell's increased damage, another 60% is the parent's explosion.
    """

    selected_positions = []

    for candidate in candidates:
        matches = _numeric_matches(
            text,
            value=candidate["old"],
            kind=candidate["kind"],
        )

        if not matches:
            return False

        selected = None

        if len(matches) == 1:
            selected = matches[0]

        else:
            selected = _select_reference_context_match(
                text,
                matches,
                reference_contexts=
                    candidate.get(
                        "reference_contexts",
                        [],
                    ),
                effect_index=
                    candidate.get(
                        "effect_index"
                    ),
                source_spell_id=
                    candidate.get(
                        "source_spell_id"
                    ),
                effect_origin=
                    candidate.get(
                        "effect_origin"
                    ),
            )

            if selected is None:
                selected = _select_contextual_match(
                    text,
                    matches,
                    effect_text=
                        candidate.get(
                            "effect_text",
                            "",
                        ),
                )

        if selected is None:
            return False

        selected_positions.append(
            (
                selected.start(1),
                selected.end(1),
            )
        )

    return (
        len(set(selected_positions))
        == len(selected_positions)
    )


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


_DIRECTION_FLIP_WORDS_POSITIVE = {
    "increased": "reduced",
    "increase": "reduce",
    "increases": "reduces",
    "increasing": "reducing",
    "additional": "reduced",
    "more": "less",
}

_DIRECTION_FLIP_WORDS_NEGATIVE = {
    "reduced": "increased",
    "reduce": "increase",
    "reduces": "increases",
    "reducing": "increasing",
    "decreased": "increased",
    "decrease": "increase",
    "decreases": "increases",
    "decreasing": "increasing",
    "less": "more",
}


def _preserve_word_case(
    source: str,
    target: str,
) -> str:
    if source.isupper():
        return target.upper()

    if (
        source
        and source[0].isupper()
    ):
        return (
            target[0].upper()
            + target[1:]
        )

    return target


def _direction_word_replacement(
    text: str,
    numeric_replacement: dict,
    *,
    from_sign: int,
):
    mapping = (
        _DIRECTION_FLIP_WORDS_POSITIVE
        if from_sign > 0
        else _DIRECTION_FLIP_WORDS_NEGATIVE
    )

    left = max(
        0,
        numeric_replacement["start"] - 42,
    )

    right = min(
        len(text),
        numeric_replacement["end"] + 42,
    )

    candidates = []

    for match in re.finditer(
        r"\b[A-Za-z]+\b",
        text[left:right],
    ):
        word = match.group(0)
        replacement = mapping.get(
            word.casefold()
        )

        if replacement is None:
            continue

        start = (
            left
            + match.start()
        )

        end = (
            left
            + match.end()
        )

        distance = min(
            abs(
                start
                - numeric_replacement[
                    "end"
                ]
            ),
            abs(
                numeric_replacement[
                    "start"
                ]
                - end
            ),
        )

        candidates.append(
            (
                distance,
                start,
                end,
                word,
                replacement,
            )
        )

    if not candidates:
        return None

    candidates.sort(
        key=lambda item: (
            item[0],
            item[1],
        )
    )

    (
        distance,
        start,
        end,
        word,
        replacement,
    ) = candidates[0]

    if distance > 42:
        return None

    return {
        "start": start,
        "end": end,
        "old_token": word,
        "new_token": _preserve_word_case(
            word,
            replacement,
        ),
        "kind": "direction_word",
        "effect_indexes":
            numeric_replacement[
                "effect_indexes"
            ],
    }


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
    context_rows=None,
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

                "effect_text":
                    row.get(
                        "effect_text",
                        "",
                    ),

                "reference_contexts":
                    list(
                        row.get(
                            "simc_reference_contexts",
                            [],
                        )
                        or []
                    ),

                "effect_origin":
                    row.get(
                        "effect_origin"
                    ),

                "source_spell_id":
                    row.get(
                        "source_spell_id",
                        row.get(
                            "spell_id"
                        ),
                    ),

                "dependency_kind":
                    row.get(
                        "dependency_kind"
                    ),

                "dependency_path":
                    list(
                        row.get(
                            "dependency_path"
                        )
                        or []
                    ),

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
    # Canonicalize equivalent semantic encodings.
    #
    # The same player-facing percentage can be represented by
    # several SpellEffects, where one effect explicitly carries
    # percentage semantics and another is a generic "modify effect"
    # row. When both effects have the exact same PvE -> PvP
    # transformation, the explicit semantic kind is strong evidence
    # for the generic sibling too.
    #
    # Examples:
    #   Avatar: damage / auto-attack / periodic-damage effects
    #   Soul Rending: leech + Metamorphosis-linked modifier
    #
    # This is deliberately narrow: only ordinary_value rows are
    # promoted, only when an otherwise-identical transform already
    # has an explicit semantic kind.
    # --------------------------------------------------------

    explicit_kind_by_values = {}

    for transform in transforms:

        if transform["kind"] == "ordinary_value":
            continue

        value_key = (
            round(
                transform["old"],
                8,
            ),
            round(
                transform["new"],
                8,
            ),
        )

        explicit_kind_by_values.setdefault(
            value_key,
            set(),
        ).add(
            transform["kind"]
        )


    for transform in transforms:

        if transform["kind"] != "ordinary_value":
            continue

        value_key = (
            round(
                transform["old"],
                8,
            ),
            round(
                transform["new"],
                8,
            ),
        )

        explicit_kinds = (
            explicit_kind_by_values.get(
                value_key,
                set(),
            )
        )

        # Require one unique explicit interpretation. If the same
        # values are simultaneously encoded as (say) seconds and
        # percentages, retaining ambiguity is safer than guessing.
        if len(explicit_kinds) != 1:
            continue

        explicit_kind = next(
            iter(
                explicit_kinds
            )
        )

        if explicit_kind not in {
            "percent_value",
            "duration_seconds",
            "distance_yards",
        }:
            continue

        transform[
            "kind"
        ] = explicit_kind

        transform[
            "unit"
        ] = {
            "percent_value": "%",
            "duration_seconds": "sec",
            "distance_yards": "yd",
        }[
            explicit_kind
        ]


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

    # Conflict identity is semantic-kind aware. The same numeric
    # literal may legitimately appear once as a duration and once as
    # an ordinary percentage/value, and _numeric_matches() already
    # searches those units independently. Treating those as one
    # conflict creates false REVIEW_REQUIRED states.
    by_old = {}

    for transform in grouped.values():

        old_key = (
            transform["kind"],
            round(
                transform["old"],
                8,
            ),
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
            round(
                candidate["new"],
                8,
            )
            for candidate in candidates
        }

        if len(
            distinct_new
        ) <= 1:
            continue

        if (
            _conflicting_transforms_have_disjoint_targets(
                pve_text,
                candidates,
            )
        ):
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
                        "PvE "
                        f"{old_key[0]} value "
                        f"{old_key[1]} maps to "
                        "multiple PvP values"
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

            elif (
                transform.get(
                    "effect_origin"
                )
                == "DEPENDENCY"
                and len(
                    transform.get(
                        "dependency_path",
                        [],
                    )
                ) > 2
            ):

                # A nested implementation/formula dependency can carry
                # a real PvP mechanic without exposing its own raw
                # numeric parameter in the parent talent tooltip.
                # Preserve it in mechanics, but do not fail the parent
                # renderer solely because that internal value is absent.
                status = (
                    "NESTED_DEPENDENCY_NOT_VISIBLE"
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

            reference_matches = (
                _select_reference_context_matches(
                    pve_text,
                    matches,
                    reference_contexts=
                        transform.get(
                            "reference_contexts",
                            [],
                        ),
                    effect_index=
                        transform.get(
                            "effect_index"
                        ),
                    source_spell_id=
                        transform.get(
                            "source_spell_id"
                        ),
                    effect_origin=
                        transform.get(
                            "effect_origin"
                        ),
                )
            )

            if reference_matches:

                for match in reference_matches:

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

            if transform["kind"] in {
                "spell_power_coefficient",
                "attack_power_coefficient",
            }:

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

            contextual_match = (
                _select_reference_context_match(
                    pve_text,
                    matches,
                    reference_contexts=
                        transform.get(
                            "reference_contexts",
                            [],
                        ),
                    effect_index=
                        transform.get(
                            "effect_index"
                        ),
                    source_spell_id=
                        transform.get(
                            "source_spell_id"
                        ),
                    effect_origin=
                        transform.get(
                            "effect_origin"
                        ),
                )
            )

            if contextual_match is None:

                contextual_match = (
                    _select_contextual_match(
                        pve_text,
                        matches,
                        effect_text=
                            transform.get(
                                "effect_text",
                                "",
                            ),
                    )
                )

            if contextual_match is None:

                contextual_match = (
                    _select_by_unmodified_sibling_context(
                        pve_text,
                        matches,
                        target_old=
                            transform[
                                "old"
                            ],
                        context_rows=
                            context_rows,
                    )
                )

            if contextual_match is None:

                formula_matches = (
                    _select_repeated_formula_variable_matches(
                        pve_text,
                        matches,
                    )
                )

                if formula_matches:

                    for formula_match in formula_matches:

                        old_token = (
                            formula_match
                            .group(1)
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
                                    formula_match
                                    .start(1),

                                "end":
                                    formula_match
                                    .end(1),

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

            if contextual_match is not None:

                old_token = (
                    contextual_match
                    .group(1)
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
                            contextual_match
                            .start(1),

                        "end":
                            contextual_match
                            .end(1),

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
    # Sign-flip transforms also need a nearby prose-direction rewrite.
    # A numeric-only result such as "20% increased" -> "20% increased"
    # would be semantically wrong even though the magnitude is correct.
    # --------------------------------------------------------

    direction_sign_by_effects = {
        tuple(
            sorted(
                transform[
                    "effect_indexes"
                ]
            )
        ):
            int(
                transform[
                    "direction_from_sign"
                ]
            )
        for transform in grouped.values()
        if (
            transform.get(
                "kind"
            )
            == "percent_direction_flip"
            and transform.get(
                "direction_from_sign"
            )
            is not None
        )
    }

    augmented_replacements = []
    seen_direction_spans = set()

    for replacement in replacements:

        if (
            replacement.get(
                "kind"
            )
            != "percent_direction_flip"
        ):
            augmented_replacements.append(
                replacement
            )
            continue

        key = tuple(
            sorted(
                replacement[
                    "effect_indexes"
                ]
            )
        )

        direction_sign = (
            direction_sign_by_effects.get(
                key
            )
        )

        word_replacement = (
            _direction_word_replacement(
                pve_text,
                replacement,
                from_sign=
                    direction_sign,
            )
            if direction_sign
            is not None
            else None
        )

        if word_replacement is None:
            diagnostics.append(
                {
                    "effect_indexes":
                        replacement[
                            "effect_indexes"
                        ],

                    "status":
                        "DIRECTION_WORD_NOT_FOUND",

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
            continue

        augmented_replacements.append(
            replacement
        )

        span_key = (
            word_replacement[
                "start"
            ],
            word_replacement[
                "end"
            ],
            word_replacement[
                "new_token"
            ],
        )

        if span_key not in seen_direction_spans:
            seen_direction_spans.add(
                span_key
            )
            augmented_replacements.append(
                word_replacement
            )

    replacements = (
        augmented_replacements
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
        "DIRECTION_WORD_NOT_FOUND",
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
