<template>
	<div class="card">
		<div class="card-header">
			Connexion
		</div>
		<div class="card-body">
			<h5 class="card-title">Bienvenue sur PC Components</h5>
			<p class="card-text">Veuillez saisir vos informations de connexion</p>

			<div class="alert alert-danger" role="alert" v-show="showAlert">
				Please type all your connection's informations
			</div>
			<form>
				<div class="mb-3">
					<label for="username" class="form-label">Username</label>
					<input id="username" type="text" class="form-control" placeholder="Username..." autocomplete="username" v-model="username">
				</div>

				<div class="mb-3">
					<label for="password" class="form-label">Password</label>
					<input id="password" type="password" class="form-control" placeholder="Password..." autocomplete="current-password" v-model="password">
				</div>

				<button type="button" class="btn btn-primary" @click="submit">Submit</button>
				<button type="button" class="btn btn-default" @click="goBack">Cancel</button>
			</form>
		</div>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'

	export default {
		name: 'LoginCard',
		data() {
			return {
				username: '',
				password: '',
				showAlert: false,
			}
		},
		methods: {
			...mapActions(["fetchProductsList"]),
			goBack() {
				this.$router.back()
			},
			async submit() {
				if (this.username.length > 0 && this.password.length > 0) {
					this.showAlert = false
					await fetch('http://ecom/user/login', {
						method: 'POST',
						body: JSON.stringify({
							username: this.username,
							password: this.password
						})
					})
					
				} else {
					this.showAlert = true
				}
			}
		},
		computed: {
			...mapGetters(["products"]),
		},
	}
</script>