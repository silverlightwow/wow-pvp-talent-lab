from __future__ import annotations

import json
import re
from dataclasses import dataclass

from .models import (
    EffectObservation,
    ReconciledEffect,
)


# Drustvar currently rounds a number of multipliers:
#
#   Wowhead 0.667  <-> Drustvar 0.66
#   Wowhead 0.715  <-> Drustvar 0.71
#   Wowhead 0.834  <-> Drustvar 0.83
#   Wowhead 1.3334 <-> Drustvar 1.33
#
# 0.011 safely covers these observed cases without making
# multiplier matching excessively permissive.
MULTIPLIER_TOLERANCE = 0.011


@dataclass
class EffectMatch:
    wowhead: EffectObservation
    drustvar: EffectObservation
    semantic_score: float
    multiplier_delta: float
    reason: str


def multipliers_close(
    a: float | None,
    b: float | None,
    tolerance: float = MULTIPLIER_TOLERANCE,
) -> bool:

    if a is None or b is None:
        return False

    return abs(a - b) <= tolerance


def _normalize_text(text: str) -> str:

    text = (
        str(text or "")
        .replace("\xa0", " ")
        .casefold()
    )

    text = text.replace("|", " ")

    text = re.sub(
        r"\s+",
        " ",
        text,
    )

    return text.strip()


def _final_effect_code(
    text: str,
) -> int | None:
    """
    Extract the final semantic subtype.

    Examples:

      Wowhead:
        Modifies Spell Power (24)
                          -> 24

      Drustvar:
        Apply Aura (6) | Add Percent Modifier (108):
        Spell Power (24)
                          -> 24

    The earlier (6)/(108) are operation/aura codes, whereas
    the final code describes the modified property.
    """

    numbers = re.findall(
        r"\((\d+)\)",
        str(text or ""),
    )

    if not numbers:
        return None

    return int(numbers[-1])


def _semantic_flags(
    text: str,
) -> set[str]:

    text = _normalize_text(text)

    flags = set()

    keywords = {
        "periodic": "periodic",
        "spell power": "spell_power",
        "power cost": "cost",
        "spell cost": "cost",
        "resource generation": "resource",
        "time between ticks": "tick_time",
        "damage/healing": "damage_healing",
        "damage healing": "damage_healing",
        "healing done": "healing",
        "damage done": "damage",
        "damage taken": "damage_taken",
        "healing taken": "healing_taken",
        "attack speed": "attack_speed",
        "dummy": "dummy",
        "stamina": "stamina",
        "absorb": "absorb",
        "cooldown": "cooldown",
        "label": "label",
    }

    for needle, flag in keywords.items():
        if needle in text:
            flags.add(flag)

    return flags


def _semantic_tokens(
    text: str,
) -> set[str]:

    text = _normalize_text(text)

    # Normalize terminology used differently by Wowhead/SimC.
    replacements = {
        "modifies": " ",
        "modify": " ",
        "modifier": " ",
        "apply aura": " ",
        "add percent": " ",
        "add percentage": " ",
        "percent": " ",
        "percentage": " ",
        "spell cost": " cost ",
        "power cost": " cost ",
        "damage/healing": " damage healing ",
        "w/": " with ",
    }

    for old, new in replacements.items():
        text = text.replace(
            old,
            new,
        )

    text = re.sub(
        r"\(\d+\)",
        " ",
        text,
    )

    text = re.sub(
        r"[^a-z0-9]+",
        " ",
        text,
    )

    stopwords = {
        "aura",
        "apply",
        "add",
        "mod",
        "all",
        "by",
        "from",
        "the",
        "of",
        "to",
        "with",
        "value",
        "effect",
    }

    return {
        token
        for token in text.split()
        if (
            len(token) >= 3
            and token not in stopwords
        )
    }


def semantic_score(
    wowhead: EffectObservation,
    drustvar: EffectObservation,
) -> float:
    """
    Compare WHAT the effects modify.

    Multiplier is deliberately NOT included here.
    It is handled separately as a compatibility constraint.
    """

    wh_text = wowhead.effect_text or ""
    dr_text = drustvar.effect_text or ""

    score = 0.0

    wh_code = _final_effect_code(
        wh_text
    )

    dr_code = _final_effect_code(
        dr_text
    )

    # Strongest semantic clue.
    if (
        wh_code is not None
        and dr_code is not None
        and wh_code == dr_code
    ):
        score += 10.0

    wh_flags = _semantic_flags(
        wh_text
    )

    dr_flags = _semantic_flags(
        dr_text
    )

    shared_flags = (
        wh_flags
        & dr_flags
    )

    score += (
        3.0
        * len(shared_flags)
    )

    # These distinctions are particularly important when several
    # effects share the same multiplier.
    discriminators = {
        "periodic",
        "label",
        "spell_power",
        "cost",
        "resource",
        "tick_time",
        "absorb",
        "damage_taken",
        "healing_taken",
    }

    for flag in discriminators:

        wh_has = flag in wh_flags
        dr_has = flag in dr_flags

        if wh_has and dr_has:
            score += 3.0

        elif wh_has != dr_has:
            score -= 1.5

    wh_tokens = _semantic_tokens(
        wh_text
    )

    dr_tokens = _semantic_tokens(
        dr_text
    )

    union = (
        wh_tokens
        | dr_tokens
    )

    if union:

        jaccard = (
            len(
                wh_tokens
                & dr_tokens
            )
            / len(union)
        )

        score += (
            5.0
            * jaccard
        )

    return score


