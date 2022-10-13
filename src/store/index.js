import { createStore } from 'vuex'

export default createStore({
	state: {
		products: [],
		cart: [],
	},
	getters: {
		products(state) {
			return state.products;
		},
	},
	mutations: {
		setProducts(state, products) {
			state.products = products
		},
		addToCart(state, product) {
			const exist = state.cart.find(element => element.id == product.id)
			if (!exist) {
				state.cart.push({
					id: product.id,
					title: product.title,
					image: product.image,
					price: product.price,
					quantity: 1
				})
			}
		},
	},
	actions: {
		fetchProductsList(context) {
			fetch('http://ecom/product/list')
			.then((response) => response.json())
			.then((data) => {
				context.commit('setProducts', data)
			}).catch((error) => console.log(error))
		},
	},
	modules: {
	}
})
