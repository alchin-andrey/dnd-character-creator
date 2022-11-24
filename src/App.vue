<template>
	<!-- Левый бар -->
	<div class="sidebar_left">
		<div class="main_chapter">
			<Header />
			<my-slider
        numb="01"
				title="race"
				:arr="Object.values(this.race)"
				:arr_keys="Object.keys(this.race)"
				:type="MY.race"
			>
			</my-slider>
		</div>

		<div class="main_menu_wrap">
			<div class="main_chapter_menu">
				<RaceMenuSettings />
			</div>
			<transition name="btm-fade" mode="out-in">
				<my-button v-if="pages.shown_home" numb="02" title="class"></my-button>
				<my-button-back v-else @click="showHome()"></my-button-back>
			</transition>
		</div>
	</div>

	<!-- Выпадающее меню -->
	<div class="sidebar_wrap" :class="{ sidebar_wrap_open: pages.setting_open }">
		<!-- Превью -->
		<my-selection-box :shown="main_page.shown.logo">
			<Description />
		</my-selection-box>
		<!-- Превью -->

		<!-- Смена языка -->
		<my-selection-box :shown="main_page.shown.lang">
			<my-selection-card
				v-for="item in dic.lang"
				:key="item"
				@click="getLangSite(item.mark, item.icon)"
				:select_link="item.mark"
				:active_link="dic.select_lang"
			>
				<LangCard :title="item.icon" :text="item.name" :mark="item.mark" />
			</my-selection-card>
		</my-selection-box>
		<!-- Смена языка -->

		<!-- Уровень -->
		<my-selection-box :shown="main_page.shown.lvl">
			<div class="flex_options">
				<MyRange v-model.number="MY.level" lvl />
				<MyRangeSize lvl />
			</div>
		</my-selection-box>
		<!-- Уровень -->

		<!-- Этнос-->
		<my-selection-box :shown="race_page.shown.ethnos">
			<EthnosChoice />
		</my-selection-box>
		<!-- Этнос -->

		<!-- Гендр -->
		<my-selection-box :shown="race_page.shown.gender">
			<GenderChoiceStore />
		</my-selection-box>
		<!-- Гендр -->

		<!-- Цвет кожи -->
		<my-selection-box :shown="race_page.shown.skin_color">
			<my-color-select body_part="skin" />
		</my-selection-box>
		<!-- Цвет кожи -->

		<!-- Цвет глаз -->
		<my-selection-box :shown="race_page.shown.eyes_color">
			<my-color-select body_part="eyes" />
		</my-selection-box>
		<!-- Цвет глаз -->

		<!-- Цвет волос -->
		<my-selection-box :shown="race_page.shown.hair_color">
			<my-color-select body_part="hair" />
		</my-selection-box>
		<!-- Цвет волос -->

		<!-- Возраст -->
		<my-selection-box :shown="race_page.shown.age">
			<div class="flex_options">
				<MyRange v-model.number="MY.age" age />
				<MyRangeSize age />
			</div>
		</my-selection-box>
		<!-- Возраст -->

		<!-- Рост -->
		<my-selection-box :shown="race_page.shown.height">
			<div class="flex_options">
				<MyRange v-model.number="MY.height" height />
				<mySizeGrowth />
			</div>
		</my-selection-box>
		<!-- Рост -->

		<!-- Вес -->
		<my-selection-box :shown="race_page.shown.weight">
			<div class="flex_options">
				<MyRange v-model.number="MY.weight" weight />
				<MyRangeSize weight />
			</div>
		</my-selection-box>
		<!-- Вес -->

		<!-- Характеристики -->
		<my-selection-box :shown="race_page.shown.stats">
			<RaceCustomStats />
		</my-selection-box>
		<!-- Характеристики -->

		<!-- Навыки -->
		<my-selection-box :shown="race_page.shown.skills">
			<my-card-text text="skills_details"></my-card-text>
			<my-selection-card
				v-for="(val, name, i) in MY.skills"
				:key="name"
				@click="
					getExtraActiv(false, skills_Select.includes(name), name, 'skills')
				"
				:class="{ skill_marg: getSkillMarg(i, MY.skills, name) }"
				:active_boll_link="skills_Select.includes(name)"
			>
				<my-attribute :title="name" plus :numb="Skill_Mastery" :icon="val.mod">
				</my-attribute>
				<my-card-text title="" :text="`${name}_details`"></my-card-text>
			</my-selection-card>
		</my-selection-box>
		<!-- Навыки -->

		<!-- Языки -->
		<my-selection-box :shown="race_page.shown.languages">
			<my-selection-card
				v-for="lang in Lang_Not_Humman"
				:key="lang"
				@click="
					getExtraActiv(
						Lang_Activ.includes(lang),
						Lang_Select.includes(lang),
						lang,
						'languages'
					)
				"
				:active_boll_link="Lang_Select.includes(lang)"
				:basic="Lang_Activ.includes(lang)"
			>
				<my-card-text :title="lang.name" :text="lang.details"></my-card-text>
			</my-selection-card>

			<div
				class="skroll_list jbm-300"
				:class="{
					skroll_list_closed: !race_page.shown_humman_lang,
					skroll_list_open: race_page.shown_humman_lang,
				}"
				v-vpshow="race_page.shown_humman_lang"
				@click="showRaceScroll('shown_humman_lang')"
			>
				{{ Lang_Humman_Title }}
			</div>
			<transition name="scroll-fade">
				<div v-if="race_page.shown_humman_lang" class="flex_gap-8">
					<my-selection-card
						v-for="lang in Lang_Humman"
						:key="lang"
						@click="
							getExtraActiv(
								Lang_Activ.includes(lang),
								Lang_Select.includes(lang),
								lang,
								'languages'
							)
						"
						:active_boll_link="Lang_Select.includes(lang)"
						:basic="Lang_Activ.includes(lang)"
					>
						<my-card-text :title="lang.name" :text="lang.details">
						</my-card-text>
					</my-selection-card>
				</div>
			</transition>
		</my-selection-box>
		<!-- Языки -->
	</div>

	<div class="stripe"></div>
	<!-- Персонаж -->

	<div class="represent">
		<div
			class="character"
			:class="{
				active_eyes: race_page.shown.eyes_color || race_page.shown.hair_color,
				active_skin: race_page.shown.skin_color,
			}"
			:style="{
				height: Char_Hight_Back,
			}"
		>
			<RaceBody body_part="skin" />
			<RaceBody body_part="eyes" />
			<RaceBody body_part="hair" />

			<WelcomeBanner />

			<transition name="slide-fade">
				<mySizeGrowth v-if="hideRuler()" division zero skale_top />
			</transition>
		</div>
	</div>
	<!-- Персонаж -->

	<!-- sidebar_right -->
	<!-- <transition name="slide-fade"> -->
	<div
		class="sidebar_right"
		:class="{ sidebar_right_close: !pages.shown_home }"
	>
		<!-- stats -->
		<my-wrapper hr>
			<my-attribute
				v-for="name in stats_Keys"
				:key="name"
				:title="name"
				:type="`${name}_base`"
				plus
				:numb="getSummNumb('stats', name)"
				:icon="name"
			>
			</my-attribute>
		</my-wrapper>
		<!-- stats -->

		<!-- attributes_race -->
		<my-wrapper hr v-if="Skills_All_Chose.length !== 0">
			<my-attribute
				v-for="name in Skills_All_Chose"
				:key="name"
				:title="name"
				plus
				:numb="Skill_Mastery"
				:icon="MY.skills[name].mod"
			></my-attribute>
		</my-wrapper>
		<!-- attributes_race -->

		<!-- qualities -->
		<my-wrapper hr>
			<my-attribute
				v-for="(val, name) in MY.qualities"
				:key="name"
				:title="name"
				:numb="getParNumb('qualities', name)"
				feet
				:icon="name"
			></my-attribute>
			<my-attribute
				v-if="MY.ethnos.hp_bonus"
				title="hp_bonus"
				:numb="hp_bonus"
				plus
				icon="hp_bonus"
			></my-attribute>
		</my-wrapper>
		<!-- qualities -->

		<!-- proficiencies -->
		<my-wrapper gap_8 hr>
			<my-inventory
				v-for="(val, name) in MY.proficiencies"
				:key="name"
				:title="name"
				:item="getProf_REX(name)"
			>
			</my-inventory>
		</my-wrapper>
		<!-- proficiencies -->

		<!-- fines -->
		<my-wrapper v-if="MY.race.fines || MY.ethnos.fines" gap_8 hr>
			<my-fines
				v-for="item in MY.race.fines"
				:key="item"
				:icon="item.type"
				:title="item.keyword"
				:details="item.details"
			></my-fines>

			<my-fines
				v-for="item in MY.ethnos.fines"
				:key="item"
				:icon="item.type"
				:title="item.keyword"
				:details="item.details"
			></my-fines>
		</my-wrapper>
		<!-- fines -->

		<!-- spells -->
		<my-wrapper v-if="showSpells" gap_26 hr>
			<my-spell-text
				v-for="item in MY.race.spells"
				:key="item"
				:lvl="item.level"
				:spell="item.spell"
			>
			</my-spell-text>
			<my-spell-text
				v-for="item in MY.ethnos.spells"
				:key="item"
				:lvl="item.level"
				:spell="item.spell"
			>
			</my-spell-text>
		</my-wrapper>
		<!-- spells -->

		<!-- text -->
		<div class="story int-400">
			<div v-html="t(MY.race.details)"></div>
			<my-card-text
				v-if="MY.ethnos.name !== 'common'"
				:title="MY.ethnos.name"
				:text="MY.ethnos.details"
				:rare="MY.ethnos.rare"
			>
			</my-card-text>
		</div>
	</div>
	<!-- </transition> -->
	<!-- sidebar_right -->
