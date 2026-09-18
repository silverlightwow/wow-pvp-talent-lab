from __future__ import annotations

import re
from dataclasses import dataclass

from bs4 import BeautifulSoup

from ..http import CachedClient
from ..models import EffectObservation


BASE = "https://www.wowhead.com/spell={spell_id}"


class WowheadParseError(RuntimeError):
    pass


_EFFECT_HEADER_RE = re.compile(
    r"^Effect(?:\s*#\s*(\d+))?$",
    re.I,
)

_VALUE_RE = re.compile(
    r"^Value:\s*([+-]?\d+(?:\.\d+)?)",
    re.I,
)

_PVP_RE = re.compile(
    r"^PVP Multiplier:\s*"
    r"([+-]?\d+(?:\.\d+)?)",
    re.I,
)


def _clean_line(text: str) -> str:
    return " ".join(
        text.replace("\xa0", " ").split()
    )


def _spell_details_lines(
    html: str,
) -> tuple[str, list[str]]:

    soup = BeautifulSoup(
        html,
        "lxml",
    )

    h1 = soup.find("h1")

    spell_name = (
        _clean_line(h1.get_text(" ", strip=True))
        if h1
        else ""
    )

    lines = [
        _clean_line(line)
        for line in soup.get_text(
            "\n",
            strip=True,
        ).splitlines()
    ]

    lines = [
        line
        for line in lines
        if line
    ]

    # Restrict parsing to Spell Details.
    start = next(
        (
            i + 1
            for i, line in enumerate(lines)
            if line.casefold() == "spell details"
        ),
        0,
    )

    end = len(lines)

    for i in range(start, len(lines)):

        if lines[i].casefold() in {
            "flags",
            "related",
            "guides",
        }:
            end = i
            break

    return spell_name, lines[start:end]


def _is_metadata_line(
    line: str,
) -> bool:

    lower = line.casefold()

    prefixes = (
        "value:",
        "pvp multiplier:",
        "radius:",
        "interval:",
        "server-side script",
        "affected spells:",
        "trait #",
    )

    return lower.startswith(prefixes)


def _effect_text_from_block(
    block: list[str],
) -> str:
    """
    Everything before the first known metadata field belongs to
    the effect description.

    This deliberately joins DOM fragments. Wowhead may render
    something conceptually like

        Apply Aura: Modifies <linked spell>'s Value (12)

    as several text nodes. The old parser could accidentally turn
    that into multiple pseudo-effects.
    """

    parts = []

    for line in block:

        if _is_metadata_line(line):
            break

        parts.append(line)

    return " ".join(parts).strip()


def _parse_numeric(
    block: list[str],
    pattern: re.Pattern,
) -> float | None:

    for line in block:

        match = pattern.match(line)

        if match:
            try:
                return float(
                    match.group(1)
                )
            except ValueError:
                return None

    return None


