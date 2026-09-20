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