</template>

<script>
import dic from "@/assets/catalog/texts/dic.js";

// import MY from "@/assets/catalog/MY.js";
// import default_MY from "@/assets/catalog/default_MY.js";
// import color from "@/assets/catalog/base_data/colors.js";
// import genders from "@/assets/catalog/base_data/genders.js";
import race from "@/assets/catalog/base_data/step1_races.js";
import clas from "@/assets/catalog/base_data/step2_classes.js";
import past from "@/assets/catalog/base_data/step3_backstories.js";
import languages from "@/assets/catalog/base_data/list_languages.js";
import placeholder from "@/assets/catalog/base_data/_placeholder.js";

import EthnosChoice from "@/components/EthnosChoice.vue";
import GenderChoice from "@/components/GenderChoice.vue";
import AgeWeight from "@/components/AgeWeight.vue";

import GenderChoiceStore from "@/components/GenderChoiceStore.vue";
import Description from "@/components/Description.vue";
import WelcomeBanner from "@/components/WelcomeBanner.vue";

// STORE
// import Header from "./components/store/Header.vue";
import RaceMenuSettings from "@/components/store/RaceMenuSettings.vue";
// import RaceCustomStats from "@/components/store/RaceCustomStats.vue";
// STORE

// STORE_HOOK
import Header from "@/components/hook_commit/Header.vue";
import RaceCustomStats from "@/components/hook_commit/RaceCustomStats.vue";

