from __future__ import annotations

import argparse
import asyncio
import json
from pathlib import Path

from pvpcalc.http import CachedClient
from pvpcalc.sources import raidbots


async def discover_spec_matrix(snapshot_output: Path | None = None) -> list[dict]:
    client = CachedClient(
        concurrency=2
    )

    try:
        metadata, talents = (
            await raidbots.fetch_live_snapshot(
                client
            )
        )
    finally:
        await client.aclose()

    if snapshot_output is not None:
        snapshot_output.write_text(
            json.dumps({'metadata': metadata, 'talents': talents}),
            encoding='utf-8',
        )

    specs = raidbots.discover_specs(
        talents
    )

    return [
        {
            "class_name":
                item["class_name"],
            "spec_name":
                item["spec_name"],
            "class_id":
                item.get("class_id"),
            "spec_id":
                item.get("spec_id"),
        }
        for item in specs
    ]


def main() -> None:
    parser = argparse.ArgumentParser()

    parser.add_argument(
        "--github-output",
        default=None,
    )
    parser.add_argument('--snapshot-output', type=Path)

    args = parser.parse_args()

    specs = asyncio.run(
        discover_spec_matrix(args.snapshot_output)
    )

    payload = json.dumps(
        specs,
        separators=(",", ":"),
    )

    print(payload)

    if args.github_output:
        with open(
            args.github_output,
            "a",
            encoding="utf-8",
        ) as handle:
            handle.write(
                f"specs={payload}\n"
            )


if __name__ == "__main__":
    main()
