<template>
	<div class="ethnos_cards_menu">
		<my-selection-card
			v-for="ethnos in $root.All_Ethnos_Obj"
			:key="ethnos" 
      no_blur
			@click="ethnosName(ethnos)"
			:class="{ selection_card_active: $root.MY.ethnos.name === ethnos.name }"
		>
			<div
				class="ethnos_char_back"
				:style="{
          'background-image': `url(${'src/assets/img/characters/halfling/ethhnos/image.png'})`,
        }"
			>
				<race-body body_part="skin" :ethnos_name="ethnos.name"></race-body>

				<race-body body_part="hair" :ethnos_name="ethnos.name"></race-body>

				<race-body body_part="eyes" :ethnos_name="ethnos.name"></race-body>
			</div>

			<!-- Этнос_Карточка_stats + qualities -->
			<my-wrapper v-if="ethnos.stats || ethnos.qualities">
				<my-attribute
					v-for="(val, name) in ethnos.stats"
					:key="name"
					:title="name"
					:type="`${name}_base`"
					plus
					:numb="val"
					:icon="name"
				>
				</my-attribute>
				<my-attribute
					v-for="(val, name) in ethnos.qualities"
					:key="name"
					:title="name"
					:type="`${name}_base`"
					feet
					:numb="val"
					:icon="name"
				>
				</my-attribute>
				<my-attribute
					v-if="ethnos.hp_bonus"
					title="hp_bonus"
					:numb="hpBonus(ethnos.hp_bonus[0], ethnos.hp_bonus[1])"
					plus
					icon="hp_bonus"
				></my-attribute>
			</my-wrapper>
			<!-- Этнос_Карточка_stats + qualities-->

			<!-- Этнос_Карточка_proficiencies -->
			<my-wrapper v-if="ethnos.proficiencies">
				<my-inventory
					v-for="(val, name) in ethnos.proficiencies"
					:key="name"
					:title="name"
					:item="getProfObjItem(ethnos, name)"
				>
				</my-inventory>
			</my-wrapper>
			<!-- Этнос_proficiencies -->

			<!-- Этнос_Карточка_fines -->
			<my-wrapper v-if="ethnos.fines" gap_8>
				<my-fines
					v-for="item in ethnos.fines"
					:key="item"
					:icon="item.type"
					:title="item.keyword"
					:details="item.details"
				></my-fines>
			</my-wrapper>
			<!-- Этнос_Карточка_fines -->

			<!-- Этнос_Карточка_spells -->
			<my-wrapper v-if="showEthnosSpells(ethnos.spells)" gap_26>
				<my-spell-text
					v-for="item in ethnos.spells"
					:key="item"
					:lvl="item.level"
					:spell="item.spell"
				>
				</my-spell-text>
			</my-wrapper>
			<!-- Этнос_Карточка_spells -->

			<!-- Этнос_Карточка_текст -->
			<my-card-text
				:title="ethnos.name"
				:text="ethnos.details"
				:rare="ethnos.rare"
			>
			</my-card-text>
		</my-selection-card>
		<!-- Этнос_Карточка_текст -->
	</div>
</template>

<script>
export default {
	name: "EthnosCard",
	computed: {

		etnos_Prof() {


		},
	},
	methods: {
		hpBonus(increm_1, increm_2) {
			let level = Math.ceil(this.$root.MY.level / increm_1);
			return level * increm_2;
		},
		getProfObjItem(obj, kay) {
			let arr = [];
			let ethnos_custom = (obj || {})[`custom_${kay}`];
			if ((obj.proficiencies || {})[kay]) {
				for (let i in obj.proficiencies[kay]) {
					arr.push(obj.proficiencies[kay][i]);
				}
			}
			if (ethnos_custom) {
				let incr = obj[`custom_${kay}`][0]
				arr.push(`+${incr}`);
			}
			return arr;
		},

		ethnosName(obj) {
			this.$root.MY.ethnos = obj;
		},

		showEthnosSpells(spells) {
			let lvl = this.$root.MY.level;
			let spells_lvl = ((spells || {})[0] || {}).level <= lvl
			return spells && spells_lvl;
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.ethnos_cards_menu {
	display: flex;
	flex-direction: column;
	gap: 8px;
  /* z-index: 100; */
}

.ethnos_char_back {
	width: 100%;
	height: 120px;
	background: #0e1518;
	border-radius: 4px;
	position: relative;
	overflow: hidden;
}

.ethnos_char_back img {
	/* height: 390px; */
	position: absolute;
	top: 16px;
}

.ethnos_char_back svg {
	height: 300px;
	position: absolute;
	top: 16px;
	left: 0;
}
</style>
