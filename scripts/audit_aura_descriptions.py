from __future__ import annotations

import asyncio
import json

from pvpcalc.http import CachedClient
from pvpcalc.sources import drustvar, raidbots


async def main() -> None:
    client = CachedClient(concurrency=6)

    try:
        _, talent_payload = await raidbots.fetch_live_snapshot(
            client
        )

        classes = sorted(
            {
                item["class_name"]
                for item
                in raidbots.discover_specs(
                    talent_payload
                )
            }
        )

        result = {}

        for class_name in classes:
            slug = (
                class_name
                .strip()
                .casefold()
                .replace(" ", "-")
            )

            payload = await drustvar.fetch_aura_payload(
                client,
                slug,
            )

            rows = drustvar.normalize_current_auras(
                payload
            )

            grouped = {}

            for row in rows:
                key = (
                    row.get("spec")
                    or row.get("aura_name")
                    or "unknown"
                )

                desc = str(
                    row.get("description")
                    or ""
                )

                entry = grouped.setdefault(
                    key,
                    {}
                ).setdefault(
                    desc,
                    {
                        "count": 0,
                        "values": [],
                        "affected_spells": [],
                        "effect_type": row.get(
                            "effect_type"
                        ),
                        "label_id": row.get(
                            "label_id"
                        ),
                    }
                )

                entry["count"] += 1

                value = row.get(
                    "modifier_value"
                )

                if value not in entry["values"]:
                    entry["values"].append(
                        value
                    )

                for spell in (
                    row.get(
                        "affected_spells"
                    )
                    or []
                )[:10]:
                    sample = {
                        "id": spell.get("id"),
                        "name": spell.get("name"),
                    }

                    if (
                        sample
                        not in entry[
                            "affected_spells"
                        ]
                    ):
                        entry[
                            "affected_spells"
                        ].append(sample)

            result[class_name] = grouped

        print(
            json.dumps(
                result,
                ensure_ascii=False,
                indent=2,
            )
        )

    finally:
        await client.aclose()


if __name__ == "__main__":
    asyncio.run(main())
