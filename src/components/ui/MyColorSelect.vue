<template>
  <my-selection-card class="reletiv" passive colors_card>
    <div class="colors_box jbm-300" @mouseleave="hoverStop()">
      <div v-for="(val, i) in color" :key="i" class="colors_row">
        <my-color-block
          v-for="(val, j) in color[i]"
          :key="j"
          @mouseover="hoverColor(i, j)"
          @click="choiceColor(body_part, i, j)"
          :color="color[i][j].hex"
          :active_link="color[i][j].hex"
          :select_link="Char_Color.hex"
          :ethnos_color="getEthnosColor(color[i][j], body_part)"
          :race_color="getRaceColor(color[i][j], body_part)"
        >
        </my-color-block>
      </div>
    </div>
    <my-card-text-color
      :title="Hower ? Hower.name : Char_Color.name"
      :ethnos_color="
        Hower
          ? getEthnosColor(Hower, body_part)
          : getEthnosColor(Char_Color, body_part)
      "
      :race_color="
        Hower
          ? getRaceColor(Hower, body_part)
          : getRaceColor(Char_Color, body_part)
      "
    ></my-card-text-color>
    <transition name="fade">
    <div class="reset_color" :class="{ reset_color_custom: !Color_Reset }" @click="resetColor(body_part)">
    <img src="@/assets/img/icon/reset.svg" alt="reset"/>
    </div>
  </transition>
  </my-selection-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MyColorSelect",
  props: {
    body_part: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      hower_link: `${this.body_part}_hower`,
      // reset_color: false,
    };
  },
  computed: {
	...mapGetters({color: 'color/color',}),

    Hower() {
      return this.$root.race_page[this.hower_link];
    },

    Color_Reset() {
      return this.$root.race_page.color_selected[this.body_part]
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
  },
  methods: {
    hoverStop() {
      this.$root.race_page[this.hower_link] = null;
    },
    hoverColor(i, j) {
      this.$root.race_page[this.hower_link] = this.color[i][j];
    },
    choiceColor(value, i, j) {
      this.$root.race_page.color_selected[value] = this.color[i][j];
      this.$root.MY.color[value] = this.color[i][j];
      // this.reset_color = true;
    },
    getEthnosColor(obj, value) {
      if (this.$root.MY.ethnos.name === "common") {
        return false;
      } else {
        return this.$root.MY.ethnos.color[value].includes(obj);
      }
    },
    getRaceColor(obj, value) {
      return this.$root.MY.race.settings.color[value].includes(obj);
    },
    resetColor(value) {
      this.$root.race_page.color_selected[value] = null;
      this.$root.MY.color[value] = null;
      // this.reset_color = false;
    }
  },
};
</script>

<style scoped>

.reletiv {
  position: relative;
}
.colors_box {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  height: 100%;
  gap: 2px;
}

.colors_row {
  display: flex;
  flex: 1 1 auto;
  height: 100%;
  gap: 2px;
}

.reset_color {
  width: 20px;
  height: 20px;
  bottom: 32px;
  right: 15px;
  position: absolute;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease;
}

.reset_color_custom {
  opacity: 0;
  transform: rotate(-180deg)
}

</style>
