from __future__ import annotations

import re
from collections import defaultdict, deque
from dataclasses import dataclass


SIMC_REPO = "simulationcraft/simc"
SIMC_BRANCH = "midnight"

SIMC_BASE_URL = (
    "https://raw.githubusercontent.com/"
    f"{SIMC_REPO}/"
    f"{SIMC_BRANCH}/SpellDataDump"
)

SIMC_COMMITS_URL = (
    "https://api.github.com/repos/"
    f"{SIMC_REPO}/commits"
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


def _without_inactive_equipment_branches(text, spells):
    """A talent calculator has no equipped set bonuses. Keep the false branch.

    Parse balanced brackets so references inside conditional formulas cannot leak
    into the unconditional dependency graph. Leave non-equipment conditions intact.
    """
    pattern = re.compile(r"\$\?a(\d+)\[")
    for match in reversed(list(pattern.finditer(text))):
        aura = spells.get(int(match[1]))
        if aura is None or not re.search(r"Class Set|Item Set", aura.name, re.I):
            continue
        start = match.end() - 1
        def end_bracket(start):
            depth = 0
            for i in range(start, len(text)):
                depth += (text[i] == "[") - (text[i] == "]")
                if depth == 0:
                    return i
            return None
        first = end_bracket(start)
        if first is None or text[first + 1:first + 2] != "[":
            continue
        last = end_bracket(first + 1)
        if last is not None:
            text = text[:match.start()] + text[first + 2:last] + text[last + 1:]
    return text


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

        block = _without_inactive_equipment_branches(spell.raw, spells)
        for override in re.finditer(r'^Talent Entry[^\n]*override="[^"\n]+" \(id=(\d+)\)', block, re.M):
            add(spell_id, int(override[1]), "tooltip_override", override[0])


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

async def _find_build_commit(
    client,
    *,
    path: str,
    target_build: str,
) -> str | None:
    """
    Find the SimC generated-data commit for one exact WoW build.

    Raidbots and SimC do not always update at the same minute. Rather
    than mixing two live builds or blocking the whole site while one
    source is ahead, walk the public SimC history and pin the dump to
    the exact Raidbots build.

    Generated-data commits conventionally include the final WoW build
    number in their subject, e.g. "Game data update (Build 69814)".
    Every candidate is still verified by parsing the raw dump header.
    """

    build_tail = (
        str(target_build)
        .strip()
        .split(".")[-1]
    )

    for page in range(1, 6):

        commits = await client.get_json(
            SIMC_COMMITS_URL,
            params={
                "sha": SIMC_BRANCH,
                "path": path,
                "per_page": 100,
                "page": page,
            },
        )

        if not commits:
            break

        candidates = []

        for item in commits:

            message = str(
                (
                    item.get("commit")
                    or {}
                ).get(
                    "message",
                    "",
                )
            )

            if (
                f"Build {build_tail}"
                in message
            ):
                sha = item.get("sha")

                if sha:
                    candidates.append(
                        str(sha)
                    )

        for sha in candidates:

            url = (
                "https://raw.githubusercontent.com/"
                f"{SIMC_REPO}/{sha}/{path}"
            )

            text = await client.get_text(
                url
            )

            dump = parse_dump(
                text,
                class_slug=(
                    path.rsplit("/", 1)[-1]
                    .removesuffix(".txt")
                ),
            )

            if dump.build == target_build:
                return sha

        if len(commits) < 100:
            break

    return None


async def fetch_dump(
    client,
    class_slug: str,
    *,
    target_build: str | None = None,
) -> SimcDump:

    slug = (
        class_slug
        .strip()
        .casefold()
        .replace(" ", "")
    )

    path = (
        f"SpellDataDump/{slug}.txt"
    )

    url = (
        f"{SIMC_BASE_URL}/"
        f"{slug}.txt"
    )

    text = await client.get_text(
        url
    )

    dump = parse_dump(
        text,
        class_slug=slug,
    )

    if (
        target_build is None
        or dump.build == target_build
    ):
        return dump

    commit_sha = await _find_build_commit(
        client,
        path=path,
        target_build=target_build,
    )

    if commit_sha is None:
        return dump

    exact_url = (
        "https://raw.githubusercontent.com/"
        f"{SIMC_REPO}/{commit_sha}/{path}"
    )

    exact_text = await client.get_text(
        exact_url
    )

    exact_dump = parse_dump(
        exact_text,
        class_slug=slug,
    )

    if exact_dump.build != target_build:
        raise RuntimeError(
            "Resolved SimC commit did not match requested build: "
            f"requested={target_build}, got={exact_dump.build}, "
            f"commit={commit_sha}"
        )

    return exact_dump


# ============================================================
# Spell labels
# ============================================================

def _label_ids_from_raw(
    raw: str,
) -> tuple[int, ...]:
    """
    Parse the SimC SpellDataDump Labels block.

    Examples:

        Labels           : 16: Class Spells
                         : 25: Warrior Spells
                         : 4007

    PvP Aura rows that target a SpellLabel expose only label_id,
    so exact-build SimC label membership is the authoritative bridge
    back to concrete spell IDs.
    """

    result = []
    in_labels = False

    for line in str(raw or "").splitlines():

        if line.startswith("Labels"):
            in_labels = True
            tail = line.split(":", 1)[1].strip()

        elif (
            in_labels
            and re.match(r"^\s+:", line)
        ):
            tail = line.split(":", 1)[1].strip()

        elif in_labels:
            break

        else:
            continue

        match = re.match(
            r"^(\d+)(?::|\s|$)",
            tail,
        )

        if match:
            label_id = int(match.group(1))

            if label_id not in result:
                result.append(label_id)

    return tuple(result)


def spell_label_ids(
    dump: SimcDump,
    spell_id: int,
) -> tuple[int, ...]:

    spell = dump.spells.get(
        int(spell_id)
    )

    if spell is None:
        return tuple()

    return _label_ids_from_raw(
        spell.raw
    )


def spell_ids_for_label(
    dump: SimcDump,
    label_id: int,
) -> set[int]:

    label_id = int(label_id)

    return {
        spell_id
        for spell_id, spell
        in dump.spells.items()
        if label_id
        in _label_ids_from_raw(
            spell.raw
        )
    }


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


        # A direct player-text reference wins over a parallel trigger edge.
        for edge in sorted(dump.edges.get(current, ()),
                           key=lambda e: {"tooltip_value_ref": 0, "spelldesc_ref": 1}.get(e.relation, 2)):

            target = (
                edge.target_spell_id
            )
            if target == root_spell_id:
                continue

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

                # A parent can reference the same child spell several
                # times (duration, one or more concrete $sN values,
                # embedded description). BFS keeps one canonical edge
                # for path identity, but tooltip rendering needs ALL
                # parallel evidence for each hop so it does not lose
                # the specific effect reference merely because an
                # earlier $childd token was encountered first.
                evidence=tuple(
                    dict.fromkeys(
                        parallel.evidence
                        for edge in path
                        for parallel in dump.edges.get(
                            edge.source_spell_id,
                            tuple(),
                        )
                        if (
                            parallel.target_spell_id
                            == edge.target_spell_id
                        )
                    )
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
    ap_coefficient: float | None = None
    game_effect_id: int | None = None
    # Previous multiplier explicitly recorded by an exact-build
    # "Hotfixed: PvP Coefficient (old -> current)" line.
    # This is provenance, not merely another current-value source.
    pvp_hotfix_previous: float | None = None


_SIMC_EFFECT_HEADER_RE = re.compile(
    r"(?m)^#(\d+)\s+"
    r"\(id=(?P<game_effect_id>\d+)\)\s*:\s*"
    r"(?P<effect_text>.+)$"
)

_SIMC_BASE_RE = re.compile(
    r"Base Value:\s*"
    r"([+-]?\d+(?:\.\d+)?)"
)

_SIMC_SP_RE = re.compile(
    r"SP Coefficient:\s*"
    r"([+-]?\d+(?:\.\d+)?)"
)

_SIMC_AP_RE = re.compile(
    r"AP Coefficient:\s*"
    r"([+-]?\d+(?:\.\d+)?)"
)

_SIMC_PVP_RE = re.compile(
    r"PvP Coefficient:\s*"
    r"([+-]?\d+(?:\.\d+)?)"
)

# SimulationCraft omits the ordinary "PvP Coefficient:" field when a
# hotfix resets an effect to the neutral multiplier 1. The exact-build
# dump still records the transition, e.g.
#
#   Hotfixed : PvP Coefficient (1.25 -> 1)
#
# Treat the right-hand side as current state, but only as a fallback
# when the normal coefficient field is absent.
_SIMC_PVP_HOTFIX_RE = re.compile(
    r"Hotfixed\s*:\s*PvP Coefficient\s*"
    r"\(([+-]?\d+(?:\.\d+)?)\s*->\s*"
    r"([+-]?\d+(?:\.\d+)?)\)",
    re.I,
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


        pvp_coefficient = (
            _float_match(
                _SIMC_PVP_RE,
                effect_block,
            )
        )

        hotfix_match = (
            _SIMC_PVP_HOTFIX_RE.search(
                effect_block
            )
        )

        pvp_hotfix_previous = (
            float(hotfix_match.group(1))
            if hotfix_match
            else None
        )

        hotfix_current = (
            float(hotfix_match.group(2))
            if hotfix_match
            else None
        )

        # Prefer the ordinary current field when SimC supplies it.
        # A hotfix line is a fallback for current state, while its
        # left-hand side is retained separately as provenance.
        if pvp_coefficient is None:
            pvp_coefficient = (
                hotfix_current
            )


        result[
            effect_index
        ] = SimcEffect(
            effect_index=
                effect_index,

            effect_text=
                match.group("effect_text").strip(),

            game_effect_id=int(match.group("game_effect_id")),

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
                pvp_coefficient,

            ap_coefficient=
                _float_match(
                    _SIMC_AP_RE,
                    effect_block,
                ),

            pvp_hotfix_previous=
                pvp_hotfix_previous,
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


def _player_text_sections(
    raw: str,
) -> list[str]:
    """
    Extract only SimC Description/Tooltip text, excluding Variables and
    effect metadata.
    """

    result = []
    current = None

    for line in str(
        raw or ""
    ).splitlines():

        match = re.match(
            r"^(Description|Tooltip)\s*:\s*(.*)$",
            line,
        )

        if match:
            current = (
                match.group(1)
                .casefold()
            )
            result.append(
                match.group(2)
            )
            continue

        # Descriptions contain literal newlines (including CR/CR/LF),
        # not only SimC's indented ':' continuation lines. A paragraph
        # break does not end the field: Soul Rending's second paragraph
        # references a different effect from its first one.
        if re.match(r"^[A-Za-z][A-Za-z /()#-]*\s{2,}:|^#\d+\s", line):
            current = None
        elif current is not None and line.strip():
            result.append(re.sub(r"^\s+:\s*", "", line))

    return result


def simple_player_description(dump, spell_id, *, class_name, spec_name, spec_names):
    """Resolve only literal base values and proven class-specialization branches.

    Used when the tooltip service omits a specialization. Unknown conditions,
    formulas, scaling, or applicable specialization modifiers fail closed.
    """
    spell = dump.spells.get(spell_id)
    if spell is None:
        return None
    description = re.search(r"^Description\s*:\s*(.*)", spell.raw, re.M)
    if description is None:
        return None
    text = "\n".join(_player_text_sections(spell.raw[description.start():]))
    spec_auras = {
        s.spell_id: name for s in dump.spells.values() for name in spec_names
        if s.name == f"{name} {class_name}"
        and re.search(r"^Class\s*:\s*" + re.escape(s.name) + r"\s*$", s.raw, re.M)
    }
    condition = re.compile(r"\$\?a(\d+)\[([^\[\]]*)\]\[([^\[\]]*)\]")
    def branch(match):
        aura = int(match[1])
        if aura not in spec_auras:
            raise ValueError("Unknown talent condition")
        return match[2] if spec_auras[aura] == spec_name else match[3]
    effects = parse_spell_effects(spell)
    def value(index):
        effect = effects.get(int(index))
        if effect is None or effect.base_value is None or effect.sp_coefficient or effect.ap_coefficient:
            raise ValueError("Not a literal effect")
        for aura, name in spec_auras.items():
            if name == spec_name and re.search(r"Modified By:.*\(" + str(aura) + r" effect#", spell.raw):
                raise ValueError("Specialization modifies the base value")
        return effect.base_value
    try:
        text = condition.sub(branch, text)
        text = re.sub(r"\$\{\$s(\d+)/(-?\d+(?:\.\d+)?)\}",
                      lambda m: f"{value(m[1]) / float(m[2]):g}", text)
        text = re.sub(r"\$s(\d+)\b", lambda m: f"{value(m[1]):g}", text)
    except (ValueError, ZeroDivisionError):
        return None
    if "$" in text or not text.strip():
        return None
    return {"text": text.strip(), "source": "simc_exact_build", "build": dump.build,
            "spell_id": spell_id, "raw": spell.raw}


def _variable_definitions(
    raw: str,
) -> dict[str, str]:
    """
    Parse SimC's Variables section into name -> formula text.

    Blizzard descriptions often render a named variable while the
    SpellEffect value itself appears only inside that variable formula.
    """

    result = {}
    in_variables = False

    for line in str(
        raw or ""
    ).splitlines():

        match = re.match(
            r"^Variables\s*:\s*(.*)$",
            line,
        )

        if match:
            in_variables = True
            tail = match.group(1).strip()

        elif (
            in_variables
            and re.match(
                r"^\s+:\s*",
                line,
            )
        ):
            tail = re.sub(
                r"^\s+:\s*",
                "",
                line,
            ).strip()

        elif in_variables:
            break

        else:
            continue

        if not tail:
            continue

        assignment = re.match(
            r"^\$<?"
            r"([A-Za-z_][A-Za-z0-9_]*)"
            r">?\s*=\s*(.+)$",
            tail,
        )

        if assignment:
            result[
                assignment.group(1)
            ] = assignment.group(2)

    return result


def _variable_reference_pattern(
    name: str,
) -> re.Pattern:

    return re.compile(
        rf"\$(?:<{re.escape(name)}>|{re.escape(name)})(?![A-Za-z0-9_])",
        re.I,
    )


def effect_reference_contexts(
    dump: SimcDump,
    spell_id: int,
    effect_index: int,
) -> tuple[str, ...]:
    """
    Return player-text snippets tied to one SpellEffect.

    Supports both direct $sN references and named Blizzard variables
    whose formula transitively depends on that SpellEffect.
    """

    spell = dump.spells.get(
        int(spell_id)
    )

    if spell is None:
        return tuple()

    index = int(
        effect_index
    )

    direct_tokens = [
        re.compile(
            rf"\$s{index}(?!\d)",
            re.I,
        ),
        re.compile(
            r"\$"
            + str(
                int(spell_id)
            )
            + rf"s{index}(?!\d)",
            re.I,
        ),
    ]

    player_lines = _player_text_sections(
        spell.raw
    )

    contexts = []

    def add_context(
        line: str,
    ) -> None:

        context = " ".join(
            str(line or "").split()
        )

        if (
            context
            and context not in contexts
        ):
            contexts.append(context)

    for line in player_lines:

        if any(
            token.search(line)
            for token in direct_tokens
        ):
            add_context(line)

    definitions = _variable_definitions(
        spell.raw
    )

    dependent_names = set()

    changed = True

    while changed:

        changed = False

        for name, formula in (
            definitions.items()
        ):

            if name in dependent_names:
                continue

            direct = any(
                token.search(formula)
                for token in direct_tokens
            )

            indirect = any(
                _variable_reference_pattern(
                    dependency
                ).search(
                    formula
                )
                for dependency
                in dependent_names
            )

            if direct or indirect:
                dependent_names.add(
                    name
                )
                changed = True

    if dependent_names:

        for line in player_lines:

            if any(
                _variable_reference_pattern(
                    name
                ).search(
                    line
                )
                for name
                in dependent_names
            ):
                add_context(line)

    return tuple(
        contexts
    )


def effect_unit_hint(
    dump: SimcDump,
    spell_id: int,
    effect_index: int,
) -> str | None:
    """
    Infer a player-facing unit only when SimC's exact Description/Tooltip
    places an explicit unit immediately around $sN.
    """

    spell = dump.spells.get(
        int(spell_id)
    )

    if spell is None:
        return None

    index = int(
        effect_index
    )

    token = (
        rf"\$s{index}(?!\d)"
    )

    for line in _player_text_sections(
        spell.raw
    ):

        if re.search(
            token + r"\s*%",
            line,
            re.I,
        ):
            return "percent"

        if re.search(
            token
            + r"\s*(?:sec(?:onds?)?|s)\b",
            line,
            re.I,
        ):
            return "seconds"

        if re.search(
            token
            + r"\s*(?:yds?|yards?)\b",
            line,
            re.I,
        ):
            return "yards"

    return None


def dependency_effect_reference_contexts(
    dependency: SimcDependency,
    source_spell_id: int,
    effect_index: int,
    dump: SimcDump | None = None,
) -> tuple[str, ...]:
    """
    Return player-facing parent text tied to one concrete child effect.

    With an exact-build dump, resolve both direct qualified effect tokens
    and named variables whose formulas depend on that token. Internal
    Variables lines are not themselves treated as player-facing proof.
    """

    if dump is not None and dependency.relations == ("tooltip_override",):
        return effect_reference_contexts(dump, source_spell_id, effect_index)

    token = re.compile(
        r"\$"
        + str(int(source_spell_id))
        + rf"s{int(effect_index)}(?!\d)",
        re.I,
    )

    contexts = []

    def add_context(line: str) -> None:
        context = " ".join(
            str(line or "").split()
        )

        if (
            context
            and context not in contexts
        ):
            contexts.append(context)

    if dump is not None:
        path = tuple(
            dependency.path_spell_ids
        )

        parent_id = (
            int(path[-2])
            if len(path) >= 2
            else int(
                dependency.root_spell_id
            )
        )

        parent = dump.spells.get(
            parent_id
        )

        if parent is not None:
            player_lines = _player_text_sections(
                parent.raw
            )

            for line in player_lines:
                if token.search(line):
                    add_context(line)

            definitions = _variable_definitions(
                parent.raw
            )

            dependent_names = set()
            changed = True

            while changed:
                changed = False

                for name, formula in (
                    definitions.items()
                ):
                    if name in dependent_names:
                        continue

                    direct = bool(
                        token.search(
                            formula
                        )
                    )

                    indirect = any(
                        _variable_reference_pattern(
                            dependency_name
                        ).search(
                            formula
                        )
                        for dependency_name
                        in dependent_names
                    )

                    if direct or indirect:
                        dependent_names.add(
                            name
                        )
                        changed = True

            if dependent_names:
                for line in player_lines:
                    for name in sorted(
                        dependent_names
                    ):
                        pattern = (
                            _variable_reference_pattern(
                                name
                            )
                        )

                        for match in pattern.finditer(
                            line
                        ):
                            left = max(
                                0,
                                match.start() - 90,
                            )
                            right = min(
                                len(line),
                                match.end() + 90,
                            )
                            add_context(
                                line[left:right]
                            )

            return tuple(contexts)

    for evidence in dependency.evidence:
        text = " ".join(
            str(evidence or "").split()
        )

        if (
            text
            and token.search(text)
        ):
            add_context(text)

    return tuple(contexts)


def dependent_effect_reference_contexts(
    dump: SimcDump,
    spell_id: int,
    effect_index: int,
) -> tuple[str, ...]:
    """
    Find player-facing text in immediate structural children that refers
    back to one effect of the current talent. This covers embedded
    descriptions whose tuning parameters live on the parent talent.
    """

    spell_id = int(spell_id)
    effect_index = int(effect_index)

    token = re.compile(
        r"\$"
        + str(spell_id)
        + rf"s{effect_index}(?!\d)",
        re.I,
    )

    contexts = []

    target_ids = {
        int(edge.target_spell_id)
        for edge in dump.edges.get(
            spell_id,
            tuple(),
        )
    }

    for target_id in sorted(
        target_ids
    ):
        target = dump.spells.get(
            target_id
        )

        if target is None:
            continue

        for line in _player_text_sections(
            target.raw
        ):
            if not token.search(line):
                continue

            context = " ".join(
                str(line or "").split()
            )

            if (
                context
                and context not in contexts
            ):
                contexts.append(
                    context
                )

    return tuple(contexts)

def dependency_effect_unit_hint(
    dependency: SimcDependency,
    source_spell_id: int,
    effect_index: int,
    dump: SimcDump | None = None,
) -> str | None:
    """
    Infer a unit from the parent player-facing context around a child
    SpellEffect.
    """

    token = (
        r"\$"
        + str(int(source_spell_id))
        + rf"s{int(effect_index)}(?!\d)"
    )

    for evidence in dependency.evidence:
        line = str(
            evidence or ""
        )

        if re.search(
            token + r"\s*%",
            line,
            re.I,
        ):
            return "percent"

        if re.search(
            token
            + r"\s*(?:sec(?:onds?)?|s)\b",
            line,
            re.I,
        ):
            return "seconds"

        if re.search(
            token
            + r"\s*(?:yds?|yards?)\b",
            line,
            re.I,
        ):
            return "yards"

    contexts = dependency_effect_reference_contexts(
        dependency,
        source_spell_id,
        effect_index,
        dump=dump,
    )

    if contexts:
        if all(
            "%" in context
            for context in contexts
        ):
            return "percent"

        if all(
            re.search(
                r"\bsec(?:onds?)?\b",
                context,
                re.I,
            )
            for context in contexts
        ):
            return "seconds"

        if all(
            re.search(
                r"\b(?:yds?|yards?)\b",
                context,
                re.I,
            )
            for context in contexts
        ):
            return "yards"

    return None

def pvp_modified_spell_ids(
    dump: SimcDump,
) -> set[int]:
    """
    Return spells with at least one non-identity exact-build
    SpellEffect PvP coefficient.
    """

    result = set()

    for spell_id, spell in (
        dump.spells.items()
    ):

        for effect in (
            parse_spell_effects(
                spell
            ).values()
        ):

            coefficient = (
                effect.pvp_coefficient
            )

            if (
                coefficient is not None
                and abs(
                    float(coefficient)
                    - 1.0
                ) > 1e-9
            ):
                result.add(
                    int(spell_id)
                )
                break

    return result
