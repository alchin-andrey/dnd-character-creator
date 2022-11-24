import color from "./base_data/_colors.js";
import races from "./base_data/step1_races.js";

export default {
    
    //Key selections
    name:null,
    // race: Object.values(races)[0],
    // ethnos: Object.values(Object.values(races)[0].settings.ethnos)[0],
    race: races.gnome,
    ethnos: races.gnome.settings.ethnos.rock,
    class:null,
    subclass:null,
    backstory:null,
    level: 1,

    //Character
    alignment:null,
    gender:{
        phisiological: "male",
        feel: "cisgender",
        look: "as_phisiological",
        attraction:null,  
    },
    faith:null,

    personality:null,
    ideals:null,
    bonds:null,
    flaws:null,
    appearance:null,
    story:null,

    //Race secondary adjustments
    age:null,
    weight:null,
    height:null,
    color:{
        skin: null,
        eyes: null,
        hair: null,
    },

    //Calculated
    maturity:null,
    size:null,

    HP_max:null,
    HP_dice:null,

    mastery: null,
    proficiency:null,
    initiative:null,
    armor_class:null,

    qualities:{
        speed:null,
        // vision_day:null,
        vision_night:null,
    },

    stats:{
        
        strength:
        { base: 0, bonus: 0, total:0, mod:0, save:0 },

        dexterity:
        { base: 0, bonus: 0, total:0, mod:0, save:0 },

        constitution:
        { base: 0, bonus: 0, total:0, mod:0, save:0 },

        intelligence:
        { base: 0, bonus: 0, total:0, mod:0, save:0 },

        wisdom:
        { base: 0, bonus: 0, total:0, mod:0, save:0 },
    
        charisma:
        { base: 0, bonus: 0, total:0, mod:0, save:0 }
    },
    
    skills:{
        
        athletics:
        { bonus:0, mod:"strength" },

        acrobatics:
        { bonus:0, mod:"dexterity" },

        sleight_of_hand:
        { bonus:0, mod:"dexterity" },

        stealth:
        { bonus:0, mod:"dexterity" },

        investigation:
        { bonus:0, mod:"intelligence" },

        history:
        { bonus:0, mod:"intelligence" },

        religion:
        { bonus:0, mod:"intelligence" },

        arcana:
        { bonus:0, mod:"intelligence" },

        nature:
        { bonus:0, mod:"intelligence" },

        survival:
        { bonus:0, mod:"wisdom" },

        perception:
        { bonus:0, mod:"wisdom" },

        insight:
        { bonus:0, mod:"wisdom" },

        medicine:
        { bonus:0, mod:"wisdom" },

        animal_hanging:
        { bonus:0, mod:"wisdom" },

        performance:
        { bonus:0, mod:"charisma" },

        persuasion:
        { bonus:0, mod:"charisma" },

        deception:
        { bonus:0, mod:"charisma" },

        intimidation:
        { bonus:0, mod:"charisma" },

    },

    //Владения - с чем умеешь обращаться
    proficiencies:{
        armor:null,
        weapons:null,
        tools:null,
        languages:null,
    },

    //доп вьіборьі, как у полуєльфа. дальше у класса будет похожее, так что можно тут ожидать массивьі
    custom_stats:null,
    custom_skills:null,
    custom_languages:null,

    //Особенности - пассивньіе умения
    peculiarities:null,

    //Умения - активньіе умения без урона
    abilities:null,

    //Заклинания - активньіе умения с уроном
    spells:null,

    inventory:null,

    armor:null,
    shield:null,

    //Оружие - предметы с уроном
    weapons:null,

    wallet:{
        gold:0,
        silver:0,
        copper:0,
    },

    //Conditions
    if_no_heavy_armor: true,

};