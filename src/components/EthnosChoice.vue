<template>
	<div class="ethnos_attributes">
		<!-- Этнос_stats + qualities -->
		<my-wrapper v-if="$root.MY.race.stats || $root.MY.race.qualities">
			<my-attribute
				v-for="(val, name) in $root.MY.race.stats"
				:key="name"
				:title="name"
				:type="`${name}_base`"
				plus
				:numb="val"
				:icon="name"
			>
			</my-attribute>
			<my-attribute
				v-for="(val, name) in $root.MY.race.qualities"
				:key="name"
				:title="name"
				:numb="val"
				feet
				:icon="name"
			></my-attribute>
		</my-wrapper>

		<!-- Этнос_stats + qualities -->

		<!-- Этнос_proficiencies -->
		<my-wrapper v-if="$root.MY.race.proficiencies">
			<my-inventory
				v-for="(val, name) in $root.MY.race.proficiencies"
				:key="name"
				:title="name"
				:item="getProf_RX(val, name)"
			>
			</my-inventory>
		</my-wrapper>
		<!-- Этнос_proficiencies -->

		<!-- Этнос_fines -->
		<my-wrapper v-if="$root.MY.race.fines" gap_8>
			<my-fines
				v-for="item in $root.MY.race.fines"
				:key="item"
				:icon="item.type"
				:title="item.keyword"
				:details="item.details"
			></my-fines>
		</my-wrapper>
		<!-- Этнос_fines -->
		<!-- Этнос_spells -->
		<my-wrapper v-if="showRaceSpells" gap_26>
			<my-spell-text
				v-for="item in this.$root.MY.race.spells"
				:key="item"
				:lvl="item.level"
				:spell="item.spell"
			>
			</my-spell-text>
		</my-wrapper>
		<!-- Этнос_spells -->
	</div>

	<!-- Этнос_Карточка -->
	<EthnosCard/>
	<!-- Этнос_Карточка -->
</template>

<script>
import EthnosCard from "@/components/EthnosCard.vue";

export default {
	name: "EthnosChoice",
	components: {
		EthnosCard
	},

	computed: {
		showRaceSpells() {
			let spells = this.$root.MY.race.spells;
			let lvl = this.$root.MY.level;
			let spells_lvl = ((spells || {})[0] || {}).level <= lvl
			return spells && spells_lvl;
		},
	},

	methods: {
		getProfArr(obj, kay) {
			let arr = [];
			if ((obj || {})[kay]) {
				arr = Object.values(obj[kay]);
			}
			return arr;
		},

		getProf_RX(obj, kay) {
			let i = this.getProfArr(this.$root.MY.race.proficiencies, kay);
			let k = []
			let ethnos_custom = (this.$root.MY.ethnos || {})[`custom_${kay}`]
			if (!ethnos_custom) {
				k = this.getProfArr(this.$root.race_page.extra, kay);
			}

			return i.concat(k);
		},
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ethnos_attributes {
	color: rgba(255, 255, 255, 0.2);
	display: flex;
	flex-direction: column;
	gap: 26px;
	margin: 0 0 26px 16px;
}

</style>
