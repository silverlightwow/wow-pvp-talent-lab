from copy import deepcopy
from types import SimpleNamespace

import pytest

from pvpcalc.coverage import coverage_report, validate_audit_coverage, validate_coverage


def dataset():
    row = dict(source_spell_id=2, effect_index=1, sources=['simc', 'wowhead'],
               base_value=None, simc_sp_coefficient=2, final_pvp_multiplier=1.5)
    data = dict(talents=[dict(entry_id=10, spell_id=1, mechanics=[row])],
                source_snapshot=dict(parser_hash='parser', evidence_hash='evidence'))
    data['coverage'] = coverage_report(data)
    return data


def test_known_effect_loss_or_numeric_drift_blocks_identical_inputs():
    previous = dataset()
    for fault in ('missing', 'value'):
        current = deepcopy(previous)
        if fault == 'missing':
            current['talents'][0]['mechanics'].clear()
        else:
            current['talents'][0]['mechanics'][0]['final_pvp_multiplier'] = 1.2
        current['coverage'] = coverage_report(current)
        with pytest.raises(ValueError, match='identical authoritative inputs'):
            validate_coverage(current, previous)
        # A real server hotfix is permitted even if the client build is unchanged.
        current['source_snapshot']['evidence_hash'] = 'new-server-hotfix'
        validate_coverage(current, previous)


def test_source_labels_and_null_coefficient_bases_do_not_change_numbers():
    previous = dataset()
    current = deepcopy(previous)
    row = current['talents'][0]['mechanics'][0]
    row.update(sources=['simc'], effect_text='Different source wording', base_value=0)
    current['coverage'] = coverage_report(current)
    assert current['coverage'] == previous['coverage']
    validate_coverage(current, previous)


def test_inventory_tampering_and_missing_audit_effect_are_blocking():
    data = dataset()
    data['coverage']['effect_count'] = 0
    with pytest.raises(ValueError, match='inventory'):
        validate_coverage(data)
    audit = SimpleNamespace(final_modified_effect_rows=[dict(spell_id=2, talent_spell_id=1, effect_index=1)])
    catalog = SimpleNamespace(talents=[SimpleNamespace(spell_id=1, mechanics=[])])
    with pytest.raises(ValueError, match='missing from catalog'):
        validate_audit_coverage(audit, catalog)
