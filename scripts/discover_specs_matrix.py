from __future__ import annotations

import argparse
import asyncio
import json

from pvpcalc.http import CachedClient
from pvpcalc.sources import raidbots


async def discover_spec_matrix() -> list[dict]:
    client = CachedClient(
        concurrency=2
    )

    try:
        _, talents = (
            await raidbots.fetch_live_snapshot(
                client
            )
        )
    finally:
        await client.aclose()

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

    args = parser.parse_args()

    specs = asyncio.run(
        discover_spec_matrix()
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
