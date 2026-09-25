from __future__ import annotations

import argparse
import asyncio
from pathlib import Path

from pvpcalc.http import CachedClient
from pvpcalc.sources import blizzard_hotfixes


async def _run(output: Path) -> None:
    client = CachedClient(
        concurrency=2
    )
    try:
        hotfixes = (
            await blizzard_hotfixes
            .fetch_official_pvp_hotfixes(
                client
            )
        )
    finally:
        await client.aclose()

    snapshot = (
        blizzard_hotfixes
        .write_hotfix_snapshot(
            output,
            hotfixes,
        )
    )

    print(
        "Official PvP hotfix snapshot: "
        f"{len(hotfixes)} parsed changes, "
        f"latest={snapshot['latest_date']}, "
        f"sha256={snapshot['snapshot_hash']}"
    )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--output",
        type=Path,
        required=True,
    )
    args = parser.parse_args()
    asyncio.run(
        _run(args.output)
    )


if __name__ == "__main__":
    main()
