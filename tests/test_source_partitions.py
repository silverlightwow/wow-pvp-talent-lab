import asyncio
from argparse import Namespace
import json
from pathlib import Path
import sys

import httpx
import pytest

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'scripts'))
from collect_source_snapshot import capture_pages, capture_partition, merge_partitions
from pvpcalc.http import CachedClient
from pvpcalc.snapshot import HttpSnapshot, digest
from pvpcalc.sources import wowhead


@pytest.fixture
def partitions(tmp_path, monkeypatch):
    plan = HttpSnapshot(tmp_path / 'plan', recording=True)
    plan.record('https://example.test/immutable-class-data', 'frozen class data')
    plan.seal(dict(spell_ids=[1, 2, 3, 4], spell_count=4, classes={},
                   simc_ref='same-revision', parser_hash='same-parser'))
    calls = []
    async def request(self, url, *, params=None):
        calls.append(url)
        return httpx.Response(200, text='Captured ' + url, request=httpx.Request('GET', url))
    async def fetch_page(client, spell_id):
        return await client.get_text(wowhead.BASE.format(spell_id=spell_id))
    monkeypatch.setattr(CachedClient, '_request', request)
    monkeypatch.setattr(wowhead, 'fetch_spell_page', fetch_page)
    parts = tmp_path / 'parts'
    for index in range(2):
        asyncio.run(capture_partition(Namespace(input_plan=plan.directory,
            output=parts / f'part-{index}', partitions=2, partition_index=index)))
    return plan, parts, calls


def merge_args(plan, parts, output):
    return Namespace(input_plan=plan.directory, parts_dir=parts, output=output, partitions=2)


def test_disjoint_capture_merges_one_integrity_checked_snapshot(partitions, tmp_path):
    plan, parts, calls = partitions
    output = tmp_path / 'merged'
    result = merge_partitions(merge_args(plan, parts, output))
    assert len(calls) == len(set(calls)) == 4
    assert result['context'] == plan.manifest['context']
    replay = HttpSnapshot(output)
    assert replay.read('https://example.test/immutable-class-data') == 'frozen class data'
    for spell_id in range(1, 5):
        url = wowhead.BASE.format(spell_id=spell_id)
        assert replay.read(url) == 'Captured ' + url


def test_missing_partition_cannot_publish_a_partial_snapshot(partitions, tmp_path):
    plan, parts, _ = partitions
    (parts / 'part-1' / 'snapshot.json').unlink()
    with pytest.raises(ValueError, match='Missing or duplicate'):
        merge_partitions(merge_args(plan, parts, tmp_path / 'merged'))


def test_partitions_from_different_source_plans_are_rejected(partitions, tmp_path):
    plan, parts, _ = partitions
    path = parts / 'part-1' / 'snapshot.json'
    manifest = json.loads(path.read_text())
    manifest['context']['plan_hash'] = 'different-plan'
    manifest['snapshot_hash'] = digest({k: v for k, v in manifest.items() if k != 'snapshot_hash'})
    path.write_text(json.dumps(manifest))
    with pytest.raises(ValueError, match='different input plan'):
        merge_partitions(merge_args(plan, parts, tmp_path / 'merged'))


def test_capture_keeps_required_nether_evidence_when_full_page_succeeds(tmp_path, monkeypatch):
    snapshot=HttpSnapshot(tmp_path/'capture',recording=True)
    client=CachedClient(snapshot=snapshot)
    calls=[]
    async def request(self,url,*,params=None):
        calls.append(url)
        return httpx.Response(200,text='{}',request=httpx.Request('GET',url))
    async def fetch_page(client,spell_id):
        return await client.get_text(wowhead.BASE.format(spell_id=spell_id))
    monkeypatch.setattr(CachedClient,'_request',request)
    monkeypatch.setattr(wowhead,'fetch_spell_page',fetch_page)
    asyncio.run(capture_pages(client,[1,2],nether_spell_ids=[1]))
    snapshot.seal({})
    assert set(calls)=={wowhead.BASE.format(spell_id=1),wowhead.BASE.format(spell_id=2),
                        wowhead.NETHER_BASE.format(spell_id=1)}
    replay=HttpSnapshot(snapshot.directory)
    assert replay.read(wowhead.NETHER_BASE.format(spell_id=1))=='{}'
