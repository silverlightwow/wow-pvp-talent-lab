from __future__ import annotations

from dataclasses import dataclass
from typing import Iterable

from . import pvp_aura


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
    amount_kind: str | None,
    effect_index: int | None = None,
    spell_label_ids=(),
):
    """
    Return only PvP Aura rules applicable to this concrete spell
    effect. Supports ordinary output buckets, effect-index rules,
    and exact-build SpellLabel targeting.
    """

    return pvp_aura.rules_for_spell(
        aura_rules,
        spell_id,
        amount_kind=amount_kind,
        effect_index=effect_index,
        spell_label_ids=spell_label_ids,
    )


def combined_matching_aura_factor(
    aura_rules,
    *,
    spell_id: int,
    amount_kind: str | None,
    effect_index: int | None = None,
    spell_label_ids=(),
):
    rules = matching_aura_rules(
        aura_rules,
        spell_id=spell_id,
        amount_kind=amount_kind,
        effect_index=effect_index,
        spell_label_ids=spell_label_ids,
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
    effect_index: int | None = None,
    spell_label_ids=(),
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


    (
        aura_factor,
        matched_rules,
    ) = combined_matching_aura_factor(
        aura_rules,
        spell_id=spell_id,
        amount_kind=amount_kind,
        effect_index=effect_index,
        spell_label_ids=spell_label_ids,
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
