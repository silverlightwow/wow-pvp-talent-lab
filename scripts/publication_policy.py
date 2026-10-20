"""Route mixed source/UI pushes through the verified data build before Pages."""
from __future__ import annotations

import argparse
import json
from pathlib import Path
import re
import subprocess


def needs_data_refresh(paths):
    exact = {'pyproject.toml', 'data-refresh.trigger', '.github/workflows/all-data-pages.yml'}
    return any(path in exact or path.startswith(('pvpcalc/', 'tests/'))
        or (path.startswith('scripts/') and path.endswith(('.py', '.cjs')))
        or ('/' not in path and path.startswith('package') and path.endswith('.json'))
        for path in paths)


def push_paths(before, after):
    if not all(re.fullmatch(r'[0-9a-f]{40}', value) for value in (before, after)):
        raise ValueError('Publication routing requires exact Git commit identities')
    if set(before) == {'0'}:
        command = ['git', 'diff-tree', '--root', '--no-commit-id', '--name-only', '-r', after]
    else:
        if subprocess.run(['git', 'cat-file', '-e', before+'^{commit}'], capture_output=True).returncode:
            subprocess.run(['git', 'fetch', 'origin', before], check=True)
        command = ['git', 'diff', '--name-only', before, after]
    return subprocess.check_output(command, text=True).splitlines()


def sources_match_parser(directory, expected):
    manifest = json.loads((directory/'manifest.json').read_text())
    specs = [spec for cls in manifest['classes'] for spec in cls['specs']]
    if not specs or len(specs) != manifest['spec_count']:
        raise ValueError('Incomplete source catalog before publication')
    return all(json.loads((directory/(spec['slug']+'.json')).read_text())
        .get('source_snapshot',{}).get('parser_hash') == expected for spec in specs)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--before')
    parser.add_argument('--after')
    parser.add_argument('--github-output', type=Path, required=True)
    parser.add_argument('--data-dir', type=Path, default=Path('web/data'))
    args = parser.parse_args()
    paths = push_paths(args.before, args.after) if args.before else []
    from pvpcalc.snapshot import parser_hash
    publish = not needs_data_refresh(paths) and sources_match_parser(args.data_dir, parser_hash())
    with args.github_output.open('a') as output:
        output.write(f'publish={str(publish).lower()}\n')
    print('Publish current verified snapshot.' if publish else
          'Source/data revision differs: publication waits for its successful data workflow.')


if __name__ == '__main__':
    main()
