"""Verify live Pages bytes against the exact artifact and check data freshness."""
from __future__ import annotations

import argparse
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
import hashlib
import json
from pathlib import Path
import time
from urllib.parse import urljoin
from urllib.request import Request, urlopen

from validate_site_data import validate_snapshot


def sha256(body):
    return hashlib.sha256(body).hexdigest()


def publication_inventory(web_dir: Path):
    validate_snapshot(web_dir / 'data')
    return dict(schema=1, files={p.relative_to(web_dir).as_posix(): sha256(p.read_bytes())
        for p in sorted(web_dir.rglob('*')) if p.is_file()
        and p.name != 'publication.json' and not any(part.startswith('.') for part in p.relative_to(web_dir).parts)})


def read_url(base_url: str, name: str) -> bytes:
    request = Request(urljoin(base_url.rstrip('/') + '/', name) + '?verify=' + str(time.time_ns()),
                      headers={'User-Agent': 'WoWPvPTalentLab-publication-check', 'Cache-Control': 'no-cache'})
    with urlopen(request, timeout=30) as response:
        return response.read()


def freshness(manifest: dict, *, max_age_hours: float, now=None):
    stamp = datetime.fromisoformat(manifest['generated_at'].replace('Z', '+00:00'))
    if stamp.tzinfo is None:
        raise ValueError('Publication timestamp has no timezone')
    age = ((now or datetime.now(timezone.utc)) - stamp).total_seconds() / 3600
    if age < -5 / 60 or age > max_age_hours:
        raise ValueError(f'Published data age is {age:.2f} hours (limit {max_age_hours:g})')
    source_age = None
    if manifest.get('source_snapshot_hash'):
        source_stamp = datetime.fromisoformat(manifest['source_captured_at'].replace('Z', '+00:00'))
        if source_stamp.tzinfo is None:
            raise ValueError('Source timestamp has no timezone')
        source_age = ((now or datetime.now(timezone.utc)) - source_stamp).total_seconds() / 3600
        if source_age < -5 / 60 or source_age > max_age_hours:
            raise ValueError(f'Published source data age is {source_age:.2f} hours (limit {max_age_hours:g})')
    specs = [s for c in manifest['classes'] for s in c['specs']]
    if not specs or len(specs) != manifest['spec_count'] or any(
        s.get('verification_status') != 'VERIFIED' or any(s.get(k, -1) for k in
            ('fetch_error_count', 'unresolved_count', 'review_required_count')) for s in specs):
        raise ValueError('Live manifest contains incomplete specializations')
    return dict(spec_count=len(specs), age_hours=round(age, 2), generated_at=manifest['generated_at'],
                source_age_hours=round(source_age, 2) if source_age is not None else None)


def check(base_url: str, inventory: dict | None, *, max_age_hours: float, attempts: int,
          read=read_url, pause=time.sleep, health_only=False):
    if inventory is None:
        inventory = json.loads(read(base_url, 'publication.json'))
    files = inventory['files']
    if inventory.get('schema') != 1 or 'data/manifest.json' not in files or 'index.html' not in files:
        raise ValueError('Invalid publication inventory')
    if any(Path(name).is_absolute() or '..' in Path(name).parts for name in files):
        raise ValueError('Unsafe publication path')
    pending = {name: sha for name, sha in files.items() if not health_only
               or not name.startswith('data/') or name in {'data/manifest.json', 'data/manifest.js'}}
    checked_count = len(pending)
    errors = {}
    manifest = None
    def verify(item):
        name, expected = item
        try:
            body = read(base_url, name)
            if sha256(body) != expected:
                raise ValueError('content differs from verified artifact')
            return name, body, None
        except Exception as exc:
            return name, None, str(exc)
    for attempt in range(attempts):
        with ThreadPoolExecutor(max_workers=4) as executor:
            for name, body, error in executor.map(verify, list(pending.items())):
                if error:
                    errors[name] = error
                else:
                    pending.pop(name)
                    errors.pop(name, None)
                    if name == 'data/manifest.json':
                        manifest = json.loads(body)
        if not pending:
            # Re-read the manifest at the end to detect a concurrent deployment.
            if sha256(read(base_url, 'data/manifest.json')) != files['data/manifest.json']:
                raise ValueError('Publication changed during verification')
            return dict(files_checked=checked_count, **freshness(manifest, max_age_hours=max_age_hours))
        if attempt + 1 < attempts:
            pause(20)
    raise ValueError('Publication verification failed: ' + json.dumps(errors, sort_keys=True))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--web-dir', type=Path, default=Path('web'))
    parser.add_argument('--write-inventory', action='store_true')
    parser.add_argument('--base-url')
    parser.add_argument('--expected-inventory', type=Path)
    parser.add_argument('--max-age-hours', type=float, default=12)
    parser.add_argument('--attempts', type=int, default=6)
    parser.add_argument('--health-only', action='store_true')
    args = parser.parse_args()
    if args.write_inventory:
        result = publication_inventory(args.web_dir)
        (args.web_dir / 'publication.json').write_text(json.dumps(result, indent=2) + '\n')
        print(f'Publication inventory: {len(result["files"])} files')
    else:
        if not args.base_url:
            parser.error('--base-url is required for live verification')
        expected = json.loads(args.expected_inventory.read_text()) if args.expected_inventory else None
        print(json.dumps(check(args.base_url, expected, max_age_hours=args.max_age_hours,
                               attempts=args.attempts, health_only=args.health_only), indent=2))


if __name__ == '__main__':
    main()
