import spells from "./list_spells.js";

export default {

    actor: 
    {
        name: "feat_actor",
        details: "feat_actor_details",

        stats: 
        [
            {
                charisma: 1,
            },
        ],

        fines: 
        [
            {
                type: "plus",
                keyword: "advantage",
                details: "performace_deception_acting",
            },
            {
                type: "plus",
                keyword: "mimicing",
                details: "other_creature_sound_1min",
            },
        ]
    },

    athlete:
    {
        name: "feat_athlete",
        details: "feat_athlete_details",

        stats: 
        [
            {
                strength: 1,
                dexterity: 1,
            },
        ],

        fines:
        [
            {
                type: "plus",
                keyword: "quicko",
                details: "getting_up",
            },
            {
                type: "plus",
                keyword: "climbing",
                details: "without_speed_fee",
            },
            {
                type: "plus",
                keyword: "short_run",
                details: "on_size_jupms",
            },
        ]
    },

    alert:
    {
        name: "feat_alert",
        details: "feat_alert_details",

        stats: 
        [
            {
                initiative: 5,
            },
        ],

        fines:
        [
            {
                type: "advantage",
                keyword: "immunity",
                details: "on_sudden",
            },
            {
                type: "advantage",
                keyword: "no_advantage",
                details: "without_speed_fee",
            },
        ]
    },

    war_caster:
    {
        name: "feat_war_caster",
        details: "feat_war_caster_details",

        condition: "spell_attribute",
        //Требования: Способность накладывать хотя бы одно заклинание

        fines:
        [
            {
                type: "advantage",
                keyword: "advantage",
                details: "on_con_save_while_concentrating",
            },
            {
                type: "plus",
                keyword: "use_somatic",
                details: "in_taken_hands",
            },
            {
                type: "plus",
                keyword: "cast_reaction",
                details: "for_spells_action",
            },
        ]
    },

    grappler:
    {
        name: "feat_grappler",
        details: "feat_grappler_details",

        condition: "strength > 12",
        //Требования: Сила 13 или выше

        fines:
        [
            {
                type: "advantage",
                keyword: "advantage",
                details: "on_attack_grapple",
            },
            {
                type: "plus",
                keyword: "restrain",
                details: "creature_on_addititonal_grapple",
            },
        ]
    },

    lucky:
    {
        name: "feat_lucky",
        details: "feat_lucky_details",

        condition: "strength > 12",
        //Требования: Сила 13 или выше

        fines:
        [
            {
                type: "advantage",
                keyword: "advantage_x3",
                details: "on_attack_grapple",
            },
        ]
    },

    mounted_combatant:
    {
        name: "feat_mounted_combatant",
        details: "feat_mounted_combatant_details",

        condition: "strength > 12",
        //Требования: Сила 13 или выше

        fines:
        [
            {
                type: "advantage",
                keyword: "advantage_x3",
                details: "on_mounted_attack",
            },
            {
                type: "resistance",
                keyword: "redirect_attack",
                details: "from_mount_on_self",
            },
            {
                type: "resistance",
                keyword: "reduce_damage",
                details: "on_mount_save_dex",
            },
        ]
    },

    observant:
    {
        name: "feat_observant",
        details: "feat_observant_details",

        stats: 
        [
            {
                intelligence: 1,
                wisdom: 1,
                perception_passive: 5,
                investigation_passive: 5,
            },
        ],

        fines:
        [
            {
                type: "plus",
                keyword: "lips_read",
                details: "on_known_languages",
            },
        ]
    },

    martial_adept: // доработать
    {
        name: "feat_martial_adept",
        details: "feat_martial_adept_details",

        // остановился здесь
    },

    

    example:
    {
        name: "feat_example",
        details: "feat_example_details",

        stats:
        [
            {
                //Если level отсутствует — применять для всех
                strength: 1,
                dexterity: 1,
                consitution: 1,
                intelligence: 1,
                wisdom: 1,
                charisma: 1,
            },
            {
                level: 4,
                wisdom: 45,
                charisma: 21,
            }
        ],

        qualities: 
        [
            {
                speed: 25,
                speed_bonus: 10,
                initiative: 2,
                armor_class: 2,
                mana1: 4,
                mana2: 3,
                mana3: 2,
                mana4: 1,
                mana5: 1,
                mana6: 1,
                mana7: 1,
                mana8: 1,
                mana9: 1,
                sorcery_points: 5,
                chi_points: 34,
            }
        ],

        fines: 
        [
            {
                type: "plus",
                keyword: "advantage",
                details: "performace_deception_acting",
            },
            {
                level: 19,
                type: "plus",
                keyword: "mimicing",
                details: "other_creature_sound_1min",

                //условие - один из атрибутов MY
                condition: "this.$root.MY.if_no_heavy_armor", //необязательно

                // баф вьіраженньій в цифрах (или оба или ниодного)
                key: "speed_bonus",
                value: "15",
            },
        ],

        spells:
        [
            {
                spell: spells.rage,
            },
            {
                spell: spells.rage,
            },
            {
                level: 1,
                spell: spells.rage,
                charges: 5,
            },
        ]
    }
}