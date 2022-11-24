import MY from "@/assets/catalog/MY.js";
import MY_SAVE from "@/assets/catalog/MY_SAVE.js";
import MY_DEF from "@/assets/catalog/MY_DEF.js";

export default {
	namespaced: true,
	state: () => ({
		MY,
		MY_SAVE: MY_SAVE,
		MY_DEF: MY_DEF,
	}),
	getters: {
		// newsPosts(state) {
		//     return state.posts.filter(post => post.type === 'news');
		// },
		// postById (state) {
		//     return (id) => state.posts.find(item => item.id === id);
		// }

    summ_Stats_Numb_REC: (state) => (name) => {
      console.log('summ_Stats_Numb_REC:')
      let i = state.MY.stats[name].race;
      let j = state.MY.stats[name].ethnos;
      let k = state.MY.stats[name].custom_race;
			return i + j + k;
      },

		// MY_Race_Obj(state, getters, rootState) {
		// 	const obj = rootState.race.race;
		// 	const race_name = state.MY.race_name;
		// 	return obj[race_name];
		// },

		MY_Race_Stats(state) {
			return state.MY.race.stats;
		},

		MY_Etnos_Stats(state) {
			return state.MY.ethnos.stats;
		},

		MY_Stats(state) {
			return state.MY.stats;
		},

		MY_Race(state) {
			return state.MY.race;
		},

		race_Settings(state) {
			return state.MY.race.settings;
		},

    ethnos_Settings(state) {
			return state.MY.ethnos;
		},

		stats_Keys(state) {
			return Object.keys(state.MY.stats);
		},

		stats_Activ_Obj_RE(state) {
			let i = state.MY.race.stats;
			let j = state.MY.ethnos.stats;
			let obj = { key: 1, name: 2 };
			return Object.assign({}, i, j);
		},

		stats_Activ_RE(state, getters) {
			return Object.keys(getters.stats_Activ_Obj_RE);
		},

		stats_Pass_RE(state, getters) {
			return Object.keys(state.MY.stats).filter(
				(el) => !getters.stats_Activ_RE.includes(el)
			);
		},

		//race_page
		MY_Race_Common(state) {
			return state.MY.ethnos.name === "common";
		},
	},
	mutations: {

    GET_RACE_OBJ(state, name) {
			state.MY.race_name = name;
		},

    GET_RACE_NAME(state, name) {
			state.MY.race_name = name;
		},

		GET_ETHNOS(state) {
			state.MY.ethnos = Object.values(state.MY.race.settings.ethnos)[0];
		},

    GET_ETHNOS_FOR_RACE_NAME(state) {
      console.log('GET_ETHNOS_FOR_RACE_NAME:', Object.values(state.MY.race.settings.ethnos)[0])

			state.MY.ethnos = Object.values(state.MY.race.settings.ethnos)[0];
		},

    GET_ETHNOS_NAME(state) {
			state.MY.ethnos = Object.values(state.MY.race.settings.ethnos)[0];
		},

		CHANGE_STATS(state, { key, name, value }) {
			state.MY.stats[key][name] = value;
		},

    CHANGE_CUSTOM_RACE(state, {item, value}) {
			state.MY.custom_race[item] = value;
		},
	},
	actions: {
		zeroStatsNumb({ state, getters, commit }, name) {
			const keys = getters.stats_Keys;
			keys.forEach((key) => {
				commit("CHANGE_STATS", { key: key, name: name, value: 0 });
			});
		},

		getStatsNumb({ state, getters, commit, dispatch }, name) {
			dispatch("zeroStatsNumb", name);
			const origin = state.MY[name].stats;
			if (origin) {
				if (name === "custom_race") {
					origin.forEach((key) => {
						const increment = getters.race_Settings.custom_stats[1];
						commit("CHANGE_STATS", {
							key: key,
							name: name,
							value: increment,
						});
					});
				} else {
					for (const [key, value] of Object.entries(origin)) {
						commit("CHANGE_STATS", {
							key: key,
							name: name,
							value: value,
						});
					}
				}
			}
		},

    getCustomRE({ getters, commit }, name ) {
			const arr_free = getters[`${name}_Pass_RE`];
			let arr = [];
			const race_custom = getters.race_Settings[`custom_${name}`];
      const ethnos_custom = getters.ethnos_Settings[`custom_${name}`];
			if (race_custom) {
				let i = race_custom[0];
				arr = arr_free.slice(0, i);
			}
      if (ethnos_custom) {
				let i = ethnos_custom[0];
				arr = arr_free.slice(0, i);
			}
			commit("CHANGE_CUSTOM_RACE", { item: name, value: arr });
		},

		getCustomActiv({ state, getters, commit }, { item, name }) {
			const selekt = state.MY.custom_race[item];
			const active = getters[`${item}_Activ_RE`].includes(name);
			const passive = selekt.includes(name);
			if (active || passive) {
				return null;
			} else {
				let arr = selekt;
				arr.splice(0, 1);
				arr.push(name);
        commit("CHANGE_CUSTOM_RACE", { item: item, value: arr });
			}
		},
	},
};
