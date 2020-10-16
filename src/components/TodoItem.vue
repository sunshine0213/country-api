<template>
	<div
		class="task-list__todo"
		:class="{ completed: isCompleted }"
	>
		<div
			class="task-list__left"
			v-on:blur="edit(id)"
		>
			<input
				type="checkbox"
				:checked="isCompleted"
				v-on:change="complete(id)"
			/>
			<input
				type="text"
				class="input-edit"
				v-if="isEditing"
				v-model="taskValue"
				@blur="saveAndExit(id)"
				v-on:keyup.enter="
					saveAndExit(id)
				"
				v-focus="isEditing"
			/>

			<p
				v-if="!isEditing"
				v-on:dblclick="edit(id)"
			>
				{{ task }}
			</p>
		</div>
		<div class="task-list__right">
			<div class="task-list__right-top">
				<img
					src="@/assets/icons/time_icon.svg"
				/>
				<p>{{ displayTime }}</p>
			</div>
			<div
				class="task-list__right-bottom"
			>
				<img v-if="priority=='low'"
				src=@/assets/icons/priority-low.svg
				/> <img
				v-if="priority=='medium'"
				src=@/assets/icons/priority-medium.svg
				/> <img v-if="priority=='high'"
				src=@/assets/icons/priority-high.svg
				/>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'TodoItem',
	components: {},
	props: {
		id: String,
		task: String,
		isCompleted: Boolean,
		time: String,
		priority: String,
		isEditing: Boolean,
		complete: Function,
		edit: Function,
		update: Function,
	},
	data: function() {
		return {
			taskValue: this.task,
			displayTime: this.getTime(),
		}
	},
	directives: {
		focus: {
			// directive definition
			inserted: function(el) {
				el.focus()
			},
		},
	},
	methods: {
		getTime: function() {
			const date = new Date(this.time)

			return (
				date.getHours('HH') +
				':' +
				date.getMinutes('MM')
			)
		},
		saveAndExit: function(id) {
			this.edit(id)
			this.update(id, this.taskValue)
		},
	},
}
</script>
<style scoped>
.task-list__todo {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-top: 15px;
}
.task-list__left {
	display: flex;
	align-items: center;
	flex: 0.8;
}

.task-list__left p {
	margin: 0;
	margin-left: 10px;
}
.task-list__right {
	display: flex;
	flex: 0.2;
	align-items: flex-end;
	flex-direction: column;
}
.task-list__right-top {
	display: flex;
	align-items: center;
}
.task-list__right-bottom {
	display: flex;
	justify-content: flex-end;
}
.task-list__right p {
	font-size: 1.5rem;
	color: #a4b0cb;
	margin: 0;
	margin-left: 5px;
}

.completed {
	opacity: 0.7;
}
.completed p {
	color: #a4b0cb;
}
.input-edit {
	border: none;
	font-family: 'Nunito', sans-serif;
	font-size: 2rem;
	color: #1a1b1d;
	border: 1px solid #79a8ed;
	border-radius: 6px;
	padding: 5px 10px;
	margin-left: 10px;
}
</style>
