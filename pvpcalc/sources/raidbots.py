from __future__ import annotations

from typing import Any

from ..http import CachedClient


BASE = "https://www.raidbots.com/static/data"


def _find_spec_tree(
    talents: list[dict],
    class_name: str,
    spec_name: str,
) -> dict:
    matches = [
        tree
        for tree in talents
        if (
            tree.get("className", "").casefold()
            == class_name.casefold()
            and tree.get("specName", "").casefold()
            == spec_name.casefold()
        )
    ]

    if not matches:
        raise ValueError(
            f"Raidbots tree not found: "
            f"{class_name} / {spec_name}"
        )

    if len(matches) > 1:
        raise ValueError(
            f"Multiple Raidbots trees found: "
            f"{class_name} / {spec_name}"
        )

    return matches[0]


def _hero_tree_map(
    tree: dict,
) -> dict[int, dict]:
    """
    Build:
        traitSubTreeId -> subtree descriptor

    Example for Discipline:
        20 -> Oracle
        18 -> Voidweaver
    """

    result = {}

    for selector_node in tree.get(
        "subTreeNodes",
        [],
    ):
        for entry in selector_node.get(
            "entries",
            [],
        ):
            subtree_id = entry.get(
                "traitSubTreeId"
            )

            if subtree_id is None:
                continue

            result[int(subtree_id)] = {
                "name": entry.get("name"),
                "traitSubTreeId": int(subtree_id),
                "traitTreeId": entry.get(
                    "traitTreeId"
                ),
                "atlasMemberName": entry.get(
                    "atlasMemberName"
                ),
                "nodes": list(
                    entry.get("nodes", [])
                ),
            }

    return result


def _normalize_collection(
    nodes: list[dict],
    *,
    tree_type: str,
    hero_trees: dict[int, dict],
    class_name: str,
    class_id: int,
    spec_name: str,
    spec_id: int,
    trait_tree_id: int,
    wow_build: str,
    generated_at: str,
    content_hash: str,
) -> list[dict]:
    """
    One output row = one selectable talent ENTRY.

    Therefore:
        single node -> usually 1 row
        choice node -> 2+ rows with same node_id
    """

    rows = []

    for node in nodes:

        subtree_id = node.get(
            "subTreeId"
        )

        hero_tree = None

        if subtree_id is not None:
            hero_tree = hero_trees.get(
                int(subtree_id)
            )

        entries = node.get(
            "entries",
            [],
        )

        for entry in entries:

            spell_id = entry.get(
                "spellId"
            )

            # Entries without a spell cannot currently be passed
            # to our Wowhead/Drustvar/Wiki spell pipeline.
            # Preserve them anyway for the tree/UI layer.
            rows.append(
                {
                    # ------------------------------
                    # Snapshot provenance
                    # ------------------------------
                    "source": "raidbots",
                    "wow_build": wow_build,
                    "generated_at": generated_at,
                    "content_hash": content_hash,

                    # ------------------------------
                    # Character context
                    # ------------------------------
                    "class_name": class_name,
                    "class_id": class_id,
                    "spec_name": spec_name,
                    "spec_id": spec_id,
                    "trait_tree_id": trait_tree_id,

                    # ------------------------------
                    # Tree classification
                    # ------------------------------
                    "tree_type": tree_type,
                    "hero_tree": (
                        hero_tree["name"]
                        if hero_tree
                        else None
                    ),
                    "subtree_id": (
                        int(subtree_id)
                        if subtree_id is not None
                        else None
                    ),

                    # ------------------------------
                    # Node
                    # ------------------------------
                    "node_id": node.get("id"),
                    "node_name": node.get("name"),
                    "node_type": node.get("type"),

                    "pos_x": node.get("posX"),
                    "pos_y": node.get("posY"),

                    "max_ranks": node.get(
                        "maxRanks"
                    ),

                    "required_points": int(node.get("reqPoints", 0)),

                    "entry_node": node.get(
                        "entryNode",
                        False,
                    ),

                    "free_node": node.get(
                        "freeNode",
                        False,
                    ),

                    "prev": list(
                        node.get("prev", [])
                    ),

                    "next": list(
                        node.get("next", [])
                    ),

                    # ------------------------------
                    # Selectable entry
                    # ------------------------------
                    "entry_id": entry.get("id"),
                    "entry_max_ranks": entry.get("maxRanks", 1),

                    "definition_id": entry.get(
                        "definitionId"
                    ),

                    "entry_index": entry.get(
                        "index"
                    ),

                    "entry_type": entry.get(
                        "type"
                    ),

                    "talent_name": entry.get(
                        "name",
                        node.get("name"),
                    ),

                    "spell_id": (
                        int(spell_id)
                        if spell_id is not None
                        else None
                    ),

                    "visible_spell_id": entry.get("visibleSpellId"),
                    "icon": entry.get("icon"),
                }
            )

    return rows


