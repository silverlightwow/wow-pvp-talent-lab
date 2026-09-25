window.WOW_PVP_DATA = {
  "class_name": "Paladin",
  "spec_name": "Retribution",
  "tree_build": "12.1.0.69933",
  "simc_build": "12.1.0.69933",
  "drustvar_builds": [
    "12.1.0.69933"
  ],
  "talents": [
    {
      "talent_name": "Lay on Hands",
      "spell_id": 633,
      "node_id": 81597,
      "entry_id": 102583,
      "definition_id": 107588,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81597,
        "node_name": "Lay on Hands",
        "node_type": "single",
        "pos_x": 3600,
        "pos_y": 1500,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [
          103859,
          109999,
          81507
        ],
        "entry_id": 102583,
        "entry_max_ranks": 1,
        "definition_id": 107588,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Lay on Hands",
        "spell_id": 633,
        "visible_spell_id": null,
        "icon": "spell_holy_layonhands",
        "icon_candidates": [
          "spell_holy_layonhands"
        ]
      },
      "pve_tooltip": "40 yd range\nInstant\n10 min cooldown\nHeals a friendly target for an amount equal to 100% your maximum health.\nCannot be used on a target with Forbearance. Causes Forbearance for 30 sec.",
      "pvp_tooltip": "40 yd range\nInstant\n10 min cooldown\nHeals a friendly target for an amount equal to 75% your maximum health.\nCannot be used on a target with Forbearance. Causes Forbearance for 30 sec.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 83,
          "end": 86,
          "old_token": "100",
          "new_token": "75",
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
          "status": "NOT_VISIBLE_IN_TOOLTIP",
          "kind": "percent_value",
          "old": 30.0,
          "new": 49.8,
          "full_tooltip_match_count": 0
        },
        {
          "effect_indexes": [
            2
          ],
          "status": "APPLIED",
          "kind": "percent_value",
          "old": "100",
          "new": "75"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 633,
          "source_spell_id": 633,
          "effect_index": 1,
          "effect_text": "Heal to Full",
          "base_value": 0.0,
          "spell_pvp_multiplier": 0.75,
          "amount_kind": "direct",
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
          "talent_spell_id": 633,
          "source_spell_id": 633,
          "effect_index": 2,
          "effect_text": "Heal for % of Total Health",
          "base_value": 100.0,
          "spell_pvp_multiplier": 0.75,
          "amount_kind": "direct",
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.75,
          "final_pvp_value": 75.0,
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
          "talent_spell_id": 633,
          "source_spell_id": 387792,
          "effect_index": 1,
          "effect_text": "Apply Aura: Mod Resistance % (Physical)",
          "base_value": 30.0,
          "spell_pvp_multiplier": 1.66,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 1.66,
          "final_pvp_value": 49.8,
          "is_final_pvp_modified": true,
          "dependency_path": [
            633,
            387792
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
      "talent_name": "Auras of the Resolute",
      "spell_id": 385633,
      "node_id": 81600,
      "entry_id": 102587,
      "definition_id": 107592,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81600,
        "node_name": "Auras of the Resolute",
        "node_type": "single",
        "pos_x": 4800,
        "pos_y": 1500,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": true,
        "free_node": true,
        "prev": [],
        "next": [
          109999,
          81598,
          81632
        ],
        "entry_id": 102587,
        "entry_max_ranks": 1,
        "definition_id": 107592,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Auras of the Resolute",
        "spell_id": 385633,
        "visible_spell_id": null,
        "icon": "spell_holy_devotionaura",
        "icon_candidates": [
          "spell_holy_devotionaura"
        ]
      },
      "pve_tooltip": "Learn Concentration Aura, Devotion Aura, and Crusader Aura:\nConcentration Aura:\nInterrupt and Silence effects on party and raid members within 40 yds are 30% shorter.\nDevotion Aura:\nParty and raid members within 40 yds are bolstered by their devotion, reducing damage taken by 3%.\nCrusader Aura:\nIncreases mounted speed by 20% for all party and raid members within 40 yds.",
      "pvp_tooltip": "Learn Concentration Aura, Devotion Aura, and Crusader Aura:\nConcentration Aura:\nInterrupt and Silence effects on party and raid members within 40 yds are 30% shorter.\nDevotion Aura:\nParty and raid members within 40 yds are bolstered by their devotion, reducing damage taken by 3%.\nCrusader Aura:\nIncreases mounted speed by 20% for all party and raid members within 40 yds.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "EMBEDDED",
          "talent_spell_id": 385633,
          "source_spell_id": 317920,
          "effect_index": 1,
          "effect_text": "Apply Area Aura: Mod Mechanic Duration % (Interrupted)",
          "base_value": -30.0,
          "spell_pvp_multiplier": 0.67,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.67,
          "final_pvp_value": -20.1,
          "is_final_pvp_modified": true,
          "dependency_path": [
            385633,
            317920
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
          "talent_spell_id": 385633,
          "source_spell_id": 317920,
          "effect_index": 2,
          "effect_text": "Apply Area Aura: Mod Mechanic Duration % (Silenced)",
          "base_value": -30.0,
          "spell_pvp_multiplier": 0.67,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.67,
          "final_pvp_value": -20.1,
          "is_final_pvp_modified": true,
          "dependency_path": [
            385633,
            317920
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
          "talent_spell_id": 385633,
          "source_spell_id": 317920,
          "effect_index": 4,
          "effect_text": "Apply Area Aura: Mod Mechanic Duration % (Fleeing)",
          "base_value": 0.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            385633,
            317920
          ],
          "dependency_relations": [
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
        }
      ],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Hammer of Wrath",
      "spell_id": 1241288,
      "node_id": 81510,
      "entry_id": 133481,
      "definition_id": 138267,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81510,
        "node_name": "Hammer of Wrath",
        "node_type": "single",
        "pos_x": 6000,
        "pos_y": 1500,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": true,
        "free_node": true,
        "prev": [],
        "next": [
          81598,
          93010,
          81603
        ],
        "entry_id": 133481,
        "entry_max_ranks": 1,
        "definition_id": 138267,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Hammer of Wrath",
        "spell_id": 1241288,
        "visible_spell_id": null,
        "icon": "inv12_ability_paladin_hammerofwrath",
        "icon_candidates": [
          "inv12_ability_paladin_hammerofwrath"
        ]
      },
      "pve_tooltip": "During Avenging Wrath, Judgment is empowered into Hammer of Wrath.\nHammer of Wrath\nHurls a divine hammer that strikes an enemy for [(215.807% of Attack Power) * 1] Holy damage.\nGenerates 1 Holy Power.",
      "pvp_tooltip": "During Avenging Wrath, Judgment is empowered into Hammer of Wrath.\nHammer of Wrath\nHurls a divine hammer that strikes an enemy for [(212.7857% of Attack Power) * 1] Holy damage.\nGenerates 1 Holy Power.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 133,
          "end": 140,
          "old_token": "215.807",
          "new_token": "212.7857",
          "kind": "attack_power_coefficient",
          "effect_indexes": [
            1
          ]
        }
      ],
      "diagnostics": [
        {
          "effect_indexes": [
            3
          ],
          "status": "NOT_VISIBLE_IN_TOOLTIP",
          "kind": "attack_power_coefficient",
          "old": 161.855,
          "new": 159.58902999999998,
          "full_tooltip_match_count": 0
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "attack_power_coefficient",
          "old": "215.807",
          "new": "212.7857"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "EMBEDDED",
          "talent_spell_id": 1241288,
          "source_spell_id": 24275,
          "effect_index": 1,
          "effect_text": "School Damage (Holy) (AP mod: 2.15807 )",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.9859999999999999,
          "final_pvp_multiplier": 0.9859999999999999,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1241288,
            24275
          ],
          "dependency_relations": [
            "spelldesc_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079573,
              "amount_kind": "direct",
              "value_pct": -15.0,
              "factor": 0.85,
              "label_id": null,
              "build": "12.1.0.69933"
            },
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1080083,
              "amount_kind": "direct",
              "value_pct": 16.0,
              "factor": 1.16,
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
          "talent_spell_id": 1241288,
          "source_spell_id": 24275,
          "effect_index": 3,
          "effect_text": "School Damage (Holy) (AP mod: 1.61855 )",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.9859999999999999,
          "final_pvp_multiplier": 0.9859999999999999,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1241288,
            24275
          ],
          "dependency_relations": [
            "spelldesc_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079573,
              "amount_kind": "direct",
              "value_pct": -15.0,
              "factor": 0.85,
              "label_id": null,
              "build": "12.1.0.69933"
            },
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1080083,
              "amount_kind": "direct",
              "value_pct": 16.0,
              "factor": 1.16,
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
      "talent_name": "Cleanse Toxins",
      "spell_id": 213644,
      "node_id": 81507,
      "entry_id": 102476,
      "definition_id": 107481,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81507,
        "node_name": "Cleanse Toxins",
        "node_type": "single",
        "pos_x": 3000,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81597
        ],
        "next": [
          103858,
          93189
        ],
        "entry_id": 102476,
        "entry_max_ranks": 1,
        "definition_id": 107481,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Cleanse Toxins",
        "spell_id": 213644,
        "visible_spell_id": null,
        "icon": "spell_holy_renew",
        "icon_candidates": [
          "spell_holy_renew"
        ]
      },
      "pve_tooltip": "10% of base mana\n40 yd range\nInstant\n8 sec cooldown\n1 Charge\nCleanses a friendly target, removing all Poison and Disease effects.",
      "pvp_tooltip": "10% of base mana\n40 yd range\nInstant\n8 sec cooldown\n1 Charge\nCleanses a friendly target, removing all Poison and Disease effects.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Empyreal Ward",
      "spell_id": 387791,
      "node_id": 103859,
      "entry_id": 128255,
      "definition_id": 133062,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 103859,
        "node_name": "Empyreal Ward",
        "node_type": "single",
        "pos_x": 3600,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81597
        ],
        "next": [
          93189
        ],
        "entry_id": 128255,
        "entry_max_ranks": 1,
        "definition_id": 133062,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Empyreal Ward",
        "spell_id": 387791,
        "visible_spell_id": null,
        "icon": "spell_holy_layonhands",
        "icon_candidates": [
          "spell_holy_layonhands"
        ]
      },
      "pve_tooltip": "Lay on Hands grants the target 30% increased armor for 8 sec and now ignores healing reduction effects.",
      "pvp_tooltip": "Lay on Hands grants the target 49.8% increased armor for 8 sec and now ignores healing reduction effects.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 31,
          "end": 33,
          "old_token": "30",
          "new_token": "49.8",
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
          "new": "49.8"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 387791,
          "source_spell_id": 387792,
          "effect_index": 1,
          "effect_text": "Apply Aura: Mod Resistance % (Physical)",
          "base_value": 30.0,
          "spell_pvp_multiplier": 1.66,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 1.66,
          "final_pvp_value": 49.8,
          "is_final_pvp_modified": true,
          "dependency_path": [
            387791,
            387792
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
      "talent_name": "Fist of Justice",
      "spell_id": 234299,
      "node_id": 109999,
      "entry_id": 136487,
      "definition_id": 141260,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109999,
        "node_name": "Fist of Justice",
        "node_type": "single",
        "pos_x": 4200,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81600,
          81597
        ],
        "next": [
          93189,
          110012,
          81632
        ],
        "entry_id": 136487,
        "entry_max_ranks": 1,
        "definition_id": 141260,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Fist of Justice",
        "spell_id": 234299,
        "visible_spell_id": null,
        "icon": "spell_holy_fistofjustice",
        "icon_candidates": [
          "spell_holy_fistofjustice"
        ]
      },
      "pve_tooltip": "Hammer of Justice's cooldown is reduced by 15 sec.",
      "pvp_tooltip": "Hammer of Justice's cooldown is reduced by 15 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Blinding Light",
      "spell_id": 115750,
      "node_id": 81598,
      "entry_id": 102584,
      "definition_id": 107589,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81598,
        "node_name": "Blinding Light",
        "node_type": "single",
        "pos_x": 5400,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81510,
          81600
        ],
        "next": [
          81632,
          103854,
          81603
        ],
        "entry_id": 102584,
        "entry_max_ranks": 1,
        "definition_id": 107589,
        "entry_index": 200,
        "entry_type": "active",
        "talent_name": "Blinding Light",
        "spell_id": 115750,
        "visible_spell_id": null,
        "icon": "ability_paladin_blindinglight",
        "icon_candidates": [
          "ability_paladin_blindinglight"
        ]
      },
      "pve_tooltip": "1.2% of base mana\nInstant\n1.5 min cooldown\nEmits dazzling light in all directions, blinding enemies within 10 yds, causing them to wander disoriented for 6 sec. Damage may cancel the effect.",
      "pvp_tooltip": "1.2% of base mana\nInstant\n1.5 min cooldown\nEmits dazzling light in all directions, blinding enemies within 10 yds, causing them to wander disoriented for 6 sec. Damage may cancel the effect.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Turn Evil",
      "spell_id": 10326,
      "node_id": 93010,
      "entry_id": 102623,
      "definition_id": 107628,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 93010,
        "node_name": "Turn Evil",
        "node_type": "single",
        "pos_x": 6600,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81510
        ],
        "next": [
          103855
        ],
        "entry_id": 102623,
        "entry_max_ranks": 1,
        "definition_id": 107628,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Turn Evil",
        "spell_id": 10326,
        "visible_spell_id": null,
        "icon": "ability_paladin_turnevil",
        "icon_candidates": [
          "ability_paladin_turnevil"
        ]
      },
      "pve_tooltip": "2.1% of base mana\n20 yd range\n1.5 sec cast\n15 sec cooldown\nThe power of the Light compels an Undead, Aberration, or Demon target to flee for up to 40 sec. Damage may break the effect. Lesser creatures have a chance to be destroyed. Only one target can be turned at a time.",
      "pvp_tooltip": "2.1% of base mana\n20 yd range\n1.5 sec cast\n15 sec cooldown\nThe power of the Light compels an Undead, Aberration, or Demon target to flee for up to 40 sec. Damage may break the effect. Lesser creatures have a chance to be destroyed. Only one target can be turned at a time.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "A Just Reward",
      "spell_id": 469411,
      "node_id": 103858,
      "entry_id": 128254,
      "definition_id": 133061,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 103858,
        "node_name": "A Just Reward",
        "node_type": "single",
        "pos_x": 3000,
        "pos_y": 2700,
        "max_ranks": 2,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81507
        ],
        "next": [
          103860
        ],
        "entry_id": 128254,
        "entry_max_ranks": 2,
        "definition_id": 133061,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "A Just Reward",
        "spell_id": 469411,
        "visible_spell_id": null,
        "icon": "spell_holy_blindingheal",
        "icon_candidates": [
          "spell_holy_blindingheal"
        ]
      },
      "pve_tooltip": "After Cleanse Toxins successfully removes an effect from an ally, they are healed for (1080% of Spell Power).",
      "pvp_tooltip": "After Cleanse Toxins successfully removes an effect from an ally, they are healed for (300.0024% of Spell Power).",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 87,
          "end": 91,
          "old_token": "1080",
          "new_token": "300.0024",
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
          "old": "1080",
          "new": "300.0024"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 469411,
          "source_spell_id": 469413,
          "effect_index": 1,
          "effect_text": "Direct Heal (10) (SP mod: 5.4)",
          "base_value": null,
          "spell_pvp_multiplier": 0.27778,
          "amount_kind": "direct",
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.27778,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            469411,
            469413
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
      "rank_tooltips": [
        {
          "rank": 1,
          "pve_tooltip": "After Cleanse Toxins successfully removes an effect from an ally, they are healed for (540% of Spell Power).",
          "pvp_tooltip": "After Cleanse Toxins successfully removes an effect from an ally, they are healed for (150.0012% of Spell Power).",
          "tooltip_changed": true,
          "changes": [
            {
              "start": 87,
              "end": 90,
              "old_token": "540",
              "new_token": "150.0012",
              "kind": "spell_power_coefficient",
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
          "pve_tooltip": "After Cleanse Toxins successfully removes an effect from an ally, they are healed for (1080% of Spell Power).",
          "pvp_tooltip": "After Cleanse Toxins successfully removes an effect from an ally, they are healed for (300.0024% of Spell Power).",
          "tooltip_changed": true,
          "changes": [
            {
              "start": 87,
              "end": 91,
              "old_token": "1080",
              "new_token": "300.0024",
              "kind": "spell_power_coefficient",
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
      "talent_name": "Afterimage",
      "spell_id": 385414,
      "node_id": 93189,
      "entry_id": 115482,
      "definition_id": 120494,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 93189,
        "node_name": "Afterimage / Healing Hands",
        "node_type": "choice",
        "pos_x": 3600,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81507,
          103859,
          109999
        ],
        "next": [
          103860,
          109867
        ],
        "entry_id": 115482,
        "entry_max_ranks": 1,
        "definition_id": 120494,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Afterimage",
        "spell_id": 385414,
        "visible_spell_id": null,
        "icon": "spell_holy_aspiration",
        "icon_candidates": [
          "spell_holy_aspiration"
        ]
      },
      "pve_tooltip": "After you spend 20 Holy Power, your next Word of Glory echoes onto a nearby ally at 30% effectiveness.",
      "pvp_tooltip": "After you spend 20 Holy Power, your next Word of Glory echoes onto a nearby ally at 30% effectiveness.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Healing Hands",
      "spell_id": 326734,
      "node_id": 93189,
      "entry_id": 115481,
      "definition_id": 120493,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 93189,
        "node_name": "Afterimage / Healing Hands",
        "node_type": "choice",
        "pos_x": 3600,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81507,
          103859,
          109999
        ],
        "next": [
          103860,
          109867
        ],
        "entry_id": 115481,
        "entry_max_ranks": 1,
        "definition_id": 120493,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Healing Hands",
        "spell_id": 326734,
        "visible_spell_id": null,
        "icon": "ability_paladin_infusionoflight",
        "icon_candidates": [
          "ability_paladin_infusionoflight"
        ]
      },
      "pve_tooltip": "The cooldown of Lay on Hands is reduced up to 60%, based on the target's missing health.\nWord of Glory's healing is increased by up to 100% on yourself, based on your missing health.",
      "pvp_tooltip": "The cooldown of Lay on Hands is reduced up to 30%, based on the target's missing health.\nWord of Glory's healing is increased by up to 50% on yourself, based on your missing health.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 46,
          "end": 48,
          "old_token": "60",
          "new_token": "30",
          "kind": "percent_value",
          "effect_indexes": [
            1
          ]
        },
        {
          "start": 135,
          "end": 138,
          "old_token": "100",
          "new_token": "50",
          "kind": "ordinary_value",
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
          "status": "APPLIED",
          "kind": "percent_value",
          "old": "60",
          "new": "30"
        },
        {
          "effect_indexes": [
            3
          ],
          "status": "APPLIED",
          "kind": "ordinary_value",
          "old": "100",
          "new": "50"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 326734,
          "source_spell_id": 326734,
          "effect_index": 1,
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
          "talent_spell_id": 326734,
          "source_spell_id": 326734,
          "effect_index": 3,
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
        }
      ],
      "render_effect_count": 2,
      "rank_tooltips": []
    },
    {
      "talent_name": "Guided Prayer",
      "spell_id": 404357,
      "node_id": 110012,
      "entry_id": 136503,
      "definition_id": 141276,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110012,
        "node_name": "Guided Prayer",
        "node_type": "single",
        "pos_x": 4200,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109999
        ],
        "next": [
          109867
        ],
        "entry_id": 136503,
        "entry_max_ranks": 1,
        "definition_id": 141276,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Guided Prayer",
        "spell_id": 404357,
        "visible_spell_id": null,
        "icon": "ability_crown_of_the_heavens_icon",
        "icon_candidates": [
          "ability_crown_of_the_heavens_icon"
        ]
      },
      "pve_tooltip": "When your health is brought below 25%, you instantly cast a free Word of Glory at 60% effectiveness on yourself.\nCannot occur more than once every 60 sec.\n(1m cooldown)",
      "pvp_tooltip": "When your health is brought below 25%, you instantly cast a free Word of Glory at 60% effectiveness on yourself.\nCannot occur more than once every 60 sec.\n(1m cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Divine Steed",
      "spell_id": 190784,
      "node_id": 81632,
      "entry_id": 102625,
      "definition_id": 107630,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81632,
        "node_name": "Divine Steed",
        "node_type": "single",
        "pos_x": 4800,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81598,
          81600,
          109999
        ],
        "next": [
          103857,
          81631,
          81605
        ],
        "entry_id": 102625,
        "entry_max_ranks": 1,
        "definition_id": 107630,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Divine Steed",
        "spell_id": 190784,
        "visible_spell_id": null,
        "icon": "ability_paladin_divinesteed",
        "icon_candidates": [
          "ability_paladin_divinesteed"
        ]
      },
      "pve_tooltip": "Instant\n45 sec cooldown\n1 Charge\nLeap atop your Charger for 3 sec, increasing movement speed by 100%. Usable while indoors or in combat.",
      "pvp_tooltip": "Instant\n45 sec cooldown\n1 Charge\nLeap atop your Charger for 3 sec, increasing movement speed by 100%. Usable while indoors or in combat.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Light's Countenance",
      "spell_id": 469325,
      "node_id": 103854,
      "entry_id": 128247,
      "definition_id": 133054,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 103854,
        "node_name": "Light's Countenance",
        "node_type": "single",
        "pos_x": 5400,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81598
        ],
        "next": [],
        "entry_id": 128247,
        "entry_max_ranks": 1,
        "definition_id": 133054,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Light's Countenance",
        "spell_id": 469325,
        "visible_spell_id": null,
        "icon": "inv_shoulder_raidpaladindragon_d_01",
        "icon_candidates": [
          "inv_shoulder_raidpaladindragon_d_01"
        ]
      },
      "pve_tooltip": "The cooldown of Blinding Light is reduced by 15 sec.",
      "pvp_tooltip": "The cooldown of Blinding Light is reduced by 15 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Greater Judgment",
      "spell_id": 231663,
      "node_id": 81603,
      "entry_id": 102590,
      "definition_id": 107595,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81603,
        "node_name": "Greater Judgment",
        "node_type": "single",
        "pos_x": 6000,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": true,
        "prev": [
          81510,
          81598
        ],
        "next": [
          110093,
          93009
        ],
        "entry_id": 102590,
        "entry_max_ranks": 1,
        "definition_id": 107595,
        "entry_index": 0,
        "entry_type": "passive",
        "talent_name": "Greater Judgment",
        "spell_id": 231663,
        "visible_spell_id": null,
        "icon": "spell_holy_righteousfury",
        "icon_candidates": [
          "spell_holy_righteousfury"
        ]
      },
      "pve_tooltip": "Judgment causes the target to take 20% increased damage from your next Holy Power ability.\nMultiple applications may overlap.",
      "pvp_tooltip": "Judgment causes the target to take 20% increased damage from your next Holy Power ability.\nMultiple applications may overlap.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Wrench Evil",
      "spell_id": 460720,
      "node_id": 103855,
      "entry_id": 128250,
      "definition_id": 133057,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 103855,
        "node_name": "Wrench Evil / Stand Against Evil",
        "node_type": "choice",
        "pos_x": 6600,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          93010
        ],
        "next": [
          110093
        ],
        "entry_id": 128250,
        "entry_max_ranks": 1,
        "definition_id": 133057,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Wrench Evil",
        "spell_id": 460720,
        "visible_spell_id": null,
        "icon": "ability_paladin_turnevil",
        "icon_candidates": [
          "ability_paladin_turnevil"
        ]
      },
      "pve_tooltip": "Turn Evil's cast time is reduced by 100%.",
      "pvp_tooltip": "Turn Evil's cast time is reduced by 100%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Stand Against Evil",
      "spell_id": 469317,
      "node_id": 103855,
      "entry_id": 128249,
      "definition_id": 133056,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 103855,
        "node_name": "Wrench Evil / Stand Against Evil",
        "node_type": "choice",
        "pos_x": 6600,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          93010
        ],
        "next": [
          110093
        ],
        "entry_id": 128249,
        "entry_max_ranks": 1,
        "definition_id": 133056,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Stand Against Evil",
        "spell_id": 469317,
        "visible_spell_id": null,
        "icon": "spell_holy_excorcism",
        "icon_candidates": [
          "spell_holy_excorcism"
        ]
      },
      "pve_tooltip": "Turn Evil now affects 5 additional enemies.",
      "pvp_tooltip": "Turn Evil now affects 5 additional enemies.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Holy Reprieve",
      "spell_id": 469445,
      "node_id": 103860,
      "entry_id": 128256,
      "definition_id": 133063,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 103860,
        "node_name": "Holy Reprieve",
        "node_type": "single",
        "pos_x": 3000,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          93189,
          103858
        ],
        "next": [
          81630,
          93168
        ],
        "entry_id": 128256,
        "entry_max_ranks": 1,
        "definition_id": 133063,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Holy Reprieve",
        "spell_id": 469445,
        "visible_spell_id": null,
        "icon": "spell_holy_sealofsalvation",
        "icon_candidates": [
          "spell_holy_sealofsalvation"
        ]
      },
      "pve_tooltip": "Your Forbearance's duration is reduced by 10 sec.",
      "pvp_tooltip": "Your Forbearance's duration is reduced by 10 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Shield of Vengeance",
      "spell_id": 1261562,
      "node_id": 109867,
      "entry_id": 136127,
      "definition_id": 140882,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109867,
        "node_name": "Shield of Vengeance",
        "node_type": "single",
        "pos_x": 3600,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          110012,
          93189
        ],
        "next": [
          81630
        ],
        "entry_id": 136127,
        "entry_max_ranks": 1,
        "definition_id": 140882,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Shield of Vengeance",
        "spell_id": 1261562,
        "visible_spell_id": null,
        "icon": "ability_paladin_shieldofthetemplar",
        "icon_candidates": [
          "ability_paladin_shieldofthetemplar"
        ]
      },
      "pve_tooltip": "Divine Protection reduces damage taken by an additional 10% and casts Shield of Vengeance.\nShield of Vengeance\nCreates a barrier of holy light that absorbs [30 / 100 * Total Health * (1 + Versatility)] damage for 10 sec.\nWhen the shield expires, it bursts to inflict Holy damage equal to the total amount absorbed, divided among all nearby enemies.",
      "pvp_tooltip": "Divine Protection reduces damage taken by an additional 10% and casts Shield of Vengeance.\nShield of Vengeance\nCreates a barrier of holy light that absorbs [30 / 100 * Total Health * (1 + Versatility)] damage for 10 sec.\nWhen the shield expires, it bursts to inflict Holy damage equal to the total amount absorbed, divided among all nearby enemies.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "EMBEDDED",
          "talent_spell_id": 1261562,
          "source_spell_id": 184662,
          "effect_index": 1,
          "effect_text": "Apply Aura: Absorb Damage (Arcane, Fire, Frost, Holy, Nature, Physical, Shadow)",
          "base_value": 0.0,
          "spell_pvp_multiplier": 0.75,
          "amount_kind": "absorb",
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.75,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1261562,
            184662
          ],
          "dependency_relations": [
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
        }
      ],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Cavalier",
      "spell_id": 230332,
      "node_id": 81605,
      "entry_id": 102592,
      "definition_id": 107597,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81605,
        "node_name": "Cavalier",
        "node_type": "single",
        "pos_x": 4200,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81632
        ],
        "next": [
          81630,
          109368,
          81614
        ],
        "entry_id": 102592,
        "entry_max_ranks": 1,
        "definition_id": 107597,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Cavalier",
        "spell_id": 230332,
        "visible_spell_id": null,
        "icon": "ability_paladin_divinesteed",
        "icon_candidates": [
          "ability_paladin_divinesteed"
        ]
      },
      "pve_tooltip": "Divine Steed now has 2 charges.",
      "pvp_tooltip": "Divine Steed now has 2 charges.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Divine Spurs",
      "spell_id": 469409,
      "node_id": 103857,
      "entry_id": 128253,
      "definition_id": 133060,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 103857,
        "node_name": "Divine Spurs",
        "node_type": "single",
        "pos_x": 4800,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81632
        ],
        "next": [],
        "entry_id": 128253,
        "entry_max_ranks": 1,
        "definition_id": 133060,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Divine Spurs",
        "spell_id": 469409,
        "visible_spell_id": null,
        "icon": "ability_mount_charger",
        "icon_candidates": [
          "ability_mount_charger"
        ]
      },
      "pve_tooltip": "Divine Steed's cooldown is reduced by 20%, but its duration is reduced by 40%.",
      "pvp_tooltip": "Divine Steed's cooldown is reduced by 20%, but its duration is reduced by 40%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Steed of Liberty",
      "spell_id": 469304,
      "node_id": 81631,
      "entry_id": 102624,
      "definition_id": 107629,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81631,
        "node_name": "Steed of Liberty / Blessing of Freedom",
        "node_type": "choice",
        "pos_x": 5400,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81632
        ],
        "next": [
          109368,
          93174,
          93009
        ],
        "entry_id": 102624,
        "entry_max_ranks": 1,
        "definition_id": 107629,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Steed of Liberty",
        "spell_id": 469304,
        "visible_spell_id": null,
        "icon": "spell_holy_crusaderaura",
        "icon_candidates": [
          "spell_holy_crusaderaura"
        ]
      },
      "pve_tooltip": "Divine Steed also grants Blessing of Freedom for 3.0 sec.\nBlessing of Freedom:\nBlesses a party or raid member, granting immunity to movement impairing effects [Unbound Freedom: and increasing movement speed by 30%]for 8 sec.\n(100ms cooldown)",
      "pvp_tooltip": "Divine Steed also grants Blessing of Freedom for 3.0 sec.\nBlessing of Freedom:\nBlesses a party or raid member, granting immunity to movement impairing effects [Unbound Freedom: and increasing movement speed by 30%]for 8 sec.\n(100ms cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Blessing of Freedom",
      "spell_id": 1044,
      "node_id": 81631,
      "entry_id": 128251,
      "definition_id": 133058,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81631,
        "node_name": "Steed of Liberty / Blessing of Freedom",
        "node_type": "choice",
        "pos_x": 5400,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81632
        ],
        "next": [
          109368,
          93174,
          93009
        ],
        "entry_id": 128251,
        "entry_max_ranks": 1,
        "definition_id": 133058,
        "entry_index": 300,
        "entry_type": "active",
        "talent_name": "Blessing of Freedom",
        "spell_id": 1044,
        "visible_spell_id": null,
        "icon": "spell_holy_sealofvalor",
        "icon_candidates": [
          "spell_holy_sealofvalor"
        ]
      },
      "pve_tooltip": "1.4% of base mana\n40 yd range\nInstant\n25 sec cooldown\n1 Charge\nBlesses a party or raid member, granting immunity to movement impairing effects [Unbound Freedom: and increasing movement speed by 30%]for 8 sec.",
      "pvp_tooltip": "1.4% of base mana\n40 yd range\nInstant\n25 sec cooldown\n1 Charge\nBlesses a party or raid member, granting immunity to movement impairing effects [Unbound Freedom: and increasing movement speed by 30%]for 8 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Rebuke",
      "spell_id": 96231,
      "node_id": 110093,
      "entry_id": 136594,
      "definition_id": 141367,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110093,
        "node_name": "Rebuke",
        "node_type": "single",
        "pos_x": 6600,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          103855,
          81603
        ],
        "next": [
          93009,
          110091
        ],
        "entry_id": 136594,
        "entry_max_ranks": 1,
        "definition_id": 141367,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Rebuke",
        "spell_id": 96231,
        "visible_spell_id": null,
        "icon": "spell_holy_rebuke",
        "icon_candidates": [
          "spell_holy_rebuke"
        ]
      },
      "pve_tooltip": "Melee Range\nInstant\n15 sec cooldown\nInterrupts spellcasting and prevents any spell in that school from being cast for 5 sec.",
      "pvp_tooltip": "Melee Range\nInstant\n15 sec cooldown\nInterrupts spellcasting and prevents any spell in that school from being cast for 5 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Obduracy",
      "spell_id": 385427,
      "node_id": 81630,
      "entry_id": 102622,
      "definition_id": 107627,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81630,
        "node_name": "Obduracy",
        "node_type": "single",
        "pos_x": 3600,
        "pos_y": 3900,
        "max_ranks": 2,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81605,
          103860,
          109867
        ],
        "next": [
          93168,
          109998,
          81614
        ],
        "entry_id": 102622,
        "entry_max_ranks": 2,
        "definition_id": 107627,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Obduracy",
        "spell_id": 385427,
        "visible_spell_id": null,
        "icon": "ability_paladin_speedoflight",
        "icon_candidates": [
          "ability_paladin_speedoflight"
        ]
      },
      "pve_tooltip": "Speed increased by 4% and damage taken from area of effect attacks reduced by 4%.",
      "pvp_tooltip": "Speed increased by 4% and damage taken from area of effect attacks reduced by 4%.",
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
          "pve_tooltip": "Speed increased by 2% and damage taken from area of effect attacks reduced by 2%.",
          "pvp_tooltip": "Speed increased by 2% and damage taken from area of effect attacks reduced by 2%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "Speed increased by 4% and damage taken from area of effect attacks reduced by 4%.",
          "pvp_tooltip": "Speed increased by 4% and damage taken from area of effect attacks reduced by 4%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Divine Toll",
      "spell_id": 375576,
      "node_id": 109368,
      "entry_id": 135564,
      "definition_id": 140320,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109368,
        "node_name": "Divine Toll",
        "node_type": "single",
        "pos_x": 4800,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81631,
          81605
        ],
        "next": [
          93181,
          81614,
          81616
        ],
        "entry_id": 135564,
        "entry_max_ranks": 1,
        "definition_id": 140320,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Divine Toll",
        "spell_id": 375576,
        "visible_spell_id": null,
        "icon": "inv_ability_paladin_divinetoll",
        "icon_candidates": [
          "inv_ability_paladin_divinetoll"
        ]
      },
      "pve_tooltip": "3% of base mana\n30 yd range\nInstant\n1 min cooldown\nInstantly cast Judgment on up to 5 targets within 30 yds.\nDivine Toll's Judgment deals 50% increased damage.",
      "pvp_tooltip": "3% of base mana\n30 yd range\nInstant\n1 min cooldown\nInstantly cast Judgment on up to 5 targets within 30 yds.\nDivine Toll's Judgment deals 50% increased damage.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Unbound Freedom",
      "spell_id": 305394,
      "node_id": 93174,
      "entry_id": 115454,
      "definition_id": 120466,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 93174,
        "node_name": "Unbound Freedom",
        "node_type": "single",
        "pos_x": 5400,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81631
        ],
        "next": [
          81616
        ],
        "entry_id": 115454,
        "entry_max_ranks": 1,
        "definition_id": 120466,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Unbound Freedom",
        "spell_id": 305394,
        "visible_spell_id": null,
        "icon": "spell_holy_sealofvalor",
        "icon_candidates": [
          "spell_holy_sealofvalor"
        ]
      },
      "pve_tooltip": "Blessing of Freedom increases movement speed by 30%, and you gain Blessing of Freedom when cast on a friendly target.",
      "pvp_tooltip": "Blessing of Freedom increases movement speed by 30%, and you gain Blessing of Freedom when cast on a friendly target.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Sanctified Plates",
      "spell_id": 402964,
      "node_id": 93009,
      "entry_id": 115034,
      "definition_id": 120041,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 93009,
        "node_name": "Sanctified Plates",
        "node_type": "single",
        "pos_x": 6000,
        "pos_y": 3900,
        "max_ranks": 2,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81631,
          81603,
          110093
        ],
        "next": [
          109997,
          81543,
          81616
        ],
        "entry_id": 115034,
        "entry_max_ranks": 2,
        "definition_id": 120041,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Sanctified Plates",
        "spell_id": 402964,
        "visible_spell_id": null,
        "icon": "inv_chest_plate_raidpaladin_s_01",
        "icon_candidates": [
          "inv_chest_plate_raidpaladin_s_01"
        ]
      },
      "pve_tooltip": "Armor increased by 20%, Stamina increased by 10% and damage taken from area of effect attacks reduced by 6%.",
      "pvp_tooltip": "Armor increased by 20%, Stamina increased by 10% and damage taken from area of effect attacks reduced by 1.5%.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 105,
          "end": 106,
          "old_token": "6",
          "new_token": "1.5",
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
          "old": "6",
          "new": "1.5"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 402964,
          "source_spell_id": 402964,
          "effect_index": 2,
          "effect_text": "Apply Aura: Mod AoE Damage Taken % (Arcane, Fire, Frost, Holy, Nature, Physical, Shadow)",
          "base_value": -3.0,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": null,
          "aura_factor": 0.25,
          "final_pvp_multiplier": 0.25,
          "final_pvp_value": -0.75,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079579,
              "amount_kind": "effect:2",
              "value_pct": -50.0,
              "factor": 0.5,
              "label_id": 2602,
              "build": "12.1.0.69933"
            },
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079580,
              "amount_kind": "effect:2",
              "value_pct": -50.0,
              "factor": 0.5,
              "label_id": 2602,
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
          "pve_tooltip": "Armor increased by 10%, Stamina increased by 5% and damage taken from area of effect attacks reduced by 3%.",
          "pvp_tooltip": "Armor increased by 10%, Stamina increased by 5% and damage taken from area of effect attacks reduced by 0.75%.",
          "tooltip_changed": true,
          "changes": [
            {
              "start": 104,
              "end": 105,
              "old_token": "3",
              "new_token": "0.75",
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
          "pve_tooltip": "Armor increased by 20%, Stamina increased by 10% and damage taken from area of effect attacks reduced by 6%.",
          "pvp_tooltip": "Armor increased by 20%, Stamina increased by 10% and damage taken from area of effect attacks reduced by 1.5%.",
          "tooltip_changed": true,
          "changes": [
            {
              "start": 105,
              "end": 106,
              "old_token": "6",
              "new_token": "1.5",
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
      "talent_name": "Punishment",
      "spell_id": 403530,
      "node_id": 110091,
      "entry_id": 136592,
      "definition_id": 141365,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110091,
        "node_name": "Punishment",
        "node_type": "single",
        "pos_x": 6600,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          110093
        ],
        "next": [
          81543
        ],
        "entry_id": 136592,
        "entry_max_ranks": 1,
        "definition_id": 141365,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Punishment",
        "spell_id": 403530,
        "visible_spell_id": null,
        "icon": "spell_holy_rebuke",
        "icon_candidates": [
          "spell_holy_rebuke"
        ]
      },
      "pve_tooltip": "Successfully interrupting an enemy with Rebuke casts an extra Crusader Strike.",
      "pvp_tooltip": "Successfully interrupting an enemy with Rebuke casts an extra Crusader Strike.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Divine Reach",
      "spell_id": 469476,
      "node_id": 93168,
      "entry_id": 115447,
      "definition_id": 120459,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 93168,
        "node_name": "Divine Reach",
        "node_type": "single",
        "pos_x": 3000,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          103860,
          81630
        ],
        "next": [
          81609,
          93008
        ],
        "entry_id": 115447,
        "entry_max_ranks": 1,
        "definition_id": 120459,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Divine Reach",
        "spell_id": 469476,
        "visible_spell_id": null,
        "icon": "spell_holy_mindvision",
        "icon_candidates": [
          "spell_holy_mindvision"
        ]
      },
      "pve_tooltip": "The radius of your auras is increased by 20 yds.",
      "pvp_tooltip": "The radius of your auras is increased by 20 yds.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Brought to Light",
      "spell_id": 1265549,
      "node_id": 109998,
      "entry_id": 136486,
      "definition_id": 141259,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109998,
        "node_name": "Brought to Light",
        "node_type": "single",
        "pos_x": 3600,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81630
        ],
        "next": [
          81609
        ],
        "entry_id": 136486,
        "entry_max_ranks": 1,
        "definition_id": 141259,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Brought to Light",
        "spell_id": 1265549,
        "visible_spell_id": null,
        "icon": "paladin_holy",
        "icon_candidates": [
          "paladin_holy"
        ]
      },
      "pve_tooltip": "Killing an enemy that yields experience or honor causes you to explode with holy energy, healing up to 5 nearby allies and yourself for (625% of Attack Power), split evenly among them.",
      "pvp_tooltip": "Killing an enemy that yields experience or honor causes you to explode with holy energy, healing up to 5 nearby allies and yourself for (625% of Attack Power), split evenly among them.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Blessing of Sacrifice",
      "spell_id": 6940,
      "node_id": 81614,
      "entry_id": 102602,
      "definition_id": 107607,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81614,
        "node_name": "Blessing of Sacrifice",
        "node_type": "single",
        "pos_x": 4200,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81605,
          109368,
          81630
        ],
        "next": [
          81607,
          81609,
          81618
        ],
        "entry_id": 102602,
        "entry_max_ranks": 1,
        "definition_id": 107607,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Blessing of Sacrifice",
        "spell_id": 6940,
        "visible_spell_id": null,
        "icon": "spell_holy_sealofsacrifice",
        "icon_candidates": [
          "spell_holy_sealofsacrifice"
        ]
      },
      "pve_tooltip": "1.4% of base mana\n40 yd range\nInstant\n2 min cooldown\nBlesses a party or raid member, reducing their damage taken by 30%, but you suffer 100% of damage prevented.\nLast 12 sec, or until transferred damage would cause you to fall below 20% health.",
      "pvp_tooltip": "1.4% of base mana\n40 yd range\nInstant\n2 min cooldown\nBlesses a party or raid member, reducing their damage taken by 30%, but you suffer 100% of damage prevented.\nLast 12 sec, or until transferred damage would cause you to fall below 20% health.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Divine Resonance",
      "spell_id": 384027,
      "node_id": 93181,
      "entry_id": 115468,
      "definition_id": 120480,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 93181,
        "node_name": "Divine Resonance / Quickened Invocation",
        "node_type": "choice",
        "pos_x": 4800,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109368
        ],
        "next": [],
        "entry_id": 115468,
        "entry_max_ranks": 1,
        "definition_id": 120480,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Divine Resonance",
        "spell_id": 384027,
        "visible_spell_id": null,
        "icon": "ability_mount_goatmountwhite",
        "icon_candidates": [
          "ability_mount_goatmountwhite"
        ]
      },
      "pve_tooltip": "After casting Divine Toll, your next 3 Judgments cast again at 100% effectiveness.",
      "pvp_tooltip": "After casting Divine Toll, your next 3 Judgments cast again at 100% effectiveness.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Quickened Invocation",
      "spell_id": 379391,
      "node_id": 93181,
      "entry_id": 115467,
      "definition_id": 120479,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 93181,
        "node_name": "Divine Resonance / Quickened Invocation",
        "node_type": "choice",
        "pos_x": 4800,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109368
        ],
        "next": [],
        "entry_id": 115467,
        "entry_max_ranks": 1,
        "definition_id": 120479,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Quickened Invocation",
        "spell_id": 379391,
        "visible_spell_id": null,
        "icon": "spell_holy_pureofheart",
        "icon_candidates": [
          "spell_holy_pureofheart"
        ]
      },
      "pve_tooltip": "Divine Toll's cooldown is reduced by 30 sec.",
      "pvp_tooltip": "Divine Toll's cooldown is reduced by 30 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Blessing of Protection",
      "spell_id": 1022,
      "node_id": 81616,
      "entry_id": 102604,
      "definition_id": 107609,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81616,
        "node_name": "Blessing of Protection",
        "node_type": "single",
        "pos_x": 5400,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          93174,
          109368,
          93009
        ],
        "next": [
          81617,
          81618,
          81615
        ],
        "entry_id": 102604,
        "entry_max_ranks": 1,
        "definition_id": 107609,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Blessing of Protection",
        "spell_id": 1022,
        "visible_spell_id": null,
        "icon": "spell_holy_sealofprotection",
        "icon_candidates": [
          "spell_holy_sealofprotection"
        ]
      },
      "pve_tooltip": "3% of base mana\n40 yd range\nInstant\n5 min cooldown\n1 Charge\nBlesses a party or raid member, granting immunity to Physical damage and harmful effects for 10 sec.\nCannot be used on a target with Forbearance. Causes Forbearance for 30 sec.",
      "pvp_tooltip": "3% of base mana\n40 yd range\nInstant\n5 min cooldown\n1 Charge\nBlesses a party or raid member, granting immunity to Physical damage and harmful effects for 10 sec.\nCannot be used on a target with Forbearance. Causes Forbearance for 30 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Fear No Evil",
      "spell_id": 1265541,
      "node_id": 109997,
      "entry_id": 136485,
      "definition_id": 141258,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109997,
        "node_name": "Fear No Evil",
        "node_type": "single",
        "pos_x": 6000,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          93009
        ],
        "next": [
          81615
        ],
        "entry_id": 136485,
        "entry_max_ranks": 1,
        "definition_id": 141258,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Fear No Evil",
        "spell_id": 1265541,
        "visible_spell_id": null,
        "icon": "inv_bracer_plate_raidpaladin_r_01mythic",
        "icon_candidates": [
          "inv_bracer_plate_raidpaladin_r_01mythic"
        ]
      },
      "pve_tooltip": "Fear duration on you reduced by 20%. This effect is increased to 60% during Avenging Wrath.",
      "pvp_tooltip": "Fear duration on you reduced by 5%. This effect is increased to 15% during Avenging Wrath.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 32,
          "end": 34,
          "old_token": "20",
          "new_token": "5",
          "kind": "percent_value",
          "effect_indexes": [
            1,
            3
          ]
        },
        {
          "start": 65,
          "end": 67,
          "old_token": "60",
          "new_token": "15",
          "kind": "percent_value",
          "effect_indexes": [
            2
          ]
        }
      ],
      "diagnostics": [
        {
          "effect_indexes": [
            1,
            3
          ],
          "status": "APPLIED",
          "kind": "percent_value",
          "old": "20",
          "new": "5"
        },
        {
          "effect_indexes": [
            2
          ],
          "status": "APPLIED",
          "kind": "percent_value",
          "old": "60",
          "new": "15"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 1265541,
          "source_spell_id": 1265541,
          "effect_index": 1,
          "effect_text": "Apply Aura: Mod Mechanic Duration % (Fleeing)",
          "base_value": -20.0,
          "spell_pvp_multiplier": 0.25,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.25,
          "final_pvp_value": -5.0,
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
          "talent_spell_id": 1265541,
          "source_spell_id": 1265541,
          "effect_index": 2,
          "effect_text": "Apply Aura: Dummy",
          "base_value": -60.0,
          "spell_pvp_multiplier": 0.25,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.25,
          "final_pvp_value": -15.0,
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
          "talent_spell_id": 1265541,
          "source_spell_id": 1265541,
          "effect_index": 3,
          "effect_text": "Apply Aura: Dummy",
          "base_value": -20.0,
          "spell_pvp_multiplier": 0.25,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.25,
          "final_pvp_value": -5.0,
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
      "render_effect_count": 3,
      "rank_tooltips": []
    },
    {
      "talent_name": "Consecrated Ground",
      "spell_id": 204054,
      "node_id": 81543,
      "entry_id": 102518,
      "definition_id": 107523,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81543,
        "node_name": "Consecrated Ground",
        "node_type": "single",
        "pos_x": 6600,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          93009,
          110091
        ],
        "next": [
          81615,
          81608
        ],
        "entry_id": 102518,
        "entry_max_ranks": 1,
        "definition_id": 107523,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Consecrated Ground",
        "spell_id": 204054,
        "visible_spell_id": null,
        "icon": "ability_paladin_righteousvengeance",
        "icon_candidates": [
          "ability_paladin_righteousvengeance"
        ]
      },
      "pve_tooltip": "Your Consecration is 15% larger, and enemies within it have 50% reduced movement speed.",
      "pvp_tooltip": "Your Consecration is 15% larger, and enemies within it have 20% reduced movement speed.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 60,
          "end": 63,
          "old_token": "50%",
          "new_token": "20%",
          "kind": "official_hotfix_percent",
          "effect_indexes": [],
          "source": "blizzard_hotfix"
        }
      ],
      "diagnostics": [
        {
          "status": "OFFICIAL_HOTFIX_APPLIED",
          "source": "blizzard_hotfix",
          "source_url": "https://news.blizzard.com/en-us/article/24296142/hotfixes-september-24-2026",
          "hotfix_date": "2026-09-24",
          "hotfix_text": "Consecrated Ground now reduces movement speed by 20% in PvP combat (was 50%).",
          "reason": "APPLIED"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Holy Aegis",
      "spell_id": 385515,
      "node_id": 81609,
      "entry_id": 102597,
      "definition_id": 107602,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81609,
        "node_name": "Holy Aegis",
        "node_type": "single",
        "pos_x": 3600,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          93168,
          81614,
          109998
        ],
        "next": [
          93008,
          103867
        ],
        "entry_id": 102597,
        "entry_max_ranks": 1,
        "definition_id": 107602,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Holy Aegis",
        "spell_id": 385515,
        "visible_spell_id": null,
        "icon": "ability_paladin_touchedbylight",
        "icon_candidates": [
          "ability_paladin_touchedbylight"
        ]
      },
      "pve_tooltip": "Armor and critical strike chance increased by 4%.",
      "pvp_tooltip": "Armor and critical strike chance increased by 4%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Sacrifice of the Just",
      "spell_id": 384820,
      "node_id": 81607,
      "entry_id": 102595,
      "definition_id": 107600,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81607,
        "node_name": "Sacrifice of the Just / Recompense",
        "node_type": "choice",
        "pos_x": 4200,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81614
        ],
        "next": [
          103867,
          103865,
          103866
        ],
        "entry_id": 102595,
        "entry_max_ranks": 1,
        "definition_id": 107600,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Sacrifice of the Just",
        "spell_id": 384820,
        "visible_spell_id": null,
        "icon": "spell_holy_sealofsacrifice",
        "icon_candidates": [
          "spell_holy_sealofsacrifice"
        ]
      },
      "pve_tooltip": "Reduces the cooldown of Blessing of Sacrifice by 60 sec.",
      "pvp_tooltip": "Reduces the cooldown of Blessing of Sacrifice by 60 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Recompense",
      "spell_id": 384914,
      "node_id": 81607,
      "entry_id": 102594,
      "definition_id": 107599,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81607,
        "node_name": "Sacrifice of the Just / Recompense",
        "node_type": "choice",
        "pos_x": 4200,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81614
        ],
        "next": [
          103867,
          103865,
          103866
        ],
        "entry_id": 102594,
        "entry_max_ranks": 1,
        "definition_id": 107599,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Recompense",
        "spell_id": 384914,
        "visible_spell_id": null,
        "icon": "ability_racial_foregedinflames",
        "icon_candidates": [
          "ability_racial_foregedinflames"
        ]
      },
      "pve_tooltip": "After your Blessing of Sacrifice ends, 50% of the total damage it diverted is added to your next Judgment as bonus damage, or your next Word of Glory as bonus healing.\nThis effect's bonus damage cannot exceed 30% of your maximum health and its bonus healing cannot exceed 100% of your maximum health.",
      "pvp_tooltip": "After your Blessing of Sacrifice ends, 50% of the total damage it diverted is added to your next Judgment as bonus damage, or your next Word of Glory as bonus healing.\nThis effect's bonus damage cannot exceed 30% of your maximum health and its bonus healing cannot exceed 100% of your maximum health.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Sacred Strength",
      "spell_id": 469337,
      "node_id": 81618,
      "entry_id": 102608,
      "definition_id": 107613,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81618,
        "node_name": "Sacred Strength / Divine Purpose",
        "node_type": "choice",
        "pos_x": 4800,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81616,
          81614
        ],
        "next": [
          103866,
          103868
        ],
        "entry_id": 102608,
        "entry_max_ranks": 1,
        "definition_id": 107613,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Sacred Strength",
        "spell_id": 469337,
        "visible_spell_id": null,
        "icon": "spell_holy_righteousnessaura",
        "icon_candidates": [
          "spell_holy_righteousnessaura"
        ]
      },
      "pve_tooltip": "Holy Power spending abilities have 2% increased damage and healing.",
      "pvp_tooltip": "Holy Power spending abilities have 2% increased damage and healing.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Divine Purpose",
      "spell_id": 408459,
      "node_id": 81618,
      "entry_id": 128243,
      "definition_id": 133050,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81618,
        "node_name": "Sacred Strength / Divine Purpose",
        "node_type": "choice",
        "pos_x": 4800,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81616,
          81614
        ],
        "next": [
          103866,
          103868
        ],
        "entry_id": 128243,
        "entry_max_ranks": 1,
        "definition_id": 133050,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Divine Purpose",
        "spell_id": 408459,
        "visible_spell_id": null,
        "icon": "spell_holy_divinepurpose",
        "icon_candidates": [
          "spell_holy_divinepurpose"
        ]
      },
      "pve_tooltip": "Holy Power spending abilities have a 10% chance to make your next Holy Power spending ability free and deal 10% increased damage and healing.\n(100ms cooldown)",
      "pvp_tooltip": "Holy Power spending abilities have a 10% chance to make your next Holy Power spending ability free and deal 6.6667% increased damage and healing.\n(100ms cooldown)",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 108,
          "end": 110,
          "old_token": "10",
          "new_token": "6.6667",
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
          "old": "10",
          "new": "6.6667"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 408459,
          "source_spell_id": 408458,
          "effect_index": 5,
          "effect_text": "Apply Aura (6) | Apply Percent Modifier w/ Label (218): Spell Direct Amount (0)",
          "base_value": 10.0,
          "spell_pvp_multiplier": 0.666667,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.666667,
          "final_pvp_value": 6.66667,
          "is_final_pvp_modified": true,
          "dependency_path": [
            408459,
            408458
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
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 408459,
          "source_spell_id": 408458,
          "effect_index": 2,
          "effect_text": "Apply Aura (6) | Add Percent Modifier (108): Spell Direct Amount (0)",
          "base_value": 10.0,
          "spell_pvp_multiplier": 0.666667,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.666667,
          "final_pvp_value": 6.66667,
          "is_final_pvp_modified": true,
          "dependency_path": [
            408459,
            408458
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
      "talent_name": "Improved Blessing of Protection",
      "spell_id": 384909,
      "node_id": 81617,
      "entry_id": 102606,
      "definition_id": 107611,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81617,
        "node_name": "Improved Blessing of Protection",
        "node_type": "single",
        "pos_x": 5400,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81616
        ],
        "next": [
          103868,
          103864
        ],
        "entry_id": 102606,
        "entry_max_ranks": 1,
        "definition_id": 107611,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Improved Blessing of Protection",
        "spell_id": 384909,
        "visible_spell_id": null,
        "icon": "spell_holy_sealofprotection",
        "icon_candidates": [
          "spell_holy_sealofprotection"
        ]
      },
      "pve_tooltip": "Reduces the cooldown of Blessing of Protection by 60 sec.",
      "pvp_tooltip": "Reduces the cooldown of Blessing of Protection by 60 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Unbreakable Spirit",
      "spell_id": 114154,
      "node_id": 81615,
      "entry_id": 102603,
      "definition_id": 107608,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81615,
        "node_name": "Unbreakable Spirit",
        "node_type": "single",
        "pos_x": 6000,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81543,
          81616,
          109997
        ],
        "next": [
          103864,
          81608
        ],
        "entry_id": 102603,
        "entry_max_ranks": 1,
        "definition_id": 107608,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Unbreakable Spirit",
        "spell_id": 114154,
        "visible_spell_id": null,
        "icon": "spell_holy_holyguidance",
        "icon_candidates": [
          "spell_holy_holyguidance"
        ]
      },
      "pve_tooltip": "Reduces the cooldown of your Divine Shield, [Shield of Vengeance: Shield of Vengeance] [Ardent Defender / Divine Protection], and Lay on Hands by 30%.",
      "pvp_tooltip": "Reduces the cooldown of your Divine Shield, [Shield of Vengeance: Shield of Vengeance] [Ardent Defender / Divine Protection], and Lay on Hands by 30%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Lightforged Blessing",
      "spell_id": 403479,
      "node_id": 93008,
      "entry_id": 115239,
      "definition_id": 120251,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 93008,
        "node_name": "Lightforged Blessing",
        "node_type": "single",
        "pos_x": 3000,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          93168,
          81609
        ],
        "next": [
          81495
        ],
        "entry_id": 115239,
        "entry_max_ranks": 1,
        "definition_id": 120251,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Lightforged Blessing",
        "spell_id": 403479,
        "visible_spell_id": null,
        "icon": "spell_holy_circleofrenewal",
        "icon_candidates": [
          "spell_holy_circleofrenewal"
        ]
      },
      "pve_tooltip": "Divine Storm heals you and up to 2 nearby allies for (125% of Attack Power).",
      "pvp_tooltip": "Divine Storm heals you and up to 2 nearby allies for (125% of Attack Power).",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Lead the Charge",
      "spell_id": 469780,
      "node_id": 103867,
      "entry_id": 128263,
      "definition_id": 133070,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 103867,
        "node_name": "Lead the Charge",
        "node_type": "single",
        "pos_x": 3600,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81609,
          81607
        ],
        "next": [
          81495,
          103862,
          81621
        ],
        "entry_id": 128263,
        "entry_max_ranks": 1,
        "definition_id": 133070,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Lead the Charge",
        "spell_id": 469780,
        "visible_spell_id": null,
        "icon": "inv_helm_plate_raidpaladin_r_01mythic",
        "icon_candidates": [
          "inv_helm_plate_raidpaladin_r_01mythic"
        ]
      },
      "pve_tooltip": "Divine Steed reduces the cooldown of 4 nearby ally's major movement ability by 3.0 sec.\nYour movement speed is increased by 3%.\n(300ms cooldown)",
      "pvp_tooltip": "Divine Steed reduces the cooldown of 4 nearby ally's major movement ability by 3.0 sec.\nYour movement speed is increased by 3%.\n(300ms cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Worthy Sacrifice",
      "spell_id": 469279,
      "node_id": 103865,
      "entry_id": 128261,
      "definition_id": 133068,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 103865,
        "node_name": "Worthy Sacrifice / Righteous Protection",
        "node_type": "choice",
        "pos_x": 4200,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81607
        ],
        "next": [
          81621
        ],
        "entry_id": 128261,
        "entry_max_ranks": 1,
        "definition_id": 133068,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Worthy Sacrifice",
        "spell_id": 469279,
        "visible_spell_id": null,
        "icon": "ability_paladin_handoflight",
        "icon_candidates": [
          "ability_paladin_handoflight"
        ]
      },
      "pve_tooltip": "You automatically cast Blessing of Sacrifice onto an ally within 40 yds when they are below 35% health and you are not in a loss of control effect.\nThis effect activates 100% of Blessing of Sacrifice's cooldown.",
      "pvp_tooltip": "You automatically cast Blessing of Sacrifice onto an ally within 40 yds when they are below 35% health and you are not in a loss of control effect.\nThis effect activates 100% of Blessing of Sacrifice's cooldown.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Righteous Protection",
      "spell_id": 469321,
      "node_id": 103865,
      "entry_id": 128248,
      "definition_id": 133055,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 103865,
        "node_name": "Worthy Sacrifice / Righteous Protection",
        "node_type": "choice",
        "pos_x": 4200,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81607
        ],
        "next": [
          81621
        ],
        "entry_id": 128248,
        "entry_max_ranks": 1,
        "definition_id": 133055,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Righteous Protection",
        "spell_id": 469321,
        "visible_spell_id": null,
        "icon": "spell_holy_blessingofprotection",
        "icon_candidates": [
          "spell_holy_blessingofprotection"
        ]
      },
      "pve_tooltip": "Blessing of Sacrifice now removes and prevents all Poison and Disease effects.",
      "pvp_tooltip": "Blessing of Sacrifice now removes and prevents all Poison and Disease effects.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Holy Ritual",
      "spell_id": 199422,
      "node_id": 103866,
      "entry_id": 128262,
      "definition_id": 133069,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 103866,
        "node_name": "Holy Ritual",
        "node_type": "single",
        "pos_x": 4800,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81618,
          81607
        ],
        "next": [
          81621,
          103851
        ],
        "entry_id": 128262,
        "entry_max_ranks": 1,
        "definition_id": 133069,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Holy Ritual",
        "spell_id": 199422,
        "visible_spell_id": null,
        "icon": "inv_relics_libramoftruth",
        "icon_candidates": [
          "inv_relics_libramoftruth"
        ]
      },
      "pve_tooltip": "Allies are healed for (2000% of Spell Power) when you cast Blessing of Protection or Blessing of Sacrifice on them.",
      "pvp_tooltip": "Allies are healed for (2000% of Spell Power) when you cast Blessing of Protection or Blessing of Sacrifice on them.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Blessed Calling",
      "spell_id": 469770,
      "node_id": 103868,
      "entry_id": 128264,
      "definition_id": 133071,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 103868,
        "node_name": "Blessed Calling",
        "node_type": "single",
        "pos_x": 5400,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81617,
          81618
        ],
        "next": [
          103851
        ],
        "entry_id": 128264,
        "entry_max_ranks": 1,
        "definition_id": 133071,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Blessed Calling",
        "spell_id": 469770,
        "visible_spell_id": null,
        "icon": "ability_paladin_judgementofthepure",
        "icon_candidates": [
          "ability_paladin_judgementofthepure"
        ]
      },
      "pve_tooltip": "Allies affected by your Blessings have 15% increased movement speed.",
      "pvp_tooltip": "Allies affected by your Blessings have 15% increased movement speed.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Inspired Guard",
      "spell_id": 469439,
      "node_id": 103864,
      "entry_id": 128260,
      "definition_id": 133067,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 103864,
        "node_name": "Inspired Guard",
        "node_type": "single",
        "pos_x": 6000,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81617,
          81615
        ],
        "next": [
          103851,
          81628,
          103856
        ],
        "entry_id": 128260,
        "entry_max_ranks": 1,
        "definition_id": 133067,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Inspired Guard",
        "spell_id": 469439,
        "visible_spell_id": null,
        "icon": "spell_holy_divineprotection",
        "icon_candidates": [
          "spell_holy_divineprotection"
        ]
      },
      "pve_tooltip": "Divine Protection increases healing taken by 15% for its duration.",
      "pvp_tooltip": "Divine Protection increases healing taken by 15% for its duration.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Light's Revocation",
      "spell_id": 146956,
      "node_id": 81608,
      "entry_id": 102596,
      "definition_id": 107601,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81608,
        "node_name": "Light's Revocation",
        "node_type": "single",
        "pos_x": 6600,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81615,
          81543
        ],
        "next": [
          103856
        ],
        "entry_id": 102596,
        "entry_max_ranks": 1,
        "definition_id": 107601,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Light's Revocation",
        "spell_id": 146956,
        "visible_spell_id": null,
        "icon": "spell_holy_divineshield",
        "icon_candidates": [
          "spell_holy_divineshield"
        ]
      },
      "pve_tooltip": "Removing harmful effects with Divine Shield heals you for 10% for each effect removed. This heal cannot exceed 30% of your maximum health.\nDivine Shield may now be cast while Forbearance is active.",
      "pvp_tooltip": "Removing harmful effects with Divine Shield heals you for 10% for each effect removed. This heal cannot exceed 30% of your maximum health.\nDivine Shield may now be cast while Forbearance is active.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Faith's Armor",
      "spell_id": 406101,
      "node_id": 81495,
      "entry_id": 102464,
      "definition_id": 107469,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81495,
        "node_name": "Faith's Armor",
        "node_type": "single",
        "pos_x": 3000,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          93008,
          103867
        ],
        "next": [
          93357
        ],
        "entry_id": 102464,
        "entry_max_ranks": 1,
        "definition_id": 107469,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Faith's Armor",
        "spell_id": 406101,
        "visible_spell_id": null,
        "icon": "inv_shield_1h_newplayer_a_01",
        "icon_candidates": [
          "inv_shield_1h_newplayer_a_01"
        ]
      },
      "pve_tooltip": "Word of Glory grants 20% bonus armor for 4.5 sec.",
      "pvp_tooltip": "Word of Glory grants 20% bonus armor for 4.5 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Stoicism",
      "spell_id": 469316,
      "node_id": 103862,
      "entry_id": 128258,
      "definition_id": 133065,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 103862,
        "node_name": "Stoicism",
        "node_type": "single",
        "pos_x": 3600,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          103867
        ],
        "next": [
          93357
        ],
        "entry_id": 128258,
        "entry_max_ranks": 1,
        "definition_id": 133065,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Stoicism",
        "spell_id": 469316,
        "visible_spell_id": null,
        "icon": "spell_magic_magearmor",
        "icon_candidates": [
          "spell_magic_magearmor"
        ]
      },
      "pve_tooltip": "The duration of stun effects on you is reduced by 20%.",
      "pvp_tooltip": "The duration of stun effects on you is reduced by 10%.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 50,
          "end": 52,
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
          "talent_spell_id": 469316,
          "source_spell_id": 469316,
          "effect_index": 1,
          "effect_text": "Apply Aura: Mod Mechanic Duration % (Stunned)",
          "base_value": -20.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": -10.0,
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
      "talent_name": "Seal of Might",
      "spell_id": 385450,
      "node_id": 81621,
      "entry_id": 102612,
      "definition_id": 107617,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81621,
        "node_name": "Seal of Might",
        "node_type": "single",
        "pos_x": 4200,
        "pos_y": 6300,
        "max_ranks": 2,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          103866,
          103865,
          103867
        ],
        "next": [
          93357,
          103861
        ],
        "entry_id": 102612,
        "entry_max_ranks": 2,
        "definition_id": 107617,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Seal of Might",
        "spell_id": 385450,
        "visible_spell_id": null,
        "icon": "spell_holy_sealofwrath",
        "icon_candidates": [
          "spell_holy_sealofwrath"
        ]
      },
      "pve_tooltip": "Mastery increased by 4% and Strength increased by 4%.",
      "pvp_tooltip": "Mastery increased by 4% and Strength increased by 4%.",
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
          "pve_tooltip": "Mastery increased by 2% and Strength increased by 2%.",
          "pvp_tooltip": "Mastery increased by 2% and Strength increased by 2%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "Mastery increased by 4% and Strength increased by 4%.",
          "pvp_tooltip": "Mastery increased by 4% and Strength increased by 4%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Vengeful Wrath",
      "spell_id": 1241958,
      "node_id": 103851,
      "entry_id": 128241,
      "definition_id": 133048,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 103851,
        "node_name": "Vengeful Wrath",
        "node_type": "single",
        "pos_x": 5400,
        "pos_y": 6300,
        "max_ranks": 2,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          103866,
          103864,
          103868
        ],
        "next": [
          103861,
          103863
        ],
        "entry_id": 128241,
        "entry_max_ranks": 2,
        "definition_id": 133048,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Vengeful Wrath",
        "spell_id": 1241958,
        "visible_spell_id": null,
        "icon": "spell_paladin_hammerofwrath",
        "icon_candidates": [
          "spell_paladin_hammerofwrath"
        ]
      },
      "pve_tooltip": "Hammer of Wrath deals up to 50% additional damage based on its target's health. Lower health targets receive more damage.",
      "pvp_tooltip": "Hammer of Wrath deals up to 20% additional damage based on its target's health. Lower health targets receive more damage.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 28,
          "end": 30,
          "old_token": "50",
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
          "old": "50",
          "new": "20"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 1241958,
          "source_spell_id": 1241958,
          "effect_index": 1,
          "effect_text": "Apply Aura: Dummy",
          "base_value": 50.0,
          "spell_pvp_multiplier": 0.4,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.4,
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
      "rank_tooltips": [
        {
          "rank": 1,
          "pve_tooltip": "Hammer of Wrath deals up to 25% additional damage based on its target's health. Lower health targets receive more damage.",
          "pvp_tooltip": "Hammer of Wrath deals up to 10% additional damage based on its target's health. Lower health targets receive more damage.",
          "tooltip_changed": true,
          "changes": [
            {
              "start": 28,
              "end": 30,
              "old_token": "25",
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
          "pve_tooltip": "Hammer of Wrath deals up to 50% additional damage based on its target's health. Lower health targets receive more damage.",
          "pvp_tooltip": "Hammer of Wrath deals up to 20% additional damage based on its target's health. Lower health targets receive more damage.",
          "tooltip_changed": true,
          "changes": [
            {
              "start": 28,
              "end": 30,
              "old_token": "50",
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
      "talent_name": "Eye for an Eye",
      "spell_id": 469309,
      "node_id": 81628,
      "entry_id": 102620,
      "definition_id": 107625,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81628,
        "node_name": "Eye for an Eye",
        "node_type": "single",
        "pos_x": 6000,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          103864
        ],
        "next": [
          103863
        ],
        "entry_id": 102620,
        "entry_max_ranks": 1,
        "definition_id": 107625,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Eye for an Eye",
        "spell_id": 469309,
        "visible_spell_id": null,
        "icon": "spell_holy_eyeforaneye",
        "icon_candidates": [
          "spell_holy_eyeforaneye"
        ]
      },
      "pve_tooltip": "Melee and ranged attackers receive (35% of Spell Power) Holy damage each time they strike you during Divine Protection and Divine Shield.",
      "pvp_tooltip": "Melee and ranged attackers receive (111.5625% of Spell Power) Holy damage each time they strike you during Divine Protection and Divine Shield.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 36,
          "end": 38,
          "old_token": "35",
          "new_token": "111.5625",
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
          "old": "35",
          "new": "111.5625"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 469309,
          "source_spell_id": 469311,
          "effect_index": 1,
          "effect_text": "School Damage (2): holy (SP mod: 0.35)",
          "base_value": null,
          "spell_pvp_multiplier": 3.75,
          "amount_kind": "direct",
          "aura_factor": 0.85,
          "final_pvp_multiplier": 3.1875,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            469309,
            469311
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079573,
              "amount_kind": "direct",
              "value_pct": -15.0,
              "factor": 0.85,
              "label_id": null,
              "build": "12.1.0.69933"
            }
          ],
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
      "talent_name": "Golden Path",
      "spell_id": 377128,
      "node_id": 103856,
      "entry_id": 128252,
      "definition_id": 133059,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 103856,
        "node_name": "Golden Path / Selfless Healer",
        "node_type": "choice",
        "pos_x": 6600,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          103864,
          81608
        ],
        "next": [
          103863
        ],
        "entry_id": 128252,
        "entry_max_ranks": 1,
        "definition_id": 133059,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Golden Path",
        "spell_id": 377128,
        "visible_spell_id": null,
        "icon": "ability_priest_cascade",
        "icon_candidates": [
          "ability_priest_cascade"
        ]
      },
      "pve_tooltip": "Consecration heals you and 5 allies within it for (6.25% of Attack Power) every 1 sec.",
      "pvp_tooltip": "Consecration heals you and 5 allies within it for (6.25% of Attack Power) every 1 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [
        {
          "effect_indexes": [
            1
          ],
          "status": "NESTED_DEPENDENCY_NOT_VISIBLE",
          "kind": "attack_power_coefficient",
          "old": 5.0,
          "new": 6.375,
          "full_tooltip_match_count": 0
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 377128,
          "source_spell_id": 81297,
          "effect_index": 1,
          "effect_text": "School Damage (Holy) (AP mod: 0.05 )",
          "base_value": null,
          "spell_pvp_multiplier": 1.5,
          "amount_kind": "direct",
          "aura_factor": 0.85,
          "final_pvp_multiplier": 1.275,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            377128,
            26573,
            81297
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079573,
              "amount_kind": "direct",
              "value_pct": -15.0,
              "factor": 0.85,
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
      "talent_name": "Selfless Healer",
      "spell_id": 469434,
      "node_id": 103856,
      "entry_id": 128309,
      "definition_id": 133116,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 103856,
        "node_name": "Golden Path / Selfless Healer",
        "node_type": "choice",
        "pos_x": 6600,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          103864,
          81608
        ],
        "next": [
          103863
        ],
        "entry_id": 128309,
        "entry_max_ranks": 1,
        "definition_id": 133116,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Selfless Healer",
        "spell_id": 469434,
        "visible_spell_id": null,
        "icon": "ability_paladin_gaurdedbythelight",
        "icon_candidates": [
          "ability_paladin_gaurdedbythelight"
        ]
      },
      "pve_tooltip": "Flash of Light is 30% more effective on your allies and 40% of the healing done also heals you.",
      "pvp_tooltip": "Flash of Light is 30% more effective on your allies and 40% of the healing done also heals you.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Blessing of Dawn",
      "spell_id": 183416,
      "node_id": 93357,
      "entry_id": 115673,
      "definition_id": 120685,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 93357,
        "node_name": "Blessing of Dawn",
        "node_type": "single",
        "pos_x": 3600,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81495,
          81621,
          103862
        ],
        "next": [],
        "entry_id": 115673,
        "entry_max_ranks": 1,
        "definition_id": 120685,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Blessing of Dawn",
        "spell_id": 183416,
        "visible_spell_id": null,
        "icon": "achievement_zone_valeofeternalblossoms",
        "icon_candidates": [
          "achievement_zone_valeofeternalblossoms"
        ]
      },
      "pve_tooltip": "While you are above 85% health, 5% of all damage taken by allies within 20 yds is redirected to you, up to a maximum of (5 * Total Health / 100) every 5 sec.",
      "pvp_tooltip": "While you are above 85% health, 5% of all damage taken by allies within 20 yds is redirected to you, up to a maximum of (5 * Total Health / 100) every 5 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Lightbearer",
      "spell_id": 469416,
      "node_id": 103861,
      "entry_id": 128257,
      "definition_id": 133064,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 103861,
        "node_name": "Lightbearer",
        "node_type": "single",
        "pos_x": 4800,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          103851,
          81621
        ],
        "next": [],
        "entry_id": 128257,
        "entry_max_ranks": 1,
        "definition_id": 133064,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Lightbearer",
        "spell_id": 469416,
        "visible_spell_id": null,
        "icon": "spell_paladin_clarityofpurpose",
        "icon_candidates": [
          "spell_paladin_clarityofpurpose"
        ]
      },
      "pve_tooltip": "10% of all healing done to you from other sources heals up to 4 nearby allies, divided evenly among them.",
      "pvp_tooltip": "10% of all healing done to you from other sources heals up to 4 nearby allies, divided evenly among them.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Blessing of Dusk",
      "spell_id": 1241945,
      "node_id": 103863,
      "entry_id": 128259,
      "definition_id": 133066,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 103863,
        "node_name": "Blessing of Dusk",
        "node_type": "single",
        "pos_x": 6000,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          103851,
          103856,
          81628
        ],
        "next": [],
        "entry_id": 128259,
        "entry_max_ranks": 1,
        "definition_id": 133066,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Blessing of Dusk",
        "spell_id": 1241945,
        "visible_spell_id": null,
        "icon": "achievement_zone_newshadowmoonvalley",
        "icon_candidates": [
          "achievement_zone_newshadowmoonvalley"
        ]
      },
      "pve_tooltip": "Damage taken reduced by up to 10%, increasing as your health decreases.",
      "pvp_tooltip": "Damage taken reduced by up to 10%, increasing as your health decreases.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Blade of Justice",
      "spell_id": 184575,
      "node_id": 81526,
      "entry_id": 102498,
      "definition_id": 107503,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81526,
        "node_name": "Blade of Justice",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 1500,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [
          81527,
          92689
        ],
        "entry_id": 102498,
        "entry_max_ranks": 1,
        "definition_id": 107503,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Blade of Justice",
        "spell_id": 184575,
        "visible_spell_id": null,
        "icon": "ability_paladin_bladeofjustice",
        "icon_candidates": [
          "ability_paladin_bladeofjustice"
        ]
      },
      "pve_tooltip": "12 yd range\nInstant\n1 min cooldown\n1 Charge\n[Blade of Vengeance: Pierce enemies / Pierce an enemy] with a blade of light, dealing (192.877% of Attack Power) Holy damage [Blade of Vengeance: to your target and (58.5195% of Attack Power) Holy damage to nearby enemies / .]\nGenerates 1 Holy Power.",
      "pvp_tooltip": "12 yd range\nInstant\n1 min cooldown\n1 Charge\n[Blade of Vengeance: Pierce enemies / Pierce an enemy] with a blade of light, dealing (163.9454% of Attack Power) Holy damage [Blade of Vengeance: to your target and (49.7416% of Attack Power) Holy damage to nearby enemies / .]\nGenerates 1 Holy Power.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 131,
          "end": 138,
          "old_token": "192.877",
          "new_token": "163.9454",
          "kind": "attack_power_coefficient",
          "effect_indexes": [
            1
          ]
        },
        {
          "start": 210,
          "end": 217,
          "old_token": "58.5195",
          "new_token": "49.7416",
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
          "old": "192.877",
          "new": "163.9454"
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "attack_power_coefficient",
          "old": "58.5195",
          "new": "49.7416"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 184575,
          "source_spell_id": 184575,
          "effect_index": 1,
          "effect_text": "School Damage (Holy) (AP mod: 1.92877 )",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.85,
          "final_pvp_multiplier": 0.85,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079573,
              "amount_kind": "direct",
              "value_pct": -15.0,
              "factor": 0.85,
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
          "talent_spell_id": 184575,
          "source_spell_id": 404358,
          "effect_index": 1,
          "effect_text": "School Damage (Holy) (AP mod: 0.585195 )",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.85,
          "final_pvp_multiplier": 0.85,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            184575,
            404358
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079573,
              "amount_kind": "direct",
              "value_pct": -15.0,
              "factor": 0.85,
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
      "talent_name": "Divine Storm",
      "spell_id": 53385,
      "node_id": 81527,
      "entry_id": 102499,
      "definition_id": 107504,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81527,
        "node_name": "Divine Storm",
        "node_type": "single",
        "pos_x": 12600,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81526
        ],
        "next": [
          81521,
          93161
        ],
        "entry_id": 102499,
        "entry_max_ranks": 1,
        "definition_id": 107504,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Divine Storm",
        "spell_id": 53385,
        "visible_spell_id": null,
        "icon": "ability_paladin_divinestorm",
        "icon_candidates": [
          "ability_paladin_divinestorm"
        ]
      },
      "pve_tooltip": "3 Holy Power\nInstant\nUnleashes a whirl of divine energy, dealing [Burning Crusade: [(263.424% of Attack Power) * 1.05] Radiant / (263.424% of Attack Power) Holy] damage to all nearby enemies.\nDeals reduced damage beyond 5 targets.",
      "pvp_tooltip": "3 Holy Power\nInstant\nUnleashes a whirl of divine energy, dealing [Burning Crusade: [(223.9104% of Attack Power) * 1.05] Radiant / (223.9104% of Attack Power) Holy] damage to all nearby enemies.\nDeals reduced damage beyond 5 targets.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 85,
          "end": 92,
          "old_token": "263.424",
          "new_token": "223.9104",
          "kind": "attack_power_coefficient",
          "effect_indexes": [
            1
          ]
        },
        {
          "start": 130,
          "end": 137,
          "old_token": "263.424",
          "new_token": "223.9104",
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
          "old": "263.424",
          "new": "223.9104"
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "attack_power_coefficient",
          "old": "263.424",
          "new": "223.9104"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 53385,
          "source_spell_id": 53385,
          "effect_index": 1,
          "effect_text": "School Damage (Holy) (AP mod: 2.63424 )",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.85,
          "final_pvp_multiplier": 0.85,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079573,
              "amount_kind": "direct",
              "value_pct": -15.0,
              "factor": 0.85,
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
      "talent_name": "Expurgation",
      "spell_id": 383344,
      "node_id": 92689,
      "entry_id": 114830,
      "definition_id": 119837,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 92689,
        "node_name": "Expurgation",
        "node_type": "single",
        "pos_x": 13800,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81526
        ],
        "next": [
          93161,
          81544
        ],
        "entry_id": 114830,
        "entry_max_ranks": 1,
        "definition_id": 119837,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Expurgation",
        "spell_id": 383344,
        "visible_spell_id": null,
        "icon": "ability_paladin_bladeofjusticeblue",
        "icon_candidates": [
          "ability_paladin_bladeofjusticeblue"
        ]
      },
      "pve_tooltip": "Your Blade of Justice causes the target to burn for (68.85% of Attack Power) [Holy Crusader: Holy / Radiant] damage over 9 sec. When reapplied, any remaining damage is added to the new effect.",
      "pvp_tooltip": "Your Blade of Justice causes the target to burn for (68.85% of Attack Power) [Holy Crusader: Holy / Radiant] damage over 9 sec. When reapplied, any remaining damage is added to the new effect.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 383344,
          "source_spell_id": 383346,
          "effect_index": 1,
          "effect_text": "Apply Aura: Periodic Damage",
          "base_value": null,
          "spell_pvp_multiplier": 1.4,
          "amount_kind": "periodic",
          "aura_factor": 0.85,
          "final_pvp_multiplier": 1.19,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            383344,
            383346
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079574,
              "amount_kind": "periodic",
              "value_pct": -15.0,
              "factor": 0.85,
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
      "talent_name": "Swift Justice",
      "spell_id": 383228,
      "node_id": 81521,
      "entry_id": 102491,
      "definition_id": 107496,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81521,
        "node_name": "Swift Justice / Light of Justice",
        "node_type": "choice",
        "pos_x": 12600,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81527
        ],
        "next": [
          81532,
          92838
        ],
        "entry_id": 102491,
        "entry_max_ranks": 1,
        "definition_id": 107496,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Swift Justice",
        "spell_id": 383228,
        "visible_spell_id": null,
        "icon": "ability_paladin_judgementofthepure",
        "icon_candidates": [
          "ability_paladin_judgementofthepure"
        ]
      },
      "pve_tooltip": "Reduces the cooldown of Judgment by 2 sec and Crusader Strike by 2 sec.",
      "pvp_tooltip": "Reduces the cooldown of Judgment by 2 sec and Crusader Strike by 2 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Light of Justice",
      "spell_id": 404436,
      "node_id": 81521,
      "entry_id": 114828,
      "definition_id": 119835,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81521,
        "node_name": "Swift Justice / Light of Justice",
        "node_type": "choice",
        "pos_x": 12600,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81527
        ],
        "next": [
          81532,
          92838
        ],
        "entry_id": 114828,
        "entry_max_ranks": 1,
        "definition_id": 119835,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Light of Justice",
        "spell_id": 404436,
        "visible_spell_id": null,
        "icon": "inv_offhand_1h_ulduarraid_d_01",
        "icon_candidates": [
          "inv_offhand_1h_ulduarraid_d_01"
        ]
      },
      "pve_tooltip": "Reduces the cooldown of Blade of Justice by 2 sec.",
      "pvp_tooltip": "Reduces the cooldown of Blade of Justice by 2 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Judgment of Justice",
      "spell_id": 403495,
      "node_id": 93161,
      "entry_id": 115440,
      "definition_id": 120452,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 93161,
        "node_name": "Judgment of Justice",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          92689,
          81527
        ],
        "next": [
          92838
        ],
        "entry_id": 115440,
        "entry_max_ranks": 1,
        "definition_id": 120452,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Judgment of Justice",
        "spell_id": 403495,
        "visible_spell_id": null,
        "icon": "ability_paladin_judgementblue",
        "icon_candidates": [
          "ability_paladin_judgementblue"
        ]
      },
      "pve_tooltip": "Judgment deals 10% increased damage and increases your movement speed by 10% for 5 sec.\nIf you have Greater Judgment, Judgment slows enemies by 30% for 8 sec.",
      "pvp_tooltip": "Judgment deals 10% increased damage and increases your movement speed by 10% for 5 sec.\nIf you have Greater Judgment, Judgment slows enemies by 20% for 8 sec.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 144,
          "end": 146,
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
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 403495,
          "source_spell_id": 20271,
          "effect_index": 1,
          "effect_text": "School Damage (Holy) (SP mod: 1.00739)",
          "base_value": null,
          "spell_pvp_multiplier": 1.2,
          "amount_kind": "direct",
          "aura_factor": 0.85,
          "final_pvp_multiplier": 1.02,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            403495,
            20271
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079573,
              "amount_kind": "direct",
              "value_pct": -15.0,
              "factor": 0.85,
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
          "talent_spell_id": 403495,
          "source_spell_id": 20271,
          "effect_index": 3,
          "effect_text": "School Damage (Holy) (SP mod: 0.755547)",
          "base_value": null,
          "spell_pvp_multiplier": 1.2,
          "amount_kind": "direct",
          "aura_factor": 0.85,
          "final_pvp_multiplier": 1.02,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            403495,
            20271
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079573,
              "amount_kind": "direct",
              "value_pct": -15.0,
              "factor": 0.85,
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
          "talent_spell_id": 403495,
          "source_spell_id": 408383,
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
            403495,
            408383
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
      "talent_name": "Avenging Wrath",
      "spell_id": 31884,
      "node_id": 81544,
      "entry_id": 102519,
      "definition_id": 107524,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81544,
        "node_name": "Avenging Wrath",
        "node_type": "single",
        "pos_x": 13800,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          92689
        ],
        "next": [
          92838,
          81523
        ],
        "entry_id": 102519,
        "entry_max_ranks": 1,
        "definition_id": 107524,
        "entry_index": 0,
        "entry_type": "active",
        "talent_name": "Avenging Wrath",
        "spell_id": 31884,
        "visible_spell_id": 31884,
        "icon": "spell_holy_avenginewrath",
        "icon_candidates": [
          "spell_holy_avenginewrath"
        ]
      },
      "pve_tooltip": "Instant\n1 min cooldown\nCall upon the Light to become an avatar of retribution, [causing Judgment to generate 4 additional Holy Power,][each Holy Power spent causing you to explode with Holy light for (13.5% of Attack Power) damage to nearby enemies,]increasing your damage, healing, and critical strike chance by 15% for 20 sec.\nEach Holy Power spent increases Haste by an additional 3%, up to 15%.",
      "pvp_tooltip": "Instant\n1 min cooldown\nCall upon the Light to become an avatar of retribution, [causing Judgment to generate 4 additional Holy Power,][each Holy Power spent causing you to explode with Holy light for (11.475% of Attack Power) damage to nearby enemies,]increasing your damage, healing, and critical strike chance by 15% for 20 sec.\nEach Holy Power spent increases Haste by an additional 3%, up to 15%.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 201,
          "end": 205,
          "old_token": "13.5",
          "new_token": "11.475",
          "kind": "attack_power_coefficient",
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
          "status": "NESTED_DEPENDENCY_NOT_VISIBLE",
          "kind": "percent_value",
          "old": 40.0,
          "new": 26.663999999999998,
          "full_tooltip_match_count": 0
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "attack_power_coefficient",
          "old": "13.5",
          "new": "11.475"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 31884,
          "source_spell_id": 326731,
          "effect_index": 1,
          "effect_text": "School Damage (Holy) (AP mod: 0.135 )",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.85,
          "final_pvp_multiplier": 0.85,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            31884,
            326731
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079573,
              "amount_kind": "direct",
              "value_pct": -15.0,
              "factor": 0.85,
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
          "talent_spell_id": 31884,
          "source_spell_id": 204074,
          "effect_index": 1,
          "effect_text": "Apply Aura: Modifies Cooldown (11)",
          "base_value": -50.0,
          "spell_pvp_multiplier": 0.6666,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.6666,
          "final_pvp_value": -33.33,
          "is_final_pvp_modified": true,
          "dependency_path": [
            31884,
            53376,
            389539,
            204074
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "tooltip_value_ref",
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
          "talent_spell_id": 31884,
          "source_spell_id": 204074,
          "effect_index": 2,
          "effect_text": "Apply Aura: Modifies Buff Duration (1)",
          "base_value": -40.0,
          "spell_pvp_multiplier": 0.6666,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.6666,
          "final_pvp_value": -26.663999999999998,
          "is_final_pvp_modified": true,
          "dependency_path": [
            31884,
            53376,
            389539,
            204074
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "tooltip_value_ref",
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
      "talent_name": "Final Verdict",
      "spell_id": 383328,
      "node_id": 81532,
      "entry_id": 102504,
      "definition_id": 107509,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81532,
        "node_name": "Final Verdict",
        "node_type": "single",
        "pos_x": 12000,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81521
        ],
        "next": [
          81542,
          109372,
          81533
        ],
        "entry_id": 102504,
        "entry_max_ranks": 1,
        "definition_id": 107509,
        "entry_index": 0,
        "entry_type": "active",
        "talent_name": "Final Verdict",
        "spell_id": 383328,
        "visible_spell_id": null,
        "icon": "spell_paladin_templarsverdict",
        "icon_candidates": [
          "spell_paladin_templarsverdict"
        ]
      },
      "pve_tooltip": "3 Holy Power\n12 yd range\nInstant\nUnleashes a powerful weapon strike that deals (465.069% of Attack Power) Holy damage to an enemy target,\nHas a 15% chance to reset the cooldown of Judgment.",
      "pvp_tooltip": "3 Holy Power\n12 yd range\nInstant\nUnleashes a powerful weapon strike that deals (568.2562% of Attack Power) Holy damage to an enemy target,\nHas a 15% chance to reset the cooldown of Judgment.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 80,
          "end": 87,
          "old_token": "465.069",
          "new_token": "568.2562",
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
          "old": "465.069",
          "new": "568.2562"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 383328,
          "source_spell_id": 383328,
          "effect_index": 1,
          "effect_text": "School Damage (Holy) (AP mod: 4.65069 )",
          "base_value": null,
          "spell_pvp_multiplier": 1.4375,
          "amount_kind": "direct",
          "aura_factor": 0.85,
          "final_pvp_multiplier": 1.221875,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079573,
              "amount_kind": "direct",
              "value_pct": -15.0,
              "factor": 0.85,
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
      "talent_name": "Improved Blade of Justice",
      "spell_id": 403745,
      "node_id": 92838,
      "entry_id": 115023,
      "definition_id": 120030,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 92838,
        "node_name": "Improved Blade of Justice / Holy Blade",
        "node_type": "choice",
        "pos_x": 13200,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81544,
          81521,
          93161
        ],
        "next": [
          109372,
          81512,
          109370
        ],
        "entry_id": 115023,
        "entry_max_ranks": 1,
        "definition_id": 120030,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Improved Blade of Justice",
        "spell_id": 403745,
        "visible_spell_id": null,
        "icon": "ability_paladin_bladeofjustice",
        "icon_candidates": [
          "ability_paladin_bladeofjustice"
        ]
      },
      "pve_tooltip": "Blade of Justice now has 2 charges.",
      "pvp_tooltip": "Blade of Justice now has 2 charges.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Holy Blade",
      "spell_id": 383342,
      "node_id": 92838,
      "entry_id": 115022,
      "definition_id": 120029,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 92838,
        "node_name": "Improved Blade of Justice / Holy Blade",
        "node_type": "choice",
        "pos_x": 13200,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81544,
          81521,
          93161
        ],
        "next": [
          109372,
          81512,
          109370
        ],
        "entry_id": 115022,
        "entry_max_ranks": 1,
        "definition_id": 120029,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Holy Blade",
        "spell_id": 383342,
        "visible_spell_id": null,
        "icon": "ability_paladin_lightoftheprotector",
        "icon_candidates": [
          "ability_paladin_lightoftheprotector"
        ]
      },
      "pve_tooltip": "Blade of Justice generates 1 additional Holy Power.",
      "pvp_tooltip": "Blade of Justice generates 1 additional Holy Power.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Righteous Cause",
      "spell_id": 402912,
      "node_id": 81523,
      "entry_id": 102494,
      "definition_id": 107499,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81523,
        "node_name": "Righteous Cause / Art of War",
        "node_type": "choice",
        "pos_x": 14400,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81544
        ],
        "next": [
          109370,
          109371,
          81545
        ],
        "entry_id": 102494,
        "entry_max_ranks": 1,
        "definition_id": 107499,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Righteous Cause",
        "spell_id": 402912,
        "visible_spell_id": null,
        "icon": "inv_sword_133",
        "icon_candidates": [
          "inv_sword_133"
        ]
      },
      "pve_tooltip": "Each Holy Power spent has a 6% chance to reset the cooldown of Blade of Justice [Light Within: and increase the damage of its next cast by 0% / .]\n(1s cooldown)",
      "pvp_tooltip": "Each Holy Power spent has a 6% chance to reset the cooldown of Blade of Justice [Light Within: and increase the damage of its next cast by 0% / .]\n(1s cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Art of War",
      "spell_id": 406064,
      "node_id": 81523,
      "entry_id": 102493,
      "definition_id": 107498,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81523,
        "node_name": "Righteous Cause / Art of War",
        "node_type": "choice",
        "pos_x": 14400,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81544
        ],
        "next": [
          109370,
          109371,
          81545
        ],
        "entry_id": 102493,
        "entry_max_ranks": 1,
        "definition_id": 107498,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Art of War",
        "spell_id": 406064,
        "visible_spell_id": null,
        "icon": "ability_paladin_artofwar",
        "icon_candidates": [
          "ability_paladin_artofwar"
        ]
      },
      "pve_tooltip": "Your auto attacks have a 15% chance to reset the cooldown of Blade of Justice [Light Within: and increase the damage of its next cast by 0% / .]\nCritical strikes increase the chance by an additional 10%.\n(1s cooldown)",
      "pvp_tooltip": "Your auto attacks have a 15% chance to reset the cooldown of Blade of Justice [Light Within: and increase the damage of its next cast by 0% / .]\nCritical strikes increase the chance by an additional 10%.\n(1s cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Jurisdiction",
      "spell_id": 402971,
      "node_id": 81542,
      "entry_id": 102516,
      "definition_id": 107521,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81542,
        "node_name": "Jurisdiction",
        "node_type": "single",
        "pos_x": 11400,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81532
        ],
        "next": [
          81533,
          92860
        ],
        "entry_id": 102516,
        "entry_max_ranks": 1,
        "definition_id": 107521,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Jurisdiction",
        "spell_id": 402971,
        "visible_spell_id": null,
        "icon": "ability_paladin_longarmofthelaw",
        "icon_candidates": [
          "ability_paladin_longarmofthelaw"
        ]
      },
      "pve_tooltip": "[Final Verdict / Templar's Verdict] and Blade of Justice deal 10% increased damage.\nThe range of [Final Verdict: Final Verdict and]Blade of Justice is increased to 20 yds.",
      "pvp_tooltip": "[Final Verdict / Templar's Verdict] and Blade of Justice deal 10% increased damage.\nThe range of [Final Verdict: Final Verdict and]Blade of Justice is increased to 20 yds.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Tempest of the Lightbringer",
      "spell_id": 383396,
      "node_id": 109372,
      "entry_id": 115452,
      "definition_id": 120464,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109372,
        "node_name": "Tempest of the Lightbringer",
        "node_type": "single",
        "pos_x": 12600,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          92838,
          81532
        ],
        "next": [
          81533,
          92952
        ],
        "entry_id": 115452,
        "entry_max_ranks": 1,
        "definition_id": 120464,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Tempest of the Lightbringer",
        "spell_id": 383396,
        "visible_spell_id": null,
        "icon": "ability_malkorok_blightofyshaarj_yellow",
        "icon_candidates": [
          "ability_malkorok_blightofyshaarj_yellow"
        ]
      },
      "pve_tooltip": "Divine Storm projects an additional wave of light, striking all enemies up to 20 yds in front of you for 20% of Divine Storm's damage.",
      "pvp_tooltip": "Divine Storm projects an additional wave of light, striking all enemies up to 20 yds in front of you for 20% of Divine Storm's damage.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Rush of Light",
      "spell_id": 407067,
      "node_id": 81512,
      "entry_id": 115475,
      "definition_id": 120487,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81512,
        "node_name": "Rush of Light",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          92838
        ],
        "next": [
          92952,
          93190
        ],
        "entry_id": 115475,
        "entry_max_ranks": 1,
        "definition_id": 120487,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Rush of Light",
        "spell_id": 407067,
        "visible_spell_id": null,
        "icon": "spell_holy_borrowedtime",
        "icon_candidates": [
          "spell_holy_borrowedtime"
        ]
      },
      "pve_tooltip": "The critical strikes of your Holy Power generating abilities grant you 5% Haste for 10 sec.\n(500ms cooldown)",
      "pvp_tooltip": "The critical strikes of your Holy Power generating abilities grant you 5% Haste for 10 sec.\n(500ms cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Sanctify",
      "spell_id": 382536,
      "node_id": 109370,
      "entry_id": 115488,
      "definition_id": 120500,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109370,
        "node_name": "Sanctify",
        "node_type": "single",
        "pos_x": 13800,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81523,
          92838
        ],
        "next": [
          93190,
          81545
        ],
        "entry_id": 115488,
        "entry_max_ranks": 1,
        "definition_id": 120500,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Sanctify",
        "spell_id": 382536,
        "visible_spell_id": null,
        "icon": "achievement_zone_firelands",
        "icon_candidates": [
          "achievement_zone_firelands"
        ]
      },
      "pve_tooltip": "Enemies hit by Divine Storm take 20% more damage from Consecration and Divine Hammers for 12 sec.",
      "pvp_tooltip": "Enemies hit by Divine Storm take 20% more damage from Consecration and Divine Hammers for 12 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Holy Flames",
      "spell_id": 406545,
      "node_id": 109371,
      "entry_id": 115438,
      "definition_id": 120450,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109371,
        "node_name": "Holy Flames",
        "node_type": "single",
        "pos_x": 15000,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81523
        ],
        "next": [
          81545,
          92839
        ],
        "entry_id": 115438,
        "entry_max_ranks": 1,
        "definition_id": 120450,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Holy Flames",
        "spell_id": 406545,
        "visible_spell_id": null,
        "icon": "ability_warlock_inferno",
        "icon_candidates": [
          "ability_warlock_inferno"
        ]
      },
      "pve_tooltip": "You deal 5% increased Holy damage to targets burning from your Expurgation.",
      "pvp_tooltip": "You deal 5% increased Holy damage to targets burning from your Expurgation.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 406545,
          "source_spell_id": 383346,
          "effect_index": 1,
          "effect_text": "Apply Aura: Periodic Damage",
          "base_value": null,
          "spell_pvp_multiplier": 1.4,
          "amount_kind": "periodic",
          "aura_factor": 0.85,
          "final_pvp_multiplier": 1.19,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            406545,
            383346
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079574,
              "amount_kind": "periodic",
              "value_pct": -15.0,
              "factor": 0.85,
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
      "talent_name": "Improved Judgment",
      "spell_id": 405461,
      "node_id": 81533,
      "entry_id": 102505,
      "definition_id": 107510,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81533,
        "node_name": "Improved Judgment / Boundless Judgment",
        "node_type": "choice",
        "pos_x": 12000,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81542,
          81532,
          109372
        ],
        "next": [
          92860,
          81534
        ],
        "entry_id": 102505,
        "entry_max_ranks": 1,
        "definition_id": 107510,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Improved Judgment",
        "spell_id": 405461,
        "visible_spell_id": null,
        "icon": "spell_holy_righteousfury",
        "icon_candidates": [
          "spell_holy_righteousfury"
        ]
      },
      "pve_tooltip": "Judgment now has 2 charges.",
      "pvp_tooltip": "Judgment now has 2 charges.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Boundless Judgment",
      "spell_id": 405278,
      "node_id": 81533,
      "entry_id": 115021,
      "definition_id": 120028,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81533,
        "node_name": "Improved Judgment / Boundless Judgment",
        "node_type": "choice",
        "pos_x": 12000,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81542,
          81532,
          109372
        ],
        "next": [
          92860,
          81534
        ],
        "entry_id": 115021,
        "entry_max_ranks": 1,
        "definition_id": 120028,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Boundless Judgment",
        "spell_id": 405278,
        "visible_spell_id": null,
        "icon": "ability_paladin_judgementofthewise",
        "icon_candidates": [
          "ability_paladin_judgementofthewise"
        ]
      },
      "pve_tooltip": "Judgment has a 50% increased chance to trigger Mastery: Highlord's Judgment.",
      "pvp_tooltip": "Judgment has a 50% increased chance to trigger Mastery: Highlord's Judgment.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Zealot's Fervor",
      "spell_id": 403509,
      "node_id": 92952,
      "entry_id": 115165,
      "definition_id": 120172,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 92952,
        "node_name": "Zealot's Fervor",
        "node_type": "single",
        "pos_x": 12600,
        "pos_y": 4500,
        "max_ranks": 2,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81512,
          109372
        ],
        "next": [
          81534,
          109374
        ],
        "entry_id": 115165,
        "entry_max_ranks": 2,
        "definition_id": 120172,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Zealot's Fervor",
        "spell_id": 403509,
        "visible_spell_id": null,
        "icon": "spell_holy_weaponmastery",
        "icon_candidates": [
          "spell_holy_weaponmastery"
        ]
      },
      "pve_tooltip": "Auto-attack speed increased by 40%.",
      "pvp_tooltip": "Auto-attack speed increased by 40%.",
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
          "pve_tooltip": "Auto-attack speed increased by 20%.",
          "pvp_tooltip": "Auto-attack speed increased by 20%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "Auto-attack speed increased by 40%.",
          "pvp_tooltip": "Auto-attack speed increased by 40%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Heart of the Crusader",
      "spell_id": 406154,
      "node_id": 93190,
      "entry_id": 115483,
      "definition_id": 120495,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 93190,
        "node_name": "Heart of the Crusader",
        "node_type": "single",
        "pos_x": 13800,
        "pos_y": 4500,
        "max_ranks": 2,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81512,
          109370
        ],
        "next": [
          109374,
          81541
        ],
        "entry_id": 115483,
        "entry_max_ranks": 2,
        "definition_id": 120495,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Heart of the Crusader",
        "spell_id": 406154,
        "visible_spell_id": null,
        "icon": "spell_brokenheart",
        "icon_candidates": [
          "spell_brokenheart"
        ]
      },
      "pve_tooltip": "Crusader Strike and auto-attacks deal 20% increased damage and deal 20% increased critical strike damage.",
      "pvp_tooltip": "Crusader Strike and auto-attacks deal 20% increased damage and deal 20% increased critical strike damage.",
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
          "pve_tooltip": "Crusader Strike and auto-attacks deal 10% increased damage and deal 10% increased critical strike damage.",
          "pvp_tooltip": "Crusader Strike and auto-attacks deal 10% increased damage and deal 10% increased critical strike damage.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "Crusader Strike and auto-attacks deal 20% increased damage and deal 20% increased critical strike damage.",
          "pvp_tooltip": "Crusader Strike and auto-attacks deal 20% increased damage and deal 20% increased critical strike damage.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Blade of Vengeance",
      "spell_id": 403826,
      "node_id": 81545,
      "entry_id": 102521,
      "definition_id": 107526,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81545,
        "node_name": "Blade of Vengeance",
        "node_type": "single",
        "pos_x": 14400,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109370,
          109371,
          81523
        ],
        "next": [
          81541,
          92839
        ],
        "entry_id": 102521,
        "entry_max_ranks": 1,
        "definition_id": 107526,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Blade of Vengeance",
        "spell_id": 403826,
        "visible_spell_id": null,
        "icon": "ability_paladin_bladeofjustice",
        "icon_candidates": [
          "ability_paladin_bladeofjustice"
        ]
      },
      "pve_tooltip": "Blade of Justice now hits nearby enemies for (58.5195% of Attack Power) Holy damage.\nDeals reduced damage beyond 5 targets.",
      "pvp_tooltip": "Blade of Justice now hits nearby enemies for (49.7416% of Attack Power) Holy damage.\nDeals reduced damage beyond 5 targets.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 46,
          "end": 53,
          "old_token": "58.5195",
          "new_token": "49.7416",
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
          "old": "58.5195",
          "new": "49.7416"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 403826,
          "source_spell_id": 404358,
          "effect_index": 1,
          "effect_text": "School Damage (Holy) (AP mod: 0.585195 )",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.85,
          "final_pvp_multiplier": 0.85,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            403826,
            404358
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079573,
              "amount_kind": "direct",
              "value_pct": -15.0,
              "factor": 0.85,
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
      "talent_name": "Empyrean Power",
      "spell_id": 326732,
      "node_id": 92860,
      "entry_id": 115051,
      "definition_id": 120058,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 92860,
        "node_name": "Empyrean Power",
        "node_type": "single",
        "pos_x": 11400,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81533,
          81542
        ],
        "next": [
          93164
        ],
        "entry_id": 115051,
        "entry_max_ranks": 1,
        "definition_id": 120058,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Empyrean Power",
        "spell_id": 326732,
        "visible_spell_id": null,
        "icon": "ability_paladin_sheathoflight",
        "icon_candidates": [
          "ability_paladin_sheathoflight"
        ]
      },
      "pve_tooltip": "[Crusading Strikes: Crusading Strikes has a 5% / Crusader Strike has a 15%] chance to make your next Divine Storm free and deal 15% additional damage.\n(100ms cooldown)",
      "pvp_tooltip": "[Crusading Strikes: Crusading Strikes has a 5% / Crusader Strike has a 15%] chance to make your next Divine Storm free and deal 15% additional damage.\n(100ms cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Highlord's Wrath",
      "spell_id": 404512,
      "node_id": 81534,
      "entry_id": 102506,
      "definition_id": 107511,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81534,
        "node_name": "Highlord's Wrath",
        "node_type": "single",
        "pos_x": 12600,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81533,
          92952
        ],
        "next": [
          93164,
          81525
        ],
        "entry_id": 102506,
        "entry_max_ranks": 1,
        "definition_id": 107511,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Highlord's Wrath",
        "spell_id": 404512,
        "visible_spell_id": null,
        "icon": "ability_paladin_judgementred",
        "icon_candidates": [
          "ability_paladin_judgementred"
        ]
      },
      "pve_tooltip": "Mastery: Highlord's Judgment is 50% more effective on Judgment and Hammer of Wrath. Judgment applies an additional stack of Greater Judgment if it is known.",
      "pvp_tooltip": "Mastery: Highlord's Judgment is 50% more effective on Judgment and Hammer of Wrath. Judgment applies an additional stack of Greater Judgment if it is known.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Templar Strikes",
      "spell_id": 406646,
      "node_id": 109374,
      "entry_id": 115473,
      "definition_id": 120485,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109374,
        "node_name": "Templar Strikes / Crusading Strikes",
        "node_type": "choice",
        "pos_x": 13200,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          93190,
          92952
        ],
        "next": [
          81525
        ],
        "entry_id": 115473,
        "entry_max_ranks": 1,
        "definition_id": 120485,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Templar Strikes",
        "spell_id": 406646,
        "visible_spell_id": null,
        "icon": "inv_sword_2h_artifactashbringer_d_01",
        "icon_candidates": [
          "inv_sword_2h_artifactashbringer_d_01"
        ]
      },
      "pve_tooltip": "Crusader Strike loses a charge but is now a combo ability.\nTemplar Strike slashes an enemy for (187.5% of Attack Power) Radiant damage and gets followed up by Templar Slash that deals (215.625% of Attack Power) Radiant damage. Templar Slash always critically strikes.",
      "pvp_tooltip": "Crusader Strike loses a charge but is now a combo ability.\nTemplar Strike slashes an enemy for (159.375% of Attack Power) Radiant damage and gets followed up by Templar Slash that deals (183.2812% of Attack Power) Radiant damage. Templar Slash always critically strikes.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 185,
          "end": 192,
          "old_token": "215.625",
          "new_token": "183.2812",
          "kind": "attack_power_coefficient",
          "effect_indexes": [
            1
          ]
        },
        {
          "start": 96,
          "end": 101,
          "old_token": "187.5",
          "new_token": "159.375",
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
          "old": "187.5",
          "new": "159.375"
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "attack_power_coefficient",
          "old": "215.625",
          "new": "183.2812"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 406646,
          "source_spell_id": 406647,
          "effect_index": 1,
          "effect_text": "School Damage (2): holyfire | Attributes: Chain from Initial Target (7) (AP mod: 2.15625)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.85,
          "final_pvp_multiplier": 0.85,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            406646,
            406647
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079573,
              "amount_kind": "direct",
              "value_pct": -15.0,
              "factor": 0.85,
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
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 406646,
          "source_spell_id": 407480,
          "effect_index": 1,
          "effect_text": "School Damage (2): holyfire | Attributes: Chain from Initial Target (7) (AP mod: 1.875)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.85,
          "final_pvp_multiplier": 0.85,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            406646,
            407480
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079573,
              "amount_kind": "direct",
              "value_pct": -15.0,
              "factor": 0.85,
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
      "talent_name": "Crusading Strikes",
      "spell_id": 404542,
      "node_id": 109374,
      "entry_id": 136809,
      "definition_id": 141572,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109374,
        "node_name": "Templar Strikes / Crusading Strikes",
        "node_type": "choice",
        "pos_x": 13200,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          93190,
          92952
        ],
        "next": [
          81525
        ],
        "entry_id": 136809,
        "entry_max_ranks": 1,
        "definition_id": 141572,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Crusading Strikes",
        "spell_id": 404542,
        "visible_spell_id": null,
        "icon": "inv_sword_08",
        "icon_candidates": [
          "inv_sword_08"
        ]
      },
      "pve_tooltip": "Crusader Strike replaces your auto-attacks and deals (234.731% of Attack Power) Physical damage.\nAuto-attack speed is decreased by 15%.\n(300ms cooldown)",
      "pvp_tooltip": "Crusader Strike replaces your auto-attacks and deals (199.5213% of Attack Power) Physical damage.\nAuto-attack speed is decreased by 15%.\n(300ms cooldown)",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 54,
          "end": 61,
          "old_token": "234.731",
          "new_token": "199.5213",
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
          "old": "234.731",
          "new": "199.5213"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 404542,
          "source_spell_id": 408385,
          "effect_index": 1,
          "effect_text": "School Damage (2): physical | Attributes: Chain from Initial Target (7) (AP mod: 2.34731)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.85,
          "final_pvp_multiplier": 0.85,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            404542,
            408385
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079573,
              "amount_kind": "direct",
              "value_pct": -15.0,
              "factor": 0.85,
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
      "render_effect_count": 1,
      "rank_tooltips": []
    },
    {
      "talent_name": "Blessed Champion",
      "spell_id": 403010,
      "node_id": 81541,
      "entry_id": 102515,
      "definition_id": 107520,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81541,
        "node_name": "Blessed Champion",
        "node_type": "single",
        "pos_x": 13800,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81545,
          93190
        ],
        "next": [
          81525,
          93160
        ],
        "entry_id": 102515,
        "entry_max_ranks": 1,
        "definition_id": 107520,
        "entry_index": 0,
        "entry_type": "passive",
        "talent_name": "Blessed Champion",
        "spell_id": 403010,
        "visible_spell_id": null,
        "icon": "achievement_bg_trueavshutout",
        "icon_candidates": [
          "achievement_bg_trueavshutout"
        ]
      },
      "pve_tooltip": "Crusader Strike and Judgment hit an additional 4 targets but deal 25% reduced damage to secondary targets.",
      "pvp_tooltip": "Crusader Strike and Judgment hit an additional 4 targets but deal 25% reduced damage to secondary targets.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Burning Crusade",
      "spell_id": 403026,
      "node_id": 92839,
      "entry_id": 115024,
      "definition_id": 120031,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 92839,
        "node_name": "Burning Crusade",
        "node_type": "single",
        "pos_x": 15000,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109371,
          81545
        ],
        "next": [
          93160
        ],
        "entry_id": 115024,
        "entry_max_ranks": 1,
        "definition_id": 120031,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Burning Crusade",
        "spell_id": 403026,
        "visible_spell_id": null,
        "icon": "spell_fire_sealoffire",
        "icon_candidates": [
          "spell_fire_sealoffire"
        ]
      },
      "pve_tooltip": "Your damage over time effects deal 10% more damage.",
      "pvp_tooltip": "Your damage over time effects deal 10% more damage.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Blades of Light",
      "spell_id": 403664,
      "node_id": 93164,
      "entry_id": 115443,
      "definition_id": 120455,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 93164,
        "node_name": "Blades of Light",
        "node_type": "single",
        "pos_x": 12000,
        "pos_y": 5700,
        "max_ranks": 2,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81534,
          92860
        ],
        "next": [
          109373
        ],
        "entry_id": 115443,
        "entry_max_ranks": 2,
        "definition_id": 120455,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Blades of Light",
        "spell_id": 403664,
        "visible_spell_id": null,
        "icon": "achievement_arena_3v3_7",
        "icon_candidates": [
          "achievement_arena_3v3_7"
        ]
      },
      "pve_tooltip": "[Templar Strikes: Templar Strikes] [Crusading Strikes: Crusading Strikes / Crusader Strike, ]Judgment and Blade of Justice deal 10% increased damage.",
      "pvp_tooltip": "[Templar Strikes: Templar Strikes] [Crusading Strikes: Crusading Strikes / Crusader Strike, ]Judgment and Blade of Justice deal 10% increased damage.",
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
          "pve_tooltip": "[Templar Strikes: Templar Strikes] [Crusading Strikes: Crusading Strikes / Crusader Strike, ]Judgment and Blade of Justice deal 10% increased damage.",
          "pvp_tooltip": "[Templar Strikes: Templar Strikes] [Crusading Strikes: Crusading Strikes / Crusader Strike, ]Judgment and Blade of Justice deal 10% increased damage.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "[Templar Strikes: Templar Strikes] [Crusading Strikes: Crusading Strikes / Crusader Strike, ]Judgment and Blade of Justice deal 10% increased damage.",
          "pvp_tooltip": "[Templar Strikes: Templar Strikes] [Crusading Strikes: Crusading Strikes / Crusader Strike, ]Judgment and Blade of Justice deal 10% increased damage.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Wake of Ashes",
      "spell_id": 255937,
      "node_id": 81525,
      "entry_id": 102497,
      "definition_id": 107502,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81525,
        "node_name": "Wake of Ashes",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81541,
          109374,
          81534
        ],
        "next": [
          92854
        ],
        "entry_id": 102497,
        "entry_max_ranks": 1,
        "definition_id": 107502,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Wake of Ashes",
        "spell_id": 255937,
        "visible_spell_id": null,
        "icon": "inv_sword_2h_artifactashbringerfire_d_03",
        "icon_candidates": [
          "inv_sword_2h_artifactashbringerfire_d_03"
        ]
      },
      "pve_tooltip": "Instant\n1 min cooldown\n1 Charge\nLash out at your enemies, dealing (321.86% of Attack Power) Radiant damage to all enemies within 14 yds in front of you, and applying Truth's Wake, burning the targets for an additional [(65.28% of Attack Power) * 2.73077] damage over 9 sec.\nDemon and Undead enemies are also stunned for 5 sec.\nGenerates 3 Holy Power.",
      "pvp_tooltip": "Instant\n1 min cooldown\n1 Charge\nLash out at your enemies, dealing (198.9678% of Attack Power) Radiant damage to all enemies within 14 yds in front of you, and applying Truth's Wake, burning the targets for an additional [(55.488% of Attack Power) * 2.73077] damage over 9 sec.\nDemon and Undead enemies are also stunned for 5 sec.\nGenerates 3 Holy Power.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 67,
          "end": 73,
          "old_token": "321.86",
          "new_token": "198.9678",
          "kind": "attack_power_coefficient",
          "effect_indexes": [
            1
          ]
        },
        {
          "start": 220,
          "end": 225,
          "old_token": "65.28",
          "new_token": "55.488",
          "kind": "attack_power_coefficient",
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
          "kind": "attack_power_coefficient",
          "old": "321.86",
          "new": "198.9678"
        },
        {
          "effect_indexes": [
            2
          ],
          "status": "APPLIED",
          "kind": "attack_power_coefficient",
          "old": "65.28",
          "new": "55.488"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 255937,
          "source_spell_id": 255937,
          "effect_index": 1,
          "effect_text": "School Damage (Holy, Fire) (AP mod: 3.2186 )",
          "base_value": null,
          "spell_pvp_multiplier": 0.727272,
          "amount_kind": "direct",
          "aura_factor": 0.85,
          "final_pvp_multiplier": 0.6181812,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079573,
              "amount_kind": "direct",
              "value_pct": -15.0,
              "factor": 0.85,
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
          "talent_spell_id": 255937,
          "source_spell_id": 403695,
          "effect_index": 1,
          "effect_text": "Apply Aura: Decrease Run Speed %",
          "base_value": -50.0,
          "spell_pvp_multiplier": 0.6,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.6,
          "final_pvp_value": -30.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            255937,
            403695
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
          "talent_spell_id": 255937,
          "source_spell_id": 403695,
          "effect_index": 2,
          "effect_text": "Apply Aura: Periodic Damage",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "periodic",
          "aura_factor": 0.85,
          "final_pvp_multiplier": 0.85,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            255937,
            403695
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079574,
              "amount_kind": "periodic",
              "value_pct": -15.0,
              "factor": 0.85,
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
          "talent_spell_id": 255937,
          "source_spell_id": 405345,
          "effect_index": 1,
          "effect_text": "School Damage (Holy, Fire) (AP mod: 2.27174 )",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.85,
          "final_pvp_multiplier": 0.85,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            255937,
            405345
          ],
          "dependency_relations": [
            "trigger_spell"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079573,
              "amount_kind": "direct",
              "value_pct": -15.0,
              "factor": 0.85,
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
          "talent_spell_id": 255937,
          "source_spell_id": 405350,
          "effect_index": 1,
          "effect_text": "School Damage (2): holyfire | Attributes: Always AOE Line of Sight (5), Add Target (Dest) Combat Reach to AOE (11), Area Effects Use Target Radius (17) (AP mod: 2.27174)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.85,
          "final_pvp_multiplier": 0.85,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            255937,
            405350
          ],
          "dependency_relations": [
            "trigger_spell"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079573,
              "amount_kind": "direct",
              "value_pct": -15.0,
              "factor": 0.85,
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
      "talent_name": "Divine Wrath",
      "spell_id": 406872,
      "node_id": 93160,
      "entry_id": 115439,
      "definition_id": 120451,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 93160,
        "node_name": "Divine Wrath",
        "node_type": "single",
        "pos_x": 14400,
        "pos_y": 5700,
        "max_ranks": 2,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          92839,
          81541
        ],
        "next": [
          93173
        ],
        "entry_id": 115439,
        "entry_max_ranks": 2,
        "definition_id": 120451,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Divine Wrath",
        "spell_id": 406872,
        "visible_spell_id": null,
        "icon": "spell_holy_greaterblessingofkings",
        "icon_candidates": [
          "spell_holy_greaterblessingofkings"
        ]
      },
      "pve_tooltip": "Increases the duration of Avenging Wrath or Crusade by 4 sec.",
      "pvp_tooltip": "Increases the duration of Avenging Wrath or Crusade by 4 sec.",
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
          "pve_tooltip": "Increases the duration of Avenging Wrath or Crusade by 3 sec.",
          "pvp_tooltip": "Increases the duration of Avenging Wrath or Crusade by 3 sec.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "Increases the duration of Avenging Wrath or Crusade by 4 sec.",
          "pvp_tooltip": "Increases the duration of Avenging Wrath or Crusade by 4 sec.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Execution Sentence",
      "spell_id": 343527,
      "node_id": 109373,
      "entry_id": 115435,
      "definition_id": 120447,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109373,
        "node_name": "Execution Sentence",
        "node_type": "single",
        "pos_x": 12000,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          93164
        ],
        "next": [
          81537
        ],
        "entry_id": 115435,
        "entry_max_ranks": 1,
        "definition_id": 120447,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Execution Sentence",
        "spell_id": 343527,
        "visible_spell_id": null,
        "icon": "spell_paladin_executionsentence",
        "icon_candidates": [
          "spell_paladin_executionsentence"
        ]
      },
      "pve_tooltip": "30 yd range\nInstant\n1 min cooldown\nUnleash a heavenly blast around the target, dealing (505.312% of Attack Power) Holy damage to all enemies within 10 yds, and call down a hammer that slowly falls from the sky upon the target.\nAfter 10 sec, they suffer 20% of the Holy damage you dealt to all targets affected by the initial blast during that time.",
      "pvp_tooltip": "30 yd range\nInstant\n1 min cooldown\nUnleash a heavenly blast around the target, dealing (343.6122% of Attack Power) Holy damage to all enemies within 10 yds, and call down a hammer that slowly falls from the sky upon the target.\nAfter 10 sec, they suffer 20% of the Holy damage you dealt to all targets affected by the initial blast during that time.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 88,
          "end": 95,
          "old_token": "505.312",
          "new_token": "343.6122",
          "kind": "attack_power_coefficient",
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
          "kind": "attack_power_coefficient",
          "old": 390.0,
          "new": 331.5,
          "full_tooltip_match_count": 0
        },
        {
          "effect_indexes": [
            2
          ],
          "status": "APPLIED",
          "kind": "attack_power_coefficient",
          "old": "505.312",
          "new": "343.6122"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 343527,
          "source_spell_id": 223819,
          "effect_index": 2,
          "effect_text": "Apply Aura: Modifies Damage/Healing Done",
          "base_value": 15.0,
          "spell_pvp_multiplier": 0.666667,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.666667,
          "final_pvp_value": 10.000005,
          "is_final_pvp_modified": true,
          "dependency_path": [
            343527,
            223819
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
          "talent_spell_id": 343527,
          "source_spell_id": 343721,
          "effect_index": 2,
          "effect_text": "School Damage (Holy) (AP mod: 5.05312 )",
          "base_value": null,
          "spell_pvp_multiplier": 0.8,
          "amount_kind": "direct",
          "aura_factor": 0.85,
          "final_pvp_multiplier": 0.68,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            343527,
            343721
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079573,
              "amount_kind": "direct",
              "value_pct": -15.0,
              "factor": 0.85,
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
          "talent_spell_id": 343527,
          "source_spell_id": 343721,
          "effect_index": 3,
          "effect_text": "Apply Aura: Mod All Damage Done % by Caster",
          "base_value": 30.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 15.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            343527,
            343721
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
          "confidence": "ambiguous"
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 343527,
          "source_spell_id": 343721,
          "effect_index": 4,
          "effect_text": "Apply Aura: Mod All Damage Done % by Caster",
          "base_value": 15.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 7.5,
          "is_final_pvp_modified": true,
          "dependency_path": [
            343527,
            343721
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
          "confidence": "ambiguous"
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "RUNTIME",
          "talent_spell_id": 343527,
          "source_spell_id": 1260251,
          "effect_index": 1,
          "effect_text": "School Damage (2): holy | Attributes: Always AOE Line of Sight (5), Add Target (Dest) Combat Reach to AOE (11), Area Effects Use Target Radius (17) (AP mod: 5.05312)",
          "base_value": null,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": "direct",
          "aura_factor": 0.85,
          "final_pvp_multiplier": 0.425,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            343527,
            1260251
          ],
          "dependency_relations": [
            "trigger_spell"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079573,
              "amount_kind": "direct",
              "value_pct": -15.0,
              "factor": 0.85,
              "label_id": null,
              "build": "12.1.0.69933"
            }
          ],
          "sources": [
            "simc",
            "drustvar",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "high"
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 343527,
          "source_spell_id": 383921,
          "effect_index": 1,
          "effect_text": "School Damage (Holy) (AP mod: 3.9 )",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.85,
          "final_pvp_multiplier": 0.85,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            343527,
            267316,
            383921
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079573,
              "amount_kind": "direct",
              "value_pct": -15.0,
              "factor": 0.85,
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
      "talent_name": "Seething Flames",
      "spell_id": 405355,
      "node_id": 92854,
      "entry_id": 115043,
      "definition_id": 120050,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 92854,
        "node_name": "Seething Flames",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          81525
        ],
        "next": [
          81549,
          92686
        ],
        "entry_id": 115043,
        "entry_max_ranks": 1,
        "definition_id": 120050,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Seething Flames",
        "spell_id": 405355,
        "visible_spell_id": null,
        "icon": "ability_mage_flamecannon",
        "icon_candidates": [
          "ability_mage_flamecannon"
        ]
      },
      "pve_tooltip": "Wake of Ashes deals significantly reduced damage to secondary targets, but now causes you to lash out 2 extra times for (227.174% of Attack Power) Radiant damage.",
      "pvp_tooltip": "Wake of Ashes deals significantly reduced damage to secondary targets, but now causes you to lash out 2 extra times for (193.0979% of Attack Power) Radiant damage.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 121,
          "end": 128,
          "old_token": "227.174",
          "new_token": "193.0979",
          "kind": "attack_power_coefficient",
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
          "status": "NESTED_DEPENDENCY_NOT_VISIBLE",
          "kind": "attack_power_coefficient",
          "old": 65.28,
          "new": 55.488,
          "full_tooltip_match_count": 0
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "attack_power_coefficient",
          "old": "227.174",
          "new": "193.0979"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 405355,
          "source_spell_id": 405345,
          "effect_index": 1,
          "effect_text": "School Damage (Holy, Fire) (AP mod: 2.27174 )",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.85,
          "final_pvp_multiplier": 0.85,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            405355,
            405345
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079573,
              "amount_kind": "direct",
              "value_pct": -15.0,
              "factor": 0.85,
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
          "talent_spell_id": 405355,
          "source_spell_id": 403695,
          "effect_index": 1,
          "effect_text": "Apply Aura: Decrease Run Speed %",
          "base_value": -50.0,
          "spell_pvp_multiplier": 0.6,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.6,
          "final_pvp_value": -30.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            405355,
            405345,
            255937,
            403695
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "spelldesc_ref",
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
          "talent_spell_id": 405355,
          "source_spell_id": 403695,
          "effect_index": 2,
          "effect_text": "Apply Aura: Periodic Damage",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "periodic",
          "aura_factor": 0.85,
          "final_pvp_multiplier": 0.85,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            405355,
            405345,
            255937,
            403695
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "spelldesc_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079574,
              "amount_kind": "periodic",
              "value_pct": -15.0,
              "factor": 0.85,
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
          "talent_spell_id": 405355,
          "source_spell_id": 405350,
          "effect_index": 1,
          "effect_text": "School Damage (2): holyfire | Attributes: Always AOE Line of Sight (5), Add Target (Dest) Combat Reach to AOE (11), Area Effects Use Target Radius (17) (AP mod: 2.27174)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.85,
          "final_pvp_multiplier": 0.85,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            405355,
            405345,
            255937,
            405350
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "spelldesc_ref",
            "trigger_spell"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079573,
              "amount_kind": "direct",
              "value_pct": -15.0,
              "factor": 0.85,
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
      "talent_name": "Empyrean Legacy",
      "spell_id": 387170,
      "node_id": 93173,
      "entry_id": 115453,
      "definition_id": 120465,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 93173,
        "node_name": "Empyrean Legacy",
        "node_type": "single",
        "pos_x": 14400,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          93160
        ],
        "next": [
          109369
        ],
        "entry_id": 115453,
        "entry_max_ranks": 1,
        "definition_id": 120465,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Empyrean Legacy",
        "spell_id": 387170,
        "visible_spell_id": null,
        "icon": "item_holyspark",
        "icon_candidates": [
          "item_holyspark"
        ]
      },
      "pve_tooltip": "Avenging Wrath empowers your next damage dealing single target Holy Power ability to automatically activate Divine Storm with 25% increased effectiveness.",
      "pvp_tooltip": "Avenging Wrath empowers your next damage dealing single target Holy Power ability to automatically activate Divine Storm with 25% increased effectiveness.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Judge, Jury and Executioner",
      "spell_id": 406157,
      "node_id": 81537,
      "entry_id": 102511,
      "definition_id": 107516,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81537,
        "node_name": "Judge, Jury and Executioner",
        "node_type": "single",
        "pos_x": 12000,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109373
        ],
        "next": [],
        "entry_id": 102511,
        "entry_max_ranks": 1,
        "definition_id": 107516,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Judge, Jury and Executioner",
        "spell_id": 406157,
        "visible_spell_id": null,
        "icon": "spell_holy_sealofblood",
        "icon_candidates": [
          "spell_holy_sealofblood"
        ]
      },
      "pve_tooltip": "Holy Power spending abilities deal 5% increased damage.\nAfter casting Execution Sentence, your next 1 Holy Power ability will refund its Holy Power cost.",
      "pvp_tooltip": "Holy Power spending abilities deal 5% increased damage.\nAfter casting Execution Sentence, your next 1 Holy Power ability will refund its Holy Power cost.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Radiant Glory",
      "spell_id": 458359,
      "node_id": 81549,
      "entry_id": 102525,
      "definition_id": 107530,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 81549,
        "node_name": "Radiant Glory",
        "node_type": "single",
        "pos_x": 12600,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          92854
        ],
        "next": [],
        "entry_id": 102525,
        "entry_max_ranks": 1,
        "definition_id": 107530,
        "entry_index": 0,
        "entry_type": "passive",
        "talent_name": "Radiant Glory",
        "spell_id": 458359,
        "visible_spell_id": null,
        "icon": "achievement_dungeon_gloryoftheraider",
        "icon_candidates": [
          "achievement_dungeon_gloryoftheraider"
        ]
      },
      "pve_tooltip": "[Avenging Wrath: Crusade / Avenging Wrath] is replaced with Radiant Glory.\nRadiant Glory\nWake of Ashes activates [Avenging Wrath: Crusade for 8 sec / Avenging Wrath for 8 sec].",
      "pvp_tooltip": "[Avenging Wrath: Crusade / Avenging Wrath] is replaced with Radiant Glory.\nRadiant Glory\nWake of Ashes activates [Avenging Wrath: Crusade for 8 sec / Avenging Wrath for 8 sec].",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Burn to Ash",
      "spell_id": 446663,
      "node_id": 92686,
      "entry_id": 114824,
      "definition_id": 119831,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 92686,
        "node_name": "Burn to Ash",
        "node_type": "single",
        "pos_x": 13800,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          92854
        ],
        "next": [],
        "entry_id": 114824,
        "entry_max_ranks": 1,
        "definition_id": 119831,
        "entry_index": 0,
        "entry_type": "passive",
        "talent_name": "Burn to Ash",
        "spell_id": 446663,
        "visible_spell_id": null,
        "icon": "spell_burningsoul",
        "icon_candidates": [
          "spell_burningsoul"
        ]
      },
      "pve_tooltip": "When Truth's Wake critically strikes, its duration is extended by 2 sec.\nYour other damage over time effects deal 30% increased damage to targets affected by Truth's Wake.",
      "pvp_tooltip": "When Truth's Wake critically strikes, its duration is extended by 2 sec.\nYour other damage over time effects deal 30% increased damage to targets affected by Truth's Wake.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Crusade",
      "spell_id": 1253598,
      "node_id": 109369,
      "entry_id": 135565,
      "definition_id": 140321,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109369,
        "node_name": "Crusade",
        "node_type": "single",
        "pos_x": 14400,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          93173
        ],
        "next": [],
        "entry_id": 135565,
        "entry_max_ranks": 1,
        "definition_id": 140321,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Crusade",
        "spell_id": 1253598,
        "visible_spell_id": null,
        "icon": "ability_paladin_sanctifiedwrath",
        "icon_candidates": [
          "ability_paladin_sanctifiedwrath"
        ]
      },
      "pve_tooltip": "Avenging Wrath now grants you 2% Haste.\nEach Holy Power spent during Avenging Wrath increases Haste by an additional 2%, up to 20%.",
      "pvp_tooltip": "Avenging Wrath now grants you 2% Haste.\nEach Holy Power spent during Avenging Wrath increases Haste by an additional 2%, up to 20%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Light Within",
      "spell_id": 1261113,
      "node_id": 110419,
      "entry_id": 137025,
      "definition_id": 141788,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110419,
        "node_name": "Light Within / Light Within / Light Within",
        "node_type": "tiered",
        "pos_x": 13200,
        "pos_y": 7650,
        "max_ranks": 4,
        "required_points": 20,
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [],
        "entry_id": 137025,
        "entry_max_ranks": 1,
        "definition_id": 141788,
        "entry_index": 100,
        "entry_type": "tierrank",
        "talent_name": "Light Within",
        "spell_id": 1261113,
        "visible_spell_id": null,
        "icon": "inv12_apextalent_paladin_lightwithin",
        "icon_candidates": [
          "inv12_apextalent_paladin_lightwithin"
        ]
      },
      "pve_tooltip": "[Righteous Cause / Art of War] increases the damage of your next Blade of Justice by 80% and can now accumulate an additional time.",
      "pvp_tooltip": "[Righteous Cause / Art of War] increases the damage of your next Blade of Justice by 80% and can now accumulate an additional time.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Light Within",
      "spell_id": 1261111,
      "node_id": 110419,
      "entry_id": 137024,
      "definition_id": 141787,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110419,
        "node_name": "Light Within / Light Within / Light Within",
        "node_type": "tiered",
        "pos_x": 13200,
        "pos_y": 7650,
        "max_ranks": 4,
        "required_points": 20,
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [],
        "entry_id": 137024,
        "entry_max_ranks": 2,
        "definition_id": 141787,
        "entry_index": 200,
        "entry_type": "tierrank",
        "talent_name": "Light Within",
        "spell_id": 1261111,
        "visible_spell_id": null,
        "icon": "inv_ability_holyfire_buff",
        "icon_candidates": [
          "inv_ability_holyfire_buff"
        ]
      },
      "pve_tooltip": "Avenging Wrath further increases the damage of [Final Verdict / Templar's Verdict] and Divine Storm by 20%.",
      "pvp_tooltip": "Avenging Wrath further increases the damage of [Final Verdict / Templar's Verdict] and Divine Storm by 20%.",
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
          "pve_tooltip": "Avenging Wrath further increases the damage of [Final Verdict / Templar's Verdict] and Divine Storm by 10%.",
          "pvp_tooltip": "Avenging Wrath further increases the damage of [Final Verdict / Templar's Verdict] and Divine Storm by 10%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "Avenging Wrath further increases the damage of [Final Verdict / Templar's Verdict] and Divine Storm by 20%.",
          "pvp_tooltip": "Avenging Wrath further increases the damage of [Final Verdict / Templar's Verdict] and Divine Storm by 20%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Light Within",
      "spell_id": 1261159,
      "node_id": 110419,
      "entry_id": 137023,
      "definition_id": 141786,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110419,
        "node_name": "Light Within / Light Within / Light Within",
        "node_type": "tiered",
        "pos_x": 13200,
        "pos_y": 7650,
        "max_ranks": 4,
        "required_points": 20,
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [],
        "entry_id": 137023,
        "entry_max_ranks": 1,
        "definition_id": 141786,
        "entry_index": 300,
        "entry_type": "tierrank",
        "talent_name": "Light Within",
        "spell_id": 1261159,
        "visible_spell_id": null,
        "icon": "inv_ability_holyfire_buff",
        "icon_candidates": [
          "inv_ability_holyfire_buff"
        ]
      },
      "pve_tooltip": "[Righteous Cause / Art of War] further empowers Blade of Justice to unleash a wave of Holy energy, dealing [(331.918% of Attack Power) * 2.5] Holy damage to its primary target and (331.918% of Attack Power) Holy damage to all other enemies in its path.",
      "pvp_tooltip": "[Righteous Cause / Art of War] further empowers Blade of Justice to unleash a wave of Holy energy, dealing [(282.1303% of Attack Power) * 2.5] Holy damage to its primary target and (282.1303% of Attack Power) Holy damage to all other enemies in its path.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 109,
          "end": 116,
          "old_token": "331.918",
          "new_token": "282.1303",
          "kind": "attack_power_coefficient",
          "effect_indexes": [
            1
          ]
        },
        {
          "start": 181,
          "end": 188,
          "old_token": "331.918",
          "new_token": "282.1303",
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
          "old": "331.918",
          "new": "282.1303"
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "attack_power_coefficient",
          "old": "331.918",
          "new": "282.1303"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 1261159,
          "source_spell_id": 1261160,
          "effect_index": 1,
          "effect_text": "School Damage (2): holy | Attributes: Always AOE Line of Sight (5), Add Target (Dest) Combat Reach to AOE (11), Area Effects Use Target Radius (17) (AP mod: 3.31918)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.85,
          "final_pvp_multiplier": 0.85,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1261159,
            1261160
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079573,
              "amount_kind": "direct",
              "value_pct": -15.0,
              "factor": 0.85,
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
      "render_effect_count": 1,
      "rank_tooltips": []
    },
    {
      "talent_name": "Light's Guidance",
      "spell_id": 427445,
      "node_id": 95180,
      "entry_id": 117813,
      "definition_id": 122825,
      "tree_type": "hero",
      "hero_tree": "Templar",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Templar",
        "subtree_id": 48,
        "node_id": 95180,
        "node_name": "Light's Guidance",
        "node_type": "single",
        "pos_x": 16200,
        "pos_y": 900,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": true,
        "free_node": true,
        "prev": [],
        "next": [
          95187,
          109747,
          95183,
          95177
        ],
        "entry_id": 117813,
        "entry_max_ranks": 1,
        "definition_id": 122825,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Light's Guidance",
        "spell_id": 427445,
        "visible_spell_id": null,
        "icon": "ability_paladin_longarmofthelaw",
        "icon_candidates": [
          "ability_paladin_longarmofthelaw"
        ]
      },
      "pve_tooltip": "Wake of Ashes is replaced with Hammer of Light for 20 sec after it is cast.\nHammer of Light:\nHammer down your enemy with the power of the Light, dealing (1045.16% of Attack Power) Holy damage and (522% of Attack Power) Holy damage up to 7 nearby enemies.\nAdditionally, calls down Empyrean Hammers from the sky to strike 3 nearby enemies for (52.136% of Attack Power) Holy damage each.\nCosts 5 Holy Power.",
      "pvp_tooltip": "Wake of Ashes is replaced with Hammer of Light for 20 sec after it is cast.\nHammer of Light:\nHammer down your enemy with the power of the Light, dealing (666.9291% of Attack Power) Holy damage and (416.3681% of Attack Power) Holy damage up to 7 nearby enemies.\nAdditionally, calls down Empyrean Hammers from the sky to strike 3 nearby enemies for (44.3156% of Attack Power) Holy damage each.\nCosts 5 Holy Power.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 154,
          "end": 161,
          "old_token": "1045.16",
          "new_token": "666.9291",
          "kind": "attack_power_coefficient",
          "effect_indexes": [
            1
          ]
        },
        {
          "start": 197,
          "end": 200,
          "old_token": "522",
          "new_token": "416.3681",
          "kind": "attack_power_coefficient",
          "effect_indexes": [
            1
          ]
        },
        {
          "start": 342,
          "end": 348,
          "old_token": "52.136",
          "new_token": "44.3156",
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
          "old": "1045.16",
          "new": "666.9291"
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "attack_power_coefficient",
          "old": "522",
          "new": "416.3681"
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "attack_power_coefficient",
          "old": "52.136",
          "new": "44.3156"
        },
        {
          "status": "OFFICIAL_HOTFIX_CURRENT",
          "source": "blizzard_hotfix",
          "source_url": "https://news.blizzard.com/en-us/article/24296142/hotfixes-september-24-2026",
          "hotfix_date": "2026-09-22",
          "hotfix_text": "Hammer of Light damage increased by 20%.",
          "reason": "RELATIVE_HOTFIX_EVIDENCE",
          "evidence": {
            "source": "historical_verified_snapshot",
            "field": "effective_player_value",
            "source_spell_id": 427453,
            "effect_index": 1,
            "old_value": 5.5577481336,
            "new_value": 6.669291379199999,
            "ratio": 1.1999988518515328,
            "baseline_commit": "dc80a9d44b8a4b34ccbbdec61b5910e7915de290"
          }
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "EMBEDDED",
          "talent_spell_id": 427445,
          "source_spell_id": 427453,
          "effect_index": 1,
          "effect_text": "School Damage (2): holy (AP mod: 10.4516)",
          "base_value": null,
          "spell_pvp_multiplier": 0.544,
          "amount_kind": "direct",
          "aura_factor": 1.1729999999999998,
          "final_pvp_multiplier": 0.6381119999999999,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            427445,
            427453
          ],
          "dependency_relations": [
            "spelldesc_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079573,
              "amount_kind": "direct",
              "value_pct": -15.0,
              "factor": 0.85,
              "label_id": null,
              "build": "12.1.0.69933"
            },
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1350147,
              "amount_kind": "direct",
              "value_pct": 38.0,
              "factor": 1.38,
              "label_id": 3084,
              "build": "12.1.0.69933"
            }
          ],
          "sources": [
            "simc",
            "drustvar",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "high"
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "EMBEDDED",
          "talent_spell_id": 427445,
          "source_spell_id": 429826,
          "effect_index": 1,
          "effect_text": "School Damage (2): holy (AP mod: 5.22)",
          "base_value": null,
          "spell_pvp_multiplier": 0.68,
          "amount_kind": "direct",
          "aura_factor": 1.1729999999999998,
          "final_pvp_multiplier": 0.7976399999999999,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            427445,
            427453,
            429826
          ],
          "dependency_relations": [
            "spelldesc_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079573,
              "amount_kind": "direct",
              "value_pct": -15.0,
              "factor": 0.85,
              "label_id": null,
              "build": "12.1.0.69933"
            },
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1350147,
              "amount_kind": "direct",
              "value_pct": 38.0,
              "factor": 1.38,
              "label_id": 3084,
              "build": "12.1.0.69933"
            }
          ],
          "sources": [
            "simc",
            "drustvar",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "high"
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "EMBEDDED",
          "talent_spell_id": 427445,
          "source_spell_id": 431398,
          "effect_index": 1,
          "effect_text": "School Damage (2): holy (AP mod: 0.52136)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.85,
          "final_pvp_multiplier": 0.85,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            427445,
            427453,
            431398
          ],
          "dependency_relations": [
            "spelldesc_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079573,
              "amount_kind": "direct",
              "value_pct": -15.0,
              "factor": 0.85,
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
      "render_effect_count": 3,
      "rank_tooltips": []
    },
    {
      "talent_name": "Dawnlight",
      "spell_id": 431377,
      "node_id": 95099,
      "entry_id": 117696,
      "definition_id": 122708,
      "tree_type": "hero",
      "hero_tree": "Herald of the Sun",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Herald of the Sun",
        "subtree_id": 50,
        "node_id": 95099,
        "node_name": "Dawnlight",
        "node_type": "single",
        "pos_x": 9000,
        "pos_y": 1200,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": true,
        "free_node": true,
        "prev": [],
        "next": [
          95073,
          95095,
          95080,
          109748
        ],
        "entry_id": 117696,
        "entry_max_ranks": 1,
        "definition_id": 122708,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Dawnlight",
        "spell_id": 431377,
        "visible_spell_id": null,
        "icon": "inv_ability_heraldofthesunpaladin_dawnlight",
        "icon_candidates": [
          "inv_ability_heraldofthesunpaladin_dawnlight"
        ]
      },
      "pve_tooltip": "Casting Wake of Ashes causes your next 2 Holy Power spending abilities to apply Dawnlight on your target, dealing (255% of Spell Power) Radiant damage or (538.2% of Spell Power) healing over 8 sec.\n4% of Dawnlight's damage and healing radiates to nearby allies or enemies, reduced beyond 5 targets.\n(250ms cooldown)",
      "pvp_tooltip": "Casting Wake of Ashes causes your next 2 Holy Power spending abilities to apply Dawnlight on your target, dealing (255% of Spell Power) Radiant damage or (538.2% of Spell Power) healing over 8 sec.\n4% of Dawnlight's damage and healing radiates to nearby allies or enemies, reduced beyond 5 targets.\n(250ms cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 431377,
          "source_spell_id": 431380,
          "effect_index": 3,
          "effect_text": "Apply Aura (6) | Decrease Movement Speed% (33)",
          "base_value": -50.0,
          "spell_pvp_multiplier": 0.6,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.6,
          "final_pvp_value": -30.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            431377,
            431380
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
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 431377,
          "source_spell_id": 431380,
          "effect_index": 1,
          "effect_text": "Apply Aura (6) | Periodic Damage (3): holyfire every 2 seconds (SP mod: 0.6375)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "periodic",
          "aura_factor": 1.105,
          "final_pvp_multiplier": 1.105,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            431377,
            431380
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079574,
              "amount_kind": "periodic",
              "value_pct": -15.0,
              "factor": 0.85,
              "label_id": null,
              "build": "12.1.0.69933"
            },
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1315844,
              "amount_kind": "periodic",
              "value_pct": 30.0,
              "factor": 1.3,
              "label_id": 6251,
              "build": "12.1.0.69933"
            }
          ],
          "sources": [
            "simc",
            "drustvar",
            "simc_generated"
          ],
          "source_notes": [],
          "confidence": "high"
        }
      ],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Zealous Vindication",
      "spell_id": 431463,
      "node_id": 95183,
      "entry_id": 117816,
      "definition_id": 122828,
      "tree_type": "hero",
      "hero_tree": "Templar",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Templar",
        "subtree_id": 48,
        "node_id": 95183,
        "node_name": "Zealous Vindication",
        "node_type": "single",
        "pos_x": 15300,
        "pos_y": 1500,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95180
        ],
        "next": [
          95179
        ],
        "entry_id": 117816,
        "entry_max_ranks": 1,
        "definition_id": 122828,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Zealous Vindication",
        "spell_id": 431463,
        "visible_spell_id": null,
        "icon": "spell_holy_surgeoflight",
        "icon_candidates": [
          "spell_holy_surgeoflight"
        ]
      },
      "pve_tooltip": "Hammer of Light instantly calls down 2 Empyrean Hammers on your target when it is cast.",
      "pvp_tooltip": "Hammer of Light instantly calls down 2 Empyrean Hammers on your target when it is cast.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Shake the Heavens",
      "spell_id": 431533,
      "node_id": 95187,
      "entry_id": 117823,
      "definition_id": 122835,
      "tree_type": "hero",
      "hero_tree": "Templar",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Templar",
        "subtree_id": 48,
        "node_id": 95187,
        "node_name": "Shake the Heavens",
        "node_type": "single",
        "pos_x": 15900,
        "pos_y": 1500,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95180
        ],
        "next": [
          95178
        ],
        "entry_id": 117823,
        "entry_max_ranks": 1,
        "definition_id": 122835,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Shake the Heavens",
        "spell_id": 431533,
        "visible_spell_id": null,
        "icon": "ability_priest_holybolts01",
        "icon_candidates": [
          "ability_priest_holybolts01"
        ]
      },
      "pve_tooltip": "After casting Hammer of Light, you call down an Empyrean Hammer on a nearby target every 2 sec, for 8 sec.",
      "pvp_tooltip": "After casting Hammer of Light, you call down an Empyrean Hammer on a nearby target every 2 sec, for 8 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Wrathful Descent",
      "spell_id": 431551,
      "node_id": 95177,
      "entry_id": 117810,
      "definition_id": 122822,
      "tree_type": "hero",
      "hero_tree": "Templar",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Templar",
        "subtree_id": 48,
        "node_id": 95177,
        "node_name": "Wrathful Descent",
        "node_type": "single",
        "pos_x": 16500,
        "pos_y": 1500,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95180
        ],
        "next": [
          95181
        ],
        "entry_id": 117810,
        "entry_max_ranks": 1,
        "definition_id": 122822,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Wrathful Descent",
        "spell_id": 431551,
        "visible_spell_id": null,
        "icon": "ability_paladin_intercession",
        "icon_candidates": [
          "ability_paladin_intercession"
        ]
      },
      "pve_tooltip": "When Empyrean Hammer critically strikes, 50% of its damage is dealt to nearby enemies.\nEnemies hit by this effect deal 5% reduced damage to you for 8 sec.",
      "pvp_tooltip": "When Empyrean Hammer critically strikes, 50% of its damage is dealt to nearby enemies.\nEnemies hit by this effect deal 5% reduced damage to you for 8 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Divine Hammer",
      "spell_id": 432929,
      "node_id": 109747,
      "entry_id": 136005,
      "definition_id": 140760,
      "tree_type": "hero",
      "hero_tree": "Templar",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Templar",
        "subtree_id": 48,
        "node_id": 109747,
        "node_name": "Divine Hammer",
        "node_type": "single",
        "pos_x": 17100,
        "pos_y": 1500,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95180
        ],
        "next": [
          109746
        ],
        "entry_id": 136005,
        "entry_max_ranks": 1,
        "definition_id": 140760,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Divine Hammer",
        "spell_id": 432929,
        "visible_spell_id": null,
        "icon": "classicon_paladin",
        "icon_candidates": [
          "classicon_paladin"
        ]
      },
      "pve_tooltip": "Divine Toll summons Divine Hammers that spin around you for 8 sec.\nDivine Hammer\nStrikes all enemies nearby for [Burning Crusade: [(144% of Attack Power)% * 1.05] Radiant / (144% of Attack Power)% Holy] damage every 2 sec. Deals reduced damage beyond 8 targets.",
      "pvp_tooltip": "Divine Toll summons Divine Hammers that spin around you for 8 sec.\nDivine Hammer\nStrikes all enemies nearby for [Burning Crusade: [(144% of Attack Power)% * 1.05] Radiant / (144% of Attack Power)% Holy] damage every 2 sec. Deals reduced damage beyond 8 targets.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 432929,
          "source_spell_id": 198137,
          "effect_index": 1,
          "effect_text": "School Damage (Holy) (AP mod: 1.44 )",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.85,
          "final_pvp_multiplier": 0.85,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            432929,
            198034,
            198137
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "trigger_spell"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079573,
              "amount_kind": "direct",
              "value_pct": -15.0,
              "factor": 0.85,
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
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Morning Star",
      "spell_id": 431482,
      "node_id": 95073,
      "entry_id": 117670,
      "definition_id": 122682,
      "tree_type": "hero",
      "hero_tree": "Herald of the Sun",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Herald of the Sun",
        "subtree_id": 50,
        "node_id": 95073,
        "node_name": "Morning Star / Gleaming Rays",
        "node_type": "choice",
        "pos_x": 8100,
        "pos_y": 1800,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95099
        ],
        "next": [
          95098
        ],
        "entry_id": 117670,
        "entry_max_ranks": 1,
        "definition_id": 122682,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Morning Star",
        "spell_id": 431482,
        "visible_spell_id": null,
        "icon": "spell_holy_persecution",
        "icon_candidates": [
          "spell_holy_persecution"
        ]
      },
      "pve_tooltip": "Every 5.0 sec, your next Dawnlight's damage or healing is increased by 5%, stacking up to 10 times.\nMorning Star stacks twice as fast while out of combat.",
      "pvp_tooltip": "Every 5.0 sec, your next Dawnlight's damage or healing is increased by 5%, stacking up to 10 times.\nMorning Star stacks twice as fast while out of combat.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Gleaming Rays",
      "spell_id": 431480,
      "node_id": 95073,
      "entry_id": 117778,
      "definition_id": 122790,
      "tree_type": "hero",
      "hero_tree": "Herald of the Sun",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Herald of the Sun",
        "subtree_id": 50,
        "node_id": 95073,
        "node_name": "Morning Star / Gleaming Rays",
        "node_type": "choice",
        "pos_x": 8100,
        "pos_y": 1800,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95099
        ],
        "next": [
          95098
        ],
        "entry_id": 117778,
        "entry_max_ranks": 1,
        "definition_id": 122790,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Gleaming Rays",
        "spell_id": 431480,
        "visible_spell_id": null,
        "icon": "spell_priest_power_word",
        "icon_candidates": [
          "spell_priest_power_word",
          "spell_priest_power-word"
        ]
      },
      "pve_tooltip": "Your Holy Power spenders deal 3% additional damage and healing.",
      "pvp_tooltip": "Your Holy Power spenders deal 3% additional damage and healing.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Eternal Flame",
      "spell_id": 156322,
      "node_id": 95095,
      "entry_id": 117692,
      "definition_id": 122704,
      "tree_type": "hero",
      "hero_tree": "Herald of the Sun",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Herald of the Sun",
        "subtree_id": 50,
        "node_id": 95095,
        "node_name": "Eternal Flame",
        "node_type": "single",
        "pos_x": 8700,
        "pos_y": 1800,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95099
        ],
        "next": [
          95071
        ],
        "entry_id": 117692,
        "entry_max_ranks": 1,
        "definition_id": 122704,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Eternal Flame",
        "spell_id": 156322,
        "visible_spell_id": null,
        "icon": "inv_torch_thrown",
        "icon_candidates": [
          "inv_torch_thrown"
        ]
      },
      "pve_tooltip": "3 Holy Power / 0.6% of base mana\n40 yd range\nInstant\nHeals an ally for (378% of Spell Power) and an additional (109.44% of Spell Power) over 16 sec.\nHealing increased by 35% when cast on self.",
      "pvp_tooltip": "3 Holy Power / 0.6% of base mana\n40 yd range\nInstant\nHeals an ally for (302.4% of Spell Power) and an additional (87.552% of Spell Power) over 16 sec.\nHealing increased by 21% when cast on self.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 112,
          "end": 118,
          "old_token": "109.44",
          "new_token": "87.552",
          "kind": "spell_power_coefficient",
          "effect_indexes": [
            1
          ]
        },
        {
          "start": 72,
          "end": 75,
          "old_token": "378",
          "new_token": "302.4",
          "kind": "spell_power_coefficient",
          "effect_indexes": [
            2
          ]
        },
        {
          "start": 170,
          "end": 172,
          "old_token": "35",
          "new_token": "21",
          "kind": "percent_value",
          "effect_indexes": [
            4
          ]
        }
      ],
      "diagnostics": [
        {
          "effect_indexes": [
            3
          ],
          "status": "OTHER_SPEC_BRANCH",
          "kind": "ordinary_value",
          "old": 25.0,
          "new": 15.0,
          "full_tooltip_match_count": 1
        },
        {
          "effect_indexes": [
            2
          ],
          "status": "APPLIED",
          "kind": "spell_power_coefficient",
          "old": "378",
          "new": "302.4"
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "spell_power_coefficient",
          "old": "109.44",
          "new": "87.552"
        },
        {
          "effect_indexes": [
            4
          ],
          "status": "APPLIED",
          "kind": "percent_value",
          "old": "35",
          "new": "21"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 156322,
          "source_spell_id": 156322,
          "effect_index": 1,
          "effect_text": "Apply Aura: Periodic Heal",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "periodic",
          "aura_factor": 0.8,
          "final_pvp_multiplier": 0.8,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1346384,
              "amount_kind": "periodic",
              "value_pct": -20.0,
              "factor": 0.8,
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
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 156322,
          "source_spell_id": 156322,
          "effect_index": 2,
          "effect_text": "Heal (SP mod: 3.78)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.8,
          "final_pvp_multiplier": 0.8,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1346383,
              "amount_kind": "direct",
              "value_pct": -20.0,
              "factor": 0.8,
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
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 156322,
          "source_spell_id": 156322,
          "effect_index": 3,
          "effect_text": "Dummy",
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
          "talent_spell_id": 156322,
          "source_spell_id": 156322,
          "effect_index": 4,
          "effect_text": "Dummy",
          "base_value": 35.0,
          "spell_pvp_multiplier": 0.6,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.6,
          "final_pvp_value": 21.0,
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
      "render_effect_count": 4,
      "rank_tooltips": []
    },
    {
      "talent_name": "Luminosity",
      "spell_id": 431402,
      "node_id": 95080,
      "entry_id": 117677,
      "definition_id": 122689,
      "tree_type": "hero",
      "hero_tree": "Herald of the Sun",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Herald of the Sun",
        "subtree_id": 50,
        "node_id": 95080,
        "node_name": "Luminosity",
        "node_type": "single",
        "pos_x": 9300,
        "pos_y": 1800,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95099
        ],
        "next": [
          95072
        ],
        "entry_id": 117677,
        "entry_max_ranks": 1,
        "definition_id": 122689,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Luminosity",
        "spell_id": 431402,
        "visible_spell_id": null,
        "icon": "inv_qirajidol_sun",
        "icon_candidates": [
          "inv_qirajidol_sun"
        ]
      },
      "pve_tooltip": "Critical Strike chance of Hammer of Wrath and Divine Storm increased by 10%.",
      "pvp_tooltip": "Critical Strike chance of Hammer of Wrath and Divine Storm increased by 10%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Endless Gleam",
      "spell_id": 1263787,
      "node_id": 109748,
      "entry_id": 136006,
      "definition_id": 140761,
      "tree_type": "hero",
      "hero_tree": "Herald of the Sun",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Herald of the Sun",
        "subtree_id": 50,
        "node_id": 109748,
        "node_name": "Endless Gleam",
        "node_type": "single",
        "pos_x": 9900,
        "pos_y": 1800,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95099
        ],
        "next": [
          109750
        ],
        "entry_id": 136006,
        "entry_max_ranks": 1,
        "definition_id": 140761,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Endless Gleam",
        "spell_id": 1263787,
        "visible_spell_id": null,
        "icon": "spell_paladin_inquisition",
        "icon_candidates": [
          "spell_paladin_inquisition"
        ]
      },
      "pve_tooltip": "Dawnlight's duration is increased by 0.3 sec whenever struck by Divine Storm or Templar's Verdict.\nWhen 2 Dawnlights are struck by Divine Storm, their durations are extended by an additional 0.5 sec.",
      "pvp_tooltip": "Dawnlight's duration is increased by 0.3 sec whenever struck by Divine Storm or Templar's Verdict.\nWhen 2 Dawnlights are struck by Divine Storm, their durations are extended by an additional 0.5 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Sacrosanct Crusade",
      "spell_id": 431730,
      "node_id": 95179,
      "entry_id": 117812,
      "definition_id": 122824,
      "tree_type": "hero",
      "hero_tree": "Templar",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Templar",
        "subtree_id": 48,
        "node_id": 95179,
        "node_name": "Sacrosanct Crusade",
        "node_type": "single",
        "pos_x": 15300,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95183
        ],
        "next": [
          95185
        ],
        "entry_id": 117812,
        "entry_max_ranks": 1,
        "definition_id": 122824,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Sacrosanct Crusade",
        "spell_id": 431730,
        "visible_spell_id": null,
        "icon": "inv_plate_raidpaladinprimalist_d_01_cape",
        "icon_candidates": [
          "inv_plate_raidpaladinprimalist_d_01_cape"
        ]
      },
      "pve_tooltip": "Wake of Ashes surrounds you with a Holy barrier for 10% of your maximum health.\nHammer of Light heals you for 5% of your maximum health, increased by 1% for each additional target hit. Any overhealing done with this effect gets converted into a Holy barrier instead.\n(5s cooldown)",
      "pvp_tooltip": "Wake of Ashes surrounds you with a Holy barrier for 10% of your maximum health.\nHammer of Light heals you for 5% of your maximum health, increased by 1% for each additional target hit. Any overhealing done with this effect gets converted into a Holy barrier instead.\n(5s cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Higher Calling",
      "spell_id": 431687,
      "node_id": 95178,
      "entry_id": 117811,
      "definition_id": 122823,
      "tree_type": "hero",
      "hero_tree": "Templar",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Templar",
        "subtree_id": 48,
        "node_id": 95178,
        "node_name": "Higher Calling",
        "node_type": "single",
        "pos_x": 15900,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95187
        ],
        "next": [
          95184
        ],
        "entry_id": 117811,
        "entry_max_ranks": 1,
        "definition_id": 122823,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Higher Calling",
        "spell_id": 431687,
        "visible_spell_id": null,
        "icon": "ability_paladin_toweroflight",
        "icon_candidates": [
          "ability_paladin_toweroflight"
        ]
      },
      "pve_tooltip": "Crusader Strike, Hammer of Wrath and Blade of Justice extend the duration of Shake the Heavens by 1 sec.",
      "pvp_tooltip": "Crusader Strike, Hammer of Wrath and Blade of Justice extend the duration of Shake the Heavens by 1 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Bonds of Fellowship",
      "spell_id": 432992,
      "node_id": 95181,
      "entry_id": 117814,
      "definition_id": 122826,
      "tree_type": "hero",
      "hero_tree": "Templar",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Templar",
        "subtree_id": 48,
        "node_id": 95181,
        "node_name": "Bonds of Fellowship / Unrelenting Charger",
        "node_type": "choice",
        "pos_x": 16500,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95177
        ],
        "next": [
          95186
        ],
        "entry_id": 117814,
        "entry_max_ranks": 1,
        "definition_id": 122826,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Bonds of Fellowship",
        "spell_id": 432992,
        "visible_spell_id": null,
        "icon": "spell_holy_crusade",
        "icon_candidates": [
          "spell_holy_crusade"
        ]
      },
      "pve_tooltip": "You receive 20% less damage from Blessing of Sacrifice and each time its target takes damage, you gain 4% movement speed up to a maximum of 40%.",
      "pvp_tooltip": "You receive 20% less damage from Blessing of Sacrifice and each time its target takes damage, you gain 4% movement speed up to a maximum of 40%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Unrelenting Charger",
      "spell_id": 432990,
      "node_id": 95181,
      "entry_id": 117858,
      "definition_id": 122870,
      "tree_type": "hero",
      "hero_tree": "Templar",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Templar",
        "subtree_id": 48,
        "node_id": 95181,
        "node_name": "Bonds of Fellowship / Unrelenting Charger",
        "node_type": "choice",
        "pos_x": 16500,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95177
        ],
        "next": [
          95186
        ],
        "entry_id": 117858,
        "entry_max_ranks": 1,
        "definition_id": 122870,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Unrelenting Charger",
        "spell_id": 432990,
        "visible_spell_id": null,
        "icon": "ability_mount_mawhorsespikes_yellow",
        "icon_candidates": [
          "ability_mount_mawhorsespikes_yellow"
        ]
      },
      "pve_tooltip": "Divine Steed lasts 2 sec longer and increases your movement speed by an additional 30% for the first 3 sec.",
      "pvp_tooltip": "Divine Steed lasts 2 sec longer and increases your movement speed by an additional 30% for the first 3 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Light's Judicator",
      "spell_id": 1261525,
      "node_id": 109746,
      "entry_id": 136004,
      "definition_id": 140759,
      "tree_type": "hero",
      "hero_tree": "Templar",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Templar",
        "subtree_id": 48,
        "node_id": 109746,
        "node_name": "Light's Judicator",
        "node_type": "single",
        "pos_x": 17100,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109747
        ],
        "next": [
          109745
        ],
        "entry_id": 136004,
        "entry_max_ranks": 1,
        "definition_id": 140759,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Light's Judicator",
        "spell_id": 1261525,
        "visible_spell_id": null,
        "icon": "ability_paladin_judgementofthepure",
        "icon_candidates": [
          "ability_paladin_judgementofthepure"
        ]
      },
      "pve_tooltip": "Empyrean Hammer deals 20% increased critical strike damage and its critical strikes have 50% chance to grant an additional stack of Light's Deliverance.\n(Proc chance: 50%)",
      "pvp_tooltip": "Empyrean Hammer deals 6.6% increased critical strike damage and its critical strikes have 50% chance to grant an additional stack of Light's Deliverance.\n(Proc chance: 50%)",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 22,
          "end": 24,
          "old_token": "20",
          "new_token": "6.6",
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
          "new": "6.6"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 1261525,
          "source_spell_id": 1261525,
          "effect_index": 1,
          "effect_text": "Apply Aura: Add Modifier - % (Label): Modifies Critical Strike Damage (15)",
          "base_value": 20.0,
          "spell_pvp_multiplier": 0.33,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.33,
          "final_pvp_value": 6.6000000000000005,
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
      "talent_name": "Illumine",
      "spell_id": 431423,
      "node_id": 95098,
      "entry_id": 117695,
      "definition_id": 122707,
      "tree_type": "hero",
      "hero_tree": "Herald of the Sun",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Herald of the Sun",
        "subtree_id": 50,
        "node_id": 95098,
        "node_name": "Illumine / Will of the Dawn",
        "node_type": "choice",
        "pos_x": 8100,
        "pos_y": 2400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95073
        ],
        "next": [
          95069
        ],
        "entry_id": 117695,
        "entry_max_ranks": 1,
        "definition_id": 122707,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Illumine",
        "spell_id": 431423,
        "visible_spell_id": null,
        "icon": "spell_holy_divineillumination",
        "icon_candidates": [
          "spell_holy_divineillumination"
        ]
      },
      "pve_tooltip": "Dawnlight reduces the movement speed of enemies by 50% and increases the movement speed of allies by 20%.",
      "pvp_tooltip": "Dawnlight reduces the movement speed of enemies by 30% and increases the movement speed of allies by 20%.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 51,
          "end": 53,
          "old_token": "50",
          "new_token": "30",
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
          "old": "50",
          "new": "30"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 431423,
          "source_spell_id": 431380,
          "effect_index": 3,
          "effect_text": "Apply Aura (6) | Decrease Movement Speed% (33)",
          "base_value": -50.0,
          "spell_pvp_multiplier": 0.6,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.6,
          "final_pvp_value": -30.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            431423,
            431380
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
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 431423,
          "source_spell_id": 431380,
          "effect_index": 1,
          "effect_text": "Apply Aura (6) | Periodic Damage (3): holyfire every 2 seconds (SP mod: 0.6375)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "periodic",
          "aura_factor": 1.105,
          "final_pvp_multiplier": 1.105,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            431423,
            431380
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079574,
              "amount_kind": "periodic",
              "value_pct": -15.0,
              "factor": 0.85,
              "label_id": null,
              "build": "12.1.0.69933"
            },
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1315844,
              "amount_kind": "periodic",
              "value_pct": 30.0,
              "factor": 1.3,
              "label_id": 6251,
              "build": "12.1.0.69933"
            }
          ],
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
      "talent_name": "Will of the Dawn",
      "spell_id": 431406,
      "node_id": 95098,
      "entry_id": 117777,
      "definition_id": 122789,
      "tree_type": "hero",
      "hero_tree": "Herald of the Sun",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Herald of the Sun",
        "subtree_id": 50,
        "node_id": 95098,
        "node_name": "Illumine / Will of the Dawn",
        "node_type": "choice",
        "pos_x": 8100,
        "pos_y": 2400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95073
        ],
        "next": [
          95069
        ],
        "entry_id": 117777,
        "entry_max_ranks": 1,
        "definition_id": 122789,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Will of the Dawn",
        "spell_id": 431406,
        "visible_spell_id": null,
        "icon": "spell_holy_divineprovidence",
        "icon_candidates": [
          "spell_holy_divineprovidence"
        ]
      },
      "pve_tooltip": "Movement speed increased by 5% while above 80% health.\nWhen your health is brought below 35%, your movement speed is increased by 40% for 5 sec. Cannot occur more than once every 1 min.",
      "pvp_tooltip": "Movement speed increased by 5% while above 80% health.\nWhen your health is brought below 35%, your movement speed is increased by 40% for 5 sec. Cannot occur more than once every 1 min.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Blessing of An'she",
      "spell_id": 445200,
      "node_id": 95071,
      "entry_id": 117668,
      "definition_id": 122680,
      "tree_type": "hero",
      "hero_tree": "Herald of the Sun",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Herald of the Sun",
        "subtree_id": 50,
        "node_id": 95071,
        "node_name": "Blessing of An'she / Lingering Radiance",
        "node_type": "choice",
        "pos_x": 8700,
        "pos_y": 2400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95095
        ],
        "next": [
          95094
        ],
        "entry_id": 117668,
        "entry_max_ranks": 1,
        "definition_id": 122680,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Blessing of An'she",
        "spell_id": 445200,
        "visible_spell_id": null,
        "icon": "inv_ability_holyfire_orb",
        "icon_candidates": [
          "inv_ability_holyfire_orb"
        ]
      },
      "pve_tooltip": "Approximately 2 procs per minute\nYour damage and healing over time effects have a chance to increase the damage of your next Judgment by 50%.",
      "pvp_tooltip": "Approximately 2 procs per minute\nYour damage and healing over time effects have a chance to increase the damage of your next Judgment by 50%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Lingering Radiance",
      "spell_id": 431407,
      "node_id": 95071,
      "entry_id": 117779,
      "definition_id": 122791,
      "tree_type": "hero",
      "hero_tree": "Herald of the Sun",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Herald of the Sun",
        "subtree_id": 50,
        "node_id": 95071,
        "node_name": "Blessing of An'she / Lingering Radiance",
        "node_type": "choice",
        "pos_x": 8700,
        "pos_y": 2400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95095
        ],
        "next": [
          95094
        ],
        "entry_id": 117779,
        "entry_max_ranks": 1,
        "definition_id": 122791,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Lingering Radiance",
        "spell_id": 431407,
        "visible_spell_id": null,
        "icon": "spell_holy_mindvision",
        "icon_candidates": [
          "spell_holy_mindvision"
        ]
      },
      "pve_tooltip": "Dawnlight leaves an Eternal Flame for 6 sec on allies or a Greater Judgment on enemies when it expires or is extended.",
      "pvp_tooltip": "Dawnlight leaves an Eternal Flame for 6 sec on allies or a Greater Judgment on enemies when it expires or is extended.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Sun Sear",
      "spell_id": 431413,
      "node_id": 95072,
      "entry_id": 117669,
      "definition_id": 122681,
      "tree_type": "hero",
      "hero_tree": "Herald of the Sun",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Herald of the Sun",
        "subtree_id": 50,
        "node_id": 95072,
        "node_name": "Sun Sear",
        "node_type": "single",
        "pos_x": 9300,
        "pos_y": 2400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95080
        ],
        "next": [
          95086
        ],
        "entry_id": 117669,
        "entry_max_ranks": 1,
        "definition_id": 122681,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Sun Sear",
        "spell_id": 431413,
        "visible_spell_id": null,
        "icon": "spell_priest_burningwill",
        "icon_candidates": [
          "spell_priest_burningwill"
        ]
      },
      "pve_tooltip": "Hammer of Wrath and Divine Storm critical strikes cause the target to burn for an additional (48% of Spell Power) Radiant damage over 4 sec.",
      "pvp_tooltip": "Hammer of Wrath and Divine Storm critical strikes cause the target to burn for an additional (48% of Spell Power) Radiant damage over 4 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 431413,
          "source_spell_id": 431414,
          "effect_index": 1,
          "effect_text": "Apply Aura (6) | Periodic Damage (3): holyfire every 1 seconds (SP mod: 0.12)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "periodic",
          "aura_factor": 0.85,
          "final_pvp_multiplier": 0.85,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            431413,
            431414
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079574,
              "amount_kind": "periodic",
              "value_pct": -15.0,
              "factor": 0.85,
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
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Solar Grace",
      "spell_id": 431404,
      "node_id": 109750,
      "entry_id": 136008,
      "definition_id": 140763,
      "tree_type": "hero",
      "hero_tree": "Herald of the Sun",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Herald of the Sun",
        "subtree_id": 50,
        "node_id": 109750,
        "node_name": "Solar Grace",
        "node_type": "single",
        "pos_x": 9900,
        "pos_y": 2400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109748
        ],
        "next": [
          109749
        ],
        "entry_id": 136008,
        "entry_max_ranks": 1,
        "definition_id": 140763,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Solar Grace",
        "spell_id": 431404,
        "visible_spell_id": null,
        "icon": "ability_malkorok_blightofyshaarj_yellow",
        "icon_candidates": [
          "ability_malkorok_blightofyshaarj_yellow"
        ]
      },
      "pve_tooltip": "Haste is increased by 2%.",
      "pvp_tooltip": "Haste is increased by 2%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Endless Wrath",
      "spell_id": 432615,
      "node_id": 95185,
      "entry_id": 117820,
      "definition_id": 122832,
      "tree_type": "hero",
      "hero_tree": "Templar",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Templar",
        "subtree_id": 48,
        "node_id": 95185,
        "node_name": "Endless Wrath / Sanctification",
        "node_type": "choice",
        "pos_x": 15290,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95179
        ],
        "next": [
          95182
        ],
        "entry_id": 117820,
        "entry_max_ranks": 1,
        "definition_id": 122832,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Endless Wrath",
        "spell_id": 432615,
        "visible_spell_id": null,
        "icon": "spell_holy_divinepurpose",
        "icon_candidates": [
          "spell_holy_divinepurpose"
        ]
      },
      "pve_tooltip": "Empyrean Hammer has a 10% increased chance to critically strike.",
      "pvp_tooltip": "Empyrean Hammer has a 10% increased chance to critically strike.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Sanctification",
      "spell_id": 432977,
      "node_id": 95185,
      "entry_id": 117819,
      "definition_id": 122831,
      "tree_type": "hero",
      "hero_tree": "Templar",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Templar",
        "subtree_id": 48,
        "node_id": 95185,
        "node_name": "Endless Wrath / Sanctification",
        "node_type": "choice",
        "pos_x": 15290,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95179
        ],
        "next": [
          95182
        ],
        "entry_id": 117819,
        "entry_max_ranks": 1,
        "definition_id": 122831,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Sanctification",
        "spell_id": 432977,
        "visible_spell_id": null,
        "icon": "ability_paladin_blessedhands",
        "icon_candidates": [
          "ability_paladin_blessedhands"
        ]
      },
      "pve_tooltip": "Casting Judgment increases the damage of Empyrean Hammer by 5% for 10 sec.\nMultiple applications may overlap.",
      "pvp_tooltip": "Casting Judgment increases the damage of Empyrean Hammer by 5% for 10 sec.\nMultiple applications may overlap.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Hammerfall",
      "spell_id": 432463,
      "node_id": 95184,
      "entry_id": 117818,
      "definition_id": 122830,
      "tree_type": "hero",
      "hero_tree": "Templar",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Templar",
        "subtree_id": 48,
        "node_id": 95184,
        "node_name": "Hammerfall",
        "node_type": "single",
        "pos_x": 15900,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95178
        ],
        "next": [
          95182
        ],
        "entry_id": 117818,
        "entry_max_ranks": 1,
        "definition_id": 122830,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Hammerfall",
        "spell_id": 432463,
        "visible_spell_id": null,
        "icon": "ability_paladin_enlightenedjudgements",
        "icon_candidates": [
          "ability_paladin_enlightenedjudgements"
        ]
      },
      "pve_tooltip": "and Divine Storm calls down an Empyrean Hammer on a nearby enemy.\nWhile Shake the Heavens is active, this effect calls down an additional Empyrean Hammer.",
      "pvp_tooltip": "and Divine Storm calls down an Empyrean Hammer on a nearby enemy.\nWhile Shake the Heavens is active, this effect calls down an additional Empyrean Hammer.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Undisputed Ruling",
      "spell_id": 432626,
      "node_id": 95186,
      "entry_id": 117822,
      "definition_id": 122834,
      "tree_type": "hero",
      "hero_tree": "Templar",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Templar",
        "subtree_id": 48,
        "node_id": 95186,
        "node_name": "Undisputed Ruling",
        "node_type": "single",
        "pos_x": 16500,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95181
        ],
        "next": [
          95182
        ],
        "entry_id": 117822,
        "entry_max_ranks": 1,
        "definition_id": 122834,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Undisputed Ruling",
        "spell_id": 432626,
        "visible_spell_id": null,
        "icon": "spell_holy_righteousfury",
        "icon_candidates": [
          "spell_holy_righteousfury"
        ]
      },
      "pve_tooltip": "Hammer of Light applies Judgment to its targets, and increases your Haste by 12% for 6 sec.",
      "pvp_tooltip": "Hammer of Light applies Judgment to its targets, and increases your Haste by 12% for 6 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Divine Exaction",
      "spell_id": 1260429,
      "node_id": 109745,
      "entry_id": 136003,
      "definition_id": 140758,
      "tree_type": "hero",
      "hero_tree": "Templar",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Templar",
        "subtree_id": 48,
        "node_id": 109745,
        "node_name": "Divine Exaction / Seal of the Templar",
        "node_type": "choice",
        "pos_x": 17100,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109746
        ],
        "next": [
          95182
        ],
        "entry_id": 136003,
        "entry_max_ranks": 1,
        "definition_id": 140758,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Divine Exaction",
        "spell_id": 1260429,
        "visible_spell_id": null,
        "icon": "inv_ability_paladin_divinetoll",
        "icon_candidates": [
          "inv_ability_paladin_divinetoll"
        ]
      },
      "pve_tooltip": "Divine Toll casts 2 additional times on your target at 100% effectiveness.",
      "pvp_tooltip": "Divine Toll casts 2 additional times on your target at 75% effectiveness.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 55,
          "end": 58,
          "old_token": "100",
          "new_token": "75",
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
          "old": "100",
          "new": "75"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 1260429,
          "source_spell_id": 1260429,
          "effect_index": 2,
          "effect_text": "Apply Aura: Dummy",
          "base_value": 100.0,
          "spell_pvp_multiplier": 0.75,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.75,
          "final_pvp_value": 75.0,
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
          "talent_spell_id": 1260429,
          "source_spell_id": 198137,
          "effect_index": 1,
          "effect_text": "School Damage (Holy) (AP mod: 1.44 )",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.85,
          "final_pvp_multiplier": 0.85,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1260429,
            198137
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079573,
              "amount_kind": "direct",
              "value_pct": -15.0,
              "factor": 0.85,
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
      "talent_name": "Seal of the Templar",
      "spell_id": 1263252,
      "node_id": 109745,
      "entry_id": 136184,
      "definition_id": 140957,
      "tree_type": "hero",
      "hero_tree": "Templar",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Templar",
        "subtree_id": 48,
        "node_id": 109745,
        "node_name": "Divine Exaction / Seal of the Templar",
        "node_type": "choice",
        "pos_x": 17100,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109746
        ],
        "next": [
          95182
        ],
        "entry_id": 136184,
        "entry_max_ranks": 1,
        "definition_id": 140957,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Seal of the Templar",
        "spell_id": 1263252,
        "visible_spell_id": null,
        "icon": "spell_paladin_templarsverdict",
        "icon_candidates": [
          "spell_paladin_templarsverdict"
        ]
      },
      "pve_tooltip": "damage increased by 25%.",
      "pvp_tooltip": "damage increased by 35%.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 20,
          "end": 22,
          "old_token": "25",
          "new_token": "35",
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
          "new": "35"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 1263252,
          "source_spell_id": 1263252,
          "effect_index": 1,
          "effect_text": "Apply Aura: Modifies Damage/Healing Done",
          "base_value": 25.0,
          "spell_pvp_multiplier": 1.4,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 1.4,
          "final_pvp_value": 35.0,
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
      "talent_name": "Aurora",
      "spell_id": 439760,
      "node_id": 95069,
      "entry_id": 117666,
      "definition_id": 122678,
      "tree_type": "hero",
      "hero_tree": "Herald of the Sun",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Herald of the Sun",
        "subtree_id": 50,
        "node_id": 95069,
        "node_name": "Aurora",
        "node_type": "single",
        "pos_x": 8100,
        "pos_y": 3000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95098
        ],
        "next": [
          95105
        ],
        "entry_id": 117666,
        "entry_max_ranks": 1,
        "definition_id": 122678,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Aurora",
        "spell_id": 439760,
        "visible_spell_id": null,
        "icon": "spell_holy_rune",
        "icon_candidates": [
          "spell_holy_rune"
        ]
      },
      "pve_tooltip": "After you cast Wake of Ashes, gain Divine Purpose.\nDivine Purpose\nYour next Holy Power spending ability is free and deals 10% increased damage and healing.\n(2s cooldown)",
      "pvp_tooltip": "After you cast Wake of Ashes, gain Divine Purpose.\nDivine Purpose\nYour next Holy Power spending ability is free and deals 10% increased damage and healing.\n(2s cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Walk Into Light",
      "spell_id": 1263782,
      "node_id": 95094,
      "entry_id": 117691,
      "definition_id": 122703,
      "tree_type": "hero",
      "hero_tree": "Herald of the Sun",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Herald of the Sun",
        "subtree_id": 50,
        "node_id": 95094,
        "node_name": "Walk Into Light",
        "node_type": "single",
        "pos_x": 8700,
        "pos_y": 3000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95071
        ],
        "next": [
          95105
        ],
        "entry_id": 117691,
        "entry_max_ranks": 1,
        "definition_id": 122703,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Walk Into Light",
        "spell_id": 1263782,
        "visible_spell_id": null,
        "icon": "ability_paladin_sheathoflight",
        "icon_candidates": [
          "ability_paladin_sheathoflight"
        ]
      },
      "pve_tooltip": "You have a 100% chance to gain Blessing of An'she and generate 2 Holy Power after casting Avenging Wrath.\nDuring Avenging Wrath, Hammer of Wrath casts Blade of Justice at 100% effectiveness.\n(1s cooldown)",
      "pvp_tooltip": "You have a 100% chance to gain Blessing of An'she and generate 2 Holy Power after casting Avenging Wrath.\nDuring Avenging Wrath, Hammer of Wrath casts Blade of Justice at 100% effectiveness.\n(1s cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Second Sunrise",
      "spell_id": 431474,
      "node_id": 95086,
      "entry_id": 117683,
      "definition_id": 122695,
      "tree_type": "hero",
      "hero_tree": "Herald of the Sun",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Herald of the Sun",
        "subtree_id": 50,
        "node_id": 95086,
        "node_name": "Second Sunrise",
        "node_type": "single",
        "pos_x": 9300,
        "pos_y": 3000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95072
        ],
        "next": [
          95105
        ],
        "entry_id": 117683,
        "entry_max_ranks": 1,
        "definition_id": 122695,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Second Sunrise",
        "spell_id": 431474,
        "visible_spell_id": null,
        "icon": "ability_priest_halo",
        "icon_candidates": [
          "ability_priest_halo"
        ]
      },
      "pve_tooltip": "Divine Storm and Hammer of Wrath have a 15% chance to cast again at 30% effectiveness.",
      "pvp_tooltip": "Divine Storm and Hammer of Wrath have a 15% chance to cast again at 30% effectiveness.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Born in Sunlight",
      "spell_id": 1263920,
      "node_id": 109749,
      "entry_id": 136007,
      "definition_id": 140762,
      "tree_type": "hero",
      "hero_tree": "Herald of the Sun",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Herald of the Sun",
        "subtree_id": 50,
        "node_id": 109749,
        "node_name": "Born in Sunlight",
        "node_type": "single",
        "pos_x": 9900,
        "pos_y": 3000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109750
        ],
        "next": [
          95105
        ],
        "entry_id": 136007,
        "entry_max_ranks": 1,
        "definition_id": 140762,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Born in Sunlight",
        "spell_id": 1263920,
        "visible_spell_id": null,
        "icon": "spell_paladin_lightofdawn",
        "icon_candidates": [
          "spell_paladin_lightofdawn"
        ]
      },
      "pve_tooltip": "Dawnlight's critical strike chance is increased by 15% during Avenging Wrath.\n(1s cooldown)",
      "pvp_tooltip": "Dawnlight's critical strike chance is increased by 15% during Avenging Wrath.\n(1s cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Light's Deliverance",
      "spell_id": 425518,
      "node_id": 95182,
      "entry_id": 117815,
      "definition_id": 122827,
      "tree_type": "hero",
      "hero_tree": "Templar",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Templar",
        "subtree_id": 48,
        "node_id": 95182,
        "node_name": "Light's Deliverance",
        "node_type": "single",
        "pos_x": 16200,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95184,
          95185,
          95186,
          109745
        ],
        "next": [],
        "entry_id": 117815,
        "entry_max_ranks": 1,
        "definition_id": 122827,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Light's Deliverance",
        "spell_id": 425518,
        "visible_spell_id": null,
        "icon": "inv_glove_plate_raidpaladinmythic_q_01",
        "icon_candidates": [
          "inv_glove_plate_raidpaladinmythic_q_01"
        ]
      },
      "pve_tooltip": "You gain a stack of Light's Deliverance when you call down an Empyrean Hammer.\nWhile Wake of Ashes and Hammer of Light are unavailable, you consume 60 stacks of Light's Deliverance, empowering yourself to cast Hammer of Light an additional time for free.",
      "pvp_tooltip": "You gain a stack of Light's Deliverance when you call down an Empyrean Hammer.\nWhile Wake of Ashes and Hammer of Light are unavailable, you consume 60 stacks of Light's Deliverance, empowering yourself to cast Hammer of Light an additional time for free.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Sun's Avatar",
      "spell_id": 431425,
      "node_id": 95105,
      "entry_id": 117702,
      "definition_id": 122714,
      "tree_type": "hero",
      "hero_tree": "Herald of the Sun",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Paladin",
        "class_id": 2,
        "spec_name": "Retribution",
        "spec_id": 70,
        "trait_tree_id": 790,
        "tree_type": "hero",
        "hero_tree": "Herald of the Sun",
        "subtree_id": 50,
        "node_id": 95105,
        "node_name": "Sun's Avatar",
        "node_type": "single",
        "pos_x": 9000,
        "pos_y": 3600,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95094,
          95069,
          95086,
          109749
        ],
        "next": [],
        "entry_id": 117702,
        "entry_max_ranks": 1,
        "definition_id": 122714,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Sun's Avatar",
        "spell_id": 431425,
        "visible_spell_id": null,
        "icon": "ability_paladin_holyavenger",
        "icon_candidates": [
          "ability_paladin_holyavenger"
        ]
      },
      "pve_tooltip": "You link to your Dawnlights within 30 yds, causing (21.6% of Spell Power) Radiant damage to enemies or (37.26% of Spell Power) healing to allies that pass through the beams, reduced beyond 8 targets.",
      "pvp_tooltip": "You link to your Dawnlights within 30 yds, causing (18.36% of Spell Power) Radiant damage to enemies or (37.26% of Spell Power) healing to allies that pass through the beams, reduced beyond 8 targets.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 52,
          "end": 56,
          "old_token": "21.6",
          "new_token": "18.36",
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
          "old": "21.6",
          "new": "18.36"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 431425,
          "source_spell_id": 431911,
          "effect_index": 1,
          "effect_text": "School Damage (2): holyfire | Attributes: Area Effects Use Target Radius (17) (SP mod: 0.216)",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.85,
          "final_pvp_multiplier": 0.85,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            431425,
            431911
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 412314,
              "game_effect_id": 1079573,
              "amount_kind": "direct",
              "value_pct": -15.0,
              "factor": 0.85,
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
      "render_effect_count": 1,
      "rank_tooltips": []
    }
  ],
  "fetch_errors": [],
  "serialization": {
    "version": 2,
    "spec_id": 70,
    "node_order": [
      81469,
      81470,
      81471,
      81474,
      81476,
      81477,
      81479,
      81481,
      81482,
      81483,
      81484,
      81485,
      81486,
      81487,
      81488,
      81489,
      81490,
      81491,
      81492,
      81493,
      81494,
      81495,
      81496,
      81497,
      81498,
      81499,
      81501,
      81502,
      81503,
      81504,
      81505,
      81506,
      81507,
      81508,
      81510,
      81512,
      81521,
      81523,
      81525,
      81526,
      81527,
      81532,
      81533,
      81534,
      81537,
      81541,
      81542,
      81543,
      81544,
      81545,
      81549,
      81554,
      81555,
      81556,
      81557,
      81558,
      81560,
      81561,
      81562,
      81564,
      81565,
      81566,
      81567,
      81568,
      81569,
      81570,
      81571,
      81573,
      81574,
      81575,
      81576,
      81578,
      81579,
      81580,
      81581,
      81583,
      81584,
      81585,
      81587,
      81588,
      81589,
      81590,
      81591,
      81592,
      81593,
      81594,
      81595,
      81597,
      81598,
      81600,
      81603,
      81604,
      81605,
      81607,
      81608,
      81609,
      81612,
      81613,
      81614,
      81615,
      81616,
      81617,
      81618,
      81621,
      81628,
      81630,
      81631,
      81632,
      90062,
      92220,
      92686,
      92689,
      92838,
      92839,
      92854,
      92860,
      92952,
      93008,
      93009,
      93010,
      93160,
      93161,
      93164,
      93165,
      93168,
      93173,
      93174,
      93180,
      93181,
      93187,
      93188,
      93189,
      93190,
      93191,
      93192,
      93357,
      93520,
      93521,
      93522,
      93523,
      93927,
      95069,
      95071,
      95072,
      95073,
      95080,
      95086,
      95094,
      95095,
      95098,
      95099,
      95105,
      95177,
      95178,
      95179,
      95180,
      95181,
      95182,
      95183,
      95184,
      95185,
      95186,
      95187,
      95228,
      95229,
      95230,
      95231,
      95232,
      95233,
      95234,
      95235,
      95236,
      95237,
      95238,
      99837,
      99838,
      99839,
      101927,
      101928,
      102502,
      103831,
      103850,
      103851,
      103852,
      103853,
      103854,
      103855,
      103856,
      103857,
      103858,
      103859,
      103860,
      103861,
      103862,
      103863,
      103864,
      103865,
      103866,
      103867,
      103868,
      103877,
      108034,
      108099,
      109368,
      109369,
      109370,
      109371,
      109372,
      109373,
      109374,
      109742,
      109743,
      109744,
      109745,
      109746,
      109747,
      109748,
      109749,
      109750,
      109867,
      109997,
      109998,
      109999,
      110006,
      110012,
      110091,
      110092,
      110093,
      110257,
      110417,
      110418,
      110419,
      110862
    ],
    "subtree_nodes": [
      {
        "id": 99837,
        "name": "Herald of the Sun / Templar",
        "type": "subtree",
        "posX": 9600,
        "posY": 600,
        "entryNode": true,
        "next": [],
        "prev": [],
        "entries": [
          {
            "id": 123360,
            "type": "subtree",
            "name": "Herald of the Sun",
            "traitSubTreeId": 50,
            "traitTreeId": 790,
            "atlasMemberName": "talents-heroclass-paladin-heraldofthesun",
            "nodes": [
              95099,
              95073,
              95095,
              95080,
              109748,
              95098,
              95071,
              95072,
              109750,
              95069,
              95094,
              95086,
              109749,
              95105
            ]
          },
          {
            "id": 123357,
            "type": "subtree",
            "name": "Templar",
            "traitSubTreeId": 48,
            "traitTreeId": 790,
            "atlasMemberName": "talents-heroclass-paladin-templar",
            "nodes": [
              95180,
              95183,
              95187,
              95177,
              109747,
              95179,
              95178,
              95181,
              109746,
              95185,
              95184,
              95186,
              109745,
              95182
            ]
          }
        ]
      }
    ]
  },
  "source_warnings": [],
  "official_hotfixes": {
    "source": "Blizzard official hotfixes",
    "source_url": "https://news.blizzard.com/en-us/article/24296142/hotfixes-september-24-2026",
    "latest_date": "2026-09-24",
    "snapshot_hash": "ae8eb24d25a2b59f9a16d1520f99e12a2dbac4cc2e602690934452f20ce02ab6",
    "applied": [
      {
        "talent_name": "Consecrated Ground",
        "spell_id": 204054,
        "text": "Consecrated Ground now reduces movement speed by 20% in PvP combat (was 50%).",
        "date": "2026-09-24"
      }
    ],
    "already_current": [
      {
        "talent_name": "Light's Guidance",
        "spell_id": 427445,
        "text": "Hammer of Light damage increased by 20%.",
        "date": "2026-09-22",
        "evidence": {
          "source": "historical_verified_snapshot",
          "field": "effective_player_value",
          "source_spell_id": 427453,
          "effect_index": 1,
          "old_value": 5.5577481336,
          "new_value": 6.669291379199999,
          "ratio": 1.1999988518515328,
          "baseline_commit": "dc80a9d44b8a4b34ccbbdec61b5910e7915de290"
        }
      }
    ],
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
  "slug": "paladin-retribution",
  "generated_at": "2026-09-25T13:54:40.141917+00:00",
  "validation": {
    "talents": 137,
    "changed_tooltips": 31,
    "talents_with_pvp_mechanics": 39,
    "unique_nodes": 116,
    "tree_build": "12.1.0.69933",
    "simc_build": "12.1.0.69933",
    "drustvar_builds": [
      "12.1.0.69933"
    ],
    "verification_status": "VERIFIED",
    "fetch_error_count": 0,
    "source_warning_count": 16,
    "unresolved_count": 0,
    "review_required_count": 0,
    "fetch_error_examples": [],
    "source_warning_examples": [
      {
        "source": "wowhead",
        "spell_id": 405350,
        "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=405350'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
      },
      {
        "source": "wowhead",
        "spell_id": 406647,
        "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=406647'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
      },
      {
        "source": "wowhead",
        "spell_id": 407480,
        "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=407480'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
      },
      {
        "source": "wowhead",
        "spell_id": 408383,
        "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=408383'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
      },
      {
        "source": "wowhead",
        "spell_id": 408385,
        "error": "HTTPStatusError: Client error '403 Forbidden' for url 'https://www.wowhead.com/spell=408385'\nFor more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
      }
    ],
    "unresolved_examples": [],
    "review_required_examples": []
  }
};
