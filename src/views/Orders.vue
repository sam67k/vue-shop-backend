<template>
	<div class="products">
		<div class="container">
			<div class="intro h-100">
				<div class="row h-100 justify-content-center align-items-center">
					<div class="col-md-6">
						<h3>Orders Page</h3>

						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, ducimus.
						</p>
					</div>
					<div class="col-md-6">
						<img src="/img/svg/orders.svg" alt="" class="img-fluid" />
					</div>
				</div>
			</div>

			<hr />

			<div class="product-test">
				<h3 class="d-inline-block">Orders list</h3>

				<div class="table-responsive">
					<table class="table" width="100%">
							<col style="width: 10%;" />
							<col style="width: 5%;" />
							<col style="width: 5%;" />
							<col style="width: 15%;" />
							<col style="width: 10%;" />
							<col style="width: 15%;" />
							<col style="width: 5%;" />
							<col style="width: 5%;" />
						<thead>
						<tr>
							<th>Name</th>
							<th>Number</th>
							<th>Time</th>
							<th>Addrss</th>
							<th>Email</th>
							<th>Items</th>
							<th>Cart Quantity</th>
							<th>Cart Price</th>
						</tr>
						</thead>
						<tbody> 
						<tr v-for="order in orders" :key="order">
							<td>
								{{ order.Info.name }}
							</td>
							<td>
								{{ order.Info.number }}
							</td>
							<td>
								{{ time(order.Info.time) }}
							</td>
							<td>
								{{ order.Info.address }}
							</td>
							<td>
								{{ order.Info.email }}
							</td>
							<td>
								<p>Product - Quantity</p>
								<ol>
									<li v-for="(item, index) in orders" :key="item">{{ item.Products[index].Name }} - {{ item.Products[index].Quantity }}</li>
								</ol>
							</td>
							<td>
								{{ order.CartQuantity }}
							</td>
							<td>
								{{ order.CartTotalPrice }}
							</td>
						</tr>
						</tbody> 
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { db } from '../firebase';

	export default {
		name: 'Orders',
		props: {
			msg: String,
		},

		data() {
			return {
				orders: { Info: {}, Products: [], CartQuantity: 0, CartTotalPrice: 0 },
			};
		},
		methods: {
			time(x) {
				var a = new Date(x * 1000);
				var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
				var year = a.getFullYear();
				var month = months[a.getMonth()];
				var date = a.getDate();
				var hour = a.getHours();
				var min = a.getMinutes();
				var sec = a.getSeconds();
				var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
				return time;
			}
		},
		firestore() {
			return {
				orders: db.collection('orders'),
			};
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.img-wrapp {
		position: relative;
	}
	.img-wrapp span.delete-img {
		position: absolute;
		top: -14px;
		left: -2px;
	}
	.img-wrapp span.delete-img:hover {
		cursor: pointer;
	}
</style>
