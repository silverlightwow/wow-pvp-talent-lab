from __future__ import annotations

import asyncio
import json
import re
from dataclasses import dataclass, field
from typing import Any

from .http import CachedClient
from .models import EffectObservation
from .reconcile import (
    multipliers_close,
    reconcile,
    resolve_effect_matches,
    semantic_score,
)

from .sources import (
    drustvar,
    raidbots,
    simc,
    wiki,
    wowhead,
)

from . import validator
from . import pvp_aura
from . import ranks


@dataclass
class SpecAuditResult:
    class_name: str
    spec_name: str

    metadata: dict
    drustvar_builds: list[str]

    talents: list[dict]
    spell_ids: list[int]

    wowhead_by_spell: dict[int, list]
    drustvar_by_spell: dict[int, list]

    wowhead_candidate_ids: set[int]
    drustvar_candidate_ids: set[int]
    candidate_ids: set[int]

    effect_rows: list[dict]

    wiki_by_spell: dict[int, Any] = field(
        default_factory=dict
    )

    fetch_errors: list[dict] = field(
        default_factory=list
    )

    unresolved_rows: list[dict] = field(
        default_factory=list
    )

    # --------------------------------------------------------
    # Integrated PvP layers
    # --------------------------------------------------------

    simc_build: str | None = None
    simc_tooltip_fallbacks: dict[int, dict] = field(default_factory=dict)
    rank_sources: dict[int, dict] = field(default_factory=dict)

    dependencies: list[Any] = field(
        default_factory=list
    )

    dependency_effect_rows: list[dict] = field(
        default_factory=list
    )

    dependency_wowhead_by_spell: dict[int, list] = field(
        default_factory=dict
    )

    dependency_drustvar_by_spell: dict[int, list] = field(
        default_factory=dict
    )

    pvp_aura_rules: list[Any] = field(
        default_factory=list
    )

    aura_candidate_ids: set[int] = field(
        default_factory=set
    )

    final_candidate_ids: set[int] = field(
        default_factory=set
    )

    @property
    def tree_build(self) -> str | None:
        return self.metadata.get(
            "wowBuild"
        )

    @property
    def total_entries(self) -> int:
        return len(self.talents)

    @property
    def unique_spells(self) -> int:
        return len(self.spell_ids)

    @property
    def matched_drustvar_effects(self) -> int:
        return sum(
            row["drustvar_matched"]
            for row in self.effect_rows
        )

    @property
    def modified_effect_rows(self) -> list[dict]:
        return [
            row
            for row in self.effect_rows
            if row["is_pvp_modified"]
        ]

    @property
    def all_effect_rows(self) -> list[dict]:
        return (
            list(self.effect_rows)
            + list(
                self.dependency_effect_rows
            )
        )

    @property
    def final_modified_effect_rows(
        self,
    ) -> list[dict]:
        """
        Effects changed after the COMPLETE PvP stack:

            spell-specific PvP
            × matching specialization PvP Aura
        """

        return [
            row
            for row in self.all_effect_rows
            if row.get(
                "is_final_pvp_modified",
                False,
            )
        ]

    @property
    def render_effect_rows(
        self,
    ) -> list[dict]:
        """
        Conservative MAIN talent-tooltip universe.

        Direct effects:
            allowed.

        Dependency effects:
            only direct formula/value references are allowed.

        Embedded spelldesc outputs remain available in the
        audit/output layer but are not automatically substituted
        into the parent talent tooltip.
        """

        def has_player_facing_change(
            row: dict,
        ) -> bool:
            """
            A coefficient can be PvP-modified while its actual
            numeric value remains identical.

            Example:
                base 0 × PvP 0.5 = 0

            Keep such rows in mechanics/Compendium, but do not
            send them to the tooltip renderer.

            base_value=None remains eligible because some real
            player-facing values live in effect_text instead,
            e.g. Heal (SP mod: 5.75).
            """

            if not row.get(
                "is_final_pvp_modified",
                False,
            ):
                return False


            base = row.get(
                "base_value"
            )

            final = row.get(
                "final_pvp_value"
            )


            if (
                base is not None
                and final is not None
                and abs(
                    float(base)
                    - float(final)
                ) <= 1e-12
            ):
                return False


            return True


        def direct_row_is_renderable(
            row: dict,
        ) -> bool:
            if not has_player_facing_change(
                row
            ):
                return False

            effect_text = str(
                row.get(
                    "effect_text",
                    "",
                )
                or ""
            ).casefold()

            reference_contexts = list(
                row.get(
                    "simc_reference_contexts",
                    [],
                )
                or []
            )

            sources = set(
                row.get(
                    "sources",
                    [],
                )
                or []
            )

            # Spell modifier records can change another effect's hidden
            # metadata without exposing their own base value in this
            # talent tooltip. Exact-build SimC gives us the distinction:
            # if such a modifier has no player-text reference, preserve
            # it in mechanics/Compendium but do not let a coincidental
            # equal number rewrite the visible tooltip.
            internal_modifier = (
                (
                    "modifier" in effect_text
                    or "modifies " in effect_text
                )
                and not reference_contexts
                and "simc" in sources
            )

            return not internal_modifier

        result = [
            row
            for row in self.effect_rows
            if direct_row_is_renderable(
                row
            )
        ]

        result.extend(
            row
            for row
            in self.dependency_effect_rows
            if (
                has_player_facing_change(
                    row
                )
                and row.get(
                    "dependency_kind"
                )
                == "REFERENCED"
                and row.get(
                    "dependency_effect_referenced",
                    False,
                )
            )
        )

        return result


def _is_modified(
    multiplier: float | None,
) -> bool:

    return (
        multiplier is not None
        and abs(multiplier - 1.0) > 1e-9
    )


def _group_drustvar(
    observations: list,
    valid_spell_ids: set[int],
) -> dict[int, list]:

    result = {}

    for observation in observations:

        spell_id = observation.spell_id

        if spell_id not in valid_spell_ids:
            continue

        result.setdefault(
            spell_id,
            [],
        ).append(observation)

    return result


async def _fetch_wowhead_all(
    client: CachedClient,
    spell_ids: list[int],
) -> tuple[
    dict[int, list],
    list[dict],
]:

    async def fetch_one(
        spell_id: int,
    ):

        try:

            observations = (
                await wowhead.fetch_spell(
                    client,
                    spell_id,
                )
            )

            return (
                spell_id,
                observations,
                None,
            )

        except Exception as exc:

            return (
                spell_id,
                [],
                (
                    f"{type(exc).__name__}: "
                    f"{exc}"
                ),
            )

    results = await asyncio.gather(
        *[
            fetch_one(spell_id)
            for spell_id in spell_ids
        ]
    )

    by_spell = {}
    errors = []

    for (
        spell_id,
        observations,
        error,
    ) in results:

        by_spell[
            spell_id
        ] = observations

        if error is not None:

            errors.append(
                {
                    "source": "wowhead",
                    "spell_id": spell_id,
                    "error": error,
                }
            )

    return by_spell, errors


def _build_effect_rows(
    *,
    candidate_ids: set[int],
    talent_by_spell: dict[int, dict],
    wowhead_by_spell: dict[int, list],
    drustvar_by_spell: dict[int, list],
) -> tuple[
    list[dict],
    list[dict],
]:

    rows = []
    unresolved = []

    for spell_id in sorted(
        candidate_ids
    ):

        wh_effects = (
            wowhead_by_spell.get(
                spell_id,
                [],
            )
        )

        dr_effects = (
            drustvar_by_spell.get(
                spell_id,
                [],
            )
        )

        talent = talent_by_spell.get(
            spell_id,
            {},
        )

        # --------------------------------------------
        # A source may know about the spell while the
        # other parser has no effect representation.
        # Preserve this instead of silently dropping it.
        # --------------------------------------------

        if not wh_effects:

            for dr in dr_effects:

                unresolved.append(
                    {
                        "spell_id": spell_id,
                        "talent_name": (
                            talent.get(
                                "talent_name"
                            )
                        ),
                        "side": "drustvar",
                        "reason": (
                            "NO_WOWHEAD_EFFECTS"
                        ),
                        "multiplier": (
                            dr.pvp_multiplier
                        ),
                        "effect_text": (
                            dr.effect_text
                        ),
                    }
                )

            continue

        resolution = (
            resolve_effect_matches(
                wh_effects,
                dr_effects,
            )
        )

        reconciled = reconcile(
            wh_effects,
            dr_effects,
        )

        match_by_wh_index = {
            match.wowhead.effect_index:
                match
            for match
            in resolution["matches"]
        }

        reconciled_by_index = {
            effect.effect_index:
                effect
            for effect in reconciled
        }

        # --------------------------------------------
        # One row for every Wowhead effect.
        #
        # This means ×1 effects remain available for
        # tooltip reconstruction, but consumers can
        # filter is_pvp_modified.
        # --------------------------------------------

        for wh in wh_effects:

            reconciled_effect = (
                reconciled_by_index[
                    wh.effect_index
                ]
            )

            match = (
                match_by_wh_index.get(
                    wh.effect_index
                )
            )

            row = {
                # Talent graph identity
                "class_name": (
                    talent.get(
                        "class_name"
                    )
                ),
                "spec_name": (
                    talent.get(
                        "spec_name"
                    )
                ),
                "tree_type": (
                    talent.get(
                        "tree_type"
                    )
                ),
                "hero_tree": (
                    talent.get(
                        "hero_tree"
                    )
                ),
                "node_id": (
                    talent.get(
                        "node_id"
                    )
                ),
                "entry_id": (
                    talent.get(
                        "entry_id"
                    )
                ),

                # Spell/effect identity
                "talent_name": (
                    talent.get(
                        "talent_name"
                    )
                ),
                "spell_id": spell_id,
                "effect_index": (
                    wh.effect_index
                ),
                "effect_text": (
                    wh.effect_text
                ),

                # Preserve exact source text for semantic rendering.
                # Some Wowhead effect types keep SP coefficients in
                # metadata (e.g. Periodic Damage) rather than in the
                # short effect_text field.
                "wowhead_raw": (
                    wh.raw
                ),

                # Deterministic occurrence mapping for effects which
                # intentionally repeat the same player-facing number.
                # Example: Voice of Harmony has three Dummy effects
                # with Value 4; effect #3 modifies the third visible
                # "4 sec" occurrence only.
                "same_value_text_ordinal": (
                    [
                        other
                        for other in wh_effects
                        if (
                            other.base_value
                            == wh.base_value
                            and other.effect_text
                            == wh.effect_text
                        )
                    ].index(wh)
                    + 1
                    if wh.base_value is not None
                    else None
                ),

                "same_value_text_count": (
                    sum(
                        1
                        for other in wh_effects
                        if (
                            other.base_value
                            == wh.base_value
                            and other.effect_text
                            == wh.effect_text
                        )
                    )
                    if wh.base_value is not None
                    else None
                ),

                # Numeric state
                "base_value": (
                    wh.base_value
                ),
                "pvp_multiplier": (
                    reconciled_effect
                    .pvp_multiplier
                ),
                "pvp_value": (
                    reconciled_effect
                    .pvp_value
                ),

                "is_pvp_modified":
                    _is_modified(
                        reconciled_effect
                        .pvp_multiplier
                    ),

                # Provenance
                "wowhead_present": True,
                "drustvar_matched": (
                    match is not None
                ),

                "sources": (
                    reconciled_effect
                    .sources
                ),

                "confidence": (
                    reconciled_effect
                    .confidence
                ),

                "conflicts": (
                    reconciled_effect
                    .conflicts
                ),

                # Resolver provenance
                "match_reason": (
                    match.reason
                    if match
                    else None
                ),

                "semantic_score": (
                    match.semantic_score
                    if match
                    else None
                ),

                "wowhead_multiplier": (
                    wh.pvp_multiplier
                ),

                "drustvar_multiplier": (
                    match.drustvar
                    .pvp_multiplier
                    if match
                    else None
                ),

                "multiplier_delta": (
                    match.multiplier_delta
                    if match
                    else None
                ),

                "drustvar_effect_text": (
                    match.drustvar
                    .effect_text
                    if match
                    else None
                ),
            }

            rows.append(row)

        # --------------------------------------------
        # Anything left on Drustvar is unresolved only
        # when there is no compatible semantic peer on
        # Wowhead.
        #
        # Drustvar sometimes collapses several underlying
        # SpellEffects into one rounded row while Wowhead
        # exposes each concrete effect separately. In that
        # case a strict one-to-one matcher intentionally
        # leaves rows unmatched, but the sources still
        # corroborate the modifier family. Do not turn that
        # representation difference into a publishing error.
        # --------------------------------------------

        for dr in resolution[
            "unmatched_drustvar"
        ]:

            corroborated_group = any(
                multipliers_close(
                    wh.pvp_multiplier,
                    dr.pvp_multiplier,
                )
                and semantic_score(
                    wh,
                    dr,
                ) > 0
                for wh in wh_effects
            )

            if corroborated_group:
                continue

            unresolved.append(
                {
                    "spell_id": spell_id,
                    "talent_name": (
                        talent.get(
                            "talent_name"
                        )
                    ),
                    "side": "drustvar",
                    "reason": (
                        "UNMATCHED_DRUSTVAR_EFFECT"
                    ),
                    "multiplier": (
                        dr.pvp_multiplier
                    ),
                    "effect_text": (
                        dr.effect_text
                    ),
                    "source_build": dr.patch,
                    "game_effect_id": _game_effect_id(dr),
                }
            )

        # --------------------------------------------
        # Only unmatched MODIFIED Wowhead effects are
        # a PvP-resolution problem.
        #
        # Ordinary ×1 effects normally have no
        # corresponding Drustvar row.
        # --------------------------------------------

        matched_wh_indices = {
            match.wowhead.effect_index
            for match
            in resolution["matches"]
        }

        for wh in resolution[
            "unmatched_wowhead"
        ]:

            if not _is_modified(
                wh.pvp_multiplier
            ):
                continue

            # One Drustvar row can corroborate a group of
            # multiple concrete Wowhead effects. The canonical
            # player-facing identity remains the Wowhead effect
            # index; Drustvar provides independent multiplier
            # support without requiring an artificial one-to-one
            # pairing.
            corroborated_group = any(
                multipliers_close(
                    wh.pvp_multiplier,
                    dr.pvp_multiplier,
                )
                and semantic_score(
                    wh,
                    dr,
                ) > 0
                for dr in dr_effects
            )

            if corroborated_group:
                continue

            # Wowhead-only current modifier is valid
            # information, but keep a source-gap diagnostic
            # when Drustvar has no compatible semantic row.
            unresolved.append(
                {
                    "spell_id": spell_id,
                    "talent_name": (
                        talent.get(
                            "talent_name"
                        )
                    ),
                    "side": "wowhead",
                    "reason": (
                        "WOWHEAD_ONLY_MODIFIER"
                    ),
                    "effect_index": (
                        wh.effect_index
                    ),
                    "multiplier": (
                        wh.pvp_multiplier
                    ),
                    "effect_text": (
                        wh.effect_text
                    ),
                }
            )

    return rows, unresolved


