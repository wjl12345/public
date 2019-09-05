<template>
  <div class="menu" >
    <div>滑动菜单</div>
    <div class="all_box">
    	<div v-for="i in 2" class="box" :class="({'color':i === 2})" :style="sty" @touchmove='touchMove' @touchstart='touchStart' @touchend='touchEnd'></div>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations,mapAction } from 'vuex'
  export default {
    data() {
      return {
      	sty:{
      		transform:'translateX(0)'
      	},
      	sty2:{
      		transform:'translateX(0)'
      	},
      	x1:'',
      	x2:'',
      	x3:'',
      	w1:'',
      	w2:'',
      }
    },
    created() {
      window.addEventListener('contextmenu', function(e) {
        e.preventDefault();
      });
      console.log(customer)
      console.log(666)
    },
    computed:{
    	...mapState(['count'])
    },
    methods: {
      //移动
      touchMove(e) {
      	//移动距离
      	this.w1 = e.changedTouches[0].pageX - this.x1;
      	//页面宽度
      	this.w2 = e.changedTouches[0].target.offsetWidth
      	
        this.sty.transform = "translateX("+this.w1+'px)';
        
        this.sty2.left =this.w2+ e.changedTouches[0].pageX - this.x1+'px';
        console.log(this.w1/this.w2)
        //this.sty.top = e.changedTouches[0].pageY+'px'
      },
      //点击开始
      touchStart(e) {
      	this.x1 = e.changedTouches[0].pageX
        //console.log(e.changedTouches)
      },
      //点击结束
      touchEnd(e) {
        console.log(e.changedTouches)
        if(this.w1/this.w2 <-0.3){
        	this.sty.transform = 'translateX(-100vw)'
        }else if((this.w1/this.w2) <0.3 && this.w1/this.w2 >0){
        	this.sty.transform = 'translateX(0)'
        }else if(this.w1/this.w2 >0.3){
        	this.sty.transform = 'translateX(100vw)'
        	//this.sty.transform = 'translateX(100%)'
        }
      },
    }
  }
</script>

<style scoped>
  .menu {
    color: #fff;
    width: 100vw;
    min-height: 100vh;
    background: #007AFF;
    overflow: hidden;
  }
  .box{
  	width: 100vw;
  	height: 5rem;
  	background: #fff;
  	flex-shrink: 0;
  	box-shadow: 0 0 20px #ccc inset;
  	/*position: fixed;*/
  	/*transition: transform 1s;*/ 
  }
  .all_box{
  	display: flex;
  }
  .box2{
  	left: 100vw !important;
  }
  .color{
  	background: red;
  }
</style>