def _compatible_pairs(
    wowhead: list[EffectObservation],
    drustvar: list[EffectObservation],
) -> list[dict]:

    pairs = []

    for dr_index, dr in enumerate(
        drustvar
    ):

        for wh_index, wh in enumerate(
            wowhead
        ):

            if not multipliers_close(
                wh.pvp_multiplier,
                dr.pvp_multiplier,
            ):
                continue

            pairs.append(
                {
                    "wh_index": wh_index,
                    "dr_index": dr_index,
                    "score": semantic_score(
                        wh,
                        dr,
                    ),
                    "delta": abs(
                        wh.pvp_multiplier
                        - dr.pvp_multiplier
                    ),
                }
            )

    return pairs


def resolve_effect_matches(
    wowhead: list[EffectObservation],
    drustvar: list[EffectObservation],
) -> dict:
    """
    Conservative one-to-one matcher.

    Strategy:

      1. Multiplier compatibility.
      2. Trivial unique pair.
      3. Mutual-best semantic match.
      4. Never guess unresolved ties.

    Returns matched pairs + unmatched source effects.
    """

    pairs = _compatible_pairs(
        wowhead,
        drustvar,
    )

    unmatched_wh = set(
        range(len(wowhead))
    )

    unmatched_dr = set(
        range(len(drustvar))
    )

    matches: list[EffectMatch] = []

    # --------------------------------------------------------
    # Stage A:
    # repeatedly accept rows where multiplier compatibility
    # already produces a one-to-one match.
    # --------------------------------------------------------

    changed = True

    while changed:

        changed = False

        for dr_index in list(
            unmatched_dr
        ):

            candidates = [
                p
                for p in pairs
                if (
                    p["dr_index"]
                    == dr_index
                    and p["wh_index"]
                    in unmatched_wh
                )
            ]

            if len(candidates) != 1:
                continue

            pair = candidates[0]

            wh_index = pair[
                "wh_index"
            ]

            reverse_candidates = [
                p
                for p in pairs
                if (
                    p["wh_index"]
                    == wh_index
                    and p["dr_index"]
                    in unmatched_dr
                )
            ]

            if len(
                reverse_candidates
            ) != 1:
                continue

            matches.append(
                EffectMatch(
                    wowhead=wowhead[
                        wh_index
                    ],
                    drustvar=drustvar[
                        dr_index
                    ],
                    semantic_score=pair[
                        "score"
                    ],
                    multiplier_delta=pair[
                        "delta"
                    ],
                    reason=(
                        "unique_multiplier"
                    ),
                )
            )

            unmatched_wh.remove(
                wh_index
            )

            unmatched_dr.remove(
                dr_index
            )

            changed = True


    # --------------------------------------------------------
    # Stage B:
    # repeated multiplier groups.
    #
    # Accept a pair only if it is the UNIQUE semantic best
    # match from BOTH directions.
    # --------------------------------------------------------

    while True:

        remaining_pairs = [
            p
            for p in pairs
            if (
                p["wh_index"]
                in unmatched_wh
                and p["dr_index"]
                in unmatched_dr
            )
        ]

        accepted = None

        for pair in sorted(
            remaining_pairs,
            key=lambda p: (
                -p["score"],
                p["delta"],
            ),
        ):

            wh_index = pair[
                "wh_index"
            ]

            dr_index = pair[
                "dr_index"
            ]

            dr_options = [
                p
                for p in remaining_pairs
                if p["dr_index"]
                == dr_index
            ]

            wh_options = [
                p
                for p in remaining_pairs
                if p["wh_index"]
                == wh_index
            ]

            best_for_dr = max(
                p["score"]
                for p in dr_options
            )

            best_for_wh = max(
                p["score"]
                for p in wh_options
            )

            if (
                pair["score"]
                != best_for_dr
                or pair["score"]
                != best_for_wh
            ):
                continue

            # Require a meaningful semantic signal if multiplier
            # alone was not enough to make the match unique.
            if pair["score"] <= 0:
                continue

            dr_best_count = sum(
                abs(
                    p["score"]
                    - best_for_dr
                ) < 1e-9
                for p in dr_options
            )

            wh_best_count = sum(
                abs(
                    p["score"]
                    - best_for_wh
                ) < 1e-9
                for p in wh_options
            )

            if (
                dr_best_count != 1
                or wh_best_count != 1
            ):
                continue

            accepted = pair
            break

        if accepted is None:
            break

        wh_index = accepted[
            "wh_index"
        ]

        dr_index = accepted[
            "dr_index"
        ]

        matches.append(
            EffectMatch(
                wowhead=wowhead[
                    wh_index
                ],
                drustvar=drustvar[
                    dr_index
                ],
                semantic_score=accepted[
                    "score"
                ],
                multiplier_delta=accepted[
                    "delta"
                ],
                reason="semantic",
            )
        )

        unmatched_wh.remove(
            wh_index
        )

        unmatched_dr.remove(
            dr_index
        )


    # --------------------------------------------------------
    # Stage C:
    # residual one-to-one propagation.
    #
    # Semantic matching can resolve one member of a repeated-
    # multiplier group and thereby make another pair uniquely
    # identifiable by elimination.
    #
    # Example: Preventive Measures
    #
    #   Wowhead #4  x0.375
    #   Wowhead #5  x0.375  (Periodic)
    #
    #   Drustvar A  x0.37
    #   Drustvar B  x0.37   (Periodic)
    #
    # Stage B identifies #5 <-> B semantically.
    # After that only #4 <-> A remains possible.
    #
    # We accept such a residual pair only when the remaining
    # compatibility graph is one-to-one in BOTH directions.
    # --------------------------------------------------------

    changed = True

    while changed:

        changed = False

        remaining_pairs = [
            p
            for p in pairs
            if (
                p["wh_index"] in unmatched_wh
                and p["dr_index"] in unmatched_dr
            )
        ]

        for dr_index in list(unmatched_dr):

            dr_options = [
                p
                for p in remaining_pairs
                if p["dr_index"] == dr_index
            ]

            if len(dr_options) != 1:
                continue

            pair = dr_options[0]

            wh_index = pair["wh_index"]

            wh_options = [
                p
                for p in remaining_pairs
                if p["wh_index"] == wh_index
            ]

            if len(wh_options) != 1:
                continue

            matches.append(
                EffectMatch(
                    wowhead=wowhead[wh_index],
                    drustvar=drustvar[dr_index],
                    semantic_score=pair["score"],
                    multiplier_delta=pair["delta"],
                    reason="residual_unique",
                )
            )

            unmatched_wh.remove(
                wh_index
            )

            unmatched_dr.remove(
                dr_index
            )

            changed = True

            # Rebuild compatibility graph after every accepted
            # pair, since another pair may now become unique.
            break


    # --------------------------------------------------------
    # Diagnostics for unresolved source effects.
    # --------------------------------------------------------

    return {
        "matches": matches,

        "unmatched_wowhead": [
            wowhead[i]
            for i in sorted(
                unmatched_wh
            )
        ],

        "unmatched_drustvar": [
            drustvar[i]
            for i in sorted(
                unmatched_dr
            )
        ],
    }


