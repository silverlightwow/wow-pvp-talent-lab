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
    # Publication tests use a controlled artifact, independent of live source
    # snapshots (which may intentionally be rejected after stricter validation).
    build = '12.1.0.69875'
    spec = dict(name='Discipline', spec_id=256, slug='priest-discipline',
                verification_status='VERIFIED', fetch_error_count=0, unresolved_count=0, review_required_count=0)
    m = dict(classes=[dict(name='Priest', class_id=5, specs=[spec])],
             spec_count=1, verified_count=1, partial_count=0, default_slug=spec['slug'],
             tree_build=build, content_hash='controlled-test-topology',
             hotfix_snapshot_hash='controlled-test-hotfixes',
             hotfix_latest_date='2026-09-24')
    talents = [dict(spell_id=1000+i, entry_id=2000+i, node_id=3000+i,
                    tree_data={'required_points': 0}, pve_tooltip='Heals for 10.',
                    pvp_tooltip='Heals for 15.', tooltip_changed=True,
                    render_status='CHANGED', has_pvp_mechanics=True) for i in range(50)]
    data = dict(slug=spec['slug'], class_name='Priest', spec_name='Discipline',
                tree_build=build, simc_build=build, talents=talents, abilities=[],
                serialization=dict(version=2,spec_id=256,node_order=list(range(3000,3050)),subtree_nodes=[]),
                validation=dict(spec, talents=50, abilities=0, unique_nodes=50, changed_tooltips=50, talents_with_pvp_mechanics=50))
    directory = tmp_path / 'artifacts/priest'
    directory.mkdir(parents=True)
    (directory / 'priest-discipline.json').write_text(json.dumps(data))
    (directory / 'priest-discipline.js').write_text('window.WOW_PVP_DATA = ' + json.dumps(data) + ';')
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


@pytest.mark.parametrize('fault', ['missing_js', 'mismatched_js', 'incomplete_matrix', 'partial', 'broken_description'])
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
    elif fault == 'broken_description':
        p = source / 'priest-discipline.json'
        d = json.loads(p.read_text())
        d['talents'][0]['pve_tooltip'] = 'Healing costs ['
        p.write_text(json.dumps(d))
        (source / 'priest-discipline.js').write_text('window.WOW_PVP_DATA = ' + json.dumps(d) + ';')
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
