from pvpcalc.sources.wowhead import (
    parse_spell_html,
    parse_nether_tooltip_payload,
)


def test_single_unnumbered_effect():

    html = """
    <html>
      <body>

        <h1>Spell Warding</h1>

        <h2>Spell Details</h2>

        <table>
          <tr>
            <th>Effect</th>
            <td>
              Apply Aura: Mod % Damage Taken (All)
              <br>
              Value: -3%
              <br>
              PVP Multiplier: 0.667
            </td>
          </tr>
        </table>

        <h2>Flags</h2>

      </body>
    </html>
    """

    result = parse_spell_html(
        html,
        spell_id=390667,
    )

    assert len(result) == 1

    effect = result[0]

    assert effect.effect_index == 1
    assert effect.base_value == -3.0
    assert effect.pvp_multiplier == 0.667


def test_fragmented_effect_description():

    html = """
    <html>
      <body>

        <h1>Void Infusion</h1>

        <h2>Spell Details</h2>

        <table>
          <tr>
            <th>Effect #2</th>

            <td>
              Apply Aura: Modifies
              <a href="/spell=123">
                Void Something
              </a>
              's Value (12)

              <br>
              Value: -20%
              <br>
              PVP Multiplier: 0.6
            </td>
          </tr>
        </table>

        <h2>Flags</h2>

      </body>
    </html>
    """

    result = parse_spell_html(
        html,
        spell_id=450612,
    )

    assert len(result) == 1
    assert result[0].effect_index == 2

    assert (
        "Apply Aura: Modifies"
        in result[0].effect_text
    )

    assert (
        "'s Value (12)"
        in result[0].effect_text
    )

    assert result[0].pvp_multiplier == 0.6


def test_nether_tooltip_payload_preserves_player_text():
    payload = {
        "name": "Example Talent",
        "icon": "spell_example",
        "tooltip": (
            "<b>Example Talent</b><br>"
            "Passive<br>"
            "Increases damage by <span>20%</span>.<br>"
            "Discipline<br>"
            "Power Word: Shield absorbs 30% more."
        ),
    }

    page = parse_nether_tooltip_payload(
        payload,
        spell_id=123456,
    )

    assert page.spell_name == "Example Talent"
    assert page.effects == tuple()
    assert "Increases damage by" in page.player_tooltip
    assert "20%" in page.player_tooltip
    assert "Discipline" in page.player_tooltip
    assert "Power Word: Shield absorbs 30% more." in page.player_tooltip
    assert not page.player_tooltip.startswith(
        "Example Talent"
    )


def test_inline_conditions_and_embedded_spell_titles_keep_complete_descriptions():
    import json
    from pathlib import Path
    from pvpcalc.sources.wowhead import parse_spell_page
    from pvpcalc.tooltip_renderer import tooltip_for_spec
    expected = {
        109186: 'Your healing spells and Smite have a 8% chance to make your next Flash Heal instant and cost 50% less mana. Stacks to 2.',
        450405: 'Entropic Rift upgrades Smite into Void Blast while it is active.\nVoid Blast:\nSends a blast of cosmic void energy at the enemy, causing (150% of Spell Power) Shadow damage.',
    }
    for spell_id, text in expected.items():
        payload = json.loads(Path(f'tests/fixtures/wowhead-{spell_id}.json').read_text())
        html = Path(f'tests/fixtures/wowhead-{spell_id}.html').read_text()
        for page in (parse_nether_tooltip_payload(payload, spell_id), parse_spell_page(html, spell_id)):
            assert tooltip_for_spec(page.player_tooltip, 'Discipline') == text
            if spell_id == 450405:
                shadow = tooltip_for_spec(page.player_tooltip, 'Shadow')
                assert 'upgrades Mind Blast' in shadow
                assert '210%' in shadow and 'Generates 0 Insanity.' in shadow
                assert '150%' not in shadow and 'upgrades Smite' not in shadow


def test_mind_blast_source_metadata_selects_discipline_recharge_override():
    import json
    from pathlib import Path
    from pvpcalc.sources.wowhead import parse_spell_page, tooltip_for_specialization
    payload = json.loads(Path('tests/fixtures/wowhead-8092.json').read_text())
    html = Path('tests/fixtures/wowhead-8092.html').read_text()
    for page in (parse_nether_tooltip_payload(payload, 8092), parse_spell_page(html, 8092)):
        assert '9 sec cooldown' in page.player_tooltip  # Generic source record.
        disc = tooltip_for_specialization(page, [137032])
        assert '28 sec cooldown' in disc and '9 sec cooldown' not in disc
        assert '9 sec cooldown' in tooltip_for_specialization(page, [137033])


