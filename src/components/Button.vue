<template>
	<button
		class="button"
		@click="onClick"
		:class="variant"
	>
		{{ label }}
	</button>
</template>
<script>
export default {
	name: 'Button',
	props: {
		label: String,
		variant: String,
		onClick: Function,
	},
}
</script>
<style scoped>
.button {
	background-color: #79a8ed;
	width: 100%;
	padding: 10px;
	border: none;
	border-radius: 6px;
	color: #ffffff;
	font-size: 2rem;
	font-weight: 400;
	margin: 10px 0;
}
.button:hover {
	background-color: #4887e4;
	cursor: pointer;
	border: none;
}
.secondary {
	background-color: transparent;
	color: #79a8ed;
	border: 1px solid #79a8ed !important;
	width: 100%;
	padding: 10px;
	border: none;
	border-radius: 6px;
	font-size: 2rem;
	font-weight: 400;
	margin: 10px 0;
}
.secondary:hover {
	color: #ffffff;
	background-color: #79a8ed;
}
.primaryCircleFixed {
	position: absolute;
	right: 0;
	margin-top: 50px;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	filter: drop-shadow(
		0px 4px 10px
			rgba(121, 168, 237, 0.65)
	);
}
</style>
