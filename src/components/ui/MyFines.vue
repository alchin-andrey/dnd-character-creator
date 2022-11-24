<template>
  <div class="column">
    <div class="icon">
      <img :src="getIcon(icon)" :alt="icon" />
    </div>
    <div class="text int-400" :class="{ emoji_true: em_Upd }">
      <span
        :class="{
          positive: title !== 'disadvantage',
          negative: title === 'disadvantage',
        }"
        >{{ t_Title }}</span
      > {{ em_Before
				}}<emoji
					v-if="em_Upd"
					:data="emojiIndex"
					:emoji="em_Upd"
					:set="set_emoji"
					:size="14"
				/>{{ em_After }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MyFines",
  props: {
    modelValue: {
      type: Number,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    details: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
  },
    computed: {
    t_Title() {
		return this.t(this.title);
		},
    t_Details() {
		return this.t(this.details);
		},

    em_Upd() {
			return this.updEmoji(this.t_Details);
		},

		em_Before() {
			return this.beforeEmoji(this.t_Details);
		},

		em_After() {
			return this.afterEmoji(this.t_Details);
		},
	},
  methods: {
    getIcon(name) {
      return `src/assets/img/icon/fines/${name}.svg`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.column {
  display: flex;
  min-height: 18px;
}

.text {
  margin-left: 4px;
  padding: 2px 0 1px 0;
}

.text:first-letter {
  text-transform: uppercase;
}

.emoji_true {
  padding: 0 0 0 0;
  margin-top: -1px;
}

.positive {
  color: #05ff00;
}

.negative {
  color: #FF0000;
  /* font-weight: 600; */
}

.emoji-mart-emoji {
	padding: 0;
	line-height: 0;
  top: 3px;
}
</style>