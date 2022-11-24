<template>
	<div class="header" @click="showMY()">
		<my-logo-card @click="show('logo')" :active="race_page.shown.logo" />
		<div class="header_col">
			<my-header-card
				@click="show('lang')"
				:active="race_page.shown.lang"
			>
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
				:active="race_page.shown.lvl"
				:slots="Char_Lvl"
			/>
		</div>
	</div>
</template>

<script>
import { computed, reactive, ref } from "vue";
import { useStore } from "vuex";
export default {
	name: "Header",
	setup() {
		const store = useStore();

		// const MY = reactive(store.state.MY.MY)
		const MY = computed(() => store.state.MY.MY);
		const race_page = reactive(store.state.race_page.race_page);
		const dic = reactive(store.state.dic.dic);

		const Select_Lang = computed(() => store.getters["dic/Select_Lang"]);

		function show(name) {
			store.dispatch("race_page/show", name);
		}

		return {
			dic,
			MY,
			race_page,
			Select_Lang,
			show,
		};
	},
	computed: {
		em_Icon() {
			return this.dic.lang.find((icon) => icon.mark === this.Select_Lang)
				.icon;
		},

		Lang_Icon() {
			return require(`@/assets/img/icon/lang/icon_${this.Select_Lang}.png`);
		},

		Char_Lvl() {
			return `lvl ${this.MY.level}`;
		},
	},

	methods: {
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
