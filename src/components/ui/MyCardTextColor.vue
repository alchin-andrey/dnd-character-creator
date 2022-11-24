<template>
  <div class="int-400">
    <h3 class="title">{{ t_Title }}</h3>
    <p
      class="text"
      :class="{
        ethnos: ethnos_color,
        race: race_color && !ethnos_color,
      }"
    >
      {{ t_Text }}
    </p>
  </div>
</template>

<script>
export default {
  name: "MyCardTextColor",
  props: {
    title: {
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
    t_Title() {
		return this.t(this.title);
		},
    t_Text() {
		if (this.ethnos_color) {
        return `${this.t("characteristic")} ${this.t("for_ethnos")}`;
      } else if (this.race_color) {
        return `${this.t("characteristic")} ${this.t("for_race")}`;
      } else {
        return `${this.t("not_characteristic")} ${this.t("for_race")}`;
      };
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
  margin-bottom: 4px;
}

.title:first-letter {
  text-transform: uppercase;
}

.text {
  color: rgba(255, 255, 255, 0.4);
  text-align: start;
}

.text:first-letter {
  text-transform: uppercase;
}

.ethnos {
  color: #05ff00;
}

.race {
  color: #ffffff;
}
</style>