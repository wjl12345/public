<template>
  <div>
    <div @click="goTo('progress')" class="list">步骤</div>
    <div @click="goTo('menu')" class="list">失败的滑动菜单</div>
    <div @click="goTo('home0')" class="list">水印</div>
    <div @click="goTo('Home')" class="list">Home</div>
    <div @click="goTo('audio')" class="list">audio</div>
    <div @click="goTo('audio2')" class="list">audio2</div>
    <div @click="goTo('pie')" class="list">饼图</div>
    <div @click="goTo('scrollTap')" class="list">未完善的横向滑动</div>
    <div @click="goTo('picture')" class="list">图片查看</div>
    <div @click="goTo('batter')" class="list">上拉加载/下拉刷新</div>
    <div @click="goTo('delete')" class="list">删除</div>
    <div @click="goTo('Carousel')" class="list">图片轮播</div>
    <div @click="goTo('pageDemo')" class="list">例子</div>
    <div @click="goTo('scroll')" class="list">左滑删除</div>
    <div @click="goTo('batterscroll')" class="list">图片轮播</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        arry: [
          [ 1,2 , 3, 4],
          [ 5,6 , 7, 8],
          [ 9,10,11,12],
          [13,14,15,16],
        ],
        arr:[],
        num:''
      }
    },
    created() {
      this.arry.forEach((item,num)=>{
      	for(var i=0;i<=num;i++){
      		this.arr.push(this.arry[i][num -i])
      		//console.log(this.arr)
      	}
      	this.num = num;
      })
      for(var i=this.num;i>=1;i--){
      		this.arr.push(this.arry[this.num][i])
      		//console.log(this.arr)
      	}
      
      
      for(var i=0;i<=this.arry.length*2-1;i++){
      		this.arr.push(this.arry[this.num][i])
      		//console.log(this.arr)
      	}
      
      
    },
    methods: {
      goTo(name) {
        this.$router.push({
          name: name
        })
      }
    }
  }
</script>

<style scoped>
  .list {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1rem;
    width: 100vw;
    background: #4682B4;
    color: #fff;
    margin-top: .5rem;
  }
  .list:active{
  	background: #2c6493;
  }
</style>