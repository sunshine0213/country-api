<template>
	<div class="home">
		<div class="home__inner">
			<h1>
				Hello
				<span class="primary-highlight"
					>{{ firstName }}!</span
				>
			</h1>

			<p class="sub-text">
				{{ currentDate }}
			</p>
			<p
				@click="logout"
				class="primary-highlight logout"
			>
				Logout
			</p>
			<img
				v-if="
					items.length < 1 && !isAddTask
				"
				src="@/assets/empty_illustration.svg"
				class="home__hero-image"
			/>
			<p
				v-if="
					items.length < 1 && !isAddTask
				"
			>
				Your task list for today looks
				empty
			</p>
			<Button
				v-if="
					items.length < 1 && !isAddTask
				"
				v-bind:onClick="toAddView"
				label="Add a task"
			/>

			<router-view />
		</div>
	</div>
</template>
<script>
import Button from '@/components/Button.vue'
import {
	mapState,
	mapActions,
} from 'vuex'
export default {
	name: 'Dashboard',
	components: {
		Button,
	},
	computed: mapState([
		'pageTitle',
		'firstName',
		'items',
	]),
	mounted: function() {
		if (
			this.$router.currentRoute.name ==
			'add'
		) {
			this.isAddTask = true
		}
		if (this.items.length > 0) {
			this.isAddTask = false
		}
		this.currentDate = this.getCurrentTime()
	},
	data: function() {
		return {
			isAddTask: false,
			currentDate: '',
		}
	},
	methods: {
		...mapActions(['logout']),
		toAddView: function() {
			this.isAddTask = true
			this.$router.push(
				'/dashboard/add',
			)
		},
		getCurrentTime: function() {
			const monthNames = [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December',
			]
			let dateObj = new Date()
			let month =
				monthNames[dateObj.getMonth()]
			let day = String(
				dateObj.getDate(),
			).padStart(2, '0')
			let year = dateObj.getFullYear()
			let output =
				day + ' ' + month + ' ' + year
			return output
		},
		userLogout: function() {
			this.logout()
			this.$router.push('/')
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
.home p {
	margin-top: 0px;
}
img {
	margin: 20px 0;
}
.task-list {
	margin-top: 20px;
}
.logout {
	cursor: pointer;
}
.logout:hover {
	color: #4887e4;
}
</style>
