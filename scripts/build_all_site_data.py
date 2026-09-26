from __future__ import annotations

import argparse
import asyncio
from datetime import datetime, timezone
import json
import os
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile

from pvpcalc import catalog, pipeline
from pvpcalc.http import CachedClient
from pvpcalc.sources import raidbots, blizzard_hotfixes, wowhead

from build_site_data import _json_default


def slugify(class_name: str, spec_name: str) -> str:
    return (
        f"{class_name}-{spec_name}"
        .strip()
        .lower()
        .replace(" ", "-")
    )


def _validate_for_all(audit, spec_catalog) -> dict:
    """Check structural invariants and classify source/render coverage.

    Only VERIFIED results may be written by build_one. Provenance warnings
    remain in the dataset but do not weaken the current-value checks.
    """

    talents = spec_catalog.talents
    abilities = list(
        getattr(
            spec_catalog,
            "abilities",
            [],
        )
        or []
    )
    player_records = [
        *talents,
        *abilities,
    ]

    if len(talents) < 50:
        raise RuntimeError(
            f"Implausibly small talent catalog: {len(talents)}"
        )

    if audit.tree_build != audit.simc_build:
        raise RuntimeError(
            "Raidbots/SimC build mismatch: "
            f"{audit.tree_build} != {audit.simc_build}"
        )

    entry_ids = [
        talent.entry_id
        for talent in talents
        if talent.entry_id is not None
    ]

    if len(entry_ids) != len(set(entry_ids)):
        raise RuntimeError(
            "Duplicate Raidbots entry IDs in generated catalog"
        )

    if any(not talent.tree_data for talent in talents):
        raise RuntimeError(
            "At least one talent is missing tree topology data"
        )

    fetch_errors = (
        list(audit.fetch_errors)
        + list(spec_catalog.fetch_errors)
    )

    unsafe = [
        (
            talent.talent_name,
            talent.spell_id,
            talent.render_status,
        )
        for talent in player_records
        if talent.render_status
        in {
            "REVIEW_REQUIRED",
            "MISSING_TOOLTIP",
        }
    ]

    all_unresolved = list(
        audit.unresolved_rows
    )

    # A current modifier known from one concrete source is usable
    # coverage; lacking independent corroboration is a provenance
    # warning, not an unknown PvP value. Keep genuinely unmatched
    # Drustvar/identity rows blocking.
    provenance_warnings = [
        item
        for item in all_unresolved
        if item.get("reason")
        in {
            "WOWHEAD_ONLY_MODIFIER",
                "SUPERSEDED_DRUSTVAR_EFFECT",
        }
    ]

    unresolved = [
        item
        for item in all_unresolved
        if item not in provenance_warnings
    ]

    # A failed auxiliary source fetch is not itself a coverage
    # failure when the exact-build pipeline already resolved the
    # spell and a player-facing tooltip is available from fallback.
    # Keep those failures visible as source warnings, but reserve
    # PARTIAL for errors that coincide with an actual unresolved or
    # unsafe player-facing state.
    coverage_spell_ids = {
        int(item["spell_id"])
        for item in unresolved
        if item.get("spell_id") is not None
    }

    coverage_spell_ids.update(
        int(spell_id)
        for _, spell_id, _
        in unsafe
        if spell_id is not None
    )

    blocking_fetch_errors = [
        item
        for item in fetch_errors
        if (
            item.get("spell_id") is None
            or int(item["spell_id"])
            in coverage_spell_ids
        )
    ]

    source_warnings = [
        *[
            item
            for item in fetch_errors
            if item not in blocking_fetch_errors
        ],
        *provenance_warnings,
    ]

    clean = (
        not blocking_fetch_errors
        and not unresolved
        and not unsafe
    )

    return {
        "talents":
            len(talents),

        "abilities":
            len(abilities),

        "changed_tooltips":
            sum(
                record.tooltip_changed
                for record in player_records
            ),

        "talents_with_pvp_mechanics":
            sum(
                record.has_pvp_mechanics
                for record in player_records
            ),

        "unique_nodes":
            len(
                {
                    talent.node_id
                    for talent in talents
                }
            ),

        "tree_build":
            audit.tree_build,

        "simc_build":
            audit.simc_build,

        "drustvar_builds":
            list(audit.drustvar_builds),

        "verification_status":
            (
                "VERIFIED"
                if clean
                else "PARTIAL"
            ),

        "fetch_error_count":
            len(blocking_fetch_errors),

        "source_warning_count":
            len(source_warnings),

        "unresolved_count":
            len(unresolved),

        "review_required_count":
            len(unsafe),

        "fetch_error_examples":
            blocking_fetch_errors[:5],

        "source_warning_examples":
            source_warnings[:5],

        "unresolved_examples":
            unresolved[:5],

        "review_required_examples":
            [
                {
                    "talent_name": name,
                    "spell_id": spell_id,
                    "status": status,
                }
                for name, spell_id, status
                in unsafe[:5]
            ],
    }



