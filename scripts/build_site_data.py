from __future__ import annotations

import argparse
import asyncio
from datetime import datetime, timezone
import json
from pathlib import Path
import sys

from pvpcalc import pipeline
from pvpcalc import catalog


def _json_default(value):
    if isinstance(value, set):
        return sorted(value)
    if isinstance(value, tuple):
        return list(value)
    raise TypeError(f"Not JSON serializable: {type(value)!r}")


def _validate(audit, spec_catalog) -> dict:
    talents = spec_catalog.talents

    if len(talents) < 50:
        raise RuntimeError(f"Implausibly small talent catalog: {len(talents)}")

    if audit.tree_build != audit.simc_build:
        raise RuntimeError(
            f"Raidbots/SimC build mismatch: {audit.tree_build} != {audit.simc_build}"
        )

    if audit.fetch_errors:
        raise RuntimeError(f"Pipeline fetch errors: {audit.fetch_errors[:5]}")

    if spec_catalog.fetch_errors:
        raise RuntimeError(f"Tooltip fetch errors: {spec_catalog.fetch_errors[:5]}")

    if audit.unresolved_rows:
        raise RuntimeError(f"Unresolved PvP effects: {audit.unresolved_rows[:5]}")

    bad_status = [
        (t.talent_name, t.spell_id, t.render_status)
        for t in talents
        if t.render_status in {"REVIEW_REQUIRED", "MISSING_TOOLTIP"}
    ]
    if bad_status:
        raise RuntimeError(f"Unsafe tooltip render state: {bad_status[:10]}")

    entry_ids = [t.entry_id for t in talents if t.entry_id is not None]
    if len(entry_ids) != len(set(entry_ids)):
        raise RuntimeError("Duplicate Raidbots entry IDs in generated catalog")

    if any(not t.tree_data for t in talents):
        raise RuntimeError("At least one talent is missing tree topology data")

    return {
        "talents": len(talents),
        "changed_tooltips": sum(t.tooltip_changed for t in talents),
        "talents_with_pvp_mechanics": sum(t.has_pvp_mechanics for t in talents),
        "unique_nodes": len({t.node_id for t in talents}),
        "tree_build": audit.tree_build,
        "simc_build": audit.simc_build,
        "drustvar_builds": list(audit.drustvar_builds),
    }


async def build(*, class_name: str, spec_name: str, output_dir: Path, concurrency: int) -> None:
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

    summary = _validate(audit, spec_catalog)

    payload = spec_catalog.to_dict()
    payload["generated_at"] = datetime.now(timezone.utc).isoformat()
    payload["validation"] = summary

    slug = f"{class_name}-{spec_name}".lower().replace(" ", "-")
    output_dir.mkdir(parents=True, exist_ok=True)

    json_text = json.dumps(
        payload,
        ensure_ascii=False,
        indent=2,
        default=_json_default,
    )

    json_path = output_dir / f"{slug}.json"
    js_path = output_dir / f"{slug}.js"

    json_tmp = json_path.with_suffix(".json.tmp")
    js_tmp = js_path.with_suffix(".js.tmp")

    json_tmp.write_text(json_text + "\n", encoding="utf-8")
    js_tmp.write_text("window.WOW_PVP_DATA = " + json_text + ";\n", encoding="utf-8")

    json_tmp.replace(json_path)
    js_tmp.replace(js_path)

    print(json.dumps(summary, indent=2))
    print(f"Wrote {json_path}")
    print(f"Wrote {js_path}")


def main() -> None:
    parser = argparse.ArgumentParser(description="Build verified web data for WoW PvP Talent Lab")
    parser.add_argument("--class-name", default="Priest")
    parser.add_argument("--spec-name", default="Discipline")
    parser.add_argument("--output-dir", type=Path, default=Path("web/data"))
    parser.add_argument("--concurrency", type=int, default=6)
    parser.add_argument(
        "--allow-existing-on-build-lag",
        action="store_true",
        help=(
            "If Raidbots and SimC temporarily expose different "
            "live builds, keep the already committed verified "
            "dataset instead of publishing mixed-build data."
        ),
    )
    args = parser.parse_args()

    try:
        asyncio.run(
            build(
                class_name=args.class_name,
                spec_name=args.spec_name,
                output_dir=args.output_dir,
                concurrency=args.concurrency,
            )
        )
    except Exception as exc:
        message = (
            f"{type(exc).__name__}: {exc}"
        )

        slug = (
            f"{args.class_name}-{args.spec_name}"
            .lower()
            .replace(" ", "-")
        )

        existing_json = (
            args.output_dir
            / f"{slug}.json"
        )

        existing_js = (
            args.output_dir
            / f"{slug}.js"
        )

        build_lag = (
            "SimC/Raidbots build mismatch"
            in str(exc)
        )

        if (
            args.allow_existing_on_build_lag
            and build_lag
            and existing_json.exists()
            and existing_js.exists()
        ):
            print(
                "LIVE BUILD LAG: keeping existing verified "
                f"dataset {existing_json}",
                file=sys.stderr,
            )
            return

        print(
            f"DATASET BUILD FAILED: {message}",
            file=sys.stderr,
        )
        raise


if __name__ == "__main__":
    main()
