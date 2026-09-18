from __future__ import annotations
import asyncio
import httpx
from tenacity import retry, stop_after_attempt, wait_exponential

UA = "WoWPvPTalentLab/0.1 (+research; contact: local-user)"

# Process-wide cache. A class-wide multi-spec audit reuses many of the
# same class-tree and Wowhead spell URLs. Keeping the cache shared across
# short-lived CachedClient instances avoids refetching identical pages,
# dramatically reduces source load, and prevents self-inflicted rate
# limiting. It is intentionally process-local: scheduled jobs always
# begin from a clean network state.
_PROCESS_CACHE: dict[str, str] = {}


class CachedClient:
    """Small polite async client. One process cache + bounded concurrency."""
    def __init__(self, concurrency: int = 4, timeout: float = 20.0):
        self._client = httpx.AsyncClient(
            timeout=timeout,
            follow_redirects=True,
            headers={"User-Agent": UA, "Accept-Language": "en-US,en;q=0.9"},
            http2=True,
        )
        self._sem = asyncio.Semaphore(concurrency)
        self._cache = _PROCESS_CACHE

    @retry(stop=stop_after_attempt(3), wait=wait_exponential(multiplier=.5, min=.5, max=4))
    async def get_text(self, url: str) -> str:
        if url in self._cache:
            return self._cache[url]
        async with self._sem:
            r = await self._client.get(url)
            r.raise_for_status()
            self._cache[url] = r.text
            return r.text

    async def get_json(self, url: str, params=None):
        key = url + "?" + repr(sorted((params or {}).items()))
        if key in self._cache:
            import json
            return json.loads(self._cache[key])
        async with self._sem:
            r = await self._client.get(url, params=params)
            r.raise_for_status()
            self._cache[key] = r.text
            return r.json()

    async def aclose(self):
        await self._client.aclose()
