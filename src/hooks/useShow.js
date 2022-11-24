import { computed, reactive, ref } from 'vue';
import { useStore } from "vuex";

export function useShow() {

  const store = useStore();
  const race_page = reactive(store.state.race_page.race_page);
  const MY = reactive(store.state.MY.MY);
  // const MY = computed(() => store.state.MY.MY)

  function close() {
    console.log("close");
    const obj = race_page.shown;
    const keys = Object.keys(obj);
    keys.forEach((key) => {
      race_page.shown[key] = false;
    });
  }

  function showHome() {
    close();
    race_page.shown_home = true;
  }

  function show (name, key) {
    let ethnos_common =
      (name === "ethnos" && MY.ethnos.name === "common");
    let color_common =
      (name === `${key}_color` &&
      MY.race.settings.color[key].length === 0);
    if (ethnos_common || color_common) {
      return null;
    } else if (race_page.shown[name] === false) {
      close();
      race_page.shown[name] = true;
      race_page.shown_home = false;
    } else {
      showHome();
    }
  }

  return {show, showHome, close};

}