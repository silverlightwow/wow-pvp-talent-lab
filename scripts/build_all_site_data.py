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
from pvpcalc.coverage import coverage_report, replay_projection, validate_audit_coverage, validate_coverage
from pvpcalc.snapshot import active_snapshot, source_provenance
from pvpcalc.sources import raidbots, blizzard_hotfixes

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
        for talent in [*talents, *spec_catalog.abilities]
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
        'abilities': len(spec_catalog.abilities),
        'abilities_with_pvp_mechanics': sum(t.has_pvp_mechanics for t in spec_catalog.abilities),
        "talents":
            len(talents),

        "changed_tooltips":
            sum(
                talent.tooltip_changed
                for talent in talents
            ),

        "talents_with_pvp_mechanics":
            sum(
                talent.has_pvp_mechanics
                for talent in talents
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

        # Keep the complete list until it has been written to the
        # dataset. A count plus five examples hides most failed pages
        # when Wowhead throttles a full matrix build.
        "source_warnings":
            source_warnings,

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
    latest_hotfix_date = max(item.hotfix_date for item in hotfixes if item.hotfix_date is not None)

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

        # Older tuning is an event, not an immutable final coefficient.
        # Preserve a proven post-event endpoint when later tuning changes
        # the same aura. Revalidate its numbers against the actual pre-event
        # git snapshot rather than trusting the old report's assertion.
        previous_path = Path(path)
        if previous_path.exists():
            previous = json.loads(previous_path.read_text())
            report = previous.get('official_hotfixes') or {}
            candidates = [r for r in report.get('already_current', [])
                if (r.get('evidence') or {}).get('source') in
                   {'historical_verified_snapshot', 'historically_verified_tuning'}
                and any(h.mode.startswith('spec_relative_') and h.hotfix_date == hotfix_date
                        and (r.get('date'), r.get('text')) == (hotfix_date.isoformat(), h.text)
                        for h in hotfixes)]
            for confirmed in candidates:
                evidence = confirmed['evidence']
                try:
                    anchor = evidence.get('verified_post_commit') or subprocess.run(
                        ['git', 'rev-list', '-1', 'HEAD', '--', path], check=True,
                        capture_output=True, text=True).stdout.strip()
                    if len(anchor) != 40 or any(c not in '0123456789abcdef' for c in anchor):
                        continue
                    endpoint = json.loads(subprocess.run(['git', 'show', f'{anchor}:{path}'],
                        check=True, capture_output=True, text=True).stdout)
                except (OSError, subprocess.CalledProcessError, json.JSONDecodeError):
                    continue
                endpoint_report = endpoint.get('official_hotfixes') or {}
                original_proof = any((r.get('date'), r.get('text')) ==
                    (hotfix_date.isoformat(), confirmed['text']) and
                    (r.get('evidence') or {}).get('source') == 'historical_verified_snapshot'
                    for r in endpoint_report.get('already_current', []))
                endpoint_hash = endpoint.get('coverage', {}).get('semantic_hash')
                if (original_proof and hotfix_date < latest_hotfix_date and not endpoint_report.get('unresolved') and
                        (endpoint_report.get('latest_date') or '') >= hotfix_date.isoformat() and
                        endpoint.get('validation', {}).get('verification_status') == 'VERIFIED' and
                        (not evidence.get('verified_post_content_hash') or
                         evidence['verified_post_content_hash'] == endpoint_hash)):
                    result[hotfix_date.isoformat()]['verified_post_by_spell'] = {
                        str(int(t['spell_id'])): t for t in endpoint.get('talents', [])
                        if t.get('spell_id') is not None}
                    result[hotfix_date.isoformat()]['verified_post_content_hash'] = endpoint_hash
                    result[hotfix_date.isoformat()]['verified_post_commit'] = anchor
                    break

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

    spec_catalog = await catalog.build_spec_catalog(
        audit,
        concurrency=concurrency,
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
                    hotfix_client,
                    previous_keys=blizzard_hotfixes.published_hotfix_keys(
                        "web/data"
                    ),
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

    # Resolve official PvP hotfix targets that are real player abilities
    # but have no selectable talent node. This is generic exact-name +
    # exact-build resolution; no spell-specific exceptions are maintained.
    non_tree_hotfix_report = (
        await catalog
        .attach_official_hotfix_abilities(
            audit,
            spec_catalog,
            official_hotfixes,
            concurrency=concurrency,
        )
    )

    if non_tree_hotfix_report[
        "unresolved"
    ]:
        raise RuntimeError(
            "Unresolved official non-tree PvP hotfixes: "
            + json.dumps(
                non_tree_hotfix_report[
                    "unresolved"
                ],
                default=_json_default,
            )
        )

    # A class/spec base spell with an official relative/property PvP change
    # must not silently disappear merely because its current DBC coefficient
    # is already normalized (or the historical value is unavailable).
    # Do not guess an old value or double-apply a relative change.
    unrepresented_base_hotfixes = catalog.unrepresented_nonabsolute_base_hotfixes(
        audit, spec_catalog, official_hotfixes
    )
    if unrepresented_base_hotfixes:
        raise RuntimeError(
            "Unrepresented exact-spellbook base PvP hotfixes: "
            + json.dumps(unrepresented_base_hotfixes, default=_json_default)
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
    # Preserve official directives that are outside the ordinary exact-build
    # class/spec spell dump (most notably dedicated PvP talents) for audit
    # visibility without letting them block verified base-ability updates.
    hotfix_report["external_non_tree"] = (
        non_tree_hotfix_report.get(
            "external",
            [],
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

    validate_audit_coverage(audit, spec_catalog)
    summary = _validate_for_all(
        audit,
        spec_catalog,
    )

    if summary["verification_status"] != "VERIFIED":
        raise RuntimeError("Incomplete specialization: " + json.dumps(summary, default=_json_default))

    payload = spec_catalog.to_dict()
    payload["serialization"] = audit.metadata.get("serialization")
    payload["source_warnings"] = summary.pop("source_warnings")
    payload["source_warnings_complete"] = True
    payload["official_hotfixes"] = hotfix_report
    payload["non_tree_hotfix_resolution"] = (
        non_tree_hotfix_report
    )
    payload['spellbook_inventory'] = audit.spellbook_inventory
    exposed_abilities = {t.spell_id for t in spec_catalog.abilities}
    if not set(audit.spellbook_inventory.get('pvp_spell_ids', [])).issubset(exposed_abilities):
        raise ValueError('Known baseline PvP abilities missing from the public catalog')

    payload["slug"] = slug
    payload["generated_at"] = (
        datetime.now(timezone.utc)
        .isoformat()
    )
    payload["validation"] = summary
    provenance = source_provenance(class_name)
    if provenance is not None:
        context = active_snapshot().manifest['context']
        if (context['tree_build'] != audit.tree_build
                or context['content_hash'] != audit.metadata['contentHash']
                or context['hotfix_snapshot_hash'] != hotfix_report['snapshot_hash']):
            raise ValueError('Source snapshot does not match tree/hotfix inputs')
        payload['source_snapshot'] = provenance
    payload['coverage'] = coverage_report(payload)
    previous_path = Path('web/data') / f'{slug}.json'
    previous = json.loads(previous_path.read_text()) if previous_path.exists() else None
    validate_coverage(payload, previous)

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
        "source_snapshot": provenance,
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
                    "replay_verified": built_item.get('replay_verified', False),
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
    source_hashes = {(item.get('source_snapshot') or {}).get('snapshot_hash') for item in built}
    if len(source_hashes) != 1:
        raise RuntimeError('Specs used different HTTP source snapshots')

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
        "source_snapshot_hash": source_hashes.pop(),
        "source_captured_at": min((item['source_snapshot']['captured_at'] for item in built
                                    if item.get('source_snapshot')), default=None),
        "default_slug":
            default_slug,
        "spec_count":
            len(built),
        "replay_verified_count": sum(item.get('replay_verified', False) for item in built),
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
            if args.verify_replay:
                if active_snapshot() is None:
                    raise ValueError('Deterministic replay requires a pinned HTTP snapshot')
                data_path = temp_root / (built[-1]['slug'] + '.json')
                first = replay_projection(json.loads(data_path.read_text()))
                await build_one(class_name=item['class_name'], spec_name=item['spec_name'],
                                output_dir=temp_root, concurrency=args.concurrency)
                if first != replay_projection(json.loads(data_path.read_text())):
                    raise ValueError(f"Non-deterministic specialization: {built[-1]['slug']}")
                replayed = json.loads(data_path.read_text())
                replayed['validation']['replay_verified'] = True
                built[-1]['replay_verified'] = True
                text = json.dumps(replayed, ensure_ascii=False, indent=2)
                data_path.write_text(text + '\n')
                data_path.with_suffix('.js').write_text('window.WOW_PVP_DATA = ' + text + ';\n')
                print('Offline replay matched all tooltips, ranks and mechanics.', flush=True)

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
    parser.add_argument('--verify-replay', action='store_true')

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
