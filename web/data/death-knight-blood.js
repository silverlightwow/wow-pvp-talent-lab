window.WOW_PVP_DATA = {
  "class_name": "Death Knight",
  "spec_name": "Blood",
  "tree_build": "12.1.0.69933",
  "simc_build": "12.1.0.69933",
  "drustvar_builds": [
    "12.1.0.69933"
  ],
  "talents": [
    {
      "talent_name": "Icebound Fortitude",
      "spell_id": 48792,
      "node_id": 76081,
      "entry_id": 96210,
      "definition_id": 101212,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76081,
        "node_name": "Icebound Fortitude",
        "node_type": "single",
        "pos_x": 3000,
        "pos_y": 1200,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [
          76045
        ],
        "entry_id": 96210,
        "entry_max_ranks": 1,
        "definition_id": 101212,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Icebound Fortitude",
        "spell_id": 48792,
        "visible_spell_id": null,
        "icon": "spell_deathknight_iceboundfortitude",
        "icon_candidates": [
          "spell_deathknight_iceboundfortitude"
        ]
      },
      "pve_tooltip": "Instant\n2 min cooldown\nYour blood freezes, granting immunity to Stun effects and reducing all damage you take by 30% for 8 sec.",
      "pvp_tooltip": "Instant\n2 min cooldown\nYour blood freezes, granting immunity to Stun effects and reducing all damage you take by 30% for 8 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Death Strike",
      "spell_id": 49998,
      "node_id": 76071,
      "entry_id": 96200,
      "definition_id": 101202,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76071,
        "node_name": "Death Strike",
        "node_type": "single",
        "pos_x": 4200,
        "pos_y": 1200,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": true,
        "free_node": true,
        "prev": [],
        "next": [
          76067
        ],
        "entry_id": 96200,
        "entry_max_ranks": 1,
        "definition_id": 101202,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Death Strike",
        "spell_id": 49998,
        "visible_spell_id": null,
        "icon": "spell_deathknight_butcher2",
        "icon_candidates": [
          "spell_deathknight_butcher2"
        ]
      },
      "pve_tooltip": "45 Runic Power\nMelee Range\nInstant\nFocuses dark power into a strike that deals (176.1% of Attack Power) Physical damage and heals you for (20 / Voracious: 21 / Improved Death Strike: 32)% of all damage taken in the last 5 sec, minimum 7.0% of maximum health.",
      "pvp_tooltip": "45 Runic Power\nMelee Range\nInstant\nFocuses dark power into a strike that deals (123.27% of Attack Power) Physical damage and heals you for (20 / Voracious: 21 / Improved Death Strike: 32)% of all damage taken in the last 5 sec, minimum 7.0% of maximum health.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 80,
          "end": 85,
          "old_token": "176.1",
          "new_token": "123.27",
          "kind": "attack_power_coefficient",
          "effect_indexes": [
            1
          ]
        }
      ],
      "diagnostics": [
        {
          "effect_indexes": [
            1
          ],
          "status": "OTHER_SPEC_BRANCH",
          "kind": "attack_power_coefficient",
          "old": 29.835,
          "new": 20.8845,
          "full_tooltip_match_count": 1
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "attack_power_coefficient",
          "old": "176.1",
          "new": "123.27"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 1.761,
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 49998,
          "source_spell_id": 49998,
          "effect_index": 1,
          "effect_text": "School Damage (Physical) (AP mod: 1.761 )",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.7,
          "final_pvp_multiplier": 0.7,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [
            {
              "aura_spell_id": 1256916,
              "game_effect_id": 1266209,
              "amount_kind": "direct",
              "value_pct": -30.0,
              "factor": 0.7,
              "label_id": null,
              "build": "12.1.0.69933"
            }
          ],
          "sources": [
            "wowhead"
          ],
          "source_notes": [],
          "confidence": "medium"
        },
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 0.29835,
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 49998,
          "source_spell_id": 66188,
          "effect_index": 1,
          "effect_text": "School Damage (Physical) (AP mod: 0.29835 )",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.7,
          "final_pvp_multiplier": 0.7,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            49998,
            66188
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256916,
              "game_effect_id": 1266209,
              "amount_kind": "direct",
              "value_pct": -30.0,
              "factor": 0.7,
              "label_id": null,
              "build": "12.1.0.69933"
            }
          ],
          "sources": [
            "wowhead"
          ],
          "source_notes": [],
          "confidence": "medium"
        }
      ],
      "render_effect_count": 2,
      "rank_tooltips": []
    },
    {
      "talent_name": "Raise Dead",
      "spell_id": 46585,
      "node_id": 76072,
      "entry_id": 96201,
      "definition_id": 101203,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76072,
        "node_name": "Raise Dead",
        "node_type": "single",
        "pos_x": 5400,
        "pos_y": 1200,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [
          76073
        ],
        "entry_id": 96201,
        "entry_max_ranks": 1,
        "definition_id": 101203,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Raise Dead",
        "spell_id": 46585,
        "visible_spell_id": null,
        "icon": "inv_pet_ghoul",
        "icon_candidates": [
          "inv_pet_ghoul"
        ]
      },
      "pve_tooltip": "30 yd range\nInstant\n2 min cooldown\nRaises a [Glyph of the Geist: geist / ghoul] to fight by your side. You can have a maximum of one [Glyph of the Geist: geist / ghoul] at a time. Lasts 1 min.",
      "pvp_tooltip": "30 yd range\nInstant\n2 min cooldown\nRaises a [Glyph of the Geist: geist / ghoul] to fight by your side. You can have a maximum of one [Glyph of the Geist: geist / ghoul] at a time. Lasts 1 min.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Runic Attenuation",
      "spell_id": 207104,
      "node_id": 76045,
      "entry_id": 96173,
      "definition_id": 101175,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76045,
        "node_name": "Runic Attenuation",
        "node_type": "single",
        "pos_x": 3000,
        "pos_y": 1800,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76081
        ],
        "next": [
          76084,
          76044,
          76052
        ],
        "entry_id": 96173,
        "entry_max_ranks": 1,
        "definition_id": 101175,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Runic Attenuation",
        "spell_id": 207104,
        "visible_spell_id": null,
        "icon": "boss_odunrunes_blue",
        "icon_candidates": [
          "boss_odunrunes_blue"
        ]
      },
      "pve_tooltip": "Approximately 10.8 procs per minute\nAuto attacks have a chance to generate 3 Runic Power.",
      "pvp_tooltip": "Approximately 10.8 procs per minute\nAuto attacks have a chance to generate 3 Runic Power.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Improved Death Strike",
      "spell_id": 374277,
      "node_id": 76067,
      "entry_id": 96196,
      "definition_id": 101198,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76067,
        "node_name": "Improved Death Strike",
        "node_type": "single",
        "pos_x": 4200,
        "pos_y": 1800,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76071
        ],
        "next": [
          76052,
          76074,
          76069
        ],
        "entry_id": 96196,
        "entry_max_ranks": 1,
        "definition_id": 101198,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Improved Death Strike",
        "spell_id": 374277,
        "visible_spell_id": null,
        "icon": "spell_deathknight_butcher2",
        "icon_candidates": [
          "spell_deathknight_butcher2"
        ]
      },
      "pve_tooltip": "Death Strike's cost is reduced by 5, and its healing is increased by 15%.",
      "pvp_tooltip": "Death Strike's cost is reduced by 5, and its healing is increased by 15%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Cleaving Strikes",
      "spell_id": 316916,
      "node_id": 76073,
      "entry_id": 96202,
      "definition_id": 101204,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76073,
        "node_name": "Cleaving Strikes",
        "node_type": "single",
        "pos_x": 5400,
        "pos_y": 1800,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76072
        ],
        "next": [
          76069,
          76059,
          110029
        ],
        "entry_id": 96202,
        "entry_max_ranks": 1,
        "definition_id": 101204,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Cleaving Strikes",
        "spell_id": 316916,
        "visible_spell_id": null,
        "icon": "inv_1115_warrior_fastermeleeattacks",
        "icon_candidates": [
          "inv_1115_warrior_fastermeleeattacks"
        ]
      },
      "pve_tooltip": "Heart Strike hits up to 3 additional enemies while you remain in Death and Decay.\nWhen leaving your Death and Decay you retain its bonus effects for 4 sec.",
      "pvp_tooltip": "Heart Strike hits up to 3 additional enemies while you remain in Death and Decay.\nWhen leaving your Death and Decay you retain its bonus effects for 4 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Mind Freeze",
      "spell_id": 47528,
      "node_id": 76084,
      "entry_id": 96213,
      "definition_id": 101215,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76084,
        "node_name": "Mind Freeze",
        "node_type": "single",
        "pos_x": 2400,
        "pos_y": 2400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76045
        ],
        "next": [
          76083,
          101708
        ],
        "entry_id": 96213,
        "entry_max_ranks": 1,
        "definition_id": 101215,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Mind Freeze",
        "spell_id": 47528,
        "visible_spell_id": null,
        "icon": "spell_deathknight_mindfreeze",
        "icon_candidates": [
          "spell_deathknight_mindfreeze"
        ]
      },
      "pve_tooltip": "15 yd range\nInstant\n15 sec cooldown\nSmash the target's mind with cold, interrupting spellcasting and preventing any spell in that school from being cast for 5 sec.",
      "pvp_tooltip": "15 yd range\nInstant\n15 sec cooldown\nSmash the target's mind with cold, interrupting spellcasting and preventing any spell in that school from being cast for 5 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Blinding Sleet",
      "spell_id": 207167,
      "node_id": 76044,
      "entry_id": 96172,
      "definition_id": 101174,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76044,
        "node_name": "Blinding Sleet",
        "node_type": "single",
        "pos_x": 3000,
        "pos_y": 2400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76045
        ],
        "next": [
          101708
        ],
        "entry_id": 96172,
        "entry_max_ranks": 1,
        "definition_id": 101174,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Blinding Sleet",
        "spell_id": 207167,
        "visible_spell_id": null,
        "icon": "spell_frost_chillingblast",
        "icon_candidates": [
          "spell_frost_chillingblast"
        ]
      },
      "pve_tooltip": "Instant\n1 min cooldown\nTargets in a cone in front of you are blinded, causing them to wander disoriented for 5 sec. Damage may cancel the effect.\nWhen Blinding Sleet ends, enemies are slowed by 50% for 6 sec.",
      "pvp_tooltip": "Instant\n1 min cooldown\nTargets in a cone in front of you are blinded, causing them to wander disoriented for 5 sec. Damage may cancel the effect.\nWhen Blinding Sleet ends, enemies are slowed by 30% for 6 sec.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 194,
          "end": 196,
          "old_token": "50",
          "new_token": "30",
          "kind": "percent_value",
          "effect_indexes": [
            1
          ]
        }
      ],
      "diagnostics": [
        {
          "effect_indexes": [
            2
          ],
          "status": "NOT_VISIBLE_IN_TOOLTIP",
          "kind": "ordinary_value",
          "old": 60.0,
          "new": 49.99998,
          "full_tooltip_match_count": 0
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "percent_value",
          "old": "50",
          "new": "30"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 207167,
          "source_spell_id": 207167,
          "effect_index": 2,
          "effect_text": "Apply Aura (6) | Decrease Movement Speed% (33)",
          "base_value": -60.0,
          "spell_pvp_multiplier": 0.833333,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.833333,
          "final_pvp_value": -49.99998,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [],
          "sources": [
            "simc",
            "drustvar",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "high"
        },
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 207167,
          "source_spell_id": 317898,
          "effect_index": 1,
          "effect_text": "Apply Aura (6) | Decrease Movement Speed% (33)",
          "base_value": -50.0,
          "spell_pvp_multiplier": 0.6,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.6,
          "final_pvp_value": -30.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            207167,
            317898
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [],
          "sources": [
            "simc",
            "drustvar",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "high"
        }
      ],
      "render_effect_count": 2,
      "rank_tooltips": []
    },
    {
      "talent_name": "Gloom Ward",
      "spell_id": 391571,
      "node_id": 76052,
      "entry_id": 96180,
      "definition_id": 101182,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76052,
        "node_name": "Gloom Ward",
        "node_type": "single",
        "pos_x": 3600,
        "pos_y": 2400,
        "max_ranks": 2,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76045,
          76067
        ],
        "next": [
          101708,
          76066,
          76068
        ],
        "entry_id": 96180,
        "entry_max_ranks": 2,
        "definition_id": 101182,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Gloom Ward",
        "spell_id": 391571,
        "visible_spell_id": null,
        "icon": "ability_rogue_envelopingshadows",
        "icon_candidates": [
          "ability_rogue_envelopingshadows"
        ]
      },
      "pve_tooltip": "Absorbs are 30% more effective on you.",
      "pvp_tooltip": "Absorbs are 30% more effective on you.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": [
        {
          "rank": 1,
          "pve_tooltip": "Absorbs are 15% more effective on you.",
          "pvp_tooltip": "Absorbs are 15% more effective on you.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "Absorbs are 30% more effective on you.",
          "pvp_tooltip": "Absorbs are 30% more effective on you.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "March of Darkness",
      "spell_id": 391546,
      "node_id": 76074,
      "entry_id": 96203,
      "definition_id": 101205,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76074,
        "node_name": "March of Darkness / Wraith Walk",
        "node_type": "choice",
        "pos_x": 4200,
        "pos_y": 2400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76067
        ],
        "next": [
          76068
        ],
        "entry_id": 96203,
        "entry_max_ranks": 1,
        "definition_id": 101205,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "March of Darkness",
        "spell_id": 391546,
        "visible_spell_id": null,
        "icon": "ability_argus_deathfog",
        "icon_candidates": [
          "ability_argus_deathfog"
        ]
      },
      "pve_tooltip": "Death's Advance grants an additional 25% movement speed over the first 3 sec. [Price of Progress: Movement speed while using Price of Progress is increased by 5%]",
      "pvp_tooltip": "Death's Advance grants an additional 25% movement speed over the first 3 sec. [Price of Progress: Movement speed while using Price of Progress is increased by 5%]",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Wraith Walk",
      "spell_id": 212552,
      "node_id": 76074,
      "entry_id": 133518,
      "definition_id": 138304,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76074,
        "node_name": "March of Darkness / Wraith Walk",
        "node_type": "choice",
        "pos_x": 4200,
        "pos_y": 2400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76067
        ],
        "next": [
          76068
        ],
        "entry_id": 133518,
        "entry_max_ranks": 1,
        "definition_id": 138304,
        "entry_index": 200,
        "entry_type": "active",
        "talent_name": "Wraith Walk",
        "spell_id": 212552,
        "visible_spell_id": null,
        "icon": "inv_helm_plate_raiddeathknight_p_01",
        "icon_candidates": [
          "inv_helm_plate_raiddeathknight_p_01"
        ]
      },
      "pve_tooltip": "Channeled (4 sec cast)\n1 min cooldown\nEmbrace the power of the Shadowlands, removing all root effects and increasing your movement speed by 70% for 4 sec. Taking any action cancels the effect.\nWhile active, your movement speed cannot be reduced below 170%.",
      "pvp_tooltip": "Channeled (4 sec cast)\n1 min cooldown\nEmbrace the power of the Shadowlands, removing all root effects and increasing your movement speed by 70% for 4 sec. Taking any action cancels the effect.\nWhile active, your movement speed cannot be reduced below 170%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Unholy Momentum",
      "spell_id": 374265,
      "node_id": 76069,
      "entry_id": 96198,
      "definition_id": 101200,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76069,
        "node_name": "Unholy Momentum",
        "node_type": "single",
        "pos_x": 4800,
        "pos_y": 2400,
        "max_ranks": 2,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76073,
          76067
        ],
        "next": [
          76068,
          76075,
          76061
        ],
        "entry_id": 96198,
        "entry_max_ranks": 2,
        "definition_id": 101200,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Unholy Momentum",
        "spell_id": 374265,
        "visible_spell_id": null,
        "icon": "spell_necro_deathrift",
        "icon_candidates": [
          "spell_necro_deathrift"
        ]
      },
      "pve_tooltip": "Increases Haste by 4%.",
      "pvp_tooltip": "Increases Haste by 4%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": [
        {
          "rank": 1,
          "pve_tooltip": "Increases Haste by 2%.",
          "pvp_tooltip": "Increases Haste by 2%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "Increases Haste by 4%.",
          "pvp_tooltip": "Increases Haste by 4%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Control Undead",
      "spell_id": 111673,
      "node_id": 76059,
      "entry_id": 96188,
      "definition_id": 101190,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76059,
        "node_name": "Control Undead",
        "node_type": "single",
        "pos_x": 5400,
        "pos_y": 2400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76073
        ],
        "next": [
          76061
        ],
        "entry_id": 96188,
        "entry_max_ranks": 1,
        "definition_id": 101190,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Control Undead",
        "spell_id": 111673,
        "visible_spell_id": null,
        "icon": "inv_misc_bone_skull_01",
        "icon_candidates": [
          "inv_misc_bone_skull_01"
        ]
      },
      "pve_tooltip": "1 Rune / -10 Runic Power\n30 yd range\n1.5 sec cast\nDominates the target undead creature up to level 38, forcing it to do your bidding for 5 min.",
      "pvp_tooltip": "1 Rune / -10 Runic Power\n30 yd range\n1.5 sec cast\nDominates the target undead creature up to level 38, forcing it to do your bidding for 5 min.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Enfeeble",
      "spell_id": 392566,
      "node_id": 110029,
      "entry_id": 136523,
      "definition_id": 141296,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110029,
        "node_name": "Enfeeble",
        "node_type": "single",
        "pos_x": 6000,
        "pos_y": 2400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76073
        ],
        "next": [
          76061,
          76060
        ],
        "entry_id": 136523,
        "entry_max_ranks": 1,
        "definition_id": 141296,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Enfeeble",
        "spell_id": 392566,
        "visible_spell_id": null,
        "icon": "ability_creature_poison_01",
        "icon_candidates": [
          "ability_creature_poison_01"
        ]
      },
      "pve_tooltip": "Your ghoul's attacks have a chance to apply Enfeeble, reducing the enemies movement speed by 30% and the damage they deal to you by 12% for 6 sec.",
      "pvp_tooltip": "Your ghoul's attacks have a chance to apply Enfeeble, reducing the enemies movement speed by 20% and the damage they deal to you by 8% for 6 sec.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 132,
          "end": 134,
          "old_token": "12",
          "new_token": "8",
          "kind": "percent_value",
          "effect_indexes": [
            2
          ]
        },
        {
          "start": 93,
          "end": 95,
          "old_token": "30",
          "new_token": "20",
          "kind": "percent_value",
          "effect_indexes": [
            1
          ]
        }
      ],
      "diagnostics": [
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "percent_value",
          "old": "30",
          "new": "20"
        },
        {
          "effect_indexes": [
            2
          ],
          "status": "APPLIED",
          "kind": "percent_value",
          "old": "12",
          "new": "8"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 392566,
          "source_spell_id": 392490,
          "effect_index": 2,
          "effect_text": "Apply Aura (6) | Modify Damage Done% to Caster (269)",
          "base_value": -12.0,
          "spell_pvp_multiplier": 0.667,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.667,
          "final_pvp_value": -8.004000000000001,
          "is_final_pvp_modified": true,
          "dependency_path": [
            392566,
            392490
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [],
          "sources": [
            "simc",
            "drustvar",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "high"
        },
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 392566,
          "source_spell_id": 392490,
          "effect_index": 1,
          "effect_text": "Apply Aura (6) | Decrease Movement Speed% (33)",
          "base_value": -30.0,
          "spell_pvp_multiplier": 0.666667,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.666667,
          "final_pvp_value": -20.00001,
          "is_final_pvp_modified": true,
          "dependency_path": [
            392566,
            392490
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [],
          "sources": [
            "simc",
            "drustvar",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "high"
        }
      ],
      "render_effect_count": 2,
      "rank_tooltips": []
    },
    {
      "talent_name": "Coldthirst",
      "spell_id": 378848,
      "node_id": 76083,
      "entry_id": 96212,
      "definition_id": 101214,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76083,
        "node_name": "Coldthirst",
        "node_type": "single",
        "pos_x": 2400,
        "pos_y": 3000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76084
        ],
        "next": [
          76085
        ],
        "entry_id": 96212,
        "entry_max_ranks": 1,
        "definition_id": 101214,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Coldthirst",
        "spell_id": 378848,
        "visible_spell_id": null,
        "icon": "spell_deathknight_mindfreeze",
        "icon_candidates": [
          "spell_deathknight_mindfreeze"
        ]
      },
      "pve_tooltip": "Successfully interrupting an enemy with Mind Freeze grants 10 Runic Power and reduces its cooldown by 3 sec.",
      "pvp_tooltip": "Successfully interrupting an enemy with Mind Freeze grants 10 Runic Power and reduces its cooldown by 3 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Proliferating Chill",
      "spell_id": 373930,
      "node_id": 101708,
      "entry_id": 125606,
      "definition_id": 130438,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 101708,
        "node_name": "Proliferating Chill",
        "node_type": "single",
        "pos_x": 3000,
        "pos_y": 3000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76084,
          76044,
          76052
        ],
        "next": [
          76085
        ],
        "entry_id": 125606,
        "entry_max_ranks": 1,
        "definition_id": 130438,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Proliferating Chill",
        "spell_id": 373930,
        "visible_spell_id": null,
        "icon": "spell_frost_chainsofice",
        "icon_candidates": [
          "spell_frost_chainsofice"
        ]
      },
      "pve_tooltip": "Chains of Ice affects 1 additional nearby enemy.",
      "pvp_tooltip": "Chains of Ice affects 1 additional nearby enemy.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Permafrost",
      "spell_id": 207200,
      "node_id": 76066,
      "entry_id": 96195,
      "definition_id": 101197,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76066,
        "node_name": "Permafrost",
        "node_type": "single",
        "pos_x": 3600,
        "pos_y": 3000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76052
        ],
        "next": [
          76085,
          110030,
          76065
        ],
        "entry_id": 96195,
        "entry_max_ranks": 1,
        "definition_id": 101197,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Permafrost",
        "spell_id": 207200,
        "visible_spell_id": null,
        "icon": "achievement_zone_frostfire",
        "icon_candidates": [
          "achievement_zone_frostfire"
        ]
      },
      "pve_tooltip": "Your auto attack damage grants you an absorb shield equal to 50% of the damage dealt.",
      "pvp_tooltip": "Your auto attack damage grants you an absorb shield equal to 50% of the damage dealt.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [
        {
          "status": "EXACT_BUILD_DESCRIPTION",
          "text": "Your auto attack damage grants you an absorb shield equal to 50% of the damage dealt.",
          "source": "simc_exact_build",
          "build": "12.1.0.69933",
          "spell_id": 207200,
          "raw": "Name             : Permafrost (id=207200) [Spell Family (15), Passive] \r\nTalent Entry     : Generic [tree=class, row=4, col=3, max_rank=1, req_points=0]\r\nClass            : Death Knight\r\nSchool           : Physical\r\nSpell Type       : None\r\nSpell Level      : 1\r\nLabels           : 16: Class Spells\r\n                 : 27: Death Knight Spells\r\n                 : 117\r\n                 : 292\r\n                 : 4360: Frost Death Knight (137006 effect#9), Unholy Death Knight (137007 effect#7), Frigid Resolve (1265859 effect#1), Frigid Resolve (1265859 effect#2)\r\nProc Chance      : 100%\r\nProc Flags       : White Melee\r\nAttributes       : Is Ability (4), Passive (6), Not In Spellbook (143), Do Not Log on Learn (355), Allow Class Ability Procs (416)\r\nEffects          :\r\n#1 (id=306445)   : Apply Aura (6) | Dummy (4)\r\n                   Base Value: 50 | Scaled Value: 50 | Target: Self (1)\r\n                   Modified By: Frost Death Knight (137006 effect#9), Unholy Death Knight (137007 effect#7), Frigid Resolve (1265859 effect#1), Frigid Resolve (1265859 effect#2)\r\nDescription      : Your auto attack damage grants you an absorb shield equal to $s1% of the damage dealt.\r\n\r\n"
        }
      ],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Veteran of the Third War",
      "spell_id": 48263,
      "node_id": 76068,
      "entry_id": 96197,
      "definition_id": 101199,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76068,
        "node_name": "Veteran of the Third War",
        "node_type": "single",
        "pos_x": 4200,
        "pos_y": 3000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76069,
          76074,
          76052
        ],
        "next": [
          76065
        ],
        "entry_id": 96197,
        "entry_max_ranks": 1,
        "definition_id": 101199,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Veteran of the Third War",
        "spell_id": 48263,
        "visible_spell_id": null,
        "icon": "spell_misc_warsongfocus",
        "icon_candidates": [
          "spell_misc_warsongfocus"
        ]
      },
      "pve_tooltip": "Stamina increased by 20%.",
      "pvp_tooltip": "Stamina increased by 10%.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 21,
          "end": 23,
          "old_token": "20",
          "new_token": "10",
          "kind": "percent_value",
          "effect_indexes": [
            1
          ]
        }
      ],
      "diagnostics": [
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "percent_value",
          "old": "20",
          "new": "10"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 48263,
          "source_spell_id": 48263,
          "effect_index": 1,
          "effect_text": "Apply Aura: Mod Stat - % (Stamina)",
          "base_value": 20.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 10.0,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [],
          "sources": [
            "wowhead",
            "drustvar",
            "simc"
          ],
          "source_notes": [],
          "confidence": "high"
        }
      ],
      "render_effect_count": 1,
      "rank_tooltips": []
    },
    {
      "talent_name": "Death Pact",
      "spell_id": 48743,
      "node_id": 76075,
      "entry_id": 96204,
      "definition_id": 101206,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76075,
        "node_name": "Death Pact",
        "node_type": "single",
        "pos_x": 4800,
        "pos_y": 3000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76069
        ],
        "next": [
          76065,
          110031,
          76076
        ],
        "entry_id": 96204,
        "entry_max_ranks": 1,
        "definition_id": 101206,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Death Pact",
        "spell_id": 48743,
        "visible_spell_id": null,
        "icon": "spell_shadow_deathpact",
        "icon_candidates": [
          "spell_shadow_deathpact"
        ]
      },
      "pve_tooltip": "Instant\n2 min cooldown\nCreate a death pact that heals you for 50% of your maximum health, but absorbs incoming healing equal to 30% of your max health for 15 sec.",
      "pvp_tooltip": "Instant\n2 min cooldown\nCreate a death pact that heals you for 50% of your maximum health, but absorbs incoming healing equal to 30% of your max health for 15 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Brittle",
      "spell_id": 374504,
      "node_id": 76061,
      "entry_id": 96190,
      "definition_id": 101192,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76061,
        "node_name": "Brittle",
        "node_type": "single",
        "pos_x": 5400,
        "pos_y": 3000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76069,
          76059,
          110029
        ],
        "next": [
          76076
        ],
        "entry_id": 96190,
        "entry_max_ranks": 1,
        "definition_id": 101192,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Brittle",
        "spell_id": 374504,
        "visible_spell_id": null,
        "icon": "ability_bosskilrogg_deaththroes",
        "icon_candidates": [
          "ability_bosskilrogg_deaththroes"
        ]
      },
      "pve_tooltip": "Your diseases have a chance to weaken your enemy causing your attacks against them to deal 6% increased damage for 5 sec.\n(Proc chance: 15%)",
      "pvp_tooltip": "Your diseases have a chance to weaken your enemy causing your attacks against them to deal 6% increased damage for 5 sec.\n(Proc chance: 15%)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Blood Bond",
      "spell_id": 1267028,
      "node_id": 76060,
      "entry_id": 96189,
      "definition_id": 101191,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76060,
        "node_name": "Blood Bond",
        "node_type": "single",
        "pos_x": 6000,
        "pos_y": 3000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          110029
        ],
        "next": [
          76076
        ],
        "entry_id": 96189,
        "entry_max_ranks": 1,
        "definition_id": 101191,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Blood Bond",
        "spell_id": 1267028,
        "visible_spell_id": null,
        "icon": "ability_deathknight_roilingblood",
        "icon_candidates": [
          "ability_deathknight_roilingblood"
        ]
      },
      "pve_tooltip": "While you are below 50% health, your Ghoul sacrifices 4% of its maximum health to heal you for 1% of your maximum health every sec.",
      "pvp_tooltip": "While you are below 50% health, your Ghoul sacrifices 4% of its maximum health to heal you for 1% of your maximum health every sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Icy Talons",
      "spell_id": 194878,
      "node_id": 76085,
      "entry_id": 96214,
      "definition_id": 101216,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76085,
        "node_name": "Icy Talons",
        "node_type": "single",
        "pos_x": 3000,
        "pos_y": 3600,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76066,
          101708,
          76083
        ],
        "next": [
          76086,
          76064
        ],
        "entry_id": 96214,
        "entry_max_ranks": 1,
        "definition_id": 101216,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Icy Talons",
        "spell_id": 194878,
        "visible_spell_id": null,
        "icon": "spell_deathknight_icytalons",
        "icon_candidates": [
          "spell_deathknight_icytalons"
        ]
      },
      "pve_tooltip": "Your Runic Power spending abilities increase your melee attack speed by 6% for 10 sec, stacking up to 3 times.\n(500ms cooldown)",
      "pvp_tooltip": "Your Runic Power spending abilities increase your melee attack speed by 6% for 10 sec, stacking up to 3 times.\n(500ms cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Death Notes",
      "spell_id": 1266819,
      "node_id": 110030,
      "entry_id": 136524,
      "definition_id": 141297,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110030,
        "node_name": "Death Notes",
        "node_type": "single",
        "pos_x": 3600,
        "pos_y": 3600,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76066
        ],
        "next": [
          76064
        ],
        "entry_id": 136524,
        "entry_max_ranks": 1,
        "definition_id": 141297,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Death Notes",
        "spell_id": 1266819,
        "visible_spell_id": null,
        "icon": "inv_misc_book_01",
        "icon_candidates": [
          "inv_misc_book_01"
        ]
      },
      "pve_tooltip": "Raise Ally costs 30 less Runic Power.",
      "pvp_tooltip": "Raise Ally costs 30 less Runic Power.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Anti-Magic Zone",
      "spell_id": 51052,
      "node_id": 76065,
      "entry_id": 96194,
      "definition_id": 101196,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76065,
        "node_name": "Anti-Magic Zone",
        "node_type": "single",
        "pos_x": 4200,
        "pos_y": 3600,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76068,
          76075,
          76066
        ],
        "next": [
          76064,
          76048,
          76046
        ],
        "entry_id": 96194,
        "entry_max_ranks": 1,
        "definition_id": 101196,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Anti-Magic Zone",
        "spell_id": 51052,
        "visible_spell_id": null,
        "icon": "spell_deathknight_antimagiczone",
        "icon_candidates": [
          "spell_deathknight_antimagiczone"
        ]
      },
      "pve_tooltip": "30 yd range\nInstant\n4 min cooldown\nPlaces an Anti-Magic Zone for 6 sec, reducing the magic damage taken by party or raid members by 15%.",
      "pvp_tooltip": "30 yd range\nInstant\n4 min cooldown\nPlaces an Anti-Magic Zone for 6 sec, reducing the magic damage taken by party or raid members by 15%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Death Defiance",
      "spell_id": 1266818,
      "node_id": 110031,
      "entry_id": 136525,
      "definition_id": 141298,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110031,
        "node_name": "Death Defiance",
        "node_type": "single",
        "pos_x": 4800,
        "pos_y": 3600,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76075
        ],
        "next": [
          76046
        ],
        "entry_id": 136525,
        "entry_max_ranks": 1,
        "definition_id": 141298,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Death Defiance",
        "spell_id": 1266818,
        "visible_spell_id": null,
        "icon": "spell_nature_shamanrage",
        "icon_candidates": [
          "spell_nature_shamanrage"
        ]
      },
      "pve_tooltip": "The cooldown of Death Pact is reduced by 30 sec, and you receive 50% increased healing while its healing absorb is active.",
      "pvp_tooltip": "The cooldown of Death Pact is reduced by 30 sec, and you receive 50% increased healing while its healing absorb is active.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Unholy Bond",
      "spell_id": 374261,
      "node_id": 76076,
      "entry_id": 96205,
      "definition_id": 101207,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76076,
        "node_name": "Unholy Bond",
        "node_type": "single",
        "pos_x": 5400,
        "pos_y": 3600,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76075,
          76061,
          76060
        ],
        "next": [
          76046,
          76057
        ],
        "entry_id": 96205,
        "entry_max_ranks": 1,
        "definition_id": 101207,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Unholy Bond",
        "spell_id": 374261,
        "visible_spell_id": null,
        "icon": "inv_sword_1h_felfireraid_d_01",
        "icon_candidates": [
          "inv_sword_1h_felfireraid_d_01"
        ]
      },
      "pve_tooltip": "Increases the effectiveness of your Runeforge effects by 20%.",
      "pvp_tooltip": "Increases the effectiveness of your Runeforge effects by 20%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Ice Prison",
      "spell_id": 454786,
      "node_id": 76086,
      "entry_id": 96215,
      "definition_id": 101217,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76086,
        "node_name": "Ice Prison",
        "node_type": "single",
        "pos_x": 2400,
        "pos_y": 4200,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76085
        ],
        "next": [
          76087
        ],
        "entry_id": 96215,
        "entry_max_ranks": 1,
        "definition_id": 101217,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Ice Prison",
        "spell_id": 454786,
        "visible_spell_id": null,
        "icon": "ability_mage_deepfreeze",
        "icon_candidates": [
          "ability_mage_deepfreeze"
        ]
      },
      "pve_tooltip": "Chains of Ice now also roots enemies for 4 sec but its cooldown is increased to 12 sec.",
      "pvp_tooltip": "Chains of Ice now also roots enemies for 4 sec but its cooldown is increased to 12 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Asphyxiate",
      "spell_id": 221562,
      "node_id": 76064,
      "entry_id": 96193,
      "definition_id": 101195,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76064,
        "node_name": "Asphyxiate / Death's Reach",
        "node_type": "choice",
        "pos_x": 3600,
        "pos_y": 4200,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76085,
          76065,
          110030
        ],
        "next": [
          76087,
          76078
        ],
        "entry_id": 96193,
        "entry_max_ranks": 1,
        "definition_id": 101195,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Asphyxiate",
        "spell_id": 221562,
        "visible_spell_id": null,
        "icon": "ability_deathknight_asphixiate",
        "icon_candidates": [
          "ability_deathknight_asphixiate"
        ]
      },
      "pve_tooltip": "20 yd range\nInstant\n45 sec cooldown\nLifts the enemy target off the ground, crushing their throat with dark energy and stunning them for 5 sec.",
      "pvp_tooltip": "20 yd range\nInstant\n45 sec cooldown\nLifts the enemy target off the ground, crushing their throat with dark energy and stunning them for 5 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Death's Reach",
      "spell_id": 276079,
      "node_id": 76064,
      "entry_id": 136526,
      "definition_id": 141299,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76064,
        "node_name": "Asphyxiate / Death's Reach",
        "node_type": "choice",
        "pos_x": 3600,
        "pos_y": 4200,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76085,
          76065,
          110030
        ],
        "next": [
          76087,
          76078
        ],
        "entry_id": 136526,
        "entry_max_ranks": 1,
        "definition_id": 141299,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Death's Reach",
        "spell_id": 276079,
        "visible_spell_id": null,
        "icon": "spell_deathknight_strangulate",
        "icon_candidates": [
          "spell_deathknight_strangulate"
        ]
      },
      "pve_tooltip": "Increases the range of Death Grip by 10 yds.\nKilling an enemy that yields experience or honor resets the cooldown of Death Grip.",
      "pvp_tooltip": "Increases the range of Death Grip by 10 yds.\nKilling an enemy that yields experience or honor resets the cooldown of Death Grip.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Assimilation",
      "spell_id": 374383,
      "node_id": 76048,
      "entry_id": 96176,
      "definition_id": 101178,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76048,
        "node_name": "Assimilation",
        "node_type": "single",
        "pos_x": 4200,
        "pos_y": 4200,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76065
        ],
        "next": [
          76078
        ],
        "entry_id": 96176,
        "entry_max_ranks": 1,
        "definition_id": 101178,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Assimilation",
        "spell_id": 374383,
        "visible_spell_id": null,
        "icon": "spell_deathknight_antimagiczone",
        "icon_candidates": [
          "spell_deathknight_antimagiczone"
        ]
      },
      "pve_tooltip": "The cooldown of Anti-Magic Zone is reduced by 60 sec and its duration is increased by 2 sec.",
      "pvp_tooltip": "The cooldown of Anti-Magic Zone is reduced by 60 sec and its duration is increased by 2 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Anti-Magic Barrier",
      "spell_id": 205727,
      "node_id": 76046,
      "entry_id": 96174,
      "definition_id": 101176,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76046,
        "node_name": "Anti-Magic Barrier",
        "node_type": "single",
        "pos_x": 4800,
        "pos_y": 4200,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          110031,
          76076,
          76065
        ],
        "next": [
          76078,
          76058
        ],
        "entry_id": 96174,
        "entry_max_ranks": 1,
        "definition_id": 101176,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Anti-Magic Barrier",
        "spell_id": 205727,
        "visible_spell_id": null,
        "icon": "spell_shadow_antimagicshell",
        "icon_candidates": [
          "spell_shadow_antimagicshell"
        ]
      },
      "pve_tooltip": "Reduces the cooldown of Anti-Magic Shell by 20 sec and increases its duration and amount absorbed by 40%.",
      "pvp_tooltip": "Reduces the cooldown of Anti-Magic Shell by 20 sec and increases its duration and amount absorbed by 20%.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 101,
          "end": 103,
          "old_token": "40",
          "new_token": "20",
          "kind": "percent_value",
          "effect_indexes": [
            2
          ]
        }
      ],
      "diagnostics": [
        {
          "effect_indexes": [
            2
          ],
          "status": "APPLIED",
          "kind": "percent_value",
          "old": "40",
          "new": "20"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 205727,
          "source_spell_id": 205727,
          "effect_index": 2,
          "effect_text": "Apply Aura (6) | Add Percent Modifier (108): Spell Duration (1)",
          "base_value": 40.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 20.0,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [],
          "sources": [
            "simc",
            "drustvar",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "high"
        }
      ],
      "render_effect_count": 1,
      "rank_tooltips": []
    },
    {
      "talent_name": "Grip of the Dead",
      "spell_id": 273952,
      "node_id": 76057,
      "entry_id": 96186,
      "definition_id": 101188,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76057,
        "node_name": "Grip of the Dead",
        "node_type": "single",
        "pos_x": 6000,
        "pos_y": 4200,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76076
        ],
        "next": [
          76058
        ],
        "entry_id": 96186,
        "entry_max_ranks": 1,
        "definition_id": 101188,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Grip of the Dead",
        "spell_id": 273952,
        "visible_spell_id": null,
        "icon": "ability_creature_disease_05",
        "icon_candidates": [
          "ability_creature_disease_05"
        ]
      },
      "pve_tooltip": "[Defile / Death and Decay] reduces the movement speed of enemies within its area by 90%, decaying by 10% every sec.",
      "pvp_tooltip": "[Defile / Death and Decay] reduces the movement speed of enemies within its area by 90%, decaying by 10% every sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Suppression",
      "spell_id": 374049,
      "node_id": 76087,
      "entry_id": 96216,
      "definition_id": 101218,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76087,
        "node_name": "Suppression",
        "node_type": "single",
        "pos_x": 3000,
        "pos_y": 4800,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76086,
          76064
        ],
        "next": [
          76088,
          76051
        ],
        "entry_id": 96216,
        "entry_max_ranks": 1,
        "definition_id": 101218,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Suppression",
        "spell_id": 374049,
        "visible_spell_id": null,
        "icon": "ability_racial_forceshield",
        "icon_candidates": [
          "ability_racial_forceshield"
        ]
      },
      "pve_tooltip": "Damage taken from area of effect attacks reduced by 3%. When suffering a loss of control effect, this bonus is increased by an additional 6% for 6 sec.",
      "pvp_tooltip": "Damage taken from area of effect attacks reduced by 3%. When suffering a loss of control effect, this bonus is increased by an additional 6% for 6 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Blood Scent",
      "spell_id": 374030,
      "node_id": 76078,
      "entry_id": 96207,
      "definition_id": 101209,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76078,
        "node_name": "Blood Scent",
        "node_type": "single",
        "pos_x": 4200,
        "pos_y": 4800,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76048,
          76064,
          76046
        ],
        "next": [
          76051,
          76055
        ],
        "entry_id": 96207,
        "entry_max_ranks": 1,
        "definition_id": 101209,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Blood Scent",
        "spell_id": 374030,
        "visible_spell_id": null,
        "icon": "ability_ironmaidens_bloodritual",
        "icon_candidates": [
          "ability_ironmaidens_bloodritual"
        ]
      },
      "pve_tooltip": "Increases Leech by 3%.",
      "pvp_tooltip": "Increases Leech by 3%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Unholy Endurance",
      "spell_id": 389682,
      "node_id": 76058,
      "entry_id": 96187,
      "definition_id": 101189,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76058,
        "node_name": "Unholy Endurance",
        "node_type": "single",
        "pos_x": 5400,
        "pos_y": 4800,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76057,
          76046
        ],
        "next": [
          76055,
          76056
        ],
        "entry_id": 96187,
        "entry_max_ranks": 1,
        "definition_id": 101189,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Unholy Endurance",
        "spell_id": 389682,
        "visible_spell_id": null,
        "icon": "spell_deathknight_subversion",
        "icon_candidates": [
          "spell_deathknight_subversion"
        ]
      },
      "pve_tooltip": "Increases Lichborne duration by 2 sec and reduces the cooldown by 30 sec.",
      "pvp_tooltip": "Increases Lichborne duration by 2 sec and reduces the cooldown by 30 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Osmosis",
      "spell_id": 454835,
      "node_id": 76088,
      "entry_id": 96217,
      "definition_id": 101219,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76088,
        "node_name": "Osmosis",
        "node_type": "single",
        "pos_x": 2400,
        "pos_y": 5400,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76087
        ],
        "next": [
          76079
        ],
        "entry_id": 96217,
        "entry_max_ranks": 1,
        "definition_id": 101219,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Osmosis",
        "spell_id": 454835,
        "visible_spell_id": null,
        "icon": "spell_nature_rune",
        "icon_candidates": [
          "spell_nature_rune"
        ]
      },
      "pve_tooltip": "Anti-Magic Shell increases healing received by 15%.",
      "pvp_tooltip": "Anti-Magic Shell increases healing received by 15%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Insidious Chill",
      "spell_id": 391566,
      "node_id": 76051,
      "entry_id": 96179,
      "definition_id": 101181,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76051,
        "node_name": "Insidious Chill",
        "node_type": "single",
        "pos_x": 3600,
        "pos_y": 5400,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76078,
          76087
        ],
        "next": [
          76079,
          76080
        ],
        "entry_id": 96179,
        "entry_max_ranks": 1,
        "definition_id": 101181,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Insidious Chill",
        "spell_id": 391566,
        "visible_spell_id": null,
        "icon": "ability_racial_wardoftheloafrost",
        "icon_candidates": [
          "ability_racial_wardoftheloafrost"
        ]
      },
      "pve_tooltip": "Your auto-attacks reduce the target's auto-attack speed by 5% for 30 sec, stacking up to 4 times.",
      "pvp_tooltip": "Your auto-attacks reduce the target's auto-attack speed by 5% for 30 sec, stacking up to 4 times.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Runic Protection",
      "spell_id": 454788,
      "node_id": 76055,
      "entry_id": 96183,
      "definition_id": 101185,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76055,
        "node_name": "Runic Protection",
        "node_type": "single",
        "pos_x": 4800,
        "pos_y": 5400,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76058,
          76078
        ],
        "next": [
          76080,
          76054
        ],
        "entry_id": 96183,
        "entry_max_ranks": 1,
        "definition_id": 101185,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Runic Protection",
        "spell_id": 454788,
        "visible_spell_id": null,
        "icon": "ability_mage_shattershield",
        "icon_candidates": [
          "ability_mage_shattershield"
        ]
      },
      "pve_tooltip": "Your chance to be critically struck is reduced by 3% and your Armor is increased by 6%.",
      "pvp_tooltip": "Your chance to be critically struck is reduced by 3% and your Armor is increased by 6%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Blood Draw",
      "spell_id": 374598,
      "node_id": 76056,
      "entry_id": 96184,
      "definition_id": 101186,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76056,
        "node_name": "Blood Draw",
        "node_type": "single",
        "pos_x": 6000,
        "pos_y": 5400,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76058
        ],
        "next": [
          76054
        ],
        "entry_id": 96184,
        "entry_max_ranks": 1,
        "definition_id": 101186,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Blood Draw",
        "spell_id": 374598,
        "visible_spell_id": null,
        "icon": "inv_artifact_bloodoftheassassinated",
        "icon_candidates": [
          "inv_artifact_bloodoftheassassinated"
        ]
      },
      "pve_tooltip": "When you fall below 30% health you drain (120% of Attack Power) health from nearby enemies, the damage you take is reduced by 10% and your Death Strike cost is reduced by 10 for 8 sec.\nCan only occur every 2 min.",
      "pvp_tooltip": "When you fall below 30% health you drain (120% of Attack Power) health from nearby enemies, the damage you take is reduced by 10% and your Death Strike cost is reduced by 10 for 8 sec.\nCan only occur every 2 min.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Rune Mastery",
      "spell_id": 374574,
      "node_id": 76079,
      "entry_id": 96208,
      "definition_id": 101210,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76079,
        "node_name": "Rune Mastery",
        "node_type": "single",
        "pos_x": 3000,
        "pos_y": 6000,
        "max_ranks": 2,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76051,
          76088
        ],
        "next": [
          102008,
          76050
        ],
        "entry_id": 96208,
        "entry_max_ranks": 2,
        "definition_id": 101210,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Rune Mastery",
        "spell_id": 374574,
        "visible_spell_id": null,
        "icon": "ability_deathknight_hungeringruneblade",
        "icon_candidates": [
          "ability_deathknight_hungeringruneblade"
        ]
      },
      "pve_tooltip": "Consuming a Rune has a chance to increase your Strength by 6% for 8 sec.",
      "pvp_tooltip": "Consuming a Rune has a chance to increase your Strength by 6% for 8 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": [
        {
          "rank": 1,
          "pve_tooltip": "Consuming a Rune has a chance to increase your Strength by 3% for 8 sec.",
          "pvp_tooltip": "Consuming a Rune has a chance to increase your Strength by 3% for 8 sec.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "Consuming a Rune has a chance to increase your Strength by 6% for 8 sec.",
          "pvp_tooltip": "Consuming a Rune has a chance to increase your Strength by 6% for 8 sec.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Subduing Grasp",
      "spell_id": 454822,
      "node_id": 76080,
      "entry_id": 96209,
      "definition_id": 101211,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76080,
        "node_name": "Subduing Grasp",
        "node_type": "single",
        "pos_x": 4200,
        "pos_y": 6000,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76055,
          76051
        ],
        "next": [
          76050,
          102007
        ],
        "entry_id": 96209,
        "entry_max_ranks": 1,
        "definition_id": 101211,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Subduing Grasp",
        "spell_id": 454822,
        "visible_spell_id": null,
        "icon": "spell_nature_elementalshields",
        "icon_candidates": [
          "spell_nature_elementalshields"
        ]
      },
      "pve_tooltip": "When you would pull an enemy, the damage they deal to you is reduced by 6% for 6 sec.",
      "pvp_tooltip": "When you would pull an enemy, the damage they deal to you is reduced by 6% for 6 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Will of the Necropolis",
      "spell_id": 206967,
      "node_id": 76054,
      "entry_id": 96182,
      "definition_id": 101184,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76054,
        "node_name": "Will of the Necropolis",
        "node_type": "single",
        "pos_x": 5400,
        "pos_y": 6000,
        "max_ranks": 2,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76055,
          76056
        ],
        "next": [
          102007,
          76053
        ],
        "entry_id": 96182,
        "entry_max_ranks": 2,
        "definition_id": 101184,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Will of the Necropolis",
        "spell_id": 206967,
        "visible_spell_id": null,
        "icon": "achievement_boss_kelthuzad_01",
        "icon_candidates": [
          "achievement_boss_kelthuzad_01"
        ]
      },
      "pve_tooltip": "Damage taken below 30% Health is reduced by 35%.",
      "pvp_tooltip": "Damage taken below 30% Health is reduced by 17.5%.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 44,
          "end": 46,
          "old_token": "35",
          "new_token": "17.5",
          "kind": "percent_value",
          "effect_indexes": [
            2
          ]
        }
      ],
      "diagnostics": [
        {
          "effect_indexes": [
            2
          ],
          "status": "APPLIED",
          "kind": "percent_value",
          "old": "35",
          "new": "17.5"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 206967,
          "source_spell_id": 206967,
          "effect_index": 2,
          "effect_text": "Apply Aura (6) | Dummy (4)",
          "base_value": 20.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 10.0,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [],
          "sources": [
            "simc",
            "drustvar",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "high"
        }
      ],
      "render_effect_count": 1,
      "rank_tooltips": [
        {
          "rank": 1,
          "pve_tooltip": "Damage taken below 30% Health is reduced by 20%.",
          "pvp_tooltip": "Damage taken below 30% Health is reduced by 10%.",
          "tooltip_changed": true,
          "changes": [
            {
              "start": 44,
              "end": 46,
              "old_token": "20",
              "new_token": "10",
              "kind": "percent_value",
              "effect_indexes": [
                2
              ]
            }
          ],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "Damage taken below 30% Health is reduced by 35%.",
          "pvp_tooltip": "Damage taken below 30% Health is reduced by 17.5%.",
          "tooltip_changed": true,
          "changes": [
            {
              "start": 44,
              "end": 46,
              "old_token": "35",
              "new_token": "17.5",
              "kind": "percent_value",
              "effect_indexes": [
                2
              ]
            }
          ],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Null Magic",
      "spell_id": 454842,
      "node_id": 102008,
      "entry_id": 126016,
      "definition_id": 130847,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102008,
        "node_name": "Null Magic",
        "node_type": "single",
        "pos_x": 2400,
        "pos_y": 6600,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76079
        ],
        "next": [],
        "entry_id": 126016,
        "entry_max_ranks": 1,
        "definition_id": 130847,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Null Magic",
        "spell_id": 454842,
        "visible_spell_id": null,
        "icon": "spell_shadow_detectinvisibility",
        "icon_candidates": [
          "spell_shadow_detectinvisibility"
        ]
      },
      "pve_tooltip": "Magic damage taken is reduced by 8% and the duration of harmful Magic effects against you are reduced by 35%.",
      "pvp_tooltip": "Magic damage taken is reduced by 4.8% and the duration of harmful Magic effects against you are reduced by 10.15%.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 33,
          "end": 34,
          "old_token": "8",
          "new_token": "4.8",
          "kind": "percent_value",
          "effect_indexes": [
            1
          ]
        },
        {
          "start": 105,
          "end": 107,
          "old_token": "35",
          "new_token": "10.15",
          "kind": "percent_value",
          "effect_indexes": [
            2
          ]
        }
      ],
      "diagnostics": [
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "percent_value",
          "old": "8",
          "new": "4.8"
        },
        {
          "effect_indexes": [
            2
          ],
          "status": "APPLIED",
          "kind": "percent_value",
          "old": "35",
          "new": "10.15"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 454842,
          "source_spell_id": 454842,
          "effect_index": 1,
          "effect_text": "Apply Aura (6) | Modify Damage Taken% (87)",
          "base_value": -8.0,
          "spell_pvp_multiplier": 0.6,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.6,
          "final_pvp_value": -4.8,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [],
          "sources": [
            "simc",
            "drustvar",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "high"
        },
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 454842,
          "source_spell_id": 454842,
          "effect_index": 2,
          "effect_text": "Apply Aura (6) | Modify Debuff Duration% (245)",
          "base_value": -35.0,
          "spell_pvp_multiplier": 0.29,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.29,
          "final_pvp_value": -10.149999999999999,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [],
          "sources": [
            "simc",
            "drustvar",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "high"
        }
      ],
      "render_effect_count": 2,
      "rank_tooltips": []
    },
    {
      "talent_name": "Unyielding Will",
      "spell_id": 457574,
      "node_id": 76050,
      "entry_id": 96178,
      "definition_id": 101180,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76050,
        "node_name": "Unyielding Will",
        "node_type": "single",
        "pos_x": 3600,
        "pos_y": 6600,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76080,
          76079
        ],
        "next": [],
        "entry_id": 96178,
        "entry_max_ranks": 1,
        "definition_id": 101180,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Unyielding Will",
        "spell_id": 457574,
        "visible_spell_id": null,
        "icon": "spell_shadow_nethercloak",
        "icon_candidates": [
          "spell_shadow_nethercloak"
        ]
      },
      "pve_tooltip": "Anti-Magic Shell now removes all harmful magical effects when activated, but its cooldown is increased by 20 sec.",
      "pvp_tooltip": "Anti-Magic Shell now removes all harmful magical effects when activated, but its cooldown is increased by 20 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Death's Echo",
      "spell_id": 356367,
      "node_id": 102007,
      "entry_id": 126015,
      "definition_id": 130846,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102007,
        "node_name": "Death's Echo",
        "node_type": "single",
        "pos_x": 4800,
        "pos_y": 6600,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76080,
          76054
        ],
        "next": [],
        "entry_id": 126015,
        "entry_max_ranks": 1,
        "definition_id": 130846,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Death's Echo",
        "spell_id": 356367,
        "visible_spell_id": null,
        "icon": "inv_fabric_ebonweave",
        "icon_candidates": [
          "inv_fabric_ebonweave"
        ]
      },
      "pve_tooltip": "Death's Advance, Death and Decay, and Death Grip have 1 additional charge.",
      "pvp_tooltip": "Death's Advance, Death and Decay, and Death Grip have 1 additional charge.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Vestigial Shell",
      "spell_id": 454851,
      "node_id": 76053,
      "entry_id": 96181,
      "definition_id": 101183,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76053,
        "node_name": "Vestigial Shell",
        "node_type": "single",
        "pos_x": 6000,
        "pos_y": 6600,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76054
        ],
        "next": [],
        "entry_id": 96181,
        "entry_max_ranks": 1,
        "definition_id": 101183,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Vestigial Shell",
        "spell_id": 454851,
        "visible_spell_id": null,
        "icon": "ability_domination_rune12",
        "icon_candidates": [
          "ability_domination_rune12"
        ]
      },
      "pve_tooltip": "Casting Anti-Magic Shell grants 2 nearby allies a Lesser Anti-Magic Shell that Absorbs up to 0 magic damage and reduces the duration of harmful Magic effects against them by 50%.",
      "pvp_tooltip": "Casting Anti-Magic Shell grants 2 nearby allies a Lesser Anti-Magic Shell that Absorbs up to 0 magic damage and reduces the duration of harmful Magic effects against them by 30%.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 174,
          "end": 176,
          "old_token": "50",
          "new_token": "30",
          "kind": "percent_value",
          "effect_indexes": [
            2
          ]
        }
      ],
      "diagnostics": [
        {
          "effect_indexes": [
            2
          ],
          "status": "APPLIED",
          "kind": "percent_value",
          "old": "50",
          "new": "30"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 454851,
          "source_spell_id": 454863,
          "effect_index": 2,
          "effect_text": "Apply Aura (6) | Modify Debuff Duration% (245)",
          "base_value": -50.0,
          "spell_pvp_multiplier": 0.6,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.6,
          "final_pvp_value": -30.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            454851,
            454863
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [],
          "sources": [
            "simc",
            "drustvar",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "high"
        }
      ],
      "render_effect_count": 1,
      "rank_tooltips": []
    },
    {
      "talent_name": "Heart Strike",
      "spell_id": 206930,
      "node_id": 76169,
      "entry_id": 96304,
      "definition_id": 101306,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76169,
        "node_name": "Heart Strike",
        "node_type": "single",
        "pos_x": 12600,
        "pos_y": 1200,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [
          76168,
          76170
        ],
        "entry_id": 96304,
        "entry_max_ranks": 1,
        "definition_id": 101306,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Heart Strike",
        "spell_id": 206930,
        "visible_spell_id": null,
        "icon": "inv_weapon_shortblade_40",
        "icon_candidates": [
          "inv_weapon_shortblade_40"
        ]
      },
      "pve_tooltip": "1 Rune / -15 Runic Power\nMelee Range\nInstant\nInstantly strike the target and 1 other nearby enemy, causing (196.7% of Attack Power) Physical damage, and reducing enemies' movement speed by 20% for 8 sec [Heart Strike: Generates 5 bonus Runic Power] [Heartbreaker: plus 2 Runic Power per additional enemy struck].",
      "pvp_tooltip": "1 Rune / -15 Runic Power\nMelee Range\nInstant\nInstantly strike the target and 1 other nearby enemy, causing (196.7% of Attack Power) Physical damage, and reducing enemies' movement speed by 20% for 8 sec [Heart Strike: Generates 5 bonus Runic Power] [Heartbreaker: plus 2 Runic Power per additional enemy struck].",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Marrowrend",
      "spell_id": 195182,
      "node_id": 76168,
      "entry_id": 96303,
      "definition_id": 101305,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76168,
        "node_name": "Marrowrend",
        "node_type": "single",
        "pos_x": 12000,
        "pos_y": 1800,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76169
        ],
        "next": [
          76173
        ],
        "entry_id": 96303,
        "entry_max_ranks": 1,
        "definition_id": 101305,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Marrowrend",
        "spell_id": 195182,
        "visible_spell_id": null,
        "icon": "ability_deathknight_marrowrend",
        "icon_candidates": [
          "ability_deathknight_marrowrend"
        ]
      },
      "pve_tooltip": "2 Runes / -20 Runic Power\nMelee Range\nInstant\nSmash the target, dealing (220.65% of Attack Power) Physical damage and generating 3 charges of Bone Shield.\nBone Shield\nSurrounds you with a barrier of whirling bones, increasing Armor by (180 * Strength / 100) [Marrowrend: and your Haste by 0%]. Each melee attack against you consumes a charge. Lasts 30 sec or until all charges are consumed.",
      "pvp_tooltip": "2 Runes / -20 Runic Power\nMelee Range\nInstant\nSmash the target, dealing (220.65% of Attack Power) Physical damage and generating 3 charges of Bone Shield.\nBone Shield\nSurrounds you with a barrier of whirling bones, increasing Armor by (180 * Strength / 100) [Marrowrend: and your Haste by 0%]. Each melee attack against you consumes a charge. Lasts 30 sec or until all charges are consumed.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Blood Boil",
      "spell_id": 50842,
      "node_id": 76170,
      "entry_id": 96305,
      "definition_id": 101307,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76170,
        "node_name": "Blood Boil",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 1800,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76169
        ],
        "next": [
          76171
        ],
        "entry_id": 96305,
        "entry_max_ranks": 1,
        "definition_id": 101307,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Blood Boil",
        "spell_id": 50842,
        "visible_spell_id": null,
        "icon": "spell_deathknight_bloodboil",
        "icon_candidates": [
          "spell_deathknight_bloodboil"
        ]
      },
      "pve_tooltip": "Instant\n7.5 sec recharge\n2 Charges\nDeals (164% of Attack Power) Shadow damage and infects all enemies within 10 yds with Blood Plague.\nBlood Plague\nA shadowy disease that drains 64 health from the target over 24 sec.",
      "pvp_tooltip": "Instant\n7.5 sec recharge\n2 Charges\nDeals (164% of Attack Power) Shadow damage and infects all enemies within 10 yds with Blood Plague.\nBlood Plague\nA shadowy disease that drains 64 health from the target over 24 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Vampiric Blood",
      "spell_id": 55233,
      "node_id": 76173,
      "entry_id": 96308,
      "definition_id": 101310,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76173,
        "node_name": "Vampiric Blood",
        "node_type": "single",
        "pos_x": 12000,
        "pos_y": 2400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76168
        ],
        "next": [
          76144,
          76140
        ],
        "entry_id": 96308,
        "entry_max_ranks": 1,
        "definition_id": 101310,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Vampiric Blood",
        "spell_id": 55233,
        "visible_spell_id": null,
        "icon": "spell_shadow_lifedrain",
        "icon_candidates": [
          "spell_shadow_lifedrain"
        ]
      },
      "pve_tooltip": "Instant\n1.5 min cooldown\nEmbrace your undeath, increasing your maximum health by 30% and increasing all healing and absorbs received by 30% for 10 sec.",
      "pvp_tooltip": "Instant\n1.5 min cooldown\nEmbrace your undeath, increasing your maximum health by 30% and increasing all healing and absorbs received by 30% for 10 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Bone Collector",
      "spell_id": 458572,
      "node_id": 76171,
      "entry_id": 96306,
      "definition_id": 101308,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76171,
        "node_name": "Bone Collector",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 2400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76170
        ],
        "next": [
          76126,
          76146
        ],
        "entry_id": 96306,
        "entry_max_ranks": 1,
        "definition_id": 101308,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Bone Collector",
        "spell_id": 458572,
        "visible_spell_id": null,
        "icon": "ability_deathknight_boneshield",
        "icon_candidates": [
          "ability_deathknight_boneshield"
        ]
      },
      "pve_tooltip": "When you would pull an enemy generate 1 charge of Bone Shield.\nBone Shield\nSurrounds you with a barrier of whirling bones, increasing Armor by (180 * Strength / 100) [Marrowrend: and your Haste by 0%]. Each melee attack against you consumes a charge. Lasts 30 sec or until all charges are consumed.",
      "pvp_tooltip": "When you would pull an enemy generate 1 charge of Bone Shield.\nBone Shield\nSurrounds you with a barrier of whirling bones, increasing Armor by (180 * Strength / 100) [Marrowrend: and your Haste by 0%]. Each melee attack against you consumes a charge. Lasts 30 sec or until all charges are consumed.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Ossuary",
      "spell_id": 219786,
      "node_id": 76144,
      "entry_id": 96277,
      "definition_id": 101279,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76144,
        "node_name": "Ossuary",
        "node_type": "single",
        "pos_x": 11400,
        "pos_y": 3000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76173
        ],
        "next": [
          76145,
          76135,
          76167
        ],
        "entry_id": 96277,
        "entry_max_ranks": 1,
        "definition_id": 101279,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Ossuary",
        "spell_id": 219786,
        "visible_spell_id": null,
        "icon": "ability_deathknight_brittlebones",
        "icon_candidates": [
          "ability_deathknight_brittlebones"
        ]
      },
      "pve_tooltip": "While you have at least 5 Bone Shield charges, the cost of Death Strike is reduced by 5 Runic Power.\nAdditionally, your maximum Runic Power is increased by 10.",
      "pvp_tooltip": "While you have at least 5 Bone Shield charges, the cost of Death Strike is reduced by 5 Runic Power.\nAdditionally, your maximum Runic Power is increased by 10.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Improved Vampiric Blood",
      "spell_id": 317133,
      "node_id": 76140,
      "entry_id": 96272,
      "definition_id": 101274,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76140,
        "node_name": "Improved Vampiric Blood",
        "node_type": "single",
        "pos_x": 12000,
        "pos_y": 3000,
        "max_ranks": 2,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76173
        ],
        "next": [
          76167,
          76138
        ],
        "entry_id": 96272,
        "entry_max_ranks": 2,
        "definition_id": 101274,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Improved Vampiric Blood",
        "spell_id": 317133,
        "visible_spell_id": null,
        "icon": "spell_shadow_lifedrain",
        "icon_candidates": [
          "spell_shadow_lifedrain"
        ]
      },
      "pve_tooltip": "Vampiric Blood's healing and absorb amount is increased by 10% and duration by 4 sec.",
      "pvp_tooltip": "Vampiric Blood's healing and absorb amount is increased by 10% and duration by 4 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": [
        {
          "rank": 1,
          "pve_tooltip": "Vampiric Blood's healing and absorb amount is increased by 5% and duration by 2 sec.",
          "pvp_tooltip": "Vampiric Blood's healing and absorb amount is increased by 5% and duration by 2 sec.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "Vampiric Blood's healing and absorb amount is increased by 10% and duration by 4 sec.",
          "pvp_tooltip": "Vampiric Blood's healing and absorb amount is increased by 10% and duration by 4 sec.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Improved Heart Strike",
      "spell_id": 374717,
      "node_id": 76126,
      "entry_id": 96257,
      "definition_id": 101259,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76126,
        "node_name": "Improved Heart Strike",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 3000,
        "max_ranks": 2,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76171
        ],
        "next": [
          76138,
          76137
        ],
        "entry_id": 96257,
        "entry_max_ranks": 2,
        "definition_id": 101259,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Improved Heart Strike",
        "spell_id": 374717,
        "visible_spell_id": null,
        "icon": "inv_weapon_shortblade_40",
        "icon_candidates": [
          "inv_weapon_shortblade_40"
        ]
      },
      "pve_tooltip": "Heart Strike damage increased by 30%.",
      "pvp_tooltip": "Heart Strike damage increased by 30%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": [
        {
          "rank": 1,
          "pve_tooltip": "Heart Strike damage increased by 15%.",
          "pvp_tooltip": "Heart Strike damage increased by 15%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "Heart Strike damage increased by 30%.",
          "pvp_tooltip": "Heart Strike damage increased by 30%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Relish in Blood",
      "spell_id": 317610,
      "node_id": 76146,
      "entry_id": 96279,
      "definition_id": 101281,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76146,
        "node_name": "Relish in Blood",
        "node_type": "single",
        "pos_x": 13800,
        "pos_y": 3000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76171
        ],
        "next": [
          76137,
          76124,
          76147
        ],
        "entry_id": 96279,
        "entry_max_ranks": 1,
        "definition_id": 101281,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Relish in Blood",
        "spell_id": 317610,
        "visible_spell_id": null,
        "icon": "ability_deathknight_roilingblood",
        "icon_candidates": [
          "ability_deathknight_roilingblood"
        ]
      },
      "pve_tooltip": "While Crimson Scourge is active, your next Death and Decay heals you for (37.5% of Attack Power) health per Bone Shield charge and you immediately gain 10 Runic Power.",
      "pvp_tooltip": "While Crimson Scourge is active, your next Death and Decay heals you for (37.5% of Attack Power) health per Bone Shield charge and you immediately gain 10 Runic Power.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Leeching Strike",
      "spell_id": 377629,
      "node_id": 76145,
      "entry_id": 96278,
      "definition_id": 101280,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76145,
        "node_name": "Leeching Strike",
        "node_type": "single",
        "pos_x": 10800,
        "pos_y": 3600,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76144
        ],
        "next": [
          76042,
          76039
        ],
        "entry_id": 96278,
        "entry_max_ranks": 1,
        "definition_id": 101280,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Leeching Strike",
        "spell_id": 377629,
        "visible_spell_id": null,
        "icon": "ability_deathwing_bloodcorruption_death",
        "icon_candidates": [
          "ability_deathwing_bloodcorruption_death"
        ]
      },
      "pve_tooltip": "Heart Strike heals you for 0.25% health for each enemy hit while affected by Blood Plague.",
      "pvp_tooltip": "Heart Strike heals you for 0.25% health for each enemy hit while affected by Blood Plague.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Heartbreaker",
      "spell_id": 221536,
      "node_id": 76135,
      "entry_id": 96266,
      "definition_id": 101268,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76135,
        "node_name": "Heartbreaker",
        "node_type": "single",
        "pos_x": 11400,
        "pos_y": 3600,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76144
        ],
        "next": [
          76042
        ],
        "entry_id": 96266,
        "entry_max_ranks": 1,
        "definition_id": 101268,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Heartbreaker",
        "spell_id": 221536,
        "visible_spell_id": null,
        "icon": "spell_deathknight_deathstrike",
        "icon_candidates": [
          "spell_deathknight_deathstrike"
        ]
      },
      "pve_tooltip": "Your Heart Strike generates 2 additional Runic Power per target hit.",
      "pvp_tooltip": "Your Heart Strike generates 2 additional Runic Power per target hit.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Foul Bulwark",
      "spell_id": 206974,
      "node_id": 76167,
      "entry_id": 96302,
      "definition_id": 101304,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76167,
        "node_name": "Foul Bulwark",
        "node_type": "single",
        "pos_x": 12000,
        "pos_y": 3600,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76140,
          76144
        ],
        "next": [
          76042,
          76142
        ],
        "entry_id": 96302,
        "entry_max_ranks": 1,
        "definition_id": 101304,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Foul Bulwark",
        "spell_id": 206974,
        "visible_spell_id": null,
        "icon": "inv_armor_shield_naxxramas_d_02",
        "icon_candidates": [
          "inv_armor_shield_naxxramas_d_02"
        ]
      },
      "pve_tooltip": "Each charge of Bone Shield increases your maximum health by 1%.",
      "pvp_tooltip": "Each charge of Bone Shield increases your maximum health by 1%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Dancing Rune Weapon",
      "spell_id": 49028,
      "node_id": 76138,
      "entry_id": 96269,
      "definition_id": 101271,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76138,
        "node_name": "Dancing Rune Weapon",
        "node_type": "single",
        "pos_x": 12600,
        "pos_y": 3600,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76140,
          76126
        ],
        "next": [
          76142,
          76129,
          76166
        ],
        "entry_id": 96269,
        "entry_max_ranks": 1,
        "definition_id": 101271,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Dancing Rune Weapon",
        "spell_id": 49028,
        "visible_spell_id": null,
        "icon": "inv_sword_07",
        "icon_candidates": [
          "inv_sword_07"
        ]
      },
      "pve_tooltip": "30 yd range\nInstant\n2 min cooldown\nSummons a rune weapon for 8 sec that mirrors your melee attacks and bolsters your defenses.\nWhile active, you gain 30% parry chance.",
      "pvp_tooltip": "30 yd range\nInstant\n2 min cooldown\nSummons a rune weapon for 8 sec that mirrors your melee attacks and bolsters your defenses.\nWhile active, you gain 30% parry chance.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Hemostasis",
      "spell_id": 273946,
      "node_id": 76137,
      "entry_id": 96268,
      "definition_id": 101270,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76137,
        "node_name": "Hemostasis",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 3600,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76126,
          76146
        ],
        "next": [
          76166,
          76141
        ],
        "entry_id": 96268,
        "entry_max_ranks": 1,
        "definition_id": 101270,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Hemostasis",
        "spell_id": 273946,
        "visible_spell_id": null,
        "icon": "ability_deathwing_bloodcorruption_earth",
        "icon_candidates": [
          "ability_deathwing_bloodcorruption_earth"
        ]
      },
      "pve_tooltip": "Each enemy hit by Blood Boil increases the damage and healing done by your next Death Strike by 8%, stacking up to 5 times.",
      "pvp_tooltip": "Each enemy hit by Blood Boil increases the damage and healing done by your next Death Strike by 8%, stacking up to 5 times.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Perseverance of the Ebon Blade",
      "spell_id": 374747,
      "node_id": 76124,
      "entry_id": 96255,
      "definition_id": 101257,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76124,
        "node_name": "Perseverance of the Ebon Blade",
        "node_type": "single",
        "pos_x": 13800,
        "pos_y": 3600,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76146
        ],
        "next": [
          76141
        ],
        "entry_id": 96255,
        "entry_max_ranks": 1,
        "definition_id": 101257,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Perseverance of the Ebon Blade",
        "spell_id": 374747,
        "visible_spell_id": null,
        "icon": "ability_deathknight_sanguinfortitude",
        "icon_candidates": [
          "ability_deathknight_sanguinfortitude"
        ]
      },
      "pve_tooltip": "When Crimson Scourge is consumed, damage taken is reduced by 4% for 10 sec.",
      "pvp_tooltip": "When Crimson Scourge is consumed, damage taken is reduced by 4% for 10 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Bloodworms",
      "spell_id": 195679,
      "node_id": 76147,
      "entry_id": 96280,
      "definition_id": 101282,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76147,
        "node_name": "Bloodworms",
        "node_type": "single",
        "pos_x": 14400,
        "pos_y": 3600,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76146
        ],
        "next": [
          76141,
          76174
        ],
        "entry_id": 96280,
        "entry_max_ranks": 1,
        "definition_id": 101282,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Bloodworms",
        "spell_id": 195679,
        "visible_spell_id": null,
        "icon": "spell_shadow_soulleech",
        "icon_candidates": [
          "spell_shadow_soulleech"
        ]
      },
      "pve_tooltip": "Approximately 5 procs per minute\nYour auto attacks have a chance to summon a Bloodworm.\nBloodworms deal minor damage to your target for 15 sec and then burst, healing you for 15% of your missing health.\nIf you drop below 50% health, your Bloodworms will immediately burst and heal you.",
      "pvp_tooltip": "Approximately 5 procs per minute\nYour auto attacks have a chance to summon a Bloodworm.\nBloodworms deal minor damage to your target for 15 sec and then burst, healing you for 15% of your missing health.\nIf you drop below 50% health, your Bloodworms will immediately burst and heal you.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Gorefiend's Grasp",
      "spell_id": 108199,
      "node_id": 76042,
      "entry_id": 96170,
      "definition_id": 101172,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76042,
        "node_name": "Gorefiend's Grasp / Abomination Limb",
        "node_type": "choice",
        "pos_x": 11400,
        "pos_y": 4200,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76145,
          76135,
          76167
        ],
        "next": [
          76039,
          76143
        ],
        "entry_id": 96170,
        "entry_max_ranks": 1,
        "definition_id": 101172,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Gorefiend's Grasp",
        "spell_id": 108199,
        "visible_spell_id": null,
        "icon": "ability_deathknight_aoedeathgrip",
        "icon_candidates": [
          "ability_deathknight_aoedeathgrip"
        ]
      },
      "pve_tooltip": "30 yd range\nInstant\n15 sec cooldown\nShadowy tendrils coil around all enemies within 15 yards of a hostile or friendly target, pulling them to the target's location and Silencing them for 3 sec.",
      "pvp_tooltip": "30 yd range\nInstant\n15 sec cooldown\nShadowy tendrils coil around all enemies within 15 yards of a hostile or friendly target, pulling them to the target's location and Silencing them for 3 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Abomination Limb",
      "spell_id": 1263569,
      "node_id": 76042,
      "entry_id": 136213,
      "definition_id": 140986,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76042,
        "node_name": "Gorefiend's Grasp / Abomination Limb",
        "node_type": "choice",
        "pos_x": 11400,
        "pos_y": 4200,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76145,
          76135,
          76167
        ],
        "next": [
          76039,
          76143
        ],
        "entry_id": 136213,
        "entry_max_ranks": 1,
        "definition_id": 140986,
        "entry_index": 200,
        "entry_type": "active",
        "talent_name": "Abomination Limb",
        "spell_id": 1263569,
        "visible_spell_id": null,
        "icon": "ability_maldraxxus_deathknight",
        "icon_candidates": [
          "ability_maldraxxus_deathknight"
        ]
      },
      "pve_tooltip": "20 yd range\nInstant\n2 min cooldown\nSprout an additional limb, pulling enemies further than 8 yds from you every 1 sec.\nThe same enemy can only be pulled once every 4 sec.",
      "pvp_tooltip": "20 yd range\nInstant\n2 min cooldown\nSprout an additional limb, pulling enemies further than 8 yds from you every 1 sec.\nThe same enemy can only be pulled once every 4 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Improved Bone Shield",
      "spell_id": 374715,
      "node_id": 76142,
      "entry_id": 96274,
      "definition_id": 101276,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76142,
        "node_name": "Improved Bone Shield",
        "node_type": "single",
        "pos_x": 12000,
        "pos_y": 4200,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76138,
          76167
        ],
        "next": [
          76143
        ],
        "entry_id": 96274,
        "entry_max_ranks": 1,
        "definition_id": 101276,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Improved Bone Shield",
        "spell_id": 374715,
        "visible_spell_id": null,
        "icon": "ability_deathknight_marrowrend",
        "icon_candidates": [
          "ability_deathknight_marrowrend"
        ]
      },
      "pve_tooltip": "Bone Shield increases your Haste by 10% and it can stack 2 additional times.",
      "pvp_tooltip": "Bone Shield increases your Haste by 10% and it can stack 2 additional times.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Insatiable Blade",
      "spell_id": 377637,
      "node_id": 76129,
      "entry_id": 96260,
      "definition_id": 101262,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76129,
        "node_name": "Insatiable Blade",
        "node_type": "single",
        "pos_x": 12600,
        "pos_y": 4200,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76138
        ],
        "next": [
          76143,
          76130,
          76043
        ],
        "entry_id": 96260,
        "entry_max_ranks": 1,
        "definition_id": 101262,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Insatiable Blade",
        "spell_id": 377637,
        "visible_spell_id": null,
        "icon": "70_inscription_vantus_rune_nightmare",
        "icon_candidates": [
          "70_inscription_vantus_rune_nightmare"
        ]
      },
      "pve_tooltip": "Dancing Rune Weapon's cooldown is reduced by 30 sec and now generates 5 Bone Shield charges.",
      "pvp_tooltip": "Dancing Rune Weapon's cooldown is reduced by 30 sec and now generates 5 Bone Shield charges.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Deadly Reach",
      "spell_id": 1264235,
      "node_id": 76166,
      "entry_id": 96301,
      "definition_id": 101303,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76166,
        "node_name": "Deadly Reach",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 4200,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76137,
          76138
        ],
        "next": [
          76043
        ],
        "entry_id": 96301,
        "entry_max_ranks": 1,
        "definition_id": 101303,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Deadly Reach",
        "spell_id": 1264235,
        "visible_spell_id": null,
        "icon": "inv12_ability_deathknight_cleavingdeathstrikes",
        "icon_candidates": [
          "inv12_ability_deathknight_cleavingdeathstrikes"
        ]
      },
      "pve_tooltip": "Death Strike hits an additional 2 enemies at 60% effectiveness.",
      "pvp_tooltip": "Death Strike hits an additional 2 enemies at 60% effectiveness.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Rapid Decomposition",
      "spell_id": 194662,
      "node_id": 76141,
      "entry_id": 96273,
      "definition_id": 101275,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76141,
        "node_name": "Rapid Decomposition",
        "node_type": "single",
        "pos_x": 13800,
        "pos_y": 4200,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76147,
          76124,
          76137
        ],
        "next": [
          76043,
          76174
        ],
        "entry_id": 96273,
        "entry_max_ranks": 1,
        "definition_id": 101275,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Rapid Decomposition",
        "spell_id": 194662,
        "visible_spell_id": null,
        "icon": "ability_deathknight_deathsiphon2",
        "icon_candidates": [
          "ability_deathknight_deathsiphon2"
        ]
      },
      "pve_tooltip": "Your Blood Plague and Death and Decay deal damage 15% more often.\nAdditionally, your Blood Plague leeches 85% more Health.",
      "pvp_tooltip": "Your Blood Plague and Death and Decay deal damage 15% more often.\nAdditionally, your Blood Plague leeches 85% more Health.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Boiling Point",
      "spell_id": 1265790,
      "node_id": 76039,
      "entry_id": 96167,
      "definition_id": 101169,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76039,
        "node_name": "Boiling Point",
        "node_type": "single",
        "pos_x": 10800,
        "pos_y": 4800,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76042,
          76145
        ],
        "next": [
          102243
        ],
        "entry_id": 96167,
        "entry_max_ranks": 1,
        "definition_id": 101169,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Boiling Point",
        "spell_id": 1265790,
        "visible_spell_id": null,
        "icon": "warlock_pvp_endlessaffliction",
        "icon_candidates": [
          "warlock_pvp_endlessaffliction"
        ]
      },
      "pve_tooltip": "Heart Strike has a chance to make your next Blood Boil empowered, dealing 50% increased damage and echoing after 3 sec.",
      "pvp_tooltip": "Heart Strike has a chance to make your next Blood Boil empowered, dealing 50% increased damage and echoing after 3 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Lifeblood",
      "spell_id": 1264296,
      "node_id": 76143,
      "entry_id": 96276,
      "definition_id": 101278,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76143,
        "node_name": "Lifeblood",
        "node_type": "single",
        "pos_x": 12000,
        "pos_y": 4800,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76129,
          76142,
          76042
        ],
        "next": [
          102243,
          76139,
          76172
        ],
        "entry_id": 96276,
        "entry_max_ranks": 1,
        "definition_id": 101278,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Lifeblood",
        "spell_id": 1264296,
        "visible_spell_id": null,
        "icon": "inv_10_elementalcombinedfoozles_blood",
        "icon_candidates": [
          "inv_10_elementalcombinedfoozles_blood"
        ]
      },
      "pve_tooltip": "Death Strike heals for an additional 20% of its healing over 5 sec.",
      "pvp_tooltip": "Death Strike heals for an additional 20% of its healing over 5 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Everlasting Bond",
      "spell_id": 377668,
      "node_id": 76130,
      "entry_id": 96261,
      "definition_id": 101263,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76130,
        "node_name": "Everlasting Bond",
        "node_type": "single",
        "pos_x": 12600,
        "pos_y": 4800,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76129
        ],
        "next": [
          76172
        ],
        "entry_id": 96261,
        "entry_max_ranks": 1,
        "definition_id": 101263,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Everlasting Bond",
        "spell_id": 377668,
        "visible_spell_id": null,
        "icon": "inv_sword_07",
        "icon_candidates": [
          "inv_sword_07"
        ]
      },
      "pve_tooltip": "Summons 1 additional copy of Dancing Rune Weapon and increases its duration by 4 sec.",
      "pvp_tooltip": "Summons 1 additional copy of Dancing Rune Weapon and increases its duration by 4 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Voracious",
      "spell_id": 273953,
      "node_id": 76043,
      "entry_id": 96171,
      "definition_id": 101173,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76043,
        "node_name": "Voracious",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 4800,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76129,
          76141,
          76166
        ],
        "next": [
          76172,
          102242,
          76041
        ],
        "entry_id": 96171,
        "entry_max_ranks": 1,
        "definition_id": 101173,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Voracious",
        "spell_id": 273953,
        "visible_spell_id": null,
        "icon": "ability_ironmaidens_whirlofblood",
        "icon_candidates": [
          "ability_ironmaidens_whirlofblood"
        ]
      },
      "pve_tooltip": "Death Strike's healing is increased by 5% and grants you 15% Leech for 8 sec.",
      "pvp_tooltip": "Death Strike's healing is increased by 5% and grants you 15% Leech for 8 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Blood Feast",
      "spell_id": 391386,
      "node_id": 76174,
      "entry_id": 96309,
      "definition_id": 101311,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76174,
        "node_name": "Blood Feast",
        "node_type": "single",
        "pos_x": 14400,
        "pos_y": 4800,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76141,
          76147
        ],
        "next": [
          76041
        ],
        "entry_id": 96309,
        "entry_max_ranks": 1,
        "definition_id": 101311,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Blood Feast",
        "spell_id": 391386,
        "visible_spell_id": null,
        "icon": "spell_deathknight_vendetta",
        "icon_candidates": [
          "spell_deathknight_vendetta"
        ]
      },
      "pve_tooltip": "Anti-Magic Shell heals you for 100% of the damage it absorbs.",
      "pvp_tooltip": "Anti-Magic Shell heals you for 100% of the damage it absorbs.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Plague Infusion",
      "spell_id": 1265869,
      "node_id": 102243,
      "entry_id": 126298,
      "definition_id": 131124,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102243,
        "node_name": "Plague Infusion",
        "node_type": "single",
        "pos_x": 11400,
        "pos_y": 5400,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76039,
          76143
        ],
        "next": [
          76128
        ],
        "entry_id": 126298,
        "entry_max_ranks": 1,
        "definition_id": 131124,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Plague Infusion",
        "spell_id": 1265869,
        "visible_spell_id": null,
        "icon": "spell_yorsahj_bloodboil_blue",
        "icon_candidates": [
          "spell_yorsahj_bloodboil_blue"
        ]
      },
      "pve_tooltip": "Your Blood Plague critical hits have a chance to reduce the cooldown of your Blood Boil by 0.25 sec.\n(1s cooldown)",
      "pvp_tooltip": "Your Blood Plague critical hits have a chance to reduce the cooldown of your Blood Boil by 0.25 sec.\n(1s cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Bloody Reflection",
      "spell_id": 1279633,
      "node_id": 76139,
      "entry_id": 96271,
      "definition_id": 101273,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76139,
        "node_name": "Bloody Reflection",
        "node_type": "single",
        "pos_x": 12000,
        "pos_y": 5400,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76143
        ],
        "next": [
          76131
        ],
        "entry_id": 96271,
        "entry_max_ranks": 1,
        "definition_id": 101273,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Bloody Reflection",
        "spell_id": 1279633,
        "visible_spell_id": null,
        "icon": "ability_warrior_bloodbath",
        "icon_candidates": [
          "ability_warrior_bloodbath"
        ]
      },
      "pve_tooltip": "While Blood Shield is active, taking direct damage reflects (110% of Attack Power) Shadow damage back to the attacker. Blood Shield can now absorb up to 65% of your maximum health.",
      "pvp_tooltip": "While Blood Shield is active, taking direct damage reflects (110% of Attack Power) Shadow damage back to the attacker. Blood Shield can now absorb up to 65% of your maximum health.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Iron Heart",
      "spell_id": 391395,
      "node_id": 76172,
      "entry_id": 96307,
      "definition_id": 101309,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76172,
        "node_name": "Iron Heart",
        "node_type": "single",
        "pos_x": 12600,
        "pos_y": 5400,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76043,
          76130,
          76143
        ],
        "next": [
          76131,
          76125,
          102244
        ],
        "entry_id": 96307,
        "entry_max_ranks": 1,
        "definition_id": 101309,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Iron Heart",
        "spell_id": 391395,
        "visible_spell_id": null,
        "icon": "inv_ragnaros_heart",
        "icon_candidates": [
          "inv_ragnaros_heart"
        ]
      },
      "pve_tooltip": "Blood Shield's duration is increased by 2 sec and it absorbs 20% more damage.",
      "pvp_tooltip": "Blood Shield's duration is increased by 2 sec and it absorbs 20% more damage.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Bloodied Blade",
      "spell_id": 458753,
      "node_id": 102242,
      "entry_id": 126296,
      "definition_id": 131122,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102242,
        "node_name": "Bloodied Blade",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 5400,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76043
        ],
        "next": [
          102244
        ],
        "entry_id": 126296,
        "entry_max_ranks": 1,
        "definition_id": 131122,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Bloodied Blade",
        "spell_id": 458753,
        "visible_spell_id": null,
        "icon": "inv_sword_2h_ebonblade_b_01_red",
        "icon_candidates": [
          "inv_sword_2h_ebonblade_b_01_red"
        ]
      },
      "pve_tooltip": "Parrying an attack grants you a charge of Bloodied Blade, increasing your Strength by 0.5%, up to 4.0% for 15 sec.\nAt 8 stacks, your next parry consumes all charges to unleash a Heart Strike at 300% effectiveness, and increases your Strength by 10% for 6 sec.\n(500ms cooldown)",
      "pvp_tooltip": "Parrying an attack grants you a charge of Bloodied Blade, increasing your Strength by 0.5%, up to 4.0% for 15 sec.\nAt 8 stacks, your next parry consumes all charges to unleash a Heart Strike at 300% effectiveness, and increases your Strength by 10% for 6 sec.\n(500ms cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Coagulopathy",
      "spell_id": 391477,
      "node_id": 76041,
      "entry_id": 96169,
      "definition_id": 101171,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76041,
        "node_name": "Coagulopathy",
        "node_type": "single",
        "pos_x": 13800,
        "pos_y": 5400,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76174,
          76043
        ],
        "next": [
          76132
        ],
        "entry_id": 96169,
        "entry_max_ranks": 1,
        "definition_id": 101171,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Coagulopathy",
        "spell_id": 391477,
        "visible_spell_id": null,
        "icon": "ability_skeer_bloodletting",
        "icon_candidates": [
          "ability_skeer_bloodletting"
        ]
      },
      "pve_tooltip": "Enemies affected by Blood Plague take 5% increased damage from you and Death Strike increases the damage of your Blood Plague by 10% for 15 sec, stacking up to 4 times.",
      "pvp_tooltip": "Enemies affected by Blood Plague take 5% increased damage from you and Death Strike increases the damage of your Blood Plague by 10% for 15 sec, stacking up to 4 times.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Blood Mist",
      "spell_id": 1263743,
      "node_id": 76128,
      "entry_id": 96259,
      "definition_id": 101261,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76128,
        "node_name": "Blood Mist",
        "node_type": "single",
        "pos_x": 11400,
        "pos_y": 6000,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102243
        ],
        "next": [
          76127
        ],
        "entry_id": 96259,
        "entry_max_ranks": 1,
        "definition_id": 101261,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Blood Mist",
        "spell_id": 1263743,
        "visible_spell_id": null,
        "icon": "ability_revendreth_deathknight",
        "icon_candidates": [
          "ability_revendreth_deathknight"
        ]
      },
      "pve_tooltip": "When you cast Dancing Rune Weapon, you become enveloped in a blood mist that surrounds you for 8 sec, increasing your Parry by 5%.\nDeals (64% of Attack Power) Shadow damage every 1 sec to enemies within 10 yds. Every time it deals damage you gain 2 Runic Power, up to a maximum of 10 Runic Power. Deals reduced damage beyond 8 targets.",
      "pvp_tooltip": "When you cast Dancing Rune Weapon, you become enveloped in a blood mist that surrounds you for 8 sec, increasing your Parry by 5%.\nDeals (64% of Attack Power) Shadow damage every 1 sec to enemies within 10 yds. Every time it deals damage you gain 2 Runic Power, up to a maximum of 10 Runic Power. Deals reduced damage beyond 8 targets.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Sanguine Ground",
      "spell_id": 391458,
      "node_id": 76131,
      "entry_id": 96262,
      "definition_id": 101264,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76131,
        "node_name": "Sanguine Ground",
        "node_type": "single",
        "pos_x": 12000,
        "pos_y": 6000,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76139,
          76172
        ],
        "next": [
          76133
        ],
        "entry_id": 96262,
        "entry_max_ranks": 1,
        "definition_id": 101264,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Sanguine Ground",
        "spell_id": 391458,
        "visible_spell_id": null,
        "icon": "inv_artifact_corruptedbloodofzakajz",
        "icon_candidates": [
          "inv_artifact_corruptedbloodofzakajz"
        ]
      },
      "pve_tooltip": "You deal 6% more damage and receive 5% more healing while standing in your Death and Decay.",
      "pvp_tooltip": "You deal 6% more damage and receive 5% more healing while standing in your Death and Decay.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Bloodshot",
      "spell_id": 391398,
      "node_id": 76125,
      "entry_id": 96256,
      "definition_id": 101258,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76125,
        "node_name": "Bloodshot",
        "node_type": "single",
        "pos_x": 12600,
        "pos_y": 6000,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76172
        ],
        "next": [],
        "entry_id": 96256,
        "entry_max_ranks": 1,
        "definition_id": 101258,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Bloodshot",
        "spell_id": 391398,
        "visible_spell_id": null,
        "icon": "ability_warlock_baneofhavoc",
        "icon_candidates": [
          "ability_warlock_baneofhavoc"
        ]
      },
      "pve_tooltip": "While Blood Shield is active, you deal 8% increased damage and damage taken is reduced by 4%.",
      "pvp_tooltip": "While Blood Shield is active, you deal 8% increased damage and damage taken is reduced by 4%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Consumption",
      "spell_id": 1263824,
      "node_id": 102244,
      "entry_id": 126300,
      "definition_id": 131125,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102244,
        "node_name": "Consumption",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 6000,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102242,
          76172
        ],
        "next": [
          102245
        ],
        "entry_id": 126300,
        "entry_max_ranks": 1,
        "definition_id": 131125,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Consumption",
        "spell_id": 1263824,
        "visible_spell_id": null,
        "icon": "inv_axe_2h_artifactmaw_d_01",
        "icon_candidates": [
          "inv_axe_2h_artifactmaw_d_01"
        ]
      },
      "pve_tooltip": "Melee Range\nChanneled (2 sec cast)\n45 sec cooldown\nEmpower the runes in your weapon, reducing the damage you take over the duration and unleashing a devastating attack that deals (625.1% of Attack Power) Shadow damage and consumes up to 75% of your Blood Plague instantly from enemies in front of you.\nI: Consumes up to 25% of your Blood Plague. While empowering, your damage taken is reduced by 5% and an additional 8 sec after empowering.\nII: Consumes up to 50% of your Blood Plague. While empowering, your damage taken is reduced by 10% and an additional 4 sec after empowering.\nIII: Consumes up to 75% of your Blood Plague. While empowering, your damage taken is reduced by 15% and an additional 2 sec after empowering.",
      "pvp_tooltip": "Melee Range\nChanneled (2 sec cast)\n45 sec cooldown\nEmpower the runes in your weapon, reducing the damage you take over the duration and unleashing a devastating attack that deals (625.1% of Attack Power) Shadow damage and consumes up to 75% of your Blood Plague instantly from enemies in front of you.\nI: Consumes up to 25% of your Blood Plague. While empowering, your damage taken is reduced by 5% and an additional 8 sec after empowering.\nII: Consumes up to 50% of your Blood Plague. While empowering, your damage taken is reduced by 10% and an additional 4 sec after empowering.\nIII: Consumes up to 75% of your Blood Plague. While empowering, your damage taken is reduced by 15% and an additional 2 sec after empowering.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Red Thirst",
      "spell_id": 205723,
      "node_id": 76132,
      "entry_id": 96263,
      "definition_id": 101265,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76132,
        "node_name": "Red Thirst",
        "node_type": "single",
        "pos_x": 13800,
        "pos_y": 6000,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76041
        ],
        "next": [
          76040
        ],
        "entry_id": 96263,
        "entry_max_ranks": 1,
        "definition_id": 101265,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Red Thirst",
        "spell_id": 205723,
        "visible_spell_id": null,
        "icon": "spell_deathknight_bloodpresence",
        "icon_candidates": [
          "spell_deathknight_bloodpresence"
        ]
      },
      "pve_tooltip": "Reduces the cooldown on Vampiric Blood by 2.0 sec per 10 Runic Power spent.",
      "pvp_tooltip": "Reduces the cooldown on Vampiric Blood by 2.0 sec per 10 Runic Power spent.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Sanguinary Burst",
      "spell_id": 1263781,
      "node_id": 76127,
      "entry_id": 96258,
      "definition_id": 101260,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76127,
        "node_name": "Sanguinary Burst",
        "node_type": "single",
        "pos_x": 11400,
        "pos_y": 6600,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76128
        ],
        "next": [],
        "entry_id": 96258,
        "entry_max_ranks": 1,
        "definition_id": 101260,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Sanguinary Burst",
        "spell_id": 1263781,
        "visible_spell_id": null,
        "icon": "spell_animarevendreth_groundstate",
        "icon_candidates": [
          "spell_animarevendreth_groundstate"
        ]
      },
      "pve_tooltip": "When Blood Mist ends it deals (276% of Attack Power) Shadow damage to 8 nearby enemies, healing you for 18% of the damage dealt. The damage is increased by 2% for every 1 Runic Power spent while Blood Mist was active.",
      "pvp_tooltip": "When Blood Mist ends it deals (276% of Attack Power) Shadow damage to 8 nearby enemies, healing you for 18% of the damage dealt. The damage is increased by 2% for every 1 Runic Power spent while Blood Mist was active.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Purgatory",
      "spell_id": 114556,
      "node_id": 76133,
      "entry_id": 96264,
      "definition_id": 101266,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76133,
        "node_name": "Purgatory",
        "node_type": "single",
        "pos_x": 12000,
        "pos_y": 6600,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76131
        ],
        "next": [],
        "entry_id": 96264,
        "entry_max_ranks": 1,
        "definition_id": 101266,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Purgatory",
        "spell_id": 114556,
        "visible_spell_id": null,
        "icon": "inv_misc_shadowegg",
        "icon_candidates": [
          "inv_misc_shadowegg"
        ]
      },
      "pve_tooltip": "An unholy pact that prevents fatal damage, instead absorbing incoming healing equal to the damage prevented, lasting 3 sec.\nIf any healing absorption remains when this effect expires, you will die. This effect may only occur every 4 min.",
      "pvp_tooltip": "An unholy pact that prevents fatal damage, instead absorbing incoming healing equal to the damage prevented, lasting 3 sec.\nIf any healing absorption remains when this effect expires, you will die. This effect may only occur every 4 min.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Carnage",
      "spell_id": 458752,
      "node_id": 102245,
      "entry_id": 126301,
      "definition_id": 131127,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102245,
        "node_name": "Carnage",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 6600,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102244
        ],
        "next": [],
        "entry_id": 126301,
        "entry_max_ranks": 1,
        "definition_id": 131127,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Carnage",
        "spell_id": 458752,
        "visible_spell_id": null,
        "icon": "sha_ability_warrior_bloodnova_nightmare",
        "icon_candidates": [
          "sha_ability_warrior_bloodnova_nightmare"
        ]
      },
      "pve_tooltip": "Approximately 1.1 procs per minute\nConsumption now contributes to your Mastery: Blood Shield.\nEach time an enemy strikes your Blood Shield, the cooldown of Consumption has chance to be reset.",
      "pvp_tooltip": "Approximately 1.1 procs per minute\nConsumption now contributes to your Mastery: Blood Shield.\nEach time an enemy strikes your Blood Shield, the cooldown of Consumption has chance to be reset.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Umbilicus Eternus",
      "spell_id": 391517,
      "node_id": 76040,
      "entry_id": 96168,
      "definition_id": 101170,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76040,
        "node_name": "Umbilicus Eternus",
        "node_type": "single",
        "pos_x": 13800,
        "pos_y": 6600,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76132
        ],
        "next": [],
        "entry_id": 96168,
        "entry_max_ranks": 1,
        "definition_id": 101170,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Umbilicus Eternus",
        "spell_id": 391517,
        "visible_spell_id": null,
        "icon": "artifactability_blooddeathknight_umbilicuseternus",
        "icon_candidates": [
          "artifactability_blooddeathknight_umbilicuseternus"
        ]
      },
      "pve_tooltip": "After Vampiric Blood expires, you absorb damage equal to 6 times the damage your Blood Plague dealt during Vampiric Blood.",
      "pvp_tooltip": "After Vampiric Blood expires, you absorb damage equal to 6 times the damage your Blood Plague dealt during Vampiric Blood.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Dance of Midnight",
      "spell_id": 1264506,
      "node_id": 110353,
      "entry_id": 136917,
      "definition_id": 141680,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110353,
        "node_name": "Dance of Midnight / Dance of Midnight / Dance of Midnight",
        "node_type": "tiered",
        "pos_x": 12600,
        "pos_y": 7350,
        "max_ranks": 4,
        "required_points": 20,
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [],
        "entry_id": 136917,
        "entry_max_ranks": 1,
        "definition_id": 141680,
        "entry_index": 100,
        "entry_type": "tierrank",
        "talent_name": "Dance of Midnight",
        "spell_id": 1264506,
        "visible_spell_id": null,
        "icon": "inv12_apextalent_deathknight_danceofmidnight",
        "icon_candidates": [
          "inv12_apextalent_deathknight_danceofmidnight"
        ]
      },
      "pve_tooltip": "While Dancing Rune Weapon is active, Parrying an attack has a 100% chance to make your next Heart Strike cost no Runes and deal 150% increased damage.\n(3s cooldown)",
      "pvp_tooltip": "While Dancing Rune Weapon is active, Parrying an attack has a 100% chance to make your next Heart Strike cost no Runes and deal 150% increased damage.\n(3s cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Dance of Midnight",
      "spell_id": 1264405,
      "node_id": 110353,
      "entry_id": 136916,
      "definition_id": 141679,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110353,
        "node_name": "Dance of Midnight / Dance of Midnight / Dance of Midnight",
        "node_type": "tiered",
        "pos_x": 12600,
        "pos_y": 7350,
        "max_ranks": 4,
        "required_points": 20,
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [],
        "entry_id": 136916,
        "entry_max_ranks": 2,
        "definition_id": 141679,
        "entry_index": 200,
        "entry_type": "tierrank",
        "talent_name": "Dance of Midnight",
        "spell_id": 1264405,
        "visible_spell_id": null,
        "icon": "ability_demonhunter_bladedance",
        "icon_candidates": [
          "ability_demonhunter_bladedance"
        ]
      },
      "pve_tooltip": "For each Dancing Rune Weapon active your damage is increased by 6% and your damage taken is reduced by 6%.",
      "pvp_tooltip": "For each Dancing Rune Weapon active your damage is increased by 6% and your damage taken is reduced by 6%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": [
        {
          "rank": 1,
          "pve_tooltip": "For each Dancing Rune Weapon active your damage is increased by 3% and your damage taken is reduced by 6%.",
          "pvp_tooltip": "For each Dancing Rune Weapon active your damage is increased by 3% and your damage taken is reduced by 6%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "For each Dancing Rune Weapon active your damage is increased by 6% and your damage taken is reduced by 6%.",
          "pvp_tooltip": "For each Dancing Rune Weapon active your damage is increased by 6% and your damage taken is reduced by 6%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Dance of Midnight",
      "spell_id": 1264351,
      "node_id": 110353,
      "entry_id": 136915,
      "definition_id": 141678,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110353,
        "node_name": "Dance of Midnight / Dance of Midnight / Dance of Midnight",
        "node_type": "tiered",
        "pos_x": 12600,
        "pos_y": 7350,
        "max_ranks": 4,
        "required_points": 20,
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [],
        "entry_id": 136915,
        "entry_max_ranks": 1,
        "definition_id": 141678,
        "entry_index": 300,
        "entry_type": "tierrank",
        "talent_name": "Dance of Midnight",
        "spell_id": 1264351,
        "visible_spell_id": null,
        "icon": "ability_demonhunter_bladedance",
        "icon_candidates": [
          "ability_demonhunter_bladedance"
        ]
      },
      "pve_tooltip": "When you consume a Rune you have a chance to call a Dancing Rune Weapon to your aid for 8 sec.",
      "pvp_tooltip": "When you consume a Rune you have a chance to call a Dancing Rune Weapon to your aid for 8 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Reaper's Mark",
      "spell_id": 439843,
      "node_id": 95062,
      "entry_id": 117659,
      "definition_id": 122671,
      "tree_type": "hero",
      "hero_tree": "Deathbringer",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Deathbringer",
        "subtree_id": 33,
        "node_id": 95062,
        "node_name": "Reaper's Mark",
        "node_type": "single",
        "pos_x": 8100,
        "pos_y": 1200,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": true,
        "free_node": true,
        "prev": [],
        "next": [
          95036,
          95058,
          95043,
          109735
        ],
        "entry_id": 117659,
        "entry_max_ranks": 1,
        "definition_id": 122671,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Reaper's Mark",
        "spell_id": 439843,
        "visible_spell_id": null,
        "icon": "inv_ability_deathbringerdeathknight_reapersmark",
        "icon_candidates": [
          "inv_ability_deathbringerdeathknight_reapersmark"
        ]
      },
      "pve_tooltip": "2 Runes\nMelee Range\nInstant\n45 sec cooldown\nViciously slice into the soul of your enemy, dealing (530.712% of Attack Power) Shadowfrost damage and applying Reaper's Mark.\nEach time you deal Shadow or Frost damage, add a stack of Reaper's Mark. After 12 sec or reaching 40 stacks, the mark explodes, dealing (54.4176% of Attack Power) damage per stack.\nReaper's Mark travels to an unmarked enemy nearby if the target dies.",
      "pvp_tooltip": "2 Runes\nMelee Range\nInstant\n45 sec cooldown\nViciously slice into the soul of your enemy, dealing (530.712% of Attack Power) Shadowfrost damage and applying Reaper's Mark.\nEach time you deal Shadow or Frost damage, add a stack of Reaper's Mark. After 12 sec or reaching 40 stacks, the mark explodes, dealing (30.2018% of Attack Power) damage per stack.\nReaper's Mark travels to an unmarked enemy nearby if the target dies.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 308,
          "end": 315,
          "old_token": "54.4176",
          "new_token": "30.2018",
          "kind": "attack_power_coefficient",
          "effect_indexes": [
            1
          ]
        }
      ],
      "diagnostics": [
        {
          "effect_indexes": [
            4
          ],
          "status": "OTHER_SPEC_BRANCH",
          "kind": "attack_power_coefficient",
          "old": 234.0,
          "new": 187.20000000000002,
          "full_tooltip_match_count": 1
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "attack_power_coefficient",
          "old": "54.4176",
          "new": "30.2018"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 2.34,
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 439843,
          "source_spell_id": 439843,
          "effect_index": 4,
          "effect_text": "School Damage (2): shadowfrost | Attributes: Chain from Initial Target (7), Enforce Line of Sight To Chain Targets (16) (AP mod: 2.34)",
          "base_value": null,
          "spell_pvp_multiplier": 0.8,
          "amount_kind": "direct",
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.8,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [],
          "sources": [
            "simc",
            "drustvar",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "high"
        },
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 0.544176,
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 439843,
          "source_spell_id": 436304,
          "effect_index": 1,
          "effect_text": "School Damage (2): shadowfrost (AP mod: 0.544176)",
          "base_value": null,
          "spell_pvp_multiplier": 0.555,
          "amount_kind": "direct",
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.555,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            439843,
            436304
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [],
          "sources": [
            "simc_generated",
            "drustvar",
            "simc"
          ],
          "source_notes": [],
          "confidence": "high"
        },
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 0.30364,
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 439843,
          "source_spell_id": 436304,
          "effect_index": 2,
          "effect_text": "School Damage (2): shadowfrost (AP mod: 0.30364)",
          "base_value": null,
          "spell_pvp_multiplier": 0.554667,
          "amount_kind": "direct",
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.554667,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            439843,
            436304
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [],
          "sources": [
            "simc_generated",
            "drustvar",
            "simc"
          ],
          "source_notes": [],
          "confidence": "high"
        }
      ],
      "render_effect_count": 2,
      "rank_tooltips": []
    },
    {
      "talent_name": "Vampiric Strike",
      "spell_id": 433901,
      "node_id": 95051,
      "entry_id": 117648,
      "definition_id": 122660,
      "tree_type": "hero",
      "hero_tree": "San'layn",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "San'layn",
        "subtree_id": 31,
        "node_id": 95051,
        "node_name": "Vampiric Strike",
        "node_type": "single",
        "pos_x": 15600,
        "pos_y": 1200,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": true,
        "free_node": true,
        "prev": [],
        "next": [
          95064,
          95048,
          95056,
          109737
        ],
        "entry_id": 117648,
        "entry_max_ranks": 1,
        "definition_id": 122660,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Vampiric Strike",
        "spell_id": 433901,
        "visible_spell_id": null,
        "icon": "inv_ability_sanlayndeathknight_vampiricstrike",
        "icon_candidates": [
          "inv_ability_sanlayndeathknight_vampiricstrike"
        ]
      },
      "pve_tooltip": "Your Death Coil and Death Strike have a 35% chance to make your next Heart Strike become Vampiric Strike.\nVampiric Strike heals you for 1% of your maximum health and grants you Essence of the Blood Queen, increasing your Haste by 2.0%, up to 10.0% for 20 sec.",
      "pvp_tooltip": "Your Death Coil and Death Strike have a 35% chance to make your next Heart Strike become Vampiric Strike.\nVampiric Strike heals you for 1% of your maximum health and grants you Essence of the Blood Queen, increasing your Haste by 2.0%, up to 10.0% for 20 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 1.69884,
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 433901,
          "source_spell_id": 433895,
          "effect_index": 1,
          "effect_text": "School Damage (2): shadow (AP mod: 1.69884)",
          "base_value": null,
          "spell_pvp_multiplier": 2.704,
          "amount_kind": "direct",
          "aura_factor": 1.0,
          "final_pvp_multiplier": 2.704,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            433901,
            434422,
            433895
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "spelldesc_ref"
          ],
          "aura_rules": [],
          "sources": [
            "simc",
            "drustvar",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "high"
        },
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 1.13375,
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 433901,
          "source_spell_id": 433895,
          "effect_index": 5,
          "effect_text": "School Damage (2): shadow (AP mod: 1.13375)",
          "base_value": null,
          "spell_pvp_multiplier": 1.3,
          "amount_kind": "direct",
          "aura_factor": 1.0,
          "final_pvp_multiplier": 1.3,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            433901,
            434422,
            433895
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "spelldesc_ref"
          ],
          "aura_rules": [],
          "sources": [
            "simc",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "medium"
        }
      ],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Wave of Souls",
      "spell_id": 439851,
      "node_id": 95036,
      "entry_id": 117633,
      "definition_id": 122645,
      "tree_type": "hero",
      "hero_tree": "Deathbringer",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Deathbringer",
        "subtree_id": 33,
        "node_id": 95036,
        "node_name": "Wave of Souls",
        "node_type": "single",
        "pos_x": 7200,
        "pos_y": 1800,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95062
        ],
        "next": [
          95061
        ],
        "entry_id": 117633,
        "entry_max_ranks": 1,
        "definition_id": 122645,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Wave of Souls",
        "spell_id": 439851,
        "visible_spell_id": null,
        "icon": "spell_animamaw_wave",
        "icon_candidates": [
          "spell_animamaw_wave"
        ]
      },
      "pve_tooltip": "Reaper's Mark sends forth bursts of Shadowfrost energy and back, dealing (254.304% of Attack Power) Shadowfrost damage both ways to all enemies caught in its path.\nWave of Souls critical strikes cause enemies to take 5% increased Shadowfrost damage for 15 sec, stacking up to 2 times, and it is always a critical strike on its way back.",
      "pvp_tooltip": "Reaper's Mark sends forth bursts of Shadowfrost energy and back, dealing (391.6282% of Attack Power) Shadowfrost damage both ways to all enemies caught in its path.\nWave of Souls critical strikes cause enemies to take 5% increased Shadowfrost damage for 15 sec, stacking up to 2 times, and it is always a critical strike on its way back.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 74,
          "end": 81,
          "old_token": "254.304",
          "new_token": "391.6282",
          "kind": "attack_power_coefficient",
          "effect_indexes": [
            1
          ]
        }
      ],
      "diagnostics": [
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "attack_power_coefficient",
          "old": "254.304",
          "new": "391.6282"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 2.54304,
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 439851,
          "source_spell_id": 435802,
          "effect_index": 1,
          "effect_text": "School Damage (2): shadowfrost (AP mod: 2.54304)",
          "base_value": null,
          "spell_pvp_multiplier": 1.54,
          "amount_kind": "direct",
          "aura_factor": 1.0,
          "final_pvp_multiplier": 1.54,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            439851,
            435802
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [],
          "sources": [
            "simc_generated",
            "drustvar",
            "simc"
          ],
          "source_notes": [],
          "confidence": "high"
        },
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 0.967079,
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 439851,
          "source_spell_id": 435802,
          "effect_index": 2,
          "effect_text": "School Damage (2): shadowfrost (AP mod: 0.967079)",
          "base_value": null,
          "spell_pvp_multiplier": 1.54,
          "amount_kind": "direct",
          "aura_factor": 1.0,
          "final_pvp_multiplier": 1.54,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            439851,
            435802
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [],
          "sources": [
            "simc_generated",
            "drustvar",
            "simc"
          ],
          "source_notes": [],
          "confidence": "high"
        }
      ],
      "render_effect_count": 1,
      "rank_tooltips": []
    },
    {
      "talent_name": "Wither Away",
      "spell_id": 441894,
      "node_id": 95058,
      "entry_id": 117655,
      "definition_id": 122667,
      "tree_type": "hero",
      "hero_tree": "Deathbringer",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Deathbringer",
        "subtree_id": 33,
        "node_id": 95058,
        "node_name": "Wither Away",
        "node_type": "single",
        "pos_x": 7800,
        "pos_y": 1800,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95062
        ],
        "next": [
          95034
        ],
        "entry_id": 117655,
        "entry_max_ranks": 1,
        "definition_id": 122667,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Wither Away",
        "spell_id": 441894,
        "visible_spell_id": null,
        "icon": "sha_spell_warlock_demonsoul",
        "icon_candidates": [
          "sha_spell_warlock_demonsoul"
        ]
      },
      "pve_tooltip": "Blood Plague deals its damage 100% faster, and the second scythe of Exterminate applies Blood Plague.",
      "pvp_tooltip": "Blood Plague deals its damage 0% faster, and the second scythe of Exterminate applies Blood Plague.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 30,
          "end": 33,
          "old_token": "100",
          "new_token": "0",
          "kind": "ordinary_value",
          "effect_indexes": [
            7
          ]
        }
      ],
      "diagnostics": [
        {
          "effect_indexes": [
            6
          ],
          "status": "NOT_VISIBLE_IN_TOOLTIP",
          "kind": "ordinary_value",
          "old": 75.0,
          "new": 99.99974999999999,
          "full_tooltip_match_count": 0
        },
        {
          "effect_indexes": [
            7
          ],
          "status": "APPLIED",
          "kind": "ordinary_value",
          "old": "100",
          "new": "0"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 441894,
          "source_spell_id": 441894,
          "effect_index": 6,
          "effect_text": "Apply Aura (6) | Dummy (4)",
          "base_value": 75.0,
          "spell_pvp_multiplier": 1.33333,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 1.33333,
          "final_pvp_value": 99.99974999999999,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [],
          "sources": [
            "simc",
            "drustvar",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "high"
        },
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 441894,
          "source_spell_id": 441894,
          "effect_index": 7,
          "effect_text": "Apply Aura (6) | Dummy (4)",
          "base_value": 100.0,
          "spell_pvp_multiplier": 0.0,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.0,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [],
          "sources": [
            "simc",
            "drustvar",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "high"
        },
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 441894,
          "source_spell_id": 441894,
          "effect_index": 3,
          "effect_text": "Apply Aura (6) | Add Percent Modifier (108): Spell Tick Time (19)",
          "base_value": -43.0,
          "spell_pvp_multiplier": 1.16279,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 1.16279,
          "final_pvp_value": -49.99997,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [],
          "sources": [
            "simc",
            "drustvar",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "high"
        },
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 441894,
          "source_spell_id": 441894,
          "effect_index": 4,
          "effect_text": "Apply Aura (6) | Add Percent Modifier (108): Spell Duration (1)",
          "base_value": -43.0,
          "spell_pvp_multiplier": 1.16279,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 1.16279,
          "final_pvp_value": -49.99997,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [],
          "sources": [
            "simc",
            "drustvar",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "high"
        }
      ],
      "render_effect_count": 2,
      "rank_tooltips": []
    },
    {
      "talent_name": "Bind in Darkness",
      "spell_id": 440031,
      "node_id": 95043,
      "entry_id": 117640,
      "definition_id": 122652,
      "tree_type": "hero",
      "hero_tree": "Deathbringer",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Deathbringer",
        "subtree_id": 33,
        "node_id": 95043,
        "node_name": "Bind in Darkness",
        "node_type": "single",
        "pos_x": 8400,
        "pos_y": 1800,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95062
        ],
        "next": [
          95035
        ],
        "entry_id": 117640,
        "entry_max_ranks": 1,
        "definition_id": 122652,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Bind in Darkness",
        "spell_id": 440031,
        "visible_spell_id": null,
        "icon": "ability_argus_soulbombdebuffsmall",
        "icon_candidates": [
          "ability_argus_soulbombdebuffsmall"
        ]
      },
      "pve_tooltip": "Blood Boil deals 50% increased damage, and is now Shadowfrost.\nShadowfrost damage applies 2 stacks to Reaper's Mark and 4 stacks when it is a critical strike.",
      "pvp_tooltip": "Blood Boil deals 50% increased damage, and is now Shadowfrost.\nShadowfrost damage applies 2 stacks to Reaper's Mark and 4 stacks when it is a critical strike.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Frigid Resolve",
      "spell_id": 1265859,
      "node_id": 109735,
      "entry_id": 135993,
      "definition_id": 140748,
      "tree_type": "hero",
      "hero_tree": "Deathbringer",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Deathbringer",
        "subtree_id": 33,
        "node_id": 109735,
        "node_name": "Frigid Resolve",
        "node_type": "single",
        "pos_x": 9000,
        "pos_y": 1800,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95062
        ],
        "next": [
          109734
        ],
        "entry_id": 135993,
        "entry_max_ranks": 1,
        "definition_id": 140748,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Frigid Resolve",
        "spell_id": 1265859,
        "visible_spell_id": null,
        "icon": "spell_deathknight_icetouch",
        "icon_candidates": [
          "spell_deathknight_icetouch"
        ]
      },
      "pve_tooltip": "The effectiveness of Permafrost is increased by 100% and Exterminate grants Permafrost equal to 10% of the damage dealt.\nPermafrost\nYour auto attack damage grants you an absorb shield equal to 50% of the damage dealt.",
      "pvp_tooltip": "The effectiveness of Permafrost is increased by 100% and Exterminate grants Permafrost equal to 10% of the damage dealt.\nPermafrost\nYour auto attack damage grants you an absorb shield equal to 50% of the damage dealt.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Newly Turned",
      "spell_id": 433934,
      "node_id": 95064,
      "entry_id": 117661,
      "definition_id": 122673,
      "tree_type": "hero",
      "hero_tree": "San'layn",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "San'layn",
        "subtree_id": 31,
        "node_id": 95064,
        "node_name": "Newly Turned / Vampiric Speed",
        "node_type": "choice",
        "pos_x": 14700,
        "pos_y": 1800,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95051
        ],
        "next": [
          95033
        ],
        "entry_id": 117661,
        "entry_max_ranks": 1,
        "definition_id": 122673,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Newly Turned",
        "spell_id": 433934,
        "visible_spell_id": null,
        "icon": "ability_deathknight_hemorrhagicfever",
        "icon_candidates": [
          "ability_deathknight_hemorrhagicfever"
        ]
      },
      "pve_tooltip": "Raise Ally revives players at full health and grants you and your ally an absorb shield equal to 20% of your maximum health.",
      "pvp_tooltip": "Raise Ally revives players at full health and grants you and your ally an absorb shield equal to 20% of your maximum health.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Vampiric Speed",
      "spell_id": 434028,
      "node_id": 95064,
      "entry_id": 117892,
      "definition_id": 122904,
      "tree_type": "hero",
      "hero_tree": "San'layn",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "San'layn",
        "subtree_id": 31,
        "node_id": 95064,
        "node_name": "Newly Turned / Vampiric Speed",
        "node_type": "choice",
        "pos_x": 14700,
        "pos_y": 1800,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95051
        ],
        "next": [
          95033
        ],
        "entry_id": 117892,
        "entry_max_ranks": 1,
        "definition_id": 122904,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Vampiric Speed",
        "spell_id": 434028,
        "visible_spell_id": null,
        "icon": "inv_boots_cloth_34v2",
        "icon_candidates": [
          "inv_boots_cloth_34v2"
        ]
      },
      "pve_tooltip": "Death's Advance and Wraith Walk movement speed bonuses are increased by 10%.\nActivating Death's Advance or Wraith Walk increases 4 nearby allies movement speed by 20% for 5 sec.\n(100ms cooldown)",
      "pvp_tooltip": "Death's Advance and Wraith Walk movement speed bonuses are increased by 10%.\nActivating Death's Advance or Wraith Walk increases 4 nearby allies movement speed by 20% for 5 sec.\n(100ms cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Blood-Soaked Ground",
      "spell_id": 434033,
      "node_id": 95048,
      "entry_id": 117645,
      "definition_id": 122657,
      "tree_type": "hero",
      "hero_tree": "San'layn",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "San'layn",
        "subtree_id": 31,
        "node_id": 95048,
        "node_name": "Blood-Soaked Ground / Desecrate",
        "node_type": "choice",
        "pos_x": 15300,
        "pos_y": 1800,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95051
        ],
        "next": [
          95065
        ],
        "entry_id": 117645,
        "entry_max_ranks": 1,
        "definition_id": 122657,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Blood-Soaked Ground",
        "spell_id": 434033,
        "visible_spell_id": null,
        "icon": "ability_ironmaidens_corruptedblood",
        "icon_candidates": [
          "ability_ironmaidens_corruptedblood"
        ]
      },
      "pve_tooltip": "While you are within your Death and Decay, your physical damage taken is reduced by 8% and your chance to gain Vampiric Strike is increased by 5%.",
      "pvp_tooltip": "While you are within your Death and Decay, your physical damage taken is reduced by 8% and your chance to gain Vampiric Strike is increased by 5%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Desecrate",
      "spell_id": 1234559,
      "node_id": 95048,
      "entry_id": 136836,
      "definition_id": 141599,
      "tree_type": "hero",
      "hero_tree": "San'layn",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "San'layn",
        "subtree_id": 31,
        "node_id": 95048,
        "node_name": "Blood-Soaked Ground / Desecrate",
        "node_type": "choice",
        "pos_x": 15300,
        "pos_y": 1800,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95051
        ],
        "next": [
          95065
        ],
        "entry_id": 136836,
        "entry_max_ranks": 1,
        "definition_id": 141599,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Desecrate",
        "spell_id": 1234559,
        "visible_spell_id": null,
        "icon": "sha_ability_rogue_bloodyeye_nightmare",
        "icon_candidates": [
          "sha_ability_rogue_bloodyeye_nightmare"
        ]
      },
      "pve_tooltip": "Death and Decay deals its damage 100% faster.",
      "pvp_tooltip": "Death and Decay deals its damage 100% faster.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Vampiric Aura",
      "spell_id": 434100,
      "node_id": 95056,
      "entry_id": 117653,
      "definition_id": 122665,
      "tree_type": "hero",
      "hero_tree": "San'layn",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "San'layn",
        "subtree_id": 31,
        "node_id": 95056,
        "node_name": "Vampiric Aura / Bloody Fortitude",
        "node_type": "choice",
        "pos_x": 15900,
        "pos_y": 1800,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95051
        ],
        "next": [
          95046
        ],
        "entry_id": 117653,
        "entry_max_ranks": 1,
        "definition_id": 122665,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Vampiric Aura",
        "spell_id": 434100,
        "visible_spell_id": null,
        "icon": "ability_rogue_vendetta",
        "icon_candidates": [
          "ability_rogue_vendetta"
        ]
      },
      "pve_tooltip": "Your Leech is increased by 2%.\nWhile Lichborne is active, the Leech bonus of this effect is increased by 100%, and it affects 4 allies within 12 yds.",
      "pvp_tooltip": "Your Leech is increased by 2%.\nWhile Lichborne is active, the Leech bonus of this effect is increased by 100%, and it affects 4 allies within 12 yds.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Bloody Fortitude",
      "spell_id": 434136,
      "node_id": 95056,
      "entry_id": 117891,
      "definition_id": 122903,
      "tree_type": "hero",
      "hero_tree": "San'layn",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "San'layn",
        "subtree_id": 31,
        "node_id": 95056,
        "node_name": "Vampiric Aura / Bloody Fortitude",
        "node_type": "choice",
        "pos_x": 15900,
        "pos_y": 1800,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95051
        ],
        "next": [
          95046
        ],
        "entry_id": 117891,
        "entry_max_ranks": 1,
        "definition_id": 122903,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Bloody Fortitude",
        "spell_id": 434136,
        "visible_spell_id": null,
        "icon": "ability_warrior_intensifyrage",
        "icon_candidates": [
          "ability_warrior_intensifyrage"
        ]
      },
      "pve_tooltip": "Icebound Fortitude reduces all damage you take by up to an additional 20% based on your missing health.\nKilling an enemy that yields experience or honor reduces the cooldown of Icebound Fortitude by 3 sec.",
      "pvp_tooltip": "Icebound Fortitude reduces all damage you take by up to an additional 20% based on your missing health.\nKilling an enemy that yields experience or honor reduces the cooldown of Icebound Fortitude by 3 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Thrill of Blood",
      "spell_id": 1265547,
      "node_id": 109737,
      "entry_id": 135995,
      "definition_id": 140750,
      "tree_type": "hero",
      "hero_tree": "San'layn",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "San'layn",
        "subtree_id": 31,
        "node_id": 109737,
        "node_name": "Thrill of Blood",
        "node_type": "single",
        "pos_x": 16500,
        "pos_y": 1800,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95051
        ],
        "next": [
          109738
        ],
        "entry_id": 135995,
        "entry_max_ranks": 1,
        "definition_id": 140750,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Thrill of Blood",
        "spell_id": 1265547,
        "visible_spell_id": null,
        "icon": "spell_nzinsanity_bloodthirst",
        "icon_candidates": [
          "spell_nzinsanity_bloodthirst"
        ]
      },
      "pve_tooltip": "Essence of the Blood Queen additionally increases your Mastery by 1.0% per stack.\nBlood Plague deals 5% increased damage.",
      "pvp_tooltip": "Essence of the Blood Queen additionally increases your Mastery by 1.0% per stack.\nBlood Plague deals 5% increased damage.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Soul Rupture",
      "spell_id": 437161,
      "node_id": 95061,
      "entry_id": 117658,
      "definition_id": 122670,
      "tree_type": "hero",
      "hero_tree": "Deathbringer",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Deathbringer",
        "subtree_id": 33,
        "node_id": 95061,
        "node_name": "Soul Rupture",
        "node_type": "single",
        "pos_x": 7200,
        "pos_y": 2400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95036
        ],
        "next": [
          95032
        ],
        "entry_id": 117658,
        "entry_max_ranks": 1,
        "definition_id": 122670,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Soul Rupture",
        "spell_id": 437161,
        "visible_spell_id": null,
        "icon": "warlock_siphonlife",
        "icon_candidates": [
          "warlock_siphonlife"
        ]
      },
      "pve_tooltip": "100 yd range\nWhen Reaper's Mark explodes, it deals 10% of the damage dealt to nearby enemies.",
      "pvp_tooltip": "100 yd range\nWhen Reaper's Mark explodes, it deals 10% of the damage dealt to nearby enemies.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Grim Reaper",
      "spell_id": 434905,
      "node_id": 95034,
      "entry_id": 117631,
      "definition_id": 122643,
      "tree_type": "hero",
      "hero_tree": "Deathbringer",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Deathbringer",
        "subtree_id": 33,
        "node_id": 95034,
        "node_name": "Grim Reaper",
        "node_type": "single",
        "pos_x": 7800,
        "pos_y": 2400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95058
        ],
        "next": [
          95057
        ],
        "entry_id": 117631,
        "entry_max_ranks": 1,
        "definition_id": 122643,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Grim Reaper",
        "spell_id": 434905,
        "visible_spell_id": null,
        "icon": "spell_misc_zandalari_council_soulswap",
        "icon_candidates": [
          "spell_misc_zandalari_council_soulswap"
        ]
      },
      "pve_tooltip": "Reaper's Mark initial strike grants [3 charges of Bone Shield][Killing Machine].\nReaper's Mark explosion deals up to 30% increased damage based on your target's missing health.",
      "pvp_tooltip": "Reaper's Mark initial strike grants [3 charges of Bone Shield][Killing Machine].\nReaper's Mark explosion deals up to 30% increased damage based on your target's missing health.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Pact of the Deathbringer",
      "spell_id": 440476,
      "node_id": 95035,
      "entry_id": 117632,
      "definition_id": 122644,
      "tree_type": "hero",
      "hero_tree": "Deathbringer",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Deathbringer",
        "subtree_id": 33,
        "node_id": 95035,
        "node_name": "Pact of the Deathbringer / Rune Carved Plates",
        "node_type": "choice",
        "pos_x": 8400,
        "pos_y": 2400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95043
        ],
        "next": [
          95049
        ],
        "entry_id": 117632,
        "entry_max_ranks": 1,
        "definition_id": 122644,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Pact of the Deathbringer",
        "spell_id": 440476,
        "visible_spell_id": null,
        "icon": "ability_revendreth_deathknight",
        "icon_candidates": [
          "ability_revendreth_deathknight"
        ]
      },
      "pve_tooltip": "When you suffer a damaging effect equal to 25% of your maximum health, you instantly cast Death Pact at 50% effectiveness. May only occur every 2 min.\nWhen a Reaper's Mark explodes, the cooldowns of this effect and Death Pact are reduced by 5 sec.",
      "pvp_tooltip": "When you suffer a damaging effect equal to 15% of your maximum health, you instantly cast Death Pact at 50% effectiveness. May only occur every 2 min.\nWhen a Reaper's Mark explodes, the cooldowns of this effect and Death Pact are reduced by 5 sec.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 43,
          "end": 45,
          "old_token": "25",
          "new_token": "15",
          "kind": "percent_value",
          "effect_indexes": [
            1
          ]
        }
      ],
      "diagnostics": [
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "percent_value",
          "old": "25",
          "new": "15"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 440476,
          "source_spell_id": 440476,
          "effect_index": 1,
          "effect_text": "Apply Aura (6) | Dummy (4)",
          "base_value": 25.0,
          "spell_pvp_multiplier": 0.6,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.6,
          "final_pvp_value": 15.0,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [],
          "sources": [
            "simc",
            "drustvar",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "high"
        }
      ],
      "render_effect_count": 1,
      "rank_tooltips": []
    },
    {
      "talent_name": "Rune Carved Plates",
      "spell_id": 440282,
      "node_id": 95035,
      "entry_id": 123420,
      "definition_id": 128258,
      "tree_type": "hero",
      "hero_tree": "Deathbringer",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Deathbringer",
        "subtree_id": 33,
        "node_id": 95035,
        "node_name": "Pact of the Deathbringer / Rune Carved Plates",
        "node_type": "choice",
        "pos_x": 8400,
        "pos_y": 2400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95043
        ],
        "next": [
          95049
        ],
        "entry_id": 123420,
        "entry_max_ranks": 1,
        "definition_id": 128258,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Rune Carved Plates",
        "spell_id": 440282,
        "visible_spell_id": null,
        "icon": "spell_deathknight_runetap",
        "icon_candidates": [
          "spell_deathknight_runetap"
        ]
      },
      "pve_tooltip": "Each Rune spent reduces the magic damage you take by 1.5% and each Rune generated reduces the physical damage you take by 1.5% for 5 sec, up to 5 times.",
      "pvp_tooltip": "Each Rune spent reduces the magic damage you take by 1.5% and each Rune generated reduces the physical damage you take by 1.5% for 5 sec, up to 5 times.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [
        {
          "effect_indexes": [
            1,
            1
          ],
          "status": "NOT_VISIBLE_IN_TOOLTIP",
          "kind": "percent_value",
          "old": 15.0,
          "new": 7.5,
          "full_tooltip_match_count": 0
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 440282,
          "source_spell_id": 440289,
          "effect_index": 1,
          "effect_text": "Apply Aura (6) | Modify Damage Taken% (87)",
          "base_value": -15.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": -7.5,
          "is_final_pvp_modified": true,
          "dependency_path": [
            440282,
            440289
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [],
          "sources": [
            "simc",
            "drustvar",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "high"
        },
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 440282,
          "source_spell_id": 440290,
          "effect_index": 1,
          "effect_text": "Apply Aura (6) | Modify Damage Taken% (87)",
          "base_value": -15.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": -7.5,
          "is_final_pvp_modified": true,
          "dependency_path": [
            440282,
            440290
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [],
          "sources": [
            "simc",
            "drustvar",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "high"
        }
      ],
      "render_effect_count": 2,
      "rank_tooltips": []
    },
    {
      "talent_name": "Deathly Blows",
      "spell_id": 1265932,
      "node_id": 109734,
      "entry_id": 135992,
      "definition_id": 140747,
      "tree_type": "hero",
      "hero_tree": "Deathbringer",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Deathbringer",
        "subtree_id": 33,
        "node_id": 109734,
        "node_name": "Deathly Blows",
        "node_type": "single",
        "pos_x": 9000,
        "pos_y": 2400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109735
        ],
        "next": [
          109733
        ],
        "entry_id": 135992,
        "entry_max_ranks": 1,
        "definition_id": 140747,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Deathly Blows",
        "spell_id": 1265932,
        "visible_spell_id": null,
        "icon": "inv_sword_1h_mawraid_d_02",
        "icon_candidates": [
          "inv_sword_1h_mawraid_d_02"
        ]
      },
      "pve_tooltip": "Death Strike damage increased by 20%.",
      "pvp_tooltip": "Death Strike damage increased by 20%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Infliction of Sorrow",
      "spell_id": 434143,
      "node_id": 95033,
      "entry_id": 117630,
      "definition_id": 122642,
      "tree_type": "hero",
      "hero_tree": "San'layn",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "San'layn",
        "subtree_id": 31,
        "node_id": 95033,
        "node_name": "Infliction of Sorrow",
        "node_type": "single",
        "pos_x": 14700,
        "pos_y": 2400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95064
        ],
        "next": [
          95045
        ],
        "entry_id": 117630,
        "entry_max_ranks": 1,
        "definition_id": 122642,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Infliction of Sorrow",
        "spell_id": 434143,
        "visible_spell_id": null,
        "icon": "ability_warrior_bloodbath",
        "icon_candidates": [
          "ability_warrior_bloodbath"
        ]
      },
      "pve_tooltip": "When Vampiric Strike damages an enemy affected by your Blood Plague, it extends the duration of the disease by 3.0 sec, and deals 20% of the remaining damage to the enemy.",
      "pvp_tooltip": "When Vampiric Strike damages an enemy affected by your Blood Plague, it extends the duration of the disease by 3.0 sec, and deals 20% of the remaining damage to the enemy.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Frenzied Bloodthirst",
      "spell_id": 434075,
      "node_id": 95065,
      "entry_id": 117662,
      "definition_id": 122674,
      "tree_type": "hero",
      "hero_tree": "San'layn",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "San'layn",
        "subtree_id": 31,
        "node_id": 95065,
        "node_name": "Frenzied Bloodthirst",
        "node_type": "single",
        "pos_x": 15300,
        "pos_y": 2400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95048
        ],
        "next": [
          95040
        ],
        "entry_id": 117662,
        "entry_max_ranks": 1,
        "definition_id": 122674,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Frenzied Bloodthirst",
        "spell_id": 434075,
        "visible_spell_id": null,
        "icon": "inv_sulfurelemental_blood",
        "icon_candidates": [
          "inv_sulfurelemental_blood"
        ]
      },
      "pve_tooltip": "Essence of the Blood Queen stacks 2 additional times and increases the damage of your Death Coil and Death Strike by 5% per stack.",
      "pvp_tooltip": "Essence of the Blood Queen stacks 2 additional times and increases the damage of your Death Coil and Death Strike by 2.5% per stack.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 117,
          "end": 118,
          "old_token": "5",
          "new_token": "2.5",
          "kind": "percent_value",
          "effect_indexes": [
            2
          ]
        }
      ],
      "diagnostics": [
        {
          "effect_indexes": [
            2
          ],
          "status": "APPLIED",
          "kind": "percent_value",
          "old": "5",
          "new": "2.5"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 434075,
          "source_spell_id": 434075,
          "effect_index": 2,
          "effect_text": "Apply Aura (6) | Apply Flat Modifier w/ Label (219): Spell Effect 2 (12)",
          "base_value": 5.0,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": null,
          "aura_factor": 0.5,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 2.5,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [
            {
              "aura_spell_id": 1256916,
              "game_effect_id": 1266208,
              "amount_kind": "effect:2",
              "value_pct": -50.0,
              "factor": 0.5,
              "label_id": 4192,
              "build": "12.1.0.69933"
            }
          ],
          "sources": [
            "simc",
            "drustvar"
          ],
          "source_notes": [],
          "confidence": "high"
        }
      ],
      "render_effect_count": 1,
      "rank_tooltips": []
    },
    {
      "talent_name": "The Blood is Life",
      "spell_id": 434260,
      "node_id": 95046,
      "entry_id": 117643,
      "definition_id": 122655,
      "tree_type": "hero",
      "hero_tree": "San'layn",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "San'layn",
        "subtree_id": 31,
        "node_id": 95046,
        "node_name": "The Blood is Life",
        "node_type": "single",
        "pos_x": 15900,
        "pos_y": 2400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95056
        ],
        "next": [
          95055
        ],
        "entry_id": 117643,
        "entry_max_ranks": 1,
        "definition_id": 122655,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "The Blood is Life",
        "spell_id": 434260,
        "visible_spell_id": null,
        "icon": "achievement_nazmir_boss_bloodofghuun",
        "icon_candidates": [
          "achievement_nazmir_boss_bloodofghuun"
        ]
      },
      "pve_tooltip": "Dancing Rune Weapon summons a Blood Beast to attack your enemy for 10 sec.\nEach time the Blood Beast attacks, it stores a portion of the damage dealt. When the Blood Beast dies, it explodes, dealing 15% of the damage accumulated to nearby enemies and healing the Death Knight for the same amount. Deals reduced damage beyond 8 targets.\n(1s cooldown)",
      "pvp_tooltip": "Dancing Rune Weapon summons a Blood Beast to attack your enemy for 10 sec.\nEach time the Blood Beast attacks, it stores a portion of the damage dealt. When the Blood Beast dies, it explodes, dealing 15% of the damage accumulated to nearby enemies and healing the Death Knight for the same amount. Deals reduced damage beyond 8 targets.\n(1s cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Visceral Strength",
      "spell_id": 434157,
      "node_id": 109738,
      "entry_id": 135996,
      "definition_id": 140751,
      "tree_type": "hero",
      "hero_tree": "San'layn",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "San'layn",
        "subtree_id": 31,
        "node_id": 109738,
        "node_name": "Visceral Strength",
        "node_type": "single",
        "pos_x": 16500,
        "pos_y": 2400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109737
        ],
        "next": [
          109736
        ],
        "entry_id": 135996,
        "entry_max_ranks": 1,
        "definition_id": 140751,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Visceral Strength",
        "spell_id": 434157,
        "visible_spell_id": null,
        "icon": "inv_ragnaros_heart",
        "icon_candidates": [
          "inv_ragnaros_heart"
        ]
      },
      "pve_tooltip": "When Crimson Scourge is consumed, you gain 6% Strength for 12 sec.",
      "pvp_tooltip": "When Crimson Scourge is consumed, you gain 6% Strength for 12 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Swift and Painful",
      "spell_id": 443560,
      "node_id": 95032,
      "entry_id": 117629,
      "definition_id": 122641,
      "tree_type": "hero",
      "hero_tree": "Deathbringer",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Deathbringer",
        "subtree_id": 33,
        "node_id": 95032,
        "node_name": "Swift and Painful",
        "node_type": "single",
        "pos_x": 7200,
        "pos_y": 3000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95061
        ],
        "next": [
          95068
        ],
        "entry_id": 117629,
        "entry_max_ranks": 1,
        "definition_id": 122641,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Swift and Painful",
        "spell_id": 443560,
        "visible_spell_id": null,
        "icon": "ability_domination_rune02",
        "icon_candidates": [
          "ability_domination_rune02"
        ]
      },
      "pve_tooltip": "If no enemies are struck by Soul Rupture, you gain 15% Strength for 8 sec.\nWave of Souls is 100% more effective on the main target of your Reaper's Mark.",
      "pvp_tooltip": "If no enemies are struck by Soul Rupture, you gain 15% Strength for 8 sec.\nWave of Souls is 100% more effective on the main target of your Reaper's Mark.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Dark Talons",
      "spell_id": 436687,
      "node_id": 95057,
      "entry_id": 117654,
      "definition_id": 122666,
      "tree_type": "hero",
      "hero_tree": "Deathbringer",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Deathbringer",
        "subtree_id": 33,
        "node_id": 95057,
        "node_name": "Dark Talons / Reaper's Onslaught",
        "node_type": "choice",
        "pos_x": 7800,
        "pos_y": 3000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95034
        ],
        "next": [
          95068
        ],
        "entry_id": 117654,
        "entry_max_ranks": 1,
        "definition_id": 122666,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Dark Talons",
        "spell_id": 436687,
        "visible_spell_id": null,
        "icon": "inv_shoulder_93",
        "icon_candidates": [
          "inv_shoulder_93"
        ]
      },
      "pve_tooltip": "Marrowrend and Heart Strike have a 25% chance to grant 3 stacks of Icy Talons and increase its maximum stacks by the same amount for 6 sec.\nRunic Power spending abilities count as Shadowfrost while Icy Talons is active.\n(1s cooldown)",
      "pvp_tooltip": "Marrowrend and Heart Strike have a 25% chance to grant 3 stacks of Icy Talons and increase its maximum stacks by the same amount for 6 sec.\nRunic Power spending abilities count as Shadowfrost while Icy Talons is active.\n(1s cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Reaper's Onslaught",
      "spell_id": 469870,
      "node_id": 95057,
      "entry_id": 128266,
      "definition_id": 133073,
      "tree_type": "hero",
      "hero_tree": "Deathbringer",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Deathbringer",
        "subtree_id": 33,
        "node_id": 95057,
        "node_name": "Dark Talons / Reaper's Onslaught",
        "node_type": "choice",
        "pos_x": 7800,
        "pos_y": 3000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95034
        ],
        "next": [
          95068
        ],
        "entry_id": 128266,
        "entry_max_ranks": 1,
        "definition_id": 133073,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Reaper's Onslaught",
        "spell_id": 469870,
        "visible_spell_id": null,
        "icon": "ability_demonhunter_soulcleave2",
        "icon_candidates": [
          "ability_demonhunter_soulcleave2"
        ]
      },
      "pve_tooltip": "Reduces the cooldown of Reaper's Mark by 15 sec, but the amount of Marrowrends empowered by Exterminate is reduced by 1.",
      "pvp_tooltip": "Reduces the cooldown of Reaper's Mark by 15 sec, but the amount of Marrowrends empowered by Exterminate is reduced by 1.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Death's Messenger",
      "spell_id": 437122,
      "node_id": 95049,
      "entry_id": 117646,
      "definition_id": 122658,
      "tree_type": "hero",
      "hero_tree": "Deathbringer",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Deathbringer",
        "subtree_id": 33,
        "node_id": 95049,
        "node_name": "Death's Messenger / Expelling Shield",
        "node_type": "choice",
        "pos_x": 8400,
        "pos_y": 3000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95035
        ],
        "next": [
          95068
        ],
        "entry_id": 117646,
        "entry_max_ranks": 1,
        "definition_id": 122658,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Death's Messenger",
        "spell_id": 437122,
        "visible_spell_id": null,
        "icon": "ability_argus_deathfog",
        "icon_candidates": [
          "ability_argus_deathfog"
        ]
      },
      "pve_tooltip": "Reduces the cooldowns of Lichborne and Raise Dead by 30 sec.",
      "pvp_tooltip": "Reduces the cooldowns of Lichborne and Raise Dead by 30 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Expelling Shield",
      "spell_id": 439948,
      "node_id": 95049,
      "entry_id": 128234,
      "definition_id": 133041,
      "tree_type": "hero",
      "hero_tree": "Deathbringer",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Deathbringer",
        "subtree_id": 33,
        "node_id": 95049,
        "node_name": "Death's Messenger / Expelling Shield",
        "node_type": "choice",
        "pos_x": 8400,
        "pos_y": 3000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95035
        ],
        "next": [
          95068
        ],
        "entry_id": 128234,
        "entry_max_ranks": 1,
        "definition_id": 133041,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Expelling Shield",
        "spell_id": 439948,
        "visible_spell_id": null,
        "icon": "spell_shadow_antimagicshell",
        "icon_candidates": [
          "spell_shadow_antimagicshell"
        ]
      },
      "pve_tooltip": "When an enemy deals direct damage to your Anti-Magic Shell, their cast speed is reduced by 10% for 6 sec.",
      "pvp_tooltip": "When an enemy deals direct damage to your Anti-Magic Shell, their cast speed is reduced by 4% for 6 sec.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 91,
          "end": 93,
          "old_token": "10",
          "new_token": "4",
          "kind": "percent_value",
          "effect_indexes": [
            1
          ]
        }
      ],
      "diagnostics": [
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "percent_value",
          "old": "10",
          "new": "4"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 439948,
          "source_spell_id": 440739,
          "effect_index": 1,
          "effect_text": "Apply Aura (6) | Modify Spell Haste% (355)",
          "base_value": -10.0,
          "spell_pvp_multiplier": 0.4,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.4,
          "final_pvp_value": -4.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            439948,
            440739
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [],
          "sources": [
            "simc",
            "drustvar",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "high"
        }
      ],
      "render_effect_count": 1,
      "rank_tooltips": []
    },
    {
      "talent_name": "Echoing Fury",
      "spell_id": 1265855,
      "node_id": 109733,
      "entry_id": 135991,
      "definition_id": 140746,
      "tree_type": "hero",
      "hero_tree": "Deathbringer",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Deathbringer",
        "subtree_id": 33,
        "node_id": 109733,
        "node_name": "Echoing Fury",
        "node_type": "single",
        "pos_x": 9000,
        "pos_y": 3000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109734
        ],
        "next": [
          95068
        ],
        "entry_id": 135991,
        "entry_max_ranks": 1,
        "definition_id": 140746,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Echoing Fury",
        "spell_id": 1265855,
        "visible_spell_id": null,
        "icon": "spell_fire_blueflamebreath",
        "icon_candidates": [
          "spell_fire_blueflamebreath"
        ]
      },
      "pve_tooltip": "Reaper's Mark deals 5% increased damage.\nCasting Dancing Rune Weapon grants 1 stack of Exterminate with 100% first scythe and 100% second scythe effectiveness.",
      "pvp_tooltip": "Reaper's Mark deals 5% increased damage.\nCasting Dancing Rune Weapon grants 1 stack of Exterminate with 100% first scythe and 100% second scythe effectiveness.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Inevitable",
      "spell_id": 1280658,
      "node_id": 95045,
      "entry_id": 117642,
      "definition_id": 122654,
      "tree_type": "hero",
      "hero_tree": "San'layn",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "San'layn",
        "subtree_id": 31,
        "node_id": 95045,
        "node_name": "Inevitable",
        "node_type": "single",
        "pos_x": 14700,
        "pos_y": 3000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95033
        ],
        "next": [
          95053
        ],
        "entry_id": 117642,
        "entry_max_ranks": 1,
        "definition_id": 122654,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Inevitable",
        "spell_id": 1280658,
        "visible_spell_id": null,
        "icon": "spell_warlock_demonsoul",
        "icon_candidates": [
          "spell_warlock_demonsoul"
        ]
      },
      "pve_tooltip": "Blood Plague deals up to 30% increased damage based on the target's missing health.",
      "pvp_tooltip": "Blood Plague deals up to 30% increased damage based on the target's missing health.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [
        {
          "effect_indexes": [
            1
          ],
          "status": "OTHER_SPEC_BRANCH",
          "kind": "percent_value",
          "old": 30.0,
          "new": 60.0,
          "full_tooltip_match_count": 1
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 1280658,
          "source_spell_id": 1280658,
          "effect_index": 1,
          "effect_text": "Apply Aura (6) | Dummy (4)",
          "base_value": 30.0,
          "spell_pvp_multiplier": 2.0,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 2.0,
          "final_pvp_value": 60.0,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [],
          "sources": [
            "simc",
            "drustvar",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "high"
        }
      ],
      "render_effect_count": 1,
      "rank_tooltips": []
    },
    {
      "talent_name": "Incite Terror",
      "spell_id": 434151,
      "node_id": 95040,
      "entry_id": 117637,
      "definition_id": 122649,
      "tree_type": "hero",
      "hero_tree": "San'layn",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "San'layn",
        "subtree_id": 31,
        "node_id": 95040,
        "node_name": "Incite Terror",
        "node_type": "single",
        "pos_x": 15300,
        "pos_y": 3000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95065
        ],
        "next": [
          95053
        ],
        "entry_id": 117637,
        "entry_max_ranks": 1,
        "definition_id": 122649,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Incite Terror",
        "spell_id": 434151,
        "visible_spell_id": null,
        "icon": "ability_warlock_improveddemonictactics",
        "icon_candidates": [
          "ability_warlock_improveddemonictactics"
        ]
      },
      "pve_tooltip": "Vampiric Strike and Heart Strike cause your targets to take 1% increased Shadow damage, up to (1 * 5)% for 15 sec.\nVampiric Strike benefits from Incite Terror at 400% effectiveness.",
      "pvp_tooltip": "Vampiric Strike and Heart Strike cause your targets to take 1% increased Shadow damage, up to (1 * 5)% for 15 sec.\nVampiric Strike benefits from Incite Terror at 400% effectiveness.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Pact of the San'layn",
      "spell_id": 434261,
      "node_id": 95055,
      "entry_id": 117652,
      "definition_id": 122664,
      "tree_type": "hero",
      "hero_tree": "San'layn",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "San'layn",
        "subtree_id": 31,
        "node_id": 95055,
        "node_name": "Pact of the San'layn / Sanguine Scent",
        "node_type": "choice",
        "pos_x": 15900,
        "pos_y": 3000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95046
        ],
        "next": [
          95053
        ],
        "entry_id": 117652,
        "entry_max_ranks": 1,
        "definition_id": 122664,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Pact of the San'layn",
        "spell_id": 434261,
        "visible_spell_id": null,
        "icon": "ability_warrior_bloodnova",
        "icon_candidates": [
          "ability_warrior_bloodnova"
        ]
      },
      "pve_tooltip": "You store 15% of all Shadow damage dealt into your Blood Beast to explode for additional damage when it expires.",
      "pvp_tooltip": "You store 15% of all Shadow damage dealt into your Blood Beast to explode for additional damage when it expires.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Sanguine Scent",
      "spell_id": 434263,
      "node_id": 95055,
      "entry_id": 117893,
      "definition_id": 122905,
      "tree_type": "hero",
      "hero_tree": "San'layn",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "San'layn",
        "subtree_id": 31,
        "node_id": 95055,
        "node_name": "Pact of the San'layn / Sanguine Scent",
        "node_type": "choice",
        "pos_x": 15900,
        "pos_y": 3000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95046
        ],
        "next": [
          95053
        ],
        "entry_id": 117893,
        "entry_max_ranks": 1,
        "definition_id": 122905,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Sanguine Scent",
        "spell_id": 434263,
        "visible_spell_id": null,
        "icon": "ability_deathknight_roilingblood",
        "icon_candidates": [
          "ability_deathknight_roilingblood"
        ]
      },
      "pve_tooltip": "Your Death Coil and Death Strike have a 15% increased chance to trigger Vampiric Strike when damaging enemies below 35% health.",
      "pvp_tooltip": "Your Death Coil and Death Strike have a 15% increased chance to trigger Vampiric Strike when damaging enemies below 35% health.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Transfusion",
      "spell_id": 1265574,
      "node_id": 109736,
      "entry_id": 135994,
      "definition_id": 140749,
      "tree_type": "hero",
      "hero_tree": "San'layn",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "San'layn",
        "subtree_id": 31,
        "node_id": 109736,
        "node_name": "Transfusion",
        "node_type": "single",
        "pos_x": 16500,
        "pos_y": 3000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109738
        ],
        "next": [
          95053
        ],
        "entry_id": 135994,
        "entry_max_ranks": 1,
        "definition_id": 140749,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Transfusion",
        "spell_id": 1265574,
        "visible_spell_id": null,
        "icon": "inv_artifact_bloodoftheassassinated",
        "icon_candidates": [
          "inv_artifact_bloodoftheassassinated"
        ]
      },
      "pve_tooltip": "Vampiric Strike increases the damage of your Dancing Rune Weapons by 20% for 8 sec.\nMultiple applications may overlap.",
      "pvp_tooltip": "Vampiric Strike increases the damage of your Dancing Rune Weapons by 6.8% for 8 sec.\nMultiple applications may overlap.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 69,
          "end": 71,
          "old_token": "20",
          "new_token": "6.8",
          "kind": "percent_value",
          "effect_indexes": [
            3
          ]
        }
      ],
      "diagnostics": [
        {
          "effect_indexes": [
            3
          ],
          "status": "APPLIED",
          "kind": "percent_value",
          "old": "20",
          "new": "6.8"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 1265574,
          "source_spell_id": 1236822,
          "effect_index": 3,
          "effect_text": "Apply Aura (6) | Modify Damage Done% (79)",
          "base_value": 20.0,
          "spell_pvp_multiplier": 0.34,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.34,
          "final_pvp_value": 6.800000000000001,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1265574,
            1236822
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [],
          "sources": [
            "simc",
            "drustvar",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "high"
        },
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 1265574,
          "source_spell_id": 1236260,
          "effect_index": 1,
          "effect_text": "Apply Aura (6) | Apply Percent Modifier w/ Label (218): Spell Effect 1 (3)",
          "base_value": 30.0,
          "spell_pvp_multiplier": 0.33,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.33,
          "final_pvp_value": 9.9,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1265574,
            1236822,
            1236260
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "spelldesc_ref"
          ],
          "aura_rules": [],
          "sources": [
            "simc_generated",
            "drustvar",
            "simc"
          ],
          "source_notes": [],
          "confidence": "high"
        },
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 1265574,
          "source_spell_id": 1236260,
          "effect_index": 2,
          "effect_text": "Apply Aura (6) | Apply Percent Modifier w/ Label (218): Spell Effect 1 (3)",
          "base_value": 50.0,
          "spell_pvp_multiplier": 0.33,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.33,
          "final_pvp_value": 16.5,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1265574,
            1236822,
            1236260
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "spelldesc_ref"
          ],
          "aura_rules": [],
          "sources": [
            "simc_generated",
            "drustvar",
            "simc"
          ],
          "source_notes": [],
          "confidence": "high"
        },
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 1265574,
          "source_spell_id": 1236260,
          "effect_index": 3,
          "effect_text": "Apply Aura (6) | Apply Percent Modifier w/ Label (218): Spell Effect 2 (12)",
          "base_value": 30.0,
          "spell_pvp_multiplier": 0.33,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.33,
          "final_pvp_value": 9.9,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1265574,
            1236822,
            1236260
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "spelldesc_ref"
          ],
          "aura_rules": [],
          "sources": [
            "simc_generated",
            "drustvar",
            "simc"
          ],
          "source_notes": [],
          "confidence": "high"
        },
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 1265574,
          "source_spell_id": 1236260,
          "effect_index": 4,
          "effect_text": "Apply Aura (6) | Apply Percent Modifier w/ Label (218): Spell Effect 2 (12)",
          "base_value": 50.0,
          "spell_pvp_multiplier": 0.33,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.33,
          "final_pvp_value": 16.5,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1265574,
            1236822,
            1236260
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "spelldesc_ref"
          ],
          "aura_rules": [],
          "sources": [
            "simc_generated",
            "drustvar",
            "simc"
          ],
          "source_notes": [],
          "confidence": "high"
        }
      ],
      "render_effect_count": 1,
      "rank_tooltips": []
    },
    {
      "talent_name": "Exterminate",
      "spell_id": 441378,
      "node_id": 95068,
      "entry_id": 117665,
      "definition_id": 122677,
      "tree_type": "hero",
      "hero_tree": "Deathbringer",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Deathbringer",
        "subtree_id": 33,
        "node_id": 95068,
        "node_name": "Exterminate",
        "node_type": "single",
        "pos_x": 8100,
        "pos_y": 3600,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95057,
          95032,
          95049,
          109733
        ],
        "next": [],
        "entry_id": 117665,
        "entry_max_ranks": 1,
        "definition_id": 122677,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Exterminate",
        "spell_id": 441378,
        "visible_spell_id": null,
        "icon": "inv_polearm_2h_titanargus_d_01",
        "icon_candidates": [
          "inv_polearm_2h_titanargus_d_01"
        ]
      },
      "pve_tooltip": "After Reaper's Mark explodes, your next 2 Marrowrends cost 1 Rune and summon 2 scythes to strike your enemies.\nThe first scythe strikes your target for (1287.81% of Attack Power) Shadowfrost damage and the second scythe strikes all enemies around your target for (572.424% of Attack Power) Shadowfrost damage[and applies Frost Fever]. Deals reduced damage beyond 8 targets.",
      "pvp_tooltip": "After Reaper's Mark explodes, your next 2 Marrowrends cost 1 Rune and summon 2 scythes to strike your enemies.\nThe first scythe strikes your target for (901.467% of Attack Power) Shadowfrost damage and the second scythe strikes all enemies around your target for (400.6968% of Attack Power) Shadowfrost damage[and applies Frost Fever]. Deals reduced damage beyond 8 targets.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 153,
          "end": 160,
          "old_token": "1287.81",
          "new_token": "901.467",
          "kind": "attack_power_coefficient",
          "effect_indexes": [
            1
          ]
        },
        {
          "start": 264,
          "end": 271,
          "old_token": "572.424",
          "new_token": "400.6968",
          "kind": "attack_power_coefficient",
          "effect_indexes": [
            1
          ]
        }
      ],
      "diagnostics": [
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "attack_power_coefficient",
          "old": "1287.81",
          "new": "901.467"
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "attack_power_coefficient",
          "old": "572.424",
          "new": "400.6968"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 12.8781,
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 441378,
          "source_spell_id": 441424,
          "effect_index": 1,
          "effect_text": "School Damage (2): shadowfrost (AP mod: 12.8781)",
          "base_value": null,
          "spell_pvp_multiplier": 0.7,
          "amount_kind": "direct",
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.7,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            441378,
            441424
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [],
          "sources": [
            "simc",
            "drustvar",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "high"
        },
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 4.40205,
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 441378,
          "source_spell_id": 441424,
          "effect_index": 2,
          "effect_text": "School Damage (2): shadowfrost (AP mod: 4.40205)",
          "base_value": null,
          "spell_pvp_multiplier": 0.85,
          "amount_kind": "direct",
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.85,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            441378,
            441424
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [],
          "sources": [
            "simc",
            "drustvar",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "high"
        },
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 5.72424,
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 441378,
          "source_spell_id": 441426,
          "effect_index": 1,
          "effect_text": "School Damage (2): shadowfrost (AP mod: 5.72424)",
          "base_value": null,
          "spell_pvp_multiplier": 0.7,
          "amount_kind": "direct",
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.7,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            441378,
            441426
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [],
          "sources": [
            "simc",
            "drustvar",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "high"
        },
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 1.78008,
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 441378,
          "source_spell_id": 441426,
          "effect_index": 2,
          "effect_text": "School Damage (2): shadowfrost (AP mod: 1.78008)",
          "base_value": null,
          "spell_pvp_multiplier": 0.85,
          "amount_kind": "direct",
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.85,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            441378,
            441426
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [],
          "sources": [
            "simc",
            "drustvar",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "high"
        }
      ],
      "render_effect_count": 2,
      "rank_tooltips": []
    },
    {
      "talent_name": "Gift of the San'layn",
      "spell_id": 434152,
      "node_id": 95053,
      "entry_id": 117650,
      "definition_id": 122662,
      "tree_type": "hero",
      "hero_tree": "San'layn",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-10-08T20:33:15.854Z",
        "content_hash": "4ef7246f73d3b95ffd6a3750f7c8aac0",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Blood",
        "spec_id": 250,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "San'layn",
        "subtree_id": 31,
        "node_id": 95053,
        "node_name": "Gift of the San'layn",
        "node_type": "single",
        "pos_x": 15600,
        "pos_y": 3600,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95040,
          95045,
          95055,
          109736
        ],
        "next": [],
        "entry_id": 117650,
        "entry_max_ranks": 1,
        "definition_id": 122662,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Gift of the San'layn",
        "spell_id": 434152,
        "visible_spell_id": null,
        "icon": "spell_deathknight_bloodtap",
        "icon_candidates": [
          "spell_deathknight_bloodtap"
        ]
      },
      "pve_tooltip": "While Dancing Rune Weapon is active you gain Gift of the San'layn.\nGift of the San'layn increases the effectiveness of your Essence of the Blood Queen by 200%, and Vampiric Strike replaces your Heart Strike for the duration.",
      "pvp_tooltip": "While Dancing Rune Weapon is active you gain Gift of the San'layn.\nGift of the San'layn increases the effectiveness of your Essence of the Blood Queen by 200%, and Vampiric Strike replaces your Heart Strike for the duration.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    }
  ],
  "abilities": [
    {
      "talent_name": "Chains of Ice",
      "spell_id": 45524,
      "node_id": null,
      "entry_id": null,
      "definition_id": null,
      "tree_type": "ability",
      "hero_tree": null,
      "tree_data": {
        "spell_id": 45524,
        "talent_name": "Chains of Ice",
        "tree_type": "ability",
        "entry_type": "ability",
        "passive": false,
        "class_id": 6,
        "spec_id": 250,
        "source": "simc_exact_build_spellbook",
        "wow_build": "12.1.0.69933",
        "icon": "spell_frost_chainsofice",
        "icon_candidates": [
          "spell_frost_chainsofice"
        ]
      },
      "pve_tooltip": "1 Rune / -10 Runic Power\n30 yd range\nInstant\nShackles the target with frozen chains, reducing movement speed by 70% for 8 sec.",
      "pvp_tooltip": "1 Rune / -10 Runic Power\n30 yd range\nInstant\nShackles the target with frozen chains, reducing movement speed by 50% for 8 sec.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 112,
          "end": 114,
          "old_token": "70",
          "new_token": "50",
          "kind": "percent_value",
          "effect_indexes": [
            1
          ]
        }
      ],
      "diagnostics": [
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "percent_value",
          "old": "70",
          "new": "50"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "display_formulas": [
            {
              "old": 70.0,
              "new": 50.0,
              "kind": "percent_value",
              "expression": "$s1",
              "source": "simc_exact_build",
              "build": "12.1.0.69933"
            },
            {
              "old": 70.0,
              "new": 50.0,
              "kind": "percent_value",
              "expression": "$w1",
              "source": "simc_exact_build",
              "build": "12.1.0.69933"
            }
          ],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 45524,
          "source_spell_id": 45524,
          "effect_index": 1,
          "effect_text": "Apply Aura: Decrease Run Speed %",
          "base_value": -70.0,
          "spell_pvp_multiplier": 0.714286,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.714286,
          "final_pvp_value": -50.00002,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [],
          "sources": [
            "wowhead",
            "drustvar",
            "simc"
          ],
          "source_notes": [],
          "confidence": "high"
        }
      ],
      "render_effect_count": 1,
      "rank_tooltips": []
    },
    {
      "talent_name": "Death Coil",
      "spell_id": 47541,
      "node_id": null,
      "entry_id": null,
      "definition_id": null,
      "tree_type": "ability",
      "hero_tree": null,
      "tree_data": {
        "spell_id": 47541,
        "talent_name": "Death Coil",
        "tree_type": "ability",
        "entry_type": "ability",
        "passive": false,
        "class_id": 6,
        "spec_id": 250,
        "source": "simc_exact_build_spellbook",
        "wow_build": "12.1.0.69933",
        "icon": "spell_shadow_deathcoil",
        "icon_candidates": [
          "spell_shadow_deathcoil"
        ]
      },
      "pve_tooltip": "30 Runic Power\n30 yd range\nInstant\nFires a blast of unholy energy at the target, causing (211.812% of Attack Power) Shadow damage to an enemy or healing an Undead ally for (463.75% of Attack Power) health.\nExtends the duration of Dread Plague and Virulent Plague by 1.0 sec.",
      "pvp_tooltip": "30 Runic Power\n30 yd range\nInstant\nFires a blast of unholy energy at the target, causing (271.9242% of Attack Power) Shadow damage to an enemy or healing an Undead ally for (463.75% of Attack Power) health.\nExtends the duration of Dread Plague and Virulent Plague by 1.0 sec.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 90,
          "end": 97,
          "old_token": "211.812",
          "new_token": "271.9242",
          "kind": "attack_power_coefficient",
          "effect_indexes": [
            1
          ]
        }
      ],
      "diagnostics": [
        {
          "effect_indexes": [
            1
          ],
          "status": "NESTED_DEPENDENCY_NOT_VISIBLE",
          "kind": "attack_power_coefficient",
          "old": 184.5,
          "new": 212.17499999999998,
          "full_tooltip_match_count": 0
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "attack_power_coefficient",
          "old": "211.812",
          "new": "271.9242"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 2.11812,
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 47541,
          "source_spell_id": 47632,
          "effect_index": 1,
          "effect_text": "School Damage (Shadow) (AP mod: 2.11812 )",
          "base_value": null,
          "spell_pvp_multiplier": 1.2838,
          "amount_kind": "direct",
          "aura_factor": 1.0,
          "final_pvp_multiplier": 1.2838,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            47541,
            47632
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [],
          "sources": [
            "wowhead",
            "drustvar",
            "simc"
          ],
          "source_notes": [],
          "confidence": "high"
        },
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 0.253568,
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 47541,
          "source_spell_id": 191587,
          "effect_index": 1,
          "effect_text": "Apply Aura (6) | Periodic Damage (3): shadow every 3 seconds | Attributes: Add Target (Dest) Combat Reach to AOE (11) (AP mod: 0.253568)",
          "base_value": null,
          "spell_pvp_multiplier": 0.952,
          "amount_kind": "periodic",
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.952,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            47541,
            77575,
            191587
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "spelldesc_ref"
          ],
          "aura_rules": [],
          "sources": [
            "simc",
            "drustvar",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "high"
        },
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 0.548887,
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 47541,
          "source_spell_id": 1240996,
          "effect_index": 1,
          "effect_text": "Apply Aura (6) | Periodic Damage (3): shadow every 3 seconds | Attributes: Suppress Points Stacking (6) (AP mod: 0.548887)",
          "base_value": null,
          "spell_pvp_multiplier": 0.766,
          "amount_kind": "periodic",
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.766,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            47541,
            77575,
            1240996
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "spelldesc_ref"
          ],
          "aura_rules": [],
          "sources": [
            "simc",
            "drustvar",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "high"
        },
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 1.845,
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 47541,
          "source_spell_id": 1242564,
          "effect_index": 1,
          "effect_text": "School Damage (2): shadow | Attributes: Area Effects Use Target Radius (17) (AP mod: 1.845)",
          "base_value": null,
          "spell_pvp_multiplier": 1.15,
          "amount_kind": "direct",
          "aura_factor": 1.0,
          "final_pvp_multiplier": 1.15,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            47541,
            77575,
            1240996,
            1242564
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "spelldesc_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [],
          "sources": [
            "simc",
            "drustvar",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "high"
        }
      ],
      "render_effect_count": 2,
      "rank_tooltips": []
    },
    {
      "talent_name": "Anti-Magic Shell",
      "spell_id": 48707,
      "node_id": null,
      "entry_id": null,
      "definition_id": null,
      "tree_type": "ability",
      "hero_tree": null,
      "tree_data": {
        "spell_id": 48707,
        "talent_name": "Anti-Magic Shell",
        "tree_type": "ability",
        "entry_type": "ability",
        "passive": false,
        "class_id": 6,
        "spec_id": 250,
        "source": "simc_exact_build_spellbook",
        "wow_build": "12.1.0.69933",
        "icon": "spell_shadow_antimagicshell",
        "icon_candidates": [
          "spell_shadow_antimagicshell"
        ]
      },
      "pve_tooltip": "Instant\n1 min cooldown\nSurrounds you in an Anti-Magic Shell for 5 sec, absorbing up to [Total Health * 30 / 100 * (1 + Versatility) * 1 * 1] magic damage and preventing application of harmful magical effects. Damage absorbed generates Runic Power.",
      "pvp_tooltip": "Instant\n1 min cooldown\nSurrounds you in an Anti-Magic Shell for 5 sec, absorbing up to [Total Health * 30 / 100 * (1 + Versatility) * 1 * 1] magic damage and preventing application of harmful magical effects. Damage absorbed generates Runic Power.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "display_formulas": [],
          "conditional_display_formulas": [],
          "scaled_base_value": null,
          "scaled_final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 48707,
          "source_spell_id": 48707,
          "effect_index": 1,
          "effect_text": "Apply Aura: Absorb Damage (All)",
          "base_value": 0.0,
          "spell_pvp_multiplier": 0.75,
          "amount_kind": "absorb",
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.75,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [],
          "sources": [
            "wowhead",
            "drustvar",
            "simc"
          ],
          "source_notes": [],
          "confidence": "high"
        }
      ],
      "render_effect_count": 0,
      "rank_tooltips": []
    }
  ],
  "fetch_errors": [],
  "serialization": {
    "version": 2,
    "spec_id": 250,
    "node_order": [
      76033,
      76037,
      76039,
      76040,
      76041,
      76042,
      76043,
      76044,
      76045,
      76046,
      76048,
      76050,
      76051,
      76052,
      76053,
      76054,
      76055,
      76056,
      76057,
      76058,
      76059,
      76060,
      76061,
      76064,
      76065,
      76066,
      76067,
      76068,
      76069,
      76071,
      76072,
      76073,
      76074,
      76075,
      76076,
      76078,
      76079,
      76080,
      76081,
      76083,
      76084,
      76085,
      76086,
      76087,
      76088,
      76091,
      76092,
      76093,
      76094,
      76095,
      76096,
      76098,
      76099,
      76100,
      76101,
      76102,
      76103,
      76105,
      76106,
      76108,
      76109,
      76110,
      76112,
      76113,
      76114,
      76115,
      76116,
      76117,
      76118,
      76121,
      76122,
      76123,
      76124,
      76125,
      76126,
      76127,
      76128,
      76129,
      76130,
      76131,
      76132,
      76133,
      76135,
      76137,
      76138,
      76139,
      76140,
      76141,
      76142,
      76143,
      76144,
      76145,
      76146,
      76147,
      76148,
      76149,
      76150,
      76152,
      76155,
      76156,
      76160,
      76162,
      76166,
      76167,
      76168,
      76169,
      76170,
      76171,
      76172,
      76173,
      76174,
      76176,
      76178,
      76179,
      76181,
      76182,
      76184,
      76185,
      76186,
      76187,
      76189,
      76190,
      76191,
      76192,
      76193,
      76194,
      76196,
      76197,
      95032,
      95033,
      95034,
      95035,
      95036,
      95037,
      95040,
      95041,
      95042,
      95043,
      95044,
      95045,
      95046,
      95047,
      95048,
      95049,
      95051,
      95053,
      95054,
      95055,
      95056,
      95057,
      95058,
      95059,
      95060,
      95061,
      95062,
      95063,
      95064,
      95065,
      95066,
      95067,
      95068,
      99820,
      99821,
      99822,
      101708,
      101882,
      101929,
      101930,
      101931,
      101932,
      101933,
      102007,
      102008,
      102009,
      102242,
      102243,
      102244,
      102245,
      106790,
      106791,
      108124,
      108126,
      108127,
      108129,
      108130,
      108131,
      108151,
      109258,
      109392,
      109458,
      109733,
      109734,
      109735,
      109736,
      109737,
      109738,
      109739,
      109740,
      109741,
      110029,
      110030,
      110031,
      110260,
      110353,
      110354,
      110400
    ],
    "subtree_nodes": [
      {
        "id": 99822,
        "name": "Deathbringer / San'layn",
        "type": "subtree",
        "posX": 7500,
        "posY": 600,
        "entryNode": true,
        "next": [],
        "prev": [],
        "entries": [
          {
            "id": 123326,
            "type": "subtree",
            "name": "Deathbringer",
            "traitSubTreeId": 33,
            "traitTreeId": 750,
            "atlasMemberName": "talents-heroclass-deathknight-deathbringer",
            "nodes": [
              95062,
              95036,
              95058,
              95043,
              109735,
              95061,
              95034,
              95035,
              109734,
              95032,
              95057,
              95049,
              109733,
              95068
            ]
          },
          {
            "id": 123325,
            "type": "subtree",
            "name": "San'layn",
            "traitSubTreeId": 31,
            "traitTreeId": 750,
            "atlasMemberName": "talents-heroclass-deathknight-sanlayn",
            "nodes": [
              95051,
              95064,
              95048,
              95056,
              109737,
              95033,
              95065,
              95046,
              109738,
              95045,
              95040,
              95055,
              109736,
              95053
            ]
          }
        ]
      }
    ]
  },
  "source_warnings": [
    {
      "source": "wowhead",
      "spell_id": 194662,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=194662'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 194878,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=194878'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 195182,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=195182'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 195679,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=195679'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 205723,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=205723'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 205727,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=205727'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 206930,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=206930'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 206967,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=206967'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 206974,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=206974'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 207104,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=207104'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 207167,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=207167'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 207200,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=207200'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 212552,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=212552'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 219786,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=219786'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 221536,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=221536'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 221562,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=221562'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 273946,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=273946'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 273952,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=273952'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 273953,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=273953'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 276079,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=276079'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 316916,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=316916'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 317133,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=317133'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 317610,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=317610'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 356367,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=356367'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 373930,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=373930'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 374030,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=374030'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 374049,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=374049'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 374261,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=374261'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 374265,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=374265'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 374277,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=374277'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 374383,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=374383'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 374504,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=374504'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 374574,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=374574'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 374598,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=374598'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 374715,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=374715'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 374717,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=374717'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 374747,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=374747'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 377629,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=377629'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 377637,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=377637'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 377668,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=377668'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 378848,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=378848'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 389682,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=389682'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 391386,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=391386'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 391395,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=391395'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 391398,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=391398'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 391458,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=391458'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 391477,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=391477'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 391517,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=391517'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 391546,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=391546'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 391566,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=391566'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 391571,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=391571'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 392566,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=392566'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 433901,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=433901'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 433934,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=433934'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 434028,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=434028'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 434033,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=434033'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 434075,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=434075'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 434100,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=434100'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 434136,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=434136'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 434143,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=434143'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 434151,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=434151'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 434152,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=434152'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 434157,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=434157'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 434260,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=434260'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 434261,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=434261'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 434263,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=434263'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 434905,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=434905'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 436687,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=436687'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 437122,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=437122'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 437161,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=437161'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 439843,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=439843'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 439851,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=439851'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 439948,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=439948'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 440031,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=440031'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 440282,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=440282'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 440476,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=440476'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 441378,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=441378'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 441894,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=441894'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 443560,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=443560'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 454786,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=454786'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 454788,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=454788'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 454822,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=454822'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 454835,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=454835'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 454842,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=454842'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 454851,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=454851'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 457574,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=457574'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 458572,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=458572'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 458752,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=458752'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 458753,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=458753'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 469870,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=469870'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 1234559,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=1234559'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 1263569,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=1263569'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 1263743,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=1263743'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 1263781,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=1263781'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 1263824,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=1263824'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 1264235,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=1264235'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 1264296,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=1264296'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 1264351,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=1264351'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 1264405,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=1264405'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 1264506,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=1264506'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 1265547,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=1265547'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 1265574,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=1265574'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 1265790,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=1265790'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 1265855,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=1265855'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 1265859,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=1265859'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 1265869,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=1265869'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 1265932,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=1265932'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 1266818,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=1266818'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 1266819,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=1266819'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 1267028,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=1267028'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 1279633,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=1279633'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 1280658,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=1280658'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 161797,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=161797'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 191587,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=191587'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 195292,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=195292'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 197147,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=197147'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 316239,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=316239'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 317898,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=317898'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 374721,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=374721'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 392490,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=392490'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 433895,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=433895'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 435802,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=435802'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 436304,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=436304'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 440289,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=440289'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 440290,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=440290'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 440739,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=440739'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 441424,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=441424'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 441426,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=441426'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 454863,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=454863'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 1229376,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=1229376'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 1236260,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=1236260'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 1236822,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=1236822'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 1240996,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=1240996'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "source": "wowhead",
      "spell_id": 1242564,
      "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=1242564'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    }
  ],
  "source_warnings_complete": true,
  "official_hotfixes": {
    "source": "Blizzard official hotfixes",
    "source_url": "https://news.blizzard.com/en-us/article/24296142",
    "latest_date": "2026-10-06",
    "snapshot_hash": "fd5043d6d8516effc51938cc7f6c9a0a63b7dda77bda23198eaf1cd496e8d93d",
    "applied": [],
    "already_current": [
      {
        "talent_name": "Bind in Darkness",
        "spell_id": 440031,
        "text": "Bind in Darkness now increases Blood Boil damage by 50% (was 30%).",
        "date": "2026-09-22",
        "evidence": {
          "source": "official_class_hotfix_current"
        }
      },
      {
        "talent_name": "Deadly Reach",
        "spell_id": 1264235,
        "text": "Deadly Reach now causes Death Strike now to deal 60% of its damage to 2 nearby enemies (was 75%).",
        "date": "2026-09-22",
        "evidence": {
          "source": "official_class_hotfix_current"
        }
      },
      {
        "talent_name": "Deathly Blows",
        "spell_id": 1265932,
        "text": "Deathly Blows now increases Death Strike damage by 20% (was 12%).",
        "date": "2026-09-22",
        "evidence": {
          "source": "official_class_hotfix_current"
        }
      },
      {
        "talent_name": "Swift and Painful",
        "spell_id": 443560,
        "text": "Swift and Painful now increases Strength by 15% (was 10%).",
        "date": "2026-09-22",
        "evidence": {
          "source": "official_class_hotfix_current"
        }
      }
    ],
    "unresolved": [],
    "ignored_non_talent": [
      {
        "talent_name": "__SPEC_DAMAGE__",
        "text": "All damage increased by 3% in PvP combat.",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Shaman",
          "Enhancement"
        ]
      },
      {
        "talent_name": "__SPEC_DAMAGE__",
        "text": "All damage increased by 5% in PvP combat.",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Rogue",
          "Outlaw"
        ]
      },
      {
        "talent_name": "__SPEC_DAMAGE__",
        "text": "All damage reduced by 4% in PvP combat.",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Rogue",
          "Assassination"
        ]
      },
      {
        "talent_name": "Agony",
        "text": "Agony damage increased by 40% in PvP combat.",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Warlock",
          "Affliction"
        ]
      },
      {
        "talent_name": "Arterial Bleed",
        "text": "Arterial Bleed now increases Rend and Deep Wounds damage by 5% per stack in PvP combat (was 3%).",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Warrior",
          "Arms",
          "Colossus"
        ]
      },
      {
        "talent_name": "Atonement",
        "text": "Atonement healing is no longer increased by 40% in PvP combat.",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Priest",
          "Discipline"
        ]
      },
      {
        "talent_name": "Black Arrow",
        "text": "Black Arrow damage increased by 30% in PvP combat.",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Hunter",
          "Beast Mastery",
          "Dark Ranger"
        ]
      },
      {
        "talent_name": "Burden of Power",
        "text": "Burden of Power now increases Flamestrike damage by 6% (was 3%).",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Mage",
          "Fire",
          "Sunfury"
        ]
      },
      {
        "talent_name": "Celestial Conduit",
        "text": "Celestial Conduit damage increased by 50% in PvP combat.",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Monk",
          "Windwalker",
          "Conduit of the Celestials"
        ]
      },
      {
        "talent_name": "Consume Flame",
        "text": "Consume Flame healing reduced by 30% in PvP combat.",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Evoker",
          "Preservation",
          "Flameshaper"
        ]
      },
      {
        "talent_name": "Cut to the Bone",
        "text": "Cut to the Bone now increases Rend and Deep Wounds damage by 30% in PvP combat (was 15%).",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Warrior",
          "Arms",
          "Colossus"
        ]
      },
      {
        "talent_name": "Dreadful Wound",
        "text": "Dreadful Wound damage increased by 25% in PvP combat.",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Druid",
          "Feral",
          "Druid of the Claw"
        ]
      },
      {
        "talent_name": "Dualcasting Adept",
        "text": "Dualcasting Adept now increases Flamestrike damage by 15% (was 10%).",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Mage",
          "Fire",
          "Frostfire"
        ]
      },
      {
        "talent_name": "Ebon Might",
        "text": "Ebon Might grants 12% primary stat in PvP combat (was 10%).",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Evoker",
          "Augmentation"
        ]
      },
      {
        "talent_name": "Exacerbating Wounds",
        "text": "Exacerbating Wounds increases damage taken from your bleed effects by 10% in PvP combat (was 8%).",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Druid",
          "Feral",
          "Druid of the Claw"
        ]
      },
      {
        "talent_name": "Flurry Strikes",
        "text": "Flurry Strikes damage reduced by 15% in PvP combat.",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Monk",
          "Windwalker",
          "Shado-Pan"
        ]
      },
      {
        "talent_name": "Focused Outburst",
        "text": "Focused Outburst now reduces the cast time of Prayer of Healing by 40% in PvP combat (was 15%).",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Priest",
          "Holy",
          "Archon"
        ]
      },
      {
        "talent_name": "Halo",
        "text": "Halo damage and healing increased by 30% in PvP combat.",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Priest",
          "Holy",
          "Archon"
        ]
      },
      {
        "talent_name": "Hammer of Light",
        "text": "Hammer of Light damage increased by 20%.",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Paladin",
          "Retribution",
          "Templar"
        ]
      },
      {
        "talent_name": "Inevitable",
        "text": "Inevitable now causes plagues to deal up to 60% increased damage based on the target’s missing health (was 30%) in PvP combat.",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Death Knight",
          "Unholy",
          "San’layn"
        ]
      },
      {
        "talent_name": "Infliction of Sorrow",
        "text": "Infliction of Sorrow causes Vampiric Strike to erupt plagues with 75% increased effectiveness (was 30%).",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Death Knight",
          "Unholy",
          "San’layn"
        ]
      },
      {
        "talent_name": "Lava Burst",
        "text": "Lava Burst damage increased by 15% in PvP combat.",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Shaman",
          "Elemental"
        ]
      },
      {
        "talent_name": "Lightning Bolt",
        "text": "Lightning Bolt damage increased by 25% in PvP combat.",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Shaman",
          "Elemental"
        ]
      },
      {
        "talent_name": "Moonlight Chakram",
        "text": "Moonlight Chakram damage reduced by 15% in PvP combat.",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Hunter",
          "Survival",
          "Sentinel"
        ]
      },
      {
        "talent_name": "Practiced Strikes",
        "text": "Practiced Strikes increases the damage of Slam and Mortal Strike by 40% in PvP combat (was 25%).",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Warrior",
          "Arms",
          "Colossus"
        ]
      },
      {
        "talent_name": "Purging Flames",
        "text": "Purging Flames now causes Lava Bursts to fire at 25% effectiveness in PvP combat (was 40%).",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Shaman",
          "Elemental"
        ]
      },
      {
        "talent_name": "Pyroclasm",
        "text": "Pyroclasm now increases the damage of Pyroblast or Flamestrike by 160% in PvP combat (was 180%).",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Mage",
          "Fire"
        ]
      },
      {
        "talent_name": "Ravage",
        "text": "Ravage damage increased by 20% in PvP combat.",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Druid",
          "Feral",
          "Druid of the Claw"
        ]
      },
      {
        "talent_name": "Realized Potential",
        "text": "Realized Potential now increases Flash Heal healing by 20% in PvP combat (was 10%).",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Priest",
          "Holy",
          "Archon"
        ]
      },
      {
        "talent_name": "Reaver’s Mark",
        "text": "Reaver’s Mark now increases your damage to the target by 7% (was 6%).",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Demon Hunter",
          "Havoc",
          "Aldrachi Reaver"
        ]
      },
      {
        "talent_name": "Reaver’s Mark",
        "text": "Reaver’s Mark now increases your damage to the target by 8% (was 7%).",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Demon Hunter",
          "Vengeance",
          "Aldrachi Reaver"
        ]
      },
      {
        "talent_name": "Shadow Word: Death",
        "text": "Shadow Word: Death damage increased by 30% in PvP combat.",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Priest",
          "Shadow"
        ]
      },
      {
        "talent_name": "Swiftmend",
        "text": "Swiftmend healing reduced by 20% in PvP combat.",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Druid",
          "Restoration"
        ]
      },
      {
        "talent_name": "Takedown Hunter",
        "text": "Takedown Hunter damage reduced by 10% in PvP combat.",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Hunter",
          "Survival"
        ]
      },
      {
        "talent_name": "Takedown Pet",
        "text": "Takedown Pet damage reduced by 15% in PvP combat.",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Hunter",
          "Survival"
        ]
      },
      {
        "talent_name": "Thrill of Blood",
        "text": "Thrill of Blood increases Dread Plague damage by 20% (was 10%).",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Death Knight",
          "Unholy",
          "San’layn"
        ]
      },
      {
        "talent_name": "Trick Shots",
        "text": "Trick Shots now causes Aimed Shot or Rapid Fire ricochets to hit for 75% of damage (was 60%).",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Hunter",
          "Marksmanship"
        ]
      },
      {
        "talent_name": "Unstable Affliction",
        "text": "Unstable Affliction damage increased by 10% in PvP combat.",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Warlock",
          "Affliction"
        ]
      },
      {
        "talent_name": "Vampiric Strike",
        "text": "Vampiric Strike damage increased by 100% in PvP combat.",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Death Knight",
          "Unholy",
          "San’layn"
        ]
      },
      {
        "talent_name": "Voltaic Blaze instant",
        "text": "Voltaic Blaze instant damage reduced by 25% in PvP combat.",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Shaman",
          "Elemental"
        ]
      },
      {
        "talent_name": "Chrono Shift",
        "text": "Chrono Shift (PvP Talent) now reduces movement speed by 30% in PvP combat (was 50%).",
        "date": "2026-09-24",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Mage",
          "Arcane"
        ]
      },
      {
        "talent_name": "Consecrated Ground",
        "text": "Consecrated Ground now reduces movement speed by 20% in PvP combat (was 50%).",
        "date": "2026-09-24",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Paladin"
        ]
      },
      {
        "talent_name": "Improved Snaring",
        "text": "Improved Snaring now increases the movement speed reduction of Wing Clip by 10% in PvP combat.",
        "date": "2026-09-24",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Hunter"
        ]
      },
      {
        "talent_name": "Wing Clip",
        "text": "Wing Clip now reduces movement speed by 40% in PvP combat.",
        "date": "2026-09-24",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Hunter"
        ]
      },
      {
        "talent_name": "__SPEC_DAMAGE__",
        "text": "All damage increased by 5% in PvP combat.",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Rogue",
          "Outlaw"
        ]
      },
      {
        "talent_name": "__SPEC_DAMAGE__",
        "text": "All spell and ability damage increased by 8% in PvP combat.",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Evoker",
          "Augmentation"
        ]
      },
      {
        "talent_name": "Absolute Faith",
        "text": "Absolute Faith absorption increased by 113%.",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Priest"
        ]
      },
      {
        "talent_name": "Ancient of Lore: Mass Blooming",
        "text": "Ancient of Lore: Mass Blooming healing increased by 30%.",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Druid",
          "Restoration"
        ]
      },
      {
        "talent_name": "Blightfall",
        "text": "Blightfall now deals 100% of the remaining plague damage (was 200%).",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Death Knight",
          "Unholy"
        ]
      },
      {
        "talent_name": "Bloodstone",
        "text": "Bloodstone duration increased to 18 seconds (was 12 seconds).",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Warlock"
        ]
      },
      {
        "talent_name": "Bonds of Fel",
        "text": "Bonds of Fel damage increased by 100%.",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Warlock"
        ]
      },
      {
        "talent_name": "Call Fel Lord’s Fel Cleave",
        "text": "Call Fel Lord’s Fel Cleave damage increased by 150%.",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Warlock",
          "Demonology"
        ]
      },
      {
        "talent_name": "Call of Al’Akir",
        "text": "Call of Al’Akir now increases the cooldown of Nature’s Swiftness by 20 seconds (was 30 seconds).",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Shaman",
          "Restoration"
        ]
      },
      {
        "talent_name": "Cover of Darkness",
        "text": "Cover of Darkness now increases Darkness duration by 4 seconds (was 2 seconds).",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Demon Hunter"
        ]
      },
      {
        "talent_name": "Dark Simulacrum",
        "text": "Dark Simulacrum (PvP Talent) cooldown reduced to 15 seconds (was 20 seconds).",
        "reason": "OUTSIDE_CLASS_SPEC_CATALOG",
        "mode": "property_absolute",
        "unit": "seconds",
        "property": "cooldown",
        "date": "2026-10-06"
      },
      {
        "talent_name": "Death Chain",
        "text": "Death Chain (PvP Talent) initial damage increased by 500%.",
        "reason": "OUTSIDE_CLASS_SPEC_CATALOG",
        "mode": "relative_increase",
        "unit": "percent",
        "property": null,
        "date": "2026-10-06"
      },
      {
        "talent_name": "Death Chain",
        "text": "Death Chain (PvP Talent) now affects 4 targets (was 3).",
        "reason": "OUTSIDE_CLASS_SPEC_CATALOG",
        "mode": "property_absolute",
        "unit": "count",
        "property": "targets",
        "date": "2026-10-06"
      },
      {
        "talent_name": "Death from Above",
        "text": "Death from Above now increases damage by 30% (was 15%).",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Rogue"
        ]
      },
      {
        "talent_name": "Death’s Cold Embrace",
        "text": "Death’s Cold Embrace (PvP Talent) now increases the damage of Remorseless Winter by 450% (was 400%).",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Death Knight",
          "Frost"
        ]
      },
      {
        "talent_name": "Dire Beast: Hawk",
        "text": "Dire Beast: Hawk (PvP Talent) damage increased by 500% and now deals Nature damage (was Physical).",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Hunter",
          "Beast Mastery"
        ]
      },
      {
        "talent_name": "Dragon Charge",
        "text": "Dragon Charge damage increased by 300%.",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Warrior"
        ]
      },
      {
        "talent_name": "Dreamwalker’s Embrace",
        "text": "Dreamwalker’s Embrace damage i0ncreased by 140%.",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Evoker"
        ]
      },
      {
        "talent_name": "Earth Shield",
        "text": "Earth Shield healing increased by 15% in PvP combat.",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Shaman",
          "Restoration"
        ]
      },
      {
        "talent_name": "Earthen Harmony",
        "text": "Earthen Harmony now causes Earth Shield to reduce damage taken by 8% in PvP combat (was 5%).",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Shaman",
          "Restoration"
        ]
      },
      {
        "talent_name": "Earthen Harmony",
        "text": "Earthen Harmony now increases Earth Shield healing received by 200% based on its target’s missing health (was 150%).",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Shaman",
          "Restoration"
        ]
      },
      {
        "talent_name": "Electrocute",
        "text": "Electrocute damage increased by 100% and is now a rolling periodic.",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Shaman"
        ]
      },
      {
        "talent_name": "Focused Assault",
        "text": "Cooldown reduced to 15 seconds (was 20 seconds).",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Tank Specializations",
          "Increased the effectiveness of Tank specialization PvP talents that apply Focused Assault: Death Knight’s Murderous Intent, Demon Hunter’s Tormentor, Druid’s Alpha Challenge, Monk’s Admonishment, Paladin’s Inquisition, and Warrior’s Oppressor."
        ]
      },
      {
        "talent_name": "Focused Assault",
        "text": "Duration increased to 10 seconds (was 6 seconds).",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Tank Specializations",
          "Increased the effectiveness of Tank specialization PvP talents that apply Focused Assault: Death Knight’s Murderous Intent, Demon Hunter’s Tormentor, Druid’s Alpha Challenge, Monk’s Admonishment, Paladin’s Inquisition, and Warrior’s Oppressor."
        ]
      },
      {
        "talent_name": "Focused Assault",
        "text": "Focused Assault now stacks to 6 times (was 5).",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Tank Specializations",
          "Increased the effectiveness of Tank specialization PvP talents that apply Focused Assault: Death Knight’s Murderous Intent, Demon Hunter’s Tormentor, Druid’s Alpha Challenge, Monk’s Admonishment, Paladin’s Inquisition, and Warrior’s Oppressor."
        ]
      },
      {
        "talent_name": "Focused Assault",
        "text": "Range increased to 15 yards (was 10 yards).",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Tank Specializations",
          "Increased the effectiveness of Tank specialization PvP talents that apply Focused Assault: Death Knight’s Murderous Intent, Demon Hunter’s Tormentor, Druid’s Alpha Challenge, Monk’s Admonishment, Paladin’s Inquisition, and Warrior’s Oppressor."
        ]
      },
      {
        "talent_name": "Frost Bomb",
        "text": "Frost Bomb damage increased by 150%.",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Mage",
          "Frost"
        ]
      },
      {
        "talent_name": "Glass Cannon",
        "text": "Glass Cannon now increases the damage of Fireball, Scorch, and Ignite by 25% (was 20%).",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Mage",
          "Fire"
        ]
      },
      {
        "talent_name": "Healing Sphere",
        "text": "Healing Sphere (PvP Talent) healing increased by 100%.",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Monk",
          "Mistweaver"
        ]
      },
      {
        "talent_name": "Healing Sphere",
        "text": "Healing Sphere (PvP Talent) now allows maximum of 5 Healing Spheres to be active at a time (was 3).",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Monk",
          "Mistweaver"
        ]
      },
      {
        "talent_name": "Hunting Pack",
        "text": "Hunting Pack (PvP Talent) radius increased to 40 yards (was 30 yards).",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Hunter"
        ]
      },
      {
        "talent_name": "Icy Feet",
        "text": "Icy Feet now grants snare immunity for 4 seconds (was 3 seconds).",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Mage",
          "Frost"
        ]
      },
      {
        "talent_name": "Illidan’s Grasp",
        "text": "Illidan’s Grasp damage increased by 50%.",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Demon Hunter",
          "Vengeance"
        ]
      },
      {
        "talent_name": "Illidan’s Grasp",
        "text": "Illidan’s Grasp damage increased by 50%.",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Demon Hunter",
          "Havoc"
        ]
      },
      {
        "talent_name": "Improved Mass Dispel",
        "text": "Improved Mass Dispel reduces the cooldown of Mass Dispel by 75 seconds (was 60 seconds).",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Priest"
        ]
      },
      {
        "talent_name": "Mighty Ox Kick",
        "text": "Mighty Ox Kick (PvP Talent) cooldown reduced to 20 seconds (was 30 seconds).",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Monk"
        ]
      },
      {
        "talent_name": "Moon and Stars",
        "text": "Moon and Stars radius increased by 60%.",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Druid",
          "Balance"
        ]
      },
      {
        "talent_name": "Perpetual Paralysis",
        "text": "Perpetual Paralysis (PvP Talent) now spreads to 3 targets (was 2).",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Monk",
          "Windwalker"
        ]
      },
      {
        "talent_name": "Perpetual Paralysis",
        "text": "Perpetual Paralysis (PvP Talent) spread range increased to 15 yards (was 10 yards).",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Monk",
          "Windwalker"
        ]
      },
      {
        "talent_name": "Price of Progress",
        "text": "Price of Progress (PvP Talent) now causes the Death Knight to be unable to be slowed under 100% of normal speed (was 90%).",
        "reason": "OUTSIDE_CLASS_SPEC_CATALOG",
        "mode": "absolute",
        "unit": "percent",
        "property": null,
        "date": "2026-10-06"
      },
      {
        "talent_name": "Price of Progress",
        "text": "Price of Progress (PvP Talent) now sacrifices 1% health every 1.5 seconds (was 1 second).",
        "reason": "OUTSIDE_CLASS_SPEC_CATALOG",
        "mode": "property_absolute",
        "unit": "seconds",
        "property": "interval",
        "date": "2026-10-06"
      },
      {
        "talent_name": "Seismic Slam",
        "text": "Seismic Slam stuns enemies for 5 seconds (was 4 seconds).",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Evoker",
          "Augmentation"
        ]
      },
      {
        "talent_name": "Spellbreaker",
        "text": "Spellbreaker damage increased by 50%.",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Paladin"
        ]
      },
      {
        "talent_name": "Thick as Thieves",
        "text": "Thick as Thieves duration increased to 10 seconds (was 6 seconds).",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Rogue"
        ]
      },
      {
        "talent_name": "Tireless Pursuit",
        "text": "Tireless Pursuit duration increased to 6 seconds (was 3 seconds).",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Druid",
          "Balance"
        ]
      },
      {
        "talent_name": "Ultimate Retribution",
        "text": "Ultimate Retribution’s duration increased to 20 seconds (was 12 seconds).",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Paladin",
          "Retribution"
        ]
      },
      {
        "talent_name": "World in Flames",
        "text": "World in Flames now empowers Flamestrike to deal up to 75% more damage (was 50%).",
        "date": "2026-10-06",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Mage",
          "Fire"
        ]
      }
    ],
    "external_non_tree": [
      {
        "talent_name": "Price of Progress",
        "text": "Price of Progress (PvP Talent) now causes the Death Knight to be unable to be slowed under 100% of normal speed (was 90%).",
        "reason": "NOT_IN_EXACT_BUILD_CLASS_SPEC_DUMP"
      }
    ]
  },
  "non_tree_hotfix_resolution": {
    "resolved": [],
    "unresolved": [],
    "external": [
      {
        "talent_name": "Price of Progress",
        "text": "Price of Progress (PvP Talent) now causes the Death Knight to be unable to be slowed under 100% of normal speed (was 90%).",
        "reason": "NOT_IN_EXACT_BUILD_CLASS_SPEC_DUMP"
      }
    ]
  },
  "spellbook_inventory": {
    "build": "12.1.0.69933",
    "source_ref": "71a76b73cc4a69189e1f92d72ca5622206f3975d",
    "baseline_spell_ids": [
      3714,
      43265,
      45524,
      47541,
      48265,
      48707,
      49039,
      49576,
      50977,
      51986,
      56222,
      61999,
      77513,
      81136,
      82246,
      161797,
      195292,
      197147,
      316239,
      374721,
      1229376
    ],
    "pvp_spell_ids": [
      45524,
      47541,
      48707
    ],
    "unavailable": [
      {
        "spell_id": 162702,
        "name": "Stat Negation Aura - Strength Tank",
        "reason": "NOT_IN_EXACT_BUILD_CLASS_DUMP"
      }
    ]
  },
  "slug": "death-knight-blood",
  "generated_at": "2026-10-10T01:09:34.462092+00:00",
  "validation": {
    "abilities": 3,
    "abilities_with_pvp_mechanics": 3,
    "talents": 125,
    "changed_tooltips": 16,
    "talents_with_pvp_mechanics": 19,
    "unique_nodes": 113,
    "tree_build": "12.1.0.69933",
    "simc_build": "12.1.0.69933",
    "drustvar_builds": [
      "12.1.0.69933"
    ],
    "verification_status": "VERIFIED",
    "fetch_error_count": 0,
    "source_warning_count": 134,
    "unresolved_count": 0,
    "review_required_count": 0,
    "fetch_error_examples": [],
    "source_warning_examples": [
      {
        "source": "wowhead",
        "spell_id": 194662,
        "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=194662'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
      },
      {
        "source": "wowhead",
        "spell_id": 194878,
        "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=194878'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
      },
      {
        "source": "wowhead",
        "spell_id": 195182,
        "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=195182'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
      },
      {
        "source": "wowhead",
        "spell_id": 195679,
        "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=195679'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
      },
      {
        "source": "wowhead",
        "spell_id": 205723,
        "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=205723'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
      }
    ],
    "unresolved_examples": [],
    "review_required_examples": [],
    "replay_verified": true
  },
  "source_snapshot": {
    "snapshot_hash": "b375902497ebc0704a1234e6b0ff4b6a73d4715611178b475ecc6f74e95ed777",
    "captured_at": "2026-10-10T00:59:12.806640+00:00",
    "parser_hash": "ff1e6d0bf3ebf1044de71348e1337794f4f2545566fdaaf230c0cba00e9aea86",
    "evidence_hash": "4a7b88f69e15d7a5e13d56208cd750bc321795ca4bf0bcfe087a3cd38c616b15"
  },
  "coverage": {
    "schema": 1,
    "effect_count": 44,
    "effects": [
      {
        "key": [
          "abilities",
          45524,
          45524,
          45524,
          1
        ],
        "amount_kind": null,
        "values": {
          "base_value": -70.0,
          "spell_pvp_multiplier": 0.714286,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.714286,
          "final_pvp_value": -50.00002,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "abilities",
          47541,
          47541,
          1240996,
          1
        ],
        "amount_kind": "periodic",
        "values": {
          "base_value": 0,
          "spell_pvp_multiplier": 0.766,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.766,
          "final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 0.548887,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "abilities",
          47541,
          47541,
          1242564,
          1
        ],
        "amount_kind": "direct",
        "values": {
          "base_value": 0,
          "spell_pvp_multiplier": 1.15,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 1.15,
          "final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 1.845,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "abilities",
          47541,
          47541,
          191587,
          1
        ],
        "amount_kind": "periodic",
        "values": {
          "base_value": 0,
          "spell_pvp_multiplier": 0.952,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.952,
          "final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 0.253568,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "abilities",
          47541,
          47541,
          47632,
          1
        ],
        "amount_kind": "direct",
        "values": {
          "base_value": 0,
          "spell_pvp_multiplier": 1.2838,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 1.2838,
          "final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 2.11812,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "abilities",
          48707,
          48707,
          48707,
          1
        ],
        "amount_kind": "absorb",
        "values": {
          "base_value": 0.0,
          "spell_pvp_multiplier": 0.75,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.75,
          "final_pvp_value": 0.0,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117632,
          440476,
          440476,
          1
        ],
        "amount_kind": null,
        "values": {
          "base_value": 25.0,
          "spell_pvp_multiplier": 0.6,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.6,
          "final_pvp_value": 15.0,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117633,
          439851,
          435802,
          1
        ],
        "amount_kind": "direct",
        "values": {
          "base_value": 0,
          "spell_pvp_multiplier": 1.54,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 1.54,
          "final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 2.54304,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117633,
          439851,
          435802,
          2
        ],
        "amount_kind": "direct",
        "values": {
          "base_value": 0,
          "spell_pvp_multiplier": 1.54,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 1.54,
          "final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 0.967079,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117642,
          1280658,
          1280658,
          1
        ],
        "amount_kind": null,
        "values": {
          "base_value": 30.0,
          "spell_pvp_multiplier": 2.0,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 2.0,
          "final_pvp_value": 60.0,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117648,
          433901,
          433895,
          1
        ],
        "amount_kind": "direct",
        "values": {
          "base_value": 0,
          "spell_pvp_multiplier": 2.704,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 2.704,
          "final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 1.69884,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117648,
          433901,
          433895,
          5
        ],
        "amount_kind": "direct",
        "values": {
          "base_value": 0,
          "spell_pvp_multiplier": 1.3,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 1.3,
          "final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 1.13375,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117655,
          441894,
          441894,
          3
        ],
        "amount_kind": null,
        "values": {
          "base_value": -43.0,
          "spell_pvp_multiplier": 1.16279,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 1.16279,
          "final_pvp_value": -49.99997,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117655,
          441894,
          441894,
          4
        ],
        "amount_kind": null,
        "values": {
          "base_value": -43.0,
          "spell_pvp_multiplier": 1.16279,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 1.16279,
          "final_pvp_value": -49.99997,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117655,
          441894,
          441894,
          6
        ],
        "amount_kind": null,
        "values": {
          "base_value": 75.0,
          "spell_pvp_multiplier": 1.33333,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 1.33333,
          "final_pvp_value": 99.99974999999999,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117655,
          441894,
          441894,
          7
        ],
        "amount_kind": null,
        "values": {
          "base_value": 100.0,
          "spell_pvp_multiplier": 0.0,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.0,
          "final_pvp_value": 0.0,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117659,
          439843,
          436304,
          1
        ],
        "amount_kind": "direct",
        "values": {
          "base_value": 0,
          "spell_pvp_multiplier": 0.555,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.555,
          "final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 0.544176,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117659,
          439843,
          436304,
          2
        ],
        "amount_kind": "direct",
        "values": {
          "base_value": 0,
          "spell_pvp_multiplier": 0.554667,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.554667,
          "final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 0.30364,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117659,
          439843,
          439843,
          4
        ],
        "amount_kind": "direct",
        "values": {
          "base_value": 0,
          "spell_pvp_multiplier": 0.8,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.8,
          "final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 2.34,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117662,
          434075,
          434075,
          2
        ],
        "amount_kind": null,
        "values": {
          "base_value": 5.0,
          "spell_pvp_multiplier": 1.0,
          "aura_factor": 0.5,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 2.5,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117665,
          441378,
          441424,
          1
        ],
        "amount_kind": "direct",
        "values": {
          "base_value": 0,
          "spell_pvp_multiplier": 0.7,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.7,
          "final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 12.8781,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117665,
          441378,
          441424,
          2
        ],
        "amount_kind": "direct",
        "values": {
          "base_value": 0,
          "spell_pvp_multiplier": 0.85,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.85,
          "final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 4.40205,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117665,
          441378,
          441426,
          1
        ],
        "amount_kind": "direct",
        "values": {
          "base_value": 0,
          "spell_pvp_multiplier": 0.7,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.7,
          "final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 5.72424,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117665,
          441378,
          441426,
          2
        ],
        "amount_kind": "direct",
        "values": {
          "base_value": 0,
          "spell_pvp_multiplier": 0.85,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.85,
          "final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 1.78008,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          123420,
          440282,
          440289,
          1
        ],
        "amount_kind": null,
        "values": {
          "base_value": -15.0,
          "spell_pvp_multiplier": 0.5,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": -7.5,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          123420,
          440282,
          440290,
          1
        ],
        "amount_kind": null,
        "values": {
          "base_value": -15.0,
          "spell_pvp_multiplier": 0.5,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": -7.5,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          126016,
          454842,
          454842,
          1
        ],
        "amount_kind": null,
        "values": {
          "base_value": -8.0,
          "spell_pvp_multiplier": 0.6,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.6,
          "final_pvp_value": -4.8,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          126016,
          454842,
          454842,
          2
        ],
        "amount_kind": null,
        "values": {
          "base_value": -35.0,
          "spell_pvp_multiplier": 0.29,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.29,
          "final_pvp_value": -10.149999999999999,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          128234,
          439948,
          440739,
          1
        ],
        "amount_kind": null,
        "values": {
          "base_value": -10.0,
          "spell_pvp_multiplier": 0.4,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.4,
          "final_pvp_value": -4.0,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          135994,
          1265574,
          1236260,
          1
        ],
        "amount_kind": null,
        "values": {
          "base_value": 30.0,
          "spell_pvp_multiplier": 0.33,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.33,
          "final_pvp_value": 9.9,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          135994,
          1265574,
          1236260,
          2
        ],
        "amount_kind": null,
        "values": {
          "base_value": 50.0,
          "spell_pvp_multiplier": 0.33,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.33,
          "final_pvp_value": 16.5,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          135994,
          1265574,
          1236260,
          3
        ],
        "amount_kind": null,
        "values": {
          "base_value": 30.0,
          "spell_pvp_multiplier": 0.33,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.33,
          "final_pvp_value": 9.9,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          135994,
          1265574,
          1236260,
          4
        ],
        "amount_kind": null,
        "values": {
          "base_value": 50.0,
          "spell_pvp_multiplier": 0.33,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.33,
          "final_pvp_value": 16.5,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          135994,
          1265574,
          1236822,
          3
        ],
        "amount_kind": null,
        "values": {
          "base_value": 20.0,
          "spell_pvp_multiplier": 0.34,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.34,
          "final_pvp_value": 6.800000000000001,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          136523,
          392566,
          392490,
          1
        ],
        "amount_kind": null,
        "values": {
          "base_value": -30.0,
          "spell_pvp_multiplier": 0.666667,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.666667,
          "final_pvp_value": -20.00001,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          136523,
          392566,
          392490,
          2
        ],
        "amount_kind": null,
        "values": {
          "base_value": -12.0,
          "spell_pvp_multiplier": 0.667,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.667,
          "final_pvp_value": -8.004000000000001,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          96172,
          207167,
          207167,
          2
        ],
        "amount_kind": null,
        "values": {
          "base_value": -60.0,
          "spell_pvp_multiplier": 0.833333,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.833333,
          "final_pvp_value": -49.99998,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          96172,
          207167,
          317898,
          1
        ],
        "amount_kind": null,
        "values": {
          "base_value": -50.0,
          "spell_pvp_multiplier": 0.6,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.6,
          "final_pvp_value": -30.0,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          96174,
          205727,
          205727,
          2
        ],
        "amount_kind": null,
        "values": {
          "base_value": 40.0,
          "spell_pvp_multiplier": 0.5,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 20.0,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          96181,
          454851,
          454863,
          2
        ],
        "amount_kind": null,
        "values": {
          "base_value": -50.0,
          "spell_pvp_multiplier": 0.6,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.6,
          "final_pvp_value": -30.0,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          96182,
          206967,
          206967,
          2
        ],
        "amount_kind": null,
        "values": {
          "base_value": 20.0,
          "spell_pvp_multiplier": 0.5,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 10.0,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          96197,
          48263,
          48263,
          1
        ],
        "amount_kind": null,
        "values": {
          "base_value": 20.0,
          "spell_pvp_multiplier": 0.5,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 10.0,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          96200,
          49998,
          49998,
          1
        ],
        "amount_kind": "direct",
        "values": {
          "base_value": 0,
          "spell_pvp_multiplier": 1.0,
          "aura_factor": 0.7,
          "final_pvp_multiplier": 0.7,
          "final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 1.761,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          96200,
          49998,
          66188,
          1
        ],
        "amount_kind": "direct",
        "values": {
          "base_value": 0,
          "spell_pvp_multiplier": 1.0,
          "aura_factor": 0.7,
          "final_pvp_multiplier": 0.7,
          "final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 0.29835,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      }
    ],
    "semantic_hash": "9721b76374047d18064ad48e664a0ad2081c014d39a449ae9addb464d61747e3",
    "independent_effects": [
      {
        "key": [
          "abilities",
          45524,
          45524,
          45524,
          1
        ],
        "amount_kind": null,
        "values": {
          "base_value": -70.0,
          "spell_pvp_multiplier": 0.714286,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.714286,
          "final_pvp_value": -50.00002,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "abilities",
          47541,
          47541,
          1240996,
          1
        ],
        "amount_kind": "periodic",
        "values": {
          "base_value": 0,
          "spell_pvp_multiplier": 0.766,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.766,
          "final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 0.548887,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "abilities",
          47541,
          47541,
          1242564,
          1
        ],
        "amount_kind": "direct",
        "values": {
          "base_value": 0,
          "spell_pvp_multiplier": 1.15,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 1.15,
          "final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 1.845,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "abilities",
          47541,
          47541,
          191587,
          1
        ],
        "amount_kind": "periodic",
        "values": {
          "base_value": 0,
          "spell_pvp_multiplier": 0.952,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.952,
          "final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 0.253568,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "abilities",
          47541,
          47541,
          47632,
          1
        ],
        "amount_kind": "direct",
        "values": {
          "base_value": 0,
          "spell_pvp_multiplier": 1.2838,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 1.2838,
          "final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 2.11812,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "abilities",
          48707,
          48707,
          48707,
          1
        ],
        "amount_kind": "absorb",
        "values": {
          "base_value": 0.0,
          "spell_pvp_multiplier": 0.75,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.75,
          "final_pvp_value": 0.0,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117632,
          440476,
          440476,
          1
        ],
        "amount_kind": null,
        "values": {
          "base_value": 25.0,
          "spell_pvp_multiplier": 0.6,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.6,
          "final_pvp_value": 15.0,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117633,
          439851,
          435802,
          1
        ],
        "amount_kind": "direct",
        "values": {
          "base_value": 0,
          "spell_pvp_multiplier": 1.54,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 1.54,
          "final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 2.54304,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117633,
          439851,
          435802,
          2
        ],
        "amount_kind": "direct",
        "values": {
          "base_value": 0,
          "spell_pvp_multiplier": 1.54,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 1.54,
          "final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 0.967079,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117642,
          1280658,
          1280658,
          1
        ],
        "amount_kind": null,
        "values": {
          "base_value": 30.0,
          "spell_pvp_multiplier": 2.0,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 2.0,
          "final_pvp_value": 60.0,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117648,
          433901,
          433895,
          1
        ],
        "amount_kind": "direct",
        "values": {
          "base_value": 0,
          "spell_pvp_multiplier": 2.704,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 2.704,
          "final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 1.69884,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117648,
          433901,
          433895,
          5
        ],
        "amount_kind": "direct",
        "values": {
          "base_value": 0,
          "spell_pvp_multiplier": 1.3,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 1.3,
          "final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 1.13375,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117655,
          441894,
          441894,
          3
        ],
        "amount_kind": null,
        "values": {
          "base_value": -43.0,
          "spell_pvp_multiplier": 1.16279,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 1.16279,
          "final_pvp_value": -49.99997,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117655,
          441894,
          441894,
          4
        ],
        "amount_kind": null,
        "values": {
          "base_value": -43.0,
          "spell_pvp_multiplier": 1.16279,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 1.16279,
          "final_pvp_value": -49.99997,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117655,
          441894,
          441894,
          6
        ],
        "amount_kind": null,
        "values": {
          "base_value": 75.0,
          "spell_pvp_multiplier": 1.33333,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 1.33333,
          "final_pvp_value": 99.99974999999999,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117655,
          441894,
          441894,
          7
        ],
        "amount_kind": null,
        "values": {
          "base_value": 100.0,
          "spell_pvp_multiplier": 0.0,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.0,
          "final_pvp_value": 0.0,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117659,
          439843,
          436304,
          1
        ],
        "amount_kind": "direct",
        "values": {
          "base_value": 0,
          "spell_pvp_multiplier": 0.555,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.555,
          "final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 0.544176,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117659,
          439843,
          436304,
          2
        ],
        "amount_kind": "direct",
        "values": {
          "base_value": 0,
          "spell_pvp_multiplier": 0.554667,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.554667,
          "final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 0.30364,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117659,
          439843,
          439843,
          4
        ],
        "amount_kind": "direct",
        "values": {
          "base_value": 0,
          "spell_pvp_multiplier": 0.8,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.8,
          "final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 2.34,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117662,
          434075,
          434075,
          2
        ],
        "amount_kind": null,
        "values": {
          "base_value": 5.0,
          "spell_pvp_multiplier": 1.0,
          "aura_factor": 0.5,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 2.5,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117665,
          441378,
          441424,
          1
        ],
        "amount_kind": "direct",
        "values": {
          "base_value": 0,
          "spell_pvp_multiplier": 0.7,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.7,
          "final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 12.8781,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117665,
          441378,
          441424,
          2
        ],
        "amount_kind": "direct",
        "values": {
          "base_value": 0,
          "spell_pvp_multiplier": 0.85,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.85,
          "final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 4.40205,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117665,
          441378,
          441426,
          1
        ],
        "amount_kind": "direct",
        "values": {
          "base_value": 0,
          "spell_pvp_multiplier": 0.7,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.7,
          "final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 5.72424,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          117665,
          441378,
          441426,
          2
        ],
        "amount_kind": "direct",
        "values": {
          "base_value": 0,
          "spell_pvp_multiplier": 0.85,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.85,
          "final_pvp_value": null,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": 1.78008,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          123420,
          440282,
          440289,
          1
        ],
        "amount_kind": null,
        "values": {
          "base_value": -15.0,
          "spell_pvp_multiplier": 0.5,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": -7.5,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          123420,
          440282,
          440290,
          1
        ],
        "amount_kind": null,
        "values": {
          "base_value": -15.0,
          "spell_pvp_multiplier": 0.5,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": -7.5,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          126016,
          454842,
          454842,
          1
        ],
        "amount_kind": null,
        "values": {
          "base_value": -8.0,
          "spell_pvp_multiplier": 0.6,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.6,
          "final_pvp_value": -4.8,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          126016,
          454842,
          454842,
          2
        ],
        "amount_kind": null,
        "values": {
          "base_value": -35.0,
          "spell_pvp_multiplier": 0.29,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.29,
          "final_pvp_value": -10.149999999999999,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          128234,
          439948,
          440739,
          1
        ],
        "amount_kind": null,
        "values": {
          "base_value": -10.0,
          "spell_pvp_multiplier": 0.4,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.4,
          "final_pvp_value": -4.0,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          135994,
          1265574,
          1236260,
          1
        ],
        "amount_kind": null,
        "values": {
          "base_value": 30.0,
          "spell_pvp_multiplier": 0.33,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.33,
          "final_pvp_value": 9.9,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          135994,
          1265574,
          1236260,
          2
        ],
        "amount_kind": null,
        "values": {
          "base_value": 50.0,
          "spell_pvp_multiplier": 0.33,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.33,
          "final_pvp_value": 16.5,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          135994,
          1265574,
          1236260,
          3
        ],
        "amount_kind": null,
        "values": {
          "base_value": 30.0,
          "spell_pvp_multiplier": 0.33,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.33,
          "final_pvp_value": 9.9,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          135994,
          1265574,
          1236260,
          4
        ],
        "amount_kind": null,
        "values": {
          "base_value": 50.0,
          "spell_pvp_multiplier": 0.33,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.33,
          "final_pvp_value": 16.5,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          135994,
          1265574,
          1236822,
          3
        ],
        "amount_kind": null,
        "values": {
          "base_value": 20.0,
          "spell_pvp_multiplier": 0.34,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.34,
          "final_pvp_value": 6.800000000000001,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          136523,
          392566,
          392490,
          1
        ],
        "amount_kind": null,
        "values": {
          "base_value": -30.0,
          "spell_pvp_multiplier": 0.666667,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.666667,
          "final_pvp_value": -20.00001,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          136523,
          392566,
          392490,
          2
        ],
        "amount_kind": null,
        "values": {
          "base_value": -12.0,
          "spell_pvp_multiplier": 0.667,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.667,
          "final_pvp_value": -8.004000000000001,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          96172,
          207167,
          207167,
          2
        ],
        "amount_kind": null,
        "values": {
          "base_value": -60.0,
          "spell_pvp_multiplier": 0.833333,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.833333,
          "final_pvp_value": -49.99998,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          96172,
          207167,
          317898,
          1
        ],
        "amount_kind": null,
        "values": {
          "base_value": -50.0,
          "spell_pvp_multiplier": 0.6,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.6,
          "final_pvp_value": -30.0,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          96174,
          205727,
          205727,
          2
        ],
        "amount_kind": null,
        "values": {
          "base_value": 40.0,
          "spell_pvp_multiplier": 0.5,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 20.0,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          96181,
          454851,
          454863,
          2
        ],
        "amount_kind": null,
        "values": {
          "base_value": -50.0,
          "spell_pvp_multiplier": 0.6,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.6,
          "final_pvp_value": -30.0,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          96182,
          206967,
          206967,
          2
        ],
        "amount_kind": null,
        "values": {
          "base_value": 20.0,
          "spell_pvp_multiplier": 0.5,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 10.0,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      },
      {
        "key": [
          "talents",
          96197,
          48263,
          48263,
          1
        ],
        "amount_kind": null,
        "values": {
          "base_value": 20.0,
          "spell_pvp_multiplier": 0.5,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 10.0,
          "simc_sp_coefficient": null,
          "simc_ap_coefficient": null,
          "scaled_base_value": null,
          "scaled_final_pvp_value": null
        }
      }
    ],
    "independent_hash": "4d145d4b6e560b3ae72774c04837c339cc5379ec77ed3e815437b61f08a370e9"
  }
};
