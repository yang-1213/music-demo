<template>
	<div>
		<footer class="footer">
			<!-- 歌曲信息 -->
			<div class="music">
				<img src="https://img11.360buyimg.com/mobilecms/s140x140_jfs/t1/20359/26/6288/298629/5c4e66b3E5c215c84/086a9f7565f3e98e.jpg!q90.webp" alt="">
				<div class="music-info">
					<div class="music-title">
						{{music.title}}
					</div>
					<div class="music-author">
						{{music.author}}
					</div>
				</div>
			</div>
			<!-- 右侧功能按钮 -->
			<div class="music-play">
				<!-- 暂停 icon-zanting1 -->
				<!-- 播放 icon-bofang1 -->
				<i class="iconfont icon-zanting1" :class="isPlay?'icon-bofang1':'icon-zanting1'" v-tap={methods:bindPlay}></i>
				<i class="iconfont icon-category"></i>
			</div>
		</footer>
	</div>
</template>

<script>
	// 邮箱登陆接口
	import {login,search} from "@/api/index.js"
	export default {
		props:{
			// 是否播放
			isPlay:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return {
				music:{
					author:'周杰伦',
					title:'夜的第七章！'
				}
			}
		},
		created(){
// 			login('gy148485@163.com',"mbsky148485")
// 				.then(res=>{
// 					console.log(res);
// 				})
				
				search('周杰伦').then(res=>{
					console.log(res);
				})
		// this.$emit(this.bindPlay,1);
		},
		methods:{
			// 点击播放 点击暂停
			bindPlay(){
				// 改变图标
				// this.isPlay = !this.isPlay;
				this.$emit('bindPlay');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.footer{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 50px;
		background-color: #00a4ff;
		padding: 6px;
		display: flex;
		.music{
			width: 76%;
			display: flex;
			img{
				width: 38px;
				height: 38px;
				border-radius: 5px;
			}
			.music-info{
				margin: 3px 0 3px 3px;
				.music-title{
					color: #fff;
					height:18px; 
					font-size:16px;
					line-height: 18px;
				}
				.music-author{
					font-size: 12px;
					color:#ccc;
					height: 12px;
					line-height: 12px;
				}
			}
		}
		.music-play{
			flex: 1;
			line-height: 38px;
			display: flex;
			justify-content:space-around;
			>.iconfont{
				font-size:30px;
			}
		}
	}
</style>