async def audit_spec(
    class_name: str,
    spec_name: str,
    *,
    wow_class_slug: str | None = None,
    concurrency: int = 6,
    include_wiki: bool = False,
    require_exact_simc_build: bool = True,
) -> SpecAuditResult:
    """
    End-to-end CURRENT talent PvP modifier audit.

    Operational flow:

      Raidbots current pinned talent snapshot
            ↓
      all current selectable spell IDs
            ↓
      Wowhead ALL spell IDs
      Drustvar ONE class request
            ↓
      union of independently detected candidates
            ↓
      semantic effect resolver

    Warcraft Wiki and spec-wide PvP Aura composition are
    intentionally separate later stages.
    """

    if wow_class_slug is None:
        wow_class_slug = (
            class_name
            .strip()
            .casefold()
            .replace(" ", "-")
        )

    client = CachedClient(
        concurrency=concurrency
    )

    try:

        metadata, talent_rows = (
            await raidbots.fetch_spec_tree(
                client,
                class_name=class_name,
                spec_name=spec_name,
            )
        )

        dr_all = (
            await drustvar.fetch_class(
                client,
                wow_class_slug,
            )
        )

        spell_talents = [
            row
            for row in talent_rows
            if row.get("spell_id")
            is not None
        ]

        # Current Raidbots Discipline happens to have
        # 1 selectable entry per spell, but do not rely
        # on that globally.
        spell_ids = sorted(
            {
                int(
                    row["spell_id"]
                )
                for row
                in spell_talents
            }
        )

        spell_id_set = set(
            spell_ids
        )

        wowhead_by_spell, (
            fetch_errors
        ) = await _fetch_wowhead_all(
            client,
            spell_ids,
        )

    finally:
        await client.aclose()

    drustvar_by_spell = (
        _group_drustvar(
            dr_all,
            spell_id_set,
        )
    )

    wowhead_candidate_ids = {
        spell_id
        for spell_id, effects
        in wowhead_by_spell.items()
        if any(
            _is_modified(
                effect.pvp_multiplier
            )
            for effect in effects
        )
    }

    drustvar_candidate_ids = set(
        drustvar_by_spell
    )

    candidate_ids = (
        wowhead_candidate_ids
        | drustvar_candidate_ids
    )

    # One canonical graph row for joining effect data.
    #
    # Multiple tree entries sharing a spell ID remain in
    # `talents`; we do not destroy the original graph data.
    talent_by_spell = {}

    for row in spell_talents:

        talent_by_spell.setdefault(
            int(row["spell_id"]),
            row,
        )

    effect_rows, unresolved_rows = (
        _build_effect_rows(
            candidate_ids=(
                candidate_ids
            ),
            talent_by_spell=(
                talent_by_spell
            ),
            wowhead_by_spell=(
                wowhead_by_spell
            ),
            drustvar_by_spell=(
                drustvar_by_spell
            ),
        )
    )

    # ========================================================
    # Optional Warcraft Wiki historical evidence
    # ========================================================

    wiki_by_spell = {}

    # Always expose the same schema to consumers.
    for row in effect_rows:

        row.update(
            {
                "history_status":
                    "NOT_REQUESTED",

                "history_evidence_count":
                    0,

                "effect_related_history_count":
                    0,

                "talent_wide_history_count":
                    0,

                "history_evidence":
                    [],

                "wiki_page":
                    None,
            }
        )

    if include_wiki:

        wiki_client = CachedClient(
            concurrency=concurrency
        )

        try:

            async def fetch_wiki_one(
                spell_id: int,
            ):

                talent = (
                    talent_by_spell.get(
                        spell_id,
                        {}
                    )
                )

                name = talent.get(
                    "talent_name",
                    f"Spell {spell_id}",
                )

                try:

                    observation = (
                        await wiki.fetch_page(
                            wiki_client,
                            spell_id=spell_id,
                            name=name,
                        )
                    )

                    return (
                        spell_id,
                        observation,
                        None,
                    )

                except Exception as exc:

                    return (
                        spell_id,
                        None,
                        (
                            f"{type(exc).__name__}: "
                            f"{exc}"
                        ),
                    )


            wiki_results = (
                await asyncio.gather(
                    *[
                        fetch_wiki_one(
                            spell_id
                        )
                        for spell_id
                        in sorted(
                            candidate_ids
                        )
                    ]
                )
            )

        finally:

            await wiki_client.aclose()


        for (
            spell_id,
            observation,
            error,
        ) in wiki_results:

            wiki_by_spell[
                spell_id
            ] = observation

            if error is not None:

                fetch_errors.append(
                    {
                        "source":
                            "wiki",

                        "spell_id":
                            spell_id,

                        "error":
                            error,
                    }
                )


        # ----------------------------------------------------
        # Attach historical evidence effect-by-effect.
        # ----------------------------------------------------

        for row in effect_rows:

            spell_id = row[
                "spell_id"
            ]

            effect_index = row[
                "effect_index"
            ]

            wh_effects = (
                wowhead_by_spell.get(
                    spell_id,
                    []
                )
            )

            wh_effect = next(
                (
                    effect
                    for effect in wh_effects
                    if (
                        effect.effect_index
                        == effect_index
                    )
                ),
                None,
            )

            if wh_effect is None:
                continue

            history = (
                validator
                .summarize_history_evidence(
                    wh_effect,
                    wiki_by_spell.get(
                        spell_id
                    ),
                    all_wowhead_effects=(
                        wh_effects
                    ),
                )
            )

            row.update(
                {
                    "history_status":
                        history[
                            "history_status"
                        ],

                    "history_evidence_count":
                        history[
                            "history_evidence_count"
                        ],

                    "effect_related_history_count":
                        history[
                            "effect_related_history_count"
                        ],

                    "talent_wide_history_count":
                        history[
                            "talent_wide_history_count"
                        ],

                    "history_evidence":
                        history[
                            "history_evidence"
                        ],

                    "wiki_page":
                        history[
                            "wiki_page"
                        ],
                }
            )


    drustvar_builds = sorted(
        {
            effect.patch
            for effect in dr_all
            if effect.patch
        }
    )

    return SpecAuditResult(
        class_name=class_name,
        spec_name=spec_name,

        metadata=metadata,
        drustvar_builds=(
            drustvar_builds
        ),

        talents=talent_rows,
        spell_ids=spell_ids,

        wowhead_by_spell=(
            wowhead_by_spell
        ),

        drustvar_by_spell=(
            drustvar_by_spell
        ),

        wowhead_candidate_ids=(
            wowhead_candidate_ids
        ),

        drustvar_candidate_ids=(
            drustvar_candidate_ids
        ),

        candidate_ids=(
            candidate_ids
        ),

        effect_rows=(
            effect_rows
        ),

        wiki_by_spell=(
            wiki_by_spell
        ),

        fetch_errors=(
            fetch_errors
        ),

        unresolved_rows=(
            unresolved_rows
        ),
    )


# === INTEGRATED_PVP_PIPELINE_V2 ===

# Preserve the already-tested direct audit implementation.
_audit_spec_direct = audit_spec


def _infer_amount_kind(
    effect_text: str | None,
) -> str | None:
    """
    Identify actual spell OUTPUT.

    Modifier parameters themselves must NOT receive the
    specialization PvP Aura.

    Examples:

        Heal (...)                   -> direct
        School Damage (...)          -> direct
        Periodic Damage (...)        -> periodic
        Absorb Damage (...)          -> absorb

        Modifies Spell Power         -> None
        Modifies Damage/Healing      -> None
    """

    text = str(
        effect_text or ""
    ).casefold()


    # Parameter/modifier effects are not output events.
    if (
        "modifies " in text
        or "modifier" in text
    ):
        return None


    if (
        "absorb damage" in text
        or "absorb amount" in text
    ):
        return "absorb"


    if (
        "periodic damage" in text
        or "periodic heal" in text
        or "periodic healing" in text
    ):
        return "periodic"


    if (
        text.startswith("heal")
        or "direct heal" in text
        or "school damage" in text
        or "direct damage" in text
    ):
        return "direct"


    return None


# === SIMC_BASE_VALUE_FALLBACK_V1 ===