def reconcile(
    wowhead: list[EffectObservation],
    drustvar: list[EffectObservation],
) -> list[ReconciledEffect]:

    resolution = resolve_effect_matches(
        wowhead,
        drustvar,
    )

    match_by_wh_index = {
        match.wowhead.effect_index:
            match
        for match
        in resolution["matches"]
    }

    unmatched_dr = (
        resolution[
            "unmatched_drustvar"
        ]
    )

    results = []

    for wh in wowhead:

        match = match_by_wh_index.get(
            wh.effect_index
        )

        conflicts = []

        sources = [
            "wowhead"
        ]

        multiplier = (
            wh.pvp_multiplier
        )

        confidence = "medium"

        if match is not None:

            sources.append(
                "drustvar"
            )

            confidence = "high"

            # Preserve the more precise current Wowhead value.
            # Drustvar is used as independent corroboration,
            # with its rounded value recorded in provenance.
            multiplier = (
                wh.pvp_multiplier
            )

        else:
            # If Drustvar contains a modifier with a compatible
            # multiplier but we could not safely identify the
            # corresponding effect, expose the ambiguity instead
            # of silently attaching it.
            compatible_unmatched = [
                dr
                for dr in unmatched_dr
                if multipliers_close(
                    wh.pvp_multiplier,
                    dr.pvp_multiplier,
                )
            ]

            if compatible_unmatched:

                conflicts.append(
                    "AMBIGUOUS_DRUSTVAR_EFFECT_MATCH"
                )

                confidence = "ambiguous"

        pvp_value = None

        if (
            wh.base_value is not None
            and multiplier is not None
        ):
            pvp_value = (
                wh.base_value
                * multiplier
            )

        results.append(
            ReconciledEffect(
                spell_id=wh.spell_id,
                spell_name=wh.spell_name,
                effect_index=wh.effect_index,
                base_value=wh.base_value,
                pvp_multiplier=multiplier,
                pvp_value=pvp_value,
                effect_text=wh.effect_text,
                sources=sources,
                confidence=confidence,
                conflicts=conflicts,
            )
        )

    return results
