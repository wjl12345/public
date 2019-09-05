<template>
	<div class="list">
		<p class="list-title">{{title}}</p>
		<p class="arror-right" @click="gotoNext">
			<img src="@/../static/right-arror.png" class="arror-right"/>
		</p>
	</div>
</template>

<script>
	export default{
		props:{
			title:{
				
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			gotoNext(){
				this.$emit('gotoNext')
			}
		}
	}
</script>

<style scoped>
	.list{
		padding: 0 .5rem;
		height: 1.333333rem;
		border-bottom: 1px solid #F5F5F5;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.list>p{
		margin: 0;
		height: 1.33333rem;
		line-height: 1.33333rem;
	}
	.arror-right{
		width: .5rem;
		vertical-align: middle;
	}
</style>