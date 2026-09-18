from __future__ import annotations

import re
from collections import defaultdict

from .models import ReconciledEffect, WikiObservation


PCT = re.compile(r"(?<![\d.])([+-]?\d+(?:\.\d+)?)%")


def fmt(x: float) -> str:
    if abs(x - round(x)) < 1e-9:
        return str(int(round(x)))
    return f"{x:.2f}".rstrip("0").rstrip(".")


def simple_pvp_rewrite(
    base_tooltip: str,
    effects: list[ReconciledEffect],
):
    """
    Conservative PvP tooltip renderer.

    A visible numeric value can occur in several different spell effects.

    Example: Inner Quietus has multiple effects with base value 20%:
        Effect #1: 20% × 1.0 = 20%
        Effect #2: 20% × 2.5 = 50%

    Therefore a bare "20%" in the human-readable tooltip is ambiguous.
    We MUST NOT globally replace every 20% with 50%.

    Automatic replacement is allowed only when all effects sharing the
    same base value resolve to exactly the same PvP value.
    """

    # base value -> all PvP values produced by effects with that base value
    candidates: dict[float, set[float]] = defaultdict(set)

    for effect in effects:
        if effect.base_value is None or effect.pvp_value is None:
            continue

        base = round(float(effect.base_value), 8)
        pvp = round(float(effect.pvp_value), 8)

        # IMPORTANT:
        # Include ×1 effects as well. They are required for ambiguity detection.
        candidates[base].add(pvp)

    mappings: dict[float, float] = {}
    ambiguous: set[float] = set()

    for base, pvp_values in candidates.items():

        # Same visible PvE value maps to multiple PvP values.
        # We cannot know which textual occurrence belongs to which effect.
        if len(pvp_values) > 1:
            ambiguous.add(base)
            continue

        pvp_value = next(iter(pvp_values))

        # No need to rewrite unchanged values.
        if pvp_value == base:
            continue

        mappings[base] = pvp_value

    def repl(match: re.Match) -> str:
        base = round(float(match.group(1)), 8)

        if base in ambiguous:
            return match.group(0)

        pvp_value = mappings.get(base)

        if pvp_value is None:
            return match.group(0)

        return f"{fmt(pvp_value)}%"

    rewritten = PCT.sub(repl, base_tooltip)

    return rewritten, ambiguous
