import dic from "@/assets/catalog/texts/dic.js";

export default {
    namespaced: true,
    state: () => ({
        dic: dic,

    }),
    getters: {



      // t: (state) => (name) => state.dic[state.dic.select_lang][name],

        t(state) {
          let lang_sel = state.dic.select_lang;
          console.log('lang_sel:')
          return (name) => state.dic[lang_sel][name];
        },

        Em_Icon(state) {
          return state.dic.lang.find((icon) => icon.mark === state.dic.select_lang).icon;
        },

        Lang_Icon(state) {
          return `src/assets/img/icon/lang/icon_${state.dic.select_lang}.png`;
        },

        // Lang_Icon(state) {
        //   return require(`@/assets/img/icon/lang/icon_${state.dic.select_lang}.png`);
        // },
    },
};
