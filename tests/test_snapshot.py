import asyncio
from datetime import datetime, timedelta, timezone
import json

import httpx
import pytest

from pvpcalc.http import CachedClient, _PROCESS_CACHE
from pvpcalc.snapshot import HttpSnapshot, SnapshotError


def test_collect_deduplicates_requests_and_replay_never_uses_network(tmp_path, monkeypatch):
    snapshot = HttpSnapshot(tmp_path / 'inputs', recording=True)
    calls = []
    async def request(self, url, *, params=None):
        calls.append(url)
        return httpx.Response(200, text='{"value":7}', request=httpx.Request('GET', url))
    monkeypatch.setattr(CachedClient, '_request', request)
    async def collect():
        client = CachedClient(snapshot=snapshot)
        assert await asyncio.gather(*[client.get_json('https://example.test/a', {'b': 2, 'a': 1}) for _ in range(12)]) == [{'value': 7}] * 12
        await client.aclose()
    asyncio.run(collect())
    assert len(calls) == 1
    snapshot.seal({})
    async def forbidden(*args, **kwargs):
        raise AssertionError('Replay attempted a live request')
    monkeypatch.setattr(CachedClient, '_request', forbidden)
    async def replay():
        client = CachedClient(snapshot=HttpSnapshot(snapshot.directory))
        assert await client.get_json('https://example.test/a', {'a': 1, 'b': 2}) == {'value': 7}
    asyncio.run(replay())


def test_recorded_failure_is_identical_for_all_consumers(tmp_path, monkeypatch):
    snapshot = HttpSnapshot(tmp_path / 'inputs', recording=True)
    calls = []
    async def request(self, url, *, params=None):
        calls.append(url)
        response = httpx.Response(403, request=httpx.Request('GET', url))
        response.raise_for_status()
    monkeypatch.setattr(CachedClient, '_request', request)
    async def collect():
        client = CachedClient(snapshot=snapshot)
        for _ in range(3):
            with pytest.raises(httpx.HTTPStatusError) as error:
                await client.get_text('https://www.wowhead.com/spell=1')
            assert error.value.response.status_code == 403
    asyncio.run(collect())
    assert len(calls) == 1
    snapshot.seal({})
    with pytest.raises(httpx.HTTPStatusError):
        HttpSnapshot(snapshot.directory).read('https://www.wowhead.com/spell=1')


def test_missing_and_corrupted_sources_cannot_use_process_cache(tmp_path):
    snapshot = HttpSnapshot(tmp_path / 'inputs', recording=True)
    snapshot.record('https://example.test/a', 'original')
    manifest = snapshot.seal({})
    _PROCESS_CACHE['https://example.test/missing'] = 'stale cached response'
    replay = HttpSnapshot(snapshot.directory)
    with pytest.raises(SnapshotError, match='Uncaptured'):
        asyncio.run(CachedClient(snapshot=replay).get_text('https://example.test/missing'))
    sha = manifest['entries']['https://example.test/a']['sha256']
    (snapshot.directory / 'responses' / sha).write_text('corrupted')
    with pytest.raises(SnapshotError, match='integrity'):
        replay.read('https://example.test/a')
    assert len(replay.misses) == 2


def test_stale_or_modified_manifest_is_rejected(tmp_path):
    snapshot = HttpSnapshot(tmp_path / 'inputs', recording=True)
    snapshot.manifest['captured_at'] = (datetime.now(timezone.utc) - timedelta(hours=7)).isoformat()
    snapshot.seal({})
    with pytest.raises(SnapshotError, match='stale'):
        HttpSnapshot(snapshot.directory)
    p = snapshot.directory / 'snapshot.json'
    manifest = json.loads(p.read_text())
    manifest['captured_at'] = datetime.now(timezone.utc).isoformat()
    p.write_text(json.dumps(manifest))
    with pytest.raises(SnapshotError, match='integrity'):
        HttpSnapshot(snapshot.directory)
