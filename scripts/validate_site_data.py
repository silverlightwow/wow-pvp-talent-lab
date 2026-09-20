"""Validate complete, internally consistent snapshots before any publication."""
from __future__ import annotations

import argparse
import json
from pathlib import Path


COUNTS = ('fetch_error_count', 'unresolved_count', 'review_required_count')


def validate_spec(directory: Path, class_item: dict, spec: dict, build: str) -> dict:
    slug = spec['slug']
    if not slug or Path(slug).name != slug:
        raise ValueError(f'Invalid dataset slug: {slug}')
    data = json.loads((directory / f'{slug}.json').read_text())
    js = (directory / f'{slug}.js').read_text().strip()
    prefix = 'window.WOW_PVP_DATA = '
    if not js.startswith(prefix) or not js.endswith(';') or json.loads(js[len(prefix):-1]) != data:
        raise ValueError(f'{slug}: JSON and JavaScript datasets differ')
    if (data.get('slug'), data['class_name'], data['spec_name']) != (slug, class_item['name'], spec['name']):
        raise ValueError(f'{slug}: dataset identity mismatch')
    if data.get('tree_build') != build or data.get('simc_build') != build:
        raise ValueError(f'{slug}: mixed source builds')
    validation = data.get('validation', {})
    for metadata in (spec, validation):
        if metadata.get('verification_status') != 'VERIFIED' or any(metadata.get(k, -1) != 0 for k in COUNTS):
            raise ValueError(f'{slug}: incomplete verification: {metadata}')
    talents = data.get('talents', [])
    if len(talents) < 50:
        raise ValueError(f'{slug}: incomplete talent catalog')
    entries = [t.get('entry_id') for t in talents]
    if None in entries or len(set(entries)) != len(entries):
        raise ValueError(f'{slug}: duplicate or missing entry identities')
    for t in talents:
        if not t.get('tree_data') or not t.get('pve_tooltip', '').strip() or not t.get('pvp_tooltip', '').strip():
            raise ValueError(f'{slug}: missing topology/tooltip for {t.get("spell_id")}')
        for mode in ('pve_tooltip', 'pvp_tooltip'):
            text = t[mode]
            if text.count('[') != text.count(']') or any(line.strip() in {'[', ']', ':'} for line in text.splitlines()):
                raise ValueError(f'{slug}: broken conditional text for {t["spell_id"]}')
        if t.get('render_status') not in {'CHANGED', 'UNCHANGED'}:
            raise ValueError(f'{slug}: unsafe tooltip for {t["spell_id"]}')
        changed = t['pve_tooltip'] != t['pvp_tooltip']
        if t.get('tooltip_changed') != changed or (t['render_status'] == 'CHANGED') != changed:
            raise ValueError(f'{slug}: inconsistent change flag for {t["spell_id"]}')
        maximum = int(t['tree_data'].get('max_ranks') or 1)
        if maximum > 1 and t['tree_data'].get('node_type') != 'tiered':
            ranks = t.get('rank_tooltips', [])
            if [r.get('rank') for r in ranks] != list(range(1, maximum + 1)):
                raise ValueError(f'{slug}: missing rank descriptions for {t["spell_id"]}')
            if any(not r.get(mode, '').strip() for r in ranks for mode in ('pve_tooltip', 'pvp_tooltip')):
                raise ValueError(f'{slug}: empty rank description for {t["spell_id"]}')
            if any(ranks[-1][mode] != t[mode] for mode in ('pve_tooltip', 'pvp_tooltip')):
                raise ValueError(f'{slug}: default tooltip is not maximum rank for {t["spell_id"]}')
    actual = {
        'talents': len(talents),
        'unique_nodes': len({t['node_id'] for t in talents}),
        'changed_tooltips': sum(t['tooltip_changed'] for t in talents),
        'talents_with_pvp_mechanics': sum(t['has_pvp_mechanics'] for t in talents),
    }
    for key, value in actual.items():
        if validation.get(key) != value or (key in spec and spec[key] != value):
            raise ValueError(f'{slug}: stale {key} count')
    return data


def validate_snapshot(directory: Path, expected_specs: list[dict] | None = None) -> dict:
    manifest = json.loads((directory / 'manifest.json').read_text())
    script = (directory / 'manifest.js').read_text().strip()
    prefix = 'window.WOW_PVP_MANIFEST = '
    if not script.startswith(prefix) or not script.endswith(';') or json.loads(script[len(prefix):-1]) != manifest:
        raise ValueError('JSON and JavaScript manifests differ')
    pairs = [(c, s) for c in manifest['classes'] for s in c['specs']]
    slugs = [s['slug'] for _, s in pairs]
    if not pairs or len(set(slugs)) != len(slugs) or manifest['spec_count'] != len(pairs):
        raise ValueError('Missing/duplicate specializations or incorrect spec_count')
    if manifest.get('default_slug') not in slugs:
        raise ValueError('Default specialization is absent')
    if expected_specs is not None:
        expected = {(s['class_name'], s['spec_name'], s['spec_id']) for s in expected_specs}
        actual = {(c['name'], s['name'], s['spec_id']) for c, s in pairs}
        if actual != expected:
            raise ValueError(f'Specialization discovery mismatch: missing={expected-actual}, extra={actual-expected}')
    datasets = [validate_spec(directory, c, s, manifest['tree_build']) for c, s in pairs]
    for key, value in [('verified_count', len(pairs)), ('partial_count', 0)]:
        if key in manifest and manifest[key] != value:
            raise ValueError(f'Stale manifest {key}')
    return {'spec_count': len(pairs), 'class_count': len(manifest['classes']),
            'talents': sum(len(d['talents']) for d in datasets), 'tree_build': manifest['tree_build']}


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--data-dir', type=Path, default=Path('web/data'))
    parser.add_argument('--expected-specs-json')
    args = parser.parse_args()
    print(json.dumps(validate_snapshot(args.data_dir, json.loads(args.expected_specs_json) if args.expected_specs_json else None), indent=2))
