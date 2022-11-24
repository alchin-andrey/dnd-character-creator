// import mainPage from "./modules/pageMain_Mod";
import racePage from "./modules/pageRace_Mod";

export default {
	namespaced: true,
	modules: {
		// main_page: mainPage,
		race_page: racePage,
	},

	state: () => ({
    main_page: {
      shown: {
        logo: false,
        lang: false,
        lvl: false,
      },
    },
		pages: {
			race_page: true,
			clas_page: false,
		},
		page_open: null,
		setting_open: null,
		shown_home: true,
	}),

	getters: {
		// Shown_Selection(state) {
		// 	return state.setting_open; //! Возможно удалить и поставить просто стор
		// },

		// activePage(state) {
		// 	const obj = state.pages;
		// 	for (const [key, value] of Object.entries(obj)) {
		// 		if (value) {
		// 			return key;
		// 		}
		// 	}
		// },

		// shown_Home(state) {
		// 	return state.shown_home;
		// },
	},

	mutations: {
		OPEN_PAGE_NAME: (state, page) => (state.page_open = page),
		OPEN_SETTING_NAME: (state, page) => (state.setting_open = page),

		CLOSE_HOME: state => (state.shown_home = false),
		OPEN_HOME: state => (state.shown_home = true),

		CLOSE_SETTING: (state, { page, name }) => (state[page].shown[name] = false),
		OPEN_SETTING: (state, { page, name }) => (state[page].shown[name] = true),

		SHOW_SCROLL: (state, { page, name }) => (state[page][name] = !state[page][name]),
	},

	actions: {
		// closeSettings({ commit, state }, { page }) {
		// 	const obj = state[page].shown;
		// 	for (const [key, value] of Object.entries(obj)) {
		// 		if (value) {
		// 			commit("CLOSE_SETTING", { page: page, name: key });
		// 		}
		// 	}
		// },

		// closeAllSetting({ getters, dispatch }) {
		// 	const active_page = getters.activePage;
		// 	dispatch("closeSettings", { page: "main_page" });
		// 	dispatch("closeSettings", { page: active_page });
		// },

		// goHome({ getters, commit, dispatch }) {
		// 	const active_page = getters.activePage;
		// 	dispatch("closeAllSetting", active_page);
		// 	commit("OPEN_HOME");
		// },

		// showSettings({ commit, getters, dispatch, state }, { page, name }) {
		// 	const active_page = getters.activePage;
		// 	let chapter = page === "main_page" ? page : active_page;
		// 	if (state[page].shown[name] === false) {
		// 		dispatch("closeAllSetting");
		// 		commit("OPEN_SETTING", { page: chapter, name: name });
		// 		commit("CLOSE_HOME");
		// 	} else {
		// 		dispatch("goHome");
		// 	}
		// },

    // goHome({ state, commit }) {
    //   console.log('goHome:', commit)
    //   commit("CLOSE_SETTING", { page: state.page_open, name: state.setting_open });
    //   commit("OPEN_PAGE_NAME", null);
    //   commit("OPEN_SETTING_NAME", null);
    //   commit("OPEN_HOME");
    // },
	},
};
