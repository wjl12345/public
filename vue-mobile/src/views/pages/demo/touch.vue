<template>
  <div class="touch" @touchmove="touchMove">
    <div class="notice">点击下方进度条</div>
    <div class="out" @touchstart="touchStart" @touchend="touchEnd">
      <div class="line" :style="Width" v-if="Width.width"></div>
    </div>
    <div class="ou" v-if="false">
      <div class="an" :style="">
        <div class="in"></div>
      </div>
    </div>
    <div class="container">
      <div class="s1">1</div>
      <div class="s2">2</div>
      <div class="s3">3</div>
      <div class="s4">4</div>
      <div class="s5">5</div>
      <div class="s6">6</div>
    </div>
    <div class="boss" :style="style">
      {{name}}
    </div>
    <button @click="Ceshi">测试</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: '韦君龙韦君龙韦君龙',
        style: {
          'font-size': '12px'
        },
        Width: {
          background: '#409eff',
          width: '0',
          height: '0.5rem',
          'border-radius': '.5rem',
          transition: 'all .5s'
        },
        width: 1,
        startX: 0,
        endX: 0,

      }
    },
    computed: {
      str() {
        return this.startX
      }
    },
    created() {
      this.style.fontSize = (4 / this.name.length) + 'rem'
    },
    methods: {
    	
      touchMove(e) {
        //console.log('touchMove')
        //console.log(e.changedTouches[0].clientX)
        //this.Width.width = (e.changedTouches[0].clientX+1 - e.changedTouches[0].clientX) + 'rem';
        //this.width++
        //this.Width.width = this.width + '%'
        //      if(this.width >= 100) {
        //        this.width--
        //      }
        //this.endX = e.changedTouches[0].pageX
        var s = (this.endX - this.str) / 10
        //this.Width.width = 1 + s +'%'

        //console.log(this.str)
        //console.log(this.endX)
        //console.log(s)
        //console.log(e.changedTouches[0].screenX)
      },
      touchStart(e) {
        this.startX = e.targetTouches[0].pageX
        //console.log(this.startX*0.9)
        //console.log(e.changedTouches[0].clientX)
        //console.log(e.changedTouches[0].screenX)
        //console.log(window.screen.width*0.9)
        if(this.startX * 0.9 <= (window.screen.width * 0.9)) {
          var s1 = this.startX - window.screen.width * 0.05
          var s2 = window.screen.width * 0.9
          this.Width.width = s1 / s2 * 100 + "%"
          //console.log(this.startX)
          console.log(s1)
          console.log(s2)
          console.log(this.Width.width)
        }
      },
      touchEnd(e) {
        this.endX = e.changedTouches[0].clientX
        var diff = this.endX - this.startX

      }
    }
  }
</script>

<style scoped>
  .boss {
    width: 4rem;
    height: auto;
    background: red;
    color: #fff;
  }
  
  .s1 {
    background: red;
  }
  
  .s2 {
    background: blue;
  }
  
  .s3 {
    background: green;
  }
  
  .s4 {
    background: pink;
  }
  
  .s5 {
    background: purple;
  }
  
  .s6 {
    background: orange;
  }
  
  .container {
    background: #fff;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-template-rows: repeat(2, 100px);
    color: #fff;
    font-size: .5rem;
  }
  
  .box {
    width: 5rem;
    height: 5rem;
    border: 1px solid red;
    position: relative;
  }
  
  .box>img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
  }
  
  .ou {
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
    border: 1px solid red;
    position: relative;
  }
  
  .in {
    width: 100%;
    height: .1rem;
    background: red;
    transform: translateX(1rem);
  }
  
  .an {
    display: flex;
    align-items: center;
    position: absolute;
    top: 1rem;
    left: calc(50% - 1rem);
    /*border-radius: 2rem;*/
    width: 2rem;
    height: 2rem;
    background: #F5F5F5;
    /*box-shadow: 0 0 .2rem #ccc;*/
    /*动画名称*/
    animation-name: my;
    /*动画执行的时间*/
    animation-duration: 10000s;
    /*速度曲线：linear，ease，ease-in，ease-out，ease-in-out，cubic-bezier(n,n,n,n),n从0-1*/
    animation-timing-function: linear;
    /*动画开始的时间*/
    animation-delay: 0s;
    /*播放次数：默认为1，infinite为无限次*/
    animation-iteration-count: 1;
    /*是否在下一周期逆向播放：normal为否*/
    animation-direction: alternate;
    /*是否正在运行*/
    animation-play-state: running;
  }
  
  @keyframes my {
    from {
      transform: rotateZ(-360000deg);
    }
    to {
      transform: rotateZ(0deg);
    }
  }
  /*  @keyframes my {
    0% {
      top: 2rem;
    }
    16% {
      top: 3rem;
    }
    32% {
      top: 4rem;
    }
    48% {
      top: 5rem;
    }
    64% {
      top:6rem;
    }
    80% {
      top: 7rem;
    }
    100% {
      top: 8rem;
    }
  }*/
  
  .notice {
    font-size: .5rem;
  }
  
  .out {
    width: 90%;
    height: 0.5rem;
    background: #fff;
    margin: 0 auto;
    box-shadow: 0 0 .1rem #ccc;
    border-radius: .5rem;
  }
  
  .touch {
    height: 100vh;
    /*background: #409EFF;*/
  }
</style>