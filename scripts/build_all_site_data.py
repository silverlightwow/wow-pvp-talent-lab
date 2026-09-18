from __future__ import annotations

import argparse
import asyncio
from datetime import datetime, timezone
import json
from pathlib import Path
import shutil
import sys
import tempfile

from pvpcalc import catalog, pipeline
from pvpcalc.http import CachedClient
from pvpcalc.sources import raidbots

from build_site_data import _json_default, _validate


def slugify(class_name: str, spec_name: str) -> str:
    return (
        f"{class_name}-{spec_name}"
        .strip()
        .lower()
        .replace(" ", "-")
    )


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

    summary = _validate(
        audit,
        spec_catalog,
    )

    payload = spec_catalog.to_dict()

    slug = slugify(
        class_name,
        spec_name,
    )

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

    return {
        "generated_at":
            datetime.now(timezone.utc)
            .isoformat(),
        "tree_build":
            metadata.get("wowBuild"),
        "content_hash":
            metadata.get("contentHash"),
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
