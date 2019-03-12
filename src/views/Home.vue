<template>
	<div class="home">
		<div class="radio">
			<div class="radius" checked  ref="male">
				<input type="radio" name='sex' value='male' id='male' checked="checked">
			</div>
			<label for='male'>男</label>
			<div class="radius">
				<input type="radio" name='sex' value='female' id='female' ref="female">
			</div>
			<label for="female">女</label>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src

	export default {
		name: 'home',
		components: {

		},
		data(){
			return {
				sex:['男','女'],
				isClick:false
			}
		},
		methods:{
			bindChecked(el){
				
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
			.radius{
				position: relative;
				width: 30px;
				height: 30px;
				background-color: #00a4ff;
				border-radius: 50%;
				&::before{
					content: "";
					position: absolute;
					display: block;
					width: 60%;
					height:60%;
					background-color: red;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					margin: auto;
					border-radius: 50%;
				}
				&[checked]{
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
