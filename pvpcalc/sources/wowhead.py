from __future__ import annotations

import re
from dataclasses import dataclass, replace

from bs4 import BeautifulSoup

from ..http import CachedClient
from ..models import EffectObservation


BASE = "https://www.wowhead.com/spell={spell_id}"
NETHER_BASE = (
    "https://nether.wowhead.com/tooltip/spell/{spell_id}"
    "?dataEnv=1&locale=0"
)


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
    metadata_overrides: tuple[tuple[str, int, str], ...] = ()
    icon: str = ""


def _tooltip_card_lines(html: str, spell_name: str) -> list[str]:
    """Keep inline spans inline; only real HTML blocks create text lines."""
    soup = BeautifulSoup(html, "lxml")
    # Wowhead appends technical affected-spell lists after the real description.
    for label in list(soup.select("span.q1")):
        if re.match(r"Modifies (?:Effect|Damage|Healing|Cooldown|Duration|Max)", label.get_text(strip=True)):
            parent = label.parent
            (parent if parent.name == "span" and "q" in parent.get("class", []) else label).decompose()
    for br in soup.find_all("br"):
        br.replace_with("\n")
    for block in soup.find_all(["table", "tr", "td", "th", "div", "p"]):
        block.insert_before("\n")
        block.insert_after("\n")
    text = re.sub(r"\[\s*\n\s*", "[", soup.get_text())
    text = re.sub(r"\s*\n\s*\]", "]", text)
    lines = [_clean_line(line) for line in text.splitlines()]
    lines = [line for line in lines if line and line.casefold() not in {"talent", "passive"}
             and not line.casefold().startswith("requires ")]
    # Only the leading title is chrome. A repeated title inside the body
    # introduces an embedded spell (e.g. Void Blast), not a new tooltip.
    while lines and lines[0].casefold() == spell_name.casefold():
        lines.pop(0)
    # A resolved scalar needs no arithmetic wrapper, including malformed (5)).
    return [re.sub(r"\(([+-]?\d+(?:\.\d+)?)\)\)+", r"\1", line)
            if re.search(r"\([+-]?\d+(?:\.\d+)?\)\)", line)
            else re.sub(r"\(([+-]?\d+(?:\.\d+)?)\)", r"\1", line) for line in lines]


def _metadata_overrides(html: str) -> tuple[tuple[str, int, str], ...]:
    return tuple((kind, int(aura), value.strip()) for kind, aura, value in
                 re.findall(r"<!--(cooldown|charges):(\d+):([^<>]+)-->", html))


def tooltip_for_specialization(page: WowheadSpellPage, aura_ids) -> str:
    lines = page.player_tooltip.splitlines()
    patterns = {"cooldown": r"^[\d.]+\s+(?:sec|min)\s+(?:cooldown|recharge)$",
                "charges": r"^\d+\s+Charges?$"}
    for kind, aura, value in page.metadata_overrides:
        if aura in aura_ids:
            lines = [value if re.fullmatch(patterns[kind], line, re.I) else line for line in lines]
    return "\n".join(lines)


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

    soup = BeautifulSoup(html, "lxml")
    title = soup.find("h1")
    if title:
        name = _clean_line(title.get_text(" ", strip=True))
        for card in soup.find_all("noscript"):
            heading = card.select_one(".whtt-name")
            if heading and _clean_line(heading.get_text(" ", strip=True)).casefold() == name.casefold():
                return name, "\n".join(_tooltip_card_lines(str(card), name))

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


    icon_meta = BeautifulSoup(html, "lxml").find("meta", property="og:image")
    icon_match = re.search(r"/icons/(?:large|medium|small)/([A-Za-z0-9_-]+)\.(?:jpg|png)",
                           str(icon_meta.get("content", ""))) if icon_meta else None

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
        metadata_overrides=_metadata_overrides(html),
        icon=icon_match[1] if icon_match else "",
    )


def parse_nether_tooltip_payload(
    payload: dict,
    spell_id: int,
    url: str | None = None,
) -> WowheadSpellPage:
    """
    Parse Wowhead's lightweight tooltip JSON endpoint.

    The Nether endpoint is intentionally used only as a
    player-facing tooltip fallback. It does not expose the full
    Spell Details table, so exact effect state continues to come
    from the normal Wowhead page and/or exact-build SimC.
    """

    spell_name = str(
        payload.get("name")
        or f"Spell {spell_id}"
    ).strip()

    tooltip_html = str(
        payload.get("tooltip")
        or ""
    )

    soup = BeautifulSoup(
        tooltip_html,
        "lxml",
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

    # The JSON payload may repeat the spell title. The catalog
    # already stores the talent name separately, so keep only the
    # actual player-facing body.
    while (
        lines
        and lines[0].casefold()
        == spell_name.casefold()
    ):
        lines.pop(0)

    return WowheadSpellPage(
        spell_id=int(spell_id),
        spell_name=spell_name,
        player_tooltip="\n".join(_tooltip_card_lines(tooltip_html, spell_name)),
        effects=tuple(),
        metadata_overrides=_metadata_overrides(tooltip_html),
        icon=str(payload.get("icon") or ""),
        url=(
            url
            or NETHER_BASE.format(
                spell_id=spell_id
            )
        ),
    )


async def fetch_nether_spell_page(
    client: CachedClient,
    spell_id: int,
) -> WowheadSpellPage:

    url = NETHER_BASE.format(
        spell_id=spell_id
    )

    payload = await client.get_json(
        url
    )

    return parse_nether_tooltip_payload(
        payload,
        spell_id=spell_id,
        url=url,
    )


async def fetch_spell_page(
    client: CachedClient,
    spell_id: int,
) -> WowheadSpellPage:
    """
    Fetch one current player-facing spell page.

    Primary source:
        full www.wowhead.com page, which also exposes Spell Details.

    Fallback:
        nether.wowhead.com tooltip JSON. This endpoint is much less
        affected by Wowhead's page WAF and is sufficient for the
        application tooltip when the full page returns 403.
    """

    url = BASE.format(
        spell_id=spell_id
    )

    try:
        html = await client.get_text(
            url
        )

        page = parse_spell_page(
            html,
            spell_id=spell_id,
            url=url,
        )

        if page.icon:
            return page

        # Some specialization-scoped Wowhead pages expose the full player
        # tooltip but omit og:image.  The lightweight Nether payload still
        # carries the canonical icon name, so supplement only the missing
        # metadata while preserving the richer full-page effects.
        try:
            fallback = (
                await fetch_nether_spell_page(
                    client,
                    spell_id,
                )
            )
        except Exception:
            return page

        return (
            replace(
                page,
                icon=fallback.icon,
            )
            if fallback.icon
            else page
        )

    except Exception:
        return await fetch_nether_spell_page(
            client,
            spell_id,
        )