def _fill_missing_base_values_from_simc(
    rows: list[dict],
    simc_dump,
) -> None:
    """
    Conservative exact-build SimC numeric fallback.

    CRITICAL DISTINCTION:

    SimC Base Value is NOT automatically the player-facing
    numeric value.

    Example output spell:

        Power Word: Radiance
            Base Value:      0
            SP Coefficient:  5.75

        Player-facing value = 575% SP, NOT zero.

    Example modifier spell:

        Power Infusion Effect #2
            Base Value:      0
            SP Coefficient:  None
            PvP Coefficient: 0.5

        Here zero really is the relevant numeric base.

    Therefore:

      - SimC numeric metadata is always preserved.
      - Wowhead base_value is never overwritten.
      - SimC Base Value is promoted into canonical base_value
        ONLY when there is no SP coefficient.
    """

    for row in rows:

        spell_id = int(
            row.get(
                "source_spell_id",
                row["spell_id"],
            )
        )

        effect_index = row.get(
            "effect_index"
        )

        if effect_index is None:
            continue


        simc_effect = (
            simc.effect_for_spell(
                simc_dump,
                spell_id,
                int(effect_index),
            )
        )


        if simc_effect is None:
            continue


        # ----------------------------------------------------
        # Preserve exact-build SimC provenance regardless of
        # whether we use it as a canonical fallback.
        # ----------------------------------------------------

        row[
            "simc_base_value"
        ] = (
            simc_effect.base_value
        )

        row[
            "simc_sp_coefficient"
        ] = (
            simc_effect.sp_coefficient
        )

        row[
            "simc_ap_coefficient"
        ] = (
            simc_effect.ap_coefficient
        )

        row[
            "simc_pvp_coefficient"
        ] = (
            simc_effect.pvp_coefficient
        )

        own_reference_contexts = list(
            simc.effect_reference_contexts(
                simc_dump,
                spell_id,
                int(effect_index),
            )
        )

        dependent_reference_contexts = list(
            simc.dependent_effect_reference_contexts(
                simc_dump,
                spell_id,
                int(effect_index),
            )
        )

        existing_reference_contexts = list(
            row.get(
                "simc_reference_contexts",
                [],
            )
            or []
        )

        row[
            "simc_reference_contexts"
        ] = list(
            dict.fromkeys(
                [
                    *existing_reference_contexts,
                    *own_reference_contexts,
                    *dependent_reference_contexts,
                ]
            )
        )

        own_unit_hint = simc.effect_unit_hint(
            simc_dump,
            spell_id,
            int(effect_index),
        )

        if not row.get(
            "semantic_unit_hint"
        ):
            row[
                "semantic_unit_hint"
            ] = own_unit_hint


        row_multiplier = row.get(
            "pvp_multiplier"
        )

        simc_multiplier = (
            simc_effect.pvp_coefficient
        )

        # Wowhead can expose the concrete SpellEffect while omitting
        # its PvP Coefficient line. Exact-build SimC can safely fill
        # that missing numeric field without changing effect identity.
        if (
            row_multiplier is None
            and simc_multiplier
            is not None
        ):

            row_multiplier = float(
                simc_multiplier
            )

            row[
                "pvp_multiplier"
            ] = row_multiplier

            row[
                "is_pvp_modified"
            ] = _is_modified(
                row_multiplier
            )

            existing_base = row.get(
                "base_value"
            )

            if existing_base is not None:
                row[
                    "pvp_value"
                ] = (
                    float(existing_base)
                    * row_multiplier
                )

            sources = list(
                row.get(
                    "sources",
                    [],
                )
            )

            if "simc" not in sources:
                sources.append(
                    "simc"
                )

            row["sources"] = sources
            row[
                "pvp_multiplier_source"
            ] = (
                "simc_exact_build"
            )

            # Exact SpellEffect identity is shared with Wowhead;
            # SimC contributes the missing current PvP coefficient.
            if row.get(
                "confidence"
            ) in {
                None,
                "ambiguous",
            }:
                row["confidence"] = (
                    "medium"
                )


        # Exact-build SimC is an independent current-data source.
        # If it confirms the same PvP coefficient, preserve that
        # provenance even when Wowhead already supplied the numeric
        # base value.
        if (
            row_multiplier is not None
            and simc_multiplier is not None
            and multipliers_close(
                float(row_multiplier),
                float(simc_multiplier),
            )
        ):
            sources = list(
                row.get(
                    "sources",
                    [],
                )
            )

            if "simc" not in sources:
                sources.append(
                    "simc"
                )

            row["sources"] = sources
            row["simc_corroborated"] = True

            if (
                "wowhead" in sources
                and not row.get(
                    "conflicts"
                )
            ):
                row["confidence"] = "high"


        # Wowhead already has a canonical base.
        if row.get(
            "base_value"
        ) is not None:
            continue


        if (
            simc_effect.base_value
            is None
        ):
            continue


        # ----------------------------------------------------
        # Identity sanity check.
        # ----------------------------------------------------

        if (
            row_multiplier is not None
            and simc_multiplier is not None
            and abs(
                float(row_multiplier)
                - float(simc_multiplier)
            ) > 0.011
        ):
            continue


        # ----------------------------------------------------
        # VERY IMPORTANT:
        #
        # A spell with an SP coefficient is an output formula.
        #
        # Base Value = 0 does NOT mean its player-facing value
        # is zero.
        #
        # Leave base_value=None so the renderer continues to
        # use effect_text / SP mod semantics.
        # ----------------------------------------------------

        if (
            simc_effect.sp_coefficient
            is not None
            or simc_effect.ap_coefficient
            is not None
        ):

            row[
                "base_value_source"
            ] = (
                "effect_coefficient"
            )

            continue


        # ----------------------------------------------------
        # No SP coefficient:
        # SimC Base Value is now a safe numeric fallback.
        # ----------------------------------------------------

        base_value = float(
            simc_effect.base_value
        )


        row[
            "base_value"
        ] = base_value

        row[
            "base_value_source"
        ] = (
            "simc_exact_build"
        )


        if row_multiplier is not None:

            row[
                "pvp_value"
            ] = (
                base_value
                * float(
                    row_multiplier
                )
            )


def _simc_effect_text_for_renderer(
    simc_effect,
) -> str:
    """
    Preserve the SimC semantic effect type while adding coefficient
    metadata in the same compact vocabulary already understood by the
    renderer.
    """

    text = str(
        simc_effect.effect_text
        or ""
    ).strip()

    extras = []

    if (
        simc_effect.sp_coefficient
        is not None
        and "sp mod:" not in text.casefold()
    ):
        extras.append(
            "SP mod: "
            f"{simc_effect.sp_coefficient:g}"
        )

    if (
        simc_effect.ap_coefficient
        is not None
        and "ap mod:" not in text.casefold()
    ):
        extras.append(
            "AP mod: "
            f"{simc_effect.ap_coefficient:g}"
        )

    if extras:
        text = (
            text
            + " ("
            + ", ".join(extras)
            + ")"
        )

    return text


def _simc_row_from_effect(
    *,
    simc_dump,
    spell_id: int,
    simc_effect,
    talent: dict,
    sources: list[str],
    confidence: str,
) -> dict:

    coefficient_based = (
        simc_effect.sp_coefficient
        is not None
        or simc_effect.ap_coefficient
        is not None
    )

    base_value = (
        None
        if coefficient_based
        else simc_effect.base_value
    )

    multiplier = (
        float(
            simc_effect.pvp_coefficient
        )
        if simc_effect.pvp_coefficient
        is not None
        else 1.0
    )

    effect_text = (
        _simc_effect_text_for_renderer(
            simc_effect
        )
    )

    return {
        "class_name":
            talent.get(
                "class_name"
            ),

        "spec_name":
            talent.get(
                "spec_name"
            ),

        "tree_type":
            talent.get(
                "tree_type"
            ),

        "hero_tree":
            talent.get(
                "hero_tree"
            ),

        "node_id":
            talent.get(
                "node_id"
            ),

        "entry_id":
            talent.get(
                "entry_id"
            ),

        "talent_name":
            talent.get(
                "talent_name"
            ),

        "spell_id":
            int(spell_id),

        "effect_index":
            int(
                simc_effect.effect_index
            ),

        "effect_text":
            effect_text,

        "wowhead_raw":
            effect_text,

        "simc_raw":
            simc_dump.spells[
                int(spell_id)
            ].raw,

        "same_value_text_ordinal":
            None,

        "same_value_text_count":
            None,

        "base_value":
            base_value,

        "pvp_multiplier":
            multiplier,

        "pvp_value":
            (
                float(base_value)
                * multiplier
                if base_value
                is not None
                else None
            ),

        "is_pvp_modified":
            _is_modified(
                multiplier
            ),

        "wowhead_present":
            False,

        "drustvar_matched":
            (
                "drustvar"
                in sources
            ),

        "sources":
            list(
                sources
            ),

        "confidence":
            confidence,

        "conflicts":
            [],

        "match_reason":
            "simc_exact_build",

        "semantic_score":
            None,

        "wowhead_multiplier":
            None,

        "simc_multiplier":
            multiplier,

        "drustvar_multiplier":
            None,

        "multiplier_delta":
            None,

        "drustvar_effect_text":
            None,

        "simc_base_value":
            simc_effect.base_value,

        "simc_sp_coefficient":
            simc_effect.sp_coefficient,

        "simc_ap_coefficient":
            simc_effect.ap_coefficient,

        "simc_pvp_coefficient":
            simc_effect.pvp_coefficient,

        "simc_reference_contexts":
            list(
                simc.effect_reference_contexts(
                    simc_dump,
                    int(spell_id),
                    int(
                        simc_effect.effect_index
                    ),
                )
            ),

        "semantic_unit_hint":
            simc.effect_unit_hint(
                simc_dump,
                int(spell_id),
                int(
                    simc_effect.effect_index
                ),
            ),

        "base_value_source":
            (
                "simc_exact_build_coefficient"
                if coefficient_based
                else "simc_exact_build"
            ),

        "simc_corroborated":
            True,
    }


def _build_simc_modified_rows(
    *,
    spell_ids: set[int],
    talent_by_spell: dict[int, dict],
    simc_dump,
    existing_keys=(),
) -> list[dict]:
    """
    Materialize exact-build SimC SpellEffects carrying their own
    non-identity PvP coefficient when no equivalent row already exists.
    """

    existing = {
        (
            int(spell_id),
            int(effect_index),
        )
        for (
            spell_id,
            effect_index,
        )
        in existing_keys
        if (
            spell_id is not None
            and effect_index is not None
        )
    }

    rows = []

    for spell_id in sorted(
        {
            int(value)
            for value in spell_ids
        }
    ):

        spell = simc_dump.spells.get(
            spell_id
        )

        if spell is None:
            continue

        talent = talent_by_spell.get(
            spell_id,
            {},
        )

        for simc_effect in (
            simc.parse_spell_effects(
                spell
            ).values()
        ):

            coefficient = (
                simc_effect.pvp_coefficient
            )

            if (
                coefficient is None
                or not _is_modified(
                    float(
                        coefficient
                    )
                )
            ):
                continue

            key = (
                spell_id,
                int(
                    simc_effect.effect_index
                ),
            )

            if key in existing:
                continue

            row = _simc_row_from_effect(
                simc_dump=
                    simc_dump,
                spell_id=
                    spell_id,
                simc_effect=
                    simc_effect,
                talent=
                    talent,
                sources=[
                    "simc",
                ],
                confidence=
                    "medium",
            )

            row[
                "match_reason"
            ] = (
                "simc_exact_build_pvp"
            )

            rows.append(row)
            existing.add(key)

    return rows


def _build_simc_aura_rows(
    *,
    spell_ids: set[int],
    talent_by_spell: dict[int, dict],
    aura_rules: list,
    simc_dump,
    existing_keys=(),
) -> list[dict]:
    """
    Materialize output/effect rows for PvP-Aura-only mechanics even when
    Wowhead exposes no structured SpellEffect block.

    Exact-build SimC supplies concrete SpellEffect identity and output
    semantics; Drustvar supplies the specialization PvP Aura rule.
    """

    existing = {
        (
            int(spell_id),
            int(effect_index),
        )
        for (
            spell_id,
            effect_index,
        )
        in existing_keys
        if (
            spell_id is not None
            and effect_index is not None
        )
    }

    rows = []

    for spell_id in sorted(
        {
            int(value)
            for value in spell_ids
        }
    ):

        spell = simc_dump.spells.get(
            spell_id
        )

        if spell is None:
            continue

        labels = (
            simc.spell_label_ids(
                simc_dump,
                spell_id,
            )
        )

        talent = talent_by_spell.get(
            spell_id,
            {},
        )

        for simc_effect in (
            simc.parse_spell_effects(
                spell
            ).values()
        ):

            key = (
                spell_id,
                int(
                    simc_effect.effect_index
                ),
            )

            if key in existing:
                continue

            effect_text = (
                _simc_effect_text_for_renderer(
                    simc_effect
                )
            )

            amount_kind = (
                _infer_amount_kind(
                    effect_text
                )
            )

            applicable = (
                pvp_aura.rules_for_spell(
                    aura_rules,
                    spell_id,
                    amount_kind=
                        amount_kind,
                    effect_index=
                        simc_effect.effect_index,
                    spell_label_ids=
                        labels,
                )
            )

            if not applicable:
                continue

            row = _simc_row_from_effect(
                simc_dump=
                    simc_dump,
                spell_id=
                    spell_id,
                simc_effect=
                    simc_effect,
                talent=
                    talent,
                sources=[
                    "simc",
                    "drustvar",
                ],
                confidence=
                    "high",
            )

            row[
                "match_reason"
            ] = (
                "simc_pvp_aura"
            )

            rows.append(row)
            existing.add(key)

    return rows


