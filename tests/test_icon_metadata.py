from types import SimpleNamespace
import pytest
from pvpcalc.catalog import _icon_metadata


@pytest.mark.parametrize('page_icon', ['canonical-icon', ''])
def test_icon_candidates_preserve_authoritative_metadata_without_alias_exceptions(page_icon):
    talent = dict(icon='provider_alias', icon_candidates=['provider_alias', 'numeric-file-id', 'provider_alias'])
    metadata = _icon_metadata(talent, SimpleNamespace(icon=page_icon))
    expected = [page_icon, 'provider_alias', 'numeric-file-id'] if page_icon else ['provider_alias', 'numeric-file-id']
    assert metadata == dict(icon=page_icon or 'provider_alias', icon_candidates=expected)
    assert _icon_metadata({}, None) == {}
