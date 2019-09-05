<template>
	<div class="btn">
		<button class="default-btn">{{btnName}}</button>
	</div>
</template>

<script>
	export default{
		props:{
			btnName:{
				type:String
			}
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	.btn {
  	text-align: center;
    width: 100%;
    height: 60px;
    background: #F5F5F5;
    padding-bottom: 0;
  }
  
  .default-btn {
    background: linear-gradient(to right, #fd8a4b, #fd6d4b);
    font-size: 15px;
    color: #fff;
    width: 345px;
    height: 45px;
    border-radius: 5px;
    border: 0;
  }
</style>