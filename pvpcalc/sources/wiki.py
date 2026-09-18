from __future__ import annotations

import re
from bs4 import BeautifulSoup

from ..models import WikiObservation
from ..http import CachedClient


API = "https://warcraft.wiki.gg/api.php"

PVP_RE = re.compile(
    r"\bPvP\b|player versus player",
    re.I,
)

PATCH_RE = re.compile(
    r"^Patch\s+"
    r"(?P<version>\d+\.\d+\.\d+)"
    r"\s*\((?P<date>\d{4}-\d{2}-\d{2})\)"
    r"\s*:\s*(?P<text>.*)$",
    re.I,
)

HOTFIX_RE = re.compile(
    r"^(?:.*?)?"
    r"Hotfix"
    r"\s*\((?P<date>\d{4}-\d{2}-\d{2})\)"
    r"\s*:\s*(?P<text>.*)$",
    re.I,
)


def _clean(text: str) -> str:
    return " ".join(
        text.replace("\xa0", " ").split()
    )


def _parse_change(text: str) -> dict:
    """
    Convert one Warcraft Wiki patch-change bullet into
    a normalized event.
    """

    text = _clean(text)

    patch_match = PATCH_RE.match(text)

    if patch_match:
        body = patch_match.group("text")

        return {
            "type": "patch",
            "version": patch_match.group("version"),
            "date": patch_match.group("date"),
            "text": body,
            "is_pvp": bool(PVP_RE.search(body)),
            "raw": text,
        }

    hotfix_match = HOTFIX_RE.match(text)

    if hotfix_match:
        body = hotfix_match.group("text")

        return {
            "type": "hotfix",
            "version": None,
            "date": hotfix_match.group("date"),
            "text": body,
            "is_pvp": bool(PVP_RE.search(body)),
            "raw": text,
        }

    # Preserve anything we don't yet understand.
    return {
        "type": "unknown",
        "version": None,
        "date": None,
        "text": text,
        "is_pvp": bool(PVP_RE.search(text)),
        "raw": text,
    }


def parse_patch_changes_html(
    html: str,
) -> list[dict]:
    """
    Extract INDIVIDUAL <li> entries from the Patch changes section.

    Important:
    the old implementation called get_text() on the whole <ul>,
    merging every historical event into one giant string.
    """

    soup = BeautifulSoup(html, "lxml")

    marker = soup.find(
        id=re.compile(
            r"^Patch[_ ]changes?$",
            re.I,
        )
    )

    if marker is None:
        return []

    # Usually <span id="Patch_changes"> inside an <h2>.
    section_header = marker.find_parent(
        ["h2", "h3"]
    )

    if section_header is None:
        section_header = marker.parent

    events = []
    seen = set()

    node = section_header.find_next_sibling()

    while node is not None:

        if node.name in ("h2", "h3"):
            break

        if node.name == "li":
            li_nodes = [node]
        else:
            li_nodes = node.find_all(
                "li",
                recursive=True,
            )

        for li in li_nodes:

            text = _clean(
                li.get_text(
                    " ",
                    strip=True,
                )
            )

            if not text:
                continue

            # Protect against nested-list duplicate extraction.
            if text in seen:
                continue

            seen.add(text)

            events.append(
                _parse_change(text)
            )

        node = node.find_next_sibling()

    return events


async def search_page(
    client: CachedClient,
    name: str,
) -> str | None:

    data = await client.get_json(
        API,
        params={
            "action": "query",
            "list": "search",
            "srsearch": f'intitle:"{name}"',
            "srlimit": 5,
            "format": "json",
            "origin": "*",
        },
    )

    hits = (
        data
        .get("query", {})
        .get("search", [])
    )

    exact = next(
        (
            item
            for item in hits
            if item["title"].casefold()
            == name.casefold()
        ),
        None,
    )

    if exact:
        return exact["title"]

    if hits:
        return hits[0]["title"]

    return None


async def fetch_page(
    client: CachedClient,
    spell_id: int,
    name: str,
) -> WikiObservation | None:

    title = await search_page(
        client,
        name,
    )

    if not title:
        return None

    data = await client.get_json(
        API,
        params={
            "action": "parse",
            "page": title,
            "prop": "text",
            "format": "json",
            "origin": "*",
        },
    )

    html = (
        data
        .get("parse", {})
        .get("text", {})
        .get("*", "")
    )

    soup = BeautifulSoup(
        html,
        "lxml",
    )

    full_text = soup.get_text(
        "\n",
        strip=True,
    )

    changes = parse_patch_changes_html(
        html
    )

    # Backwards-compatible field used by our existing pipeline.
    # Now every entry is actually a separate PvP event.
    pvp_notes = [
        event["raw"]
        for event in changes
        if event["is_pvp"]
    ]

    return WikiObservation(
        source="warcraft_wiki",
        spell_id=spell_id,
        spell_name=title,
        current_tooltip=full_text[:2500],
        pvp_notes=pvp_notes,
        changes=changes,
        page_url=(
            "https://warcraft.wiki.gg/wiki/"
            + title.replace(" ", "_")
        ),
    )