// STORE_HOOK

// store components
import { mapActions, mapGetters, mapState, mapMutations } from "vuex";

import { useShowSettings } from "@/hooks/PAGES/common/useShowSettings.js";
import { watch, computed } from "vue";
import { useStore } from "vuex";

export default {
	setup() {
		const { showHome, closeEthnos, closeColor, closePar, showRaceScroll } = useShowSettings();
		// console.log('closeEthnos:', closeEthnos)
		const store = useStore();

		const MY_race = computed(() => store.state.MY.MY.race);
		const GET_ETHNOS = () => store.commit("MY/GET_ETHNOS");

		watch(MY_race, () => {
			console.log("Заметка обновилась!");
			// console.log('closeEthnos:', closeEthnos)
			GET_ETHNOS();
			closeEthnos();
			closeColor("skin");
			closeColor("eyes");
			closeColor("hair");
			closePar("stats");
			closePar("skills");
			closePar("languages");
		});

		return { showHome, showRaceScroll };
	},
	name: "App",
	components: {
		GenderChoiceStore,
		EthnosChoice,
		GenderChoice,
		AgeWeight,
		Description,
		WelcomeBanner,

		// ГОТОВ
		Header,
		// ГОТОВ

		// НА ОБРАБОТКЕ
		RaceMenuSettings,
		RaceCustomStats,
		// НА ОБРАБОТКЕ
	},

	data() {
		return {
			dic: dic,
			// MY: MY,
			// default_MY: default_MY,

			// genders: genders,
			// color: color,
			race: race,
			clas: clas,
			past: past,
			languages: languages,
			placeholder: placeholder,

			// race_page: race_page,
			// main_page: main_page,
		};
	},

	created() {
		// this.MY.race = Object.values(this.race)[0];
		// this.MY.ethnos = Object.values(
		// 	this.MY.race.settings.ethnos
		// )[0];
		// this.MY = this.default_MY;

		this.MY.class = Object.values(clas)[1];
		this.MY.mastery = this.Mastery;

		this.getFunction();

		this.getStatsNumb("ethnos");

		this.getCustomRE("stats");
		// this.getCustomRE("skills");
		// this.getCustomRE("languages");
		this.getStatsNumb("custom_race");
		this.$watch("MY.custom_race.stats", () => {
			// console.log("Заметка обновилась!");
		});
	},

	computed: {
		...mapState({
			MY: state => state.MY.MY,
		}),

		...mapState("pages", {
			pages: state => state,
			main_page: state => state.main_page,
			race_page: state => state.race_page,
		}),

		// ...mapGetters("pages", ["Shown_Selection"]),

		Main_Selection() {
			const obj = this.race_page.shown;
			const values = Object.values(obj);
			return values.some(el => el === true);
		},

		Race_Selection() {
			const obj = this.main_page.shown;
			const values = Object.values(obj);
			return values.some(el => el === true);
		},

		// Shown_Selection() {
		// 	return this.Main_Selection || this.Race_Selection;
		// },

		Mastery() {
			return Math.ceil(this.MY.level / 4);
		},

		Skill_Mastery() {
			return 1 + this.MY.mastery;
		},

		Get_Height() {
			let min = this.race_Settings.height.min;
			let max = this.race_Settings.height.max;
			let kof = this.race_page.height_kof;
			return min + Math.round((max - min) * kof);
		},

		// Hight_Note() {
		// 	return this.t(this.race_Settings.size);
		// },

		Get_Weight() {
			let min = this.race_Settings.weight.min;
			let max = this.race_Settings.weight.max;
			let kof = this.race_page.weight_kof;
			return min + Math.round((max - min) * kof);
		},

		// Weight_Note() {
		// 	let kof = this.race_page.weight_kof;
		// 	if (kof === 0) {
		// 		return this.t("skinny");
		// 	} else if (kof === 1) {
		// 		return this.t("fat");
		// 	} else {
		// 		return null;
		// 	}

		// let kof = this.race_page.weight_kof;
		// if (kof < 0.5) {
		//   return this.t("skinny");
		// } else {
		//   return this.t("fat");
		// }
		// },

		// Get_Age() {
		//   let min = this.race_Settings.age.min;
		//   let max = this.race_Settings.age.max;
		//   let kof = this.race_page.age_kof;
		//   return min + Math.round((max - min) * kof);
		// },

		Get_Age() {
			let min = this.race_Settings.age.min;
			let max = this.race_Settings.age.max;
			let mature = this.race_Settings.age.mature;
			if (this.MY.age) {
				if (this.MY.age < min) {
					return min;
				} else if (this.MY.age > max) {
					return max;
				} else {
					return this.MY.age;
				}
			} else {
				return mature;
			}
		},

		// Age_Note() {
		// 	let baby = this.race_Settings.age.min;
		// 	let young = this.race_Settings.age.young;
		// 	let mature = this.race_Settings.age.mature;
		// 	let old = this.race_Settings.age.old;
		// 	let oldest = this.race_Settings.age.max;
		// 	if (baby <= this.MY.age && this.MY.age < young) {
		// 		return this.t("baby");
		// 	} else if (young <= this.MY.age && this.MY.age < mature) {
		// 		return this.t("young");
		// 	} else if (mature <= this.MY.age && this.MY.age < old) {
		// 		return this.t("mature");
		// 	} else if (old <= this.MY.age && this.MY.age < oldest) {
		// 		return this.t("old");
		// 	} else {
		// 		return this.t("oldest");
		// 	}
		// },

		hp_bonus() {
			let increm_1 = this.MY.ethnos.hp_bonus[0];
			let increm_2 = this.MY.ethnos.hp_bonus[1];
			let level = Math.ceil(this.MY.level / increm_1);
			return level * increm_2;
		},

		race_Settings() {
			return this.MY.race.settings;
		},

		ethnos_Settings() {
			return this.MY.ethnos;
		},

		Char_Hight_Back() {
			let max_height = this.MY.race.settings.height.max;
			let min_height = this.MY.race.settings.height.min;
			let mein_height = (min_height + max_height) / 2;
			let kof = 0;
			if (mein_height == 105) {
				kof = 4;
			} else if (mein_height == 135) {
				kof = 3.7;
			} else if (mein_height == 165) {
				kof = 3.4;
			} else {
				kof = 3.1;
			}
			if (
				this.$root.race_page.shown.eyes_color ||
				this.$root.race_page.shown.hair_color
			) {
				return `calc((100% / 210 * ${mein_height})*${kof})`;
			} else {
				return `100%`;
			}
		},

		All_Ethnos_Obj() {
			return this.MY.race.settings.ethnos;
		},

		Lang_Not_Humman() {
			let arr = [];
			for (let i in this.languages) {
				if (!(this.languages || {})[i].human) {
					arr.push(this.languages[i]);
				}
			}
			return arr;
		},

		Lang_Humman_Title() {
			let title = this.t("languages_human");
			let lang_numb = this.Lang_Humman_Select.length;
			let humman_activ = this.race_page.shown_humman_lang;
			if (lang_numb !== 0 && !humman_activ) {
				return `${title} (выбрано: ${lang_numb})`;
			} else {
				return title;
			}
		},

		Lang_Humman() {
			let arr = [];
			for (let i in this.languages) {
				if ((this.languages || {})[i].human) {
					arr.push(this.languages[i]);
				}
			}
			return arr;
		},

		Lang_Humman_Select() {
			let arr = [];
			let lang = this.race_page.extra.languages;
			for (let i in lang) {
				if ((lang || {})[i].human) {
					arr.push(lang[i]);
				}
			}
			return arr;
		},

		Lang_Activ() {
			let i = [];
			let j = [];
			if ((this.MY.race.proficiencies || {}).languages) {
				i = Object.values(this.MY.race.proficiencies.languages);
			}
			if ((this.MY.ethnos.proficiencies || {}).languages) {
				j = Object.values(this.MY.ethnos.proficiencies.languages);
			}
			return i.concat(j);
		},

		Languages_Pass() {
			return Object.values(this.languages).filter(
				el => !this.Lang_Activ.includes(el)
			);
		},

		Lang_Select() {
			return this.race_page.extra.languages;
		},

		// Lang_Extra() {
		// 	let arr = [];
		// 	let obj = this.race_page.extra.languages;
		// 	for (let i in obj) {
		// 		arr.push(obj[i].name);
		// 	}
		// 	return arr;
		// },

		stats_Keys() {
			return Object.keys(this.MY.stats);
		},

		stats_Activ_Obj() {
			let i = this.MY.race.stats;
			let j = this.MY.ethnos.stats;
			let arr = Object.assign({}, i, j);
			return arr;
		},

		Stats_Activ() {
			return Object.keys(this.stats_Activ_Obj);
		},

		Stats_Pass() {
			return Object.keys(this.MY.stats).filter(
				el => !this.Stats_Activ.includes(el)
			);
		},

		stats_Select() {
			return this.race_page.extra.stats;
		},

		skills_Activ_Obj() {
			let i = this.MY.race.skills;
			let j = this.MY.ethnos.skills;
			let arr = Object.assign({}, i, j);
			return arr;
		},

		Skills_Activ() {
			return Object.keys(this.skills_Activ_Obj);
		},

		Skills_Pass() {
			return Object.keys(this.MY.skills).filter(
				el => !this.Skills_Activ.includes(el)
			);
		},

		skills_Select() {
			return this.race_page.extra.skills;
		},

		Skills_All_Chose() {
			return this.Skills_Activ.concat(this.skills_Select);
		},

		showSpells() {
			let race = this.MY.race.spells;
			let ethnos = this.MY.ethnos.spells;
			let lvl = this.MY.level;
			let race_lvl = ((race || {})[0] || {}).level <= lvl;
			let ethnos_lvl = ((ethnos || {})[0] || {}).level <= lvl;
			return race || (ethnos && race_lvl) || ethnos_lvl;
		},
	},
	watch: {
		"MY.race": "getFunction",
		"race_page.shown.languages": function (val, oldVal) {
			this.race_page.shown_humman_lang = false;
		},

		"MY.race.settings.custom_stats"() {
			this.getCustomRE("stats");
		},

		"MY.custom_race.stats": {
			handler(val, oldVal) {
				this.getStatsNumb("custom_race");
			},
			deep: true,
		},

		// "MY.race.settings.custom_skills" () {
		// 	this.getCustomRE("skills");
		// },

		// "MY.race.settings.custom_languages" () {
		// 	this.getCustomRE("languages");
		// },

		"MY.ethnos": "getFunction_2",

		"MY.ethnos.custom_stats"() {
			this.getCustomRE("stats");
			this.getStatsNumb("custom_race");
		},

		// "MY.level": "MY.mastery = Mastery",
		"MY.level": function () {
			this.MY.mastery = this.Mastery;
		},
		// "race_page.whtch_home": "getHome",
	},

	methods: {
		getLangSite(name, icon) {
			this.dic.select_lang = name;
			this.dic.select_lang_icon = icon;
		},

		getFunction() {
			// this.getNewEthnos();
			// this.closeEthnos();
			// this.closeColor("skin");
			// this.closeColor("eyes");
			// this.closeColor("hair");
			this.getComonColor("skin");
			this.getComonColor("eyes");
			this.getComonColor("hair");
			// this.closePar("stats");
			// this.closePar("skills");
			// this.closePar("languages");
			this.getExtra(this.Stats_Pass, "stats");
			this.getExtra(this.Skills_Pass, "skills");
			this.getExtra(this.Languages_Pass, "languages");
			this.MY.height = this.Get_Height;
			this.MY.weight = this.Get_Weight;
			this.MY.age = this.Get_Age;
			this.getStatsNumb("race");

			// this.getCustomRace("stats");
			// this.getCustomRace("skills");
			// this.getCustomRace("languages");

			// this.getCustomRE("stats");
			// this.getCustomRE("skills");
			// this.getCustomRE("languages");
		},

		getFunction_2() {
			this.getExtra_Ethnos(this.Stats_Pass, "stats");
			this.getExtra_Ethnos(this.Skills_Pass, "skills");
			this.getExtra_Ethnos(this.Languages_Pass, "languages");
			this.getStatsNumb("ethnos");

			// this.getCustomEthnos("stats");
			// this.getCustomEthnos("skills");
			// this.getCustomEthnos("languages");
		},

		getExtra_Ethnos(arr_obj, name) {
			let arr = [];
			let race_custom = (this.race_Settings || {})[`custom_${name}`];
			let ethnos_custom = (this.MY.ethnos || {})[`custom_${name}`];
			if (ethnos_custom) {
				let i = ethnos_custom[0]; //2
				arr = arr_obj.slice(0, i);
				this.race_page.extra[name] = arr;
			} else if (!race_custom && !ethnos_custom) {
				this.race_page.extra[name] = arr;
			} else {
				return null;
			}
		},

		getExtra(arr_obj, name) {
			let race_custom = this.race_Settings[`custom_${name}`];
			let ethnos_custom = this.MY.ethnos[`custom_${name}`];
			let arr = [];
			if (race_custom) {
				let i = this.race_Settings[`custom_${name}`][0];
				arr = arr_obj.slice(0, i);
			}
			if (ethnos_custom) {
				let i = this.MY.ethnos[`custom_${name}`][0];
				arr = arr_obj.slice(0, i);
			}
			this.race_page.extra[name] = arr;
		},

		// getCustomRE(item, name) {
		// 	const upp_name = name.charAt(0).toUpperCase() + name.slice(1);
		// 	let arr_free = this[`${upp_name}_Pass`];
		// 	let arr = [];
		// 	let custom = this[`${item}_Settings`][`custom_${name}`];
		// 	if (custom) {
		// 		let i = custom[0];
		// 		arr = arr_free.slice(0, i);
		// 	}
		// 	return arr;
		// },

		// getCustomRE(name) {
		// 	let custom_race = this.getCustomRE("race", name);
		// 	let custom_ethnos = this.getCustomRE("ethnos", name);
		// 	let arr = custom_race.concat(custom_ethnos);
		// 	this.MY.custom_race[name] = arr;
		// },

		// ...mapMutations("MY", {
		// 	getNewEthnos: "GET_ETHNOS",
		// }),

		...mapActions("MY", {
			getStatsNumb: "getStatsNumb",
			getCustomRE: "getCustomRE",
			// getStatsNumb_Custom: "getStatsNumb_Custom",
			// getNewEthnos: "getNewEthnos",
		}),

		getComonColor(name) {
			let select = this.$root.race_page.color_selected[name];
			if (this.race_Settings.color[name][0]) {
				this.$root.MY.color[name] = select;
			} else {
				this.$root.MY.color[name] = null;
			}
		},

		hideRuler() {
			return this.pages.shown_home || this.race_page.shown.height;
		},

		// getCharColor(value) {
		// 	if (
		// 		this.MY.color[value] === null &&
		// 		this.MY.ethnos.name === "common"
		// 	) {
		// 		return this.MY.race.settings.color[value][0];
		// 	} else if (this.MY.color[value] === null) {
		// 		return this.MY.ethnos.color[value][0];
		// 	} else {
		// 		return this.MY.color[value];
		// 	}
		// },

		getProficienciesItem(name) {
			let arr = [];
			for (let i in this.MY.race.proficiencies[name]) {
				arr.push(this.MY.race.proficiencies[name][i].name);
			}
			return arr;
		},

		getProficienciesEthnosItem(obj, name) {
			let arr = [];
			for (let i in this.All_Ethnos_Obj[obj].proficiencies[name]) {
				arr.push(this.All_Ethnos_Obj[obj].proficiencies[name][i].name);
			}
			return arr;
		},

		getProf_Item(obj, kay) {
			let arr = [];
			for (let i in obj) {
				arr.push(obj[i][kay]);
			}
			return arr;
		},

		getProfArr(obj, kay) {
			let arr = [];
			if ((obj || {})[kay]) {
				arr = Object.values(obj[kay]);
			}
			return arr;
		},

		getProf_REX(kay) {
			let i = this.getProfArr(this.MY.race.proficiencies, kay);
			let j = this.getProfArr(this.MY.ethnos.proficiencies, kay);
			let k = this.getProfArr(this.race_page.extra, kay);
			return i.concat(j).concat(k);
		},

		getParNumb(par_1, par_2) {
			let i = 0;
			let j = 0;
			if (((this.MY.race || {})[par_1] || {})[par_2]) {
				i = this.MY.race[par_1][par_2];
			}
			if (((this.MY.ethnos || {})[par_1] || {})[par_2]) {
				j = this.MY.ethnos[par_1][par_2];
			}
			return i + j;
		},

		getSummNumb(name, item) {
			let i = 0;
			let activ_val = this[`${name}_Activ_Obj`][item];
			if (activ_val) {
				i = activ_val;
			} else if ((this.race_Settings || {})[`custom_${name}`]) {
				let extr_bool = this[`${name}_Select`].includes(item);
				let increment = this.race_Settings[`custom_${name}`][1];
				if (extr_bool) {
					i = increment;
				} else {
					i = 0;
				}
			} else {
				i = 0;
			}
			return i;
		},

		getExtraActiv(active, selekt, item, name) {
			if (active || selekt) {
				return null;
			} else {
				let arr = this.race_page.extra[name];
				arr.splice(0, 1);
				arr.push(item);
				return (this.race_page.extra[name] = arr);
			}
		},

		getSelectLang() {
			if (this.race_page.extra.languages) {
				return this.race_page.extra.languages;
			} else {
				return this.Languages_Pass[0].name;
			}
		},

		getSkillMarg(i, name, k) {
			if (i === 0) {
				return true;
			}
			let obj = Object.values(name);
			if (obj[i].mod !== obj[i - 1].mod) {
				return true;
			}
			return false;
		},

		getMannaNumb(arr, name) {
			let index = arr.findIndex(el => el[name]);
			return index;
		},
	},
};
</script>

