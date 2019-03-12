<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style lang="scss">
	#app {
		background-image: linear-gradient(30deg,#00a4ff 20%, skyblue  60%, #ccc 80%,red);
	}

	.bg-shadow { 
		width: 100%;
		height: 100px;
		box-shadow: 0 8px 5px #ccc inset;
	}
</style>
