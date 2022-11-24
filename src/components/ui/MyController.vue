<template>
  <div class="column hover" :class="{ active_link: active}">
    <div class="column_title jbm-300">
      <div>{{ t_Title }}</div>
    </div>
    <div class="column_link int-400">
      <div>{{value}} {{t_Unit}}</div> 
      <div class="note">{{ note }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyController",
  props: {
    modelValue: {
      type: Number,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    value: {
      type: Number,
      default: null,
    },
    unit: {
      type: String,
      default: null,
    },
    note: {
      type: String,
      default: null,
    },
    active: {
      type: Boolean,
      default: false,
    },
    age: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    t_Title() {
		return this.t(this.title);
		},
    t_Unit() {
		return this.age ? this.t(this.getAgeUnits(this.value)) : this.t(this.unit);
		},
	},
  
  methods: {
    getAgeUnits(numb) {
      let mod10 = Math.abs(numb % 10);
      let mod100 = Math.abs(numb % 100);
      if (mod100 > 10 && mod100 < 20) {
        return 'years'
      } else if (mod10 >= 2 && mod10 <= 4) {
        return 'yeara'
      } else if (mod10 === 1) {
        return 'year'
      } else {
        return 'years'
      }
    },
  },
};
</script>

<style scoped>
.column {
  height: 18px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
}

.hover:hover::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 2px;
  left: -40px;
  top: calc(50% - 1px);
  background: #ffffff;
}

.active_link:before {
  content: '';
  position: absolute;
  width: 35px;
  height: 2px;
  left: -39px;
  top: calc(50% - 1px);
  background: #FFFFFF;
}

.column_title {
  width: 120px;
}

.column_link {
  width: 110px;
  margin-left: 4px;
  position: relative;
  display: flex;
  white-space: nowrap;
}

.note {
  margin-left: 8px;
  color: rgba(255, 255, 255, 0.2);
  white-space: nowrap; /* Текст не переносится */
  overflow: hidden; /* Обрезаем всё за пределами блока */
  text-overflow: ellipsis;
}

.note:first-letter {
  text-transform: uppercase;
}

.column_link::after {
  content: url(@/assets/img/icon/arrow_slider.svg);
  position: absolute;
  right: -22px;
  top: -2px;
  cursor: ew-resize;
}
</style>