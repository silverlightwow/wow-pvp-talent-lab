from __future__ import annotations

import argparse
import asyncio
from dataclasses import asdict
import json
from pathlib import Path
import sys

from pvpcalc import catalog, pipeline
from pvpcalc.http import CachedClient
from pvpcalc.sources import raidbots


BLOCKING_RENDER_STATUSES = {
    "REVIEW_REQUIRED",
    "MISSING_TOOLTIP",
}


async def discover() -> tuple[dict, list[dict]]:
    client = CachedClient(concurrency=4)

    try:
        metadata, talents = await raidbots.fetch_live_snapshot(
            client
        )
    finally:
        await client.aclose()

    return metadata, raidbots.discover_specs(
        talents
    )


async def audit_one(
    item: dict,
    *,
    concurrency: int,
) -> dict:
    class_name = item["class_name"]
    spec_name = item["spec_name"]

    result = {
        **item,
        "ok": False,
    }

    try:
        audit = await pipeline.audit_spec(
            class_name,
            spec_name,
            concurrency=concurrency,
            include_wiki=False,
            # This command is an exploratory compatibility audit.
            # Production publishing remains exact-build only.
            require_exact_simc_build=False,
        )

        spec_catalog = await catalog.build_spec_catalog(
            audit,
            concurrency=concurrency,
        )

        unsafe = [
            {
                "talent_name": talent.talent_name,
                "spell_id": talent.spell_id,
                "node_id": talent.node_id,
                "status": talent.render_status,
                "pve_tooltip": talent.pve_tooltip,
                "pvp_tooltip": talent.pvp_tooltip,
                "diagnostics": talent.diagnostics,
                "mechanics": talent.mechanics,
                "render_rows": [
                    {
                        "source_spell_id":
                            row.get(
                                "source_spell_id",
                                row.get("spell_id"),
                            ),
                        "effect_index":
                            row.get("effect_index"),
                        "effect_text":
                            row.get("effect_text"),
                        "base_value":
                            row.get("base_value"),
                        "pvp_multiplier":
                            row.get("pvp_multiplier"),
                        "final_pvp_multiplier":
                            row.get(
                                "final_pvp_multiplier"
                            ),
                        "semantic_unit_hint":
                            row.get(
                                "semantic_unit_hint"
                            ),
                        "simc_reference_contexts":
                            row.get(
                                "simc_reference_contexts",
                                [],
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
                    }
                    for row in audit.render_effect_rows
                    if int(
                        row.get(
                            "talent_spell_id",
                            row.get("spell_id"),
                        )
                    )
                    == int(talent.spell_id)
                ],
                "wowhead_effects": [
                    {
                        "effect_index": effect.effect_index,
                        "effect_text": effect.effect_text,
                        "base_value": effect.base_value,
                        "pvp_multiplier": effect.pvp_multiplier,
                        "raw": effect.raw,
                    }
                    for effect in audit.wowhead_by_spell.get(
                        talent.spell_id,
                        [],
                    )
                ],
            }
            for talent in spec_catalog.talents
            if talent.render_status
            in BLOCKING_RENDER_STATUSES
        ]

        all_unresolved = list(
            audit.unresolved_rows
        )

        provenance_warnings = [
            item
            for item in all_unresolved
            if item.get("reason")
            in {
                "WOWHEAD_ONLY_MODIFIER",
                "SUPERSEDED_DRUSTVAR_EFFECT",
            }
        ]

        blocking_unresolved = [
            item
            for item in all_unresolved
            if item not in provenance_warnings
        ]

        unresolved_spell_ids = {
            int(item["spell_id"])
            for item in blocking_unresolved
            if item.get("spell_id") is not None
        }

        unsafe_spell_ids = {
            int(item["spell_id"])
            for item in unsafe
            if item.get("spell_id") is not None
        }

        coverage_spell_ids = (
            unresolved_spell_ids
            | unsafe_spell_ids
        )

        all_fetch_errors = (
            list(audit.fetch_errors)
            + list(spec_catalog.fetch_errors)
        )

        blocking_fetch_errors = [
            item
            for item in all_fetch_errors
            if (
                item.get("spell_id") is None
                or int(item["spell_id"])
                in coverage_spell_ids
            )
        ]

        source_warnings = [
            *[
                item
                for item in all_fetch_errors
                if item not in blocking_fetch_errors
            ],
            *provenance_warnings,
        ]

        result.update(
            {
                "talents": len(
                    spec_catalog.talents
                ),
                "unique_nodes": len(
                    {
                        talent.node_id
                        for talent
                        in spec_catalog.talents
                    }
                ),
                "changed_tooltips": sum(
                    talent.tooltip_changed
                    for talent
                    in spec_catalog.talents
                ),
                "talents_with_pvp_mechanics": sum(
                    talent.has_pvp_mechanics
                    for talent
                    in spec_catalog.talents
                ),
                "raidbots_build":
                    audit.tree_build,
                "simc_build":
                    audit.simc_build,
                "build_mismatch":
                    audit.tree_build
                    != audit.simc_build,
                "drustvar_builds":
                    list(
                        audit.drustvar_builds
                    ),
                "fetch_error_count":
                    len(
                        blocking_fetch_errors
                    ),
                "fetch_errors":
                    blocking_fetch_errors[:20],
                "source_warning_count":
                    len(
                        source_warnings
                    ),
                "source_warnings":
                    source_warnings[:20],
                "unresolved_count":
                    len(
                        blocking_unresolved
                    ),
                "unresolved":
                    blocking_unresolved[:20],
                "unsafe_render_count":
                    len(unsafe),
                "unsafe_render":
                    unsafe[:20],
            }
        )

        result["ok"] = (
            result["fetch_error_count"]
            == 0
            and result["unresolved_count"]
            == 0
            and result["unsafe_render_count"]
            == 0
        )

    except Exception as exc:
        result["error"] = (
            f"{type(exc).__name__}: {exc}"
        )

    return result


async def run(args) -> dict:
    metadata, specs = await discover()

    wanted_classes = {
        name.casefold()
        for name
        in args.class_name
    }

    if wanted_classes:
        specs = [
            item
            for item in specs
            if item["class_name"].casefold()
            in wanted_classes
        ]

    if args.spec_name:
        wanted_specs = {
            name.casefold()
            for name
            in args.spec_name
        }

        specs = [
            item
            for item in specs
            if item["spec_name"].casefold()
            in wanted_specs
        ]

    if not specs:
        raise RuntimeError(
            "No Raidbots specs matched the requested filters"
        )

    semaphore = asyncio.Semaphore(
        max(1, args.parallel_specs)
    )

    async def guarded(item):
        async with semaphore:
            print(
                f"AUDIT {item['class_name']} / "
                f"{item['spec_name']}",
                flush=True,
            )

            return await audit_one(
                item,
                concurrency=args.concurrency,
            )

    results = await asyncio.gather(
        *[
            guarded(item)
            for item in specs
        ]
    )

    results.sort(
        key=lambda item: (
            item["class_name"],
            item["spec_name"],
        )
    )

    return {
        "raidbots_build":
            metadata.get("wowBuild"),
        "content_hash":
            metadata.get("contentHash"),
        "spec_count":
            len(results),
        "clean_count":
            sum(
                item.get("ok", False)
                for item in results
            ),
        "results":
            results,
    }


def main() -> None:
    parser = argparse.ArgumentParser(
        description=(
            "Audit current PvP pipeline compatibility "
            "across Raidbots specializations"
        )
    )

    parser.add_argument(
        "--class-name",
        action="append",
        default=[],
        help=(
            "Class filter; repeat for multiple classes. "
            "Omit for all classes."
        ),
    )

    parser.add_argument(
        "--spec-name",
        action="append",
        default=[],
        help=(
            "Spec filter; repeat for multiple specs."
        ),
    )

    parser.add_argument(
        "--concurrency",
        type=int,
        default=5,
    )

    parser.add_argument(
        "--parallel-specs",
        type=int,
        default=2,
    )

    parser.add_argument(
        "--output",
        type=Path,
        default=None,
    )

    parser.add_argument(
        "--strict",
        action="store_true",
        help=(
            "Exit non-zero if any spec is not fully clean. "
            "Build mismatch alone is reported but is not a "
            "compatibility failure in exploratory mode."
        ),
    )

    args = parser.parse_args()

    report = asyncio.run(
        run(args)
    )

    text = json.dumps(
        report,
        ensure_ascii=False,
        indent=2,
    )

    print(text)

    if args.output is not None:
        args.output.parent.mkdir(
            parents=True,
            exist_ok=True,
        )
        args.output.write_text(
            text + "\n",
            encoding="utf-8",
        )

    if (
        args.strict
        and report["clean_count"]
        != report["spec_count"]
    ):
        sys.exit(2)


if __name__ == "__main__":
    main()
