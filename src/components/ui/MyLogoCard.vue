<template>
  <div
    class="logo"
    :class="{
      card_active: active,
    }"
  >
  <svg 
  width="25" 
  height="28" 
  viewBox="0 0 25 29" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg" 
  :stroke="Get_Color" 
  stroke-width="0.75" 
  stroke-linejoin="bevel">
<path d="M12.5 1L24.1913 7.75V21.25L12.5 28L0.808657 21.25V7.75L12.5 1Z"/>
<path d="M12.5 21L6.87084 11.25L18.1292 11.25L12.5 21Z"/>
<path d="M6.875 11.25L0.808594 7.75391"/>
<path d="M24.1953 7.75391L18.125 11.2578L12.4961 1L6.875 11.2578L0.8125 21.25L12.4961 20.9922V28"/>
<path d="M18.125 11.2578L24.1875 21.25L12.5039 20.9961"/>
</svg>
  </div>
</template>

<script>
export default {
  name: "MyLogoCard",
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    Get_Color() {
      if (this.active) {
        return '#0E1518'
      } else {
        return '#ffffff'
      }
    }
  },
};
</script>

<style scoped>
.logo {
  margin-left: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 41px;
  height: 41px;
  background: transparent;
  border-radius: 100%;
  cursor: pointer;
}

/* .wrapp:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #FFFFFF;
} */

.card_active {
  background: #ffffff;
  color: #0e1518;
  /* padding: 14px !important; */
}
</style>