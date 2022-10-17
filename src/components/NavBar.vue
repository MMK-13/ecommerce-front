<template>
	<nav class="navbar navbar-dark bg-primary">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">Navbar</a>
			<div class="d-flex flex-row navbar-nav">
				<router-link class="nav-link" aria-current="page" to="/">Accueil</router-link>
				<router-link class="nav-link" aria-current="page" to="/store">Boutique</router-link>
				<router-link class="nav-link" to="/login">Login</router-link>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		name: 'NavBar',
	}
</script>

<style scoped>
	.nav-link {
		margin-left: 8px;
	}
</style>