<template>
	<div class="tasks">
		<div class="tasks__inner">
			<h1>
				Hello
				<span class="primary-highlight"
					>Bikash!</span
				>
			</h1>
			<p class="sub-text">
				26th October 2020
			</p>
			<img
				src="@/assets/empty_illustration.svg"
				class="home__hero-image"
			/>
			<p>
				Your task list for today looks
				empty
			</p>
			<Button label="Add a task" />
			<div class="task-list">
				<h2>Today</h2>
			</div>
			<TodoItem
				task="Call dad"
				time="12:30"
				isCompleted="true"
				priority="medium"
			/>
			<TodoItem
				task="Send CV to peter"
				time="13:30"
				isCompleted="false"
				priority="low"
			/>
			<TodoItem
				task="Pick pulled oats"
				time="18:30"
				isCompleted="false"
				priority="high"
			/>
		</div>
	</div>
</template>
<script>
import Button from '@/components/Button.vue'
import TodoItem from '@/components/TodoItem.vue'
export default {
	name: 'Tasks',
	components: {
		Button,
		TodoItem,
	},
}
document.title = 'Tasks'
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