<style>
body {
	background-color: #0e1518;
}

a {
	color: #fff;
}

.green {
	color: green;
}

.skill_marg {
	margin-top: 26px;
}

#app {
	/*font-family: 'JetBrains Mono', sans-serif;*/
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	height: 100%;
	display: flex;
	-webkit-touch-callout: none;
	/* iOS Safari */
	-webkit-user-select: none;
	/* Chrome/Safari/Opera */
	-khtml-user-select: none;
	/* Konqueror */
	-moz-user-select: none;
	/* Firefox */
	-ms-user-select: none;
	/* Internet Explorer/Edge */
	user-select: none;
	overflow: hidden;
}

.buff {
	color: #05ff00;
	/* font-weight: 600; */
}

.debuff {
	color: #ff0000;
	/* font-weight: 600; */
}

.jbm-300 {
	font-family: "JetBrains Mono";
	font-style: normal;
	font-weight: 300;
	font-size: 10.95px;
	line-height: 18px;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	color: #ffffff;
}

.int-400 {
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 11px;
	line-height: 15px;
	letter-spacing: 0.02em;
	color: #ffffff;
}

.sidebar_left {
	/* height: 100%; */
	/*display: flex;*/
	padding-top: 32px;
	width: 320px;
	background-color: #0e1518;
	/*min-height: 100%;*/
	display: flex;
	flex-direction: column;
	/*justify-content: space-between;*/
	/*height: 100%;*/
	/*z-index: 10;*/
	/* outline: 2px solid rgba(255, 255, 255, 0.1); */
}

