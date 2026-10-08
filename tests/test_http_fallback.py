import asyncio

import httpx
import pytest

from pvpcalc.http import CachedClient, _PROCESS_CACHE
from pvpcalc.sources import wowhead


def test_full_page_waf_retries_are_bounded_and_nether_still_recovers(monkeypatch):
    calls = []
    def respond(request):
        calls.append(request.url.host)
        if request.url.host == 'www.wowhead.com':
            return httpx.Response(403,request=request)
        return httpx.Response(200,request=request,json={
            'name':'Example', 'tooltip':'<div>Example</div><div>Grants 20% healing.</div>',
            'icon':'spell_example'})
    monkeypatch.setattr(CachedClient,'_retry_delay',staticmethod(lambda *_:0))
    _PROCESS_CACHE.clear()
    async def run():
        client = CachedClient(wowhead_interval=0,max_attempts=5)
        client._client = httpx.AsyncClient(transport=httpx.MockTransport(respond))
        try:
            page = await wowhead.fetch_spell_page(client,987654321)
            assert page.icon=='spell_example' and page.player_tooltip
        finally:
            await client.aclose()
    asyncio.run(run())
    assert calls==['www.wowhead.com','www.wowhead.com','nether.wowhead.com']
    _PROCESS_CACHE.clear()


def test_transient_server_errors_keep_the_full_retry_budget(monkeypatch):
    calls=[]
    def respond(request):
        calls.append(request.url.host)
        return httpx.Response(503,request=request)
    monkeypatch.setattr(CachedClient,'_retry_delay',staticmethod(lambda *_:0))
    async def run():
        client=CachedClient(wowhead_interval=0,max_attempts=5)
        client._client=httpx.AsyncClient(transport=httpx.MockTransport(respond))
        try:
            with pytest.raises(httpx.HTTPStatusError):
                await client.get_text('https://www.wowhead.com/spell=987654322')
        finally:
            await client.aclose()
    asyncio.run(run())
    assert len(calls)==5
