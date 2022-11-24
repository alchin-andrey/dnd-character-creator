<template>
<div class="int-400">
  <div class="title" v-html="t_Html"></div>
            <h3 class="title"
            :class="{
              only: !text,
    }"
    >{{ t_Title }}</h3>
            <p class="text">
              {{ t_Text }}
              <br v-if="rare" />
              <br v-if="rare" />
              <span v-if="rare">{{ t_Rare }}</span>
            </p>
          </div>
</template>

<script>
export default {
  name: "MyCardText",
  props: {
    title: {
      type: String,
      default: null,
    },
    title_html: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
    rare: {
      type: String,
      default: null,
    },
  },
    computed: {
    t_Title() {
      return this.t(this.title);
    },
    t_Html() {
      return this.t(this.title_html);
    },
    t_Text() {
      return this.t(this.text);
    },
    t_Rare() {
      return this.t(`${this.rare}_details`);
    },

  },
};
</script>

<style scoped>

.title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin-bottom: 5px;
}

.only {
  margin-bottom: 0px;
}

.title:first-letter {
  text-transform: uppercase;
}



.text {
  color: rgba(255, 255, 255, 0.4);
  text-align: start;
  white-space: pre-line;
}

.text:first-letter {
  text-transform: uppercase;
}

.text span {
  color: #ffc93d;
  margin-top: 20px;
}

.text span:first-letter {
  text-transform: uppercase;
}

</style>