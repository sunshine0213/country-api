<template>
	<div class="task-list__todo">
		<div class="task-list__left">
			<input type="checkbox" />
			<p>{{ task }}</p>
		</div>
		<div class="task-list__right">
			<div class="task-list__right-top">
				<img
					src="@/assets/icons/time_icon.svg"
				/>
				<p>{{ time }}</p>
			</div>
			<div
				class="task-list__right-bottom"
			>
				<p>{{ priority }}</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'TodoItem',
	props: {
		task: String,
		isCompleted: Boolean,
		time: String,
		priority: String,
	},
}
</script>
<style scoped>
.task-list__todo {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-top: 5px;
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
</style>