def parse_spell_html(
    html: str,
    spell_id: int,
    url: str | None = None,
) -> list[EffectObservation]:

    spell_name, lines = (
        _spell_details_lines(html)
    )

    markers = []

    for i, line in enumerate(lines):

        match = _EFFECT_HEADER_RE.match(
            line
        )

        if match:
            markers.append(
                (
                    i,
                    (
                        int(match.group(1))
                        if match.group(1)
                        else 1
                    ),
                )
            )

    if not markers:
        return []

    parsed = []

    for marker_position, (
        line_index,
        effect_index,
    ) in enumerate(markers):

        next_index = (
            markers[
                marker_position + 1
            ][0]
            if marker_position + 1
            < len(markers)
            else len(lines)
        )

        block = lines[
            line_index + 1:
            next_index
        ]

        effect_text = (
            _effect_text_from_block(
                block
            )
        )

        base_value = _parse_numeric(
            block,
            _VALUE_RE,
        )

        pvp_multiplier = _parse_numeric(
            block,
            _PVP_RE,
        )

        raw_lines = [
            (
                f"Effect #{effect_index}"
                if lines[line_index]
                .casefold()
                != "effect"
                else "Effect"
            ),
            *block,
        ]

        parsed.append(
            EffectObservation(
                source="wowhead",
                spell_id=int(spell_id),
                spell_name=(
                    spell_name
                    or f"Spell {spell_id}"
                ),
                effect_index=effect_index,
                base_value=base_value,
                pvp_multiplier=pvp_multiplier,
                effect_text=effect_text,
                patch=None,
                url=(
                    url
                    or BASE.format(
                        spell_id=spell_id
                    )
                ),
                raw="\n".join(raw_lines),
            )
        )

    # --------------------------------------------------------
    # Hard correctness invariant:
    # one Wowhead SpellEffect index must occur at most once.
    # --------------------------------------------------------

    by_index = {}

    for effect in parsed:

        previous = by_index.get(
            effect.effect_index
        )

        if previous is None:
            by_index[
                effect.effect_index
            ] = effect
            continue

        # Exact duplicated rendering is harmless.
        same = (
            previous.effect_text
            == effect.effect_text

            and previous.base_value
            == effect.base_value

            and previous.pvp_multiplier
            == effect.pvp_multiplier
        )

        if not same:
            raise WowheadParseError(
                f"Conflicting duplicate "
                f"Effect #{effect.effect_index} "
                f"for spell {spell_id}: "
                f"{previous.effect_text!r} vs "
                f"{effect.effect_text!r}"
            )

    return [
        by_index[index]
        for index in sorted(by_index)
    ]


async def fetch_spell(
    client: CachedClient,
    spell_id: int,
) -> list[EffectObservation]:

    url = BASE.format(
        spell_id=spell_id
    )

    html = await client.get_text(
        url
    )

    return parse_spell_html(
        html,
        spell_id=spell_id,
        url=url,
    )


# === WOWHEAD_FULL_SPELL_PAGE_V1 ===


@dataclass(frozen=True)
class WowheadSpellPage:
    """
    Complete current Wowhead representation used by the app.

    player_tooltip:
        User-facing PvE tooltip shown above Spell Details.

    effects:
        Structured Spell Details effects already parsed by the
        existing production parser.
    """

    spell_id: int
    spell_name: str
    player_tooltip: str
    effects: tuple[EffectObservation, ...]
    url: str


def _page_text_lines(
    html: str,
) -> tuple[str, list[str]]:
    """
    Normalize the visible Wowhead page text while preserving
    line boundaries needed for spec-aware tooltips.
    """

    soup = BeautifulSoup(
        html,
        "lxml",
    )

    h1 = soup.find(
        "h1"
    )

    spell_name = (
        _clean_line(
            h1.get_text(
                " ",
                strip=True,
            )
        )
        if h1
        else ""
    )

    lines = [
        _clean_line(line)
        for line in soup.get_text(
            "\n",
            strip=True,
        ).splitlines()
    ]

    lines = [
        line
        for line in lines
        if line
    ]

    return (
        spell_name,
        lines,
    )


