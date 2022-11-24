<template>
	<div class="header" @click="showMY()">
		<my-logo-card
			@click="show_page('logo')"
			:active="race_page.shown.logo"
		/>
		<div class="header_col">
			<my-header-card
				@click="show_page('lang')"
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
				@click="show_page('lvl')"
				:active="race_page.shown.lvl"
				:slots="Char_Lvl"
			/>
		</div>
	</div>
</template>

<script>
import MY from "@/assets/catalog/MY.js";
import dic from "@/assets/catalog/texts/dic";
import race_page from "@/assets/catalog/page_data/race_page";
export default {
	name: "Header",
	data() {
		return {
			dic: dic,
			MY: MY,
			race_page: race_page,
		};
	},
	computed: {
    Select_Lang () {
      return this.dic.select_lang
    },

    em_Icon() {
			return this.dic.lang.find(icon => icon.mark === this.Select_Lang).icon;
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

	  show_page(name) {
		  this.$emit('getShow', name)
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