def _simc_effect_observations(
    simc_dump,
    spell_id: int,
) -> list[EffectObservation]:

    spell = simc_dump.spells.get(
        int(spell_id)
    )

    if spell is None:
        return []

    result = []

    for simc_effect in (
        simc.parse_spell_effects(
            spell
        ).values()
    ):

        if (
            simc_effect.pvp_coefficient
            is None
        ):
            continue

        coefficient_based = (
            simc_effect.sp_coefficient
            is not None
            or simc_effect.ap_coefficient
            is not None
        )

        result.append(
            EffectObservation(
                source="simc",
                spell_id=int(spell_id),
                spell_name=spell.name,
                effect_index=int(
                    simc_effect.effect_index
                ),
                base_value=(
                    None
                    if coefficient_based
                    else simc_effect.base_value
                ),
                pvp_multiplier=float(
                    simc_effect.pvp_coefficient
                ),
                effect_text=
                    _simc_effect_text_for_renderer(
                        simc_effect
                    ),
                patch=simc_dump.build,
                url="",
                raw=spell.raw,
            )
        )

    return result


def _build_tuple(
    value: str | None,
) -> tuple[int, int, int, int] | None:

    text = str(
        value or ""
    )

    if not re.fullmatch(
        r"\d+\.\d+\.\d+\.\d+",
        text,
    ):
        return None

    return tuple(
        int(part)
        for part in text.split(".")
    )


def _build_generated_simc_fallback_rows(
    *,
    spell_ids: set[int],
    talent_by_spell: dict[int, dict],
    drustvar_by_spell: dict[int, list],
    generated_effects_by_spell: dict[int, dict],
    simc_dump,
) -> tuple[list[dict], set[int]]:
    """
    Resolve Wowhead gaps from SimC's exact generated SpellEffect table.

    This path exists for hidden implementation spells that are referenced by
    player-facing talents but are omitted/incomplete in the human-readable
    class SpellDataDump. Unlike the ordinary SimC+Drustvar fallback, the
    generated table is direct exact-build client data and may prove that an
    older Drustvar multiplier is stale.

    A conflicting Drustvar value is accepted as stale only when:
      * its build is explicitly older than the exact SimC build; and
      * effect semantics form a unique mutual-best match.

    The stale observation is retained as source provenance.
    """

    rows = []
    fully_resolved = set()
    current_build = _build_tuple(
        simc_dump.build
    )

    for spell_id in sorted(
        {
            int(value)
            for value in spell_ids
        }
    ):

        dr_effects = list(
            drustvar_by_spell.get(
                spell_id,
                [],
            )
        )

        exact_effects = list(
            (
                generated_effects_by_spell
                .get(
                    spell_id,
                    {},
                )
            ).values()
        )

        if (
            not dr_effects
            or not exact_effects
        ):
            continue

        exact_observations = []

        for effect in exact_effects:

            if effect.pvp_coefficient is None:
                continue

            # Generated DB2 rows are authoritative for exact-build
            # identity/coefficient, but their effect labels can be
            # intentionally generic (for example
            # "Apply Aura (6) | Aura Type (3)").  When the same concrete
            # game_effect_id is also present in the exact-build
            # human-readable SpellDataDump, borrow its richer semantic
            # label for matching only.  Numeric provenance remains the
            # generated row.
            semantic_effect = effect

            human_effect = (
                simc.effect_for_spell(
                    simc_dump,
                    spell_id,
                    int(
                        effect.effect_index
                    ),
                )
            )

            if (
                human_effect is not None
                and human_effect.game_effect_id
                == effect.game_effect_id
                and human_effect.pvp_coefficient
                is not None
                and multipliers_close(
                    float(
                        human_effect.pvp_coefficient
                    ),
                    float(
                        effect.pvp_coefficient
                    ),
                )
            ):
                semantic_effect = (
                    human_effect
                )

            coefficient_based = (
                effect.sp_coefficient
                is not None
                or effect.ap_coefficient
                is not None
            )

            exact_observations.append(
                EffectObservation(
                    source="simc_generated",
                    spell_id=spell_id,
                    spell_name=(
                        talent_by_spell
                        .get(
                            spell_id,
                            {},
                        )
                        .get(
                            "talent_name"
                        )
                        or f"Spell {spell_id}"
                    ),
                    effect_index=int(
                        effect.effect_index
                    ),
                    base_value=(
                        None
                        if coefficient_based
                        else effect.base_value
                    ),
                    pvp_multiplier=float(
                        effect.pvp_coefficient
                    ),
                    effect_text=(
                        _simc_effect_text_for_renderer(
                            semantic_effect
                        )
                    ),
                    patch=simc_dump.build,
                    url="",
                    raw="",
                )
            )

        if not exact_observations:
            continue

        # Match by semantics, deliberately ignoring multiplier: the entire
        # purpose of this fallback is to detect an older stale multiplier.
        candidates = []

        for exact_index, exact in enumerate(
            exact_observations
        ):
            for dr_index, dr in enumerate(
                dr_effects
            ):
                score = semantic_score(
                    exact,
                    dr,
                )

                if score > 0:
                    candidates.append(
                        {
                            "exact_index":
                                exact_index,
                            "dr_index":
                                dr_index,
                            "score":
                                score,
                        }
                    )

        accepted = []
        remaining_exact = set(
            range(
                len(
                    exact_observations
                )
            )
        )
        remaining_dr = set(
            range(
                len(
                    dr_effects
                )
            )
        )

        while True:
            available = [
                pair
                for pair in candidates
                if (
                    pair[
                        "exact_index"
                    ] in remaining_exact
                    and pair[
                        "dr_index"
                    ] in remaining_dr
                )
            ]

            chosen = None

            for pair in sorted(
                available,
                key=lambda item:
                    -item["score"],
            ):
                exact_options = [
                    item
                    for item in available
                    if item[
                        "exact_index"
                    ] == pair[
                        "exact_index"
                    ]
                ]
                dr_options = [
                    item
                    for item in available
                    if item[
                        "dr_index"
                    ] == pair[
                        "dr_index"
                    ]
                ]

                best_exact = max(
                    item["score"]
                    for item in exact_options
                )
                best_dr = max(
                    item["score"]
                    for item in dr_options
                )

                if (
                    pair["score"]
                    != best_exact
                    or pair["score"]
                    != best_dr
                ):
                    continue

                if (
                    sum(
                        item["score"]
                        == best_exact
                        for item
                        in exact_options
                    )
                    != 1
                    or sum(
                        item["score"]
                        == best_dr
                        for item
                        in dr_options
                    )
                    != 1
                ):
                    continue

                chosen = pair
                break

            if chosen is None:
                break

            accepted.append(
                chosen
            )
            remaining_exact.remove(
                chosen[
                    "exact_index"
                ]
            )
            remaining_dr.remove(
                chosen[
                    "dr_index"
                ]
            )

        talent = talent_by_spell.get(
            spell_id,
            {},
        )

        resolved_dr = set()

        for pair in accepted:

            observation = (
                exact_observations[
                    pair[
                        "exact_index"
                    ]
                ]
            )
            dr = dr_effects[
                pair[
                    "dr_index"
                ]
            ]

            exact_effect = (
                generated_effects_by_spell[
                    spell_id
                ][
                    observation.effect_index
                ]
            )

            exact_multiplier = float(
                observation.pvp_multiplier
            )
            dr_multiplier = (
                float(
                    dr.pvp_multiplier
                )
                if dr.pvp_multiplier
                is not None
                else None
            )

            agrees = (
                dr_multiplier is not None
                and multipliers_close(
                    exact_multiplier,
                    dr_multiplier,
                )
            )

            dr_build = _build_tuple(
                dr.patch
            )

            stale = (
                not agrees
                and dr_multiplier
                is not None
                and current_build
                is not None
                and dr_build
                is not None
                and dr_build
                < current_build
            )

            if not (
                agrees
                or stale
            ):
                continue

            resolved_dr.add(
                pair[
                    "dr_index"
                ]
            )

            coefficient_based = (
                exact_effect.sp_coefficient
                is not None
                or exact_effect.ap_coefficient
                is not None
            )

            base_value = (
                None
                if coefficient_based
                else exact_effect.base_value
            )

            effect_text = (
                _simc_effect_text_for_renderer(
                    exact_effect
                )
            )

            sources = [
                "simc_generated",
            ]

            if agrees:
                sources.append(
                    "drustvar"
                )

            source_notes = []

            if stale:
                source_notes.append(
                    {
                        "reason":
                            "SUPERSEDED_DRUSTVAR_EFFECT",
                        "source_build":
                            dr.patch,
                        "current_build":
                            simc_dump.build,
                        "game_effect_id":
                            exact_effect.game_effect_id,
                        "previous_multiplier":
                            dr_multiplier,
                        "current_multiplier":
                            exact_multiplier,
                        "current_effect_text":
                            effect_text,
                        "resolved_by": [
                            "simc_generated_exact_build",
                        ],
                    }
                )

            rows.append(
                {
                    "class_name":
                        talent.get(
                            "class_name"
                        ),
                    "spec_name":
                        talent.get(
                            "spec_name"
                        ),
                    "tree_type":
                        talent.get(
                            "tree_type"
                        ),
                    "hero_tree":
                        talent.get(
                            "hero_tree"
                        ),
                    "node_id":
                        talent.get(
                            "node_id"
                        ),
                    "entry_id":
                        talent.get(
                            "entry_id"
                        ),
                    "talent_name":
                        talent.get(
                            "talent_name"
                        ),
                    "spell_id":
                        spell_id,
                    "effect_index":
                        observation.effect_index,
                    "effect_text":
                        effect_text,
                    "wowhead_raw":
                        effect_text,
                    "simc_raw":
                        (
                            "SimC generated DBC "
                            f"{simc_dump.build}; "
                            "game_effect_id="
                            f"{exact_effect.game_effect_id}"
                        ),
                    "same_value_text_ordinal":
                        None,
                    "same_value_text_count":
                        None,
                    "base_value":
                        base_value,
                    "pvp_multiplier":
                        exact_multiplier,
                    "pvp_value":
                        (
                            float(base_value)
                            * exact_multiplier
                            if base_value
                            is not None
                            else None
                        ),
                    "is_pvp_modified":
                        _is_modified(
                            exact_multiplier
                        ),
                    "wowhead_present":
                        False,
                    "drustvar_matched":
                        True,
                    "sources":
                        sources,
                    "confidence":
                        "high",
                    "conflicts":
                        [],
                    "match_reason":
                        (
                            "simc_generated_exact_build"
                            if agrees
                            else
                            "simc_generated_exact_build_"
                            "stale_drustvar"
                        ),
                    "semantic_score":
                        pair["score"],
                    "wowhead_multiplier":
                        None,
                    "simc_multiplier":
                        exact_multiplier,
                    "drustvar_multiplier":
                        dr_multiplier,
                    "multiplier_delta":
                        (
                            abs(
                                exact_multiplier
                                - dr_multiplier
                            )
                            if dr_multiplier
                            is not None
                            else None
                        ),
                    "drustvar_effect_text":
                        dr.effect_text,
                    "simc_base_value":
                        exact_effect.base_value,
                    "simc_sp_coefficient":
                        exact_effect.sp_coefficient,
                    "simc_ap_coefficient":
                        exact_effect.ap_coefficient,
                    "simc_pvp_coefficient":
                        exact_effect.pvp_coefficient,
                    "simc_reference_contexts":
                        list(
                            dict.fromkeys(
                                [
                                    *list(
                                        simc.effect_reference_contexts(
                                            simc_dump,
                                            spell_id,
                                            observation.effect_index,
                                        )
                                    ),
                                    *list(
                                        exact_effect.reference_contexts
                                        or ()
                                    ),
                                ]
                            )
                        ),
                    "reference_context_strict":
                        bool(
                            exact_effect.reference_contexts
                        ),
                    "semantic_unit_hint":
                        (
                            exact_effect.unit_hint
                            or simc.effect_unit_hint(
                                simc_dump,
                                spell_id,
                                observation.effect_index,
                            )
                        ),
                    "base_value_source":
                        (
                            "simc_generated_exact_build_"
                            "coefficient"
                            if coefficient_based
                            else
                            "simc_generated_exact_build"
                        ),
                    "simc_corroborated":
                        True,
                    "source_notes":
                        source_notes,
                }
            )

        if (
            len(
                resolved_dr
            )
            == len(
                dr_effects
            )
        ):
            fully_resolved.add(
                spell_id
            )

    return (
        rows,
        fully_resolved,
    )


