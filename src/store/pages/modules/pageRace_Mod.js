export default {
	// namespaced: true,
	state: () => ({
		shown: {
			ethnos: false,
			gender: false,
			skin_color: false,
			eyes_color: false,
			hair_color: false,
			age: false,
			height: false,
			weight: false,
			stats: false,
			skills: false,
			languages: false,
		},

    shown_humman_lang: false,
		
    color_selected: {
			skin: null,
			hair: null,
			eyes: null,
		},

		extra: {
			stats: null,
			skills: null,
			languages: null,
		},

		height_kof: 0.5,
		weight_kof: 0.5,
		age_kof: 0.5,
	}),
	getters: {
		// Shown_Race_Selection(state) {
		// 	const obj = state.shown;
		// 	const values = Object.values(obj);
		// 	return values.some((el) => el === true);
		// },
	},

	mutations: {
	},

	actions: {
    // showRaceSettings({ state, dispatch, rootState }, name){
    //   const ethnos = name === "ethnos";
    //   const ethnos_common = rootState.MY.MY.ethnos.name === "common";
    //   const str = name.split("_")[0];
      
    //   const custom_ethnos = ethnos && ethnos_common;
    //   const color_length = rootState.MY.MY.race.settings.color[str]?.length === 0;
		// 	if (custom_ethnos || color_length) {
		// 		return null;
		// 	} else {
    //     dispatch("showSettings", {page: "race_page", name: name});
		// 	}
		// },

    // closeRaceEthnos({ state, dispatch, rootState }) {
    //   const ethnos_show = state.shown.ethnos === true;
    //   const ethnos_common = rootState.MY.MY.ethnos.name === "common";
		// 	console.log('ethnos_show:', ethnos_show && ethnos_common)
		// 	if (ethnos_show && ethnos_common) {
		// 		dispatch("goHome");
		// 	}
		// },

    // closeRaceColor({ state, dispatch, rootState }, name) {
    //   const color_page = state.shown[`${name}_color`] === true;
    //   const color_length = rootState.MY.MY.race.settings.color[name].length === 0;
		// 	if (color_page && color_length) {
		// 		dispatch("goHome");
		// 	}
		// },

    // closeRacePar({ state, dispatch, rootState }, name) {
    //   const page_shown = state.shown[name] === true;
    //   const null_race_par = rootState.MY.MY.race.settings[`custom_${name}`] === undefined;
    //   const null_ethnos_par = rootState.MY.MY.ethnos[`custom_${name}`] === undefined;
		// 	if (page_shown && null_race_par && null_ethnos_par) {
		// 		dispatch("goHome");
		// 	}
		// },

    // showRaceScroll({ commit }, name) {
		// 	commit("SHOW_SCROLL", {page: "race_page", name: name});
		// },
	},
};
