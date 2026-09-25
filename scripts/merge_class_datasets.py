"""Merge independently verified artifacts without modifying the prior snapshot on failure."""
from __future__ import annotations

import argparse
from datetime import datetime, timezone
import json
from pathlib import Path
import shutil
import tempfile

from validate_site_data import validate_snapshot


def merge(*, artifacts_root: Path, output_dir: Path, expected_specs=None) -> dict:
    manifests = [(p.parent, json.loads(p.read_text())) for p in sorted(artifacts_root.glob('**/manifest.json'))]
    if not manifests:
        raise ValueError('No dataset manifests found')
    builds = {m.get('tree_build') for _, m in manifests}
    hashes = {m.get('content_hash') for _, m in manifests}
    hotfix_hashes = {m.get('hotfix_snapshot_hash') for _, m in manifests}
    hotfix_dates = {m.get('hotfix_latest_date') for _, m in manifests}
    if len(builds) != 1 or None in builds or len(hashes) != 1 or None in hashes:
        raise ValueError('Artifacts have inconsistent source builds/content hashes')
    if len(hotfix_hashes) != 1 or None in hotfix_hashes:
        raise ValueError('Artifacts used inconsistent official hotfix snapshots')
    if len(hotfix_dates) != 1:
        raise ValueError('Artifacts used inconsistent official hotfix dates')
    classes, slugs = {}, set()
    for directory, manifest in manifests:
        validate_snapshot(directory)
        for cls in manifest['classes']:
            merged = classes.setdefault(cls['name'], dict(name=cls['name'], class_id=cls['class_id'], specs=[]))
            for spec in cls['specs']:
                if spec['slug'] in slugs:
                    raise ValueError(f'Duplicate specialization: {spec["slug"]}')
                slugs.add(spec['slug'])
                merged['specs'].append(spec)
    if expected_specs is None and len(slugs) < 40:
        raise ValueError(f'Expected the complete catalog, received {len(slugs)} specs')
    class_list = sorted(classes.values(), key=lambda c: c['name'])
    for cls in class_list:
        cls['specs'].sort(key=lambda s: s['name'])
    result = dict(generated_at=datetime.now(timezone.utc).isoformat(), tree_build=builds.pop(),
                  content_hash=hashes.pop(), hotfix_snapshot_hash=hotfix_hashes.pop(),
                  hotfix_latest_date=hotfix_dates.pop(),
                  default_slug='priest-discipline' if 'priest-discipline' in slugs else min(slugs),
                  spec_count=len(slugs), verified_count=len(slugs), partial_count=0, classes=class_list)
    output_dir.parent.mkdir(parents=True, exist_ok=True)
    staging = Path(tempfile.mkdtemp(prefix='verified-data-', dir=output_dir.parent))
    backup = None
    try:
        if output_dir.exists():
            shutil.copytree(output_dir, staging, dirs_exist_ok=True)
        for p in staging.iterdir():
            if p.is_file() and p.suffix in {'.json', '.js'}:
                p.unlink()
        for directory, manifest in manifests:
            for cls in manifest['classes']:
                for spec in cls['specs']:
                    for suffix in ('.json', '.js'):
                        shutil.copy2(directory / (spec['slug'] + suffix), staging / (spec['slug'] + suffix))
        text = json.dumps(result, ensure_ascii=False, indent=2)
        (staging / 'manifest.json').write_text(text + '\n')
        (staging / 'manifest.js').write_text('window.WOW_PVP_MANIFEST = ' + text + ';\n')
        validate_snapshot(staging, expected_specs)
        if output_dir.exists():
            backup = Path(tempfile.mkdtemp(prefix='previous-data-', dir=output_dir.parent))
            backup.rmdir()
            output_dir.rename(backup)
        try:
            staging.rename(output_dir)
        except BaseException:
            if backup is not None:
                backup.rename(output_dir)
                backup = None
            raise
    finally:
        if staging.exists():
            shutil.rmtree(staging)
        if backup is not None:
            shutil.rmtree(backup)
    return result


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--artifacts-root', type=Path, required=True)
    parser.add_argument('--output-dir', type=Path, default=Path('web/data'))
    parser.add_argument('--expected-specs-json')
    args = parser.parse_args()
    result = merge(artifacts_root=args.artifacts_root, output_dir=args.output_dir,
                   expected_specs=json.loads(args.expected_specs_json) if args.expected_specs_json else None)
    print(json.dumps({k: result[k] for k in ('tree_build', 'spec_count', 'verified_count', 'partial_count')}, indent=2))
