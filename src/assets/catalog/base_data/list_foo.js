export default {

    //Левелы перса

    // Num_Plus_Level_2()
    // {
    //     let num = this.Spell_Index.impact_size_num;

    //     return num + (this.$root.MY.level-1)/2;
    //     //Например num = 1.
    //     //на 1 левеле = 1, на 3 левеле = 2, на 5 левеле = 3 и тд.
    // },

    // Num_LevelX()
    // {
    //     let num = this.Spell_Index.impact_size_num;

    //     return num * this.$root.MY.level;
    // },

    // Num_Level_5_11_17()
    // {
    //     let num = this.Spell_Index.impact_size_num;
    //     let lvl = this.$root.MY.level;
    //     let kof = 0;

    //     if (lvl < 5) {
    //         kof = 0;
    //     } else if (lvl < 11) {
    //         kof = 1;
    //     } else if (lvl < 17) {
    //         kof = 2;
    //     } else {
    //         kof = 3;
    //     }
    //     return num + kof;
    // },

    //Классовая бабуйня

    Num_Barbarian_Rage_Bonus() 
    {
        return this.$root.step2_classes.barbarian_rage_bonus[this.$root.MY.level]; // convert to store
    },

    //Str
//DONE
    Str_X_Level_5_11_17()
    {
        //return to: impact_size_str
        //1lvl = 1×, 5lvl = 2×, 11lvl = 3×, 17lvl = 4×
        //Example: 1× 1d10 ⬜️🔳🔳🔳🔳🔳🔳🔳🔳🔳
    },
//DONE
    Str_X_Plus_1()
    {
        let str = this.Spell_Index.impact_size_str;

        return str + this.mana - this.Spell_Index.min_mana;
        //return to: impact_size_str
        //Exapmle: str = 3
        //spell{1} = 3×, spell{2} = 4×, spell{3} = 5×
        //spell{1}: 3× 1d10 ⬜️🔳🔳🔳🔳🔳🔳🔳🔳🔳
        //spell{2}: 4× 1d10 ⬜️🔳🔳🔳🔳🔳🔳🔳🔳🔳
    },
//DONE
    Str_X_Plus_2()
    {
        let str = this.Spell_Index.impact_size_str;

        return str + (this.mana - this.Spell_Index.min_mana) * 2;
        //return to: impact_size_str
        //Exapmle: str = 3
        //spell{1} = 3×, spell{2} = 5×, spell{3} = 7×
        //spell{1}: 3× 1d10 ⬜️🔳🔳🔳🔳🔳🔳🔳🔳🔳
        //spell{2}: 5× 1d10 ⬜️🔳🔳🔳🔳🔳🔳🔳🔳🔳
    },
//DONE (разбит на две)
    Str_X_Plus_1_Num_MOD()
    {
        //use Str_X_Plus_1

        //Example: 
        //base_stat = strenth
        //num = base_stat_mod = strength.mod = 3
        //spell{1} = 1× 3d10 ⬜️⬜️⬜️🔳🔳🔳🔳🔳🔳🔳
        //spell{2} = 2× 3d10 ⬜️⬜️⬜️🔳🔳🔳🔳🔳🔳🔳
    },
//DONE
    Str_Plus_40()
    {
        //не добавлять "×"

        let str = this.Spell_Index.impact_size_str;

        return str + (this.mana - this.Spell_Index.min_mana) * 40;
        //Example: 
        //str = 40
        //spell{1} = 40
        //spell{2} = 80
        //spell{3} = 120

        // + aoe size через скобочки
    },

    //Num
//DONE
    Num_Plus_05()
    {
        //return to: impact_size_num
        //spell{1} = num, spell{2} = num, spell{3} = num+1 ...
        //Example: 
        //spell{1}: 1d10 ⬜️🔳🔳🔳🔳🔳🔳🔳🔳🔳
        //spell{2}: 1d10 ⬜️🔳🔳🔳🔳🔳🔳🔳🔳🔳
        //spell{3}: 2d10 ⬜️⬜️🔳🔳🔳🔳🔳🔳🔳🔳 🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳
    },
//DONE
    Num_Plus_1()
    {
        //return to: impact_size_num
        //spell{1} = num, spell{2} = num+1, spell{3} = num+2 ...
        //Example: 
        //spell{1}: 1d10 ⬜️🔳🔳🔳🔳🔳🔳🔳🔳🔳
        //spell{2}: 2d10 ⬜️⬜️🔳🔳🔳🔳🔳🔳🔳🔳 🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳
    },
//DONE
    Num_Plus_2()
    {
        //return to: impact_size_num
        //spell{1} = num, spell{2} = num+2, spell{3} = num+4 ...
        //Example: 
        //spell{1}: 1d10 ⬜️🔳🔳🔳🔳🔳🔳🔳🔳🔳
        //spell{2}: 3d10 ⬜️⬜️⬜️🔳🔳🔳🔳🔳🔳🔳 🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳 🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳
    },
//DONE
    Num_Plus_5()
    {
        let num = this.Spell_Index.impact_size_num;

        return num + (this.mana - this.Spell_Index.min_mana)*5;
        //return to: impact_size_num
        //spell{1} = num, spell{2} = num+5, spell{3} = num+10 ...
        //Example: 
        //spell{1}: 1d4 ⬜️🔳🔳🔳
        //spell{2}: 6d4 ⬜️⬜️⬜️⬜️⬜️⬜️🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳
    },
//DONE not Pls_MOD
    Num_Plus_1__Pls_MOD()
    {
        //use Num_Plus_1

        //Example: 
        //base_stat = strenth
        //pls = base_stat_mod = strength.mod = 3
        //spell{1} = 1d4+3 ⬜️⬜️⬜️ ⬜️🔳🔳🔳
        //spell{2} = 2d4+3 ⬜️⬜️⬜️ ⬜️⬜️🔳🔳🔳🔳🔳🔳
    },
//DONE
    Num_Feet()
    {
        //превратить num в футы
    },

    //Pls
//DONE
    Pls_Plus_5()
    {
        let pls = this.Spell_Index.impact_size_pls;

        return pls + (this.mana - this.Spell_Index.min_mana) * 5;
        //return to: impact_size_pls
        //Exapmle: pls = 4
        //spell{1}: 1d4+4 ⬜️⬜️⬜️⬜️ ⬜️🔳🔳🔳
        //spell{2}: 1d4+9 ⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️ ⬜️🔳🔳🔳
    },
//DONE
    Pls_STR() 
    {
        let pls = this.$root.MY.stats.strength.mod;
        return pls; 

        //return to: impact_size_pls
        //if < 0 then 0
        // Example: +3 ⬜️⬜️⬜️
    },
//DONE
    Pls_CHA()
    {
        let pls = this.$root.MY.stats.charisma.mod;
        return pls; 

        //return to: impact_size_pls
        //if < 0 then 0
        //Example: +4 ⬜️⬜️⬜️⬜️
    },
}