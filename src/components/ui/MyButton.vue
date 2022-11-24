<template>
	<div class="btm">
		<div class="numb jbm-300">
			<div>
				{{ numb }}
			</div>
		</div>
		<div class="title jbm-300">
			<div>
				{{ t_Title }}
			</div>
			<div><img alt="arrow_down" src="@/assets/img/icon/arrow_down.svg"/></div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MyButton",
	props: {
		numb: {
			type: String,
			default: null,
		},
		title: {
			type: String,
			default: null,
		},
	},

	computed: {
		t_Title() {
			return this.t(this.title);
		},
	},
};
</script>

<style scoped>
.btm {
	width: 320px;
	min-height: 118px;
	background: #0047ff;
	padding-top: 32px;
	padding-left: 32px;
	cursor: pointer;
}

.numb {
	/*margin-top: 32px;*/
	height: 18px;
	text-align: left;
}

.title {
	margin-top: 18px;
	display: flex;
	width: 256px;
	height: 18px;
	justify-content: space-between;
}
</style>
