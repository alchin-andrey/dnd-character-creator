<template>
  <div
    class="wrapp_head jbm-300"
    :class="{
      card_active: active,
      card_hover: !active,
    }"
  >
  <slot class="flex_head"></slot>
  {{ slots }}
  </div>
</template>

<script>
export default {
  name: "MyHeaderCard",
  props: {
    slots: {
      type: String,
      default: null,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>

.wrapp_head {
  padding: 0 12px 0 12px;
  height: 100%;
  /* width: 394px; */
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(60px);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 5px;
  text-transform: uppercase;
}

.flex_head {
  display: flex;
  align-items: center;
}

.card_hover:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #FFFFFF;
}

.card_active {
  background: #FFFFFF;
  color: #0E1518;
  /* padding: 14px !important; */
}
</style>