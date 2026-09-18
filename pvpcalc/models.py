from __future__ import annotations
from dataclasses import dataclass, field, asdict
from typing import Optional

@dataclass(slots=True, frozen=True)
class EffectKey:
    spell_id: int
    effect_index: int  # 1-based, matching Wowhead display

@dataclass(slots=True)
class EffectObservation:
    source: str
    spell_id: int
    spell_name: str
    effect_index: int
    base_value: Optional[float] = None
    pvp_multiplier: Optional[float] = None
    effect_text: str = ""
    patch: Optional[str] = None
    url: str = ""
    raw: str = ""

@dataclass(slots=True)
class WikiObservation:
    source: str
    spell_id: int
    spell_name: str
    current_tooltip: str
    pvp_notes: list[str] = field(default_factory=list)
    changes: list[dict] = field(default_factory=list)
    page_url: str = ""

@dataclass(slots=True)
class ReconciledEffect:
    spell_id: int
    spell_name: str
    effect_index: int
    base_value: Optional[float]
    pvp_multiplier: Optional[float]
    pvp_value: Optional[float]
    effect_text: str
    sources: list[str]
    confidence: str
    conflicts: list[str] = field(default_factory=list)

    def to_dict(self):
        return asdict(self)
