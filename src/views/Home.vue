<template>
	<div class="home">
		<div class="home__inner">
			<img
				src="@/assets/time_illustration.svg"
				class="home__hero-image"
			/>
			<h1>
				Tomorrow never comes
				<span class="primary-highlight"
					>Let’s do</span
				>
				it today!
			</h1>
			<Button
				v-if="!isStart"
				label="Lets do it"
				v-bind:onClick="onStart"
			/>
			<div
				v-if="isStart"
				class="home__start"
			>
				<InputText
					label="What should I call you?"
					placeholder="full name"
				/>
				<Button
					v-if="isStart"
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

export default {
	name: 'Home',
	components: { Button, InputText },
	data: function() {
		return {
			isNewUser: true,
			isStart: false,
		}
	},
	methods: {
		onStart: function() {
			this.isStart = true
		},
	},
}
document.title = 'Home'
</script>
<style scoped>
.home {
	margin: 40px 30px;
}
.home__inner {
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.home .home__hero-image {
	margin-bottom: 20px;
	display: flex;
	justify-content: center;
}
</style>
