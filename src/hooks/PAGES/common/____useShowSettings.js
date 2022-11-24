import { computed, reactive } from "vue";
import { useStore } from "vuex";

export function useShowSettings() {
	const store = useStore();
	const pages = reactive(store.state.pages);

	// const activePage = computed(() => store.getters["pages/activePage"]);

	const CLOSE_HOME = () => store.commit("pages/CLOSE_HOME");
	const OPEN_HOME = () => store.commit("pages/OPEN_HOME");

	// const OPEN_PAGE_NAME = () => store.commit("pages/OPEN_PAGE_NAME")

	const OPEN_PAGE_NAME = (page) => store.commit("pages/OPEN_PAGE_NAME", page);

	const OPEN_SETTING_NAME = (page) =>
		store.commit("pages/OPEN_SETTING_NAME", page);

	const CLOSE_SETTING = (page, name) =>
		store.commit("pages/CLOSE_SETTING", { page: page, name: name });
	const OPEN_SETTING = (page, name) =>
		store.commit("pages/OPEN_SETTING", { page: page, name: name });
	

	// function closeSettings(page) {
	// 	const obj = pages[page].shown;
	// 	for (const [key, value] of Object.entries(obj)) {
	// 		if (value) {
	// 			CLOSE_SETTING(page, key);
	// 		}
	// 	}
	// }

	// function closeAllSetting() {
	// 	closeSettings("main_page");
	// 	closeSettings(activePage.value);
	// }

	// function goHome() {
	// 	closeAllSetting(activePage.value);
	// 	OPEN_HOME();
	// }

	function goHome() {
		CLOSE_SETTING(pages.page_open, pages.setting_open);
		OPEN_HOME();
		OPEN_PAGE_NAME(null);
		OPEN_SETTING_NAME(null);
	}

	function showSettings(page, name) {
		if (pages.setting_open !== name) {
			if (pages.setting_open) {
				CLOSE_SETTING(pages.page_open, pages.setting_open);
			}
			OPEN_SETTING(page, name);
			OPEN_PAGE_NAME(page);
			OPEN_SETTING_NAME(name);
			CLOSE_HOME();
		} else {
			goHome();
		}
	}

	// function showSettings(page, name) {
	//   if (!pages.setting_open) {
	// 		OPEN_SETTING(page, name);
	//     OPEN_PAGE_NAME(page);
	//     OPEN_SETTING_NAME(name);
	// 		CLOSE_HOME();
	//   } else if(pages.setting_open !== name) {
	// 		CLOSE_SETTING(page, pages.setting_open);

	// 		OPEN_SETTING(page, name);
	//     OPEN_PAGE_NAME(page);
	//     OPEN_SETTING_NAME(name);
	// 		CLOSE_HOME();
	// 	} else {
	// 		goHome();
	// 	}
	// }

	// function showSettings(page, name) {
	// 	let chapter = page === "main_page" ? page : activePage.value;
	// 	if (pages[page].shown[name] === false) {
	// 		closeAllSetting();
	// 		OPEN_SETTING(chapter, name);
	// 		CLOSE_HOME();
	// 	} else {
	// 		goHome();
	// 	}
	// }

	return { showSettings, goHome, activePage, shown_Home };
}
