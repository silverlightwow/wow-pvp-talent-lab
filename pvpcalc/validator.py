from __future__ import annotations

import re

from .models import (
    EffectObservation,
    WikiObservation,
)


_BRACKET_TARGET_RE = re.compile(
    r"\[\s*([^\]]+?)\s*\]"
)


def _normalize(text: str) -> str:
    return " ".join(
        str(text or "")
        .replace("\xa0", " ")
        .casefold()
        .split()
    )


def extract_affected_spells(
    wowhead_effect: EffectObservation,
) -> list[str]:

    raw = wowhead_effect.raw or ""
    marker = "Affected Spells:"

    if marker not in raw:
        return []

    tail = raw.split(marker, 1)[1]

    names = []

    for line in tail.splitlines():

        line = line.strip()

        if not line:
            continue

        lower = line.casefold()

        if lower == "see more":
            continue

        if lower.startswith(
            (
                "pvp multiplier:",
                "value:",
                "radius:",
                "interval:",
                "trait #",
            )
        ):
            break

        if line not in names:
            names.append(line)

    return names


def _generic_pvp_effectiveness(
    text: str,
) -> bool:

    text = _normalize(text)

    return any(
        phrase in text
        for phrase in (
            "effective in pvp",
            "effectiveness in pvp",
            "in pvp combat",
            "during pvp combat",
        )
    )


def _all_affected_spells(
    effects: list[EffectObservation],
) -> set[str]:

    result = set()

    for effect in effects:
        result.update(
            extract_affected_spells(effect)
        )

    return result


def classify_wiki_event_for_effect(
    event: dict,
    wowhead_effect: EffectObservation,
    *,
    all_wowhead_effects: list[EffectObservation] | None = None,
) -> dict | None:

    if not event.get("is_pvp"):
        return None

    text = str(
        event.get("text", "")
    )

    normalized = _normalize(text)

    siblings = (
        all_wowhead_effects
        if all_wowhead_effects is not None
        else [wowhead_effect]
    )

    own_affected = set(
        extract_affected_spells(
            wowhead_effect
        )
    )

    talent_affected = (
        _all_affected_spells(
            siblings
        )
    )

    # --------------------------------------------------------
    # Explicit Wiki link targets.
    #
    # Example:
    #   [ Power Word: Shield ]
    #       ->
    #   "power word: shield"
    # --------------------------------------------------------

    bracket_targets = {
        _normalize(match)
        for match
        in _BRACKET_TARGET_RE.findall(text)
        if _normalize(match)
    }

    # Normalize known affected spell names once.
    normalized_talent_affected = {
        _normalize(spell): spell
        for spell in talent_affected
    }

    normalized_own_affected = {
        _normalize(spell): spell
        for spell in own_affected
    }

    # --------------------------------------------------------
    # Detect known spell targets in TWO ways:
    #
    # 1. explicit [ Wiki Link ]
    # 2. ordinary text mention
    #
    # Exact bracket-target matching has priority.
    # --------------------------------------------------------

    mentioned_normalized = set()

    for normalized_spell in normalized_talent_affected:

        if normalized_spell in bracket_targets:
            mentioned_normalized.add(
                normalized_spell
            )
            continue

        if normalized_spell in normalized:
            mentioned_normalized.add(
                normalized_spell
            )

    own_matches_normalized = (
        set(normalized_own_affected)
        & mentioned_normalized
    )

    # Explicitly references a spell belonging to THIS effect.
    if own_matches_normalized:

        return {
            **event,
            "scope": "affected_spell",
            "matched_affected_spells": [
                normalized_own_affected[name]
                for name in sorted(
                    own_matches_normalized
                )
            ],
        }

    # --------------------------------------------------------
    # The event references a known spell belonging to another
    # effect. It MUST NOT become talent-wide evidence here.
    # --------------------------------------------------------

    if mentioned_normalized:
        return None

    # --------------------------------------------------------
    # There is an explicit Wiki target, but it is not among the
    # affected spells we know for this talent.
    #
    # Remain conservative rather than broadcasting the event
    # across all effects.
    # --------------------------------------------------------

    if bracket_targets:
        return None

    # --------------------------------------------------------
    # Only an event with no detected spell-specific target can
    # become talent-wide historical context.
    # --------------------------------------------------------

    if _generic_pvp_effectiveness(
        text
    ):

        return {
            **event,
            "scope": "talent_wide",
            "matched_affected_spells": [],
        }

    return None


def history_evidence_for_effect(
    wowhead_effect: EffectObservation,
    wiki: WikiObservation | None,
    *,
    all_wowhead_effects: list[EffectObservation] | None = None,
) -> list[dict]:

    if wiki is None:
        return []

    evidence = []

    for event in wiki.changes:

        classified = (
            classify_wiki_event_for_effect(
                event,
                wowhead_effect,
                all_wowhead_effects=(
                    all_wowhead_effects
                ),
            )
        )

        if classified is not None:
            evidence.append(
                classified
            )

    return evidence


def summarize_history_evidence(
    wowhead_effect: EffectObservation,
    wiki: WikiObservation | None,
    *,
    all_wowhead_effects: list[EffectObservation] | None = None,
) -> dict:

    evidence = history_evidence_for_effect(
        wowhead_effect,
        wiki,
        all_wowhead_effects=(
            all_wowhead_effects
        ),
    )

    effect_related = [
        event
        for event in evidence
        if event["scope"]
        == "affected_spell"
    ]

    talent_wide = [
        event
        for event in evidence
        if event["scope"]
        == "talent_wide"
    ]

    if effect_related:

        history_status = (
            "EFFECT_RELATED_HISTORY"
        )

    elif talent_wide:

        history_status = (
            "TALENT_WIDE_HISTORY"
        )

    else:

        history_status = (
            "NO_RELEVANT_PVP_HISTORY"
        )

    return {
        "affected_spells":
            extract_affected_spells(
                wowhead_effect
            ),

        "history_status":
            history_status,

        "history_evidence_count":
            len(evidence),

        "effect_related_history_count":
            len(effect_related),

        "talent_wide_history_count":
            len(talent_wide),

        "history_evidence":
            evidence,

        "wiki_page":
            (
                wiki.page_url
                if wiki is not None
                else None
            ),
    }
