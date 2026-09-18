from pvpcalc.sources.wowhead import (
    parse_spell_html,
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
