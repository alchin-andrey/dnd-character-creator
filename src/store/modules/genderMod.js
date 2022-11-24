import gender from "@/assets/catalog/base_data/list_genders.js";

export default {
    namespaced: true,

    state: () => ({
        gender: gender,
    }),

    getters: {
        phisiologicalArr(state) {
            return state.gender.phisiological;
        },
        feelArr(state) {
            return state.gender.feel;
        },
        lookArr(state) {
            return state.gender.look;
        },
    },
};
