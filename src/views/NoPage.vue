<template>
	<div class="no-page">
		<h2>Oops!</h2>
		<img
			src="@/assets/404_illustration.svg"
			class="no-page__illustration"
		/>
		<p class="sub-text">
			We could not find the page you are
			looking for.
		</p>
		<p>
			<router-link to="/"
				>Go back to Home</router-link
			>
		</p>
	</div>
</template>
<style scoped>
.no-page {
	margin: auto;
	margin-top: 60px;
	text-align: center;
}
.no-page .no-page__illustration {
	margin-bottom: 20px;
}
</style>