def _load_historical_hotfix_baselines(
    *,
    slug: str,
    hotfixes,
) -> dict:
    """Load the last verified dataset from before each official hotfix day.

    CI checks out full git history. This lets relative Blizzard notes be
    validated against a real pre-hotfix snapshot even when the current DBC
    stores a compounded PvP coefficient rather than a standalone x1.20 rule.
    Outside a git checkout this safely returns an empty mapping.
    """
    dates = sorted(
        {
            item.hotfix_date
            for item in hotfixes
            if (
                item.hotfix_date is not None
                and (
                    item.mode.startswith(
                        "relative_"
                    )
                    or item.mode.startswith(
                        "spec_relative_"
                    )
                )
            )
        }
    )
    if not dates:
        return {}

    path = f"web/data/{slug}.json"
    result = {}

    for hotfix_date in dates:
        before = (
            hotfix_date.isoformat()
            + "T00:00:00Z"
        )
        try:
            proc = subprocess.run(
                [
                    "git",
                    "rev-list",
                    "-1",
                    f"--before={before}",
                    "HEAD",
                    "--",
                    path,
                ],
                check=True,
                capture_output=True,
                text=True,
            )
            commit = proc.stdout.strip()
            if not commit:
                continue

            payload_proc = subprocess.run(
                [
                    "git",
                    "show",
                    f"{commit}:{path}",
                ],
                check=True,
                capture_output=True,
                text=True,
            )
            payload = json.loads(
                payload_proc.stdout
            )
        except (
            OSError,
            subprocess.CalledProcessError,
            json.JSONDecodeError,
        ):
            continue

        by_spell = {}
        by_name = {}
        for talent in payload.get(
            "talents",
            []
        ):
            spell_id = talent.get(
                "spell_id"
            )
            if spell_id is not None:
                by_spell[
                    str(int(spell_id))
                ] = talent
            name = (
                str(
                    talent.get(
                        "talent_name",
                        "",
                    )
                )
                .strip()
                .casefold()
            )
            if name:
                by_name[name] = talent

        result[
            hotfix_date.isoformat()
        ] = {
            "commit": commit,
            "by_spell": by_spell,
            "by_name": by_name,
        }

    return result


async def discover_specs() -> tuple[dict, list[dict]]:
    client = CachedClient(concurrency=4)

    try:
        metadata, talents = await raidbots.fetch_live_snapshot(
            client
        )
    finally:
        await client.aclose()

    return (
        metadata,
        raidbots.discover_specs(talents),
    )


