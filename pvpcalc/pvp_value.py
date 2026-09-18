from __future__ import annotations

from dataclasses import dataclass
from typing import Iterable


# ============================================================
# Effect kinds
# ============================================================

DIRECT = "direct"
PERIODIC = "periodic"
ABSORB = "absorb"


@dataclass(frozen=True)
class PvpValueResult:
    base_value: float

    spell_pvp_multiplier: float
    after_spell_pvp: float

    aura_kind: str | None
    aura_factors: tuple[float, ...]
    aura_factor: float

    final_value: float

    spell_pvp_applied: bool
    aura_applied: bool


def matching_aura_rules(
    aura_rules,
    *,
    spell_id: int,
    amount_kind: str,
):
    """
    Return ONLY PvP Aura rules applicable to this particular
    output effect.

    Critical:
        direct   != periodic
        periodic != direct
        absorb   != direct

    Merely having the spell in affected_spells is not enough.
    """

    result = []

    for rule in aura_rules:

        if rule.amount_kind != amount_kind:
            continue

        affected_ids = {
            int(spell_id_)
            for spell_id_, _
            in rule.affected_spells
        }

        if int(spell_id) not in affected_ids:
            continue

        result.append(rule)

    return result


def combined_matching_aura_factor(
    aura_rules,
    *,
    spell_id: int,
    amount_kind: str,
):
    rules = matching_aura_rules(
        aura_rules,
        spell_id=spell_id,
        amount_kind=amount_kind,
    )

    factor = 1.0

    for rule in rules:
        factor *= float(
            rule.factor
        )

    return factor, rules


def calculate_pvp_value(
    *,
    base_value: float,
    spell_pvp_multiplier: float | None,
    spell_id: int,
    amount_kind: str | None,
    aura_rules,
) -> PvpValueResult:
    """
    Calculate:

        base
        × spell-specific PvP coefficient
        × matching spec PvP Aura coefficient(s)

    PvP Aura is applied only when the effect has a meaningful
    output kind: direct / periodic / absorb.
    """

    base = float(
        base_value
    )

    spell_mult = (
        1.0
        if spell_pvp_multiplier is None
        else float(spell_pvp_multiplier)
    )

    after_spell = (
        base
        * spell_mult
    )


    if amount_kind is None:

        aura_factor = 1.0
        matched_rules = []

    else:

        (
            aura_factor,
            matched_rules,
        ) = combined_matching_aura_factor(
            aura_rules,
            spell_id=spell_id,
            amount_kind=amount_kind,
        )


    final = (
        after_spell
        * aura_factor
    )


    return PvpValueResult(
        base_value=base,

        spell_pvp_multiplier=
            spell_mult,

        after_spell_pvp=
            after_spell,

        aura_kind=
            amount_kind,

        aura_factors=tuple(
            float(rule.factor)
            for rule
            in matched_rules
        ),

        aura_factor=
            aura_factor,

        final_value=
            final,

        spell_pvp_applied=
            abs(
                spell_mult - 1.0
            ) > 1e-12,

        aura_applied=
            bool(matched_rules),
    )
