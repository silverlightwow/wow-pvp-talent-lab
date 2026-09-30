"""Integrity-checked HTTP inputs, collected once and replayed without network."""
from __future__ import annotations

from datetime import datetime, timezone
import hashlib
import json
import os
from pathlib import Path

import httpx


def digest(value) -> str:
    return hashlib.sha256(json.dumps(value, sort_keys=True, separators=(',', ':'),
                                     ensure_ascii=False).encode()).hexdigest()


class SnapshotError(RuntimeError):
    pass


class HttpSnapshot:
    def __init__(self, directory: Path, *, recording: bool = False):
        self.directory = directory
        self.recording = recording
        self.misses: set[str] = set()
        self._verified: dict[str, str] = {}
        if recording:
            directory.mkdir(parents=True, exist_ok=False)
            (directory / 'responses').mkdir()
            self.manifest = dict(schema=1, captured_at=datetime.now(timezone.utc).isoformat(),
                                 entries={}, context={})
        else:
            self.manifest = json.loads((directory / 'snapshot.json').read_text())
            expected = self.manifest.get('snapshot_hash')
            content = {k: v for k, v in self.manifest.items() if k != 'snapshot_hash'}
            if self.manifest.get('schema') != 1 or expected != digest(content):
                raise SnapshotError('Source snapshot manifest integrity check failed')
            captured = datetime.fromisoformat(self.manifest['captured_at'])
            age = (datetime.now(timezone.utc) - captured).total_seconds()
            if not -300 <= age <= 6 * 3600:
                raise SnapshotError('Source snapshot is stale or has a future timestamp')

    def read(self, key: str) -> str:
        entry = self.manifest['entries'].get(key)
        if entry is None:
            self.misses.add(key)
            raise SnapshotError(f'Uncaptured source request: {key}')
        request = httpx.Request('GET', key)
        if 'status' in entry:
            response = httpx.Response(entry['status'], request=request)
            response.raise_for_status()
        if 'error' in entry:
            raise httpx.NetworkError(entry['error'], request=request)
        sha = entry['sha256']
        if len(sha) != 64 or any(c not in '0123456789abcdef' for c in sha):
            self.misses.add(key)
            raise SnapshotError('Invalid source response identity')
        if sha not in self._verified:
            body = (self.directory / 'responses' / sha).read_bytes()
            if hashlib.sha256(body).hexdigest() != sha:
                self.misses.add(key)
                raise SnapshotError(f'Source response integrity check failed: {key}')
            self._verified[sha] = body.decode('utf-8')
        return self._verified[sha]

    def record(self, key: str, text: str):
        body = text.encode('utf-8')
        sha = hashlib.sha256(body).hexdigest()
        (self.directory / 'responses' / sha).write_bytes(body)
        self.manifest['entries'][key] = dict(sha256=sha)

    def record_error(self, key: str, error: Exception):
        if isinstance(error, httpx.HTTPStatusError):
            self.manifest['entries'][key] = dict(status=error.response.status_code)
        elif isinstance(error, (httpx.NetworkError, httpx.TimeoutException)):
            self.manifest['entries'][key] = dict(error=type(error).__name__)
        else:
            raise error

    def seal(self, context: dict) -> dict:
        self.manifest['context'] = context
        self.manifest['sealed_at'] = datetime.now(timezone.utc).isoformat()
        self.manifest['snapshot_hash'] = digest(self.manifest)
        (self.directory / 'snapshot.json').write_text(json.dumps(self.manifest, indent=2) + '\n')
        return self.manifest


_snapshots: dict[str, HttpSnapshot] = {}


def active_snapshot() -> HttpSnapshot | None:
    directory = os.environ.get('WOW_PVP_SOURCE_SNAPSHOT')
    if not directory:
        return None
    path = str(Path(directory).resolve())
    if path not in _snapshots:
        _snapshots[path] = HttpSnapshot(Path(path))
    return _snapshots[path]


def source_provenance(class_name: str) -> dict | None:
    snapshot = active_snapshot()
    if snapshot is None:
        return None
    if snapshot.misses:
        raise SnapshotError('Build requested uncaptured sources: ' + ', '.join(sorted(snapshot.misses)))
    context = snapshot.manifest['context']
    if context['parser_hash'] != parser_hash():
        raise SnapshotError('Source snapshot was collected by a different parser revision')
    return dict(snapshot_hash=snapshot.manifest['snapshot_hash'],
                captured_at=snapshot.manifest['captured_at'],
                parser_hash=context['parser_hash'],
                evidence_hash=context['classes'][class_name]['evidence_hash'])


def parser_hash() -> str:
    root = Path(__file__).resolve().parents[1]
    paths = sorted((root / 'pvpcalc').rglob('*.py')) + [
        root / 'scripts' / name for name in
        ('build_all_site_data.py', 'validate_site_data.py', 'collect_source_snapshot.py')]
    return digest({str(p.relative_to(root)): p.read_text() for p in paths})
