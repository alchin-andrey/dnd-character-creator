<template>
  <div 
  class="size jbm-300"
  >
      <div class="skale" 
      v-for = "n in Skale_Arr"
      :key="n"
      @click="getSize(n)"
      :style="{
        bottom: getBottom(n),
        }">{{n}}</div>
  </div>
</template>

<script>
export default {
  name: "MyRangeSize",
  data() {
    return {
      // skale_arr: [0, 5, 10, 15, 20],
    }
  },
  props: {
    arr: {
      type: Array,
      default: null,
    },
    lvl: {
      type: Boolean,
      default: false,
    },
    weight: {
      type: Boolean,
      default: false,
    },
    age: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    Race_Set_Obj() {
      return this.$root.MY.race.settings;
    },
    Target_Range() {
      if (this.lvl) {
        return 'level';
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
    Min_Range() {
      if (this.lvl) {
        return this.min_lvl;
      } else {
        return this.Race_Set_Obj[this.Target_Range].min;
      } 
    },
    Level_Arr() {
      return [0, 5, 10, 15, 20]
    },
    Weight_Arr() {
      let min = this.Race_Set_Obj.weight.min
      let max = this.Race_Set_Obj.weight.max
      return [0, min, max]
    },
    Age_Arr() {
      let baby = this.Race_Set_Obj.age.min
      let young = this.Race_Set_Obj.age.young
      let mature = this.Race_Set_Obj.age.mature
      let old = this.Race_Set_Obj.age.old
      let oldest = this.Race_Set_Obj.age.max
      return [0, baby, young, mature, old, oldest]
    },
    Skale_Arr() {
      if (this.lvl) {
        return this.Level_Arr
      } else if (this.weight) {
        return this.Weight_Arr
      } else if (this.age) {
        return this.Age_Arr
      } else {
        return null
      }
    },
  },
  methods: {
    getBottom(numb) {
      let max_size = this.Skale_Arr[this.Skale_Arr.length - 1]
      return `calc((100vh - 64px - 30px) / ${max_size} * ${numb} - 1px + 15px - 9px)`;
    },
    getSize(numb) {
      if (numb >= this.Min_Range) {
        this.$root.MY[this.Target_Range] = numb
      } else {
        this.$root.MY[this.Target_Range] = this.Min_Range
      }
    }
  }
};
</script>

<style scoped>
.pad_size {
  padding: 15px 0;
  height: 100%;
}

.size {
  font-size: 11.45px;
  display: flex;
  justify-content: flex-end;
  height: 100%;
  position: relative;
}

.skale {
  position: absolute;
  cursor: pointer;
  /* bottom: 0px; */
}
</style>