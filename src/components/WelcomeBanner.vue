<template>
  <div v-if="welcome" class="wrapp">
    <my-selection-card passive>
      <Welcome />
      <img @click="close()" src="@/assets/img/icon/close.svg"/>
    </my-selection-card>
</div>
</template>

<script>
import Welcome from "@/components/Welcome.vue";

export default {
  components: { Welcome },
  name: "WelcomeBanner",
  data() {
    return {
      welcome: true,
    };
  },
  methods: {
    close() {
        this.welcome = false;
      }
  },
};
</script>

<style scoped>
.wrapp {
  width: 394px;
  position: absolute;
  right: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, 0%);
  -ms-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
  z-index: 100;
}

img {
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
}
</style>