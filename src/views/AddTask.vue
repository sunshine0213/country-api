<template>
	<div class="tasks">
		<div class="tasks__inner">
			<InputText
				label="What would you like to do?"
				placeholder="E.g Email CV to Peter"
			/>
			<InputDropdown
				label="Time"
				v-bind:value="time"
			/>
			<InputRadio
				label="Priority"
				name="priority"
				v-bind:value="priorityOptions"
			/>
			<Button label="Add to the list" />
			<Button
				label="Cancel"
				variant="secondary"
			/>
			<div class="task-list"></div>
		</div>
	</div>
</template>
<script>
import Button from '@/components/Button.vue'
import InputText from '@/components/InputText.vue'
import InputDropdown from '@/components/InputDropdown.vue'
import InputRadio from '@/components/InputRadio.vue'
const getTime = function() {
	const timeValue = []
	for (let i = 0; i < 12; i++) {
		timeValue.push(i + 1)
	}
	return timeValue
}
const priorityOptions = [
	{
		id: 'low',
		value: 'low',
		label: 'low',
	},
	{
		id: 'medium',
		value: 'medium',
		label: 'medium',
	},
	{
		id: 'high',
		value: 'high',
		label: 'high',
	},
]
export default {
	name: 'AddTask',
	components: {
		Button,
		InputText,
		InputDropdown,
		InputRadio,
	},
	data: function() {
		return {
			time: getTime(),
			priorityOptions: priorityOptions,
		}
	},
}
</script>
<style scoped>
.tasks {
	margin: 40px 30px;
}
.tasks__inner {
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.tasks p {
	margin-top: 0px;
}
img {
	margin: 20px 0;
}
.task-list {
	margin-top: 20px;
}
</style>
