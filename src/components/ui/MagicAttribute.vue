<template>
	<div class="column jbm-300">
		<div class="column_value" :class="{ passive: save }">
			<div class="wrapp_atrib">
				{{ t_Title }}
				{{ em_Before
				}}<emoji
					v-if="em_Upd"
					:data="emojiIndex"
					:emoji="em_Upd"
					:set="set_emoji"
					:size="15"
				/>{{ em_After }}
			</div>
			<div v-if="main" class="numb" :class="{ passive: save }">
				{{ Str }} {{ numb }}<span class="small">{{ Dice }}</span
				>{{ Pls }} {{ t_Suffix }}
			</div>
			<div v-else class="numb" :class="{ passive: save }">
				{{ Prefix }} {{ Plus }}{{ Value }}{{ save }} {{ t_Suffix }}
			</div>
		</div>
		<div class="visual">
			<div
				class="cube"
				:class="{ cube_dash: Miles }"
				v-for="n in get_Cube"
				:key="n"
			></div>
			<div class="cube_zero" v-for="n in get_CubeZero" :key="n"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MagicAttribute",
	props: {
		title: {
			type: String,
			default: null,
		},
		addition: {
			type: String,
			default: null,
		},
		main: {
			type: Boolean,
			default: false,
		},
		// str: {
		// 	type: String,
		// 	default: null,
		// },
		str: {
			type: Number,
			default: null,
		},
		numb: {
			type: Number,
			default: null,
		},
		dice: {
			type: Number,
			default: null,
		},
		pls: {
			type: Number,
			default: null,
		},
		icon: {
			type: String,
			default: null,
		},
		plus: {
			type: Boolean,
			default: false,
		},
		prefix: {
			type: String,
			default: null,
		},
		save: {
			type: String,
			default: null,
		},
	},

	computed: {
		em_Upd() {
			return this.updEmoji(this.t_Addition);
		},

		em_Before() {
			return this.beforeEmoji(this.t_Addition);
		},

		em_After() {
			return this.afterEmoji(this.t_Addition);
		},

		t_Title() {
			if (this.save) {
				return `/ ${this.t(this.title)}`;
			} else {
				return this.t(this.title);
			}
		},

		t_Addition() {
			return this.t(this.addition);
		},

		Dice() {
			return this.dice ? `d${this.dice}` : null;
		},

		Pls() {
			return this.pls ? `+${this.pls}` : null;
		},

		// Str() {
		//   return this.str ? `${this.str}×` : null;
		// },

		Str() {
			if (this.str) {
				if (this.title === "liters_number") {
					return this.str;
				} else {
					return `${this.str}×`;
				}
			} else {
				return null;
			}
		},

		Prefix() {
			return this.prefix ? this.t(this.prefix) : null;
		},

		Plus() {
			return this.plus ? "+" : null;
		},

		// Miles() {
		// 	return this.numb % 5280 === 0;
		// },

		Miles() {
			let num = this.numb % 5280 === 0;
			let not_0 = this.numb !== null;
			return num && not_0;
		},

		Distance() {
			return (
				this.title === "aim_range" ||
				this.title === "aim_aoe" ||
				this.title === "push" && !this.save
			);
		},

		Value() {
			if (this.save) {
				return null;
			} else if (this.Miles) {
				return this.numb / 5280;
			} else {
				return this.numb;
			}
		},

		Suffix() {
			if (this.Distance) {
				if (this.Miles) {
					let mod10 = Math.abs(this.Value % 10);
					let mod100 = Math.abs(this.Value % 100);
					if (mod100 > 10 && mod100 < 20) {
						return "miles";
					} else if (mod10 >= 2 && mod10 <= 4) {
						return "milei";
					} else if (mod10 === 1) {
						return "milea";
					} else {
						return "miles";
					}
				} else {
					return "feet";
				}
			} else {
				return null;
			}
		},

		t_Suffix() {
			return this.t(this.Suffix);
		},

		get_Cube() {
			if (this.Suffix === "feet") {
				return Math.ceil(this.numb / 5);
			} else if (this.Miles) {
				return this.Value;
			} else {
				return this.numb + this.pls;
			}
		},

		get_CubeZero() {
			if (this.dice) {
				return this.dice * this.numb - this.numb;
			}
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapp_atrib {
	display: flex;
	align-items: center;
	white-space: pre;
}

.emoji-mart-emoji {
	padding: 0;
	bottom: 1px;
	line-height: 0;
}

.column {
	width: 100%;
	display: flex;
	min-height: 18px;
	justify-content: space-between;
	align-items: flex-start;
}

.column_value {
	display: flex;
	justify-content: space-between;
	flex: 1 1 auto;
	/*width: 100%;*/
}

.small {
	text-transform: lowercase;
}

.active {
	color: #ffffff;
}

.passive {
	color: rgba(255, 255, 255, 0.2);
}

.visual {
	width: 98px;
	display: flex;
	align-items: center;
	margin-left: 12px;
	flex-wrap: wrap;
	padding: 5px 0 5px 0;
	gap: 2px;
}

.cube {
	width: 8px;
	height: 8px;
	background: #ffffff;
	box-shadow: 0px 0px 4px 1px rgba(255, 245, 0, 0.25);
	border-radius: 2px;
}

.cube_dash {
	width: 100%;
}

.cube_zero {
	width: 8px;
	height: 8px;
	border-radius: 2px;
	border: 1px solid #ffffff;
}
</style>