def parse_player_tooltip(
    html: str,
) -> tuple[str, str]:
    """
    Extract the player-facing tooltip section ABOVE
    'Spell Details'.

    Examples preserved deliberately:

        Discipline
        Power Word: Shield absorbs 20% additional damage.
        Shadow
        ...

    and active-spell metadata:

        5.4% of base mana
        40 yd range
        2 sec cast
        ...

    The parser does NOT try to interpret PvP here.
    It returns the clean current PvE text exactly for the
    downstream spec-aware renderer.
    """

    (
        spell_name,
        lines,
    ) = _page_text_lines(
        html
    )


    if not lines:

        return (
            spell_name,
            "",
        )


    # --------------------------------------------------------
    # Spell Details marks the END of the player-facing region.
    # --------------------------------------------------------

    details_index = next(
        (
            i
            for i, line
            in enumerate(lines)
            if (
                line.casefold()
                == "spell details"
            )
        ),
        len(lines),
    )


    # --------------------------------------------------------
    # Establish the END of the main player-facing tooltip
    # BEFORE choosing the spell-title occurrence.
    #
    # Important:
    #
    # Some spells, e.g. Ultimate Penitence, have:
    #
    #   main spell card
    #   Buff
    #   Ultimate Penitence
    #   Absorbing 0 damage.
    #   ...
    #   Spell Details
    #
    # Therefore the LAST spell-name occurrence before
    # Spell Details may belong to the Buff card rather than
    # the actual spell tooltip.
    # --------------------------------------------------------

    buff_index = next(
        (
            i
            for i, line
            in enumerate(
                lines[:details_index]
            )
            if (
                line.casefold()
                == "buff"
            )
        ),
        None,
    )


    end = (
        buff_index
        if buff_index is not None
        else details_index
    )


    # --------------------------------------------------------
    # Now choose the last exact spell-title occurrence BEFORE
    # the main-tooltip boundary.
    # --------------------------------------------------------

    exact_name_positions = [
        i
        for i, line
        in enumerate(
            lines[:end]
        )
        if (
            spell_name
            and line.casefold()
            == spell_name.casefold()
        )
    ]


    if exact_name_positions:

        start = (
            exact_name_positions[-1]
            + 1
        )

    else:

        start = 0


    candidates = lines[
        start:end
    ]


    # --------------------------------------------------------
    # Remove Wowhead page chrome / type metadata without
    # touching meaningful tooltip lines.
    # --------------------------------------------------------

    cleaned = []

    spell_name_cf = (
        spell_name.casefold()
    )


    for line in candidates:

        lower = (
            line.casefold()
        )


        if lower in {
            "talent",
            "passive",
        }:
            continue


        # Examples:
        #
        # Inner QuietusTalent Requires Priest
        # Power Word: Barrier Requires Priest
        #
        # These are page metadata, not tooltip prose.
        if (
            spell_name_cf
            and lower.startswith(
                spell_name_cf
            )
            and (
                "requires " in lower
                or "talent" in lower
            )
        ):
            continue


        if lower.startswith(
            "requires "
        ):
            continue


        # Exact duplicate title.
        if (
            spell_name_cf
            and lower
            == spell_name_cf
        ):
            continue


        # Wowhead expression markup can leak a stray ">"
        # into visible text, e.g.
        #
        #   [(247% of Spell Power)> * 24]
        #
        # Player-facing text is:
        #
        #   [(247% of Spell Power) * 24]
        line = re.sub(
            r"\)>\s*(?=\*)",
            ") ",
            line,
        )

        cleaned.append(
            line
        )


    return (
        spell_name,
        "\n".join(
            cleaned
        ).strip(),
    )


def parse_spell_page(
    html: str,
    spell_id: int,
    url: str | None = None,
) -> WowheadSpellPage:
    """
    Parse both app-facing tooltip and structured effects from
    ONE Wowhead HTML response.
    """

    page_url = (
        url
        or BASE.format(
            spell_id=spell_id
        )
    )


    (
        spell_name,
        player_tooltip,
    ) = parse_player_tooltip(
        html
    )


    effects = parse_spell_html(
        html,
        spell_id=spell_id,
        url=page_url,
    )


    if not spell_name:

        if effects:

            spell_name = (
                effects[0]
                .spell_name
            )

        else:

            spell_name = (
                f"Spell {spell_id}"
            )


    return WowheadSpellPage(
        spell_id=int(
            spell_id
        ),

        spell_name=
            spell_name,

        player_tooltip=
            player_tooltip,

        effects=tuple(
            effects
        ),

        url=
            page_url,
    )


async def fetch_spell_page(
    client: CachedClient,
    spell_id: int,
) -> WowheadSpellPage:
    """
    Fetch once, parse twice:

        player-facing tooltip
        + structured Spell Details
    """

    url = BASE.format(
        spell_id=spell_id
    )

    html = await client.get_text(
        url
    )

    return parse_spell_page(
        html,
        spell_id=spell_id,
        url=url,
    )

