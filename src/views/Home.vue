<template>
	<div class="home">
		<van-tabs v-model="active">
			<van-tab title="标签 1">内容 1</van-tab>
			<van-tab title="标签 2">内容 2</van-tab>
			<van-tab title="标签 3">内容 3</van-tab>
			<van-tab title="标签 4">内容 4</van-tab>
		</van-tabs>
	</div>
</template>

<script>
	// @ is an alias to /src

	export default {
		name: 'home',
		components: {

		},
		data() {
			return {
				active: 2
			}
		},
		methods: {
			bindChecked(el) {

			}
		}
	}
</script>


<style scoped lang='scss'>
	.home {
		background-color: lightskyblue;
		font-size: 30px;

		.radio {
			width: 50%;
			height: 50px;
			display: flex;
			padding: 30px;

			.radius {
				position: relative;
				width: 30px;
				height: 30px;
				background-color: #00a4ff;
				border-radius: 50%;

				&::before {
					content: "";
					position: absolute;
					display: block;
					width: 60%;
					height: 60%;
					background-color: red;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					margin: auto;
					border-radius: 50%;
				}

				&[checked] {
					background-color: yellow;
				}

				input[type=radio] {
					width: 30px;
					height: 30px;
					opacity: .1;
				}

				input[checked] {
					background-color: red;
				}
			}

		}
	}
</style>
