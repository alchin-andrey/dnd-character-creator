<template>
	<div class="ethnos_attributes" @click="openHook()">
		<!-- Этнос_stats -->
		<my-wrapper>
			<my-attribute
				v-for="name in stats_Keys"
				:key="name"
				:title="name"
				:type="`${name}_base`"
				plus
				:numb="summ_Stats_Numb_REC(name)"
				:icon="name"
			>
			</my-attribute>
		</my-wrapper>
		<my-card-text text="stats_base_details"></my-card-text>
	</div>
	<my-selection-card
		v-for="name in stats_Pass_RE"
		:key="name"
		@click="getCustomActiv('stats', name)"
		:active_boll_link="stats_Select.includes(name)"
	>
		<my-attribute
			:title="name"
			:type="`${name}_base`"
			plus
			:numb="race_Settings.custom_stats[1]"
			:icon="name"
		>
		</my-attribute>
		<my-card-text title="" :text="`${name}_details`"></my-card-text>
	</my-selection-card>
</template>

<script>
import { useStats } from "@/hooks/MY/stats/useStats.js";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
	name: "RaceCustomStats",
  setup(props) {

	  // const { openHook } = useStats();
    return {...useStats()};
  },
	computed: {
		...mapState({
			MY: (state) => state.MY.MY,
			race_page: (state) => state.pages.race_page,
		}),

		...mapGetters("MY", [
      "race_Settings",
      "stats_Keys",
      "stats_Activ_Obj_RE",
      "stats_Activ_RE",
      "stats_Pass_RE",
      "summ_Stats_Numb_REC"
    ]),

		// race_Settings() {
		// 	return this.MY.race.settings;
		// },

		// stats_Keys() {
		// 	return Object.keys(this.MY.stats);
		// },

		// stats_Activ_Obj() {
		// 	let i = this.MY.race.stats;
		// 	let j = this.MY.ethnos.stats;
		// 	let arr = Object.assign({}, i, j);
		// 	return arr;
		// },

		// stats_Activ_RE() {
		// 	return Object.keys(this.stats_Activ_Obj);
		// },

		// stats_Pass_RE() {
		// 	return Object.keys(this.MY.stats).filter(
		// 		(el) => !this.stats_Activ_RE.includes(el)
		// 	);
		// },

		stats_Select() {
			return this.MY.custom_race.stats;
		},
	},

	methods: {
		// ...mapActions("pages", ["showMainSettings"]),
		...mapActions("MY", {
      getActiv: "getCustomActiv"
    }),
		// ...mapActions("main_page", ["showSettings"]),

		getSummStatsNumb_REC(name) {
			let i = this.MY.stats[name].race;
      let j = this.MY.stats[name].ethnos;
      let k = this.MY.stats[name].custom_race;
			return i + j + k;
		},

    getSummNumb(item, name) {
			let i = 0;
			let activ_val = this[`${item}_Activ_Obj_RE`][name];
      let custom_set = this.race_Settings[`custom_${item}`]
			if (activ_val) {
				i = activ_val;
			} else if (custom_set) {
				let extr_bool = this[`${item}_Select`].includes(name);
				let increment = custom_set[1];
        extr_bool ? i = increment : i = 0;
			} else {
				i = 0;
			}
			return i;
		},

    getCustomActiv (item, name) {
      this.getActiv({item: item, name: name})
    },

    // getCustomActiv(item, name) {
    //   const selekt = this.MY.custom_race[item];
    //   const active = this[`${item}_Activ_RE`].includes(name);
    //   const passive = selekt.includes(name);
		// 	if (active || passive) {
		// 		return null;
		// 	} else {
		// 		let arr = selekt;
		// 		arr.splice(0, 1);
		// 		arr.push(name);
		// 		this.MY.custom_race[item] = arr;
		// 	}
		// },

    // getExtraActiv(item, name) {
    //   const selekt = this.race_page.extra[item];
    //   const upp_item = item.charAt(0).toUpperCase() + item.slice(1)
    //   const active = this[`${upp_item}_Activ_RE`].includes(name);
    //   const passive = selekt.includes(name);
		// 	if (active || passive) {
		// 		return null;
		// 	} else {
		// 		let arr = selekt;
		// 		arr.splice(0, 1);
		// 		arr.push(name);
		// 		return (this.race_page.extra[item] = arr);
		// 	}
		// },
	},
};
</script>

<style scoped>
.ethnos_attributes {
	color: rgba(255, 255, 255, 0.2);
	display: flex;
	flex-direction: column;
	gap: 26px;
	margin: 0 0 26px 16px;
}
</style>
