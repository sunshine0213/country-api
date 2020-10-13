<template>
	<div class="input-text">
		<label
			v-if="label"
			class="input-label"
		>
			{{ label }}
		</label>
		<input
			type="text"
			class="input-box"
			v-bind:placeholder="placeholder"
			v-bind:value="model"
			v-on:input="
				$emit(
					'input',
					$event.target.value,
				)
			"
			v-focus
		/>
	</div>
</template>
<script>
export default {
	name: 'InputText',
	props: {
		label: String,
		placeholder: String,
		model: String,
	},
	data: function() {
		return {
			inputValue: '',
		}
	},
	methods: {
		inputChange: function() {
			console.log(
				'input value',
				this.inputValue,
			)
		},
	},
	directives: {
		focus: {
			// directive definition
			inserted: function(el) {
				el.focus()
			},
		},
	},
}
</script>
<style scoped>
.input-text {
	margin-top: 20px;
}
.input-box {
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
