"""Accept alternate Wowhead evidence only when it proves an exact client effect."""
import json
from pathlib import Path

import pytest

from pvpcalc import pipeline
from pvpcalc.models import EffectObservation
from pvpcalc.sources import simc


@pytest.fixture
def dump():
    return simc.parse_dump(Path('tests/fixtures/simc-1266151.txt').read_text(),class_slug='evoker')


def payload(pve='20% increased',pvp='20% reduced',condition='134735'):
    return {'spells':{condition:[[pve,pvp,'']]}}


def test_explicit_pvp_branch_proves_the_exact_effect(dump):
    observations=pipeline._nether_pvp_branch_observations(payload(),1266151,dump)
    assert len(observations)==1
    assert observations[0].effect_index==1
    assert observations[0].pvp_multiplier==-1


@pytest.mark.parametrize('kwargs',[
    {'pve':'10% increased'},{'pvp':'10% reduced'},
    {'pvp':'20% increased'},{'condition':'999999'},
    {'pvp':'unknown% reduced'},
])
def test_other_conditions_or_conflicting_values_do_not_prove_a_coefficient(dump,kwargs):
    assert pipeline._nether_pvp_branch_observations(payload(**kwargs),1266151,dump)==[]


@pytest.mark.parametrize('hotfixed,newer,identity',[
    (False,False,1278387),(True,False,1278387),(False,True,1278387),(False,False,None),
])
def test_alternate_branch_preserves_real_hotfixes_newer_data_and_missing_identity(dump,hotfixed,newer,identity):
    sid=1266151
    effect=simc.effect_for_spell(dump,sid,1)
    observed=pipeline._nether_pvp_branch_observations(payload(),sid,dump)
    dr=EffectObservation(source='drustvar',spell_id=sid,spell_name='Modifier',effect_index=0,
        pvp_multiplier=0,effect_text='Apply Aura (6) | Add Percent Modifier (108): Spell Direct Amount (0)',
        patch='12.1.0.99999' if newer else dump.build,
        raw=json.dumps({'game_effect_id':identity,'is_hotfixed':hotfixed}))
    rows,resolved=pipeline._build_generated_simc_fallback_rows(spell_ids={sid},
        talent_by_spell={sid:{}},drustvar_by_spell={sid:[dr]},
        generated_effects_by_spell={sid:{1:effect}},simc_dump=dump,nether_by_spell={sid:observed})
    if not hotfixed and not newer and identity is not None:
        assert resolved=={sid}
        assert rows[0]['pvp_multiplier']==-1
        assert 'wowhead_nether' in rows[0]['sources']
        assert rows[0]['source_notes'][0]['previous_multiplier']==0
    else:
        assert resolved==set()
        assert rows==[]
