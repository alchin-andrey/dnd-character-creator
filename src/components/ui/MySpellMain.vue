<template>
	<div class="col">
		<div class="col_title">{{ t_Title }}<span>:</span></div>
    <div v-if="!emoji" class="col_text"> {{ text }} </div>
		<div v-else class="col_text">
			{{ em_Before }}
      <emoji
				v-if="em_Upd"
				:data="emojiIndex"
				:emoji="em_Upd"
				:set="set_emoji"
				:size="13"
			/>{{ em_After }}
		</div>
	</div>
</template>

<script>
export default {
	name: "MySpellMain",
	props: {
		title: {
			type: String,
			default: null,
		},
		text: {
			type: String,
			default: null,
		},
		emoji: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		em_Upd() {
			return this.updEmoji(this.text);
		},

		em_Before() {
			return this.beforeEmoji(this.text);
		},

		em_After() {
			return this.afterEmoji(this.text);
		},

		t_Title() {
      let string = this.t(this.title);
			return string.charAt(0).toUpperCase() + string.slice(1)
		},
	},
};
</script>

<style scoped>
.col {
	min-height: 18px;
	display: flex;
	align-items: flex-start;
}

.col_title {
	margin-right: 14px;
	display: flex;
}

.col_title span {
	color: rgba(255, 255, 255, 0.4);
	min-width: 5px;
}

.col_text {
	text-align: start;
}

.emoji-mart-emoji {
	padding: 0;
	line-height: 0;
	vertical-align: text-top;
}
</style>
