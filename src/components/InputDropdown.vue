<template>
	<div class="input-dropdown">
		<label class="input-label">
			{{ label }}
		</label>
		<select
			class="dropdown-options"
			id="time"
			name="time"
		>
			<option
				v-for="time in value"
				v-bind:key="time"
				>{{ time }}</option
			>
		</select>
	</div>
</template>
<script>
export default {
	name: 'InputDropdown',
	props: {
		label: String,
		placeholder: String,
		value: [],
	},
}
</script>
<style scoped>
.input-dropdown {
	margin-top: 20px;
}
.dropdown-options {
	margin-top: 15px;
	border: none;
	font-family: 'Nunito', sans-serif;
	font-size: 2rem;
	color: #a4b0cb;
	border: 1px solid #a4b0cb;
	width: 100%;
	padding: 10px;
	border-radius: 6px;
}
</style>
