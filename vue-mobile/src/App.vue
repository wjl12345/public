<template>
  <div id="app" >
  <van-nav-bar
  title="标题"
  left-text="返回"
  right-text="按钮"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
  class='nav'
/>
      <router-view  />
  </div>
</template>

<script>
	import Vue from 'vue';
import { NavBar } from 'vant';
  export default {
    name: 'App',
    //inject:['reload']
    data() {
      return {
        transitionName: 'slide-right'
      }
    },
    watch: {
      '$route' (to, from) {
        let toName = to.name
        const toIndex = to.meta.index
        const fromIndex = from.meta.index
        this.transitionName = toIndex < fromIndex ? 'slide-right' : 'slide-left'
      }
    },
    methods:{
    	 onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
     
    }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: .5rem;
    padding-top: 1rem;
  }
  .nav{
  	position: fixed;
  	top: 0;
  	width: 100vw;
  }
</style>