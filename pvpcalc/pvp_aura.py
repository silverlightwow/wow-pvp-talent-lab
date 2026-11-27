from __future__ import annotations

import math
import re
from dataclasses import dataclass


@dataclass(frozen=True)
class PvpAuraRule:
    aura_spell_id: int
    aura_name: str
    spec_name: str

    drustvar_effect_id: int | None
    game_effect_id: int | None

    amount_kind: str

    value_pct: float
    factor: float

    affected_spells: tuple[
        tuple[int, str],
        ...
    ]

    family_flags: int | None
    label_id: int | None

    build: str
    is_hotfixed: bool | None
    source: str = "drustvar"


def _amount_kind(
    description: str,
) -> str:

    text = str(
        description or ""
    ).casefold()

    if "direct amount" in text:
        return "direct"

    if "periodic amount" in text:
        return "periodic"

    if "absorb amount" in text:
        return "absorb"

    match = re.search(
        r"modify\s+effect\s+(\d+)",
        text,
    )

    if match:
        return (
            f"effect:{int(match.group(1))}"
        )

    raise ValueError(
        "Unknown PvP Aura amount type: "
        f"{description!r}"
    )


def normalize_current_spec_aura(
    payload: dict,
    *,
    spec_name: str,
    class_name: str | None = None,
) -> list[PvpAuraRule]:
    """
    Normalize one specialization's current PvP Aura.

    IMPORTANT:
    `value` is a signed percentage delta:

        3   -> +3%
        50  -> +50%
        -8  -> -8%

    Individual multiplicative factor:

        factor = 1 + value / 100

    Rows with no value for the current build are historical-only
    and are intentionally excluded.
    """

    versions = payload.get(
        "versions",
        [],
    )

    if not versions:
        raise ValueError(
            "PvP Aura payload has no versions"
        )

    current_build = versions[0]

    expected_names = {
        spec_name.casefold(),
    }

    if class_name:
        expected_names.add(
            f"{spec_name} {class_name}"
            .casefold()
        )

    matches = [
        aura
        for aura in payload.get(
            "auras",
            [],
        )
        if (
            str(
                aura.get(
                    "spec",
                    "",
                )
            ).strip().casefold()
            == spec_name.casefold()

            or str(
                aura.get(
                    "name",
                    "",
                )
            ).strip().casefold()
            in expected_names
        )
    ]

    # Some specs currently have no specialization PvP Aura at all.
    # That is a valid identity state, not an error.
    if not matches:
        return []

    if len(matches) > 1:
        raise ValueError(
            f"Expected at most one PvP Aura "
            f"for spec {spec_name!r}, "
            f"found {len(matches)}"
        )

    aura = matches[0]

    rules = []

    for effect in aura.get(
        "effects",
        [],
    ):

        current = next(
            (
                value
                for value
                in effect.get(
                    "values",
                    [],
                )
                if (
                    value.get("version")
                    == current_build
                )
            ),
            None,
        )

        # Historical-only effect.
        if current is None:
            continue

        raw_value = current.get(
            "value"
        )

        if raw_value in {
            None,
            "",
        }:
            continue

        value_pct = float(
            raw_value
        )

        kind = _amount_kind(
            effect.get(
                "description",
                "",
            )
        )

        affected = tuple(
            (
                int(spell["id"]),
                str(spell["name"]),
            )
            for spell
            in effect.get(
                "affected_spells",
                [],
            )
            if (
                spell.get("id")
                is not None
            )
        )

        rules.append(
            PvpAuraRule(
                aura_spell_id=int(
                    aura["id"]
                ),

                aura_name=str(
                    aura.get(
                        "name",
                        "",
                    )
                ),

                spec_name=str(
                    aura.get(
                        "spec",
                        spec_name,
                    )
                ),

                drustvar_effect_id=(
                    int(effect["id"])
                    if effect.get("id")
                    is not None
                    else None
                ),

                game_effect_id=(
                    int(effect["effect_id"])
                    if effect.get(
                        "effect_id"
                    ) is not None
                    else None
                ),

                amount_kind=kind,

                value_pct=value_pct,

                factor=(
                    1.0
                    + value_pct / 100.0
                ),

                affected_spells=affected,

                family_flags=(
                    int(
                        effect[
                            "family_flags"
                        ]
                    )
                    if effect.get(
                        "family_flags"
                    ) is not None
                    else None
                ),

                label_id=(
                    int(
                        effect[
                            "label_id"
                        ]
                    )
                    if effect.get(
                        "label_id"
                    ) is not None
                    else None
                ),

                build=current_build,

                is_hotfixed=current.get(
                    "is_hotfixed"
                ),
            )
        )

    return rules


