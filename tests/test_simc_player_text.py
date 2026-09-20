from pathlib import Path

from pvpcalc import pipeline, tooltip_renderer
from pvpcalc.sources import simc


def test_multiline_description_keeps_effect_references_after_blank_lines():
    dump = simc.parse_dump(
        Path('tests/fixtures/simc-204909.txt').read_text(), class_slug='demonhunter'
    )
    assert simc.effect_reference_contexts(dump, 204909, 2) == (
        'Gain an additional $s2% leech while Metamorphosis is active.',
    )
    assert simc.effect_unit_hint(dump, 204909, 2) == 'percent'
    rows = pipeline._build_simc_modified_rows(
        spell_ids={204909}, talent_by_spell={}, simc_dump=dump
    )
    rendered = tooltip_renderer.render_pvp_tooltip(
        tooltip='Leech increased by 6%.\nGain an additional 6% leech while Metamorphosis is active.',
        spec_name='Havoc', effect_rows=rows, context_rows=rows,
    )
    assert rendered['render_status'] == 'COMPLETE'
    assert rendered['pvp_tooltip'] == (
        'Leech increased by 5%.\nGain an additional 5% leech while Metamorphosis is active.'
    )


def test_player_text_stops_at_metadata_and_keeps_unindented_paragraphs():
    raw = (
        'Description      : First $s1%.\r\r\n\r\r\n'
        'Second $s2%.\n'
        'Tooltip          : Active.\n'
        '                 : Continued $s3%.\n'
        'Variables        : $amount=$s4\n'
        '$other=$s5\n'
    )
    assert simc._player_text_sections(raw) == [
        'First $s1%.', 'Second $s2%.', 'Active.', 'Continued $s3%.',
    ]


def test_exact_build_fills_omitted_blood_description_without_frost_modifier():
    from pvpcalc.sources.simc import parse_dump, simple_player_description
    from pathlib import Path
    dump = parse_dump(Path('tests/fixtures/simc-207200.txt').read_text(), class_slug='deathknight')
    result = simple_player_description(dump, 207200, class_name='Death Knight', spec_name='Blood', spec_names=['Blood', 'Frost', 'Unholy'])
    assert result['text'] == 'Your auto attack damage grants you an absorb shield equal to 50% of the damage dealt.'
    # Frost changes that base value; this narrow fallback must not ignore it.
    assert simple_player_description(dump, 207200, class_name='Death Knight', spec_name='Frost', spec_names=['Blood', 'Frost', 'Unholy']) is None


def test_exact_build_subterfuge_uses_proven_spec_condition_and_keeps_paragraphs():
    from pvpcalc.sources.simc import parse_dump, simple_player_description
    from pathlib import Path
    dump = parse_dump(Path('tests/fixtures/simc-108208.txt').read_text(), class_slug='rogue')
    def render(spec, names=('Assassination', 'Outlaw', 'Subtlety')):
        return simple_player_description(dump, 108208, class_name='Rogue', spec_name=spec, spec_names=names)
    assert render('Outlaw')['text'].count('3 sec') == 2
    assert render('Subtlety')['text'].count('2 sec') == 2
    assert render('Outlaw', ('Outlaw',)) is None  # Unidentified conditions cannot be guessed.
