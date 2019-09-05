<template>
  <div class="animate">
    <div class="top">
      <div class="tap">
        <span v-for="(i,index) in 3" @click="Show(index)" :class="({'color':Index === index})">
				{{i}}
			</span>
        <div :style="style"></div>
      </div>
    </div>
<div class="tops"></div>
    <div class="msg" @touchmove="touchMove" @touchend="touchEnd">
      <p>多少多少点多少</p>
      <p>多少多少点多少</p>
      <p>多少多少点多少</p>
      <p>多少多少点多少</p>
    </div>
    <div class="btn">
      <div>
        <div class="circle" @click="Show2" :class="({'circle2':flag})">
          <span>+</span>
        </div>
      </div>
    </div>
    <div class="modal" :class="({'modal2':flag})"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        style: {
          left: 'calc(100vw / 6)',
          color: "#000"
        },
        Index: 0,
        flag: false,
      }
    },
    methods: {
      Show(index) {
        this.style.left = "calc(100vw / 6 + 100vw / 3 *" + index + ")"
        this.Index = index
      },
      Show2() {
        this.flag = !this.flag
      },
      touchMove(e) {
        console.log(e.changedTouches[0].pageX)
       console.log(document.body.clientWidth)
      },
      touchEnd(e) {
        console.log(e.changedTouches)
      }
    }
  }
</script>

<style scoped>
  p {
    margin: 0;
  }
  
  .animate {
   min-height: 100vh ;
    background: red;
  }
  
  .top {
    width: 100;
    position: fixed;
    top: 0;
  }
  
  .tap {
    display: flex;
    height: 1rem;
    font-size: .5rem;
    width: 100%;
    background: #fff;
    justify-content: space-around;
    position: relative;
  }
  
  .tap>span {
    display: inline-block;
    width: calc(100vw / 3);
    transition: all .5s;
  }
  
  .tap>div {
    position: absolute;
    bottom: 0;
    display: inline-block;
    width: 1rem;
    height: .1rem;
    background: red;
    left: calc(100vw / 6);
    transform: translateX(-50%);
    transition: all .3s;
  }
  
  .color {
    color: #fff;
    background: #007AFF;
  }
  /**/
  .tops{
  	height: 1rem;
  }
  .msg {
    background: #1989FA;
    width: 100%;
  }
  /**/
  
  .btn {
    position: fixed;
    bottom: 0;
    z-index: 2;
    height: 1rem;
    background: #fff;
    width: 100%;
  }
  
  .btn>div {
    width: 100;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .circle {
    width: .8rem;
    height: .8rem;
    background: #07C160;
    border-radius: .8rem;
    /*box-shadow: 0 0 .1rem #333;*/
    color: #fff;
    font-size: .6rem;
    position: relative;
    transition: all .3s;
    transform: rotateZ(0);
  }
  
  .circle::before {
    content: "";
    display: inline-block;
    width: .8rem;
    height: .8rem;
    background: transparent;
    border-radius: .8rem;
    box-shadow: 0 0 .1rem #333;
  }
  
  .circle>span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  
  .circle2 {
    background: #007AFF;
    transform: rotateZ(135deg);
  }
  
  .modal {
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, .2);
    transform: translateY(100vh);
    /*transform: rotateY(90deg);*/
    transition: all .3s;
  }
  
  .modal2 {
    transform: translateY(0);
    /*transform: rotateY(0);*/
  }
</style>