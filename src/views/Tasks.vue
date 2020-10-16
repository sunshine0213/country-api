<template>
	<div
		v-if="items.length > 0"
		class="tasks"
	>
		<div class="tasks__inner">
			<div class="task-list">
				<h2 v-if="todoTasks.length > 0">
					Today
				</h2>
			</div>
			<TodoItem
				v-for="item in todoTasks"
				v-bind:key="item.id"
				v-bind="item"
				v-bind:complete="complete"
				v-bind:edit="edit"
			/>
			<div class="task-list">
				<h2
					v-if="
						completedTasks.length > 0
					"
				>
					Completed
				</h2>
			</div>

			<TodoItem
				v-for="item in completedTasks"
				v-bind:key="item.id"
				v-bind="item"
				v-bind:complete="complete"
				v-bind:edit="edit"
			/>
		</div>
		<Button
			v-bind:onClick="toAddView"
			label="Add"
			variant="primaryCircleFixed"
		/>
	</div>
</template>
<script>
import TodoItem from '@/components/TodoItem.vue'
import Button from '@/components/Button.vue'
import {
	mapState,
	mapGetters,
} from 'vuex'
export default {
	name: 'Tasks',
	components: {
		TodoItem,
		Button,
	},
	computed: {
		...mapState(['items']),
		...mapGetters([
			'completedTasks',
			'todoTasks',
		]),
	},
	methods: {
		complete: function(id) {
			const _items = this.items.map(
				(item) => {
					if (item.id === id) {
						item.isCompleted = !item.isCompleted
					}
					return item
				},
			)
			this.items = [..._items]
			let _taskapp = JSON.parse(
				localStorage.getItem('taskapp'),
			)
			_taskapp = {
				..._taskapp,
				items: _items,
			}
			localStorage.setItem(
				'taskapp',
				JSON.stringify(_taskapp),
			)
		},
		edit: function(id) {
			const _items = this.items.map(
				(item) => {
					if (item.id === id) {
						item.isEditing = !item.isEditing
					}
					return item
				},
			)
			this.items = [..._items]
		},
		toAddView: function() {
			this.$router.push(
				'/dashboard/add',
			)
		},
	},
}
document.title = 'Tasks'
</script>
<style scoped>
.tasks {
	margin: 40px 30px;
	position: relative;
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
