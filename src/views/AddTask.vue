<template>
	<div class="tasks">
		<InputText
			label="What would you like to do?"
			placeholder="E.g Email CV to Peter"
			v-model="task"
		/>
		<p class="input-label">
			Time
		</p>

		<date-picker
			class="select-time"
			v-model="taskTime"
			:time-picker-options="{
				start: '06:00',
				step: '00:30',
				end: '22:30',
			}"
			format="hh:mm a"
			type="time"
			placeholder="hh:mm a"
		></date-picker>

		<InputRadio
			label="Priority"
			name="priority"
			v-bind:value="priorityOptions"
			v-bind:selectedRadioValue="
				priority
			"
			v-bind:onChange="radioChange"
		/>

		<Button
			label="Add to the list"
			v-bind:onClick="add"
		/>
		<Button
			label="Cancel"
			variant="secondary"
			v-bind:onClick="cancel"
		/>
		<div class="task-list"></div>
	</div>
</template>
<script>
import Button from '@/components/Button.vue'
import InputText from '@/components/InputText.vue'
import InputRadio from '@/components/InputRadio.vue'
import { uuid } from 'vue-uuid'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import { mapActions } from 'vuex'
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
		InputRadio,
		DatePicker,
	},
	data: function() {
		return {
			time: getTime(),
			priorityOptions: priorityOptions,
			task: '',
			taskTime: null,
			priority: '',
		}
	},
	methods: {
		...mapActions(['addTask']),
		cancel: function() {
			this.$router.go(-1)
		},
		radioChange: function(value) {
			this.priority = value
		},
		add: function() {
			if (
				this.task == '' ||
				this.time == '' ||
				this.priority == ''
			) {
				alert('Enter all the fields')
			}
			const newTask = {
				id: uuid.v4(),
				task: this.task,
				time: this.taskTime.toString(),
				isCompleted: false,
				isEditing: false,
				priority: this.priority,
			}
			this.addTask(newTask)
			this.$router.push('/dashboard')
		},
	},
}
</script>
<style scoped>
.tasks {
	margin: 5px 5px;
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
.select-time {
	margin-top: 15px;
	border: none;
	font-family: 'Nunito', sans-serif;
	font-size: 2rem;
	color: #a4b0cb;
	border: 1px solid #a4b0cb;
	width: 100%;
	padding: 0px 10px;
	border-radius: 6px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.input-label {
	margin-top: 15px !important;
	text-align: left;
}
</style>
