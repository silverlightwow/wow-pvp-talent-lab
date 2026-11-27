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


@pytest.mark.parametrize("text, expected_name, expected_mode, expected_target, expected_scope", [
    ("San'layn: Vampiric Strike damage reduced by 20% in PvP combat.",
        "Vampiric Strike", "relative_reduction", None, ("Death Knight", "Unholy", "San'layn")),
    ("Prayer of Healing healing increased by 30% in PvP combat.",
        "Prayer of Healing", "relative_increase", None, ("Death Knight", "Unholy")),
    ("Chronowarden: Reverberations now causes Verdant Embrace to heal for an additional 80% over 8 seconds in PvP combat (was 40%).",
        "Reverberations", "absolute", "Verdant Embrace", ("Death Knight", "Unholy", "Chronowarden")),
    ("Deathblow\u2019s chance to be activated by Aimed Shot increased to 25% in PvP combat.",
        "Deathblow", "absolute", "Aimed Shot", ("Death Knight", "Unholy")),
    ("Strength of the Black Ox absorb increased by 25% in PvP combat.",
        "Strength of the Black Ox", "relative_increase", None, ("Death Knight", "Unholy")),
    ("All healing increased by 5% in PvP combat.",
        "__SPEC_HEALING__", "spec_relative_increase", None, ("Death Knight", "Unholy")),
])
def test_new_numeric_grammar_preserves_source(text, expected_name, expected_mode, expected_target, expected_scope):
    item = h._parse_candidate(text, hotfix_date=None, in_pvp_section=True,
                              context_path=("Death Knight", "Unholy"))
    assert item is not None
    assert item.talent_name == expected_name
    assert item.mode == expected_mode
    assert item.target_hint == expected_target
    assert item.context_path == expected_scope
    assert item.text == text


def test_pve_only_spec_tuning_is_context_not_a_pvp_overlay():
    from datetime import date
    from types import SimpleNamespace as NS
    html = """<h3>October 27, 2026</h3><h3>Classes</h3>
      <ul><li>Mage<ul><li>Fire<ul><li>All damage done increased by 5%. Does not affect PvP combat.</li></ul></li></ul></li></ul>
      <h3>Player versus Player</h3><ul><li>Mage<ul><li>Fire<ul><li>All damage reduced by 5% in PvP combat.</li></ul></li></ul></li></ul>"""
    items = h.parse_official_pvp_hotfixes(html)
    pve = next(i for i in items if i.mode.startswith("spec_pve_relative_"))
    pvp = next(i for i in items if i.mode.startswith("spec_relative_"))
    def row(sid, factor):
        return dict(source_spell_id=sid, effect_index=1, effect_text="School Damage", aura_factor=factor)
    talents = [NS(spell_id=sid, talent_name=f"Spell {sid}", mechanics=[row(sid, .82)])
               for sid in (1,2,3)]
    catalog = NS(talents=talents)
    baseline = {"2026-10-27": {"by_spell": {str(sid): {"mechanics": [row(sid,.91)]} for sid in (1,2,3)}}}
    assert h._spec_historical_relative_evidence(catalog,pvp,baseline) is None
    proof = h._spec_historical_relative_evidence(catalog,pvp,baseline,pve_context=(pve,))
    assert proof["changed_effects"][0]["comparison"] == "relative_with_pve_context"
    assert proof["pve_context"][0]["text"] == pve.text
    assert all(t.mechanics[0]["aura_factor"] == .82 for t in talents)
