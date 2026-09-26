window.WOW_PVP_DATA = {
  "class_name": "Hunter",
  "spec_name": "Survival",
  "tree_build": "12.1.0.69933",
  "simc_build": "12.1.0.69933",
  "drustvar_builds": [
    "12.1.0.69933"
  ],
  "talents": [
    {
      "talent_name": "Rejuvenating Wind",
      "spell_id": 385539,
      "node_id": 102381,
      "entry_id": 126444,
      "definition_id": 131270,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102381,
        "node_name": "Rejuvenating Wind",
        "node_type": "single",
        "pos_x": 3000,
        "pos_y": 1500,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [
          102401
        ],
        "entry_id": 126444,
        "entry_max_ranks": 1,
        "definition_id": 131270,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Rejuvenating Wind",
        "spell_id": 385539,
        "visible_spell_id": null,
        "icon": "ability_druid_galewinds",
        "icon_candidates": [
          "ability_druid_galewinds"
        ]
      },
      "pve_tooltip": "Exhilaration now also heals you for an additional 12.0% of your maximum health over 8 sec.",
      "pvp_tooltip": "Exhilaration now also heals you for an additional 12.0% of your maximum health over 8 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Survival of the Fittest",
      "spell_id": 264735,
      "node_id": 102422,
      "entry_id": 126488,
      "definition_id": 131314,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102422,
        "node_name": "Survival of the Fittest",
        "node_type": "single",
        "pos_x": 4200,
        "pos_y": 1500,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": true,
        "free_node": true,
        "prev": [],
        "next": [
          102406
        ],
        "entry_id": 126488,
        "entry_max_ranks": 1,
        "definition_id": 131314,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Survival of the Fittest",
        "spell_id": 264735,
        "visible_spell_id": null,
        "icon": "spell_nature_spiritarmor",
        "icon_candidates": [
          "spell_nature_spiritarmor"
        ]
      },
      "pve_tooltip": "Unlimited range\nInstant\n1.5 min cooldown\n1 Charge\nReduces all damage you and your pet take by 30% for 6 sec.",
      "pvp_tooltip": "Unlimited range\nInstant\n1.5 min cooldown\n1 Charge\nReduces all damage you and your pet take by 25% for 6 sec.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 94,
          "end": 96,
          "old_token": "30",
          "new_token": "25",
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
          "old": "30",
          "new": "25"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 264735,
          "source_spell_id": 264735,
          "effect_index": 1,
          "effect_text": "Apply Aura: Mod % Damage Taken (Arcane, Fire, Frost, Holy, Nature, Physical, Shadow)",
          "base_value": -30.0,
          "spell_pvp_multiplier": 0.833333,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.833333,
          "final_pvp_value": -24.99999,
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
        },
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 264735,
          "source_spell_id": 264735,
          "effect_index": 2,
          "effect_text": "Apply Aura: Mod % Damage Taken (Arcane, Fire, Frost, Holy, Nature, Physical, Shadow)",
          "base_value": -30.0,
          "spell_pvp_multiplier": 0.833333,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.833333,
          "final_pvp_value": -24.99999,
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
      "render_effect_count": 2,
      "rank_tooltips": []
    },
    {
      "talent_name": "Posthaste",
      "spell_id": 109215,
      "node_id": 102411,
      "entry_id": 126475,
      "definition_id": 131301,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102411,
        "node_name": "Posthaste",
        "node_type": "single",
        "pos_x": 5400,
        "pos_y": 1500,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [
          102423
        ],
        "entry_id": 126475,
        "entry_max_ranks": 1,
        "definition_id": 131301,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Posthaste",
        "spell_id": 109215,
        "visible_spell_id": null,
        "icon": "ability_hunter_posthaste",
        "icon_candidates": [
          "ability_hunter_posthaste"
        ]
      },
      "pve_tooltip": "Disengage also frees you from all movement impairing effects and increases your movement speed by 50% for 4 sec.",
      "pvp_tooltip": "Disengage also frees you from all movement impairing effects and increases your movement speed by 50% for 4 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Natural Mending",
      "spell_id": 270581,
      "node_id": 102401,
      "entry_id": 126465,
      "definition_id": 131291,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102401,
        "node_name": "Natural Mending",
        "node_type": "single",
        "pos_x": 3000,
        "pos_y": 2100,
        "max_ranks": 2,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102381
        ],
        "next": [
          102383,
          110157
        ],
        "entry_id": 126465,
        "entry_max_ranks": 2,
        "definition_id": 131291,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Natural Mending",
        "spell_id": 270581,
        "visible_spell_id": null,
        "icon": "ability_hunter_onewithnature",
        "icon_candidates": [
          "ability_hunter_onewithnature"
        ]
      },
      "pve_tooltip": "Exhilaration's cooldown is reduced by 60 sec.",
      "pvp_tooltip": "Exhilaration's cooldown is reduced by 60 sec.",
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
          "pve_tooltip": "Exhilaration's cooldown is reduced by 30 sec.",
          "pvp_tooltip": "Exhilaration's cooldown is reduced by 30 sec.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "Exhilaration's cooldown is reduced by 60 sec.",
          "pvp_tooltip": "Exhilaration's cooldown is reduced by 60 sec.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Padded Armor",
      "spell_id": 459450,
      "node_id": 102406,
      "entry_id": 126470,
      "definition_id": 131296,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102406,
        "node_name": "Padded Armor",
        "node_type": "single",
        "pos_x": 4200,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102422
        ],
        "next": [
          110157,
          109485
        ],
        "entry_id": 126470,
        "entry_max_ranks": 1,
        "definition_id": 131296,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Padded Armor",
        "spell_id": 459450,
        "visible_spell_id": null,
        "icon": "ability_rogue_plunderarmor",
        "icon_candidates": [
          "ability_rogue_plunderarmor"
        ]
      },
      "pve_tooltip": "Survival of the Fittest gains an additional charge.",
      "pvp_tooltip": "Survival of the Fittest gains an additional charge.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Hunter's Avoidance",
      "spell_id": 384799,
      "node_id": 102423,
      "entry_id": 126489,
      "definition_id": 131315,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102423,
        "node_name": "Hunter's Avoidance",
        "node_type": "single",
        "pos_x": 5400,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102411
        ],
        "next": [
          109485,
          102407
        ],
        "entry_id": 126489,
        "entry_max_ranks": 1,
        "definition_id": 131315,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Hunter's Avoidance",
        "spell_id": 384799,
        "visible_spell_id": null,
        "icon": "rogue_burstofspeed",
        "icon_candidates": [
          "rogue_burstofspeed"
        ]
      },
      "pve_tooltip": "Damage taken from area of effect attacks reduced by 5%.",
      "pvp_tooltip": "Damage taken from area of effect attacks reduced by 5%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Wilderness Medicine",
      "spell_id": 343242,
      "node_id": 102383,
      "entry_id": 126446,
      "definition_id": 131272,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102383,
        "node_name": "Wilderness Medicine",
        "node_type": "single",
        "pos_x": 2400,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102401
        ],
        "next": [
          102380
        ],
        "entry_id": 126446,
        "entry_max_ranks": 1,
        "definition_id": 131272,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Wilderness Medicine",
        "spell_id": 343242,
        "visible_spell_id": null,
        "icon": "ability_hunter_mendpet",
        "icon_candidates": [
          "ability_hunter_mendpet"
        ]
      },
      "pve_tooltip": "Mend Pet heals for an additional 25% of your pet's health over its duration, and has a 25% chance to dispel a magic effect each time it heals your pet.",
      "pvp_tooltip": "Mend Pet heals for an additional 25% of your pet's health over its duration, and has a 25% chance to dispel a magic effect each time it heals your pet.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 343242,
          "source_spell_id": 136,
          "effect_index": 1,
          "effect_text": "Apply Aura: Mod Total Health Regen %",
          "base_value": 10.0,
          "spell_pvp_multiplier": 2.0,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 2.0,
          "final_pvp_value": 20.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            343242,
            136
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
      "talent_name": "Combat Experience",
      "spell_id": 1268871,
      "node_id": 110157,
      "entry_id": 136677,
      "definition_id": 141449,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110157,
        "node_name": "Combat Experience",
        "node_type": "single",
        "pos_x": 3600,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102406,
          102401
        ],
        "next": [
          102380,
          79837
        ],
        "entry_id": 136677,
        "entry_max_ranks": 1,
        "definition_id": 141449,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Combat Experience",
        "spell_id": 1268871,
        "visible_spell_id": null,
        "icon": "ability_hunter_combatexperience",
        "icon_candidates": [
          "ability_hunter_combatexperience"
        ]
      },
      "pve_tooltip": "Your Agility is increased by 3%.",
      "pvp_tooltip": "Your Agility is increased by 3%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Improved Aspect of the Cheetah",
      "spell_id": 1258407,
      "node_id": 109485,
      "entry_id": 135708,
      "definition_id": 140463,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109485,
        "node_name": "Improved Aspect of the Cheetah",
        "node_type": "single",
        "pos_x": 4800,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102423,
          102406
        ],
        "next": [
          79837,
          102384
        ],
        "entry_id": 135708,
        "entry_max_ranks": 1,
        "definition_id": 140463,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Improved Aspect of the Cheetah",
        "spell_id": 1258407,
        "visible_spell_id": null,
        "icon": "ability_mount_jungletiger",
        "icon_candidates": [
          "ability_mount_jungletiger"
        ]
      },
      "pve_tooltip": "The cooldown of Aspect of the Cheetah is reduced by 30 sec.",
      "pvp_tooltip": "The cooldown of Aspect of the Cheetah is reduced by 30 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Concussive Shot",
      "spell_id": 5116,
      "node_id": 102407,
      "entry_id": 126471,
      "definition_id": 131297,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102407,
        "node_name": "Concussive Shot",
        "node_type": "single",
        "pos_x": 6000,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102423
        ],
        "next": [
          102384
        ],
        "entry_id": 126471,
        "entry_max_ranks": 1,
        "definition_id": 131297,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Concussive Shot",
        "spell_id": 5116,
        "visible_spell_id": null,
        "icon": "spell_frost_stun",
        "icon_candidates": [
          "spell_frost_stun"
        ]
      },
      "pve_tooltip": "40 yd range\nInstant\n5 sec cooldown\nDazes the target, slowing movement speed by 50% for 6 sec.",
      "pvp_tooltip": "40 yd range\nInstant\n5 sec cooldown\nDazes the target, slowing movement speed by 30% for 6 sec.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 79,
          "end": 81,
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
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 5116,
          "source_spell_id": 5116,
          "effect_index": 1,
          "effect_text": "Apply Aura: Decrease Run Speed %",
          "base_value": -50.0,
          "spell_pvp_multiplier": 0.6,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.6,
          "final_pvp_value": -30.0,
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
      "talent_name": "Precision Strikes",
      "spell_id": 1267003,
      "node_id": 102380,
      "entry_id": 126443,
      "definition_id": 131269,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102380,
        "node_name": "Precision Strikes",
        "node_type": "single",
        "pos_x": 3000,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102383,
          110157
        ],
        "next": [
          109489,
          102404
        ],
        "entry_id": 126443,
        "entry_max_ranks": 1,
        "definition_id": 131269,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Precision Strikes",
        "spell_id": 1267003,
        "visible_spell_id": null,
        "icon": "inv12_ability_hunter_rupturingblow",
        "icon_candidates": [
          "inv12_ability_hunter_rupturingblow"
        ]
      },
      "pve_tooltip": "Your auto attack damage is increased by 25%.",
      "pvp_tooltip": "Your auto attack damage is increased by 25%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Muzzle",
      "spell_id": 187707,
      "node_id": 79837,
      "entry_id": 100543,
      "definition_id": 105545,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 79837,
        "node_name": "Muzzle",
        "node_type": "single",
        "pos_x": 4200,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109485,
          110157
        ],
        "next": [
          102404,
          102395,
          109484
        ],
        "entry_id": 100543,
        "entry_max_ranks": 1,
        "definition_id": 105545,
        "entry_index": 0,
        "entry_type": "active",
        "talent_name": "Muzzle",
        "spell_id": 187707,
        "visible_spell_id": null,
        "icon": "ability_hunter_negate",
        "icon_candidates": [
          "ability_hunter_negate"
        ]
      },
      "pve_tooltip": "Melee Range\nInstant\n15 sec cooldown\nInterrupts spellcasting, preventing any spell in that school from being cast for 5 sec.",
      "pvp_tooltip": "Melee Range\nInstant\n15 sec cooldown\nInterrupts spellcasting, preventing any spell in that school from being cast for 5 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Serrated Tips",
      "spell_id": 459502,
      "node_id": 102384,
      "entry_id": 126447,
      "definition_id": 131273,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102384,
        "node_name": "Serrated Tips",
        "node_type": "single",
        "pos_x": 5400,
        "pos_y": 3300,
        "max_ranks": 2,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109485,
          102407
        ],
        "next": [
          109484,
          102419
        ],
        "entry_id": 126447,
        "entry_max_ranks": 2,
        "definition_id": 131273,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Serrated Tips",
        "spell_id": 459502,
        "visible_spell_id": null,
        "icon": "inv_spear_01",
        "icon_candidates": [
          "inv_spear_01"
        ]
      },
      "pve_tooltip": "You gain 4% more critical strike from critical strike sources.",
      "pvp_tooltip": "You gain 4% more critical strike from critical strike sources.",
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
          "pve_tooltip": "You gain 2% more critical strike from critical strike sources.",
          "pvp_tooltip": "You gain 2% more critical strike from critical strike sources.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "You gain 4% more critical strike from critical strike sources.",
          "pvp_tooltip": "You gain 4% more critical strike from critical strike sources.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Tranquilizing Shot",
      "spell_id": 19801,
      "node_id": 109489,
      "entry_id": 135712,
      "definition_id": 140467,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109489,
        "node_name": "Tranquilizing Shot",
        "node_type": "single",
        "pos_x": 2400,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102380
        ],
        "next": [
          102415,
          102425
        ],
        "entry_id": 135712,
        "entry_max_ranks": 1,
        "definition_id": 140467,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Tranquilizing Shot",
        "spell_id": 19801,
        "visible_spell_id": null,
        "icon": "spell_nature_drowsy",
        "icon_candidates": [
          "spell_nature_drowsy"
        ]
      },
      "pve_tooltip": "40 yd range\nInstant\n10 sec cooldown\nRemoves 1 Enrage and 1 Magic effect from an enemy target.",
      "pvp_tooltip": "40 yd range\nInstant\n10 sec cooldown\nRemoves 1 Enrage and 1 Magic effect from an enemy target.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Pathfinding",
      "spell_id": 378002,
      "node_id": 102404,
      "entry_id": 126468,
      "definition_id": 131294,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102404,
        "node_name": "Pathfinding",
        "node_type": "single",
        "pos_x": 3600,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          79837,
          102380
        ],
        "next": [
          102425,
          102396
        ],
        "entry_id": 126468,
        "entry_max_ranks": 1,
        "definition_id": 131294,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Pathfinding",
        "spell_id": 378002,
        "visible_spell_id": null,
        "icon": "ability_hunter_displacement",
        "icon_candidates": [
          "ability_hunter_displacement"
        ]
      },
      "pve_tooltip": "Movement speed increased by 4%.",
      "pvp_tooltip": "Movement speed increased by 4%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Disruptive Rounds",
      "spell_id": 343244,
      "node_id": 102395,
      "entry_id": 126459,
      "definition_id": 131285,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102395,
        "node_name": "Disruptive Rounds",
        "node_type": "single",
        "pos_x": 4200,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          79837
        ],
        "next": [
          102396,
          102393,
          109487
        ],
        "entry_id": 126459,
        "entry_max_ranks": 1,
        "definition_id": 131285,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Disruptive Rounds",
        "spell_id": 343244,
        "visible_spell_id": null,
        "icon": "hunter_pvp_vipersting",
        "icon_candidates": [
          "hunter_pvp_vipersting"
        ]
      },
      "pve_tooltip": "When Muzzle interrupts a cast, gain 30 Focus.",
      "pvp_tooltip": "When Muzzle interrupts a cast, gain 30 Focus.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Improved Feign Death",
      "spell_id": 1258486,
      "node_id": 109484,
      "entry_id": 135706,
      "definition_id": 140461,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109484,
        "node_name": "Improved Feign Death",
        "node_type": "single",
        "pos_x": 4800,
        "pos_y": 3900,
        "max_ranks": 2,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          79837,
          102384
        ],
        "next": [
          109487,
          110156
        ],
        "entry_id": 135706,
        "entry_max_ranks": 2,
        "definition_id": 140461,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Improved Feign Death",
        "spell_id": 1258486,
        "visible_spell_id": null,
        "icon": "ability_rogue_feigndeath",
        "icon_candidates": [
          "ability_rogue_feigndeath"
        ]
      },
      "pve_tooltip": "The cooldown of Feign Death is reduced by 10 sec.",
      "pvp_tooltip": "The cooldown of Feign Death is reduced by 10 sec.",
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
          "pve_tooltip": "The cooldown of Feign Death is reduced by 5 sec.",
          "pvp_tooltip": "The cooldown of Feign Death is reduced by 5 sec.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "The cooldown of Feign Death is reduced by 10 sec.",
          "pvp_tooltip": "The cooldown of Feign Death is reduced by 10 sec.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Misdirection",
      "spell_id": 34477,
      "node_id": 102419,
      "entry_id": 126484,
      "definition_id": 131310,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102419,
        "node_name": "Misdirection",
        "node_type": "single",
        "pos_x": 6000,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102384
        ],
        "next": [
          110156,
          102412
        ],
        "entry_id": 126484,
        "entry_max_ranks": 1,
        "definition_id": 131310,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Misdirection",
        "spell_id": 34477,
        "visible_spell_id": null,
        "icon": "ability_hunter_misdirection",
        "icon_candidates": [
          "ability_hunter_misdirection"
        ]
      },
      "pve_tooltip": "100 yd range\nInstant\n30 sec cooldown\nMisdirects all threat you cause to the targeted party or raid member, beginning with your next attack within 30 sec and lasting for 8 sec.",
      "pvp_tooltip": "100 yd range\nInstant\n30 sec cooldown\nMisdirects all threat you cause to the targeted party or raid member, beginning with your next attack within 30 sec and lasting for 8 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Kodo Tranquilizer",
      "spell_id": 459983,
      "node_id": 102415,
      "entry_id": 126480,
      "definition_id": 131306,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102415,
        "node_name": "Kodo Tranquilizer / Devilsaur Tranquilizer",
        "node_type": "choice",
        "pos_x": 2400,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109489
        ],
        "next": [
          102424
        ],
        "entry_id": 126480,
        "entry_max_ranks": 1,
        "definition_id": 131306,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Kodo Tranquilizer",
        "spell_id": 459983,
        "visible_spell_id": null,
        "icon": "ability_mount_kodo_03",
        "icon_candidates": [
          "ability_mount_kodo_03"
        ]
      },
      "pve_tooltip": "Tranquilizing Shot removes 1 additional Magic effect from up to 2 nearby targets.",
      "pvp_tooltip": "Tranquilizing Shot removes 1 additional Magic effect from up to 2 nearby targets.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Devilsaur Tranquilizer",
      "spell_id": 459991,
      "node_id": 102415,
      "entry_id": 126479,
      "definition_id": 131305,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102415,
        "node_name": "Kodo Tranquilizer / Devilsaur Tranquilizer",
        "node_type": "choice",
        "pos_x": 2400,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109489
        ],
        "next": [
          102424
        ],
        "entry_id": 126479,
        "entry_max_ranks": 1,
        "definition_id": 131305,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Devilsaur Tranquilizer",
        "spell_id": 459991,
        "visible_spell_id": null,
        "icon": "ability_hunter_pet_devilsaur",
        "icon_candidates": [
          "ability_hunter_pet_devilsaur"
        ]
      },
      "pve_tooltip": "If Tranquilizing Shot removes only an Enrage effect, its cooldown is reduced by 5 sec.",
      "pvp_tooltip": "If Tranquilizing Shot removes only an Enrage effect, its cooldown is reduced by 5 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Kindling Flare",
      "spell_id": 459506,
      "node_id": 102425,
      "entry_id": 126491,
      "definition_id": 131317,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102425,
        "node_name": "Kindling Flare",
        "node_type": "single",
        "pos_x": 3000,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102404,
          109489
        ],
        "next": [
          102424
        ],
        "entry_id": 126491,
        "entry_max_ranks": 1,
        "definition_id": 131317,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Kindling Flare",
        "spell_id": 459506,
        "visible_spell_id": null,
        "icon": "achievment_raid_houroftwilight",
        "icon_candidates": [
          "achievment_raid_houroftwilight"
        ]
      },
      "pve_tooltip": "Flare's radius is increased by 50%.",
      "pvp_tooltip": "Flare's radius is increased by 50%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Trigger Finger",
      "spell_id": 459534,
      "node_id": 102396,
      "entry_id": 126460,
      "definition_id": 131286,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102396,
        "node_name": "Trigger Finger",
        "node_type": "single",
        "pos_x": 3600,
        "pos_y": 4500,
        "max_ranks": 2,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102404,
          102395
        ],
        "next": [
          102424,
          102390
        ],
        "entry_id": 126460,
        "entry_max_ranks": 2,
        "definition_id": 131286,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Trigger Finger",
        "spell_id": 459534,
        "visible_spell_id": null,
        "icon": "inv_10_engineering2_pvpflaregun_color1",
        "icon_candidates": [
          "inv_10_engineering2_pvpflaregun_color1"
        ]
      },
      "pve_tooltip": "100 yd range\nHaste increased by 2%.",
      "pvp_tooltip": "100 yd range\nHaste increased by 2%.",
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
          "pve_tooltip": "100 yd range\nHaste increased by 1%.",
          "pvp_tooltip": "100 yd range\nHaste increased by 1%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "100 yd range\nHaste increased by 2%.",
          "pvp_tooltip": "100 yd range\nHaste increased by 2%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Tar Trap",
      "spell_id": 187698,
      "node_id": 102393,
      "entry_id": 126457,
      "definition_id": 131283,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102393,
        "node_name": "Tar Trap / Scare Beast",
        "node_type": "choice",
        "pos_x": 4200,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102395
        ],
        "next": [
          102390
        ],
        "entry_id": 126457,
        "entry_max_ranks": 1,
        "definition_id": 131283,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Tar Trap",
        "spell_id": 187698,
        "visible_spell_id": null,
        "icon": "spell_yorsahj_bloodboil_black",
        "icon_candidates": [
          "spell_yorsahj_bloodboil_black"
        ]
      },
      "pve_tooltip": "40 yd range\nInstant\n30 sec cooldown\nHurls a tar trap to the target location that creates a 8 yd radius pool of tar around itself for 30 sec when the first enemy approaches. All enemies have 50% reduced movement speed while in the area of effect. Limit 1. Trap will exist for 1 min.",
      "pvp_tooltip": "40 yd range\nInstant\n30 sec cooldown\nHurls a tar trap to the target location that creates a 8 yd radius pool of tar around itself for 30 sec when the first enemy approaches. All enemies have 30% reduced movement speed while in the area of effect. Limit 1. Trap will exist for 1 min.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 190,
          "end": 192,
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
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 187698,
          "source_spell_id": 135299,
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
            187698,
            135299
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
      "talent_name": "Scare Beast",
      "spell_id": 1513,
      "node_id": 102393,
      "entry_id": 135707,
      "definition_id": 140462,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102393,
        "node_name": "Tar Trap / Scare Beast",
        "node_type": "choice",
        "pos_x": 4200,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102395
        ],
        "next": [
          102390
        ],
        "entry_id": 135707,
        "entry_max_ranks": 1,
        "definition_id": 140462,
        "entry_index": 200,
        "entry_type": "active",
        "talent_name": "Scare Beast",
        "spell_id": 1513,
        "visible_spell_id": null,
        "icon": "ability_druid_cower",
        "icon_candidates": [
          "ability_druid_cower"
        ]
      },
      "pve_tooltip": "25 Focus\n30 yd range\n1.5 sec cast\nScares a beast, causing it to run in fear for up to 20 sec. Damage caused may interrupt the effect. Only one beast can be feared at a time.",
      "pvp_tooltip": "25 Focus\n30 yd range\n1.5 sec cast\nScares a beast, causing it to run in fear for up to 20 sec. Damage caused may interrupt the effect. Only one beast can be feared at a time.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Touch of Grass",
      "spell_id": 1258402,
      "node_id": 109487,
      "entry_id": 135710,
      "definition_id": 140465,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109487,
        "node_name": "Touch of Grass",
        "node_type": "single",
        "pos_x": 4800,
        "pos_y": 4500,
        "max_ranks": 2,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102395,
          109484
        ],
        "next": [
          102390,
          109483
        ],
        "entry_id": 135710,
        "entry_max_ranks": 2,
        "definition_id": 140465,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Touch of Grass",
        "spell_id": 1258402,
        "visible_spell_id": null,
        "icon": "inv12_ability_druid_lifetreading",
        "icon_candidates": [
          "inv12_ability_druid_lifetreading"
        ]
      },
      "pve_tooltip": "Your maximum health is increased by 10%.",
      "pvp_tooltip": "Your maximum health is increased by 10%.",
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
          "pve_tooltip": "Your maximum health is increased by 5%.",
          "pvp_tooltip": "Your maximum health is increased by 5%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "Your maximum health is increased by 10%.",
          "pvp_tooltip": "Your maximum health is increased by 10%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Camouflage",
      "spell_id": 199483,
      "node_id": 110156,
      "entry_id": 136676,
      "definition_id": 141448,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110156,
        "node_name": "Camouflage",
        "node_type": "single",
        "pos_x": 5400,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102419,
          109484
        ],
        "next": [
          109483
        ],
        "entry_id": 136676,
        "entry_max_ranks": 1,
        "definition_id": 141448,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Camouflage",
        "spell_id": 199483,
        "visible_spell_id": null,
        "icon": "ability_hunter_camouflage",
        "icon_candidates": [
          "ability_hunter_camouflage"
        ]
      },
      "pve_tooltip": "Unlimited range\nInstant\n1 min cooldown\nYou and your pet blend into the surroundings and gain stealth for 1 min. While camouflaged, you will heal for 2% of maximum health every 1 sec.",
      "pvp_tooltip": "Unlimited range\nInstant\n1 min cooldown\nYou and your pet blend into the surroundings and gain stealth for 1 min. While camouflaged, you will heal for 2% of maximum health every 1 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "No Hard Feelings",
      "spell_id": 459546,
      "node_id": 102412,
      "entry_id": 126476,
      "definition_id": 131302,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102412,
        "node_name": "No Hard Feelings",
        "node_type": "single",
        "pos_x": 6000,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102419
        ],
        "next": [
          109483
        ],
        "entry_id": 126476,
        "entry_max_ranks": 1,
        "definition_id": 131302,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "No Hard Feelings",
        "spell_id": 459546,
        "visible_spell_id": null,
        "icon": "ability_seal",
        "icon_candidates": [
          "ability_seal"
        ]
      },
      "pve_tooltip": "When Misdirection targets your pet, it reduces the damage they take by 50% for 5 sec.\nThe cooldown of Misdirection is reduced by 5 sec.",
      "pvp_tooltip": "When Misdirection targets your pet, it reduces the damage they take by 50% for 5 sec.\nThe cooldown of Misdirection is reduced by 5 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Improved Aspect of the Turtle",
      "spell_id": 1258485,
      "node_id": 102424,
      "entry_id": 126490,
      "definition_id": 131316,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102424,
        "node_name": "Improved Aspect of the Turtle",
        "node_type": "single",
        "pos_x": 3000,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102396,
          102425,
          102415
        ],
        "next": [
          110154,
          103989,
          102414
        ],
        "entry_id": 126490,
        "entry_max_ranks": 1,
        "definition_id": 131316,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Improved Aspect of the Turtle",
        "spell_id": 1258485,
        "visible_spell_id": null,
        "icon": "ability_hunter_pet_turtle",
        "icon_candidates": [
          "ability_hunter_pet_turtle"
        ]
      },
      "pve_tooltip": "The cooldown of Aspect of the Turtle is reduced by 30 sec.",
      "pvp_tooltip": "The cooldown of Aspect of the Turtle is reduced by 30 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Specialized Arsenal",
      "spell_id": 459542,
      "node_id": 102390,
      "entry_id": 126453,
      "definition_id": 131279,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102390,
        "node_name": "Specialized Arsenal",
        "node_type": "single",
        "pos_x": 4200,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109487,
          102396,
          102393
        ],
        "next": [
          102414,
          102391,
          109486
        ],
        "entry_id": 126453,
        "entry_max_ranks": 1,
        "definition_id": 131279,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Specialized Arsenal",
        "spell_id": 459542,
        "visible_spell_id": null,
        "icon": "inv_misc_quiver_03",
        "icon_candidates": [
          "inv_misc_quiver_03"
        ]
      },
      "pve_tooltip": "Wildfire Bomb deals 10% increased damage.",
      "pvp_tooltip": "Wildfire Bomb deals 10% increased damage.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Scout's Instincts",
      "spell_id": 459455,
      "node_id": 109483,
      "entry_id": 135705,
      "definition_id": 140460,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109483,
        "node_name": "Scout's Instincts",
        "node_type": "single",
        "pos_x": 5400,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109487,
          102412,
          110156
        ],
        "next": [
          109486,
          109488,
          110155
        ],
        "entry_id": 135705,
        "entry_max_ranks": 1,
        "definition_id": 140460,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Scout's Instincts",
        "spell_id": 459455,
        "visible_spell_id": null,
        "icon": "ability_rogue_sprint",
        "icon_candidates": [
          "ability_rogue_sprint"
        ]
      },
      "pve_tooltip": "You cannot be slowed below 80% of your normal movement speed while Aspect of the Cheetah is active.",
      "pvp_tooltip": "You cannot be slowed below 80% of your normal movement speed while Aspect of the Cheetah is active.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Shell Wall",
      "spell_id": 1267218,
      "node_id": 110154,
      "entry_id": 136673,
      "definition_id": 141445,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110154,
        "node_name": "Shell Wall",
        "node_type": "single",
        "pos_x": 2400,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102424
        ],
        "next": [
          110153
        ],
        "entry_id": 136673,
        "entry_max_ranks": 1,
        "definition_id": 141445,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Shell Wall",
        "spell_id": 1267218,
        "visible_spell_id": null,
        "icon": "inv_cape_special_turtleshell_c_01",
        "icon_candidates": [
          "inv_cape_special_turtleshell_c_01"
        ]
      },
      "pve_tooltip": "Damage taken during Aspect of the Turtle is reduced by an additional 20%.",
      "pvp_tooltip": "Damage taken during Aspect of the Turtle is reduced by an additional 20%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Intimidation",
      "spell_id": 19577,
      "node_id": 103989,
      "entry_id": 128412,
      "definition_id": 133218,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 103989,
        "node_name": "Intimidation",
        "node_type": "single",
        "pos_x": 3000,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102424
        ],
        "next": [
          110153,
          102394,
          102416
        ],
        "entry_id": 128412,
        "entry_max_ranks": 1,
        "definition_id": 133218,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Intimidation",
        "spell_id": 19577,
        "visible_spell_id": null,
        "icon": "ability_devour",
        "icon_candidates": [
          "ability_devour"
        ]
      },
      "pve_tooltip": "100 yd range\nInstant\n1 min cooldown\nCommands your pet to intimidate the target stunning your target for 5 sec.",
      "pvp_tooltip": "100 yd range\nInstant\n1 min cooldown\nCommands your pet to intimidate the target stunning your target for 5 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Improved Snaring",
      "spell_id": 1268868,
      "node_id": 102414,
      "entry_id": 126478,
      "definition_id": 131304,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102414,
        "node_name": "Improved Snaring",
        "node_type": "single",
        "pos_x": 3600,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102390,
          102424
        ],
        "next": [
          102416
        ],
        "entry_id": 126478,
        "entry_max_ranks": 1,
        "definition_id": 131304,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Improved Snaring",
        "spell_id": 1268868,
        "visible_spell_id": null,
        "icon": "inv_fishing_nethooks01",
        "icon_candidates": [
          "inv_fishing_nethooks01"
        ]
      },
      "pve_tooltip": "Wing Clip slows an additional 25%.\nConcussive Shot slows an additional 10%.",
      "pvp_tooltip": "Wing Clip slows an additional 10%.\nConcussive Shot slows an additional 10%.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 30,
          "end": 33,
          "old_token": "25%",
          "new_token": "10%",
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
          "hotfix_text": "Improved Snaring now increases the movement speed reduction of Wing Clip by 10% in PvP combat.",
          "reason": "APPLIED"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Lone Survivor",
      "spell_id": 388039,
      "node_id": 102391,
      "entry_id": 126454,
      "definition_id": 131280,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102391,
        "node_name": "Lone Survivor",
        "node_type": "single",
        "pos_x": 4200,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102390
        ],
        "next": [
          102416,
          102409
        ],
        "entry_id": 126454,
        "entry_max_ranks": 1,
        "definition_id": 131280,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Lone Survivor",
        "spell_id": 388039,
        "visible_spell_id": null,
        "icon": "ability_hunter_huntervswild",
        "icon_candidates": [
          "ability_hunter_huntervswild"
        ]
      },
      "pve_tooltip": "Unlimited range\nThe duration of Survival of the Fittest is increased by 2.0 sec.",
      "pvp_tooltip": "Unlimited range\nThe duration of Survival of the Fittest is increased by 2.0 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Catlike Reflexes",
      "spell_id": 1258404,
      "node_id": 109486,
      "entry_id": 135709,
      "definition_id": 140464,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109486,
        "node_name": "Catlike Reflexes",
        "node_type": "single",
        "pos_x": 4800,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102390,
          109483
        ],
        "next": [
          102409
        ],
        "entry_id": 135709,
        "entry_max_ranks": 1,
        "definition_id": 140464,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Catlike Reflexes",
        "spell_id": 1258404,
        "visible_spell_id": null,
        "icon": "ability_hunter_catlikereflexes",
        "icon_candidates": [
          "ability_hunter_catlikereflexes"
        ]
      },
      "pve_tooltip": "Aspect of the Cheetah's initial burst of speed is increased by 2.0 sec.",
      "pvp_tooltip": "Aspect of the Cheetah's initial burst of speed is increased by 2.0 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Binding Shot",
      "spell_id": 109248,
      "node_id": 109488,
      "entry_id": 135711,
      "definition_id": 140466,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109488,
        "node_name": "Binding Shot",
        "node_type": "single",
        "pos_x": 5400,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109483
        ],
        "next": [
          102409,
          110152,
          102418
        ],
        "entry_id": 135711,
        "entry_max_ranks": 1,
        "definition_id": 140466,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Binding Shot",
        "spell_id": 109248,
        "visible_spell_id": null,
        "icon": "spell_shaman_bindelemental",
        "icon_candidates": [
          "spell_shaman_bindelemental"
        ]
      },
      "pve_tooltip": "30 yd range\nInstant\n45 sec cooldown\nFires a magical projectile, tethering the enemy and any other enemies within 5 yds for 10 sec, stunning them for 3 sec if they move more than 5 yds from the arrow. [Binding Shackles: Targets stunned by Binding Shot deal 10% less damage to you for 8 sec after the effect ends]",
      "pvp_tooltip": "30 yd range\nInstant\n45 sec cooldown\nFires a magical projectile, tethering the enemy and any other enemies within 5 yds for 10 sec, stunning them for 3 sec if they move more than 5 yds from the arrow. [Binding Shackles: Targets stunned by Binding Shot deal 10% less damage to you for 8 sec after the effect ends]",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Trailblazer",
      "spell_id": 199921,
      "node_id": 110155,
      "entry_id": 136675,
      "definition_id": 141447,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110155,
        "node_name": "Trailblazer / Moment of Opportunity",
        "node_type": "choice",
        "pos_x": 6000,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109483
        ],
        "next": [
          102418
        ],
        "entry_id": 136675,
        "entry_max_ranks": 1,
        "definition_id": 141447,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Trailblazer",
        "spell_id": 199921,
        "visible_spell_id": null,
        "icon": "ability_hunter_aspectmastery",
        "icon_candidates": [
          "ability_hunter_aspectmastery"
        ]
      },
      "pve_tooltip": "Your movement speed is increased by 30% anytime you have not attacked for 3 sec.",
      "pvp_tooltip": "Your movement speed is increased by 30% anytime you have not attacked for 3 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Moment of Opportunity",
      "spell_id": 459488,
      "node_id": 110155,
      "entry_id": 136674,
      "definition_id": 141446,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110155,
        "node_name": "Trailblazer / Moment of Opportunity",
        "node_type": "choice",
        "pos_x": 6000,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109483
        ],
        "next": [
          102418
        ],
        "entry_id": 136674,
        "entry_max_ranks": 1,
        "definition_id": 141446,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Moment of Opportunity",
        "spell_id": 459488,
        "visible_spell_id": null,
        "icon": "ability_karoz_leap",
        "icon_candidates": [
          "ability_karoz_leap"
        ]
      },
      "pve_tooltip": "When a trap triggers, gain 30% increased movement speed for 3 sec.",
      "pvp_tooltip": "When a trap triggers, gain 30% increased movement speed for 3 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Cold Feet",
      "spell_id": 1268671,
      "node_id": 110153,
      "entry_id": 136672,
      "definition_id": 141444,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110153,
        "node_name": "Cold Feet",
        "node_type": "single",
        "pos_x": 2400,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          110154,
          103989
        ],
        "next": [
          102389
        ],
        "entry_id": 136672,
        "entry_max_ranks": 1,
        "definition_id": 141444,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Cold Feet",
        "spell_id": 1268671,
        "visible_spell_id": null,
        "icon": "ability_mage_icyfeet",
        "icon_candidates": [
          "ability_mage_icyfeet"
        ]
      },
      "pve_tooltip": "When your Freezing Trap breaks, the victim's movement speed is reduced by 70% for 4 sec.",
      "pvp_tooltip": "When your Freezing Trap breaks, the victim's movement speed is reduced by 50% for 4 sec.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 74,
          "end": 76,
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
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 1268671,
          "source_spell_id": 1268673,
          "effect_index": 1,
          "effect_text": "Apply Aura: Decrease Run Speed %",
          "base_value": -70.0,
          "spell_pvp_multiplier": 0.714286,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.714286,
          "final_pvp_value": -50.00002,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1268671,
            1268673
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
      "talent_name": "Territorial Instincts",
      "spell_id": 459507,
      "node_id": 102394,
      "entry_id": 126458,
      "definition_id": 131284,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102394,
        "node_name": "Territorial Instincts / Guttural Roar",
        "node_type": "choice",
        "pos_x": 3000,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          103989
        ],
        "next": [],
        "entry_id": 126458,
        "entry_max_ranks": 1,
        "definition_id": 131284,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Territorial Instincts",
        "spell_id": 459507,
        "visible_spell_id": null,
        "icon": "spell_nature_shamanrage",
        "icon_candidates": [
          "spell_nature_shamanrage"
        ]
      },
      "pve_tooltip": "The cooldown of Intimidation is reduced by 20 sec.",
      "pvp_tooltip": "The cooldown of Intimidation is reduced by 20 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Guttural Roar",
      "spell_id": 1258509,
      "node_id": 102394,
      "entry_id": 135704,
      "definition_id": 140459,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102394,
        "node_name": "Territorial Instincts / Guttural Roar",
        "node_type": "choice",
        "pos_x": 3000,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          103989
        ],
        "next": [],
        "entry_id": 135704,
        "entry_max_ranks": 1,
        "definition_id": 140459,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Guttural Roar",
        "spell_id": 1258509,
        "visible_spell_id": null,
        "icon": "ability_druid_challangingroar",
        "icon_candidates": [
          "ability_druid_challangingroar"
        ]
      },
      "pve_tooltip": "Intimidation now also stuns nearby enemies for 1.0 sec.",
      "pvp_tooltip": "Intimidation now also stuns nearby enemies for 1.0 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Born To Be Wild",
      "spell_id": 266921,
      "node_id": 102416,
      "entry_id": 126481,
      "definition_id": 131307,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102416,
        "node_name": "Born To Be Wild",
        "node_type": "single",
        "pos_x": 3600,
        "pos_y": 6300,
        "max_ranks": 2,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          103989,
          102414,
          102391
        ],
        "next": [
          102389,
          110164
        ],
        "entry_id": 126481,
        "entry_max_ranks": 2,
        "definition_id": 131307,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Born To Be Wild",
        "spell_id": 266921,
        "visible_spell_id": null,
        "icon": "ability_hunter_aspectoftheviper",
        "icon_candidates": [
          "ability_hunter_aspectoftheviper"
        ]
      },
      "pve_tooltip": "The cooldown of Aspect of the Eagle, Aspect of the Cheetah, and Aspect of the Turtle are reduced by 30 sec.",
      "pvp_tooltip": "The cooldown of Aspect of the Eagle, Aspect of the Cheetah, and Aspect of the Turtle are reduced by 30 sec.",
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
          "pve_tooltip": "The cooldown of Aspect of the Eagle, Aspect of the Cheetah, and Aspect of the Turtle are reduced by 15 sec.",
          "pvp_tooltip": "The cooldown of Aspect of the Eagle, Aspect of the Cheetah, and Aspect of the Turtle are reduced by 15 sec.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "The cooldown of Aspect of the Eagle, Aspect of the Cheetah, and Aspect of the Turtle are reduced by 30 sec.",
          "pvp_tooltip": "The cooldown of Aspect of the Eagle, Aspect of the Cheetah, and Aspect of the Turtle are reduced by 30 sec.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Keen Eyesight",
      "spell_id": 378004,
      "node_id": 102409,
      "entry_id": 126473,
      "definition_id": 131299,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102409,
        "node_name": "Keen Eyesight",
        "node_type": "single",
        "pos_x": 4800,
        "pos_y": 6300,
        "max_ranks": 2,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109488,
          109486,
          102391
        ],
        "next": [
          110164,
          102387
        ],
        "entry_id": 126473,
        "entry_max_ranks": 2,
        "definition_id": 131299,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Keen Eyesight",
        "spell_id": 378004,
        "visible_spell_id": null,
        "icon": "ability_hunter_silenthunter",
        "icon_candidates": [
          "ability_hunter_silenthunter"
        ]
      },
      "pve_tooltip": "Critical strike chance increased by 4%.",
      "pvp_tooltip": "Critical strike chance increased by 4%.",
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
          "pve_tooltip": "Critical strike chance increased by 2%.",
          "pvp_tooltip": "Critical strike chance increased by 2%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "Critical strike chance increased by 4%.",
          "pvp_tooltip": "Critical strike chance increased by 4%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Tar-Coated Bindings",
      "spell_id": 459460,
      "node_id": 110152,
      "entry_id": 136671,
      "definition_id": 141443,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110152,
        "node_name": "Tar-Coated Bindings / Horsehair Tether",
        "node_type": "choice",
        "pos_x": 5400,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109488
        ],
        "next": [],
        "entry_id": 136671,
        "entry_max_ranks": 1,
        "definition_id": 141443,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Tar-Coated Bindings",
        "spell_id": 459460,
        "visible_spell_id": null,
        "icon": "inv_misc_food_legion_goooil_pool",
        "icon_candidates": [
          "inv_misc_food_legion_goooil_pool"
        ]
      },
      "pve_tooltip": "Binding Shot's stun duration is increased by 1 sec.",
      "pvp_tooltip": "Binding Shot's stun duration is increased by 1 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Horsehair Tether",
      "spell_id": 472729,
      "node_id": 110152,
      "entry_id": 136670,
      "definition_id": 141442,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110152,
        "node_name": "Tar-Coated Bindings / Horsehair Tether",
        "node_type": "choice",
        "pos_x": 5400,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109488
        ],
        "next": [],
        "entry_id": 136670,
        "entry_max_ranks": 1,
        "definition_id": 141442,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Horsehair Tether",
        "spell_id": 472729,
        "visible_spell_id": null,
        "icon": "inv_misc_rope_01",
        "icon_candidates": [
          "inv_misc_rope_01"
        ]
      },
      "pve_tooltip": "When an enemy is stunned by Binding Shot, it is dragged to Binding Shot's center.",
      "pvp_tooltip": "When an enemy is stunned by Binding Shot, it is dragged to Binding Shot's center.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Improved Traps",
      "spell_id": 343247,
      "node_id": 102418,
      "entry_id": 126483,
      "definition_id": 131309,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102418,
        "node_name": "Improved Traps",
        "node_type": "single",
        "pos_x": 6000,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109488,
          110155
        ],
        "next": [
          102387
        ],
        "entry_id": 126483,
        "entry_max_ranks": 1,
        "definition_id": 131309,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Improved Traps",
        "spell_id": 343247,
        "visible_spell_id": null,
        "icon": "ability_hunter_traplauncher",
        "icon_candidates": [
          "ability_hunter_traplauncher"
        ]
      },
      "pve_tooltip": "The cooldown of Tar Trap and Freezing Trap is reduced by 5.0 sec.",
      "pvp_tooltip": "The cooldown of Tar Trap and Freezing Trap is reduced by 5.0 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Emergency Salve",
      "spell_id": 459517,
      "node_id": 102389,
      "entry_id": 126452,
      "definition_id": 131278,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102389,
        "node_name": "Emergency Salve",
        "node_type": "single",
        "pos_x": 3000,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102416,
          110153
        ],
        "next": [],
        "entry_id": 126452,
        "entry_max_ranks": 1,
        "definition_id": 131278,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Emergency Salve",
        "spell_id": 459517,
        "visible_spell_id": null,
        "icon": "inv_potion_29",
        "icon_candidates": [
          "inv_potion_29"
        ]
      },
      "pve_tooltip": "Feign Death and Aspect of the Turtle removes poison and disease effects from you.",
      "pvp_tooltip": "Feign Death and Aspect of the Turtle removes poison and disease effects from you.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Roar of Sacrifice",
      "spell_id": 53480,
      "node_id": 110164,
      "entry_id": 136686,
      "definition_id": 141458,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110164,
        "node_name": "Roar of Sacrifice / Guardian's Hide",
        "node_type": "choice",
        "pos_x": 4200,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102409,
          102416
        ],
        "next": [],
        "entry_id": 136686,
        "entry_max_ranks": 1,
        "definition_id": 141458,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Roar of Sacrifice",
        "spell_id": 53480,
        "visible_spell_id": null,
        "icon": "ability_hunter_fervor",
        "icon_candidates": [
          "ability_hunter_fervor"
        ]
      },
      "pve_tooltip": "40 yd range\nInstant\n2 min cooldown\nInstructs your pet to protect a friendly target, reducing their damage taken by 15%, but 50% of all damage taken by that target is transferred to your pet.\nLasts 10 sec or until your pet's health drops below 25%.",
      "pvp_tooltip": "40 yd range\nInstant\n2 min cooldown\nInstructs your pet to protect a friendly target, reducing their damage taken by 25%, but 50% of all damage taken by that target is transferred to your pet.\nLasts 10 sec or until your pet's health drops below 25%.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 115,
          "end": 117,
          "old_token": "15",
          "new_token": "25",
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
          "old": "15",
          "new": "25"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 53480,
          "source_spell_id": 53480,
          "effect_index": 1,
          "effect_text": "Apply Aura: Mod % Damage Taken (Arcane, Fire, Frost, Holy, Nature, Physical, Shadow)",
          "base_value": -15.0,
          "spell_pvp_multiplier": 1.66666,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 1.66666,
          "final_pvp_value": -24.9999,
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
      "talent_name": "Guardian's Hide",
      "spell_id": 1272094,
      "node_id": 110164,
      "entry_id": 136685,
      "definition_id": 141457,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110164,
        "node_name": "Roar of Sacrifice / Guardian's Hide",
        "node_type": "choice",
        "pos_x": 4200,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102409,
          102416
        ],
        "next": [],
        "entry_id": 136685,
        "entry_max_ranks": 1,
        "definition_id": 141457,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Guardian's Hide",
        "spell_id": 1272094,
        "visible_spell_id": null,
        "icon": "spell_druid_bristlingfur",
        "icon_candidates": [
          "spell_druid_bristlingfur"
        ]
      },
      "pve_tooltip": "Your pet protects you at all times, reducing the damage you take by 3%. Your pet receives 100% of the damage it mitigates.",
      "pvp_tooltip": "Your pet protects you at all times, reducing the damage you take by 3%. Your pet receives 100% of the damage it mitigates.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Unnatural Causes",
      "spell_id": 459527,
      "node_id": 102387,
      "entry_id": 126450,
      "definition_id": 131276,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102387,
        "node_name": "Unnatural Causes",
        "node_type": "single",
        "pos_x": 5400,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 23,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102409,
          102418
        ],
        "next": [],
        "entry_id": 126450,
        "entry_max_ranks": 1,
        "definition_id": 131276,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Unnatural Causes",
        "spell_id": 459527,
        "visible_spell_id": null,
        "icon": "ability_hunter_potentvenom",
        "icon_candidates": [
          "ability_hunter_potentvenom"
        ]
      },
      "pve_tooltip": "Your damage over time effects deal 10% increased damage.\nThis effect is increased by 50% on targets below 20% health.",
      "pvp_tooltip": "Your damage over time effects deal 10% increased damage.\nThis effect is increased by 50% on targets below 20% health.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Kill Command",
      "spell_id": 259489,
      "node_id": 102255,
      "entry_id": 126314,
      "definition_id": 131140,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102255,
        "node_name": "Kill Command",
        "node_type": "single",
        "pos_x": 12600,
        "pos_y": 1500,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [
          102264,
          102262
        ],
        "entry_id": 126314,
        "entry_max_ranks": 1,
        "definition_id": 131140,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Kill Command",
        "spell_id": 259489,
        "visible_spell_id": null,
        "icon": "ability_hunter_killcommand",
        "icon_candidates": [
          "ability_hunter_killcommand"
        ]
      },
      "pve_tooltip": "50 yd range\nInstant\n5 sec recharge\n2 Charges\nGive the command to kill, causing your pet to savagely deal (300% of Attack Power) Physical damage to the enemy.\nGenerates 15 / Invigorating Pulse: 20 / Flanker's Advantage: 20 Focus.\nIncreases the damage of your next non-Kill Command ability by 0%.",
      "pvp_tooltip": "50 yd range\nInstant\n5 sec recharge\n2 Charges\nGive the command to kill, causing your pet to savagely deal (345% of Attack Power) Physical damage to the enemy.\nGenerates 15 / Invigorating Pulse: 20 / Flanker's Advantage: 20 Focus.\nIncreases the damage of your next non-Kill Command ability by 0%.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 106,
          "end": 109,
          "old_token": "300",
          "new_token": "345",
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
          "old": "300",
          "new": "345"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 259489,
          "source_spell_id": 259277,
          "effect_index": 1,
          "effect_text": "School Damage (Physical) (AP mod: 3 )",
          "base_value": null,
          "spell_pvp_multiplier": 1.15,
          "amount_kind": "direct",
          "aura_factor": 1.0,
          "final_pvp_multiplier": 1.15,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            259489,
            259277
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
      "talent_name": "Wildfire Bomb",
      "spell_id": 259495,
      "node_id": 102264,
      "entry_id": 126324,
      "definition_id": 131150,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102264,
        "node_name": "Wildfire Bomb",
        "node_type": "single",
        "pos_x": 12000,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102255
        ],
        "next": [
          102285
        ],
        "entry_id": 126324,
        "entry_max_ranks": 1,
        "definition_id": 131150,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Wildfire Bomb",
        "spell_id": 259495,
        "visible_spell_id": null,
        "icon": "inv_wildfirebomb",
        "icon_candidates": [
          "inv_wildfirebomb"
        ]
      },
      "pve_tooltip": "10 Focus\n40 yd range\nInstant\n18 sec cooldown\n1 Charge\nHurl a bomb at the target, exploding for (190% of Attack Power) Fire damage in a cone and coating enemies in wildfire, scorching them for (125.928% of Attack Power) Fire damage over 6 sec. Deals reduced damage beyond 8 targets.\nDeals 50% increased damage to your primary target.",
      "pvp_tooltip": "10 Focus\n40 yd range\nInstant\n18 sec cooldown\n1 Charge\nHurl a bomb at the target, exploding for (191.9% of Attack Power) Fire damage in a cone and coating enemies in wildfire, scorching them for (125.928% of Attack Power) Fire damage over 6 sec. Deals reduced damage beyond 8 targets.\nDeals 50% increased damage to your primary target.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 96,
          "end": 99,
          "old_token": "190",
          "new_token": "191.9",
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
          "old": "190",
          "new": "191.9"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 259495,
          "source_spell_id": 265157,
          "effect_index": 1,
          "effect_text": "School Damage (Fire) (AP mod: 1.9 )",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.01,
          "final_pvp_multiplier": 1.01,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            259495,
            265157
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256941,
              "game_effect_id": 1264706,
              "amount_kind": "direct",
              "value_pct": 1.0,
              "factor": 1.01,
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
          "talent_spell_id": 259495,
          "source_spell_id": 269747,
          "effect_index": 1,
          "effect_text": "Apply Aura: Periodic Damage",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "periodic",
          "aura_factor": 1.01,
          "final_pvp_multiplier": 1.01,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            259495,
            269747
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256941,
              "game_effect_id": 1266380,
              "amount_kind": "periodic",
              "value_pct": 1.0,
              "factor": 1.01,
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
      "talent_name": "Raptor Strike",
      "spell_id": 186270,
      "node_id": 102262,
      "entry_id": 126322,
      "definition_id": 131148,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102262,
        "node_name": "Raptor Strike",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102255
        ],
        "next": [
          102263
        ],
        "entry_id": 126322,
        "entry_max_ranks": 1,
        "definition_id": 131148,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Raptor Strike",
        "spell_id": 186270,
        "visible_spell_id": null,
        "icon": "ability_hunter_raptorstrike",
        "icon_candidates": [
          "ability_hunter_raptorstrike"
        ]
      },
      "pve_tooltip": "30 Focus\nMelee Range\nInstant\nA vicious slash dealing (393.25% of Attack Power) Physical damage.",
      "pvp_tooltip": "30 Focus\nMelee Range\nInstant\nA vicious slash dealing (476.619% of Attack Power) Physical damage.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 54,
          "end": 60,
          "old_token": "393.25",
          "new_token": "476.619",
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
          "old": "393.25",
          "new": "476.619"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 186270,
          "source_spell_id": 186270,
          "effect_index": 1,
          "effect_text": "School Damage (Physical) (AP mod: 3.9325 )",
          "base_value": null,
          "spell_pvp_multiplier": 1.2,
          "amount_kind": "direct",
          "aura_factor": 1.01,
          "final_pvp_multiplier": 1.212,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [
            {
              "aura_spell_id": 1256941,
              "game_effect_id": 1264706,
              "amount_kind": "direct",
              "value_pct": 1.0,
              "factor": 1.01,
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
      "talent_name": "Guerrilla Tactics",
      "spell_id": 264332,
      "node_id": 102285,
      "entry_id": 126345,
      "definition_id": 131171,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102285,
        "node_name": "Guerrilla Tactics",
        "node_type": "single",
        "pos_x": 12000,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102264
        ],
        "next": [
          102272,
          109324
        ],
        "entry_id": 126345,
        "entry_max_ranks": 1,
        "definition_id": 131171,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Guerrilla Tactics",
        "spell_id": 264332,
        "visible_spell_id": null,
        "icon": "spell_mage_flameorb",
        "icon_candidates": [
          "spell_mage_flameorb"
        ]
      },
      "pve_tooltip": "Wildfire Bomb now has 2 charges, and the initial explosion deals 15% increased damage.",
      "pvp_tooltip": "Wildfire Bomb now has 2 charges, and the initial explosion deals 15% increased damage.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Tip of the Spear",
      "spell_id": 260285,
      "node_id": 102263,
      "entry_id": 126323,
      "definition_id": 131149,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102263,
        "node_name": "Tip of the Spear",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102262
        ],
        "next": [
          109324,
          109321
        ],
        "entry_id": 126323,
        "entry_max_ranks": 1,
        "definition_id": 131149,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Tip of the Spear",
        "spell_id": 260285,
        "visible_spell_id": null,
        "icon": "ability_bossmannoroth_glaivethrust",
        "icon_candidates": [
          "ability_bossmannoroth_glaivethrust"
        ]
      },
      "pve_tooltip": "Kill Command increases the direct damage of your other abilities by 15%, stacking up to 3 times.",
      "pvp_tooltip": "Kill Command increases the direct damage of your other abilities by 15%, stacking up to 3 times.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Lunge",
      "spell_id": 378934,
      "node_id": 102272,
      "entry_id": 126332,
      "definition_id": 131158,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102272,
        "node_name": "Lunge",
        "node_type": "single",
        "pos_x": 11400,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102285
        ],
        "next": [
          109309,
          102270
        ],
        "entry_id": 126332,
        "entry_max_ranks": 1,
        "definition_id": 131158,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Lunge",
        "spell_id": 378934,
        "visible_spell_id": null,
        "icon": "inv_polearm_2h_kultirasharpoon_a_01",
        "icon_candidates": [
          "inv_polearm_2h_kultirasharpoon_a_01"
        ]
      },
      "pve_tooltip": "The damage of your auto-attacks is increased by 25%.\nYour Agility is increased by 3%, increased by an additional 1% while dual-wielding.",
      "pvp_tooltip": "The damage of your auto-attacks is increased by 25%.\nYour Agility is increased by 3%, increased by an additional 1% while dual-wielding.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Boomstick",
      "spell_id": 1261193,
      "node_id": 109324,
      "entry_id": 135515,
      "definition_id": 140272,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109324,
        "node_name": "Boomstick",
        "node_type": "single",
        "pos_x": 12600,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102263,
          102285
        ],
        "next": [
          102270,
          110162,
          102279
        ],
        "entry_id": 135515,
        "entry_max_ranks": 1,
        "definition_id": 140272,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Boomstick",
        "spell_id": 1261193,
        "visible_spell_id": null,
        "icon": "inv_musket_04",
        "icon_candidates": [
          "inv_musket_04"
        ]
      },
      "pve_tooltip": "50 Focus\n20 yd range\nChanneled (3 sec cast)\n1 min cooldown\nUnload a series of 4 shotgun blasts 20 yds in front of you, dealing [(607.5% of Attack Power) * 4] Physical damage over 3 sec. Deals reduced damage beyond 8 targets.",
      "pvp_tooltip": "50 Focus\n20 yd range\nChanneled (3 sec cast)\n1 min cooldown\nUnload a series of 4 shotgun blasts 20 yds in front of you, dealing [(613.575% of Attack Power) * 4] Physical damage over 3 sec. Deals reduced damage beyond 8 targets.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 129,
          "end": 134,
          "old_token": "607.5",
          "new_token": "613.575",
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
          "old": "607.5",
          "new": "613.575"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 1261193,
          "source_spell_id": 1261215,
          "effect_index": 1,
          "effect_text": "School Damage (Physical) (AP mod: 6.075 )",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.01,
          "final_pvp_multiplier": 1.01,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1261193,
            1261215
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256941,
              "game_effect_id": 1264706,
              "amount_kind": "direct",
              "value_pct": 1.0,
              "factor": 1.01,
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
      "talent_name": "Strike as One",
      "spell_id": 1251717,
      "node_id": 109321,
      "entry_id": 135512,
      "definition_id": 140269,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109321,
        "node_name": "Strike as One",
        "node_type": "single",
        "pos_x": 13800,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102263
        ],
        "next": [
          102279,
          109305,
          110163
        ],
        "entry_id": 135512,
        "entry_max_ranks": 1,
        "definition_id": 140269,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Strike as One",
        "spell_id": 1251717,
        "visible_spell_id": null,
        "icon": "inv_coordinatedassault",
        "icon_candidates": [
          "inv_coordinatedassault"
        ]
      },
      "pve_tooltip": "Consuming Tip of the Spear provokes your pet to attack your target, dealing (180% of Attack Power) Physical damage.\nAll damage dealt by your pet is increased by 30%.\n(700ms cooldown)",
      "pvp_tooltip": "Consuming Tip of the Spear provokes your pet to attack your target, dealing (180% of Attack Power) Physical damage.\nAll damage dealt by your pet is increased by 30%.\n(700ms cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Shrapnel Bomb",
      "spell_id": 1253172,
      "node_id": 109309,
      "entry_id": 135500,
      "definition_id": 140257,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109309,
        "node_name": "Shrapnel Bomb / Flamebreak",
        "node_type": "choice",
        "pos_x": 10800,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102272
        ],
        "next": [
          109310
        ],
        "entry_id": 135500,
        "entry_max_ranks": 1,
        "definition_id": 140257,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Shrapnel Bomb",
        "spell_id": 1253172,
        "visible_spell_id": null,
        "icon": "inv_wildfirebomb_shrapnel",
        "icon_candidates": [
          "inv_wildfirebomb_shrapnel"
        ]
      },
      "pve_tooltip": "Wildfire Bomb's periodic effect is now a Bleed and grants you and your pet 15 Focus over 3 sec.",
      "pvp_tooltip": "Wildfire Bomb's periodic effect is now a Bleed and grants you and your pet 15 Focus over 3 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Flamebreak",
      "spell_id": 1253176,
      "node_id": 109309,
      "entry_id": 135493,
      "definition_id": 140250,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109309,
        "node_name": "Shrapnel Bomb / Flamebreak",
        "node_type": "choice",
        "pos_x": 10800,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102272
        ],
        "next": [
          109310
        ],
        "entry_id": 135493,
        "entry_max_ranks": 1,
        "definition_id": 140250,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Flamebreak",
        "spell_id": 1253176,
        "visible_spell_id": null,
        "icon": "inv_wildfirebomb_blood",
        "icon_candidates": [
          "inv_wildfirebomb_blood"
        ]
      },
      "pve_tooltip": "All Fire damage dealt is increased by 8%.",
      "pvp_tooltip": "All Fire damage dealt is increased by 8%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Bloodseeker",
      "spell_id": 260248,
      "node_id": 102270,
      "entry_id": 126330,
      "definition_id": 131156,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102270,
        "node_name": "Bloodseeker",
        "node_type": "single",
        "pos_x": 12000,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109324,
          102272
        ],
        "next": [
          109310
        ],
        "entry_id": 126330,
        "entry_max_ranks": 1,
        "definition_id": 131156,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Bloodseeker",
        "spell_id": 260248,
        "visible_spell_id": null,
        "icon": "ability_druid_primaltenacity",
        "icon_candidates": [
          "ability_druid_primaltenacity"
        ]
      },
      "pve_tooltip": "Unlimited range\nYou and your pet gain 10% attack speed for every bleeding enemy within 12 yds.",
      "pvp_tooltip": "Unlimited range\nYou and your pet gain 10% attack speed for every bleeding enemy within 12 yds.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Quick Reload",
      "spell_id": 1272136,
      "node_id": 110162,
      "entry_id": 136683,
      "definition_id": 141455,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110162,
        "node_name": "Quick Reload",
        "node_type": "single",
        "pos_x": 12600,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109324
        ],
        "next": [
          109316,
          109319
        ],
        "entry_id": 136683,
        "entry_max_ranks": 1,
        "definition_id": 141455,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Quick Reload",
        "spell_id": 1272136,
        "visible_spell_id": null,
        "icon": "ability_vehicle_reloadammo",
        "icon_candidates": [
          "ability_vehicle_reloadammo"
        ]
      },
      "pve_tooltip": "Boomstick's cooldown is reduced by 15 sec.",
      "pvp_tooltip": "Boomstick's cooldown is reduced by 15 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Flanker's Advantage",
      "spell_id": 459964,
      "node_id": 102279,
      "entry_id": 126339,
      "definition_id": 131165,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102279,
        "node_name": "Flanker's Advantage",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109324,
          109321
        ],
        "next": [
          110159
        ],
        "entry_id": 126339,
        "entry_max_ranks": 1,
        "definition_id": 131165,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Flanker's Advantage",
        "spell_id": 459964,
        "visible_spell_id": null,
        "icon": "ability_hunter_beastmastery",
        "icon_candidates": [
          "ability_hunter_beastmastery"
        ]
      },
      "pve_tooltip": "Kill Command grants an additional 5 Focus and its critical strike chance is increased by 10%.",
      "pvp_tooltip": "Kill Command grants an additional 5 Focus and its critical strike chance is increased by 10%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Sic 'Em",
      "spell_id": 1253137,
      "node_id": 109305,
      "entry_id": 135496,
      "definition_id": 140253,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109305,
        "node_name": "Sic 'Em",
        "node_type": "single",
        "pos_x": 13800,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109321
        ],
        "next": [
          110159
        ],
        "entry_id": 135496,
        "entry_max_ranks": 1,
        "definition_id": 140253,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Sic 'Em",
        "spell_id": 1253137,
        "visible_spell_id": null,
        "icon": "ability_hunter_sickem",
        "icon_candidates": [
          "ability_hunter_sickem"
        ]
      },
      "pve_tooltip": "When Strike as One critically strikes, it bleeds its target for an additional (40% of Attack Power) damage over 5 sec.",
      "pvp_tooltip": "When Strike as One critically strikes, it bleeds its target for an additional (40% of Attack Power) damage over 5 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 1253137,
          "source_spell_id": 1253138,
          "effect_index": 1,
          "effect_text": "Apply Aura: Periodic Damage",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "periodic",
          "aura_factor": 1.01,
          "final_pvp_multiplier": 1.01,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1253137,
            1253138
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256941,
              "game_effect_id": 1266380,
              "amount_kind": "periodic",
              "value_pct": 1.0,
              "factor": 1.01,
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
      "talent_name": "Two Against Many",
      "spell_id": 1251718,
      "node_id": 110163,
      "entry_id": 136684,
      "definition_id": 141456,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110163,
        "node_name": "Two Against Many",
        "node_type": "single",
        "pos_x": 14400,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109321
        ],
        "next": [
          110159
        ],
        "entry_id": 136684,
        "entry_max_ranks": 1,
        "definition_id": 141456,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Two Against Many",
        "spell_id": 1251718,
        "visible_spell_id": null,
        "icon": "ability_hunter_separationanxiety",
        "icon_candidates": [
          "ability_hunter_separationanxiety"
        ]
      },
      "pve_tooltip": "Strike as One damages 2 additional enemies and its damage is increased by 10% for each enemy it strikes beyond the first.",
      "pvp_tooltip": "Strike as One damages 2 additional enemies and its damage is increased by 10% for each enemy it strikes beyond the first.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Mongoose Fury",
      "spell_id": 1252708,
      "node_id": 109310,
      "entry_id": 135501,
      "definition_id": 140258,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109310,
        "node_name": "Mongoose Fury",
        "node_type": "single",
        "pos_x": 11400,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102270,
          109309
        ],
        "next": [
          109307,
          102289,
          109311
        ],
        "entry_id": 135501,
        "entry_max_ranks": 1,
        "definition_id": 140258,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Mongoose Fury",
        "spell_id": 1252708,
        "visible_spell_id": null,
        "icon": "ability_hunter_mongoosebite",
        "icon_candidates": [
          "ability_hunter_mongoosebite"
        ]
      },
      "pve_tooltip": "Raptor Strike increases the damage of Raptor Strike by 10% for 8 sec. Multiple applications may overlap.",
      "pvp_tooltip": "Raptor Strike increases the damage of Raptor Strike by 10% for 8 sec. Multiple applications may overlap.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Mongoose Rounds",
      "spell_id": 1253945,
      "node_id": 109316,
      "entry_id": 135507,
      "definition_id": 140264,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109316,
        "node_name": "Mongoose Rounds / Wildfire Shells",
        "node_type": "choice",
        "pos_x": 12000,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          110162
        ],
        "next": [
          109311,
          109313
        ],
        "entry_id": 135507,
        "entry_max_ranks": 1,
        "definition_id": 140264,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Mongoose Rounds",
        "spell_id": 1253945,
        "visible_spell_id": null,
        "icon": "inv_ammo_bullet_08",
        "icon_candidates": [
          "inv_ammo_bullet_08"
        ]
      },
      "pve_tooltip": "Damaging one or more enemies with your Boomstick grants you 1 stack of Mongoose Fury.\nMongoose Fury\nRaptor Strike damage increased by 10%.\n(100ms cooldown)",
      "pvp_tooltip": "Damaging one or more enemies with your Boomstick grants you 1 stack of Mongoose Fury.\nMongoose Fury\nRaptor Strike damage increased by 10%.\n(100ms cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Wildfire Shells",
      "spell_id": 1261229,
      "node_id": 109316,
      "entry_id": 136066,
      "definition_id": 140821,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109316,
        "node_name": "Mongoose Rounds / Wildfire Shells",
        "node_type": "choice",
        "pos_x": 12000,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          110162
        ],
        "next": [
          109311,
          109313
        ],
        "entry_id": 136066,
        "entry_max_ranks": 1,
        "definition_id": 140821,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Wildfire Shells",
        "spell_id": 1261229,
        "visible_spell_id": null,
        "icon": "inv_ammo_firetar",
        "icon_candidates": [
          "inv_ammo_firetar"
        ]
      },
      "pve_tooltip": "Damaging one or more enemies with your Boomstick reduces the cooldown of Wildfire Bomb by 3.0 sec.\n(100ms cooldown)",
      "pvp_tooltip": "Damaging one or more enemies with your Boomstick reduces the cooldown of Wildfire Bomb by 3.0 sec.\n(100ms cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Shellshock",
      "spell_id": 1252931,
      "node_id": 109319,
      "entry_id": 135510,
      "definition_id": 140267,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109319,
        "node_name": "Shellshock",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          110162
        ],
        "next": [
          109313,
          102282
        ],
        "entry_id": 135510,
        "entry_max_ranks": 1,
        "definition_id": 140267,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Shellshock",
        "spell_id": 1252931,
        "visible_spell_id": null,
        "icon": "inv_10_engineering2_pvpflaregun_color1",
        "icon_candidates": [
          "inv_10_engineering2_pvpflaregun_color1"
        ]
      },
      "pve_tooltip": "Your Boomstick's damage is increased by 40% when striking a single target.\nEach additional target reduces this bonus by 5%.",
      "pvp_tooltip": "Your Boomstick's damage is increased by 40% when striking a single target.\nEach additional target reduces this bonus by 5%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Primal Surge",
      "spell_id": 1272154,
      "node_id": 110159,
      "entry_id": 136680,
      "definition_id": 141452,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110159,
        "node_name": "Primal Surge",
        "node_type": "single",
        "pos_x": 13800,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109305,
          110163,
          102279
        ],
        "next": [
          102282,
          109306
        ],
        "entry_id": 136680,
        "entry_max_ranks": 1,
        "definition_id": 141452,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Primal Surge",
        "spell_id": 1272154,
        "visible_spell_id": null,
        "icon": "ability_hunter_longevity",
        "icon_candidates": [
          "ability_hunter_longevity"
        ]
      },
      "pve_tooltip": "Kill Command grants 1 additional stack of Tip of the Spear.\nTip of the Spear's damage bonus is increased by 5%.",
      "pvp_tooltip": "Kill Command grants 1 additional stack of Tip of the Spear.\nTip of the Spear's damage bonus is increased by 5%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Bloody Claws",
      "spell_id": 385737,
      "node_id": 109307,
      "entry_id": 135498,
      "definition_id": 140255,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109307,
        "node_name": "Bloody Claws / Wallop",
        "node_type": "choice",
        "pos_x": 10800,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109310
        ],
        "next": [
          102281
        ],
        "entry_id": 135498,
        "entry_max_ranks": 1,
        "definition_id": 140255,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Bloody Claws",
        "spell_id": 385737,
        "visible_spell_id": null,
        "icon": "ability_druid_disembowel",
        "icon_candidates": [
          "ability_druid_disembowel"
        ]
      },
      "pve_tooltip": "Each stack of Mongoose Fury also increases the damage of Strike as One by 10%.",
      "pvp_tooltip": "Each stack of Mongoose Fury also increases the damage of Strike as One by 10%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Wallop",
      "spell_id": 1252738,
      "node_id": 109307,
      "entry_id": 136144,
      "definition_id": 140899,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109307,
        "node_name": "Bloody Claws / Wallop",
        "node_type": "choice",
        "pos_x": 10800,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109310
        ],
        "next": [
          102281
        ],
        "entry_id": 136144,
        "entry_max_ranks": 1,
        "definition_id": 140899,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Wallop",
        "spell_id": 1252738,
        "visible_spell_id": null,
        "icon": "ability_butcher_heavyhanded",
        "icon_candidates": [
          "ability_butcher_heavyhanded"
        ]
      },
      "pve_tooltip": "Gaining a stack of Mongoose Fury has a 20% chance to increase the damage of your next Raptor Strike by 50%.",
      "pvp_tooltip": "Gaining a stack of Mongoose Fury has a 20% chance to increase the damage of your next Raptor Strike by 25%.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 103,
          "end": 105,
          "old_token": "50",
          "new_token": "25",
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
          "new": "25"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 1252738,
          "source_spell_id": 1252741,
          "effect_index": 1,
          "effect_text": "Apply Aura: Modifies Damage/Healing Done",
          "base_value": 50.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 25.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1252738,
            1252741
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
      "talent_name": "Improved Wildfire Bomb",
      "spell_id": 321290,
      "node_id": 102289,
      "entry_id": 126349,
      "definition_id": 131175,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102289,
        "node_name": "Improved Wildfire Bomb",
        "node_type": "single",
        "pos_x": 11400,
        "pos_y": 5100,
        "max_ranks": 2,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109310
        ],
        "next": [
          102281
        ],
        "entry_id": 126349,
        "entry_max_ranks": 2,
        "definition_id": 131175,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Improved Wildfire Bomb",
        "spell_id": 321290,
        "visible_spell_id": null,
        "icon": "inv_eng_bombfire",
        "icon_candidates": [
          "inv_eng_bombfire"
        ]
      },
      "pve_tooltip": "Wildfire Bomb deals 12% additional damage.",
      "pvp_tooltip": "Wildfire Bomb deals 12% additional damage.",
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
          "pve_tooltip": "Wildfire Bomb deals 6% additional damage.",
          "pvp_tooltip": "Wildfire Bomb deals 6% additional damage.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "Wildfire Bomb deals 12% additional damage.",
          "pvp_tooltip": "Wildfire Bomb deals 12% additional damage.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Bonding",
      "spell_id": 1262442,
      "node_id": 109311,
      "entry_id": 135502,
      "definition_id": 140259,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109311,
        "node_name": "Bonding",
        "node_type": "single",
        "pos_x": 12000,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109310,
          109316
        ],
        "next": [
          102281,
          109323
        ],
        "entry_id": 135502,
        "entry_max_ranks": 1,
        "definition_id": 140259,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Bonding",
        "spell_id": 1262442,
        "visible_spell_id": null,
        "icon": "ability_hunter_beastwithin",
        "icon_candidates": [
          "ability_hunter_beastwithin"
        ]
      },
      "pve_tooltip": "Mastery increased by 3%.\nYou gain 5% increased Mastery from all Mastery sources.",
      "pvp_tooltip": "Mastery increased by 3%.\nYou gain 5% increased Mastery from all Mastery sources.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Sweeping Spear",
      "spell_id": 378950,
      "node_id": 109313,
      "entry_id": 135504,
      "definition_id": 140261,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109313,
        "node_name": "Sweeping Spear",
        "node_type": "single",
        "pos_x": 12600,
        "pos_y": 5100,
        "max_ranks": 2,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109316,
          109319
        ],
        "next": [
          109323
        ],
        "entry_id": 135504,
        "entry_max_ranks": 2,
        "definition_id": 140261,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Sweeping Spear",
        "spell_id": 378950,
        "visible_spell_id": null,
        "icon": "spell_warrior_wildstrike",
        "icon_candidates": [
          "spell_warrior_wildstrike"
        ]
      },
      "pve_tooltip": "Raptor Strike damage increased by 20%.",
      "pvp_tooltip": "Raptor Strike damage increased by 20%.",
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
          "pve_tooltip": "Raptor Strike damage increased by 10%.",
          "pvp_tooltip": "Raptor Strike damage increased by 10%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "Raptor Strike damage increased by 20%.",
          "pvp_tooltip": "Raptor Strike damage increased by 20%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Vulnerability",
      "spell_id": 1257011,
      "node_id": 102282,
      "entry_id": 126342,
      "definition_id": 131168,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102282,
        "node_name": "Vulnerability / Blackrock Munitions",
        "node_type": "choice",
        "pos_x": 13200,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109319,
          110159
        ],
        "next": [
          109323,
          109312
        ],
        "entry_id": 126342,
        "entry_max_ranks": 1,
        "definition_id": 131168,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Vulnerability",
        "spell_id": 1257011,
        "visible_spell_id": null,
        "icon": "ability_rogue_findweakness",
        "icon_candidates": [
          "ability_rogue_findweakness"
        ]
      },
      "pve_tooltip": "Raptor Strike and Boomstick deal 20% increased critical strike damage.",
      "pvp_tooltip": "Raptor Strike and Boomstick deal 20% increased critical strike damage.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Blackrock Munitions",
      "spell_id": 462036,
      "node_id": 102282,
      "entry_id": 135688,
      "definition_id": 140444,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102282,
        "node_name": "Vulnerability / Blackrock Munitions",
        "node_type": "choice",
        "pos_x": 13200,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109319,
          110159
        ],
        "next": [
          109323,
          109312
        ],
        "entry_id": 135688,
        "entry_max_ranks": 1,
        "definition_id": 140444,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Blackrock Munitions",
        "spell_id": 462036,
        "visible_spell_id": null,
        "icon": "inv_ore_blackrock_nugget",
        "icon_candidates": [
          "inv_ore_blackrock_nugget"
        ]
      },
      "pve_tooltip": "Wildfire Bomb deals 20% increased critical strike damage.",
      "pvp_tooltip": "Wildfire Bomb deals 20% increased critical strike damage.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Outland Venom",
      "spell_id": 459939,
      "node_id": 109306,
      "entry_id": 135497,
      "definition_id": 140254,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109306,
        "node_name": "Outland Venom",
        "node_type": "single",
        "pos_x": 14400,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          110159
        ],
        "next": [
          109312
        ],
        "entry_id": 135497,
        "entry_max_ranks": 1,
        "definition_id": 140254,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Outland Venom",
        "spell_id": 459939,
        "visible_spell_id": null,
        "icon": "ability_hunter_potentvenom",
        "icon_candidates": [
          "ability_hunter_potentvenom"
        ]
      },
      "pve_tooltip": "Each damage over time effect on a target increases the critical strike damage they receive from you by 4%.",
      "pvp_tooltip": "Each damage over time effect on a target increases the critical strike damage they receive from you by 4%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Explosives Expert",
      "spell_id": 378937,
      "node_id": 102281,
      "entry_id": 126341,
      "definition_id": 131167,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102281,
        "node_name": "Explosives Expert",
        "node_type": "single",
        "pos_x": 11400,
        "pos_y": 5700,
        "max_ranks": 2,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102289,
          109311,
          109307
        ],
        "next": [
          102252
        ],
        "entry_id": 126341,
        "entry_max_ranks": 2,
        "definition_id": 131167,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Explosives Expert",
        "spell_id": 378937,
        "visible_spell_id": null,
        "icon": "inv_misc_bomb_05",
        "icon_candidates": [
          "inv_misc_bomb_05"
        ]
      },
      "pve_tooltip": "Wildfire Bomb and Boomstick damage increased by 10%.",
      "pvp_tooltip": "Wildfire Bomb and Boomstick damage increased by 10%.",
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
          "pve_tooltip": "Wildfire Bomb and Boomstick damage increased by 5%.",
          "pvp_tooltip": "Wildfire Bomb and Boomstick damage increased by 5%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "Wildfire Bomb and Boomstick damage increased by 10%.",
          "pvp_tooltip": "Wildfire Bomb and Boomstick damage increased by 10%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Takedown",
      "spell_id": 1250646,
      "node_id": 109323,
      "entry_id": 135514,
      "definition_id": 140271,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109323,
        "node_name": "Takedown",
        "node_type": "single",
        "pos_x": 12600,
        "pos_y": 5700,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109311,
          109313,
          102282
        ],
        "next": [
          109470,
          109320
        ],
        "entry_id": 135514,
        "entry_max_ranks": 1,
        "definition_id": 140271,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Takedown",
        "spell_id": 1250646,
        "visible_spell_id": null,
        "icon": "inv12_ability_hunter_takedown",
        "icon_candidates": [
          "inv12_ability_hunter_takedown"
        ]
      },
      "pve_tooltip": "15 yd range\nInstant\n1.5 min cooldown\nYou and your pet leap to your target and strike as one, dealing (600% of Attack Power) + (1200% of Attack Power) Physical damage. Your pet frees itself from roots when it leaps.\nFor the next 8 sec, the damage dealt by you and your pet is increased by 20%.\nGenerates 50 Focus.",
      "pvp_tooltip": "15 yd range\nInstant\n1.5 min cooldown\nYou and your pet leap to your target and strike as one, dealing (289.7438% of Attack Power) + (613.575% of Attack Power) Physical damage. Your pet frees itself from roots when it leaps.\nFor the next 8 sec, the damage dealt by you and your pet is increased by 20%.\nGenerates 50 Focus.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 127,
          "end": 131,
          "old_token": "1200",
          "new_token": "613.575",
          "kind": "attack_power_coefficient",
          "effect_indexes": [
            1
          ]
        },
        {
          "start": 102,
          "end": 105,
          "old_token": "600",
          "new_token": "289.7438",
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
          "old": "600",
          "new": "289.7438"
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "attack_power_coefficient",
          "old": "1200",
          "new": "613.575"
        },
        {
          "status": "OFFICIAL_HOTFIX_CURRENT",
          "source": "blizzard_hotfix",
          "source_url": "https://news.blizzard.com/en-us/article/24296142/hotfixes-september-24-2026",
          "hotfix_date": "2026-09-22",
          "hotfix_text": "Takedown Hunter damage reduced by 10% in PvP combat.",
          "reason": "RELATIVE_HOTFIX_EVIDENCE",
          "evidence": {
            "source": "historical_verified_snapshot",
            "field": "effective_player_value",
            "source_spell_id": 1253859,
            "effect_index": 1,
            "old_value": 6.8175,
            "new_value": 6.13575,
            "ratio": 0.9,
            "baseline_commit": "dc80a9d44b8a4b34ccbbdec61b5910e7915de290"
          }
        },
        {
          "status": "OFFICIAL_HOTFIX_CURRENT",
          "source": "blizzard_hotfix",
          "source_url": "https://news.blizzard.com/en-us/article/24296142/hotfixes-september-24-2026",
          "hotfix_date": "2026-09-22",
          "hotfix_text": "Takedown Pet damage reduced by 15% in PvP combat.",
          "reason": "RELATIVE_HOTFIX_EVIDENCE",
          "evidence": {
            "source": "historical_verified_snapshot",
            "field": "effective_player_value",
            "source_spell_id": 1253862,
            "effect_index": 1,
            "old_value": 3.40875,
            "new_value": 2.8974375,
            "ratio": 0.8500000000000001,
            "baseline_commit": "dc80a9d44b8a4b34ccbbdec61b5910e7915de290"
          }
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 1250646,
          "source_spell_id": 1253859,
          "effect_index": 1,
          "effect_text": "School Damage (Physical) (AP mod: 12 )",
          "base_value": null,
          "spell_pvp_multiplier": 0.50625,
          "amount_kind": "direct",
          "aura_factor": 1.01,
          "final_pvp_multiplier": 0.5113125,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1250646,
            1253859
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256941,
              "game_effect_id": 1264706,
              "amount_kind": "direct",
              "value_pct": 1.0,
              "factor": 1.01,
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
          "talent_spell_id": 1250646,
          "source_spell_id": 1253862,
          "effect_index": 1,
          "effect_text": "School Damage (Physical) (AP mod: 6 )",
          "base_value": null,
          "spell_pvp_multiplier": 0.478125,
          "amount_kind": "direct",
          "aura_factor": 1.01,
          "final_pvp_multiplier": 0.48290625000000004,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1250646,
            1253862
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256941,
              "game_effect_id": 1264706,
              "amount_kind": "direct",
              "value_pct": 1.0,
              "factor": 1.01,
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
      "render_effect_count": 2,
      "rank_tooltips": []
    },
    {
      "talent_name": "Killer Companion",
      "spell_id": 378955,
      "node_id": 109312,
      "entry_id": 135503,
      "definition_id": 140260,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109312,
        "node_name": "Killer Companion",
        "node_type": "single",
        "pos_x": 13800,
        "pos_y": 5700,
        "max_ranks": 2,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109306,
          102282
        ],
        "next": [
          102268
        ],
        "entry_id": 135503,
        "entry_max_ranks": 2,
        "definition_id": 140260,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Killer Companion",
        "spell_id": 378955,
        "visible_spell_id": null,
        "icon": "ability_hunter_masterscall",
        "icon_candidates": [
          "ability_hunter_masterscall"
        ]
      },
      "pve_tooltip": "All damage dealt by your pet is increased by 20%.",
      "pvp_tooltip": "All damage dealt by your pet is increased by 20%.",
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
          "pve_tooltip": "All damage dealt by your pet is increased by 10%.",
          "pvp_tooltip": "All damage dealt by your pet is increased by 10%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "All damage dealt by your pet is increased by 20%.",
          "pvp_tooltip": "All damage dealt by your pet is increased by 20%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Bombardier",
      "spell_id": 1311963,
      "node_id": 102252,
      "entry_id": 126311,
      "definition_id": 131137,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102252,
        "node_name": "Bombardier",
        "node_type": "single",
        "pos_x": 11400,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102281
        ],
        "next": [
          109317,
          110160
        ],
        "entry_id": 126311,
        "entry_max_ranks": 1,
        "definition_id": 131137,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Bombardier",
        "spell_id": 1311963,
        "visible_spell_id": null,
        "icon": "inv_misc_blackironbomb",
        "icon_candidates": [
          "inv_misc_blackironbomb"
        ]
      },
      "pve_tooltip": "Wildfire Bomb damage increased by 15%, critical strike chance increased by 15%, and critical damage dealt increased by 15%.",
      "pvp_tooltip": "Wildfire Bomb damage increased by 15%, critical strike chance increased by 15%, and critical damage dealt increased by 15%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Twin Fangs",
      "spell_id": 1272139,
      "node_id": 109470,
      "entry_id": 135689,
      "definition_id": 140445,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109470,
        "node_name": "Twin Fangs",
        "node_type": "single",
        "pos_x": 12000,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109323
        ],
        "next": [
          110161
        ],
        "entry_id": 135689,
        "entry_max_ranks": 1,
        "definition_id": 140445,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Twin Fangs",
        "spell_id": 1272139,
        "visible_spell_id": null,
        "icon": "ability_hunter_spearhead",
        "icon_candidates": [
          "ability_hunter_spearhead"
        ]
      },
      "pve_tooltip": "Takedown grants 3 stacks of Tip of the Spear.",
      "pvp_tooltip": "Takedown grants 3 stacks of Tip of the Spear.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Savagery",
      "spell_id": 1251790,
      "node_id": 109320,
      "entry_id": 135511,
      "definition_id": 140268,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109320,
        "node_name": "Savagery",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 6300,
        "max_ranks": 2,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109323
        ],
        "next": [
          110161
        ],
        "entry_id": 135511,
        "entry_max_ranks": 2,
        "definition_id": 140268,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Savagery",
        "spell_id": 1251790,
        "visible_spell_id": null,
        "icon": "ability_hunter_ferociousinspiration",
        "icon_candidates": [
          "ability_hunter_ferociousinspiration"
        ]
      },
      "pve_tooltip": "Takedown cooldown reduced by 30 sec.",
      "pvp_tooltip": "Takedown cooldown reduced by 30 sec.",
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
          "pve_tooltip": "Takedown cooldown reduced by 15 sec.",
          "pvp_tooltip": "Takedown cooldown reduced by 15 sec.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "Takedown cooldown reduced by 30 sec.",
          "pvp_tooltip": "Takedown cooldown reduced by 30 sec.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Wildfire Infusion",
      "spell_id": 460198,
      "node_id": 102268,
      "entry_id": 126328,
      "definition_id": 131154,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102268,
        "node_name": "Wildfire Infusion",
        "node_type": "single",
        "pos_x": 13800,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109312
        ],
        "next": [
          102257,
          109304
        ],
        "entry_id": 126328,
        "entry_max_ranks": 1,
        "definition_id": 131154,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Wildfire Infusion",
        "spell_id": 460198,
        "visible_spell_id": null,
        "icon": "inv_misc_5potionbag_special",
        "icon_candidates": [
          "inv_misc_5potionbag_special"
        ]
      },
      "pve_tooltip": "Kill Command damage increased by 15%.\nKill Command reduces the cooldown of Wildfire Bomb by 1.0 sec.",
      "pvp_tooltip": "Kill Command damage increased by 15%.\nKill Command reduces the cooldown of Wildfire Bomb by 1.0 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Grenade Juggler",
      "spell_id": 459843,
      "node_id": 109317,
      "entry_id": 135508,
      "definition_id": 140265,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109317,
        "node_name": "Grenade Juggler",
        "node_type": "single",
        "pos_x": 10800,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102252
        ],
        "next": [],
        "entry_id": 135508,
        "entry_max_ranks": 1,
        "definition_id": 140265,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Grenade Juggler",
        "spell_id": 459843,
        "visible_spell_id": null,
        "icon": "inv_misc_mohawkgrenade",
        "icon_candidates": [
          "inv_misc_mohawkgrenade"
        ]
      },
      "pve_tooltip": "Boomstick increases the cooldown recovery rate of Wildfire Bomb by 60% for 8 sec.",
      "pvp_tooltip": "Boomstick increases the cooldown recovery rate of Wildfire Bomb by 60% for 8 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Wildfire Imbuement",
      "spell_id": 1252943,
      "node_id": 110160,
      "entry_id": 136681,
      "definition_id": 141453,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110160,
        "node_name": "Wildfire Imbuement",
        "node_type": "single",
        "pos_x": 12000,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102252
        ],
        "next": [],
        "entry_id": 136681,
        "entry_max_ranks": 1,
        "definition_id": 141453,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Wildfire Imbuement",
        "spell_id": 1252943,
        "visible_spell_id": null,
        "icon": "spell_shaman_improvelavalash",
        "icon_candidates": [
          "spell_shaman_improvelavalash"
        ]
      },
      "pve_tooltip": "Approximately 2 procs per minute\nThrowing your Wildfire Bomb has a chance to imbue your weapon with flame, causing you and your pet's auto-attacks to deal an additional (40% of Attack Power) Fire damage for 10 sec.",
      "pvp_tooltip": "Approximately 2 procs per minute\nThrowing your Wildfire Bomb has a chance to imbue your weapon with flame, causing you and your pet's auto-attacks to deal an additional (40.4% of Attack Power) Fire damage for 10 sec.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 170,
          "end": 172,
          "old_token": "40",
          "new_token": "40.4",
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
          "old": "40",
          "new": "40.4"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 1252943,
          "source_spell_id": 1252966,
          "effect_index": 1,
          "effect_text": "School Damage (Fire) (AP mod: 0.4 )",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.01,
          "final_pvp_multiplier": 1.01,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1252943,
            1252966
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256941,
              "game_effect_id": 1264706,
              "amount_kind": "direct",
              "value_pct": 1.0,
              "factor": 1.01,
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
      "talent_name": "Flanked",
      "spell_id": 1256938,
      "node_id": 110161,
      "entry_id": 136682,
      "definition_id": 141454,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110161,
        "node_name": "Flanked",
        "node_type": "single",
        "pos_x": 12600,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109320,
          109470
        ],
        "next": [],
        "entry_id": 136682,
        "entry_max_ranks": 1,
        "definition_id": 141454,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Flanked",
        "spell_id": 1256938,
        "visible_spell_id": null,
        "icon": "ability_hunter_invigeration",
        "icon_candidates": [
          "ability_hunter_invigeration"
        ]
      },
      "pve_tooltip": "Takedown damage increased by 50% and it now strikes 4 additional nearby targets.\nDuring Takedown, your attack speed is increased by 100%.",
      "pvp_tooltip": "Takedown damage increased by 50% and it now strikes 4 additional nearby targets.\nDuring Takedown, your attack speed is increased by 100%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Lethal Calibration",
      "spell_id": 1262409,
      "node_id": 102257,
      "entry_id": 126316,
      "definition_id": 131142,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102257,
        "node_name": "Lethal Calibration",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102268
        ],
        "next": [],
        "entry_id": 126316,
        "entry_max_ranks": 1,
        "definition_id": 131142,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Lethal Calibration",
        "spell_id": 1262409,
        "visible_spell_id": null,
        "icon": "ability_siege_engineer_detonate",
        "icon_candidates": [
          "ability_siege_engineer_detonate"
        ]
      },
      "pve_tooltip": "Wildfire Bomb reduces the cooldown of Boomstick by 2.0 sec for each enemy hit, up to 10 sec.",
      "pvp_tooltip": "Wildfire Bomb reduces the cooldown of Boomstick by 2.0 sec for each enemy hit, up to 10 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Razor Edge",
      "spell_id": 1253053,
      "node_id": 109304,
      "entry_id": 135495,
      "definition_id": 140252,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109304,
        "node_name": "Razor Edge",
        "node_type": "single",
        "pos_x": 14400,
        "pos_y": 6900,
        "max_ranks": 2,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102268
        ],
        "next": [],
        "entry_id": 135495,
        "entry_max_ranks": 2,
        "definition_id": 140252,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Razor Edge",
        "spell_id": 1253053,
        "visible_spell_id": null,
        "icon": "spell_druid_bloodythrash",
        "icon_candidates": [
          "spell_druid_bloodythrash"
        ]
      },
      "pve_tooltip": "Raptor Strike and Kill Command gain 20% increased critical strike chance and 20% increased critical damage dealt.",
      "pvp_tooltip": "Raptor Strike and Kill Command gain 20% increased critical strike chance and 20% increased critical damage dealt.",
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
          "pve_tooltip": "Raptor Strike and Kill Command gain 10% increased critical strike chance and 10% increased critical damage dealt.",
          "pvp_tooltip": "Raptor Strike and Kill Command gain 10% increased critical strike chance and 10% increased critical damage dealt.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "Raptor Strike and Kill Command gain 20% increased critical strike chance and 20% increased critical damage dealt.",
          "pvp_tooltip": "Raptor Strike and Kill Command gain 20% increased critical strike chance and 20% increased critical damage dealt.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Raptor Swipe",
      "spell_id": 1259003,
      "node_id": 110429,
      "entry_id": 137055,
      "definition_id": 141818,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110429,
        "node_name": "Raptor Swipe / Raptor Swipe / Raptor Swipe",
        "node_type": "tiered",
        "pos_x": 12600,
        "pos_y": 7650,
        "max_ranks": 4,
        "required_points": 20,
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [],
        "entry_id": 137055,
        "entry_max_ranks": 1,
        "definition_id": 141818,
        "entry_index": 100,
        "entry_type": "tierrank",
        "talent_name": "Raptor Swipe",
        "spell_id": 1259003,
        "visible_spell_id": null,
        "icon": "inv12_apextalent_hunter_raptorswipe",
        "icon_candidates": [
          "inv12_apextalent_hunter_raptorswipe"
        ]
      },
      "pve_tooltip": "Raptor Strike has a 25% chance to upgrade itself to a Raptor Swipe, dealing (280% of Attack Power) Physical damage to all enemies within 15 yds in front of you. Damage reduced beyond 5 targets.",
      "pvp_tooltip": "Raptor Strike has a 25% chance to upgrade itself to a Raptor Swipe, dealing (339.36% of Attack Power) Physical damage to all enemies within 15 yds in front of you. Damage reduced beyond 5 targets.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 77,
          "end": 80,
          "old_token": "280",
          "new_token": "339.36",
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
          "old": "280",
          "new": "339.36"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 1259003,
          "source_spell_id": 1262293,
          "effect_index": 1,
          "effect_text": "School Damage (Physical) (AP mod: 2.8 )",
          "base_value": null,
          "spell_pvp_multiplier": 1.2,
          "amount_kind": "direct",
          "aura_factor": 1.01,
          "final_pvp_multiplier": 1.212,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1259003,
            1262293
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256941,
              "game_effect_id": 1264706,
              "amount_kind": "direct",
              "value_pct": 1.0,
              "factor": 1.01,
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
      "talent_name": "Raptor Swipe",
      "spell_id": 1259017,
      "node_id": 110429,
      "entry_id": 137054,
      "definition_id": 141817,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110429,
        "node_name": "Raptor Swipe / Raptor Swipe / Raptor Swipe",
        "node_type": "tiered",
        "pos_x": 12600,
        "pos_y": 7650,
        "max_ranks": 4,
        "required_points": 20,
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [],
        "entry_id": 137054,
        "entry_max_ranks": 2,
        "definition_id": 141817,
        "entry_index": 200,
        "entry_type": "tierrank",
        "talent_name": "Raptor Swipe",
        "spell_id": 1259017,
        "visible_spell_id": null,
        "icon": "ability_hunter_raptorstrike",
        "icon_candidates": [
          "ability_hunter_raptorstrike"
        ]
      },
      "pve_tooltip": "Raptor Strike, Wildfire Bomb, and Raptor Swipe damage increased by 20%.\nRaptor Swipe deals 70% increased damage to its primary target.",
      "pvp_tooltip": "Raptor Strike, Wildfire Bomb, and Raptor Swipe damage increased by 20%.\nRaptor Swipe deals 70% increased damage to its primary target.",
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
          "pve_tooltip": "Raptor Strike, Wildfire Bomb, and Raptor Swipe damage increased by 10%.\nRaptor Swipe deals 35% increased damage to its primary target.",
          "pvp_tooltip": "Raptor Strike, Wildfire Bomb, and Raptor Swipe damage increased by 10%.\nRaptor Swipe deals 35% increased damage to its primary target.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "Raptor Strike, Wildfire Bomb, and Raptor Swipe damage increased by 20%.\nRaptor Swipe deals 70% increased damage to its primary target.",
          "pvp_tooltip": "Raptor Strike, Wildfire Bomb, and Raptor Swipe damage increased by 20%.\nRaptor Swipe deals 70% increased damage to its primary target.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Raptor Swipe",
      "spell_id": 1259019,
      "node_id": 110429,
      "entry_id": 137053,
      "definition_id": 141816,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110429,
        "node_name": "Raptor Swipe / Raptor Swipe / Raptor Swipe",
        "node_type": "tiered",
        "pos_x": 12600,
        "pos_y": 7650,
        "max_ranks": 4,
        "required_points": 20,
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [],
        "entry_id": 137053,
        "entry_max_ranks": 1,
        "definition_id": 141816,
        "entry_index": 300,
        "entry_type": "tierrank",
        "talent_name": "Raptor Swipe",
        "spell_id": 1259019,
        "visible_spell_id": null,
        "icon": "inv_raptortravelform",
        "icon_candidates": [
          "inv_raptortravelform"
        ]
      },
      "pve_tooltip": "Raptor Strike now has a 100% chance to upgrade itself to a Raptor Swipe.\nRaptor Swipes that benefit from Tip of the Spear provoke an additional Strike as One at 300% effectiveness.",
      "pvp_tooltip": "Raptor Strike now has a 100% chance to upgrade itself to a Raptor Swipe.\nRaptor Swipes that benefit from Tip of the Spear provoke an additional Strike as One at 300% effectiveness.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Sentinel",
      "spell_id": 1253599,
      "node_id": 94976,
      "entry_id": 117573,
      "definition_id": 122585,
      "tree_type": "hero",
      "hero_tree": "Sentinel",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Sentinel",
        "subtree_id": 42,
        "node_id": 94976,
        "node_name": "Sentinel",
        "node_type": "single",
        "pos_x": 8100,
        "pos_y": 1500,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": true,
        "free_node": true,
        "prev": [],
        "next": [
          94989,
          94973,
          94981,
          109807
        ],
        "entry_id": 117573,
        "entry_max_ranks": 1,
        "definition_id": 122585,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Sentinel",
        "spell_id": 1253599,
        "visible_spell_id": null,
        "icon": "inv_ability_sentinelhunter_lunarstorm",
        "icon_candidates": [
          "inv_ability_sentinelhunter_lunarstorm"
        ]
      },
      "pve_tooltip": "Consuming Tip of the Spear has a 10% chance to summon the aid of a Sentinel Owl that descends from the skies and applies Sentinel's Mark to your target.\nSentinel's Mark\nYour next Wildfire Bomb deals 40% increased direct damage to the marked target.",
      "pvp_tooltip": "Consuming Tip of the Spear has a 10% chance to summon the aid of a Sentinel Owl that descends from the skies and applies Sentinel's Mark to your target.\nSentinel's Mark\nYour next Wildfire Bomb deals 40% increased direct damage to the marked target.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Don't Look Back",
      "spell_id": 450373,
      "node_id": 94989,
      "entry_id": 117586,
      "definition_id": 122598,
      "tree_type": "hero",
      "hero_tree": "Sentinel",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Sentinel",
        "subtree_id": 42,
        "node_id": 94989,
        "node_name": "Don't Look Back",
        "node_type": "single",
        "pos_x": 7200,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94976
        ],
        "next": [
          94958
        ],
        "entry_id": 117586,
        "entry_max_ranks": 1,
        "definition_id": 122598,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Don't Look Back",
        "spell_id": 450373,
        "visible_spell_id": null,
        "icon": "ability_racial_forceshield",
        "icon_candidates": [
          "ability_racial_forceshield"
        ]
      },
      "pve_tooltip": "Consuming Sentinel's Mark grants you an absorb shield equal to 10.0% of your maximum health.",
      "pvp_tooltip": "Consuming Sentinel's Mark grants you an absorb shield equal to 5% of your maximum health.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 63,
          "end": 67,
          "old_token": "10.0",
          "new_token": "5",
          "kind": "ordinary_value",
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
          "kind": "ordinary_value",
          "old": "10.0",
          "new": "5"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 450373,
          "source_spell_id": 450373,
          "effect_index": 1,
          "effect_text": "Apply Aura: Dummy",
          "base_value": 10.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 5.0,
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
          "talent_spell_id": 450373,
          "source_spell_id": 450373,
          "effect_index": 2,
          "effect_text": "Apply Aura: Dummy",
          "base_value": 10.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 5.0,
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
      "talent_name": "Moon's Blessing",
      "spell_id": 1253825,
      "node_id": 94973,
      "entry_id": 117570,
      "definition_id": 122582,
      "tree_type": "hero",
      "hero_tree": "Sentinel",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Sentinel",
        "subtree_id": 42,
        "node_id": 94973,
        "node_name": "Moon's Blessing",
        "node_type": "single",
        "pos_x": 7800,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94976
        ],
        "next": [
          94990
        ],
        "entry_id": 117570,
        "entry_max_ranks": 1,
        "definition_id": 122582,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Moon's Blessing",
        "spell_id": 1253825,
        "visible_spell_id": null,
        "icon": "spell_druid_lunarinspiration",
        "icon_candidates": [
          "spell_druid_lunarinspiration"
        ]
      },
      "pve_tooltip": "Consuming Tip of the Spear has a 10% increased chance to summon your Sentinel Owl.\nWhen your Sentinel Owl applies Sentinel's Mark, reduce the cooldown of Wildfire Bomb by 6.0 sec.",
      "pvp_tooltip": "Consuming Tip of the Spear has a 10% increased chance to summon your Sentinel Owl.\nWhen your Sentinel Owl applies Sentinel's Mark, reduce the cooldown of Wildfire Bomb by 6.0 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Sanctified Armaments",
      "spell_id": 1253831,
      "node_id": 94981,
      "entry_id": 117578,
      "definition_id": 122590,
      "tree_type": "hero",
      "hero_tree": "Sentinel",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Sentinel",
        "subtree_id": 42,
        "node_id": 94981,
        "node_name": "Sanctified Armaments",
        "node_type": "single",
        "pos_x": 8400,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94976
        ],
        "next": [
          94971
        ],
        "entry_id": 117578,
        "entry_max_ranks": 1,
        "definition_id": 122590,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Sanctified Armaments",
        "spell_id": 1253831,
        "visible_spell_id": null,
        "icon": "inv_polearm_2h_arakkoa_c_01",
        "icon_candidates": [
          "inv_polearm_2h_arakkoa_c_01"
        ]
      },
      "pve_tooltip": "An additional 15% of Raptor Strike's damage is dealt as Arcane damage over 6 sec.",
      "pvp_tooltip": "An additional 15% of Raptor Strike's damage is dealt as Arcane damage over 6 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Moonlight Chakram",
      "spell_id": 1264902,
      "node_id": 109807,
      "entry_id": 136065,
      "definition_id": 140820,
      "tree_type": "hero",
      "hero_tree": "Sentinel",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Sentinel",
        "subtree_id": 42,
        "node_id": 109807,
        "node_name": "Moonlight Chakram",
        "node_type": "single",
        "pos_x": 9000,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94976
        ],
        "next": [
          110028
        ],
        "entry_id": 136065,
        "entry_max_ranks": 1,
        "definition_id": 140820,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Moonlight Chakram",
        "spell_id": 1264902,
        "visible_spell_id": null,
        "icon": "inv_ability_hunter_deathchakram",
        "icon_candidates": [
          "inv_ability_hunter_deathchakram"
        ]
      },
      "pve_tooltip": "For 15 sec after casting Takedown, Takedown is replaced with Moonlight Chakram.\nMoonlight Chakram\nThrow a chakram blessed with moonlight at your current target that will rapidly deal (284.4% of Attack Power) Physical damage 7 times, bouncing to other targets if they are nearby.",
      "pvp_tooltip": "For 15 sec after casting Takedown, Takedown is replaced with Moonlight Chakram.\nMoonlight Chakram\nThrow a chakram blessed with moonlight at your current target that will rapidly deal (170.9102% of Attack Power) Physical damage 7 times, bouncing to other targets if they are nearby.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 184,
          "end": 189,
          "old_token": "284.4",
          "new_token": "170.9102",
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
          "old": "284.4",
          "new": "170.9102"
        },
        {
          "status": "OFFICIAL_HOTFIX_CURRENT",
          "source": "blizzard_hotfix",
          "source_url": "https://news.blizzard.com/en-us/article/24296142/hotfixes-september-24-2026",
          "hotfix_date": "2026-09-22",
          "hotfix_text": "Moonlight Chakram damage reduced by 15% in PvP combat.",
          "reason": "RELATIVE_HOTFIX_EVIDENCE",
          "evidence": {
            "source": "historical_verified_snapshot",
            "field": "effective_player_value",
            "source_spell_id": 1266081,
            "effect_index": 1,
            "old_value": 2.0107079999999997,
            "new_value": 1.7091017999999998,
            "ratio": 0.85,
            "baseline_commit": "dc80a9d44b8a4b34ccbbdec61b5910e7915de290"
          }
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "EMBEDDED",
          "talent_spell_id": 1264902,
          "source_spell_id": 1266081,
          "effect_index": 1,
          "effect_text": "School Damage (Physical) (AP mod: 2.844 )",
          "base_value": null,
          "spell_pvp_multiplier": 0.595,
          "amount_kind": "direct",
          "aura_factor": 1.01,
          "final_pvp_multiplier": 0.60095,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1264902,
            1264949,
            1266081
          ],
          "dependency_relations": [
            "spelldesc_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256941,
              "game_effect_id": 1264706,
              "amount_kind": "direct",
              "value_pct": 1.0,
              "factor": 1.01,
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
          "talent_spell_id": 1264902,
          "source_spell_id": 459753,
          "effect_index": 1,
          "effect_text": "Apply Aura: Periodic Damage",
          "base_value": null,
          "spell_pvp_multiplier": 0.7,
          "amount_kind": "periodic",
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.7,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1264902,
            1264946,
            459730,
            459753
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
        }
      ],
      "render_effect_count": 1,
      "rank_tooltips": []
    },
    {
      "talent_name": "Stargazer",
      "spell_id": 1253751,
      "node_id": 94958,
      "entry_id": 117555,
      "definition_id": 122567,
      "tree_type": "hero",
      "hero_tree": "Sentinel",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Sentinel",
        "subtree_id": 42,
        "node_id": 94958,
        "node_name": "Stargazer / Open Fire",
        "node_type": "choice",
        "pos_x": 7200,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94989
        ],
        "next": [
          94970
        ],
        "entry_id": 117555,
        "entry_max_ranks": 1,
        "definition_id": 122567,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Stargazer",
        "spell_id": 1253751,
        "visible_spell_id": null,
        "icon": "icon_7fx_nightborn_astromancer_blue",
        "icon_candidates": [
          "icon_7fx_nightborn_astromancer_blue"
        ]
      },
      "pve_tooltip": "Consuming Tip of the Spear grants 2% increased critical strike damage for 10 sec. Multiple applications may overlap.",
      "pvp_tooltip": "Consuming Tip of the Spear grants 2% increased critical strike damage for 10 sec. Multiple applications may overlap.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Open Fire",
      "spell_id": 1253807,
      "node_id": 94958,
      "entry_id": 135589,
      "definition_id": 140345,
      "tree_type": "hero",
      "hero_tree": "Sentinel",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Sentinel",
        "subtree_id": 42,
        "node_id": 94958,
        "node_name": "Stargazer / Open Fire",
        "node_type": "choice",
        "pos_x": 7200,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94989
        ],
        "next": [
          94970
        ],
        "entry_id": 135589,
        "entry_max_ranks": 1,
        "definition_id": 140345,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Open Fire",
        "spell_id": 1253807,
        "visible_spell_id": null,
        "icon": "spell_fire_flare",
        "icon_candidates": [
          "spell_fire_flare"
        ]
      },
      "pve_tooltip": "Fire damage dealt increased by 5%.",
      "pvp_tooltip": "Fire damage dealt increased by 5%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Can't Miss, Won't Miss",
      "spell_id": 1253830,
      "node_id": 94990,
      "entry_id": 117587,
      "definition_id": 122599,
      "tree_type": "hero",
      "hero_tree": "Sentinel",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Sentinel",
        "subtree_id": 42,
        "node_id": 94990,
        "node_name": "Can't Miss, Won't Miss",
        "node_type": "single",
        "pos_x": 7800,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94973
        ],
        "next": [
          94965
        ],
        "entry_id": 117587,
        "entry_max_ranks": 1,
        "definition_id": 122599,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Can't Miss, Won't Miss",
        "spell_id": 1253830,
        "visible_spell_id": null,
        "icon": "ability_hunter_aimedshot",
        "icon_candidates": [
          "ability_hunter_aimedshot"
        ]
      },
      "pve_tooltip": "Tip of the Spear damage bonus increased by 4%.\nTakedown duration increased by 2 sec.",
      "pvp_tooltip": "Tip of the Spear damage bonus increased by 4%.\nTakedown duration increased by 2 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Invigorating Pulse",
      "spell_id": 450379,
      "node_id": 94971,
      "entry_id": 117568,
      "definition_id": 122580,
      "tree_type": "hero",
      "hero_tree": "Sentinel",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Sentinel",
        "subtree_id": 42,
        "node_id": 94971,
        "node_name": "Invigorating Pulse",
        "node_type": "single",
        "pos_x": 8400,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94981
        ],
        "next": [
          94980
        ],
        "entry_id": 117568,
        "entry_max_ranks": 1,
        "definition_id": 122580,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Invigorating Pulse",
        "spell_id": 450379,
        "visible_spell_id": null,
        "icon": "ability_mage_netherwindpresence",
        "icon_candidates": [
          "ability_mage_netherwindpresence"
        ]
      },
      "pve_tooltip": "Kill Command grants an additional 5 Focus and its damage is increased by 20%.\nMaximum Focus increased by 25.",
      "pvp_tooltip": "Kill Command grants an additional 5 Focus and its damage is increased by 20%.\nMaximum Focus increased by 25.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Twilight Requiem",
      "spell_id": 1264904,
      "node_id": 110028,
      "entry_id": 136522,
      "definition_id": 141295,
      "tree_type": "hero",
      "hero_tree": "Sentinel",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Sentinel",
        "subtree_id": 42,
        "node_id": 110028,
        "node_name": "Twilight Requiem / Stalk and Strike",
        "node_type": "choice",
        "pos_x": 9000,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109807
        ],
        "next": [
          109805
        ],
        "entry_id": 136522,
        "entry_max_ranks": 1,
        "definition_id": 141295,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Twilight Requiem",
        "spell_id": 1264904,
        "visible_spell_id": null,
        "icon": "spell_nature_moonglow",
        "icon_candidates": [
          "spell_nature_moonglow"
        ]
      },
      "pve_tooltip": "When your Moonlight Chakram expires, it summons an explosion of moonlight, dealing (200% of Attack Power) Arcane damage to nearby enemies. Damage reduced beyond 8 targets.",
      "pvp_tooltip": "When your Moonlight Chakram expires, it summons an explosion of moonlight, dealing (202% of Attack Power) Arcane damage to nearby enemies. Damage reduced beyond 8 targets.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 84,
          "end": 87,
          "old_token": "200",
          "new_token": "202",
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
          "old": "200",
          "new": "202"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 1264904,
          "source_spell_id": 1266096,
          "effect_index": 1,
          "effect_text": "School Damage (Arcane) (AP mod: 2 )",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.01,
          "final_pvp_multiplier": 1.01,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1264904,
            1266096
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256941,
              "game_effect_id": 1264706,
              "amount_kind": "direct",
              "value_pct": 1.0,
              "factor": 1.01,
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
      "talent_name": "Stalk and Strike",
      "spell_id": 1266069,
      "node_id": 110028,
      "entry_id": 136521,
      "definition_id": 141294,
      "tree_type": "hero",
      "hero_tree": "Sentinel",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Sentinel",
        "subtree_id": 42,
        "node_id": 110028,
        "node_name": "Twilight Requiem / Stalk and Strike",
        "node_type": "choice",
        "pos_x": 9000,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109807
        ],
        "next": [
          109805
        ],
        "entry_id": 136521,
        "entry_max_ranks": 1,
        "definition_id": 141294,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Stalk and Strike",
        "spell_id": 1266069,
        "visible_spell_id": null,
        "icon": "ability_ambush",
        "icon_candidates": [
          "ability_ambush"
        ]
      },
      "pve_tooltip": "Throwing your Moonlight Chakram reduces the cooldown of Wildfire Bomb by 10 sec.",
      "pvp_tooltip": "Throwing your Moonlight Chakram reduces the cooldown of Wildfire Bomb by 10 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Arcane Talons",
      "spell_id": 1253846,
      "node_id": 94970,
      "entry_id": 117567,
      "definition_id": 122579,
      "tree_type": "hero",
      "hero_tree": "Sentinel",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Sentinel",
        "subtree_id": 42,
        "node_id": 94970,
        "node_name": "Arcane Talons",
        "node_type": "single",
        "pos_x": 7200,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94958
        ],
        "next": [
          94978
        ],
        "entry_id": 117567,
        "entry_max_ranks": 1,
        "definition_id": 122579,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Arcane Talons",
        "spell_id": 1253846,
        "visible_spell_id": null,
        "icon": "inv_10_specialreagentfoozles_tuskclaw_ice",
        "icon_candidates": [
          "inv_10_specialreagentfoozles_tuskclaw_ice",
          "inv_10_specialreagentfoozles_tuskclaw-ice"
        ]
      },
      "pve_tooltip": "Sentinel's Mark further increases the damage of Wildfire Bomb by 50%",
      "pvp_tooltip": "Sentinel's Mark further increases the damage of Wildfire Bomb by 50%",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Lunar Calling",
      "spell_id": 1253852,
      "node_id": 94965,
      "entry_id": 117562,
      "definition_id": 122574,
      "tree_type": "hero",
      "hero_tree": "Sentinel",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Sentinel",
        "subtree_id": 42,
        "node_id": 94965,
        "node_name": "Lunar Calling",
        "node_type": "single",
        "pos_x": 7800,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94990
        ],
        "next": [
          94978
        ],
        "entry_id": 117562,
        "entry_max_ranks": 1,
        "definition_id": 122574,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Lunar Calling",
        "spell_id": 1253852,
        "visible_spell_id": null,
        "icon": "ability_hunter_sentinelowl",
        "icon_candidates": [
          "ability_hunter_sentinelowl"
        ]
      },
      "pve_tooltip": "Takedown summons your Sentinel Owl and your chance to summon your Sentinel Owl is increased by an additional 10% during Takedown.",
      "pvp_tooltip": "Takedown summons your Sentinel Owl and your chance to summon your Sentinel Owl is increased by an additional 10% during Takedown.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Conditioning",
      "spell_id": 1253887,
      "node_id": 94980,
      "entry_id": 117577,
      "definition_id": 122589,
      "tree_type": "hero",
      "hero_tree": "Sentinel",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Sentinel",
        "subtree_id": 42,
        "node_id": 94980,
        "node_name": "Conditioning / Scout's Vigil",
        "node_type": "choice",
        "pos_x": 8400,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94971
        ],
        "next": [
          94978
        ],
        "entry_id": 117577,
        "entry_max_ranks": 1,
        "definition_id": 122589,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Conditioning",
        "spell_id": 1253887,
        "visible_spell_id": null,
        "icon": "ability_racial_runningwild",
        "icon_candidates": [
          "ability_racial_runningwild"
        ]
      },
      "pve_tooltip": "Your movement speed is increased by 8%.\nAspect of the Cheetah's cooldown is reduced by 30 sec.",
      "pvp_tooltip": "Your movement speed is increased by 8%.\nAspect of the Cheetah's cooldown is reduced by 30 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Scout's Vigil",
      "spell_id": 1253892,
      "node_id": 94980,
      "entry_id": 123870,
      "definition_id": 128708,
      "tree_type": "hero",
      "hero_tree": "Sentinel",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Sentinel",
        "subtree_id": 42,
        "node_id": 94980,
        "node_name": "Conditioning / Scout's Vigil",
        "node_type": "choice",
        "pos_x": 8400,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94971
        ],
        "next": [
          94978
        ],
        "entry_id": 123870,
        "entry_max_ranks": 1,
        "definition_id": 128708,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Scout's Vigil",
        "spell_id": 1253892,
        "visible_spell_id": null,
        "icon": "sha_ability_rogue_bloodyeye",
        "icon_candidates": [
          "sha_ability_rogue_bloodyeye"
        ]
      },
      "pve_tooltip": "Enemy detection radius reduced by 10 yds.",
      "pvp_tooltip": "Enemy detection radius reduced by 10 yds.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Radiant Edge",
      "spell_id": 1264903,
      "node_id": 109805,
      "entry_id": 136063,
      "definition_id": 140818,
      "tree_type": "hero",
      "hero_tree": "Sentinel",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Sentinel",
        "subtree_id": 42,
        "node_id": 109805,
        "node_name": "Radiant Edge",
        "node_type": "single",
        "pos_x": 9000,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          110028
        ],
        "next": [
          94978
        ],
        "entry_id": 136063,
        "entry_max_ranks": 1,
        "definition_id": 140818,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Radiant Edge",
        "spell_id": 1264903,
        "visible_spell_id": null,
        "icon": "inv_misc_nightelfglaive",
        "icon_candidates": [
          "inv_misc_nightelfglaive"
        ]
      },
      "pve_tooltip": "Your Moonlight Chakram deals 25% increased damage each time it bounces.",
      "pvp_tooltip": "Your Moonlight Chakram deals 25% increased damage each time it bounces.",
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
          "old": 284.4,
          "new": 170.91017999999997,
          "full_tooltip_match_count": 0
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 1264903,
          "source_spell_id": 1266081,
          "effect_index": 1,
          "effect_text": "School Damage (Physical) (AP mod: 2.844 )",
          "base_value": null,
          "spell_pvp_multiplier": 0.595,
          "amount_kind": "direct",
          "aura_factor": 1.01,
          "final_pvp_multiplier": 0.60095,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1264903,
            1264949,
            1266081
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256941,
              "game_effect_id": 1264706,
              "amount_kind": "direct",
              "value_pct": 1.0,
              "factor": 1.01,
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
      "talent_name": "Lunar Storm",
      "spell_id": 1253732,
      "node_id": 94978,
      "entry_id": 117575,
      "definition_id": 122587,
      "tree_type": "hero",
      "hero_tree": "Sentinel",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Sentinel",
        "subtree_id": 42,
        "node_id": 94978,
        "node_name": "Lunar Storm",
        "node_type": "single",
        "pos_x": 8100,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94965,
          94970,
          94980,
          109805
        ],
        "next": [],
        "entry_id": 117575,
        "entry_max_ranks": 1,
        "definition_id": 122587,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Lunar Storm",
        "spell_id": 1253732,
        "visible_spell_id": null,
        "icon": "artifactability_balancedruid_moonandstars",
        "icon_candidates": [
          "artifactability_balancedruid_moonandstars"
        ]
      },
      "pve_tooltip": "When Sentinel's Mark is consumed, it summons a barrage of 4 lunar missiles, each dealing (200% of Attack Power) Arcane damage to enemies within 10 yds.",
      "pvp_tooltip": "When Sentinel's Mark is consumed, it summons a barrage of 4 lunar missiles, each dealing (202% of Attack Power) Arcane damage to enemies within 10 yds.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 90,
          "end": 93,
          "old_token": "200",
          "new_token": "202",
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
          "old": "200",
          "new": "202"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 1253732,
          "source_spell_id": 1253733,
          "effect_index": 1,
          "effect_text": "School Damage (Arcane) (AP mod: 2 )",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.01,
          "final_pvp_multiplier": 1.01,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1253732,
            1253733
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256941,
              "game_effect_id": 1264706,
              "amount_kind": "direct",
              "value_pct": 1.0,
              "factor": 1.01,
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
      "talent_name": "Howl of the Pack Leader",
      "spell_id": 471876,
      "node_id": 94991,
      "entry_id": 117588,
      "definition_id": 122600,
      "tree_type": "hero",
      "hero_tree": "Pack Leader",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Pack Leader",
        "subtree_id": 43,
        "node_id": 94991,
        "node_name": "Howl of the Pack Leader",
        "node_type": "single",
        "pos_x": 8100,
        "pos_y": 4200,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": true,
        "free_node": true,
        "prev": [],
        "next": [
          94985,
          94992,
          94962,
          94979
        ],
        "entry_id": 117588,
        "entry_max_ranks": 1,
        "definition_id": 122600,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Howl of the Pack Leader",
        "spell_id": 471876,
        "visible_spell_id": null,
        "icon": "inv_ability_packleaderhunter_vicioushunt",
        "icon_candidates": [
          "inv_ability_packleaderhunter_vicioushunt"
        ]
      },
      "pve_tooltip": "While in combat, every 30 sec your next Kill Command summons the aid of a Beast.\nWyvern\nA Wyvern descends from the skies, letting out a battle cry that increases the damage of you and your pets by 10% for 12 sec.\nBoar\nA Boar charges through your target 1 time, dealing (1440% of Attack Power) damage to nearby enemies and an additional (1200% of Attack Power) physical damage to its primary target. Damage reduced beyond 5 targets.\nBear\nA Bear leaps into the fray, rending the flesh of your enemies, dealing (400% of Attack Power) damage over 10 sec to up to 8 nearby enemies.",
      "pvp_tooltip": "While in combat, every 30 sec your next Kill Command summons the aid of a Beast.\nWyvern\nA Wyvern descends from the skies, letting out a battle cry that increases the damage of you and your pets by 10% for 12 sec.\nBoar\nA Boar charges through your target 1 time, dealing (727.2% of Attack Power) damage to nearby enemies and an additional (606% of Attack Power) physical damage to its primary target. Damage reduced beyond 5 targets.\nBear\nA Bear leaps into the fray, rending the flesh of your enemies, dealing (400% of Attack Power) damage over 10 sec to up to 8 nearby enemies.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 337,
          "end": 341,
          "old_token": "1200",
          "new_token": "606",
          "kind": "attack_power_coefficient",
          "effect_indexes": [
            1
          ]
        },
        {
          "start": 270,
          "end": 274,
          "old_token": "1440",
          "new_token": "727.2",
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
          "old": "1440",
          "new": "727.2"
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "attack_power_coefficient",
          "old": "1200",
          "new": "606"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 471876,
          "source_spell_id": 471936,
          "effect_index": 1,
          "effect_text": "School Damage (Physical) (AP mod: 12 )",
          "base_value": null,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": "direct",
          "aura_factor": 1.01,
          "final_pvp_multiplier": 0.505,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            471876,
            471936
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256941,
              "game_effect_id": 1264706,
              "amount_kind": "direct",
              "value_pct": 1.0,
              "factor": 1.01,
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
          "talent_spell_id": 471876,
          "source_spell_id": 471938,
          "effect_index": 1,
          "effect_text": "School Damage (Physical) (AP mod: 14.4 )",
          "base_value": null,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": "direct",
          "aura_factor": 1.01,
          "final_pvp_multiplier": 0.505,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            471876,
            471938
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256941,
              "game_effect_id": 1264706,
              "amount_kind": "direct",
              "value_pct": 1.0,
              "factor": 1.01,
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
          "talent_spell_id": 471876,
          "source_spell_id": 471999,
          "effect_index": 1,
          "effect_text": "Apply Aura: Periodic Damage",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "periodic",
          "aura_factor": 1.01,
          "final_pvp_multiplier": 1.01,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            471876,
            471999
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256941,
              "game_effect_id": 1266380,
              "amount_kind": "periodic",
              "value_pct": 1.0,
              "factor": 1.01,
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
      "talent_name": "Pack Mentality",
      "spell_id": 472358,
      "node_id": 94985,
      "entry_id": 117582,
      "definition_id": 122594,
      "tree_type": "hero",
      "hero_tree": "Pack Leader",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Pack Leader",
        "subtree_id": 43,
        "node_id": 94985,
        "node_name": "Pack Mentality",
        "node_type": "single",
        "pos_x": 7200,
        "pos_y": 4800,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94991
        ],
        "next": [
          94972
        ],
        "entry_id": 117582,
        "entry_max_ranks": 1,
        "definition_id": 122594,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Pack Mentality",
        "spell_id": 472358,
        "visible_spell_id": null,
        "icon": "spell_hunter_lonewolf",
        "icon_candidates": [
          "spell_hunter_lonewolf"
        ]
      },
      "pve_tooltip": "Howl of the Pack Leader increases the damage of your Kill Command by 50%.\nSummoning a Beast reduces the cooldown of Wildfire Bomb by 6.0 sec.",
      "pvp_tooltip": "Howl of the Pack Leader increases the damage of your Kill Command by 50%.\nSummoning a Beast reduces the cooldown of Wildfire Bomb by 6.0 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Dire Summons",
      "spell_id": 472352,
      "node_id": 94992,
      "entry_id": 117589,
      "definition_id": 122601,
      "tree_type": "hero",
      "hero_tree": "Pack Leader",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Pack Leader",
        "subtree_id": 43,
        "node_id": 94992,
        "node_name": "Dire Summons",
        "node_type": "single",
        "pos_x": 7800,
        "pos_y": 4800,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94991
        ],
        "next": [
          94984
        ],
        "entry_id": 117589,
        "entry_max_ranks": 1,
        "definition_id": 122601,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Dire Summons",
        "spell_id": 472352,
        "visible_spell_id": null,
        "icon": "inv_misc_horn_01",
        "icon_candidates": [
          "inv_misc_horn_01"
        ]
      },
      "pve_tooltip": "Kill Command reduces the cooldown of Howl of the Pack Leader by 1.5 sec.\nRaptor Strike reduces the cooldown of Howl of the Pack Leader by 1.0 sec.\n(700ms cooldown)",
      "pvp_tooltip": "Kill Command reduces the cooldown of Howl of the Pack Leader by 1.5 sec.\nRaptor Strike reduces the cooldown of Howl of the Pack Leader by 1.0 sec.\n(700ms cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Better Together",
      "spell_id": 472357,
      "node_id": 94962,
      "entry_id": 117559,
      "definition_id": 122571,
      "tree_type": "hero",
      "hero_tree": "Pack Leader",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Pack Leader",
        "subtree_id": 43,
        "node_id": 94962,
        "node_name": "Better Together",
        "node_type": "single",
        "pos_x": 8400,
        "pos_y": 4800,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94991
        ],
        "next": [
          94988
        ],
        "entry_id": 117559,
        "entry_max_ranks": 1,
        "definition_id": 122571,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Better Together",
        "spell_id": 472357,
        "visible_spell_id": null,
        "icon": "ability_hunter_pathfinding2",
        "icon_candidates": [
          "ability_hunter_pathfinding2"
        ]
      },
      "pve_tooltip": "Damage dealt by your pet is increased by 5%.\nRaptor Strike damage increased by 5%.",
      "pvp_tooltip": "Damage dealt by your pet is increased by 5%.\nRaptor Strike damage increased by 5%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Slicked Shoes",
      "spell_id": 472719,
      "node_id": 94979,
      "entry_id": 117576,
      "definition_id": 122588,
      "tree_type": "hero",
      "hero_tree": "Pack Leader",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Pack Leader",
        "subtree_id": 43,
        "node_id": 94979,
        "node_name": "Slicked Shoes / Masterful Call",
        "node_type": "choice",
        "pos_x": 9000,
        "pos_y": 4800,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94991
        ],
        "next": [
          109803
        ],
        "entry_id": 117576,
        "entry_max_ranks": 1,
        "definition_id": 122588,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Slicked Shoes",
        "spell_id": 472719,
        "visible_spell_id": null,
        "icon": "ability_heroicleap",
        "icon_candidates": [
          "ability_heroicleap"
        ]
      },
      "pve_tooltip": "When Disengage removes a movement impairing effect, its cooldown is reduced by 4 sec.",
      "pvp_tooltip": "When Disengage removes a movement impairing effect, its cooldown is reduced by 4 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Masterful Call",
      "spell_id": 1268705,
      "node_id": 94979,
      "entry_id": 123781,
      "definition_id": 128619,
      "tree_type": "hero",
      "hero_tree": "Pack Leader",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Pack Leader",
        "subtree_id": 43,
        "node_id": 94979,
        "node_name": "Slicked Shoes / Masterful Call",
        "node_type": "choice",
        "pos_x": 9000,
        "pos_y": 4800,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94991
        ],
        "next": [
          109803
        ],
        "entry_id": 123781,
        "entry_max_ranks": 1,
        "definition_id": 128619,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Masterful Call",
        "spell_id": 1268705,
        "visible_spell_id": null,
        "icon": "ability_hunter_masterscall",
        "icon_candidates": [
          "ability_hunter_masterscall"
        ]
      },
      "pve_tooltip": "The duration of Master's Call is increased by 2 sec and it increases the movement speed of its target by 20%.",
      "pvp_tooltip": "The duration of Master's Call is increased by 2 sec and it increases the movement speed of its target by 20%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Ursine Fury",
      "spell_id": 472476,
      "node_id": 94972,
      "entry_id": 117569,
      "definition_id": 122581,
      "tree_type": "hero",
      "hero_tree": "Pack Leader",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Pack Leader",
        "subtree_id": 43,
        "node_id": 94972,
        "node_name": "Ursine Fury / Sharpened Claws",
        "node_type": "choice",
        "pos_x": 7200,
        "pos_y": 5400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94985
        ],
        "next": [
          94969
        ],
        "entry_id": 117569,
        "entry_max_ranks": 1,
        "definition_id": 122581,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Ursine Fury",
        "spell_id": 472476,
        "visible_spell_id": null,
        "icon": "spell_druid_bearhug",
        "icon_candidates": [
          "spell_druid_bearhug"
        ]
      },
      "pve_tooltip": "When your Bear is summoned, it is joined by 2 Dire Beasts.",
      "pvp_tooltip": "When your Bear is summoned, it is joined by 2 Dire Beasts.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Sharpened Claws",
      "spell_id": 472524,
      "node_id": 94972,
      "entry_id": 128358,
      "definition_id": 133164,
      "tree_type": "hero",
      "hero_tree": "Pack Leader",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Pack Leader",
        "subtree_id": 43,
        "node_id": 94972,
        "node_name": "Ursine Fury / Sharpened Claws",
        "node_type": "choice",
        "pos_x": 7200,
        "pos_y": 5400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94985
        ],
        "next": [
          94969
        ],
        "entry_id": 128358,
        "entry_max_ranks": 1,
        "definition_id": 133164,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Sharpened Claws",
        "spell_id": 472524,
        "visible_spell_id": null,
        "icon": "ability_druid_swipe",
        "icon_candidates": [
          "ability_druid_swipe"
        ]
      },
      "pve_tooltip": "The damage of your Bear's Rend Flesh is increased by 15%.",
      "pvp_tooltip": "The damage of your Bear's Rend Flesh is increased by 15%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Fury of the Wyvern",
      "spell_id": 472550,
      "node_id": 94984,
      "entry_id": 117581,
      "definition_id": 122593,
      "tree_type": "hero",
      "hero_tree": "Pack Leader",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Pack Leader",
        "subtree_id": 43,
        "node_id": 94984,
        "node_name": "Fury of the Wyvern",
        "node_type": "single",
        "pos_x": 7800,
        "pos_y": 5400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94992
        ],
        "next": [
          94967
        ],
        "entry_id": 117581,
        "entry_max_ranks": 1,
        "definition_id": 122593,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Fury of the Wyvern",
        "spell_id": 472550,
        "visible_spell_id": null,
        "icon": "spell_druid_feralchargecat",
        "icon_candidates": [
          "spell_druid_feralchargecat"
        ]
      },
      "pve_tooltip": "Your pet's attacks increase your Wyvern's damage bonus by 1%, up to 10%.\nCasting Wildfire Bomb extends the duration of your Wyvern by 5.0 sec, up to 10 additional sec.",
      "pvp_tooltip": "Your pet's attacks increase your Wyvern's damage bonus by 1%, up to 10%.\nCasting Wildfire Bomb extends the duration of your Wyvern by 5.0 sec, up to 10 additional sec.",
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
          "old": 1200.0,
          "new": 606.0,
          "full_tooltip_match_count": 0
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "NESTED_DEPENDENCY_NOT_VISIBLE",
          "kind": "attack_power_coefficient",
          "old": 1440.0,
          "new": 727.2,
          "full_tooltip_match_count": 0
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 472550,
          "source_spell_id": 471936,
          "effect_index": 1,
          "effect_text": "School Damage (Physical) (AP mod: 12 )",
          "base_value": null,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": "direct",
          "aura_factor": 1.01,
          "final_pvp_multiplier": 0.505,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            472550,
            471881,
            471876,
            471936
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "spelldesc_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256941,
              "game_effect_id": 1264706,
              "amount_kind": "direct",
              "value_pct": 1.0,
              "factor": 1.01,
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
          "talent_spell_id": 472550,
          "source_spell_id": 471938,
          "effect_index": 1,
          "effect_text": "School Damage (Physical) (AP mod: 14.4 )",
          "base_value": null,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": "direct",
          "aura_factor": 1.01,
          "final_pvp_multiplier": 0.505,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            472550,
            471881,
            471876,
            471938
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "spelldesc_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256941,
              "game_effect_id": 1264706,
              "amount_kind": "direct",
              "value_pct": 1.0,
              "factor": 1.01,
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
          "talent_spell_id": 472550,
          "source_spell_id": 471999,
          "effect_index": 1,
          "effect_text": "Apply Aura: Periodic Damage",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "periodic",
          "aura_factor": 1.01,
          "final_pvp_multiplier": 1.01,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            472550,
            471881,
            471876,
            471999
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "spelldesc_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256941,
              "game_effect_id": 1266380,
              "amount_kind": "periodic",
              "value_pct": 1.0,
              "factor": 1.01,
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
      "talent_name": "Hogstrider",
      "spell_id": 472639,
      "node_id": 94988,
      "entry_id": 117585,
      "definition_id": 122597,
      "tree_type": "hero",
      "hero_tree": "Pack Leader",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Pack Leader",
        "subtree_id": 43,
        "node_id": 94988,
        "node_name": "Hogstrider",
        "node_type": "single",
        "pos_x": 8400,
        "pos_y": 5400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94962
        ],
        "next": [
          109804
        ],
        "entry_id": 117585,
        "entry_max_ranks": 1,
        "definition_id": 122597,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Hogstrider",
        "spell_id": 472639,
        "visible_spell_id": null,
        "icon": "inv_misc_boarshead",
        "icon_candidates": [
          "inv_misc_boarshead"
        ]
      },
      "pve_tooltip": "Each time your Boar deals damage, the damage of your next Boomstick is increased by 5%, up to 20%.",
      "pvp_tooltip": "Each time your Boar deals damage, the damage of your next Boomstick is increased by 2.5%, up to 20%.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 84,
          "end": 85,
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
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 472639,
          "source_spell_id": 472640,
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
            472639,
            472640
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
          "talent_spell_id": 472639,
          "source_spell_id": 472640,
          "effect_index": 2,
          "effect_text": "Apply Aura: Modifies Damage/Healing Done",
          "base_value": 5.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 2.5,
          "is_final_pvp_modified": true,
          "dependency_path": [
            472639,
            472640
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
        }
      ],
      "render_effect_count": 1,
      "rank_tooltips": []
    },
    {
      "talent_name": "Lethal Barbs",
      "spell_id": 1264781,
      "node_id": 109803,
      "entry_id": 136061,
      "definition_id": 140816,
      "tree_type": "hero",
      "hero_tree": "Pack Leader",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Pack Leader",
        "subtree_id": 43,
        "node_id": 109803,
        "node_name": "Lethal Barbs",
        "node_type": "single",
        "pos_x": 9000,
        "pos_y": 5400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94979
        ],
        "next": [
          109802
        ],
        "entry_id": 136061,
        "entry_max_ranks": 1,
        "definition_id": 140816,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Lethal Barbs",
        "spell_id": 1264781,
        "visible_spell_id": null,
        "icon": "ability_hunter_criticalshot",
        "icon_candidates": [
          "ability_hunter_criticalshot"
        ]
      },
      "pve_tooltip": "Approximately 20 procs per minute\nYour auto attacks have a very high chance to grant 3 Focus to you and your pet.\nAuto attack damage increased by 15%.",
      "pvp_tooltip": "Approximately 20 procs per minute\nYour auto attacks have a very high chance to grant 3 Focus to you and your pet.\nAuto attack damage increased by 15%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "No Mercy",
      "spell_id": 472660,
      "node_id": 94969,
      "entry_id": 117566,
      "definition_id": 122578,
      "tree_type": "hero",
      "hero_tree": "Pack Leader",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Pack Leader",
        "subtree_id": 43,
        "node_id": 94969,
        "node_name": "No Mercy",
        "node_type": "single",
        "pos_x": 7200,
        "pos_y": 6000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94972
        ],
        "next": [
          94966
        ],
        "entry_id": 117566,
        "entry_max_ranks": 1,
        "definition_id": 122578,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "No Mercy",
        "spell_id": 472660,
        "visible_spell_id": null,
        "icon": "ability_hunter_goforthethroat",
        "icon_candidates": [
          "ability_hunter_goforthethroat"
        ]
      },
      "pve_tooltip": "Your Bleed effects deal 35% increased damage.",
      "pvp_tooltip": "Your Bleed effects deal 35% increased damage.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Shell Cover",
      "spell_id": 472707,
      "node_id": 94967,
      "entry_id": 117564,
      "definition_id": 122576,
      "tree_type": "hero",
      "hero_tree": "Pack Leader",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Pack Leader",
        "subtree_id": 43,
        "node_id": 94967,
        "node_name": "Shell Cover",
        "node_type": "single",
        "pos_x": 7800,
        "pos_y": 6000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94984
        ],
        "next": [
          94966
        ],
        "entry_id": 117564,
        "entry_max_ranks": 1,
        "definition_id": 122576,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Shell Cover",
        "spell_id": 472707,
        "visible_spell_id": null,
        "icon": "inv_babyturtle2",
        "icon_candidates": [
          "inv_babyturtle2"
        ]
      },
      "pve_tooltip": "Survival of the Fittest now summons a Turtle to aid you, further increasing its damage reduction effect by 10%.",
      "pvp_tooltip": "Survival of the Fittest now summons a Turtle to aid you, further increasing its damage reduction effect by 10%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Hoof and Blade",
      "spell_id": 1264797,
      "node_id": 109804,
      "entry_id": 136062,
      "definition_id": 140817,
      "tree_type": "hero",
      "hero_tree": "Pack Leader",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Pack Leader",
        "subtree_id": 43,
        "node_id": 109804,
        "node_name": "Hoof and Blade / Wyvern's Gaze",
        "node_type": "choice",
        "pos_x": 8400,
        "pos_y": 6000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94988
        ],
        "next": [
          94966
        ],
        "entry_id": 136062,
        "entry_max_ranks": 1,
        "definition_id": 140817,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Hoof and Blade",
        "spell_id": 1264797,
        "visible_spell_id": null,
        "icon": "ability_hunter_beastwithin",
        "icon_candidates": [
          "ability_hunter_beastwithin"
        ]
      },
      "pve_tooltip": "Hogstrider further increases the damage of Boomstick by 2%.",
      "pvp_tooltip": "Hogstrider further increases the damage of Boomstick by 2%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Wyvern's Gaze",
      "spell_id": 1264792,
      "node_id": 109804,
      "entry_id": 136236,
      "definition_id": 141009,
      "tree_type": "hero",
      "hero_tree": "Pack Leader",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Pack Leader",
        "subtree_id": 43,
        "node_id": 109804,
        "node_name": "Hoof and Blade / Wyvern's Gaze",
        "node_type": "choice",
        "pos_x": 8400,
        "pos_y": 6000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94988
        ],
        "next": [
          94966
        ],
        "entry_id": 136236,
        "entry_max_ranks": 1,
        "definition_id": 141009,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Wyvern's Gaze",
        "spell_id": 1264792,
        "visible_spell_id": null,
        "icon": "ability_deathwing_assualtaspects",
        "icon_candidates": [
          "ability_deathwing_assualtaspects"
        ]
      },
      "pve_tooltip": "The damage bonus from your Wyvern now lasts an additional 2.0 sec.",
      "pvp_tooltip": "The damage bonus from your Wyvern now lasts an additional 2.0 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Sharpened Fangs",
      "spell_id": 1264775,
      "node_id": 109802,
      "entry_id": 136060,
      "definition_id": 140815,
      "tree_type": "hero",
      "hero_tree": "Pack Leader",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Pack Leader",
        "subtree_id": 43,
        "node_id": 109802,
        "node_name": "Sharpened Fangs",
        "node_type": "single",
        "pos_x": 9000,
        "pos_y": 6000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109803
        ],
        "next": [
          94966
        ],
        "entry_id": 136060,
        "entry_max_ranks": 1,
        "definition_id": 140815,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Sharpened Fangs",
        "spell_id": 1264775,
        "visible_spell_id": null,
        "icon": "inv_misc_monsterfang_02",
        "icon_candidates": [
          "inv_misc_monsterfang_02"
        ]
      },
      "pve_tooltip": "Your mastery is increased by 3%.\nWildfire Bomb deals an additional 15% increased damage to its primary target.",
      "pvp_tooltip": "Your mastery is increased by 3%.\nWildfire Bomb deals an additional 15% increased damage to its primary target.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Stampede!",
      "spell_id": 472741,
      "node_id": 94966,
      "entry_id": 117563,
      "definition_id": 122575,
      "tree_type": "hero",
      "hero_tree": "Pack Leader",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Survival",
        "spec_id": 255,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Pack Leader",
        "subtree_id": 43,
        "node_id": 94966,
        "node_name": "Stampede!",
        "node_type": "single",
        "pos_x": 8100,
        "pos_y": 6600,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94967,
          94969,
          109804,
          109802
        ],
        "next": [],
        "entry_id": 117563,
        "entry_max_ranks": 1,
        "definition_id": 122575,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Stampede!",
        "spell_id": 472741,
        "visible_spell_id": null,
        "icon": "ability_hunter_bestialdiscipline",
        "icon_candidates": [
          "ability_hunter_bestialdiscipline"
        ]
      },
      "pve_tooltip": "Casting Takedown grants Howl of the Pack Leader and causes your next Kill Command to rouse the nearby wildlife into a Stampede, charging your target and dealing [(150% of Attack Power) * 9] Physical damage over 7 sec.\n(5s cooldown)",
      "pvp_tooltip": "Casting Takedown grants Howl of the Pack Leader and causes your next Kill Command to rouse the nearby wildlife into a Stampede, charging your target and dealing [(151.5% of Attack Power) * 9] Physical damage over 7 sec.\n(5s cooldown)",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 163,
          "end": 166,
          "old_token": "150",
          "new_token": "151.5",
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
          "old": "150",
          "new": "151.5"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 472741,
          "source_spell_id": 201594,
          "effect_index": 1,
          "effect_text": "School Damage (Physical) (AP mod: 1.5 )",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.01,
          "final_pvp_multiplier": 1.01,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            472741,
            201594
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256941,
              "game_effect_id": 1264706,
              "amount_kind": "direct",
              "value_pct": 1.0,
              "factor": 1.01,
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
    }
  ],
  "fetch_errors": [],
  "serialization": {
    "version": 2,
    "spec_id": 255,
    "node_order": [
      79837,
      94957,
      94958,
      94959,
      94960,
      94961,
      94962,
      94965,
      94966,
      94967,
      94968,
      94969,
      94970,
      94971,
      94972,
      94973,
      94974,
      94976,
      94978,
      94979,
      94980,
      94981,
      94982,
      94983,
      94984,
      94985,
      94986,
      94987,
      94988,
      94989,
      94990,
      94991,
      94992,
      94993,
      99831,
      99832,
      99833,
      102252,
      102255,
      102257,
      102262,
      102263,
      102264,
      102268,
      102270,
      102272,
      102279,
      102281,
      102282,
      102285,
      102289,
      102292,
      102336,
      102337,
      102338,
      102340,
      102341,
      102342,
      102343,
      102344,
      102345,
      102346,
      102347,
      102350,
      102351,
      102353,
      102354,
      102355,
      102356,
      102357,
      102358,
      102359,
      102360,
      102362,
      102363,
      102364,
      102365,
      102367,
      102368,
      102369,
      102370,
      102371,
      102372,
      102373,
      102374,
      102375,
      102376,
      102377,
      102380,
      102381,
      102383,
      102384,
      102387,
      102389,
      102390,
      102391,
      102393,
      102394,
      102395,
      102396,
      102397,
      102401,
      102402,
      102404,
      102406,
      102407,
      102409,
      102411,
      102412,
      102414,
      102415,
      102416,
      102418,
      102419,
      102422,
      102423,
      102424,
      102425,
      103947,
      103950,
      103952,
      103955,
      103956,
      103957,
      103958,
      103959,
      103960,
      103961,
      103962,
      103964,
      103966,
      103974,
      103975,
      103977,
      103978,
      103979,
      103982,
      103984,
      103985,
      103986,
      103987,
      103989,
      103990,
      104095,
      104127,
      104130,
      107285,
      107286,
      107288,
      107289,
      107290,
      109304,
      109305,
      109306,
      109307,
      109309,
      109310,
      109311,
      109312,
      109313,
      109316,
      109317,
      109319,
      109320,
      109321,
      109323,
      109324,
      109470,
      109483,
      109484,
      109485,
      109486,
      109487,
      109488,
      109489,
      109490,
      109491,
      109799,
      109800,
      109801,
      109802,
      109803,
      109804,
      109805,
      109807,
      109961,
      110028,
      110152,
      110153,
      110154,
      110155,
      110156,
      110157,
      110158,
      110159,
      110160,
      110161,
      110162,
      110163,
      110164,
      110428,
      110429,
      110430,
      110572,
      110573,
      110574,
      110575,
      110688,
      110691,
      110692
    ],
    "subtree_nodes": [
      {
        "id": 99833,
        "name": "Pack Leader / Sentinel",
        "type": "subtree",
        "posX": 9000,
        "posY": 600,
        "entryNode": true,
        "next": [],
        "prev": [],
        "entries": [
          {
            "id": 123350,
            "type": "subtree",
            "name": "Pack Leader",
            "traitSubTreeId": 43,
            "traitTreeId": 774,
            "atlasMemberName": "talents-heroclass-hunter-packleader",
            "nodes": [
              94991,
              94985,
              94992,
              94962,
              94979,
              94972,
              94984,
              94988,
              109803,
              94969,
              94967,
              109804,
              109802,
              94966
            ]
          },
          {
            "id": 123349,
            "type": "subtree",
            "name": "Sentinel",
            "traitSubTreeId": 42,
            "traitTreeId": 774,
            "atlasMemberName": "talents-heroclass-hunter-sentinel",
            "nodes": [
              94976,
              94989,
              94973,
              94981,
              109807,
              94958,
              94990,
              94971,
              110028,
              94970,
              94965,
              94980,
              109805,
              94978
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
    "snapshot_hash": "685cef0a83951138d1e3e7142bed99b65a1bb489501bd625115b65b389b9ab9d",
    "applied": [
      {
        "talent_name": "Improved Snaring",
        "spell_id": 1268868,
        "text": "Improved Snaring now increases the movement speed reduction of Wing Clip by 10% in PvP combat.",
        "date": "2026-09-24"
      }
    ],
    "already_current": [
      {
        "talent_name": "Moonlight Chakram",
        "spell_id": 1264902,
        "text": "Moonlight Chakram damage reduced by 15% in PvP combat.",
        "date": "2026-09-22",
        "evidence": {
          "source": "historical_verified_snapshot",
          "field": "effective_player_value",
          "source_spell_id": 1266081,
          "effect_index": 1,
          "old_value": 2.0107079999999997,
          "new_value": 1.7091017999999998,
          "ratio": 0.85,
          "baseline_commit": "dc80a9d44b8a4b34ccbbdec61b5910e7915de290"
        }
      },
      {
        "talent_name": "Takedown",
        "spell_id": 1250646,
        "text": "Takedown Hunter damage reduced by 10% in PvP combat.",
        "date": "2026-09-22",
        "evidence": {
          "source": "historical_verified_snapshot",
          "field": "effective_player_value",
          "source_spell_id": 1253859,
          "effect_index": 1,
          "old_value": 6.8175,
          "new_value": 6.13575,
          "ratio": 0.9,
          "baseline_commit": "dc80a9d44b8a4b34ccbbdec61b5910e7915de290"
        }
      },
      {
        "talent_name": "Takedown",
        "spell_id": 1250646,
        "text": "Takedown Pet damage reduced by 15% in PvP combat.",
        "date": "2026-09-22",
        "evidence": {
          "source": "historical_verified_snapshot",
          "field": "effective_player_value",
          "source_spell_id": 1253862,
          "effect_index": 1,
          "old_value": 3.40875,
          "new_value": 2.8974375,
          "ratio": 0.8500000000000001,
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
        "talent_name": "Wing Clip",
        "text": "Wing Clip now reduces movement speed by 40% in PvP combat.",
        "date": "2026-09-24"
      }
    ]
  },
  "slug": "hunter-survival",
  "generated_at": "2026-09-26T06:57:31.492431+00:00",
  "validation": {
    "talents": 127,
    "changed_tooltips": 21,
    "talents_with_pvp_mechanics": 25,
    "unique_nodes": 109,
    "tree_build": "12.1.0.69933",
    "simc_build": "12.1.0.69933",
    "drustvar_builds": [
      "12.1.0.69933"
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
