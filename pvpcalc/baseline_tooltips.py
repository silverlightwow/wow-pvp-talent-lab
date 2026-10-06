"""Exact symbolic descriptions for baseline tooltips lacking character stats."""
from __future__ import annotations
import re
from . import ranks
from .sources import simc


def coefficient_description(dump, spell_id):
    spell = dump.spells.get(spell_id)
    if spell is None:
        return None
    description = re.search(r'^Description\s*:\s*(.*)', spell.raw, re.M)
    if description is None:
        return None
    block = spell.raw[description.start():].split('\nTooltip', 1)[0].split('\nVariables', 1)[0]
    text = '\n'.join(simc._player_text_sections(block))
    coefficient_used = False

    def duration(sid):
        target = dump.spells.get(sid)
        match = re.search(r'^Duration\s*:\s*([\d.]+) seconds\b', target.raw, re.M) if target else None
        if not match:
            raise ValueError('Unknown exact duration')
        return float(match[1])

    def value(match):
        nonlocal coefficient_used
        sid = int(match[1] or spell_id)
        kind = match[2].lower()
        index = int(match[3] or 0)
        if kind == 'd':
            return f'{duration(sid):g} sec'
        target = dump.spells.get(sid)
        effect = simc.effect_for_spell(dump, sid, index)
        if not target or not effect:
            raise ValueError('Unknown exact effect')
        if kind == 't':
            tick = re.search(r'every ([\d.]+) seconds', effect.effect_text)
            if not tick:
                raise ValueError('Unknown exact tick interval')
            return tick[1]
        if kind == 'e':
            headers = list(simc._SIMC_EFFECT_HEADER_RE.finditer(target.raw))
            for position, header in enumerate(headers):
                if int(header[1]) == index:
                    end = headers[position + 1].start() if position + 1 < len(headers) else len(target.raw)
                    metadata = target.raw[header.end():end].split('\nDescription', 1)[0]
                    multiplier = re.search(r'Value Multiplier:\s*([\d.]+)', metadata)
                    if multiplier:
                        return multiplier[1]
            raise ValueError('Unknown exact value multiplier')
        sp, ap = effect.sp_coefficient or 0, effect.ap_coefficient or 0
        if sp and ap:
            raise ValueError('Hybrid coefficient')
        if sp or ap:
            if effect.base_value not in (None, 0):
                raise ValueError('Coefficient plus literal amount')
            amount = (sp or ap) * 100
            if kind == 'o':
                tick = re.search(r'every ([\d.]+) seconds', effect.effect_text)
                if not tick or not float(tick[1]):
                    raise ValueError('Unknown periodic total')
                amount *= duration(sid) / float(tick[1])
            coefficient_used = True
            numeric = f'{amount:.6f}'.rstrip('0').rstrip('.')
            return f'({numeric}% of {"Spell Power" if sp else "Attack Power"})'
        if kind == 'o' or effect.base_value is None:
            raise ValueError('Unknown scalar total')
        return f'{effect.base_value:g}'

    try:
        text = re.sub(r'\$(\d*)([sSmMwWoOtTeEdD])(\d*)(?!\w)', value, text)
        text = re.sub(r'\$\{([^{}]+)\}(?:\.(\d+))?',
                      lambda m: f'{ranks._arithmetic(m[1]):g}', text)
    except (ValueError, SyntaxError, ZeroDivisionError):
        return None
    text = re.sub(r'\|c[0-9A-Fa-f]{8}|\|r', '', text)
    if '$' in text or not coefficient_used:
        return None
    return dict(text=text.strip(), source='simc_exact_build', build=dump.build,
                spell_id=spell_id, coefficient_values=True)


def conditional_percent_formulas(dump, row):
    """Resolve both scalar alternatives of a proven client talent condition."""
    parent = int(row.get('talent_spell_id') or row['spell_id'])
    sid = int(row.get('source_spell_id') or row['spell_id'])
    index = int(row.get('effect_index') or 0)
    spell = dump.spells.get(parent)
    if not spell or row.get('base_value') is None or row.get('final_pvp_value') is None:
        return []
    target = re.compile(r'\$(?:' + str(sid) + r')?[sSmMwW]' + str(index) + r'(?!\d)') if parent == sid else re.compile(r'\$' + str(sid) + r'[sSmMwW]' + str(index) + r'(?!\d)')
    text = '\n'.join(simc._player_text_sections(spell.raw))
    result = []
    for condition in re.finditer(r'\$\?s(\d+)\[([^\[\]]+)\]\[([^\[\]]+)\]\s*%', text):
        talent = dump.spells.get(int(condition[1]))
        if not talent or not any(target.search(condition[n]) for n in (2,3)):
            continue
        def evaluate(expression, current):
            expression = expression.removeprefix('${').removesuffix('}')
            expression = target.sub(str(row['final_pvp_value'] if current else row['base_value']), expression)
            def other(match):
                effect = simc.effect_for_spell(dump,int(match[1] or parent),int(match[2]))
                if (not effect or effect.base_value is None or effect.sp_coefficient or effect.ap_coefficient
                        or effect.pvp_coefficient not in (None,1)):
                    raise ValueError('Unresolved conditional scalar')
                return str(effect.base_value)
            expression = re.sub(r'\$(\d*)[sSmMwW](\d+)',other,expression)
            return ranks._arithmetic(expression)
        try:
            before = [evaluate(condition[n],False) for n in (2,3)]
            after = [evaluate(condition[n],True) for n in (2,3)]
        except (ValueError,SyntaxError,ZeroDivisionError):
            continue
        result.append(dict(name=re.sub(r'\s*\(desc=.*\)$','',talent.name), old=before,new=after,
                           source='simc_exact_build',build=dump.build,expression=condition[0],effect_index=index))
    return result


def render_conditional_percent(text, formulas, *, original=None):
    original = text if original is None else original
    replacements = []
    for item in formulas:
        pattern = re.compile(r'\[' + re.escape(item['name']) + r':\s*(-?\d+(?:\.\d+)?)\s*/\s*(-?\d+(?:\.\d+)?)\s*\]\s*%',re.I)
        matches = list(pattern.finditer(text))
        if len(matches) != 1 or any(abs(float(matches[0][n+1])-item['old'][n]) > 1e-6 for n in (0,1)):
            continue
        new = '[' + item['name'] + ': ' + ' / '.join(f'{value:.4f}'.rstrip('0').rstrip('.') for value in item['new']) + ']%'
        old = matches[0][0]
        if original.count(old) != 1:
            continue
        start = original.index(old)
        text = text[:matches[0].start()] + new + text[matches[0].end():]
        replacements.append(dict(old_token=old,new_token=new,kind='percent_value',source=item['source'],
            start=start,end=start+len(old),old=item['old'][0],new=item['new'][0],effect_indexes=[item['effect_index']]))
    return text,replacements
