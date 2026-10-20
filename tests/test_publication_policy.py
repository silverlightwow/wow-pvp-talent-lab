import importlib.util
from pathlib import Path

import pytest

spec=importlib.util.spec_from_file_location('publication_policy',Path(__file__).resolve().parents[1]/'scripts/publication_policy.py')
policy=importlib.util.module_from_spec(spec)
spec.loader.exec_module(policy)


@pytest.mark.parametrize('path', ['pvpcalc/pipeline.py','tests/fixtures/example.json',
    'scripts/check.cjs','scripts/nested/build.py','pyproject.toml','package.json',
    'package-lock.json','data-refresh.trigger','.github/workflows/all-data-pages.yml'])
def test_source_push_waits_for_verified_data(path):
    assert policy.needs_data_refresh(['web/app.js',path])


@pytest.mark.parametrize('paths', [[],['web/app.js'],['web/styles.css','web/data/manifest.json'],
    ['.github/workflows/publish-web.yml'],['docs/audit.md','README.md']])
def test_ui_and_documentation_do_not_request_a_new_source_snapshot(paths):
    assert not policy.needs_data_refresh(paths)


def test_unknown_commit_identity_is_not_treated_as_a_safe_ui_push():
    with pytest.raises(ValueError,match='exact Git commit'):
        policy.push_paths('unknown','f'*40)


@pytest.mark.parametrize('captured,expected',[('same',True),('old',False),(None,False)])
def test_ui_push_cannot_publish_a_catalog_from_a_different_parser(tmp_path,captured,expected):
    import json
    (tmp_path/'manifest.json').write_text(json.dumps({'spec_count':1,'classes':[{'specs':[{'slug':'example'}]}]}))
    (tmp_path/'example.json').write_text(json.dumps({'source_snapshot':{'parser_hash':captured}}))
    assert policy.sources_match_parser(tmp_path,'same') is expected


def test_empty_source_universe_is_a_real_error(tmp_path):
    import json
    (tmp_path/'manifest.json').write_text(json.dumps({'spec_count':0,'classes':[]}))
    with pytest.raises(ValueError,match='Incomplete source catalog'):
        policy.sources_match_parser(tmp_path,'same')
