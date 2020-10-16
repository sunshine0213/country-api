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
					placeholder="Full name"
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
import {
	mapActions,
	mapState,
} from 'vuex'
export default {
	name: 'Landing',
	components: { Button, InputText },
	computed: {
		...mapState([
			'isNewUser',
			'isStart',
		]),
	},
	mounted: function() {
		this.fetchLocalStorage()
	},
	data: function() {
		return {
			firstName: '',
		}
	},
	methods: {
		...mapActions([
			'fetchLocal',
			'setStart',
			'setFirstName',
		]),
		onStart: function() {
			this.setStart()
		},
		onReady: function() {
			this.setFirstName(this.firstName)

			this.$router.push('/dashboard')
		},
		fetchLocalStorage: function() {
			this.fetchLocal()
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
