from __future__ import annotations

import argparse
import asyncio
import json

from pvpcalc.http import CachedClient
from pvpcalc.sources import raidbots


async def discover_classes() -> list[str]:
    client = CachedClient(concurrency=2)

    try:
        _, talents = await raidbots.fetch_live_snapshot(
            client
        )
    finally:
        await client.aclose()

    return sorted(
        {
            item["class_name"]
            for item
            in raidbots.discover_specs(
                talents
            )
        }
    )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--github-output",
        default=None,
    )
    args = parser.parse_args()

    classes = asyncio.run(
        discover_classes()
    )

    payload = json.dumps(
        classes,
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
                f"classes={payload}\n"
            )


if __name__ == "__main__":
    main()
