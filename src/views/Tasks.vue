<template>
	<div
		v-if="items.length"
		class="tasks"
	>
		<div class="tasks__inner">
			<div
				v-if="todoTasks.length"
				class="task-list"
			>
				<h2>
					Today
				</h2>
				<span class="task-total">{{
					todoTasks.length
				}}</span>
			</div>
			<TodoItem
				v-for="item in todoTasks"
				v-bind:key="item.id"
				v-bind="item"
				v-bind:complete="complete"
				v-bind:edit="edit"
				v-bind:update="update"
			/>
			<div
				v-if="completedTasks.length"
				class="task-list"
			>
				<h2>
					Completed
				</h2>
				<span class="task-total">{{
					completedTasks.length
				}}</span>
			</div>

			<TodoItem
				v-for="item in completedTasks"
				v-bind:key="item.id"
				v-bind="item"
				v-bind:complete="complete"
				v-bind:edit="edit"
				v-bind:update="update"
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
	mapActions,
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
		...mapActions([
			'markComplete',
			'toggleEdit',
			'updateTask',
		]),
		complete: function(id) {
			this.markComplete(id)
		},
		edit: function(id) {
			this.toggleEdit(id)
		},
		update: function(id, value) {
			this.updateTask({
				id: id,
				value: value,
			})
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
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.task-total {
	color: #a4b0cb;
}
</style>
