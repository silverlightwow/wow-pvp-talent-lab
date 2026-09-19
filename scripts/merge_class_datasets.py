from __future__ import annotations

import argparse
from datetime import datetime, timezone
import json
from pathlib import Path
import shutil


def load_class_manifests(
    artifacts_root: Path,
) -> list[tuple[Path, dict]]:
    results = []

    for manifest_path in sorted(
        artifacts_root.glob(
            "**/manifest.json"
        )
    ):
        payload = json.loads(
            manifest_path.read_text(
                encoding="utf-8"
            )
        )

        if not payload.get("classes"):
            continue

        results.append(
            (
                manifest_path.parent,
                payload,
            )
        )

    if not results:
        raise RuntimeError(
            "No class dataset manifests found"
        )

    return results


def merge(
    *,
    artifacts_root: Path,
    output_dir: Path,
) -> dict:
    manifests = load_class_manifests(
        artifacts_root
    )

    builds = {
        payload.get("tree_build")
        for _, payload in manifests
    }

    if len(builds) != 1:
        raise RuntimeError(
            "Class artifacts were built from "
            f"different Raidbots builds: {sorted(builds)}"
        )

    content_hashes = {
        payload.get("content_hash")
        for _, payload in manifests
        if payload.get("content_hash")
    }

    if len(content_hashes) > 1:
        raise RuntimeError(
            "Class artifacts were built from "
            "different Raidbots content hashes"
        )

    classes = []
    seen_slugs = set()

    output_dir.mkdir(
        parents=True,
        exist_ok=True,
    )

    # Remove generated spec datasets from the prior snapshot only after
    # every class artifact has passed the build-consistency checks above.
    for path in output_dir.iterdir():
        if (
            path.is_file()
            and path.suffix in {".json", ".js"}
            and path.name
            not in {
                "manifest.json",
                "manifest.js",
            }
        ):
            path.unlink()

    for class_dir, payload in manifests:
        for class_item in payload["classes"]:
            classes.append(class_item)

            for spec in class_item["specs"]:
                slug = spec["slug"]

                if slug in seen_slugs:
                    raise RuntimeError(
                        f"Duplicate specialization slug: {slug}"
                    )

                seen_slugs.add(slug)

                for suffix in (
                    ".json",
                    ".js",
                ):
                    source = (
                        class_dir
                        / f"{slug}{suffix}"
                    )

                    if not source.exists():
                        raise RuntimeError(
                            f"Missing class artifact: {source}"
                        )

                    shutil.copy2(
                        source,
                        output_dir
                        / source.name,
                    )

    classes.sort(
        key=lambda item:
            item["name"]
    )

    for class_item in classes:
        class_item["specs"].sort(
            key=lambda item:
                item["name"]
        )

    spec_count = sum(
        len(
            class_item["specs"]
        )
        for class_item in classes
    )

    if spec_count < 40:
        raise RuntimeError(
            f"Expected at least 40 specs, got {spec_count}"
        )

    default_slug = (
        "priest-discipline"
        if "priest-discipline"
        in seen_slugs
        else next(
            iter(
                sorted(
                    seen_slugs
                )
            )
        )
    )

    manifest = {
        "generated_at":
            datetime.now(timezone.utc)
            .isoformat(),

        "tree_build":
            next(iter(builds)),

        "content_hash":
            (
                next(
                    iter(content_hashes)
                )
                if content_hashes
                else None
            ),

        "default_slug":
            default_slug,

        "spec_count":
            spec_count,

        "verified_count":
            sum(
                spec.get(
                    "verification_status"
                ) == "VERIFIED"
                for class_item in classes
                for spec in class_item["specs"]
            ),

        "partial_count":
            sum(
                spec.get(
                    "verification_status"
                ) == "PARTIAL"
                for class_item in classes
                for spec in class_item["specs"]
            ),

        "classes":
            classes,
    }

    manifest_text = json.dumps(
        manifest,
        ensure_ascii=False,
        indent=2,
    )

    (
        output_dir
        / "manifest.json"
    ).write_text(
        manifest_text + "\n",
        encoding="utf-8",
    )

    (
        output_dir
        / "manifest.js"
    ).write_text(
        "window.WOW_PVP_MANIFEST = "
        + manifest_text
        + ";\n",
        encoding="utf-8",
    )

    return manifest


def main() -> None:
    parser = argparse.ArgumentParser(
        description=(
            "Merge isolated per-class PvP dataset artifacts "
            "into one production web/data snapshot"
        )
    )

    parser.add_argument(
        "--artifacts-root",
        type=Path,
        required=True,
    )

    parser.add_argument(
        "--output-dir",
        type=Path,
        default=Path("web/data"),
    )

    args = parser.parse_args()

    manifest = merge(
        artifacts_root=
            args.artifacts_root,
        output_dir=
            args.output_dir,
    )

    print(
        json.dumps(
            {
                "tree_build":
                    manifest[
                        "tree_build"
                    ],
                "spec_count":
                    manifest[
                        "spec_count"
                    ],
                "verified_count":
                    manifest[
                        "verified_count"
                    ],
                "partial_count":
                    manifest[
                        "partial_count"
                    ],
            },
            indent=2,
        )
    )


if __name__ == "__main__":
    main()
