<template>
	<div class="header" @click="showMY()">
		<my-logo-card @click="show('logo')" :active="race_page.shown.logo" />
		<div class="header_col">
			<my-header-card @click="show('lang')" :active="race_page.shown.lang">
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
import { computed } from 'vue'
import { useStore } from "vuex";
export default {
	name: "Header",
  setup() {
    const store = useStore()

    const MY = computed(() => store.state.MY.MY)
    const dic = computed(() => store.state.dic.dic)
    const race_page = computed(() => store.state.race_page.race_page)

    function showMY() {
			console.log(MY.value);
		}

    const Char_Lvl = computed(() => {
      return `lvl ${MY.value.level}`
    })

    const Select_Lang = computed(() => store.getters["dic/Select_Lang"])
    
    const Lang_Icon = computed(() => {
      return require(`@/assets/img/icon/lang/icon_${Select_Lang.value}.png`)
    })
    
    const em_Icon = computed(() => {
			return dic.value.lang.find((icon) => icon.mark === Select_Lang.value).icon;
		})

    function show(name) {
      store.dispatch("race_page/show", name)
    }

    return {
      race_page,
      Char_Lvl, 
      Select_Lang,
      Lang_Icon,
      em_Icon, 
      show,
      showMY
    }
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