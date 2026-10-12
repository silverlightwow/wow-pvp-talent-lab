from copy import deepcopy
from dataclasses import replace
import pytest
from pvpcalc import passive_modifiers
from pvpcalc.sources import simc


def fixture(coefficient=0.5, reciprocal=True, proc=False):
    raw = ('SimulationCraft for World of Warcraft 12.1.0.12345 Live\n'
        'Name             : Resource Passive (id=10) [Passive, Hidden]\n'
        + ('Proc Chance      : 50%\n' if proc else '')
        + '#1 (id=101) : Apply Aura (6) | Add Flat Modifier (107): Spell Effect 2 (12)\n'
        + f'Base Value: 60 | PvP Coefficient: {coefficient}\n'
        + 'Affected Spells: Resource Ability (20)\n'
        + 'Name             : Resource Ability (id=20)\n'
        + '#2 (id=202) : Energize Power (30)\nBase Value: 0 | Resource: example | Target: Self (1)\n'
        + ('Modified By: Resource Passive (10 effect#1)\n' if reciprocal else '')
        + 'Description      : $?s10[Generates ${$m2/10} points.][]\n')
    dump = simc.parse_dump(raw,class_slug='example')
    return dump,[dict(spell_id=10,passive=True)]


@pytest.mark.parametrize('coefficient,expected', [(0.5,'3'),(0,'0'),(1,'6')])
def test_literal_resource_formula_uses_owned_passive_and_retains_zero(coefficient, expected):
    dump, roots = fixture(coefficient)
    projected = passive_modifiers.resource_projections(dump,roots,{10,20})
    assert projected[0]['pve_value'] == 60
    assert projected[0]['pvp_value'] == 60*coefficient
    pve,trace = passive_modifiers.normalize_text('Generates 0 points.',projected)
    assert pve == 'Generates 6 points.' and trace
    pvp,trace = passive_modifiers.normalize_text(pve,projected,pvp=True)
    assert pvp == f'Generates {expected} points.'
    assert bool(trace) == (coefficient != 1)
    # A provider that already incorporated the passive is not corrected twice.
    assert passive_modifiers.normalize_text(pve,projected)[0] == pve


def test_optional_proc_and_missing_reciprocal_identity_are_not_guessed():
    dump, roots = fixture(proc=True)
    assert passive_modifiers.resource_projections(dump,roots,{10,20}) == []
    dump, roots = fixture(reciprocal=False)
    with pytest.raises(ValueError,match='reciprocal'):
        passive_modifiers.resource_projections(dump,roots,{10,20})


def test_ambiguous_visible_projection_blocks_and_absent_text_is_not_fabricated():
    dump,roots = fixture()
    projected = passive_modifiers.resource_projections(dump,roots,{10,20})
    with pytest.raises(ValueError,match='Ambiguous'):
        passive_modifiers.normalize_text('Generates 0 points. Generates 0 points.',projected)
    assert passive_modifiers.normalize_text('No resource clause in this source.',projected) == ('No resource clause in this source.',[])


@pytest.mark.parametrize('precision', [0, 2, 6])
def test_client_precision_preserves_integer_trailing_zero(precision):
    dump, _ = fixture()
    spell = dump.spells[20]
    spell = replace(spell, raw=spell.raw.replace('${$m2/10}', '${$m2/10}.' + str(precision)))
    assert passive_modifiers._fragments(spell, 2, [0, 100, 50], {10, 20}, {10}) == [
        ['Generates 0 points', 'Generates 10 points', 'Generates 5 points']]


@pytest.mark.parametrize('condition', ['s20', 'a20'])
def test_available_optional_talent_is_not_assumed_learned_or_active(condition):
    dump, roots = fixture()
    spell = dump.spells[20]
    dump.spells[20] = replace(spell, raw=spell.raw.replace('$?s10[', '$?' + condition + '['))
    with pytest.raises(ValueError, match='unverified talent or aura'):
        passive_modifiers.resource_projections(dump, roots, {10, 20})


def test_unrelated_optional_branch_does_not_change_unconditional_resource_formula():
    dump, roots = fixture()
    spell = dump.spells[20]
    dump.spells[20] = replace(spell, raw=spell.raw + '\nTooltip          : $?s20[Deals $s1 damage.][Other text.]')
    projected = passive_modifiers.resource_projections(dump, roots, {10, 20})
    assert projected[0]['fragments'] == [['Generates 0 points', 'Generates 6 points', 'Generates 3 points']]
