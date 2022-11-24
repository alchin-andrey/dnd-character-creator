import color from "./_colors.js";
import spells from "./list_spells.js";
import gender from "./list_genders.js";
import lang from "./list_languages.js";
import weaponry from "./kinds_weapons.js";
import tool from "./kinds_tools.js";
import armory from "./kinds_armor.js";

export default {
  gnome: {
    name: "gnome",
    details: "gnome_details",

    noimg_ethnos: true,
    ethnos_preview: [300,-24],

    settings: {
      ethnos: {
        rock: {
          name: "rock",
          details: "rock_gnome_details",

          //link_male
          //link_female

          color: {
            skin: [color[2][1], color[2][2], color[2][3], color[2][4]],
            eyes: [
              color[7][4],
              color[0][1],
              color[2][0],
              color[2][1],
              color[3][0],
              color[3][1],
              color[4][0],
              color[4][1],
              color[5][0],
              color[5][1],
              color[6][0],
              color[6][1],
              color[7][0],
              color[7][1],
            ],
            hair: [color[2][3], color[2][2]],
          },

          stats: { constitution: 1 },
          qualities: { vision_night: 60 },

          fines: [
            {
              type: "plus",
              keyword: "proficiency_bonus",
              details: "history_check_rock_gnome",
            },
          ],

          spells: [
            // ДЛЯ ОТЛАДКИ ------

            // По левелу перса
            // {
            //   level: 1,
            //   spell: spells.sneaky_attack,
            // },

            // {
            //   level: 1,
            //   spell: spells.lay_on_hands,
            // },

            // {
            //   level: 1,
            //   spell: spells.chill_touch,
            // },

            // {
            //   level: 1,
            //   spell: spells.poison_breath_cone,
            // },

            // // По классовой бабуйне

            // {
            //   level: 1,
            //   spell: spells.rage,
            // },

            // // String (первая часть, которая чаще всего с "×")

            // {
            //   level: 1,
            //   spell: spells.acid_splash,
            // },

            // {
            //   level: 1,
            //   spell: spells.eldritch_blast,
            // },

            // {
            //   level: 1,
            //   spell: spells.bless,
            // },

            // {
            //   level: 1,
            //   spell: spells.cordon_of_arrows,
            // },

            // {
            //   level: 1,
            //   spell: spells.heroism,
            // },

            // {
            //   level: 1,
            //   spell: spells.create_or_destroy_water,
            // },

            // //Num

            // {
            //   level: 1,
            //   spell: spells.flame_blade,
            // },

            // {
            //   level: 1,
            //   spell: spells.hellish_rebuke,
            // },

            // {
            //   level: 1,
            //   spell: spells.color_spray,
            // },

            // {
            //   level: 1,
            //   spell: spells.aid,
            // },

            // {
            //   level: 1,
            //   spell: spells.prayer_of_healing,
            // },

            // {
            //   level: 1,
            //   spell: spells.gust_of_wind,
            // },

            // //Pls

            // {
            //   level: 1,
            //   spell: spells.armor_of_agathys,
            // },

            // {
            //   level: 1,
            //   spell: spells.elk_knock,
            // },

            // {
            //   level: 1,
            //   spell: spells.divine_channel_devotion_1,
            // },

            // //Скобочки

            // {
            //   level: 1,
            //   spell: spells.hunters_mark, //spell_duration
            // },

            // {
            //   level: 1,
            //   spell: spells.hex, //spell_duration
            // },

            // {
            //   level: 1,
            //   spell: spells.fog_cloud, //aoe_size
            // },

            // {
            //   level: 1,
            //   spell: spells.animal_messenger, //spell_duration
            // },



            // ------------------

            //АКТУАЛЬНІ! Разкомментировать после отладки
            {
              level: 1,
              spell: spells.toy,
            },
            {
              level: 1,
              spell: spells.lighter,
            },

            {
              level: 1,
              spell: spells.music_box,
            },
          ],
        },

        forest: {
          name: "forest",
          details: "forest_gnome_details",
          // link_male: "https://www.heroforge.com/load_config%3D503211188",
          // link_female: "https://www.heroforge.com/load_config%3D503211452",

          color: {
            skin: [color[2][2]],
            eyes: [color[8][2]],
            hair: [color[2][5]],
          },

          stats: { dexterity: 1 },
          qualities: { vision_night: 60 },

          proficiencies: {
            languages: [lang.animal],
          },

          spells: [
            {
              level: 1,
              spell: spells.small_illusion,
            },
          ],
        },

        deep: {
          name: "deep",
          details: "deep_gnome_details",
          // link_male: "https://www.heroforge.com/load_config%3D503210924",
          // link_female: "https://www.heroforge.com/load_config%3D503211388",

          color: {
            skin: [color[0][3], color[0][4], color[0][5], color[0][6]],
            eyes: [color[7][2], color[7][3], color[7][4], color[7][5]],
            hair: [color[8][1]],
          },

          age: {
            min: 10,
            young: 18,
            mature: 25,
            old: 200,
            max: 250,
          },

          weight: {
            min: 36,
            max: 54,
          },

          stats: { dexterity: 1 },
          qualities: { vision_night: 120 },

          proficiencies: {
            languages: [lang.undercommon],
          },

          fines: [
            {
              type: "advantage",
              keyword: "advantage",
              details: "stealth_in_stones",
            },
          ],
        },

      },

      gender: gender,
      color: {
        skin: [
          color[2][1],
          color[2][2],
          color[2][3],
          color[2][4],
          color[0][3],
          color[0][4],
          color[0][5],
          color[0][6],
        ],
        eyes: [
          color[0][1],
          color[2][0],
          color[2][1],
          color[3][0],
          color[3][1],
          color[4][0],
          color[4][1],
          color[5][0],
          color[5][1],
          color[6][0],
          color[6][1],
          color[7][0],
          color[7][1],
          color[7][2],
          color[7][3],
          color[7][4],
          color[7][5],
          color[8][2],
        ],
        hair: [color[2][2], color[2][3], color[2][5], color[8][1]],
      },

      age: {
        min: 10,
        young: 18,
        mature: 40,
        old: 350,
        max: 500,
      },

      height: {
        min: 90,
        max: 120,
      },

      size:"size_small",

      weight: {
        min: 15,
        max: 20,
      },
      // ДЛЯ ОТЛАДКИ
    //   custom: {
    //     stats: [2, 1],
    //     skills: [2, "Skill_Mastery"],
    //     languages: [1],
    // },

      // custom_stats: [2, 1],
      // custom_skills: [2, "Skill_Mastery"],
      // custom_languages: [1],
      // ДЛЯ ОТЛАДКИ
    },

    stats: { intelligence: 2 },

    qualities: { speed: 25 },

    proficiencies: {
      languages: [lang.common, lang.gnome],
    },

    fines: [
      {
        type: "advantage",
        keyword: "advantage",
        details: "magic_against_int_wis_cha",
      },
    ],
  },

  halfling: {
    name: "halfling",
    details: "halfling_details",

    noimg_ethnos: true,
    ethnos_preview: [300,-24],

    settings: {
      ethnos: {

        lightfoot: {
          name: "lightfoot",
          details: "lightfoot_halfling_details",

          link_male: "https://www.heroforge.com/load_config%3D503210924",
          link_female: "https://www.heroforge.com/load_config%3D503211388",

          color: {
            skin: [color[2][1]],
            eyes: [color[2][5]],
            hair: [color[0][6]],
          },

          stats: { charisma: 1 },

          fines: [
            {
              type: "plus",
              keyword: "stealth",
              details: "behind_bigger_than_mid",
            },
          ],
        },

        stout: {
          name: "stout",
          details: "stout_halfling_details",

          link_male: "https://www.heroforge.com/load_config%3D503185616",
          link_female: "https://www.heroforge.com/load_config%3D503211377",

          color: {
            skin: [color[2][0]],
            eyes: [color[4][5]],
            hair: [color[1][4]],
          },

          stats: { constitution: 1 },

          fines: [
            {
              type: "advantage",
              keyword: "advantage",
              details: "poison_against",
            },

            {
              type: "resistance",
              keyword: "resistance",
              details: "poison_damage",
            },
          ],
        },

        ghost: {
          name: "ghost",
          details: "ghost_halfling_details",
          link_male: "https://www.heroforge.com/load_config%3D503211188",
          link_female: "https://www.heroforge.com/load_config%3D503211452",

          color: {
            skin: [color[2][2]],
            eyes: [color[8][2]],
            hair: [color[2][5]],
          },

          stats: { wisdom: 1 },

          fines: [
            {
              type: "plus",
              keyword: "telepathy",
              details: "known_languages",
            },
          ],

          rare: "rare",
        },
      },

      gender: gender,
      color: {
        skin: [
          color[1][0],
          color[2][0],
          color[2][1],
          color[2][2],
          color[2][3],
          color[2][4],
          color[2][5],
          color[2][6],
          color[1][6],
          color[0][6],
          color[3][0],
          color[12][0],
          color[11][0],
          color[10][0],
        ],
        eyes: [color[2][4], color[2][6]],
        hair: [color[2][4], color[2][6], color[1][5], color[1][6]],
      },

      age: {
        min: 10,
        young: 20,
        mature: 45,
        old: 100,
        max: 150,
      },

      height: {
        min: 90,
        max: 120,
      },

      size:"size_small",

      weight: {
        min: 15,
        max: 20,
      },

    },

    stats: { dexterity: 2 },

    qualities: { speed: 25 },

    proficiencies: {
      languages: [lang.common, lang.halfling],
    },

    fines: [
      {
        type: "advantage",
        keyword: "advantage",
        details: "fear_against",
      },

      {
        type: "plus",
        keyword: "rethrow",
        details: "any_dice_1",
      },

      {
        type: "plus",
        keyword: "slippage",
        details: "among_bigger_than_mid",
      },
    ],
  },

  dwarf: {
    name: "dwarf",
    details: "dwarf_details",

    noimg_ethnos: true,
    ethnos_preview: [345,-30],

    settings: {
      ethnos: {
        mountain: {
          name: "mountain",
          details: "mountain_dwarf_details",

          //link_male
          //link_female

          color: {
            skin: [
              color[1][0],
              color[1][1],
              color[2][0],
              color[2][1],
              color[2][2],
              color[3][0],
            ],
            eyes: [
              color[4][4],
              color[2][5],
              color[8][0],
              color[2][4],
              color[2][5],
            ],
            hair: [
              color[0][6],
              color[2][1],
              color[3][1],
              color[1][3],
              color[1][4],
              color[2][2],
              color[2][3],
              color[2][4],
              color[2][5],
            ],
          },

          stats: { strength: 2 },
          qualities: { vision_night: 60 },

          proficiencies: {
            armor: [armory.light, armory.medium],
          },
        },

        hill: {
          name: "hill",
          details: "hill_dwarf_details",
          // link_male: "https://www.heroforge.com/load_config%3D503211188",
          // link_female: "https://www.heroforge.com/load_config%3D503211452",

          color: {
            skin: [
              color[1][4],
              color[1][5],
              color[2][4],
              color[2][5],
              color[2][6],
              color[1][6],
              color[0][6],
            ],
            eyes: [color[2][4], color[2][5]],
            hair: [color[0][6], color[1][6], color[2][5], color[2][6]],
          },

          stats: { wisdom: 1 },
          qualities: { vision_night: 60 },

          hp_bonus: [1,1],

        },

        grey: {
          name: "grey",
          details: "grey_dwarf_details",
          // link_male: "https://www.heroforge.com/load_config%3D503210924",
          // link_female: "https://www.heroforge.com/load_config%3D503211388",

          color: {
            skin: [color[0][3], color[0][4], color[0][5]],
            eyes: [color[4][4], color[2][5], color[8][0]],
            hair: [
              color[2][1],
              color[3][1],
              color[1][3],
              color[1][4],
              color[2][2],
              color[2][3],
              color[2][4],
              color[2][5],
            ],
          },

          stats: { strength: 1 },
          qualities: { vision_night: 120 },

          proficiencies: {
            languages: [lang.undercommon],
          },

          fines: [
            {
              type: "disadvantage",
              keyword: "disadvantage",
              details: "perception_under_sun",
            },
            {
              type: "disadvantage",
              keyword: "disadvantage",
              details: "attack_under_sun",
            },
          ],

          spells: [
            {
              level: 3,
              spell: spells.enlargement_self,
            },
            {
              level: 5,
              spell: spells.invisibility_self,
            },
          ],
        },
      },

      gender: gender,

      color: {
        skin: [
          color[1][0],
          color[1][1],
          color[1][4],
          color[1][5],
          color[2][0],
          color[2][1],
          color[2][2],
          color[2][3],
          color[2][4],
          color[2][5],
          color[2][6],
          color[1][6],
          color[0][6],
          color[3][0],
        ],
        eyes: [color[2][4], color[2][5], color[4][4], color[8][0]],
        hair: [
          color[0][6],
          color[1][6],
          color[2][6],
          color[0][5],
          color[1][5],
          color[2][5],
          color[1][4],
          color[1][3],
        ],
      },

      age: {
        min: 10,
        young: 18,
        mature: 50,
        old: 350,
        max: 400,
      },

      height: {
        min: 120,
        max: 150,
      },

      size:"size_medium",

      weight: {
        min: 60,
        max: 90,
      },
    },

    stats: { constitution: 2 },

    qualities: { speed: 25 },

    proficiencies: {
      weapons: [
        weaponry.battle_axes,
        weaponry.hand_axes,
        weaponry.battle_hammers,
        weaponry.light_hammers,
      ],
      tools: [tool.blacksmith, tool.brewer, tool.mason],
      languages: [lang.common, lang.dwarf],
    },

    fines: [
      {
        type: "advantage",
        keyword: "advantage",
        details: "poison_against",
      },

      {
        type: "resistance",
        keyword: "resistance",
        details: "poison_damage",
      },

      {
        type: "plus",
        keyword: "proficiency_bonus",
        details: "stone_history",
      },
    ],
  },

  human: {
    name: "human",
    details: "human_details",

    noimg_ethnos: true,
    ethnos_preview: [390,-36],

    settings: {
      ethnos: {

        damarian: {
          color: {
            skin: [
              color[2][1],
              color[2][0],
              color[2][2],
              color[2][3],
              color[2][4],
            ],
            eyes: [color[2][5]],
            hair: [color[2][6]],
          },

          name: "damarian",
          details: "damarian_details",

          proficiencies: {
            languages: [lang.damarian],
          },
        },

        ffolk: {
          color: {
            skin: [color[2][1]],
            eyes: [color[7][3]],
            hair: [color[3][5]],
          },

          name: "ffolk",
          details: "ffolk_details",

          proficiencies: {
            languages: [lang.vaelan],
          },
        },

        halruanian: {
          color: {
            skin: [color[2][2]],
            eyes: [color[10][2], color[2][5], color[0][5], color[6][3]],
            hair: [color[3][2], color[2][5]],
          },

          name: "halruanian",
          details: "halruanian_details",

          proficiencies: {
            languages: [lang.halruanian],
          },
        },

        tetirian: {
          color: {
            skin: [color[2][2]],
            eyes: [color[8][3]],
            hair: [color[2][6]],
          },

          name: "tetirian",
          details: "tetirian_details",

          proficiencies: {
            languages: [lang.chondatanian],
          },
        },

        arkayun: {
          name: "arkayun",
          details: "arkayun_details",

          color: {
            skin: [color[2][2]],
            eyes: [color[0][5]],
            hair: [color[0][6]],
          },

          proficiencies: {
            languages: [lang.dambratan],
          },
        },

        nar: {
          color: {
            skin: [color[2][2]],
            eyes: [color[1][4]],
            hair: [color[0][6]],
          },

          name: "nar",
          details: "nar_details",

          proficiencies: {
            languages: [lang.damarian],
          },
        },

        shaarian: {
          color: {
            skin: [color[2][2]],
            eyes: [color[11][2]],
            hair: [color[2][5]],
          },

          name: "shaarian",
          details: "shaarian_details",

          proficiencies: {
            languages: [lang.shaarian],
          },
        },

        chondatan: {
          color: {
            skin: [color[2][2]],
            eyes: [color[6][3], color[2][5]],
            hair: [color[0][2], color[0][3], color[0][4], color[0][5]],
          },

          name: "chondatan",
          details: "chondatan_details",

          proficiencies: {
            languages: [lang.chondatanian],
          },
        },

        mulan: {
          color: {
            skin: [color[2][3]],
            eyes: [color[2][4]],
            hair: [color[1][6]],
          },

          name: "mulan",
          details: "mulan_details",

          proficiencies: {
            languages: [lang.chessent],
          },
        },

        kalishit: {
          color: {
            skin: [color[2][4]],
            eyes: [color[2][5]],
            hair: [color[2][6]],
          },

          name: "kalishit",
          details: "kalishit_details",

          proficiencies: {
            languages: [lang.alzhedo],
          },
        },

        rashemi: {
          color: {
            skin: [color[2][5]],
            eyes: [color[0][5]],
            hair: [color[0][6]],
          },

          name: "rashemi",
          details: "rashemi_details",

          proficiencies: {
            languages: [lang.rashemian],
          },
        },

        bedin: {
          color: {
            skin: [color[2][6]],
            eyes: [color[2][5]],
            hair: [color[0][6]],
          },

          name: "bedin",
          details: "bedin_details",

          proficiencies: {
            languages: [lang.midani],
          },
        },

        chult: {
          color: {
            skin: [color[1][6]],
            eyes: [color[3][3]],
            hair: [color[2][5]],
          },

          name: "chult",
          details: "chult_details",

          proficiencies: {
            languages: [lang.chult],
          },
        },

        terami: {
          color: {
            skin: [color[1][5]],
            eyes: [color[0][5]],
            hair: [color[0][6]],
          },

          name: "terami",
          details: "terami_details",

          proficiencies: {
            languages: [lang.teramian],
          },
        },

        tuigan: {
          color: {
            skin: [color[3][5]],
            eyes: [color[0][5]],
            hair: [color[0][5]],
          },

          name: "tuigan",
          details: "tuigan_details",

          proficiencies: {
            languages: [lang.tuiganian],
          },
        },

        shu: {
          color: {
            skin: [color[3][4]],
            eyes: [color[0][5]],
            hair: [color[0][6]],
          },

          name: "shu",
          details: "shu_details",

          proficiencies: {
            languages: [lang.shu],
          },
        },

        ulutiune: {
          color: {
            skin: [color[3][4]],
            eyes: [color[8][3]],
            hair: [color[0][6]],
          },

          name: "ulutiune",
          details: "ulutiune_details",

          proficiencies: {
            languages: [lang.uluik],
          },
        },

        gur: {
          color: {
            skin: [color[0][3]],
            eyes: [color[2][5]],
            hair: [color[1][6]],
          },

          name: "gur",
          details: "gur_details",

          proficiencies: {
            languages: [lang.guran],
          },
        },

        imaskari: {
          color: {
            skin: [color[9][0]],
            eyes: [color[0][2]],
            hair: [color[8][1]],
          },

          name: "imaskari",
          details: "imaskari_details",

          proficiencies: {
            languages: [lang.rushum],
          },
        },

        illuskian: {
          color: {
            skin: [color[2][0]],
            eyes: [color[7][3]],
            hair: [color[1][4], color[0][6], color[2][2]],
          },

          name: "illuskian",
          details: "illuskian_details",

          proficiencies: {
            languages: [lang.illuskian],
          },
        },
      },

      gender: gender,

      color: {
        skin: [
          color[1][0],
          color[2][0],
          color[2][1],
          color[2][2],
          color[2][3],
          color[2][4],
          color[2][5],
          color[2][6],
          color[1][6],
          color[0][6],
          color[3][0],
          color[12][0],
          color[11][0],
          color[10][0],
        ],
        eyes: [
          color[0][1],
          color[0][2],
          color[0][3],
          color[0][4],
          color[0][5],
          color[2][1],
          color[2][2],
          color[2][3],
          color[2][4],
          color[2][5],
          color[4][1],
          color[4][2],
          color[4][3],
          color[4][4],
          color[4][5],
          color[5][1],
          color[5][2],
          color[5][3],
          color[5][4],
          color[5][5],
          color[6][1],
          color[6][2],
          color[6][3],
          color[6][4],
          color[6][5],
          color[7][1],
          color[7][2],
          color[7][3],
          color[7][4],
          color[7][5],
          color[8][1],
          color[8][2],
          color[8][3],
          color[8][4],
          color[8][5],
          color[9][1],
          color[9][2],
          color[9][3],
          color[9][4],
          color[9][5],
        ],
        hair: [
          color[0][0],
          color[0][1],
          color[0][2],
          color[0][3],
          color[0][4],
          color[0][5],
          color[0][6],
          color[1][0],
          color[1][1],
          color[1][2],
          color[1][3],
          color[1][4],
          color[1][5],
          color[1][6],
          color[2][0],
          color[2][1],
          color[2][2],
          color[2][3],
          color[2][4],
          color[2][5],
          color[2][6],
          color[3][0],
          color[3][1],
          color[3][2],
          color[3][3],
        ],
      },

      age: {
        min: 10,
        young: 18,
        mature: 30,
        old: 60,
        max: 90,
      },

      height: {
        min: 150,
        max: 180,
      },

      size:"size_medium",

      weight: {
        min: 60,
        max: 90,
      },
    },

    stats: {
      strength: 1,
      dexterity: 1,
      constitution: 1,
      intelligence: 1,
      wisdom: 1,
      charisma: 1,
    },

    qualities: { speed: 30 },

    proficiencies: {
      languages: [lang.common],
    },
  },

  halfelf: {
    name: "halfelf",
    details: "halfelf_details",

    noimg_ethnos: true,
    ethnos_preview: [390,-36],

    settings: {
      ethnos: {
        common: {
          name: "common",
        },
      },

      gender: gender,

      color: {
        skin: [
          color[2][1],
          color[1][0],
          color[2][0],
          color[2][2],
          color[2][3],
          color[2][4],
          color[2][5],
          color[2][6],
          color[1][6],
          color[0][6],
          color[3][0],
          color[12][0],
          color[11][0],
          color[10][0],
        ],
        eyes: [
          color[3][4],
          color[0][1],
          color[0][2],
          color[0][3],
          color[0][4],
          color[0][5],
          color[2][1],
          color[2][2],
          color[2][3],
          color[2][4],
          color[2][5],
          color[3][1],
          color[3][2],
          color[3][3],
          color[3][5],
          color[4][1],
          color[4][2],
          color[4][3],
          color[4][4],
          color[4][5],
          color[5][1],
          color[5][2],
          color[5][3],
          color[5][4],
          color[5][5],
          color[6][1],
          color[6][2],
          color[6][3],
          color[6][4],
          color[6][5],
          color[7][1],
          color[7][2],
          color[7][3],
          color[7][4],
          color[7][5],
          color[8][1],
          color[8][2],
          color[8][3],
          color[8][4],
          color[8][5],
          color[9][1],
          color[9][2],
          color[9][3],
          color[9][4],
          color[9][5],
        ],
        hair: [
          color[2][5],
          color[0][0],
          color[0][1],
          color[0][2],
          color[0][3],
          color[0][4],
          color[0][5],
          color[0][6],
          color[1][0],
          color[1][1],
          color[1][2],
          color[1][3],
          color[1][4],
          color[1][5],
          color[1][6],
          color[2][0],
          color[2][1],
          color[2][2],
          color[2][3],
          color[2][4],
          color[2][6],
          color[3][0],
          color[3][1],
          color[3][2],
          color[3][3],
        ],
      },

      age: {
        min: 10,
        young: 20,
        mature: 45,
        old: 150,
        max: 180,
      },

      height: {
        min: 150,
        max: 180,
      },

      size:"size_medium",

      weight: {
        min: 60,
        max: 90,
      },

      custom_stats: [2, 1],
      custom_skills: [2, "mastery"],
      custom_languages: [1],
    },

    stats: { charisma: 2 },

    qualities: { speed: 30, vision_night: 60 },

    proficiencies: {
      languages: [lang.common, lang.elf],
    },

    fines: [
      {
        type: "advantage",
        keyword: "advantage",
        details: "charm_against",
      },
      {
        type: "resistance",
        keyword: "immunity",
        details: "magic_sleep_against",
      },
    ],
  },

  elf: {
    name: "elf",
    details: "elf_details",

    noimg_ethnos: true,
    ethnos_preview: [390,-36],

    settings: {
      ethnos: {

        high_elf: {
          name: "high_elf",
          details: "high_elf_details",

          color: {
            skin: [
              color[2][1],
            ],
            eyes: [
              color[3][4],
              color[8][0],
              color[0][5],
            ],
            hair: [
              color[3][2],
            ],
          },

          stats: {
            wisdom: 1,
          },
          qualities: {
            vision_night: 60,
          },

          proficiencies: {
            weapons: [
              weaponry.long_swords,
              weaponry.short_swords,
              weaponry.long_bows,
              weaponry.short_bows,
            ],
            languages: [],
          },

          fines: [
            {
              type: "plus",
              keyword: "knowledge",
              details: "any_cantrip_wizard",
            },
          ],

          custom_languages: [1],
          custom_spell: [1,0,"wizard"],
        },

        forest: {
          name: "forest",
          details: "forest_elf_details",

          color: {
            skin: [
              color[2][3],
              color[2][4],
              color[3][4],
            ],
            eyes: [
              color[5][3],
              color[2][4],
              color[2][5],
            ],
            hair: [
              color[0][6],
              color[2][6],
              color[2][5],
            ],
          },

          stats: {
            wisdom: 1,
          },
          qualities: {
            vision_night: 60,
          },

          proficiencies: {
            weapons: [
              weaponry.long_swords,
              weaponry.short_swords,
              weaponry.long_bows,
              weaponry.short_bows,
            ],
          },

          fines: [
            {
              type: "plus",
              keyword: "stealth_in_wild",
              details: "stealth_in_wild_details",
            },
          ],
        },

        dark: {
          name: "dark",
          details: "dark_elf_details",

          color: {
            skin: [
              color[0][5],
              color[0][4],
              color[0][6],
            ],
            eyes: [
              color[0][1],
              color[1][0],
              color[8][0],
              color[9][0],
              color[10][0],
              color[11][0],
              color[12][0],
            ],
            hair: [
              color[0][0],
              color[1][0],
              color[8][0],
              color[9][0],
              color[10][0],
              color[11][0],
              color[12][0],
            ],
          },

          stats: {
            charisma: 1,
          },
          qualities: {
            vision_night: 120,
          },

          proficiencies: {
            weapons: [
              weaponry.rapires,
              weaponry.short_swords,
              weaponry.hand_arbalets,
            ],
          },

          fines: [
            {
              type: "disadvantage",
              keyword: "disadvantage",
              details: "perception_under_sun",
            },
            {
              type: "disadvantage",
              keyword: "disadvantage",
              details: "attack_under_sun",
            },
          ],

          spells: [
            {
              level: 1,
              spell: spells.dancing_lights,
            },

            {
              level: 3,
              spell: spells.faerie_fire,
            },

            {
              level: 5,
              spell: spells.darkness_tiefling,
            },
          ],

          rare: "rare",

        },
      },

      gender: gender,

      color: {
        skin: [
          color[1][0],
          color[2][0],
          color[2][1],
          color[2][2],
          color[2][3],
          color[2][4],
          color[2][5],
          color[2][6],
          color[1][6],
          color[0][6],
          color[3][0],
          color[0][0],
          color[0][1],
          color[0][2],
          color[0][3],
          color[0][4],
          color[0][5],
          color[0][6],
          color[1][1],
          color[7][0],
          color[7][1],
          color[7][2],
          color[8][0],
          color[8][1],
          color[8][2],
          color[9][0],
          color[9][1],
          color[9][2],
          color[10][0],
          color[10][1],
          color[10][2],
          color[11][0],
          color[11][1],
          color[11][2],
          color[12][0],
          color[12][1],
          color[12][2],
        ],
        eyes: [
          color[0][1],
          color[0][2],
          color[0][3],
          color[0][4],
          color[0][5],
          color[2][1],
          color[2][2],
          color[2][3],
          color[2][4],
          color[2][5],
          color[3][1],
          color[3][2],
          color[3][3],
          color[3][4],
          color[3][5],
          color[4][1],
          color[4][2],
          color[4][3],
          color[4][4],
          color[4][5],
          color[5][1],
          color[5][2],
          color[5][3],
          color[5][4],
          color[5][5],
          color[6][1],
          color[6][2],
          color[6][3],
          color[6][4],
          color[6][5],
          color[7][1],
          color[7][2],
          color[7][3],
          color[7][4],
          color[7][5],
          color[8][1],
          color[8][2],
          color[8][3],
          color[8][4],
          color[8][5],
          color[9][1],
          color[9][2],
          color[9][3],
          color[9][4],
          color[9][5],
          color[10][1],
          color[10][2],
          color[10][3],
          color[10][4],
          color[10][5],
        ],
        hair: [
          color[0][0],
          color[0][1],
          color[0][2],
          color[0][3],
          color[0][4],
          color[0][5],
          color[0][6],
          color[1][0],
          color[1][1],
          color[1][2],
          color[1][3],
          color[1][4],
          color[1][5],
          color[1][6],
          color[2][0],
          color[2][1],
          color[2][2],
          color[2][3],
          color[2][4],
          color[2][5],
          color[2][6],
          color[3][0],
          color[3][1],
          color[3][2],
          color[3][3],
          color[4][0],
          color[4][1],
          color[4][2],
          color[4][3],
          color[4][4],
          color[4][5],
          color[4][6],
          color[5][0],
          color[5][1],
          color[5][2],
          color[5][3],
          color[5][4],
          color[5][5],
          color[5][6],
          color[7][0],
          color[7][1],
          color[7][2],
          color[7][3],
          color[7][4],
          color[7][5],
          color[7][6],
          color[8][0],
          color[8][1],
          color[8][2],
          color[8][3],
          color[8][4],
          color[8][5],
          color[8][6],
          color[9][0],
          color[9][1],
          color[9][2],
          color[9][3],
          color[9][4],
          color[9][5],
          color[9][6],
        ],
      },


      age: {
        min: 10,
        young: 18,
        mature: 100,
        old: 600,
        max: 750,
      },

      height: {
        min: 150,
        max: 180,
      },

      size:"size_medium",

      weight: {
        min: 45,
        max: 65,
      },
    },

    stats: {
      dexterity: 2,
    },

    qualities: {
      speed: 30,
    },

    skills: {
      perception: "mastery",
    },

    proficiencies: {
      languages: [lang.common, lang.elf],
    },

    fines: [
      {
        type: "advantage",
        keyword: "advantage",
        details: "charm_against",
      },
      {
        type: "resistance",
        keyword: "immunity",
        details: "magic_sleep_against",
      },
      {
        type: "plus",
        keyword: "trans",
        details: "trans_details",
      },
    ],
  },

  tiefling: {
    name: "tiefling",
    details: "tiefling_details",

    noimg_ethnos: true,
    ethnos_preview: [390,-36],

    settings: {
      ethnos: {
        common: {
          name: "common",
        },
      },

      gender: gender,

      color: {
        skin: [
          color[1][1],
          color[0][0],
          color[0][1],
          color[0][2],
          color[0][3],
          color[0][4],
          color[0][5],
          color[0][6],
          color[1][0],
          color[1][2],
          color[1][3],
          color[1][4],
          color[1][5],
          color[1][6],
          color[2][0],
          color[2][1],
          color[2][2],
          color[2][3],
          color[2][4],
          color[2][5],
          color[2][6],
          color[3][0],
          color[7][0],
          color[7][1],
          color[7][2],
          color[8][0],
          color[8][1],
          color[8][2],
          color[9][0],
          color[9][1],
          color[9][2],
          color[10][0],
          color[10][1],
          color[10][2],
          color[11][0],
          color[11][1],
          color[11][2],
          color[12][0],
          color[12][1],
          color[12][2],
        ],
        eyes: [
          color[9][1],
          color[0][0],
          color[0][6],
          color[1][3],
          color[8][0],
          color[3][3],
          color[7][3],
          color[11][3],
          color[12][3],
        ],
        hair: [
          color[9][5],
          color[0][0],
          color[0][1],
          color[0][2],
          color[0][3],
          color[0][4],
          color[0][5],
          color[0][6],
          color[1][0],
          color[1][1],
          color[1][2],
          color[1][3],
          color[1][4],
          color[1][5],
          color[1][6],
          color[2][0],
          color[2][1],
          color[2][2],
          color[2][3],
          color[2][4],
          color[2][5],
          color[2][6],
          color[3][0],
          color[3][1],
          color[3][2],
          color[3][3],
          color[4][0],
          color[4][1],
          color[4][2],
          color[4][3],
          color[4][4],
          color[4][5],
          color[4][6],
          color[5][0],
          color[5][1],
          color[5][2],
          color[5][3],
          color[5][4],
          color[5][5],
          color[5][6],

          color[7][0],
          color[7][1],
          color[7][2],
          color[7][3],
          color[7][4],
          color[7][5],
          color[7][6],

          color[8][0],
          color[8][1],
          color[8][2],
          color[8][3],
          color[8][4],
          color[8][5],
          color[8][6],

          color[9][0],
          color[9][1],
          color[9][2],
          color[9][3],
          color[9][4],

          color[9][6],

          color[10][0],
          color[10][1],
          color[10][2],
          color[10][3],
          color[10][4],
          color[10][5],
          color[10][6],

          color[11][0],
          color[11][1],
          color[11][2],
          color[11][3],
          color[11][4],
          color[11][5],
          color[11][6],

          color[12][0],
          color[12][1],
          color[12][2],
          color[12][3],
          color[12][4],
          color[12][5],
          color[12][6],
        ],
      },

      age: {
        min: 10,
        young: 18,
        mature: 30,
        old: 85,
        max: 100,
      },

      height: {
        min: 150,
        max: 180,
      },

      size:"size_medium",

      weight: {
        min: 60,
        max: 90,
      },
    },

    stats: { intelligence: 1, charisma: 2 },

    qualities: { speed: 30, vision_night: 60 },

    proficiencies: {
      languages: [lang.common, lang.tiefling],
    },

    fines: [
      {
        type: "resistance",
        keyword: "resistance",
        details: "fire_damage",
      },
    ],

    spells: [
      {
        level: 1,
        spell: spells.thaumaturgy,
      },

      {
        level: 3,
        spell: spells.hellish_rebuke_tiefling,
      },

      {
        level: 5,
        spell: spells.darkness_tiefling,
      },
    ],
  },

  halforc:{
    name:"halforc",
    details:"halforc_details",

    noimg_ethnos: true,
    ethnos_preview: [435,-42],

    settings: {
      ethnos: {
        common: {
          name: "common",
        },
      },

      gender: gender,

      color: {
        skin: [
          color[0][2],
          color[0][3],
          color[0][4],
          color[1][2],
          color[1][3],
          color[1][4],
          color[2][2],
          color[2][3],
          color[2][4],
          color[8][0],
          color[8][1],
          color[9][0],
          color[9][1],
        ],
        eyes: [
          color[0][5],
          color[1][5],
          color[2][5],
          color[10][5],
          color[11][5],
          color[12][5],
        ],
        hair: [
          color[0][6],
          color[1][6],
          color[2][6],
          color[10][6],
          color[11][6],
          color[12][6],
        ],
      },

      age: {
        min: 10,
        young: 14,
        mature: 25,
        old: 55,
        max: 75,
      },

      height: {
        min: 180,
        max: 210,
      },

      size:"size_medium",

      weight: {
        min: 80,
        max: 115,
      },
    },

    stats: {
      strength: 2,
      constitution: 1,
    },

    skills: {
      intimidation: "mastery",
    },

    qualities: { speed: 30, vision_night: 60 },

    proficiencies: {
      languages: [lang.common, lang.orc],
    },

    fines: [
      {
        type: "plus",
        keyword: "extra_dice_damage",
        details: "crit_hand_weapon",
      },
      {
        type: "plus",
        keyword: "persistence",
        details: "persistence_details",
      },
    ],
  },

  dragonborn:{
    name:"dragonborn",
    details:"dragonborn_details",

    noimg_ethnos: true,
    ethnos_preview: [435,-42],

    settings: {
      ethnos: {

        brass_dragonborn: {

          name:"brass_dragonborn",
          details:"brass_dragonborn_details",

          color: {
            skin: [
              color[2][1],
            ],
            eyes: [
              color[3][0],
            ],
            hair: [
              color[2][6],
            ],
          },
          fines: [
            {
              type: "resistance",
              keyword: "resistance",
              details: "fire_damage",
            },
          ],
          spells: [
            {
              level: 1,
              spell: spells.fire_breath_line,
            },
          ],
        },

        golden_dragonborn: {

          name:"golden_dragonborn",
          details:"golden_dragonborn_details",

          color: {
            skin: [
              color[3][5],
            ],
            eyes: [
              color[3][4],
            ],
            hair: [
              color[2][6],
            ],
          },
          fines: [
            {
              type: "resistance",
              keyword: "resistance",
              details: "fire_damage",
            },
          ],
          spells: [
            {
              level: 1,
              spell: spells.fire_breath_cone,
            },
          ],
        },

        red_dragonborn: {

          name:"red_dragonborn",
          details:"red_dragonborn_details",

          color: {
            skin: [
              color[1][4],
            ],
            eyes: [
              color[1][3],
            ],
            hair: [
              color[1][5],
            ],
          },
          fines: [
            {
              type: "resistance",
              keyword: "resistance",
              details: "fire_damage",
            },
          ],
          spells: [
            {
              level: 1,
              spell: spells.fire_breath_cone,
            },
          ],
        },

        silver_dragonborn: {

          name:"silver_dragonborn",
          details:"silver_dragonborn_details",

          color: {
            skin: [
              color[8][0],
            ],
            eyes: [
              color[7][3],
            ],
            hair: [
              color[8][3],
            ],
          },
          fines: [
            {
              type: "resistance",
              keyword: "resistance",
              details: "cold_damage",
            },
          ],
          spells: [
            {
              level: 1,
              spell: spells.cold_breath_cone,
            },
          ],
        },

        white_dragonborn: {

          name:"white_dragonborn",
          details:"white_dragonborn_details",

          color: {
            skin: [
              color[0][0],
            ],
            eyes: [
              color[7][3],
            ],
            hair: [
              color[8][3],
            ],
          },
          fines: [
            {
              type: "resistance",
              keyword: "resistance",
              details: "cold_damage",
            },
          ],
          spells: [
            {
              level: 1,
              spell: spells.cold_breath_cone,
            },
          ],
        },

        blue_dragonborn: {

          name:"blue_dragonborn",
          details:"blue_dragonborn_details",

          color: {
            skin: [
              color[9][3],
            ],
            eyes: [
              color[3][3],
            ],
            hair: [
              color[3][4],
            ],
          },
          fines: [
            {
              type: "resistance",
              keyword: "resistance",
              details: "electricity_damage",
            },
          ],
          spells: [
            {
              level: 1,
              spell: spells.electricity_breath_line,
            },
          ],
        },

        bronze_dragonborn: {

          name:"bronze_dragonborn",
          details:"bronze_dragonborn_details",

          color: {
            skin: [
              color[2][5],
            ],
            eyes: [
              color[3][3],
            ],
            hair: [
              color[3][4],
            ],
          },
          fines: [
            {
              type: "resistance",
              keyword: "resistance",
              details: "electricity_damage",
            },
          ],
          spells: [
            {
              level: 1,
              spell: spells.electricity_breath_line,
            },
          ],
        },

        copper_dragonborn: {

          name:"copper_dragonborn",
          details:"copper_dragonborn_details",

          color: {
            skin: [
              color[2][3],
            ],
            eyes: [
              color[11][3],
            ],
            hair: [
              color[11][4],
            ],
          },
          fines: [
            {
              type: "resistance",
              keyword: "resistance",
              details: "acid_damage",
            },
          ],
          spells: [
            {
              level: 1,
              spell: spells.acid_breath_line,
            },
          ],
        },

        black_dragonborn: {

          name:"black_dragonborn",
          details:"black_dragonborn_details",

          color: {
            skin: [
              color[0][6],
            ],
            eyes: [
              color[11][3],
            ],
            hair: [
              color[11][4],
            ],
          },
          fines: [
            {
              type: "resistance",
              keyword: "resistance",
              details: "acid_damage",
            },
          ],
          spells: [
            {
              level: 1,
              spell: spells.acid_breath_line,
            },
          ],
        },

        green_dragonborn: {

          name:"green_dragonborn",
          details:"green_dragonborn_details",

          color: {
            skin: [
              color[5][4],
            ],
            eyes: [
              color[4][3],
            ],
            hair: [
              color[4][5],
            ],
          },
          fines: [
            {
              type: "resistance",
              keyword: "resistance",
              details: "poison_damage",
            },
          ],
          spells: [
            {
              level: 1,
              spell: spells.poison_breath_cone,
            },
          ],
        },

      },

      gender: gender,

      color: {
        skin: [],
        eyes: [],
        hair: [],
      },

      age: {
        min: 3,
        young: 10,
        mature: 15,
        old: 65,
        max: 85,
      },

      height: {
        min: 180,
        max: 210,
      },

      size:"size_medium",

      weight: {
        min: 80,
        max: 115,
      },
    },

    stats: {
      strength: 2,
      charisma: 1,
    },

    qualities: { speed: 30 },

    proficiencies: {
      languages: [lang.common, lang.dragon],
    },

  },
};
