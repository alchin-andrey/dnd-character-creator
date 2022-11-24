<template>
  <div
    class="column"
    :class="{
      active_link: active,
      cursor_pointer: pass_link,
      hover: pass_link,
    }"
  >
    <div class="column_title jbm-300">{{ t_Title }}</div>
    <div
      class="column_link int-400"
      :class="{
        rare: rare,
        active: pass_link,
        icon: pass_link || active,
        icon_active: active,
      }"
    >
      {{ t_Type }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MySelection",
  props: {
    title: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: null,
    },
    type_arr: {
      type: Array,
      default: [],
    },
    rare: {
      type: String,
      default: null,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    pass_link() {
      
      let skin = this.$root.MY.race.settings.color.skin.length;
      let eyes = this.$root.MY.race.settings.color.eyes.length;
      let hair = this.$root.MY.race.settings.color.hair.length;
      let fact_1 = this.type !== "common";
      let fact_2 = this.title == "color_skin" && skin == 0;
      let fact_3 = this.title == "color_eyes" && eyes == 0;
      let fact_4 = this.title == "color_hair" && hair == 0;
      return fact_1 && !(fact_2 || fact_3 || fact_4);
    },

    t_Title() {
      return this.t(this.title);
    },
    t_Type() {
      if (this.type) {
        return this.title === "gender"
          ? this.getGenderName()
          : this.t(this.type);
      } else if (this.type_arr.length === 0) {
        return "—";
      } else {
        let arr = [];
        for (let i in this.type_arr) {
          arr.push(this.t(this.type_arr[i]));
        }
        return arr.map((n) => `${n[0].toUpperCase()}${n.slice(1)}`).join(", ");
      }
    },
  },
  methods: {
    getGenderName() {
      if (this.$root.MY.gender.feel === 'cisgender') {
        return this.t(this.type);
      } else {
        return `${this.t(this.type)} *`;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.column {
  height: 18px;
  display: flex;
  align-items: center;
  position: relative;
  
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
  content: "";
  position: absolute;
  width: 35px;
  height: 2px;
  left: -39px;
  top: calc(50% - 1px);
  background: #ffffff;
}

.column_title {
  width: 120px;
  
}

.column_title div {
  display: inline;
}

.column_link {
  width: 132px;
  padding-right: 16px;
  margin-left: 4px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(255, 255, 255, 0.2);
}

.column_link div {
  white-space: nowrap; /* Текст не переносится */
  overflow: hidden; /* Обрезаем всё за пределами блока */
  text-overflow: ellipsis;
}

.column_link:first-letter {
  text-transform: uppercase;
}

.icon::after {
  content: url(@/assets/img/icon/arrow_down_small.svg);
  position: absolute;
  right: 0px;
  top: -2px;
}

.icon_active::after {
  content: url(@/assets/img/icon/arrow_right_small.svg);
  position: absolute;
  right: 0px;
  top: -2px;
}

.rare {
  color: #ffc93d;
}

.active {
  color: #ffffff;
}

.cursor_pointer {
  cursor: pointer;
}
</style>