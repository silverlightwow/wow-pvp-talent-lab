from pvpcalc.models import EffectObservation
from pvpcalc.reconcile import reconcile
from pvpcalc.render import simple_pvp_rewrite

def test_inner_quietus_effect_2():
    wh = [
        EffectObservation("wowhead",448278,"Inner Quietus",1,20,1,"periodic"),
        EffectObservation("wowhead",448278,"Inner Quietus",2,20,2.5,"shield"),
        EffectObservation("wowhead",448278,"Inner Quietus",3,20,1,"damage"),
    ]
    dr = [
        EffectObservation("drustvar",448278,"Inner Quietus",0,None,2.5,"Spell Power"),
    ]
    r = reconcile(wh, dr)
    assert r[1].pvp_value == 50
    assert r[1].confidence == "high"

def test_renderer_refuses_ambiguous_same_base():
    wh = [
        EffectObservation("wowhead",448278,"Inner Quietus",1,20,1,"dots"),
        EffectObservation("wowhead",448278,"Inner Quietus",2,20,2.5,"shield"),
    ]
    r = reconcile(wh, [])
    out, ambiguous = simple_pvp_rewrite(
        "Power Word: Shield absorbs 20% additional damage. DoTs deal 20% additional damage.", r
    )
    # 20% means two different effects here; never globally replace it with 50%.
    assert out.count("20%") == 2
    assert 20.0 in ambiguous
