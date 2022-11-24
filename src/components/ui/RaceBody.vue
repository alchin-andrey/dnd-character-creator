<template>
  <img
        v-if="Char_Img"
        :style="{ 
          height: Char_Hight,
          left: Char_Left 
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

<script>
export default {
  name: "RaceBody",
  props: {
    body_part: {
      type: String,
      default: null,
    },
    ethnos_name: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      hower_link: `${this.body_part}_hower`,
    }
  },
  computed: {
    growth() {
      if (this.$root.MY.height === null) {
      let max_height = this.$root.MY.race.settings.height.max
      let min_height = this.$root.MY.race.settings.height.min
        return (min_height + max_height) / 2;
      } else {
        return this.$root.MY.height;
      }
    },

    Hower() {
      return this.$root.race_page[this.hower_link]
    },

    Char_Ethnos() {
      if(this.ethnos_name) {
        return this.$root.MY.race.noimg_ethnos ? "" : `/${this.ethnos_name}`;
      } else {
        return this.$root.MY.race.noimg_ethnos ? "" : `/${this.$root.MY.ethnos.name}`;
      }
    },

    Char_Color() {
      if (
        this.$root.MY.color[this.body_part] === null &&
        this.$root.MY.ethnos.name === "common"
      ) {
        return this.$root.MY.race.settings.color[this.body_part][0];
      } else if (this.$root.MY.color[this.body_part] === null) {
        return this.$root.MY.ethnos.color[this.body_part][0];
      } else {
        return this.$root.MY.color[this.body_part];
      }
    },

    Char_Img_Numb() {
      if(this.ethnos_name) {
        return this.$root.All_Ethnos_Obj[this.ethnos_name].color[this.body_part][0].img;
      } else {
        return this.Hower ? this.Hower.img : this.Char_Color.img;
      }
    },

    Char_Img() {
      let race = this.$root.MY.race.name;
      let ethnos = this.Char_Ethnos;
      let phisiological = this.$root.MY.gender.phisiological;
      let img = this.Char_Img_Numb;
      let sex;
      let body = this.body_part;
      let result;
      if (phisiological === "female" || phisiological === "demigirl") {
        sex = "female";
      } else {
        sex = "male";
      }
      try {
        result = `src/assets/img/characters/${race}${ethnos}/${sex}/${body}/${img}.png`;
      } catch (e) {
        if (e.code !== "MODULE_NOT_FOUND") {
          throw e;
        }
        result = null;
      }
      return result;
    },

    Calc_Img() {
      if (
        this.$root.race_page.shown.skin_color ||
        this.$root.race_page.shown.eyes_color ||
        this.$root.race_page.shown.hair_color
      ) {
        return `100%`;
      } else {
        return `calc(100% / 210 * ${this.growth})`;
      }
    },

    Char_Hight() {
      if(this.ethnos_name) {
        return `${this.$root.MY.race.ethnos_preview[0]}px`;
      } else {
        return this.Calc_Img;
      }
    },

    Char_Left() {
      if(this.ethnos_name) {
        return `${this.$root.MY.race.ethnos_preview[1]}px`;
      } else {
        return `50%`;
      }
    },
  },

  methods: {
    getCharColorHex(hower) {
      if (this.ethnos_name && !this.Char_Img) {
        return this.$root.All_Ethnos_Obj[this.ethnos_name].color[this.body_part][0].hex;
      } else {
        let hex = hower ? hower.hex : this.Char_Color.hex;
      return hex;
      }
    },

  },
};
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