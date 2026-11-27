import asyncio
import json

import pytest

from pvpcalc.sources import blizzard_hotfixes as h

OLD = h.OFFICIAL_HOTFIX_URL
NEW = "https://news.blizzard.com/en-us/article/12345678/hotfixes-november-24-2026"
NEXT = "https://news.blizzard.com/en-us/article/12345679/hotfixes-december-2-2026"
INDEX = h.OFFICIAL_HOTFIX_INDEX


def article(day, text, class_name="Priest"):
    return f"<h3>{day}</h3><ul><li>Player versus Player<ul><li>{class_name}<ul><li>{text}</li></ul></li></ul></li></ul>"


OLD_TEXT = "Old Talent now grants 20% in PvP combat (was 10%)."
NEW_TEXT = "New Talent now grants 30% in PvP combat (was 20%)."


class Client:
    def __init__(self, pages):
        self.pages = pages
        self.requests = []

    async def get_text(self, url):
        self.requests.append(url)
        return self.pages[url]


def index(*urls):
    return "".join(f'<a href="{url}">Hotfixes</a>' for url in urls)


def test_discovery_filters_other_products_and_untrusted_hosts():
    html = index(NEW, NEXT,
        "https://news.blizzard.com/en-us/article/1/wow-forever-hotfixes-november-25-2026",
        "https://example.com/en-us/article/2/hotfixes-november-30-2026",
        NEW.replace("november-24", "november-5"))
    assert h.discover_official_hotfix_articles(html) == [NEXT, NEW]


def test_rollover_keeps_old_provenance_and_all_intervening_notes(tmp_path):
    pages = {INDEX: index(NEW), OLD: article("October 6, 2026", OLD_TEXT),
             NEW: article("October 27, 2026", NEW_TEXT) +
                  article("November 24, 2026", "Latest Talent now grants 40% in PvP combat (was 30%).")}
    client = Client(pages)
    results = asyncio.run(h.fetch_official_pvp_hotfixes(client,
                          previous_keys={("2026-10-06", OLD_TEXT)}))
    assert [x.text for x in results][:2] == [OLD_TEXT, NEW_TEXT]
    assert [x.source_url for x in results] == [OLD, NEW, NEW]
    snap = h.snapshot_for_hotfixes(results)
    assert snap["source_url"] == NEW
    assert set(snap["source_urls"]) == {OLD, NEW}
    assert h.hotfixes_from_snapshot(snap) == results
    (tmp_path / "priest-holy.json").write_text(json.dumps({"official_hotfixes": snap}))
    assert h.published_hotfix_sources(tmp_path) == {OLD, NEW}
    pages[INDEX] = index(NEXT)
    pages[NEXT] = article("December 2, 2026", "Newest Talent now grants 50% in PvP combat (was 40%).")
    again = asyncio.run(h.fetch_official_pvp_hotfixes(Client(pages),
        previous_keys={("2026-10-27", NEW_TEXT)}, previous_sources=h.published_hotfix_sources(tmp_path)))
    assert any(x.text == NEW_TEXT for x in again)
    assert again[-1].source_url == NEXT


def test_unknown_index_and_unparsed_current_directive_fail_closed():
    with pytest.raises(RuntimeError, match="No Retail"):
        asyncio.run(h.fetch_official_pvp_hotfixes(Client({INDEX: "<html/>"})))
    with pytest.raises(RuntimeError, match="Unparsed numeric PvP hotfix"):
        asyncio.run(h.fetch_official_pvp_hotfixes(Client({INDEX: index(NEW),
            NEW: article("November 24, 2026", "Strange interaction changes by 37% in PvP combat.")})))


def test_same_directive_words_under_different_classes_remain_distinct():
    client = Client({INDEX: index(NEW), NEW:
        article("November 24, 2026", NEW_TEXT, "Priest") +
        article("November 24, 2026", NEW_TEXT, "Mage")})
    results = asyncio.run(h.fetch_official_pvp_hotfixes(client))
    assert {x.context_path for x in results} == {("Priest",), ("Mage",)}


def test_missing_previous_evidence_and_stale_index_fail_closed():
    client = Client({INDEX: index(NEW), OLD: article("October 6, 2026", OLD_TEXT),
                     NEW: article("November 24, 2026", NEW_TEXT)})
    with pytest.raises(RuntimeError, match="missing from source"):
        asyncio.run(h.fetch_official_pvp_hotfixes(client,
            previous_keys={("2026-10-06", "Missing directive")}))
    client = Client({INDEX: index(NEW), OLD: article("December 2, 2026", OLD_TEXT),
                     NEW: article("November 24, 2026", NEW_TEXT)})
    with pytest.raises(RuntimeError, match="older than"):
        asyncio.run(h.fetch_official_pvp_hotfixes(client,
            previous_keys={("2026-12-02", OLD_TEXT)}, previous_sources={OLD}))
