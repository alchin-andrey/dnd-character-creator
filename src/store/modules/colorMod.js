import color from "@/assets/catalog/base_data/_colors.js";

export default {
    namespaced: true,
    state: () => ({
        color: color,
    }),
    getters: {
        color(state) {
            return state.color;
        },
    },
};
