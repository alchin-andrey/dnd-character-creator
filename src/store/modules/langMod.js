import lang from "@/assets/catalog/base_data/list_languages.js";

export default {
    namespaced: true,
    state: () => ({
        lang: lang,

        shown_humman_lang: false,
        extra_lang: null,
    }),
    getters: {
        languages(state) {
            return state.lang;
        },

        lang_Humman(state) {
            let arr = [];
            for (let i in state.lang) {
                if ((state.lang || {})[i].human) {
                    arr.push(state.lang[i]);
                }
            }
            return arr;
        },

        lang_Not_Humman(state) {
            let arr = [];
            for (let i in state.lang) {
                if (!(state.lang || {})[i].human) {
                    arr.push(state.lang[i]);
                }
            }
            return arr;
        },

        lang_Humman_Select(state) {
            let arr = [];
            let lang = state.extra_lang;
            for (let i in lang) {
                if ((lang || {})[i].human) {
                    arr.push(lang[i]);
                }
            }
            // console.log("Челопук", arr);
            return arr;
        },

        lang_Humman_Title(state, getters) {
            let title = this.t("languages_human");
            let lang_numb = getters.lang_Humman_Select.length;
            let humman_activ = state.shown_humman_lang;
            if (lang_numb !== 0 && !humman_activ) {
                return `${title} (выбрано: ${lang_numb})`;
            } else {
                return title;
            }
        },
    },
};