def supplement_exact_percent_rules(rules, payload, dump, *, spec_name, class_name):
    """Recover omitted percentage spell modifiers on the actual PvP spec aura.

    The identity of the PvP-only aura is established by Drustvar; the
    pinned SimC dump supplies effect IDs, label membership and magnitude.
    Only multiplicative aura type 218 is supported here. Flat modifiers,
    cooldowns and pet/guardian auras require different numeric semantics.
    Never treat a regular PvE specialization passive as a PvP aura.
    """
    from .sources import simc
    selected = [a for a in payload.get("auras", [])
                if str(a.get("spec", "")).casefold() == spec_name.casefold()
                or str(a.get("name", "")).casefold() == f"{spec_name} {class_name}".casefold()]
    if len(selected) != 1:
        return rules
    aura = selected[0]
    spell = dump.spells.get(int(aura["id"]))
    if not spell or not dump.build or spell.name.casefold() != str(aura.get("name", "")).casefold():
        return rules
    known = {rule.game_effect_id: rule for rule in rules}
    output = list(rules)
    headers = list(simc._SIMC_EFFECT_HEADER_RE.finditer(spell.raw))
    for n, header in enumerate(headers):
        index = int(header[1])
        effect = simc.effect_for_spell(dump, spell.spell_id, index)
        if effect is None or not effect.game_effect_id:
            continue
        match = re.search(r"Apply Percent Modifier w/ Label \(218\): Spell "
                          r"(Effect (\d+)|Direct Amount|Periodic Amount|Absorb Amount)\b",
                          effect.effect_text)
        if not match:
            continue
        value = effect.base_value
        if value is None or not math.isfinite(value) or value == 0:
            continue
        if effect.scaled_value not in (None, value) or simc.effect_uses_coefficient(effect):
            raise ValueError("Unsupported scaled PvP percentage aura")
        block = spell.raw[header.start():headers[n+1].start() if n+1<len(headers) else len(spell.raw)]
        label = re.search(r"Misc Value 2:\s*(\d+)\s*\(Label\)", block)
        if not label:
            raise ValueError("PvP percentage modifier lacks exact label identity")
        label_id = int(label[1])
        kind = f"effect:{match[2]}" if match[2] else match[1].split()[0].lower()
        existing = known.get(effect.game_effect_id)
        if existing:
            if (existing.amount_kind != kind or existing.label_id != label_id
                    or abs(existing.value_pct-value)>1e-9):
                raise ValueError("Conflicting exact and Drustvar PvP percentage aura")
            continue
        affected_line = re.search(r"Affected Spells \(Label\):\s*([^\r\n]+)", block)
        affected = tuple((sid,dump.spells[sid].name) for sid in
            sorted(simc.spell_ids_for_label(dump,label_id)))
        if affected_line:
            declared = set(map(int,re.findall(r"\((\d+)\)",affected_line[1])))
            if declared & dump.spells.keys() - {sid for sid,_ in affected}:
                raise ValueError("PvP aura target disagrees with exact label membership")
        output.append(PvpAuraRule(aura_spell_id=spell.spell_id, aura_name=spell.name,
            spec_name=spec_name, drustvar_effect_id=None, game_effect_id=effect.game_effect_id,
            amount_kind=kind, value_pct=float(value), factor=1+float(value)/100,
            affected_spells=affected, family_flags=None,label_id=label_id,build=dump.build,
            is_hotfixed=None,source="simc_exact_pvp_aura"))
    return output


def rules_for_spell(
    rules: list[PvpAuraRule],
    spell_id: int,
    *,
    amount_kind: str | None = None,
    effect_index: int | None = None,
    spell_label_ids=(),
) -> list[PvpAuraRule]:
    """
    Resolve concrete PvP Aura rules for one spell effect.

    A rule can target either:
      - explicit affected_spells, or
      - a SpellLabel (label_id), resolved from exact-build SimC.

    "Modify Effect N" rules are effect-index scoped and therefore do
    not require an inferred direct/periodic/absorb kind.
    """

    spell_id = int(
        spell_id
    )

    labels = {
        int(label_id)
        for label_id
        in (spell_label_ids or ())
    }

    result = []

    for rule in rules:

        affected_ids = {
            affected_id
            for affected_id, _
            in rule.affected_spells
        }

        explicit_target = (
            spell_id in affected_ids
        )

        label_target = (
            rule.label_id is not None
            and int(rule.label_id)
            in labels
        )

        if (
            not explicit_target
            and not label_target
        ):
            continue

        if rule.amount_kind.startswith(
            "effect:"
        ):
            required_index = int(
                rule.amount_kind.split(
                    ":",
                    1,
                )[1]
            )

            if (
                effect_index is None
                or int(effect_index)
                != required_index
            ):
                continue

        elif (
            amount_kind is None
            or rule.amount_kind
            != amount_kind
        ):
            continue

        result.append(rule)

    return result

def combined_aura_factor(
    rules: list[PvpAuraRule],
    spell_id: int,
    *,
    amount_kind: str | None,
    effect_index: int | None = None,
    spell_label_ids=(),
) -> float:
    """
    Combine all applicable spec-PvP-Aura rules.

    PvP Aura buckets are sequential percentage modifiers:

        factor_i = 1 + value_i / 100

        combined = product(factor_i)

    Do NOT use:
        1 + sum(value_i) / 100
    """

    applicable = rules_for_spell(
        rules,
        spell_id,
        amount_kind=amount_kind,
        effect_index=effect_index,
        spell_label_ids=spell_label_ids,
    )

    return math.prod(
        rule.factor
        for rule in applicable
    )
