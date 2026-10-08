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
