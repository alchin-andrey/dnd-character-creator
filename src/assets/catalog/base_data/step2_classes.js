import spells from "./list_spells.js";
import lang from "./list_languages.js";
import weaponry from "./kinds_weapons.js";
import tool from "./kinds_tools.js";
import armory from "./kinds_armor.js";
import weapons from "./list_weapons.js";
import armors from "./list_armor.js";
import MY from "@/assets/catalog/MY.js";
import packs from "./list_packs.js";
import items from "./list_items.js";

const barbarian_rage =              [0, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 99];
export const barbarian_rage_bonus = [0, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4];

export default {

  rogue: {
    name: "rogue",
    details: "rogue_details",

    hp_dice: 8,

    proficiencies: {
      armor: [armory.light],
      weapons: [weaponry.simple, weaponry.short_swords, weaponry.long_swords, weaponry.rapires, weaponry.hand_arbalets],
      tools: [tool.thief],
      languages: [lang.thieves],
    },

    saving: ["dexterity", "intelligence"],
    stats_base: 
      [
        "dexterity",
        "charisma",
        "wisdom",
        "constitution",
        "strength",
        "intelligence"
      ],
    spell_attribute: "intelligence",

    equipment: [
      {
        level: 1,
        armor: [
          [armors.leather,1],
        ],
        weapon: [
          [weapons.dagger, 2],
        ],
        inventory: [
          [packs.thieves,1],
        ],
      },
    ],

    fines: [
      {
        level: 7,
        type: "plus",
        keyword: "fine_dodge",
        details: "from_aoe_effects",
      },
      {
        level: 11,
        type: "advantage",
        keyword: "min_10",
        details: "on_dice_mastery_skill",
      },
      {
        level: 14,
        type: "plus",
        keyword: "always_hear",
        details: "invisible_creatures_10f",
      },
      {
        level: 18,
        type: "plus",
        keyword: "no_advantage",
        details: "on_attacks_on_you",
      },
      {
        level: 20,
        type: "advantage",
        keyword: "min_20",
        details: "on_dice_d20",
      },
    ],

    stats: [
      {
        level: 15,
        //wisdom.save: "mastery", - подключить MY?
      },
    ],

    spells: [
      {
        level:1,
        spell: spells.sneaky_attack,
      },
      {
        level:2,
        spell: spells.cunning_action,
      },
      {
        level:3,
        spell: spells.steady_aim,
      },
      {
        level:5,
        spell: spells.uncanny_dodge,
      },
    ],

    settings: {

      skills: [
        {
          level: 1,
          skills: [
            4,
            "mastery",

            "acrobatics",
            "investigation",
            "athletics",
            "perception",
            "performance",
            "intimidation",
            "sleight_of_hand",
            "deception",
            "insight",
            "stealth",
            "persuasion"
          ],
        },
      ],

      equipment: [
        {
          level: 3,
          weapon: [
            [weapons.rapier, 1],
            [weapons.shortsword, 1],
          ],
        },
        {
          level: 3,
          inventory: [
            [packs.burglars,1],
            [packs.dungeoneers,1],
            [packs.explorers,1],
          ],
        }
      ],

      custom: [
        {
          level: 1,
          select: 2,
          name: "skills",
          list: [
            {
              name: "",
              fines: [
                {
                  type: "plus",
                  keyword: "proficiency_bonus",
                  details: "on_thieves_tools",
                },
              ]
            },
            {
              name: "",
              skills: [
                {
                  acrobatics: "mastery",
                }
              ]
            },  
            {
              name: "",
              skills: [
                {
                  investigation: "mastery",
                }
              ]
            },  
            {
              name: "",
              skills: [
                {
                  athletics: "mastery",
                }
              ]
            }, 
            {
              name: "",
              skills: [
                {
                  perception: "mastery",
                }
              ]
            },  
            {
              name: "",
              skills: [
                {
                  performance: "mastery",
                }
              ]
            },   
            {
              name: "",
              skills: [
                {
                  intimidation: "mastery",
                }
              ]
            }, 
            {
              name: "",
              skills: [
                {
                  acrobatics: "sleight_of_hand",
                }
              ]
            },            
            {
              name: "",
              skills: [
                {
                  deception: "mastery",
                }
              ]
            },  
            {
              name: "",
              skills: [
                {
                  insight: "mastery",
                }
              ]
            },  
            {
              name: "",
              skills: [
                {
                  stealth: "mastery",
                }
              ]
            },  
            {
              name: "",
              skills: [
                {
                  persuasion: "mastery",
                }
              ]
            },  
          ]
        },
        {
          level: 3,
          name: "equipment",
          list: [
            {
              name: "ranged_fight",
              weapon: [
                [weapons.shortbow, 1],
              ],
              inventory: [
                [items.quiver,1],
                [items.arrow,20]
              ],
            },
            {
              name: "melee_fight",
              weapon: [
                [weapons.shortsword, 1],
              ],
            },            
          ]
        },
        {
          level: 6,
          select: 2,
          name: "skills",
          list: [
            {
              name: "",
              fines: [
                {
                  type: "plus",
                  keyword: "proficiency_bonus",
                  details: "on_thieves_tools",
                },
              ]
            },
            {
              name: "",
              skills: [
                {
                  acrobatics: "mastery",
                }
              ]
            },  
            {
              name: "",
              skills: [
                {
                  investigation: "mastery",
                }
              ]
            },  
            {
              name: "",
              skills: [
                {
                  athletics: "mastery",
                }
              ]
            }, 
            {
              name: "",
              skills: [
                {
                  perception: "mastery",
                }
              ]
            },  
            {
              name: "",
              skills: [
                {
                  performance: "mastery",
                }
              ]
            },   
            {
              name: "",
              skills: [
                {
                  intimidation: "mastery",
                }
              ]
            }, 
            {
              name: "",
              skills: [
                {
                  acrobatics: "sleight_of_hand",
                }
              ]
            },            
            {
              name: "",
              skills: [
                {
                  deception: "mastery",
                }
              ]
            },  
            {
              name: "",
              skills: [
                {
                  insight: "mastery",
                }
              ]
            },  
            {
              name: "",
              skills: [
                {
                  stealth: "mastery",
                }
              ]
            },  
            {
              name: "",
              skills: [
                {
                  persuasion: "mastery",
                }
              ]
            },  
          ]
        },
      ],

      subclasses: {
        thief: {
          name: "thief",
          details: "thief_details",

          spells: [
            {
              level: 3,
              spell: spells.fast_hands,
            }
          ],

          fines: [
            {
              level: 3,
              type: "plus",
              keyword: "climbing",
              details: "without_speed_fee",
            },
            {
              level: 3,
              type: "plus",
              keyword: "dex_bonus",
              details: "on_size_jumps",
            },
            {
              level: 9,
              type: "advantage",
              keyword: "advantage",
              details: "on_size_jumps",
            },
            {
              level: 13,
              type: "plus",
              keyword: "an_ability",
              details: "to_use_magic_items",
            },
            {
              level: 17,
              type: "plus",
              keyword: "bonus_move",
              details: "to_use_magic_items",
            },
          ],
        },
        assasin: {
          name: "assasin",
          details: "assasin_details",

          proficiencies: {
            tools: [tool.disguise, tool.poisoner],
          },

          fines: [
            {
              level: 3,
              type: "advantage",
              keyword: "advantage",
              details: "on_not_moved", 
            },
            {
              level: 3,
              type: "plus",
              keyword: "double_damage",
              details: "on_sudden_attack", 
            },
            {
              level: 17,
              type: "plus",
              keyword: "double_damage",
              details: "on_sudden_attack_extra", 
            },
          ],

          spells: [
            {
              level: 9,
              spell: spells.fake_identity,
            },
            {
              level: 13,
              spell: spells.fake_presence,
            }
          ]
        }      
      },

      feats: {
        // Cделать единым для всех
        // level 4, 8, 12, 16 и 19
      },   

    },
  },

  barbarian: {
    name: "barbarian",
    details: "barbarian_details",

    hp_dice: 12,
    // x: hp_dice/2 + 1;
    // hp_bonus: (x+con.mod)*lvl + hp_dice - x
    //regen: = lvl * hp_dice

    proficiencies: {
      armor: [armory.light, armory.medium, armory.shields],
      weapons: [weaponry.simple, weaponry.military], // all ?
    },

    saving: ["strength", "constitution"],
    stats_base: 
      [
        "strength", // 15
        "constitution", // 14
        "dexterity", // 13
        "charisma", // 12
        "wisdom", // 10
        "intelligence" // 8
      ],
    spell_attribute: "strength",

    fines: [
      {
        level: 1,
        type: "resistance",
        keyword: "no_armor_protection",
        details: "armor_constitution",
        
        // when without heavy armor
        condition: "if_no_heavy_armor",
        key: "armor_bonus",
        value: "this.$root.MY.stats.constitution.mod",
      },
      {
        level: 2,
        type: "advantage",
        keyword: "advantage",
        details: "saving_dex_visible",
      },
      {
        level: 5,

        // when without heavy armor
        condition: "if_no_heavy_armor",
        key: "speed_bonus",
        value: "10",
      },
      {
        level: 7,
        type: "advantage",
        keyword: "advantage",
        details: "on_initiative",
      },
      {
        level: 7,
        type: "plus",
        keyword: "extra_movement",
        details: "rage_half_speed",
        // приписать к заклинанию Ярость?
      },
      {
        level: 9,
        type: "plus",
        keyword: "extra_dice_damage",
        details: "crit_hand_weapon",
      },
      {
        level: 11,
        type: "plus",
        keyword: "rage_persistence",
        details: "rage_persistence_details",
        // приписать к заклинанию Ярость?
      },
      {
        level: 13,
        type: "plus",
        keyword: "extra_dice_damage",
        details: "crit_hand_weapon",
      },
      {
        level: 15,
        type: "plus",
        keyword: "rage_sustainability",
        details: "only_if_uncontious",
        // убрать из заклинания Ярость?
      },
      {
        level: 17,
        type: "plus",
        keyword: "extra_dice_damage",
        details: "crit_hand_weapon",
      },
      {
        level: 18,
        type: "plus",
        keyword: "saving_strength",
        details: "min_base_strength",
      },
    ],

    stats: [ 
      {
        level: 20,

        strength_max: 24,
        strength: 4,

        constitution_max: 24, 
        constitution: 4,
      }
    ], 

    spells: [
      {
        level: 1,
        spell: spells.rage,
        charges: barbarian_rage[MY.level] // Проверить привязку к уровню
      },
      {
        level: 2,
        spell: spells.reckless_attack,
      },
    ],

    equipment: [
      {
        level: 1,
        weapon: [
          [weapons.javelin, 4],
        ],
        inventory: [
          [packs.explorers,1], // нужно как-то распаковьівать 😅
        ],
      },
    ],

    settings: {
      skills: [
        {
          level: 1,
          skills: [
            2,
            "mastery",

            "athletics",
            "insight",
            "survival",
            "intimidation",
            "nature",
            "animal_hanging",
          ],
        },
        {
          level: 3,
          skills: [
            1,
            "mastery",

            "athletics",
            "insight",
            "survival",
            "intimidation",
            "nature",
            "animal_hanging",
          ],
        },
        {
          level: 10,
          skills: [
            1,
            "mastery",

            "athletics",
            "insight",
            "survival",
            "intimidation",
            "nature",
            "animal_hanging",
          ],
        },
      ],

      feats: {
        // Cделать единым для всех
        // level 4, 8, 12, 16 и 19
      },

      equipment: [
        {
          level: 1,
          weapon: [
            [weapons.greataxe, 1],
            [weapons.halberd, 1],
            [weapons.war_pick, 1],
            [weapons.warhammer, 1],
            [weapons.battleaxe, 1],
            [weapons.glaive, 1],
            [weapons.greatsword, 1],
            [weapons.lance, 1],
            [weapons.longsword, 1],
            [weapons.whip, 1],
            [weapons.shortsword, 1],
            [weapons.maul, 1],
            [weapons.morningstar, 1],
            [weapons.pike, 1],
            [weapons.rapier, 1],
            [weapons.scimitar, 1],
            [weapons.trident, 1],
            [weapons.flail, 1],
          ],
        },

        {
          level: 1,
          weapon: [
            [weapons.handaxe, 2],
            [weapons.quarterstaff, 1],
            [weapons.mace, 1],
            [weapons.club, 1],
            [weapons.dagger, 1],
            [weapons.spear, 1],
            [weapons.light_hammer, 1],
            [weapons.javelin, 1],
            [weapons.greatclub, 1],
            [weapons.sickle, 1],
          ],
        },
      ],

      subclasses: {
        berserker: {
          name: "berserker",
          details: "berserker_details",

          spells:[
            {
              level: 3,
              spell: spells.frenzy,
            },
            {
              level: 10,
              spell: spells.intimidating_presence,
            },
            {
              level: 14,
              spell: spells.retaliation,
            }
          ],

          fines: [
            {
              level: 6,
              type: "resistance",
              keyword: "immunity",
              details: "charmed_while_raging",
            },
            {
              level: 6,
              type: "resistance",
              keyword: "immunity",
              details: "frightened_while_raging",
            },
          ]

        },

        totem_warrior: {
          name: "totem_warrior",
          details: "totem_warrior_details",

          equipment: [
            {
              level: 3,
              inventory: [
                [items.totem,1],
              ],
            },
          ],

          spells: [
            {
              level: 3,
              spell: spells.beast_sense_ritual,
            },
            {
              level: 3,
              spell: spells.speak_with_animals_ritual,
            },
            {
              level: 10,
              spell: spells.commune_with_nature_ritual,
            }
          ],

          settings: {
            custom: [
              {
                level: 3,
                name: "totem_spirit",
                delails: "totem_spirit_details",
                list: [
                  {
                    name: "wolf",
                    fines: [
                      {
                        type: "advantage",
                        keyword: "advantage",
                        details: "near_friends_attack_in_rage",
                      },
                    ]
                  },
                  {
                    name: "bear",
                    fines: [
                      {
                        type: "resistance",
                        keyword: "resistance",
                        details: "any_damage_but_psy",
                      }
                    ]
                  },
                  {
                    name: "eagle",
                    fines: [
                      {
                        type: "advantage",
                        keyword: "advantage",
                        details: "on_dodging_in_rage",

                        condition: "if_no_heavy_armor",
                      },
                      {
                        type: "plus",
                        keyword: "rush",
                        details: "as_bonus_action",

                        condition: "if_no_heavy_armor",
                      }
                    ]
                  },
                  {
                    name: "elk",
                    fines: [
                      {
                        // when without heavy armor
                        condition: "if_no_heavy_armor",
                        key: "speed_bonus",
                        value: "15",
                      }
                    ]
                  },
                  {
                    name: "tiger",
                    fines: [
                      {
                        type: "plus",
                        keyword: "long_jumps",
                        details: "in_rage",
                      }
                    ]
                  }
                ]
              },
              {
                level: 6,
                name: "totem_aspect",
                delails: "totem_aspect_details",
                list: [
                  {
                    name: "wolf",
                    fines: [
                      {
                        type: "plus",
                        keyword: "fast_tempo",
                        details: "while_following_prints",
                      },
                      {
                        type: "plus",
                        keyword: "normal_tempo",
                        details: "in_stealth",
                      }
                    ]
                  },
                  {
                    name: "bear",
                    fines: [
                      {
                        type: "plus",
                        keyword: "double_weight",
                        details: "weight_capacity_details",
                      },
                      {
                        type: "advantage",
                        keyword: "advantage",
                        details: "str_check_on_move",
                      }
                    ]
                  },
                  {
                    name: "eagle",
                    fines: [
                      {
                        type: "plus",
                        keyword: "to_see",
                        details: "one_mile_100f_details",
                      },
                      {
                        type: "advantage",
                        keyword: "no_disadvantage",
                        details: "on_perception_in_lowlight",
                      }
                    ]
                  },
                  {
                    name: "elk",
                    fines: [
                      {
                        type: "plus",
                        keyword: "double_speed",
                        details: "travel_elk",
                        key: "speed_bonus_x",
                        value: 2,
                      }
                    ]
                  },
                  {
                    name: "tiger",
                    settings: {
                      skills: [
                        {
                          skills: [
                            1,
                            "mastery",
                
                            "athletics",
                            "acrobatics",
                            "stealth",
                            "survival"
                          ],
                        },
                      ],
                    }
                  }
                ]
              },
              {
                level: 14,
                name: "totem_harmony",
                delails: "totem_aspect_details",
                list: [
                  {
                    name: "wolf",
                    spells: [
                      {
                        spell: spells.wolf_knock,
                      }
                    ],
                  },
                  {
                    name: "bear",
                    fines: [
                      {
                        type: "advantage",
                        keyword: "advantage",
                        details: "on_dodging_in_rage_bear",
                      }
                    ]
                  },
                  {
                    name: "eagle",
                    fines: [
                      {
                        type: "plus",
                        keyword: "flight",
                        details: "as_walking_speed_in_rage",
                      }
                    ],
                  },
                  {
                    name: "elk",
                    spells: [
                      {
                        spell: spells.elk_knock,
                      }
                    ]
                  },
                  {
                    name: "tiger",
                    spells: [
                      {
                        spell: spells.tiger_strike,
                      }
                    ]
                  }
                ]
              }
            ]
          }
        },
      },
    },
  },

  paladin: {
    name: "paladin",
    details: "paladin_details",

    hp_dice: 10,
    // x: hp_dice/2 + 1;
    // hp_bonus: (x+con.mod)*lvl + hp_dice - x
    //lvl1 = (6+con)*1 + (10-6), lvl2 = (6+con)*2 + (10-6), lvl3 = (6+con)*3 + (10-6), 
    //regen: = lvl * hp_dice

    proficiencies: {
      armor: [armory.light, armory.medium, armory.heavy, armory.shields],
      weapons: [weaponry.simple, weaponry.military], // all ?
    },

    saving: ["wisdom", "charisma"],
    stats_base: 
      [
        "strength", // 15
        "charisma", // 14
        "constitution", // 13
        "wisdom", // 12
        "dexterity", // 10
        "intelligence" // 8
      ],
    spell_attribute: "charisma",

    equipment: [
      {
        level: 1,
        armor: [
          [armors.chainmail, 1]
        ],
        inventory: [
          [items.holy_symbol,1], // нужно как-то распаковьівать 😅
        ],
      },
    ],

    fines: [
      {
        level: 3,
        type: "plus",
        keyword: "immunity",
        details: "on_sick",
      }
    ],

    spells: [
      {
        level: 1,
        spell: spells.divine_sense,
        charges: 1+MY.stats.charisma.mod, // Проверить привязку к уровню
      },
      {
        level: 2,
        spell: spells.paladin_divine_smite,
      },
    ],

    stats: [
      {
        level:2,
        mama_1: 2,
        spell_stock: MY.stats.charisma.mod+MY.level/2,
        //вы выбираете число заклинаний паладина из списка заклинаний паладина, равное модификатору Харизмы + половина уровня паладина, округляя в меньшую сторону (минимум одно заклинание).
      }
    ],

    settings: 
    {
      skills: [
        {
          level: 1,
          skills: [
            2,
            "mastery",

            "athletics",
            "insight",
            "intimidation",
            "medicine",
            "religion",
            "persuasion"
          ],
        },
      ],

      feats: {
        // Cделать единым для всех
        // level 4, 8, 12, 16 и 19
      },

      equipment: [
        {
          level: 1,
          select: 2,
          weapon: [
            [armors.shield, 1]
            [weapons.greataxe, 1],
            [weapons.halberd, 1],
            [weapons.war_pick, 1],
            [weapons.warhammer, 1],
            [weapons.battleaxe, 1],
            [weapons.glaive, 1],
            [weapons.greatsword, 1],
            [weapons.lance, 1],
            [weapons.longsword, 1],
            [weapons.whip, 1],
            [weapons.shortsword, 1],
            [weapons.maul, 1],
            [weapons.morningstar, 1],
            [weapons.pike, 1],
            [weapons.rapier, 1],
            [weapons.scimitar, 1],
            [weapons.trident, 1],
            [weapons.flail, 1],
          ],
        },
        {
          level: 1,
          weapon: [
            [weapons.javelin, 5],
            [weapons.quarterstaff, 1],
            [weapons.mace, 1],
            [weapons.club, 1],
            [weapons.dagger, 1],
            [weapons.spear, 1],
            [weapons.light_hammer, 1],
            [weapons.greatclub, 1],
            [weapons.handaxe, 1],
            [weapons.sickle, 1],
          ],
        },
        {
          level: 1,
          inventory: [
            [packs.priests,1],
            [packs.explorers,1],
          ],
        }
      ],

      custom: [ // боевой стиль
        {
          level: 2,
          select: 1,
          name: "battle_style",
          list: [
            {
              name: "style_dueling",
              fines: [
                {
                  type: "plus",
                  keyword: "bonus",
                  details: "on_attack_signle_one_handed",
                },
              ]
            },
            {
              name: "style_protection",
              spells: [
                {
                  spell: spells.side_pary,
                },
              ]
            },
            {
              name: "style_defence",
              fines: [
                {
                  type: "plus",
                  keyword: "bonus",
                  details: "on_armor_if_armor",
                  
                  // when without heavy armor
                  condition: "if_armor",
                  key: "armor_bonus",
                  value: 1,
                },
              ]
            },
            {
              name: "style_great_weapon",
              fines: [
                {
                  type: "advantage",
                  keyword: "rethrow",
                  details: "if_1_or_2_on_two_handed_weapon",
                },
              ]
            },
          ]
        },
      ],

      spells: [
        {
          select: 33 //spell_stock,
        }
      ],

      subclasses: {
        oath_of_devotion: {
          name: "oath_of_devotion",
          details: "oath_of_devotion_details",
          spells: [
            {
              level: 3,
              spell: spells.divine_channel_devotion_1,
            },
            {
              level: 3,
              spell: spells.divine_channel_devotion_2,
            },
            {
              level: 3,
              spell: spells.divine_channel_mana,
            },
            {
              level:3,
              spell: spells.protection_from_evil_and_good
            },
            {
              level:3,
              spell: spells.sanctuary
            },
          ]
        },
        oath_of_antients: {
          name: "oath_of_antients",
          details: "oath_of_antients_details",
          spells: [
            {
              level: 3,
              spell: spells.divine_channel_antients_1,
              charges: 1,
            },
            {
              level: 3,
              spell: spells.divine_channel_antients_2,
              charges: 1,
            },
            {
              level: 3,
              spell: spells.divine_channel_mana,
            },
            {
              level:3,
              spell: spells.ensnaring_strike
            },
            {
              level:3,
              spell: spells.speak_with_animals
            },
          ]
        },
        oath_of_vengence: {
          name: "oath_of_vengence",
          details: "oath_of_vengence_details",
          spells: [
            {
              level: 3,
              spell: spells.divine_channel_vengence_1,
              charges: 1,
            },
            {
              level: 3,
              spell: spells.divine_channel_vengence_2,
              charges: 1,
            },
            {
              level: 3,
              spell: spells.divine_channel_mana,
            },
            {
              level:3,
              spell: spells.hunters_mark,
            },
            {
              level:3,
              spell: spells.bane,
            },
          ]
        },
      }
    }

  },

  bard: {
    name: "bard",
    details: "bard_details",

    hp_dice: 8,
    // x: hp_dice/2 + 1;
    // hp_bonus: (x+con.mod)*lvl + hp_dice - x
    //regen: = lvl * hp_dice

    proficiencies: {
      armor: [armory.light],
      weapons: [weaponry.simple, weaponry.short_swords, weaponry.long_swords, weaponry.rapires, weaponry.hand_arbalets],
      tools: [], // ‼️ Три музыкальных инструмента на ваш выбор
    },

    saving: ["dexterity", "charisma"],
    stats_base: 
      [
        "charisma",
        "dexterity",
        "constitution",
        "wisdom",
        "intelligence",
        "strength",
      ],
    spell_attribute: "charisma",

    settings: {
      skills: [
        {
          level: 1,
          skills: [
            3,
            "mastery",

            "performance",
            "athletics",
            "acrobatics",
            "sleight_of_hand",
            "stealth",
            "arcana",
            "history",
            "investigation",
            "nature",
            "religion",
            "animal_hanging",
            "insight",
            "medicine",
            "perception",
            "survival",
            "deception",
            "intimidation",
            "persuasion"
          ],
        },
      ],
    }
  }

}