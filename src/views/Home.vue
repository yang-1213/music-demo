<template>
	<div class="home">
		<!-- 导航栏 -->
		<van-tabs v-model="active" swipeable>
			<van-tab
			v-for="(imageUrl,index) in ['https://m.360buyimg.com/babel/jfs/t1/24061/35/10379/42739/5c8658dbE3f123849/6f6b44e2c5a3c82f.jpg',
				'https://img1.360buyimg.com/pop/jfs/t1/17005/27/9781/159975/5c81df7aE799c58d2/cc7fb12b2a826481.jpg',
				'https://m.360buyimg.com/babel/jfs/t1/31931/5/4952/99171/5c8216d7Eadd63188/b78ab41bb0b10179.jpg',
				'https://imgcps.jd.com/ling/1612939/5pe25bCa55S35YyF54m55oOg/6aKG5Yi45LqrOOaKmA/t-5bda9e0c29b6591f551ce19b/79e88a80.jpg'
				]"
				 :title="'选项 ' + index"
				 :key="index"
				 >
				内容 {{ index }}
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
	// @ is an alias to /src
	import Nav from '@/components/Nav.vue'
	export default {
		name: 'home',
		components: {
			Nav
		},
		data() {
			return {
				active:0
			}
		},
		methods: {
			changeCurrent(index) {
				console.log(index);
			}
		}
	}
</script>


<style scoped lang='scss'>
	.home {
		font-size: 30px;

		.banner {
			display: block;
			width: 100%;
			height: 300px;
		}
	}
</style>
