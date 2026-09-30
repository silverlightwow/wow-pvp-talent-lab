import pytest

from pvpcalc.sources.drustvar import parse_spell_payload, normalize_current_auras


@pytest.mark.parametrize('parser,collection', [(parse_spell_payload, 'spells'), (normalize_current_auras, 'auras')])
@pytest.mark.parametrize('bad_value', [None, 'unknown', 'NaN', 'inf'])
def test_malformed_current_source_values_cannot_silently_remove_effects(parser, collection, bad_value):
    payload = dict(versions=['12.1.0.69933'])
    payload[collection] = [dict(id=1, effects=[dict(values=[dict(version='12.1.0.69933', value=bad_value)])])]
    with pytest.raises(ValueError, match='Drustvar effect value'):
        parser(payload, 'mage') if collection == 'spells' else parser(payload)


def test_missing_source_collection_is_not_an_empty_valid_catalog():
    with pytest.raises(ValueError, match='must be a list'):
        parse_spell_payload(dict(versions=['12.1.0.69933']), 'mage')