async def build_one(
    *,
    class_name: str,
    spec_name: str,
    output_dir: Path,
    concurrency: int,
) -> dict:
    audit = await pipeline.audit_spec(
        class_name,
        spec_name,
        concurrency=concurrency,
        include_wiki=False,
    )

    # Third-party DBC mirrors can legitimately lag server-side Blizzard
    # hotfixes while keeping the same client build number. Reconcile the
    # current official PvP hotfix feed before declaring this spec VERIFIED.
    hotfix_snapshot_path = os.environ.get(
        "WOW_PVP_HOTFIX_FILE"
    )

    if hotfix_snapshot_path:
        (
            official_hotfixes,
            hotfix_snapshot,
        ) = (
            blizzard_hotfixes
            .read_hotfix_snapshot(
                hotfix_snapshot_path
            )
        )
    else:
        hotfix_client = CachedClient(
            concurrency=2
        )

        try:
            official_hotfixes = (
                await blizzard_hotfixes
                .fetch_official_pvp_hotfixes(
                    hotfix_client
                )
            )
        finally:
            await hotfix_client.aclose()

        hotfix_snapshot = (
            blizzard_hotfixes
            .snapshot_for_hotfixes(
                official_hotfixes
            )
        )

    # A class/spec-scoped hotfix can target a baseline spellbook ability
    # with no talent node. Resolve those names against the same exact-build
    # SimC class dump used by the audit and promote the spell ID into the
    # standalone catalog. Global unscoped notes (items/trinkets/systems) are
    # deliberately not treated as abilities.
    tree_names = {
        blizzard_hotfixes._normalize_name(
            row.get(
                "talent_name",
                "",
            )
        )
        for row in audit.talents
    }
    simc_ids_by_name = {}
    for spell_id, spell_name in (
        getattr(
            audit,
            "simc_spell_names",
            {},
        )
        or {}
    ).items():
        simc_ids_by_name.setdefault(
            blizzard_hotfixes
            ._normalize_name(
                spell_name
            ),
            set(),
        ).add(
            int(spell_id)
        )

    class_id = next(
        (
            int(row["class_id"])
            for row in audit.talents
            if row.get("class_id") is not None
        ),
        None,
    )
    wowhead_class_index = None

    for hotfix in official_hotfixes:
        if not (
            blizzard_hotfixes
            ._hotfix_applies_to_catalog(
                hotfix,
                audit,
            )
        ):
            continue
        if not (
            blizzard_hotfixes
            ._hotfix_has_explicit_class_or_spec_scope(
                hotfix
            )
        ):
            continue
        if hotfix.mode.startswith(
            "spec_relative_"
        ):
            continue

        lookup_names = (
            blizzard_hotfixes
            ._relative_name_candidates(
                hotfix.talent_name
            )
            if hotfix.mode.startswith(
                "relative_"
            )
            else (
                blizzard_hotfixes
                ._normalize_name(
                    hotfix.talent_name
                ),
            )
        )

        if any(
            name in tree_names
            for name in lookup_names
        ):
            continue

        candidate_ids = {
            spell_id
            for name in lookup_names
            for spell_id in (
                simc_ids_by_name.get(
                    name,
                    set(),
                )
            )
        }

        if len(candidate_ids) == 1:
            audit.standalone_spell_ids.add(
                candidate_ids.pop()
            )
            continue

        # Relative notes often describe a triggered child of an existing
        # selectable talent. Let the established dependency/embedded-parent
        # resolver prove those rather than promoting an implementation spell.
        if hotfix.mode.startswith(
            "relative_"
        ):
            continue

        # Some real player-facing records (especially PvP talents) are absent
        # from SimC's class SpellDataDump. Fall back to Wowhead's *class*
        # catalog, which lists ordinary abilities and PvP talents with stable
        # spell links. This is exact-name identity resolution, never fuzzy.
        if class_id is not None:
            if wowhead_class_index is None:
                identity_client = CachedClient(
                    concurrency=1
                )
                try:
                    raw_index = (
                        await wowhead
                        .fetch_class_spell_index(
                            identity_client,
                            class_id=class_id,
                            class_name=class_name,
                        )
                    )
                finally:
                    await identity_client.aclose()

                wowhead_class_index = {}
                for raw_name, spell_ids in (
                    raw_index.items()
                ):
                    wowhead_class_index.setdefault(
                        blizzard_hotfixes
                        ._normalize_name(
                            raw_name
                        ),
                        set(),
                    ).update(
                        int(value)
                        for value in spell_ids
                    )

            class_candidate_ids = set()
            for name in lookup_names:
                class_candidate_ids.update(
                    wowhead_class_index.get(
                        name,
                        set(),
                    )
                )

            if len(class_candidate_ids) == 1:
                audit.standalone_spell_ids.add(
                    class_candidate_ids.pop()
                )
                continue

        # Multiple/zero candidates intentionally fall through. Never guess
        # among implementation variants; the official-hotfix application
        # below must either prove a parent mapping or fail VERIFIED publication
        # closed.

    spec_catalog = await catalog.build_spec_catalog(
        audit,
        concurrency=concurrency,
    )

    slug = slugify(
        class_name,
        spec_name,
    )
    hotfix_baselines = (
        _load_historical_hotfix_baselines(
            slug=slug,
            hotfixes=official_hotfixes,
        )
    )

    hotfix_report = (
        blizzard_hotfixes
        .apply_official_pvp_hotfixes(
            spec_catalog,
            official_hotfixes,
            historical_talents_by_date=
                hotfix_baselines,
        )
    )

    if (
        hotfix_report["snapshot_hash"]
        != hotfix_snapshot[
            "snapshot_hash"
        ]
    ):
        raise RuntimeError(
            "Official hotfix snapshot changed during build"
        )

    if hotfix_report["unresolved"]:
        raise RuntimeError(
            "Unresolved official PvP hotfixes: "
            + json.dumps(
                hotfix_report["unresolved"],
                default=_json_default,
            )
        )

    summary = _validate_for_all(
        audit,
        spec_catalog,
    )

    if summary["verification_status"] != "VERIFIED":
        raise RuntimeError("Incomplete specialization: " + json.dumps(summary, default=_json_default))

    payload = spec_catalog.to_dict()
    payload["serialization"] = audit.metadata.get("serialization")
    payload["source_warnings"] = [
        item for item in audit.unresolved_rows
        if item.get("reason") in {"WOWHEAD_ONLY_MODIFIER", "SUPERSEDED_DRUSTVAR_EFFECT"}
    ]
    payload["official_hotfixes"] = hotfix_report

    payload["slug"] = slug
    payload["generated_at"] = (
        datetime.now(timezone.utc)
        .isoformat()
    )
    payload["validation"] = summary

    json_text = json.dumps(
        payload,
        ensure_ascii=False,
        indent=2,
        default=_json_default,
    )

    output_dir.mkdir(
        parents=True,
        exist_ok=True,
    )

    (output_dir / f"{slug}.json").write_text(
        json_text + "\n",
        encoding="utf-8",
    )

    (output_dir / f"{slug}.js").write_text(
        "window.WOW_PVP_DATA = "
        + json_text
        + ";\n",
        encoding="utf-8",
    )

    return {
        "class_name": class_name,
        "spec_name": spec_name,
        "slug": slug,
        "hotfix_snapshot_hash":
            hotfix_report[
                "snapshot_hash"
            ],
        "hotfix_latest_date":
            hotfix_report[
                "latest_date"
            ],
        **summary,
    }


