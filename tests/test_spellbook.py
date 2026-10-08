import asyncio

import pytest

from pvpcalc import pipeline, spellbook, catalog
from pvpcalc.coverage import validate_audit_coverage
from pvpcalc.sources import simc, drustvar, wowhead


TABLE = '''// Active class spells, wow build 12.1.0.12345
static constexpr std::array<active_class_spell_t, 4> __active_spells_data { {
  { 9, 0, 100, 0, "Base Ability" },
  { 9, 99, 101, 100, "Replacement" },
  { 9, 98, 102, 0, "Other Spec" },
  { 8, 0, 103, 0, "Other Class" },
} };
static constexpr std::array<active_pet_spell_t, 1> __active_pet_spells_data { {
  { 9, 104, "Pet" },
} };
'''


def dump_for(spells):
    text = 'SimulationCraft for World of Warcraft 12.1.0.12345 Live\n' + '\n'.join(spells)
    return simc.parse_dump(text, class_slug='example', source_ref='exact-revision')


def spell(sid, name, body='Description : Literal text.'):
    return f'Name             : {name} (id={sid})\n{body}\n'


def test_spellbook_uses_dynamic_class_spec_and_replacement_identity():
    tables = spellbook.parse_table(TABLE, expected_build='12.1.0.12345')
    dump = dump_for([spell(i, str(i)) for i in range(100, 104)])
    roots = spellbook.ability_roots(tables, dump, class_id=9, spec_id=99, talent_spell_ids=set())
    assert [r['spell_id'] for r in roots] == [101]
    assert spellbook.ability_roots(tables, dump, class_id=9, spec_id=99, talent_spell_ids={101}) == []


@pytest.mark.parametrize('broken', [
    TABLE.replace('12345', '12346'),
    TABLE.replace('  { 9, 0, 100, 0, "Base Ability" },\n', ''),
    TABLE.replace('active_class_spell_t', 'changed_schema_t'),
])
def test_changed_build_or_incomplete_spellbook_cannot_silently_publish(broken):
    with pytest.raises(ValueError):
        spellbook.parse_table(broken, expected_build='12.1.0.12345')


def test_absent_spell_and_hidden_spec_auras_are_explicitly_distinguished():
    tables = [dict(class_id=9, spec_id=99, spell_id=100, replaced_spell_id=0, name='Future Example'),
              dict(class_id=9, spec_id=99, spell_id=101, replaced_spell_id=0, name='Utility')]
    unavailable = []
    roots = spellbook.ability_roots(tables, dump_for([]), class_id=9, spec_id=99,
        class_name='Example', spec_name='Future', talent_spell_ids=set(), unavailable=unavailable)
    assert roots == []
    assert [r['spell_id'] for r in unavailable] == [101]


def test_passive_class_spellbook_effects_are_roots_too():
    text = TABLE + '''static constexpr std::array<passive_class_spell_t, 1> __passive_spells_data { {
  { 9, 105, "Passive Ability" },
} };
'''
    tables = spellbook.parse_table(text, expected_build='12.1.0.12345')
    dump = dump_for([spell(i, str(i)) for i in range(100, 106)])
    roots = spellbook.ability_roots(tables, dump, class_id=9, spec_id=99, talent_spell_ids=set())
    assert [r['spell_id'] for r in roots] == [101, 105]
    assert roots[1]['passive'] is True
    assert not any(r['spell_id'] == 104 for r in roots)  # Pet table is separate.
    with pytest.raises(ValueError, match='Incomplete'):
        spellbook.parse_table(text.replace('passive_class_spell_t, 1', 'passive_class_spell_t, 2'), expected_build='12.1.0.12345')
    with pytest.raises(ValueError, match='Unrecognized'):
        spellbook.parse_table(text.replace('passive_class_spell_t', 'changed_schema_t'),
                             expected_build='12.1.0.12345', require_passive=True)