.main_menu_wrap {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow-y: scroll;
	max-height: 100%;
	scrollbar-width: none;
}

.main_menu_wrap::-webkit-scrollbar {
	width: 0;
}

.chapter {
	/* height: 100%; */
	/*display: flex;*/
	/*flex-direction: column;*/
	/*justify-content: space-between;*/
	/* flex: 1 1 auto; */
}

.main_chapter {
	padding: 0 32px 0 32px;
}

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

.ethnos_attributes {
	color: rgba(255, 255, 255, 0.2);
	display: flex;
	flex-direction: column;
	gap: 26px;
	margin: 0 0 26px 16px;
}

.selection_card_active {
	border: 2px solid #ffffff;
	padding: 14px !important;
}

/* .mode-fade-enter-active,
.mode-fade-leave-active {
  transition: opacity .3s ease;
}

.mode-fade-enter-from,
.mode-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;

} */

.btm-fade-enter-active {
	transition: all 0.2s ease-in-out;
}

.btm-fade-leave-active {
	transition: all 0.2s ease-in-out;
}

/* .mode-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
} */

.btm-fade-enter-from,
.btm-fade-leave-to {
	transform: translateX(-300px);
	opacity: 0;
}

/* ---------------------characters----------------------*/

.represent {
	padding: 32px;
	flex: 1 1 auto;
	display: flex;
	background-color: #0e1518;
	z-index: 2;
	/* position: relative; */
	overflow: hidden;
}