def _enrich_rows_from_generated_exact(
    rows: list[dict],
    *,
    generated_effects_by_spell: dict[int, dict],
    source_notes: list[dict],
) -> None:
    """Attach exact generated provenance and replace only proven stale values.

    A conflicting numeric multiplier is never overwritten merely because
    generated SimC is newer. Replacement requires an existing
    SUPERSEDED_DRUSTVAR_EFFECT note that identifies the same spell/effect
    and explicitly links the previous and current multipliers.
    """

    notes_by_key = {}

    for note in source_notes:

        if (
            note.get("reason")
            != "SUPERSEDED_DRUSTVAR_EFFECT"
            or note.get("effect_index")
            is None
        ):
            continue

        spell_id = note.get(
            "source_spell_id",
            note.get("spell_id"),
        )

        if spell_id is None:
            continue

        notes_by_key[
            (
                int(spell_id),
                int(note["effect_index"]),
            )
        ] = note

    for row in rows:

        spell_id = int(
            row.get(
                "source_spell_id",
                row.get("spell_id", 0),
            )
            or 0
        )

        effect_index = row.get(
            "effect_index"
        )

        if (
            not spell_id
            or effect_index is None
        ):
            continue

        exact = (
            generated_effects_by_spell
            .get(
                spell_id,
                {},
            )
            .get(
                int(effect_index)
            )
        )

        if exact is None:
            continue

        contexts = list(
            dict.fromkeys(
                [
                    *list(
                        row.get(
                            "simc_reference_contexts",
                            [],
                        )
                        or []
                    ),
                    *list(
                        exact.reference_contexts
                        or ()
                    ),
                ]
            )
        )

        if contexts:
            row[
                "simc_reference_contexts"
            ] = contexts

        if exact.reference_contexts:
            # These snippets come directly from exact generated player text.
            # The renderer may therefore use them to reject an equal-valued
            # number that belongs to another specialization branch.
            row[
                "reference_context_strict"
            ] = True

        if (
            exact.unit_hint
            and not row.get(
                "semantic_unit_hint"
            )
        ):
            row[
                "semantic_unit_hint"
            ] = exact.unit_hint

        row[
            "simc_generated_base_value"
        ] = exact.base_value
        row[
            "simc_generated_sp_coefficient"
        ] = exact.sp_coefficient
        row[
            "simc_generated_ap_coefficient"
        ] = exact.ap_coefficient
        row[
            "simc_generated_pvp_coefficient"
        ] = exact.pvp_coefficient
        row[
            "simc_generated_game_effect_id"
        ] = exact.game_effect_id

        exact_multiplier = (
            float(
                exact.pvp_coefficient
            )
            if exact.pvp_coefficient
            is not None
            else None
        )

        row_multiplier = row.get(
            "pvp_multiplier"
        )

        if exact_multiplier is None:
            continue

        agrees = (
            row_multiplier is not None
            and multipliers_close(
                float(row_multiplier),
                exact_multiplier,
            )
        )

        if agrees:

            sources = list(
                row.get(
                    "sources",
                    [],
                )
            )

            if (
                "simc_generated"
                not in sources
            ):
                sources.append(
                    "simc_generated"
                )

            row["sources"] = sources
            row[
                "simc_generated_corroborated"
            ] = True
            continue

        note = notes_by_key.get(
            (
                spell_id,
                int(effect_index),
            )
        )

        if note is None:
            continue

        previous = note.get(
            "previous_multiplier",
            note.get("multiplier"),
        )
        current = note.get(
            "current_multiplier"
        )

        if (
            row_multiplier is None
            or previous is None
            or current is None
            or not multipliers_close(
                float(row_multiplier),
                float(previous),
            )
            or not multipliers_close(
                exact_multiplier,
                float(current),
            )
        ):
            continue

        row[
            "pvp_multiplier"
        ] = exact_multiplier
        row[
            "is_pvp_modified"
        ] = _is_modified(
            exact_multiplier
        )

        base_value = row.get(
            "base_value"
        )

        row[
            "pvp_value"
        ] = (
            float(base_value)
            * exact_multiplier
            if base_value is not None
            else None
        )

        row[
            "pvp_multiplier_source"
        ] = (
            "simc_generated_exact_build"
        )

        sources = list(
            row.get(
                "sources",
                [],
            )
        )

        if (
            "simc_generated"
            not in sources
        ):
            sources.append(
                "simc_generated"
            )

        row["sources"] = sources
        row["confidence"] = "high"

        notes = list(
            row.get(
                "source_notes",
                [],
            )
        )

        if note not in notes:
            notes.append(note)

        row["source_notes"] = notes


def _build_simc_fallback_rows(
    *,
    spell_ids: set[int],
    talent_by_spell: dict[int, dict],
    drustvar_by_spell: dict[int, list],
    simc_dump,
) -> tuple[list[dict], set[int]]:
    """
    Build canonical effect rows when Wowhead exposes no structured
    SpellEffect block but exact-build SimC and current Drustvar agree.

    We only clear NO_WOWHEAD_EFFECTS for a spell when every current
    Drustvar modifier for that spell has a one-to-one corroborated SimC
    match. Partial matches are still emitted for audit visibility, but
    the source-gap diagnostic remains.
    """

    rows = []
    fully_resolved = set()

    for spell_id in sorted(
        {
            int(value)
            for value in spell_ids
        }
    ):

        dr_effects = list(
            drustvar_by_spell.get(
                spell_id,
                [],
            )
        )

        if not dr_effects:
            continue

        simc_effects = (
            _simc_effect_observations(
                simc_dump,
                spell_id,
            )
        )

        if not simc_effects:
            continue

        resolution = (
            resolve_effect_matches(
                simc_effects,
                dr_effects,
            )
        )

        matches = list(
            resolution["matches"]
        )

        if not matches:
            continue

        talent = talent_by_spell.get(
            spell_id,
            {},
        )

        same_groups = {}

        for observation in simc_effects:
            key = (
                observation.base_value,
                observation.effect_text,
            )

            same_groups.setdefault(
                key,
                [],
            ).append(
                observation
            )

        for match in matches:

            observation = match.wowhead
            simc_effect = (
                simc.effect_for_spell(
                    simc_dump,
                    spell_id,
                    observation.effect_index,
                )
            )

            if simc_effect is None:
                continue

            group = same_groups.get(
                (
                    observation.base_value,
                    observation.effect_text,
                ),
                [observation],
            )

            base_value = (
                observation.base_value
            )

            multiplier = float(
                observation.pvp_multiplier
            )

            rows.append(
                {
                    "class_name":
                        talent.get(
                            "class_name"
                        ),

                    "spec_name":
                        talent.get(
                            "spec_name"
                        ),

                    "tree_type":
                        talent.get(
                            "tree_type"
                        ),

                    "hero_tree":
                        talent.get(
                            "hero_tree"
                        ),

                    "node_id":
                        talent.get(
                            "node_id"
                        ),

                    "entry_id":
                        talent.get(
                            "entry_id"
                        ),

                    "talent_name":
                        talent.get(
                            "talent_name"
                        ),

                    "spell_id":
                        spell_id,

                    "effect_index":
                        observation.effect_index,

                    "effect_text":
                        observation.effect_text,

                    # Keep the renderer interface stable while making
                    # provenance explicit.
                    "wowhead_raw":
                        observation.effect_text,

                    "simc_raw":
                        (
                            simc_dump.spells[
                                spell_id
                            ].raw
                        ),

                    "same_value_text_ordinal":
                        (
                            group.index(
                                observation
                            )
                            + 1
                            if base_value
                            is not None
                            else None
                        ),

                    "same_value_text_count":
                        (
                            len(group)
                            if base_value
                            is not None
                            else None
                        ),

                    "base_value":
                        base_value,

                    "pvp_multiplier":
                        multiplier,

                    "pvp_value":
                        (
                            float(base_value)
                            * multiplier
                            if base_value
                            is not None
                            else None
                        ),

                    "is_pvp_modified":
                        _is_modified(
                            multiplier
                        ),

                    "wowhead_present":
                        False,

                    "drustvar_matched":
                        True,

                    "sources":
                        [
                            "simc",
                            "drustvar",
                        ],

                    "confidence":
                        "high",

                    "conflicts":
                        [],

                    "match_reason":
                        (
                            "simc_"
                            + match.reason
                        ),

                    "semantic_score":
                        match.semantic_score,

                    "wowhead_multiplier":
                        None,

                    "simc_multiplier":
                        multiplier,

                    "drustvar_multiplier":
                        (
                            match.drustvar
                            .pvp_multiplier
                        ),

                    "multiplier_delta":
                        match.multiplier_delta,

                    "drustvar_effect_text":
                        (
                            match.drustvar
                            .effect_text
                        ),

                    "simc_base_value":
                        simc_effect.base_value,

                    "simc_sp_coefficient":
                        simc_effect.sp_coefficient,

                    "simc_ap_coefficient":
                        simc_effect.ap_coefficient,

                    "simc_pvp_coefficient":
                        simc_effect.pvp_coefficient,

                    "base_value_source":
                        (
                            "simc_exact_build_coefficient"
                            if (
                                simc_effect.sp_coefficient
                                is not None
                                or simc_effect.ap_coefficient
                                is not None
                            )
                            else "simc_exact_build"
                        ),

                    "simc_corroborated":
                        True,
                }
            )

        if (
            len(
                resolution[
                    "unmatched_drustvar"
                ]
            )
            == 0
        ):
            fully_resolved.add(
                spell_id
            )

    return (
        rows,
        fully_resolved,
    )


def _simc_observation(
    simc_dump,
    spell_id: int,
    simc_effect,
) -> EffectObservation:
    spell = simc_dump.spells.get(
        int(spell_id)
    )

    return EffectObservation(
        source="simc",
        spell_id=int(spell_id),
        spell_name=(
            spell.name
            if spell is not None
            else f"Spell {spell_id}"
        ),
        effect_index=int(
            simc_effect.effect_index
        ),
        base_value=(
            simc_effect.base_value
        ),
        pvp_multiplier=(
            simc_effect.pvp_coefficient
        ),
        effect_text=(
            simc_effect.effect_text
        ),
        patch=simc_dump.build,
        url="",
        raw="",
    )


def _simc_corroborates_unresolved(
    item: dict,
    *,
    simc_dump,
    wowhead_by_spell: dict[int, list],
) -> bool:
    """
    Resolve representation-only Wowhead/Drustvar disagreements with
    exact-build SimC.

    This is deliberately conservative:
      * Wowhead-only rows require the SAME SpellEffect index in SimC.
      * unmatched Drustvar rows require a semantically compatible
        SimC effect AND a Wowhead effect with that same index.

    A missing Wowhead effect is not silently cleared here; that case
    needs an explicit SimC fallback row so player-facing coverage is
    preserved.
    """

    reason = item.get(
        "reason"
    )

    if reason not in {
        "WOWHEAD_ONLY_MODIFIER",
        "UNMATCHED_DRUSTVAR_EFFECT",
        "NO_WOWHEAD_EFFECTS",
    }:
        return False

    source_spell_id = int(
        item.get(
            "source_spell_id",
            item.get(
                "spell_id"
            ),
        )
    )

    multiplier = item.get(
        "multiplier"
    )

    if multiplier is None:
        return False

    spell = simc_dump.spells.get(
        source_spell_id
    )

    if spell is None:
        return False

    simc_effects = (
        simc.parse_spell_effects(
            spell
        )
    )

    wh_effects = (
        wowhead_by_spell.get(
            source_spell_id,
            [],
        )
    )

    if reason == "NO_WOWHEAD_EFFECTS":

        dr_obs = EffectObservation(
            source="drustvar",
            spell_id=source_spell_id,
            spell_name=str(
                item.get(
                    "talent_name"
                )
                or f"Spell {source_spell_id}"
            ),
            effect_index=0,
            base_value=None,
            pvp_multiplier=float(
                multiplier
            ),
            effect_text=str(
                item.get(
                    "effect_text"
                )
                or ""
            ),
            patch=None,
            url="",
            raw="",
        )

        # Wowhead has no structured effect table here, but exact-build
        # SimC can still establish concrete SpellEffect identities.
        # If Drustvar independently reports the same current multiplier
        # for a semantically compatible SimC effect, the missing Wowhead
        # representation is a provenance gap rather than an unresolved
        # game-state ambiguity.
        for simc_effect in (
            simc_effects.values()
        ):
            if (
                simc_effect.pvp_coefficient
                is None
                or not multipliers_close(
                    float(multiplier),
                    float(
                        simc_effect.pvp_coefficient
                    ),
                )
            ):
                continue

            simc_obs = _simc_observation(
                simc_dump,
                source_spell_id,
                simc_effect,
            )

            if semantic_score(
                simc_obs,
                dr_obs,
            ) > 0:
                return True

        return False

    if reason == "WOWHEAD_ONLY_MODIFIER":

        effect_index = item.get(
            "effect_index"
        )

        if effect_index is None:
            return False

        simc_effect = simc_effects.get(
            int(effect_index)
        )

        return bool(
            simc_effect is not None
            and simc_effect.pvp_coefficient
            is not None
            and multipliers_close(
                float(multiplier),
                float(
                    simc_effect.pvp_coefficient
                ),
            )
        )


    # Drustvar row with no safe one-to-one match.
    dr_obs = EffectObservation(
        source="drustvar",
        spell_id=source_spell_id,
        spell_name=str(
            item.get(
                "talent_name"
            )
            or f"Spell {source_spell_id}"
        ),
        effect_index=0,
        base_value=None,
        pvp_multiplier=float(
            multiplier
        ),
        effect_text=str(
            item.get(
                "effect_text"
            )
            or ""
        ),
        patch=None,
        url="",
        raw="",
    )

    wh_by_index = {
        int(effect.effect_index):
            effect
        for effect in wh_effects
    }

    compatible_simc = [
        simc_effect
        for simc_effect
        in simc_effects.values()
        if (
            simc_effect.pvp_coefficient
            is not None
            and multipliers_close(
                float(multiplier),
                float(
                    simc_effect.pvp_coefficient
                ),
            )
        )
    ]

    for simc_effect in (
        compatible_simc
    ):

        wh = wh_by_index.get(
            int(
                simc_effect.effect_index
            )
        )

        if wh is None:
            continue

        # An explicit conflicting Wowhead coefficient remains a real
        # source disagreement. If Wowhead simply omitted the PvP line,
        # exact-build SimC + Drustvar can still independently establish
        # the current coefficient.
        if (
            wh.pvp_multiplier
            is not None
            and not multipliers_close(
                float(multiplier),
                float(
                    wh.pvp_multiplier
                ),
            )
        ):
            continue

        simc_obs = _simc_observation(
            simc_dump,
            source_spell_id,
            simc_effect,
        )

        if semantic_score(
            simc_obs,
            dr_obs,
        ) > 0:
            return True

        # Generic Dummy effects often have no lexical semantic signal.
        # If the current coefficient identifies exactly one SimC
        # SpellEffect and Wowhead confirms that same effect index
        # without contradicting the coefficient, the identity is still
        # deterministic across the three representations.
        if len(compatible_simc) == 1:
            return True

    return False


