import json
from pathlib import Path
from types import SimpleNamespace

import pytest

from pvpcalc.sources.blizzard_hotfixes import OfficialPvpHotfix


@pytest.mark.parametrize('endpoint_date, endpoint_hash, accepted', [
    ('2026-09-24', 'original-endpoint', True),
    ('2026-09-21', 'original-endpoint', False),
    ('2026-09-24', 'different-endpoint', False),
])
def test_tuning_history_keeps_original_git_endpoint_across_refreshes(
        tmp_path, monkeypatch, endpoint_date, endpoint_hash, accepted):
    monkeypatch.syspath_prepend(str(Path(__file__).resolve().parents[1] / 'scripts'))
    import build_all_site_data as builder
    monkeypatch.chdir(tmp_path)
    before, anchor = 'a' * 40, 'b' * 40
    text = 'All damage increased by 5% in PvP combat.'
    original = dict(date='2026-09-22', text=text,
                    evidence=dict(source='historical_verified_snapshot'))
    endpoint = dict(talents=[dict(spell_id=1, mechanics=[])],
        official_hotfixes=dict(already_current=[original], unresolved=[], latest_date=endpoint_date),
        validation=dict(verification_status='VERIFIED'), coverage=dict(semantic_hash=endpoint_hash))
    current = dict(official_hotfixes=dict(already_current=[dict(date='2026-09-22', text=text,
        evidence=dict(source='historically_verified_tuning', verified_post_commit=anchor,
                      verified_post_content_hash='original-endpoint'))]))
    path = tmp_path / 'web/data/example.json'
    path.parent.mkdir(parents=True)
    path.write_text(json.dumps(current))

    def git(args, **kwargs):
        if args[1] == 'rev-list':
            return SimpleNamespace(stdout=before + '\n')
        commit = args[2].split(':')[0]
        return SimpleNamespace(stdout=json.dumps(endpoint if commit == anchor else {'talents': []}))

    monkeypatch.setattr(builder.subprocess, 'run', git)
    hotfix = OfficialPvpHotfix('__SPEC_DAMAGE__', 5, None, None, text,
        __import__('datetime').date(2026, 9, 22), mode='spec_relative_increase')
    later = OfficialPvpHotfix('Newer Spell', 20, 30, None, 'Newer Spell now grants 20%.',
                             __import__('datetime').date(2026, 10, 6))
    baseline = builder._load_historical_hotfix_baselines(slug='example', hotfixes=[hotfix, later])['2026-09-22']
    assert ('verified_post_by_spell' in baseline) == accepted
    if accepted:
        assert baseline['verified_post_commit'] == anchor
        assert baseline['verified_post_content_hash'] == 'original-endpoint'
    # The latest directive must still be proved from current mechanics.
    latest = builder._load_historical_hotfix_baselines(slug='example', hotfixes=[hotfix])['2026-09-22']
    assert 'verified_post_by_spell' not in latest


def _relative_fixture():
    from datetime import date
    from pvpcalc.sources import blizzard_hotfixes as h
    from test_blizzard_hotfixes import FakeTalent
    older = h.OfficialPvpHotfix("Example Strike", 100, None, None,
        "Example Strike damage increased by 100% in PvP combat.", date(2026, 9, 22),
        mode="relative_increase", context_path=("Example Class", "Example Spec"))
    newer = h.OfficialPvpHotfix("Example Strike", 20, None, None,
        "Example Strike damage reduced by 20% in PvP combat.", date(2026, 10, 27),
        mode="relative_reduction", context_path=older.context_path)
    def row(multiplier):
        return dict(source_spell_id=101, effect_index=1, effect_text="School Damage (AP mod: 1)",
            spell_pvp_multiplier=multiplier, aura_factor=1, final_pvp_multiplier=multiplier,
            final_pvp_value=None, base_value=None, coefficient_based=True)
    old_talent = dict(spell_id=100, talent_name="Example Strike", mechanics=[row(2)])
    current = FakeTalent("Example Strike", 100, "Deals damage.", "Deals damage.", mechanics=[row(1.6)])
    proof = dict(spell_id=100, text=older.text, date=older.hotfix_date.isoformat())
    baselines = {
        "2026-09-22": dict(commit="a"*40, by_spell={"100": dict(spell_id=100, mechanics=[row(1)])}),
        "2026-10-27": dict(commit="b"*40, verified=True, by_spell={"100": old_talent},
            official_report=dict(already_current=[proof], unresolved=[]))}
    return h, older, newer, current, baselines


def test_relative_successor_keeps_prior_event_without_reapplying():
    h, older, newer, current, baselines = _relative_fixture()
    evidence = h._historically_superseded(current, older, [older, newer], baselines)
    assert evidence["source"] == "historically_superseded"
    assert evidence["previous_event"]["ratio"] == 2
    assert evidence["successor_event"]["ratio"] == pytest.approx(.8)
    assert current.mechanics[0]["spell_pvp_multiplier"] == 1.6


@pytest.mark.parametrize("corruption", ["scope", "effect", "proof", "verified", "output", "numeric"])
def test_relative_successor_refuses_unproved_history(corruption):
    from dataclasses import replace
    h, older, newer, current, baselines = _relative_fixture()
    if corruption == "scope":
        newer = replace(newer, context_path=("Other Class",))
    elif corruption == "effect":
        current.mechanics[0]["effect_index"] = 2
    elif corruption == "proof":
        baselines["2026-10-27"]["official_report"]["already_current"] = []
    elif corruption == "verified":
        baselines["2026-10-27"]["verified"] = False
    elif corruption == "output":
        current.mechanics[0]["effect_text"] = "Direct Heal (SP mod: 1)"
    else:
        current.mechanics[0].update(spell_pvp_multiplier=1.7, final_pvp_multiplier=1.7)
    assert h._historically_superseded(current, older, [older, newer], baselines) is None


def test_absolute_successor_matches_parallel_effect_ids_not_names_only():
    from datetime import date
    from pvpcalc.sources import blizzard_hotfixes as h
    from test_blizzard_hotfixes import FakeTalent
    old = h.OfficialPvpHotfix("Example Talent", 75, 60, None,
        "Example Talent now increases ricochet damage by 75% (was 60%).",
        date(2026, 9, 22), mode="class_absolute")
    new = h.OfficialPvpHotfix("Example Talent", 85, 75, None,
        "Example Talent now increases ricochet damage by 85% (was 75%).",
        date(2026, 10, 27), mode="class_absolute")
    def rows(value):
        return [dict(source_spell_id=100, effect_index=i, base_value=value) for i in (4, 5)]
    prior = dict(spell_id=100, pve_tooltip="Ricochets deal 75% damage.",
                 pvp_tooltip="Ricochets deal 40.5% damage.", mechanics=rows(75))
    current = FakeTalent("Example Talent", 100, "Ricochets deal 85% damage.",
                        "Ricochets deal 45.9% damage.", mechanics=rows(85))
    baseline = {"2026-10-27": dict(verified=True, commit="b"*40,
        by_spell={"100": prior}, official_report=dict(already_current=[
            dict(spell_id=100, date=old.hotfix_date.isoformat(), text=old.text)]))}
    proof = h._historically_superseded(current, old, [old, new], baseline)
    assert proof["effect_keys"] == [[100, 4], [100, 5]]
    current.mechanics.pop()
    assert h._historically_superseded(current, old, [old, new], baseline) is None
