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