def test_nonnumeric_cooldown_requires_reciprocal_exact_zero_modifier():
    import pytest
    from pvpcalc.sources import simc
    from pvpcalc.sources.wowhead import WowheadSpellPage, tooltip_for_specialization
    raw = ('SimulationCraft for World of Warcraft 12.1.5.12345 Live\n'
        'Name             : Example Aura (id=10) [Passive, Hidden]\n'
        '#1 (id=101) : Apply Aura (6) | Add Percent Modifier (108): Spell Cooldown (11)\n'
        'Base Value: -100 | Scaled Value: -100\n'
        'Affected Spells: Example Ability (20)\n'
        'Name             : Example Ability (id=20)\n'
        'Cooldown         : 3 seconds\n'
        'Affecting Spells : Example Aura (10 effect: #1)\n'
        'Description      : Deals damage.\n')
    dump = simc.parse_dump(raw, class_slug='example')
    page = WowheadSpellPage(20, 'Example Ability', 'Instant\n3 sec cooldown\nDeals damage.', (), '',
        metadata_overrides=(('cooldown', 10, 'until canceled'),))
    assert tooltip_for_specialization(page, [10], simc_dump=dump) == 'Instant\nDeals damage.'
    assert '3 sec cooldown' in tooltip_for_specialization(page, [99], simc_dump=dump)
    for changed in (raw.replace('-100', '-50'), raw.replace('(20)', '(21)'),
                    raw.replace('(10 effect: #1)', '(10 effect: #2)'),
                    raw.replace('Scaled Value: -100', 'Scaled Value: -90'),
                    raw.replace('Scaled Value: -100', 'Scaled Value: -100 | PvP Coefficient: 0.5')):
        with pytest.raises(ValueError, match='Unverified cooldown metadata'):
            tooltip_for_specialization(page, [10], simc_dump=simc.parse_dump(changed, class_slug='example'))
    with pytest.raises(ValueError, match='Unverified cooldown metadata'):
        tooltip_for_specialization(page, [10])


def test_source_named_arithmetic_alternatives_remain_distinct():
    from pvpcalc.tooltip_renderer import tooltip_for_spec
    text = 'Deals [(12% of Attack Power) * [(Power * 0.9)][((Power + Other Power) * 2 / 3)] -- A, B / Power] damage.'
    rendered = tooltip_for_spec(text, 'Example', ['Example'])
    assert '(A: (Power * 0.9); B: ((Power + Other Power) * 2 / 3))' in rendered
    assert '12% of Attack Power' in rendered and '/ Power' in rendered
    assert '-- A, B' not in rendered
    arithmetic = 'Deals [(Power * 2)] damage.'
    assert tooltip_for_spec(arithmetic, 'Example', ['Example']) == arithmetic
    assert tooltip_for_spec('Deals [(12% of Spell Power)] damage.', 'Example', ['Example']) == 'Deals (12% of Spell Power) damage.'
    unmatched = '[(Power * 2)][(Power * 3)] -- A, B, C'
    assert tooltip_for_spec(unmatched, 'Example', ['Example']) == unmatched


def test_zero_recharge_requires_exact_category_and_reciprocal_effect():
    import pytest
    from pvpcalc.sources import simc
    from pvpcalc.sources.wowhead import WowheadSpellPage, tooltip_for_specialization
    raw = ('SimulationCraft for World of Warcraft 12.1.5.12345 Live\n'
        'Name             : Example Aura (id=10) [Passive, Hidden]\n'
        '#1 (id=101) : Apply Aura (6) | Modify Recharge Time% (Category) (454)\n'
        'Base Value: -100 | Scaled Value: -100 | Misc Value: 222 (Category)\n'
        'Affected Spells (Category): Example Ability (20)\n'
        'Name             : Example Ability (id=20)\n'
        'Charges          : 1 (12 seconds cooldown)\n'
        'Category         : 222 (Type 0x1): Example Aura (10 effect#1)\n'
        'Description      : Deals damage.\n')
    page = WowheadSpellPage(20, 'Example Ability', '12 sec cooldown\nDeals damage.', (), '',
        metadata_overrides=(('cooldown', 10, 'until canceled'),))
    assert tooltip_for_specialization(page, [10], simc_dump=simc.parse_dump(raw,class_slug='example')) == 'Deals damage.'
    for changed in (raw.replace('Misc Value: 222', 'Misc Value: 333'),
                    raw.replace('(10 effect#1)', '(10 effect#2)'),
                    raw.replace('Charges          :', 'Cooldown         : 5 seconds\nCharges          :')):
        with pytest.raises(ValueError, match='Unverified cooldown metadata'):
            tooltip_for_specialization(page, [10], simc_dump=simc.parse_dump(changed,class_slug='example'))
