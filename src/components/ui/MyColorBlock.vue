<template>
  <div
    class="color_block"
    :class="{ 
      color_block_active: get_Active, 
      ethnos_dot: ethnos_color,
      ethnos_dot_active: ethnos_color && get_Active ,
      race_dot: race_color && !ethnos_color,
      race_dot_active: race_color && !ethnos_color && get_Active
      }"
  >
    <div
      class="color_block_2"
      :class="{ color_block_2_active: get_Active }"
      :style="{ backgroundColor: color }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "MyColorBlock",
  props: {
    color: {
      type: String,
      default: null,
    },
    active_link: {
      type: String,
      default: null,
    },
    select_link: {
      type: String,
      default: null,
    },
    ethnos_color: {
      type: Boolean,
      default: false,
    },
    race_color: {
      type: Boolean,
      default: false,
    },
  },

    computed: {
    get_Active() {
      return this.active_link === this.select_link;
    },
    t_Text() {
		return this.getText(this.ethnos_color, this.race_color);
		},
  },
};
</script>

<style scoped>
.color_block {
  width: 50px;
  height: 100%;
  flex: 1 1 auto;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
}

.ethnos_dot::after {
  content: '';
  width: 6px;
  height: 6px;
  position: absolute;
  right: 4px;
  top: 4px;
  background: #05FF00;
  border: 1px solid #000000;
  border-radius: 50%;
}

.race_dot::after {
  content: '';
  width: 6px;
  height: 6px;
  position: absolute;
  right: 4px;
  top: 4px;
  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 50%;
}

.color_block_2 {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

.color_block:hover {
  padding: 5px;
}

.color_block_2:hover {
  border-radius: 1px;
}
.color_block_active {
  border: 2px solid #ffffff;
  padding: 5px;
}
.ethnos_dot_active:after {
  content: '';
  width: 6px;
  height: 6px;
  position: absolute;
  right: 2px;
  top: 2px;
  background: #05FF00;
  border: 1px solid #000000;
  border-radius: 50%;
}
.race_dot_active:after {
  content: '';
  width: 6px;
  height: 6px;
  position: absolute;
  right: 2px;
  top: 2px;
  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 50%;
}
.color_block_2_active {
  border-radius: 1px;
}
</style>