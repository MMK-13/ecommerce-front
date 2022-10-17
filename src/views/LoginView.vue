<template>
	<div class="container mt-5">
		<div class="row">
			<div class="col-md-4 offset-md-4">
				<LoginCard />
			</div>
		</div>
	</div>
</template>

<script>
	import LoginCard from '@/components/LoginCard'

	export default {
		name: 'LoginView',
		components: {
			LoginCard,
		},
	}
</script>