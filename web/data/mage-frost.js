window.WOW_PVP_DATA = {
  "class_name": "Mage",
  "spec_name": "Frost",
  "tree_build": "12.1.0.69875",
  "simc_build": "12.1.0.69875",
  "drustvar_builds": [
    "12.1.0.69587"
  ],
  "talents": [
    {
      "talent_name": "Ice Barrier",
      "spell_id": 11426,
      "node_id": 62117,
      "entry_id": 80176,
      "definition_id": 85179,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62117,
        "node_name": "Ice Barrier",
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
        "entry_id": 80176,
        "definition_id": 85179,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Ice Barrier",
        "spell_id": 11426,
        "icon": "spell_ice_lament"
      },
      "pve_tooltip": "3% of base mana\nInstant\n30 sec cooldown\n1 Charge\nShields you with ice, absorbing [35 / 100 * Total Health * (1 + Versatility)] damage [Glacial Insulation: and increasing your armor by 0%] for 1 min.\nMelee attacks against you reduce the attacker's movement speed by 50%.",
      "pvp_tooltip": "3% of base mana\nInstant\n30 sec cooldown\n1 Charge\nShields you with ice, absorbing [18.095 / 100 * Total Health * (1 + Versatility)] damage [Glacial Insulation: and increasing your armor by 0%] for 1 min.\nMelee attacks against you reduce the attacker's movement speed by 50%.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 82,
          "end": 84,
          "old_token": "35",
          "new_token": "18.095",
          "kind": "ordinary_value",
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
          "kind": "ordinary_value",
          "old": "35",
          "new": "18.095"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 11426,
          "source_spell_id": 11426,
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
          "talent_spell_id": 11426,
          "source_spell_id": 11426,
          "effect_index": 2,
          "effect_text": "Apply Aura: Dummy (127)",
          "base_value": 35.0,
          "spell_pvp_multiplier": 0.517,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.517,
          "final_pvp_value": 18.095,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
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
      "talent_name": "Alter Time",
      "spell_id": 342245,
      "node_id": 62115,
      "entry_id": 80174,
      "definition_id": 85177,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
          62117
        ],
        "next": [
          108654,
          62102
        ],
        "entry_id": 80174,
        "definition_id": 85177,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Alter Time",
        "spell_id": 342245,
        "icon": "spell_mage_altertime"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
          62117
        ],
        "next": [
          62123,
          62107
        ],
        "entry_id": 80181,
        "definition_id": 85184,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Ice Block",
        "spell_id": 45438,
        "icon": "spell_frost_frost"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 138963,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Time Walk",
        "spell_id": 1244087,
        "icon": "warrior_doubletime"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 138962,
        "entry_index": 300,
        "entry_type": "passive",
        "talent_name": "Temporal Realignment",
        "spell_id": 1244090,
        "icon": "ability_evoker_timedilation"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 85162,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Master of Time",
        "spell_id": 342249,
        "icon": "inv_belt_armor_waistoftime_d_01"
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
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69875"
        },
        {
          "rank": 2,
          "pve_tooltip": "Reduces the cooldown of Alter Time by 10 sec.",
          "pvp_tooltip": "Reduces the cooldown of Alter Time by 10 sec.",
          "tooltip_changed": false,
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69875"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 85185,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Winter's Protection",
        "spell_id": 382424,
        "icon": "spell_ice_rune"
      },
      "pve_tooltip": "The cooldown of Ice Block is reduced by 60 sec.",
      "pvp_tooltip": "The cooldown of Ice Block is reduced by 60 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [
        {
          "effect_indexes": [
            1
          ],
          "status": "NOT_VISIBLE_IN_TOOLTIP",
          "kind": "ordinary_value",
          "old": 60000.0,
          "new": 30000.0,
          "full_tooltip_match_count": 0
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
              "aura_spell_id": 1256913,
              "game_effect_id": 1352920,
              "amount_kind": "effect:1",
              "value_pct": -50.0,
              "factor": 0.5,
              "label_id": 7158,
              "build": "12.1.0.69587"
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
          "pvp_tooltip": "The cooldown of Ice Block is reduced by 30 sec.",
          "tooltip_changed": false,
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69875"
        },
        {
          "rank": 2,
          "pve_tooltip": "The cooldown of Ice Block is reduced by 60 sec.",
          "pvp_tooltip": "The cooldown of Ice Block is reduced by 60 sec.",
          "tooltip_changed": false,
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69875"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 85168,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Frost Conditioning",
        "spell_id": 1250315,
        "icon": "spell_frost_icefloes"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 85176,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Arcane Warding",
        "spell_id": 383092,
        "icon": "spell_arcane_arcaneresilience"
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
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69875"
        },
        {
          "rank": 2,
          "pve_tooltip": "Reduces magic damage taken by 8%.",
          "pvp_tooltip": "Reduces magic damage taken by 8%.",
          "tooltip_changed": false,
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69875"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 138970,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Inspired Intellect",
        "spell_id": 458437,
        "icon": "spell_holy_arcaneintellect"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 85186,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Mirror Image",
        "spell_id": 55342,
        "icon": "spell_magic_lesserinvisibilty"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 85143,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Spellsteal",
        "spell_id": 30449,
        "icon": "spell_arcane_arcane02"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 85164,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Quick Witted",
        "spell_id": 382297,
        "icon": "ability_priest_surgeofdarkness"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 130651,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Dragon's Breath",
        "spell_id": 31661,
        "icon": "inv_misc_head_dragon_01"
      },
      "pve_tooltip": "4% of base mana\nInstant\n45 sec cooldown\nEnemies in a 12 yd cone in front of you take (66.99% of Spell Power) Fire damage and are disoriented for 4 sec. Damage will cancel the effect.",
      "pvp_tooltip": "4% of base mana\nInstant\n45 sec cooldown\nEnemies in a 12 yd cone in front of you take (68.9997% of Spell Power) Fire damage and are disoriented for 4 sec. Damage will cancel the effect.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 86,
          "end": 91,
          "old_token": "66.99",
          "new_token": "68.9997",
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
          "new": "68.9997"
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
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.03,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 130650,
        "entry_index": 200,
        "entry_type": "active",
        "talent_name": "Supernova",
        "spell_id": 157980,
        "icon": "spell_mage_supernova"
      },
      "pve_tooltip": "40 yd range\nInstant\n45 sec cooldown\nPulses arcane energy around the target enemy or ally, dealing (34.5% of Spell Power) Arcane damage to all enemies within 8 yds, and knocking them upward. A primary enemy target will take 100% increased damage.",
      "pvp_tooltip": "40 yd range\nInstant\n45 sec cooldown\nPulses arcane energy around the target enemy or ally, dealing (35.535% of Spell Power) Arcane damage to all enemies within 8 yds, and knocking them upward. A primary enemy target will take 100% increased damage.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 99,
          "end": 103,
          "old_token": "34.5",
          "new_token": "35.535",
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
          "new": "35.535"
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
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.03,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 85178,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Remove Curse",
        "spell_id": 475,
        "icon": "spell_nature_removecurse"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 138972,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Improved Conjuration",
        "spell_id": 1244025,
        "icon": "spell_arcane_focusedpower"
      },
      "pve_tooltip": "Mirror Image's cooldown is reduced by 60 sec.",
      "pvp_tooltip": "Mirror Image's cooldown is reduced by 60 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [
        {
          "effect_indexes": [
            1
          ],
          "status": "NOT_VISIBLE_IN_TOOLTIP",
          "kind": "ordinary_value",
          "old": 60000.0,
          "new": 30000.0,
          "full_tooltip_match_count": 0
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
          "pvp_tooltip": "Mirror Image's cooldown is reduced by 30 sec.",
          "tooltip_changed": false,
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69875"
        },
        {
          "rank": 2,
          "pve_tooltip": "Mirror Image's cooldown is reduced by 60 sec.",
          "pvp_tooltip": "Mirror Image's cooldown is reduced by 60 sec.",
          "tooltip_changed": false,
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69875"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 141354,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Improved Spellsteal",
        "spell_id": 1270827,
        "icon": "spell_arcane_arcane02"
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
          "new": 27.604000000000003,
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
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.03,
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
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.03,
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
              "aura_spell_id": 1256913,
              "game_effect_id": 1264849,
              "amount_kind": "periodic",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 85166,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Shimmer",
        "spell_id": 212653,
        "icon": "spell_arcane_massdispel"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 138977,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Improved Blink",
        "spell_id": 1244340,
        "icon": "spell_arcane_blink"
      },
      "pve_tooltip": "[Shimmer / Blink]'s cooldown is reduced by 2 sec.",
      "pvp_tooltip": "[Shimmer / Blink]'s cooldown is reduced by 2 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [
        {
          "effect_indexes": [
            1
          ],
          "status": "NOT_VISIBLE_IN_TOOLTIP",
          "kind": "ordinary_value",
          "old": 2000.0,
          "new": 1000.0,
          "full_tooltip_match_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 141350,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Improved Counterspell",
        "spell_id": 1270865,
        "icon": "inv_1115_mage_counterspell"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 138971,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Overflowing Energy",
        "spell_id": 390218,
        "icon": "spell_arcane_manatap"
      },
      "pve_tooltip": "Each time your Frostbolt fails to critically strike, it gains 10% increased critical strike chance.\nCritical strike bonus is removed when the affected spell critically strikes.",
      "pvp_tooltip": "Each time your Frostbolt fails to critically strike, it gains 10% increased critical strike chance.\nCritical strike bonus is removed when the affected spell critically strikes.",
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 141349,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Improved Remove Curse",
        "spell_id": 1270847,
        "icon": "spell_nature_removecurse"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 120889,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Greater Invisibility",
        "spell_id": 110959,
        "icon": "ability_mage_greaterinvisibility"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 85171,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Improved Frost Nova",
        "spell_id": 343183,
        "icon": "spell_frost_frostnova"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 141239,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Ice Ward",
        "spell_id": 205036,
        "icon": "spell_frost_frostward"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 138964,
        "entry_index": 300,
        "entry_type": "passive",
        "talent_name": "Captured Thoughts",
        "spell_id": 1270872,
        "icon": "spell_nature_elementalabsorption"
      },
      "pve_tooltip": "The duration of Brain Freeze is increased by 15 sec.",
      "pvp_tooltip": "The duration of Brain Freeze is increased by 15 sec.",
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 85190,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Tome of Rhonin",
        "spell_id": 382493,
        "icon": "inv_misc_book_04"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 142170,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Improved Warding",
        "spell_id": 1297073,
        "icon": "inv_cloth_raidmage_p_01helm"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 85158,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Tome of Antonidas",
        "spell_id": 382490,
        "icon": "inv_misc_book_18"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 85173,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Incantation of Swiftness",
        "spell_id": 382293,
        "icon": "rogue_burstofspeed"
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
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69875"
        },
        {
          "rank": 2,
          "pve_tooltip": "[Greater Invisibility: Greater]Invisibility increases your movement speed by 40% for 6 sec.",
          "pvp_tooltip": "[Greater Invisibility: Greater]Invisibility increases your movement speed by 20% for 6 sec.",
          "tooltip_changed": true,
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69875"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 138969,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Master of Escape",
        "spell_id": 210476,
        "icon": "ability_mage_invisibility"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 138968,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Charm of Aegwynn",
        "spell_id": 1244105,
        "icon": "inv_nerubian_necklace_02_color5"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 141352,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Brainstorm",
        "spell_id": 461261,
        "icon": "ability_kaztik_dominatemind"
      },
      "pve_tooltip": "Gaining Brain Freeze increases your Intellect by 1% for 8 sec. Multiple instances may overlap.",
      "pvp_tooltip": "Gaining Brain Freeze increases your Intellect by 1% for 8 sec. Multiple instances may overlap.",
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 85156,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Flow of Time",
        "spell_id": 382268,
        "icon": "spell_arcane_blink"
      },
      "pve_tooltip": "The cooldowns of Blink and Shimmer are reduced by 3 sec.",
      "pvp_tooltip": "The cooldowns of Blink and Shimmer are reduced by 3 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [
        {
          "effect_indexes": [
            1,
            2
          ],
          "status": "NOT_VISIBLE_IN_TOOLTIP",
          "kind": "ordinary_value",
          "old": 3000.0,
          "new": 1500.0,
          "full_tooltip_match_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 141351,
        "entry_index": 300,
        "entry_type": "passive",
        "talent_name": "Mana Confluence",
        "spell_id": 1270845,
        "icon": "spell_shaman_blessingoftheeternals"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 138967,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Charm of Medivh",
        "spell_id": 1244107,
        "icon": "inv_nerubian_necklace_02_color1"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 85145,
        "entry_index": 300,
        "entry_type": "passive",
        "talent_name": "Permafrost Bauble",
        "spell_id": 1265517,
        "icon": "inv_10_dungeonjewelry_primalist_necklace_2_frost"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 85146,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Freezing Cold",
        "spell_id": 386763,
        "icon": "spell_frost_glacier"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 138979,
        "entry_index": 200,
        "entry_type": "active",
        "talent_name": "Ice Nova",
        "spell_id": 157997,
        "icon": "spell_mage_icenova"
      },
      "pve_tooltip": "40 yd range\nInstant\n25 sec cooldown\nCauses a whirl of icy wind around the enemy, dealing (138% of Spell Power) Frost damage to the target and all other enemies within 8 yds, freezing them in place for 2 sec. Damage reduced beyond 8 targets.",
      "pvp_tooltip": "40 yd range\nInstant\n25 sec cooldown\nCauses a whirl of icy wind around the enemy, dealing (142.14% of Spell Power) Frost damage to the target and all other enemies within 8 yds, freezing them in place for 2 sec. Damage reduced beyond 8 targets.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 90,
          "end": 93,
          "old_token": "138",
          "new_token": "142.14",
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
          "new": "142.14"
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
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.03,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 85192,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Time Manipulation",
        "spell_id": 387807,
        "icon": "spell_nature_timestop"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 85147,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Ring of Frost",
        "spell_id": 113724,
        "icon": "spell_frost_ring_of_frost"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 138978,
        "entry_index": 200,
        "entry_type": "active",
        "talent_name": "Mass Polymorph",
        "spell_id": 383121,
        "icon": "spell_nature_doublepolymorph1"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
          108655
        ],
        "entry_id": 80157,
        "definition_id": 85160,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Energized Barriers",
        "spell_id": 386828,
        "icon": "spell_mage_temporalshield"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
          108655
        ],
        "entry_id": 115878,
        "definition_id": 120890,
        "entry_index": 200,
        "entry_type": "active",
        "talent_name": "Mass Invisibility",
        "spell_id": 414664,
        "icon": "ability_mage_massinvisibility"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
          108655
        ],
        "entry_id": 80147,
        "definition_id": 85150,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Barrier Diffusion",
        "spell_id": 455428,
        "icon": "spell_mage_evanesce"
      },
      "pve_tooltip": "When your Barrier is removed, reduce its cooldown by 5 sec.",
      "pvp_tooltip": "When your Barrier is removed, reduce its cooldown by 5 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [
        {
          "effect_indexes": [
            1
          ],
          "status": "NOT_VISIBLE_IN_TOOLTIP",
          "kind": "ordinary_value",
          "old": 5000.0,
          "new": 2500.0,
          "full_tooltip_match_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 85144,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Ice Cold",
        "spell_id": 414659,
        "icon": "spell_fire_bluefire"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 130892,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Spatial Manipulation",
        "spell_id": 1244031,
        "icon": "spell_mage_overpowered"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 141353,
        "entry_index": 300,
        "entry_type": "passive",
        "talent_name": "Reflection",
        "spell_id": 1270829,
        "icon": "ability_hunter_displacement"
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
      "talent_name": "Improved Ice Barrier",
      "spell_id": 1244069,
      "node_id": 108655,
      "entry_id": 134185,
      "definition_id": 138965,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108655,
        "node_name": "Improved Ice Barrier",
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
        "entry_id": 134185,
        "definition_id": 138965,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Improved Ice Barrier",
        "spell_id": 1244069,
        "icon": "spell_ice_lament"
      },
      "pve_tooltip": "Ice Barrier gains an additional charge and reduces your physical damage taken by 10%.",
      "pvp_tooltip": "Ice Barrier gains an additional charge and reduces your physical damage taken by 10%.",
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
      "talent_name": "Ice Lance",
      "spell_id": 30455,
      "node_id": 62176,
      "entry_id": 80241,
      "definition_id": 85244,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62176,
        "node_name": "Ice Lance",
        "node_type": "single",
        "pos_x": 12300,
        "pos_y": 1500,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [
          108864,
          62164
        ],
        "entry_id": 80241,
        "definition_id": 85244,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Ice Lance",
        "spell_id": 30455,
        "icon": "spell_frost_frostblast"
      },
      "pve_tooltip": "1% of base mana\n40 yd range\nInstant\nQuickly fling a shard of ice at the target, dealing (183.75% of Spell Power) Frost damage.\nShatters 4 stacks of Freezing.",
      "pvp_tooltip": "1% of base mana\n40 yd range\nInstant\nQuickly fling a shard of ice at the target, dealing (236.5781% of Spell Power) Frost damage.\nShatters 4 stacks of Freezing.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 89,
          "end": 95,
          "old_token": "183.75",
          "new_token": "236.5781",
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
          "status": "NESTED_DEPENDENCY_NOT_VISIBLE",
          "kind": "spell_power_coefficient",
          "old": 91.53999999999999,
          "new": 94.2862,
          "full_tooltip_match_count": 0
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "spell_power_coefficient",
          "old": "183.75",
          "new": "236.5781"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 30455,
          "source_spell_id": 228598,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (SP mod: 1.8375)",
          "base_value": null,
          "spell_pvp_multiplier": 1.25,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.2875,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            30455,
            228598
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
          "talent_spell_id": 30455,
          "source_spell_id": 1246949,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (SP mod: 0.9154)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.03,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            30455,
            1246769,
            1246949
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
          "talent_spell_id": 30455,
          "source_spell_id": 1246949,
          "effect_index": 2,
          "effect_text": "School Damage (Frost) (SP mod: 0.248)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.03,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            30455,
            1246769,
            1246949
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
      "talent_name": "Blizzard",
      "spell_id": 190356,
      "node_id": 108864,
      "entry_id": 134421,
      "definition_id": 139193,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108864,
        "node_name": "Blizzard / Blizzard",
        "node_type": "choice",
        "pos_x": 11700,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62176
        ],
        "next": [
          62157
        ],
        "entry_id": 134421,
        "definition_id": 139193,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Blizzard",
        "spell_id": 190356,
        "icon": "spell_frost_icestorm"
      },
      "pve_tooltip": "2.5% of base mana\n40 yd range\n2 sec cast\n12 sec cooldown\nIce shards pelt the target area, dealing [(48.8% of Spell Power) * 8] Frost damage over 12 sec and reducing movement speed by 50% for 3 sec.\nThis spell is cast at a selected location",
      "pvp_tooltip": "2.5% of base mana\n40 yd range\n2 sec cast\n12 sec cooldown\nIce shards pelt the target area, dealing [(48.8% of Spell Power) * 8] Frost damage over 12 sec and reducing movement speed by 50% for 3 sec.\nThis spell is cast at a selected location",
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
      "talent_name": "Blizzard",
      "spell_id": 1248829,
      "node_id": 108864,
      "entry_id": 134538,
      "definition_id": 139306,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108864,
        "node_name": "Blizzard / Blizzard",
        "node_type": "choice",
        "pos_x": 11700,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62176
        ],
        "next": [
          62157
        ],
        "entry_id": 134538,
        "definition_id": 139306,
        "entry_index": 200,
        "entry_type": "active",
        "talent_name": "Blizzard",
        "spell_id": 1248829,
        "icon": "spell_frost_icestorm"
      },
      "pve_tooltip": "2.5% of base mana\n40 yd range\n2 sec cast\n12 sec cooldown\nIce shards pelt the target area, dealing [(48.8% of Spell Power) * 8] Frost damage over 12 sec and reducing movement speed by 50% for 3 sec.\nThis spell is cast at your target.",
      "pvp_tooltip": "2.5% of base mana\n40 yd range\n2 sec cast\n12 sec cooldown\nIce shards pelt the target area, dealing [(48.8% of Spell Power) * 8] Frost damage over 12 sec and reducing movement speed by 50% for 3 sec.\nThis spell is cast at your target.",
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
      "talent_name": "Fingers of Frost",
      "spell_id": 112965,
      "node_id": 62164,
      "entry_id": 80227,
      "definition_id": 85230,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62164,
        "node_name": "Fingers of Frost",
        "node_type": "single",
        "pos_x": 12900,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62176
        ],
        "next": [
          109915
        ],
        "entry_id": 80227,
        "definition_id": 85230,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Fingers of Frost",
        "spell_id": 112965,
        "icon": "ability_mage_wintersgrasp"
      },
      "pve_tooltip": "[Frostfire Bolt / Frostbolt] has a 15% chance to grant a charge of Fingers of Frost.\nFingers of Frost causes your next Ice Lance to deal Shatter damage equal to 4 stacks of Freezing and does not consume Freezing stacks.\nMaximum 2 charges.",
      "pvp_tooltip": "[Frostfire Bolt / Frostbolt] has a 15% chance to grant a charge of Fingers of Frost.\nFingers of Frost causes your next Ice Lance to deal Shatter damage equal to 4 stacks of Freezing and does not consume Freezing stacks.\nMaximum 2 charges.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [
        {
          "effect_indexes": [
            2
          ],
          "status": "NOT_VISIBLE_IN_TOOLTIP",
          "kind": "ordinary_value",
          "old": 5.0,
          "new": 2.5,
          "full_tooltip_match_count": 0
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "NESTED_DEPENDENCY_NOT_VISIBLE",
          "kind": "spell_power_coefficient",
          "old": 91.53999999999999,
          "new": 94.2862,
          "full_tooltip_match_count": 0
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 112965,
          "source_spell_id": 112965,
          "effect_index": 2,
          "effect_text": "Apply Aura: Dummy",
          "base_value": 5.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 2.5,
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
          "talent_spell_id": 112965,
          "source_spell_id": 1246949,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (SP mod: 0.9154)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.03,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            112965,
            1246769,
            1246949
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
          "talent_spell_id": 112965,
          "source_spell_id": 1246949,
          "effect_index": 2,
          "effect_text": "School Damage (Frost) (SP mod: 0.248)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.03,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            112965,
            1246769,
            1246949
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
      "talent_name": "Frostbite",
      "spell_id": 1248825,
      "node_id": 62157,
      "entry_id": 80220,
      "definition_id": 85223,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62157,
        "node_name": "Frostbite",
        "node_type": "single",
        "pos_x": 11700,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108864
        ],
        "next": [
          62178,
          108653
        ],
        "entry_id": 80220,
        "definition_id": 85223,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Frostbite",
        "spell_id": 1248825,
        "icon": "spell_frost_frostarmor"
      },
      "pve_tooltip": "When [Frostfire Bolt / Frostbolt] critically strikes, it applies 1 additional stack of Freezing.\nEach stack of Freezing that you Shatter deals (24.8% of Spell Power) damage to nearby enemies. Damage reduced beyond 5 targets.",
      "pvp_tooltip": "When [Frostfire Bolt / Frostbolt] critically strikes, it applies 1 additional stack of Freezing.\nEach stack of Freezing that you Shatter deals (25.544% of Spell Power) damage to nearby enemies. Damage reduced beyond 5 targets.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 144,
          "end": 148,
          "old_token": "24.8",
          "new_token": "25.544",
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
          "old": "24.8",
          "new": "25.544"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 1248825,
          "source_spell_id": 1246949,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (SP mod: 0.9154)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.03,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1248825,
            1246949
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
          "talent_spell_id": 1248825,
          "source_spell_id": 1246949,
          "effect_index": 2,
          "effect_text": "School Damage (Frost) (SP mod: 0.248)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.03,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1248825,
            1246949
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
      "talent_name": "Icicles",
      "spell_id": 1246832,
      "node_id": 109915,
      "entry_id": 136182,
      "definition_id": 140955,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109915,
        "node_name": "Icicles",
        "node_type": "single",
        "pos_x": 12900,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62164
        ],
        "next": [
          108653,
          62177
        ],
        "entry_id": 136182,
        "definition_id": 140955,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Icicles",
        "spell_id": 1246832,
        "icon": "ability_mage_glacialspike"
      },
      "pve_tooltip": "While in combat, Frost crystallizes around you, generating an Icicle every 6.0 sec. Upon generating 5 Icicles, [Frostfire Bolt / Frostbolt] upgrades to Glacial Spike for its next cast.\nGlacial Spike\nConjures a massive spike of ice that impales your target, dealing (1300% of Spell Power) damage and slowing the target's movement speed by 50% for 8 sec.\nApplies 3 stacks of Freezing.",
      "pvp_tooltip": "While in combat, Frost crystallizes around you, generating an Icicle every 6.0 sec. Upon generating 5 Icicles, [Frostfire Bolt / Frostbolt] upgrades to Glacial Spike for its next cast.\nGlacial Spike\nConjures a massive spike of ice that impales your target, dealing (1300% of Spell Power) damage and slowing the target's movement speed by 50% for 8 sec.\nApplies 3 stacks of Freezing.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "EMBEDDED",
          "talent_spell_id": 1246832,
          "source_spell_id": 228600,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (SP mod: 13)",
          "base_value": null,
          "spell_pvp_multiplier": 0.835,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 0.86005,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1246832,
            199786,
            228600
          ],
          "dependency_relations": [
            "spelldesc_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
          "dependency_kind": "EMBEDDED",
          "talent_spell_id": 1246832,
          "source_spell_id": 1246949,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (SP mod: 0.9154)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.03,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1246832,
            199786,
            1246769,
            1246949
          ],
          "dependency_relations": [
            "spelldesc_ref",
            "tooltip_value_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
          "talent_spell_id": 1246832,
          "source_spell_id": 1246949,
          "effect_index": 2,
          "effect_text": "School Damage (Frost) (SP mod: 0.248)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.03,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1246832,
            199786,
            1246769,
            1246949
          ],
          "dependency_relations": [
            "spelldesc_ref",
            "tooltip_value_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead"
          ],
          "source_notes": [],
          "confidence": "medium"
        }
      ],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Flurry",
      "spell_id": 44614,
      "node_id": 62178,
      "entry_id": 80243,
      "definition_id": 85246,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62178,
        "node_name": "Flurry",
        "node_type": "single",
        "pos_x": 11100,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62157
        ],
        "next": [
          62179,
          62181
        ],
        "entry_id": 80243,
        "definition_id": 85246,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Flurry",
        "spell_id": 44614,
        "icon": "ability_deathknight_chillstreak"
      },
      "pve_tooltip": "1% of base mana\n40 yd range\nInstant\n30 sec recharge\n2 Charges\nUnleash a flurry of ice, striking the target 3 / Frigid Winds: 7 / Improved Flurry: 4 times for a total of [(128.52% of Spell Power) * 3 / Frigid Winds: - 7 / Improved Flurry: 4] Frost damage.\nApplies (3 / Frigid Winds: - 7 / Improved Flurry: 4) stacks of Freezing.",
      "pvp_tooltip": "1% of base mana\n40 yd range\nInstant\n30 sec recharge\n2 Charges\nUnleash a flurry of ice, striking the target 3 / Frigid Winds: 7 / Improved Flurry: 4 times for a total of [(231.6573% of Spell Power) * 3 / Frigid Winds: - 7 / Improved Flurry: 4] Frost damage.\nApplies (3 / Frigid Winds: - 7 / Improved Flurry: 4) stacks of Freezing.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 171,
          "end": 177,
          "old_token": "128.52",
          "new_token": "231.6573",
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
          "status": "NESTED_DEPENDENCY_NOT_VISIBLE",
          "kind": "spell_power_coefficient",
          "old": 91.53999999999999,
          "new": 94.2862,
          "full_tooltip_match_count": 0
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "spell_power_coefficient",
          "old": "128.52",
          "new": "231.6573"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 44614,
          "source_spell_id": 228354,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (SP mod: 1.2852)",
          "base_value": null,
          "spell_pvp_multiplier": 1.75,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.8025,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            44614,
            228354
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
          "talent_spell_id": 44614,
          "source_spell_id": 1246949,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (SP mod: 0.9154)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.03,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            44614,
            1246769,
            1246949
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
          "talent_spell_id": 44614,
          "source_spell_id": 1246949,
          "effect_index": 2,
          "effect_text": "School Damage (Frost) (SP mod: 0.248)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.03,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            44614,
            1246769,
            1246949
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
      "talent_name": "Cold Snap",
      "spell_id": 235219,
      "node_id": 108653,
      "entry_id": 134181,
      "definition_id": 138961,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108653,
        "node_name": "Cold Snap / Glacial Bulwark",
        "node_type": "choice",
        "pos_x": 12300,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62157,
          109915
        ],
        "next": [
          62153
        ],
        "entry_id": 134181,
        "definition_id": 138961,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Cold Snap",
        "spell_id": 235219,
        "icon": "spell_frost_wizardmark"
      },
      "pve_tooltip": "Instant\n5 min cooldown\nResets the cooldown of your Ice Barrier, Frost Nova, Cone of Cold, Ice Cold, and Ice Block.",
      "pvp_tooltip": "Instant\n5 min cooldown\nResets the cooldown of your Ice Barrier, Frost Nova, Cone of Cold, Ice Cold, and Ice Block.",
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
      "talent_name": "Glacial Bulwark",
      "spell_id": 1244110,
      "node_id": 108653,
      "entry_id": 134180,
      "definition_id": 138960,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108653,
        "node_name": "Cold Snap / Glacial Bulwark",
        "node_type": "choice",
        "pos_x": 12300,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62157,
          109915
        ],
        "next": [
          62153
        ],
        "entry_id": 134180,
        "definition_id": 138960,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Glacial Bulwark",
        "spell_id": 1244110,
        "icon": "spell_frost_chillingarmor"
      },
      "pve_tooltip": "Ice Block now has an additional charge and its cooldown is reduced by 30 sec.",
      "pvp_tooltip": "Ice Block now has an additional charge and its cooldown is reduced by 30 sec.",
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
      "talent_name": "Frozen Orb",
      "spell_id": 84714,
      "node_id": 62177,
      "entry_id": 80242,
      "definition_id": 85245,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62177,
        "node_name": "Frozen Orb",
        "node_type": "single",
        "pos_x": 13500,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109915
        ],
        "next": [
          81468,
          62170
        ],
        "entry_id": 80242,
        "definition_id": 85245,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Frozen Orb",
        "spell_id": 84714,
        "icon": "spell_frost_frozenorb"
      },
      "pve_tooltip": "1% of base mana\n40 yd range\nInstant\n1 min cooldown\nLaunches an orb of swirling ice in front of you, dealing up to [20 * (67.584% of Spell Power)] Frost damage to all enemies it passes through over 15 sec. After a short delay, Frozen Orb will pursue its target. Deals reduced damage beyond 8 targets.\nEnemies damaged by the Frozen Orb are slowed by 50% for 8 sec.",
      "pvp_tooltip": "1% of base mana\n40 yd range\nInstant\n1 min cooldown\nLaunches an orb of swirling ice in front of you, dealing up to [20 * (121.8202% of Spell Power)] Frost damage to all enemies it passes through over 15 sec. After a short delay, Frozen Orb will pursue its target. Deals reduced damage beyond 8 targets.\nEnemies damaged by the Frozen Orb are slowed by 50% for 8 sec.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 121,
          "end": 127,
          "old_token": "67.584",
          "new_token": "121.8202",
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
          "old": "67.584",
          "new": "121.8202"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 84714,
          "source_spell_id": 84721,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (SP mod: 0.67584)",
          "base_value": null,
          "spell_pvp_multiplier": 1.75,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.8025,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            84714,
            84721
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
      "talent_name": "Brain Freeze",
      "spell_id": 190447,
      "node_id": 62179,
      "entry_id": 80244,
      "definition_id": 85247,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62179,
        "node_name": "Brain Freeze",
        "node_type": "single",
        "pos_x": 10500,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62178
        ],
        "next": [
          62180,
          62163
        ],
        "entry_id": 80244,
        "definition_id": 85247,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Brain Freeze",
        "spell_id": 190447,
        "icon": "ability_mage_brainfreeze"
      },
      "pve_tooltip": "[Frostfire Bolt / Frostbolt] has a 25 / Frozen Touch: 30 / Frostfire Infusion: 26 / Archmage's Wrath: 30% chance to reset the remaining cooldown on Flurry and cause your next Flurry to deal 50% increased damage.",
      "pvp_tooltip": "[Frostfire Bolt / Frostbolt] has a 25 / Frozen Touch: 30 / Frostfire Infusion: 26 / Archmage's Wrath: 30% chance to reset the remaining cooldown on Flurry and cause your next Flurry to deal 25% increased damage.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 190,
          "end": 192,
          "old_token": "50",
          "new_token": "25",
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
          "status": "NESTED_DEPENDENCY_NOT_VISIBLE",
          "kind": "spell_power_coefficient",
          "old": 128.51999999999998,
          "new": 231.65729999999996,
          "full_tooltip_match_count": 0
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "NESTED_DEPENDENCY_NOT_VISIBLE",
          "kind": "spell_power_coefficient",
          "old": 91.53999999999999,
          "new": 94.2862,
          "full_tooltip_match_count": 0
        },
        {
          "effect_indexes": [
            2
          ],
          "status": "APPLIED",
          "kind": "percent_value",
          "old": "50",
          "new": "25"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 190447,
          "source_spell_id": 190446,
          "effect_index": 2,
          "effect_text": "Apply Aura: Modifies Damage/Healing Done",
          "base_value": 50.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 25.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            190447,
            190446
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
          "talent_spell_id": 190447,
          "source_spell_id": 228354,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (SP mod: 1.2852)",
          "base_value": null,
          "spell_pvp_multiplier": 1.75,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.8025,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            190447,
            190446,
            44614,
            228354
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "triggered_by_reverse",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
          "talent_spell_id": 190447,
          "source_spell_id": 1246949,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (SP mod: 0.9154)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.03,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            190447,
            190446,
            44614,
            1246769,
            1246949
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "triggered_by_reverse",
            "tooltip_value_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
          "talent_spell_id": 190447,
          "source_spell_id": 1246949,
          "effect_index": 2,
          "effect_text": "School Damage (Frost) (SP mod: 0.248)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.03,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            190447,
            190446,
            44614,
            1246769,
            1246949
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "triggered_by_reverse",
            "tooltip_value_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead"
          ],
          "source_notes": [],
          "confidence": "medium"
        }
      ],
      "render_effect_count": 3,
      "rank_tooltips": []
    },
    {
      "talent_name": "Piercing Cold",
      "spell_id": 378919,
      "node_id": 62181,
      "entry_id": 80247,
      "definition_id": 85250,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62181,
        "node_name": "Piercing Cold",
        "node_type": "single",
        "pos_x": 11700,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62178
        ],
        "next": [
          62163,
          108851
        ],
        "entry_id": 80247,
        "definition_id": 85250,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Piercing Cold",
        "spell_id": 378919,
        "icon": "spell_frost_frostbolt"
      },
      "pve_tooltip": "[Frostfire Bolt / Frostbolt] and Flurry critical strike damage increased by 20%.",
      "pvp_tooltip": "[Frostfire Bolt / Frostbolt] and Flurry critical strike damage increased by 10%.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 76,
          "end": 78,
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
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 378919,
          "source_spell_id": 378919,
          "effect_index": 1,
          "effect_text": "Apply Aura: Modifies Critical Strike Damage (15)",
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
      "talent_name": "Ray of Frost",
      "spell_id": 205021,
      "node_id": 62153,
      "entry_id": 80216,
      "definition_id": 85219,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62153,
        "node_name": "Ray of Frost",
        "node_type": "single",
        "pos_x": 12300,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108653
        ],
        "next": [
          108851,
          103771,
          62150
        ],
        "entry_id": 80216,
        "definition_id": 85219,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Ray of Frost",
        "spell_id": 205021,
        "icon": "ability_mage_rayoffrost"
      },
      "pve_tooltip": "2% of base mana\n40 yd range\nChanneled (4 sec cast)\n1 min cooldown\n1 Charge\nChannel an icy beam at the enemy for 4 sec, dealing (450% of Spell Power) Frost damage every 0.50 sec.\nApplies 8 stacks of Freezing over its duration.",
      "pvp_tooltip": "2% of base mana\n40 yd range\nChanneled (4 sec cast)\n1 min cooldown\n1 Charge\nChannel an icy beam at the enemy for 4 sec, dealing (266.976% of Spell Power) Frost damage every 0.50 sec.\nApplies 8 stacks of Freezing over its duration.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 128,
          "end": 131,
          "old_token": "450",
          "new_token": "266.976",
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
          "old": "450",
          "new": "266.976"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 205021,
          "source_spell_id": 205021,
          "effect_index": 1,
          "effect_text": "Apply Aura: Periodic Damage",
          "base_value": null,
          "spell_pvp_multiplier": 0.576,
          "amount_kind": "periodic",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 0.5932799999999999,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264849,
              "amount_kind": "periodic",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
      "talent_name": "Everlasting Frost",
      "spell_id": 385167,
      "node_id": 81468,
      "entry_id": 102429,
      "definition_id": 107434,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81468,
        "node_name": "Everlasting Frost",
        "node_type": "single",
        "pos_x": 12900,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62177
        ],
        "next": [
          62150,
          108860
        ],
        "entry_id": 102429,
        "definition_id": 107434,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Everlasting Frost",
        "spell_id": 385167,
        "icon": "spell_frost_chillingbolt"
      },
      "pve_tooltip": "Casting Frozen Orb grants 1 stack of Fingers of Frost.\nDamaging one or more enemies with Frozen Orb has a 3% chance to grant Fingers of Frost.\n(100ms cooldown)",
      "pvp_tooltip": "Casting Frozen Orb grants 1 stack of Fingers of Frost.\nDamaging one or more enemies with Frozen Orb has a 3% chance to grant Fingers of Frost.\n(100ms cooldown)",
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
      "talent_name": "Permafrost Lances",
      "spell_id": 460590,
      "node_id": 62170,
      "entry_id": 80234,
      "definition_id": 85237,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62170,
        "node_name": "Permafrost Lances",
        "node_type": "single",
        "pos_x": 14100,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62177
        ],
        "next": [
          108860,
          62174
        ],
        "entry_id": 80234,
        "definition_id": 85237,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Permafrost Lances",
        "spell_id": 460590,
        "icon": "spell_fire_bluerainoffire"
      },
      "pve_tooltip": "Frozen Orb increases Shatter's damage by 10% for its duration.",
      "pvp_tooltip": "Frozen Orb increases Shatter's damage by 10% for its duration.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [
        {
          "effect_indexes": [
            1
          ],
          "status": "NESTED_DEPENDENCY_NOT_VISIBLE",
          "kind": "spell_power_coefficient",
          "old": 30.0,
          "new": 30.900000000000002,
          "full_tooltip_match_count": 0
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 460590,
          "source_spell_id": 453720,
          "effect_index": 1,
          "effect_text": "Apply Aura: Dummy",
          "base_value": 8.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 4.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            460590,
            455122,
            453720
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "spelldesc_ref"
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
          "talent_spell_id": 460590,
          "source_spell_id": 460623,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (SP mod: 0.3)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.03,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            460590,
            455122,
            453720,
            460623
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "spelldesc_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
      "talent_name": "Frozen Touch",
      "spell_id": 205030,
      "node_id": 62180,
      "entry_id": 80245,
      "definition_id": 85248,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62180,
        "node_name": "Frozen Touch",
        "node_type": "single",
        "pos_x": 10500,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62179
        ],
        "next": [
          62151
        ],
        "entry_id": 80245,
        "definition_id": 85248,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Frozen Touch",
        "spell_id": 205030,
        "icon": "ability_mage_burstofcold"
      },
      "pve_tooltip": "30 sec cooldown\nFrostbolt grants you Fingers of Frost 25% more often and Brain Freeze 20% more often.",
      "pvp_tooltip": "30 sec cooldown\nFrostbolt grants you Fingers of Frost 25% more often and Brain Freeze 20% more often.",
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
      "talent_name": "Splitting Ice",
      "spell_id": 56377,
      "node_id": 62163,
      "entry_id": 80226,
      "definition_id": 85229,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62163,
        "node_name": "Splitting Ice",
        "node_type": "single",
        "pos_x": 11100,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62181,
          62179
        ],
        "next": [
          62151
        ],
        "entry_id": 80226,
        "definition_id": 85229,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Splitting Ice",
        "spell_id": 56377,
        "icon": "spell_frost_ice_shards"
      },
      "pve_tooltip": "Your Flurry and [Frostfire Bolt / Frostbolt] spells strike 1 additional target at 50% effectiveness.",
      "pvp_tooltip": "Your Flurry and [Frostfire Bolt / Frostbolt] spells strike 1 additional target at 12.5% effectiveness.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 82,
          "end": 84,
          "old_token": "50",
          "new_token": "12.5",
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
          "new": "12.5"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 56377,
          "source_spell_id": 56377,
          "effect_index": 2,
          "effect_text": "Dummy",
          "base_value": 50.0,
          "spell_pvp_multiplier": 0.25,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.25,
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
      "talent_name": "Flash Freeze",
      "spell_id": 379993,
      "node_id": 108851,
      "entry_id": 134407,
      "definition_id": 139179,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108851,
        "node_name": "Flash Freeze",
        "node_type": "single",
        "pos_x": 11700,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62181,
          62153
        ],
        "next": [
          62151,
          108859
        ],
        "entry_id": 134407,
        "definition_id": 139179,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Flash Freeze",
        "spell_id": 379993,
        "icon": "spell_hunter_icetrap"
      },
      "pve_tooltip": "Casting Glacial Spike has a 100% chance to grant you Fingers of Frost.",
      "pvp_tooltip": "Casting Glacial Spike has a 100% chance to grant you Fingers of Frost.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "RUNTIME",
          "talent_spell_id": 379993,
          "source_spell_id": 228598,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (SP mod: 1.8375)",
          "base_value": null,
          "spell_pvp_multiplier": 1.25,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.2875,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            379993,
            44544,
            30455,
            228598
          ],
          "dependency_relations": [
            "trigger_spell",
            "triggered_by_reverse",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
          "dependency_kind": "RUNTIME",
          "talent_spell_id": 379993,
          "source_spell_id": 1246949,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (SP mod: 0.9154)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.03,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            379993,
            44544,
            30455,
            1246769,
            1246949
          ],
          "dependency_relations": [
            "trigger_spell",
            "triggered_by_reverse",
            "tooltip_value_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
          "talent_spell_id": 379993,
          "source_spell_id": 1246949,
          "effect_index": 2,
          "effect_text": "School Damage (Frost) (SP mod: 0.248)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.03,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            379993,
            44544,
            30455,
            1246769,
            1246949
          ],
          "dependency_relations": [
            "trigger_spell",
            "triggered_by_reverse",
            "tooltip_value_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead"
          ],
          "source_notes": [],
          "confidence": "medium"
        }
      ],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Splintering Ray",
      "spell_id": 418733,
      "node_id": 103771,
      "entry_id": 128077,
      "definition_id": 132886,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 103771,
        "node_name": "Splintering Ray / Frigid Focus",
        "node_type": "choice",
        "pos_x": 12300,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62153
        ],
        "next": [
          108859,
          110258
        ],
        "entry_id": 128077,
        "definition_id": 132886,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Splintering Ray",
        "spell_id": 418733,
        "icon": "spell_fire_blueflamestrike"
      },
      "pve_tooltip": "Ray of Frost deals 30% of its damage to 5 nearby enemies.",
      "pvp_tooltip": "Ray of Frost deals 30% of its damage to 5 nearby enemies.",
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
      "talent_name": "Frigid Focus",
      "spell_id": 1247055,
      "node_id": 103771,
      "entry_id": 134418,
      "definition_id": 139190,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 103771,
        "node_name": "Splintering Ray / Frigid Focus",
        "node_type": "choice",
        "pos_x": 12300,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62153
        ],
        "next": [
          108859,
          110258
        ],
        "entry_id": 134418,
        "definition_id": 139190,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Frigid Focus",
        "spell_id": 1247055,
        "icon": "ability_deathknight_shroudofwinter"
      },
      "pve_tooltip": "Ray of Frost damage increased by 30%.",
      "pvp_tooltip": "Ray of Frost damage increased by 30%.",
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
      "talent_name": "Winter's Blessing",
      "spell_id": 417489,
      "node_id": 62150,
      "entry_id": 134540,
      "definition_id": 139308,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62150,
        "node_name": "Winter's Blessing",
        "node_type": "single",
        "pos_x": 12900,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62153,
          81468
        ],
        "next": [
          110258,
          62173
        ],
        "entry_id": 134540,
        "definition_id": 139308,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Winter's Blessing",
        "spell_id": 417489,
        "icon": "spell_frost_wisp"
      },
      "pve_tooltip": "Your Haste is increased by 3%.\nYou gain 5% more Haste from all sources of Haste.",
      "pvp_tooltip": "Your Haste is increased by 1.5%.\nYou gain 5% more Haste from all sources of Haste.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 27,
          "end": 28,
          "old_token": "3",
          "new_token": "1.5",
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
          "old": "3",
          "new": "1.5"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 417489,
          "source_spell_id": 417489,
          "effect_index": 1,
          "effect_text": "Apply Aura: Decrease Attack Speed %",
          "base_value": 3.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 1.5,
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
      "talent_name": "Freezing Rain",
      "spell_id": 270233,
      "node_id": 108860,
      "entry_id": 134416,
      "definition_id": 139188,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108860,
        "node_name": "Freezing Rain",
        "node_type": "single",
        "pos_x": 13500,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62170,
          81468
        ],
        "next": [
          62173
        ],
        "entry_id": 134416,
        "definition_id": 139188,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Freezing Rain",
        "spell_id": 270233,
        "icon": "spell_frost_frozenorb"
      },
      "pve_tooltip": "Frozen Orb makes Blizzard instant cast.\nBlizzard damage increased by 20%.",
      "pvp_tooltip": "Frozen Orb makes Blizzard instant cast.\nBlizzard damage increased by 20%.",
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
      "talent_name": "Cone of Frost",
      "spell_id": 1247090,
      "node_id": 62174,
      "entry_id": 80239,
      "definition_id": 85242,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62174,
        "node_name": "Cone of Frost",
        "node_type": "single",
        "pos_x": 14100,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62170
        ],
        "next": [
          62173
        ],
        "entry_id": 80239,
        "definition_id": 85242,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Cone of Frost",
        "spell_id": 1247090,
        "icon": "ability_mage_chilledtothebone"
      },
      "pve_tooltip": "Cone of Cold now applies 3 stacks of Freezing to up to 5 enemies.",
      "pvp_tooltip": "Cone of Cold now applies 3 stacks of Freezing to up to 5 enemies.",
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
      "talent_name": "Fractured Frost",
      "spell_id": 378448,
      "node_id": 62151,
      "entry_id": 80214,
      "definition_id": 85217,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62151,
        "node_name": "Fractured Frost",
        "node_type": "single",
        "pos_x": 11100,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62180,
          62163,
          108851
        ],
        "next": [
          108858
        ],
        "entry_id": 80214,
        "definition_id": 85217,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Fractured Frost",
        "spell_id": 378448,
        "icon": "spell_fire_frostresistancetotem"
      },
      "pve_tooltip": "Ice Lance strikes 1 additional target at 50% effectiveness, preferring enemies with more stacks of Freezing.",
      "pvp_tooltip": "Ice Lance strikes 1 additional target at 50% effectiveness, preferring enemies with more stacks of Freezing.",
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
      "talent_name": "Improved Shatter",
      "spell_id": 1246811,
      "node_id": 108859,
      "entry_id": 134415,
      "definition_id": 139187,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108859,
        "node_name": "Improved Shatter",
        "node_type": "single",
        "pos_x": 11700,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          103771,
          108851
        ],
        "next": [
          108858,
          109916
        ],
        "entry_id": 134415,
        "definition_id": 139187,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Improved Shatter",
        "spell_id": 1246811,
        "icon": "spell_frost_frostshock"
      },
      "pve_tooltip": "Shatter damage has a 50% increased chance to critically strike.",
      "pvp_tooltip": "Shatter damage has a 50% increased chance to critically strike.",
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
      "talent_name": "Deep Shatter",
      "spell_id": 1247025,
      "node_id": 110258,
      "entry_id": 136796,
      "definition_id": 141559,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110258,
        "node_name": "Deep Shatter",
        "node_type": "single",
        "pos_x": 12900,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62150,
          103771
        ],
        "next": [
          109916,
          108852
        ],
        "entry_id": 136796,
        "definition_id": 141559,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Deep Shatter",
        "spell_id": 1247025,
        "icon": "inv_misc_frostemblem_01"
      },
      "pve_tooltip": "Shatter's critical strike damage is increased by 50% of your critical strike chance.",
      "pvp_tooltip": "Shatter's critical strike damage is increased by 50% of your critical strike chance.",
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
      "talent_name": "Wintertide",
      "spell_id": 378406,
      "node_id": 62173,
      "entry_id": 80237,
      "definition_id": 85240,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62173,
        "node_name": "Wintertide / White Out",
        "node_type": "choice",
        "pos_x": 13500,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62174,
          108860,
          62150
        ],
        "next": [
          108852
        ],
        "entry_id": 80237,
        "definition_id": 85240,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Wintertide",
        "spell_id": 378406,
        "icon": "ability_deathknight_frozencenter"
      },
      "pve_tooltip": "Frozen Orb has a 100% chance to grant Brain Freeze.",
      "pvp_tooltip": "Frozen Orb has a 100% chance to grant Brain Freeze.",
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
      "talent_name": "White Out",
      "spell_id": 1281638,
      "node_id": 62173,
      "entry_id": 136880,
      "definition_id": 141643,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62173,
        "node_name": "Wintertide / White Out",
        "node_type": "choice",
        "pos_x": 13500,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62174,
          108860,
          62150
        ],
        "next": [
          108852
        ],
        "entry_id": 136880,
        "definition_id": 141643,
        "entry_index": 300,
        "entry_type": "passive",
        "talent_name": "White Out",
        "spell_id": 1281638,
        "icon": "spell_frost_frostblast"
      },
      "pve_tooltip": "Ice Lance reduces the cooldown of Frozen Orb by 0.5 sec, increased by 0.1 sec for each stack of Freezing Shattered.",
      "pvp_tooltip": "Ice Lance reduces the cooldown of Frozen Orb by 0.5 sec, increased by 0.1 sec for each stack of Freezing Shattered.",
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
      "talent_name": "Glacial Attunement",
      "spell_id": 1247759,
      "node_id": 108858,
      "entry_id": 134414,
      "definition_id": 139186,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108858,
        "node_name": "Glacial Attunement",
        "node_type": "single",
        "pos_x": 11100,
        "pos_y": 5700,
        "max_ranks": 2,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108859,
          62151
        ],
        "next": [
          108853,
          108855,
          108849
        ],
        "entry_id": 134414,
        "definition_id": 139186,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Glacial Attunement",
        "spell_id": 1247759,
        "icon": "ability_hunter_glacialtrap"
      },
      "pve_tooltip": "Flurry and Blizzard damage increased by 20%.",
      "pvp_tooltip": "Flurry and Blizzard damage increased by 20%.",
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
          "pve_tooltip": "Flurry and Blizzard damage increased by 10%.",
          "pvp_tooltip": "Flurry and Blizzard damage increased by 10%.",
          "tooltip_changed": false,
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69875"
        },
        {
          "rank": 2,
          "pve_tooltip": "Flurry and Blizzard damage increased by 20%.",
          "pvp_tooltip": "Flurry and Blizzard damage increased by 20%.",
          "tooltip_changed": false,
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69875"
        }
      ]
    },
    {
      "talent_name": "Heart of Ice",
      "spell_id": 1247799,
      "node_id": 109916,
      "entry_id": 136183,
      "definition_id": 140956,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109916,
        "node_name": "Heart of Ice",
        "node_type": "single",
        "pos_x": 12300,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108859,
          110258
        ],
        "next": [
          108849,
          110283,
          108850
        ],
        "entry_id": 136183,
        "definition_id": 140956,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Heart of Ice",
        "spell_id": 1247799,
        "icon": "inv_10_dungeonjewelry_primalist_necklace_1_frost"
      },
      "pve_tooltip": "Ice Lance Shatters 1 additional stack of Freezing.",
      "pvp_tooltip": "Ice Lance Shatters 1 additional stack of Freezing.",
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
      "talent_name": "Rimecaster",
      "spell_id": 1247743,
      "node_id": 108852,
      "entry_id": 134408,
      "definition_id": 139180,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108852,
        "node_name": "Rimecaster",
        "node_type": "single",
        "pos_x": 13500,
        "pos_y": 5700,
        "max_ranks": 2,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          62173,
          110258
        ],
        "next": [
          108850,
          108863,
          108857
        ],
        "entry_id": 134408,
        "definition_id": 139180,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Rimecaster",
        "spell_id": 1247743,
        "icon": "spell_frost_manarecharge"
      },
      "pve_tooltip": "[Frostfire Bolt / Frostbolt] and Glacial Spike damage increased by 20%.",
      "pvp_tooltip": "[Frostfire Bolt / Frostbolt] and Glacial Spike damage increased by 20%.",
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
          "pve_tooltip": "[Frostfire Bolt / Frostbolt] and Glacial Spike damage increased by 10%.",
          "pvp_tooltip": "[Frostfire Bolt / Frostbolt] and Glacial Spike damage increased by 10%.",
          "tooltip_changed": false,
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69875"
        },
        {
          "rank": 2,
          "pve_tooltip": "[Frostfire Bolt / Frostbolt] and Glacial Spike damage increased by 20%.",
          "pvp_tooltip": "[Frostfire Bolt / Frostbolt] and Glacial Spike damage increased by 20%.",
          "tooltip_changed": false,
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69875"
        }
      ]
    },
    {
      "talent_name": "Freezing Winds",
      "spell_id": 1216953,
      "node_id": 108853,
      "entry_id": 134409,
      "definition_id": 139181,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108853,
        "node_name": "Freezing Winds",
        "node_type": "single",
        "pos_x": 10500,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108858
        ],
        "next": [
          62182
        ],
        "entry_id": 134409,
        "definition_id": 139181,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Freezing Winds",
        "spell_id": 1216953,
        "icon": "spell_fire_blueflamering"
      },
      "pve_tooltip": "Shattering enemies inside your Blizzard increases Shatter's area damage by 15%.",
      "pvp_tooltip": "Shattering enemies inside your Blizzard increases Shatter's area damage by 15%.",
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
      "talent_name": "Improved Flurry",
      "spell_id": 1247769,
      "node_id": 108855,
      "entry_id": 134411,
      "definition_id": 139183,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108855,
        "node_name": "Improved Flurry",
        "node_type": "single",
        "pos_x": 11100,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108858
        ],
        "next": [
          62182
        ],
        "entry_id": 134411,
        "definition_id": 139183,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Improved Flurry",
        "spell_id": 1247769,
        "icon": "ability_warlock_burningembersblue"
      },
      "pve_tooltip": "Flurry fires 1 additional missile.",
      "pvp_tooltip": "Flurry fires 1 additional missile.",
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
      "talent_name": "Glacial Assault",
      "spell_id": 378947,
      "node_id": 108849,
      "entry_id": 134405,
      "definition_id": 139177,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108849,
        "node_name": "Glacial Assault",
        "node_type": "single",
        "pos_x": 11700,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108858,
          109916
        ],
        "next": [
          62184
        ],
        "entry_id": 134405,
        "definition_id": 139177,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Glacial Assault",
        "spell_id": 378947,
        "icon": "inv_staff_15"
      },
      "pve_tooltip": "Flurry has a 12% chance each hit to call down an icy comet, crashing into your target and nearby enemies for (150% of Spell Power) Frost damage.\nApplies 1 stack of Freezing.",
      "pvp_tooltip": "Flurry has a 12% chance each hit to call down an icy comet, crashing into your target and nearby enemies for (154.5% of Spell Power) Frost damage.\nApplies 1 stack of Freezing.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 110,
          "end": 113,
          "old_token": "150",
          "new_token": "154.5",
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
          "old": "150",
          "new": "154.5"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 378947,
          "source_spell_id": 379029,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (SP mod: 1.5)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.03,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            378947,
            379029
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
      "talent_name": "Crystalline Refraction",
      "spell_id": 1247544,
      "node_id": 110283,
      "entry_id": 136837,
      "definition_id": 141600,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110283,
        "node_name": "Crystalline Refraction",
        "node_type": "single",
        "pos_x": 12300,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109916
        ],
        "next": [
          62184
        ],
        "entry_id": 136837,
        "definition_id": 141600,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Crystalline Refraction",
        "spell_id": 1247544,
        "icon": "inv_10_enchanting_crystal_color3"
      },
      "pve_tooltip": "Ray of Frost generates 2 stacks of Fingers of Frost over its duration.",
      "pvp_tooltip": "Ray of Frost generates 2 stacks of Fingers of Frost over its duration.",
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
      "talent_name": "Summon Water Elemental",
      "spell_id": 31687,
      "node_id": 108850,
      "entry_id": 134406,
      "definition_id": 139178,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108850,
        "node_name": "Summon Water Elemental / Lonely Winter",
        "node_type": "choice",
        "pos_x": 12900,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108852,
          109916
        ],
        "next": [
          62184
        ],
        "entry_id": 134406,
        "definition_id": 139178,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Summon Water Elemental",
        "spell_id": 31687,
        "icon": "spell_frost_summonwaterelemental_2"
      },
      "pve_tooltip": "3% of base mana\n1.5 sec cast\n15 sec cooldown\nSummons a Water Elemental to follow and fight for you.",
      "pvp_tooltip": "3% of base mana\n1.5 sec cast\n15 sec cooldown\nSummons a Water Elemental to follow and fight for you.",
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
      "talent_name": "Lonely Winter",
      "spell_id": 205024,
      "node_id": 108850,
      "entry_id": 136839,
      "definition_id": 141602,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108850,
        "node_name": "Summon Water Elemental / Lonely Winter",
        "node_type": "choice",
        "pos_x": 12900,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108852,
          109916
        ],
        "next": [
          62184
        ],
        "entry_id": 136839,
        "definition_id": 141602,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Lonely Winter",
        "spell_id": 205024,
        "icon": "achievement_dungeon_frozenthrone"
      },
      "pve_tooltip": "Replaces Summon Water Elemental\nSpell damage increased by 3%.",
      "pvp_tooltip": "Replaces Summon Water Elemental\nSpell damage increased by 3%.",
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
      "talent_name": "Glacial Chill",
      "spell_id": 1280779,
      "node_id": 108863,
      "entry_id": 134420,
      "definition_id": 139192,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108863,
        "node_name": "Glacial Chill / Glacial Shatter",
        "node_type": "choice",
        "pos_x": 13500,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108852
        ],
        "next": [
          62185
        ],
        "entry_id": 134420,
        "definition_id": 139192,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Glacial Chill",
        "spell_id": 1280779,
        "icon": "spell_frost_iceshard"
      },
      "pve_tooltip": "Glacial Spike deals 5% increased damage and applies 2 additional stacks of Freezing.",
      "pvp_tooltip": "Glacial Spike deals 5% increased damage and applies 2 additional stacks of Freezing.",
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
      "talent_name": "Glacial Shatter",
      "spell_id": 1280780,
      "node_id": 108863,
      "entry_id": 136838,
      "definition_id": 141601,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108863,
        "node_name": "Glacial Chill / Glacial Shatter",
        "node_type": "choice",
        "pos_x": 13500,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108852
        ],
        "next": [
          62185
        ],
        "entry_id": 136838,
        "definition_id": 141601,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Glacial Shatter",
        "spell_id": 1280780,
        "icon": "artifactability_frostmage_ebonbolt"
      },
      "pve_tooltip": "Glacial Spike no longer applies Freezing, and instead Shatters 5 stacks of Freezing.",
      "pvp_tooltip": "Glacial Spike no longer applies Freezing, and instead Shatters 5 stacks of Freezing.",
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
      "talent_name": "Hailstones",
      "spell_id": 1247742,
      "node_id": 108857,
      "entry_id": 134413,
      "definition_id": 139185,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 108857,
        "node_name": "Hailstones",
        "node_type": "single",
        "pos_x": 14100,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108852
        ],
        "next": [
          62185
        ],
        "entry_id": 134413,
        "definition_id": 139185,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Hailstones",
        "spell_id": 1247742,
        "icon": "artifactability_frostmage_blackicicles"
      },
      "pve_tooltip": "The time it takes to generate an Icicle is reduced by 1.0 sec.",
      "pvp_tooltip": "The time it takes to generate an Icicle is reduced by 1.0 sec.",
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
      "talent_name": "Thermal Void",
      "spell_id": 1247729,
      "node_id": 62182,
      "entry_id": 80248,
      "definition_id": 85251,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62182,
        "node_name": "Thermal Void",
        "node_type": "single",
        "pos_x": 11100,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108855,
          108853
        ],
        "next": [],
        "entry_id": 80248,
        "definition_id": 85251,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Thermal Void",
        "spell_id": 1247729,
        "icon": "spell_mage_thermalvoid"
      },
      "pve_tooltip": "Consuming Brain Freeze has a 100% chance to cause your next Ice Lance to Shatter 4 additional stacks of Freezing.",
      "pvp_tooltip": "Consuming Brain Freeze has a 100% chance to cause your next Ice Lance to Shatter 4 additional stacks of Freezing.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [
        {
          "effect_indexes": [
            1
          ],
          "status": "NESTED_DEPENDENCY_NOT_VISIBLE",
          "kind": "spell_power_coefficient",
          "old": 91.53999999999999,
          "new": 94.2862,
          "full_tooltip_match_count": 0
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 1247729,
          "source_spell_id": 1246949,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (SP mod: 0.9154)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.03,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1247729,
            1246769,
            1246949
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
          "talent_spell_id": 1247729,
          "source_spell_id": 1246949,
          "effect_index": 2,
          "effect_text": "School Damage (Frost) (SP mod: 0.248)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.03,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1247729,
            1246769,
            1246949
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
      "talent_name": "Glaciate",
      "spell_id": 1247798,
      "node_id": 62184,
      "entry_id": 80250,
      "definition_id": 85253,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62184,
        "node_name": "Glaciate",
        "node_type": "single",
        "pos_x": 12300,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108849,
          108850,
          110283
        ],
        "next": [],
        "entry_id": 80250,
        "definition_id": 85253,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Glaciate",
        "spell_id": 1247798,
        "icon": "spell_frost_frozencore"
      },
      "pve_tooltip": "When Ice Lance Shatters a stack of Freezing, the cooldown of Ray of Frost is reduced by 0.10 sec.",
      "pvp_tooltip": "When Ice Lance Shatters a stack of Freezing, the cooldown of Ray of Frost is reduced by 0.10 sec.",
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
      "talent_name": "Comet Storm",
      "spell_id": 1247777,
      "node_id": 62185,
      "entry_id": 80251,
      "definition_id": 85254,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 62185,
        "node_name": "Comet Storm",
        "node_type": "single",
        "pos_x": 13500,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          108857,
          108863
        ],
        "next": [],
        "entry_id": 80251,
        "definition_id": 85254,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Comet Storm",
        "spell_id": 1247777,
        "icon": "spell_mage_cometstorm2"
      },
      "pve_tooltip": "Casting Ray of Frost replaces your Ray of Frost with Comet Storm, calling down a series of 7 icy comets on and around the target, that deals up to [7 * (86% of Spell Power)] Frost damage to all enemies within 8 yds of its impacts.\nEach Comet Shatters 1 stack of Freezing.",
      "pvp_tooltip": "Casting Ray of Frost replaces your Ray of Frost with Comet Storm, calling down a series of 7 icy comets on and around the target, that deals up to [7 * (124.012% of Spell Power)] Frost damage to all enemies within 8 yds of its impacts.\nEach Comet Shatters 1 stack of Freezing.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 153,
          "end": 155,
          "old_token": "86",
          "new_token": "124.012",
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
          "status": "NESTED_DEPENDENCY_NOT_VISIBLE",
          "kind": "spell_power_coefficient",
          "old": 91.53999999999999,
          "new": 94.2862,
          "full_tooltip_match_count": 0
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "spell_power_coefficient",
          "old": "86",
          "new": "124.012"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 1247777,
          "source_spell_id": 153596,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (SP mod: 0.86)",
          "base_value": null,
          "spell_pvp_multiplier": 1.4,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.442,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1247777,
            153596
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
          "talent_spell_id": 1247777,
          "source_spell_id": 1246949,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (SP mod: 0.9154)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.03,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1247777,
            1246769,
            1246949
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
          "talent_spell_id": 1247777,
          "source_spell_id": 1246949,
          "effect_index": 2,
          "effect_text": "School Damage (Frost) (SP mod: 0.248)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.03,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1247777,
            1246769,
            1246949
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
      "talent_name": "Hand of Frost",
      "spell_id": 1262935,
      "node_id": 110422,
      "entry_id": 137034,
      "definition_id": 141797,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110422,
        "node_name": "Hand of Frost / Hand of Frost / Hand of Frost",
        "node_type": "tiered",
        "pos_x": 12300,
        "pos_y": 7650,
        "max_ranks": 4,
        "required_points": 20,
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [],
        "entry_id": 137034,
        "definition_id": 141797,
        "entry_index": 100,
        "entry_type": "tierrank",
        "talent_name": "Hand of Frost",
        "spell_id": 1262935,
        "icon": "inv12_apextalent_mage_handoffrost"
      },
      "pve_tooltip": "40 yd range\nShattering an enemy has a 10% chance to summon a Hand of Frost to pursue your target, dealing (500% of Spell Power) Frost damage and applying 1 stack of Freezing on contact.",
      "pvp_tooltip": "40 yd range\nShattering an enemy has a 10% chance to summon a Hand of Frost to pursue your target, dealing (515% of Spell Power) Frost damage and applying 1 stack of Freezing on contact.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 107,
          "end": 110,
          "old_token": "500",
          "new_token": "515",
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
          "old": "500",
          "new": "515"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 1262935,
          "source_spell_id": 1262769,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (SP mod: 5)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.03,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1262935,
            1262769
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
      "talent_name": "Hand of Frost",
      "spell_id": 1262981,
      "node_id": 110422,
      "entry_id": 137033,
      "definition_id": 141796,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110422,
        "node_name": "Hand of Frost / Hand of Frost / Hand of Frost",
        "node_type": "tiered",
        "pos_x": 12300,
        "pos_y": 7650,
        "max_ranks": 4,
        "required_points": 20,
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [],
        "entry_id": 137033,
        "definition_id": 141796,
        "entry_index": 200,
        "entry_type": "tierrank",
        "talent_name": "Hand of Frost",
        "spell_id": 1262981,
        "icon": "spell_frost_piercing_chill"
      },
      "pve_tooltip": "40 yd range\nEach stack of Freezing you Shatter increases your chance to summon a Hand of Frost by an additional 1.0%.\nDamage from Hand of Frost increases your spell damage by 0.5% for 8 sec. Multiple applications may overlap.",
      "pvp_tooltip": "40 yd range\nEach stack of Freezing you Shatter increases your chance to summon a Hand of Frost by an additional 1.0%.\nDamage from Hand of Frost increases your spell damage by 0.5% for 8 sec. Multiple applications may overlap.",
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
      "talent_name": "Hand of Frost",
      "spell_id": 1263249,
      "node_id": 110422,
      "entry_id": 137032,
      "definition_id": 141795,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110422,
        "node_name": "Hand of Frost / Hand of Frost / Hand of Frost",
        "node_type": "tiered",
        "pos_x": 12300,
        "pos_y": 7650,
        "max_ranks": 4,
        "required_points": 20,
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [],
        "entry_id": 137032,
        "definition_id": 141795,
        "entry_index": 300,
        "entry_type": "tierrank",
        "talent_name": "Hand of Frost",
        "spell_id": 1263249,
        "icon": "ability_mage_rayoffrost"
      },
      "pve_tooltip": "40 yd range\nRay of Frost summons 4 Hands of Frost over its duration.\nRay of Frost gains an additional charge and its damage is increased by 25%.",
      "pvp_tooltip": "40 yd range\nRay of Frost summons 4 Hands of Frost over its duration.\nRay of Frost gains an additional charge and its damage is increased by 25%.",
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
      "talent_name": "Frostfire Bolt",
      "spell_id": 431044,
      "node_id": 94636,
      "entry_id": 117239,
      "definition_id": 122251,
      "tree_type": "hero",
      "hero_tree": "Frostfire",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Frostfire",
        "subtree_id": 41,
        "node_id": 94636,
        "node_name": "Frostfire Bolt",
        "node_type": "single",
        "pos_x": 15000,
        "pos_y": 1500,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": true,
        "free_node": true,
        "prev": [],
        "next": [
          94642,
          94641,
          94633,
          109672
        ],
        "entry_id": 117239,
        "definition_id": 122251,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Frostfire Bolt",
        "spell_id": 431044,
        "icon": "inv_ability_frostfiremage_frostfirebolt"
      },
      "pve_tooltip": "2% of base mana\n40 yd range\n1.75 sec cast\nLaunches a bolt of frostfire at the enemy, causing (259.4% of Spell Power) Frostfire damage, slowing movement speed by 50%, and causing an additional (21.6% of Spell Power) Frostfire damage over 8 sec.\nApplies 1 stack of Freezing.",
      "pvp_tooltip": "2% of base mana\n40 yd range\n1.75 sec cast\nLaunches a bolt of frostfire at the enemy, causing (259.4% of Spell Power) Frostfire damage, slowing movement speed by 50%, and causing an additional (21.6% of Spell Power) Frostfire damage over 8 sec.\nApplies 1 stack of Freezing.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [
        {
          "effect_indexes": [
            1
          ],
          "status": "NESTED_DEPENDENCY_NOT_VISIBLE",
          "kind": "spell_power_coefficient",
          "old": 91.53999999999999,
          "new": 94.2862,
          "full_tooltip_match_count": 0
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "RUNTIME",
          "talent_spell_id": 431044,
          "source_spell_id": 468655,
          "effect_index": 1,
          "effect_text": "School Damage (Fire, Frost) (SP mod: 2.594)",
          "base_value": null,
          "spell_pvp_multiplier": 1.9,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.9569999999999999,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            431044,
            468655
          ],
          "dependency_relations": [
            "trigger_spell"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
          "dependency_kind": "RUNTIME",
          "talent_spell_id": 431044,
          "source_spell_id": 468655,
          "effect_index": 2,
          "effect_text": "Apply Aura: Periodic Damage",
          "base_value": null,
          "spell_pvp_multiplier": 0.95,
          "amount_kind": "periodic",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 0.9784999999999999,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            431044,
            468655
          ],
          "dependency_relations": [
            "trigger_spell"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264849,
              "amount_kind": "periodic",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
          "talent_spell_id": 431044,
          "source_spell_id": 1246949,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (SP mod: 0.9154)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.03,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            431044,
            1246769,
            1246949
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
          "talent_spell_id": 431044,
          "source_spell_id": 1246949,
          "effect_index": 2,
          "effect_text": "School Damage (Frost) (SP mod: 0.248)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.03,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            431044,
            1246769,
            1246949
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
      "talent_name": "Splintering Sorcery",
      "spell_id": 443739,
      "node_id": 94664,
      "entry_id": 117267,
      "definition_id": 122279,
      "tree_type": "hero",
      "hero_tree": "Spellslinger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 122279,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Splintering Sorcery",
        "spell_id": 443739,
        "icon": "achievement_dungeon_arcanevaults"
      },
      "pve_tooltip": "Casting Frostbolt or Flurry conjures a Frost Splinter.\nFrost Splinter:\nConjure raw Frost magic into a sharp projectile that deals (45.3% of Spell Power) Frost damage.",
      "pvp_tooltip": "Casting Frostbolt or Flurry conjures a Frost Splinter.\nFrost Splinter:\nConjure raw Frost magic into a sharp projectile that deals (45.3% of Spell Power) Frost damage.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
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
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.03,
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
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.03,
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
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead"
          ],
          "source_notes": [],
          "confidence": "medium"
        }
      ],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Imbued Warding",
      "spell_id": 431066,
      "node_id": 94642,
      "entry_id": 117245,
      "definition_id": 122257,
      "tree_type": "hero",
      "hero_tree": "Frostfire",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Frostfire",
        "subtree_id": 41,
        "node_id": 94642,
        "node_name": "Imbued Warding / Meltdown",
        "node_type": "choice",
        "pos_x": 14100,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94636
        ],
        "next": [
          94638
        ],
        "entry_id": 117245,
        "definition_id": 122257,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Imbued Warding",
        "spell_id": 431066,
        "icon": "inv_10_jewelcrafting_gem3primal_fire_cut_blue"
      },
      "pve_tooltip": "Ice Barrier also casts a Blazing Barrier at 25% effectiveness.",
      "pvp_tooltip": "Ice Barrier also casts a Blazing Barrier at 15% effectiveness.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 44,
          "end": 46,
          "old_token": "25",
          "new_token": "15",
          "kind": "percent_value",
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
          "talent_spell_id": 431066,
          "source_spell_id": 431066,
          "effect_index": 1,
          "effect_text": "Apply Aura: Dummy",
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
            "wowhead",
            "simc"
          ],
          "source_notes": [],
          "confidence": "ambiguous"
        },
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 431066,
          "source_spell_id": 431066,
          "effect_index": 2,
          "effect_text": "Apply Aura: Dummy",
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
            "wowhead",
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
      "talent_name": "Meltdown",
      "spell_id": 431131,
      "node_id": 94642,
      "entry_id": 117776,
      "definition_id": 122788,
      "tree_type": "hero",
      "hero_tree": "Frostfire",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Frostfire",
        "subtree_id": 41,
        "node_id": 94642,
        "node_name": "Imbued Warding / Meltdown",
        "node_type": "choice",
        "pos_x": 14100,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94636
        ],
        "next": [
          94638
        ],
        "entry_id": 117776,
        "definition_id": 122788,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Meltdown",
        "spell_id": 431131,
        "icon": "spell_frost_arcticwinds"
      },
      "pve_tooltip": "You melt slightly out of your Ice Block and Ice Cold, allowing you to move slowly during Ice Block and increasing your movement speed over time.\nIce Block and Ice Cold trigger a Blazing Barrier when they end.",
      "pvp_tooltip": "You melt slightly out of your Ice Block and Ice Cold, allowing you to move slowly during Ice Block and increasing your movement speed over time.\nIce Block and Ice Cold trigger a Blazing Barrier when they end.",
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
      "talent_name": "Frostfire Empowerment",
      "spell_id": 431176,
      "node_id": 94641,
      "entry_id": 117244,
      "definition_id": 122256,
      "tree_type": "hero",
      "hero_tree": "Frostfire",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Frostfire",
        "subtree_id": 41,
        "node_id": 94641,
        "node_name": "Frostfire Empowerment",
        "node_type": "single",
        "pos_x": 14700,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94636
        ],
        "next": [
          94640
        ],
        "entry_id": 117244,
        "definition_id": 122256,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Frostfire Empowerment",
        "spell_id": 431176,
        "icon": "spell_frostfire_orb"
      },
      "pve_tooltip": "Casting Frostfire spells has a 10% chance to activate Frostfire Empowerment, causing your next Frostfire Bolt to be instant cast, deal 60% increased damage, explode for 60% of its damage to nearby enemies. Damage reduced beyond 5 targets.\nDamage from Frostfire Empowerment applies 1 stack of Freezing.",
      "pvp_tooltip": "Casting Frostfire spells has a 10% chance to activate Frostfire Empowerment, causing your next Frostfire Bolt to be instant cast, deal 10% increased damage, explode for 30% of its damage to nearby enemies. Damage reduced beyond 5 targets.\nDamage from Frostfire Empowerment applies 1 stack of Freezing.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 169,
          "end": 171,
          "old_token": "60",
          "new_token": "30",
          "kind": "percent_value",
          "effect_indexes": [
            2,
            6
          ]
        },
        {
          "start": 135,
          "end": 137,
          "old_token": "60",
          "new_token": "10",
          "kind": "percent_value",
          "effect_indexes": [
            3
          ]
        }
      ],
      "diagnostics": [
        {
          "effect_indexes": [
            1
          ],
          "status": "NOT_VISIBLE_IN_TOOLTIP",
          "kind": "ordinary_value",
          "old": 100.0,
          "new": 50.0,
          "full_tooltip_match_count": 0
        },
        {
          "effect_indexes": [
            3
          ],
          "status": "APPLIED",
          "kind": "percent_value",
          "old": "60",
          "new": "10"
        },
        {
          "effect_indexes": [
            2,
            6
          ],
          "status": "APPLIED",
          "kind": "percent_value",
          "old": "60",
          "new": "30"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 431176,
          "source_spell_id": 431176,
          "effect_index": 1,
          "effect_text": "Apply Aura: Dummy",
          "base_value": 100.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 50.0,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [],
          "sources": [
            "wowhead",
            "simc"
          ],
          "source_notes": [],
          "confidence": "ambiguous"
        },
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 431176,
          "source_spell_id": 431176,
          "effect_index": 2,
          "effect_text": "Apply Aura: Dummy",
          "base_value": 60.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 30.0,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [],
          "sources": [
            "wowhead",
            "simc"
          ],
          "source_notes": [],
          "confidence": "ambiguous"
        },
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 431176,
          "source_spell_id": 431176,
          "effect_index": 6,
          "effect_text": "Apply Aura: Dummy",
          "base_value": 60.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 30.0,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
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
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 431176,
          "source_spell_id": 431177,
          "effect_index": 3,
          "effect_text": "Apply Aura: Dummy",
          "base_value": 60.0,
          "spell_pvp_multiplier": 0.1667,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.1667,
          "final_pvp_value": 10.001999999999999,
          "is_final_pvp_modified": true,
          "dependency_path": [
            431176,
            431177
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
      "render_effect_count": 4,
      "rank_tooltips": []
    },
    {
      "talent_name": "Elemental Affinity",
      "spell_id": 431067,
      "node_id": 94633,
      "entry_id": 117236,
      "definition_id": 122248,
      "tree_type": "hero",
      "hero_tree": "Frostfire",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Frostfire",
        "subtree_id": 41,
        "node_id": 94633,
        "node_name": "Elemental Affinity / Flame and Frost",
        "node_type": "choice",
        "pos_x": 15300,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94636
        ],
        "next": [
          94634
        ],
        "entry_id": 117236,
        "definition_id": 122248,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Elemental Affinity",
        "spell_id": 431067,
        "icon": "inv_10_dungeonjewelry_dragon_trinket_5_red"
      },
      "pve_tooltip": "The cooldown of Fire spells is reduced by 30%.",
      "pvp_tooltip": "The cooldown of Fire spells is reduced by 30%.",
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
      "talent_name": "Flame and Frost",
      "spell_id": 431112,
      "node_id": 94633,
      "entry_id": 117775,
      "definition_id": 122787,
      "tree_type": "hero",
      "hero_tree": "Frostfire",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Frostfire",
        "subtree_id": 41,
        "node_id": 94633,
        "node_name": "Elemental Affinity / Flame and Frost",
        "node_type": "choice",
        "pos_x": 15300,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94636
        ],
        "next": [
          94634
        ],
        "entry_id": 117775,
        "definition_id": 122787,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Flame and Frost",
        "spell_id": 431112,
        "icon": "spell_firefrost_orb"
      },
      "pve_tooltip": "Ice Block and Ice Cold reset the cooldowns of your Fire spells.",
      "pvp_tooltip": "Ice Block and Ice Cold reset the cooldowns of your Fire spells.",
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
      "talent_name": "Duality",
      "spell_id": 1262843,
      "node_id": 109672,
      "entry_id": 135923,
      "definition_id": 140678,
      "tree_type": "hero",
      "hero_tree": "Frostfire",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Frostfire",
        "subtree_id": 41,
        "node_id": 109672,
        "node_name": "Duality",
        "node_type": "single",
        "pos_x": 15900,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94636
        ],
        "next": [
          109671
        ],
        "entry_id": 135923,
        "definition_id": 140678,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Duality",
        "spell_id": 1262843,
        "icon": "ability_mage_frostfirebolt"
      },
      "pve_tooltip": "Casting Glacial Spike also casts a Pyroblast, dealing (881.3% of Spell Power) Fire damage.",
      "pvp_tooltip": "Casting Glacial Spike also casts a Pyroblast, dealing (299.5539% of Spell Power) Fire damage.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 55,
          "end": 60,
          "old_token": "881.3",
          "new_token": "299.5539",
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
          "old": 366.24,
          "new": 124.48497600000002,
          "full_tooltip_match_count": 1
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "spell_power_coefficient",
          "old": "881.3",
          "new": "299.5539"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 1262843,
          "source_spell_id": 1262862,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (SP mod: 3.6624)",
          "base_value": null,
          "spell_pvp_multiplier": 0.33,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 0.33990000000000004,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1262843,
            1262862
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
          "talent_spell_id": 1262843,
          "source_spell_id": 1262863,
          "effect_index": 1,
          "effect_text": "School Damage (Fire) (SP mod: 8.813)",
          "base_value": null,
          "spell_pvp_multiplier": 0.33,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 0.33990000000000004,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1262843,
            1262863
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 122277,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Augury Abounds",
        "spell_id": 1280165,
        "icon": "spell_arcane_arcanepotency"
      },
      "pve_tooltip": "Conjuring one or more Frost Splinters has a 10% chance to conjure a burst of 8 Frost Splinters.\n(500ms cooldown)",
      "pvp_tooltip": "Conjuring one or more Frost Splinters has a 10% chance to conjure a burst of 8 Frost Splinters.\n(500ms cooldown)",
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 122278,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Force of Will",
        "spell_id": 444719,
        "icon": "spell_mage_overpowered"
      },
      "pve_tooltip": "Ice Lance conjures a Frost Splinter for every 2 Freezing stacks Shattered from its primary target.",
      "pvp_tooltip": "Ice Lance conjures a Frost Splinter for every 2 Freezing stacks Shattered from its primary target.",
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 122276,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Splintering Orbs",
        "spell_id": 444256,
        "icon": "item_azereansphere"
      },
      "pve_tooltip": "Enemies damaged by your Frozen Orb conjure 1 Frost Splinter, up to 4.\nFrozen Orb damage is increased by 40%.",
      "pvp_tooltip": "Enemies damaged by your Frozen Orb conjure 1 Frost Splinter, up to 4.\nFrozen Orb damage is increased by 40%.",
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 140675,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Attuned Familiar",
        "spell_id": 1261106,
        "icon": "ability_socererking_arcanemines"
      },
      "pve_tooltip": "Your Water Elemental has a 50% chance to conjure a Splinter alongside its Waterbolt.",
      "pvp_tooltip": "Your Water Elemental has a 50% chance to conjure a Splinter alongside its Waterbolt.",
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 140701,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Shifting Shards",
        "spell_id": 444675,
        "icon": "ability_mage_freeze"
      },
      "pve_tooltip": "Gaining Brain Freeze conjures 2 Frost Splinters.",
      "pvp_tooltip": "Gaining Brain Freeze conjures 2 Frost Splinters.",
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
      "talent_name": "Heat Sink",
      "spell_id": 1248002,
      "node_id": 94638,
      "entry_id": 117241,
      "definition_id": 122253,
      "tree_type": "hero",
      "hero_tree": "Frostfire",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Frostfire",
        "subtree_id": 41,
        "node_id": 94638,
        "node_name": "Heat Sink",
        "node_type": "single",
        "pos_x": 14100,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94642
        ],
        "next": [
          94639
        ],
        "entry_id": 117241,
        "definition_id": 122253,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Heat Sink",
        "spell_id": 1248002,
        "icon": "spell_fire_masterofelements"
      },
      "pve_tooltip": "Flurry now deals Frostfire damage and its damage is increased by 25%.",
      "pvp_tooltip": "Flurry now deals Frostfire damage and its damage is increased by 25%.",
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
      "talent_name": "Thermal Conditioning",
      "spell_id": 431117,
      "node_id": 94640,
      "entry_id": 117243,
      "definition_id": 122255,
      "tree_type": "hero",
      "hero_tree": "Frostfire",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Frostfire",
        "subtree_id": 41,
        "node_id": 94640,
        "node_name": "Thermal Conditioning / Severe Temperatures",
        "node_type": "choice",
        "pos_x": 14700,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94641
        ],
        "next": [
          94632
        ],
        "entry_id": 117243,
        "definition_id": 122255,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Thermal Conditioning",
        "spell_id": 431117,
        "icon": "spell_fireresistancetotem_01"
      },
      "pve_tooltip": "Frostfire Bolt's cast time is reduced by 10%.",
      "pvp_tooltip": "Frostfire Bolt's cast time is reduced by 10%.",
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
      "talent_name": "Severe Temperatures",
      "spell_id": 431189,
      "node_id": 94640,
      "entry_id": 134441,
      "definition_id": 139212,
      "tree_type": "hero",
      "hero_tree": "Frostfire",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Frostfire",
        "subtree_id": 41,
        "node_id": 94640,
        "node_name": "Thermal Conditioning / Severe Temperatures",
        "node_type": "choice",
        "pos_x": 14700,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94641
        ],
        "next": [
          94632
        ],
        "entry_id": 134441,
        "definition_id": 139212,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Severe Temperatures",
        "spell_id": 431189,
        "icon": "inv_magemount_fire"
      },
      "pve_tooltip": "Frostfire Empowerment stacks 1 additional time and it causes Frostfire Bolt to explode for an additional 20% of its damage.",
      "pvp_tooltip": "Frostfire Empowerment stacks 1 additional time and it causes Frostfire Bolt to explode for an additional 20% of its damage.",
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
      "talent_name": "Dualcasting Adept",
      "spell_id": 1248014,
      "node_id": 94634,
      "entry_id": 117237,
      "definition_id": 122249,
      "tree_type": "hero",
      "hero_tree": "Frostfire",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Frostfire",
        "subtree_id": 41,
        "node_id": 94634,
        "node_name": "Dualcasting Adept",
        "node_type": "single",
        "pos_x": 15300,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94633
        ],
        "next": [
          94637
        ],
        "entry_id": 117237,
        "definition_id": 122249,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Dualcasting Adept",
        "spell_id": 1248014,
        "icon": "ability_dualwieldspecialization"
      },
      "pve_tooltip": "Your Fire spells deal 20% increased critical strike damage.\nShatter damage increased by 40%.\nBlizzard damage increased by 15%.",
      "pvp_tooltip": "Your Fire spells deal 20% increased critical strike damage.\nShatter damage increased by 40%.\nBlizzard damage increased by 15%.",
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
      "talent_name": "Molten Chill",
      "spell_id": 1262844,
      "node_id": 109671,
      "entry_id": 135922,
      "definition_id": 140677,
      "tree_type": "hero",
      "hero_tree": "Frostfire",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Frostfire",
        "subtree_id": 41,
        "node_id": 109671,
        "node_name": "Molten Chill",
        "node_type": "single",
        "pos_x": 15900,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109672
        ],
        "next": [
          109670
        ],
        "entry_id": 135922,
        "definition_id": 140677,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Molten Chill",
        "spell_id": 1262844,
        "icon": "spell_fire_incinerate"
      },
      "pve_tooltip": "Your Frostfire spells apply Ignite, dealing an additional 30% of their damage over 9 sec.",
      "pvp_tooltip": "Your Frostfire spells apply Ignite, dealing an additional 30% of their damage over 9 sec.",
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 122274,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Slippery Slinging",
        "spell_id": 444752,
        "icon": "ability_mage_icyfeet"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 128256,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Look Again",
        "spell_id": 444756,
        "icon": "achievement_bg_tophealer_av"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 122271,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Controlled Instincts",
        "spell_id": 444483,
        "icon": "spell_frost_ice_shards"
      },
      "pve_tooltip": "60% of the direct damage dealt by a Frost Splinter is also dealt to nearby enemies. Damage reduced beyond 5 targets.",
      "pvp_tooltip": "60% of the direct damage dealt by a Frost Splinter is also dealt to nearby enemies. Damage reduced beyond 5 targets.",
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
          "aura_factor": 1.03,
          "final_pvp_multiplier": 2.575,
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
              "aura_spell_id": 1256913,
              "game_effect_id": 1264849,
              "amount_kind": "periodic",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 122275,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Reactive Barrier",
        "spell_id": 444827,
        "icon": "ability_racial_forceshield"
      },
      "pve_tooltip": "Your Ice Barrier can absorb up to 25% more damage based on your missing health.\nMax effectiveness when under 25% health.",
      "pvp_tooltip": "Your Ice Barrier can absorb up to 12.5% more damage based on your missing health.\nMax effectiveness when under 12.5% health.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 34,
          "end": 36,
          "old_token": "25",
          "new_token": "12.5",
          "kind": "percent_value",
          "effect_indexes": [
            1
          ]
        },
        {
          "start": 109,
          "end": 111,
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 128255,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Phantasmal Image",
        "spell_id": 444784,
        "icon": "spell_arcane_prismaticcloak"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 140674,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Infused Splinters",
        "spell_id": 1261080,
        "icon": "spell_mage_focusingcrystal"
      },
      "pve_tooltip": "Direct damage from Frost Splinters have a 15% chance to apply 1 stack of Freezing.",
      "pvp_tooltip": "Direct damage from Frost Splinters have a 15% chance to apply 1 stack of Freezing.",
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
      "talent_name": "Frostfire Infusion",
      "spell_id": 431166,
      "node_id": 94639,
      "entry_id": 117242,
      "definition_id": 122254,
      "tree_type": "hero",
      "hero_tree": "Frostfire",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Frostfire",
        "subtree_id": 41,
        "node_id": 94639,
        "node_name": "Frostfire Infusion",
        "node_type": "single",
        "pos_x": 14100,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94638
        ],
        "next": [
          94635
        ],
        "entry_id": 117242,
        "definition_id": 122254,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Frostfire Infusion",
        "spell_id": 431166,
        "icon": "inv_10_blacksmithing_craftedbar_frostfirealloy"
      },
      "pve_tooltip": "Frostfire Bolt has an additional 5% chance to grant Brain Freeze.\nThe damage of your Frost spells and Fire spells are increased by 4%.",
      "pvp_tooltip": "Frostfire Bolt has an additional 5% chance to grant Brain Freeze.\nThe damage of your Frost spells and Fire spells are increased by 4%.",
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
      "talent_name": "Flash Freezeburn",
      "spell_id": 431178,
      "node_id": 94632,
      "entry_id": 117235,
      "definition_id": 122247,
      "tree_type": "hero",
      "hero_tree": "Frostfire",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Frostfire",
        "subtree_id": 41,
        "node_id": 94632,
        "node_name": "Flash Freezeburn",
        "node_type": "single",
        "pos_x": 14700,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94640
        ],
        "next": [
          94635
        ],
        "entry_id": 117235,
        "definition_id": 122247,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Flash Freezeburn",
        "spell_id": 431178,
        "icon": "spell_fire_elementaldevastation"
      },
      "pve_tooltip": "Glacial Spike damage increased by 15% and it now explodes on impact, dealing 25% of its damage to up to 5 nearby enemies.\nAdditionally, Glacial Spike now grants Frostfire Empowerment.",
      "pvp_tooltip": "Glacial Spike damage increased by 15% and it now explodes on impact, dealing 25% of its damage to up to 5 nearby enemies.\nAdditionally, Glacial Spike now grants Frostfire Empowerment.",
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
      "talent_name": "Blast Radius",
      "spell_id": 1248016,
      "node_id": 94637,
      "entry_id": 117240,
      "definition_id": 122252,
      "tree_type": "hero",
      "hero_tree": "Frostfire",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Frostfire",
        "subtree_id": 41,
        "node_id": 94637,
        "node_name": "Blast Radius",
        "node_type": "single",
        "pos_x": 15300,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94634
        ],
        "next": [
          94635
        ],
        "entry_id": 117240,
        "definition_id": 122252,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Blast Radius",
        "spell_id": 1248016,
        "icon": "spell_frostresistancetotem_01"
      },
      "pve_tooltip": "Comet Storm damage increased by 50%.\nMeteor damage increased by 20%.",
      "pvp_tooltip": "Comet Storm damage increased by 50%.\nMeteor damage increased by 20%.",
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
      "talent_name": "Elemental Conduit",
      "spell_id": 1262845,
      "node_id": 109670,
      "entry_id": 135921,
      "definition_id": 140676,
      "tree_type": "hero",
      "hero_tree": "Frostfire",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Frostfire",
        "subtree_id": 41,
        "node_id": 109670,
        "node_name": "Elemental Conduit",
        "node_type": "single",
        "pos_x": 15900,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109671
        ],
        "next": [
          94635
        ],
        "entry_id": 135921,
        "definition_id": 140676,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Elemental Conduit",
        "spell_id": 1262845,
        "icon": "inv_ability_shaman_primordialwave"
      },
      "pve_tooltip": "Meteor and Pyroblast now apply Ignite.\nYour Haste is increased by 2%.",
      "pvp_tooltip": "Meteor and Pyroblast now apply Ignite.\nYour Haste is increased by 2%.",
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 122273,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Archmage's Wrath",
        "spell_id": 444968,
        "icon": "spell_arcane_arcane03"
      },
      "pve_tooltip": "100 yd range\nRay of Frost damage increased by 20%.\nYour chance to gain Brain Freeze from Frostbolt is increased by 5%.",
      "pvp_tooltip": "100 yd range\nRay of Frost damage increased by 20%.\nYour chance to gain Brain Freeze from Frostbolt is increased by 5%.",
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 133074,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Signature Spell",
        "spell_id": 470021,
        "icon": "inv_enchanting_815_drustwand"
      },
      "pve_tooltip": "Frostbolt and Blizzard damage increased by 25%.\nGlacial Spike conjures 2 additional Frost Splinters.",
      "pvp_tooltip": "Frostbolt and Blizzard damage increased by 25%.\nGlacial Spike conjures 2 additional Frost Splinters.",
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 122270,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Spellfrost Teachings",
        "spell_id": 444986,
        "icon": "70_inscription_vantus_rune_azure"
      },
      "pve_tooltip": "Direct damage from Frost Splinters reduces the cooldown of Frozen Orb by 0.30 sec.",
      "pvp_tooltip": "Direct damage from Frost Splinters reduces the cooldown of Frozen Orb by 0.30 sec.",
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 140673,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Polished Focus",
        "spell_id": 1261082,
        "icon": "inv_misc_orb_blue"
      },
      "pve_tooltip": "Ice Lance Shatters 1 additional stack of Freezing.\nShatter damage increased by 20%.",
      "pvp_tooltip": "Ice Lance Shatters 1 additional stack of Freezing.\nShatter damage increased by 20%.",
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
      "talent_name": "Isothermic Core",
      "spell_id": 431095,
      "node_id": 94635,
      "entry_id": 117238,
      "definition_id": 122250,
      "tree_type": "hero",
      "hero_tree": "Frostfire",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
        "trait_tree_id": 658,
        "tree_type": "hero",
        "hero_tree": "Frostfire",
        "subtree_id": 41,
        "node_id": 94635,
        "node_name": "Isothermic Core",
        "node_type": "single",
        "pos_x": 15000,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94632,
          94639,
          94637,
          109670
        ],
        "next": [],
        "entry_id": 117238,
        "definition_id": 122250,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Isothermic Core",
        "spell_id": 431095,
        "icon": "inv12_ability_mage_isothermiccore"
      },
      "pve_tooltip": "Comet Storm now also calls down a Meteor, dealing (900% of Spell Power) Fire damage to nearby enemies. Damage reduced beyond 8 targets.\nDamage from Meteor Shatters 1 stacks of Freezing.",
      "pvp_tooltip": "Comet Storm now also calls down a Meteor, dealing (751.9824% of Spell Power) Fire damage to nearby enemies. Damage reduced beyond 8 targets.\nDamage from Meteor Shatters 1 stacks of Freezing.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 51,
          "end": 54,
          "old_token": "900",
          "new_token": "751.9824",
          "kind": "spell_power_coefficient",
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
          "old": 300.0,
          "new": 200.01,
          "full_tooltip_match_count": 0
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "OTHER_SPEC_BRANCH",
          "kind": "spell_power_coefficient",
          "old": 92.80000000000001,
          "new": 76.46720000000002,
          "full_tooltip_match_count": 1
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "NESTED_DEPENDENCY_NOT_VISIBLE",
          "kind": "spell_power_coefficient",
          "old": 91.53999999999999,
          "new": 94.2862,
          "full_tooltip_match_count": 0
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "NESTED_DEPENDENCY_NOT_VISIBLE",
          "kind": "spell_power_coefficient",
          "old": 86.0,
          "new": 124.012,
          "full_tooltip_match_count": 0
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "NESTED_DEPENDENCY_NOT_VISIBLE",
          "kind": "spell_power_coefficient",
          "old": 52.0,
          "new": 69.62800000000001,
          "full_tooltip_match_count": 0
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "spell_power_coefficient",
          "old": "900",
          "new": "751.9824"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 431095,
          "source_spell_id": 431095,
          "effect_index": 2,
          "effect_text": "Apply Aura: Dummy",
          "base_value": 300.0,
          "spell_pvp_multiplier": 0.6667,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.6667,
          "final_pvp_value": 200.01,
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
          "talent_spell_id": 431095,
          "source_spell_id": 351140,
          "effect_index": 1,
          "effect_text": "School Damage (Fire) (SP mod: 9)",
          "base_value": null,
          "spell_pvp_multiplier": 0.8112,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 0.8355360000000001,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            431095,
            351140
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
          "talent_spell_id": 431095,
          "source_spell_id": 438609,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (SP mod: 0.928)",
          "base_value": null,
          "spell_pvp_multiplier": 0.8,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 0.8240000000000001,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            431095,
            438609
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
          "talent_spell_id": 431095,
          "source_spell_id": 1246949,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (SP mod: 0.9154)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.03,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            431095,
            1246769,
            1246949
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
          "talent_spell_id": 431095,
          "source_spell_id": 1246949,
          "effect_index": 2,
          "effect_text": "School Damage (Frost) (SP mod: 0.248)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.03,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            431095,
            1246769,
            1246949
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
          "talent_spell_id": 431095,
          "source_spell_id": 153596,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (SP mod: 0.86)",
          "base_value": null,
          "spell_pvp_multiplier": 1.4,
          "amount_kind": "direct",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.442,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            431095,
            438609,
            153595,
            153596
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "spelldesc_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264666,
              "amount_kind": "direct",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
          "talent_spell_id": 431095,
          "source_spell_id": 155158,
          "effect_index": 1,
          "effect_text": "Apply Aura: Periodic Damage",
          "base_value": null,
          "spell_pvp_multiplier": 1.3,
          "amount_kind": "periodic",
          "aura_factor": 1.03,
          "final_pvp_multiplier": 1.3390000000000002,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            431095,
            351140,
            153561,
            155158
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "spelldesc_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256913,
              "game_effect_id": 1264849,
              "amount_kind": "periodic",
              "value_pct": 3.0,
              "factor": 1.03,
              "label_id": null,
              "build": "12.1.0.69587"
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
      "render_effect_count": 6,
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Mage",
        "class_id": 8,
        "spec_name": "Frost",
        "spec_id": 64,
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
        "definition_id": 122269,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Splinterstorm",
        "spell_id": 443783,
        "icon": "ability_mage_burstofcold"
      },
      "pve_tooltip": "Each time Ray of Frost damages one or more enemies, it generates 1 Frost Splinter.\nFor 10 sec after casting Ray of Frost, your chance to conjure an additional Frost Splinter is increased to 100%.",
      "pvp_tooltip": "Each time Ray of Frost damages one or more enemies, it generates 1 Frost Splinter.\nFor 10 sec after casting Ray of Frost, your chance to conjure an additional Frost Splinter is increased to 100%.",
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
  "source_warnings": [],
  "slug": "mage-frost",
  "generated_at": "2026-09-21T00:53:19.661677+00:00",
  "validation": {
    "talents": 130,
    "changed_tooltips": 25,
    "talents_with_pvp_mechanics": 40,
    "unique_nodes": 109,
    "tree_build": "12.1.0.69875",
    "simc_build": "12.1.0.69875",
    "drustvar_builds": [
      "12.1.0.69587"
    ],
    "verification_status": "VERIFIED",
    "fetch_error_count": 0,
    "source_warning_count": 0,
    "unresolved_count": 0,
    "review_required_count": 0,
    "fetch_error_examples": [],
    "source_warning_examples": [],
    "unresolved_examples": [],
    "review_required_examples": []
  }
};
