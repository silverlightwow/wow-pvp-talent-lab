window.WOW_PVP_DATA = {
  "class_name": "Hunter",
  "spec_name": "Beast Mastery",
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
          102292
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
          102292,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
      "pve_tooltip": "40 yd range\nInstant\n5 sec cooldown\nDazes the target, slowing movement speed by 50% for 6 sec.\nCobra Shot will increase the duration of Concussive Shot on the target by 3.0 sec.",
      "pvp_tooltip": "40 yd range\nInstant\n5 sec cooldown\nDazes the target, slowing movement speed by 30% for 6 sec.\nCobra Shot will increase the duration of Concussive Shot on the target by 3.0 sec.",
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
      "pve_tooltip": "Your auto shot damage is increased by 25%.",
      "pvp_tooltip": "Your auto shot damage is increased by 25%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Counter Shot",
      "spell_id": 147362,
      "node_id": 102292,
      "entry_id": 126352,
      "definition_id": 131178,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102292,
        "node_name": "Counter Shot",
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
        "entry_id": 126352,
        "entry_max_ranks": 1,
        "definition_id": 131178,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Counter Shot",
        "spell_id": 147362,
        "visible_spell_id": null,
        "icon": "inv_ammo_arrow_03",
        "icon_candidates": [
          "inv_ammo_arrow_03"
        ]
      },
      "pve_tooltip": "40 yd range\nInstant\n24 sec cooldown\nInterrupts spellcasting, preventing any spell in that school from being cast for 5 sec.",
      "pvp_tooltip": "40 yd range\nInstant\n24 sec cooldown\nInterrupts spellcasting, preventing any spell in that school from being cast for 5 sec.",
      "tooltip_changed": false,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
          102292,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
          102292
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
      "pve_tooltip": "When Counter Shot interrupts a cast, gain 30 Focus.",
      "pvp_tooltip": "When Counter Shot interrupts a cast, gain 30 Focus.",
      "tooltip_changed": false,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
          102384,
          102292
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
          102397,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
      "pve_tooltip": "Kill Command deals 10% increased damage.",
      "pvp_tooltip": "Kill Command deals 10% increased damage.",
      "tooltip_changed": false,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
      "node_id": 102397,
      "entry_id": 126461,
      "definition_id": 131287,
      "tree_type": "class",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "class",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102397,
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
        "entry_id": 126461,
        "entry_max_ranks": 1,
        "definition_id": 131287,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
          102397,
          110154
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
          102397
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
          102397
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
          102397,
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
      "pve_tooltip": "The cooldown of Aspect of the Cheetah, and Aspect of the Turtle are reduced by 30 sec.",
      "pvp_tooltip": "The cooldown of Aspect of the Cheetah, and Aspect of the Turtle are reduced by 30 sec.",
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
          "pve_tooltip": "The cooldown of Aspect of the Cheetah, and Aspect of the Turtle are reduced by 15 sec.",
          "pvp_tooltip": "The cooldown of Aspect of the Cheetah, and Aspect of the Turtle are reduced by 15 sec.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "The cooldown of Aspect of the Cheetah, and Aspect of the Turtle are reduced by 30 sec.",
          "pvp_tooltip": "The cooldown of Aspect of the Cheetah, and Aspect of the Turtle are reduced by 30 sec.",
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
      "spell_id": 34026,
      "node_id": 102346,
      "entry_id": 126408,
      "definition_id": 131234,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102346,
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
          110158,
          102377
        ],
        "entry_id": 126408,
        "entry_max_ranks": 1,
        "definition_id": 131234,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Kill Command",
        "spell_id": 34026,
        "visible_spell_id": null,
        "icon": "ability_hunter_killcommand",
        "icon_candidates": [
          "ability_hunter_killcommand"
        ]
      },
      "pve_tooltip": "30 Focus\n50 yd range\nInstant\n7.5 sec cooldown\n1 Charge\nGive the command to kill, causing your pet to charge your target and savagely deal (247.2% of Attack Power) Physical damage to the enemy.",
      "pvp_tooltip": "30 Focus\n50 yd range\nInstant\n7.5 sec cooldown\n1 Charge\nGive the command to kill, causing your pet to charge your target and savagely deal (284.28% of Attack Power) Physical damage to the enemy.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 139,
          "end": 144,
          "old_token": "247.2",
          "new_token": "284.28",
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
          "old": "247.2",
          "new": "284.28"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 34026,
          "source_spell_id": 83381,
          "effect_index": 1,
          "effect_text": "School Damage (Physical) (AP mod: 2.472 )",
          "base_value": null,
          "spell_pvp_multiplier": 1.15,
          "amount_kind": "direct",
          "aura_factor": 1.0,
          "final_pvp_multiplier": 1.15,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            34026,
            83381
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
      "talent_name": "Animal Companion",
      "spell_id": 267116,
      "node_id": 110158,
      "entry_id": 136679,
      "definition_id": 141451,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110158,
        "node_name": "Animal Companion / Solitary Companion",
        "node_type": "choice",
        "pos_x": 12000,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102346
        ],
        "next": [
          102368,
          102376
        ],
        "entry_id": 136679,
        "entry_max_ranks": 1,
        "definition_id": 141451,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Animal Companion",
        "spell_id": 267116,
        "visible_spell_id": null,
        "icon": "ability_hunter_bestialdiscipline",
        "icon_candidates": [
          "ability_hunter_bestialdiscipline"
        ]
      },
      "pve_tooltip": "Your Call Pet additionally summons the pet from the bonus slot in your stable. This pet will obey your Kill Command, but cannot use pet family abilities.",
      "pvp_tooltip": "Your Call Pet additionally summons the pet from the bonus slot in your stable. This pet will obey your Kill Command, but cannot use pet family abilities.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Solitary Companion",
      "spell_id": 474746,
      "node_id": 110158,
      "entry_id": 136678,
      "definition_id": 141450,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110158,
        "node_name": "Animal Companion / Solitary Companion",
        "node_type": "choice",
        "pos_x": 12000,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102346
        ],
        "next": [
          102368,
          102376
        ],
        "entry_id": 136678,
        "entry_max_ranks": 1,
        "definition_id": 141450,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Solitary Companion",
        "spell_id": 474746,
        "visible_spell_id": null,
        "icon": "ability_hunter_separationanxiety",
        "icon_candidates": [
          "ability_hunter_separationanxiety"
        ]
      },
      "pve_tooltip": "Your pet damage is increased by 35% and your pet is 10% larger.",
      "pvp_tooltip": "Your pet damage is increased by 35% and your pet is 10% larger.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Barbed Shot",
      "spell_id": 217200,
      "node_id": 102377,
      "entry_id": 126440,
      "definition_id": 131266,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102377,
        "node_name": "Barbed Shot",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 2100,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102346
        ],
        "next": [
          102347,
          102343
        ],
        "entry_id": 126440,
        "entry_max_ranks": 1,
        "definition_id": 131266,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Barbed Shot",
        "spell_id": 217200,
        "visible_spell_id": null,
        "icon": "ability_hunter_barbedshot",
        "icon_candidates": [
          "ability_hunter_barbedshot"
        ]
      },
      "pve_tooltip": "40 yd range\nInstant\n18 sec recharge\n2 Charges\nFire a shot that tears through your enemy, causing them to bleed for [(85.7% of Attack Power) * 5] damage over 12 sec. If Barbed Shot is reapplied, any remaining damage will be added to the new Barbed Shot.\nGenerates (5 * 8 / 2) Focus over 8 sec.",
      "pvp_tooltip": "40 yd range\nInstant\n18 sec recharge\n2 Charges\nFire a shot that tears through your enemy, causing them to bleed for [(68.4914% of Attack Power) * 5] damage over 12 sec. If Barbed Shot is reapplied, any remaining damage will be added to the new Barbed Shot.\nGenerates (5 * 8 / 2) Focus over 8 sec.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 117,
          "end": 121,
          "old_token": "85.7",
          "new_token": "68.4914",
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
          "old": "85.7",
          "new": "68.4914"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 217200,
          "source_spell_id": 217200,
          "effect_index": 1,
          "effect_text": "Apply Aura: Periodic Damage",
          "base_value": null,
          "spell_pvp_multiplier": 0.888,
          "amount_kind": "periodic",
          "aura_factor": 0.9,
          "final_pvp_multiplier": 0.7992,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [
            {
              "aura_spell_id": 1256939,
              "game_effect_id": 1266354,
              "amount_kind": "periodic",
              "value_pct": -10.0,
              "factor": 0.9,
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
      "talent_name": "Alpha Predator",
      "spell_id": 269737,
      "node_id": 102368,
      "entry_id": 126431,
      "definition_id": 131257,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102368,
        "node_name": "Alpha Predator",
        "node_type": "single",
        "pos_x": 11400,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          110158
        ],
        "next": [
          102363
        ],
        "entry_id": 126431,
        "entry_max_ranks": 1,
        "definition_id": 131257,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Alpha Predator",
        "spell_id": 269737,
        "visible_spell_id": null,
        "icon": "spell_druid_savagery",
        "icon_candidates": [
          "spell_druid_savagery"
        ]
      },
      "pve_tooltip": "Kill Command now has 2 charges, and deals 15% increased damage.",
      "pvp_tooltip": "Kill Command now has 2 charges, and deals 15% increased damage.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Dire Beast",
      "spell_id": 120679,
      "node_id": 102376,
      "entry_id": 126439,
      "definition_id": 131265,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102376,
        "node_name": "Dire Beast",
        "node_type": "single",
        "pos_x": 12000,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          110158
        ],
        "next": [
          102363,
          102340
        ],
        "entry_id": 126439,
        "entry_max_ranks": 1,
        "definition_id": 131265,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Dire Beast",
        "spell_id": 120679,
        "visible_spell_id": null,
        "icon": "ability_hunter_longevity",
        "icon_candidates": [
          "ability_hunter_longevity"
        ]
      },
      "pve_tooltip": "Damage from your bleed effects has a 4% chance of attracting a powerful wild beast that attacks your target for 8 sec.\n(500ms cooldown)",
      "pvp_tooltip": "Damage from your bleed effects has a 4% chance of attracting a powerful wild beast that attacks your target for 8 sec.\n(500ms cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Stomp",
      "spell_id": 199530,
      "node_id": 102347,
      "entry_id": 126409,
      "definition_id": 131235,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102347,
        "node_name": "Stomp",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102377
        ],
        "next": [
          102340,
          102354
        ],
        "entry_id": 126409,
        "entry_max_ranks": 1,
        "definition_id": 131235,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Stomp",
        "spell_id": 199530,
        "visible_spell_id": null,
        "icon": "warrior_talent_icon_thunderstruck",
        "icon_candidates": [
          "warrior_talent_icon_thunderstruck"
        ]
      },
      "pve_tooltip": "When you cast Barbed Shot, your pet stomps the ground, dealing (144% of Attack Power) Physical damage to all nearby enemies.",
      "pvp_tooltip": "When you cast Barbed Shot, your pet stomps the ground, dealing (144% of Attack Power) Physical damage to all nearby enemies.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "War Orders",
      "spell_id": 393933,
      "node_id": 102343,
      "entry_id": 126405,
      "definition_id": 131231,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102343,
        "node_name": "War Orders",
        "node_type": "single",
        "pos_x": 13800,
        "pos_y": 2700,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102377
        ],
        "next": [
          102354
        ],
        "entry_id": 126405,
        "entry_max_ranks": 1,
        "definition_id": 131231,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "War Orders",
        "spell_id": 393933,
        "visible_spell_id": null,
        "icon": "ability_hunter_barbedshot",
        "icon_candidates": [
          "ability_hunter_barbedshot"
        ]
      },
      "pve_tooltip": "Barbed Shot deals 10% increased damage, and applying Barbed Shot reduces the cooldown of Kill Command by 3.0 sec.",
      "pvp_tooltip": "Barbed Shot deals 10% increased damage, and applying Barbed Shot reduces the cooldown of Kill Command by 3.0 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Wild Thrash",
      "spell_id": 1264359,
      "node_id": 102363,
      "entry_id": 126425,
      "definition_id": 131251,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102363,
        "node_name": "Wild Thrash",
        "node_type": "single",
        "pos_x": 11400,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102368,
          102376
        ],
        "next": [
          102341
        ],
        "entry_id": 126425,
        "entry_max_ranks": 1,
        "definition_id": 131251,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Wild Thrash",
        "spell_id": 1264359,
        "visible_spell_id": null,
        "icon": "ability_hunter_sickem",
        "icon_candidates": [
          "ability_hunter_sickem"
        ]
      },
      "pve_tooltip": "35 Focus\n50 yd range\nInstant\n8 sec cooldown\nCommand your pet to thrash all enemies within 10 yds, dealing (191% of Attack Power) Physical damage to them. Damage is increased by 300% if Wild Thrash hits 2 or more enemies.\nDeals reduced damage beyond 8 targets.",
      "pvp_tooltip": "35 Focus\n50 yd range\nInstant\n8 sec cooldown\nCommand your pet to thrash all enemies within 10 yds, dealing (191% of Attack Power) Physical damage to them. Damage is increased by 300% if Wild Thrash hits 2 or more enemies.\nDeals reduced damage beyond 8 targets.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Bestial Wrath",
      "spell_id": 19574,
      "node_id": 102340,
      "entry_id": 126402,
      "definition_id": 131228,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102340,
        "node_name": "Bestial Wrath",
        "node_type": "single",
        "pos_x": 12600,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102347,
          102376
        ],
        "next": [
          102342,
          102370
        ],
        "entry_id": 126402,
        "entry_max_ranks": 1,
        "definition_id": 131228,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Bestial Wrath",
        "spell_id": 19574,
        "visible_spell_id": null,
        "icon": "ability_druid_ferociousbite",
        "icon_candidates": [
          "ability_druid_ferociousbite"
        ]
      },
      "pve_tooltip": "100 yd range\nInstant\n1.5 min cooldown\nSends you and your pet into a rage, instantly dealing (800% of Attack Power) Physical damage to its target, and increasing all damage you both deal by 20% for 15 sec. Removes all crowd control effects from your pet. [Scent of Blood: Activating Bestial Wrath grants 0 charges of Barbed Shot]",
      "pvp_tooltip": "100 yd range\nInstant\n1.5 min cooldown\nSends you and your pet into a rage, instantly dealing (720% of Attack Power) Physical damage to its target, and increasing all damage you both deal by 20% for 15 sec. Removes all crowd control effects from your pet. [Scent of Blood: Activating Bestial Wrath grants 0 charges of Barbed Shot]",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 93,
          "end": 96,
          "old_token": "800",
          "new_token": "720",
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
          "old": "800",
          "new": "720"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 19574,
          "source_spell_id": 137015,
          "effect_index": 1,
          "effect_text": "Apply Aura: Modifies Damage/Healing Done",
          "base_value": 8.0,
          "spell_pvp_multiplier": -0.46,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": -0.46,
          "final_pvp_value": -3.68,
          "is_final_pvp_modified": true,
          "dependency_path": [
            19574,
            137015
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
          "talent_spell_id": 19574,
          "source_spell_id": 137015,
          "effect_index": 2,
          "effect_text": "Apply Aura: Modifies Periodic Damage/Healing Done (22)",
          "base_value": 8.0,
          "spell_pvp_multiplier": -0.46,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": -0.46,
          "final_pvp_value": -3.68,
          "is_final_pvp_modified": true,
          "dependency_path": [
            19574,
            137015
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
          "talent_spell_id": 19574,
          "source_spell_id": 137015,
          "effect_index": 3,
          "effect_text": "Apply Aura: Mod Pet Damage %",
          "base_value": 8.0,
          "spell_pvp_multiplier": -1.12,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": -1.12,
          "final_pvp_value": -8.96,
          "is_final_pvp_modified": true,
          "dependency_path": [
            19574,
            137015
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
          "talent_spell_id": 19574,
          "source_spell_id": 137015,
          "effect_index": 4,
          "effect_text": "Apply Aura: Mod Pet Damage %",
          "base_value": 8.0,
          "spell_pvp_multiplier": -1.12,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": -1.12,
          "final_pvp_value": -8.96,
          "is_final_pvp_modified": true,
          "dependency_path": [
            19574,
            137015
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
          "talent_spell_id": 19574,
          "source_spell_id": 344572,
          "effect_index": 1,
          "effect_text": "School Damage (Physical) (AP mod: 8 )",
          "base_value": null,
          "spell_pvp_multiplier": 0.9,
          "amount_kind": "direct",
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.9,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            19574,
            344572
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
      "talent_name": "Cobra Shot",
      "spell_id": 193455,
      "node_id": 102354,
      "entry_id": 126416,
      "definition_id": 131242,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102354,
        "node_name": "Cobra Shot",
        "node_type": "single",
        "pos_x": 13800,
        "pos_y": 3300,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102343,
          102347
        ],
        "next": [
          102357
        ],
        "entry_id": 126416,
        "entry_max_ranks": 1,
        "definition_id": 131242,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Cobra Shot",
        "spell_id": 193455,
        "visible_spell_id": null,
        "icon": "ability_hunter_cobrashot",
        "icon_candidates": [
          "ability_hunter_cobrashot"
        ]
      },
      "pve_tooltip": "Level 90\n35 Focus\n40 yd range\nInstant\nA quick shot causing (390.4% of Attack Power) * ((Min(90 - 1, 19) * 12 + 112) / 340) Physical damage.\nReduces the cooldown of Kill Command by 1 sec.",
      "pvp_tooltip": "Level 90\n35 Focus\n40 yd range\nInstant\nA quick shot causing (202.032% of Attack Power) * ((Min(90 - 1, 19) * 12 + 112) / 340) Physical damage.\nReduces the cooldown of Kill Command by 1 sec.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 60,
          "end": 65,
          "old_token": "390.4",
          "new_token": "202.032",
          "kind": "attack_power_coefficient",
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
          "kind": "attack_power_coefficient",
          "old": "390.4",
          "new": "202.032"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 193455,
          "source_spell_id": 193455,
          "effect_index": 2,
          "effect_text": "School Damage (Physical) (AP mod: 3.904 )",
          "base_value": null,
          "spell_pvp_multiplier": 0.575,
          "amount_kind": "direct",
          "aura_factor": 0.9,
          "final_pvp_multiplier": 0.5175,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [
            {
              "aura_spell_id": 1256939,
              "game_effect_id": 1264704,
              "amount_kind": "direct",
              "value_pct": -10.0,
              "factor": 0.9,
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
      "talent_name": "Beast Cleave",
      "spell_id": 115939,
      "node_id": 102341,
      "entry_id": 126403,
      "definition_id": 131229,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102341,
        "node_name": "Beast Cleave",
        "node_type": "single",
        "pos_x": 11400,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102363
        ],
        "next": [
          102369,
          102355,
          102338
        ],
        "entry_id": 126403,
        "entry_max_ranks": 1,
        "definition_id": 131229,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Beast Cleave",
        "spell_id": 115939,
        "visible_spell_id": null,
        "icon": "ability_hunter_sickem",
        "icon_candidates": [
          "ability_hunter_sickem"
        ]
      },
      "pve_tooltip": "After you Wild Thrash, your pet's melee attacks also strike all nearby enemies for 70% of the damage [Kill Cleave: and Kill Command strikes all nearby enemies for 70% of the damage] for the next 10.0 sec. Deals reduced damage beyond 8 targets.",
      "pvp_tooltip": "After you Wild Thrash, your pet's melee attacks also strike all nearby enemies for 70% of the damage [Kill Cleave: and Kill Command strikes all nearby enemies for 70% of the damage] for the next 10.0 sec. Deals reduced damage beyond 8 targets.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Scent of Blood",
      "spell_id": 193532,
      "node_id": 102342,
      "entry_id": 126404,
      "definition_id": 131230,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102342,
        "node_name": "Scent of Blood",
        "node_type": "single",
        "pos_x": 12000,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102340
        ],
        "next": [
          102338,
          102373
        ],
        "entry_id": 126404,
        "entry_max_ranks": 1,
        "definition_id": 131230,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Scent of Blood",
        "spell_id": 193532,
        "visible_spell_id": null,
        "icon": "spell_shadow_lifedrain",
        "icon_candidates": [
          "spell_shadow_lifedrain"
        ]
      },
      "pve_tooltip": "Activating Bestial Wrath grants 1 charge of Barbed Shot.",
      "pvp_tooltip": "Activating Bestial Wrath grants 1 charge of Barbed Shot.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Thundering Hooves",
      "spell_id": 459693,
      "node_id": 102370,
      "entry_id": 126433,
      "definition_id": 131259,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102370,
        "node_name": "Thundering Hooves",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102340
        ],
        "next": [
          102373,
          102345
        ],
        "entry_id": 126433,
        "entry_max_ranks": 1,
        "definition_id": 131259,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Thundering Hooves",
        "spell_id": 459693,
        "visible_spell_id": null,
        "icon": "inv__blacksmithing_hoofplate",
        "icon_candidates": [
          "inv__blacksmithing_hoofplate"
        ]
      },
      "pve_tooltip": "Bestial Wrath causes all active pets to Stomp at 200% effectiveness.\nStomp damage increased by 30%.\n(1s cooldown)",
      "pvp_tooltip": "Bestial Wrath causes all active pets to Stomp at 200% effectiveness.\nStomp damage increased by 30%.\n(1s cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Go for the Throat",
      "spell_id": 459550,
      "node_id": 102357,
      "entry_id": 126419,
      "definition_id": 131245,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102357,
        "node_name": "Go for the Throat",
        "node_type": "single",
        "pos_x": 13800,
        "pos_y": 3900,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102354
        ],
        "next": [
          102345,
          102374,
          102353
        ],
        "entry_id": 126419,
        "entry_max_ranks": 1,
        "definition_id": 131245,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Go for the Throat",
        "spell_id": 459550,
        "visible_spell_id": null,
        "icon": "ability_hunter_goforthethroat",
        "icon_candidates": [
          "ability_hunter_goforthethroat"
        ]
      },
      "pve_tooltip": "Kill Command deals increased critical strike damage equal to 100% of your critical strike chance.",
      "pvp_tooltip": "Kill Command deals increased critical strike damage equal to 100% of your critical strike chance.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Laceration",
      "spell_id": 459552,
      "node_id": 102369,
      "entry_id": 126432,
      "definition_id": 131258,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102369,
        "node_name": "Laceration",
        "node_type": "single",
        "pos_x": 10800,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102341
        ],
        "next": [
          102351,
          102337
        ],
        "entry_id": 126432,
        "entry_max_ranks": 1,
        "definition_id": 131258,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Laceration",
        "spell_id": 459552,
        "visible_spell_id": null,
        "icon": "ability_druid_disembowel",
        "icon_candidates": [
          "ability_druid_disembowel"
        ]
      },
      "pve_tooltip": "When your pet attacks critically strike, they cause their target to bleed for 8% of the damage dealt over 6 sec.",
      "pvp_tooltip": "When your pet attacks critically strike, they cause their target to bleed for 8% of the damage dealt over 6 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Kill Cleave",
      "spell_id": 378207,
      "node_id": 102355,
      "entry_id": 126417,
      "definition_id": 131243,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102355,
        "node_name": "Kill Cleave",
        "node_type": "single",
        "pos_x": 11400,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102341
        ],
        "next": [
          102337
        ],
        "entry_id": 126417,
        "entry_max_ranks": 1,
        "definition_id": 131243,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Kill Cleave",
        "spell_id": 378207,
        "visible_spell_id": null,
        "icon": "spell_druid_bloodythrash",
        "icon_candidates": [
          "spell_druid_bloodythrash"
        ]
      },
      "pve_tooltip": "While Beast Cleave is active, Kill Command now also strikes nearby enemies for 20% of damage dealt. Deals reduced damage beyond 8 targets.",
      "pvp_tooltip": "While Beast Cleave is active, Kill Command now also strikes nearby enemies for 20% of damage dealt. Deals reduced damage beyond 8 targets.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Training Expert",
      "spell_id": 378209,
      "node_id": 102338,
      "entry_id": 126399,
      "definition_id": 131225,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102338,
        "node_name": "Training Expert",
        "node_type": "single",
        "pos_x": 12000,
        "pos_y": 4500,
        "max_ranks": 2,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102342,
          102341
        ],
        "next": [
          102337,
          102365
        ],
        "entry_id": 126399,
        "entry_max_ranks": 2,
        "definition_id": 131225,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Training Expert",
        "spell_id": 378209,
        "visible_spell_id": null,
        "icon": "spell_hunter_adaptation",
        "icon_candidates": [
          "spell_hunter_adaptation"
        ]
      },
      "pve_tooltip": "All pet damage dealt increased by 6%.",
      "pvp_tooltip": "All pet damage dealt increased by 6%.",
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
          "pve_tooltip": "All pet damage dealt increased by 3%.",
          "pvp_tooltip": "All pet damage dealt increased by 3%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "All pet damage dealt increased by 6%.",
          "pvp_tooltip": "All pet damage dealt increased by 6%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "The Beast Within",
      "spell_id": 231548,
      "node_id": 102373,
      "entry_id": 126436,
      "definition_id": 131262,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102373,
        "node_name": "The Beast Within",
        "node_type": "single",
        "pos_x": 12600,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102342,
          102370
        ],
        "next": [
          102365,
          102358
        ],
        "entry_id": 126436,
        "entry_max_ranks": 1,
        "definition_id": 131262,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "The Beast Within",
        "spell_id": 231548,
        "visible_spell_id": null,
        "icon": "ability_druid_ferociousbite",
        "icon_candidates": [
          "ability_druid_ferociousbite"
        ]
      },
      "pve_tooltip": "Reduce the cooldown of Bestial Wrath by 60 sec.",
      "pvp_tooltip": "Reduce the cooldown of Bestial Wrath by 60 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Thrill of the Hunt",
      "spell_id": 1265051,
      "node_id": 102345,
      "entry_id": 126407,
      "definition_id": 131233,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102345,
        "node_name": "Thrill of the Hunt",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 4500,
        "max_ranks": 2,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102357,
          102370
        ],
        "next": [
          102358,
          102372
        ],
        "entry_id": 126407,
        "entry_max_ranks": 2,
        "definition_id": 131233,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Thrill of the Hunt",
        "spell_id": 1265051,
        "visible_spell_id": null,
        "icon": "ability_hunter_thrillofthehunt",
        "icon_candidates": [
          "ability_hunter_thrillofthehunt"
        ]
      },
      "pve_tooltip": "Barbed Shot critical strike chance increased by 10%.\nCobra Shot critical strike chance increased by 30%.",
      "pvp_tooltip": "Barbed Shot critical strike chance increased by 10%.\nCobra Shot critical strike chance increased by 30%.",
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
          "pve_tooltip": "Barbed Shot critical strike chance increased by 5%.\nCobra Shot critical strike chance increased by 15%.",
          "pvp_tooltip": "Barbed Shot critical strike chance increased by 5%.\nCobra Shot critical strike chance increased by 15%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "Barbed Shot critical strike chance increased by 10%.\nCobra Shot critical strike chance increased by 30%.",
          "pvp_tooltip": "Barbed Shot critical strike chance increased by 10%.\nCobra Shot critical strike chance increased by 30%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Pack Tactics",
      "spell_id": 321014,
      "node_id": 102374,
      "entry_id": 126437,
      "definition_id": 131263,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102374,
        "node_name": "Pack Tactics",
        "node_type": "single",
        "pos_x": 13800,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102357
        ],
        "next": [
          102372
        ],
        "entry_id": 126437,
        "entry_max_ranks": 1,
        "definition_id": 131263,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Pack Tactics",
        "spell_id": 321014,
        "visible_spell_id": null,
        "icon": "ability_hunter_invigeration",
        "icon_candidates": [
          "ability_hunter_invigeration"
        ]
      },
      "pve_tooltip": "Barbed Shot now instantly grants 25 Focus.\nPassive Focus generation increased by 75%.",
      "pvp_tooltip": "Barbed Shot now instantly grants 25 Focus.\nPassive Focus generation increased by 75%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Barbed Scales",
      "spell_id": 469880,
      "node_id": 102353,
      "entry_id": 126415,
      "definition_id": 131241,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102353,
        "node_name": "Barbed Scales",
        "node_type": "single",
        "pos_x": 14400,
        "pos_y": 4500,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102357
        ],
        "next": [
          102372,
          102344
        ],
        "entry_id": 126415,
        "entry_max_ranks": 1,
        "definition_id": 131241,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Barbed Scales",
        "spell_id": 469880,
        "visible_spell_id": null,
        "icon": "inv_misc_scales_stonygreen",
        "icon_candidates": [
          "inv_misc_scales_stonygreen"
        ]
      },
      "pve_tooltip": "Casting Cobra Shot reduces the cooldown of Barbed Shot by 2 sec.",
      "pvp_tooltip": "Casting Cobra Shot reduces the cooldown of Barbed Shot by 2 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Aspect of the Beast",
      "spell_id": 191384,
      "node_id": 102351,
      "entry_id": 126413,
      "definition_id": 131239,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102351,
        "node_name": "Aspect of the Beast",
        "node_type": "single",
        "pos_x": 10800,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102369
        ],
        "next": [
          102367
        ],
        "entry_id": 126413,
        "entry_max_ranks": 1,
        "definition_id": 131239,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Aspect of the Beast",
        "spell_id": 191384,
        "visible_spell_id": null,
        "icon": "ability_deathwing_assualtaspects",
        "icon_candidates": [
          "ability_deathwing_assualtaspects"
        ]
      },
      "pve_tooltip": "Unlimited range\nIncreases the damage of Bite, Claw, Smack and the effectiveness of your pet's unique abilities by 30%.\nIncreases the effectiveness of your pet's Predator's Thirst, Endurance Training, and Pathfinding passives by 50%.",
      "pvp_tooltip": "Unlimited range\nIncreases the damage of Bite, Claw, Smack and the effectiveness of your pet's unique abilities by 20%.\nIncreases the effectiveness of your pet's Predator's Thirst, Endurance Training, and Pathfinding passives by 50%.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 114,
          "end": 116,
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
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 191384,
          "source_spell_id": 191384,
          "effect_index": 1,
          "effect_text": "Apply Aura: Modifies Damage/Healing Done",
          "base_value": 30.0,
          "spell_pvp_multiplier": 0.666667,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.666667,
          "final_pvp_value": 20.00001,
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
          "talent_spell_id": 191384,
          "source_spell_id": 191384,
          "effect_index": 2,
          "effect_text": "Apply Aura: Modifies Periodic Damage/Healing Done (22)",
          "base_value": 30.0,
          "spell_pvp_multiplier": 0.666667,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.666667,
          "final_pvp_value": 20.00001,
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
      "talent_name": "Dire Cleave",
      "spell_id": 1217524,
      "node_id": 102337,
      "entry_id": 126398,
      "definition_id": 131224,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102337,
        "node_name": "Dire Cleave",
        "node_type": "single",
        "pos_x": 11400,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102369,
          102355,
          102338
        ],
        "next": [
          102367
        ],
        "entry_id": 126398,
        "entry_max_ranks": 1,
        "definition_id": 131224,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Dire Cleave",
        "spell_id": 1217524,
        "visible_spell_id": null,
        "icon": "ability_physical_taunt",
        "icon_candidates": [
          "ability_physical_taunt"
        ]
      },
      "pve_tooltip": "When summoned, Dire Beasts gain Beast Cleave at 100% effectiveness for 8.0 sec.",
      "pvp_tooltip": "When summoned, Dire Beasts gain Beast Cleave at 100% effectiveness for 8.0 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Dire Command",
      "spell_id": 378743,
      "node_id": 102365,
      "entry_id": 126427,
      "definition_id": 131253,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102365,
        "node_name": "Dire Command",
        "node_type": "single",
        "pos_x": 12000,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102338,
          102373
        ],
        "next": [
          102367,
          102336
        ],
        "entry_id": 126427,
        "entry_max_ranks": 1,
        "definition_id": 131253,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Dire Command",
        "spell_id": 378743,
        "visible_spell_id": null,
        "icon": "ability_hunter_ferociousinspiration",
        "icon_candidates": [
          "ability_hunter_ferociousinspiration"
        ]
      },
      "pve_tooltip": "Kill Command has a 20% chance to also summon a Dire Beast to attack your target for 8 sec.",
      "pvp_tooltip": "Kill Command has a 20% chance to also summon a Dire Beast to attack your target for 8 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Jagged Wounds",
      "spell_id": 1265044,
      "node_id": 102358,
      "entry_id": 126420,
      "definition_id": 131246,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102358,
        "node_name": "Jagged Wounds",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102345,
          102373
        ],
        "next": [
          102336,
          102364
        ],
        "entry_id": 126420,
        "entry_max_ranks": 1,
        "definition_id": 131246,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Jagged Wounds",
        "spell_id": 1265044,
        "visible_spell_id": null,
        "icon": "ability_skeer_bloodletting",
        "icon_candidates": [
          "ability_skeer_bloodletting"
        ]
      },
      "pve_tooltip": "All bleed damage dealt by you and your pets increased by 10%.",
      "pvp_tooltip": "All bleed damage dealt by you and your pets increased by 10%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Serpentine Strikes",
      "spell_id": 468701,
      "node_id": 102372,
      "entry_id": 126435,
      "definition_id": 131261,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102372,
        "node_name": "Serpentine Strikes",
        "node_type": "single",
        "pos_x": 13800,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102353,
          102374,
          102345
        ],
        "next": [
          102364
        ],
        "entry_id": 126435,
        "entry_max_ranks": 1,
        "definition_id": 131261,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Serpentine Strikes",
        "spell_id": 468701,
        "visible_spell_id": null,
        "icon": "spell_nature_poisoncleansingtotem",
        "icon_candidates": [
          "spell_nature_poisoncleansingtotem"
        ]
      },
      "pve_tooltip": "Cobra Shot critical damage dealt increased by 20%.\nWhen Cobra Shot critically strikes, it refunds 10 Focus.",
      "pvp_tooltip": "Cobra Shot critical damage dealt increased by 20%.\nWhen Cobra Shot critically strikes, it refunds 10 Focus.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Snakeskin Quiver",
      "spell_id": 468695,
      "node_id": 102344,
      "entry_id": 126406,
      "definition_id": 131232,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102344,
        "node_name": "Snakeskin Quiver / Cobra Senses",
        "node_type": "choice",
        "pos_x": 14400,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102353
        ],
        "next": [
          102364
        ],
        "entry_id": 126406,
        "entry_max_ranks": 1,
        "definition_id": 131232,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Snakeskin Quiver",
        "spell_id": 468695,
        "visible_spell_id": null,
        "icon": "inv_quiver_1h_hunter_c_01_green",
        "icon_candidates": [
          "inv_quiver_1h_hunter_c_01_green"
        ]
      },
      "pve_tooltip": "Your auto shot has a 15% chance to also fire a Cobra Shot at your target.\n(Proc chance: 15%)",
      "pvp_tooltip": "Your auto shot has a 15% chance to also fire a Cobra Shot at your target.\n(Proc chance: 15%)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Cobra Senses",
      "spell_id": 378244,
      "node_id": 102344,
      "entry_id": 128265,
      "definition_id": 133072,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102344,
        "node_name": "Snakeskin Quiver / Cobra Senses",
        "node_type": "choice",
        "pos_x": 14400,
        "pos_y": 5100,
        "max_ranks": 1,
        "required_points": 8,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102353
        ],
        "next": [
          102364
        ],
        "entry_id": 128265,
        "entry_max_ranks": 1,
        "definition_id": 133072,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Cobra Senses",
        "spell_id": 378244,
        "visible_spell_id": null,
        "icon": "ability_hunter_cobrastrikes",
        "icon_candidates": [
          "ability_hunter_cobrastrikes"
        ]
      },
      "pve_tooltip": "Cobra Shot Focus cost reduced by 5. Cobra Shot damage increased by 10%.",
      "pvp_tooltip": "Cobra Shot Focus cost reduced by 5. Cobra Shot damage increased by 10%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Dire Frenzy",
      "spell_id": 385810,
      "node_id": 102367,
      "entry_id": 126430,
      "definition_id": 131256,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102367,
        "node_name": "Dire Frenzy",
        "node_type": "single",
        "pos_x": 11400,
        "pos_y": 5700,
        "max_ranks": 2,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102351,
          102365,
          102337
        ],
        "next": [
          102350,
          107286,
          102360
        ],
        "entry_id": 126430,
        "entry_max_ranks": 2,
        "definition_id": 131256,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Dire Frenzy",
        "spell_id": 385810,
        "visible_spell_id": null,
        "icon": "ability_hunter_huntervswild",
        "icon_candidates": [
          "ability_hunter_huntervswild"
        ]
      },
      "pve_tooltip": "Dire Beast lasts an additional 2 sec and deals 20% increased damage.",
      "pvp_tooltip": "Dire Beast lasts an additional 2 sec and deals 20% increased damage.",
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
          "pve_tooltip": "Dire Beast lasts an additional 1 sec and deals 10% increased damage.",
          "pvp_tooltip": "Dire Beast lasts an additional 1 sec and deals 10% increased damage.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "Dire Beast lasts an additional 2 sec and deals 20% increased damage.",
          "pvp_tooltip": "Dire Beast lasts an additional 2 sec and deals 20% increased damage.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Frenzy",
      "spell_id": 1264934,
      "node_id": 102336,
      "entry_id": 126397,
      "definition_id": 131223,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102336,
        "node_name": "Frenzy",
        "node_type": "single",
        "pos_x": 12600,
        "pos_y": 5700,
        "max_ranks": 2,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102358,
          102365
        ],
        "next": [
          102360,
          102362,
          102356
        ],
        "entry_id": 126397,
        "entry_max_ranks": 2,
        "definition_id": 131223,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Frenzy",
        "spell_id": 1264934,
        "visible_spell_id": null,
        "icon": "ability_druid_kingofthejungle",
        "icon_candidates": [
          "ability_druid_kingofthejungle"
        ]
      },
      "pve_tooltip": "Increases the attack speed of your active pets by 40%.",
      "pvp_tooltip": "Increases the attack speed of your active pets by 40%.",
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
          "pve_tooltip": "Increases the attack speed of your active pets by 20%.",
          "pvp_tooltip": "Increases the attack speed of your active pets by 20%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "Increases the attack speed of your active pets by 40%.",
          "pvp_tooltip": "Increases the attack speed of your active pets by 40%.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Killer Instinct",
      "spell_id": 273887,
      "node_id": 102364,
      "entry_id": 126426,
      "definition_id": 131252,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102364,
        "node_name": "Killer Instinct",
        "node_type": "single",
        "pos_x": 13800,
        "pos_y": 5700,
        "max_ranks": 2,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102344,
          102372,
          102358
        ],
        "next": [
          102356,
          102375,
          102359
        ],
        "entry_id": 126426,
        "entry_max_ranks": 2,
        "definition_id": 131252,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Killer Instinct",
        "spell_id": 273887,
        "visible_spell_id": null,
        "icon": "ability_hunter_killcommand",
        "icon_candidates": [
          "ability_hunter_killcommand"
        ]
      },
      "pve_tooltip": "Kill Command deals 10% increased damage.",
      "pvp_tooltip": "Kill Command deals 10% increased damage.",
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
          "pve_tooltip": "Kill Command deals 5% increased damage.",
          "pvp_tooltip": "Kill Command deals 5% increased damage.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "Kill Command deals 10% increased damage.",
          "pvp_tooltip": "Kill Command deals 10% increased damage.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Brutal Companion",
      "spell_id": 386870,
      "node_id": 102350,
      "entry_id": 126412,
      "definition_id": 131238,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102350,
        "node_name": "Brutal Companion",
        "node_type": "single",
        "pos_x": 10800,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102367
        ],
        "next": [
          107285
        ],
        "entry_id": 126412,
        "entry_max_ranks": 1,
        "definition_id": 131238,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Brutal Companion",
        "spell_id": 386870,
        "visible_spell_id": null,
        "icon": "ability_druid_rake",
        "icon_candidates": [
          "ability_druid_rake"
        ]
      },
      "pve_tooltip": "Barbed Shot has a 25% chance to cause your pet to use its special attack and deal 50% bonus damage.",
      "pvp_tooltip": "Barbed Shot has a 25% chance to cause your pet to use its special attack and deal 50% bonus damage.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Huntmaster's Call",
      "spell_id": 459730,
      "node_id": 107286,
      "entry_id": 132189,
      "definition_id": 136990,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 107286,
        "node_name": "Huntmaster's Call",
        "node_type": "single",
        "pos_x": 11400,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102367
        ],
        "next": [
          107285
        ],
        "entry_id": 132189,
        "entry_max_ranks": 1,
        "definition_id": 136990,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Huntmaster's Call",
        "spell_id": 459730,
        "visible_spell_id": null,
        "icon": "spell_hunter_lonewolf",
        "icon_candidates": [
          "spell_hunter_lonewolf"
        ]
      },
      "pve_tooltip": "Summoning a Dire Beast 8 times sounds the Horn of Valor, summoning either Hati or Fenryr to battle.\nHati\nIncreases the damage of all your pets by 4%.\nFenryr\nPounces your primary target, inflicting a heavy bleed that deals (800% of Attack Power) damage over 8 sec and grants you 4% Haste.",
      "pvp_tooltip": "Summoning a Dire Beast 8 times sounds the Horn of Valor, summoning either Hati or Fenryr to battle.\nHati\nIncreases the damage of all your pets by 4%.\nFenryr\nPounces your primary target, inflicting a heavy bleed that deals (800% of Attack Power) damage over 8 sec and grants you 4% Haste.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 459730,
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
            459730,
            459753
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
      "talent_name": "Razor Sharp",
      "spell_id": 1265052,
      "node_id": 102360,
      "entry_id": 126422,
      "definition_id": 131248,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102360,
        "node_name": "Razor Sharp",
        "node_type": "single",
        "pos_x": 12000,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102336,
          102367
        ],
        "next": [],
        "entry_id": 126422,
        "entry_max_ranks": 1,
        "definition_id": 131248,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Razor Sharp",
        "spell_id": 1265052,
        "visible_spell_id": null,
        "icon": "ability_druid_berserk",
        "icon_candidates": [
          "ability_druid_berserk"
        ]
      },
      "pve_tooltip": "Damage dealt by your pet's Bite, Claw, and Smack increased by 100%.",
      "pvp_tooltip": "Damage dealt by your pet's Bite, Claw, and Smack increased by 100%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Bloodshed",
      "spell_id": 1272099,
      "node_id": 102362,
      "entry_id": 126424,
      "definition_id": 131250,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102362,
        "node_name": "Bloodshed",
        "node_type": "single",
        "pos_x": 12600,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102336
        ],
        "next": [
          110692
        ],
        "entry_id": 126424,
        "entry_max_ranks": 1,
        "definition_id": 131250,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Bloodshed",
        "spell_id": 1272099,
        "visible_spell_id": null,
        "icon": "ability_druid_primaltenacity",
        "icon_candidates": [
          "ability_druid_primaltenacity"
        ]
      },
      "pve_tooltip": "Bestial Wrath provokes your pets to tear into your target, causing your target to bleed for (1440% of Attack Power) damage over 12 sec.",
      "pvp_tooltip": "Bestial Wrath provokes your pets to tear into your target, causing your target to bleed for (1440% of Attack Power) damage over 12 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 1272099,
          "source_spell_id": 321538,
          "effect_index": 1,
          "effect_text": "Apply Aura: Periodic Damage",
          "base_value": null,
          "spell_pvp_multiplier": 0.75,
          "amount_kind": "periodic",
          "aura_factor": 0.9,
          "final_pvp_multiplier": 0.675,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1272099,
            321538
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256939,
              "game_effect_id": 1266354,
              "amount_kind": "periodic",
              "value_pct": -10.0,
              "factor": 0.9,
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
          "talent_spell_id": 1272099,
          "source_spell_id": 137015,
          "effect_index": 1,
          "effect_text": "Apply Aura: Modifies Damage/Healing Done",
          "base_value": 8.0,
          "spell_pvp_multiplier": -0.46,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": -0.46,
          "final_pvp_value": -3.68,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1272099,
            321538,
            137015
          ],
          "dependency_relations": [
            "tooltip_value_ref",
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
          "talent_spell_id": 1272099,
          "source_spell_id": 137015,
          "effect_index": 2,
          "effect_text": "Apply Aura: Modifies Periodic Damage/Healing Done (22)",
          "base_value": 8.0,
          "spell_pvp_multiplier": -0.46,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": -0.46,
          "final_pvp_value": -3.68,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1272099,
            321538,
            137015
          ],
          "dependency_relations": [
            "tooltip_value_ref",
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
          "talent_spell_id": 1272099,
          "source_spell_id": 137015,
          "effect_index": 3,
          "effect_text": "Apply Aura: Mod Pet Damage %",
          "base_value": 8.0,
          "spell_pvp_multiplier": -1.12,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": -1.12,
          "final_pvp_value": -8.96,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1272099,
            321538,
            137015
          ],
          "dependency_relations": [
            "tooltip_value_ref",
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
          "talent_spell_id": 1272099,
          "source_spell_id": 137015,
          "effect_index": 4,
          "effect_text": "Apply Aura: Mod Pet Damage %",
          "base_value": 8.0,
          "spell_pvp_multiplier": -1.12,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": -1.12,
          "final_pvp_value": -8.96,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1272099,
            321538,
            137015
          ],
          "dependency_relations": [
            "tooltip_value_ref",
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
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Savagery",
      "spell_id": 424557,
      "node_id": 102356,
      "entry_id": 126418,
      "definition_id": 131244,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102356,
        "node_name": "Savagery",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102336,
          102364
        ],
        "next": [],
        "entry_id": 126418,
        "entry_max_ranks": 1,
        "definition_id": 131244,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Savagery",
        "spell_id": 424557,
        "visible_spell_id": null,
        "icon": "spell_nature_protectionformnature",
        "icon_candidates": [
          "spell_nature_protectionformnature"
        ]
      },
      "pve_tooltip": "Kill Command damage is increased by 10%. Barbed Shot lasts 2.0 sec longer.",
      "pvp_tooltip": "Kill Command damage is increased by 10%. Barbed Shot lasts 2.0 sec longer.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Killer Cobra",
      "spell_id": 199532,
      "node_id": 102375,
      "entry_id": 126438,
      "definition_id": 131264,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102375,
        "node_name": "Killer Cobra",
        "node_type": "single",
        "pos_x": 13800,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102364
        ],
        "next": [
          102371
        ],
        "entry_id": 126438,
        "entry_max_ranks": 1,
        "definition_id": 131264,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Killer Cobra",
        "spell_id": 199532,
        "visible_spell_id": null,
        "icon": "ability_hunter_snaketrap",
        "icon_candidates": [
          "ability_hunter_snaketrap"
        ]
      },
      "pve_tooltip": "While Bestial Wrath is active, Cobra Shot resets the cooldown on Kill Command.",
      "pvp_tooltip": "While Bestial Wrath is active, Cobra Shot resets the cooldown on Kill Command.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Master Handler",
      "spell_id": 424558,
      "node_id": 102359,
      "entry_id": 126421,
      "definition_id": 131247,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102359,
        "node_name": "Master Handler",
        "node_type": "single",
        "pos_x": 14400,
        "pos_y": 6300,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102364
        ],
        "next": [
          102371
        ],
        "entry_id": 126421,
        "entry_max_ranks": 1,
        "definition_id": 131247,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Master Handler",
        "spell_id": 424558,
        "visible_spell_id": null,
        "icon": "inv_leatherworking_70_petleash",
        "icon_candidates": [
          "inv_leatherworking_70_petleash"
        ]
      },
      "pve_tooltip": "Each time Barbed Shot deals damage, the cooldown of Kill Command is reduced by 0.50 sec.",
      "pvp_tooltip": "Each time Barbed Shot deals damage, the cooldown of Kill Command is reduced by 0.50 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Wildspeaker",
      "spell_id": 1232739,
      "node_id": 107285,
      "entry_id": 132188,
      "definition_id": 136989,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 107285,
        "node_name": "Wildspeaker",
        "node_type": "single",
        "pos_x": 11400,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102350,
          107286
        ],
        "next": [],
        "entry_id": 132188,
        "entry_max_ranks": 1,
        "definition_id": 136989,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Wildspeaker",
        "spell_id": 1232739,
        "visible_spell_id": null,
        "icon": "ability_hunter_huntingparty",
        "icon_candidates": [
          "ability_hunter_huntingparty"
        ]
      },
      "pve_tooltip": "Dire Beasts will now obey your Kill Command, dealing its damage at 30% effectiveness.\nBestial Wrath now sends your Dire Beasts into a rage, increasing their damage dealt by 10% for 15 sec. Dire Beasts summoned during a Bestial Wrath will benefit at a reduced duration.",
      "pvp_tooltip": "Dire Beasts will now obey your Kill Command, dealing its damage at 30% effectiveness.\nBestial Wrath now sends your Dire Beasts into a rage, increasing their damage dealt by 10% for 15 sec. Dire Beasts summoned during a Bestial Wrath will benefit at a reduced duration.",
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
          "old": 800.0,
          "new": 720.0,
          "full_tooltip_match_count": 0
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 1232739,
          "source_spell_id": 137015,
          "effect_index": 1,
          "effect_text": "Apply Aura: Modifies Damage/Healing Done",
          "base_value": 8.0,
          "spell_pvp_multiplier": -0.46,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": -0.46,
          "final_pvp_value": -3.68,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1232739,
            186254,
            19574,
            137015
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "spelldesc_ref",
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
          "talent_spell_id": 1232739,
          "source_spell_id": 137015,
          "effect_index": 2,
          "effect_text": "Apply Aura: Modifies Periodic Damage/Healing Done (22)",
          "base_value": 8.0,
          "spell_pvp_multiplier": -0.46,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": -0.46,
          "final_pvp_value": -3.68,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1232739,
            186254,
            19574,
            137015
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "spelldesc_ref",
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
          "talent_spell_id": 1232739,
          "source_spell_id": 137015,
          "effect_index": 3,
          "effect_text": "Apply Aura: Mod Pet Damage %",
          "base_value": 8.0,
          "spell_pvp_multiplier": -1.12,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": -1.12,
          "final_pvp_value": -8.96,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1232739,
            186254,
            19574,
            137015
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "spelldesc_ref",
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
          "talent_spell_id": 1232739,
          "source_spell_id": 137015,
          "effect_index": 4,
          "effect_text": "Apply Aura: Mod Pet Damage %",
          "base_value": 8.0,
          "spell_pvp_multiplier": -1.12,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": -1.12,
          "final_pvp_value": -8.96,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1232739,
            186254,
            19574,
            137015
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "spelldesc_ref",
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
          "talent_spell_id": 1232739,
          "source_spell_id": 344572,
          "effect_index": 1,
          "effect_text": "School Damage (Physical) (AP mod: 8 )",
          "base_value": null,
          "spell_pvp_multiplier": 0.9,
          "amount_kind": "direct",
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.9,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1232739,
            186254,
            19574,
            344572
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
      "talent_name": "Bloody Frenzy",
      "spell_id": 407412,
      "node_id": 110692,
      "entry_id": 126400,
      "definition_id": 131226,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110692,
        "node_name": "Bloody Frenzy",
        "node_type": "single",
        "pos_x": 12600,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102362
        ],
        "next": [],
        "entry_id": 126400,
        "entry_max_ranks": 1,
        "definition_id": 131226,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Bloody Frenzy",
        "spell_id": 407412,
        "visible_spell_id": null,
        "icon": "ability_racial_cannibalize",
        "icon_candidates": [
          "ability_racial_cannibalize"
        ]
      },
      "pve_tooltip": "Bestial Wrath causes your Barbed Shot to deal damage [ceil49.2537]% faster for 10 sec.",
      "pvp_tooltip": "Bestial Wrath causes your Barbed Shot to deal damage [ceil49.2537]% faster for 10 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Piercing Fangs",
      "spell_id": 392053,
      "node_id": 102371,
      "entry_id": 126434,
      "definition_id": 131260,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102371,
        "node_name": "Piercing Fangs",
        "node_type": "single",
        "pos_x": 13800,
        "pos_y": 6900,
        "max_ranks": 1,
        "required_points": 20,
        "entry_node": false,
        "free_node": false,
        "prev": [
          102375,
          102359
        ],
        "next": [],
        "entry_id": 126434,
        "entry_max_ranks": 1,
        "definition_id": 131260,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Piercing Fangs",
        "spell_id": 392053,
        "visible_spell_id": null,
        "icon": "inv_misc_monsterfang_02",
        "icon_candidates": [
          "inv_misc_monsterfang_02"
        ]
      },
      "pve_tooltip": "Kill Command critical damage increased by 15%.",
      "pvp_tooltip": "Kill Command critical damage increased by 15%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Nature's Ally",
      "spell_id": 1273043,
      "node_id": 110428,
      "entry_id": 137052,
      "definition_id": 141815,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110428,
        "node_name": "Nature's Ally / Nature's Ally / Nature's Ally",
        "node_type": "tiered",
        "pos_x": 12600,
        "pos_y": 7650,
        "max_ranks": 4,
        "required_points": 20,
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [],
        "entry_id": 137052,
        "entry_max_ranks": 1,
        "definition_id": 141815,
        "entry_index": 100,
        "entry_type": "tierrank",
        "talent_name": "Nature's Ally",
        "spell_id": 1273043,
        "visible_spell_id": null,
        "icon": "inv12_apextalent_hunter_killfrenzy",
        "icon_candidates": [
          "inv12_apextalent_hunter_killfrenzy"
        ]
      },
      "pve_tooltip": "Bestial Wrath summons an Animal Companion from your Stable to fight alongside you for 15 sec. The summoned Animal Companion obeys your Kill Command, Wild Thrash, and Stomps alongside your other pets.",
      "pvp_tooltip": "Bestial Wrath summons an Animal Companion from your Stable to fight alongside you for 15 sec. The summoned Animal Companion obeys your Kill Command, Wild Thrash, and Stomps alongside your other pets.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Nature's Ally",
      "spell_id": 1273065,
      "node_id": 110428,
      "entry_id": 137051,
      "definition_id": 141814,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110428,
        "node_name": "Nature's Ally / Nature's Ally / Nature's Ally",
        "node_type": "tiered",
        "pos_x": 12600,
        "pos_y": 7650,
        "max_ranks": 4,
        "required_points": 20,
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [],
        "entry_id": 137051,
        "entry_max_ranks": 2,
        "definition_id": 141814,
        "entry_index": 200,
        "entry_type": "tierrank",
        "talent_name": "Nature's Ally",
        "spell_id": 1273065,
        "visible_spell_id": null,
        "icon": "ability_hunter_pathfinding2",
        "icon_candidates": [
          "ability_hunter_pathfinding2"
        ]
      },
      "pve_tooltip": "Damage dealt by your pets increased by 10%.\nBestial Wrath strikes 4 additional targets.",
      "pvp_tooltip": "Damage dealt by your pets increased by 10%.\nBestial Wrath strikes 4 additional targets.",
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
          "pve_tooltip": "Damage dealt by your pets increased by 5%.\nBestial Wrath strikes 2 additional targets.",
          "pvp_tooltip": "Damage dealt by your pets increased by 5%.\nBestial Wrath strikes 2 additional targets.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        },
        {
          "rank": 2,
          "pve_tooltip": "Damage dealt by your pets increased by 10%.\nBestial Wrath strikes 4 additional targets.",
          "pvp_tooltip": "Damage dealt by your pets increased by 10%.\nBestial Wrath strikes 4 additional targets.",
          "tooltip_changed": false,
          "changes": [],
          "source": "simc_exact_build_trait_rank",
          "build": "12.1.0.69933"
        }
      ]
    },
    {
      "talent_name": "Nature's Ally",
      "spell_id": 1273126,
      "node_id": 110428,
      "entry_id": 137050,
      "definition_id": 141813,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110428,
        "node_name": "Nature's Ally / Nature's Ally / Nature's Ally",
        "node_type": "tiered",
        "pos_x": 12600,
        "pos_y": 7650,
        "max_ranks": 4,
        "required_points": 20,
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [],
        "entry_id": 137050,
        "entry_max_ranks": 1,
        "definition_id": 141813,
        "entry_index": 300,
        "entry_type": "tierrank",
        "talent_name": "Nature's Ally",
        "spell_id": 1273126,
        "visible_spell_id": null,
        "icon": "ability_hunter_goforthethroat",
        "icon_candidates": [
          "ability_hunter_goforthethroat"
        ]
      },
      "pve_tooltip": "Barbed Shot and Cobra Shot damage increased by 15%.\nBarbed Shot, Cobra Shot, and Black Arrow increases the damage of your next Kill Command by 30%.",
      "pvp_tooltip": "Barbed Shot and Cobra Shot damage increased by 15%.\nBarbed Shot, Cobra Shot, and Black Arrow increases the damage of your next Kill Command by 30%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Black Arrow",
      "spell_id": 466930,
      "node_id": 109961,
      "entry_id": 136446,
      "definition_id": 141219,
      "tree_type": "hero",
      "hero_tree": "Dark Ranger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Dark Ranger",
        "subtree_id": 44,
        "node_id": 109961,
        "node_name": "Black Arrow",
        "node_type": "single",
        "pos_x": 8100,
        "pos_y": 1200,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": true,
        "free_node": true,
        "prev": [],
        "next": [
          94961,
          94968,
          94974,
          109801
        ],
        "entry_id": 136446,
        "entry_max_ranks": 1,
        "definition_id": 141219,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Black Arrow",
        "spell_id": 466930,
        "visible_spell_id": null,
        "icon": "inv_ability_darkrangerhunter_blackarrow",
        "icon_candidates": [
          "inv_ability_darkrangerhunter_blackarrow"
        ]
      },
      "pve_tooltip": "10 Focus\n40 yd range\nInstant\n10 sec cooldown\n1 Charge\nYou attempt to finish off a wounded target, dealing (348.4% of Attack Power) Shadow damage and (400% of Attack Power) Shadow damage over 8 sec. Only usable on enemies above 80% health or below 20% health.",
      "pvp_tooltip": "10 Focus\n40 yd range\nInstant\n10 sec cooldown\n1 Charge\nYou attempt to finish off a wounded target, dealing (322.0261% of Attack Power) Shadow damage and (400% of Attack Power) Shadow damage over 8 sec. Only usable on enemies above 80% health or below 20% health.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 107,
          "end": 112,
          "old_token": "348.4",
          "new_token": "322.0261",
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
          "old": "348.4",
          "new": "322.0261"
        },
        {
          "status": "OFFICIAL_HOTFIX_CURRENT",
          "source": "blizzard_hotfix",
          "source_url": "https://news.blizzard.com/en-us/article/24296142/hotfixes-september-24-2026",
          "hotfix_date": "2026-09-22",
          "hotfix_text": "Black Arrow damage increased by 30% in PvP combat.",
          "reason": "RELATIVE_HOTFIX_EVIDENCE",
          "evidence": {
            "source": "aura_rule",
            "factor": 1.3,
            "expected_factor": 1.3,
            "effect_index": 1,
            "source_spell_id": 466930
          }
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 466930,
          "source_spell_id": 466930,
          "effect_index": 1,
          "effect_text": "School Damage (Shadow) (AP mod: 3.484 )",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.9243000000000001,
          "final_pvp_multiplier": 0.9243000000000001,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [
            {
              "aura_spell_id": 1256939,
              "game_effect_id": 1264704,
              "amount_kind": "direct",
              "value_pct": -10.0,
              "factor": 0.9,
              "label_id": null,
              "build": "12.1.0.69933"
            },
            {
              "aura_spell_id": 1256939,
              "game_effect_id": 1266355,
              "amount_kind": "direct",
              "value_pct": -21.0,
              "factor": 0.79,
              "label_id": null,
              "build": "12.1.0.69933"
            },
            {
              "aura_spell_id": 1256939,
              "game_effect_id": 1357256,
              "amount_kind": "direct",
              "value_pct": 30.0,
              "factor": 1.3,
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
          "talent_spell_id": 466930,
          "source_spell_id": 468572,
          "effect_index": 1,
          "effect_text": "Apply Aura: Periodic Damage",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "periodic",
          "aura_factor": 1.3,
          "final_pvp_multiplier": 1.3,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            466930,
            468572
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256939,
              "game_effect_id": 1357257,
              "amount_kind": "periodic",
              "value_pct": 30.0,
              "factor": 1.3,
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
      "talent_name": "Bleak Arrows",
      "spell_id": 467749,
      "node_id": 94961,
      "entry_id": 117558,
      "definition_id": 122570,
      "tree_type": "hero",
      "hero_tree": "Dark Ranger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Dark Ranger",
        "subtree_id": 44,
        "node_id": 94961,
        "node_name": "Bleak Arrows",
        "node_type": "single",
        "pos_x": 7200,
        "pos_y": 1800,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109961
        ],
        "next": [
          94986
        ],
        "entry_id": 117558,
        "entry_max_ranks": 1,
        "definition_id": 122570,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Bleak Arrows",
        "spell_id": 467749,
        "visible_spell_id": null,
        "icon": "inv_quiver_1h_mawraid_d_01",
        "icon_candidates": [
          "inv_quiver_1h_mawraid_d_01"
        ]
      },
      "pve_tooltip": "Your auto shot now deals Shadow damage, allowing it to bypass armor.\nAuto shot damage increased by 100%.",
      "pvp_tooltip": "Your auto shot now deals Shadow damage, allowing it to bypass armor.\nAuto shot damage increased by 100%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Soul Drinker",
      "spell_id": 469638,
      "node_id": 94968,
      "entry_id": 117565,
      "definition_id": 122577,
      "tree_type": "hero",
      "hero_tree": "Dark Ranger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Dark Ranger",
        "subtree_id": 44,
        "node_id": 94968,
        "node_name": "Soul Drinker",
        "node_type": "single",
        "pos_x": 7800,
        "pos_y": 1800,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109961
        ],
        "next": [
          94959
        ],
        "entry_id": 117565,
        "entry_max_ranks": 1,
        "definition_id": 122577,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Soul Drinker",
        "spell_id": 469638,
        "visible_spell_id": null,
        "icon": "ability_warlock_soulsiphon",
        "icon_candidates": [
          "ability_warlock_soulsiphon"
        ]
      },
      "pve_tooltip": "Kill Command has a 20% chance and Barbed Shot has a 50% chance to grant Deathblow.\nDeathblow\nThe cooldown of Black Arrow is reset. Your next Black Arrow can be used on any target, regardless of their current health.\n(600ms cooldown)",
      "pvp_tooltip": "Kill Command has a 20% chance and Barbed Shot has a 50% chance to grant Deathblow.\nDeathblow\nThe cooldown of Black Arrow is reset. Your next Black Arrow can be used on any target, regardless of their current health.\n(600ms cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Bleak Powder",
      "spell_id": 467911,
      "node_id": 94974,
      "entry_id": 117571,
      "definition_id": 122583,
      "tree_type": "hero",
      "hero_tree": "Dark Ranger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Dark Ranger",
        "subtree_id": 44,
        "node_id": 94974,
        "node_name": "Bleak Powder",
        "node_type": "single",
        "pos_x": 8400,
        "pos_y": 1800,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109961
        ],
        "next": [
          94960
        ],
        "entry_id": 117571,
        "entry_max_ranks": 1,
        "definition_id": 122583,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Bleak Powder",
        "spell_id": 467911,
        "visible_spell_id": null,
        "icon": "inv_misc_powder_tin",
        "icon_candidates": [
          "inv_misc_powder_tin"
        ]
      },
      "pve_tooltip": "Black Arrow now explodes in a cloud of shadow and sulfur on impact, dealing (250% of Attack Power) Shadow damage to all enemies within an 8 yd cone behind the target. Damage reduced beyond 8 targets.\n(700ms cooldown)",
      "pvp_tooltip": "Black Arrow now explodes in a cloud of shadow and sulfur on impact, dealing (225% of Attack Power) Shadow damage to all enemies within an 8 yd cone behind the target. Damage reduced beyond 8 targets.\n(700ms cooldown)",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 77,
          "end": 80,
          "old_token": "250",
          "new_token": "225",
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
          "old": "250",
          "new": "225"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 467911,
          "source_spell_id": 472084,
          "effect_index": 1,
          "effect_text": "School Damage (Shadow) (AP mod: 2.5 )",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.9,
          "final_pvp_multiplier": 0.9,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            467911,
            472084
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256939,
              "game_effect_id": 1264704,
              "amount_kind": "direct",
              "value_pct": -10.0,
              "factor": 0.9,
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
      "talent_name": "Corpsecaller",
      "spell_id": 1264289,
      "node_id": 109801,
      "entry_id": 136059,
      "definition_id": 140814,
      "tree_type": "hero",
      "hero_tree": "Dark Ranger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Dark Ranger",
        "subtree_id": 44,
        "node_id": 109801,
        "node_name": "Corpsecaller",
        "node_type": "single",
        "pos_x": 9000,
        "pos_y": 1800,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109961
        ],
        "next": [
          109800
        ],
        "entry_id": 136059,
        "entry_max_ranks": 1,
        "definition_id": 140814,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Corpsecaller",
        "spell_id": 1264289,
        "visible_spell_id": null,
        "icon": "ability_fiegndead",
        "icon_candidates": [
          "ability_fiegndead"
        ]
      },
      "pve_tooltip": "Approximately 0.5 procs per minute\nWhen summoning a Dire Beast, you have a 10% chance to instead summon a Dark Hound that deals significantly increased damage.",
      "pvp_tooltip": "Approximately 0.5 procs per minute\nWhen summoning a Dire Beast, you have a 10% chance to instead summon a Dark Hound that deals significantly increased damage.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Ebon Bowstring",
      "spell_id": 467897,
      "node_id": 94986,
      "entry_id": 117583,
      "definition_id": 122595,
      "tree_type": "hero",
      "hero_tree": "Dark Ranger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Dark Ranger",
        "subtree_id": 44,
        "node_id": 94986,
        "node_name": "Ebon Bowstring / Through the Eyes",
        "node_type": "choice",
        "pos_x": 7200,
        "pos_y": 2400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94961
        ],
        "next": [
          94983
        ],
        "entry_id": 117583,
        "entry_max_ranks": 1,
        "definition_id": 122595,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Ebon Bowstring",
        "spell_id": 467897,
        "visible_spell_id": null,
        "icon": "inv_10_tailoring_craftingoptionalreagent_enhancedspellthread_color4",
        "icon_candidates": [
          "inv_10_tailoring_craftingoptionalreagent_enhancedspellthread_color4"
        ]
      },
      "pve_tooltip": "Casting Black Arrow has a 15% chance to grant Deathblow.\nDeathblow\nThe cooldown of Black Arrow is reset. Your next Black Arrow can be used on any target, regardless of their current health.",
      "pvp_tooltip": "Casting Black Arrow has a 15% chance to grant Deathblow.\nDeathblow\nThe cooldown of Black Arrow is reset. Your next Black Arrow can be used on any target, regardless of their current health.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Through the Eyes",
      "spell_id": 1277565,
      "node_id": 94986,
      "entry_id": 136742,
      "definition_id": 141514,
      "tree_type": "hero",
      "hero_tree": "Dark Ranger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Dark Ranger",
        "subtree_id": 44,
        "node_id": 94986,
        "node_name": "Ebon Bowstring / Through the Eyes",
        "node_type": "choice",
        "pos_x": 7200,
        "pos_y": 2400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94961
        ],
        "next": [
          94983
        ],
        "entry_id": 136742,
        "entry_max_ranks": 1,
        "definition_id": 141514,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Through the Eyes",
        "spell_id": 1277565,
        "visible_spell_id": null,
        "icon": "ability_cheapshot",
        "icon_candidates": [
          "ability_cheapshot"
        ]
      },
      "pve_tooltip": "Kill Shot damage increased by 10%.",
      "pvp_tooltip": "Kill Shot damage increased by 10%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Smoke Screen",
      "spell_id": 430709,
      "node_id": 94959,
      "entry_id": 123779,
      "definition_id": 128617,
      "tree_type": "hero",
      "hero_tree": "Dark Ranger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Dark Ranger",
        "subtree_id": 44,
        "node_id": 94959,
        "node_name": "Smoke Screen",
        "node_type": "single",
        "pos_x": 7800,
        "pos_y": 2400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94968
        ],
        "next": [
          94957
        ],
        "entry_id": 123779,
        "entry_max_ranks": 1,
        "definition_id": 128617,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Smoke Screen",
        "spell_id": 430709,
        "visible_spell_id": null,
        "icon": "spell_warlock_demonsoul",
        "icon_candidates": [
          "spell_warlock_demonsoul"
        ]
      },
      "pve_tooltip": "Exhilaration grants you 3 sec of Survival of the Fittest.\nSurvival of the Fittest activates Exhilaration at 50% effectiveness.",
      "pvp_tooltip": "Exhilaration grants you 3 sec of Survival of the Fittest.\nSurvival of the Fittest activates Exhilaration at 50% effectiveness.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Dark Chains",
      "spell_id": 430712,
      "node_id": 94960,
      "entry_id": 117557,
      "definition_id": 122569,
      "tree_type": "hero",
      "hero_tree": "Dark Ranger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Dark Ranger",
        "subtree_id": 44,
        "node_id": 94960,
        "node_name": "Dark Chains / Shadow Dagger",
        "node_type": "choice",
        "pos_x": 8400,
        "pos_y": 2400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94974
        ],
        "next": [
          94982
        ],
        "entry_id": 117557,
        "entry_max_ranks": 1,
        "definition_id": 122569,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Dark Chains",
        "spell_id": 430712,
        "visible_spell_id": null,
        "icon": "inv_belt_44c",
        "icon_candidates": [
          "inv_belt_44c"
        ]
      },
      "pve_tooltip": "While in combat, Disengage will chain the closest target to the ground, causing them to move 40% slower until they move 8 yards away.",
      "pvp_tooltip": "While in combat, Disengage will chain the closest target to the ground, causing them to move 30% slower until they move 8 yards away.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 93,
          "end": 95,
          "old_token": "40",
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
          "old": "40",
          "new": "30"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 430712,
          "source_spell_id": 442396,
          "effect_index": 1,
          "effect_text": "Apply Aura: Decrease Run Speed %",
          "base_value": -40.0,
          "spell_pvp_multiplier": 0.75,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.75,
          "final_pvp_value": -30.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            430712,
            442396
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
      "talent_name": "Shadow Dagger",
      "spell_id": 467741,
      "node_id": 94960,
      "entry_id": 128219,
      "definition_id": 133026,
      "tree_type": "hero",
      "hero_tree": "Dark Ranger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Dark Ranger",
        "subtree_id": 44,
        "node_id": 94960,
        "node_name": "Dark Chains / Shadow Dagger",
        "node_type": "choice",
        "pos_x": 8400,
        "pos_y": 2400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94974
        ],
        "next": [
          94982
        ],
        "entry_id": 128219,
        "entry_max_ranks": 1,
        "definition_id": 133026,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Shadow Dagger",
        "spell_id": 467741,
        "visible_spell_id": null,
        "icon": "ability_throw",
        "icon_candidates": [
          "ability_throw"
        ]
      },
      "pve_tooltip": "While in combat, Disengage releases a fan of shadow daggers, dealing (0.5% of Attack Power) Shadow damage per second and reducing affected target's movement speed by 30% for 6 sec.",
      "pvp_tooltip": "While in combat, Disengage releases a fan of shadow daggers, dealing (0.5% of Attack Power) Shadow damage per second and reducing affected target's movement speed by 20% for 6 sec.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 166,
          "end": 168,
          "old_token": "30",
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
          "old": "30",
          "new": "20"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 467741,
          "source_spell_id": 467745,
          "effect_index": 2,
          "effect_text": "Apply Aura: Decrease Run Speed %",
          "base_value": -30.0,
          "spell_pvp_multiplier": 0.666667,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.666667,
          "final_pvp_value": -20.00001,
          "is_final_pvp_modified": true,
          "dependency_path": [
            467741,
            467745
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
      "talent_name": "Wailing Dead",
      "spell_id": 1264290,
      "node_id": 109800,
      "entry_id": 136058,
      "definition_id": 140813,
      "tree_type": "hero",
      "hero_tree": "Dark Ranger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Dark Ranger",
        "subtree_id": 44,
        "node_id": 109800,
        "node_name": "Wailing Dead",
        "node_type": "single",
        "pos_x": 9000,
        "pos_y": 2400,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109801
        ],
        "next": [
          109799
        ],
        "entry_id": 136058,
        "entry_max_ranks": 1,
        "definition_id": 140813,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Wailing Dead",
        "spell_id": 1264290,
        "visible_spell_id": null,
        "icon": "ability_deathknight_summongargoyle",
        "icon_candidates": [
          "ability_deathknight_summongargoyle"
        ]
      },
      "pve_tooltip": "Bestial Wrath summons a Dark Hound.\nFor 15 sec after casting Bestial Wrath, Bestial Wrath is replaced with Wailing Arrow.\nWailing Arrow\nFire an enchanted arrow, dealing (1400% of Attack Power) Shadow damage to your target and an additional (700% of Attack Power) Shadow damage to all enemies within 8 yds of your target. Non-Player targets struck by a Wailing Arrow have their spellcasting interrupted and are silenced for 1 sec.\nGrants Deathblow.",
      "pvp_tooltip": "Bestial Wrath summons a Dark Hound.\nFor 15 sec after casting Bestial Wrath, Bestial Wrath is replaced with Wailing Arrow.\nWailing Arrow\nFire an enchanted arrow, dealing (1260% of Attack Power) Shadow damage to your target and an additional (630% of Attack Power) Shadow damage to all enemies within 8 yds of your target. Non-Player targets struck by a Wailing Arrow have their spellcasting interrupted and are silenced for 1 sec.\nGrants Deathblow.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 170,
          "end": 174,
          "old_token": "1400",
          "new_token": "1260",
          "kind": "attack_power_coefficient",
          "effect_indexes": [
            1
          ]
        },
        {
          "start": 241,
          "end": 244,
          "old_token": "700",
          "new_token": "630",
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
          "old": "1400",
          "new": "1260"
        },
        {
          "effect_indexes": [
            2
          ],
          "status": "APPLIED",
          "kind": "attack_power_coefficient",
          "old": "700",
          "new": "630"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "EMBEDDED",
          "talent_spell_id": 1264290,
          "source_spell_id": 392058,
          "effect_index": 1,
          "effect_text": "School Damage (Shadow) (AP mod: 14 )",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.9,
          "final_pvp_multiplier": 0.9,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1264290,
            392060,
            392058
          ],
          "dependency_relations": [
            "spelldesc_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256939,
              "game_effect_id": 1264704,
              "amount_kind": "direct",
              "value_pct": -10.0,
              "factor": 0.9,
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
          "talent_spell_id": 1264290,
          "source_spell_id": 392058,
          "effect_index": 2,
          "effect_text": "School Damage (Shadow) (AP mod: 7 )",
          "base_value": null,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 0.9,
          "final_pvp_multiplier": 0.9,
          "final_pvp_value": null,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1264290,
            392060,
            392058
          ],
          "dependency_relations": [
            "spelldesc_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256939,
              "game_effect_id": 1264704,
              "amount_kind": "direct",
              "value_pct": -10.0,
              "factor": 0.9,
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
      "talent_name": "Blighted Quiver",
      "spell_id": 1264291,
      "node_id": 94983,
      "entry_id": 128238,
      "definition_id": 133045,
      "tree_type": "hero",
      "hero_tree": "Dark Ranger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Dark Ranger",
        "subtree_id": 44,
        "node_id": 94983,
        "node_name": "Blighted Quiver",
        "node_type": "single",
        "pos_x": 7200,
        "pos_y": 3000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94986
        ],
        "next": [
          94993
        ],
        "entry_id": 128238,
        "entry_max_ranks": 1,
        "definition_id": 133045,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Blighted Quiver",
        "spell_id": 1264291,
        "visible_spell_id": null,
        "icon": "inv_quiver_1h_sylvanas_d_01",
        "icon_candidates": [
          "inv_quiver_1h_sylvanas_d_01"
        ]
      },
      "pve_tooltip": "You fire 2 additional Black Arrows during Withering Fire's barrage.\nBeast Cleave and Kill Cleave damage increased by 5%.",
      "pvp_tooltip": "You fire 2 additional Black Arrows during Withering Fire's barrage.\nBeast Cleave and Kill Cleave damage increased by 5%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Banshee's Mark",
      "spell_id": 467902,
      "node_id": 94957,
      "entry_id": 117554,
      "definition_id": 122566,
      "tree_type": "hero",
      "hero_tree": "Dark Ranger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Dark Ranger",
        "subtree_id": 44,
        "node_id": 94957,
        "node_name": "Banshee's Mark / The Bell Tolls",
        "node_type": "choice",
        "pos_x": 7800,
        "pos_y": 3000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94959
        ],
        "next": [
          94993
        ],
        "entry_id": 117554,
        "entry_max_ranks": 1,
        "definition_id": 122566,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Banshee's Mark",
        "spell_id": 467902,
        "visible_spell_id": null,
        "icon": "achievement_leader_sylvanas",
        "icon_candidates": [
          "achievement_leader_sylvanas"
        ]
      },
      "pve_tooltip": "Black Arrow and Bleak Powder critical strike damage increased by 10%.",
      "pvp_tooltip": "Black Arrow and Bleak Powder critical strike damage increased by 10%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "The Bell Tolls",
      "spell_id": 467644,
      "node_id": 94957,
      "entry_id": 136231,
      "definition_id": 141004,
      "tree_type": "hero",
      "hero_tree": "Dark Ranger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Dark Ranger",
        "subtree_id": 44,
        "node_id": 94957,
        "node_name": "Banshee's Mark / The Bell Tolls",
        "node_type": "choice",
        "pos_x": 7800,
        "pos_y": 3000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94959
        ],
        "next": [
          94993
        ],
        "entry_id": 136231,
        "entry_max_ranks": 1,
        "definition_id": 141004,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "The Bell Tolls",
        "spell_id": 467644,
        "visible_spell_id": null,
        "icon": "spell_shadow_animatedead",
        "icon_candidates": [
          "spell_shadow_animatedead"
        ]
      },
      "pve_tooltip": "All pet damage increased by 6%.\nDire Beast damage increased by 10%.",
      "pvp_tooltip": "All pet damage increased by 6%.\nDire Beast damage increased by 10%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Umbral Reach",
      "spell_id": 1235397,
      "node_id": 94982,
      "entry_id": 132888,
      "definition_id": 137674,
      "tree_type": "hero",
      "hero_tree": "Dark Ranger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Dark Ranger",
        "subtree_id": 44,
        "node_id": 94982,
        "node_name": "Umbral Reach",
        "node_type": "single",
        "pos_x": 8400,
        "pos_y": 3000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94960
        ],
        "next": [
          94993
        ],
        "entry_id": 132888,
        "entry_max_ranks": 1,
        "definition_id": 137674,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Umbral Reach",
        "spell_id": 1235397,
        "visible_spell_id": null,
        "icon": "spell_deathknight_strangulate",
        "icon_candidates": [
          "spell_deathknight_strangulate"
        ]
      },
      "pve_tooltip": "Bleak Powder now applies Black Arrow's periodic effect to all enemies it damages.\nIf Bleak Powder damages 2 or more enemies, gain Beast Cleave if talented.",
      "pvp_tooltip": "Bleak Powder now applies Black Arrow's periodic effect to all enemies it damages.\nIf Bleak Powder damages 2 or more enemies, gain Beast Cleave if talented.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Pact of the Hollow",
      "spell_id": 1264690,
      "node_id": 109799,
      "entry_id": 136057,
      "definition_id": 140812,
      "tree_type": "hero",
      "hero_tree": "Dark Ranger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Dark Ranger",
        "subtree_id": 44,
        "node_id": 109799,
        "node_name": "Pact of the Hollow",
        "node_type": "single",
        "pos_x": 9000,
        "pos_y": 3000,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109800
        ],
        "next": [
          94993
        ],
        "entry_id": 136057,
        "entry_max_ranks": 1,
        "definition_id": 140812,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Pact of the Hollow",
        "spell_id": 1264690,
        "visible_spell_id": null,
        "icon": "ability_creature_cursed_03",
        "icon_candidates": [
          "ability_creature_cursed_03"
        ]
      },
      "pve_tooltip": "Kill Command causes your Dark Hound to Shadow Thrash, dealing (210% of Attack Power) Shadow damage to up to 8 nearby enemies.",
      "pvp_tooltip": "Kill Command causes your Dark Hound to Shadow Thrash, dealing (210% of Attack Power) Shadow damage to up to 8 nearby enemies.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0,
      "rank_tooltips": []
    },
    {
      "talent_name": "Withering Fire",
      "spell_id": 466990,
      "node_id": 94993,
      "entry_id": 117590,
      "definition_id": 122602,
      "tree_type": "hero",
      "hero_tree": "Dark Ranger",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69933",
        "generated_at": "2026-09-24T23:00:32.508Z",
        "content_hash": "031bc0017082a9628929355494566340",
        "class_name": "Hunter",
        "class_id": 3,
        "spec_name": "Beast Mastery",
        "spec_id": 253,
        "trait_tree_id": 774,
        "tree_type": "hero",
        "hero_tree": "Dark Ranger",
        "subtree_id": 44,
        "node_id": 94993,
        "node_name": "Withering Fire",
        "node_type": "single",
        "pos_x": 8100,
        "pos_y": 3600,
        "max_ranks": 1,
        "required_points": 0,
        "entry_node": false,
        "free_node": false,
        "prev": [
          94982,
          109799,
          94957,
          94983
        ],
        "next": [],
        "entry_id": 117590,
        "entry_max_ranks": 1,
        "definition_id": 122602,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Withering Fire",
        "spell_id": 466990,
        "visible_spell_id": null,
        "icon": "spell_shadow_painspike",
        "icon_candidates": [
          "spell_shadow_painspike"
        ]
      },
      "pve_tooltip": "Bestial Wrath causes you to surrender to darkness, granting you Withering Fire for 10 sec and Deathblow.\nWithering Fire\nCasting Black Arrow fires a barrage of 2 additional Black Arrows at nearby targets at 30% effectiveness, prioritizing enemies that aren't affected by Black Arrow's damage over time effect.",
      "pvp_tooltip": "Bestial Wrath causes you to surrender to darkness, granting you Withering Fire for 10 sec and Deathblow.\nWithering Fire\nCasting Black Arrow fires a barrage of 2 additional Black Arrows at nearby targets at 15% effectiveness, prioritizing enemies that aren't affected by Black Arrow's damage over time effect.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 206,
          "end": 208,
          "old_token": "30",
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
            4
          ],
          "status": "APPLIED",
          "kind": "percent_value",
          "old": "30",
          "new": "15"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 466990,
          "source_spell_id": 466990,
          "effect_index": 4,
          "effect_text": "Apply Aura: Dummy",
          "base_value": 30.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 15.0,
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
          "talent_spell_id": 466990,
          "source_spell_id": 466991,
          "effect_index": 3,
          "effect_text": "Dummy",
          "base_value": 50.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 25.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            466990,
            466991
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
      "pvp_tooltip": "While in combat, every 30 sec your next Kill Command summons the aid of a Beast.\nWyvern\nA Wyvern descends from the skies, letting out a battle cry that increases the damage of you and your pets by 10% for 12 sec.\nBoar\nA Boar charges through your target 1 time, dealing (648% of Attack Power) damage to nearby enemies and an additional (540% of Attack Power) physical damage to its primary target. Damage reduced beyond 5 targets.\nBear\nA Bear leaps into the fray, rending the flesh of your enemies, dealing (400% of Attack Power) damage over 10 sec to up to 8 nearby enemies.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 337,
          "end": 341,
          "old_token": "1200",
          "new_token": "540",
          "kind": "attack_power_coefficient",
          "effect_indexes": [
            1
          ]
        },
        {
          "start": 270,
          "end": 274,
          "old_token": "1440",
          "new_token": "648",
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
          "new": "648"
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "attack_power_coefficient",
          "old": "1200",
          "new": "540"
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
          "aura_factor": 0.9,
          "final_pvp_multiplier": 0.45,
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
              "aura_spell_id": 1256939,
              "game_effect_id": 1264704,
              "amount_kind": "direct",
              "value_pct": -10.0,
              "factor": 0.9,
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
          "aura_factor": 0.9,
          "final_pvp_multiplier": 0.45,
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
              "aura_spell_id": 1256939,
              "game_effect_id": 1264704,
              "amount_kind": "direct",
              "value_pct": -10.0,
              "factor": 0.9,
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
          "aura_factor": 0.9,
          "final_pvp_multiplier": 0.9,
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
              "aura_spell_id": 1256939,
              "game_effect_id": 1266354,
              "amount_kind": "periodic",
              "value_pct": -10.0,
              "factor": 0.9,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
      "pve_tooltip": "Howl of the Pack Leader increases the damage of your Kill Command by 25%.\nSummoning a Beast reduces the cooldown of Barbed Shot by 4.0 sec.",
      "pvp_tooltip": "Howl of the Pack Leader increases the damage of your Kill Command by 25%.\nSummoning a Beast reduces the cooldown of Barbed Shot by 4.0 sec.",
      "tooltip_changed": false,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
      "pve_tooltip": "Kill Command reduces the cooldown of Howl of the Pack Leader by 1.0 sec.\nCobra Shot reduces the cooldown of Howl of the Pack Leader by 1.0 sec.",
      "pvp_tooltip": "Kill Command reduces the cooldown of Howl of the Pack Leader by 1.0 sec.\nCobra Shot reduces the cooldown of Howl of the Pack Leader by 1.0 sec.",
      "tooltip_changed": false,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
      "pve_tooltip": "Damage dealt by your pets is increased by 2%.\nBarbed Shot damage increased by 10%.",
      "pvp_tooltip": "Damage dealt by your pets is increased by 2%.\nBarbed Shot damage increased by 10%.",
      "tooltip_changed": false,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
      "pve_tooltip": "Your pet's attacks increase your Wyvern's damage bonus by 1%, up to 10%.\nCasting Kill Command extends the duration of your Wyvern by 0.5 sec, up to 5 additional sec.",
      "pvp_tooltip": "Your pet's attacks increase your Wyvern's damage bonus by 1%, up to 10%.\nCasting Kill Command extends the duration of your Wyvern by 0.5 sec, up to 5 additional sec.",
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
          "new": 540.0,
          "full_tooltip_match_count": 0
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "NESTED_DEPENDENCY_NOT_VISIBLE",
          "kind": "attack_power_coefficient",
          "old": 1440.0,
          "new": 648.0,
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
          "aura_factor": 0.9,
          "final_pvp_multiplier": 0.45,
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
              "aura_spell_id": 1256939,
              "game_effect_id": 1264704,
              "amount_kind": "direct",
              "value_pct": -10.0,
              "factor": 0.9,
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
          "aura_factor": 0.9,
          "final_pvp_multiplier": 0.45,
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
              "aura_spell_id": 1256939,
              "game_effect_id": 1264704,
              "amount_kind": "direct",
              "value_pct": -10.0,
              "factor": 0.9,
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
          "aura_factor": 0.9,
          "final_pvp_multiplier": 0.9,
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
              "aura_spell_id": 1256939,
              "game_effect_id": 1266354,
              "amount_kind": "periodic",
              "value_pct": -10.0,
              "factor": 0.9,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
      "pve_tooltip": "When your Boar deals damage, the damage of your next Cobra Shot is increased by 100%.\nEach additional enemy damaged by your Boar causes Cobra Shot to strike 1 additional target, up to 4.",
      "pvp_tooltip": "When your Boar deals damage, the damage of your next Cobra Shot is increased by 50%.\nEach additional enemy damaged by your Boar causes Cobra Shot to strike 1 additional target, up to 4.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 80,
          "end": 83,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
      "pve_tooltip": "Approximately 20 procs per minute\nYour auto shot have a very high chance to grants 3 Focus to you and your pet.\nAuto shot damage increased by 25%.",
      "pvp_tooltip": "Approximately 20 procs per minute\nYour auto shot have a very high chance to grants 3 Focus to you and your pet.\nAuto shot damage increased by 25%.",
      "tooltip_changed": false,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
      "pve_tooltip": "Your Bleed effects deal 10% increased damage.",
      "pvp_tooltip": "Your Bleed effects deal 10% increased damage.",
      "tooltip_changed": false,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
      "pve_tooltip": "Hogstrider further increases the damage of Cobra Shot by 25% and it now strikes up to 3 additional targets.",
      "pvp_tooltip": "Hogstrider further increases the damage of Cobra Shot by 25% and it now strikes up to 3 additional targets.",
      "tooltip_changed": false,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
      "pve_tooltip": "Your mastery is increased by 3%.",
      "pvp_tooltip": "Your mastery is increased by 3%.",
      "tooltip_changed": false,
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
        "spec_name": "Beast Mastery",
        "spec_id": 253,
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
      "pve_tooltip": "Casting Bestial Wrath grants Howl of the Pack Leader and causes your next Kill Command to rouse the nearby wildlife into a Stampede, charging your target and dealing [(150% of Attack Power) * 9] Physical damage over 7 sec.",
      "pvp_tooltip": "Casting Bestial Wrath grants Howl of the Pack Leader and causes your next Kill Command to rouse the nearby wildlife into a Stampede, charging your target and dealing [(121.5% of Attack Power) * 9] Physical damage over 7 sec.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 168,
          "end": 171,
          "old_token": "150",
          "new_token": "121.5",
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
          "new": "121.5"
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
          "aura_factor": 0.81,
          "final_pvp_multiplier": 0.81,
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
              "aura_spell_id": 1256939,
              "game_effect_id": 1264704,
              "amount_kind": "direct",
              "value_pct": -10.0,
              "factor": 0.9,
              "label_id": null,
              "build": "12.1.0.69933"
            },
            {
              "aura_spell_id": 1256939,
              "game_effect_id": 1352912,
              "amount_kind": "direct",
              "value_pct": -10.0,
              "factor": 0.9,
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
    "spec_id": 253,
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
        "id": 99832,
        "name": "Dark Ranger / Pack Leader",
        "type": "subtree",
        "posX": 7200,
        "posY": 600,
        "entryNode": true,
        "next": [],
        "prev": [],
        "entries": [
          {
            "id": 123348,
            "type": "subtree",
            "name": "Dark Ranger",
            "traitSubTreeId": 44,
            "traitTreeId": 774,
            "atlasMemberName": "talents-heroclass-hunter-darkranger",
            "nodes": [
              94987,
              109961,
              94961,
              94968,
              94974,
              109801,
              94986,
              94959,
              94960,
              109800,
              94983,
              94957,
              94982,
              109799,
              94993
            ]
          },
          {
            "id": 123347,
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
        "talent_name": "Black Arrow",
        "spell_id": 466930,
        "text": "Black Arrow damage increased by 30% in PvP combat.",
        "date": "2026-09-22",
        "evidence": {
          "source": "aura_rule",
          "factor": 1.3,
          "expected_factor": 1.3,
          "effect_index": 1,
          "source_spell_id": 466930
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
  "slug": "hunter-beast-mastery",
  "generated_at": "2026-09-26T06:57:22.511547+00:00",
  "validation": {
    "talents": 129,
    "changed_tooltips": 20,
    "talents_with_pvp_mechanics": 25,
    "unique_nodes": 113,
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