@pytest.mark.parametrize('direction', ['none', 'talent_to_ability', 'ability_to_talent'])
def test_baseline_ability_runs_through_effect_audit_and_public_catalog(monkeypatch, direction):
    referenced_by_talent = direction == 'talent_to_ability'
    reverse = direction == 'ability_to_talent'
    modified = ('#1 (id=1001) : Apply Aura (6) | Decrease Movement Speed% (33)\n'
                'Base Value: -50 | PvP Coefficient: 0.5\n'
                'Description      : Slows the target by $s1%.')
    dump = dump_for([
        spell(1, 'Tree Talent', modified if reverse else 'Description      : ' +
              ('The slow is $100s1%.' if referenced_by_talent else 'Does nothing.')),
        spell(100, 'Baseline Slow', 'Description      : The slow is $1s1%.' if reverse else modified),
    ])
    audit = pipeline.SpecAuditResult(class_name='Example', spec_name='Future',
        metadata={'wowBuild': dump.build, 'classSpecNames': ['Future']}, drustvar_builds=[],
        talents=[dict(spell_id=1, talent_name='Tree Talent', class_id=9, spec_id=99,
                      entry_id=1, node_id=1, tree_type='class')], spell_ids=[1],
        wowhead_by_spell={}, drustvar_by_spell={}, wowhead_candidate_ids=set(),
        drustvar_candidate_ids=set(), candidate_ids=set(), effect_rows=[])
    async def direct(*args, **kwargs): return audit
    async def fetch_dump(*args, **kwargs): return dump
    async def fetch_effects(*args, **kwargs): return []
    async def fetch_auras(*args, **kwargs): return {'versions': [dump.build], 'auras': []}
    async def fetch_tables(*args, **kwargs):
        return [dict(class_id=9, spec_id=0, spell_id=100, replaced_spell_id=0, name='Baseline Slow')]
    async def fetch_wowhead(*args, **kwargs): return {}, []
    async def fetch_page(client, sid):
        text = 'Slows the target by 50%.' if sid == 100 or reverse else (
            'The slow is 50%.' if referenced_by_talent else 'Does nothing.')
        return wowhead.parse_spell_page(
            f'<h1>{"Baseline Slow" if sid == 100 else "Tree Talent"}</h1>'
            f'<div class="q">{text}</div>', sid)
    monkeypatch.setattr(pipeline, '_audit_spec_direct', direct)
    monkeypatch.setattr(simc, 'fetch_dump', fetch_dump)
    monkeypatch.setattr(drustvar, 'fetch_class', fetch_effects)
    monkeypatch.setattr(drustvar, 'fetch_aura_payload', fetch_auras)
    monkeypatch.setattr(spellbook, 'fetch_tables', fetch_tables)
    monkeypatch.setattr(pipeline, '_fetch_wowhead_all', fetch_wowhead)
    monkeypatch.setattr(wowhead, 'fetch_spell_page', fetch_page)
    result = asyncio.run(pipeline.audit_spec('Example', 'Future'))
    assert result.spellbook_inventory['pvp_spell_ids'] == [100]
    assert [r['spell_id'] for r in result.abilities] == [100]
    public = asyncio.run(catalog.build_spec_catalog(result))
    validate_audit_coverage(result, public)
    assert [r.spell_id for r in public.talents] == [1]
    ability = public.abilities[0]
    assert ability.node_id is None and ability.entry_id is None
    assert ability.mechanics[0]['final_pvp_multiplier'] == 0.5
    assert ability.pve_tooltip == 'Slows the target by 50%.'
    assert ability.pvp_tooltip == 'Slows the target by 25%.'
    if referenced_by_talent or reverse:
        assert public.talents[0].mechanics[0]['source_spell_id'] == (1 if reverse else 100)
        assert public.talents[0].pvp_tooltip == ('Slows the target by 25%.' if reverse else 'The slow is 25%.')
    if reverse:
        assert ability.mechanics[0]['source_spell_id'] == 1


@pytest.mark.parametrize("mode", [
    "relative_increase", "relative_reduction", "remove_relative_increase",
    "property_absolute", "property_relative_increase",
])
def test_nonabsolute_off_tree_hotfixes_cannot_be_silently_skipped(mode):
    """A targeted change to an exact-build, in-spec base ability must be audited."""
    from types import SimpleNamespace
    from pvpcalc.sources.blizzard_hotfixes import OfficialPvpHotfix

    dump = dump_for([spell(100, "Baseline Slow")])
    audit = SimpleNamespace(simc_dump=dump, spellbook_inventory={
        "baseline_spell_ids": [100], "pvp_spell_ids": []})
    base = dict(class_name="Example", spec_name="Future",
                class_spec_names=["Future", "Other"], talents=[], abilities=[])
    hotfix = OfficialPvpHotfix(
        talent_name="Baseline Slow", current_percent=15.0, previous_percent=None,
        target_hint=None, text="Baseline Slow changed in PvP combat.",
        hotfix_date=None, mode=mode, context_path=("Example", "Future"))
    scoped = SimpleNamespace(**base)

    missed = catalog.unrepresented_nonabsolute_base_hotfixes(audit, scoped, [hotfix])
    assert len(missed) == 1
    assert missed[0]["spell_ids"] == [100]
    assert missed[0]["mode"] == mode

    # Once the correct ability is represented, no duplicate alert is needed.
    scoped.abilities = [SimpleNamespace(talent_name="Baseline Slow")]
    assert catalog.unrepresented_nonabsolute_base_hotfixes(audit, scoped, [hotfix]) == []

    scoped.abilities = []
    outside = OfficialPvpHotfix(
        talent_name=hotfix.talent_name, current_percent=15.0, previous_percent=None,
        target_hint=None, text=hotfix.text, hotfix_date=None, mode=mode,
        context_path=("Example", "Other"))
    assert catalog.unrepresented_nonabsolute_base_hotfixes(audit, scoped, [outside]) == []

    # A class dump alone does not establish specialization ownership.
    audit.spellbook_inventory["baseline_spell_ids"] = []
    assert catalog.unrepresented_nonabsolute_base_hotfixes(audit, scoped, [hotfix]) == []


def test_absolute_base_hotfix_uses_existing_ability_resolver():
    from types import SimpleNamespace
    from pvpcalc.sources.blizzard_hotfixes import OfficialPvpHotfix

    audit = SimpleNamespace(
        simc_dump=dump_for([spell(100, "Baseline Slow")]),
        spellbook_inventory={"baseline_spell_ids": [100]})
    catalog_stub = SimpleNamespace(
        class_name="Example", spec_name="Future", class_spec_names=["Future"],
        talents=[], abilities=[])
    absolute = OfficialPvpHotfix(
        talent_name="Baseline Slow", current_percent=40.0,
        previous_percent=50.0, target_hint=None, text="Now slows by 40% (was 50%).",
        hotfix_date=None, mode="absolute", context_path=("Example", "Future"))
    assert catalog.unrepresented_nonabsolute_base_hotfixes(
        audit, catalog_stub, [absolute]) == []
