<template>
	<nav class="navbar navbar-dark bg-primary">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">Navbar</a>
			<div class="d-flex flex-row navbar-nav">
				<a class="nav-link active" aria-current="page" href="/">Accueil</a>
				<a class="nav-link" href="/store">Boutique</a>
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