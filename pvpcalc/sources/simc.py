from __future__ import annotations

import re
from collections import defaultdict, deque
from dataclasses import dataclass


SIMC_BASE_URL = (
    "https://raw.githubusercontent.com/"
    "simulationcraft/simc/"
    "midnight/SpellDataDump"
)


# ============================================================
# Models
# ============================================================

@dataclass(frozen=True)
class SimcSpell:
    spell_id: int
    name: str
    raw: str


@dataclass(frozen=True)
class SimcEdge:
    source_spell_id: int
    target_spell_id: int
    relation: str
    evidence: str


@dataclass(frozen=True)
class SimcDependency:
    root_spell_id: int
    target_spell_id: int
    path_spell_ids: tuple[int, ...]
    relations: tuple[str, ...]
    evidence: tuple[str, ...]

    @property
    def depth(self) -> int:
        return len(self.relations)


@dataclass(frozen=True)
class SimcDump:
    class_slug: str
    build: str | None
    header: str
    spells: dict[int, SimcSpell]
    edges: dict[int, tuple[SimcEdge, ...]]


# ============================================================
# Parsing
# ============================================================

_BUILD_RE = re.compile(
    r"World of Warcraft "
    r"(\d+\.\d+\.\d+\.\d+) "
    r"Live"
)

_SPELL_HEADER_RE = re.compile(
    r"(?m)^Name\s+:\s+"
    r"(.+?)\s+"
    r"\(id=(\d+)\)"
    r".*$"
)


def _parse_build(text: str) -> str | None:
    first_line = (
        text.splitlines()[0]
        if text
        else ""
    )

    match = _BUILD_RE.search(
        first_line
    )

    return (
        match.group(1)
        if match
        else None
    )


def _parse_spells(
    text: str,
) -> dict[int, SimcSpell]:

    headers = list(
        _SPELL_HEADER_RE.finditer(
            text
        )
    )

    result = {}

    for i, match in enumerate(
        headers
    ):

        start = match.start()

        end = (
            headers[i + 1].start()
            if i + 1 < len(headers)
            else len(text)
        )

        spell_id = int(
            match.group(2)
        )

        result[spell_id] = SimcSpell(
            spell_id=spell_id,
            name=match.group(1).strip(),
            raw=text[start:end],
        )

    return result


def _build_edges(
    spells: dict[int, SimcSpell],
) -> dict[int, tuple[SimcEdge, ...]]:

    edges = defaultdict(list)


    def add(
        source: int,
        target: int,
        relation: str,
        evidence: str,
    ):

        if source == target:
            return

        if target not in spells:
            return

        edge = SimcEdge(
            source_spell_id=source,
            target_spell_id=target,
            relation=relation,
            evidence=evidence.strip(),
        )

        if edge not in edges[source]:
            edges[source].append(edge)


    for spell_id, spell in (
        spells.items()
    ):

        block = spell.raw


        # ----------------------------------------------------
        # Explicit Trigger Spell
        # ----------------------------------------------------

        for match in re.finditer(
            r"Trigger Spell:\s*(\d+)",
            block,
        ):

            add(
                spell_id,
                int(match.group(1)),
                "trigger_spell",
                match.group(0),
            )


        # ----------------------------------------------------
        # Blizzard tooltip / formula references
        #
        # Examples:
        #
        # $81782s2
        # $421544s1
        # $421434d
        # $@spelldesc1253593
        # ----------------------------------------------------

        patterns = [
            (
                r"\$@spelldesc(\d+)",
                "spelldesc_ref",
            ),
            (
                r"\$(\d+)"
                r"(?:s\d+|d|t\d+|w\d+)",
                "tooltip_value_ref",
            ),
        ]


        for pattern, relation in patterns:

            for match in re.finditer(
                pattern,
                block,
            ):

                line_start = (
                    block.rfind(
                        "\n",
                        0,
                        match.start(),
                    )
                    + 1
                )

                line_end = block.find(
                    "\n",
                    match.end(),
                )

                if line_end == -1:
                    line_end = len(block)

                line = block[
                    line_start:line_end
                ].strip()


                # Modifier metadata describes reverse
                # applicability, not implementation
                # dependency.
                if (
                    "Affected Spells"
                    in line
                    or "Affecting Spells"
                    in line
                    or "Modified By"
                    in line
                ):
                    continue


                add(
                    spell_id,
                    int(match.group(1)),
                    relation,
                    line,
                )


        # ----------------------------------------------------
        # Triggered By is written on the child.
        #
        # Reverse it:
        #
        # parent -> child
        # ----------------------------------------------------

        for match in re.finditer(
            r"(?m)^Triggered By\s+:\s+"
            r".*?\((\d+)\)",
            block,
        ):

            parent_id = int(
                match.group(1)
            )

            add(
                parent_id,
                spell_id,
                "triggered_by_reverse",
                match.group(0),
            )


    return {
        source:
            tuple(items)

        for source, items
        in edges.items()
    }


def parse_dump(
    text: str,
    *,
    class_slug: str,
) -> SimcDump:

    spells = _parse_spells(
        text
    )

    return SimcDump(
        class_slug=class_slug,
        build=_parse_build(text),
        header=(
            text.splitlines()[0]
            if text
            else ""
        ),
        spells=spells,
        edges=_build_edges(
            spells
        ),
    )


# ============================================================
# Fetch
# ============================================================

async def fetch_dump(
    client,
    class_slug: str,
) -> SimcDump:

    slug = (
        class_slug
        .strip()
        .casefold()
        .replace(" ", "")
    )

    url = (
        f"{SIMC_BASE_URL}/"
        f"{slug}.txt"
    )

    text = await client.get_text(
        url
    )

    return parse_dump(
        text,
        class_slug=slug,
    )


