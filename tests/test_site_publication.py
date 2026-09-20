import json
from pathlib import Path
import shutil
import sys

import pytest

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'scripts'))
from merge_class_datasets import merge
from validate_site_data import validate_snapshot


@pytest.fixture
def artifact(tmp_path):
    root = Path(__file__).resolve().parents[1] / 'web/data'
    m = json.loads((root / 'manifest.json').read_text())
    cls = next(c for c in m['classes'] if c['name'] == 'Priest')
    spec = next(s for s in cls['specs'] if s['name'] == 'Discipline')
    m.update(classes=[dict(cls, specs=[spec])], spec_count=1, verified_count=1, partial_count=0)
    directory = tmp_path / 'artifacts/priest'
    directory.mkdir(parents=True)
    for suffix in ('.json', '.js'):
        shutil.copy2(root / ('priest-discipline' + suffix), directory)
    text = json.dumps(m)
    (directory / 'manifest.json').write_text(text)
    (directory / 'manifest.js').write_text('window.WOW_PVP_MANIFEST = ' + text + ';\n')
    expected = [dict(class_name='Priest', spec_name='Discipline', spec_id=spec['spec_id'])]
    return directory, expected


def test_verified_artifacts_merge_and_preserve_unrelated_files(artifact, tmp_path):
    source, expected = artifact
    output = tmp_path / 'published'
    output.mkdir()
    (output / 'keep.txt').write_text('unchanged')
    merge(artifacts_root=source.parent, output_dir=output, expected_specs=expected)
    assert validate_snapshot(output, expected)['spec_count'] == 1
    assert (output / 'keep.txt').read_text() == 'unchanged'


@pytest.mark.parametrize('fault', ['missing_js', 'mismatched_js', 'incomplete_matrix', 'partial'])
def test_failed_merge_keeps_previous_snapshot(artifact, tmp_path, fault):
    source, expected = artifact
    output = tmp_path / 'published'
    output.mkdir()
    (output / 'manifest.json').write_text('previous working snapshot')
    if fault == 'missing_js':
        (source / 'priest-discipline.js').unlink()
    elif fault == 'mismatched_js':
        (source / 'priest-discipline.js').write_text('window.WOW_PVP_DATA = {};')
    elif fault == 'incomplete_matrix':
        expected.append(dict(class_name='Priest', spec_name='Shadow', spec_id=258))
    else:
        p = source / 'manifest.json'
        m = json.loads(p.read_text())
        m['classes'][0]['specs'][0]['verification_status'] = 'PARTIAL'
        text = json.dumps(m)
        p.write_text(text)
        (source / 'manifest.js').write_text('window.WOW_PVP_MANIFEST = ' + text + ';')
    with pytest.raises((ValueError, FileNotFoundError)):
        merge(artifacts_root=source.parent, output_dir=output, expected_specs=expected)
    assert list(output.iterdir()) == [output / 'manifest.json']
    assert (output / 'manifest.json').read_text() == 'previous working snapshot'
