<template>
	<div class="tasks">
	
		<InputText
			label="What would you like to do?"
			placeholder="E.g Email CV to Peter"	
			v-model="task"		
		/>
	<label class="input-label" >
			Time
		</label>
		<vSelect class="dropdown-options" v-model="taskTime" :options="time"></vSelect>
		
		<InputRadio
			label="Priority"
			name="priority"
			v-bind:value="priorityOptions"
			v-bind:selectedRadioValue="priority"
			v-bind:onChange='radioChange'			
		/>
	
		<Button label="Add to the list" v-bind:onClick="addTask"/>
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
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import { uuid } from "vue-uuid";
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
		vSelect,
	},
	data: function() {
		return {
			time: getTime(),
			priorityOptions: priorityOptions,
			task:'',
			taskTime:'',
			priority:''

		}
	},
	methods: {
		cancel: function() {
			this.$router.go(-1)
		},
		radioChange:function(value){
			this.priority=value
		},
		addTask:function(){
			const newTask={
				id:uuid.v4(),
            task: this.task,
            time: this.taskTime,
            isCompleted: false,
            isEditing: false,
            priority: this.priority,
			}
			let _taskapp = JSON.parse(localStorage.getItem("taskapp"));
			const _items=_taskapp.items			
			_items.push(newTask)
			_taskapp={..._taskapp, items:_items}
			console.log(_taskapp)
			localStorage.setItem("taskapp", JSON.stringify(_taskapp))
			this.$router.push('/dashboard')
			
		}
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
.input-label{
	margin-top:15px!important;
}

</style>
