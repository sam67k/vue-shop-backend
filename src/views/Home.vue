<template>
	<div class="wrapper">
		<form class="form-signin">
			<h2 class="form-signin-heading text-center">Login Please</h2>
			<input
				type="email"
				v-model="email"
				class="form-control"
				name="username"
				placeholder="Email Address"
				required=""
				autofocus=""
			/>
			<input
				type="password"
				class="form-control"
				name="password"
				placeholder="Password"
				v-model="password"
				@keyup.enter="login"
			/>
			<button class="btn btn-lg btn-primary btn-block" @click.prevent="login">
				Login
			</button>
		</form>
	</div>
</template>

<script>
	import { fb } from '../firebase';

	export default {
		name: 'home',
		data() {
			return {
				email: null,
				password: null,
			};
		},

		methods: {
			login() {
				fb
					.auth()
					.signInWithEmailAndPassword(this.email, this.password)
					.then(() => {
						this.$router.push('/admin/overview');
					})
					.catch(function(error) {
						// Handle Errors here.
						var errorCode = error.code;
						var errorMessage = error.message;
						if (errorCode === 'auth/wrong-password') {
							alert('Wrong password.');
						} else {
							alert(errorMessage);
						}
						console.log(error);
					});
			},
		},
	};
</script>

<style scopped>
	body {
		background: #eee !important;
	}

	.wrapper {
		margin-top: 80px;
		margin-bottom: 80px;
	}

	.form-signin {
		max-width: 380px;
		padding: 15px 35px 45px;
		margin: 0 auto;
		background-color: #fff;
		border: 1px solid rgba(0, 0, 0, 0.1);
	}

	.form-control {
		margin: 10px 0px;
	}
</style>
