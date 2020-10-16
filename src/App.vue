<template>
	<div id="app">
		<router-view />
	</div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
	name: 'App',
	mounted: function() {
		this.fetchLocalStorage()
	},
	methods: {
		...mapActions(['fetchLocal']),
		fetchLocalStorage: function() {
			this.fetchLocal()
		},
	},
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');

:root {
	font-size: 8px;
}
body {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Nunito', sans-serif;
	font-size: 2rem;
}
#app {
	width: 400px;
	margin: auto;
}
a {
	text-decoration: none;
}
h1 {
	font-style: normal;
	font-weight: 500;
	font-size: 25px;
	line-height: 34px;
	text-align: center;
	letter-spacing: 0.02em;
	color: #1a1b1d;
	margin: 10px 0;
}
h2 {
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 27px;
	letter-spacing: 0.02em;
	color: #1a1b1d;
}
p {
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 22px;
	text-align: center;
	letter-spacing: 0.02em;
	color: #1a1b1d;
	margin: 10px 0;
}
.primary-highlight {
	color: #79a8ed;
}
.sub-text {
	color: #a4b0cb;
}
.mx-input-wrapper {
	position: relative;
	width: 100%;
}
.mx-input {
	/* -webkit-appearance: none; */
	-moz-appearance: none;
	/* appearance: none; */
	display: flex;
	/* padding: 0 0 4px; */
	background: none;
	border: 0px solid
		rgba(60, 60, 60, 0.26) !important;
	/* border-radius: 4px; */
	/* white-space: normal; */
	font-family: 'Nunito', sans-serif;
	font-size: 16px !important;
	color: #a4b0cb;
}
</style>
