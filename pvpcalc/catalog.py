from __future__ import annotations

import asyncio
from dataclasses import (
    dataclass,
    asdict,
)
from typing import Any

from .http import CachedClient
from .sources import wowhead, simc, blizzard_hotfixes
from . import tooltip_renderer
from . import ranks


# ============================================================
# Application-level models
# ============================================================

@dataclass
class TalentRecord:
    """
    One selectable talent entry exposed to the application.

    This is deliberately UI-oriented.

    Raw source/effect complexity stays underneath it.
    """

    talent_name: str

    spell_id: int
    node_id: int | None
    entry_id: int | None
    definition_id: int | None

    tree_type: str | None
    hero_tree: str | None

    # Keep the entire normalized Raidbots row so future UI
    # work cannot lose coordinates/topology metadata.
    tree_data: dict[str, Any]

    # --------------------------------------------------------
    # Player-facing tooltip
    # --------------------------------------------------------

    pve_tooltip: str
    pvp_tooltip: str

    tooltip_changed: bool

    render_status: str

    # Text substitutions actually made.
    changes: list[dict]

    # Conservative renderer diagnostics.
    diagnostics: list[dict]

    # --------------------------------------------------------
    # PvP mechanics
    #
    # A talent may have PvP mechanics even when its own
    # player-facing tooltip does not change.
    #
    # Example:
    #   Master the Darkness -> Void Shield output
    # --------------------------------------------------------

    has_pvp_mechanics: bool

    mechanics: list[dict]

    # Count of rows which were permitted to influence the
    # main parent tooltip.
    render_effect_count: int
    rank_tooltips: list[dict]


@dataclass
class SpecCatalog:
    class_name: str
    spec_name: str

    tree_build: str | None
    simc_build: str | None
    drustvar_builds: list[str]

    talents: list[TalentRecord]

    # Player-facing class/spec abilities that are not selectable talent
    # nodes, but still carry verified PvP differences (official hotfixes,
    # spell coefficients, etc.). Kept separate so the Talent Tree remains
    # a literal tree while comparison/mechanics views can be complete.
    abilities: list[TalentRecord]

    fetch_errors: list[dict]

    def to_dict(self):
        return {
            "class_name":
                self.class_name,

            "spec_name":
                self.spec_name,

            "tree_build":
                self.tree_build,

            "simc_build":
                self.simc_build,

            "drustvar_builds":
                self.drustvar_builds,

            "talents": [
                asdict(talent)
                for talent in self.talents
            ],

            "abilities": [
                asdict(ability)
                for ability in self.abilities
            ],

            "fetch_errors":
                self.fetch_errors,
        }


# ============================================================
# Helpers
# ============================================================

BLOCKING_RENDER_STATUSES = {
    "NO_RENDERABLE_VALUE",
    "AMBIGUOUS_TEXT_MATCH",
    "CONFLICTING_TRANSFORMS",
}


def _mechanic_row(
    row: dict,
) -> dict:
    """
    Compact public/audit representation.

    Enough for:
      - PvE vs PvP table
      - Compendium
      - provenance drawer

    without leaking the entire internal pipeline row.
    """

    return {
        "effect_origin":
            row.get(
                "effect_origin"
            ),

        "dependency_kind":
            row.get(
                "dependency_kind"
            ),

        "talent_spell_id":
            row.get(
                "talent_spell_id"
            ),

        "source_spell_id":
            row.get(
                "source_spell_id"
            ),

        "effect_index":
            row.get(
                "effect_index"
            ),

        "effect_text":
            row.get(
                "effect_text"
            ),

        "base_value":
            row.get(
                "base_value"
            ),

        "spell_pvp_multiplier":
            row.get(
                "spell_pvp_multiplier"
            ),

        "amount_kind":
            row.get(
                "amount_kind"
            ),

        "aura_factor":
            row.get(
                "aura_factor"
            ),

        "final_pvp_multiplier":
            row.get(
                "final_pvp_multiplier"
            ),

        "final_pvp_value":
            row.get(
                "final_pvp_value"
            ),

        "is_final_pvp_modified":
            row.get(
                "is_final_pvp_modified",
                False,
            ),

        "dependency_path":
            list(
                row.get(
                    "dependency_path"
                )
                or []
            ),

        "dependency_relations":
            list(
                row.get(
                    "dependency_relations"
                )
                or []
            ),

        "aura_rules":
            row.get(
                "aura_rules",
                [],
            ),

        "sources":
            list(
                row.get(
                    "sources"
                )
                or []
            ),

        "source_notes": list(row.get("source_notes") or []),

        "confidence":
            row.get(
                "confidence"
            ),
    }


