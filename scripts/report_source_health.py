"""Expose nonblocking source failures in the Actions build summary."""
from __future__ import annotations

from collections import Counter
import json
import os
from pathlib import Path
import sys


def report(data_dir: Path) -> str:
    manifest = json.loads((data_dir / 'manifest.json').read_text())
    specs = [spec for cls in manifest['classes'] for spec in cls['specs']]
    affected = [spec for spec in specs if spec.get('source_warning_count', 0)]
    total = sum(spec.get('source_warning_count', 0) for spec in specs)
    sources: Counter[str] = Counter()
    complete = True

    for spec in specs:
        data = json.loads((data_dir / f"{spec['slug']}.json").read_text())
        if data.get('source_warnings_complete'):
            for warning in data['source_warnings']:
                sources[warning.get('source') or warning.get('reason') or 'other'] += 1
        elif spec.get('source_warning_count', 0):
            complete = False

    lines = [
        '## Data source health',
        '',
        f"Verified specializations: {manifest['verified_count']}/{manifest['spec_count']}.",
        f'Source warnings: {total} across {len(affected)} specializations.',
    ]
    if sources:
        lines += ['', '| Source | Warnings |', '| --- | ---: |']
        lines += [f'| {source} | {count} |' for source, count in sources.most_common()]
    if affected:
        lines += ['', 'Affected specializations: ' + ', '.join(
            f"{spec['slug']} ({spec['source_warning_count']})" for spec in affected
        ) + '.']
        lines += ['', 'These source warnings did not block the verified tooltip and hotfix checks.']
        if complete:
            lines += ['The full warning inventory is preserved in each specialization dataset.']
        else:
            lines += ['This older snapshot only preserved a count and five examples per specialization.']
    return '\n'.join(lines) + '\n'


if __name__ == '__main__':
    directory = Path(sys.argv[1]) if len(sys.argv) > 1 else Path('web/data')
    summary = report(directory)
    print(summary)
    if output := os.environ.get('GITHUB_STEP_SUMMARY'):
        with open(output, 'a', encoding='utf-8') as stream:
            stream.write(summary)
    manifest = json.loads((directory / 'manifest.json').read_text())
    total = sum(spec.get('source_warning_count', 0)
                for cls in manifest['classes'] for spec in cls['specs'])
    if total:
        print(f'::warning::Verified snapshot contains {total} nonblocking source warnings; '
              'see the Data source health job summary.')
