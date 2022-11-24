<template>
  <div
    class="pasive_card"
    :class="{
      active_card: !passive && !basic,
      colors_card: colors_card,
      basic: basic,
      selection_card_active: get_Active,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "DonatCard",
  props: {
    title: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
  },
  computed: {
  Lang_Icon() {
        return `src/assets/img/icon/lang/icon_${this.title}.png`;
    }
  },
};
</script>

<style scoped>
.title {
  height: 24px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 4px;
}

.text {
  height: 15px;
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
}
</style>