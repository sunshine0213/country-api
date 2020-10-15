<template>
	<div class="input-radio">
		<label class="input-label">
			{{ label }}
		</label>

		<div class="radio-options">
			<div
				v-for="item in value"
				v-bind:key="item.id"
				class="option-group"
			>
				<input
					type="radio"
					:id="item.id"
					:name="name"
					:value="item.value"
					v-model="testValue"
					v-on:change="
						onChange(testValue)
					"
				/>
				<label
					class="option-label"
					for="male"
					>{{ item.label }}</label
				>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'InputRadio',
	props: {
		label: String,
		value: [],
		name: String,
		onChange: Function,
	},
	data: function() {
		return {
			testValue: '',
		}
	},
}
</script>
<style scoped>
.input-radio {
	margin-top: 20px;
	font-family: 'Nunito', sans-serif;
	font-size: 2rem;
	width: 100%;
	padding: 10px;
	border-radius: 6px;
}
.radio-options {
	color: #a4b0cb;
	margin-top: 15px;
	display: flex;
}
.option-group {
	flex: 1;
	justify-content: space-between;
}
.option-label {
	text-transform: capitalize;
	margin-left: 5px;
}
</style>
