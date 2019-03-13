<template>
	<div class="home">
		<!-- tab栏开始 -->
		<van-tabbar v-model="active" :fixed="isFixed" class="nav-tabbar">
			<div class="aside">
				<i class="iconfont icon-category"></i>
			</div>
			<van-tabbar-item>
				<i slot="icon" slot-scope="props" class="iconfont icon-yinle1"></i>
			</van-tabbar-item>
			<van-tabbar-item>
				<i slot="icon" slot-scope="props" class="iconfont icon-yinlexingshi"></i>
			</van-tabbar-item>
			<van-tabbar-item>
				<i slot="icon" slot-scope="props" class="iconfont icon-play-filling"></i>
			</van-tabbar-item>
			<div class="search">
				<i class="iconfont icon-chaxun"></i>
			</div>
		</van-tabbar>
		<!-- tab栏结束 -->
		
		<!-- 底部音乐栏 -->
		<m-footer :isPlay="isPlay">
			
		</m-footer>
	</div>
</template>

<script>
	// @ is an alias to /src
	// 引入底部音乐栏
	import mFooter from '@/components/mFooter.vue'
	export default {
		name: 'home',
		components: {
			mFooter
		},
		data() {
			return {
				// tab栏索引
				active: 0,
				// 是否固定在底部
				isFixed: false,
				tabs: ['https://m.360buyimg.com/babel/jfs/t1/24061/35/10379/42739/5c8658dbE3f123849/6f6b44e2c5a3c82f.jpg',
					'https://img1.360buyimg.com/pop/jfs/t1/17005/27/9781/159975/5c81df7aE799c58d2/cc7fb12b2a826481.jpg',
					'https://m.360buyimg.com/babel/jfs/t1/31931/5/4952/99171/5c8216d7Eadd63188/b78ab41bb0b10179.jpg',
					'https://imgcps.jd.com/ling/1612939/5pe25bCa55S35YyF54m55oOg/6aKG5Yi45LqrOOaKmA/t-5bda9e0c29b6591f551ce19b/79e88a80.jpg'
				],
				// 是否播放
				isPlay:true
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
		position: relative;

		/* 首页tab导航栏 */
		.nav-tabbar {
			position: absolute;
			top: 0;
			width: 100%;
			height: 30px;
			padding: 0 100px;
			background: rgb(166, 199, 255);
			background: -moz-linear-gradient(0deg, rgb(166, 199, 255) 0%, rgb(192, 255, 255) 100%);
			background: -webkit-linear-gradient(0deg, rgb(166, 199, 255) 0%, rgb(192, 255, 255) 100%);
			background: -o-linear-gradient(0deg, rgb(166, 199, 255) 0%, rgb(192, 255, 255) 100%);
			background: -ms-linear-gradient(0deg, rgb(166, 199, 255) 0%, rgb(192, 255, 255) 100%);
			background: linear-gradient(90deg, rgb(166, 199, 255) 0%, rgb(192, 255, 255) 100%);
			/* 侧边栏 */
			.aside{
				position: absolute;
				top:50%;
				left:20px;
				transform: translateY(-50%);
			}
			/* 搜索栏 */
			.search{
				position: absolute;
				position: absolute;
				top:50%;
				right:20px;
				transform: translateY(-50%);
			}
		}
	}
</style>
