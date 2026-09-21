import json
from pathlib import Path
from pvpcalc.sources import simc, wowhead
from pvpcalc import tooltip_renderer, ranks

FIX = Path(__file__).parent / 'fixtures/repair12'
DUMP = simc.parse_dump((FIX/'demonhunter.txt').read_text(), class_slug='demonhunter')

def test_equipment_conditional_does_not_modify_hero_talent():
    assert 1236360 not in {d.target_spell_id for d in simc.dependency_closure(DUMP, 442718)}
    # The target record stays available for callers that explicitly inspect the set.
    assert DUMP.spells[1236360].name.endswith('Class Set 4pc')

def test_visible_reference_wins_over_runtime_trigger():
    dep = next(d for d in simc.dependency_closure(DUMP,1266329) if d.target_spell_id==1266616)
    assert dep.relations == ('tooltip_value_ref',)

def test_tooltip_chrome_and_icon_punctuation():
    def page(i):
        return wowhead.parse_nether_tooltip_payload(json.loads((FIX/f'{i}.json').read_text()),spell_id=i,url='fixture')
    assert 'Modifies Effect' not in page(55676).player_tooltip
    assert '(5))' not in page(390670).player_tooltip
    assert page(1253846).icon == 'inv_10_specialreagentfoozles_tuskclaw-ice'

def test_scaled_chance_and_damage_both_render():
    rows=[dict(source_spell_id=428492,effect_index=2,base_value=777,final_pvp_value=3333.0192,
               final_pvp_multiplier=4.2896,effect_text='Apply Aura: Dummy',
               display_formula=dict(old=7.77,new=33.33,kind='percent_value',divisor=100,precision=2)),
          dict(source_spell_id=428492,effect_index=3,base_value=17,final_pvp_value=4.000015,
               final_pvp_multiplier=.235295,effect_text='Apply Aura: Dummy',
               simc_reference_contexts=list(simc.effect_reference_contexts(DUMP,428492,3)))]
    result=tooltip_renderer.render_pvp_tooltip(tooltip='Your Chaos damage has a 7.77% chance to be increased by 17%, occurring up to 7 total times.',spec_name='Havoc',effect_rows=rows,context_rows=rows)
    assert result['pvp_tooltip']=='Your Chaos damage has a 33.33% chance to be increased by 4%, occurring up to 7 total times.'
    assert len(result['replacements'])==2
    ranked=ranks.rows_at_rank(rows,[dict(effect_index=2,values=[500,1000])],1,428492)
    assert ranked[0]['display_formula']['old']==5
    assert rows[0]['display_formula']['old']==7.77

def test_apex_middle_stage_keeps_its_two_ranks():
    talent=dict(spell_id=1270900,class_name='Demon Hunter',spec_name='Havoc',tree_type='spec',node_type='single',max_ranks=2)
    source=ranks.rank_source(DUMP,talent)
    assert source and all(len(r['values'])==2 for r in source['rules'])
    assert next(r for r in source['rules'] if r['effect_index']==3)['values']==[2,4]

def test_declared_rank_count_ignores_spare_override_values():
    raw = '''World of Warcraft 12.1.0.69875 Live
Name             : Spare rank fixture (id=100)
Talent Entry     : Protection [tree=spec, row=5, col=2, max_rank=2]
                 : Effect#1 [op=set, values=(15, 15, 30)]
Effects          :
#1 (id=1)        : Apply Aura (6) | Dummy (4)
                   Base Value: 15 | Scaled Value: 15
Description      : Increases damage by $s1%.
'''
    dump=simc.parse_dump(raw,class_slug='test')
    source=ranks.rank_source(dump,dict(spell_id=100,spec_name='Protection',class_name='Paladin',tree_type='spec',node_type='single',max_ranks=2))
    assert source['rank_count']==2
    assert len(source['rules'][0]['values'])==3
    assert len(source['expressions'][0]['values'])==2

def test_missing_wrapper_description_uses_explicit_visible_spell(monkeypatch):
    import asyncio
    from pvpcalc import catalog, pipeline
    dump=simc.parse_dump((FIX/'shaman.txt').read_text(),class_slug='shaman')
    dependencies=simc.dependency_closure(dump,455630)
    assert all(d.target_spell_id != 455630 for d in dependencies)
    assert next(d for d in dependencies if d.target_spell_id==444995).relations==('tooltip_override',)
    dep=next(d for d in dependencies if d.target_spell_id==455622)
    assert simc.dependency_effect_reference_contexts(dep,455622,1,dump)
    async def fetch(client,spell_id):
        return wowhead.parse_nether_tooltip_payload(json.loads((FIX/f'{spell_id}.json').read_text()),spell_id=spell_id,url='fixture')
    monkeypatch.setattr(wowhead,'fetch_spell_page',fetch)
    talent=dict(spell_id=455630,visible_spell_id=444995,talent_name='Surging Totem',entry_id=117474,node_id=94877,tree_type='hero')
    audit=pipeline.SpecAuditResult(class_name='Shaman',spec_name='Enhancement',metadata={'classSpecNames':['Elemental','Enhancement','Restoration']},drustvar_builds=[],talents=[talent],spell_ids=[455630],wowhead_by_spell={},drustvar_by_spell={},wowhead_candidate_ids=set(),drustvar_candidate_ids=set(),candidate_ids=set(),effect_rows=[])
    result=asyncio.run(catalog.build_spec_catalog(audit)).talents[0]
    assert 'creates a Tremor' in result.pve_tooltip
    assert 'maintains Healing Rain' not in result.pve_tooltip
    assert result.render_status=='UNCHANGED'
    assert any(d['status']=='EXPLICIT_DISPLAY_OVERRIDE' for d in result.diagnostics)
