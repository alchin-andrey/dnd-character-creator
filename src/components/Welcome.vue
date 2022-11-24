<template>
  <div class="int-400">
  <div class="title">{{t_Title}}</div>
  <!-- <img @click="close()" src="@/assets/img/icon/close.svg"/> -->
  <div class="text">{{t_Text}}</div>
  <div class="text_html" v-html="t_Html"></div>
</div>
</template>

<script>
export default {
  name: "Welcome",

  computed: {
    t_Title() {
      return this.t('welcome_title');
    },
    t_Text() {
      return this.t('welcome_message');
    },
    t_Html() {
      return this.t('welcome_disclaimer');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  height: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin-bottom: 26px;
}

.title:first-letter {
  text-transform: uppercase;
}

.text {
  color: rgba(255, 255, 255, 1);
  text-align: start;
  white-space: pre-line;
}

.text:first-letter,
.text_html:first-letter {
  text-transform: uppercase;
}

.text_html {
  color: rgba(255, 255, 255, 0.4);
  
}
</style>