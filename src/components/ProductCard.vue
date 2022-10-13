<template>
	<div class="card mb-2" style="width: 18rem;">
		<img src="@/assets/logo.png" class="card-img-top" alt="...">
		<div class="card-body">
			<h5 class="card-title">{{ title }}</h5>
			<p class="card-text">{{ description }}</p>
		</div>
		<ul class="list-group list-group-flush">
			<li class="list-group-item">Prix : {{ price }}</li>
			<li class="list-group-item">Catégorie : {{ category }}</li>
			<li class="list-group-item">A third item</li>
		</ul>
		<div class="card-body">
			<button class="btn btn-primary" @click="addToCart()">
				Ajouter
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'productCard',
		props: ['id', 'title', 'description', 'price', 'category', 'image'],
		methods: {
			addToCart() {
				this.$store.commit('addToCart', {
					id: this.id,
					title: this.title,
					image: this.image,
					price: this.price,
				})
			}
		}
	}
</script>