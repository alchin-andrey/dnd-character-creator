import { computed } from "vue";
import { useStore } from "vuex";

export function useShowSettings() {
	const store = useStore();

  const page_open = computed(() => store.state.pages.page_open);
  const setting_open = computed(() => store.state.pages.setting_open);

	const CLOSE_HOME = () => store.commit("pages/CLOSE_HOME");
	const OPEN_HOME = () => store.commit("pages/OPEN_HOME");

	const OPEN_PAGE_NAME = (page) => store.commit("pages/OPEN_PAGE_NAME", page);

	const OPEN_SETTING_NAME = (page) =>
		store.commit("pages/OPEN_SETTING_NAME", page);

	const CLOSE_SETTING = (page, name) =>
		store.commit("pages/CLOSE_SETTING", { page: page, name: name });
	const OPEN_SETTING = (page, name) =>
		store.commit("pages/OPEN_SETTING", { page: page, name: name });

    const SHOW_SCROLL = (page, name) =>
		store.commit("pages/SHOW_SCROLL", { page: page, name: name });


	function showHome() {
		CLOSE_SETTING(page_open.value, setting_open.value);
		OPEN_HOME();
		OPEN_PAGE_NAME(null);
		OPEN_SETTING_NAME(null);
	}

	function showSettings(page, name) {
		if (setting_open.value !== name) {
			if (setting_open.value) {
				CLOSE_SETTING(page_open.value, setting_open.value);
			}
			OPEN_SETTING(page, name);
			OPEN_PAGE_NAME(page);
			OPEN_SETTING_NAME(name);
			CLOSE_HOME();
		} else {
			showHome();
		}
	}

  function showSettings__Main(name){
      showSettings("main_page", name);
  }
  
  //TODO: Race_page

  const MY = computed(() => store.state.MY.MY);
  const race_page = computed(() => store.state.pages.race_page);

  function showSettings__Race(name){
    const ethnos = name === "ethnos";
    const ethnos_common = MY.value.ethnos.name === "common";
    let custom_ethnos = ethnos && ethnos_common;
    
    const str = name.split("_")[0];
    let color_length = MY.value.race.settings.color[str]?.length === 0;
    
    if (custom_ethnos || color_length) {
      return null;
    } else {
      showSettings("race_page", name);
    }
  }

  function closeEthnos() {
    const ethnos_show = race_page.value.shown.ethnos;
    const ethnos_common = MY.value.ethnos.name === "common";
    if (ethnos_show && ethnos_common) {
      showHome();
    }
  }

  function closeColor(name) {
    const color_page = race_page.value.shown[`${name}_color`] === true;
    const color_length = MY.value.race.settings.color[name].length === 0;
    if (color_page && color_length) {
      showHome();
    }
  }

  function closePar(name) {
    const page_shown = race_page.value.shown[name] === true;
    const null_race_par = MY.value.race.settings[`custom_${name}`] === undefined;
    const null_ethnos_par = MY.value.ethnos[`custom_${name}`] === undefined;
    if (page_shown && null_race_par && null_ethnos_par) {
      showHome();
    }
  }

  function showRaceScroll(name) {
    SHOW_SCROLL("race_page", name);
  }


	return { 
    showHome, 
    showSettings, 
    showSettings__Main, 
    showSettings__Race,
    closeEthnos,
    closeColor,
    closePar,
    showRaceScroll,
  };
}
