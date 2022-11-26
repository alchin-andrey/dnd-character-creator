<template>
  <img
    v-if="Char_Img"
    :style="{
      height: Char_Hight,
      left: Char_Left,
    }"
    :src="Char_Img"
    :alt="body_part"
  />

  <svg
    v-if="!Char_Img"
    :fill="getCharColorHex(Hower)"
    :height="Calc_Img"
    viewBox="0 0 197 400"
    xmlns="http://www.w3.org/2000/svg"
    v-html="$root.placeholder[body_part]"
  ></svg>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, reactive, ref } from "vue";
const props = defineProps({
  body_part: {
    type: String,
    default: null,
  },
  ethnos_name: {
    type: String,
    default: null,
  },
});

const store = useStore();
const MY = reactive(store.state.MY.MY);
const race_page = reactive(store.state.pages.race_page);

const Char_Ethnos = computed(() => {
  if (props.ethnos_name) {
    return MY.race.noimg_ethnos ? "" : `/${props.ethnos_name}`;
  } else {
    return MY.race.noimg_ethnos ? "" : `/${MY.ethnos.name}`;
  }
});
// const All_Ethnos_Obj = computed(() => {
// 	return MY.race.settings.ethnos;
// })
const Char_Color = computed(() => {
  if (MY.color[props.body_part] === null && MY.ethnos.name === "common") {
    return MY.race.settings.color[props.body_part][0];
  } else if (MY.color[props.body_part] === null) {
    return MY.ethnos.color[props.body_part][0];
  } else {
    return MY.color[props.body_part];
  }
});

const Char_Img_Numb = computed(() => {
  if (props.ethnos_name) {
    return MY.race.settings.ethnos[props.ethnos_name].color[props.body_part][0]
      .img;
  } else {
    return Hower.value ? Hower.value.img : Char_Color.value.img;
  }
});

const hower_link = ref(`${props.body_part}_hower`);

const Hower = computed(() => {
  return race_page[hower_link.value];
});

const Char_Img = computed(() => {
  let race = MY.race.name;
  let ethnos = Char_Ethnos.value;
  let phisiological = MY.gender.phisiological;
  let img = Char_Img_Numb.value;
  let sex = "";
  let body = props.body_part;
  if (phisiological === "female" || phisiological === "demigirl") {
    sex = "female";
  } else {
    sex = "male";
  }
  // const image_path = `../assets/img/characters/${race}${ethnos}/${sex}/${body}/${img}.png`
  const image_path = `${race}${ethnos}/${sex}/${body}/${img}`;
  let result;
  try {
    // const path = new URL(image_path, import.meta.url).href;
    const path = new URL(`/src/assets/img/characters/${race}${ethnos}/${sex}/${body}/${img}.png`, import.meta.url).href;
    result = path
  } catch (e) {
    if (e.code !== "MODULE_NOT_FOUND") {
      throw e;
    }
    result = null;
  }
  return result;
});

function getCharColorHex(hower) {
  if (props.ethnos_name && !Char_Img.value) {
    return MY.race.settings.ethnos[props.ethnos_name].color[props.body_part][0]
      .hex;
  } else {
    let hex = hower ? hower.hex : Char_Color.value.hex;
    return hex;
  }
}

const growth = computed(() => {
  if (MY.height === null) {
    let max_height = MY.race.settings.height.max;
    let min_height = MY.race.settings.height.min;
    return (min_height + max_height) / 2;
  } else {
    return MY.height;
  }
});
const Calc_Img = computed(() => {
  if (
    race_page.shown.skin_color ||
    race_page.shown.eyes_color ||
    race_page.shown.hair_color
  ) {
    return `100%`;
  } else {
    return `calc(100% / 210 * ${growth.value})`;
  }
});

const Char_Hight = computed(() => {
  if (props.ethnos_name) {
    return `${MY.race.ethnos_preview[0]}px`;
  } else {
    return Calc_Img.value;
  }
});

const Char_Left = computed(() => {
  if (props.ethnos_name) {
    return `${MY.race.ethnos_preview[1]}px`;
  } else {
    return `50%`;
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.character img {
  position: absolute;
  bottom: 0;
  right: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, 0%);
  -ms-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
  transition-duration: 0.8s;
  transition-timing-function: ease-in-out;
}

.character svg {
  position: absolute;
  bottom: 0;
  right: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, 0%);
  -ms-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
  transition-property: all, fill;
  transition-duration: 0.8s, 0.1s;
  transition-timing-function: ease-in-out;
}
</style>
