import { computed, reactive } from "vue";
import { useStore } from "vuex";

export function useStats() {
	const store = useStore();
	const MY = reactive(store.state.MY);
	const race_page = reactive(store.state.pages.race_page);

	const race_Settings = computed(() => store.getters["MY/race_Settings"]);
	const stats_Keys = computed(() => store.getters["MY/stats_Keys"]);
	const stats_Activ_Obj_RE = computed(() => store.getters["MY/stats_Activ_Obj_RE"]);
	const stats_Activ_RE = computed(() => store.getters["MY/stats_Activ_RE"]);

	// const CLOSE_HOME = () => store.commit("pages/CLOSE_HOME")
	// const OPEN_HOME = () => store.commit("pages/OPEN_HOME")
	//
	// const CLOSE_SETTING = (page, name) => store.commit("pages/CLOSE_SETTING", { page: page, name: name })
	// const OPEN_SETTING = (page, name) => store.commit("pages/OPEN_SETTING", { page: page, name: name })

	function openHook() {
		// console.log(1)
	}

	// function closeAllSetting() {
	// 	closeSettings("main_page");
	// 	closeSettings(activePage.value);
	// }
	//
	// function goHome() {
	// 	closeAllSetting(activePage.value);
	// 	OPEN_HOME();
	// }
	//
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

	return { openHook };
}
