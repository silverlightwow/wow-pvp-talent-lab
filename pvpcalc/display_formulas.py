"""Literal client formulas connecting one SpellEffect to visible amounts."""
from __future__ import annotations

import re

from . import ranks
from .sources import simc


def effect_formulas(dump, row):
    """Evaluate only exact, scalar player-text expressions for a direct effect.

    Named variables can expose a total rather than the stored per-tick amount.
    Other effects, character scaling and unknown client tokens remain unresolved.
    The renderer still requires the computed amount to be visible in its unit.
    """
    if row.get('effect_origin', 'DIRECT') != 'DIRECT':
        return []
    sid = int(row.get('source_spell_id', row.get('spell_id', 0)))
    index = int(row.get('effect_index') or 0)
    spell = dump.spells.get(sid)
    base = row.get('base_value')
    new = row.get('final_pvp_value')
    if spell is None or base is None or new is None or row.get('simc_sp_coefficient') or row.get('simc_ap_coefficient'):
        return []
    if float(base) * float(new) < 0:
        # Directional prose must continue through the sign-aware renderer.
        return []
    text = '\n'.join(simc._player_text_sections(spell.raw))
    variables = simc._variable_definitions(spell.raw)
    for _ in range(5):
        updated = re.sub(r'\$<([A-Za-z_]\w*)>', lambda m: variables.get(m[1], m[0]), text)
        if updated == text:
            break
        text = updated
    reference = re.compile(r'\$(?:' + str(sid) + r')?[sSmMwW]' + str(index) + r'(?!\d)')
    tokens = re.compile(r'\$\{([^{}]+)\}(?:\.(\d+))?\s*(%|sec(?:onds?)?\b)|'
                        r'(\$(?:' + str(sid) + r')?[sSmMwW]' + str(index) + r'(?!\d))\s*(%)')
    formulas = []
    for match in tokens.finditer(text):
        expression = match[1] or match[4]
        if not reference.search(expression):
            continue
        try:
            old_value = ranks._arithmetic(reference.sub(str(float(base)), expression))
            new_value = ranks._arithmetic(reference.sub(str(float(new)), expression))
        except (ValueError, SyntaxError, ZeroDivisionError, OverflowError):
            continue
        precision = int(match[2] or 4)
        unit = match[3] or match[5]
        candidate = dict(old=round(abs(old_value), precision), new=round(abs(new_value), precision),
                         kind='percent_value' if unit == '%' else 'duration_seconds',
                         expression=expression, source='simc_exact_build', build=dump.build)
        if candidate not in formulas:
            formulas.append(candidate)
    return formulas
