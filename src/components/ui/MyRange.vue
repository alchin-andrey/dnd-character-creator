<template>
  <div class="range_slider">
    <input
      :style="{
        'margin-bottom': Range_Margin,
        width: Range_Width,
      }"
      type="range"
      class="vertical"
      :min="Min_Range"
      :max="Max_Range"
      v-model.number="inputValue"
      step="1"
    />
    <div
    @click="getMin()"
      :style="{
        height: Range_Bottom,
      }"
      class="range_bottom"
    ></div>
    <div class="range_value">{{ t_Unit }}</div>
  </div>
</template>

<script>
export default {
  name: "MyRange",
  data() {
    return {
      inputValue: "",
      min_lvl: 1,
      max_lvl: 20,
    };
  },
  props: {
    modelValue: {
      type: Number,
      default: null,
    },
    lvl: {
      type: Boolean,
      default: false,
    },
    age: {
      type: Boolean,
      default: false,
    },
    height: {
      type: Boolean,
      default: false,
    },
    weight: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    Target_Range() {
      if (this.lvl) {
        return 'lvl';
      } else if (this.age) {
        return 'age';
      } else if (this.height) {
        return 'height';
      } else if (this.weight) {
        return 'weight';
      } else {
        return null;
      }
    },

    Race_Set_Obj() {
      return this.$root.MY.race.settings;
    },

    Age_Units() {
      let mod10 = Math.abs(this.inputValue % 10);
      let mod100 = Math.abs(this.inputValue % 100);
      if (mod100 > 10 && mod100 < 20) {
        return "years";
      } else if (mod10 >= 2 && mod10 <= 4) {
        return "yeara";
      } else if (mod10 === 1) {
        return "year";
      } else {
        return "years";
      }
    },

    t_Unit() {
      if (this.lvl) {
        return `${this.inputValue}${this.t("level_unit")} ${this.t("level")}`;
      } else if (this.age) {
        return `${this.inputValue} ${this.t(this.Age_Units)}`;
      } else if (this.height) {
        return `${this.inputValue} ${this.t("cm")}`;
      } else if (this.weight) {
        return `${this.inputValue} ${this.t("kg")}`;
      } else {
        return null;
      }
    },

    Max_Range() {
      if (this.lvl) {
        return this.max_lvl;
      } else {
        return this.Race_Set_Obj[this.Target_Range].max;
      }
    },

    Min_Range() {
      if (this.lvl) {
        return this.min_lvl;
      } else {
        return this.Race_Set_Obj[this.Target_Range].min;
      } 
    },

    Kof_Range() {
      if (this.lvl) {
        return null;
      } else {
        let min = this.$root.MY.race.settings[this.Target_Range].min;
        let max = this.$root.MY.race.settings[this.Target_Range].max;
        return (this.$root.MY[this.Target_Range] - min) / (max - min);
      } 
    },

    // Выравнивание ползунка
    Range_Bottom() {
      if (this.height) {
        return `calc((100vh - 64px) / 210 * ${this.Min_Range} - 30px)`;
      } else {
        return `calc((100vh - 64px - 30px) / ${this.Max_Range} * ${this.Min_Range})`;
      }
    },
    Range_Width() {
      if (this.height) {
        return `calc((100vh - 64px) - ${this.Range_Bottom} - ((100vh - 64px) - ((100vh - 64px) / 210 * ${this.Max_Range})))`;
      } else {
        return `calc((100vh - 64px) - ${this.Range_Bottom})`;
      }
    },
    Range_Margin() {
        return `calc(${this.Range_Width} / 2 - 172px - 1px)`;
    },
  },
  watch: {
    "$root.MY.race": {
      handler() {
        if (this.lvl) {
          return null
        } else {
          setTimeout(() => {
            this.inputValue = this.$root.MY[this.Target_Range] + 1;
            this.$emit("update:modelValue", this.inputValue);
            this.inputValue = this.$root.MY[this.Target_Range] - 1;
            this.$emit("update:modelValue", this.inputValue);
          }, 1);
        }
      },
      immediate: true,
    },
    modelValue: {
      handler() {
        this.inputValue = this.modelValue;
        if (this.lvl) {
          return null
        } else {
          this.$root.race_page[`${this.Target_Range}_kof`] = this.Kof_Range;
        }
      },
      immediate: true,
    },
    inputValue: {
      handler() {
        this.$emit("update:modelValue", this.inputValue);
        if (this.lvl) {
          return null
        } else {
          this.$root.race_page[`${this.Target_Range}_kof`] = this.Kof_Range;
        }
      },
      immediate: true,
    },
  },
  methods: {
    getMin() {
      this.inputValue = this.Min_Range
    }
  },
};
</script>

<style scoped>
.range_slider {
  width: 344px;
  height: 1000vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}

input[type="range"] {
  -webkit-appearance: none;
  height: 344px;
  background: transparent;
  cursor: pointer;
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  transform: rotate(-90deg);
  border-radius: 0 12px 12px 0;
  overflow: hidden;
}

::-webkit-slider-runnable-track {
  background: rgba(255, 255, 255, 0.06);
  min-height: 344px;
}

::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 30px;
  min-height: 344px;
  background: url("@/assets/img/icon/slide_knob.svg") center center no-repeat;
  background-color: #ffffff;
  box-shadow: -100vh 0 0 100vh #ffffff;
  cursor: ns-resize;
  border: 0px;
  border-radius: 0 !important;
  box-sizing: border-box;
}

::-moz-range-track {
  background: rgba(255, 255, 255, 0.06);
  min-height: 344px;
}

::-moz-range-thumb {
  width: 30px;
  height: 344px;
  background: url("@/assets/img/icon/slide_knob.svg") center center no-repeat;
  background-color: #ffffff;
  box-shadow: -100vh 0 0 100vh #ffffff;
  cursor: ns-resize;
  border: 0px;
  border-radius: 0 !important;
  box-sizing: border-box;
}

::-ms-fill-lower {
  background: #ffffff;
}

::-ms-thumb {
  background: #fff;
  height: 344px;
  box-sizing: border-box;
}

::-ms-ticks-after {
  display: none;
}

::-ms-ticks-before {
  display: none;
}

::-ms-track {
  background: #ddd;
  color: transparent;
  width: 344px;
  border: none;
}

::-ms-tooltip {
  display: none;
}

.range_value {
  position: absolute;
  left: 16px;
  bottom: 11px;
  height: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #000000;
  background-color: #ffffff;
}

.range_bottom {
  width: 344px;
  background-color: #ffffff;
  cursor: pointer;
}
</style>