# ============================================================
# Dependency closure
# ============================================================

def dependency_closure(
    dump: SimcDump,
    root_spell_id: int,
    *,
    target_spell_ids: set[int] | None = None,
    max_depth: int = 4,
) -> list[SimcDependency]:
    """
    Traverse structural spell dependencies.

    If target_spell_ids is supplied, return only dependencies
    ending on one of those spell IDs.

    The shortest discovered path to each target is retained.
    """

    root_spell_id = int(
        root_spell_id
    )

    queue = deque(
        [
            (
                root_spell_id,
                tuple(),
            )
        ]
    )

    best_depth = {
        root_spell_id: 0
    }

    found = {}


    while queue:

        current, path = (
            queue.popleft()
        )

        if len(path) >= max_depth:
            continue


        for edge in dump.edges.get(
            current,
            tuple(),
        ):

            target = (
                edge.target_spell_id
            )

            new_path = (
                path
                + (edge,)
            )

            new_depth = len(
                new_path
            )


            target_allowed = (
                target_spell_ids is None
                or target
                in target_spell_ids
            )


            if target_allowed:

                previous = found.get(
                    target
                )

                if (
                    previous is None
                    or new_depth
                    < len(previous)
                ):

                    found[target] = (
                        new_path
                    )


            if (
                target
                not in best_depth
                or new_depth
                < best_depth[target]
            ):

                best_depth[target] = (
                    new_depth
                )

                queue.append(
                    (
                        target,
                        new_path,
                    )
                )


    result = []


    for target, path in (
        found.items()
    ):

        result.append(
            SimcDependency(
                root_spell_id=
                    root_spell_id,

                target_spell_id=
                    target,

                path_spell_ids=(
                    (root_spell_id,)
                    + tuple(
                        edge.target_spell_id
                        for edge in path
                    )
                ),

                relations=tuple(
                    edge.relation
                    for edge in path
                ),

                evidence=tuple(
                    edge.evidence
                    for edge in path
                ),
            )
        )


    return sorted(
        result,
        key=lambda item: (
            item.depth,
            item.target_spell_id,
        ),
    )


def pvp_dependencies(
    dump: SimcDump,
    talent_spell_ids,
    pvp_spell_ids,
    *,
    max_depth: int = 4,
) -> list[SimcDependency]:
    """
    Discover structural dependencies from current talent
    spells to the current PvP-modified spell universe.
    """

    pvp_ids = {
        int(x)
        for x in pvp_spell_ids
    }

    rows = []


    for talent_spell_id in sorted(
        {
            int(x)
            for x in talent_spell_ids
        }
    ):

        rows.extend(
            dependency_closure(
                dump,
                talent_spell_id,
                target_spell_ids=pvp_ids,
                max_depth=max_depth,
            )
        )


    return rows


# === SIMC_EFFECT_NUMERIC_V1 ===


@dataclass(frozen=True)
class SimcEffect:
    effect_index: int
    effect_text: str

    base_value: float | None
    sp_coefficient: float | None
    pvp_coefficient: float | None


_SIMC_EFFECT_HEADER_RE = re.compile(
    r"(?m)^#(\d+)\s+"
    r"\(id=\d+\)\s*:\s*"
    r"(.+)$"
)

_SIMC_BASE_RE = re.compile(
    r"Base Value:\s*"
    r"([+-]?\d+(?:\.\d+)?)"
)

_SIMC_SP_RE = re.compile(
    r"SP Coefficient:\s*"
    r"([+-]?\d+(?:\.\d+)?)"
)

_SIMC_PVP_RE = re.compile(
    r"PvP Coefficient:\s*"
    r"([+-]?\d+(?:\.\d+)?)"
)


def _float_match(
    pattern,
    text,
):
    match = pattern.search(
        text
    )

    if not match:
        return None

    return float(
        match.group(1)
    )


def parse_spell_effects(
    spell: SimcSpell,
) -> dict[int, SimcEffect]:
    """
    Parse exact-build numeric SpellEffect state.

    Used primarily as a fallback when Wowhead omits an explicit
    Value field, e.g. Power Infusion Effect #2:

        Base Value: 0
        PvP Coefficient: 0.5
    """

    matches = list(
        _SIMC_EFFECT_HEADER_RE.finditer(
            spell.raw
        )
    )

    result = {}


    for i, match in enumerate(
        matches
    ):

        effect_index = int(
            match.group(1)
        )

        start = match.start()

        end = (
            matches[i + 1].start()
            if i + 1 < len(matches)
            else len(spell.raw)
        )


        block = spell.raw[
            start:end
        ]


        # Do not let Description/Tooltip data from the spell
        # masquerade as effect metadata.
        metadata_end = len(
            block
        )

        for marker in (
            "\nDescription",
            "\nTooltip",
            "\nVariables",
        ):

            position = block.find(
                marker
            )

            if position != -1:
                metadata_end = min(
                    metadata_end,
                    position,
                )


        effect_block = block[
            :metadata_end
        ]


        result[
            effect_index
        ] = SimcEffect(
            effect_index=
                effect_index,

            effect_text=
                match.group(2).strip(),

            base_value=
                _float_match(
                    _SIMC_BASE_RE,
                    effect_block,
                ),

            sp_coefficient=
                _float_match(
                    _SIMC_SP_RE,
                    effect_block,
                ),

            pvp_coefficient=
                _float_match(
                    _SIMC_PVP_RE,
                    effect_block,
                ),
        )


    return result


def effect_for_spell(
    dump: SimcDump,
    spell_id: int,
    effect_index: int,
) -> SimcEffect | None:

    spell = dump.spells.get(
        int(spell_id)
    )

    if spell is None:
        return None

    return parse_spell_effects(
        spell
    ).get(
        int(effect_index)
    )

