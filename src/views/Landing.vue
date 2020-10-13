<template>
	<div class="landing">
		<div class="landing__inner">
			<img
				src="@/assets/time_illustration.svg"
				class="landing__hero-image"
			/>
			<h1>
				Tomorrow never comes
				<span class="primary-highlight"
					>Let’s do</span
				>
				it today!
			</h1>
			<Button
				v-if="isNewUser"
				label="Lets do it"
				v-bind:onClick="onStart"
			/>
			<div
				v-if="isStart"
				class="landing__start"
			>
				<InputText
					label="What should I call you?"
					v-model="firstName"
					placeholder="full name"
				/>
				<Button
					v-if="isStart"
					v-bind:onClick="onReady"
					label="I'm ready"
				/>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Button from '@/components/Button.vue'
import InputText from '@/components/InputText.vue'
import { uuid } from 'vue-uuid'
export default {
	name: 'Landing',
	components: { Button, InputText },
	mounted: function() {
		this.firstName = this.getFromLocal().firstName
		this.isNewUser = this.getFromLocal().isNewUser
		this.isStart = this.getFromLocal().isStart
	},
	data: function() {
		return {
			isNewUser: true,
			isStart: false,
			firstName: '',
			jpt: '',
		}
	},
	methods: {
		onStart: function() {
			this.isStart = true
			this.isNewUser = false
			this.jpt = uuid.v4()
		},
		onReady: function() {
			const taskapp = {
				firstName: this.firstName,
				items: [
					{
						id: uuid.v4(),
						task: 'Call dad',
						time: '12:30',
						isCompleted: false,
						isEditing: false,
						priority: 'high',
					},
					// {
					//   id: uuid.v4(),
					//   task: "Send CV to peter",
					//   time: "14:30",
					//   isCompleted: false,
					//   isEditing: false,
					//   priority: "medium",
					// },
					// {
					//   id: uuid.v4(),
					//   task: "Make a video",
					//   time: "18:30",
					//   isCompleted: false,
					//   isEditing: false,
					//   priority: "low",
					// },
				],
				isNewUser: false,
				isStart: false,
			}
			localStorage.setItem(
				'taskapp',
				JSON.stringify(taskapp),
			)
			this.$router.push('/dashboard')
		},
		getFromLocal: function() {
			const _local = JSON.parse(
				localStorage.getItem('taskapp'),
			)
			return _local
		},
	},
}
document.title = 'Landing'
</script>
<style scoped>
.landing {
	margin: 40px 30px;
}
.landing__inner {
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.landing .landing__hero-image {
	margin-bottom: 20px;
	display: flex;
	justify-content: center;
}
</style>
