<!--<template>
  <div id="slider">
    <div class="window" @mouseover="stop" @mouseleave="play">
      <ul class="container" :style="containerStyle">
        <li>
          <img :src="sliders[sliders.length - 1].img" alt="">
        </li>
        <li class="img" v-for="(item, index) in sliders" :key="index">
          <img :src="item.img" alt="">
        </li>
        <li>
          <img :src="sliders[0].img" alt="">
        </li>
      </ul>
      <ul class="direction">
        <li class="left" @click="move(600, 1, speed)">
          <svg class="icon" width="30px" height="30.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ffffff" d="M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z" />
          </svg>
        </li>
        <li class="right" @click="move(600, -1, speed)">
          <svg class="icon" width="30px" height="30.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ffffff" d="M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z" />
          </svg>
        </li>
      </ul>
      <ul class="dots">
        <li v-for="(dot, i) in sliders" :key="i" :class="{dotted: i === (currentIndex-1)}" @click=jump(i+1)>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'slider',
    props: {
      initialSpeed: {
        type: Number,
        default: 30
      },
      initialInterval: {
        type: Number,
        default: 4
      }
    },
    data() {
      return {
        sliders: [{
            img: '../../static/img/wallhaven-zmmwzw.jpg'
          },
          {
            img: '../../static/img/wallhaven-lmqrrl.jpg'
          },
          {
            img: '../../static/img/wallhaven-q66xj7.jpg'
          },
          {
            img: '../../static/img/wallhaven-ym718x.jpg'
          }
        ],
        currentIndex: 1,
        distance: -600,
        transitionEnd: true,
        speed: this.initialSpeed
      }
    },
    computed: {
      containerStyle() {
        return {
          transform: `translate3d(${this.distance}px, 0, 0)`
        }
      },
      interval() {
        return this.initialInterval * 1000
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        this.play()
        window.onblur = function() {
          this.stop()
        }.bind(this)
        window.onfocus = function() {
          this.play()
        }.bind(this)
      },
      move(offset, direction, speed) {
        if(!this.transitionEnd) return
        this.transitionEnd = false
        direction === -1 ? this.currentIndex += offset / 600 : this.currentIndex -= offset / 600
        if(this.currentIndex > this.sliders.length) this.currentIndex = 1
        if(this.currentIndex < 1) this.currentIndex = this.sliders.length

        const destination = this.distance + offset * direction
        this.animate(destination, direction, speed)
      },
      animate(des, direc, speed) {
        if(this.temp) {
          window.clearInterval(this.temp)
          this.temp = null
        }
        this.temp = window.setInterval(() => {
          if((direc === -1 && des < this.distance) || (direc === 1 && des > this.distance)) {
            this.distance += speed * direc
          } else {
            this.transitionEnd = true
            window.clearInterval(this.temp)
            this.distance = des
            if(des < -3000) this.distance = -600
            if(des > -600) this.distance = -3000
          }
        }, 20)
      },
      jump(index) {
        const direction = index - this.currentIndex >= 0 ? -1 : 1
        const offset = Math.abs(index - this.currentIndex) * 600
        const jumpSpeed = Math.abs(index - this.currentIndex) === 0 ? this.speed : Math.abs(index - this.currentIndex) * this.speed
        this.move(offset, direction, jumpSpeed)
      },
      play() {
        if(this.timer) {
          window.clearInterval(this.timer)
          this.timer = null
        }
        /*this.timer = window.setInterval(() => {
          this.move(600, -1, this.speed)
        }, this.interval)*/
      },
      stop() {
        window.clearInterval(this.timer)
        this.timer = null
      }
    }
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  ol,
  ul {
    list-style: none;
  }
  
  #slider {
    text-align: center;
  }
  
  .window {
    position: relative;
    width: 90%;
    height: 400px;
    margin: 0 auto;
    overflow: hidden;
  }
  .window img{
  	width: 100%;
  }
  .img{
  	height: 100%;
  	box-shadow: 0 0 10px rgba(0,0,0,.3);
  	border-radius: 10px;
  	overflow: hidden;
  }
  .container {
    display: flex; 
    position: absolute;
  }
  
  .left,
  .right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    background-color: rgba(0, 0, 0, .3);
    border-radius: 50%;
    cursor: pointer;
  }
  
  .left {
    left: 3%;
    padding-left: 12px;
    padding-top: 10px;
  }
  
  .right {
    right: 3%;
    padding-right: 12px;
    padding-top: 10px;
  }
  
  img {
    user-select: none;
  }
  
  .dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .dots li {
    display: inline-block;
    width: 15px;
    height: 15px;
    margin: 0 3px;
    border: 1px solid white;
    border-radius: 50%;
    background-color: #333;
    cursor: pointer;
  }
  
  .dots .dotted {
    background-color: orange;
  }
