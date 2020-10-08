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
			<div class="task-list__todo">
				<div class="task-list__left">
					<input type="checkbox" />
					<p>Call dad</p>
				</div>
				<div class="task-list__right">
					<img
						src="@/assets/icons/time_icon.svg"
					/>
					<p>12:30</p>
				</div>
			</div>

			<div
				class="task-list__todo completed"
			>
				<div class="task-list__left">
					<input
						type="checkbox"
						checked
					/>
					<p>Call dad</p>
				</div>
				<div class="task-list__right">
					<img
						src="@/assets/icons/time_icon.svg"
					/>
					<p>12:30</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Button from '@/components/Button.vue'
export default {
	name: 'Tasks',
	components: {
		Button,
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
.task-list__todo {
	display: flex;
	justify-content: space-between;
	align-items: center;
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
	align-items: center;
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
</style>
