<template>
	<button class="button">
		{{ label }}
	</button>
</template>
<script>
export default {
	name: 'Button',
	props: {
		label: String,
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
</style>
