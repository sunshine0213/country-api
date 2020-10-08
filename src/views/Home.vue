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
			<Button label="Lets do it" />
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Button from '@/components/Button.vue'

export default {
	name: 'Home',
	components: { Button },
	methods: {
		onStart: function() {
			console.log('hello')
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
