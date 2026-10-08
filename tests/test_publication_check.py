from datetime import datetime, timedelta, timezone
import json
from pathlib import Path
import sys

import pytest

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'scripts'))
from check_publication import check, freshness, sha256


def public_files():
    spec = dict(verification_status='VERIFIED', fetch_error_count=0, unresolved_count=0, review_required_count=0)
    manifest = dict(generated_at=datetime.now(timezone.utc).isoformat(), spec_count=40,
                    classes=[dict(specs=[dict(spec) for _ in range(40)])])
    files = {'index.html': b'<html>Calculator</html>', 'data/manifest.json': json.dumps(manifest).encode(),
             'data/spec.json': b'{"value":7}'}
    inventory = dict(schema=1, files={name: sha256(body) for name, body in files.items()})
    return files, inventory


def test_live_files_must_match_exact_verified_artifact():
    files, inventory = public_files()
    result = check('https://example.test/', inventory, max_age_hours=12, attempts=1,
                   read=lambda base, name: files[name])
    assert result['spec_count'] == 40 and result['files_checked'] == 3
    files['data/spec.json'] = b'{"value":5}'
    with pytest.raises(ValueError, match='differs from verified artifact'):
        check('https://example.test/', inventory, max_age_hours=12, attempts=1,
              read=lambda base, name: files[name])


def test_only_unpropagated_files_are_retried():
    files, inventory = public_files()
    calls = []
    def read(base, name):
        calls.append(name)
        if name == 'data/spec.json' and calls.count(name) == 1:
            raise OSError('not propagated yet')
        return files[name]
    check('https://example.test/', inventory, max_age_hours=12, attempts=2, read=read, pause=lambda _: None)
    assert calls.count('data/spec.json') == 2 and calls.count('index.html') == 1


@pytest.mark.parametrize('hours', [13, -1])
def test_stale_and_future_data_are_rejected(hours):
    files, _ = public_files()
    manifest = json.loads(files['data/manifest.json'])
    manifest['generated_at'] = (datetime.now(timezone.utc) - timedelta(hours=hours)).isoformat()
    with pytest.raises(ValueError, match='data age'):
        freshness(manifest, max_age_hours=12)


def test_recent_republication_does_not_make_stale_sources_fresh():
    files, _ = public_files()
    manifest = json.loads(files['data/manifest.json'])
    manifest.update(source_snapshot_hash='verified-snapshot',
                    source_captured_at=(datetime.now(timezone.utc)-timedelta(hours=13)).isoformat())
    with pytest.raises(ValueError,match='source data age'):
        freshness(manifest,max_age_hours=12)
    manifest['source_captured_at'] = datetime.now(timezone.utc).isoformat()
    assert freshness(manifest,max_age_hours=12)['source_age_hours'] == 0
