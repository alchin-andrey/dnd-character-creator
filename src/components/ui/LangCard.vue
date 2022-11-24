<template>
	<div class="int-400">
		<img class="title" :src="Lang_Icon"/>
		<!-- <div class="title">
				<emoji v-for="n in title" :key="n"
					:data="emojiIndex"
					:emoji="n"
					:set="set_emoji"
					:size="20"
				/>
		</div> -->
		<div class="text">{{ text }}</div>
	</div>
</template>

<script>
export default {
	name: "LangCard",
	props: {
    mark: {
			type: String,
			default: null,
		},
		title: {
			type: Array,
			default: null,
		},
		text: {
			type: String,
			default: null,
		},
	},
	computed: {
		Lang_Icon() {
			return `src/assets/img/icon/lang/icon_${this.mark}.png`;
		},
	},
};
</script>

<style scoped>
.title {
	height: 24px;
  display: flex;
  gap: 6px;
  align-items: center;
	margin-bottom: 4px;
}

.emoji-mart-emoji {
	padding: 0;
	line-height: 0;
}

.text {
	height: 15px;
	font-weight: 700;
	font-size: 13px;
	line-height: 15px;
}
</style>