def _render_status(
    *,
    tooltip: str,
    render_result: dict,
) -> str:

    if not tooltip.strip():

        return (
            "MISSING_TOOLTIP"
        )


    statuses = {
        item.get(
            "status"
        )
        for item
        in render_result[
            "diagnostics"
        ]
    }


    if (
        statuses
        & BLOCKING_RENDER_STATUSES
    ):

        return (
            "REVIEW_REQUIRED"
        )


    if render_result[
        "changed"
    ]:

        return "CHANGED"


    return "UNCHANGED"


# ============================================================
# Non-tree abilities referenced by official PvP hotfixes
# ============================================================

async def attach_official_hotfix_abilities(
    audit,
    spec_catalog: SpecCatalog,
    hotfixes,
    *,
    concurrency: int = 6,
) -> dict:
    """Resolve player-facing PvP hotfix targets outside the talent tree.

    Blizzard often tunes baseline class/spec abilities directly. Those spells
    are absent from Raidbots' talent-node catalog, so treating a missing
    talent-name match as "irrelevant" silently drops real PvP changes.

    Resolution is deliberately data-driven and fail-closed:
      1. keep only in-scope *absolute* PvP hotfixes not already represented
         by a selectable talent;
      2. resolve the exact hotfix name against the same exact-build,
         specialization-scoped SimC spell dump used by the mechanics pipeline;
      3. require exactly one player-facing spell candidate with a usable
         Wowhead/SimC tooltip;
      4. expose it as a non-tree record, then let the normal official-hotfix
         overlay code apply the PvE -> PvP change.

    There are no spell-name or spell-id exceptions here.
    """

    existing_names = {
        blizzard_hotfixes._normalize_name(
            talent.talent_name
        )
        for talent in spec_catalog.talents
    }
    existing_spell_ids = {
        int(talent.spell_id)
        for talent in spec_catalog.talents
    }

    pending = [
        hotfix
        for hotfix in hotfixes
        if (
            hotfix.mode == "absolute"
            and not str(
                hotfix.talent_name
            ).startswith("__")
            and blizzard_hotfixes
                ._hotfix_applies_to_catalog(
                    hotfix,
                    spec_catalog,
                )
            and blizzard_hotfixes
                ._normalize_name(
                    hotfix.talent_name
                )
                not in existing_names
        )
    ]

    if not pending:
        return {
            "resolved": [],
            "unresolved": [],
        }

    dump = getattr(
        audit,
        "simc_dump",
        None,
    )
    if dump is None:
        return {
            "resolved": [],
            "unresolved": [
                {
                    "talent_name":
                        hotfix.talent_name,
                    "text":
                        hotfix.text,
                    "reason":
                        "EXACT_BUILD_SPELL_DUMP_UNAVAILABLE",
                }
                for hotfix in pending
            ],
        }

    by_name = {}
    for spell in dump.spells.values():
        normalized = (
            blizzard_hotfixes
            ._normalize_name(
                spell.name
            )
        )
        by_name.setdefault(
            normalized,
            [],
        ).append(spell)

    candidate_ids = sorted({
        int(spell.spell_id)
        for hotfix in pending
        for spell in by_name.get(
            blizzard_hotfixes
            ._normalize_name(
                hotfix.talent_name
            ),
            [],
        )
        if int(spell.spell_id)
        not in existing_spell_ids
    })

    client = CachedClient(
        concurrency=concurrency
    )

    async def fetch_page(
        spell_id: int,
    ):
        try:
            page = await wowhead.fetch_spell_page(
                client,
                spell_id,
            )
            return spell_id, page, None
        except Exception as exc:
            return (
                spell_id,
                None,
                f"{type(exc).__name__}: {exc}",
            )

    try:
        fetched = await asyncio.gather(*[
            fetch_page(spell_id)
            for spell_id in candidate_ids
        ])
    finally:
        await client.aclose()

    pages = {
        spell_id: page
        for spell_id, page, error in fetched
        if page is not None
    }
    fetch_errors = {
        spell_id: error
        for spell_id, page, error in fetched
        if error is not None
    }

    resolved = []
    unresolved = []

    for hotfix in pending:
        normalized = (
            blizzard_hotfixes
            ._normalize_name(
                hotfix.talent_name
            )
        )
        spells = [
            spell
            for spell in by_name.get(
                normalized,
                [],
            )
            if int(spell.spell_id)
            not in existing_spell_ids
        ]

        usable = []

        for spell in spells:
            spell_id = int(
                spell.spell_id
            )
            page = pages.get(
                spell_id
            )

            tooltip = ""
            icon = ""

            if page is not None:
                if (
                    blizzard_hotfixes
                    ._normalize_name(
                        page.spell_name
                    )
                    == normalized
                ):
                    tooltip = (
                        wowhead
                        .tooltip_for_specialization(
                            page,
                            audit.metadata.get(
                                "specAuraSpellIds",
                                [],
                            ),
                        )
                    )
                    tooltip = (
                        tooltip_renderer
                        .tooltip_for_spec(
                            tooltip,
                            audit.spec_name,
                            audit.metadata.get(
                                "classSpecNames",
                            ),
                        )
                    )
                    icon = page.icon or ""

            if not str(
                tooltip
            ).strip():
                fallback = (
                    simc.simple_player_description(
                        dump,
                        spell_id,
                        class_name=
                            audit.class_name,
                        spec_name=
                            audit.spec_name,
                        spec_names=
                            audit.metadata.get(
                                "classSpecNames",
                                [audit.spec_name],
                            ),
                    )
                )
                if fallback:
                    tooltip = (
                        fallback.get(
                            "text",
                            "",
                        )
                    )

            if str(
                tooltip
            ).strip():
                usable.append(
                    (
                        spell,
                        str(tooltip).strip(),
                        icon,
                    )
                )

        if len(usable) != 1:
            unresolved.append(
                {
                    "talent_name":
                        hotfix.talent_name,
                    "text":
                        hotfix.text,
                    "reason": (
                        "BASE_ABILITY_NOT_FOUND"
                        if not spells
                        else
                        "BASE_ABILITY_AMBIGUOUS"
                        if len(usable) > 1
                        else
                        "BASE_ABILITY_TOOLTIP_UNAVAILABLE"
                    ),
                    "candidate_spell_ids": [
                        int(spell.spell_id)
                        for spell in spells
                    ],
                    "fetch_errors": {
                        str(spell.spell_id):
                            fetch_errors.get(
                                int(spell.spell_id)
                            )
                        for spell in spells
                        if int(spell.spell_id)
                        in fetch_errors
                    },
                }
            )
            continue

        spell, tooltip, icon = usable[0]
        spell_id = int(
            spell.spell_id
        )

        record = TalentRecord(
            talent_name=
                hotfix.talent_name,
            spell_id=
                spell_id,
            node_id=None,
            entry_id=None,
            definition_id=None,
            tree_type=
                "ability",
            hero_tree=None,
            tree_data={
                "source":
                    "simc_exact_build",
                "wow_build":
                    audit.tree_build,
                "entry_type":
                    "ability",
                "talent_name":
                    hotfix.talent_name,
                "spell_id":
                    spell_id,
                "icon":
                    icon,
                "icon_candidates": (
                    [icon]
                    if icon
                    else []
                ),
            },
            pve_tooltip=
                tooltip,
            pvp_tooltip=
                tooltip,
            tooltip_changed=False,
            render_status=
                "UNCHANGED",
            changes=[],
            diagnostics=[
                {
                    "status":
                        "NON_TREE_ABILITY_RESOLVED",
                    "source":
                        "simc_exact_build",
                    "source_spell_id":
                        spell_id,
                    "source_build":
                        dump.build,
                    "hotfix_text":
                        hotfix.text,
                }
            ],
            has_pvp_mechanics=False,
            mechanics=[],
            render_effect_count=0,
            rank_tooltips=[],
        )

        spec_catalog.abilities.append(
            record
        )
        existing_names.add(
            normalized
        )
        existing_spell_ids.add(
            spell_id
        )
        resolved.append(
            {
                "talent_name":
                    hotfix.talent_name,
                "spell_id":
                    spell_id,
                "source":
                    "simc_exact_build",
            }
        )

    return {
        "resolved": resolved,
        "unresolved": unresolved,
    }