def normalize_spec_tree(
    talents: list[dict],
    *,
    class_name: str,
    spec_name: str,
    wow_build: str,
    generated_at: str,
    content_hash: str,
) -> list[dict]:

    tree = _find_spec_tree(
        talents,
        class_name,
        spec_name,
    )

    hero_trees = _hero_tree_map(
        tree
    )

    common = {
        "hero_trees": hero_trees,
        "class_name": tree["className"],
        "class_id": tree["classId"],
        "spec_name": tree["specName"],
        "spec_id": tree["specId"],
        "trait_tree_id": tree[
            "traitTreeId"
        ],
        "wow_build": wow_build,
        "generated_at": generated_at,
        "content_hash": content_hash,
    }

    rows = []

    rows.extend(
        _normalize_collection(
            tree.get("classNodes", []),
            tree_type="class",
            **common,
        )
    )

    rows.extend(
        _normalize_collection(
            tree.get("specNodes", []),
            tree_type="spec",
            **common,
        )
    )

    rows.extend(
        _normalize_collection(
            tree.get("heroNodes", []),
            tree_type="hero",
            **common,
        )
    )

    return rows


async def fetch_live_snapshot(
    client: CachedClient,
) -> tuple[dict, list[dict]]:
    """
    Fetch metadata first, then pin talents.json to its immutable
    contentHash.

    This prevents metadata and talent data from belonging to
    different snapshots if LIVE updates midway through a run.
    """

    metadata = await client.get_json(
        f"{BASE}/live/metadata.json"
    )

    content_hash = metadata[
        "contentHash"
    ]

    talents = await client.get_json(
        f"{BASE}/{content_hash}/talents.json"
    )

    return metadata, talents


def discover_specs(
    talents: list[dict],
) -> list[dict]:
    """Return the current playable class/spec matrix from Raidbots."""

    result = []

    for tree in talents:
        class_name = tree.get("className")
        spec_name = tree.get("specName")

        if not class_name or not spec_name:
            continue

        result.append(
            {
                "class_name": str(class_name),
                "class_id": tree.get("classId"),
                "spec_name": str(spec_name),
                "spec_id": tree.get("specId"),
                "trait_tree_id": tree.get("traitTreeId"),
            }
        )

    result.sort(
        key=lambda item: (
            item["class_name"],
            item["spec_name"],
        )
    )

    return result


async def fetch_spec_tree(
    client: CachedClient,
    *,
    class_name: str,
    spec_name: str,
) -> tuple[dict, list[dict]]:

    metadata, talents = (
        await fetch_live_snapshot(client)
    )

    metadata = dict(metadata)
    metadata["classSpecNames"] = [
        item["spec_name"]
        for item in discover_specs(talents)
        if item["class_name"].casefold()
        == class_name.casefold()
    ]

    rows = normalize_spec_tree(
        talents,
        class_name=class_name,
        spec_name=spec_name,
        wow_build=metadata["wowBuild"],
        generated_at=metadata["generatedAt"],
        content_hash=metadata["contentHash"],
    )

    tree = _find_spec_tree(talents, class_name, spec_name)
    metadata["serialization"] = {"version": 2, "spec_id": tree["specId"],
        "node_order": tree["fullNodeOrder"], "subtree_nodes": tree.get("subTreeNodes", [])}
    return metadata, rows
