<template>
	<div class="admin">
		<div class="page-wrapper default-theme sidebar-bg bg1 toggled">
			<a id="show-sidebar" @click="closeMenu" class="btn btn-sm btn-dark" href="#">
				<i class="fas fa-bars"></i>
			</a>
			<nav id="sidebar" class="sidebar-wrapper">
				<div class="sidebar-content">
					<!-- sidebar-brand  -->
					<div class="sidebar-item sidebar-brand">
						<a href="#">Vue Shop</a>
						<div id="close-sidebar" @click="closeMenu">
							<i class="fas fa-times"></i>
						</div>
					</div>
					<!-- sidebar-header  -->
					<div class="sidebar-item sidebar-header">
						<div class="user-info">
							<span class="user-role"> {{ email }} </span>
						</div>
					</div>
					<!-- sidebar-menu  -->
					<div class=" sidebar-item sidebar-menu">
						<ul>
							<li class="header-menu">
								<span>Menu</span>
							</li>
							<li>
								<router-link to="/admin/overview">
									<i class="fa fa-chart-line"></i>
									<span>Overview</span>
								</router-link>
							</li>
							<li>
								<router-link to="/admin/products">
									<i class="fab fa-amazon"></i>
									<span>Products</span>
								</router-link>
							</li>
							<li>
								<router-link to="/admin/orders">
									<i class="fa fa-shopping-cart"></i>
									<span>Orders</span>
								</router-link>
							</li>
							<li>
								<a href="#" @click="logout()">
									<i class="fa fa-power-off"></i>
									<span>Logout</span>
								</a>
							</li>
						</ul>
					</div>
					<!-- sidebar-menu  -->
				</div>
			</nav>
			<!-- sidebar-content  -->
			<main class="page-content">
				<router-view />
			</main>
			<!-- page-content" -->
		</div>
		<!-- page-wrapper -->
	</div>
</template>

<script>
	// @ is an alias to /src
	import { fb } from '../firebase';

	export default {
		name: 'admin',
		data() {
			return {
				email: null,
			};
		},
		components: {},
		methods: {
			closeMenu() {
				window.$('.page-wrapper').toggleClass('toggled');
			},
			logout() {
				fb
					.auth()
					.signOut()
					.then(() => {
						this.$router.replace('/');
					})
					.catch((err) => {
						console.log(err);
					});
			},
		},

		created() {
			let user = fb.auth().currentUser;
			this.email = user.email;
		},
	};
</script>

<style></style>
