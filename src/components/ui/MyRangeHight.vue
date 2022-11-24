<template>
  <div class="range_slider">
    <input
      :style="{
        'margin-bottom': Range_Margin,
        width: Range_Width,
      }"
      type="range"
      class="vertical"
      :min="min_range"
      :max="max_range"
      v-model.number="inputValue"
      step="1"
    />
    <div
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
  name: "MyRangeHight",
  data() {
    return {
      inputValue: "",
    };
  },
  props: {
    modelValue: {
      type: Number,
      default: null,
    },
    min_range: {
      type: Number,
      default: null,
    },
    max_range: {
      type: Number,
      default: null,
    },
  },


  computed: {
    Kof_Height () {
      let min = this.$root.MY.race.settings.height.min;
      let max = this.$root.MY.race.settings.height.max;
      return (this.$root.MY.height - min) / (max - min);
    },

    t_Unit() {
      return `${this.inputValue} ${this.t("cm")}`;
    },
    Range_Margin() {
      return `calc((100vh - 64px - ((100vh - 64px) / 210 * ${this.min_range} - 30px) - ((100vh - 64px) - ((100vh - 64px) / 210 * ${this.max_range}))) / 2 - 172px - 1px)`;
    },
    Range_Width() {
      return `calc(100vh - 64px - ((100vh - 64px) / 210 * ${this.min_range} - 30px) - ((100vh - 64px) - ((100vh - 64px) / 210 * ${this.max_range})))`;
    },
    Range_Bottom() {
      return `calc((100vh - 64px) / 210 * ${this.min_range} - 30px)`;
    },
  },
  watch: {
    "$root.MY.race": {
      handler() {
        setTimeout(() => {
          this.inputValue = this.$root.MY.height + 1;
          this.$emit("update:modelValue", this.inputValue);
          this.inputValue = this.$root.MY.height - 1;
          this.$emit("update:modelValue", this.inputValue);
        }, 1);
      },
      immediate: true,
    },
    modelValue: {
      handler() {
        this.inputValue = this.modelValue;
        this.$root.race_page.height_kof = this.Kof_Height;
      },
      immediate: true,
    },
    inputValue: {
      handler() {
        this.$emit("update:modelValue", this.inputValue);
        this.$root.race_page.height_kof = this.Kof_Height;
      },
    },
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
  -webkit-transform:rotate(-90deg);
  -moz-transform:rotate(-90deg);
  -ms-transform:rotate(-90deg);  
  transform:rotate(-90deg); 
  border-radius: 0 12px 12px 0;
  overflow: hidden;
  /* margin-bottom: calc((100vh - 64px - ((100vh - 64px) / 210 * 90 - 30px) - ((100vh - 64px) - ((100vh - 64px) / 210 * 120))) / 2 - 172px - 1px);
  width: calc(100vh - 64px - ((100vh - 64px) / 210 * 90 - 30px) - ((100vh - 64px) - ((100vh - 64px) / 210 * 120))); */
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
  /* height: calc((100vh - 64px) / 210 * 90 - 30px); */
  background-color: #ffffff;
}
</style>