<template>
  <div class="flex_options">
    <div class="slider_a_w_back">
      <div
        class="slider_a_w"
        :style="{ height: `calc(100% / ${arr[arr.length - 1]} * ${value})` }"
      >
        <div class="slider_knob"></div>
        <div class="slider_value">{{ t_Unit }}</div>
      </div>
    </div>

    <div class="size_a_w">
      <div v-for="n in arr" :key="n" :class="{ passive: n === 'x' }">
        {{ n }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AgeWeight",
  props: {
    value: {
      type: Number,
      default: null,
    },
    unit: {
      type: String,
      default: null,
    },
    arr: {
      type: Array,
      default: [],
    },
    age: {
      type: Boolean,
      default: false,
    },
    lvl: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    t_Unit() {
      if (this.age) {
        return `${this.value} ${this.t(this.getAgeUnits(this.value))}`;
      } else if (this.lvl) {
        return `${this.value}${this.t('level_unit')} ${this.t('level')}`;
      } else {
        return `${this.value} ${this.t('kg')}`;
      }
    },
  },

  methods: {
    getAgeUnits(numb) {
      let mod10 = Math.abs(numb % 10);
      let mod100 = Math.abs(numb % 100);
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slider_a_w_back {
  width: 344px;
  height: 100%;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}
.slider_a_w {
  width: 100%;
  background: #ffffff;
  padding: 12px 16px 11px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.slider_knob {
  width: 96px;
  height: 6px;
  background: #0e1518;
  opacity: 0.2;
  border-radius: 4px;
  margin: 0 auto;
  cursor: ns-resize;
}

.slider_value {
  height: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #000000;
}
.size_a_w {
  width: 42px;
  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 300;
  font-size: 11.45px;
  line-height: 18px;
  text-align: right;
  letter-spacing: 0.06em;
  color: #ffffff;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  justify-content: space-between;
  text-align: end;
  height: 100%;
}

.passive {
  color: rgba(255, 255, 255, 0);
}
</style>