def build_manifest(
    *,
    metadata: dict,
    specs: list[dict],
    built: list[dict],
) -> dict:
    by_slug = {
        item["slug"]: item
        for item in built
    }

    classes = []

    class_names = []
    for item in specs:
        if item["class_name"] not in class_names:
            class_names.append(
                item["class_name"]
            )

    for class_name in class_names:
        class_specs = [
            item
            for item in specs
            if item["class_name"] == class_name
        ]

        entries = []

        for item in class_specs:
            slug = slugify(
                class_name,
                item["spec_name"],
            )

            if slug not in by_slug:
                continue

            built_item = by_slug[slug]

            entries.append(
                {
                    "name":
                        item["spec_name"],
                    "spec_id":
                        item.get("spec_id"),
                    "slug":
                        slug,
                    "changed_tooltips":
                        built_item[
                            "changed_tooltips"
                        ],
                    "talents_with_pvp_mechanics":
                        built_item[
                            "talents_with_pvp_mechanics"
                        ],

                    "verification_status":
                        built_item[
                            "verification_status"
                        ],

                    "fetch_error_count":
                        built_item[
                            "fetch_error_count"
                        ],

                    "source_warning_count":
                        built_item.get(
                            "source_warning_count",
                            0,
                        ),

                    "unresolved_count":
                        built_item[
                            "unresolved_count"
                        ],

                    "review_required_count":
                        built_item[
                            "review_required_count"
                        ],
                }
            )

        if not entries:
            continue

        classes.append(
            {
                "name": class_name,
                "class_id":
                    class_specs[0].get(
                        "class_id"
                    ),
                "specs": entries,
            }
        )

    default_slug = (
        "priest-discipline"
        if "priest-discipline"
        in by_slug
        else built[0]["slug"]
    )

    hotfix_hashes = {
        item.get(
            "hotfix_snapshot_hash"
        )
        for item in built
    }
    hotfix_dates = {
        item.get(
            "hotfix_latest_date"
        )
        for item in built
    }

    if len(hotfix_hashes) != 1:
        raise RuntimeError(
            "Specs used different official hotfix snapshots"
        )

    if len(hotfix_dates) != 1:
        raise RuntimeError(
            "Specs used different official hotfix dates"
        )

    return {
        "generated_at":
            datetime.now(timezone.utc)
            .isoformat(),
        "tree_build":
            metadata.get("wowBuild"),
        "content_hash":
            metadata.get("contentHash"),
        "hotfix_snapshot_hash":
            hotfix_hashes.pop(),
        "hotfix_latest_date":
            hotfix_dates.pop(),
        "default_slug":
            default_slug,
        "spec_count":
            len(built),
        "classes":
            classes,
    }