def _game_effect_id(observation) -> int | None:
    try:
        value = json.loads(observation.raw).get("game_effect_id")
        return int(value) if value is not None else None
    except (ValueError, TypeError, AttributeError):
        return None


def _superseded_drustvar_effect(item, *, simc_dump, wowhead_by_spell):
    """Resolve a stale or internally conflicting Drustvar effect safely.

    The concrete game_effect_id must exist in exact-build SimC, and
    current Wowhead + SimC must agree on the replacement effect index
    and multiplier. This also covers a Drustvar row stamped with the
    current build but carrying stale description/value data.

    A Drustvar row from a *newer* build is never overridden here.
    """
    if item.get("reason") != "UNMATCHED_DRUSTVAR_EFFECT":
        return None
    old_build = str(item.get("source_build") or "")
    new_build = str(simc_dump.build or "")
    if not all(re.fullmatch(r"\d+\.\d+\.\d+\.\d+", b) for b in (old_build, new_build)):
        return None

    old_build_tuple = tuple(map(int, old_build.split(".")))
    new_build_tuple = tuple(map(int, new_build.split(".")))

    if old_build_tuple > new_build_tuple:
        return None

    same_build_conflict = old_build_tuple == new_build_tuple
    game_id = item.get("game_effect_id")
    spell_id = int(item.get("source_spell_id", item["spell_id"]))
    spell = simc_dump.spells.get(spell_id)
    if game_id is None or spell is None:
        return None
    for effect in simc.parse_spell_effects(spell).values():
        if effect.game_effect_id != game_id or effect.pvp_coefficient is None:
            continue
        for wh in wowhead_by_spell.get(spell_id, []):
            if wh.effect_index != effect.effect_index:
                continue

            # Wowhead represents the neutral PvP multiplier as an
            # omitted PVP Multiplier line. When exact-build SimC
            # explicitly records a hotfix back to ×1, that omission is
            # independent agreement with the current neutral state.
            wowhead_multiplier = (
                float(wh.pvp_multiplier)
                if wh.pvp_multiplier is not None
                else 1.0
            )

            if not multipliers_close(
                wowhead_multiplier,
                effect.pvp_coefficient,
            ):
                continue
            if semantic_score(wh, _simc_observation(simc_dump, spell_id, effect)) <= 0:
                continue
            if wh.base_value is not None and effect.base_value is not None and abs(wh.base_value - effect.base_value) > 1e-6:
                continue
            return {
                **item,
                "reason": "SUPERSEDED_DRUSTVAR_EFFECT",
                "current_build": new_build,
                "effect_index": effect.effect_index,
                "current_multiplier": effect.pvp_coefficient,
                "current_effect_text": effect.effect_text,
                "source_build_relation": (
                    "same_build_conflict"
                    if same_build_conflict
                    else "older_source"
                ),
                "resolved_by": [
                    "wowhead",
                    "simc_exact_build",
                ],
            }

        # Strong exact-build fallback for a stale source whose concrete
        # game effect is explicitly named in SimC's own hotfix history.
        #
        # Example:
        #   Drustvar 12.1.0.69587, game_effect_id=1035394, ×1.25
        #   SimC     12.1.0.69933, same effect, Hotfixed ×1.25 -> ×1
        #
        # This deliberately requires the old multiplier to match the
        # left-hand side. A merely newer SimC value is not enough.
        old_multiplier = item.get("multiplier")
        hotfix_previous = effect.pvp_hotfix_previous

        if (
            old_build_tuple < new_build_tuple
            and old_multiplier is not None
            and hotfix_previous is not None
            and multipliers_close(
                float(old_multiplier),
                float(hotfix_previous),
            )
        ):
            return {
                **item,
                "reason": "SUPERSEDED_DRUSTVAR_EFFECT",
                "current_build": new_build,
                "effect_index": effect.effect_index,
                "previous_multiplier": hotfix_previous,
                "current_multiplier": effect.pvp_coefficient,
                "current_effect_text": effect.effect_text,
                "resolved_by": ["simc_exact_build_hotfix"],
            }
    return None


def _filter_simc_corroborated_unresolved(
    unresolved_rows: list[dict],
    *,
    simc_dump,
    wowhead_by_spell: dict[int, list],
) -> list[dict]:

    result = []

    for item in unresolved_rows:
        superseded = _superseded_drustvar_effect(
            item, simc_dump=simc_dump, wowhead_by_spell=wowhead_by_spell
        )
        if superseded is not None:
            result.append(superseded)
            continue

        if _simc_corroborates_unresolved(
            item,
            simc_dump=simc_dump,
            wowhead_by_spell=
                wowhead_by_spell,
        ):
            continue

        result.append(item)

    return result


def _annotate_final_pvp_layers(
    rows: list[dict],
    aura_rules: list,
    simc_dump=None,
) -> None:
    """
    Add final PvP state to every effect row.

    final multiplier =
        spell-specific PvP multiplier
        × applicable specialization PvP Aura factor

    PvP Aura applies ONLY when amount_kind is proven.
    """

    for row in rows:

        source_spell_id = int(
            row.get(
                "source_spell_id",
                row["spell_id"],
            )
        )


        amount_kind = (
            _infer_amount_kind(
                row.get(
                    "effect_text"
                )
            )
        )


        raw_spell_multiplier = (
            row.get(
                "pvp_multiplier"
            )
        )


        spell_multiplier = (
            float(
                raw_spell_multiplier
            )
            if raw_spell_multiplier
            is not None
            else 1.0
        )


        effect_index = row.get(
            "effect_index"
        )

        spell_label_ids = (
            simc.spell_label_ids(
                simc_dump,
                source_spell_id,
            )
            if simc_dump is not None
            else tuple()
        )

        # Always ask the Aura resolver. Besides ordinary
        # direct/periodic/absorb buckets it can apply
        # effect-index scoped rules ("Modify Effect N") and
        # SpellLabel-targeted rules resolved from exact-build
        # SimC metadata. Those rules may be valid even when the
        # effect itself has no output amount_kind.
        applicable_rules = (
            pvp_aura.rules_for_spell(
                aura_rules,
                source_spell_id,
                amount_kind=
                    amount_kind,
                effect_index=
                    effect_index,
                spell_label_ids=
                    spell_label_ids,
            )
        )

        aura_factor = 1.0

        for rule in applicable_rules:

            aura_factor *= float(
                rule.factor
            )


        final_multiplier = (
            spell_multiplier
            * aura_factor
        )


        base_value = row.get(
            "base_value"
        )


        final_value = (
            float(base_value)
            * final_multiplier

            if base_value
            is not None

            else None
        )


        row.update(
            {
                "source_spell_id":
                    source_spell_id,

                "amount_kind":
                    amount_kind,

                "spell_pvp_multiplier":
                    spell_multiplier,

                "is_spell_pvp_modified":
                    abs(
                        spell_multiplier
                        - 1.0
                    ) > 1e-9,

                "aura_factor":
                    aura_factor,

                "aura_rules":
                    [
                        {
                            "aura_spell_id":
                                rule.aura_spell_id,

                            "game_effect_id":
                                rule.game_effect_id,

                            "amount_kind":
                                rule.amount_kind,

                            "value_pct":
                                rule.value_pct,

                            "factor":
                                rule.factor,

                            "label_id":
                                rule.label_id,

                            "build":
                                rule.build,
                        }
                        for rule
                        in applicable_rules
                    ],

                "is_aura_modified":
                    abs(
                        aura_factor
                        - 1.0
                    ) > 1e-9,

                "final_pvp_multiplier":
                    final_multiplier,

                "final_pvp_value":
                    final_value,

                "is_final_pvp_modified":
                    abs(
                        final_multiplier
                        - 1.0
                    ) > 1e-9,
            }
        )


def _classify_dependency(
    dependency,
) -> str:
    """
    REFERENCED
        Parent formula directly references child value.

        Examples:
            Barrier -> $81782s2
            Ultimate Penitence -> $421544s1

    EMBEDDED
        Parent embeds another spell description.

        Examples:
            Assured Safety -> Prayer of Mending
            Master the Darkness -> Void Shield

    RUNTIME
        Implementation dependency without direct
        player-facing value proof.
    """

    relations = tuple(
        dependency.relations
    )
    if relations and relations[0] == "tooltip_override":
        return "DISPLAY_OVERRIDE"


    if (
        relations
        and relations[0]
        == "tooltip_value_ref"
    ):
        return "REFERENCED"


    if (
        relations
        and relations[0]
        == "spelldesc_ref"
    ):
        return "EMBEDDED"


    return "RUNTIME"


def _init_history_schema(
    rows: list[dict],
) -> None:

    for row in rows:

        row.setdefault(
            "history_status",
            "NOT_REQUESTED",
        )

        row.setdefault(
            "history_evidence_count",
            0,
        )

        row.setdefault(
            "effect_related_history_count",
            0,
        )

        row.setdefault(
            "talent_wide_history_count",
            0,
        )

        row.setdefault(
            "history_evidence",
            [],
        )

        row.setdefault(
            "wiki_page",
            None,
        )


