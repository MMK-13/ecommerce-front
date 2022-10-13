<template>
	<div class="container mt-4">
		<div class="row">
			<div class="col" v-for="product in products" :key="product.id">
				<ProductCard
				:id="product.id"
				:image="product.image"
				:title="product.title"
				:description="product.description"
				:price="product.price"
				:category="product.category"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'
	import ProductCard from '@/components/ProductCard'

	export default {
		name: 'HomeView',
		created() {
			this.fetchProductsList()
		},
		components: {
			ProductCard,
		},
		methods: {
			...mapActions(["fetchProductsList"]),
		},
		computed: {
			...mapGetters(["products"]),
		},
	}
</script>