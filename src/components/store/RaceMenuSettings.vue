<template>
	<!-- <div class="main_chapter_menu"> -->
	<div class="selection_menu_wrap">
		<div class="selection_menu">
			<my-selection
				@click="showSettings__Race('ethnos')"
				:active="race_page.shown.ethnos"
				title="ethnos"
				:type="MY.ethnos.name"
				:rare="MY.ethnos.rare"
			></my-selection>
		</div>

		<div
			class="selection_menu"
			v-if="Castom_Race_Settings_Visib"
		>
			<my-selection
				v-if="MY.race.settings.custom_stats"
				@click="showSettings__Race('stats')"
				:active="race_page.shown.stats"
				title="stats"
				:type_arr="MY.custom_race.stats"
			></my-selection>
			<my-selection
				v-if="MY.race.settings.custom_skills"
				@click="showSettings__Race('skills')"
				:active="race_page.shown.skills"
				title="skills"
				:type_arr="race_page.extra.skills"
			>
			</my-selection>
			<my-selection
				v-if="
					MY.race.settings.custom_languages ||
					MY.ethnos.custom_languages
				"
				@click="showSettings__Race('languages')"
				:active="race_page.shown.languages"
				title="languages"
				:type_arr="Lang_Extra"
			>
			</my-selection>
		</div>

		<div class="selection_menu">
			<my-selection
				@click="showSettings__Race('gender')"
				:active="race_page.shown.gender"
				title="gender"
				:type="MY.gender.phisiological"
			></my-selection>
			<my-controller
				@click="showSettings__Race('age')"
				:active="race_page.shown.age"
				title="age"
				:value="MY.age"
				age
				:note="Age_Note"
			></my-controller>
			<my-controller
				@click="showSettings__Race('height')"
				:active="race_page.shown.height"
				title="height"
				:value="MY.height"
				unit="cm"
				:note="Hight_Note"
			></my-controller>
			<my-controller
				@click="showSettings__Race('weight')"
				:active="race_page.shown.weight"
				title="weight"
				:value="MY.weight"
				unit="kg"
				:note="Weight_Note"
			>
			</my-controller>
			<my-selection
				@click="showSettings__Race('skin_color')"
				:active="race_page.shown.skin_color"
				title="color_skin"
				:type="getCharColor('skin').name"
			>
			</my-selection>
			<my-selection
				@click="showSettings__Race('eyes_color')"
				:active="race_page.shown.eyes_color"
				title="color_eyes"
				:type="getCharColor('eyes').name"
			>
			</my-selection>
			<my-selection
				@click="showSettings__Race('hair_color')"
				:active="race_page.shown.hair_color"
				title="color_hair"
				:type="getCharColor('hair').name"
			>
			</my-selection>
		</div>
	</div>
	<!-- </div> -->
</template>

<script setup>
import { useShowSettings } from "@/hooks/PAGES/common/useShowSettings.js";
const { showSettings__Race } = useShowSettings();
</script>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
	name: "RaceMenuSettings",
  data() {
    return {
      custom_settings: ["stats", "skills", "languages"],
    }
  },
	computed: {
		...mapState({
			MY: (state) => state.MY.MY,
			race_page: (state) => state.pages.race_page,
		}),

		// ...mapGetters("pages", ["shown_Home"]),

    Castom_Race_Settings_Visib() {
      return this.MY.race.settings.custom_stats ||
      this.MY.ethnos.custom_stats ||
			this.MY.race.settings.custom_skills ||
      this.MY.ethnos.custom_skills ||
			this.MY.race.settings.custom_languages ||
			this.MY.ethnos.custom_languages;
		},

		Race_Set_Obj() {
			return this.MY.race.settings;
		},

		Age_Note() {
      let age = this.MY.race.settings.age;
			let baby = age.min;
			let young = age.young;
			let mature = age.mature;
			let old = age.old;
			let oldest = age.max;
      const MY_age = this.MY.age;
			if (baby <= MY_age && MY_age < young) {
				return this.t("baby");
			} else if (young <= MY_age && MY_age < mature) {
				return this.t("young");
			} else if (mature <= MY_age && MY_age < old) {
				return this.t("mature");
			} else if (old <= MY_age && MY_age < oldest) {
				return this.t("old");
			} else {
				return this.t("oldest");
			}
		},

		Weight_Note() {
			let kof = this.race_page.weight_kof;
			if (kof === 0) {
				return this.t("skinny");
			} else if (kof === 1) {
				return this.t("fat");
			} else {
				return null;
			}
		},

		Hight_Note() {
			return this.t(this.Race_Set_Obj.size);
		},

		Lang_Extra() {
			let arr = [];
			let obj = this.race_page.extra.languages;
			for (let i in obj) {
				arr.push(obj[i].name);
			}
			return arr;
		},
	},

	methods: {
		...mapActions("pages", {
			// showSettings: "showRaceSettings",
			showHome: "goHome",
			closeEthnos: "closeRaceEthnos",
			closeColor: "closeRaceColor",
			closePar: "closeRacePar",
		}),

		getCharColor(value) {
			if (
				this.MY.color[value] === null &&
				this.MY.ethnos.name === "common"
			) {
				return this.MY.race.settings.color[value][0];
			} else if (this.MY.color[value] === null) {
				return this.MY.ethnos.color[value][0];
			} else {
				return this.MY.color[value];
			}
		},
	},
};
</script>

<style scoped>
.main_chapter_menu {
	/* height: 100%; */
	/*width: 320px;*/
	padding: 40px 32px 32px 32px;
	overflow-y: scroll;
	max-height: 100%;

	/*padding-left: 32px;*/
	/*padding-top: 32px;*/
	/*max-height: 100%;*/
	/*flex: 1 1 auto;*/
	/*overflow-y: scroll;*/
	/*max-height: 100%;*/
	scrollbar-width: none;
}

.main_chapter_menu::-webkit-scrollbar {
	width: 0;
}

.selection_menu_wrap {
	/*overflow-y: scroll;*/
	display: flex;
	flex-direction: column;
	gap: 34px;
	/*overflow-y: scroll;*/
	/*height: 100px;*/
	/*overflow: hidden;*/
	/*max-height: 100%;*/
}

.selection_menu_wrap::-webkit-scrollbar {
	width: 0;
}

.selection_menu {
	/* height: 100%; */
	width: 256px;
	display: flex;
	flex-direction: column;
	gap: 8px;
	/*margin-bottom: 34px;*/
}
</style>
