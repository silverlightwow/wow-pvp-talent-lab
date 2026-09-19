from __future__ import annotations

import asyncio
from dataclasses import (
    dataclass,
    asdict,
)
from typing import Any

from .http import CachedClient
from .sources import wowhead
from . import tooltip_renderer


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


@dataclass
class SpecCatalog:
    class_name: str
    spec_name: str

    tree_build: str | None
    simc_build: str | None
    drustvar_builds: list[str]

    talents: list[TalentRecord]

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
            page.player_tooltip
            if page is not None
            else ""
        )


        render_rows = (
            render_by_talent.get(
                spell_id,
                [],
            )
        )


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

                context_rows=
                    context_by_talent.get(
                        spell_id,
                        [],
                    ),
            )
        )


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
                    dict(talent),

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
                            pve_tooltip,

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

        fetch_errors=
            fetch_errors,
    )
