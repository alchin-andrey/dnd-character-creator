<template>
  <div class="gender_item" :class="{active: active_link}">
    <img :src="get_Image" :alt="img" />
  </div>
</template>

<script>
export default {
  name: "MyButtonGender",
  props: {
    img: {
      type: String,
      default: null,
    },
    active_link: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    get_Image() {
      return `src/assets/img/icon/gender/${this.img}.svg`;
    },
  },
};
</script>

<style scoped>
.gender_item {
  width: 72px;
  height: 72px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.gender_item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.active {
  border: 2px solid #ffffff;
}
</style>