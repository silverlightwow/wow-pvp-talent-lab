from __future__ import annotations

import argparse
import asyncio
from pathlib import Path

from pvpcalc.http import CachedClient
from pvpcalc.sources import blizzard_hotfixes


async def _run(output: Path, previous_data_dir: Path) -> None:
    client = CachedClient(
        concurrency=2
    )
    try:
        hotfixes = (
            await blizzard_hotfixes
            .fetch_official_pvp_hotfixes(
                client,
                previous_keys=blizzard_hotfixes.published_hotfix_keys(
                    previous_data_dir
                ),
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
    parser.add_argument(
        "--previous-data-dir",
        type=Path,
        default=Path("web/data"),
    )
    args = parser.parse_args()
    asyncio.run(
        _run(args.output, args.previous_data_dir)
    )


if __name__ == "__main__":
    main()
