from __future__ import annotations

import json
from typing import Any

from ..http import CachedClient
from ..models import EffectObservation


API_BASE = "https://drustvar.com/api/v1"


def _version_string(version: Any) -> str:
    if isinstance(version, str):
        return version

    if isinstance(version, dict):
        return str(version.get("version", ""))

    return str(version)


def current_version(payload: dict) -> str:
    """
    Drustvar explicitly orders versions newest -> oldest.

    We deliberately use versions[0], exactly like Drustvar's own frontend,
    rather than trying to infer the newest version ourselves.
    """
    versions = payload.get("versions") or []

    if not versions:
        raise ValueError("Drustvar response contains no versions")

    version = _version_string(versions[0])

    if not version:
        raise ValueError("Invalid current Drustvar version")

    return version


def patch_from_version(version: str) -> str:
    # 12.1.0.69587 -> 12.1.0
    parts = version.split(".")
    return ".".join(parts[:3])


def _value_for_version(
    effect: dict,
    version: str,
) -> dict | None:
    """
    Important: no historical carry-forward.

    If Drustvar has no value for the current build, we do not silently use
    an older build's value.
    """
    for value in effect.get("values", []):
        if _version_string(value.get("version")) == version:
            return value

    return None


def parse_spell_payload(
    payload: dict,
    wow_class: str,
) -> list[EffectObservation]:
    """
    Normalize /api/v1/pvp-spells/{class}.

    Drustvar spell-effect values represent EFFECTIVENESS:

        250 -> x2.50
         75 -> x0.75
          0 -> x0.00

    They are therefore divided by 100 when converted into our
    pvp_multiplier field.
    """

    version = current_version(payload)

    observations: list[EffectObservation] = []

    for spell in payload.get("spells", []):

        spell_id = int(spell["id"])
        spell_name = str(spell.get("name", f"Spell {spell_id}"))

        for effect in spell.get("effects", []):

            value_row = _value_for_version(
                effect,
                version,
            )

            if value_row is None:
                continue

            try:
                effectiveness_pct = float(value_row["value"])
            except (TypeError, ValueError, KeyError):
                continue

            multiplier = effectiveness_pct / 100.0

            raw = {
                "drustvar_spell_id": spell_id,
                "drustvar_effect_row_id": effect.get("id"),
                "game_effect_id": effect.get("effect_id"),
                "description": effect.get("description"),
                "version": version,
                "value": value_row.get("value"),
                "is_hotfixed": value_row.get("is_hotfixed"),
            }

            observations.append(
                EffectObservation(
                    source="drustvar",
                    spell_id=spell_id,
                    spell_name=spell_name,

                    # Drustvar's effect_id is NOT Wowhead's Effect #.
                    # We therefore keep the Wowhead-style effect index unknown.
                    effect_index=0,

                    base_value=None,
                    pvp_multiplier=multiplier,

                    effect_text=str(
                        effect.get("description", "")
                    ),

                    patch=version,

                    url=(
                        "https://drustvar.com/"
                        f"pvp-spells/{wow_class}"
                    ),

                    raw=json.dumps(
                        raw,
                        ensure_ascii=False,
                    ),
                )
            )

    return observations


def normalize_current_auras(
    payload: dict,
) -> list[dict]:
    """
    Normalize current /pvp-auras data WITHOUT prematurely converting
    the values into generic spell multipliers.

    PvP aura semantics are different from pvp-spells effectiveness values.

    Example:
        PVP Multiplier: Direct Amount
        value = 50

    We preserve this as modifier_value=50 until the resolver understands
    how this aura composes with the underlying spell/talent calculation.
    """

    version = current_version(payload)

    rows: list[dict] = []

    for aura in payload.get("auras", []):

        for effect in aura.get("effects", []):

            value_row = _value_for_version(
                effect,
                version,
            )

            if value_row is None:
                continue

            try:
                modifier_value = float(value_row["value"])
            except (TypeError, ValueError, KeyError):
                continue

            rows.append(
                {
                    "source": "drustvar_pvp_aura",

                    "version": version,

                    "aura_id": aura.get("id"),
                    "aura_name": aura.get("name"),

                    "class": aura.get("class"),
                    "spec": aura.get("spec"),
                    "class_slug": aura.get("class_slug"),

                    "effect_row_id": effect.get("id"),
                    "effect_id": effect.get("effect_id"),

                    "description": effect.get("description"),
                    "effect_type": effect.get("effect_type"),

                    "family_flags": effect.get("family_flags"),
                    "label_id": effect.get("label_id"),

                    # Deliberately NOT named pvp_multiplier.
                    "modifier_value": modifier_value,

                    "is_hotfixed": value_row.get(
                        "is_hotfixed",
                        False,
                    ),

                    "affected_spells": effect.get(
                        "affected_spells",
                        [],
                    ),
                }
            )

    return rows


async def fetch_class(
    client: CachedClient,
    wow_class: str,
) -> list[EffectObservation]:
    """
    Fetch current PvP spell-effect modifiers.
    """

    url = (
        f"{API_BASE}/"
        f"pvp-spells/{wow_class}"
    )

    payload = await client.get_json(url)

    return parse_spell_payload(
        payload,
        wow_class,
    )


async def fetch_spell_payload(
    client: CachedClient,
    wow_class: str,
) -> dict:
    """
    Raw Drustvar spell payload.
    Useful for audit/debugging.
    """

    return await client.get_json(
        f"{API_BASE}/pvp-spells/{wow_class}"
    )


async def fetch_aura_payload(
    client: CachedClient,
    wow_class: str,
) -> dict:
    """
    Raw Drustvar PvP-aura payload.
    """

    return await client.get_json(
        f"{API_BASE}/pvp-auras/{wow_class}"
    )


async def fetch_current_auras(
    client: CachedClient,
    wow_class: str,
) -> list[dict]:
    payload = await fetch_aura_payload(
        client,
        wow_class,
    )

    return normalize_current_auras(payload)
