from __future__ import annotations

import asyncio
import json
from urllib.parse import urlparse

import httpx


UA = "WoWPvPTalentLab/0.1 (+research; public GitHub project)"

# Process-wide cache. A class-wide multi-spec build reuses many of the
# same class-tree and Wowhead spell URLs. Keeping the cache shared across
# CachedClient instances dramatically reduces upstream traffic.
_PROCESS_CACHE: dict[str, str] = {}


class CachedClient:
    """
    Small polite async client.

    Important production properties:
      * process-wide response cache;
      * bounded general concurrency;
      * much stricter Wowhead pacing;
      * retries only transient responses (429 / 5xx), never ordinary 404s;
      * Retry-After support so scheduled builds back off rather than
        amplifying an upstream rate limit.
    """

    def __init__(
        self,
        concurrency: int = 4,
        timeout: float = 20.0,
        *,
        wowhead_interval: float = 0.15,
        max_attempts: int = 5,
    ):
        self._client = httpx.AsyncClient(
            timeout=timeout,
            follow_redirects=True,
            headers={
                "User-Agent": UA,
                "Accept-Language": "en-US,en;q=0.9",
            },
            http2=True,
        )

        self._sem = asyncio.Semaphore(
            max(1, concurrency)
        )

        # Wowhead is the highest-volume source in a full 40-spec build.
        # One in-flight request plus a small interval is intentionally
        # conservative and makes scheduled refreshes much more stable.
        self._wowhead_sem = asyncio.Semaphore(1)
        self._wowhead_interval = max(
            0.0,
            float(wowhead_interval),
        )

        self._max_attempts = max(
            1,
            int(max_attempts),
        )

        self._cache = _PROCESS_CACHE


    @staticmethod
    def _is_wowhead(url: str) -> bool:
        host = (
            urlparse(url)
            .hostname
            or ""
        ).casefold()

        return (
            host == "wowhead.com"
            or host.endswith(".wowhead.com")
        )


    @staticmethod
    def _retry_delay(
        response: httpx.Response | None,
        attempt: int,
    ) -> float:
        if response is not None:
            raw = response.headers.get(
                "Retry-After"
            )

            if raw:
                try:
                    return min(
                        60.0,
                        max(
                            0.0,
                            float(raw),
                        ),
                    )
                except ValueError:
                    pass

        return min(
            20.0,
            0.75
            * (2 ** (attempt - 1)),
        )


    async def _request(
        self,
        url: str,
        *,
        params=None,
    ) -> httpx.Response:

        is_wowhead = self._is_wowhead(
            url
        )

        source_sem = (
            self._wowhead_sem
            if is_wowhead
            else self._sem
        )

        last_response = None

        for attempt in range(
            1,
            self._max_attempts + 1,
        ):

            try:
                async with source_sem:
                    if (
                        is_wowhead
                        and self._wowhead_interval
                    ):
                        await asyncio.sleep(
                            self._wowhead_interval
                        )

                    response = (
                        await self._client.get(
                            url,
                            params=params,
                        )
                    )

                last_response = response

                # Retry only errors that can reasonably recover.
                if (
                    response.status_code == 429
                    or 500
                    <= response.status_code
                    <= 599
                ):
                    if (
                        attempt
                        < self._max_attempts
                    ):
                        await asyncio.sleep(
                            self._retry_delay(
                                response,
                                attempt,
                            )
                        )
                        continue

                # 4xx such as 404 are deterministic source gaps and
                # should be surfaced immediately, not requested 3–5x.
                response.raise_for_status()

                return response

            except (
                httpx.TimeoutException,
                httpx.NetworkError,
            ):
                if (
                    attempt
                    >= self._max_attempts
                ):
                    raise

                await asyncio.sleep(
                    self._retry_delay(
                        last_response,
                        attempt,
                    )
                )

        # Defensive; normal exits happen above.
        assert last_response is not None
        last_response.raise_for_status()
        return last_response


    async def get_text(
        self,
        url: str,
    ) -> str:

        if url in self._cache:
            return self._cache[url]

        response = await self._request(
            url
        )

        self._cache[url] = (
            response.text
        )

        return response.text


    async def get_json(
        self,
        url: str,
        params=None,
    ):
        key = (
            url
            + "?"
            + repr(
                sorted(
                    (params or {}).items()
                )
            )
        )

        if key in self._cache:
            return json.loads(
                self._cache[key]
            )

        response = await self._request(
            url,
            params=params,
        )

        self._cache[key] = (
            response.text
        )

        return response.json()


    async def aclose(self):
        await self._client.aclose()