.character {
	width: 100%;
	height: 100%;
	position: relative;
	transition-duration: 0.8s;
	transition-timing-function: ease-in-out;
}

/* .character img {
  position: absolute;
  bottom: 0;
  right: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, 0%);
  -ms-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
  transition-duration: 0.8s;
  transition-timing-function: ease-in-out;
} */

/* .character svg {
  position: absolute;
  bottom: 0;
  right: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, 0%);
  -ms-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
  transition-property: all, fill;
  transition-duration: 0.8s, 0.1s;
  transition-timing-function: ease-in-out;
} */

/* .active_eyes .character img {
  top: 0;
  bottom: auto;
} */

.active_eyes {
	align-self: flex-start;
	/* height: 200%; */
	transition-property: all;
	transition-duration: 0.8s;
	transition-timing-function: ease-in-out;
}

.active_skin {
	align-self: flex-start;
	transition-property: all;
	transition-duration: 0.8s;
	transition-timing-function: ease-in-out;
}

/* ---------------------sidebar_right----------------------*/

.sidebar_wrap {
	height: 100%;
	display: flex;
	width: 0;
	transition: all 0.4s ease-in-out;
	position: relative;
}

.sidebar_wrap_open {
	width: 426px;
	/* padding: 32px 32px 32px 0; */
	transition: all 0.4s ease-in-out;
}