# ============================================================
# Builder
# ============================================================

async def build_spec_catalog(
    audit,
    *,
    concurrency: int = 6,
) -> SpecCatalog:

    # --------------------------------------------------------
    # Fetch ONE player-facing page per unique talent spell.
    # --------------------------------------------------------

    spell_ids = sorted(
        {
            int(
                row["spell_id"]
            )
            for row in audit.talents
            if row.get(
                "spell_id"
            ) is not None
        }
    )


    spell_ids = sorted(set(spell_ids) | {
        int(row["visible_spell_id"]) for row in audit.talents if row.get("visible_spell_id")
    })
    client = CachedClient(
        concurrency=concurrency
    )


    async def fetch_one(
        spell_id: int,
    ):

        try:

            page = (
                await wowhead
                .fetch_spell_page(
                    client,
                    spell_id,
                )
            )

            return (
                spell_id,
                page,
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


    try:

        fetched = await asyncio.gather(
            *[
                fetch_one(
                    spell_id
                )
                for spell_id
                in spell_ids
            ]
        )

    finally:

        await client.aclose()


    pages = {}

    fetch_errors = []


    for (
        spell_id,
        page,
        error,
    ) in fetched:

        if page is not None:

            pages[
                spell_id
            ] = page


        if error is not None:

            fetch_errors.append(
                {
                    "source":
                        "wowhead_page",

                    "spell_id":
                        spell_id,

                    "error":
                        error,
                }
            )


    # --------------------------------------------------------
    # Index complete mechanics by PARENT talent.
    # --------------------------------------------------------

    mechanics_by_talent = {}


    for row in (
        audit
        .final_modified_effect_rows
    ):

        parent_id = int(
            row.get(
                "talent_spell_id",
                row["spell_id"],
            )
        )

        mechanics_by_talent.setdefault(
            parent_id,
            [],
        ).append(row)


    # --------------------------------------------------------
    # Context rows include unchanged sibling effects. They never
    # create transformations themselves, but can disambiguate which
    # repeated visible number belongs to a modified effect.
    # --------------------------------------------------------

    context_by_talent = {}

    for row in audit.all_effect_rows:

        origin = row.get(
            "effect_origin",
            "DIRECT",
        )

        dependency_kind = row.get(
            "dependency_kind"
        )

        if (
            origin != "DIRECT"
            and dependency_kind
            != "REFERENCED"
        ):
            continue

        parent_id = int(
            row.get(
                "talent_spell_id",
                row["spell_id"],
            )
        )

        context_by_talent.setdefault(
            parent_id,
            [],
        ).append(row)


    # --------------------------------------------------------
    # Index only rows permitted to alter the MAIN tooltip.
    # --------------------------------------------------------

    render_by_talent = {}


    for row in (
        audit
        .render_effect_rows
    ):

        parent_id = int(
            row.get(
                "talent_spell_id",
                row["spell_id"],
            )
        )

        render_by_talent.setdefault(
            parent_id,
            [],
        ).append(row)


    # --------------------------------------------------------
    # One application record per selectable entry.
    # --------------------------------------------------------

    records = []


    for talent in audit.talents:

        raw_spell_id = (
            talent.get(
                "spell_id"
            )
        )

        if raw_spell_id is None:
            continue


        spell_id = int(
            raw_spell_id
        )


        page = pages.get(
            spell_id
        )


        pve_tooltip = (
            wowhead.tooltip_for_specialization(page, audit.metadata.get("specAuraSpellIds", []))
            if page is not None
            else ""
        )

        fallback_note = None
        display_override = False
        visible_id = talent.get("visible_spell_id")
        if visible_id and not tooltip_renderer.tooltip_for_spec(pve_tooltip, audit.spec_name, audit.metadata.get("classSpecNames")).strip():
            visible_page = pages.get(int(visible_id))
            if visible_page is not None:
                page = visible_page
                pve_tooltip = wowhead.tooltip_for_specialization(page, audit.metadata.get("specAuraSpellIds", []))
                display_override = True
                fallback_note = {"status": "EXPLICIT_DISPLAY_OVERRIDE", "source_spell_id": visible_id, "source": "raidbots_visible_spell_id"}
        if not tooltip_renderer.tooltip_for_spec(pve_tooltip, audit.spec_name, audit.metadata.get("classSpecNames")).strip():
            fallback = audit.simc_tooltip_fallbacks.get(spell_id)
            if fallback:
                pve_tooltip = fallback["text"]
                fallback_note = {"status": "EXACT_BUILD_DESCRIPTION", **fallback}


        render_rows = (
            render_by_talent.get(
                spell_id,
                [],
            )
        )


        context_rows = context_by_talent.get(spell_id, [])
        if display_override:
            override_rows = [row for row in audit.all_effect_rows
                             if row.get("talent_spell_id") == spell_id
                             and row.get("dependency_kind") == "DISPLAY_OVERRIDE"
                             and row.get("dependency_effect_referenced")]
            render_rows = [*render_rows, *override_rows]
            context_rows = [*context_rows, *override_rows]

        rendered = (
            tooltip_renderer
            .render_pvp_tooltip(
                tooltip=
                    pve_tooltip,

                spec_name=
                    audit.spec_name,

                effect_rows=
                    render_rows,

                spec_names=
                    audit.metadata.get(
                        "classSpecNames"
                    ),

                context_rows=context_rows,
            )
        )

        if fallback_note:
            rendered["diagnostics"].append(fallback_note)

        rank_tooltips = []
        rank_source = getattr(audit, "rank_sources", {}).get(int(talent.get("entry_id") or 0))
        if rank_source:
            for rank in range(1, rank_source["rank_count"] + 1):
                rank_text, rank_diagnostics = ranks.render_rank(
                    pve_tooltip, rank_source, rank, spec_name=audit.spec_name,
                    spec_names=audit.metadata.get("classSpecNames"),
                )
                rank_rendered = tooltip_renderer.render_pvp_tooltip(
                    tooltip=rank_text, spec_name=audit.spec_name,
                    spec_names=audit.metadata.get("classSpecNames"),
                    effect_rows=ranks.rows_at_rank(render_rows, rank_source["rules"], rank, spell_id),
                    context_rows=ranks.rows_at_rank(context_rows, rank_source["rules"], rank, spell_id),
                )
                if rank_diagnostics:
                    raise ValueError(f"Unresolved rank description: {spell_id}, rank {rank}: {rank_diagnostics}")
                status = _render_status(tooltip=rank_text, render_result=rank_rendered)
                if status in {"REVIEW_REQUIRED", "MISSING_TOOLTIP"}:
                    raise ValueError(f"Unresolved rank PvP values: {spell_id}, rank {rank}: {rank_rendered['diagnostics']}")
                rank_tooltips.append({"rank": rank, "pve_tooltip": rank_rendered["pve_tooltip"],
                                      "pvp_tooltip": rank_rendered["pvp_tooltip"],
                                      "tooltip_changed": rank_rendered["changed"],
                                      "changes": rank_rendered["replacements"],
                                      "source": "simc_exact_build_trait_rank", "build": rank_source["build"]})
                rendered = rank_rendered


        mechanic_rows = (
            mechanics_by_talent.get(
                spell_id,
                [],
            )
        )


        records.append(
            TalentRecord(
                talent_name=str(
                    talent.get(
                        "talent_name",
                        (
                            page.spell_name
                            if page
                            else
                            f"Spell {spell_id}"
                        ),
                    )
                ),

                spell_id=
                    spell_id,

                rank_tooltips=rank_tooltips,

                node_id=
                    talent.get(
                        "node_id"
                    ),

                entry_id=
                    talent.get(
                        "entry_id"
                    ),

                definition_id=
                    talent.get(
                        "definition_id"
                    ),

                tree_type=
                    talent.get(
                        "tree_type"
                    ),

                hero_tree=
                    talent.get(
                        "hero_tree"
                    ),

                tree_data=
                    {
                        **talent,
                        **(
                            {
                                "icon": (
                                    (
                                        page.icon
                                        if display_override and page and page.icon
                                        else talent.get("icon")
                                    )
                                    or (page.icon if page else "")
                                ),
                                "icon_candidates": list(
                                    dict.fromkeys(
                                        icon
                                        for icon in (
                                            (
                                                page.icon
                                                if display_override and page
                                                else talent.get("icon")
                                            ),
                                            (
                                                talent.get("icon")
                                                if display_override
                                                else (page.icon if page else "")
                                            ),
                                        )
                                        if icon
                                    )
                                ),
                            }
                            if (
                                talent.get("icon")
                                or (page and page.icon)
                            )
                            else {}
                        ),
                    },

                pve_tooltip=
                    rendered[
                        "pve_tooltip"
                    ],

                pvp_tooltip=
                    rendered[
                        "pvp_tooltip"
                    ],

                tooltip_changed=
                    rendered[
                        "changed"
                    ],

                render_status=
                    _render_status(
                        tooltip=
                            rendered["pve_tooltip"],

                        render_result=
                            rendered,
                    ),

                changes=[
                    dict(item)
                    for item
                    in rendered[
                        "replacements"
                    ]
                ],

                diagnostics=[
                    dict(item)
                    for item
                    in rendered[
                        "diagnostics"
                    ]
                ],

                has_pvp_mechanics=
                    bool(
                        mechanic_rows
                    ),

                mechanics=[
                    _mechanic_row(row)
                    for row
                    in mechanic_rows
                ],

                render_effect_count=
                    len(
                        render_rows
                    ),
            )
        )


    return SpecCatalog(
        class_name=
            audit.class_name,

        spec_name=
            audit.spec_name,

        tree_build=
            audit.tree_build,

        simc_build=
            audit.simc_build,

        drustvar_builds=
            list(
                audit.drustvar_builds
            ),

        talents=
            records,

        abilities=
            [],

        fetch_errors=
            fetch_errors,
    )
