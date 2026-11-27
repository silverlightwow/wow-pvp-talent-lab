import asyncio
import subprocess
from types import SimpleNamespace

import httpx
import pytest

from pvpcalc.sources import simc


SHA = "a" * 40


class Client:
    def __init__(self, status=200, payload=None):
        self.status = status
        self.payload = {"sha": SHA} if payload is None else payload

    async def get_json(self, url):
        if self.status != 200:
            response = httpx.Response(self.status, request=httpx.Request("GET", url))
            response.raise_for_status()
        return self.payload


def test_rest_identity_is_immutable(monkeypatch):
    monkeypatch.setattr(subprocess, "run", lambda *a, **k: pytest.fail("unnecessary Git request"))
    assert asyncio.run(simc.resolve_branch_revision(Client())) == {
        "sha": SHA, "method": "github_rest", "ref": "refs/heads/midnight"}


@pytest.mark.parametrize("status", [403, 429])
def test_rate_limited_api_uses_public_git_identity(monkeypatch, status):
    def git(args, **kwargs):
        assert args[-2:] == ["https://github.com/simulationcraft/simc.git", "refs/heads/midnight"]
        assert kwargs["timeout"] == 45 and kwargs["check"] is True
        assert kwargs["env"]["GIT_TERMINAL_PROMPT"] == "0"
        return SimpleNamespace(stdout=SHA + "\trefs/heads/midnight\n")
    monkeypatch.setattr(subprocess, "run", git)
    proof = asyncio.run(simc.resolve_branch_revision(Client(status)))
    assert proof["sha"] == SHA and proof["method"] == "git_ls_remote" and proof["api_status"] == status


@pytest.mark.parametrize("output", ["midnight", SHA + "\trefs/heads/other",
    SHA + "\trefs/heads/midnight\n" + SHA + "\trefs/heads/midnight"])
def test_invalid_git_identity_refuses_publication(monkeypatch, output):
    monkeypatch.setattr(subprocess, "run", lambda *a, **k: SimpleNamespace(stdout=output))
    with pytest.raises(ValueError):
        asyncio.run(simc.resolve_branch_revision(Client(403)))


@pytest.mark.parametrize("status", [401, 404, 500])
def test_unrelated_http_failure_does_not_choose_fallback(monkeypatch, status):
    monkeypatch.setattr(subprocess, "run", lambda *a, **k: pytest.fail("unexpected Git request"))
    with pytest.raises(httpx.HTTPStatusError):
        asyncio.run(simc.resolve_branch_revision(Client(status)))


def test_mutable_or_malformed_rest_ref_is_rejected():
    with pytest.raises(ValueError):
        asyncio.run(simc.resolve_branch_revision(Client(payload={"sha": "midnight"})))