async def build_all(args) -> dict:
    metadata, specs = await discover_specs()

    class_filter = {
        value.casefold()
        for value in args.class_name
        if value.strip()
    }

    spec_filter = {
        value.casefold()
        for value in args.spec_name
        if value.strip()
    }

    if class_filter:
        specs = [
            item
            for item in specs
            if item["class_name"]
            .casefold()
            in class_filter
        ]

    if spec_filter:
        specs = [
            item
            for item in specs
            if item["spec_name"]
            .casefold()
            in spec_filter
        ]

    if not specs:
        raise RuntimeError(
            "No current Raidbots specs matched filters"
        )

    # Build in a temporary sibling directory. The public dataset
    # directory is replaced only after every requested spec passes
    # the same strict validation gate.
    args.output_dir.parent.mkdir(
        parents=True,
        exist_ok=True,
    )

    temp_root = Path(
        tempfile.mkdtemp(
            prefix="wow-pvp-data-",
            dir=args.output_dir.parent,
        )
    )

    built = []

    try:
        for index, item in enumerate(
            specs,
            start=1,
        ):
            print(
                f"[{index}/{len(specs)}] "
                f"{item['class_name']} / "
                f"{item['spec_name']}",
                flush=True,
            )

            built.append(
                await build_one(
                    class_name=
                        item["class_name"],
                    spec_name=
                        item["spec_name"],
                    output_dir=temp_root,
                    concurrency=
                        args.concurrency,
                )
            )

        manifest = build_manifest(
            metadata=metadata,
            specs=specs,
            built=built,
        )

        manifest_text = json.dumps(
            manifest,
            ensure_ascii=False,
            indent=2,
        )

        (
            temp_root
            / "manifest.json"
        ).write_text(
            manifest_text + "\n",
            encoding="utf-8",
        )

        (
            temp_root
            / "manifest.js"
        ).write_text(
            "window.WOW_PVP_MANIFEST = "
            + manifest_text
            + ";\n",
            encoding="utf-8",
        )

        # Preserve unrelated files if the directory ever gains any.
        args.output_dir.mkdir(
            parents=True,
            exist_ok=True,
        )

        generated_names = {
            path.name
            for path in temp_root.iterdir()
        }

        for path in args.output_dir.iterdir():
            if (
                path.is_file()
                and (
                    path.suffix in {".json", ".js"}
                    or path.name.startswith(
                        "manifest."
                    )
                )
                and path.name
                not in generated_names
            ):
                path.unlink()

        for source in temp_root.iterdir():
            shutil.copy2(
                source,
                args.output_dir
                / source.name,
            )

    finally:
        shutil.rmtree(
            temp_root,
            ignore_errors=True,
        )

    return {
        "tree_build":
            metadata.get("wowBuild"),

        "spec_count":
            len(built),

        "verified_count":
            sum(
                item[
                    "verification_status"
                ] == "VERIFIED"
                for item in built
            ),

        "partial_count":
            sum(
                item[
                    "verification_status"
                ] == "PARTIAL"
                for item in built
            ),

        "built":
            built,
    }


def main() -> None:
    parser = argparse.ArgumentParser(
        description=(
            "Build strictly verified web datasets "
            "for every current WoW specialization"
        )
    )

    parser.add_argument(
        "--class-name",
        action="append",
        default=[],
        help="Optional class filter; repeat as needed.",
    )

    parser.add_argument(
        "--spec-name",
        action="append",
        default=[],
        help="Optional spec filter; repeat as needed.",
    )

    parser.add_argument(
        "--output-dir",
        type=Path,
        default=Path("web/data"),
    )

    parser.add_argument(
        "--concurrency",
        type=int,
        default=6,
    )

    args = parser.parse_args()

    try:
        report = asyncio.run(
            build_all(args)
        )
    except Exception as exc:
        print(
            "ALL-DATASET BUILD FAILED: "
            f"{type(exc).__name__}: {exc}",
            file=sys.stderr,
        )
        raise

    print(
        json.dumps(
            report,
            ensure_ascii=False,
            indent=2,
        )
    )


if __name__ == "__main__":
    main()