/* .sidebar_selection {
  height: 100%;
  position: absolute;
  left: -426px;
  transition: all 0.4s ease-in-out;
  opacity: 0;
}

.sidebar_selection::-webkit-scrollbar {
  width: 0;
}

.sidebar_selection_open {
  opacity: 1;
  left: 0px;
  transition: all 1s ease-in-out;
} */

/* ---------------------sidebar_right----------------------*/

.sidebar_right {
	/* width: 426px; */
	min-width: 426px;
	max-width: 426px;
	padding: 32px;
	overflow-y: scroll;
	scrollbar-width: none;
	background-color: #0e1518;
	z-index: 2;
	transition: all 0.4s ease-in-out;
}

.sidebar_right::-webkit-scrollbar {
	width: 0;
}

.sidebar_right_close {
	margin-right: -426px;
	opacity: 0;
	transition: all 0.4s ease-in-out;
}

.story {
	max-width: 362px;
	color: rgba(255, 255, 255, 0.4);
	text-align: start;
}

.story h3 {
	font-family: "Inter";
	font-style: normal;
	font-weight: 700;
	font-size: 13px;
	line-height: 15px;
	letter-spacing: 0.02em;
	color: #ffffff;
	margin-top: 25px;
	margin-bottom: 5px;
}

.slide-fade-enter-active {
	transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateX(20px);
	opacity: 0;
}

