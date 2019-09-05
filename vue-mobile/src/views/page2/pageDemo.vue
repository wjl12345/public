<template>
	<div >
		<div class="page_demo" v-show="page === ''">
			<div @click="goTo('qq')" class="li">QQ</div>
		</div>
		
		
		<qq v-show="page === 'qq'"></qq>
	</div>
</template>

<script>
	import qq from './pageDemo/QQ'
	export default{
		components:{
			qq
		},
		data(){
			return{
				page:'',
			}
		},
		methods:{
			goTo(val){
				this.page = val
			},
			select(e){
				console.log(e)
			}
		}
	}
</script>

<style scoped>
	.page_demo{
		padding-top: 1rem;
	}
	.li{
		width: 100vw;
		height: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #fff;
	}
</style>