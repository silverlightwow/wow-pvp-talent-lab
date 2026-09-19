window.WOW_PVP_DATA = {
  "class_name": "Death Knight",
  "spec_name": "Frost",
  "tree_build": "12.1.0.69875",
  "simc_build": "12.1.0.69875",
  "drustvar_builds": [
    "12.1.0.69587"
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": true,
        "free_node": true,
        "prev": [],
        "next": [
          76045
        ],
        "entry_id": 96210,
        "definition_id": 101212,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Icebound Fortitude",
        "spell_id": 48792,
        "icon": "spell_deathknight_iceboundfortitude"
      },
      "pve_tooltip": "Instant\n2 min cooldown\nYour blood freezes, granting immunity to Stun effects and reducing all damage you take by 30% for 8 sec.",
      "pvp_tooltip": "Instant\n2 min cooldown\nYour blood freezes, granting immunity to Stun effects and reducing all damage you take by 30% for 8 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [
          76067
        ],
        "entry_id": 96200,
        "definition_id": 101202,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Death Strike",
        "spell_id": 49998,
        "icon": "spell_deathknight_butcher2"
      },
      "pve_tooltip": "45 Runic Power\nMelee Range\nInstant\nFocuses dark power into a strike with both weapons, that deals a total of [(153.12% of Attack Power) + (29.835% of Attack Power)] Physical damage and heals you for (20 /\nVoracious\n:\n21\n/\nImproved Death Strike\n:\n32\n)% of all damage taken in the last 5 sec, minimum\n7.0\n% of maximum health.",
      "pvp_tooltip": "45 Runic Power\nMelee Range\nInstant\nFocuses dark power into a strike with both weapons, that deals a total of [(153.12% of Attack Power) + (29.835% of Attack Power)] Physical damage and heals you for (20 /\nVoracious\n:\n21\n/\nImproved Death Strike\n:\n32\n)% of all damage taken in the last 5 sec, minimum\n7.0\n% of maximum health.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 49998,
          "source_spell_id": 49998,
          "effect_index": 1,
          "effect_text": "School Damage (Physical) (AP mod: 1.5312 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.13,
          "final_pvp_multiplier": 1.13,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead"
          ],
          "confidence": "medium"
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 49998,
          "source_spell_id": 66188,
          "effect_index": 1,
          "effect_text": "School Damage (Physical) (AP mod: 0.29835 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.13,
          "final_pvp_multiplier": 1.13,
          "final_pvp_value": 0.0,
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
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead"
          ],
          "confidence": "medium"
        }
      ],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [
          76073
        ],
        "entry_id": 96201,
        "definition_id": 101203,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Raise Dead",
        "spell_id": 46585,
        "icon": "inv_pet_ghoul"
      },
      "pve_tooltip": "30 yd range\nInstant\n2 min cooldown\nRaises a [\nGlyph of the Geist\n:\ngeist\n/ ghoul] to fight by your side. You can have a maximum of one [\nGlyph of the Geist\n:\ngeist\n/ ghoul] at a time. Lasts 1 min.",
      "pvp_tooltip": "30 yd range\nInstant\n2 min cooldown\nRaises a [\nGlyph of the Geist\n:\ngeist\n/ ghoul] to fight by your side. You can have a maximum of one [\nGlyph of the Geist\n:\ngeist\n/ ghoul] at a time. Lasts 1 min.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "definition_id": 101175,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Runic Attenuation",
        "spell_id": 207104,
        "icon": "boss_odunrunes_blue"
      },
      "pve_tooltip": "Approximately\n10.8\nprocs per minute\nAuto attacks have a chance to generate 3 Runic Power.",
      "pvp_tooltip": "Approximately\n10.8\nprocs per minute\nAuto attacks have a chance to generate 3 Runic Power.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "definition_id": 101198,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Improved Death Strike",
        "spell_id": 374277,
        "icon": "spell_deathknight_butcher2"
      },
      "pve_tooltip": "Death Strike's cost is reduced by 10, and its healing is increased by 60%.",
      "pvp_tooltip": "Death Strike's cost is reduced by 10, and its healing is increased by 60%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "definition_id": 101204,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Cleaving Strikes",
        "spell_id": 316916,
        "icon": "inv_1115_warrior_fastermeleeattacks"
      },
      "pve_tooltip": "Frostscythe deals 20% increased damage during Remorseless Winter.",
      "pvp_tooltip": "Frostscythe deals 20% increased damage during Remorseless Winter.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "definition_id": 101215,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Mind Freeze",
        "spell_id": 47528,
        "icon": "spell_deathknight_mindfreeze"
      },
      "pve_tooltip": "15 yd range\nInstant\n15 sec cooldown\nSmash the target's mind with cold, interrupting spellcasting and preventing any spell in that school from being cast for 5 sec.",
      "pvp_tooltip": "15 yd range\nInstant\n15 sec cooldown\nSmash the target's mind with cold, interrupting spellcasting and preventing any spell in that school from being cast for 5 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": false,
        "free_node": false,
        "prev": [
          76045
        ],
        "next": [
          101708
        ],
        "entry_id": 96172,
        "definition_id": 101174,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Blinding Sleet",
        "spell_id": 207167,
        "icon": "spell_frost_chillingblast"
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
          "kind": "ordinary_value",
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
          "kind": "ordinary_value",
          "old": "50",
          "new": "30"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 207167,
          "source_spell_id": 207167,
          "effect_index": 2,
          "effect_text": "Apply Aura: Decrease Run Speed %",
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
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 207167,
          "source_spell_id": 317898,
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
            207167,
            317898
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [],
          "sources": [
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        }
      ],
      "render_effect_count": 2
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "definition_id": 101182,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Gloom Ward",
        "spell_id": 391571,
        "icon": "ability_rogue_envelopingshadows"
      },
      "pve_tooltip": "Absorbs are 15% more effective on you.",
      "pvp_tooltip": "Absorbs are 15% more effective on you.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": false,
        "free_node": false,
        "prev": [
          76067
        ],
        "next": [
          76068
        ],
        "entry_id": 96203,
        "definition_id": 101205,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "March of Darkness",
        "spell_id": 391546,
        "icon": "ability_argus_deathfog"
      },
      "pve_tooltip": "Death's Advance grants an additional 25% movement speed over the first 3 sec. [\nPrice of Progress\n:\nMovement speed while using Price of Progress is increased by 5%\n]",
      "pvp_tooltip": "Death's Advance grants an additional 25% movement speed over the first 3 sec. [\nPrice of Progress\n:\nMovement speed while using Price of Progress is increased by 5%\n]",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": false,
        "free_node": false,
        "prev": [
          76067
        ],
        "next": [
          76068
        ],
        "entry_id": 133518,
        "definition_id": 138304,
        "entry_index": 200,
        "entry_type": "active",
        "talent_name": "Wraith Walk",
        "spell_id": 212552,
        "icon": "inv_helm_plate_raiddeathknight_p_01"
      },
      "pve_tooltip": "Channeled (4 sec cast)\n1 min cooldown\nEmbrace the power of the Shadowlands, removing all root effects and increasing your movement speed by\n70\n% for 4 sec. Taking any action cancels the effect.\nWhile active, your movement speed cannot be reduced below 170%.",
      "pvp_tooltip": "Channeled (4 sec cast)\n1 min cooldown\nEmbrace the power of the Shadowlands, removing all root effects and increasing your movement speed by\n70\n% for 4 sec. Taking any action cancels the effect.\nWhile active, your movement speed cannot be reduced below 170%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "definition_id": 101200,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Unholy Momentum",
        "spell_id": 374265,
        "icon": "spell_necro_deathrift"
      },
      "pve_tooltip": "Increases Haste by 2%.",
      "pvp_tooltip": "Increases Haste by 2%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": false,
        "free_node": false,
        "prev": [
          76073
        ],
        "next": [
          76061
        ],
        "entry_id": 96188,
        "definition_id": 101190,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Control Undead",
        "spell_id": 111673,
        "icon": "inv_misc_bone_skull_01"
      },
      "pve_tooltip": "1 Rune / -10 Runic Power\n30 yd range\n1.5 sec cast\nDominates the target undead creature up to level 38, forcing it to do your bidding for 5 min.",
      "pvp_tooltip": "1 Rune / -10 Runic Power\n30 yd range\n1.5 sec cast\nDominates the target undead creature up to level 38, forcing it to do your bidding for 5 min.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "definition_id": 141296,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Enfeeble",
        "spell_id": 392566,
        "icon": "ability_creature_poison_01"
      },
      "pve_tooltip": "Your ghoul's attacks have a chance to apply Enfeeble, reducing the enemies movement speed by 30% and the damage they deal to you by 12% for 6 sec.",
      "pvp_tooltip": "Your ghoul's attacks have a chance to apply Enfeeble, reducing the enemies movement speed by 20% and the damage they deal to you by 8% for 6 sec.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 93,
          "end": 95,
          "old_token": "30",
          "new_token": "20",
          "kind": "ordinary_value",
          "effect_indexes": [
            1
          ]
        },
        {
          "start": 132,
          "end": 134,
          "old_token": "12",
          "new_token": "8",
          "kind": "ordinary_value",
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
          "kind": "ordinary_value",
          "old": "30",
          "new": "20"
        },
        {
          "effect_indexes": [
            2
          ],
          "status": "APPLIED",
          "kind": "ordinary_value",
          "old": "12",
          "new": "8"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 392566,
          "source_spell_id": 392490,
          "effect_index": 1,
          "effect_text": "Apply Aura: Decrease Run Speed %",
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
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 392566,
          "source_spell_id": 392490,
          "effect_index": 2,
          "effect_text": "Apply Aura: Mod Damage to Caster % (127)",
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
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        }
      ],
      "render_effect_count": 2
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": false,
        "free_node": false,
        "prev": [
          76084
        ],
        "next": [
          76085
        ],
        "entry_id": 96212,
        "definition_id": 101214,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Coldthirst",
        "spell_id": 378848,
        "icon": "spell_deathknight_mindfreeze"
      },
      "pve_tooltip": "Successfully interrupting an enemy with Mind Freeze grants 10 Runic Power and reduces its cooldown by 3 sec.",
      "pvp_tooltip": "Successfully interrupting an enemy with Mind Freeze grants 10 Runic Power and reduces its cooldown by 3 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "definition_id": 130438,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Proliferating Chill",
        "spell_id": 373930,
        "icon": "spell_frost_chainsofice"
      },
      "pve_tooltip": "Chains of Ice affects 1 additional nearby enemy.",
      "pvp_tooltip": "Chains of Ice affects 1 additional nearby enemy.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "definition_id": 101197,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Permafrost",
        "spell_id": 207200,
        "icon": "achievement_zone_frostfire"
      },
      "pve_tooltip": "Your auto attack damage grants you an absorb shield equal to 35% of the damage dealt.",
      "pvp_tooltip": "Your auto attack damage grants you an absorb shield equal to 35% of the damage dealt.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "definition_id": 101199,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Veteran of the Third War",
        "spell_id": 48263,
        "icon": "spell_misc_warsongfocus"
      },
      "pve_tooltip": "Stamina increased by 12%.",
      "pvp_tooltip": "Stamina increased by 12%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [
        {
          "effect_indexes": [
            1
          ],
          "status": "OTHER_SPEC_BRANCH",
          "kind": "ordinary_value",
          "old": 20.0,
          "new": 10.0,
          "full_tooltip_match_count": 1
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
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
            "drustvar"
          ],
          "confidence": "high"
        }
      ],
      "render_effect_count": 1
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "definition_id": 101206,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Death Pact",
        "spell_id": 48743,
        "icon": "spell_shadow_deathpact"
      },
      "pve_tooltip": "Instant\n2 min cooldown\nCreate a death pact that heals you for 50% of your maximum health, but absorbs incoming healing equal to 30% of your max health for 15 sec.",
      "pvp_tooltip": "Instant\n2 min cooldown\nCreate a death pact that heals you for 50% of your maximum health, but absorbs incoming healing equal to 30% of your max health for 15 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "definition_id": 101192,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Brittle",
        "spell_id": 374504,
        "icon": "ability_bosskilrogg_deaththroes"
      },
      "pve_tooltip": "Your diseases have a chance to weaken your enemy causing your attacks against them to deal 6% increased damage for 5 sec.\n(Proc chance: 15%)",
      "pvp_tooltip": "Your diseases have a chance to weaken your enemy causing your attacks against them to deal 6% increased damage for 5 sec.\n(Proc chance: 15%)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": false,
        "free_node": false,
        "prev": [
          110029
        ],
        "next": [
          76076
        ],
        "entry_id": 96189,
        "definition_id": 101191,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Blood Bond",
        "spell_id": 1267028,
        "icon": "ability_deathknight_roilingblood"
      },
      "pve_tooltip": "While you are below 50% health, your Ghoul sacrifices 4% of its maximum health to heal you for 1% of your maximum health every sec.",
      "pvp_tooltip": "While you are below 50% health, your Ghoul sacrifices 4% of its maximum health to heal you for 1% of your maximum health every sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "definition_id": 101216,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Icy Talons",
        "spell_id": 194878,
        "icon": "spell_deathknight_icytalons"
      },
      "pve_tooltip": "Your Runic Power spending abilities increase your melee attack speed by 6% for 10 sec, stacking up to 3 times.\n(500ms cooldown)",
      "pvp_tooltip": "Your Runic Power spending abilities increase your melee attack speed by 6% for 10 sec, stacking up to 3 times.\n(500ms cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": false,
        "free_node": false,
        "prev": [
          76066
        ],
        "next": [
          76064
        ],
        "entry_id": 136524,
        "definition_id": 141297,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Death Notes",
        "spell_id": 1266819,
        "icon": "inv_misc_book_01"
      },
      "pve_tooltip": "Raise Ally costs 30 less Runic Power.",
      "pvp_tooltip": "Raise Ally costs 30 less Runic Power.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "definition_id": 101196,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Anti-Magic Zone",
        "spell_id": 51052,
        "icon": "spell_deathknight_antimagiczone"
      },
      "pve_tooltip": "30 yd range\nInstant\n4 min cooldown\nPlaces an Anti-Magic Zone for\n6 sec\n, reducing the magic damage taken by party or raid members by 15%.",
      "pvp_tooltip": "30 yd range\nInstant\n4 min cooldown\nPlaces an Anti-Magic Zone for\n6 sec\n, reducing the magic damage taken by party or raid members by 15%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": false,
        "free_node": false,
        "prev": [
          76075
        ],
        "next": [
          76046
        ],
        "entry_id": 136525,
        "definition_id": 141298,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Death Defiance",
        "spell_id": 1266818,
        "icon": "spell_nature_shamanrage"
      },
      "pve_tooltip": "The cooldown of Death Pact is reduced by 30 sec, and you receive 50% increased healing while its healing absorb is active.",
      "pvp_tooltip": "The cooldown of Death Pact is reduced by 30 sec, and you receive 50% increased healing while its healing absorb is active.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "definition_id": 101207,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Unholy Bond",
        "spell_id": 374261,
        "icon": "inv_sword_1h_felfireraid_d_01"
      },
      "pve_tooltip": "Increases the effectiveness of your Runeforge effects by 20%.",
      "pvp_tooltip": "Increases the effectiveness of your Runeforge effects by 20%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": false,
        "free_node": false,
        "prev": [
          76085
        ],
        "next": [
          76087
        ],
        "entry_id": 96215,
        "definition_id": 101217,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Ice Prison",
        "spell_id": 454786,
        "icon": "ability_mage_deepfreeze"
      },
      "pve_tooltip": "Chains of Ice now also roots enemies for 4 sec but its cooldown is increased to 12 sec.",
      "pvp_tooltip": "Chains of Ice now also roots enemies for 4 sec but its cooldown is increased to 12 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "definition_id": 101195,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Asphyxiate",
        "spell_id": 221562,
        "icon": "ability_deathknight_asphixiate"
      },
      "pve_tooltip": "20 yd range\nInstant\n45 sec cooldown\nLifts the enemy target off the ground, crushing their throat with dark energy and stunning them for 5 sec.",
      "pvp_tooltip": "20 yd range\nInstant\n45 sec cooldown\nLifts the enemy target off the ground, crushing their throat with dark energy and stunning them for 5 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "definition_id": 141299,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Death's Reach",
        "spell_id": 276079,
        "icon": "spell_deathknight_strangulate"
      },
      "pve_tooltip": "Increases the range of Death Grip by 10 yds.\nKilling an enemy that yields experience or honor resets the cooldown of Death Grip.",
      "pvp_tooltip": "Increases the range of Death Grip by 10 yds.\nKilling an enemy that yields experience or honor resets the cooldown of Death Grip.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": false,
        "free_node": false,
        "prev": [
          76065
        ],
        "next": [
          76078
        ],
        "entry_id": 96176,
        "definition_id": 101178,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Assimilation",
        "spell_id": 374383,
        "icon": "spell_deathknight_antimagiczone"
      },
      "pve_tooltip": "The cooldown of Anti-Magic Zone is reduced by 60 sec and its duration is increased by 2 sec.",
      "pvp_tooltip": "The cooldown of Anti-Magic Zone is reduced by 60 sec and its duration is increased by 2 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "definition_id": 101176,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Anti-Magic Barrier",
        "spell_id": 205727,
        "icon": "spell_shadow_antimagicshell"
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
          "old": "40",
          "new": "20"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 205727,
          "source_spell_id": 205727,
          "effect_index": 2,
          "effect_text": "Apply Aura: Modifies Buff Duration (1)",
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
            "drustvar"
          ],
          "confidence": "high"
        }
      ],
      "render_effect_count": 1
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": false,
        "free_node": false,
        "prev": [
          76076
        ],
        "next": [
          76058
        ],
        "entry_id": 96186,
        "definition_id": 101188,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Grip of the Dead",
        "spell_id": 273952,
        "icon": "ability_creature_disease_05"
      },
      "pve_tooltip": "[\nDefile\n/ Death and Decay] reduces the movement speed of enemies within its area by 90%, decaying by 10% every sec.",
      "pvp_tooltip": "[\nDefile\n/ Death and Decay] reduces the movement speed of enemies within its area by 90%, decaying by 10% every sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "definition_id": 101218,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Suppression",
        "spell_id": 374049,
        "icon": "ability_racial_forceshield"
      },
      "pve_tooltip": "Damage taken from area of effect attacks reduced by 3%. When suffering a loss of control effect, this bonus is increased by an additional 6% for 6 sec.",
      "pvp_tooltip": "Damage taken from area of effect attacks reduced by 3%. When suffering a loss of control effect, this bonus is increased by an additional 6% for 6 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "definition_id": 101209,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Blood Scent",
        "spell_id": 374030,
        "icon": "ability_ironmaidens_bloodritual"
      },
      "pve_tooltip": "Increases Leech by 3%.",
      "pvp_tooltip": "Increases Leech by 3%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "definition_id": 101189,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Unholy Endurance",
        "spell_id": 389682,
        "icon": "spell_deathknight_subversion"
      },
      "pve_tooltip": "Increases Lichborne duration by 2 sec and reduces the cooldown by 30 sec.",
      "pvp_tooltip": "Increases Lichborne duration by 2 sec and reduces the cooldown by 30 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": false,
        "free_node": false,
        "prev": [
          76087
        ],
        "next": [
          76079
        ],
        "entry_id": 96217,
        "definition_id": 101219,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Osmosis",
        "spell_id": 454835,
        "icon": "spell_nature_rune"
      },
      "pve_tooltip": "Anti-Magic Shell increases healing received by 15%.",
      "pvp_tooltip": "Anti-Magic Shell increases healing received by 15%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "definition_id": 101181,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Insidious Chill",
        "spell_id": 391566,
        "icon": "ability_racial_wardoftheloafrost"
      },
      "pve_tooltip": "Your auto-attacks reduce the target's auto-attack speed by 5% for 30 sec, stacking up to 4 times.",
      "pvp_tooltip": "Your auto-attacks reduce the target's auto-attack speed by 5% for 30 sec, stacking up to 4 times.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "definition_id": 101185,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Runic Protection",
        "spell_id": 454788,
        "icon": "ability_mage_shattershield"
      },
      "pve_tooltip": "Your chance to be critically struck is reduced by 3% and your Armor is increased by 6%.",
      "pvp_tooltip": "Your chance to be critically struck is reduced by 3% and your Armor is increased by 6%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": false,
        "free_node": false,
        "prev": [
          76058
        ],
        "next": [
          76054
        ],
        "entry_id": 96184,
        "definition_id": 101186,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Blood Draw",
        "spell_id": 374598,
        "icon": "inv_artifact_bloodoftheassassinated"
      },
      "pve_tooltip": "When you fall below 30% health you drain (120% of Attack Power) health from nearby enemies, the damage you take is reduced by 10% and your Death Strike cost is reduced by 10 for 8 sec.\nCan only occur every 2 min.",
      "pvp_tooltip": "When you fall below 30% health you drain (120% of Attack Power) health from nearby enemies, the damage you take is reduced by 10% and your Death Strike cost is reduced by 10 for 8 sec.\nCan only occur every 2 min.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "definition_id": 101210,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Rune Mastery",
        "spell_id": 374574,
        "icon": "ability_deathknight_hungeringruneblade"
      },
      "pve_tooltip": "Consuming a Rune has a chance to increase your Strength by 3% for 8 sec.",
      "pvp_tooltip": "Consuming a Rune has a chance to increase your Strength by 3% for 8 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "definition_id": 101211,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Subduing Grasp",
        "spell_id": 454822,
        "icon": "spell_nature_elementalshields"
      },
      "pve_tooltip": "When you would pull an enemy, the damage they deal to you is reduced by 6% for 6 sec.",
      "pvp_tooltip": "When you would pull an enemy, the damage they deal to you is reduced by 6% for 6 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "definition_id": 101184,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Will of the Necropolis",
        "spell_id": 206967,
        "icon": "achievement_boss_kelthuzad_01"
      },
      "pve_tooltip": "Damage taken below 30% Health is reduced by 20%.",
      "pvp_tooltip": "Damage taken below 30% Health is reduced by 10%.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 44,
          "end": 46,
          "old_token": "20",
          "new_token": "10",
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
          "old": "20",
          "new": "10"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 206967,
          "source_spell_id": 206967,
          "effect_index": 2,
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
            "drustvar"
          ],
          "confidence": "high"
        }
      ],
      "render_effect_count": 1
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": false,
        "free_node": false,
        "prev": [
          76079
        ],
        "next": [],
        "entry_id": 126016,
        "definition_id": 130847,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Null Magic",
        "spell_id": 454842,
        "icon": "spell_shadow_detectinvisibility"
      },
      "pve_tooltip": "Magic damage taken is reduced by 5% and the duration of harmful Magic effects against you are reduced by 35%.",
      "pvp_tooltip": "Magic damage taken is reduced by 5% and the duration of harmful Magic effects against you are reduced by 10.15%.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 105,
          "end": 107,
          "old_token": "35",
          "new_token": "10.15",
          "kind": "ordinary_value",
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
          "status": "OTHER_SPEC_BRANCH",
          "kind": "ordinary_value",
          "old": 8.0,
          "new": 4.8,
          "full_tooltip_match_count": 1
        },
        {
          "effect_indexes": [
            2
          ],
          "status": "APPLIED",
          "kind": "ordinary_value",
          "old": "35",
          "new": "10.15"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 454842,
          "source_spell_id": 454842,
          "effect_index": 1,
          "effect_text": "Apply Aura: Mod % Damage Taken (All)",
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
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        },
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 454842,
          "source_spell_id": 454842,
          "effect_index": 2,
          "effect_text": "Apply Aura: Mod Debuffs Duration % (Magic)",
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
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        }
      ],
      "render_effect_count": 2
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": false,
        "free_node": false,
        "prev": [
          76080,
          76079
        ],
        "next": [],
        "entry_id": 96178,
        "definition_id": 101180,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Unyielding Will",
        "spell_id": 457574,
        "icon": "spell_shadow_nethercloak"
      },
      "pve_tooltip": "Anti-Magic Shell now removes all harmful magical effects when activated, but its cooldown is increased by 20 sec.",
      "pvp_tooltip": "Anti-Magic Shell now removes all harmful magical effects when activated, but its cooldown is increased by 20 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": false,
        "free_node": false,
        "prev": [
          76080,
          76054
        ],
        "next": [],
        "entry_id": 126015,
        "definition_id": 130846,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Death's Echo",
        "spell_id": 356367,
        "icon": "inv_fabric_ebonweave"
      },
      "pve_tooltip": "Death's Advance, Death and Decay, and Death Grip have 1 additional charge.",
      "pvp_tooltip": "Death's Advance, Death and Decay, and Death Grip have 1 additional charge.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": false,
        "free_node": false,
        "prev": [
          76054
        ],
        "next": [],
        "entry_id": 96181,
        "definition_id": 101183,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Vestigial Shell",
        "spell_id": 454851,
        "icon": "ability_domination_rune12"
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
          "old": "50",
          "new": "30"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 454851,
          "source_spell_id": 454863,
          "effect_index": 2,
          "effect_text": "Apply Aura: Mod Debuffs Duration % (0)",
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
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        }
      ],
      "render_effect_count": 1
    },
    {
      "talent_name": "Frost Strike",
      "spell_id": 49143,
      "node_id": 76115,
      "entry_id": 96245,
      "definition_id": 101247,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76115,
        "node_name": "Frost Strike",
        "node_type": "single",
        "pos_x": 12600,
        "pos_y": 1200,
        "max_ranks": 1,
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [
          76116,
          76114
        ],
        "entry_id": 96245,
        "definition_id": 101247,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Frost Strike",
        "spell_id": 49143,
        "icon": "spell_deathknight_empowerruneblade2"
      },
      "pve_tooltip": "35 Runic Power\nMelee Range\nInstant\nChill your [weapon with icy power and quickly strike the enemy, dealing [(198.089% of Attack Power)] Frost damage.][weapons with icy power and quickly strike the enemy with both, dealing a total of [(139.308% of Attack Power) + (139.308% of Attack Power)] Frost damage.]",
      "pvp_tooltip": "35 Runic Power\nMelee Range\nInstant\nChill your [weapon with icy power and quickly strike the enemy, dealing [(198.089% of Attack Power)] Frost damage.][weapons with icy power and quickly strike the enemy with both, dealing a total of [(139.308% of Attack Power) + (139.308% of Attack Power)] Frost damage.]",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "RUNTIME",
          "talent_spell_id": 49143,
          "source_spell_id": 66196,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (AP mod: 1.39308 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 1.6,
          "amount_kind": "direct",
          "aura_factor": 0.9830999999999999,
          "final_pvp_multiplier": 1.57296,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            49143,
            66196
          ],
          "dependency_relations": [
            "trigger_spell"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            },
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1317283,
              "amount_kind": "direct",
              "value_pct": -13.0,
              "factor": 0.87,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "RUNTIME",
          "talent_spell_id": 49143,
          "source_spell_id": 222026,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (AP mod: 1.39308 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 1.6,
          "amount_kind": "direct",
          "aura_factor": 0.9830999999999999,
          "final_pvp_multiplier": 1.57296,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            49143,
            222026
          ],
          "dependency_relations": [
            "trigger_spell"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            },
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1317283,
              "amount_kind": "direct",
              "value_pct": -13.0,
              "factor": 0.87,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "RUNTIME",
          "talent_spell_id": 49143,
          "source_spell_id": 325464,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (AP mod: 1.98089 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 1.6,
          "amount_kind": "direct",
          "aura_factor": 0.9830999999999999,
          "final_pvp_multiplier": 1.57296,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            49143,
            325464
          ],
          "dependency_relations": [
            "trigger_spell"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            },
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1317283,
              "amount_kind": "direct",
              "value_pct": -13.0,
              "factor": 0.87,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        }
      ],
      "render_effect_count": 0
    },
    {
      "talent_name": "Obliterate",
      "spell_id": 49020,
      "node_id": 76116,
      "entry_id": 96246,
      "definition_id": 101248,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76116,
        "node_name": "Obliterate",
        "node_type": "single",
        "pos_x": 12000,
        "pos_y": 1800,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76115
        ],
        "next": [
          76117,
          76096
        ],
        "entry_id": 96246,
        "definition_id": 101248,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Obliterate",
        "spell_id": 49020,
        "icon": "spell_deathknight_classicon"
      },
      "pve_tooltip": "2 Runes\nMelee Range\nInstant\nA brutal attack [that deals [(105.731% of Attack Power)] Physical and [(105.731% of Attack Power)] Frost damage.][with both weapons that deals a total of [((71.4221% of Attack Power) + (71.4221% of Attack Power))] Physical and [((71.4221% of Attack Power) + (71.4221% of Attack Power))] Frost damage.]",
      "pvp_tooltip": "2 Runes\nMelee Range\nInstant\nA brutal attack [that deals [(105.731% of Attack Power)] Physical and [(105.731% of Attack Power)] Frost damage.][with both weapons that deals a total of [((71.4221% of Attack Power) + (71.4221% of Attack Power))] Physical and [((71.4221% of Attack Power) + (71.4221% of Attack Power))] Frost damage.]",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "RUNTIME",
          "talent_spell_id": 49020,
          "source_spell_id": 66198,
          "effect_index": 1,
          "effect_text": "School Damage (Physical) (AP mod: 0.714221 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 1.88,
          "amount_kind": "direct",
          "aura_factor": 1.017,
          "final_pvp_multiplier": 1.9119599999999997,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            49020,
            66198
          ],
          "dependency_relations": [
            "trigger_spell"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            },
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1317284,
              "amount_kind": "direct",
              "value_pct": -10.0,
              "factor": 0.9,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "RUNTIME",
          "talent_spell_id": 49020,
          "source_spell_id": 222024,
          "effect_index": 1,
          "effect_text": "School Damage (Physical) (AP mod: 0.714221 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 1.88,
          "amount_kind": "direct",
          "aura_factor": 1.017,
          "final_pvp_multiplier": 1.9119599999999997,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            49020,
            222024
          ],
          "dependency_relations": [
            "trigger_spell"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            },
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1317284,
              "amount_kind": "direct",
              "value_pct": -10.0,
              "factor": 0.9,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "RUNTIME",
          "talent_spell_id": 49020,
          "source_spell_id": 325461,
          "effect_index": 1,
          "effect_text": "School Damage (Physical) (AP mod: 1.05731 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 1.88,
          "amount_kind": "direct",
          "aura_factor": 1.017,
          "final_pvp_multiplier": 1.9119599999999997,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            49020,
            325461
          ],
          "dependency_relations": [
            "trigger_spell"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            },
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1317284,
              "amount_kind": "direct",
              "value_pct": -10.0,
              "factor": 0.9,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "RUNTIME",
          "talent_spell_id": 49020,
          "source_spell_id": 1264082,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (AP mod: 0.714221 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 1.88,
          "amount_kind": "direct",
          "aura_factor": 1.017,
          "final_pvp_multiplier": 1.9119599999999997,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            49020,
            1264082
          ],
          "dependency_relations": [
            "trigger_spell"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            },
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1317284,
              "amount_kind": "direct",
              "value_pct": -10.0,
              "factor": 0.9,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "RUNTIME",
          "talent_spell_id": 49020,
          "source_spell_id": 1264083,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (AP mod: 0.714221 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 1.88,
          "amount_kind": "direct",
          "aura_factor": 1.017,
          "final_pvp_multiplier": 1.9119599999999997,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            49020,
            1264083
          ],
          "dependency_relations": [
            "trigger_spell"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            },
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1317284,
              "amount_kind": "direct",
              "value_pct": -10.0,
              "factor": 0.9,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "RUNTIME",
          "talent_spell_id": 49020,
          "source_spell_id": 1264084,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (AP mod: 1.05731 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 1.88,
          "amount_kind": "direct",
          "aura_factor": 1.017,
          "final_pvp_multiplier": 1.9119599999999997,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            49020,
            1264084
          ],
          "dependency_relations": [
            "trigger_spell"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            },
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1317284,
              "amount_kind": "direct",
              "value_pct": -10.0,
              "factor": 0.9,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        }
      ],
      "render_effect_count": 0
    },
    {
      "talent_name": "Howling Blast",
      "spell_id": 49184,
      "node_id": 76114,
      "entry_id": 96244,
      "definition_id": 101246,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76114,
        "node_name": "Howling Blast",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 1800,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76115
        ],
        "next": [
          76096,
          76113
        ],
        "entry_id": 96244,
        "definition_id": 101246,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Howling Blast",
        "spell_id": 49184,
        "icon": "spell_frost_arcticwinds"
      },
      "pve_tooltip": "1 Rune / -10 Runic Power\n30 yd range\nInstant\nBlast the target with a frigid wind, dealing [(50.6819% of Attack Power) * [(Attack Power * 0.98)][((Attack Power + Offhand Attack Power) * 2 / 3)] -- 2H, DW / Attack Power] [\nNorthrend Winds\n:\nFrost damage and applying Frost Fever to the target\n/ Frost damage to that foe, and reduced damage to all other enemies within 10 yards, infecting all targets with Frost Fever.]\nFrost Fever\nA disease that deals [(342.4% of Attack Power) * [(Attack Power * 0.98)][((Attack Power + Offhand Attack Power) * 2 / 3)] -- 2H, DW / Attack Power] Frost damage over 24 sec and has a chance to grant the Death Knight 4 Runic Power each time it deals damage.",
      "pvp_tooltip": "1 Rune / -10 Runic Power\n30 yd range\nInstant\nBlast the target with a frigid wind, dealing [(50.6819% of Attack Power) * [(Attack Power * 0.98)][((Attack Power + Offhand Attack Power) * 2 / 3)] -- 2H, DW / Attack Power] [\nNorthrend Winds\n:\nFrost damage and applying Frost Fever to the target\n/ Frost damage to that foe, and reduced damage to all other enemies within 10 yards, infecting all targets with Frost Fever.]\nFrost Fever\nA disease that deals [(342.4% of Attack Power) * [(Attack Power * 0.98)][((Attack Power + Offhand Attack Power) * 2 / 3)] -- 2H, DW / Attack Power] Frost damage over 24 sec and has a chance to grant the Death Knight 4 Runic Power each time it deals damage.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 49184,
          "source_spell_id": 49184,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (AP mod: 0.506819 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 0.65,
          "amount_kind": "direct",
          "aura_factor": 1.13,
          "final_pvp_multiplier": 0.7344999999999999,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "EMBEDDED",
          "talent_spell_id": 49184,
          "source_spell_id": 55095,
          "effect_index": 1,
          "effect_text": "Apply Aura: Periodic Damage (127)",
          "base_value": 0.0,
          "spell_pvp_multiplier": 0.575,
          "amount_kind": "periodic",
          "aura_factor": 1.13,
          "final_pvp_multiplier": 0.6497499999999999,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            49184,
            55095
          ],
          "dependency_relations": [
            "spelldesc_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1265440,
              "amount_kind": "periodic",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        }
      ],
      "render_effect_count": 0
    },
    {
      "talent_name": "Killing Machine",
      "spell_id": 51128,
      "node_id": 76117,
      "entry_id": 96247,
      "definition_id": 101249,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76117,
        "node_name": "Killing Machine",
        "node_type": "single",
        "pos_x": 11400,
        "pos_y": 2400,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76116
        ],
        "next": [
          76118,
          76103
        ],
        "entry_id": 96247,
        "definition_id": 101249,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Killing Machine",
        "spell_id": 51128,
        "icon": "inv_sword_122"
      },
      "pve_tooltip": "Your auto attack critical strikes have a chance to make your next Obliterate deal Frost damage and critically strike, or make your next Frostscythe critically strike for 4 times the normal damage.",
      "pvp_tooltip": "Your auto attack critical strikes have a chance to make your next Obliterate deal Frost damage and critically strike, or make your next Frostscythe critically strike for 4 times the normal damage.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    },
    {
      "talent_name": "Empower Rune Weapon",
      "spell_id": 47568,
      "node_id": 76096,
      "entry_id": 96225,
      "definition_id": 101227,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76096,
        "node_name": "Empower Rune Weapon",
        "node_type": "single",
        "pos_x": 12600,
        "pos_y": 2400,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76116,
          76114
        ],
        "next": [
          76103,
          109258,
          76102
        ],
        "entry_id": 96225,
        "definition_id": 101227,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Empower Rune Weapon",
        "spell_id": 47568,
        "icon": "inv_sword_62"
      },
      "pve_tooltip": "30 yd range\nInstant\n30 sec recharge\n2 Charges\nDrain the will of your enemy to empower your rune weapon, dealing (260% of Attack Power) Shadowfrost damage and reduced damage to enemies nearby, gaining 40 Runic Power, and grants you Killing Machine.",
      "pvp_tooltip": "30 yd range\nInstant\n30 sec recharge\n2 Charges\nDrain the will of your enemy to empower your rune weapon, dealing (260% of Attack Power) Shadowfrost damage and reduced damage to enemies nearby, gaining 40 Runic Power, and grants you Killing Machine.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 47568,
          "source_spell_id": 47568,
          "effect_index": 2,
          "effect_text": "School Damage (Frost, Shadow) (AP mod: 2.6 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 0.77,
          "amount_kind": "direct",
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.77,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [],
          "sources": [
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        }
      ],
      "render_effect_count": 0
    },
    {
      "talent_name": "Frostscythe",
      "spell_id": 207230,
      "node_id": 76113,
      "entry_id": 96243,
      "definition_id": 101245,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76113,
        "node_name": "Frostscythe",
        "node_type": "single",
        "pos_x": 13800,
        "pos_y": 2400,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76114
        ],
        "next": [
          76102,
          76112
        ],
        "entry_id": 96243,
        "definition_id": 101245,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Frostscythe",
        "spell_id": 207230,
        "icon": "inv12_ability_deathknight_frostscythe"
      },
      "pve_tooltip": "2 Runes\n8 yd range\nInstant\nA sweeping attack that strikes all enemies in front of you for (48% of Attack Power) Frost damage. Deals reduced damage beyond 5 targets.\nConsumes Killing Machine to have its critical strikes deal 4 times the normal damage.",
      "pvp_tooltip": "2 Runes\n8 yd range\nInstant\nA sweeping attack that strikes all enemies in front of you for (48% of Attack Power) Frost damage. Deals reduced damage beyond 5 targets.\nConsumes Killing Machine to have its critical strikes deal 4 times the normal damage.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 207230,
          "source_spell_id": 207230,
          "effect_index": 2,
          "effect_text": "School Damage (Frost) (AP mod: 0.48 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 1.25,
          "amount_kind": "direct",
          "aura_factor": 1.13,
          "final_pvp_multiplier": 1.4124999999999999,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        }
      ],
      "render_effect_count": 0
    },
    {
      "talent_name": "Arctic Assault",
      "spell_id": 456230,
      "node_id": 76118,
      "entry_id": 96248,
      "definition_id": 101250,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76118,
        "node_name": "Arctic Assault",
        "node_type": "single",
        "pos_x": 11400,
        "pos_y": 3000,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76117
        ],
        "next": [
          76100,
          76098,
          76121
        ],
        "entry_id": 96248,
        "definition_id": 101250,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Arctic Assault",
        "spell_id": 456230,
        "icon": "artifactability_frostmage_blackicicles"
      },
      "pve_tooltip": "Consuming Killing Machine fires a Glacial Advance through your target at 60% effectiveness.\n(300ms cooldown)",
      "pvp_tooltip": "Consuming Killing Machine fires a Glacial Advance through your target at 60% effectiveness.\n(300ms cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    },
    {
      "talent_name": "Runic Overflow",
      "spell_id": 316803,
      "node_id": 76103,
      "entry_id": 96233,
      "definition_id": 101235,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76103,
        "node_name": "Runic Overflow",
        "node_type": "single",
        "pos_x": 12000,
        "pos_y": 3000,
        "max_ranks": 2,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76117,
          76096
        ],
        "next": [
          76098
        ],
        "entry_id": 96233,
        "definition_id": 101235,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Runic Overflow",
        "spell_id": 316803,
        "icon": "ability_domination_rune01"
      },
      "pve_tooltip": "Increases Frost Strike and Glacial Advance damage by 10%.",
      "pvp_tooltip": "Increases Frost Strike and Glacial Advance damage by 10%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    },
    {
      "talent_name": "Frostbound Will",
      "spell_id": 1238680,
      "node_id": 109258,
      "entry_id": 133362,
      "definition_id": 138148,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 109258,
        "node_name": "Frostbound Will",
        "node_type": "single",
        "pos_x": 12600,
        "pos_y": 3000,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76096
        ],
        "next": [
          76098,
          101929,
          106791
        ],
        "entry_id": 133362,
        "definition_id": 138148,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Frostbound Will",
        "spell_id": 1238680,
        "icon": "ability_mage_frostjaw"
      },
      "pve_tooltip": "Consuming Rime reduces the cooldown of Empower Rune Weapon by 6 sec.",
      "pvp_tooltip": "Consuming Rime reduces the cooldown of Empower Rune Weapon by 6 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    },
    {
      "talent_name": "Runic Command",
      "spell_id": 376251,
      "node_id": 76102,
      "entry_id": 96232,
      "definition_id": 101234,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76102,
        "node_name": "Runic Command",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 3000,
        "max_ranks": 2,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76113,
          76096
        ],
        "next": [
          106791
        ],
        "entry_id": 96232,
        "definition_id": 101234,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Runic Command",
        "spell_id": 376251,
        "icon": "ability_domination_rune07"
      },
      "pve_tooltip": "Increases your maximum Runic Power by 5.\nIncreases Rune regeneration rate by 10%.",
      "pvp_tooltip": "Increases your maximum Runic Power by 5.\nIncreases Rune regeneration rate by 10%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    },
    {
      "talent_name": "Biting Cold",
      "spell_id": 377056,
      "node_id": 76112,
      "entry_id": 96242,
      "definition_id": 101244,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76112,
        "node_name": "Biting Cold",
        "node_type": "single",
        "pos_x": 13800,
        "pos_y": 3000,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76113
        ],
        "next": [
          106791,
          76110,
          76092
        ],
        "entry_id": 96242,
        "definition_id": 101244,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Biting Cold",
        "spell_id": 377056,
        "icon": "ability_deathknight_remorselesswinters2"
      },
      "pve_tooltip": "Remorseless Winter damage is increased by 35%. The first time Remorseless Winter deals damage to 3 different enemies, you gain Rime.",
      "pvp_tooltip": "Remorseless Winter damage is increased by 35%. The first time Remorseless Winter deals damage to 3 different enemies, you gain Rime.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    },
    {
      "talent_name": "Inexorable Assault",
      "spell_id": 253593,
      "node_id": 76100,
      "entry_id": 96230,
      "definition_id": 101232,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76100,
        "node_name": "Inexorable Assault",
        "node_type": "single",
        "pos_x": 10800,
        "pos_y": 3600,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76118
        ],
        "next": [
          76121,
          76037
        ],
        "entry_id": 96230,
        "definition_id": 101232,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Inexorable Assault",
        "spell_id": 253593,
        "icon": "achievement_dungeon_icecrown_frostmourne"
      },
      "pve_tooltip": "Gain Inexorable Assault every 4 sec, stacking up to 5 times.\n[\nFrostscythe\n:\nObliterate and Frostscythe consume\n/ Obliterate consumes] up to 3 stacks, dealing an additional (26.322% of Attack Power) Frost damage for each stack consumed.",
      "pvp_tooltip": "Gain Inexorable Assault every 4 sec, stacking up to 5 times.\n[\nFrostscythe\n:\nObliterate and Frostscythe consume\n/ Obliterate consumes] up to 3 stacks, dealing an additional (26.322% of Attack Power) Frost damage for each stack consumed.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 253593,
          "source_spell_id": 253597,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (AP mod: 0.26322 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.13,
          "final_pvp_multiplier": 1.13,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            253593,
            253597
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead"
          ],
          "confidence": "medium"
        }
      ],
      "render_effect_count": 0
    },
    {
      "talent_name": "Frostreaper",
      "spell_id": 1230301,
      "node_id": 76098,
      "entry_id": 96228,
      "definition_id": 101230,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76098,
        "node_name": "Frostreaper",
        "node_type": "single",
        "pos_x": 12000,
        "pos_y": 3600,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76103,
          76118,
          109258
        ],
        "next": [
          76121
        ],
        "entry_id": 96228,
        "definition_id": 101230,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Frostreaper",
        "spell_id": 1230301,
        "icon": "inv_axe_1h_pvpdraenors2_d_02"
      },
      "pve_tooltip": "Approximately\n5\nprocs per minute\nObliterate deals 10% increased damage and has a chance to tether the souls of its target and a nearby enemy to yours.\nFrost Strike severs the tethers, dealing (205.92% of Attack Power) Shadowfrost damage to both foes.\n(700ms cooldown)",
      "pvp_tooltip": "Approximately\n5\nprocs per minute\nObliterate deals 10% increased damage and has a chance to tether the souls of its target and a nearby enemy to yours.\nFrost Strike severs the tethers, dealing (205.92% of Attack Power) Shadowfrost damage to both foes.\n(700ms cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 1230301,
          "source_spell_id": 1233619,
          "effect_index": 1,
          "effect_text": "School Damage (Frost, Shadow) (AP mod: 2.0592 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.13,
          "final_pvp_multiplier": 1.13,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1230301,
            1233619
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead"
          ],
          "confidence": "medium"
        }
      ],
      "render_effect_count": 0
    },
    {
      "talent_name": "Pillar of Frost",
      "spell_id": 51271,
      "node_id": 101929,
      "entry_id": 125874,
      "definition_id": 130705,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 101929,
        "node_name": "Pillar of Frost",
        "node_type": "single",
        "pos_x": 12600,
        "pos_y": 3600,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109258
        ],
        "next": [
          101931,
          101930,
          102009
        ],
        "entry_id": 125874,
        "definition_id": 130705,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Pillar of Frost",
        "spell_id": 51271,
        "icon": "ability_deathknight_pillaroffrost"
      },
      "pve_tooltip": "Instant\n45 sec cooldown\nThe power of frost increases your Strength by 20% for 12 sec.",
      "pvp_tooltip": "Instant\n45 sec cooldown\nThe power of frost increases your Strength by 12% for 12 sec.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 70,
          "end": 72,
          "old_token": "20",
          "new_token": "12",
          "kind": "ordinary_value",
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
          "old": 2.0,
          "new": 1.0,
          "full_tooltip_match_count": 0
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "ordinary_value",
          "old": "20",
          "new": "12"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 51271,
          "source_spell_id": 51271,
          "effect_index": 1,
          "effect_text": "Apply Aura: Mod Stat - % (Strength)",
          "base_value": 20.0,
          "spell_pvp_multiplier": 0.6,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.6,
          "final_pvp_value": 12.0,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [],
          "sources": [
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        },
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 51271,
          "source_spell_id": 51271,
          "effect_index": 2,
          "effect_text": "Apply Aura: Dummy (1887)",
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
            "drustvar"
          ],
          "confidence": "high"
        }
      ],
      "render_effect_count": 2
    },
    {
      "talent_name": "Icy Onslaught",
      "spell_id": 1230272,
      "node_id": 106791,
      "entry_id": 131619,
      "definition_id": 136420,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 106791,
        "node_name": "Icy Onslaught",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 3600,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76112,
          76102,
          109258
        ],
        "next": [
          76092
        ],
        "entry_id": 131619,
        "definition_id": 136420,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Icy Onslaught",
        "spell_id": 1230272,
        "icon": "ability_deathknight_chillstreak"
      },
      "pve_tooltip": "Frost Strike and Glacial Advance now cause your next Frost Strike and Glacial Advance to deal 15% increased damage and cost 5 more Runic Power.\nThis effect stacks until the next Runic Empowerment.",
      "pvp_tooltip": "Frost Strike and Glacial Advance now cause your next Frost Strike and Glacial Advance to deal 15% increased damage and cost 5 more Runic Power.\nThis effect stacks until the next Runic Empowerment.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    },
    {
      "talent_name": "Gathering Storm",
      "spell_id": 194912,
      "node_id": 76110,
      "entry_id": 96240,
      "definition_id": 101242,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76110,
        "node_name": "Gathering Storm",
        "node_type": "single",
        "pos_x": 14400,
        "pos_y": 3600,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76112
        ],
        "next": [
          76092,
          76109
        ],
        "entry_id": 96240,
        "definition_id": 101242,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Gathering Storm",
        "spell_id": 194912,
        "icon": "spell_frost_ice_shards"
      },
      "pve_tooltip": "Each Rune spent during Remorseless Winter increases its damage by 10%, and extends its duration by 0.5 sec.",
      "pvp_tooltip": "Each Rune spent during Remorseless Winter increases its damage by 5%, and extends its duration by 0.5 sec.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 66,
          "end": 68,
          "old_token": "10",
          "new_token": "5",
          "kind": "ordinary_value",
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
          "kind": "ordinary_value",
          "old": "10",
          "new": "5"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 194912,
          "source_spell_id": 211805,
          "effect_index": 1,
          "effect_text": "Apply Aura: Modifies Damage/Healing Done",
          "base_value": 10.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 5.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            194912,
            211805
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [],
          "sources": [
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        }
      ],
      "render_effect_count": 1
    },
    {
      "talent_name": "Murderous Efficiency",
      "spell_id": 207061,
      "node_id": 76121,
      "entry_id": 96252,
      "definition_id": 101254,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76121,
        "node_name": "Murderous Efficiency",
        "node_type": "single",
        "pos_x": 11400,
        "pos_y": 4200,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76118,
          76098,
          76100
        ],
        "next": [
          76037,
          106790
        ],
        "entry_id": 96252,
        "definition_id": 101254,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Murderous Efficiency",
        "spell_id": 207061,
        "icon": "spell_frost_frostarmor"
      },
      "pve_tooltip": "Consuming the Killing Machine effect has a 20% chance to grant you 1 Rune.",
      "pvp_tooltip": "Consuming the Killing Machine effect has a 20% chance to grant you 1 Rune.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    },
    {
      "talent_name": "Rage of the Frozen Champion",
      "spell_id": 377076,
      "node_id": 101931,
      "entry_id": 125876,
      "definition_id": 130707,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 101931,
        "node_name": "Rage of the Frozen Champion",
        "node_type": "single",
        "pos_x": 12000,
        "pos_y": 4200,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          101929
        ],
        "next": [
          106790,
          76106,
          76101
        ],
        "entry_id": 125876,
        "definition_id": 130707,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Rage of the Frozen Champion",
        "spell_id": 377076,
        "icon": "spell_mage_frostbomb"
      },
      "pve_tooltip": "Frost Strike and Glacial Advance have a 15% increased chance to trigger Rime and Howling Blast generates 8 Runic Power while Rime is active.",
      "pvp_tooltip": "Frost Strike and Glacial Advance have a 15% increased chance to trigger Rime and Howling Blast generates 8 Runic Power while Rime is active.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    },
    {
      "talent_name": "Enduring Strength",
      "spell_id": 377190,
      "node_id": 101930,
      "entry_id": 125875,
      "definition_id": 130706,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 101930,
        "node_name": "Enduring Strength",
        "node_type": "single",
        "pos_x": 12600,
        "pos_y": 4200,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          101929
        ],
        "next": [
          76106
        ],
        "entry_id": 125875,
        "definition_id": 130706,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Enduring Strength",
        "spell_id": 377190,
        "icon": "spell_shadow_soulleech_2"
      },
      "pve_tooltip": "When Pillar of Frost expires, your Strength is increased by 8% for 6 sec. This effect lasts 2 sec longer, up to 20 sec, for each Obliterate and Frostscythe critical strike during Pillar of Frost.",
      "pvp_tooltip": "When Pillar of Frost expires, your Strength is increased by 8% for 6 sec. This effect lasts 2 sec longer, up to 20 sec, for each Obliterate and Frostscythe critical strike during Pillar of Frost.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    },
    {
      "talent_name": "Frozen Dominion",
      "spell_id": 377226,
      "node_id": 102009,
      "entry_id": 126017,
      "definition_id": 130848,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 102009,
        "node_name": "Frozen Dominion",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 4200,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          101929
        ],
        "next": [
          76106,
          76099,
          76105
        ],
        "entry_id": 126017,
        "definition_id": 130848,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Frozen Dominion",
        "spell_id": 377226,
        "icon": "spell_fire_bluehellfire"
      },
      "pve_tooltip": "Pillar of Frost now summons a Remorseless Winter that lasts 4 sec longer.\nEach enemy Remorseless Winter damages grants you (4 * $mastery)% Mastery, up to (4 * $mastery * 5)% for 15 sec.",
      "pvp_tooltip": "Pillar of Frost now summons a Remorseless Winter that lasts 4 sec longer.\nEach enemy Remorseless Winter damages grants you (4 * $mastery)% Mastery, up to (4 * $mastery * 5)% for 15 sec.",
      "tooltip_changed": false,
      "render_status": "REVIEW_REQUIRED",
      "changes": [],
      "diagnostics": [
        {
          "effect_indexes": [
            2
          ],
          "status": "AMBIGUOUS_TEXT_MATCH",
          "kind": "ordinary_value",
          "old": 4.0,
          "new": 2.0,
          "match_count": 3
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 377226,
          "source_spell_id": 377226,
          "effect_index": 2,
          "effect_text": "Apply Aura: Dummy",
          "base_value": 4.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 2.0,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [],
          "sources": [
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 377226,
          "source_spell_id": 196771,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (AP mod: 0.126462 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 1.43,
          "amount_kind": "direct",
          "aura_factor": 1.13,
          "final_pvp_multiplier": 1.6158999999999997,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            377226,
            1233152,
            196771
          ],
          "dependency_relations": [
            "tooltip_value_ref",
            "trigger_spell"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        }
      ],
      "render_effect_count": 1
    },
    {
      "talent_name": "Frigid Executioner",
      "spell_id": 377073,
      "node_id": 76092,
      "entry_id": 96221,
      "definition_id": 101223,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76092,
        "node_name": "Frigid Executioner",
        "node_type": "single",
        "pos_x": 13800,
        "pos_y": 4200,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          106791,
          76110,
          76112
        ],
        "next": [
          76099,
          76109
        ],
        "entry_id": 96221,
        "definition_id": 101223,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Frigid Executioner",
        "spell_id": 377073,
        "icon": "spell_shadow_focusedpower"
      },
      "pve_tooltip": "Runic Empowerment has a 25% chance to refund 1 additional Rune.",
      "pvp_tooltip": "Runic Empowerment has a 25% chance to refund 1 additional Rune.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    },
    {
      "talent_name": "Howling Blades",
      "spell_id": 1230223,
      "node_id": 76037,
      "entry_id": 96165,
      "definition_id": 101167,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76037,
        "node_name": "Howling Blades",
        "node_type": "single",
        "pos_x": 10800,
        "pos_y": 4800,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76100,
          76121
        ],
        "next": [
          76122
        ],
        "entry_id": 96165,
        "definition_id": 101167,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Howling Blades",
        "spell_id": 1230223,
        "icon": "inv_10_specialization_blacksmithing_blades_color2"
      },
      "pve_tooltip": "Rime empowered Howling Blast unleashes 2 icy blades at its target that deal (25.2% of Attack Power) Frost damage and have 15% chance to grant Killing Machine.",
      "pvp_tooltip": "Rime empowered Howling Blast unleashes 2 icy blades at its target that deal (25.2% of Attack Power) Frost damage and have 15% chance to grant Killing Machine.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 1230223,
          "source_spell_id": 1231083,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (AP mod: 0.252 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.13,
          "final_pvp_multiplier": 1.13,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1230223,
            1231083
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead"
          ],
          "confidence": "medium"
        }
      ],
      "render_effect_count": 0
    },
    {
      "talent_name": "Cryogenic Chamber",
      "spell_id": 456237,
      "node_id": 106790,
      "entry_id": 131618,
      "definition_id": 136419,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 106790,
        "node_name": "Cryogenic Chamber",
        "node_type": "single",
        "pos_x": 11400,
        "pos_y": 4800,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          101931,
          76121
        ],
        "next": [
          76122,
          76101
        ],
        "entry_id": 131618,
        "definition_id": 136419,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Cryogenic Chamber",
        "spell_id": 456237,
        "icon": "spell_fire_bluecano"
      },
      "pve_tooltip": "When Howling Blast consumes Rime, 15% of the damage it deals is gathered into the next cast of Remorseless Winter, up to 20 times.",
      "pvp_tooltip": "When Howling Blast consumes Rime, 15% of the damage it deals is gathered into the next cast of Remorseless Winter, up to 20 times.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    },
    {
      "talent_name": "Frostwyrm's Fury",
      "spell_id": 279302,
      "node_id": 76106,
      "entry_id": 96236,
      "definition_id": 101238,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76106,
        "node_name": "Frostwyrm's Fury",
        "node_type": "single",
        "pos_x": 12600,
        "pos_y": 4800,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          101930,
          102009,
          101931
        ],
        "next": [
          76101,
          76105
        ],
        "entry_id": 96236,
        "definition_id": 101238,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Frostwyrm's Fury",
        "spell_id": 279302,
        "icon": "achievement_boss_sindragosa"
      },
      "pve_tooltip": "Instant\n1.5 min cooldown\nSummons a frostwyrm who breathes on all enemies within 40 yd in front of you, dealing (296.6% of Attack Power) Frost damage, stunning enemies for 3 sec, and slowing movement speed by 50% for 10 sec.",
      "pvp_tooltip": "Instant\n1.5 min cooldown\nSummons a frostwyrm who breathes on all enemies within 40 yd in front of you, dealing (296.6% of Attack Power) Frost damage, stunning enemies for 3 sec, and slowing movement speed by 50% for 10 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 279302,
          "source_spell_id": 279303,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (AP mod: 2.966 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 0.333333,
          "amount_kind": "direct",
          "aura_factor": 1.13,
          "final_pvp_multiplier": 0.37666628999999996,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            279302,
            279303
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        }
      ],
      "render_effect_count": 0
    },
    {
      "talent_name": "Everfrost",
      "spell_id": 376938,
      "node_id": 76099,
      "entry_id": 96229,
      "definition_id": 101231,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76099,
        "node_name": "Everfrost",
        "node_type": "single",
        "pos_x": 13800,
        "pos_y": 4800,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76092,
          102009
        ],
        "next": [
          76105,
          76033
        ],
        "entry_id": 96229,
        "definition_id": 101231,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Everfrost",
        "spell_id": 376938,
        "icon": "ability_mage_deepfreeze"
      },
      "pve_tooltip": "Rime empowered Howling Blast deals 50% increased damage to secondary targets.\nRemorseless Winter deals 6% increased damage to enemies it hits, stacking up to 10 times.",
      "pvp_tooltip": "Rime empowered Howling Blast deals 50% increased damage to secondary targets.\nRemorseless Winter deals 3% increased damage to enemies it hits, stacking up to 10 times.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 103,
          "end": 104,
          "old_token": "6",
          "new_token": "3",
          "kind": "ordinary_value",
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
          "kind": "ordinary_value",
          "old": "6",
          "new": "3"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 376938,
          "source_spell_id": 376938,
          "effect_index": 1,
          "effect_text": "Apply Aura: Proc Trigger Spell With Value",
          "base_value": 6.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": 3.0,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [],
          "sources": [
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        }
      ],
      "render_effect_count": 1
    },
    {
      "talent_name": "Northwinds",
      "spell_id": 1230284,
      "node_id": 76109,
      "entry_id": 96239,
      "definition_id": 101241,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76109,
        "node_name": "Northwinds",
        "node_type": "single",
        "pos_x": 14400,
        "pos_y": 4800,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76110,
          76092
        ],
        "next": [
          76033
        ],
        "entry_id": 96239,
        "definition_id": 101241,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Northwinds",
        "spell_id": 1230284,
        "icon": "ability_mage_freeze"
      },
      "pve_tooltip": "Howling Blast now hits an additional target with maximum effectiveness.\nRime increases Howling Blast damage done by an additional 75%.",
      "pvp_tooltip": "Howling Blast now hits an additional target with maximum effectiveness.\nRime increases Howling Blast damage done by an additional 75%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    },
    {
      "talent_name": "Bonegrinder",
      "spell_id": 377098,
      "node_id": 76122,
      "entry_id": 96253,
      "definition_id": 101255,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76122,
        "node_name": "Bonegrinder",
        "node_type": "single",
        "pos_x": 11400,
        "pos_y": 5400,
        "max_ranks": 2,
        "entry_node": false,
        "free_node": false,
        "prev": [
          106790,
          76037
        ],
        "next": [
          76091,
          101933
        ],
        "entry_id": 96253,
        "definition_id": 101255,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Bonegrinder",
        "spell_id": 377098,
        "icon": "ability_deathknight_bonegrinder"
      },
      "pve_tooltip": "Consuming Killing Machine grants 1% critical strike chance for 10 sec, stacking up to 5 times. At 5 stacks your next Killing Machine consumes the stacks and grants you 10% increased Frost damage for 10 sec.\n(700ms cooldown)",
      "pvp_tooltip": "Consuming Killing Machine grants 1% critical strike chance for 10 sec, stacking up to 5 times. At 5 stacks your next Killing Machine consumes the stacks and grants you 10% increased Frost damage for 10 sec.\n(700ms cooldown)",
      "tooltip_changed": false,
      "render_status": "REVIEW_REQUIRED",
      "changes": [],
      "diagnostics": [
        {
          "effect_indexes": [
            1
          ],
          "status": "AMBIGUOUS_TEXT_MATCH",
          "kind": "ordinary_value",
          "old": 10.0,
          "new": 5.0,
          "match_count": 3
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 377098,
          "source_spell_id": 377098,
          "effect_index": 1,
          "effect_text": "Apply Aura: Add Modifier - Flat (Label): Modifies Effect #1's Value (3)",
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
            "drustvar"
          ],
          "confidence": "high"
        }
      ],
      "render_effect_count": 1
    },
    {
      "talent_name": "Smothering Offense",
      "spell_id": 435005,
      "node_id": 76101,
      "entry_id": 96231,
      "definition_id": 101233,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76101,
        "node_name": "Smothering Offense",
        "node_type": "single",
        "pos_x": 12000,
        "pos_y": 5400,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          106790,
          101931,
          76106
        ],
        "next": [
          101933
        ],
        "entry_id": 96231,
        "definition_id": 101233,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Smothering Offense",
        "spell_id": 435005,
        "icon": "inv_10_specialreagentfoozles_tuskclaw_ice"
      },
      "pve_tooltip": "Your auto attack damage is increased by 10%.\nThis amount is increased for each stack of Icy Talons you have and it can stack up to 2 additional times.",
      "pvp_tooltip": "Your auto attack damage is increased by 10%.\nThis amount is increased for each stack of Icy Talons you have and it can stack up to 2 additional times.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    },
    {
      "talent_name": "Avalanche",
      "spell_id": 207142,
      "node_id": 76105,
      "entry_id": 96235,
      "definition_id": 101237,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76105,
        "node_name": "Avalanche",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 5400,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76099,
          102009,
          76106
        ],
        "next": [
          76095
        ],
        "entry_id": 96235,
        "definition_id": 101237,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Avalanche",
        "spell_id": 207142,
        "icon": "spell_frost_icestorm"
      },
      "pve_tooltip": "Casting Howling Blast with Rime active causes jagged icicles to fall on enemies nearby your target, applying Razorice and dealing (22.47% of Attack Power) Frost damage.",
      "pvp_tooltip": "Casting Howling Blast with Rime active causes jagged icicles to fall on enemies nearby your target, applying Razorice and dealing (22.47% of Attack Power) Frost damage.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 207142,
          "source_spell_id": 207150,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (AP mod: 0.2247 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.13,
          "final_pvp_multiplier": 1.13,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            207142,
            207150
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead"
          ],
          "confidence": "medium"
        }
      ],
      "render_effect_count": 0
    },
    {
      "talent_name": "Icebreaker",
      "spell_id": 392950,
      "node_id": 76033,
      "entry_id": 96161,
      "definition_id": 101163,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76033,
        "node_name": "Icebreaker",
        "node_type": "single",
        "pos_x": 13800,
        "pos_y": 5400,
        "max_ranks": 2,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76109,
          76099
        ],
        "next": [
          76095,
          76108
        ],
        "entry_id": 96161,
        "definition_id": 101163,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Icebreaker",
        "spell_id": 392950,
        "icon": "ability_mage_icewall"
      },
      "pve_tooltip": "When empowered by Rime, Howling Blast deals 30% increased damage to your primary target.",
      "pvp_tooltip": "When empowered by Rime, Howling Blast deals 30% increased damage to your primary target.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    },
    {
      "talent_name": "Obliteration",
      "spell_id": 281238,
      "node_id": 76091,
      "entry_id": 96220,
      "definition_id": 101222,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76091,
        "node_name": "Obliteration",
        "node_type": "single",
        "pos_x": 10800,
        "pos_y": 6000,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76122
        ],
        "next": [
          76123
        ],
        "entry_id": 96220,
        "definition_id": 101222,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Obliteration",
        "spell_id": 281238,
        "icon": "inv_axe_114"
      },
      "pve_tooltip": "During Pillar of Frost, Frost Strike [\nGlacial Advance\n:\nGlacial Advance\n] and Howling Blast always grant Killing Machine and have a 20% chance to generate a Rune.\nAdditionally during Pillar of Frost, Empower Rune Weapon causes your next Obliterate or Frostscythe to cost no Runes.",
      "pvp_tooltip": "During Pillar of Frost, Frost Strike [\nGlacial Advance\n:\nGlacial Advance\n] and Howling Blast always grant Killing Machine and have a 20% chance to generate a Rune.\nAdditionally during Pillar of Frost, Empower Rune Weapon causes your next Obliterate or Frostscythe to cost no Runes.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    },
    {
      "talent_name": "Icy Death Torrent",
      "spell_id": 435010,
      "node_id": 101933,
      "entry_id": 125878,
      "definition_id": 130709,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 101933,
        "node_name": "Icy Death Torrent",
        "node_type": "single",
        "pos_x": 12000,
        "pos_y": 6000,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76101,
          76122
        ],
        "next": [
          101932
        ],
        "entry_id": 125878,
        "definition_id": 130709,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Icy Death Torrent",
        "spell_id": 435010,
        "icon": "ability_argus_soulburst"
      },
      "pve_tooltip": "Your auto attack critical strikes have a chance to send out a torrent of ice dealing (140.026% of Attack Power) Frost damage to enemies in front of you.",
      "pvp_tooltip": "Your auto attack critical strikes have a chance to send out a torrent of ice dealing (140.026% of Attack Power) Frost damage to enemies in front of you.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 435010,
          "source_spell_id": 439539,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (AP mod: 1.40026 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 0.875,
          "amount_kind": "direct",
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.875,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            435010,
            439539
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [],
          "sources": [
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        }
      ],
      "render_effect_count": 0
    },
    {
      "talent_name": "Shattering Blade",
      "spell_id": 207057,
      "node_id": 76095,
      "entry_id": 96224,
      "definition_id": 101226,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76095,
        "node_name": "Shattering Blade",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 6000,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76105,
          76033
        ],
        "next": [
          76094
        ],
        "entry_id": 96224,
        "definition_id": 101226,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Shattering Blade",
        "spell_id": 207057,
        "icon": "inv_7af_deathknight_frostmournefragment"
      },
      "pve_tooltip": "When Frost Strike damages an enemy with 5 stacks of Razorice it will consume them to deal an additional 115% damage.\nFrostbane consumes the Razorice on your main target to deal an additional 300% damage.",
      "pvp_tooltip": "When Frost Strike damages an enemy with 5 stacks of Razorice it will consume them to deal an additional 28.75% damage.\nFrostbane consumes the Razorice on your main target to deal an additional 75% damage.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 104,
          "end": 107,
          "old_token": "115",
          "new_token": "28.75",
          "kind": "ordinary_value",
          "effect_indexes": [
            1
          ]
        },
        {
          "start": 191,
          "end": 194,
          "old_token": "300",
          "new_token": "75",
          "kind": "ordinary_value",
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
          "kind": "ordinary_value",
          "old": "115",
          "new": "28.75"
        },
        {
          "effect_indexes": [
            2
          ],
          "status": "APPLIED",
          "kind": "ordinary_value",
          "old": "300",
          "new": "75"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 207057,
          "source_spell_id": 207057,
          "effect_index": 1,
          "effect_text": "Apply Aura: Dummy (15)",
          "base_value": 115.0,
          "spell_pvp_multiplier": 0.25,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.25,
          "final_pvp_value": 28.75,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [],
          "sources": [
            "wowhead"
          ],
          "confidence": "ambiguous"
        },
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 207057,
          "source_spell_id": 207057,
          "effect_index": 2,
          "effect_text": "Apply Aura: Dummy (15)",
          "base_value": 300.0,
          "spell_pvp_multiplier": 0.25,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.25,
          "final_pvp_value": 75.0,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [],
          "sources": [
            "wowhead"
          ],
          "confidence": "ambiguous"
        }
      ],
      "render_effect_count": 2
    },
    {
      "talent_name": "Hyperpyrexia",
      "spell_id": 456238,
      "node_id": 76108,
      "entry_id": 96238,
      "definition_id": 101240,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76108,
        "node_name": "Hyperpyrexia",
        "node_type": "single",
        "pos_x": 14400,
        "pos_y": 6000,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76033
        ],
        "next": [
          76093
        ],
        "entry_id": 96238,
        "definition_id": 101240,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Hyperpyrexia",
        "spell_id": 456238,
        "icon": "spell_fire_bluefire"
      },
      "pve_tooltip": "Your Runic Power spending abilities have a chance to additionally deal 30% of the damage dealt over 4 sec.\n(Proc chance: 35%)",
      "pvp_tooltip": "Your Runic Power spending abilities have a chance to additionally deal 30% of the damage dealt over 4 sec.\n(Proc chance: 35%)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    },
    {
      "talent_name": "Killing Streak",
      "spell_id": 1230153,
      "node_id": 76123,
      "entry_id": 96254,
      "definition_id": 101256,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76123,
        "node_name": "Killing Streak",
        "node_type": "single",
        "pos_x": 10800,
        "pos_y": 6600,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76091
        ],
        "next": [],
        "entry_id": 96254,
        "definition_id": 101256,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Killing Streak",
        "spell_id": 1230153,
        "icon": "ability_creature_cursed_05"
      },
      "pve_tooltip": "Obliterate and Frostscythe consume all Killing Machines to deal 25% increased critical strike damage and grant 1.5% Haste for 8 sec for each stack consumed.\nMultiple applications may overlap.",
      "pvp_tooltip": "Obliterate and Frostscythe consume all Killing Machines to deal 25% increased critical strike damage and grant 1.5% Haste for 8 sec for each stack consumed.\nMultiple applications may overlap.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    },
    {
      "talent_name": "The Long Winter",
      "spell_id": 456240,
      "node_id": 101932,
      "entry_id": 125877,
      "definition_id": 130708,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 101932,
        "node_name": "The Long Winter",
        "node_type": "single",
        "pos_x": 12000,
        "pos_y": 6600,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          101933
        ],
        "next": [],
        "entry_id": 125877,
        "definition_id": 130708,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "The Long Winter",
        "spell_id": 456240,
        "icon": "inv_10_dungeonjewelry_primalist_necklace_1_frost"
      },
      "pve_tooltip": "While Pillar of Frost is active your auto-attack critical strikes increase its duration by 1 sec, up to a maximum of 4 sec.",
      "pvp_tooltip": "While Pillar of Frost is active your auto-attack critical strikes increase its duration by 1 sec, up to a maximum of 4 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    },
    {
      "talent_name": "Frostbane",
      "spell_id": 455993,
      "node_id": 76094,
      "entry_id": 96223,
      "definition_id": 101225,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76094,
        "node_name": "Frostbane",
        "node_type": "single",
        "pos_x": 13200,
        "pos_y": 6600,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76095
        ],
        "next": [],
        "entry_id": 96223,
        "definition_id": 101225,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Frostbane",
        "spell_id": 455993,
        "icon": "inv_sword_1h_artifactruneblade_d_02"
      },
      "pve_tooltip": "Start a frozen onslaught that strikes twice, unleashing the chilling essence of winter, dealing (71.9863% of Attack Power) Frost damage to all enemies caught in its wake with each strike.\nEach enemy struck reduces the damage dealt to the next foe by 5%, down to 40%.",
      "pvp_tooltip": "Start a frozen onslaught that strikes twice, unleashing the chilling essence of winter, dealing (71.9863% of Attack Power) Frost damage to all enemies caught in its wake with each strike.\nEach enemy struck reduces the damage dealt to the next foe by 5%, down to 40%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "EMBEDDED",
          "talent_spell_id": 455993,
          "source_spell_id": 1228443,
          "effect_index": 1,
          "effect_text": "School Damage (Frost) (AP mod: 0.719863 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 1.42857,
          "amount_kind": "direct",
          "aura_factor": 0.9830999999999999,
          "final_pvp_multiplier": 1.4044271669999997,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            455993,
            1228433,
            1228443
          ],
          "dependency_relations": [
            "spelldesc_ref",
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            },
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1317283,
              "amount_kind": "direct",
              "value_pct": -13.0,
              "factor": 0.87,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        }
      ],
      "render_effect_count": 0
    },
    {
      "talent_name": "Breath of Sindragosa",
      "spell_id": 1249658,
      "node_id": 76093,
      "entry_id": 96222,
      "definition_id": 101224,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 76093,
        "node_name": "Breath of Sindragosa",
        "node_type": "single",
        "pos_x": 14400,
        "pos_y": 6600,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          76108
        ],
        "next": [],
        "entry_id": 96222,
        "definition_id": 101224,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Breath of Sindragosa",
        "spell_id": 1249658,
        "icon": "spell_deathknight_breathofsindragosa"
      },
      "pve_tooltip": "60 Runic Power\nInstant\n1.5 min cooldown\nCall upon Sindragosa's aid in battle for 8 sec, continuously dealing [(111.83% of Attack Power) * [(Attack Power * 0.98)][((Attack Power + Offhand Attack Power) * 2 / 3)] -- 2H, DW / Attack Power] Frost damage every 1 sec to enemies in a cone in front of you. Consuming Killing Machine or Rime increases the duration by 0.8 sec. Deals reduced damage to secondary targets.\nGrants a charge of Empower Rune Weapon at the start and 2 Runes at the end.\n(100ms cooldown)",
      "pvp_tooltip": "60 Runic Power\nInstant\n1.5 min cooldown\nCall upon Sindragosa's aid in battle for 8 sec, continuously dealing [(111.83% of Attack Power) * [(Attack Power * 0.98)][((Attack Power + Offhand Attack Power) * 2 / 3)] -- 2H, DW / Attack Power] Frost damage every 1 sec to enemies in a cone in front of you. Consuming Killing Machine or Rime increases the duration by 0.8 sec. Deals reduced damage to secondary targets.\nGrants a charge of Empower Rune Weapon at the start and 2 Runes at the end.\n(100ms cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "RUNTIME",
          "talent_spell_id": 1249658,
          "source_spell_id": 155166,
          "effect_index": 2,
          "effect_text": "School Damage (Frost) (AP mod: 1.1183 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 0.833,
          "amount_kind": "direct",
          "aura_factor": 1.13,
          "final_pvp_multiplier": 0.9412899999999998,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            1249658,
            155166
          ],
          "dependency_relations": [
            "trigger_spell"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        }
      ],
      "render_effect_count": 0
    },
    {
      "talent_name": "Chosen of Frostbrood",
      "spell_id": 1265632,
      "node_id": 110400,
      "entry_id": 136968,
      "definition_id": 141731,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110400,
        "node_name": "Chosen of Frostbrood / Chosen of Frostbrood / Chosen of Frostbrood",
        "node_type": "tiered",
        "pos_x": 12600,
        "pos_y": 7350,
        "max_ranks": 4,
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [],
        "entry_id": 136968,
        "definition_id": 141731,
        "entry_index": 100,
        "entry_type": "tierrank",
        "talent_name": "Chosen of Frostbrood",
        "spell_id": 1265632,
        "icon": "inv12_apextalent_deathknight_chosenofthefrostbrood"
      },
      "pve_tooltip": "Frostwyrm's Fury deals 100% increased damage to the first enemy it hits and grants you 15% Haste for 12 sec.",
      "pvp_tooltip": "Frostwyrm's Fury deals 100% increased damage to the first enemy it hits and grants you 15% Haste for 12 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    },
    {
      "talent_name": "Chosen of Frostbrood",
      "spell_id": 1265633,
      "node_id": 110400,
      "entry_id": 136967,
      "definition_id": 141730,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110400,
        "node_name": "Chosen of Frostbrood / Chosen of Frostbrood / Chosen of Frostbrood",
        "node_type": "tiered",
        "pos_x": 12600,
        "pos_y": 7350,
        "max_ranks": 4,
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [],
        "entry_id": 136967,
        "definition_id": 141730,
        "entry_index": 200,
        "entry_type": "tierrank",
        "talent_name": "Chosen of Frostbrood",
        "spell_id": 1265633,
        "icon": "achievement_reputation_wyrmresttemple"
      },
      "pve_tooltip": "Frostwyrm's Fury extends the duration of an active Pillar of Frost by 2.0 sec.\nEnduring Strength grants an additional 4% Strength.",
      "pvp_tooltip": "Frostwyrm's Fury extends the duration of an active Pillar of Frost by 2.0 sec.\nEnduring Strength grants an additional 4% Strength.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    },
    {
      "talent_name": "Chosen of Frostbrood",
      "spell_id": 1265637,
      "node_id": 110400,
      "entry_id": 136966,
      "definition_id": 141729,
      "tree_type": "spec",
      "hero_tree": null,
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "spec",
        "hero_tree": null,
        "subtree_id": null,
        "node_id": 110400,
        "node_name": "Chosen of Frostbrood / Chosen of Frostbrood / Chosen of Frostbrood",
        "node_type": "tiered",
        "pos_x": 12600,
        "pos_y": 7350,
        "max_ranks": 4,
        "entry_node": true,
        "free_node": false,
        "prev": [],
        "next": [],
        "entry_id": 136966,
        "definition_id": 141729,
        "entry_index": 300,
        "entry_type": "tierrank",
        "talent_name": "Chosen of Frostbrood",
        "spell_id": 1265637,
        "icon": "achievement_reputation_wyrmresttemple"
      },
      "pve_tooltip": "All Frost damage increased by 10%.\nFrostwyrm's Fury deals 100% increased damage. After the Frostwyrm flies away, you may cast Frostwyrm's Fury again to recall it at 50% effectiveness.",
      "pvp_tooltip": "All Frost damage increased by 10%.\nFrostwyrm's Fury deals 100% increased damage. After the Frostwyrm flies away, you may cast Frostwyrm's Fury again to recall it at 50% effectiveness.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "definition_id": 122671,
        "entry_index": 100,
        "entry_type": "active",
        "talent_name": "Reaper's Mark",
        "spell_id": 439843,
        "icon": "inv_ability_deathbringerdeathknight_reapersmark"
      },
      "pve_tooltip": "2 Runes\nMelee Range\nInstant\n45 sec cooldown\nViciously slice into the soul of your enemy, dealing (234% of Attack Power) Shadowfrost damage and applying Reaper's Mark.\nEach time you deal Shadow or Frost damage, add a stack of Reaper's Mark. After 12 sec or reaching 40 stacks, the mark explodes, dealing (30.364% of Attack Power) damage per stack.\nReaper's Mark travels to an unmarked enemy nearby if the target dies.",
      "pvp_tooltip": "2 Runes\nMelee Range\nInstant\n45 sec cooldown\nViciously slice into the soul of your enemy, dealing (234% of Attack Power) Shadowfrost damage and applying Reaper's Mark.\nEach time you deal Shadow or Frost damage, add a stack of Reaper's Mark. After 12 sec or reaching 40 stacks, the mark explodes, dealing (30.364% of Attack Power) damage per stack.\nReaper's Mark travels to an unmarked enemy nearby if the target dies.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 439843,
          "source_spell_id": 439843,
          "effect_index": 1,
          "effect_text": "School Damage (Frost, Shadow) (AP mod: 4.4226 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.13,
          "final_pvp_multiplier": 1.13,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead"
          ],
          "confidence": "medium"
        },
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 439843,
          "source_spell_id": 439843,
          "effect_index": 4,
          "effect_text": "School Damage (Frost, Shadow) (AP mod: 2.34 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 0.8,
          "amount_kind": "direct",
          "aura_factor": 1.13,
          "final_pvp_multiplier": 0.9039999999999999,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 439843,
          "source_spell_id": 436304,
          "effect_index": 1,
          "effect_text": "School Damage (Frost, Shadow) (AP mod: 0.45348 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 0.555,
          "amount_kind": "direct",
          "aura_factor": 1.13,
          "final_pvp_multiplier": 0.62715,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            439843,
            436304
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead"
          ],
          "confidence": "ambiguous"
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 439843,
          "source_spell_id": 436304,
          "effect_index": 2,
          "effect_text": "School Damage (Frost, Shadow) (AP mod: 0.30364 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 0.554667,
          "amount_kind": "direct",
          "aura_factor": 1.13,
          "final_pvp_multiplier": 0.6267737099999999,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            439843,
            436304
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead"
          ],
          "confidence": "ambiguous"
        }
      ],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": false,
        "free_node": false,
        "prev": [
          95062
        ],
        "next": [
          95061
        ],
        "entry_id": 117633,
        "definition_id": 122645,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Wave of Souls",
        "spell_id": 439851,
        "icon": "spell_animamaw_wave"
      },
      "pve_tooltip": "Reaper's Mark sends forth bursts of Shadowfrost energy and back, dealing (96.7079% of Attack Power) Shadowfrost damage both ways to all enemies caught in its path.\nWave of Souls critical strikes cause enemies to take 5% increased Shadowfrost damage for 15 sec, stacking up to 2 times, and it is always a critical strike on its way back.",
      "pvp_tooltip": "Reaper's Mark sends forth bursts of Shadowfrost energy and back, dealing (96.7079% of Attack Power) Shadowfrost damage both ways to all enemies caught in its path.\nWave of Souls critical strikes cause enemies to take 5% increased Shadowfrost damage for 15 sec, stacking up to 2 times, and it is always a critical strike on its way back.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 439851,
          "source_spell_id": 435802,
          "effect_index": 1,
          "effect_text": "School Damage (Frost, Shadow) (AP mod: 2.1192 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 1.54,
          "amount_kind": "direct",
          "aura_factor": 1.13,
          "final_pvp_multiplier": 1.7402,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            439851,
            435802
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead"
          ],
          "confidence": "ambiguous"
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 439851,
          "source_spell_id": 435802,
          "effect_index": 2,
          "effect_text": "School Damage (Frost, Shadow) (AP mod: 0.967079 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 1.54,
          "amount_kind": "direct",
          "aura_factor": 1.13,
          "final_pvp_multiplier": 1.7402,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            439851,
            435802
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead"
          ],
          "confidence": "ambiguous"
        }
      ],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": false,
        "free_node": false,
        "prev": [
          95062
        ],
        "next": [
          95034
        ],
        "entry_id": 117655,
        "definition_id": 122667,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Wither Away",
        "spell_id": 441894,
        "icon": "sha_spell_warlock_demonsoul"
      },
      "pve_tooltip": "Frost Fever deals its damage\n% faster, and the second scythe of Exterminate applies Frost Fever.",
      "pvp_tooltip": "Frost Fever deals its damage\n% faster, and the second scythe of Exterminate applies Frost Fever.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [
        {
          "effect_indexes": [
            3
          ],
          "status": "NOT_VISIBLE_IN_TOOLTIP",
          "kind": "frequency_more_often",
          "old": 75.43859649122805,
          "new": 99.99988000007203,
          "full_tooltip_match_count": 0
        },
        {
          "effect_indexes": [
            4
          ],
          "status": "NOT_VISIBLE_IN_TOOLTIP",
          "kind": "ordinary_value",
          "old": 43.0,
          "new": 49.99997,
          "full_tooltip_match_count": 0
        },
        {
          "effect_indexes": [
            6
          ],
          "status": "NOT_VISIBLE_IN_TOOLTIP",
          "kind": "ordinary_value",
          "old": 75.0,
          "new": 99.99974999999999,
          "full_tooltip_match_count": 0
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 441894,
          "source_spell_id": 441894,
          "effect_index": 3,
          "effect_text": "Apply Aura: Modifies Time Between Ticks (19)",
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
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        },
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 441894,
          "source_spell_id": 441894,
          "effect_index": 4,
          "effect_text": "Apply Aura: Modifies Buff Duration (1)",
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
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        },
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 441894,
          "source_spell_id": 441894,
          "effect_index": 6,
          "effect_text": "Apply Aura: Dummy",
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
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        }
      ],
      "render_effect_count": 3
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": false,
        "free_node": false,
        "prev": [
          95062
        ],
        "next": [
          95035
        ],
        "entry_id": 117640,
        "definition_id": 122652,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Bind in Darkness",
        "spell_id": 440031,
        "icon": "ability_argus_soulbombdebuffsmall"
      },
      "pve_tooltip": "Rime empowered Howling Blast deals 60% increased damage to its main target, and is now Shadowfrost.\nShadowfrost damage applies 2 stacks to Reaper's Mark and 4 stacks when it is a critical strike.",
      "pvp_tooltip": "Rime empowered Howling Blast deals 60% increased damage to its main target, and is now Shadowfrost.\nShadowfrost damage applies 2 stacks to Reaper's Mark and 4 stacks when it is a critical strike.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": false,
        "free_node": false,
        "prev": [
          95062
        ],
        "next": [
          109734
        ],
        "entry_id": 135993,
        "definition_id": 140748,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Frigid Resolve",
        "spell_id": 1265859,
        "icon": "spell_deathknight_icetouch"
      },
      "pve_tooltip": "The effectiveness of Permafrost is increased by 50%.\nPermafrost\nYour auto attack damage grants you an absorb shield equal to 50% of the damage dealt.",
      "pvp_tooltip": "The effectiveness of Permafrost is increased by 50%.\nPermafrost\nYour auto attack damage grants you an absorb shield equal to 50% of the damage dealt.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": false,
        "free_node": false,
        "prev": [
          95036
        ],
        "next": [
          95032
        ],
        "entry_id": 117658,
        "definition_id": 122670,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Soul Rupture",
        "spell_id": 437161,
        "icon": "warlock_siphonlife"
      },
      "pve_tooltip": "100 yd range\nWhen Reaper's Mark explodes, it deals 20% of the damage dealt to nearby enemies.",
      "pvp_tooltip": "100 yd range\nWhen Reaper's Mark explodes, it deals 20% of the damage dealt to nearby enemies.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": false,
        "free_node": false,
        "prev": [
          95058
        ],
        "next": [
          95057
        ],
        "entry_id": 117631,
        "definition_id": 122643,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Grim Reaper",
        "spell_id": 434905,
        "icon": "spell_misc_zandalari_council_soulswap"
      },
      "pve_tooltip": "Reaper's Mark initial strike grants [3 charges of Bone Shield][Killing Machine].\nReaper's Mark explosion deals up to 30% increased damage based on your target's missing health.",
      "pvp_tooltip": "Reaper's Mark initial strike grants [3 charges of Bone Shield][Killing Machine].\nReaper's Mark explosion deals up to 30% increased damage based on your target's missing health.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": false,
        "free_node": false,
        "prev": [
          95043
        ],
        "next": [
          95049
        ],
        "entry_id": 117632,
        "definition_id": 122644,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Pact of the Deathbringer",
        "spell_id": 440476,
        "icon": "ability_revendreth_deathknight"
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
          "kind": "ordinary_value",
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
          "kind": "ordinary_value",
          "old": "25",
          "new": "15"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 440476,
          "source_spell_id": 440476,
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
            "drustvar"
          ],
          "confidence": "high"
        }
      ],
      "render_effect_count": 1
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": false,
        "free_node": false,
        "prev": [
          95043
        ],
        "next": [
          95049
        ],
        "entry_id": 123420,
        "definition_id": 128258,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Rune Carved Plates",
        "spell_id": 440282,
        "icon": "spell_deathknight_runetap"
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
          "kind": "ordinary_value",
          "old": 15.0,
          "new": 7.5,
          "full_tooltip_match_count": 0
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 440282,
          "source_spell_id": 440289,
          "effect_index": 1,
          "effect_text": "Apply Aura: Mod % Damage Taken (Physical)",
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
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 440282,
          "source_spell_id": 440290,
          "effect_index": 1,
          "effect_text": "Apply Aura: Mod % Damage Taken (All)",
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
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        }
      ],
      "render_effect_count": 2
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": false,
        "free_node": false,
        "prev": [
          109735
        ],
        "next": [
          109733
        ],
        "entry_id": 135992,
        "definition_id": 140747,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Deathly Blows",
        "spell_id": 1265932,
        "icon": "inv_sword_1h_mawraid_d_02"
      },
      "pve_tooltip": "Frost Strike damage is increased by 35% and Glacial Advance damage is increased by 5%.\nReaper's Mark grants 3 charges of Bonegrinder if it is known.\n(500ms cooldown)",
      "pvp_tooltip": "Frost Strike damage is increased by 35% and Glacial Advance damage is increased by 5%.\nReaper's Mark grants 3 charges of Bonegrinder if it is known.\n(500ms cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": false,
        "free_node": false,
        "prev": [
          95061
        ],
        "next": [
          95068
        ],
        "entry_id": 117629,
        "definition_id": 122641,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Swift and Painful",
        "spell_id": 443560,
        "icon": "ability_domination_rune02"
      },
      "pve_tooltip": "If no enemies are struck by Soul Rupture, you gain 8% Strength for 8 sec.\nWave of Souls is 100% more effective on the main target of your Reaper's Mark.",
      "pvp_tooltip": "If no enemies are struck by Soul Rupture, you gain 8% Strength for 8 sec.\nWave of Souls is 100% more effective on the main target of your Reaper's Mark.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": false,
        "free_node": false,
        "prev": [
          95034
        ],
        "next": [
          95068
        ],
        "entry_id": 117654,
        "definition_id": 122666,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Dark Talons",
        "spell_id": 436687,
        "icon": "inv_shoulder_93"
      },
      "pve_tooltip": "Consuming Killing Machine or Rime has a 25% chance to grant 3 stacks of Icy Talons and increase its maximum stacks by the same amount for 6 sec.\nRunic Power spending abilities count as Shadowfrost while Icy Talons is active.",
      "pvp_tooltip": "Consuming Killing Machine or Rime has a 25% chance to grant 3 stacks of Icy Talons and increase its maximum stacks by the same amount for 6 sec.\nRunic Power spending abilities count as Shadowfrost while Icy Talons is active.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": false,
        "free_node": false,
        "prev": [
          95034
        ],
        "next": [
          95068
        ],
        "entry_id": 128266,
        "definition_id": 133073,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Reaper's Onslaught",
        "spell_id": 469870,
        "icon": "ability_demonhunter_soulcleave2"
      },
      "pve_tooltip": "Reduces the cooldown of Reaper's Mark by 15 sec, but the amount of Obliterates and Frostscythes empowered by Exterminate is reduced by 1.",
      "pvp_tooltip": "Reduces the cooldown of Reaper's Mark by 15 sec, but the amount of Obliterates and Frostscythes empowered by Exterminate is reduced by 1.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": false,
        "free_node": false,
        "prev": [
          95035
        ],
        "next": [
          95068
        ],
        "entry_id": 117646,
        "definition_id": 122658,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Death's Messenger",
        "spell_id": 437122,
        "icon": "ability_argus_deathfog"
      },
      "pve_tooltip": "Reduces the cooldowns of Lichborne and Raise Dead by 30 sec.",
      "pvp_tooltip": "Reduces the cooldowns of Lichborne and Raise Dead by 30 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": false,
        "free_node": false,
        "prev": [
          95035
        ],
        "next": [
          95068
        ],
        "entry_id": 128234,
        "definition_id": 133041,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Expelling Shield",
        "spell_id": 439948,
        "icon": "spell_shadow_antimagicshell"
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
          "kind": "ordinary_value",
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
          "kind": "ordinary_value",
          "old": "10",
          "new": "4"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 439948,
          "source_spell_id": 440739,
          "effect_index": 1,
          "effect_text": "Apply Aura: Mod Casting Speed %",
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
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        }
      ],
      "render_effect_count": 1
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "entry_node": false,
        "free_node": false,
        "prev": [
          109734
        ],
        "next": [
          95068
        ],
        "entry_id": 135991,
        "definition_id": 140746,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Echoing Fury",
        "spell_id": 1265855,
        "icon": "spell_fire_blueflamebreath"
      },
      "pve_tooltip": "Reaper's Mark deals 5% increased damage.\nCasting Reaper's Mark grants 1 stack of Exterminate with 100% first scythe and 100% second scythe effectiveness.",
      "pvp_tooltip": "Reaper's Mark deals 5% increased damage.\nCasting Reaper's Mark grants 1 stack of Exterminate with 100% first scythe and 100% second scythe effectiveness.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
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
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
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
        "definition_id": 122677,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Exterminate",
        "spell_id": 441378,
        "icon": "inv_polearm_2h_titanargus_d_01"
      },
      "pve_tooltip": "After Reaper's Mark explodes, your next 2\nObliterates\nor Frostscythes cost 1 Rune and summon 2 scythes to strike your enemies.\nThe first scythe strikes your target for (440.205% of Attack Power) Shadowfrost damage and has a 100% chance to grant Killing Machine, the second scythe strikes all enemies around your target for (178.008% of Attack Power) Shadowfrost damage\n[and applies Frost Fever]. Deals reduced damage beyond 8 targets.\n(1s cooldown)",
      "pvp_tooltip": "After Reaper's Mark explodes, your next 2\nObliterates\nor Frostscythes cost 1 Rune and summon 2 scythes to strike your enemies.\nThe first scythe strikes your target for (440.205% of Attack Power) Shadowfrost damage and has a 100% chance to grant Killing Machine, the second scythe strikes all enemies around your target for (178.008% of Attack Power) Shadowfrost damage\n[and applies Frost Fever]. Deals reduced damage beyond 8 targets.\n(1s cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 441378,
          "source_spell_id": 441424,
          "effect_index": 1,
          "effect_text": "School Damage (Frost, Shadow) (AP mod: 10.3025 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 0.7,
          "amount_kind": "direct",
          "aura_factor": 1.13,
          "final_pvp_multiplier": 0.7909999999999999,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            441378,
            441424
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 441378,
          "source_spell_id": 441424,
          "effect_index": 2,
          "effect_text": "School Damage (Frost, Shadow) (AP mod: 4.40205 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 0.85,
          "amount_kind": "direct",
          "aura_factor": 1.13,
          "final_pvp_multiplier": 0.9604999999999999,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            441378,
            441424
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 441378,
          "source_spell_id": 441426,
          "effect_index": 1,
          "effect_text": "School Damage (Frost, Shadow) (AP mod: 4.692 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 0.7,
          "amount_kind": "direct",
          "aura_factor": 1.13,
          "final_pvp_multiplier": 0.7909999999999999,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            441378,
            441426
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 441378,
          "source_spell_id": 441426,
          "effect_index": 2,
          "effect_text": "School Damage (Frost, Shadow) (AP mod: 1.78008 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 0.85,
          "amount_kind": "direct",
          "aura_factor": 1.13,
          "final_pvp_multiplier": 0.9604999999999999,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            441378,
            441426
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        }
      ],
      "render_effect_count": 0
    },
    {
      "talent_name": "Rider's Champion",
      "spell_id": 444005,
      "node_id": 95066,
      "entry_id": 117663,
      "definition_id": 122675,
      "tree_type": "hero",
      "hero_tree": "Rider of the Apocalypse",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Rider of the Apocalypse",
        "subtree_id": 32,
        "node_id": 95066,
        "node_name": "Rider's Champion",
        "node_type": "single",
        "pos_x": 8100,
        "pos_y": 4200,
        "max_ranks": 1,
        "entry_node": true,
        "free_node": true,
        "prev": [],
        "next": [
          95060,
          95067,
          95037,
          109741
        ],
        "entry_id": 117663,
        "definition_id": 122675,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Rider's Champion",
        "spell_id": 444005,
        "icon": "achievement_zone_icecrown_01"
      },
      "pve_tooltip": "Spending Runes has a chance to call forth the aid of a Horsemen for 10 sec.\nMograine\nCasts Death and Decay at his location that follows his position and extends the duration of your diseases by 1.0 sec whenever it deals damage.\nWhitemane\nCasts Undeath on your target dealing (6.86532% of Attack Power) Shadowfrost damage per stack every 3 sec, for 24 sec. Each time Undeath deals damage it gains a stack. Cannot be refreshed.\nTrollbane\nCasts Chains of Ice on your target slowing their movement speed by 40% and increasing the damage they take from you by 5% for 8 sec.\nNazgrim\nWhile Nazgrim is active you gain Apocalyptic Conquest, increasing your Strength by 5%.",
      "pvp_tooltip": "Spending Runes has a chance to call forth the aid of a Horsemen for 10 sec.\nMograine\nCasts Death and Decay at his location that follows his position and extends the duration of your diseases by 1.0 sec whenever it deals damage.\nWhitemane\nCasts Undeath on your target dealing (6.86532% of Attack Power) Shadowfrost damage per stack every 3 sec, for 24 sec. Each time Undeath deals damage it gains a stack. Cannot be refreshed.\nTrollbane\nCasts Chains of Ice on your target slowing their movement speed by 20% and increasing the damage they take from you by 5% for 8 sec.\nNazgrim\nWhile Nazgrim is active you gain Apocalyptic Conquest, increasing your Strength by 5%.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 503,
          "end": 505,
          "old_token": "40",
          "new_token": "20",
          "kind": "ordinary_value",
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
          "kind": "ordinary_value",
          "old": "40",
          "new": "20"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 444005,
          "source_spell_id": 444633,
          "effect_index": 1,
          "effect_text": "Apply Aura: Periodic Damage",
          "base_value": 0.0,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "periodic",
          "aura_factor": 1.13,
          "final_pvp_multiplier": 1.13,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            444005,
            444633
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1265440,
              "amount_kind": "periodic",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead"
          ],
          "confidence": "medium"
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 444005,
          "source_spell_id": 444834,
          "effect_index": 1,
          "effect_text": "Apply Aura: Decrease Run Speed %",
          "base_value": -40.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": -20.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            444005,
            444834
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [],
          "sources": [
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 444005,
          "source_spell_id": 444834,
          "effect_index": 2,
          "effect_text": "School Damage (Frost, Shadow) (AP mod: 1.053 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.13,
          "final_pvp_multiplier": 1.13,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            444005,
            444834
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead"
          ],
          "confidence": "medium"
        }
      ],
      "render_effect_count": 1
    },
    {
      "talent_name": "On a Paler Horse",
      "spell_id": 444008,
      "node_id": 95060,
      "entry_id": 117657,
      "definition_id": 122669,
      "tree_type": "hero",
      "hero_tree": "Rider of the Apocalypse",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Rider of the Apocalypse",
        "subtree_id": 32,
        "node_id": 95060,
        "node_name": "On a Paler Horse / Death Charge",
        "node_type": "choice",
        "pos_x": 7200,
        "pos_y": 4800,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95066
        ],
        "next": [
          95047
        ],
        "entry_id": 117657,
        "definition_id": 122669,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "On a Paler Horse",
        "spell_id": 444008,
        "icon": "inv_skeletalwarhorse_01_purple"
      },
      "pve_tooltip": "While outdoors you are able to mount your Acherus Deathcharger in combat.",
      "pvp_tooltip": "While outdoors you are able to mount your Acherus Deathcharger in combat.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    },
    {
      "talent_name": "Death Charge",
      "spell_id": 444010,
      "node_id": 95060,
      "entry_id": 123412,
      "definition_id": 128250,
      "tree_type": "hero",
      "hero_tree": "Rider of the Apocalypse",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Rider of the Apocalypse",
        "subtree_id": 32,
        "node_id": 95060,
        "node_name": "On a Paler Horse / Death Charge",
        "node_type": "choice",
        "pos_x": 7200,
        "pos_y": 4800,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95066
        ],
        "next": [
          95047
        ],
        "entry_id": 123412,
        "definition_id": 128250,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Death Charge",
        "spell_id": 444010,
        "icon": "ability_mount_steelwarhorse"
      },
      "pve_tooltip": "Call upon your Death Charger to break free of movement impairment effects.\nFor 10 sec, while upon your Death Charger your movement speed is increased by 100%, you cannot be slowed below 100% of normal speed, and you are immune to forced movement effects and knockbacks.",
      "pvp_tooltip": "Call upon your Death Charger to break free of movement impairment effects.\nFor 10 sec, while upon your Death Charger your movement speed is increased by 100%, you cannot be slowed below 100% of normal speed, and you are immune to forced movement effects and knockbacks.",
      "tooltip_changed": false,
      "render_status": "REVIEW_REQUIRED",
      "changes": [],
      "diagnostics": [
        {
          "effect_indexes": [
            5
          ],
          "status": "AMBIGUOUS_TEXT_MATCH",
          "kind": "ordinary_value",
          "old": 100.0,
          "new": 80.0,
          "match_count": 2
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 444010,
          "source_spell_id": 444347,
          "effect_index": 5,
          "effect_text": "Apply Aura: Increase Run Speed %",
          "base_value": 100.0,
          "spell_pvp_multiplier": 0.8,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.8,
          "final_pvp_value": 80.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            444010,
            444347
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [],
          "sources": [
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        }
      ],
      "render_effect_count": 1
    },
    {
      "talent_name": "Mograine's Might",
      "spell_id": 444047,
      "node_id": 95067,
      "entry_id": 117664,
      "definition_id": 122676,
      "tree_type": "hero",
      "hero_tree": "Rider of the Apocalypse",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Rider of the Apocalypse",
        "subtree_id": 32,
        "node_id": 95067,
        "node_name": "Mograine's Might",
        "node_type": "single",
        "pos_x": 7800,
        "pos_y": 4800,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95066
        ],
        "next": [
          95059
        ],
        "entry_id": 117664,
        "definition_id": 122676,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Mograine's Might",
        "spell_id": 444047,
        "icon": "ability_warlock_improvedsoulleech"
      },
      "pve_tooltip": "Your damage is increased by 5% and you gain 5% critical strike chance while inside Mograine's Death and Decay.",
      "pvp_tooltip": "Your damage is increased by 5% and you gain 5% critical strike chance while inside Mograine's Death and Decay.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    },
    {
      "talent_name": "Horsemen's Aid",
      "spell_id": 444074,
      "node_id": 95037,
      "entry_id": 117634,
      "definition_id": 122646,
      "tree_type": "hero",
      "hero_tree": "Rider of the Apocalypse",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Rider of the Apocalypse",
        "subtree_id": 32,
        "node_id": 95037,
        "node_name": "Horsemen's Aid / Pact of the Apocalypse",
        "node_type": "choice",
        "pos_x": 8400,
        "pos_y": 4800,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95066
        ],
        "next": [
          95063
        ],
        "entry_id": 117634,
        "definition_id": 122646,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Horsemen's Aid",
        "spell_id": 444074,
        "icon": "achievement_dungeon_nexusraid_10man"
      },
      "pve_tooltip": "While at your aid, the Horsemen will occasionally cast Anti-Magic Shell on you and themselves at 80% effectiveness.\nYou may only benefit from this effect every 45 sec.",
      "pvp_tooltip": "While at your aid, the Horsemen will occasionally cast Anti-Magic Shell on you and themselves at 80% effectiveness.\nYou may only benefit from this effect every 45 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    },
    {
      "talent_name": "Pact of the Apocalypse",
      "spell_id": 444083,
      "node_id": 95037,
      "entry_id": 123410,
      "definition_id": 128248,
      "tree_type": "hero",
      "hero_tree": "Rider of the Apocalypse",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Rider of the Apocalypse",
        "subtree_id": 32,
        "node_id": 95037,
        "node_name": "Horsemen's Aid / Pact of the Apocalypse",
        "node_type": "choice",
        "pos_x": 8400,
        "pos_y": 4800,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95066
        ],
        "next": [
          95063
        ],
        "entry_id": 123410,
        "definition_id": 128248,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "Pact of the Apocalypse",
        "spell_id": 444083,
        "icon": "achievement_dungeon_nexus80_25man"
      },
      "pve_tooltip": "When you take damage, 5% of the damage is redirected to each active horsemen.",
      "pvp_tooltip": "When you take damage, 5% of the damage is redirected to each active horsemen.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    },
    {
      "talent_name": "Ride or Die!",
      "spell_id": 1265959,
      "node_id": 109741,
      "entry_id": 135999,
      "definition_id": 140754,
      "tree_type": "hero",
      "hero_tree": "Rider of the Apocalypse",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Rider of the Apocalypse",
        "subtree_id": 32,
        "node_id": 109741,
        "node_name": "Ride or Die!",
        "node_type": "single",
        "pos_x": 9000,
        "pos_y": 4800,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95066
        ],
        "next": [
          109740
        ],
        "entry_id": 135999,
        "definition_id": 140754,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Ride or Die!",
        "spell_id": 1265959,
        "icon": "achievement_boss_fourhorsemen"
      },
      "pve_tooltip": "Pillar of Frost summons forth Trollbane for 6 sec.",
      "pvp_tooltip": "Pillar of Frost summons forth Trollbane for 4 sec.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 44,
          "end": 45,
          "old_token": "6",
          "new_token": "4",
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
          "old": "6",
          "new": "4"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 1265959,
          "source_spell_id": 1265959,
          "effect_index": 1,
          "effect_text": "Apply Aura: Dummy",
          "base_value": 6.0,
          "spell_pvp_multiplier": 0.66,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.66,
          "final_pvp_value": 3.96,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [],
          "sources": [
            "wowhead"
          ],
          "confidence": "ambiguous"
        },
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 1265959,
          "source_spell_id": 1265959,
          "effect_index": 2,
          "effect_text": "Apply Aura: Dummy",
          "base_value": 6.0,
          "spell_pvp_multiplier": 0.66,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.66,
          "final_pvp_value": 3.96,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [],
          "sources": [
            "wowhead"
          ],
          "confidence": "ambiguous"
        }
      ],
      "render_effect_count": 2
    },
    {
      "talent_name": "Whitemane's Famine",
      "spell_id": 444033,
      "node_id": 95047,
      "entry_id": 117644,
      "definition_id": 122656,
      "tree_type": "hero",
      "hero_tree": "Rider of the Apocalypse",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Rider of the Apocalypse",
        "subtree_id": 32,
        "node_id": 95047,
        "node_name": "Whitemane's Famine",
        "node_type": "single",
        "pos_x": 7200,
        "pos_y": 5400,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95060
        ],
        "next": [
          95044
        ],
        "entry_id": 117644,
        "definition_id": 122656,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Whitemane's Famine",
        "spell_id": 444033,
        "icon": "spell_deathknight_necroticplague"
      },
      "pve_tooltip": "When Obliterate or Frostscythe damages an enemy affected by Undeath it gains 1 stack and infects another nearby enemy.",
      "pvp_tooltip": "When Obliterate or Frostscythe damages an enemy affected by Undeath it gains 1 stack and infects another nearby enemy.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    },
    {
      "talent_name": "Nazgrim's Conquest",
      "spell_id": 444052,
      "node_id": 95059,
      "entry_id": 117656,
      "definition_id": 122668,
      "tree_type": "hero",
      "hero_tree": "Rider of the Apocalypse",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Rider of the Apocalypse",
        "subtree_id": 32,
        "node_id": 95059,
        "node_name": "Nazgrim's Conquest",
        "node_type": "single",
        "pos_x": 7800,
        "pos_y": 5400,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95067
        ],
        "next": [
          95042
        ],
        "entry_id": 117656,
        "definition_id": 122668,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Nazgrim's Conquest",
        "spell_id": 444052,
        "icon": "ability_maldraxxus_warriorplantbanner"
      },
      "pve_tooltip": "If an enemy dies while Nazgrim is active, the strength of Apocalyptic Conquest is increased by 3%.\nAdditionally, each Rune you spend increase its value by 1%.",
      "pvp_tooltip": "If an enemy dies while Nazgrim is active, the strength of Apocalyptic Conquest is increased by 3%.\nAdditionally, each Rune you spend increase its value by 1%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    },
    {
      "talent_name": "Trollbane's Icy Fury",
      "spell_id": 444097,
      "node_id": 95063,
      "entry_id": 117660,
      "definition_id": 122672,
      "tree_type": "hero",
      "hero_tree": "Rider of the Apocalypse",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Rider of the Apocalypse",
        "subtree_id": 32,
        "node_id": 95063,
        "node_name": "Trollbane's Icy Fury",
        "node_type": "single",
        "pos_x": 8400,
        "pos_y": 5400,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95037
        ],
        "next": [
          95054
        ],
        "entry_id": 117660,
        "definition_id": 122672,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Trollbane's Icy Fury",
        "spell_id": 444097,
        "icon": "ability_warrior_shatteringthrow"
      },
      "pve_tooltip": "Obliterate and Frostscythe shatter Trollbane's Chains of Ice when hit, dealing (105.3% of Attack Power) Shadowfrost damage to nearby enemies, and slowing them by 40% for 4 sec. Deals reduced damage beyond 8 targets.",
      "pvp_tooltip": "Obliterate and Frostscythe shatter Trollbane's Chains of Ice when hit, dealing (105.3% of Attack Power) Shadowfrost damage to nearby enemies, and slowing them by 20% for 4 sec. Deals reduced damage beyond 8 targets.",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 162,
          "end": 164,
          "old_token": "40",
          "new_token": "20",
          "kind": "ordinary_value",
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
          "kind": "ordinary_value",
          "old": "40",
          "new": "20"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 444097,
          "source_spell_id": 444834,
          "effect_index": 1,
          "effect_text": "Apply Aura: Decrease Run Speed %",
          "base_value": -40.0,
          "spell_pvp_multiplier": 0.5,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.5,
          "final_pvp_value": -20.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            444097,
            444834
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [],
          "sources": [
            "wowhead",
            "drustvar"
          ],
          "confidence": "high"
        },
        {
          "effect_origin": "DEPENDENCY",
          "dependency_kind": "REFERENCED",
          "talent_spell_id": 444097,
          "source_spell_id": 444834,
          "effect_index": 2,
          "effect_text": "School Damage (Frost, Shadow) (AP mod: 1.053 )",
          "base_value": 0.0,
          "spell_pvp_multiplier": 1.0,
          "amount_kind": "direct",
          "aura_factor": 1.13,
          "final_pvp_multiplier": 1.13,
          "final_pvp_value": 0.0,
          "is_final_pvp_modified": true,
          "dependency_path": [
            444097,
            444834
          ],
          "dependency_relations": [
            "tooltip_value_ref"
          ],
          "aura_rules": [
            {
              "aura_spell_id": 1256915,
              "game_effect_id": 1264668,
              "amount_kind": "direct",
              "value_pct": 13.0,
              "factor": 1.13,
              "build": "12.1.0.69587"
            }
          ],
          "sources": [
            "wowhead"
          ],
          "confidence": "medium"
        }
      ],
      "render_effect_count": 1
    },
    {
      "talent_name": "Let Terror Reign",
      "spell_id": 1265949,
      "node_id": 109740,
      "entry_id": 135998,
      "definition_id": 140753,
      "tree_type": "hero",
      "hero_tree": "Rider of the Apocalypse",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Rider of the Apocalypse",
        "subtree_id": 32,
        "node_id": 109740,
        "node_name": "Let Terror Reign",
        "node_type": "single",
        "pos_x": 9000,
        "pos_y": 5400,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109741
        ],
        "next": [
          109739
        ],
        "entry_id": 135998,
        "definition_id": 140753,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Let Terror Reign",
        "spell_id": 1265949,
        "icon": "spell_deathknight_plaguestrike"
      },
      "pve_tooltip": "Casting Obliterate or Frostscythe orders Trollbane to cast his Obliterate or Frostscythe alongside you at 100% effectiveness.\n(500ms cooldown)",
      "pvp_tooltip": "Casting Obliterate or Frostscythe orders Trollbane to cast his Obliterate or Frostscythe alongside you at 33% effectiveness.\n(500ms cooldown)",
      "tooltip_changed": true,
      "render_status": "CHANGED",
      "changes": [
        {
          "start": 106,
          "end": 109,
          "old_token": "100",
          "new_token": "33",
          "kind": "ordinary_value",
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
          "status": "OTHER_SPEC_BRANCH",
          "kind": "ordinary_value",
          "old": 125.0,
          "new": 41.25,
          "full_tooltip_match_count": 1
        },
        {
          "effect_indexes": [
            1
          ],
          "status": "APPLIED",
          "kind": "ordinary_value",
          "old": "100",
          "new": "33"
        }
      ],
      "has_pvp_mechanics": true,
      "mechanics": [
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 1265949,
          "source_spell_id": 1265949,
          "effect_index": 1,
          "effect_text": "Apply Aura: Dummy",
          "base_value": 100.0,
          "spell_pvp_multiplier": 0.33,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.33,
          "final_pvp_value": 33.0,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [],
          "sources": [
            "wowhead"
          ],
          "confidence": "ambiguous"
        },
        {
          "effect_origin": "DIRECT",
          "dependency_kind": null,
          "talent_spell_id": 1265949,
          "source_spell_id": 1265949,
          "effect_index": 2,
          "effect_text": "Apply Aura: Dummy",
          "base_value": 125.0,
          "spell_pvp_multiplier": 0.33,
          "amount_kind": null,
          "aura_factor": 1.0,
          "final_pvp_multiplier": 0.33,
          "final_pvp_value": 41.25,
          "is_final_pvp_modified": true,
          "dependency_path": [],
          "dependency_relations": [],
          "aura_rules": [],
          "sources": [
            "wowhead"
          ],
          "confidence": "ambiguous"
        }
      ],
      "render_effect_count": 2
    },
    {
      "talent_name": "Hungering Thirst",
      "spell_id": 444037,
      "node_id": 95044,
      "entry_id": 117641,
      "definition_id": 122653,
      "tree_type": "hero",
      "hero_tree": "Rider of the Apocalypse",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Rider of the Apocalypse",
        "subtree_id": 32,
        "node_id": 95044,
        "node_name": "Hungering Thirst",
        "node_type": "single",
        "pos_x": 7200,
        "pos_y": 6000,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95047
        ],
        "next": [
          95041
        ],
        "entry_id": 117641,
        "definition_id": 122653,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Hungering Thirst",
        "spell_id": 444037,
        "icon": "spell_shadow_fumble"
      },
      "pve_tooltip": "The damage of your diseases and Frost Strike are increased by 5%.",
      "pvp_tooltip": "The damage of your diseases and Frost Strike are increased by 5%.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    },
    {
      "talent_name": "Fury of the Horsemen",
      "spell_id": 444069,
      "node_id": 95042,
      "entry_id": 117639,
      "definition_id": 122651,
      "tree_type": "hero",
      "hero_tree": "Rider of the Apocalypse",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Rider of the Apocalypse",
        "subtree_id": 32,
        "node_id": 95042,
        "node_name": "Fury of the Horsemen / A Feast of Souls",
        "node_type": "choice",
        "pos_x": 7800,
        "pos_y": 6000,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95059
        ],
        "next": [
          95041
        ],
        "entry_id": 117639,
        "definition_id": 122651,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Fury of the Horsemen",
        "spell_id": 444069,
        "icon": "inv_plate_raiddeathknightmythic_o_01helm"
      },
      "pve_tooltip": "Every 50 Runic Power you spend extends the duration of the Horsemen's aid in combat by 1 sec, up to 5 sec.",
      "pvp_tooltip": "Every 50 Runic Power you spend extends the duration of the Horsemen's aid in combat by 1 sec, up to 5 sec.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    },
    {
      "talent_name": "A Feast of Souls",
      "spell_id": 444072,
      "node_id": 95042,
      "entry_id": 123411,
      "definition_id": 128249,
      "tree_type": "hero",
      "hero_tree": "Rider of the Apocalypse",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Rider of the Apocalypse",
        "subtree_id": 32,
        "node_id": 95042,
        "node_name": "Fury of the Horsemen / A Feast of Souls",
        "node_type": "choice",
        "pos_x": 7800,
        "pos_y": 6000,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95059
        ],
        "next": [
          95041
        ],
        "entry_id": 123411,
        "definition_id": 128249,
        "entry_index": 200,
        "entry_type": "passive",
        "talent_name": "A Feast of Souls",
        "spell_id": 444072,
        "icon": "inv_misc_supersoulash"
      },
      "pve_tooltip": "While you have 8 or more Horsemen aiding you, your Runic Power spending abilities deal 10% increased damage.",
      "pvp_tooltip": "While you have 8 or more Horsemen aiding you, your Runic Power spending abilities deal 10% increased damage.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    },
    {
      "talent_name": "Mawsworn Menace",
      "spell_id": 444099,
      "node_id": 95054,
      "entry_id": 117651,
      "definition_id": 122663,
      "tree_type": "hero",
      "hero_tree": "Rider of the Apocalypse",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Rider of the Apocalypse",
        "subtree_id": 32,
        "node_id": 95054,
        "node_name": "Mawsworn Menace",
        "node_type": "single",
        "pos_x": 8400,
        "pos_y": 6000,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95063
        ],
        "next": [
          95041
        ],
        "entry_id": 117651,
        "definition_id": 122663,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Mawsworn Menace",
        "spell_id": 444099,
        "icon": "inv_mawguardpet_black"
      },
      "pve_tooltip": "Obliterate deals 5% increased damage and your Remorseless Winter lasts 2 sec longer.",
      "pvp_tooltip": "Obliterate deals 5% increased damage and your Remorseless Winter lasts 2 sec longer.",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    },
    {
      "talent_name": "Unholy Armaments",
      "spell_id": 1265971,
      "node_id": 109739,
      "entry_id": 135997,
      "definition_id": 140752,
      "tree_type": "hero",
      "hero_tree": "Rider of the Apocalypse",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Rider of the Apocalypse",
        "subtree_id": 32,
        "node_id": 109739,
        "node_name": "Unholy Armaments",
        "node_type": "single",
        "pos_x": 9000,
        "pos_y": 6000,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          109740
        ],
        "next": [
          95041
        ],
        "entry_id": 135997,
        "definition_id": 140752,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Unholy Armaments",
        "spell_id": 1265971,
        "icon": "ability_deathknight_necroticstrike"
      },
      "pve_tooltip": "The abilities that Horsemen cast deal 5% increased damage..",
      "pvp_tooltip": "The abilities that Horsemen cast deal 5% increased damage..",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    },
    {
      "talent_name": "Apocalypse Now",
      "spell_id": 444040,
      "node_id": 95041,
      "entry_id": 117638,
      "definition_id": 122650,
      "tree_type": "hero",
      "hero_tree": "Rider of the Apocalypse",
      "tree_data": {
        "source": "raidbots",
        "wow_build": "12.1.0.69875",
        "generated_at": "2026-09-19T00:34:25.597Z",
        "content_hash": "66952e6398559450a2f421d56adbcda2",
        "class_name": "Death Knight",
        "class_id": 6,
        "spec_name": "Frost",
        "spec_id": 251,
        "trait_tree_id": 750,
        "tree_type": "hero",
        "hero_tree": "Rider of the Apocalypse",
        "subtree_id": 32,
        "node_id": 95041,
        "node_name": "Apocalypse Now",
        "node_type": "single",
        "pos_x": 8100,
        "pos_y": 6600,
        "max_ranks": 1,
        "entry_node": false,
        "free_node": false,
        "prev": [
          95042,
          95044,
          95054,
          109739
        ],
        "next": [],
        "entry_id": 117638,
        "definition_id": 122650,
        "entry_index": 100,
        "entry_type": "passive",
        "talent_name": "Apocalypse Now",
        "spell_id": 444040,
        "icon": "inv_ability_rideroftheapocalypsedeathknight_apocalypsenow"
      },
      "pve_tooltip": "Army of the Dead and Frostwyrm's Fury call upon all 4 Horsemen to aid you for 20 sec.\n(1s cooldown)",
      "pvp_tooltip": "Army of the Dead and Frostwyrm's Fury call upon all 4 Horsemen to aid you for 20 sec.\n(1s cooldown)",
      "tooltip_changed": false,
      "render_status": "UNCHANGED",
      "changes": [],
      "diagnostics": [],
      "has_pvp_mechanics": false,
      "mechanics": [],
      "render_effect_count": 0
    }
  ],
  "fetch_errors": [],
  "slug": "death-knight-frost",
  "generated_at": "2026-09-19T13:49:30.736847+00:00",
  "validation": {
    "talents": 121,
    "changed_tooltips": 16,
    "talents_with_pvp_mechanics": 39,
    "unique_nodes": 111,
    "tree_build": "12.1.0.69875",
    "simc_build": "12.1.0.69875",
    "drustvar_builds": [
      "12.1.0.69587"
    ],
    "verification_status": "PARTIAL",
    "fetch_error_count": 0,
    "unresolved_count": 1,
    "review_required_count": 3,
    "fetch_error_examples": [],
    "unresolved_examples": [
      {
        "spell_id": 441894,
        "talent_name": "Wither Away",
        "side": "drustvar",
        "reason": "UNMATCHED_DRUSTVAR_EFFECT",
        "multiplier": 0.0,
        "effect_text": "Apply Aura (6) | Dummy (4)"
      }
    ],
    "review_required_examples": [
      {
        "talent_name": "Frozen Dominion",
        "spell_id": 377226,
        "status": "REVIEW_REQUIRED"
      },
      {
        "talent_name": "Bonegrinder",
        "spell_id": 377098,
        "status": "REVIEW_REQUIRED"
      },
      {
        "talent_name": "Death Charge",
        "spell_id": 444010,
        "status": "REVIEW_REQUIRED"
      }
    ]
  }
};