</style>-->
<template>
  <div class="constructionUp">
    <div id="activityDiv">
      <ul num="0" id="activityUl">
        <li class="activityLi" v-for="(v,i) in listData" :key="i" @touchstart.capture="touchStart" @touchend.capture="touchEnd">
          <img src="../../../static/img/wallhaven-ym718x.jpg">
        </li>
      </ul>
      <div class="pointerDiv">
        <span :class="[currantIndex ===0 ? 'active' : '', 'pointer']"></span>
        <span :class="[currantIndex ===1 ? 'active' : '', 'pointer']"></span>
        <span :class="[currantIndex ===2 ? 'active' : '', 'pointer']"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        listData: [{
          lititle: '旧房改造'
        }, {
          lititle: '旧房改造2'
        }, {
          lititle: '旧房改造3'
        }],
        liWidth: 0,
        liNum: 0,
        startX: 0,
        endX: 0,
        currantIndex: 0,
        test: false

      }
    },
    mounted() {
      this.initUlWidth()
    },
    methods: {
      initUlWidth() { // 初始化 ul的宽度
        let pit = document.documentElement.clientWidth / 750 // 当前手机屏幕和750屏幕的比例
        let oldWidth = document.getElementsByClassName('activityLi')[0].offsetWidth // 单个li的宽度
        console.log(oldWidth)
        let marginR = getComputedStyle(document.getElementsByClassName('activityLi')[0], null)['marginRight'] // 获取单个的marginRight,带px
        let marginNum = parseInt(marginR.replace('px', ''))
        this.liWidth = oldWidth // 单个宽度+maringRight
        let liCount = parseInt(document.getElementsByClassName('activityLi').length) // li的个数
        this.liNum = liCount
        let ULpx = oldWidth * liCount + (liCount - 1) * marginNum // 最后一个margin不算
        document.getElementById('activityUl').style.width = ULpx / pit + 'px' // 除以比率，让当前div宽度与2倍设计比例一样，设置ul的长度最后那个margin不算
      },
      touchStart(e) {
        // 记录初始位置
        e.preventDefault() // 阻止默认事件，滚动等
        this.startX = e.touches[0].clientX // 记录滑动开始的位置
      },
      touchEnd(e) {
        e.preventDefault() // 阻止默认事件
        // 记录结束位置
        this.endX = e.changedTouches[0].clientX
        // 左滑
        if(this.startX - this.endX > 30) {
          console.log('左滑')
          if(this.currantIndex >= this.liNum - 1) {
            // 不做操作
          } else {
            this.currantIndex++
              document.getElementById('activityUl').style.left = -this.currantIndex * this.liWidth + 'px'
          }
        }
        // 右滑
        if(this.startX - this.endX < -30) {
          if(this.currantIndex === 0) {
            // 不做操作
          } else {
            this.currantIndex--
              document.getElementById('activityUl').style.left = -this.currantIndex * this.liWidth + 'px'
          }
        }
        this.startX = 0
        this.endX = 0
      }

    }
  }
</script>
<style scoped>
  .constructionUp {
    width: 100%;
  }
  
  .pub-hd {
    padding: 0.8rem 0 0.6rem 0;
    text-align: center;
    background-color: #ffffff;
  }
  
  h2 {
    font-size: 0.32rem;
    color: #606771;
  }
  
  h3 {
    margin-top: 0.26rem;
    font-size: 0.24rem;
    color: #b9bec4;
  }
  
  #activityDiv {
    background-color: #ffffff;
    overflow: hidden;
  }
  
  #activityUl {
    position: relative;
    left: 0;
    transition: all .35s ease-in-out;
    background-color: #ffffff;
  }
  .activityLi {
    float: left;
    width: 100vw;
    box-shadow: 0 5px 25px 0 rgba(0, 0, 0, .4);
  }
  
  &:not(:last-child) {
    margin-right: 0.3rem;
  }
  
  img {
    width: 100%;
  }
  
  .liText {
    padding: 0 0.4rem;
    text-align: left;
  }
  
  .liTtitle {
    padding: 0.48rem 0 0.36rem 0;
    font-size: 0.34rem;
    color: #000000;
  }
  
  .liDes {
    font-size: 0.2rem;
    color: #b5b5b5;
  }
  
  .liPrice {
    height: 0.28rem;
    line-height: 0.28rem;
    color: red; 
    vertical-align: bottom;
    margin-top: 0.8rem;
  }
  
  .title1 {
    display: inline-block;
    font-size: 0.22rem;
  }
  
  .title2 {
    display: inline-block;
    font-size: 0.35rem;
  }
  
  .title3 {
    display: inline-block;
    font-size: 0.22rem;
  }
  
  .pointerDiv {
    width: 100%;
    height: 1.54rem;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .pointer {
    display: inline-block;
    width: 0.16rem;
    height: 0.16rem;
    background-color: #cccccc;
    border-radius: 1rem;
    margin: 0 .2rem;
  }
  
  &:nth-child(2) {
    margin: 0 0.4rem;
  }
  
  .active {
    background-color: red;
    width: .2rem;
    height: .2rem;
  }
</style>