async def audit_spec(
    class_name: str,
    spec_name: str,
    *,
    wow_class_slug: str | None = None,
    concurrency: int = 6,
    include_wiki: bool = False,
    require_exact_simc_build: bool = True,
) -> SpecAuditResult:
    """
    Integrated current PvP audit.

    Stage 1:
        Existing proven direct audit.

    Stage 2:
        Exact-build SimC dependency graph.

    Stage 3:
        Specialization PvP Aura.

    Stage 4:
        Child/runtime Wowhead + Drustvar reconciliation.

    This deliberately keeps:
        spell-specific PvP
        specialization PvP Aura
        dependency provenance
    as separate audit dimensions.
    """

    # ========================================================
    # 1. Existing direct audit
    # ========================================================

    result = await _audit_spec_direct(
        class_name,
        spec_name,
        wow_class_slug=
            wow_class_slug,
        concurrency=
            concurrency,
        include_wiki=
            include_wiki,
    )


    if wow_class_slug is None:

        wow_class_slug = (
            class_name
            .strip()
            .casefold()
            .replace(" ", "-")
        )


    talent_by_spell = {}

    for row in result.talents:

        spell_id = row.get(
            "spell_id"
        )

        if spell_id is None:
            continue

        talent_by_spell.setdefault(
            int(spell_id),
            row,
        )


    talent_spell_ids = set(
        result.spell_ids
    )


    # ========================================================
    # 2. Whole-class PvP state + exact-build SimC graph
    # ========================================================

    client = CachedClient(
        concurrency=concurrency
    )


    try:

        (
            dr_all,
            aura_payload,
            simc_dump,
        ) = await asyncio.gather(
            drustvar.fetch_class(
                client,
                wow_class_slug,
            ),

            drustvar.fetch_aura_payload(
                client,
                wow_class_slug,
            ),

            simc.fetch_dump(
                client,
                class_name,
                target_build=
                    result.tree_build,
            ),
        )


        if (
            simc_dump.build
            != result.tree_build
        ):

            result.metadata[
                "simcBuildMismatch"
            ] = {
                "raidbots": result.tree_build,
                "simc": simc_dump.build,
            }

            if require_exact_simc_build:
                raise RuntimeError(
                    "SimC/Raidbots build mismatch: "
                    f"SimC={simc_dump.build}, "
                    f"Raidbots={result.tree_build}"
                )


        # Scope exact-build player text to the active specialization
        # before extracting reference contexts or dependency edges.
        # This prevents an inactive sibling branch from competing with
        # the visible tooltip merely because it contains the same number.
        simc_dump = (
            simc.scope_dump_to_specialization(
                simc_dump,
                class_name=
                    class_name,
                spec_name=
                    spec_name,
                spec_names=
                    result.metadata.get(
                        "classSpecNames",
                        [spec_name],
                    ),
            )
        )


        aura_rules = (
            pvp_aura
            .normalize_current_spec_aura(
                aura_payload,
                spec_name=spec_name,
                class_name=class_name,
            )
        )


        aura_affected_ids = {
            int(spell_id)
            for rule in aura_rules
            for spell_id, _
            in rule.affected_spells
        }

        # SpellLabel-targeted PvP Aura rows do not enumerate
        # affected_spells in Drustvar. Resolve their concrete
        # spell membership from the SAME exact-build SimC dump
        # used for dependency discovery.
        for rule in aura_rules:

            if rule.label_id is None:
                continue

            aura_affected_ids.update(
                simc.spell_ids_for_label(
                    simc_dump,
                    rule.label_id,
                )
            )


        dr_all_ids = {
            int(effect.spell_id)
            for effect in dr_all
        }

        simc_pvp_ids = (
            simc.pvp_modified_spell_ids(
                simc_dump
            )
        )


        # A dependency is PvP-relevant if it has either:
        #
        # 1. a spell-specific PvP coefficient
        # 2. a specialization PvP Aura modifier
        #
        # This is why Ultimate Penitence DAMAGE 421543 is
        # discovered even though it has no own PvP multiplier.
        pvp_output_universe = (
            dr_all_ids
            | aura_affected_ids
            | simc_pvp_ids
        )


        all_dependencies = (
            simc.pvp_dependencies(
                simc_dump,

                talent_spell_ids=
                    talent_spell_ids,

                pvp_spell_ids=
                    pvp_output_universe,

                max_depth=4,

                class_name=
                    class_name,

                spec_name=
                    spec_name,

                spec_names=
                    result.metadata.get(
                        "classSpecNames",
                        [spec_name],
                    ),
            )
        )


        # We keep off-tree implementation/output dependencies.
        dependencies = [
            dependency
            for dependency
            in all_dependencies
            if (
                dependency.target_spell_id
                not in talent_spell_ids
            )
        ]


        dependency_spell_ids = {
            dependency.target_spell_id
            for dependency
            in dependencies
        }


        (
            dependency_wowhead_by_spell,
            child_fetch_errors,
        ) = await _fetch_wowhead_all(
            client,
            sorted(
                dependency_spell_ids
            ),
        )


        # Wowhead occasionally WAF-blocks a hidden implementation spell.
        # Fetch SimC's large generated DBC only when such a gap actually
        # exists. It is pinned to the same exact build as simc_dump.
        generated_needed_ids = {
            spell_id
            for spell_id in (
                talent_spell_ids
                | dependency_spell_ids
            )
            if (
                spell_id in dr_all_ids
                and (
                    (
                        spell_id
                        in dependency_spell_ids
                        and not
                        dependency_wowhead_by_spell
                        .get(
                            spell_id
                        )
                    )
                    or (
                        spell_id
                        in talent_spell_ids
                        and not
                        result.wowhead_by_spell
                        .get(
                            spell_id
                        )
                    )
                )
            )
        }

        # A structured Wowhead page can still be stale relative to the
        # exact client build. When direct reconciliation already reports
        # an unmatched Drustvar row, fetch the generated exact SpellEffect
        # too so stale source values can be proved/replaced by identity.
        generated_needed_ids.update(
            int(
                item.get(
                    "source_spell_id",
                    item.get("spell_id"),
                )
            )
            for item in result.unresolved_rows
            if (
                item.get("reason")
                in {
                    "UNMATCHED_DRUSTVAR_EFFECT",
                    "NO_WOWHEAD_EFFECTS",
                }
                and item.get(
                    "source_spell_id",
                    item.get("spell_id"),
                )
                is not None
            )
        )

        generated_effects_by_spell = (
            await simc.fetch_generated_effects(
                client,
                generated_needed_ids,
                target_build=
                    result.tree_build,
                source_ref=
                    simc_dump.source_ref,
            )
            if generated_needed_ids
            else {}
        )


    finally:

        await client.aclose()


    result.fetch_errors.extend(
        child_fetch_errors
    )


    dependency_drustvar_by_spell = (
        _group_drustvar(
            dr_all,
            dependency_spell_ids,
        )
    )


    direct_missing_wowhead_ids = {
        int(item["spell_id"])
        for item in result.unresolved_rows
        if (
            item.get("reason")
            == "NO_WOWHEAD_EFFECTS"
            and item.get("spell_id")
            is not None
        )
    }

    (
        direct_simc_fallback_rows,
        direct_simc_resolved_ids,
    ) = _build_simc_fallback_rows(
        spell_ids=
            direct_missing_wowhead_ids,
        talent_by_spell=
            talent_by_spell,
        drustvar_by_spell=
            _group_drustvar(
                dr_all,
                direct_missing_wowhead_ids,
            ),
        simc_dump=
            simc_dump,
    )

    direct_remaining_generated_ids = (
        direct_missing_wowhead_ids
        - direct_simc_resolved_ids
    )

    (
        direct_generated_rows,
        direct_generated_resolved_ids,
    ) = _build_generated_simc_fallback_rows(
        spell_ids=
            direct_remaining_generated_ids,
        talent_by_spell=
            talent_by_spell,
        drustvar_by_spell=
            _group_drustvar(
                dr_all,
                direct_remaining_generated_ids,
            ),
        generated_effects_by_spell=
            generated_effects_by_spell,
        simc_dump=
            simc_dump,
    )

    if direct_generated_rows:

        _init_history_schema(
            direct_generated_rows
        )

        result.effect_rows.extend(
            direct_generated_rows
        )

    direct_simc_resolved_ids = (
        set(
            direct_simc_resolved_ids
        )
        | set(
            direct_generated_resolved_ids
        )
    )


    if direct_simc_fallback_rows:

        _init_history_schema(
            direct_simc_fallback_rows
        )

        result.effect_rows.extend(
            direct_simc_fallback_rows
        )

        result.unresolved_rows = [
            item
            for item
            in result.unresolved_rows
            if not (
                item.get("reason")
                == "NO_WOWHEAD_EFFECTS"
                and int(
                    item.get(
                        "spell_id",
                        -1,
                    )
                )
                in direct_simc_resolved_ids
            )
        ]


    # Resolve source-representation differences with the exact-build
    # SimC dump before deciding whether a spec is incomplete.
    result.unresolved_rows = (
        _filter_simc_corroborated_unresolved(
            result.unresolved_rows,
            simc_dump=simc_dump,
            wowhead_by_spell=
                result.wowhead_by_spell,
        )
    )


    # ========================================================
    # 3. Direct talent spells affected by PvP Aura
    #
    # The old audit discovered spell-specific PvP candidates.
    # Now include talent spell IDs that are changed ONLY by
    # the spec PvP Aura.
    # ========================================================

    aura_candidate_ids = (
        talent_spell_ids
        & aura_affected_ids
    )

    simc_candidate_ids = (
        talent_spell_ids
        & simc_pvp_ids
    )


    final_candidate_ids = (
        set(
            result.candidate_ids
        )
        | aura_candidate_ids
        | simc_candidate_ids
    )


    aura_only_direct_ids = (
        aura_candidate_ids
        - set(
            result.candidate_ids
        )
    )

    simc_only_direct_ids = (
        simc_candidate_ids
        - set(
            result.candidate_ids
        )
    )


    # Add Wowhead-structured rows for SimC-discovered talent
    # candidates. Missing PvP coefficients are filled from the exact
    # SimC dump below.
    if simc_only_direct_ids:

        (
            simc_direct_structured_rows,
            simc_direct_structured_unresolved,
        ) = _build_effect_rows(
            candidate_ids=
                simc_only_direct_ids,
            talent_by_spell=
                talent_by_spell,
            wowhead_by_spell=
                result.wowhead_by_spell,
            drustvar_by_spell=
                _group_drustvar(
                    dr_all,
                    simc_only_direct_ids,
                ),
        )

        simc_direct_missing_ids = {
            int(item["spell_id"])
            for item
            in simc_direct_structured_unresolved
            if (
                item.get("reason")
                == "NO_WOWHEAD_EFFECTS"
                and item.get("spell_id")
                is not None
            )
        }

        (
            simc_direct_fallback_rows,
            simc_direct_resolved_ids,
        ) = _build_simc_fallback_rows(
            spell_ids=
                simc_direct_missing_ids,
            talent_by_spell=
                talent_by_spell,
            drustvar_by_spell=
                _group_drustvar(
                    dr_all,
                    simc_direct_missing_ids,
                ),
            simc_dump=
                simc_dump,
        )

        simc_direct_structured_rows.extend(
            simc_direct_fallback_rows
        )

        simc_direct_structured_unresolved = [
            item
            for item
            in simc_direct_structured_unresolved
            if not (
                item.get("reason")
                == "NO_WOWHEAD_EFFECTS"
                and int(
                    item.get(
                        "spell_id",
                        -1,
                    )
                )
                in simc_direct_resolved_ids
            )
        ]

        simc_direct_structured_unresolved = (
            _filter_simc_corroborated_unresolved(
                simc_direct_structured_unresolved,
                simc_dump=simc_dump,
                wowhead_by_spell=
                    result.wowhead_by_spell,
            )
        )

        _init_history_schema(
            simc_direct_structured_rows
        )

        result.effect_rows.extend(
            simc_direct_structured_rows
        )

        result.unresolved_rows.extend(
            simc_direct_structured_unresolved
        )


    # Add effect rows for direct talent spells which were not
    # in the old spell-specific candidate universe.
    if aura_only_direct_ids:

        (
            extra_direct_rows,
            extra_unresolved,
        ) = _build_effect_rows(
            candidate_ids=
                aura_only_direct_ids,

            talent_by_spell=
                talent_by_spell,

            wowhead_by_spell=
                result.wowhead_by_spell,

            drustvar_by_spell=
                _group_drustvar(
                    dr_all,
                    aura_only_direct_ids,
                ),
        )


        extra_missing_ids = {
            int(item["spell_id"])
            for item in extra_unresolved
            if (
                item.get("reason")
                == "NO_WOWHEAD_EFFECTS"
                and item.get("spell_id")
                is not None
            )
        }

        (
            extra_simc_rows,
            extra_simc_resolved_ids,
        ) = _build_simc_fallback_rows(
            spell_ids=
                extra_missing_ids,
            talent_by_spell=
                talent_by_spell,
            drustvar_by_spell=
                _group_drustvar(
                    dr_all,
                    extra_missing_ids,
                ),
            simc_dump=
                simc_dump,
        )

        extra_direct_rows.extend(
            extra_simc_rows
        )

        extra_unresolved = [
            item
            for item in extra_unresolved
            if not (
                item.get("reason")
                == "NO_WOWHEAD_EFFECTS"
                and int(
                    item.get(
                        "spell_id",
                        -1,
                    )
                )
                in extra_simc_resolved_ids
            )
        ]


        _init_history_schema(
            extra_direct_rows
        )


        result.effect_rows.extend(
            extra_direct_rows
        )

        result.unresolved_rows.extend(
            _filter_simc_corroborated_unresolved(
                extra_unresolved,
                simc_dump=simc_dump,
                wowhead_by_spell=
                    result.wowhead_by_spell,
            )
        )


    direct_existing_keys = {
        (
            int(
                row.get(
                    "source_spell_id",
                    row["spell_id"],
                )
            ),
            row.get(
                "effect_index"
            ),
        )
        for row in result.effect_rows
        if row.get(
            "effect_index"
        ) is not None
    }

    direct_simc_modified_rows = (
        _build_simc_modified_rows(
            spell_ids=
                simc_candidate_ids,
            talent_by_spell=
                talent_by_spell,
            simc_dump=
                simc_dump,
            existing_keys=
                direct_existing_keys,
        )
    )

    if direct_simc_modified_rows:

        _init_history_schema(
            direct_simc_modified_rows
        )

        result.effect_rows.extend(
            direct_simc_modified_rows
        )

        direct_existing_keys.update(
            (
                int(row["spell_id"]),
                int(
                    row["effect_index"]
                ),
            )
            for row
            in direct_simc_modified_rows
        )


    direct_simc_aura_rows = (
        _build_simc_aura_rows(
            spell_ids=
                aura_candidate_ids,
            talent_by_spell=
                talent_by_spell,
            aura_rules=
                aura_rules,
            simc_dump=
                simc_dump,
            existing_keys=
                direct_existing_keys,
        )
    )

    if direct_simc_aura_rows:

        _init_history_schema(
            direct_simc_aura_rows
        )

        result.effect_rows.extend(
            direct_simc_aura_rows
        )


    _enrich_rows_from_generated_exact(
        result.effect_rows,
        generated_effects_by_spell=
            generated_effects_by_spell,
        source_notes=
            result.unresolved_rows,
    )


    # Annotate ALL direct rows with complete PvP layering.
    for row in result.effect_rows:

        row.setdefault(
            "effect_origin",
            "DIRECT",
        )

        row.setdefault(
            "talent_spell_id",
            row["spell_id"],
        )

        row.setdefault(
            "source_spell_id",
            row["spell_id"],
        )

        row.setdefault(
            "dependency_kind",
            None,
        )

        row.setdefault(
            "dependency_path",
            None,
        )

        row.setdefault(
            "dependency_relations",
            None,
        )

        row.setdefault(
            "dependency_evidence",
            None,
        )


    # Fill numeric values Wowhead omitted using the SAME
    # exact-build SimC dump used for dependency discovery.
    _fill_missing_base_values_from_simc(
        result.effect_rows,
        simc_dump,
    )


    _annotate_final_pvp_layers(
        result.effect_rows,
        aura_rules,
        simc_dump,
    )


    # ========================================================
    # 4. Dependency child effects
    # ========================================================

    dependency_effect_rows = []


    for dependency in dependencies:

        root_id = (
            dependency.root_spell_id
        )

        source_id = (
            dependency.target_spell_id
        )


        parent_talent = (
            talent_by_spell.get(
                root_id,
                {},
            )
        )


        (
            child_rows,
            child_unresolved,
        ) = _build_effect_rows(
            candidate_ids={
                source_id
            },

            # Give child effect rows the PARENT talent graph
            # identity while retaining source_spell_id below.
            talent_by_spell={
                source_id:
                    parent_talent
            },

            wowhead_by_spell={
                source_id:
                    dependency_wowhead_by_spell.get(
                        source_id,
                        [],
                    )
            },

            drustvar_by_spell={
                source_id:
                    dependency_drustvar_by_spell.get(
                        source_id,
                        [],
                    )
            },
        )


        child_missing_ids = {
            int(item["spell_id"])
            for item in child_unresolved
            if (
                item.get("reason")
                == "NO_WOWHEAD_EFFECTS"
                and item.get("spell_id")
                is not None
            )
        }

        (
            child_simc_rows,
            child_simc_resolved_ids,
        ) = _build_simc_fallback_rows(
            spell_ids=
                child_missing_ids,
            talent_by_spell={
                source_id:
                    parent_talent
            },
            drustvar_by_spell=
                dependency_drustvar_by_spell,
            simc_dump=
                simc_dump,
        )

        child_rows.extend(
            child_simc_rows
        )


        child_generated_ids = (
            child_missing_ids
            - child_simc_resolved_ids
        )

        (
            child_generated_rows,
            child_generated_resolved_ids,
        ) = _build_generated_simc_fallback_rows(
            spell_ids=
                child_generated_ids,
            talent_by_spell={
                source_id:
                    parent_talent
            },
            drustvar_by_spell=
                dependency_drustvar_by_spell,
            generated_effects_by_spell=
                generated_effects_by_spell,
            simc_dump=
                simc_dump,
        )

        child_rows.extend(
            child_generated_rows
        )

        child_resolved_ids = (
            set(
                child_simc_resolved_ids
            )
            | set(
                child_generated_resolved_ids
            )
        )

        child_unresolved = [
            item
            for item in child_unresolved
            if not (
                item.get("reason")
                == "NO_WOWHEAD_EFFECTS"
                and int(
                    item.get(
                        "spell_id",
                        -1,
                    )
                )
                in child_resolved_ids
            )
        ]


        child_existing_keys = {
            (
                int(
                    row.get(
                        "source_spell_id",
                        row["spell_id"],
                    )
                ),
                row.get(
                    "effect_index"
                ),
            )
            for row in child_rows
            if row.get(
                "effect_index"
            ) is not None
        }

        child_simc_modified_rows = (
            _build_simc_modified_rows(
                spell_ids={
                    source_id
                },
                talent_by_spell={
                    source_id:
                        parent_talent
                },
                simc_dump=
                    simc_dump,
                existing_keys=
                    child_existing_keys,
            )
        )

        child_rows.extend(
            child_simc_modified_rows
        )

        child_existing_keys.update(
            (
                int(row["spell_id"]),
                int(
                    row["effect_index"]
                ),
            )
            for row
            in child_simc_modified_rows
        )

        child_rows.extend(
            _build_simc_aura_rows(
                spell_ids={
                    source_id
                },
                talent_by_spell={
                    source_id:
                        parent_talent
                },
                aura_rules=
                    aura_rules,
                simc_dump=
                    simc_dump,
                existing_keys=
                    child_existing_keys,
            )
        )


        kind = _classify_dependency(
            dependency
        )


        for row in child_rows:

            effect_index = row.get(
                "effect_index"
            )

            dependency_contexts = (
                simc.dependency_effect_reference_contexts(
                    dependency,
                    source_id,
                    int(effect_index),
                    dump=simc_dump,
                )
                if effect_index is not None
                else tuple()
            )

            dependency_unit_hint = (
                simc.dependency_effect_unit_hint(
                    dependency,
                    source_id,
                    int(effect_index),
                    dump=simc_dump,
                )
                if effect_index is not None
                else None
            )

            row.update(
                {
                    "effect_origin":
                        "DEPENDENCY",

                    "talent_spell_id":
                        root_id,

                    "source_spell_id":
                        source_id,

                    "dependency_kind":
                        kind,

                    "dependency_path":
                        dependency.path_spell_ids,

                    "dependency_relations":
                        dependency.relations,

                    "dependency_evidence":
                        dependency.evidence,

                    # A REFERENCED dependency may point to one concrete
                    # child SpellEffect while that child spell contains
                    # other unrelated PvP-modified effects. Only the
                    # explicitly referenced effects may rewrite the
                    # parent tooltip; all child mechanics remain exposed
                    # in the Compendium.
                    "dependency_effect_referenced":
                        bool(
                            dependency_contexts
                        ),

                    "simc_reference_contexts":
                        list(
                            dict.fromkeys(
                                [
                                    *list(
                                        row.get(
                                            "simc_reference_contexts",
                                            [],
                                        )
                                        or []
                                    ),
                                    *dependency_contexts,
                                ]
                            )
                        ),

                    "semantic_unit_hint":
                        (
                            row.get(
                                "semantic_unit_hint"
                            )
                            or dependency_unit_hint
                        ),
                }
            )


        for row in child_unresolved:

            row.update(
                {
                    "effect_origin":
                        "DEPENDENCY",

                    "talent_spell_id":
                        root_id,

                    "source_spell_id":
                        source_id,

                    "dependency_kind":
                        kind,

                    "dependency_path":
                        dependency.path_spell_ids,

                    "dependency_relations":
                        dependency.relations,
                }
            )


        _init_history_schema(
            child_rows
        )


        _fill_missing_base_values_from_simc(
            child_rows,
            simc_dump,
        )


        _annotate_final_pvp_layers(
            child_rows,
            aura_rules,
            simc_dump,
        )


        filtered_child_unresolved = (
            _filter_simc_corroborated_unresolved(
                child_unresolved,
                simc_dump=simc_dump,
                wowhead_by_spell=
                    dependency_wowhead_by_spell,
            )
        )

        _enrich_rows_from_generated_exact(
            child_rows,
            generated_effects_by_spell=
                generated_effects_by_spell,
            source_notes=
                filtered_child_unresolved,
        )

        dependency_effect_rows.extend(
            child_rows
        )

        result.unresolved_rows.extend(
            filtered_child_unresolved
        )


    # ========================================================
    # 5. Expose integrated state
    # ========================================================

    result.simc_build = (
        simc_dump.build
    )

    result.dependencies = (
        dependencies
    )

    result.dependency_effect_rows = (
        dependency_effect_rows
    )

    result.dependency_wowhead_by_spell = (
        dependency_wowhead_by_spell
    )

    result.dependency_drustvar_by_spell = (
        dependency_drustvar_by_spell
    )

    result.pvp_aura_rules = (
        aura_rules
    )

    result.aura_candidate_ids = (
        aura_candidate_ids
    )

    result.simc_candidate_ids = (
        simc_candidate_ids
    )

    result.final_candidate_ids = (
        final_candidate_ids
    )


    result.metadata["specAuraSpellIds"] = [
        spell.spell_id for spell in simc_dump.spells.values()
        if spell.name == f"{spec_name} {class_name}"
        and re.search(r"^Class\s*:\s*" + re.escape(spell.name) + r"\s*$", spell.raw, re.M)
    ]
    # Convert simple scalar formulas using exact client notation (e.g. 777/100).
    # Keep raw DB values intact for provenance and change only the renderer input.
    for row in result.all_effect_rows:
        sid = int(row.get("source_spell_id", row.get("spell_id", 0)))
        index = int(row.get("effect_index") or 0)
        spell = simc_dump.spells.get(sid)
        if not spell or row.get("base_value") is None:
            continue
        pattern = re.compile(r"\$\{\$(?:" + str(sid) + r")?s" + str(index)
                             + r"/(-?\d+(?:\.\d+)?)\}(?:\.(\d+))?(%)?")
        matches = list(pattern.finditer("\n".join(simc._player_text_sections(spell.raw))))
        if matches and len({m[0] for m in matches}) == 1:
            match = matches[0]
            divisor = float(match[1])
            if divisor:
                precision = int(match[2] or (2 if match[3] else 4))
                base = abs(float(row["base_value"]) / divisor)
                new = abs(float(row.get("final_pvp_value") or 0) / divisor)
                row["display_formula"] = {"old": round(base, precision), "new": round(new, precision),
                                          "kind": "percent_value" if match[3] else "ordinary_value",
                                          "divisor": divisor, "precision": precision}

    for talent in result.talents:
        rank_talent = talent
        if talent.get("node_type") == "tiered":
            spell = simc_dump.spells.get(talent["spell_id"])
            entry = re.search(r"^Talent Entry.*max_rank=(\d+)", spell.raw, re.M) if spell else None
            rank_talent = {**talent, "node_type": "single", "max_ranks": int(entry[1]) if entry else 1}
        if int(rank_talent.get("max_ranks") or 1) > 1:
            source = ranks.rank_source(simc_dump, rank_talent)
            if source:
                result.rank_sources[int(talent["entry_id"])] = source
    for spell_id in result.spell_ids:
        fallback = simc.simple_player_description(
            simc_dump, spell_id, class_name=class_name, spec_name=spec_name,
            spec_names=result.metadata.get("classSpecNames", [spec_name]),
        )
        if fallback is not None:
            result.simc_tooltip_fallbacks[spell_id] = fallback

    for note in result.unresolved_rows:
        if note.get("reason") != "SUPERSEDED_DRUSTVAR_EFFECT":
            continue
        for row in result.all_effect_rows:
            if (row.get("source_spell_id", row.get("spell_id")) == note.get("source_spell_id", note.get("spell_id"))
                    and row.get("effect_index") == note.get("effect_index")):
                row.setdefault("source_notes", []).append(note)

    return result
