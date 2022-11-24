<template>
	<div class="dialog" v-if="show" @click="hideDialog">
		<!--		<transition name="modal" class="modal">-->

		<div @click.stop class="dialog__wrapp int-400">
<!--			<div class="dialog__scroll">-->
				<div class="dialog__content">
					<slot></slot>
				</div>
<!--			</div>-->
		</div>
		<!--		</transition>-->
	</div>
</template>

<script>
export default {
	name: "MyDialogSpell",
	props: {
		show: {
			type: Boolean,
			default: false
		},
    mana: {
			type: Number,
			default: null
		},
	},
	methods: {
		hideDialog() {
      this.$emit('update:mana', null)
			this.$emit('update:show', false)
		},
	},
};
</script>

<style scoped>

.dialog {
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	padding: 4px;
	background: rgba(0, 0, 0, 0.8);
	position: fixed;
	z-index: 100;
	cursor: pointer;
	display: inline-block;
	text-align: end;
}

.dialog__wrapp {
	/*position: absolute;*/
	/*top: 0px;*/
	/*right: 0px;*/
	margin: 0 0 0 auto;
	padding: 28px;
	background: #1C2326;
	border-radius: 12px;
	width: 396px;
	z-index: 100;
	cursor: auto;
	overflow-y: scroll;
  scrollbar-width: none;
	max-height: 100%;
}

.dialog__wrapp::-webkit-scrollbar {
	width: 0;
}

/*.dialog__scroll {*/
/*	overflow-y: scroll;*/
/*	max-height: 100%;*/
/*}*/

/*.dialog__scroll::-webkit-scrollbar {*/
/*	width: 0;*/
/*}*/

.dialog__content {
	display: flex;
	flex-direction: column;
	gap: 26px;
}

</style>
