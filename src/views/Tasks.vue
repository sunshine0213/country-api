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
</style>