/* -------------slider-grwwth------------------- */

.slider_growth_back {
	width: 344px;
	height: calc(100% / 700 * 396);
	background: rgba(255, 255, 255, 0.06);
	border-radius: 12px;
	display: flex;
	align-items: flex-end;
	overflow: hidden;
}

.slider_growth {
	width: 100%;
	height: calc(100% / 396 * (300 + 3.2 * 0));
	background: #ffffff;
	padding: 12px 16px 11px 16px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.slider_knob {
	width: 96px;
	height: 6px;
	background: #0e1518;
	opacity: 0.2;
	border-radius: 4px;
	margin: 0 auto;
	cursor: ns-resize;
}

.slider_value {
	height: 24px;
	font-family: "Inter";
	font-style: normal;
	font-weight: 700;
	font-size: 20px;
	line-height: 24px;
	letter-spacing: 0.02em;
	color: #000000;
}

.flex_options {
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	gap: 8px;
}

.skroll_list {
	position: relative;
	padding-left: 16px;
	height: 18px;
	margin: 34px 0;
	cursor: pointer;
}

.flex_gap-8 {
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.skroll_list_closed::after {
	position: absolute;
	content: url(./assets/img/icon/arrow_down_small.svg);
	top: 0;
	right: 16px;
}

.skroll_list_open::after {
	position: absolute;
	content: url(./assets/img/icon/arrow_top_small.svg);
	top: 0;
	right: 16px;
}

.scroll-fade-enter-active {
	transition: all 0.8s ease-out;
}

.scroll-fade-leave-active {
	transition: all 0.6s cubic-bezier(1, 0.8, 0.8, 1);
}

.scroll-fade-enter-from,
.scroll-fade-leave-to {
	transform: translateY(-20px);
	opacity: 0;
}

/* -------------slider-grwwth------------------- */

.wrapp_wel {
	max-width: 394px;
	height: 100%;
	position: absolute;
}

.stripe {
	width: 2px;
	background-color: rgba(255, 255, 255, 0.1);
}
</style>
