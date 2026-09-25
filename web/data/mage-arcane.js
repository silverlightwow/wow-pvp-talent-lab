window.WOW_PVP_DATA = {
  "class_name": "Mage",
  "spec_name": "Arcane",
  "tree_build": "12.1.0.69933",
  "simc_build": "12.1.0.69933",
  "drustvar_builds": [
    "12.1.0.69933"
  ],
  "talents": [
    {
      "talent_name": "Prismatic Barrier",
      "spell_id": 235450,
      "node_id": 62121,
      "entry_id": 80180,
      "definition_id": 85183,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62121,
        "node_name": "Prismatic Barrier",
        "node_type": "single",
        "pos_x": 3900,
        "pos_y": 1500,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": true,
        "free_node": true,
        "prev": [],
        "next": [
          62115,
          62122
        ],
        "entry_id": 80180,
        "entry_max_ranks": 1,
        "definition_id": 85183,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Prismatic Barrier",
        "spell_id": 235450,
        "visible_spell_id": null,
        "icon": "spell_magearmor",
        "icon_candidates": [
          "spell_magearmor"
        ]
      },
      "pve_tooltip": "3% of base mana\nInstant\n30 sec cooldown\n1 Charge\nShields you with an arcane force, absorbing [30 / 100 * Total Health * (1 + Versatility)] damage and reducing magic damage taken by 15% for 1 min.\nThe duration of harmful Magic effects against you is reduced by 25%.",
      "pvp_tooltip": "3% of base mana\nInstant\n30 sec cooldown\n1 Charge\nShields you with an arcane force, absorbing [22.5 / 100 * Total Health * (1 + Versatility)] damage and reducing magic damage taken by 10% for 1 min.\nThe duration of harmful Magic effects against you is reduced by 15%.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 94,
          "end": 96,
          "old_token": "30",
          "new_token": "22.5",
          "kind": "ordinary_value",
          "effect_indexes": [
            2
          ]
        },
        {
          "start": 181,
          "end": 183,
          "old_token": "15",
          "new_token": "10",
          "kind": "percent_value",
          "effect_indexes": [
            3
          ]
        },
        {
          "start": 260,
          "end": 262,
          "old_token": "25",
          "new_token": "15",
          "kind": "percent_value",
          "effect_indexes": [
            4
          ]
        }
      ],
      "diagnostics": [
        {
          "effect_indexes": [
            2
          ],
          "status": "APPLIED",
          "kind": "ordinary_value",
          "old": "30",
          "new": "22.5"
        },
        {
          "effect_indexes": [
            3
          ],
          "status": "APPLIED",
          "kind": "percent_value",
          "old": "15",
          "new": "10"
        },
        {
          "effect_indexes": [
            4
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
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 235450,
          "source_spell_id": 235450,
          "effect_index": 1,
          "effect_text": "Apply Aura: Absorb Damage (Arcane, Fire, Frost, Holy, Nature, Physical, Shadow)",
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
        },
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 235450,
          "source_spell_id": 235450,
          "effect_index": 2,
          "effect_text": "Apply Aura: Dummy (127)",
          "base_value": 30.0,
          "spell_pvp_multiplier": 0.75,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.75,
          "final_pvp_value": 22.5,
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
        },
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 235450,
          "source_spell_id": 235450,
          "effect_index": 3,
          "effect_text": "Apply Aura: Mod % Damage Taken (All)",
          "base_value": -15.0,
          "spell_pvp_multiplier": 0.67,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.67,
          "final_pvp_value": -10.05,
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
        },
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 235450,
          "source_spell_id": 235450,
          "effect_index": 4,
          "effect_text": "Apply Aura: Mod Debuffs Duration % (Magic)",
          "base_value": -25.0,
          "spell_pvp_multiplier": 0.6,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.6,
          "final_pvp_value": -15.0,
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
      "render_effect_count": 3,
      "rank_tooltips": []
    },
    {
      "talent_name": "Alter Time",
      "spell_id": 342245,
      "node_id": 62115,
      "entry_id": 80174,
      "definition_id": 85177,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62115,
        "node_name": "Alter Time",
        "node_type": "single",
        "pos_x": 3300,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62121
        ],
        "next": [
          108654,
          62102
        ],
        "entry_id": 80174,
        "entry_max_ranks": 1,
        "definition_id": 85177,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Alter Time",
        "spell_id": 342245,
        "visible_spell_id": null,
        "icon": "spell_mage_altertime",
        "icon_candidates": [
          "spell_mage_altertime"
        ]
      },
      "pve_tooltip": "1% of base mana\nInstant\n1 min cooldown\nAlters the fabric of time, returning you to your current location and health when cast a second time, or after 10 sec. Effect negated by long distance or death.",
      "pvp_tooltip": "1% of base mana\nInstant\n1 min cooldown\nAlters the fabric of time, returning you to your current location and health when cast a second time, or after 10 sec. Effect negated by long distance or death.",
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
      "talent_name": "Ice Block",
      "spell_id": 45438,
      "node_id": 62122,
      "entry_id": 80181,
      "definition_id": 85184,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62122,
        "node_name": "Ice Block",
        "node_type": "single",
        "pos_x": 4500,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62121
        ],
        "next": [
          62123,
          62107
        ],
        "entry_id": 80181,
        "entry_max_ranks": 1,
        "definition_id": 85184,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Ice Block",
        "spell_id": 45438,
        "visible_spell_id": null,
        "icon": "spell_frost_frost",
        "icon_candidates": [
          "spell_frost_frost"
        ]
      },
      "pve_tooltip": "Instant\n4 min cooldown\n1 Charge\nEncases you in a block of ice, protecting you from all attacks and damage for 10 sec, but during that time you cannot attack, move, or cast spells.\nCauses Hypothermia, preventing you from recasting Ice Block for 30 sec.",
      "pvp_tooltip": "Instant\n4 min cooldown\n1 Charge\nEncases you in a block of ice, protecting you from all attacks and damage for 10 sec, but during that time you cannot attack, move, or cast spells.\nCauses Hypothermia, preventing you from recasting Ice Block for 30 sec.",
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
      "talent_name": "Time Walk",
      "spell_id": 1244087,
      "node_id": 108654,
      "entry_id": 134183,
      "definition_id": 138963,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108654,
        "node_name": "Time Walk / Temporal Realignment",
        "node_type": "choice",
        "pos_x": 2700,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62115
        ],
        "next": [
          62114
        ],
        "entry_id": 134183,
        "entry_max_ranks": 1,
        "definition_id": 138963,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Time Walk",
        "spell_id": 1244087,
        "visible_spell_id": null,
        "icon": "warrior_doubletime",
        "icon_candidates": [
          "warrior_doubletime"
        ]
      },
      "pve_tooltip": "Alter Time resets the cooldown of Blink and Shimmer when you return to your original location.",
      "pvp_tooltip": "Alter Time resets the cooldown of Blink and Shimmer when you return to your original location.",
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
      "talent_name": "Temporal Realignment",
      "spell_id": 1244090,
      "node_id": 108654,
      "entry_id": 134182,
      "definition_id": 138962,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108654,
        "node_name": "Time Walk / Temporal Realignment",
        "node_type": "choice",
        "pos_x": 2700,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62115
        ],
        "next": [
          62114
        ],
        "entry_id": 134182,
        "entry_max_ranks": 1,
        "definition_id": 138962,
        "entry_index": 300,
        "entry_type": "passive",
        "talent_name": "Temporal Realignment",
        "spell_id": 1244090,
        "visible_spell_id": null,
        "icon": "ability_evoker_timedilation",
        "icon_candidates": [
          "ability_evoker_timedilation"
        ]
      },
      "pve_tooltip": "Upon dropping below 25% health, your past self corrects your timeline, casting Alter Time and instantly returning 20% of your maximum health and healing you for an additional 30% over 6 sec.",
      "pvp_tooltip": "Upon dropping below 25% health, your past self corrects your timeline, casting Alter Time and instantly returning 20% of your maximum health and healing you for an additional 30% over 6 sec.",
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
      "talent_name": "Master of Time",
      "spell_id": 342249,
      "node_id": 62102,
      "entry_id": 80159,
      "definition_id": 85162,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62102,
        "node_name": "Master of Time",
        "node_type": "single",
        "pos_x": 3300,
        "pos_y": 2700,
        "max_ranks": 2,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62115
        ],
        "next": [
          62114,
          108660
        ],
        "entry_id": 80159,
        "entry_max_ranks": 2,
        "definition_id": 85162,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Master of Time",
        "spell_id": 342249,
        "visible_spell_id": null,
        "icon": "inv_belt_armor_waistoftime_d_01",
        "icon_candidates": [
          "inv_belt_armor_waistoftime_d_01"
        ]
      },
      "pve_tooltip": "Reduces the cooldown of Alter Time by 10 sec.",
      "pvp_tooltip": "Reduces the cooldown of Alter Time by 10 sec.",
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
          "pve_tooltip": "Reduces the cooldown of Alter Time by 5 sec.",
          "pvp_tooltip": "Reduces the cooldown of Alter Time by 5 sec.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "Reduces the cooldown of Alter Time by 10 sec.",
          "pvp_tooltip": "Reduces the cooldown of Alter Time by 10 sec.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Winter's Protection",
      "spell_id": 382424,
      "node_id": 62123,
      "entry_id": 80182,
      "definition_id": 85185,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62123,
        "node_name": "Winter's Protection",
        "node_type": "single",
        "pos_x": 4500,
        "pos_y": 2700,
        "max_ranks": 2,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62122
        ],
        "next": [
          108660,
          62124
        ],
        "entry_id": 80182,
        "entry_max_ranks": 2,
        "definition_id": 85185,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Winter's Protection",
        "spell_id": 382424,
        "visible_spell_id": null,
        "icon": "spell_ice_rune",
        "icon_candidates": [
          "spell_ice_rune"
        ]
      },
      "pve_tooltip": "The cooldown of Ice Block is reduced by 60 sec.",
      "pvp_tooltip": "The cooldown of Ice Block is reduced by 30 sec.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 40,
          "end": 42,
          "old_token": "60",
          "new_token": "30",
          "kind": "duration_seconds",
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
          "kind": "duration_seconds",
          "old": "60",
          "new": "30"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 382424,
          "source_spell_id": 382424,
          "effect_index": 1,
          "effect_text": "Apply Aura: Mod Cooldown Ms (1560)",
          "base_value": -30000.0,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": null,
          "aura_factor": 0.5,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": -15000.0,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [
            {
              "aura_spell_id": 1256909,
              "game_effect_id": 1352929,
              "amount_kind": "effect:1",
              "value_pct": -50.0,
              "factor": 0.5,
              "label_id": 7158,
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
      "render_effect_count": 1,
      "rank_tooltips": [
        {
          "rank": 1,
          "pve_tooltip": "The cooldown of Ice Block is reduced by 30 sec.",
          "pvp_tooltip": "The cooldown of Ice Block is reduced by 15 sec.",
          "tooltip_changed": true,
          "changes": [
            {
              "start": 40,
              "end": 42,
              "old_token": "30",
              "new_token": "15",
              "kind": "duration_seconds",
              "effect_indexes": [
                1
              ]
            }
          ],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "The cooldown of Ice Block is reduced by 60 sec.",
          "pvp_tooltip": "The cooldown of Ice Block is reduced by 30 sec.",
          "tooltip_changed": true,
          "changes": [
            {
              "start": 40,
              "end": 42,
              "old_token": "60",
              "new_token": "30",
              "kind": "duration_seconds",
              "effect_indexes": [
                1
              ]
            }
          ],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Frost Conditioning",
      "spell_id": 1250315,
      "node_id": 62107,
      "entry_id": 80165,
      "definition_id": 85168,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62107,
        "node_name": "Frost Conditioning",
        "node_type": "single",
        "pos_x": 5100,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62122
        ],
        "next": [
          62124
        ],
        "entry_id": 80165,
        "entry_max_ranks": 1,
        "definition_id": 85168,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Frost Conditioning",
        "spell_id": 1250315,
        "visible_spell_id": null,
        "icon": "spell_frost_icefloes",
        "icon_candidates": [
          "spell_frost_icefloes"
        ]
      },
      "pve_tooltip": "Hypothermia's duration is reduced by 10 sec.",
      "pvp_tooltip": "Hypothermia's duration is reduced by 10 sec.",
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
      "talent_name": "Arcane Warding",
      "spell_id": 383092,
      "node_id": 62114,
      "entry_id": 80173,
      "definition_id": 85176,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62114,
        "node_name": "Arcane Warding",
        "node_type": "single",
        "pos_x": 2700,
        "pos_y": 3300,
        "max_ranks": 2,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62102,
          108654
        ],
        "next": [
          62084,
          62104
        ],
        "entry_id": 80173,
        "entry_max_ranks": 2,
        "definition_id": 85176,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Arcane Warding",
        "spell_id": 383092,
        "visible_spell_id": null,
        "icon": "spell_arcane_arcaneresilience",
        "icon_candidates": [
          "spell_arcane_arcaneresilience"
        ]
      },
      "pve_tooltip": "Reduces magic damage taken by 8%.",
      "pvp_tooltip": "Reduces magic damage taken by 8%.",
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
          "pve_tooltip": "Reduces magic damage taken by 4%.",
          "pvp_tooltip": "Reduces magic damage taken by 4%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "Reduces magic damage taken by 8%.",
          "pvp_tooltip": "Reduces magic damage taken by 8%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Inspired Intellect",
      "spell_id": 458437,
      "node_id": 108660,
      "entry_id": 134190,
      "definition_id": 138970,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108660,
        "node_name": "Inspired Intellect",
        "node_type": "single",
        "pos_x": 3900,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62123,
          62102
        ],
        "next": [
          62104,
          101883,
          62116
        ],
        "entry_id": 134190,
        "entry_max_ranks": 1,
        "definition_id": 138970,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Inspired Intellect",
        "spell_id": 458437,
        "visible_spell_id": null,
        "icon": "spell_holy_arcaneintellect",
        "icon_candidates": [
          "spell_holy_arcaneintellect"
        ]
      },
      "pve_tooltip": "Arcane Intellect grants you an additional 2% Intellect.",
      "pvp_tooltip": "Arcane Intellect grants you an additional 2% Intellect.",
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
      "talent_name": "Mirror Image",
      "spell_id": 55342,
      "node_id": 62124,
      "entry_id": 80183,
      "definition_id": 85186,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62124,
        "node_name": "Mirror Image",
        "node_type": "single",
        "pos_x": 5100,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62107,
          62123
        ],
        "next": [
          62116,
          108662
        ],
        "entry_id": 80183,
        "entry_max_ranks": 1,
        "definition_id": 85186,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Mirror Image",
        "spell_id": 55342,
        "visible_spell_id": null,
        "icon": "spell_magic_lesserinvisibilty",
        "icon_candidates": [
          "spell_magic_lesserinvisibilty"
        ]
      },
      "pve_tooltip": "2% of base mana\nInstant\n2 min cooldown\nCreates 3 copies of you nearby for 15 sec, which cast spells and attack your enemies. While active, you generate significantly reduced threat.\nTaking direct damage will cause one of your images to dissipate.\n(2s cooldown)",
      "pvp_tooltip": "2% of base mana\nInstant\n2 min cooldown\nCreates 3 copies of you nearby for 15 sec, which cast spells and attack your enemies. While active, you generate significantly reduced threat.\nTaking direct damage will cause one of your images to dissipate.\n(2s cooldown)",
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
      "talent_name": "Spellsteal",
      "spell_id": 30449,
      "node_id": 62084,
      "entry_id": 80140,
      "definition_id": 85143,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62084,
        "node_name": "Spellsteal",
        "node_type": "single",
        "pos_x": 2100,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62114
        ],
        "next": [
          110082,
          62105
        ],
        "entry_id": 80140,
        "entry_max_ranks": 1,
        "definition_id": 85143,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Spellsteal",
        "spell_id": 30449,
        "visible_spell_id": null,
        "icon": "spell_arcane_arcane02",
        "icon_candidates": [
          "spell_arcane_arcane02"
        ]
      },
      "pve_tooltip": "21% of base mana\n40 yd range\nInstant\nSteals [Kleptomania: all beneficial magic effects from the target. These effects lasts a maximum of 2 min / a beneficial magic effect from the target. This effect lasts a maximum of 2 min].",
      "pvp_tooltip": "21% of base mana\n40 yd range\nInstant\nSteals [Kleptomania: all beneficial magic effects from the target. These effects lasts a maximum of 2 min / a beneficial magic effect from the target. This effect lasts a maximum of 2 min].",
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
      "talent_name": "Quick Witted",
      "spell_id": 382297,
      "node_id": 62104,
      "entry_id": 80161,
      "definition_id": 85164,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62104,
        "node_name": "Quick Witted",
        "node_type": "single",
        "pos_x": 3300,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108660,
          62114
        ],
        "next": [
          62105,
          110079,
          108661
        ],
        "entry_id": 80161,
        "entry_max_ranks": 1,
        "definition_id": 85164,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Quick Witted",
        "spell_id": 382297,
        "visible_spell_id": null,
        "icon": "ability_priest_surgeofdarkness",
        "icon_candidates": [
          "ability_priest_surgeofdarkness"
        ]
      },
      "pve_tooltip": "Counterspell's cooldown is reduced by 5 sec.",
      "pvp_tooltip": "Counterspell's cooldown is reduced by 5 sec.",
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
      "talent_name": "Dragon's Breath",
      "spell_id": 31661,
      "node_id": 101883,
      "entry_id": 125819,
      "definition_id": 130651,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 101883,
        "node_name": "Dragon's Breath / Supernova",
        "node_type": "choice",
        "pos_x": 3900,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108660
        ],
        "next": [
          108661
        ],
        "entry_id": 125819,
        "entry_max_ranks": 1,
        "definition_id": 130651,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Dragon's Breath",
        "spell_id": 31661,
        "visible_spell_id": null,
        "icon": "inv_misc_head_dragon_01",
        "icon_candidates": [
          "inv_misc_head_dragon_01"
        ]
      },
      "pve_tooltip": "4% of base mana\nInstant\n45 sec cooldown\nEnemies in a 12 yd cone in front of you take (66.99% of Spell Power) Fire damage and are disoriented for 4 sec. Damage will cancel the effect.",
      "pvp_tooltip": "4% of base mana\nInstant\n45 sec cooldown\nEnemies in a 12 yd cone in front of you take (63.6405% of Spell Power) Fire damage and are disoriented for 4 sec. Damage will cancel the effect.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 86,
          "end": 91,
          "old_token": "66.99",
          "new_token": "63.6405",
          "kind": "spell_power_coefficient",
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
          "kind": "spell_power_coefficient",
          "old": "66.99",
          "new": "63.6405"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 31661,
          "source_spell_id": 31661,
          "effect_index": 2,
          "effect_text": "School Damage (Fire) (SP mod: 0.6699)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.95,
          "final_pvp_multiplier": 0.95,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [
            {
              "aura_spell_id": 1256909,
              "game_effect_id": 1264661,
              "amount_kind": "direct",
              "value_pct": -5.0,
              "factor": 0.95,
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
      "render_effect_count": 1,
      "rank_tooltips": []
    },
    {
      "talent_name": "Supernova",
      "spell_id": 157980,
      "node_id": 101883,
      "entry_id": 125818,
      "definition_id": 130650,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 101883,
        "node_name": "Dragon's Breath / Supernova",
        "node_type": "choice",
        "pos_x": 3900,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108660
        ],
        "next": [
          108661
        ],
        "entry_id": 125818,
        "entry_max_ranks": 1,
        "definition_id": 130650,
        "entry_index": 200,
        "entry_type": "active",
        "talent_name": "Supernova",
        "spell_id": 157980,
        "visible_spell_id": null,
        "icon": "spell_mage_supernova",
        "icon_candidates": [
          "spell_mage_supernova"
        ]
      },
      "pve_tooltip": "40 yd range\nInstant\n45 sec cooldown\nPulses arcane energy around the target enemy or ally, dealing (34.5% of Spell Power) Arcane damage to all enemies within 8 yds, and knocking them upward. A primary enemy target will take 100% increased damage.",
      "pvp_tooltip": "40 yd range\nInstant\n45 sec cooldown\nPulses arcane energy around the target enemy or ally, dealing (32.775% of Spell Power) Arcane damage to all enemies within 8 yds, and knocking them upward. A primary enemy target will take 100% increased damage.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 99,
          "end": 103,
          "old_token": "34.5",
          "new_token": "32.775",
          "kind": "spell_power_coefficient",
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
          "kind": "spell_power_coefficient",
          "old": "34.5",
          "new": "32.775"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 157980,
          "source_spell_id": 157980,
          "effect_index": 2,
          "effect_text": "School Damage (Arcane) (SP mod: 0.345)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.95,
          "final_pvp_multiplier": 0.95,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [
            {
              "aura_spell_id": 1256909,
              "game_effect_id": 1264661,
              "amount_kind": "direct",
              "value_pct": -5.0,
              "factor": 0.95,
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
      "render_effect_count": 1,
      "rank_tooltips": []
    },
    {
      "talent_name": "Remove Curse",
      "spell_id": 475,
      "node_id": 62116,
      "entry_id": 80175,
      "definition_id": 85178,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62116,
        "node_name": "Remove Curse",
        "node_type": "single",
        "pos_x": 4500,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108660,
          62124
        ],
        "next": [
          108661,
          110078,
          93524
        ],
        "entry_id": 80175,
        "entry_max_ranks": 1,
        "definition_id": 85178,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Remove Curse",
        "spell_id": 475,
        "visible_spell_id": null,
        "icon": "spell_nature_removecurse",
        "icon_candidates": [
          "spell_nature_removecurse"
        ]
      },
      "pve_tooltip": "1.3% of base mana\n40 yd range\nInstant\n8 sec cooldown\nRemoves all Curses from a friendly target.",
      "pvp_tooltip": "1.3% of base mana\n40 yd range\nInstant\n8 sec cooldown\nRemoves all Curses from a friendly target.",
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
      "talent_name": "Improved Conjuration",
      "spell_id": 1244025,
      "node_id": 108662,
      "entry_id": 134192,
      "definition_id": 138972,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108662,
        "node_name": "Improved Conjuration",
        "node_type": "single",
        "pos_x": 5700,
        "pos_y": 3900,
        "max_ranks": 2,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62124
        ],
        "next": [
          93524
        ],
        "entry_id": 134192,
        "entry_max_ranks": 2,
        "definition_id": 138972,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Improved Conjuration",
        "spell_id": 1244025,
        "visible_spell_id": null,
        "icon": "spell_arcane_focusedpower",
        "icon_candidates": [
          "spell_arcane_focusedpower"
        ]
      },
      "pve_tooltip": "Mirror Image's cooldown is reduced by 60 sec.",
      "pvp_tooltip": "Mirror Image's cooldown is reduced by 30 sec.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 38,
          "end": 40,
          "old_token": "60",
          "new_token": "30",
          "kind": "duration_seconds",
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
          "kind": "duration_seconds",
          "old": "60",
          "new": "30"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 1244025,
          "source_spell_id": 1244025,
          "effect_index": 1,
          "effect_text": "Apply Aura: Modifies Cooldown (11)",
          "base_value": -30.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": -15.0,
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
      "rank_tooltips": [
        {
          "rank": 1,
          "pve_tooltip": "Mirror Image's cooldown is reduced by 30 sec.",
          "pvp_tooltip": "Mirror Image's cooldown is reduced by 15 sec.",
          "tooltip_changed": true,
          "changes": [
            {
              "start": 38,
              "end": 40,
              "old_token": "30",
              "new_token": "15",
              "kind": "duration_seconds",
              "effect_indexes": [
                1
              ]
            }
          ],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "Mirror Image's cooldown is reduced by 60 sec.",
          "pvp_tooltip": "Mirror Image's cooldown is reduced by 30 sec.",
          "tooltip_changed": true,
          "changes": [
            {
              "start": 38,
              "end": 40,
              "old_token": "60",
              "new_token": "30",
              "kind": "duration_seconds",
              "effect_indexes": [
                1
              ]
            }
          ],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Improved Spellsteal",
      "spell_id": 1270827,
      "node_id": 110082,
      "entry_id": 136581,
      "definition_id": 141354,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110082,
        "node_name": "Improved Spellsteal",
        "node_type": "single",
        "pos_x": 2100,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62084
        ],
        "next": [
          62110
        ],
        "entry_id": 136581,
        "entry_max_ranks": 1,
        "definition_id": 141354,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Improved Spellsteal",
        "spell_id": 1270827,
        "visible_spell_id": null,
        "icon": "spell_arcane_arcane02",
        "icon_candidates": [
          "spell_arcane_arcane02"
        ]
      },
      "pve_tooltip": "Spellsteal repeats its effect after 4 sec, but it now has a cooldown of 4.0 sec.",
      "pvp_tooltip": "Spellsteal repeats its effect after 4 sec, but it now has a cooldown of 4.0 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [
        {
          "effect_indexes": [
            2
          ],
          "status": "NESTED_DEPENDENCY_NOT_VISIBLE",
          "kind": "spell_power_coefficient",
          "old": 26.8,
          "new": 25.46,
          "full_tooltip_match_count": 0
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 1270827,
          "source_spell_id": 44461,
          "effect_index": 2,
          "effect_text": "School Damage (Fire) (SP mod: 0.268)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.95,
          "final_pvp_multiplier": 0.95,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1270827,
            1270828,
            44457,
            44461
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "spelldesc_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256909,
              "game_effect_id": 1264661,
              "amount_kind": "direct",
              "value_pct": -5.0,
              "factor": 0.95,
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
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 1270827,
          "source_spell_id": 217694,
          "effect_index": 1,
          "effect_text": "Apply Aura: Periodic Damage",
          "base_value": 0.0,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "periodic",
          "aura_factor": 0.95,
          "final_pvp_multiplier": 0.95,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1270827,
            1270828,
            44457,
            217694
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "spelldesc_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256909,
              "game_effect_id": 1264842,
              "amount_kind": "periodic",
              "value_pct": -5.0,
              "factor": 0.95,
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
      "render_effect_count": 1,
      "rank_tooltips": []
    },
    {
      "talent_name": "Shimmer",
      "spell_id": 212653,
      "node_id": 62105,
      "entry_id": 80163,
      "definition_id": 85166,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62105,
        "node_name": "Shimmer / Improved Blink",
        "node_type": "choice",
        "pos_x": 2700,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62104,
          62084
        ],
        "next": [
          62110,
          62125,
          62127
        ],
        "entry_id": 80163,
        "entry_max_ranks": 1,
        "definition_id": 85166,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Shimmer",
        "spell_id": 212653,
        "visible_spell_id": null,
        "icon": "spell_arcane_massdispel",
        "icon_candidates": [
          "spell_arcane_massdispel"
        ]
      },
      "pve_tooltip": "Replaces Blink\n2% of base mana\nInstant\n30 sec cooldown\n1 Charge\nTeleports you 20 yds forward, unless something is in the way. Unaffected by the global cooldown and castable while casting.",
      "pvp_tooltip": "Replaces Blink\n2% of base mana\nInstant\n30 sec cooldown\n1 Charge\nTeleports you 20 yds forward, unless something is in the way. Unaffected by the global cooldown and castable while casting.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [
        {
          "effect_indexes": [
            1
          ],
          "status": "NOT_VISIBLE_IN_TOOLTIP",
          "kind": "percent_value",
          "old": 3.0,
          "new": 1.5,
          "full_tooltip_match_count": 0
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 212653,
          "source_spell_id": 382289,
          "effect_index": 1,
          "effect_text": "Apply Aura: Proc Trigger Spell",
          "base_value": 3.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 1.5,
          "is_final_pvp_modified": true,
          "dependency_path": [
            212653,
            382289
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [],
          "sources": [
            "wowhead",
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
      "talent_name": "Improved Blink",
      "spell_id": 1244340,
      "node_id": 62105,
      "entry_id": 134197,
      "definition_id": 138977,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62105,
        "node_name": "Shimmer / Improved Blink",
        "node_type": "choice",
        "pos_x": 2700,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62104,
          62084
        ],
        "next": [
          62110,
          62125,
          62127
        ],
        "entry_id": 134197,
        "entry_max_ranks": 1,
        "definition_id": 138977,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Improved Blink",
        "spell_id": 1244340,
        "visible_spell_id": null,
        "icon": "spell_arcane_blink",
        "icon_candidates": [
          "spell_arcane_blink"
        ]
      },
      "pve_tooltip": "[Shimmer / Blink]'s cooldown is reduced by 2 sec.",
      "pvp_tooltip": "[Shimmer / Blink]'s cooldown is reduced by 1 sec.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 43,
          "end": 44,
          "old_token": "2",
          "new_token": "1",
          "kind": "duration_seconds",
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
          "kind": "duration_seconds",
          "old": "2",
          "new": "1"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 1244340,
          "source_spell_id": 1244340,
          "effect_index": 1,
          "effect_text": "Apply Aura: Mod Cooldown Ms (1446)",
          "base_value": -2000.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": -1000.0,
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
      "talent_name": "Improved Counterspell",
      "spell_id": 1270865,
      "node_id": 110079,
      "entry_id": 136577,
      "definition_id": 141350,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110079,
        "node_name": "Improved Counterspell",
        "node_type": "single",
        "pos_x": 3300,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62104
        ],
        "next": [
          62127
        ],
        "entry_id": 136577,
        "entry_max_ranks": 1,
        "definition_id": 141350,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Improved Counterspell",
        "spell_id": 1270865,
        "visible_spell_id": null,
        "icon": "inv_1115_mage_counterspell",
        "icon_candidates": [
          "inv_1115_mage_counterspell"
        ]
      },
      "pve_tooltip": "Counterspell prevents casting for an additional 1.0 sec.",
      "pvp_tooltip": "Counterspell prevents casting for an additional 1.0 sec.",
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
      "talent_name": "Overflowing Energy",
      "spell_id": 390218,
      "node_id": 108661,
      "entry_id": 134191,
      "definition_id": 138971,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108661,
        "node_name": "Overflowing Energy",
        "node_type": "single",
        "pos_x": 3900,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62116,
          62104,
          101883
        ],
        "next": [
          62127,
          110597,
          62098
        ],
        "entry_id": 134191,
        "entry_max_ranks": 1,
        "definition_id": 138971,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Overflowing Energy",
        "spell_id": 390218,
        "visible_spell_id": null,
        "icon": "spell_arcane_manatap",
        "icon_candidates": [
          "spell_arcane_manatap"
        ]
      },
      "pve_tooltip": "Each time your Arcane Barrage fails to critically strike, it gains 10% increased critical strike chance.\nCritical strike bonus is removed when the affected spell critically strikes.",
      "pvp_tooltip": "Each time your Arcane Barrage fails to critically strike, it gains 10% increased critical strike chance.\nCritical strike bonus is removed when the affected spell critically strikes.",
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
      "talent_name": "Improved Remove Curse",
      "spell_id": 1270847,
      "node_id": 110078,
      "entry_id": 136576,
      "definition_id": 141349,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110078,
        "node_name": "Improved Remove Curse",
        "node_type": "single",
        "pos_x": 4500,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62116
        ],
        "next": [
          62098
        ],
        "entry_id": 136576,
        "entry_max_ranks": 1,
        "definition_id": 141349,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Improved Remove Curse",
        "spell_id": 1270847,
        "visible_spell_id": null,
        "icon": "spell_nature_removecurse",
        "icon_candidates": [
          "spell_nature_removecurse"
        ]
      },
      "pve_tooltip": "Casting Remove Curse on a friendly target also casts it on yourself, but its cooldown is increased by 20 sec.",
      "pvp_tooltip": "Casting Remove Curse on a friendly target also casts it on yourself, but its cooldown is increased by 20 sec.",
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
      "talent_name": "Greater Invisibility",
      "spell_id": 110959,
      "node_id": 93524,
      "entry_id": 115877,
      "definition_id": 120889,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 93524,
        "node_name": "Greater Invisibility",
        "node_type": "single",
        "pos_x": 5100,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62116,
          108662
        ],
        "next": [
          62098,
          62112,
          108659
        ],
        "entry_id": 115877,
        "entry_max_ranks": 1,
        "definition_id": 120889,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Greater Invisibility",
        "spell_id": 110959,
        "visible_spell_id": null,
        "icon": "ability_mage_greaterinvisibility",
        "icon_candidates": [
          "ability_mage_greaterinvisibility"
        ]
      },
      "pve_tooltip": "Instant\n2 min cooldown\nMakes you invisible and untargetable for 20 sec, removing all threat. Any action taken cancels this effect.",
      "pvp_tooltip": "Instant\n2 min cooldown\nMakes you invisible and untargetable for 20 sec, removing all threat. Any action taken cancels this effect.",
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
      "talent_name": "Improved Frost Nova",
      "spell_id": 343183,
      "node_id": 62110,
      "entry_id": 80168,
      "definition_id": 85171,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62110,
        "node_name": "Improved Frost Nova / Ice Ward",
        "node_type": "choice",
        "pos_x": 2100,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62105,
          110082
        ],
        "next": [
          108658
        ],
        "entry_id": 80168,
        "entry_max_ranks": 1,
        "definition_id": 85171,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Improved Frost Nova",
        "spell_id": 343183,
        "visible_spell_id": null,
        "icon": "spell_frost_frostnova",
        "icon_candidates": [
          "spell_frost_frostnova"
        ]
      },
      "pve_tooltip": "Frost Nova duration is increased by 2 sec.",
      "pvp_tooltip": "Frost Nova duration is increased by 2 sec.",
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
      "talent_name": "Ice Ward",
      "spell_id": 205036,
      "node_id": 62110,
      "entry_id": 136466,
      "definition_id": 141239,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62110,
        "node_name": "Improved Frost Nova / Ice Ward",
        "node_type": "choice",
        "pos_x": 2100,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62105,
          110082
        ],
        "next": [
          108658
        ],
        "entry_id": 136466,
        "entry_max_ranks": 1,
        "definition_id": 141239,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Ice Ward",
        "spell_id": 205036,
        "visible_spell_id": null,
        "icon": "spell_frost_frostward",
        "icon_candidates": [
          "spell_frost_frostward"
        ]
      },
      "pve_tooltip": "Frost Nova now has 2 charges.",
      "pvp_tooltip": "Frost Nova now has 2 charges.",
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
      "talent_name": "Captured Thoughts",
      "spell_id": 1270872,
      "node_id": 62125,
      "entry_id": 134184,
      "definition_id": 138964,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62125,
        "node_name": "Captured Thoughts",
        "node_type": "single",
        "pos_x": 2700,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62105
        ],
        "next": [
          108658
        ],
        "entry_id": 134184,
        "entry_max_ranks": 1,
        "definition_id": 138964,
        "entry_index": 300,
        "entry_type": "passive",
        "talent_name": "Captured Thoughts",
        "spell_id": 1270872,
        "visible_spell_id": null,
        "icon": "spell_nature_elementalabsorption",
        "icon_candidates": [
          "spell_nature_elementalabsorption"
        ]
      },
      "pve_tooltip": "The duration of Clearcasting is increased by 10 sec.",
      "pvp_tooltip": "The duration of Clearcasting is increased by 10 sec.",
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
      "talent_name": "Tome of Rhonin",
      "spell_id": 382493,
      "node_id": 62127,
      "entry_id": 80187,
      "definition_id": 85190,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62127,
        "node_name": "Tome of Rhonin",
        "node_type": "single",
        "pos_x": 3300,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62105,
          108661,
          110079
        ],
        "next": [
          108658,
          110081,
          62096
        ],
        "entry_id": 80187,
        "entry_max_ranks": 1,
        "definition_id": 85190,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Tome of Rhonin",
        "spell_id": 382493,
        "visible_spell_id": null,
        "icon": "inv_misc_book_04",
        "icon_candidates": [
          "inv_misc_book_04"
        ]
      },
      "pve_tooltip": "Increases critical strike chance by 2%.",
      "pvp_tooltip": "Increases critical strike chance by 2%.",
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
      "talent_name": "Improved Warding",
      "spell_id": 1297073,
      "node_id": 110597,
      "entry_id": 137410,
      "definition_id": 142170,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110597,
        "node_name": "Improved Warding",
        "node_type": "single",
        "pos_x": 3900,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108661
        ],
        "next": [
          62096
        ],
        "entry_id": 137410,
        "entry_max_ranks": 1,
        "definition_id": 142170,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Improved Warding",
        "spell_id": 1297073,
        "visible_spell_id": null,
        "icon": "inv_cloth_raidmage_p_01helm",
        "icon_candidates": [
          "inv_cloth_raidmage_p_01helm"
        ]
      },
      "pve_tooltip": "Damage taken from area of effect attacks reduced by 4%.",
      "pvp_tooltip": "Damage taken from area of effect attacks reduced by 4%.",
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
      "talent_name": "Tome of Antonidas",
      "spell_id": 382490,
      "node_id": 62098,
      "entry_id": 80155,
      "definition_id": 85158,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62098,
        "node_name": "Tome of Antonidas",
        "node_type": "single",
        "pos_x": 4500,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108661,
          93524,
          110078
        ],
        "next": [
          62096,
          110080,
          108657
        ],
        "entry_id": 80155,
        "entry_max_ranks": 1,
        "definition_id": 85158,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Tome of Antonidas",
        "spell_id": 382490,
        "visible_spell_id": null,
        "icon": "inv_misc_book_18",
        "icon_candidates": [
          "inv_misc_book_18"
        ]
      },
      "pve_tooltip": "Increases Haste by 2%.",
      "pvp_tooltip": "Increases Haste by 2%.",
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
      "talent_name": "Incantation of Swiftness",
      "spell_id": 382293,
      "node_id": 62112,
      "entry_id": 80170,
      "definition_id": 85173,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62112,
        "node_name": "Incantation of Swiftness",
        "node_type": "single",
        "pos_x": 5100,
        "pos_y": 5100,
        "max_ranks": 2,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          93524
        ],
        "next": [
          108657
        ],
        "entry_id": 80170,
        "entry_max_ranks": 2,
        "definition_id": 85173,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Incantation of Swiftness",
        "spell_id": 382293,
        "visible_spell_id": null,
        "icon": "rogue_burstofspeed",
        "icon_candidates": [
          "rogue_burstofspeed"
        ]
      },
      "pve_tooltip": "[Greater Invisibility: Greater]Invisibility increases your movement speed by 40% for 6 sec.",
      "pvp_tooltip": "[Greater Invisibility: Greater]Invisibility increases your movement speed by 20% for 6 sec.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 77,
          "end": 79,
          "old_token": "40",
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
          "old": "40",
          "new": "20"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 382293,
          "source_spell_id": 382293,
          "effect_index": 1,
          "effect_text": "Apply Aura: Dummy",
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
      "rank_tooltips": [
        {
          "rank": 1,
          "pve_tooltip": "[Greater Invisibility: Greater]Invisibility increases your movement speed by 20% for 6 sec.",
          "pvp_tooltip": "[Greater Invisibility: Greater]Invisibility increases your movement speed by 10% for 6 sec.",
          "tooltip_changed": true,
          "changes": [
            {
              "start": 77,
              "end": 79,
              "old_token": "20",
              "new_token": "10",
              "kind": "percent_value",
              "effect_indexes": [
                1
              ]
            }
          ],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "[Greater Invisibility: Greater]Invisibility increases your movement speed by 40% for 6 sec.",
          "pvp_tooltip": "[Greater Invisibility: Greater]Invisibility increases your movement speed by 20% for 6 sec.",
          "tooltip_changed": true,
          "changes": [
            {
              "start": 77,
              "end": 79,
              "old_token": "40",
              "new_token": "20",
              "kind": "percent_value",
              "effect_indexes": [
                1
              ]
            }
          ],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Master of Escape",
      "spell_id": 210476,
      "node_id": 108659,
      "entry_id": 134189,
      "definition_id": 138969,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108659,
        "node_name": "Master of Escape",
        "node_type": "single",
        "pos_x": 5700,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          93524
        ],
        "next": [
          108657
        ],
        "entry_id": 134189,
        "entry_max_ranks": 1,
        "definition_id": 138969,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Master of Escape",
        "spell_id": 210476,
        "visible_spell_id": null,
        "icon": "ability_mage_invisibility",
        "icon_candidates": [
          "ability_mage_invisibility"
        ]
      },
      "pve_tooltip": "Reduces the cooldown of Invisibility by 60 sec.",
      "pvp_tooltip": "Reduces the cooldown of Invisibility by 60 sec.",
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
      "talent_name": "Charm of Aegwynn",
      "spell_id": 1244105,
      "node_id": 108658,
      "entry_id": 134188,
      "definition_id": 138968,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108658,
        "node_name": "Charm of Aegwynn",
        "node_type": "single",
        "pos_x": 2700,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62110,
          62127,
          62125
        ],
        "next": [
          62086,
          62087,
          62129
        ],
        "entry_id": 134188,
        "entry_max_ranks": 1,
        "definition_id": 138968,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Charm of Aegwynn",
        "spell_id": 1244105,
        "visible_spell_id": null,
        "icon": "inv_nerubian_necklace_02_color5",
        "icon_candidates": [
          "inv_nerubian_necklace_02_color5"
        ]
      },
      "pve_tooltip": "The critical strike damage of your spells is increased by 5%.",
      "pvp_tooltip": "The critical strike damage of your spells is increased by 5%.",
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
      "talent_name": "Brainstorm",
      "spell_id": 461261,
      "node_id": 110081,
      "entry_id": 136579,
      "definition_id": 141352,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110081,
        "node_name": "Brainstorm",
        "node_type": "single",
        "pos_x": 3300,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62127
        ],
        "next": [
          62129
        ],
        "entry_id": 136579,
        "entry_max_ranks": 1,
        "definition_id": 141352,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Brainstorm",
        "spell_id": 461261,
        "visible_spell_id": null,
        "icon": "ability_kaztik_dominatemind",
        "icon_candidates": [
          "ability_kaztik_dominatemind"
        ]
      },
      "pve_tooltip": "Gaining Clearcasting increases your Intellect by 1% for 8 sec. Multiple instances may overlap.",
      "pvp_tooltip": "Gaining Clearcasting increases your Intellect by 1% for 8 sec. Multiple instances may overlap.",
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
      "talent_name": "Flow of Time",
      "spell_id": 382268,
      "node_id": 62096,
      "entry_id": 80153,
      "definition_id": 85156,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62096,
        "node_name": "Flow of Time",
        "node_type": "single",
        "pos_x": 3900,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62098,
          62127,
          110597
        ],
        "next": [
          62129,
          62088,
          62100
        ],
        "entry_id": 80153,
        "entry_max_ranks": 1,
        "definition_id": 85156,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Flow of Time",
        "spell_id": 382268,
        "visible_spell_id": null,
        "icon": "spell_arcane_blink",
        "icon_candidates": [
          "spell_arcane_blink"
        ]
      },
      "pve_tooltip": "The cooldowns of Blink and Shimmer are reduced by 3 sec.",
      "pvp_tooltip": "The cooldowns of Blink and Shimmer are reduced by 1.5 sec.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 50,
          "end": 51,
          "old_token": "3",
          "new_token": "1.5",
          "kind": "duration_seconds",
          "effect_indexes": [
            1,
            2
          ]
        }
      ],
      "diagnostics": [
        {
          "effect_indexes": [
            1,
            2
          ],
          "status": "APPLIED",
          "kind": "duration_seconds",
          "old": "3",
          "new": "1.5"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 382268,
          "source_spell_id": 382268,
          "effect_index": 1,
          "effect_text": "Apply Aura: Mod Cooldown Ms (1446)",
          "base_value": -3000.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": -1500.0,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [],
          "sources": [
            "wowhead",
            "simc_generated",
            "simc"
          ],
          "source_notes": [],
          "confidence": "ambiguous"
        },
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 382268,
          "source_spell_id": 382268,
          "effect_index": 2,
          "effect_text": "Apply Aura: Mod Cooldown Ms (1632)",
          "base_value": -3000.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": -1500.0,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [],
          "sources": [
            "wowhead",
            "simc_generated",
            "simc"
          ],
          "source_notes": [],
          "confidence": "ambiguous"
        }
      ],
      "render_effect_count": 2,
      "rank_tooltips": []
    },
    {
      "talent_name": "Mana Confluence",
      "spell_id": 1270845,
      "node_id": 110080,
      "entry_id": 136578,
      "definition_id": 141351,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110080,
        "node_name": "Mana Confluence",
        "node_type": "single",
        "pos_x": 4500,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62098
        ],
        "next": [
          62100
        ],
        "entry_id": 136578,
        "entry_max_ranks": 1,
        "definition_id": 141351,
        "entry_index": 300,
        "entry_type": "passive",
        "talent_name": "Mana Confluence",
        "spell_id": 1270845,
        "visible_spell_id": null,
        "icon": "spell_shaman_blessingoftheeternals",
        "icon_candidates": [
          "spell_shaman_blessingoftheeternals"
        ]
      },
      "pve_tooltip": "Your mana costs are reduced by 5%.",
      "pvp_tooltip": "Your mana costs are reduced by 5%.",
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
      "talent_name": "Charm of Medivh",
      "spell_id": 1244107,
      "node_id": 108657,
      "entry_id": 134187,
      "definition_id": 138967,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108657,
        "node_name": "Charm of Medivh",
        "node_type": "single",
        "pos_x": 5100,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62112,
          108659,
          62098
        ],
        "next": [
          62100,
          62092,
          62091
        ],
        "entry_id": 134187,
        "entry_max_ranks": 1,
        "definition_id": 138967,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Charm of Medivh",
        "spell_id": 1244107,
        "visible_spell_id": null,
        "icon": "inv_nerubian_necklace_02_color1",
        "icon_candidates": [
          "inv_nerubian_necklace_02_color1"
        ]
      },
      "pve_tooltip": "Your Mastery is increased by 3%.",
      "pvp_tooltip": "Your Mastery is increased by 3%.",
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
      "talent_name": "Permafrost Bauble",
      "spell_id": 1265517,
      "node_id": 62086,
      "entry_id": 80142,
      "definition_id": 85145,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62086,
        "node_name": "Permafrost Bauble",
        "node_type": "single",
        "pos_x": 2100,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108658
        ],
        "next": [
          62085
        ],
        "entry_id": 80142,
        "entry_max_ranks": 1,
        "definition_id": 85145,
        "entry_index": 300,
        "entry_type": "passive",
        "talent_name": "Permafrost Bauble",
        "spell_id": 1265517,
        "visible_spell_id": null,
        "icon": "inv_10_dungeonjewelry_primalist_necklace_2_frost",
        "icon_candidates": [
          "inv_10_dungeonjewelry_primalist_necklace_2_frost"
        ]
      },
      "pve_tooltip": "The cooldown of Ice Block and Ice Cold are reduced by 30 sec.",
      "pvp_tooltip": "The cooldown of Ice Block and Ice Cold are reduced by 30 sec.",
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
      "talent_name": "Freezing Cold",
      "spell_id": 386763,
      "node_id": 62087,
      "entry_id": 80143,
      "definition_id": 85146,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62087,
        "node_name": "Freezing Cold / Ice Nova",
        "node_type": "choice",
        "pos_x": 2700,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108658
        ],
        "next": [
          62085
        ],
        "entry_id": 80143,
        "entry_max_ranks": 1,
        "definition_id": 85146,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Freezing Cold",
        "spell_id": 386763,
        "visible_spell_id": null,
        "icon": "spell_frost_glacier",
        "icon_candidates": [
          "spell_frost_glacier"
        ]
      },
      "pve_tooltip": "Enemies hit by Cone of Cold are frozen in place for 5 sec instead of snared.\nWhen your roots expire or are dispelled, your target is snared by 80%, decaying over 3 sec.",
      "pvp_tooltip": "Enemies hit by Cone of Cold are frozen in place for 5 sec instead of snared.\nWhen your roots expire or are dispelled, your target is snared by 70%, decaying over 3 sec.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 143,
          "end": 145,
          "old_token": "80",
          "new_token": "70",
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
          "old": "80",
          "new": "70"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 386763,
          "source_spell_id": 394255,
          "effect_index": 1,
          "effect_text": "Apply Aura: Decrease Run Speed %",
          "base_value": 80.0,
          "spell_pvp_multiplier": 0.875,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.875,
          "final_pvp_value": 70.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            386763,
            394255
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
        }
      ],
      "render_effect_count": 1,
      "rank_tooltips": []
    },
    {
      "talent_name": "Ice Nova",
      "spell_id": 157997,
      "node_id": 62087,
      "entry_id": 134199,
      "definition_id": 138979,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62087,
        "node_name": "Freezing Cold / Ice Nova",
        "node_type": "choice",
        "pos_x": 2700,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108658
        ],
        "next": [
          62085
        ],
        "entry_id": 134199,
        "entry_max_ranks": 1,
        "definition_id": 138979,
        "entry_index": 200,
        "entry_type": "active",
        "talent_name": "Ice Nova",
        "spell_id": 157997,
        "visible_spell_id": null,
        "icon": "spell_mage_icenova",
        "icon_candidates": [
          "spell_mage_icenova"
        ]
      },
      "pve_tooltip": "40 yd range\nInstant\n25 sec cooldown\nCauses a whirl of icy wind around the enemy, dealing (138% of Spell Power) Frost damage to the target and all other enemies within 8 yds, freezing them in place for 2 sec. Damage reduced beyond 8 targets.",
      "pvp_tooltip": "40 yd range\nInstant\n25 sec cooldown\nCauses a whirl of icy wind around the enemy, dealing (131.1% of Spell Power) Frost damage to the target and all other enemies within 8 yds, freezing them in place for 2 sec. Damage reduced beyond 8 targets.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 90,
          "end": 93,
          "old_token": "138",
          "new_token": "131.1",
          "kind": "spell_power_coefficient",
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
          "kind": "spell_power_coefficient",
          "old": "138",
          "new": "131.1"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 157997,
          "source_spell_id": 157997,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (SP mod: 1.38)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.95,
          "final_pvp_multiplier": 0.95,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [
            {
              "aura_spell_id": 1256909,
              "game_effect_id": 1264661,
              "amount_kind": "direct",
              "value_pct": -5.0,
              "factor": 0.95,
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
      "render_effect_count": 1,
      "rank_tooltips": []
    },
    {
      "talent_name": "Time Manipulation",
      "spell_id": 387807,
      "node_id": 62129,
      "entry_id": 80189,
      "definition_id": 85192,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62129,
        "node_name": "Time Manipulation",
        "node_type": "single",
        "pos_x": 3300,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62096,
          108658,
          110081
        ],
        "next": [
          62085,
          62094
        ],
        "entry_id": 80189,
        "entry_max_ranks": 1,
        "definition_id": 85192,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Time Manipulation",
        "spell_id": 387807,
        "visible_spell_id": null,
        "icon": "spell_nature_timestop",
        "icon_candidates": [
          "spell_nature_timestop"
        ]
      },
      "pve_tooltip": "The cooldowns of your loss of control spells are reduced by 5 sec.",
      "pvp_tooltip": "The cooldowns of your loss of control spells are reduced by 5 sec.",
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
      "talent_name": "Ring of Frost",
      "spell_id": 113724,
      "node_id": 62088,
      "entry_id": 80144,
      "definition_id": 85147,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62088,
        "node_name": "Ring of Frost / Mass Polymorph",
        "node_type": "choice",
        "pos_x": 3900,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62096
        ],
        "next": [
          62094
        ],
        "entry_id": 80144,
        "entry_max_ranks": 1,
        "definition_id": 85147,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Ring of Frost",
        "spell_id": 113724,
        "visible_spell_id": null,
        "icon": "spell_frost_ring_of_frost",
        "icon_candidates": [
          "spell_frost_ring_of_frost"
        ]
      },
      "pve_tooltip": "8% of base mana\n30 yd range\n2 sec cast\n45 sec cooldown\nSummons a Ring of Frost for 10 sec at the target location. Enemies entering the ring are incapacitated for 10 sec. Limit 10 targets.\nWhen the incapacitate expires, enemies are slowed by 65% for 4 sec.",
      "pvp_tooltip": "8% of base mana\n30 yd range\n2 sec cast\n45 sec cooldown\nSummons a Ring of Frost for 10 sec at the target location. Enemies entering the ring are incapacitated for 10 sec. Limit 10 targets.\nWhen the incapacitate expires, enemies are slowed by 50% for 4 sec.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 241,
          "end": 243,
          "old_token": "65",
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
          "old": "65",
          "new": "50"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 113724,
          "source_spell_id": 321329,
          "effect_index": 1,
          "effect_text": "Apply Aura: Decrease Run Speed %",
          "base_value": -65.0,
          "spell_pvp_multiplier": 0.769231,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.769231,
          "final_pvp_value": -50.000015,
          "is_final_pvp_modified": true,
          "dependency_path": [
            113724,
            321329
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
        }
      ],
      "render_effect_count": 1,
      "rank_tooltips": []
    },
    {
      "talent_name": "Mass Polymorph",
      "spell_id": 383121,
      "node_id": 62088,
      "entry_id": 134198,
      "definition_id": 138978,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62088,
        "node_name": "Ring of Frost / Mass Polymorph",
        "node_type": "choice",
        "pos_x": 3900,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62096
        ],
        "next": [
          62094
        ],
        "entry_id": 134198,
        "entry_max_ranks": 1,
        "definition_id": 138978,
        "entry_index": 200,
        "entry_type": "active",
        "talent_name": "Mass Polymorph",
        "spell_id": 383121,
        "visible_spell_id": null,
        "icon": "spell_nature_doublepolymorph1",
        "icon_candidates": [
          "spell_nature_doublepolymorph1"
        ]
      },
      "pve_tooltip": "4% of base mana\n1.7 sec cast\n1 min cooldown\nTransforms all enemies within 10 yards into sheep, wandering around incapacitated for 15 sec. While affected, the victims cannot take actions but will regenerate health very quickly. Damage will cancel the effect.\nOnly works on Beasts, Humanoids and Critters.",
      "pvp_tooltip": "4% of base mana\n1.7 sec cast\n1 min cooldown\nTransforms all enemies within 10 yards into sheep, wandering around incapacitated for 15 sec. While affected, the victims cannot take actions but will regenerate health very quickly. Damage will cancel the effect.\nOnly works on Beasts, Humanoids and Critters.",
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
      "talent_name": "Energized Barriers",
      "spell_id": 386828,
      "node_id": 62100,
      "entry_id": 80157,
      "definition_id": 85160,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62100,
        "node_name": "Energized Barriers",
        "node_type": "single",
        "pos_x": 4500,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108657,
          62096,
          110080
        ],
        "next": [
          62094,
          108664
        ],
        "entry_id": 80157,
        "entry_max_ranks": 1,
        "definition_id": 85160,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Energized Barriers",
        "spell_id": 386828,
        "visible_spell_id": null,
        "icon": "spell_mage_temporalshield",
        "icon_candidates": [
          "spell_mage_temporalshield"
        ]
      },
      "pve_tooltip": "Casting your barrier removes all snare effects.",
      "pvp_tooltip": "Casting your barrier removes all snare effects.",
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
      "talent_name": "Mass Invisibility",
      "spell_id": 414664,
      "node_id": 62092,
      "entry_id": 115878,
      "definition_id": 120890,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62092,
        "node_name": "Mass Invisibility",
        "node_type": "single",
        "pos_x": 5100,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108657
        ],
        "next": [
          108664
        ],
        "entry_id": 115878,
        "entry_max_ranks": 1,
        "definition_id": 120890,
        "entry_index": 200,
        "entry_type": "active",
        "talent_name": "Mass Invisibility",
        "spell_id": 414664,
        "visible_spell_id": null,
        "icon": "ability_mage_massinvisibility",
        "icon_candidates": [
          "ability_mage_massinvisibility"
        ]
      },
      "pve_tooltip": "6% of base mana\nInstant\n5 min cooldown\nYou and your allies within 40 yards instantly become invisible for 12 sec. Taking any action will cancel the effect.\nDoes not affect allies in combat.",
      "pvp_tooltip": "6% of base mana\nInstant\n5 min cooldown\nYou and your allies within 40 yards instantly become invisible for 12 sec. Taking any action will cancel the effect.\nDoes not affect allies in combat.",
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
      "talent_name": "Barrier Diffusion",
      "spell_id": 455428,
      "node_id": 62091,
      "entry_id": 80147,
      "definition_id": 85150,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62091,
        "node_name": "Barrier Diffusion",
        "node_type": "single",
        "pos_x": 5700,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108657
        ],
        "next": [
          108664
        ],
        "entry_id": 80147,
        "entry_max_ranks": 1,
        "definition_id": 85150,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Barrier Diffusion",
        "spell_id": 455428,
        "visible_spell_id": null,
        "icon": "spell_mage_evanesce",
        "icon_candidates": [
          "spell_mage_evanesce"
        ]
      },
      "pve_tooltip": "When your Barrier is removed, reduce its cooldown by 5 sec.",
      "pvp_tooltip": "When your Barrier is removed, reduce its cooldown by 2.5 sec.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 53,
          "end": 54,
          "old_token": "5",
          "new_token": "2.5",
          "kind": "duration_seconds",
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
          "kind": "duration_seconds",
          "old": "5",
          "new": "2.5"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 455428,
          "source_spell_id": 455428,
          "effect_index": 1,
          "effect_text": "Apply Aura: Dummy",
          "base_value": 5000.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 2500.0,
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
      "talent_name": "Ice Cold",
      "spell_id": 414659,
      "node_id": 62085,
      "entry_id": 80141,
      "definition_id": 85144,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62085,
        "node_name": "Ice Cold",
        "node_type": "single",
        "pos_x": 2700,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62087,
          62086,
          62129
        ],
        "next": [],
        "entry_id": 80141,
        "entry_max_ranks": 1,
        "definition_id": 85144,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Ice Cold",
        "spell_id": 414659,
        "visible_spell_id": null,
        "icon": "spell_fire_bluefire",
        "icon_candidates": [
          "spell_fire_bluefire"
        ]
      },
      "pve_tooltip": "Ice Block now reduces all damage taken by 70% for 6 sec but no longer grants Immunity, prevents movement, attacks, or casting spells. Does not incur the Global Cooldown.",
      "pvp_tooltip": "Ice Block now reduces all damage taken by 70% for 6 sec but no longer grants Immunity, prevents movement, attacks, or casting spells. Does not incur the Global Cooldown.",
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
      "talent_name": "Spatial Manipulation",
      "spell_id": 1244031,
      "node_id": 62094,
      "entry_id": 126060,
      "definition_id": 130892,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62094,
        "node_name": "Spatial Manipulation / Reflection",
        "node_type": "choice",
        "pos_x": 3900,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62088,
          62129,
          62100
        ],
        "next": [],
        "entry_id": 126060,
        "entry_max_ranks": 1,
        "definition_id": 130892,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Spatial Manipulation",
        "spell_id": 1244031,
        "visible_spell_id": null,
        "icon": "spell_mage_overpowered",
        "icon_candidates": [
          "spell_mage_overpowered"
        ]
      },
      "pve_tooltip": "[Shimmer / Blink] gains an additional charge.",
      "pvp_tooltip": "[Shimmer / Blink] gains an additional charge.",
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
      "talent_name": "Reflection",
      "spell_id": 1270829,
      "node_id": 62094,
      "entry_id": 136580,
      "definition_id": 141353,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62094,
        "node_name": "Spatial Manipulation / Reflection",
        "node_type": "choice",
        "pos_x": 3900,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62088,
          62129,
          62100
        ],
        "next": [],
        "entry_id": 136580,
        "entry_max_ranks": 1,
        "definition_id": 141353,
        "entry_index": 300,
        "entry_type": "passive",
        "talent_name": "Reflection",
        "spell_id": 1270829,
        "visible_spell_id": null,
        "icon": "ability_hunter_displacement",
        "icon_candidates": [
          "ability_hunter_displacement"
        ]
      },
      "pve_tooltip": "After casting [Shimmer / Blink], it is replaced with Reflection for 8 sec.\nReflection\nTeleports you back to where you last [Shimmer: Shimmered / Blinked]. Castable while casting and unaffected by the global cooldown.",
      "pvp_tooltip": "After casting [Shimmer / Blink], it is replaced with Reflection for 8 sec.\nReflection\nTeleports you back to where you last [Shimmer: Shimmered / Blinked]. Castable while casting and unaffected by the global cooldown.",
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
      "talent_name": "Improved Prismatic Barrier",
      "spell_id": 321745,
      "node_id": 108664,
      "entry_id": 134194,
      "definition_id": 138974,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108664,
        "node_name": "Improved Prismatic Barrier",
        "node_type": "single",
        "pos_x": 5100,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62092,
          62091,
          62100
        ],
        "next": [],
        "entry_id": 134194,
        "entry_max_ranks": 1,
        "definition_id": 138974,
        "entry_index": 300,
        "entry_type": "passive",
        "talent_name": "Improved Prismatic Barrier",
        "spell_id": 321745,
        "visible_spell_id": null,
        "icon": "spell_magearmor",
        "icon_candidates": [
          "spell_magearmor"
        ]
      },
      "pve_tooltip": "Prismatic Barrier gains an additional charge and further reduces magic damage taken by 5%.",
      "pvp_tooltip": "Prismatic Barrier gains an additional charge and further reduces magic damage taken by 5%.",
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
      "talent_name": "Arcane Missiles",
      "spell_id": 5143,
      "node_id": 102467,
      "entry_id": 126537,
      "definition_id": 131363,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102467,
        "node_name": "Arcane Missiles",
        "node_type": "single",
        "pos_x": 12300,
        "pos_y": 1500,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [
          108538,
          108539
        ],
        "entry_id": 126537,
        "entry_max_ranks": 1,
        "definition_id": 131363,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Arcane Missiles",
        "spell_id": 5143,
        "visible_spell_id": null,
        "icon": "spell_nature_starfall",
        "icon_candidates": [
          "spell_nature_starfall"
        ]
      },
      "pve_tooltip": "15% of base mana\n40 yd range\nChanneled (2.5 sec cast)\nLaunches 5 waves of Arcane Missiles at the enemy over 2.5 sec, causing a total of [4 * (107.8% of Spell Power)] Arcane damage.",
      "pvp_tooltip": "15% of base mana\n40 yd range\nChanneled (2.5 sec cast)\nLaunches 5 waves of Arcane Missiles at the enemy over 2.5 sec, causing a total of [4 * (178.1934% of Spell Power)] Arcane damage.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 142,
          "end": 147,
          "old_token": "107.8",
          "new_token": "178.1934",
          "kind": "spell_power_coefficient",
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
          "kind": "spell_power_coefficient",
          "old": "107.8",
          "new": "178.1934"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 5143,
          "source_spell_id": 7268,
          "effect_index": 1,
          "effect_text": "School Damage (Arcane) (SP mod: 1.078)",
          "base_value": null,
          "spell_pvp_multiplier": 1.74,
          "amount_kind": "direct",
          "aura_factor": 0.95,
          "final_pvp_multiplier": 1.653,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            5143,
            7268
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256909,
              "game_effect_id": 1264661,
              "amount_kind": "direct",
              "value_pct": -5.0,
              "factor": 0.95,
              "label_id": null,
              "build": "12.1.0.69933"
            }
          ],
          "sources": [
            "wowhead",
            "simc"
          ],
          "source_notes": [],
          "confidence": "ambiguous"
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 5143,
          "source_spell_id": 7268,
          "effect_index": 2,
          "effect_text": "School Damage (Arcane) (SP mod: 0.539)",
          "base_value": null,
          "spell_pvp_multiplier": 1.74,
          "amount_kind": "direct",
          "aura_factor": 0.95,
          "final_pvp_multiplier": 1.653,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            5143,
            7268
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256909,
              "game_effect_id": 1264661,
              "amount_kind": "direct",
              "value_pct": -5.0,
              "factor": 0.95,
              "label_id": null,
              "build": "12.1.0.69933"
            }
          ],
          "sources": [
            "wowhead",
            "simc"
          ],
          "source_notes": [],
          "confidence": "ambiguous"
        }
      ],
      "render_effect_count": 1,
      "rank_tooltips": []
    },
    {
      "talent_name": "Concentrated Power",
      "spell_id": 414379,
      "node_id": 108538,
      "entry_id": 134027,
      "definition_id": 138810,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108538,
        "node_name": "Concentrated Power",
        "node_type": "single",
        "pos_x": 11700,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102467
        ],
        "next": [
          102445,
          110850
        ],
        "entry_id": 134027,
        "entry_max_ranks": 1,
        "definition_id": 138810,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Concentrated Power",
        "spell_id": 414379,
        "visible_spell_id": null,
        "icon": "spell_mage_overpowered",
        "icon_candidates": [
          "spell_mage_overpowered"
        ]
      },
      "pve_tooltip": "Arcane Missiles channels 20% faster.",
      "pvp_tooltip": "Arcane Missiles channels 20% faster.",
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
      "talent_name": "Arcane Salvo",
      "spell_id": 384452,
      "node_id": 108539,
      "entry_id": 134028,
      "definition_id": 138811,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108539,
        "node_name": "Arcane Salvo",
        "node_type": "single",
        "pos_x": 12900,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102467
        ],
        "next": [
          110850,
          102471
        ],
        "entry_id": 134028,
        "entry_max_ranks": 1,
        "definition_id": 138811,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Arcane Salvo",
        "spell_id": 384452,
        "visible_spell_id": null,
        "icon": "inv12_ability_mage_arcanesalvo",
        "icon_candidates": [
          "inv12_ability_mage_arcanesalvo"
        ]
      },
      "pve_tooltip": "Each wave of Arcane Missiles increases the damage of Arcane Barrage by 3%, up to 60%.",
      "pvp_tooltip": "Each wave of Arcane Missiles increases the damage of Arcane Barrage by 3%, up to 60%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 384452,
          "source_spell_id": 44425,
          "effect_index": 1,
          "effect_text": "School Damage (Arcane) (SP mod: 0.87952)",
          "base_value": null,
          "spell_pvp_multiplier": 1.2879,
          "amount_kind": "direct",
          "aura_factor": 0.95,
          "final_pvp_multiplier": 1.223505,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            384452,
            1242974,
            44425
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "triggered_by_reverse"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256909,
              "game_effect_id": 1264661,
              "amount_kind": "direct",
              "value_pct": -5.0,
              "factor": 0.95,
              "label_id": null,
              "build": "12.1.0.69933"
            }
          ],
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
    },
    {
      "talent_name": "Improved Clearcasting",
      "spell_id": 321420,
      "node_id": 102445,
      "entry_id": 126515,
      "definition_id": 131341,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102445,
        "node_name": "Improved Clearcasting",
        "node_type": "single",
        "pos_x": 11100,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108538
        ],
        "next": [
          102439
        ],
        "entry_id": 126515,
        "entry_max_ranks": 1,
        "definition_id": 131341,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Improved Clearcasting",
        "spell_id": 321420,
        "visible_spell_id": null,
        "icon": "spell_shadow_manaburn",
        "icon_candidates": [
          "spell_shadow_manaburn"
        ]
      },
      "pve_tooltip": "Clearcasting can stack up to 2 additional times.",
      "pvp_tooltip": "Clearcasting can stack up to 2 additional times.",
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
      "talent_name": "Refractive Images",
      "spell_id": 1309497,
      "node_id": 110850,
      "entry_id": 137842,
      "definition_id": 142596,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110850,
        "node_name": "Refractive Images",
        "node_type": "single",
        "pos_x": 12300,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108539,
          108538
        ],
        "next": [
          102449
        ],
        "entry_id": 137842,
        "entry_max_ranks": 1,
        "definition_id": 142596,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Refractive Images",
        "spell_id": 1309497,
        "visible_spell_id": null,
        "icon": "inv_112_arcane_buff",
        "icon_candidates": [
          "inv_112_arcane_buff"
        ]
      },
      "pve_tooltip": "10% of damage you would take is instead dealt over 8 sec. Casting Mirror Image increases this effect to 30% for 15 sec.",
      "pvp_tooltip": "10% of damage you would take is instead dealt over 8 sec. Casting Mirror Image increases this effect to 30% for 15 sec.",
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
      "talent_name": "Arcing Cleave",
      "spell_id": 231564,
      "node_id": 102471,
      "entry_id": 126541,
      "definition_id": 131367,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102471,
        "node_name": "Arcing Cleave",
        "node_type": "single",
        "pos_x": 13500,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108539
        ],
        "next": [
          104113
        ],
        "entry_id": 126541,
        "entry_max_ranks": 1,
        "definition_id": 131367,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Arcing Cleave",
        "spell_id": 231564,
        "visible_spell_id": null,
        "icon": "ability_mage_arcanebarrage",
        "icon_candidates": [
          "ability_mage_arcanebarrage"
        ]
      },
      "pve_tooltip": "For each Arcane Charge, Arcane Barrage hits 1 additional nearby target for 40% damage.",
      "pvp_tooltip": "For each Arcane Charge, Arcane Barrage hits 1 additional nearby target for 40% damage.",
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
      "talent_name": "Arcane Pulse",
      "spell_id": 1241462,
      "node_id": 102439,
      "entry_id": 126509,
      "definition_id": 131335,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102439,
        "node_name": "Arcane Pulse",
        "node_type": "single",
        "pos_x": 11100,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102445
        ],
        "next": [
          102462,
          102460
        ],
        "entry_id": 126509,
        "entry_max_ranks": 1,
        "definition_id": 131335,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Arcane Pulse",
        "spell_id": 1241462,
        "visible_spell_id": null,
        "icon": "spell_arcane_arcanetorrent",
        "icon_candidates": [
          "spell_arcane_arcanetorrent"
        ]
      },
      "pve_tooltip": "10% of base mana\n40 yd range\n2 sec cast\n15 sec cooldown\nA pulse of Arcane magic erupts from underneath your target, dealing (600% of Spell Power) Arcane damage to all enemies within 8 yds. Damage reduced beyond 5 targets.\nGenerates 1 Arcane Charge for each enemy struck.",
      "pvp_tooltip": "10% of base mana\n40 yd range\n2 sec cast\n15 sec cooldown\nA pulse of Arcane magic erupts from underneath your target, dealing (570% of Spell Power) Arcane damage to all enemies within 8 yds. Damage reduced beyond 5 targets.\nGenerates 1 Arcane Charge for each enemy struck.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 125,
          "end": 128,
          "old_token": "600",
          "new_token": "570",
          "kind": "spell_power_coefficient",
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
          "kind": "spell_power_coefficient",
          "old": "600",
          "new": "570"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 1241462,
          "source_spell_id": 1241462,
          "effect_index": 1,
          "effect_text": "School Damage (Arcane) (SP mod: 6)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.95,
          "final_pvp_multiplier": 0.95,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [
            {
              "aura_spell_id": 1256909,
              "game_effect_id": 1264661,
              "amount_kind": "direct",
              "value_pct": -5.0,
              "factor": 0.95,
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
      "render_effect_count": 1,
      "rank_tooltips": []
    },
    {
      "talent_name": "Arcane Surge",
      "spell_id": 365350,
      "node_id": 102449,
      "entry_id": 126519,
      "definition_id": 131345,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102449,
        "node_name": "Arcane Surge",
        "node_type": "single",
        "pos_x": 12300,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          110850
        ],
        "next": [
          102460,
          102440,
          102469
        ],
        "entry_id": 126519,
        "entry_max_ranks": 1,
        "definition_id": 131345,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Arcane Surge",
        "spell_id": 365350,
        "visible_spell_id": null,
        "icon": "ability_mage_arcanesurge",
        "icon_candidates": [
          "ability_mage_arcanesurge"
        ]
      },
      "pve_tooltip": "1 to 2900001 Mana\n40 yd range\n2.5 sec cast\n1.5 min cooldown\nExpend all of your current mana to annihilate your enemy target and nearby enemies for up to [(372% of Spell Power) * 2] Arcane damage based on Mana spent. Deals reduced damage beyond 8 targets.\nFor the next 15 sec, your Mana regeneration is increased by 425% and spell damage is increased by 35%.\nGenerates Clearcasting.",
      "pvp_tooltip": "1 to 2900001 Mana\n40 yd range\n2.5 sec cast\n1.5 min cooldown\nExpend all of your current mana to annihilate your enemy target and nearby enemies for up to [(494.76% of Spell Power) * 2] Arcane damage based on Mana spent. Deals reduced damage beyond 8 targets.\nFor the next 15 sec, your Mana regeneration is increased by 425% and spell damage is increased by 15%.\nGenerates Clearcasting.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 155,
          "end": 158,
          "old_token": "372",
          "new_token": "494.76",
          "kind": "spell_power_coefficient",
          "effect_indexes": [
            1
          ]
        },
        {
          "start": 353,
          "end": 355,
          "old_token": "35",
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
          "kind": "spell_power_coefficient",
          "old": "372",
          "new": "494.76"
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "percent_value",
          "old": "35",
          "new": "15"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 365350,
          "source_spell_id": 365350,
          "effect_index": 1,
          "effect_text": "School Damage (Arcane) (SP mod: 3.72)",
          "base_value": null,
          "spell_pvp_multiplier": 1.4,
          "amount_kind": "direct",
          "aura_factor": 0.95,
          "final_pvp_multiplier": 1.3299999999999998,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [
            {
              "aura_spell_id": 1256909,
              "game_effect_id": 1264661,
              "amount_kind": "direct",
              "value_pct": -5.0,
              "factor": 0.95,
              "label_id": null,
              "build": "12.1.0.69933"
            }
          ],
          "sources": [
            "wowhead",
            "drustvar",
            "simc"
          ],
          "source_notes": [],
          "confidence": "high"
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 365350,
          "source_spell_id": 365362,
          "effect_index": 1,
          "effect_text": "Apply Aura: Modifies Damage/Healing Done",
          "base_value": 35.0,
          "spell_pvp_multiplier": 0.4286,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.4286,
          "final_pvp_value": 15.001,
          "is_final_pvp_modified": true,
          "dependency_path": [
            365350,
            365362
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
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 365350,
          "source_spell_id": 365362,
          "effect_index": 2,
          "effect_text": "Apply Aura: Modifies Periodic Damage/Healing Done (22)",
          "base_value": 35.0,
          "spell_pvp_multiplier": 0.4286,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.4286,
          "final_pvp_value": 15.001,
          "is_final_pvp_modified": true,
          "dependency_path": [
            365350,
            365362
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
        }
      ],
      "render_effect_count": 2,
      "rank_tooltips": []
    },
    {
      "talent_name": "Arcane Orb",
      "spell_id": 153626,
      "node_id": 104113,
      "entry_id": 128689,
      "definition_id": 133492,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 104113,
        "node_name": "Arcane Orb",
        "node_type": "single",
        "pos_x": 13500,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102471
        ],
        "next": [
          102469,
          102475
        ],
        "entry_id": 128689,
        "entry_max_ranks": 1,
        "definition_id": 133492,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Arcane Orb",
        "spell_id": 153626,
        "visible_spell_id": null,
        "icon": "spell_mage_arcaneorb",
        "icon_candidates": [
          "spell_mage_arcaneorb"
        ]
      },
      "pve_tooltip": "1% of base mana\n40 yd range\nInstant\n20 sec cooldown\n1 Charge\nLaunches an Arcane Orb forward from your position, traveling up to 40 yds, dealing (243.2% of Spell Power) Arcane damage to enemies it passes through.\nGrants 1 Arcane Charge when cast and every time it deals damage.",
      "pvp_tooltip": "1% of base mana\n40 yd range\nInstant\n20 sec cooldown\n1 Charge\nLaunches an Arcane Orb forward from your position, traveling up to 40 yds, dealing (323.456% of Spell Power) Arcane damage to enemies it passes through.\nGrants 1 Arcane Charge when cast and every time it deals damage.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 145,
          "end": 150,
          "old_token": "243.2",
          "new_token": "323.456",
          "kind": "spell_power_coefficient",
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
          "kind": "spell_power_coefficient",
          "old": "243.2",
          "new": "323.456"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 153626,
          "source_spell_id": 153640,
          "effect_index": 1,
          "effect_text": "School Damage (Arcane) (SP mod: 2.432)",
          "base_value": null,
          "spell_pvp_multiplier": 1.4,
          "amount_kind": "direct",
          "aura_factor": 0.95,
          "final_pvp_multiplier": 1.3299999999999998,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            153626,
            153640
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256909,
              "game_effect_id": 1264661,
              "amount_kind": "direct",
              "value_pct": -5.0,
              "factor": 0.95,
              "label_id": null,
              "build": "12.1.0.69933"
            }
          ],
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
      "talent_name": "Reverberate",
      "spell_id": 281482,
      "node_id": 102462,
      "entry_id": 126532,
      "definition_id": 131358,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102462,
        "node_name": "Reverberate",
        "node_type": "single",
        "pos_x": 10500,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102439
        ],
        "next": [
          102446
        ],
        "entry_id": 126532,
        "entry_max_ranks": 1,
        "definition_id": 131358,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Reverberate",
        "spell_id": 281482,
        "visible_spell_id": null,
        "icon": "spell_arcane_arcane04",
        "icon_candidates": [
          "spell_arcane_arcane04"
        ]
      },
      "pve_tooltip": "Arcane Pulse has a 50% chance to repeat its explosion at 30% effectiveness.",
      "pvp_tooltip": "Arcane Pulse has a 50% chance to repeat its explosion at 30% effectiveness.",
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
      "talent_name": "Presence of Mind",
      "spell_id": 205025,
      "node_id": 102460,
      "entry_id": 126530,
      "definition_id": 131356,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102460,
        "node_name": "Presence of Mind / Slipstream",
        "node_type": "choice",
        "pos_x": 11700,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102449,
          102439
        ],
        "next": [
          102446,
          110849,
          102468
        ],
        "entry_id": 126530,
        "entry_max_ranks": 1,
        "definition_id": 131356,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Presence of Mind",
        "spell_id": 205025,
        "visible_spell_id": null,
        "icon": "spell_nature_enchantarmor",
        "icon_candidates": [
          "spell_nature_enchantarmor"
        ]
      },
      "pve_tooltip": "Instant\n45 sec cooldown\nCauses your next 2 Arcane Blasts to be instant cast.",
      "pvp_tooltip": "Instant\n45 sec cooldown\nCauses your next 2 Arcane Blasts to be instant cast.",
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
      "talent_name": "Slipstream",
      "spell_id": 236457,
      "node_id": 102460,
      "entry_id": 134025,
      "definition_id": 138808,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102460,
        "node_name": "Presence of Mind / Slipstream",
        "node_type": "choice",
        "pos_x": 11700,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102449,
          102439
        ],
        "next": [
          102446,
          110849,
          102468
        ],
        "entry_id": 134025,
        "entry_max_ranks": 1,
        "definition_id": 138808,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Slipstream",
        "spell_id": 236457,
        "visible_spell_id": null,
        "icon": "spell_holy_mindsooth",
        "icon_candidates": [
          "spell_holy_mindsooth"
        ]
      },
      "pve_tooltip": "Arcane Missiles and Evocation can now be channeled while moving.",
      "pvp_tooltip": "Arcane Missiles and Evocation can now be channeled while moving.",
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
      "talent_name": "Mana Bomb",
      "spell_id": 457521,
      "node_id": 102440,
      "entry_id": 126510,
      "definition_id": 131336,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102440,
        "node_name": "Mana Bomb",
        "node_type": "single",
        "pos_x": 12300,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102449
        ],
        "next": [],
        "entry_id": 126510,
        "entry_max_ranks": 1,
        "definition_id": 131336,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Mana Bomb",
        "spell_id": 457521,
        "visible_spell_id": null,
        "icon": "spell_holy_surgeoflight_shadow",
        "icon_candidates": [
          "spell_holy_surgeoflight_shadow"
        ]
      },
      "pve_tooltip": "Arcane Surge's damage is increased by an additional 50% based on your mana spent.",
      "pvp_tooltip": "Arcane Surge's damage is increased by an additional 50% based on your mana spent.",
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
      "talent_name": "Arcane Familiar",
      "spell_id": 205022,
      "node_id": 102469,
      "entry_id": 126539,
      "definition_id": 131365,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102469,
        "node_name": "Arcane Familiar",
        "node_type": "single",
        "pos_x": 12900,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102449,
          104113
        ],
        "next": [
          102468,
          102441,
          109002
        ],
        "entry_id": 126539,
        "entry_max_ranks": 1,
        "definition_id": 131365,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Arcane Familiar",
        "spell_id": 205022,
        "visible_spell_id": null,
        "icon": "ability_socererking_arcanemines",
        "icon_candidates": [
          "ability_socererking_arcanemines"
        ]
      },
      "pve_tooltip": "Casting Arcane Intellect summons a Familiar that attacks your enemies and increases your maximum mana by 10% for 1 hour.",
      "pvp_tooltip": "Casting Arcane Intellect summons a Familiar that attacks your enemies and increases your maximum mana by 10% for 1 hour.",
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
      "talent_name": "Charged Orb",
      "spell_id": 384651,
      "node_id": 102475,
      "entry_id": 126545,
      "definition_id": 131371,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102475,
        "node_name": "Charged Orb",
        "node_type": "single",
        "pos_x": 14100,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          104113
        ],
        "next": [
          109002
        ],
        "entry_id": 126545,
        "entry_max_ranks": 1,
        "definition_id": 131371,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Charged Orb",
        "spell_id": 384651,
        "visible_spell_id": null,
        "icon": "spell_mage_arcaneorb",
        "icon_candidates": [
          "spell_mage_arcaneorb"
        ]
      },
      "pve_tooltip": "Arcane Orb gains 1 additional charge. Arcane Orb damage increased by 15%.",
      "pvp_tooltip": "Arcane Orb gains 1 additional charge. Arcane Orb damage increased by 15%.",
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
      "talent_name": "Intuition",
      "spell_id": 1223798,
      "node_id": 102446,
      "entry_id": 126516,
      "definition_id": 131342,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102446,
        "node_name": "Intuition",
        "node_type": "single",
        "pos_x": 11100,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102460,
          102462
        ],
        "next": [
          108536,
          110442,
          108535
        ],
        "entry_id": 126516,
        "entry_max_ranks": 1,
        "definition_id": 131342,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Intuition",
        "spell_id": 1223798,
        "visible_spell_id": null,
        "icon": "spell_shadow_brainwash",
        "icon_candidates": [
          "spell_shadow_brainwash"
        ]
      },
      "pve_tooltip": "Upon reaching maximum stacks of Arcane Salvo, your next Arcane Barrage deals 25% increased damage.",
      "pvp_tooltip": "Upon reaching maximum stacks of Arcane Salvo, your next Arcane Barrage deals 25% increased damage.",
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
      "talent_name": "Amplification",
      "spell_id": 236628,
      "node_id": 110849,
      "entry_id": 137841,
      "definition_id": 142595,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110849,
        "node_name": "Amplification",
        "node_type": "single",
        "pos_x": 11700,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102460
        ],
        "next": [],
        "entry_id": 137841,
        "entry_max_ranks": 1,
        "definition_id": 142595,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Amplification",
        "spell_id": 236628,
        "visible_spell_id": null,
        "icon": "spell_arcane_invocation",
        "icon_candidates": [
          "spell_arcane_invocation"
        ]
      },
      "pve_tooltip": "Arcane Missiles fires 2 additional missiles.",
      "pvp_tooltip": "Arcane Missiles fires 2 additional missiles.",
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
      "talent_name": "Touch of the Magi",
      "spell_id": 321507,
      "node_id": 102468,
      "entry_id": 126538,
      "definition_id": 131364,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102468,
        "node_name": "Touch of the Magi",
        "node_type": "single",
        "pos_x": 12300,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102469,
          102460
        ],
        "next": [
          108535,
          102465,
          108541
        ],
        "entry_id": 126538,
        "entry_max_ranks": 1,
        "definition_id": 131364,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Touch of the Magi",
        "spell_id": 321507,
        "visible_spell_id": null,
        "icon": "inv_ability_mage_radiantspark",
        "icon_candidates": [
          "inv_ability_mage_radiantspark"
        ]
      },
      "pve_tooltip": "5% of base mana\n40 yd range\nInstant\n45 sec cooldown\n1 Charge\nApplies Touch of the Magi to your current target, accumulating 20% of the damage you deal to the target for 12 sec, and then exploding for that amount of Arcane damage to the target and reduced damage to all nearby enemies.\nGenerates 4 Arcane Charges.",
      "pvp_tooltip": "5% of base mana\n40 yd range\nInstant\n45 sec cooldown\n1 Charge\nApplies Touch of the Magi to your current target, accumulating 20% of the damage you deal to the target for 12 sec, and then exploding for that amount of Arcane damage to the target and reduced damage to all nearby enemies.\nGenerates 4 Arcane Charges.",
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
      "talent_name": "Energized Familiar",
      "spell_id": 452997,
      "node_id": 102441,
      "entry_id": 126511,
      "definition_id": 131337,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102441,
        "node_name": "Energized Familiar",
        "node_type": "single",
        "pos_x": 12900,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102469
        ],
        "next": [
          108541
        ],
        "entry_id": 126511,
        "entry_max_ranks": 1,
        "definition_id": 131337,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Energized Familiar",
        "spell_id": 452997,
        "visible_spell_id": null,
        "icon": "spell_lightning_lightningbolt01",
        "icon_candidates": [
          "spell_lightning_lightningbolt01"
        ]
      },
      "pve_tooltip": "During Arcane Surge, your Arcane Familiar fires 4 bolts instead of 1.\nDamage from your Arcane Familiar has a 6% chance to restore 2% of your maximum mana.",
      "pvp_tooltip": "During Arcane Surge, your Arcane Familiar fires 4 bolts instead of 1.\nDamage from your Arcane Familiar has a 6% chance to restore 2% of your maximum mana.",
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
      "talent_name": "Expanded Mind",
      "spell_id": 1243557,
      "node_id": 109002,
      "entry_id": 134834,
      "definition_id": 139602,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109002,
        "node_name": "Expanded Mind",
        "node_type": "single",
        "pos_x": 13500,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102475,
          102469
        ],
        "next": [
          108541,
          102453
        ],
        "entry_id": 134834,
        "entry_max_ranks": 1,
        "definition_id": 139602,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Expanded Mind",
        "spell_id": 1243557,
        "visible_spell_id": null,
        "icon": "inv_helmet_101",
        "icon_candidates": [
          "inv_helmet_101"
        ]
      },
      "pve_tooltip": "Casting Arcane Blast or Arcane Pulse grants 2 stacks of Arcane Salvo.\nCasting Arcane Orb grants 1 stack of Arcane Salvo.\nCasting Prismatic Bolt grants 4 stacks of Arcane Salvo.",
      "pvp_tooltip": "Casting Arcane Blast or Arcane Pulse grants 2 stacks of Arcane Salvo.\nCasting Arcane Orb grants 1 stack of Arcane Salvo.\nCasting Prismatic Bolt grants 4 stacks of Arcane Salvo.",
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
      "talent_name": "Consortium's Bauble",
      "spell_id": 461260,
      "node_id": 108536,
      "entry_id": 134024,
      "definition_id": 138807,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108536,
        "node_name": "Consortium's Bauble",
        "node_type": "single",
        "pos_x": 10500,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102446
        ],
        "next": [
          102454
        ],
        "entry_id": 134024,
        "entry_max_ranks": 1,
        "definition_id": 138807,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Consortium's Bauble",
        "spell_id": 461260,
        "visible_spell_id": null,
        "icon": "inv_6_2raid_trinket_1b",
        "icon_candidates": [
          "inv_6_2raid_trinket_1b"
        ]
      },
      "pve_tooltip": "Reduces Arcane Blast's mana cost by 5% and increases its damage by 8%.",
      "pvp_tooltip": "Reduces Arcane Blast's mana cost by 5% and increases its damage by 8%.",
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
      "talent_name": "Arcane Tempo",
      "spell_id": 383980,
      "node_id": 110442,
      "entry_id": 137084,
      "definition_id": 141848,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110442,
        "node_name": "Arcane Tempo",
        "node_type": "single",
        "pos_x": 11100,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102446
        ],
        "next": [
          102454
        ],
        "entry_id": 137084,
        "entry_max_ranks": 1,
        "definition_id": 141848,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Arcane Tempo",
        "spell_id": 383980,
        "visible_spell_id": null,
        "icon": "ability_socererking_arcaneacceleration",
        "icon_candidates": [
          "ability_socererking_arcaneacceleration"
        ]
      },
      "pve_tooltip": "Your Haste is increased by 2%.",
      "pvp_tooltip": "Your Haste is increased by 2%.",
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
      "talent_name": "Aether Attunement",
      "spell_id": 1243307,
      "node_id": 108535,
      "entry_id": 134023,
      "definition_id": 138806,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108535,
        "node_name": "Aether Attunement",
        "node_type": "single",
        "pos_x": 11700,
        "pos_y": 5100,
        "max_ranks": 2,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102446,
          102468
        ],
        "next": [
          102454,
          102470
        ],
        "entry_id": 134023,
        "entry_max_ranks": 2,
        "definition_id": 138806,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Aether Attunement",
        "spell_id": 1243307,
        "visible_spell_id": null,
        "icon": "inv_enchant_essencearcanelarge",
        "icon_candidates": [
          "inv_enchant_essencearcanelarge"
        ]
      },
      "pve_tooltip": "Arcane Missiles now damages 4 additional targets at 50% effectiveness.",
      "pvp_tooltip": "Arcane Missiles now damages 4 additional targets at 50% effectiveness.",
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
          "pve_tooltip": "Arcane Missiles now damages 2 additional targets at 50% effectiveness.",
          "pvp_tooltip": "Arcane Missiles now damages 2 additional targets at 50% effectiveness.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "Arcane Missiles now damages 4 additional targets at 50% effectiveness.",
          "pvp_tooltip": "Arcane Missiles now damages 4 additional targets at 50% effectiveness.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Aegwynn's Technique",
      "spell_id": 1243507,
      "node_id": 102465,
      "entry_id": 134020,
      "definition_id": 138803,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102465,
        "node_name": "Aegwynn's Technique / Arcane Echo",
        "node_type": "choice",
        "pos_x": 12300,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102468
        ],
        "next": [
          102470,
          102451
        ],
        "entry_id": 134020,
        "entry_max_ranks": 1,
        "definition_id": 138803,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Aegwynn's Technique",
        "spell_id": 1243507,
        "visible_spell_id": null,
        "icon": "inv_misc_scrollrolled03d",
        "icon_candidates": [
          "inv_misc_scrollrolled03d"
        ]
      },
      "pve_tooltip": "Casting Touch of the Magi grants Clearcasting.",
      "pvp_tooltip": "Casting Touch of the Magi grants Clearcasting.",
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
      "talent_name": "Arcane Echo",
      "spell_id": 342231,
      "node_id": 102465,
      "entry_id": 135699,
      "definition_id": 140454,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102465,
        "node_name": "Aegwynn's Technique / Arcane Echo",
        "node_type": "choice",
        "pos_x": 12300,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102468
        ],
        "next": [
          102470,
          102451
        ],
        "entry_id": 135699,
        "entry_max_ranks": 1,
        "definition_id": 140454,
        "entry_index": 300,
        "entry_type": "passive",
        "talent_name": "Arcane Echo",
        "spell_id": 342231,
        "visible_spell_id": null,
        "icon": "ability_socererking_arcanewrath",
        "icon_candidates": [
          "ability_socererking_arcanewrath"
        ]
      },
      "pve_tooltip": "Direct damage you deal to enemies affected by [Nether Flux / Touch of the Magi], causes an explosion that deals [Nether Flux: [(10% of Spell Power) * 5] / (10% of Spell Power)] Arcane damage to all nearby enemies. Deals reduced damage beyond 8 targets.",
      "pvp_tooltip": "Direct damage you deal to enemies affected by [Nether Flux / Touch of the Magi], causes an explosion that deals [Nether Flux: [(9.5% of Spell Power) * 5] / (9.5% of Spell Power)] Arcane damage to all nearby enemies. Deals reduced damage beyond 8 targets.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 128,
          "end": 130,
          "old_token": "10",
          "new_token": "9.5",
          "kind": "spell_power_coefficient",
          "effect_indexes": [
            1
          ]
        },
        {
          "start": 156,
          "end": 158,
          "old_token": "10",
          "new_token": "9.5",
          "kind": "spell_power_coefficient",
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
          "kind": "spell_power_coefficient",
          "old": "10",
          "new": "9.5"
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "spell_power_coefficient",
          "old": "10",
          "new": "9.5"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 342231,
          "source_spell_id": 342232,
          "effect_index": 1,
          "effect_text": "School Damage (Arcane) (SP mod: 0.1)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.95,
          "final_pvp_multiplier": 0.95,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            342231,
            342232
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256909,
              "game_effect_id": 1264661,
              "amount_kind": "direct",
              "value_pct": -5.0,
              "factor": 0.95,
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
      "render_effect_count": 1,
      "rank_tooltips": []
    },
    {
      "talent_name": "Resonance",
      "spell_id": 205028,
      "node_id": 108541,
      "entry_id": 134030,
      "definition_id": 138813,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108541,
        "node_name": "Resonance",
        "node_type": "single",
        "pos_x": 12900,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102441,
          102468,
          109002
        ],
        "next": [
          102451,
          108551
        ],
        "entry_id": 134030,
        "entry_max_ranks": 1,
        "definition_id": 138813,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Resonance",
        "spell_id": 205028,
        "visible_spell_id": null,
        "icon": "spell_arcane_arcane01",
        "icon_candidates": [
          "spell_arcane_arcane01"
        ]
      },
      "pve_tooltip": "Arcane Barrage deals 8% increased damage per target it hits beyond the first.",
      "pvp_tooltip": "Arcane Barrage deals 8% increased damage per target it hits beyond the first.",
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
      "talent_name": "Impetus",
      "spell_id": 383676,
      "node_id": 102453,
      "entry_id": 126523,
      "definition_id": 131349,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102453,
        "node_name": "Impetus",
        "node_type": "single",
        "pos_x": 14100,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109002
        ],
        "next": [
          108551
        ],
        "entry_id": 126523,
        "entry_max_ranks": 1,
        "definition_id": 131349,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Impetus",
        "spell_id": 383676,
        "visible_spell_id": null,
        "icon": "spell_arcane_arcanetorrent",
        "icon_candidates": [
          "spell_arcane_arcanetorrent"
        ]
      },
      "pve_tooltip": "Arcane Blast generates an additional Arcane Charge.",
      "pvp_tooltip": "Arcane Blast generates an additional Arcane Charge.",
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
      "talent_name": "Evocation",
      "spell_id": 12051,
      "node_id": 102454,
      "entry_id": 126524,
      "definition_id": 131350,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102454,
        "node_name": "Evocation / Mana Adept",
        "node_type": "choice",
        "pos_x": 11100,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108535,
          108536,
          110442
        ],
        "next": [
          102480
        ],
        "entry_id": 126524,
        "entry_max_ranks": 1,
        "definition_id": 131350,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Evocation",
        "spell_id": 12051,
        "visible_spell_id": null,
        "icon": "spell_nature_purge",
        "icon_candidates": [
          "spell_nature_purge"
        ]
      },
      "pve_tooltip": "Channeled (3 sec cast)\n45 sec cooldown\n1 Charge\nIncreases your mana regeneration by 1500% for 3 sec.",
      "pvp_tooltip": "Channeled (3 sec cast)\n45 sec cooldown\n1 Charge\nIncreases your mana regeneration by 1500% for 3 sec.",
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
      "talent_name": "Mana Adept",
      "spell_id": 321526,
      "node_id": 102454,
      "entry_id": 136465,
      "definition_id": 141238,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102454,
        "node_name": "Evocation / Mana Adept",
        "node_type": "choice",
        "pos_x": 11100,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108535,
          108536,
          110442
        ],
        "next": [
          102480
        ],
        "entry_id": 136465,
        "entry_max_ranks": 1,
        "definition_id": 141238,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Mana Adept",
        "spell_id": 321526,
        "visible_spell_id": null,
        "icon": "spell_arcane_arcanepotency",
        "icon_candidates": [
          "spell_arcane_arcanepotency"
        ]
      },
      "pve_tooltip": "Arcane Barrage grants you 2.0% of your maximum mana per Arcane Charge spent.",
      "pvp_tooltip": "Arcane Barrage grants you 2.0% of your maximum mana per Arcane Charge spent.",
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
      "talent_name": "Enlightened",
      "spell_id": 321387,
      "node_id": 102470,
      "entry_id": 126540,
      "definition_id": 131366,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102470,
        "node_name": "Enlightened",
        "node_type": "single",
        "pos_x": 11700,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108535,
          102465
        ],
        "next": [
          102480,
          108665
        ],
        "entry_id": 126540,
        "entry_max_ranks": 1,
        "definition_id": 131366,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Enlightened",
        "spell_id": 321387,
        "visible_spell_id": null,
        "icon": "ability_socererking_arcanefortification",
        "icon_candidates": [
          "ability_socererking_arcanefortification"
        ]
      },
      "pve_tooltip": "Arcane damage dealt is increased based on your current mana, up to 6% at full mana.\nMana Regen is increased based on your current mana, up to 20% when out of mana.",
      "pvp_tooltip": "Arcane damage dealt is increased based on your current mana, up to 6% at full mana.\nMana Regen is increased based on your current mana, up to 20% when out of mana.",
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
      "talent_name": "Focusing Crystal",
      "spell_id": 461257,
      "node_id": 102451,
      "entry_id": 126521,
      "definition_id": 131347,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102451,
        "node_name": "Focusing Crystal",
        "node_type": "single",
        "pos_x": 12900,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102465,
          108541
        ],
        "next": [
          108665,
          108537
        ],
        "entry_id": 126521,
        "entry_max_ranks": 1,
        "definition_id": 131347,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Focusing Crystal",
        "spell_id": 461257,
        "visible_spell_id": null,
        "icon": "ability_racial_arcaneaffinity",
        "icon_candidates": [
          "ability_racial_arcaneaffinity"
        ]
      },
      "pve_tooltip": "Each wave of Arcane Missiles has a 50% chance to grant 1 additional stack of Arcane Salvo.",
      "pvp_tooltip": "Each wave of Arcane Missiles has a 50% chance to grant 1 additional stack of Arcane Salvo.",
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
      "talent_name": "Illuminated Thoughts",
      "spell_id": 384060,
      "node_id": 108551,
      "entry_id": 134047,
      "definition_id": 138830,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108551,
        "node_name": "Illuminated Thoughts",
        "node_type": "single",
        "pos_x": 13500,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108541,
          102453
        ],
        "next": [
          108537
        ],
        "entry_id": 134047,
        "entry_max_ranks": 1,
        "definition_id": 138830,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Illuminated Thoughts",
        "spell_id": 384060,
        "visible_spell_id": null,
        "icon": "spell_arcane_focusedpower",
        "icon_candidates": [
          "spell_arcane_focusedpower"
        ]
      },
      "pve_tooltip": "Clearcasting has a 3% increased chance to proc.",
      "pvp_tooltip": "Clearcasting has a 3% increased chance to proc.",
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
      "talent_name": "Prodigious Savant",
      "spell_id": 384612,
      "node_id": 102480,
      "entry_id": 126550,
      "definition_id": 131376,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102480,
        "node_name": "Prodigious Savant",
        "node_type": "single",
        "pos_x": 11100,
        "pos_y": 6300,
        "max_ranks": 2,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102470,
          102454
        ],
        "next": [
          102472,
          102476
        ],
        "entry_id": 126550,
        "entry_max_ranks": 2,
        "definition_id": 131376,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Prodigious Savant",
        "spell_id": 384612,
        "visible_spell_id": null,
        "icon": "ability_mage_studentofthemind",
        "icon_candidates": [
          "ability_mage_studentofthemind"
        ]
      },
      "pve_tooltip": "Arcane Charges increase the damage of Arcane Blast and Arcane Barrage by an additional 20%.",
      "pvp_tooltip": "Arcane Charges increase the damage of Arcane Blast and Arcane Barrage by an additional 20%.",
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
          "pve_tooltip": "Arcane Charges increase the damage of Arcane Blast and Arcane Barrage by an additional 10%.",
          "pvp_tooltip": "Arcane Charges increase the damage of Arcane Blast and Arcane Barrage by an additional 10%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "Arcane Charges increase the damage of Arcane Blast and Arcane Barrage by an additional 20%.",
          "pvp_tooltip": "Arcane Charges increase the damage of Arcane Blast and Arcane Barrage by an additional 20%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Eureka",
      "spell_id": 452198,
      "node_id": 108665,
      "entry_id": 134196,
      "definition_id": 138976,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108665,
        "node_name": "Eureka",
        "node_type": "single",
        "pos_x": 12300,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102451,
          102470
        ],
        "next": [
          109478
        ],
        "entry_id": 134196,
        "entry_max_ranks": 1,
        "definition_id": 138976,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Eureka",
        "spell_id": 452198,
        "visible_spell_id": null,
        "icon": "spell_mage_presenceofmind",
        "icon_candidates": [
          "spell_mage_presenceofmind"
        ]
      },
      "pve_tooltip": "When a spell consumes Clearcasting, its damage is increased by 20%.",
      "pvp_tooltip": "When a spell consumes Clearcasting, its damage is increased by 20%.",
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
      "talent_name": "Arcane Singularity",
      "spell_id": 1244001,
      "node_id": 108537,
      "entry_id": 134026,
      "definition_id": 138809,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108537,
        "node_name": "Arcane Singularity",
        "node_type": "single",
        "pos_x": 13500,
        "pos_y": 6300,
        "max_ranks": 2,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108551,
          102451
        ],
        "next": [
          102438,
          102474
        ],
        "entry_id": 134026,
        "entry_max_ranks": 2,
        "definition_id": 138809,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Arcane Singularity",
        "spell_id": 1244001,
        "visible_spell_id": null,
        "icon": "spell_nature_wispheal",
        "icon_candidates": [
          "spell_nature_wispheal"
        ]
      },
      "pve_tooltip": "Arcane Salvo damage bonus increased by 4%.\nArcane Salvo:\nIncreases the damage of your next Arcane Barrage by 3%.",
      "pvp_tooltip": "Arcane Salvo damage bonus increased by 2%.\nArcane Salvo:\nIncreases the damage of your next Arcane Barrage by 3%.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 39,
          "end": 40,
          "old_token": "4",
          "new_token": "2",
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
          "old": "4",
          "new": "2"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 1244001,
          "source_spell_id": 1244001,
          "effect_index": 1,
          "effect_text": "Apply Aura: Add Modifier - Flat (Label): Modifies Effect #1's Value (3)",
          "base_value": 2.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 1.0,
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
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 1244001,
          "source_spell_id": 44425,
          "effect_index": 1,
          "effect_text": "School Damage (Arcane) (SP mod: 0.87952)",
          "base_value": null,
          "spell_pvp_multiplier": 1.2879,
          "amount_kind": "direct",
          "aura_factor": 0.95,
          "final_pvp_multiplier": 1.223505,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1244001,
            1242974,
            44425
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "triggered_by_reverse"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256909,
              "game_effect_id": 1264661,
              "amount_kind": "direct",
              "value_pct": -5.0,
              "factor": 0.95,
              "label_id": null,
              "build": "12.1.0.69933"
            }
          ],
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
      "rank_tooltips": [
        {
          "rank": 1,
          "pve_tooltip": "Arcane Salvo damage bonus increased by 2%.\nArcane Salvo:\nIncreases the damage of your next Arcane Barrage by 3%.",
          "pvp_tooltip": "Arcane Salvo damage bonus increased by 1%.\nArcane Salvo:\nIncreases the damage of your next Arcane Barrage by 3%.",
          "tooltip_changed": true,
          "changes": [
            {
              "start": 39,
              "end": 40,
              "old_token": "2",
              "new_token": "1",
              "kind": "percent_value",
              "effect_indexes": [
                1
              ]
            }
          ],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "Arcane Salvo damage bonus increased by 4%.\nArcane Salvo:\nIncreases the damage of your next Arcane Barrage by 3%.",
          "pvp_tooltip": "Arcane Salvo damage bonus increased by 2%.\nArcane Salvo:\nIncreases the damage of your next Arcane Barrage by 3%.",
          "tooltip_changed": true,
          "changes": [
            {
              "start": 39,
              "end": 40,
              "old_token": "4",
              "new_token": "2",
              "kind": "percent_value",
              "effect_indexes": [
                1
              ]
            }
          ],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "High Voltage",
      "spell_id": 461248,
      "node_id": 102472,
      "entry_id": 126542,
      "definition_id": 131368,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102472,
        "node_name": "High Voltage / Charged Missiles",
        "node_type": "choice",
        "pos_x": 10500,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102480
        ],
        "next": [],
        "entry_id": 126542,
        "entry_max_ranks": 1,
        "definition_id": 131368,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "High Voltage",
        "spell_id": 461248,
        "visible_spell_id": null,
        "icon": "spell_shaman_maelstromweapon",
        "icon_candidates": [
          "spell_shaman_maelstromweapon"
        ]
      },
      "pve_tooltip": "Each wave of Arcane Missiles has a 50% chance to grant you 1 Arcane Charge.\nArcane Missiles damage increased by 20%.",
      "pvp_tooltip": "Each wave of Arcane Missiles has a 50% chance to grant you 1 Arcane Charge.\nArcane Missiles damage increased by 20%.",
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
      "talent_name": "Charged Missiles",
      "spell_id": 461251,
      "node_id": 102472,
      "entry_id": 134022,
      "definition_id": 138805,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102472,
        "node_name": "High Voltage / Charged Missiles",
        "node_type": "choice",
        "pos_x": 10500,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102480
        ],
        "next": [],
        "entry_id": 134022,
        "entry_max_ranks": 1,
        "definition_id": 138805,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Charged Missiles",
        "spell_id": 461251,
        "visible_spell_id": null,
        "icon": "ability_mage_missilebarrage",
        "icon_candidates": [
          "ability_mage_missilebarrage"
        ]
      },
      "pve_tooltip": "Each wave of Arcane Missiles will consume an Arcane Charge to increase its damage by 40%.",
      "pvp_tooltip": "Each wave of Arcane Missiles will consume an Arcane Charge to increase its damage by 40%.",
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
      "talent_name": "Overflowing Insight",
      "spell_id": 1243542,
      "node_id": 102476,
      "entry_id": 126546,
      "definition_id": 131372,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102476,
        "node_name": "Overflowing Insight",
        "node_type": "single",
        "pos_x": 11700,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102480
        ],
        "next": [],
        "entry_id": 126546,
        "entry_max_ranks": 1,
        "definition_id": 131372,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Overflowing Insight",
        "spell_id": 1243542,
        "visible_spell_id": null,
        "icon": "inv_offhand_pvealliance_d_01",
        "icon_candidates": [
          "inv_offhand_pvealliance_d_01"
        ]
      },
      "pve_tooltip": "The damage of Arcane Blast and Arcane Pulse are increased by 15%, but their mana costs are increased by 25%.",
      "pvp_tooltip": "The damage of Arcane Blast and Arcane Pulse are increased by 15%, but their mana costs are increased by 25%.",
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
      "talent_name": "Overpowered Missiles",
      "spell_id": 1244329,
      "node_id": 109478,
      "entry_id": 135698,
      "definition_id": 140453,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109478,
        "node_name": "Overpowered Missiles",
        "node_type": "single",
        "pos_x": 12300,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108665
        ],
        "next": [],
        "entry_id": 135698,
        "entry_max_ranks": 1,
        "definition_id": 140453,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Overpowered Missiles",
        "spell_id": 1244329,
        "visible_spell_id": null,
        "icon": "ability_socererking_arcanereplication",
        "icon_candidates": [
          "ability_socererking_arcanereplication"
        ]
      },
      "pve_tooltip": "Gaining Clearcasting has a 25% chance to cause your next Arcane Missiles to be Overpowered, causing it to deal 100% increased damage, generate maximum stacks of Arcane Salvo, and strike 3 additional targets at 50% effectiveness.",
      "pvp_tooltip": "Gaining Clearcasting has a 25% chance to cause your next Arcane Missiles to be Overpowered, causing it to deal 50% increased damage, generate maximum stacks of Arcane Salvo, and strike 3 additional targets at 50% effectiveness.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 111,
          "end": 114,
          "old_token": "100",
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
          "old": "100",
          "new": "50"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 1244329,
          "source_spell_id": 1277009,
          "effect_index": 1,
          "effect_text": "Apply Aura: Modifies Damage/Healing Done",
          "base_value": 100.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 50.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1244329,
            1277009
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
        }
      ],
      "render_effect_count": 1,
      "rank_tooltips": []
    },
    {
      "talent_name": "Orb Mastery",
      "spell_id": 1243435,
      "node_id": 102438,
      "entry_id": 126508,
      "definition_id": 131334,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102438,
        "node_name": "Orb Mastery",
        "node_type": "single",
        "pos_x": 12900,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108537
        ],
        "next": [],
        "entry_id": 126508,
        "entry_max_ranks": 1,
        "definition_id": 131334,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Orb Mastery",
        "spell_id": 1243435,
        "visible_spell_id": null,
        "icon": "ability_evoker_powerswell",
        "icon_candidates": [
          "ability_evoker_powerswell"
        ]
      },
      "pve_tooltip": "Casting Arcane Orb fires 2 additional Arcane Orbs at 50% effectiveness.",
      "pvp_tooltip": "Casting Arcane Orb fires 2 additional Arcane Orbs at 50% effectiveness.",
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
      "talent_name": "Orb Barrage",
      "spell_id": 384858,
      "node_id": 102474,
      "entry_id": 126544,
      "definition_id": 131370,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102474,
        "node_name": "Orb Barrage",
        "node_type": "single",
        "pos_x": 14100,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108537
        ],
        "next": [],
        "entry_id": 126544,
        "entry_max_ranks": 1,
        "definition_id": 131370,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Orb Barrage",
        "spell_id": 384858,
        "visible_spell_id": null,
        "icon": "spell_mage_arcaneorb_nightborne",
        "icon_candidates": [
          "spell_mage_arcaneorb_nightborne"
        ]
      },
      "pve_tooltip": "Arcane Barrage has a 4% chance per stack of Arcane Salvo to launch an Arcane Orb in front of you at 100% effectiveness.",
      "pvp_tooltip": "Arcane Barrage has a 4% chance per stack of Arcane Salvo to launch an Arcane Orb in front of you at 100% effectiveness.",
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
      "talent_name": "Prismatic Bolt",
      "spell_id": 1295923,
      "node_id": 110420,
      "entry_id": 137028,
      "definition_id": 141791,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110420,
        "node_name": "Prismatic Bolt / Prismatic Bolt / Prismatic Bolt",
        "node_type": "tiered",
        "pos_x": 12300,
        "pos_y": 7650,
        "max_ranks": 4,
        "required_points": 20,
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [],
        "entry_id": 137028,
        "entry_max_ranks": 1,
        "definition_id": 141791,
        "entry_index": 100,
        "entry_type": "tierrank",
        "talent_name": "Prismatic Bolt",
        "spell_id": 1295923,
        "visible_spell_id": null,
        "icon": "inv12_apextalent_mage_touchofthearchmage",
        "icon_candidates": [
          "inv12_apextalent_mage_touchofthearchmage"
        ]
      },
      "pve_tooltip": "40 yd range\nArcane Barrage has a 1% chance per stack of Arcane Salvo consumed to replace your next Arcane Blast with Prismatic Bolt.\nPrismatic Bolt\nDevastates the target with overwhelming energy, dealing (3200% of Spell Power) Arcane damage to them and (2500% of Spell Power) Arcane damage to other nearby enemies. Damage reduced beyond 5 targets.\nGenerates 4 Arcane Charges.",
      "pvp_tooltip": "40 yd range\nArcane Barrage has a 1% chance per stack of Arcane Salvo consumed to replace your next Arcane Blast with Prismatic Bolt.\nPrismatic Bolt\nDevastates the target with overwhelming energy, dealing (3040% of Spell Power) Arcane damage to them and (2375% of Spell Power) Arcane damage to other nearby enemies. Damage reduced beyond 5 targets.\nGenerates 4 Arcane Charges.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 205,
          "end": 209,
          "old_token": "3200",
          "new_token": "3040",
          "kind": "spell_power_coefficient",
          "effect_indexes": [
            1
          ]
        },
        {
          "start": 254,
          "end": 258,
          "old_token": "2500",
          "new_token": "2375",
          "kind": "spell_power_coefficient",
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
          "kind": "spell_power_coefficient",
          "old": "3200",
          "new": "3040"
        },
        {
          "effect_indexes": [
            2
          ],
          "status": "APPLIED",
          "kind": "spell_power_coefficient",
          "old": "2500",
          "new": "2375"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "EMBEDDED",
          "talent_spell_id": 1295923,
          "source_spell_id": 1295924,
          "effect_index": 1,
          "effect_text": "School Damage (2): arcane (SP mod: 32)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.95,
          "final_pvp_multiplier": 0.95,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1295923,
            1295924
          ],
          "dependency_relations": [
            "spelldesc_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256909,
              "game_effect_id": 1264661,
              "amount_kind": "direct",
              "value_pct": -5.0,
              "factor": 0.95,
              "label_id": null,
              "build": "12.1.0.69933"
            }
          ],
          "sources": [
            "simc",
            "drustvar"
          ],
          "source_notes": [],
          "confidence": "high"
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "EMBEDDED",
          "talent_spell_id": 1295923,
          "source_spell_id": 1295939,
          "effect_index": 2,
          "effect_text": "School Damage (2): arcane | Attributes: Always AOE Line of Sight (5), Add Target (Dest) Combat Reach to AOE (11) (SP mod: 25)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.95,
          "final_pvp_multiplier": 0.95,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1295923,
            1295924,
            1295939
          ],
          "dependency_relations": [
            "spelldesc_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256909,
              "game_effect_id": 1264661,
              "amount_kind": "direct",
              "value_pct": -5.0,
              "factor": 0.95,
              "label_id": null,
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
      "render_effect_count": 2,
      "rank_tooltips": []
    },
    {
      "talent_name": "Prismatic Bolt",
      "spell_id": 1295944,
      "node_id": 110420,
      "entry_id": 137027,
      "definition_id": 141790,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110420,
        "node_name": "Prismatic Bolt / Prismatic Bolt / Prismatic Bolt",
        "node_type": "tiered",
        "pos_x": 12300,
        "pos_y": 7650,
        "max_ranks": 4,
        "required_points": 20,
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [],
        "entry_id": 137027,
        "entry_max_ranks": 2,
        "definition_id": 141790,
        "entry_index": 200,
        "entry_type": "tierrank",
        "talent_name": "Prismatic Bolt",
        "spell_id": 1295944,
        "visible_spell_id": null,
        "icon": "inv12_apextalent_mage_touchofthearchmage",
        "icon_candidates": [
          "inv12_apextalent_mage_touchofthearchmage"
        ]
      },
      "pve_tooltip": "40 yd range\nPrismatic Bolt has a 100% chance to grant Clearcasting.\nArcane Missiles damage increased by 30%.",
      "pvp_tooltip": "40 yd range\nPrismatic Bolt has a 100% chance to grant Clearcasting.\nArcane Missiles damage increased by 30%.",
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
          "pve_tooltip": "40 yd range\nPrismatic Bolt has a 50% chance to grant Clearcasting.\nArcane Missiles damage increased by 15%.",
          "pvp_tooltip": "40 yd range\nPrismatic Bolt has a 50% chance to grant Clearcasting.\nArcane Missiles damage increased by 15%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "40 yd range\nPrismatic Bolt has a 100% chance to grant Clearcasting.\nArcane Missiles damage increased by 30%.",
          "pvp_tooltip": "40 yd range\nPrismatic Bolt has a 100% chance to grant Clearcasting.\nArcane Missiles damage increased by 30%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Prismatic Bolt",
      "spell_id": 1295946,
      "node_id": 110420,
      "entry_id": 137026,
      "definition_id": 141789,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110420,
        "node_name": "Prismatic Bolt / Prismatic Bolt / Prismatic Bolt",
        "node_type": "tiered",
        "pos_x": 12300,
        "pos_y": 7650,
        "max_ranks": 4,
        "required_points": 20,
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [],
        "entry_id": 137026,
        "entry_max_ranks": 1,
        "definition_id": 141789,
        "entry_index": 300,
        "entry_type": "tierrank",
        "talent_name": "Prismatic Bolt",
        "spell_id": 1295946,
        "visible_spell_id": null,
        "icon": "inv12_apextalent_mage_touchofthearchmage",
        "icon_candidates": [
          "inv12_apextalent_mage_touchofthearchmage"
        ]
      },
      "pve_tooltip": "40 yd range\nIncreases the chance to gain Prismatic Bolt by 1% per stack of Arcane Salvo consumed.\nArcane Barrage damage increased by 15%.",
      "pvp_tooltip": "40 yd range\nIncreases the chance to gain Prismatic Bolt by 1% per stack of Arcane Salvo consumed.\nArcane Barrage damage increased by 15%.",
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
      "talent_name": "Splintering Sorcery",
      "spell_id": 443739,
      "node_id": 94664,
      "entry_id": 117267,
      "definition_id": 122279,
      "tree_type": "hero",
      "hero_tree": "Spellslinger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Spellslinger",
        "subtree_id": 40,
        "node_id": 94664,
        "node_name": "Splintering Sorcery",
        "node_type": "single",
        "pos_x": 7800,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": true,
        "free_node": true,
        "prev": [],
        "next": [
          94662,
          94663,
          94661,
          109669
        ],
        "entry_id": 117267,
        "entry_max_ranks": 1,
        "definition_id": 122279,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Splintering Sorcery",
        "spell_id": 443739,
        "visible_spell_id": null,
        "icon": "achievement_dungeon_arcanevaults",
        "icon_candidates": [
          "achievement_dungeon_arcanevaults"
        ]
      },
      "pve_tooltip": "Casting Arcane Blast or Arcane Pulse conjures an Arcane Splinter.\nArcane Splinter:\nConjure raw Arcane magic into a sharp projectile that deals (43.65% of Spell Power) Arcane damage.",
      "pvp_tooltip": "Casting Arcane Blast or Arcane Pulse conjures an Arcane Splinter.\nArcane Splinter:\nConjure raw Arcane magic into a sharp projectile that deals (41.4675% of Spell Power) Arcane damage.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 144,
          "end": 149,
          "old_token": "43.65",
          "new_token": "41.4675",
          "kind": "spell_power_coefficient",
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
          "kind": "spell_power_coefficient",
          "old": 45.300000000000004,
          "new": 43.035000000000004,
          "full_tooltip_match_count": 1
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "spell_power_coefficient",
          "old": "43.65",
          "new": "41.4675"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "EMBEDDED",
          "talent_spell_id": 443739,
          "source_spell_id": 443722,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (SP mod: 0.453)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.95,
          "final_pvp_multiplier": 0.95,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            443739,
            443722
          ],
          "dependency_relations": [
            "spelldesc_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256909,
              "game_effect_id": 1264661,
              "amount_kind": "direct",
              "value_pct": -5.0,
              "factor": 0.95,
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
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "EMBEDDED",
          "talent_spell_id": 443739,
          "source_spell_id": 443763,
          "effect_index": 1,
          "effect_text": "School Damage (Arcane) (SP mod: 0.4365)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.95,
          "final_pvp_multiplier": 0.95,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            443739,
            443763
          ],
          "dependency_relations": [
            "spelldesc_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256909,
              "game_effect_id": 1264661,
              "amount_kind": "direct",
              "value_pct": -5.0,
              "factor": 0.95,
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
      "talent_name": "Augury Abounds",
      "spell_id": 1280165,
      "node_id": 94662,
      "entry_id": 117265,
      "definition_id": 122277,
      "tree_type": "hero",
      "hero_tree": "Spellslinger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Spellslinger",
        "subtree_id": 40,
        "node_id": 94662,
        "node_name": "Augury Abounds",
        "node_type": "single",
        "pos_x": 6900,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94664
        ],
        "next": [
          94659
        ],
        "entry_id": 117265,
        "entry_max_ranks": 1,
        "definition_id": 122277,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Augury Abounds",
        "spell_id": 1280165,
        "visible_spell_id": null,
        "icon": "spell_arcane_arcanepotency",
        "icon_candidates": [
          "spell_arcane_arcanepotency"
        ]
      },
      "pve_tooltip": "Conjuring one or more Arcane Splinters has a 10% chance to conjure a burst of 8 Arcane Splinters.",
      "pvp_tooltip": "Conjuring one or more Arcane Splinters has a 10% chance to conjure a burst of 8 Arcane Splinters.",
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
      "talent_name": "Force of Will",
      "spell_id": 444719,
      "node_id": 94663,
      "entry_id": 117266,
      "definition_id": 122278,
      "tree_type": "hero",
      "hero_tree": "Spellslinger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Spellslinger",
        "subtree_id": 40,
        "node_id": 94663,
        "node_name": "Force of Will",
        "node_type": "single",
        "pos_x": 7500,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94664
        ],
        "next": [
          94656
        ],
        "entry_id": 117266,
        "entry_max_ranks": 1,
        "definition_id": 122278,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Force of Will",
        "spell_id": 444719,
        "visible_spell_id": null,
        "icon": "spell_mage_overpowered",
        "icon_candidates": [
          "spell_mage_overpowered"
        ]
      },
      "pve_tooltip": "Casting Arcane Barrage conjures an Arcane Splinter for every 5 Arcane Salvo stacks consumed.",
      "pvp_tooltip": "Casting Arcane Barrage conjures an Arcane Splinter for every 5 Arcane Salvo stacks consumed.",
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
      "talent_name": "Splintering Orbs",
      "spell_id": 444256,
      "node_id": 94661,
      "entry_id": 117264,
      "definition_id": 122276,
      "tree_type": "hero",
      "hero_tree": "Spellslinger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Spellslinger",
        "subtree_id": 40,
        "node_id": 94661,
        "node_name": "Splintering Orbs",
        "node_type": "single",
        "pos_x": 8100,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94664
        ],
        "next": [
          94660
        ],
        "entry_id": 117264,
        "entry_max_ranks": 1,
        "definition_id": 122276,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Splintering Orbs",
        "spell_id": 444256,
        "visible_spell_id": null,
        "icon": "item_azereansphere",
        "icon_candidates": [
          "item_azereansphere"
        ]
      },
      "pve_tooltip": "Enemies damaged by your Arcane Orb conjure 2 Arcane Splinters, up to 4.\nArcane Orb damage is increased by 50%.",
      "pvp_tooltip": "Enemies damaged by your Arcane Orb conjure 2 Arcane Splinters, up to 4.\nArcane Orb damage is increased by 50%.",
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
      "talent_name": "Attuned Familiar",
      "spell_id": 1261106,
      "node_id": 109669,
      "entry_id": 135920,
      "definition_id": 140675,
      "tree_type": "hero",
      "hero_tree": "Spellslinger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Spellslinger",
        "subtree_id": 40,
        "node_id": 109669,
        "node_name": "Attuned Familiar / Shifting Shards",
        "node_type": "choice",
        "pos_x": 8700,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94664
        ],
        "next": [
          109668
        ],
        "entry_id": 135920,
        "entry_max_ranks": 1,
        "definition_id": 140675,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Attuned Familiar",
        "spell_id": 1261106,
        "visible_spell_id": null,
        "icon": "ability_socererking_arcanemines",
        "icon_candidates": [
          "ability_socererking_arcanemines",
          "spell_frost_summonwaterelemental_2"
        ]
      },
      "pve_tooltip": "Your Arcane Familiar has a 50% chance to conjure a Splinter alongside its Arcane Assault.",
      "pvp_tooltip": "Your Arcane Familiar has a 50% chance to conjure a Splinter alongside its Arcane Assault.",
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
      "talent_name": "Shifting Shards",
      "spell_id": 444675,
      "node_id": 109669,
      "entry_id": 135946,
      "definition_id": 140701,
      "tree_type": "hero",
      "hero_tree": "Spellslinger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Spellslinger",
        "subtree_id": 40,
        "node_id": 109669,
        "node_name": "Attuned Familiar / Shifting Shards",
        "node_type": "choice",
        "pos_x": 8700,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94664
        ],
        "next": [
          109668
        ],
        "entry_id": 135946,
        "entry_max_ranks": 1,
        "definition_id": 140701,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Shifting Shards",
        "spell_id": 444675,
        "visible_spell_id": null,
        "icon": "ability_mage_freeze",
        "icon_candidates": [
          "ability_mage_freeze"
        ]
      },
      "pve_tooltip": "Gaining Clearcasting conjures 2 Arcane Splinters.",
      "pvp_tooltip": "Gaining Clearcasting conjures 2 Arcane Splinters.",
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
      "talent_name": "Slippery Slinging",
      "spell_id": 444752,
      "node_id": 94659,
      "entry_id": 117262,
      "definition_id": 122274,
      "tree_type": "hero",
      "hero_tree": "Spellslinger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Spellslinger",
        "subtree_id": 40,
        "node_id": 94659,
        "node_name": "Slippery Slinging / Look Again",
        "node_type": "choice",
        "pos_x": 6900,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94662
        ],
        "next": [
          94658
        ],
        "entry_id": 117262,
        "entry_max_ranks": 1,
        "definition_id": 122274,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Slippery Slinging",
        "spell_id": 444752,
        "visible_spell_id": null,
        "icon": "ability_mage_icyfeet",
        "icon_candidates": [
          "ability_mage_icyfeet"
        ]
      },
      "pve_tooltip": "You have 40% increased movement speed during Alter Time.",
      "pvp_tooltip": "You have 20% increased movement speed during Alter Time.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 9,
          "end": 11,
          "old_token": "40",
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
          "old": "40",
          "new": "20"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 444752,
          "source_spell_id": 444752,
          "effect_index": 1,
          "effect_text": "Apply Aura: Dummy",
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
      "talent_name": "Look Again",
      "spell_id": 444756,
      "node_id": 94659,
      "entry_id": 123418,
      "definition_id": 128256,
      "tree_type": "hero",
      "hero_tree": "Spellslinger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Spellslinger",
        "subtree_id": 40,
        "node_id": 94659,
        "node_name": "Slippery Slinging / Look Again",
        "node_type": "choice",
        "pos_x": 6900,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94662
        ],
        "next": [
          94658
        ],
        "entry_id": 123418,
        "entry_max_ranks": 1,
        "definition_id": 128256,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Look Again",
        "spell_id": 444756,
        "visible_spell_id": null,
        "icon": "achievement_bg_tophealer_av",
        "icon_candidates": [
          "achievement_bg_tophealer_av"
        ]
      },
      "pve_tooltip": "While in combat, Blink summons a Mirror Image at your previous location.",
      "pvp_tooltip": "While in combat, Blink summons a Mirror Image at your previous location.",
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
      "talent_name": "Controlled Instincts",
      "spell_id": 444483,
      "node_id": 94656,
      "entry_id": 117259,
      "definition_id": 122271,
      "tree_type": "hero",
      "hero_tree": "Spellslinger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Spellslinger",
        "subtree_id": 40,
        "node_id": 94656,
        "node_name": "Controlled Instincts",
        "node_type": "single",
        "pos_x": 7500,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94663
        ],
        "next": [
          94657
        ],
        "entry_id": 117259,
        "entry_max_ranks": 1,
        "definition_id": 122271,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Controlled Instincts",
        "spell_id": 444483,
        "visible_spell_id": null,
        "icon": "spell_frost_ice_shards",
        "icon_candidates": [
          "spell_frost_ice_shards",
          "spell_frost_ice-shards"
        ]
      },
      "pve_tooltip": "40% of the direct damage dealt by an Arcane Splinter is also dealt to nearby enemies. Damage reduced beyond 5 targets.",
      "pvp_tooltip": "40% of the direct damage dealt by an Arcane Splinter is also dealt to nearby enemies. Damage reduced beyond 5 targets.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "RUNTIME",
          "talent_spell_id": 444483,
          "source_spell_id": 114923,
          "effect_index": 1,
          "effect_text": "Apply Aura: Periodic Damage",
          "base_value": null,
          "spell_pvp_multiplier": 2.5,
          "amount_kind": "periodic",
          "aura_factor": 0.95,
          "final_pvp_multiplier": 2.375,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            444483,
            114923
          ],
          "dependency_relations": [
            "triggered_by_reverse"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256909,
              "game_effect_id": 1264842,
              "amount_kind": "periodic",
              "value_pct": -5.0,
              "factor": 0.95,
              "label_id": null,
              "build": "12.1.0.69933"
            }
          ],
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
    },
    {
      "talent_name": "Reactive Barrier",
      "spell_id": 444827,
      "node_id": 94660,
      "entry_id": 117263,
      "definition_id": 122275,
      "tree_type": "hero",
      "hero_tree": "Spellslinger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Spellslinger",
        "subtree_id": 40,
        "node_id": 94660,
        "node_name": "Reactive Barrier / Phantasmal Image",
        "node_type": "choice",
        "pos_x": 8100,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94661
        ],
        "next": [
          94655
        ],
        "entry_id": 117263,
        "entry_max_ranks": 1,
        "definition_id": 122275,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Reactive Barrier",
        "spell_id": 444827,
        "visible_spell_id": null,
        "icon": "ability_racial_forceshield",
        "icon_candidates": [
          "ability_racial_forceshield"
        ]
      },
      "pve_tooltip": "Your Prismatic Barrier can absorb up to 25% more damage based on your missing health.\nMax effectiveness when under 25% health.",
      "pvp_tooltip": "Your Prismatic Barrier can absorb up to 12.5% more damage based on your missing health.\nMax effectiveness when under 12.5% health.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 40,
          "end": 42,
          "old_token": "25",
          "new_token": "12.5",
          "kind": "percent_value",
          "effect_indexes": [
            1
          ]
        },
        {
          "start": 115,
          "end": 117,
          "old_token": "25",
          "new_token": "12.5",
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
          "new": "12.5"
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "percent_value",
          "old": "25",
          "new": "12.5"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 444827,
          "source_spell_id": 444827,
          "effect_index": 1,
          "effect_text": "Apply Aura: Dummy",
          "base_value": 25.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 12.5,
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
      "talent_name": "Phantasmal Image",
      "spell_id": 444784,
      "node_id": 94660,
      "entry_id": 123417,
      "definition_id": 128255,
      "tree_type": "hero",
      "hero_tree": "Spellslinger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Spellslinger",
        "subtree_id": 40,
        "node_id": 94660,
        "node_name": "Reactive Barrier / Phantasmal Image",
        "node_type": "choice",
        "pos_x": 8100,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94661
        ],
        "next": [
          94655
        ],
        "entry_id": 123417,
        "entry_max_ranks": 1,
        "definition_id": 128255,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Phantasmal Image",
        "spell_id": 444784,
        "visible_spell_id": null,
        "icon": "spell_arcane_prismaticcloak",
        "icon_candidates": [
          "spell_arcane_prismaticcloak"
        ]
      },
      "pve_tooltip": "Your Mirror Image summons 1 extra copy of you.",
      "pvp_tooltip": "Your Mirror Image summons 1 extra copy of you.",
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
      "talent_name": "Infused Splinters",
      "spell_id": 1261080,
      "node_id": 109668,
      "entry_id": 135919,
      "definition_id": 140674,
      "tree_type": "hero",
      "hero_tree": "Spellslinger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Spellslinger",
        "subtree_id": 40,
        "node_id": 109668,
        "node_name": "Infused Splinters",
        "node_type": "single",
        "pos_x": 8700,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109669
        ],
        "next": [
          109667
        ],
        "entry_id": 135919,
        "entry_max_ranks": 1,
        "definition_id": 140674,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Infused Splinters",
        "spell_id": 1261080,
        "visible_spell_id": null,
        "icon": "spell_mage_focusingcrystal",
        "icon_candidates": [
          "spell_mage_focusingcrystal"
        ]
      },
      "pve_tooltip": "Direct damage from Arcane Splinters have a 25% chance to grant 1 stack Arcane Salvo.\nArcane Salvo\nIncreases the damage of your next Arcane Barrage by 3%.",
      "pvp_tooltip": "Direct damage from Arcane Splinters have a 25% chance to grant 1 stack Arcane Salvo.\nArcane Salvo\nIncreases the damage of your next Arcane Barrage by 3%.",
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
      "talent_name": "Archmage's Wrath",
      "spell_id": 444968,
      "node_id": 94658,
      "entry_id": 117261,
      "definition_id": 122273,
      "tree_type": "hero",
      "hero_tree": "Spellslinger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Spellslinger",
        "subtree_id": 40,
        "node_id": 94658,
        "node_name": "Archmage's Wrath",
        "node_type": "single",
        "pos_x": 6900,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94659
        ],
        "next": [
          94654
        ],
        "entry_id": 117261,
        "entry_max_ranks": 1,
        "definition_id": 122273,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Archmage's Wrath",
        "spell_id": 444968,
        "visible_spell_id": null,
        "icon": "spell_arcane_arcane03",
        "icon_candidates": [
          "spell_arcane_arcane03"
        ]
      },
      "pve_tooltip": "100 yd range\nArcane Surge damage increased by 30%.\nYour chance to gain Clearcasting is increased by 3%.",
      "pvp_tooltip": "100 yd range\nArcane Surge damage increased by 30%.\nYour chance to gain Clearcasting is increased by 3%.",
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
      "talent_name": "Signature Spell",
      "spell_id": 470021,
      "node_id": 94657,
      "entry_id": 128267,
      "definition_id": 133074,
      "tree_type": "hero",
      "hero_tree": "Spellslinger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Spellslinger",
        "subtree_id": 40,
        "node_id": 94657,
        "node_name": "Signature Spell",
        "node_type": "single",
        "pos_x": 7500,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94656
        ],
        "next": [
          94654
        ],
        "entry_id": 128267,
        "entry_max_ranks": 1,
        "definition_id": 133074,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Signature Spell",
        "spell_id": 470021,
        "visible_spell_id": null,
        "icon": "inv_enchanting_815_drustwand",
        "icon_candidates": [
          "inv_enchanting_815_drustwand"
        ]
      },
      "pve_tooltip": "Arcane Blast and Arcane Pulse damage increased by 15%.\nCasting Touch of the Magi conjures 4 Arcane Splinters.",
      "pvp_tooltip": "Arcane Blast and Arcane Pulse damage increased by 15%.\nCasting Touch of the Magi conjures 4 Arcane Splinters.",
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
      "talent_name": "Spellfrost Teachings",
      "spell_id": 444986,
      "node_id": 94655,
      "entry_id": 117258,
      "definition_id": 122270,
      "tree_type": "hero",
      "hero_tree": "Spellslinger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Spellslinger",
        "subtree_id": 40,
        "node_id": 94655,
        "node_name": "Spellfrost Teachings",
        "node_type": "single",
        "pos_x": 8100,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94660
        ],
        "next": [
          94654
        ],
        "entry_id": 117258,
        "entry_max_ranks": 1,
        "definition_id": 122270,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Spellfrost Teachings",
        "spell_id": 444986,
        "visible_spell_id": null,
        "icon": "70_inscription_vantus_rune_azure",
        "icon_candidates": [
          "70_inscription_vantus_rune_azure"
        ]
      },
      "pve_tooltip": "Direct damage from Arcane Splinters reduces the cooldown of Arcane Orb by 0.30 sec.",
      "pvp_tooltip": "Direct damage from Arcane Splinters reduces the cooldown of Arcane Orb by 0.30 sec.",
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
      "talent_name": "Polished Focus",
      "spell_id": 1261082,
      "node_id": 109667,
      "entry_id": 135918,
      "definition_id": 140673,
      "tree_type": "hero",
      "hero_tree": "Spellslinger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Spellslinger",
        "subtree_id": 40,
        "node_id": 109667,
        "node_name": "Polished Focus",
        "node_type": "single",
        "pos_x": 8700,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109668
        ],
        "next": [
          94654
        ],
        "entry_id": 135918,
        "entry_max_ranks": 1,
        "definition_id": 140673,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Polished Focus",
        "spell_id": 1261082,
        "visible_spell_id": null,
        "icon": "inv_misc_orb_blue",
        "icon_candidates": [
          "inv_misc_orb_blue"
        ]
      },
      "pve_tooltip": "Casting Arcane Barrage while at 20 or more Arcane Salvo stacks refunds 3 Arcane Salvo stacks.\nArcane Barrage damage increased by 15%.",
      "pvp_tooltip": "Casting Arcane Barrage while at 20 or more Arcane Salvo stacks refunds 3 Arcane Salvo stacks.\nArcane Barrage damage increased by 15%.",
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
      "talent_name": "Splinterstorm",
      "spell_id": 443783,
      "node_id": 94654,
      "entry_id": 117257,
      "definition_id": 122269,
      "tree_type": "hero",
      "hero_tree": "Spellslinger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Spellslinger",
        "subtree_id": 40,
        "node_id": 94654,
        "node_name": "Splinterstorm",
        "node_type": "single",
        "pos_x": 7800,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94655,
          109667,
          94658,
          94657
        ],
        "next": [],
        "entry_id": 117257,
        "entry_max_ranks": 1,
        "definition_id": 122269,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Splinterstorm",
        "spell_id": 443783,
        "visible_spell_id": null,
        "icon": "ability_mage_burstofcold",
        "icon_candidates": [
          "ability_mage_burstofcold"
        ]
      },
      "pve_tooltip": "Casting Arcane Surge generates 8 Arcane Splinters.\nDuring Arcane Surge, your chance to conjure an additional Arcane Splinter is increased to 100%.",
      "pvp_tooltip": "Casting Arcane Surge generates 8 Arcane Splinters.\nDuring Arcane Surge, your chance to conjure an additional Arcane Splinter is increased to 100%.",
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
      "talent_name": "Spellfire Spheres",
      "spell_id": 448601,
      "node_id": 94647,
      "entry_id": 117250,
      "definition_id": 122262,
      "tree_type": "hero",
      "hero_tree": "Sunfury",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Sunfury",
        "subtree_id": 39,
        "node_id": 94647,
        "node_name": "Spellfire Spheres",
        "node_type": "single",
        "pos_x": 7800,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": true,
        "free_node": true,
        "prev": [],
        "next": [
          94653,
          94652,
          94644,
          109675
        ],
        "entry_id": 117250,
        "entry_max_ranks": 1,
        "definition_id": 122262,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Spellfire Spheres",
        "spell_id": 448601,
        "visible_spell_id": null,
        "icon": "inv_1115_mage_spellfirespheresgeneration",
        "icon_candidates": [
          "inv_1115_mage_spellfirespheresgeneration"
        ]
      },
      "pve_tooltip": "Casting a damaging spell has a 6% chance to conjure a Spellfire Sphere.\nWhile you're out of combat, you will slowly conjure Spellfire Spheres over time.\nSpellfire Sphere\nIncreases your spell damage by 1.0%. Stacks up to 3 times.",
      "pvp_tooltip": "Casting a damaging spell has a 6% chance to conjure a Spellfire Sphere.\nWhile you're out of combat, you will slowly conjure Spellfire Spheres over time.\nSpellfire Sphere\nIncreases your spell damage by 1.0%. Stacks up to 3 times.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "EMBEDDED",
          "talent_spell_id": 448601,
          "source_spell_id": 448604,
          "effect_index": 1,
          "effect_text": "Apply Aura: Modifies Damage/Healing Done",
          "base_value": 1.0,
          "spell_pvp_multiplier": 2.0,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 2.0,
          "final_pvp_value": 2.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            448601,
            448604
          ],
          "dependency_relations": [
            "spelldesc_ref"
          ],
          "aura_rules": [],
          "sources": [
            "wowhead",
            "simc"
          ],
          "source_notes": [],
          "confidence": "ambiguous"
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "EMBEDDED",
          "talent_spell_id": 448601,
          "source_spell_id": 448604,
          "effect_index": 2,
          "effect_text": "Apply Aura: Modifies Periodic Damage/Healing Done (22)",
          "base_value": 1.0,
          "spell_pvp_multiplier": 2.0,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 2.0,
          "final_pvp_value": 2.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            448601,
            448604
          ],
          "dependency_relations": [
            "spelldesc_ref"
          ],
          "aura_rules": [],
          "sources": [
            "wowhead",
            "simc"
          ],
          "source_notes": [
            {
              "spell_id": 448604,
              "talent_name": "Spellfire Spheres",
              "side": "drustvar",
              "reason": "SUPERSEDED_DRUSTVAR_EFFECT",
              "multiplier": 2.0,
              "effect_text": "Apply Aura (6) | Add Percent Modifier (108): Spell Direct Amount (0)",
              "source_build": "12.1.0.69933",
              "game_effect_id": 1147193,
              "is_hotfixed": false,
              "effect_origin": "DEPENDENCY",
              "talent_spell_id": 448601,
              "source_spell_id": 448604,
              "dependency_kind": "EMBEDDED",
              "dependency_path": [
                448601,
                448604
              ],
              "dependency_relations": [
                "spelldesc_ref"
              ],
              "current_build": "12.1.0.69933",
              "effect_index": 2,
              "current_multiplier": 2.0,
              "current_effect_text": "Apply Aura (6) | Add Percent Modifier (108): Spell Periodic Amount (22)",
              "source_build_relation": "same_build_conflict",
              "resolved_by": [
                "wowhead",
                "simc_exact_build"
              ]
            }
          ],
          "confidence": "ambiguous"
        }
      ],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Mana Cascade",
      "spell_id": 449293,
      "node_id": 94653,
      "entry_id": 117256,
      "definition_id": 122268,
      "tree_type": "hero",
      "hero_tree": "Sunfury",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Sunfury",
        "subtree_id": 39,
        "node_id": 94653,
        "node_name": "Mana Cascade",
        "node_type": "single",
        "pos_x": 6900,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94647
        ],
        "next": [
          94649
        ],
        "entry_id": 117256,
        "entry_max_ranks": 1,
        "definition_id": 122268,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Mana Cascade",
        "spell_id": 449293,
        "visible_spell_id": null,
        "icon": "spell_frost_manarecharge",
        "icon_candidates": [
          "spell_frost_manarecharge"
        ]
      },
      "pve_tooltip": "Casting Arcane Blast, Arcane Pulse, Arcane Barrage, or Prismatic Bolt grants you 0.5% Haste for 6 sec. Multiple applications may overlap.",
      "pvp_tooltip": "Casting Arcane Blast, Arcane Pulse, Arcane Barrage, or Prismatic Bolt grants you 0.5% Haste for 6 sec. Multiple applications may overlap.",
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
      "talent_name": "Invocation: Arcane Phoenix",
      "spell_id": 448658,
      "node_id": 94652,
      "entry_id": 117255,
      "definition_id": 122267,
      "tree_type": "hero",
      "hero_tree": "Sunfury",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Sunfury",
        "subtree_id": 39,
        "node_id": 94652,
        "node_name": "Invocation: Arcane Phoenix",
        "node_type": "single",
        "pos_x": 7500,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94647
        ],
        "next": [
          94645
        ],
        "entry_id": 117255,
        "entry_max_ranks": 1,
        "definition_id": 122267,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Invocation: Arcane Phoenix",
        "spell_id": 448658,
        "visible_spell_id": null,
        "icon": "inv_misc_phoenixegg",
        "icon_candidates": [
          "inv_misc_phoenixegg"
        ]
      },
      "pve_tooltip": "When you cast Arcane Surge, summon an Arcane Phoenix to aid you in battle.\nArcane Phoenix\nYour Arcane Phoenix aids you for the duration of your Arcane Surge, casting random Arcane and Fire spells.",
      "pvp_tooltip": "When you cast Arcane Surge, summon an Arcane Phoenix to aid you in battle.\nArcane Phoenix\nYour Arcane Phoenix aids you for the duration of your Arcane Surge, casting random Arcane and Fire spells.",
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
      "talent_name": "Burden of Power",
      "spell_id": 451035,
      "node_id": 94644,
      "entry_id": 117247,
      "definition_id": 122259,
      "tree_type": "hero",
      "hero_tree": "Sunfury",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Sunfury",
        "subtree_id": 39,
        "node_id": 94644,
        "node_name": "Burden of Power",
        "node_type": "single",
        "pos_x": 8100,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94647
        ],
        "next": [
          94651
        ],
        "entry_id": 117247,
        "entry_max_ranks": 1,
        "definition_id": 122259,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Burden of Power",
        "spell_id": 451035,
        "visible_spell_id": null,
        "icon": "inv_ragnaros_heart",
        "icon_candidates": [
          "inv_ragnaros_heart"
        ]
      },
      "pve_tooltip": "Arcane Blast damage increased by 30%.\nArcane Pulse damage increased by 20%.",
      "pvp_tooltip": "Arcane Blast damage increased by 30%.\nArcane Pulse damage increased by 20%.",
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
      "talent_name": "Glorious Incandescence",
      "spell_id": 449394,
      "node_id": 109675,
      "entry_id": 135926,
      "definition_id": 140681,
      "tree_type": "hero",
      "hero_tree": "Sunfury",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Sunfury",
        "subtree_id": 39,
        "node_id": 109675,
        "node_name": "Glorious Incandescence",
        "node_type": "single",
        "pos_x": 8700,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94647
        ],
        "next": [
          109674
        ],
        "entry_id": 135926,
        "entry_max_ranks": 1,
        "definition_id": 140681,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Glorious Incandescence",
        "spell_id": 449394,
        "visible_spell_id": null,
        "icon": "spell_burningsoul",
        "icon_candidates": [
          "spell_burningsoul"
        ]
      },
      "pve_tooltip": "Arcane Barrage summons 1 Meteorite for every 5 Arcane Salvo stacks consumed.\nMeteorite\nCalls down a meteorite which lands at the target location after 3 sec, dealing (102% of Spell Power) Fire damage to all enemies hit, reduced beyond 8 targets.",
      "pvp_tooltip": "Arcane Barrage summons 1 Meteorite for every 5 Arcane Salvo stacks consumed.\nMeteorite\nCalls down a meteorite which lands at the target location after 3 sec, dealing (96.9% of Spell Power) Fire damage to all enemies hit, reduced beyond 8 targets.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 167,
          "end": 170,
          "old_token": "102",
          "new_token": "96.9",
          "kind": "spell_power_coefficient",
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
          "kind": "spell_power_coefficient",
          "old": "102",
          "new": "96.9"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "EMBEDDED",
          "talent_spell_id": 449394,
          "source_spell_id": 449569,
          "effect_index": 1,
          "effect_text": "School Damage (Fire) (SP mod: 1.02)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.95,
          "final_pvp_multiplier": 0.95,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            449394,
            449559,
            449569
          ],
          "dependency_relations": [
            "spelldesc_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256909,
              "game_effect_id": 1264661,
              "amount_kind": "direct",
              "value_pct": -5.0,
              "factor": 0.95,
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
      "render_effect_count": 1,
      "rank_tooltips": []
    },
    {
      "talent_name": "Merely a Setback",
      "spell_id": 449330,
      "node_id": 94649,
      "entry_id": 117252,
      "definition_id": 122264,
      "tree_type": "hero",
      "hero_tree": "Sunfury",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Sunfury",
        "subtree_id": 39,
        "node_id": 94649,
        "node_name": "Merely a Setback / Time Twist",
        "node_type": "choice",
        "pos_x": 6900,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94653
        ],
        "next": [
          94650
        ],
        "entry_id": 117252,
        "entry_max_ranks": 1,
        "definition_id": 122264,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Merely a Setback",
        "spell_id": 449330,
        "visible_spell_id": null,
        "icon": "inv_helm_robe_raidmage_i_01",
        "icon_candidates": [
          "inv_helm_robe_raidmage_i_01"
        ]
      },
      "pve_tooltip": "The bonuses provided by your Barrier spells persist at 100% effectiveness for an additional 8 sec after your Barrier is removed.",
      "pvp_tooltip": "The bonuses provided by your Barrier spells persist at 100% effectiveness for an additional 8 sec after your Barrier is removed.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 449330,
          "source_spell_id": 449336,
          "effect_index": 2,
          "effect_text": "Apply Aura: Dummy (127)",
          "base_value": 0.0,
          "spell_pvp_multiplier": 0.0,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.0,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            449330,
            449336
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [],
          "sources": [
            "wowhead",
            "simc"
          ],
          "source_notes": [],
          "confidence": "high"
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 449330,
          "source_spell_id": 449336,
          "effect_index": 3,
          "effect_text": "Apply Aura: Mod % Damage Taken (All)",
          "base_value": -15.0,
          "spell_pvp_multiplier": 0.67,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.67,
          "final_pvp_value": -10.05,
          "is_final_pvp_modified": true,
          "dependency_path": [
            449330,
            449336
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
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 449330,
          "source_spell_id": 449336,
          "effect_index": 4,
          "effect_text": "Apply Aura: Mod Debuffs Duration % (Magic)",
          "base_value": -25.0,
          "spell_pvp_multiplier": 0.6,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.6,
          "final_pvp_value": -15.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            449330,
            449336
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
        }
      ],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Time Twist",
      "spell_id": 1255166,
      "node_id": 94649,
      "entry_id": 135598,
      "definition_id": 140354,
      "tree_type": "hero",
      "hero_tree": "Sunfury",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Sunfury",
        "subtree_id": 39,
        "node_id": 94649,
        "node_name": "Merely a Setback / Time Twist",
        "node_type": "choice",
        "pos_x": 6900,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94653
        ],
        "next": [
          94650
        ],
        "entry_id": 135598,
        "entry_max_ranks": 1,
        "definition_id": 140354,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Time Twist",
        "spell_id": 1255166,
        "visible_spell_id": null,
        "icon": "spell_holy_borrowedtime",
        "icon_candidates": [
          "spell_holy_borrowedtime"
        ]
      },
      "pve_tooltip": "The cooldown of Alter Time is reduced by 10 sec.",
      "pvp_tooltip": "The cooldown of Alter Time is reduced by 10 sec.",
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
      "talent_name": "Codex of the Sunstriders",
      "spell_id": 449382,
      "node_id": 94645,
      "entry_id": 117248,
      "definition_id": 122260,
      "tree_type": "hero",
      "hero_tree": "Sunfury",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Sunfury",
        "subtree_id": 39,
        "node_id": 94645,
        "node_name": "Codex of the Sunstriders",
        "node_type": "single",
        "pos_x": 7500,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94652
        ],
        "next": [
          94643
        ],
        "entry_id": 117248,
        "entry_max_ranks": 1,
        "definition_id": 122260,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Codex of the Sunstriders",
        "spell_id": 449382,
        "visible_spell_id": null,
        "icon": "inv_10_inscription2_book3_color1",
        "icon_candidates": [
          "inv_10_inscription2_book3_color1"
        ]
      },
      "pve_tooltip": "When your Arcane Phoenix is summoned, it consumes all your Spellfire Spheres.\nEach Sphere consumed increases your spell damage during Arcane Surge by 1% and causes your Arcane Phoenix to cast an exceptional Arcane or Fire spell over its duration.",
      "pvp_tooltip": "When your Arcane Phoenix is summoned, it consumes all your Spellfire Spheres.\nEach Sphere consumed increases your spell damage during Arcane Surge by 1% and causes your Arcane Phoenix to cast an exceptional Arcane or Fire spell over its duration.",
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
      "talent_name": "Lessons in Debilitation",
      "spell_id": 449627,
      "node_id": 94651,
      "entry_id": 117254,
      "definition_id": 122266,
      "tree_type": "hero",
      "hero_tree": "Sunfury",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Sunfury",
        "subtree_id": 39,
        "node_id": 94651,
        "node_name": "Lessons in Debilitation / Explosive Potential",
        "node_type": "choice",
        "pos_x": 8100,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94644
        ],
        "next": [
          94648
        ],
        "entry_id": 117254,
        "entry_max_ranks": 1,
        "definition_id": 122266,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Lessons in Debilitation",
        "spell_id": 449627,
        "visible_spell_id": null,
        "icon": "ability_paladin_handoflight",
        "icon_candidates": [
          "ability_paladin_handoflight"
        ]
      },
      "pve_tooltip": "Your Arcane Phoenix has picked up a few tricks, and will Spellsteal when it is summoned and when it expires.",
      "pvp_tooltip": "Your Arcane Phoenix has picked up a few tricks, and will Spellsteal when it is summoned and when it expires.",
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
      "talent_name": "Explosive Potential",
      "spell_id": 1246030,
      "node_id": 94651,
      "entry_id": 134249,
      "definition_id": 139025,
      "tree_type": "hero",
      "hero_tree": "Sunfury",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Sunfury",
        "subtree_id": 39,
        "node_id": 94651,
        "node_name": "Lessons in Debilitation / Explosive Potential",
        "node_type": "choice",
        "pos_x": 8100,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94644
        ],
        "next": [
          94648
        ],
        "entry_id": 134249,
        "entry_max_ranks": 1,
        "definition_id": 139025,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Explosive Potential",
        "spell_id": 1246030,
        "visible_spell_id": null,
        "icon": "6bf_explosive_shard",
        "icon_candidates": [
          "6bf_explosive_shard"
        ]
      },
      "pve_tooltip": "After casting Arcane Surge, your next Blink will cause a Blast Wave at your previous location, dealing (54.3375% of Spell Power) Fire damage, knocking enemies back 8 yds, and slowing them by 70% for 6 sec.",
      "pvp_tooltip": "After casting Arcane Surge, your next Blink will cause a Blast Wave at your previous location, dealing (51.6206% of Spell Power) Fire damage, knocking enemies back 8 yds, and slowing them by 70% for 6 sec.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 104,
          "end": 111,
          "old_token": "54.3375",
          "new_token": "51.6206",
          "kind": "spell_power_coefficient",
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
          "kind": "spell_power_coefficient",
          "old": "54.3375",
          "new": "51.6206"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 1246030,
          "source_spell_id": 157981,
          "effect_index": 1,
          "effect_text": "School Damage (Fire) (SP mod: 0.543375)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.95,
          "final_pvp_multiplier": 0.95,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1246030,
            157981
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256909,
              "game_effect_id": 1264661,
              "amount_kind": "direct",
              "value_pct": -5.0,
              "factor": 0.95,
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
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "RUNTIME",
          "talent_spell_id": 1246030,
          "source_spell_id": 1246032,
          "effect_index": 1,
          "effect_text": "Apply Aura: Dummy (127)",
          "base_value": 0.0,
          "spell_pvp_multiplier": 0.0,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.0,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1246030,
            1246032
          ],
          "dependency_relations": [
            "trigger_spell"
          ],
          "aura_rules": [],
          "sources": [
            "wowhead",
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
      "talent_name": "Pyrocosm",
      "spell_id": 1260673,
      "node_id": 109674,
      "entry_id": 135925,
      "definition_id": 140680,
      "tree_type": "hero",
      "hero_tree": "Sunfury",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Sunfury",
        "subtree_id": 39,
        "node_id": 109674,
        "node_name": "Pyrocosm",
        "node_type": "single",
        "pos_x": 8700,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109675
        ],
        "next": [
          109673
        ],
        "entry_id": 135925,
        "entry_max_ranks": 1,
        "definition_id": 140680,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Pyrocosm",
        "spell_id": 1260673,
        "visible_spell_id": null,
        "icon": "spell_fire_meteorstorm",
        "icon_candidates": [
          "spell_fire_meteorstorm"
        ]
      },
      "pve_tooltip": "Each wave of Arcane Missiles has a 10% chance to summon a Meteorite.\nWhen a Meteorite lands, you have a 5% chance to gain Clearcasting.",
      "pvp_tooltip": "Each wave of Arcane Missiles has a 10% chance to summon a Meteorite.\nWhen a Meteorite lands, you have a 5% chance to gain Clearcasting.",
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
      "talent_name": "Savor the Moment",
      "spell_id": 449412,
      "node_id": 94650,
      "entry_id": 117253,
      "definition_id": 122265,
      "tree_type": "hero",
      "hero_tree": "Sunfury",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Sunfury",
        "subtree_id": 39,
        "node_id": 94650,
        "node_name": "Savor the Moment / Sunfury Execution",
        "node_type": "choice",
        "pos_x": 6900,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94649
        ],
        "next": [
          94646
        ],
        "entry_id": 117253,
        "entry_max_ranks": 1,
        "definition_id": 122265,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Savor the Moment",
        "spell_id": 449412,
        "visible_spell_id": null,
        "icon": "spell_fire_masterofelements",
        "icon_candidates": [
          "spell_fire_masterofelements"
        ]
      },
      "pve_tooltip": "When you cast Arcane Surge, its duration is extended by 0.8 sec for each Spellfire Sphere you have, up to 2.4 sec.",
      "pvp_tooltip": "When you cast Arcane Surge, its duration is extended by 0.8 sec for each Spellfire Sphere you have, up to 2.4 sec.",
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
      "talent_name": "Sunfury Execution",
      "spell_id": 449349,
      "node_id": 94650,
      "entry_id": 123867,
      "definition_id": 128705,
      "tree_type": "hero",
      "hero_tree": "Sunfury",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Sunfury",
        "subtree_id": 39,
        "node_id": 94650,
        "node_name": "Savor the Moment / Sunfury Execution",
        "node_type": "choice",
        "pos_x": 6900,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94649
        ],
        "next": [
          94646
        ],
        "entry_id": 123867,
        "entry_max_ranks": 1,
        "definition_id": 128705,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Sunfury Execution",
        "spell_id": 449349,
        "visible_spell_id": null,
        "icon": "spell_shadow_shadowandflame",
        "icon_candidates": [
          "spell_shadow_shadowandflame"
        ]
      },
      "pve_tooltip": "Arcane Barrage deals 5% increased damage to enemies affected by your Touch of the Magi.",
      "pvp_tooltip": "Arcane Barrage deals 5% increased damage to enemies affected by your Touch of the Magi.",
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
      "talent_name": "Ashes of Inspiration",
      "spell_id": 1260272,
      "node_id": 94643,
      "entry_id": 117246,
      "definition_id": 122258,
      "tree_type": "hero",
      "hero_tree": "Sunfury",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Sunfury",
        "subtree_id": 39,
        "node_id": 94643,
        "node_name": "Ashes of Inspiration",
        "node_type": "single",
        "pos_x": 7500,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94645
        ],
        "next": [
          94646
        ],
        "entry_id": 117246,
        "entry_max_ranks": 1,
        "definition_id": 122258,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Ashes of Inspiration",
        "spell_id": 1260272,
        "visible_spell_id": null,
        "icon": "inv_misc_powder_copper",
        "icon_candidates": [
          "inv_misc_powder_copper"
        ]
      },
      "pve_tooltip": "Each time your Phoenix casts a spell, gain 1 stack of Mana Cascade.\nExceptional spells grant 1 additional stack.",
      "pvp_tooltip": "Each time your Phoenix casts a spell, gain 1 stack of Mana Cascade.\nExceptional spells grant 1 additional stack.",
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
      "talent_name": "Rondurmancy",
      "spell_id": 449596,
      "node_id": 94648,
      "entry_id": 117251,
      "definition_id": 122263,
      "tree_type": "hero",
      "hero_tree": "Sunfury",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Sunfury",
        "subtree_id": 39,
        "node_id": 94648,
        "node_name": "Rondurmancy",
        "node_type": "single",
        "pos_x": 8100,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94651
        ],
        "next": [
          94646
        ],
        "entry_id": 117251,
        "entry_max_ranks": 1,
        "definition_id": 122263,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Rondurmancy",
        "spell_id": 449596,
        "visible_spell_id": null,
        "icon": "spell_arcane_focusedpower",
        "icon_candidates": [
          "spell_arcane_focusedpower"
        ]
      },
      "pve_tooltip": "Your chance to generate a Spellfire Sphere is increased by 6%.\nSpellfire Spheres grant an additional 1% spell damage.",
      "pvp_tooltip": "Your chance to generate a Spellfire Sphere is increased by 6%.\nSpellfire Spheres grant an additional 1% spell damage.",
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
      "talent_name": "Spellfire Salvo",
      "spell_id": 1260616,
      "node_id": 109673,
      "entry_id": 135924,
      "definition_id": 140679,
      "tree_type": "hero",
      "hero_tree": "Sunfury",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Sunfury",
        "subtree_id": 39,
        "node_id": 109673,
        "node_name": "Spellfire Salvo",
        "node_type": "single",
        "pos_x": 8700,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109674
        ],
        "next": [
          94646
        ],
        "entry_id": 135924,
        "entry_max_ranks": 1,
        "definition_id": 140679,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Spellfire Salvo",
        "spell_id": 1260616,
        "visible_spell_id": null,
        "icon": "shaman_talent_elementalblast",
        "icon_candidates": [
          "shaman_talent_elementalblast"
        ]
      },
      "pve_tooltip": "Arcane Salvo can stack 5 additional times.\nMeteorite damage increased by 15%.",
      "pvp_tooltip": "Arcane Salvo can stack 5 additional times.\nMeteorite damage increased by 15%.",
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
      "talent_name": "Memory of Al'ar",
      "spell_id": 449619,
      "node_id": 94646,
      "entry_id": 117249,
      "definition_id": 122261,
      "tree_type": "hero",
      "hero_tree": "Sunfury",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Arcane",
        "spec_id": 62,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Sunfury",
        "subtree_id": 39,
        "node_id": 94646,
        "node_name": "Memory of Al'ar",
        "node_type": "single",
        "pos_x": 7800,
        "pos_y": 7500,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94643,
          94650,
          94648,
          109673
        ],
        "next": [],
        "entry_id": 117249,
        "entry_max_ranks": 1,
        "definition_id": 122261,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Memory of Al'ar",
        "spell_id": 449619,
        "visible_spell_id": null,
        "icon": "inv_ability_sunfurymage_spellfirespheres",
        "icon_candidates": [
          "inv_ability_sunfurymage_spellfirespheres"
        ]
      },
      "pve_tooltip": "When your Arcane Phoenix expires it empowers you, granting Arcane Soul for 4.0 sec.\nArcane Soul:\nArcane Barrage grants Clearcasting and generates 4 Arcane Charges.\nEach cast of Arcane Barrage grants 5 stacks of Arcane Salvo and casting Arcane Barrage does not consume Arcane Salvo.",
      "pvp_tooltip": "When your Arcane Phoenix expires it empowers you, granting Arcane Soul for 4.0 sec.\nArcane Soul:\nArcane Barrage grants Clearcasting and generates 4 Arcane Charges.\nEach cast of Arcane Barrage grants 5 stacks of Arcane Salvo and casting Arcane Barrage does not consume Arcane Salvo.",
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
  "fetch_errors": [],
  "serialization": {
    "version": 2,
    "spec_id": 62,
    "node_order": [
      62084,
      62085,
      62086,
      62087,
      62088,
      62091,
      62092,
      62094,
      62096,
      62098,
      62100,
      62102,
      62104,
      62105,
      62107,
      62110,
      62112,
      62114,
      62115,
      62116,
      62117,
      62119,
      62121,
      62122,
      62123,
      62124,
      62125,
      62127,
      62129,
      62150,
      62151,
      62153,
      62157,
      62163,
      62164,
      62170,
      62173,
      62174,
      62176,
      62177,
      62178,
      62179,
      62180,
      62181,
      62182,
      62184,
      62185,
      81468,
      93524,
      94632,
      94633,
      94634,
      94635,
      94636,
      94637,
      94638,
      94639,
      94640,
      94641,
      94642,
      94643,
      94644,
      94645,
      94646,
      94647,
      94648,
      94649,
      94650,
      94651,
      94652,
      94653,
      94654,
      94655,
      94656,
      94657,
      94658,
      94659,
      94660,
      94661,
      94662,
      94663,
      94664,
      99828,
      99829,
      99830,
      100989,
      100995,
      100998,
      100999,
      101004,
      101007,
      101009,
      101015,
      101016,
      101019,
      101021,
      101024,
      101027,
      101029,
      101883,
      102438,
      102439,
      102440,
      102441,
      102445,
      102446,
      102449,
      102451,
      102453,
      102454,
      102460,
      102462,
      102465,
      102467,
      102468,
      102469,
      102470,
      102471,
      102472,
      102474,
      102475,
      102476,
      102480,
      103771,
      104113,
      108535,
      108536,
      108537,
      108538,
      108539,
      108541,
      108551,
      108653,
      108654,
      108655,
      108656,
      108657,
      108658,
      108659,
      108660,
      108661,
      108662,
      108664,
      108665,
      108849,
      108850,
      108851,
      108852,
      108853,
      108855,
      108857,
      108858,
      108859,
      108860,
      108863,
      108864,
      109002,
      109393,
      109394,
      109395,
      109396,
      109397,
      109398,
      109399,
      109400,
      109401,
      109402,
      109403,
      109404,
      109406,
      109407,
      109408,
      109409,
      109411,
      109412,
      109478,
      109667,
      109668,
      109669,
      109670,
      109671,
      109672,
      109673,
      109674,
      109675,
      109915,
      109916,
      109956,
      110078,
      110079,
      110080,
      110081,
      110082,
      110086,
      110087,
      110088,
      110089,
      110258,
      110283,
      110321,
      110322,
      110420,
      110422,
      110423,
      110442,
      110597,
      110849,
      110850
    ],
    "subtree_nodes": [
      {
        "id": 99830,
        "name": "Spellslinger / Sunfury",
        "type": "subtree",
        "posX": 6900,
        "posY": 1500,
        "entryNode": true,
        "next": [],
        "prev": [],
        "entries": [
          {
            "id": 123344,
            "type": "subtree",
            "name": "Spellslinger",
            "traitSubTreeId": 40,
            "traitTreeId": 658,
            "atlasMemberName": "talents-heroclass-mage-spellslinger",
            "nodes": [
              94664,
              94662,
              94663,
              94661,
              109669,
              94659,
              94656,
              94660,
              109668,
              94658,
              94657,
              94655,
              109667,
              94654
            ]
          },
          {
            "id": 123341,
            "type": "subtree",
            "name": "Sunfury",
            "traitSubTreeId": 39,
            "traitTreeId": 658,
            "atlasMemberName": "talents-heroclass-mage-sunfury",
            "nodes": [
              94647,
              94653,
              94652,
              94644,
              109675,
              94649,
              94645,
              94651,
              109674,
              94650,
              94643,
              94648,
              109673,
              94646
            ]
          }
        ]
      }
    ]
  },
  "source_warnings": [
    {
      "spell_id": 448604,
      "talent_name": "Spellfire Spheres",
      "side": "drustvar",
      "reason": "SUPERSEDED_DRUSTVAR_EFFECT",
      "multiplier": 2.0,
      "effect_text": "Apply Aura (6) | Add Percent Modifier (108): Spell Direct Amount (0)",
      "source_build": "12.1.0.69933",
      "game_effect_id": 1147193,
      "is_hotfixed": false,
      "effect_origin": "DEPENDENCY",
      "talent_spell_id": 448601,
      "source_spell_id": 448604,
      "dependency_kind": "EMBEDDED",
      "dependency_path": [
        448601,
        448604
      ],
      "dependency_relations": [
        "spelldesc_ref"
      ],
      "current_build": "12.1.0.69933",
      "effect_index": 2,
      "current_multiplier": 2.0,
      "current_effect_text": "Apply Aura (6) | Add Percent Modifier (108): Spell Periodic Amount (22)",
      "source_build_relation": "same_build_conflict",
      "resolved_by": [
        "wowhead",
        "simc_exact_build"
      ]
    }
  ],
  "official_hotfixes": {
    "source": "Blizzard official hotfixes",
    "source_url": "https://news.blizzard.com/en-us/article/24296142/hotfixes-september-24-2026",
    "latest_date": "2026-09-24",
    "snapshot_hash": "685cef0a83951138d1e3e7142bed99b65a1bb489501bd625115b65b389b9ab9d",
    "applied": [],
    "already_current": [],
    "unresolved": [],
    "ignored_non_talent": [
      {
        "talent_name": "Font of Venomous Rage trinket",
        "text": "Font of Venomous Rage trinket damage reduced by 50% in PvP combat.",
        "date": "2026-09-17"
      },
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
        "talent_name": "Bind in Darkness",
        "text": "Bind in Darkness now increases Blood Boil damage by 50% (was 30%).",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Death Knight",
          "Blood",
          "Deathbringer"
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
        "talent_name": "Call of Ohn’ahra",
        "text": "Call of Ohn’ahra increases the cooldown of Nature’s Swiftness by 60 seconds (was 30 seconds).",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Druid",
          "Restoration"
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
        "talent_name": "Deadly Reach",
        "text": "Deadly Reach now causes Death Strike now to deal 60% of its damage to 2 nearby enemies (was 75%).",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Death Knight",
          "Blood"
        ]
      },
      {
        "talent_name": "Deathly Blows",
        "text": "Deathly Blows now increases Death Strike damage by 20% (was 12%).",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Death Knight",
          "Blood",
          "Deathbringer"
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
        "talent_name": "Mindgames direct",
        "text": "Mindgames direct damage and reversal increased by 50%.",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Priest"
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
        "talent_name": "Swift and Painful",
        "text": "Swift and Painful now increases Strength by 15% (was 10%).",
        "date": "2026-09-22",
        "reason": "SPEC_SCOPE_MISMATCH",
        "context_path": [
          "Death Knight",
          "Blood",
          "Deathbringer"
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
        "date": "2026-09-24"
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
      }
    ]
  },
  "slug": "mage-arcane",
  "generated_at": "2026-09-25T20:46:14.395232+00:00",
  "validation": {
    "talents": 128,
    "changed_tooltips": 25,
    "talents_with_pvp_mechanics": 31,
    "unique_nodes": 109,
    "tree_build": "12.1.0.69933",
    "simc_build": "12.1.0.69933",
    "drustvar_builds": [
      "12.1.0.69933"
    ],
    "verification_status": "VERIFIED",
    "fetch_error_count": 0,
    "source_warning_count": 3,
    "unresolved_count": 0,
    "review_required_count": 0,
    "fetch_error_examples": [],
    "source_warning_examples": [
      {
        "source": "wowhead",
        "spell_id": 1295924,
        "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=1295924'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
      },
      {
        "source": "wowhead",
        "spell_id": 1295939,
        "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=1295939'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
      },
      {
        "spell_id": 448604,
        "talent_name": "Spellfire Spheres",
        "side": "drustvar",
        "reason": "SUPERSEDED_DRUSTVAR_EFFECT",
        "multiplier": 2.0,
        "effect_text": "Apply Aura (6) | Add Percent Modifier (108): Spell Direct Amount (0)",
        "source_build": "12.1.0.69933",
        "game_effect_id": 1147193,
        "is_hotfixed": false,
        "effect_origin": "DEPENDENCY",
        "talent_spell_id": 448601,
        "source_spell_id": 448604,
        "dependency_kind": "EMBEDDED",
        "dependency_path": [
          448601,
          448604
        ],
        "dependency_relations": [
          "spelldesc_ref"
        ],
        "current_build": "12.1.0.69933",
        "effect_index": 2,
        "current_multiplier": 2.0,
        "current_effect_text": "Apply Aura (6) | Add Percent Modifier (108): Spell Periodic Amount (22)",
        "source_build_relation": "same_build_conflict",
        "resolved_by": [
          "wowhead",
          "simc_exact_build"
        ]
      }
    ],
    "unresolved_examples": [],
    "review_required_examples": []
  }
};
