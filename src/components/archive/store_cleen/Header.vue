<template>
	<div class="header" @click="showMY()">
		<my-logo-card @click="show('logo')" :active="logo" />
		<div class="header_col">
			<my-header-card @click="show('lang')" :active="lang">
				<!-- <emoji v-for="n in em_Icon" :key="n"
					:data="emojiIndex"
					:emoji="n"
					:set="set_emoji"
					:size="15"
				/> -->
				<img class="header_icon" :src="Lang_Icon" alt="Lang_Icon" />
			</my-header-card>
			<my-header-card
				@click="show('lvl')"
				:active="lvl"
				:slots="Char_Lvl"
			/>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
	name: "Header",
	computed: {
		...mapState({
			MY: (state) => state.MY.MY,
			MY_level: (state) => state.MY.MY.level,
			//race_page
			logo: (state) => state.race_page.race_page.shown.logo,
			lang: (state) => state.race_page.race_page.shown.lang,
			lvl: (state) => state.race_page.race_page.shown.lvl,
			dic_lang: (state) => state.dic.dic.lang,
		}),

		...mapGetters({
			Select_Lang: "dic/Select_Lang",
		}),

		em_Icon() {
			return this.dic_lang.find((icon) => icon.mark === this.Select_Lang)
				.icon;
		},

		Lang_Icon() {
			return require(`@/assets/img/icon/lang/icon_${this.Select_Lang}.png`);
		},

		Char_Lvl() {
			return `lvl ${this.MY_level}`;
		},
	},

	methods: {
		...mapActions({
			show: "race_page/show",
		}),

		showMY() {
			console.log(this.MY);
		},
	},
};
</script>

<style scoped>
.header {
	height: 28px;
	margin: 0 0 22px 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.header_col {
	height: 100%;
	display: flex;
	gap: 4px;
}

.header_icon {
	height: 18px;
}

.emoji-mart-emoji {
	padding: 0;
	line-height: 0;
}
</style>
