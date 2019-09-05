<template>
  <div>
    <div class="picture">
      <li v-for="(i,index) in imgList" @click="showImg(i,index)">
        <img :src="i.url" />
      </li>
    </div>
    <!--<div class="mo" v-show="str !== ''" @click="close" :class="({'mo2':str !== ''})">
		<img :src="str" />
		<span style="color: #fff;">{{num+'/'+imgList.length}}</span>
	</div>-->
    <div class="img_div" v-show="flag" @click.stop="close">
      <div v-for="(item,index) in imgList" class="list" @touchstart="touchStart(index)" @touchend="touchEnd(index)">

        <img :src="item.url" :style="sty" />
        <span class="count">{{i}}/{{imgList.length}}</span>
      </div>
    </div>
  </div>
</template>

<script>
	import { Toast } from 'vant';
  export default {
    data() {
      return {
        imgList: [{
            url: require('../../../static/img/wallhaven-zmmwzw.jpg')
          },
          {
            url: require('../../../static/bgd.gif')
          },
          {
            url: require('../../../static/four.gif')
          },
          {
            url: require('../../../static/img/wallhaven-lmqrrl.jpg')
          },
          {
            url: require('../../../static/img/wallhaven-q66xj7.jpg')
          },
          {
            url: require('../../../static/img/wallhaven-ym718x.jpg')
          },
          {
            url: require('../../../static/img/1.gif')
          },
          {
            url: require('../../../static/img/2.gif')
          },
          {
            url: require('../../../static/img/3.gif')
          },
          {
            url: require('../../../static/img/4.gif')
          },
        ],
        str: '',
        num: '',
        i: 1,
        clientNum: {},
        flag: false,
        sty: {
          transform: 'translateX(0)'
        },
      }
    },
    methods: {
      showImg(i, index) {
        this.flag = true
        //this.num = index + 1
        this.i = index+1
        this.sty.transform = 'translateX(-' + 100 * (this.i - 1) + 'vw)'
      },
      close() {
        this.flag = false
      },
      touchStart(index) {
        let touchs = event.changedTouches[0];
        this.clientNum.x1 = touchs.pageX;
      },
      touchEnd(index) {
        let touchs = event.changedTouches[0]
        this.clientNum.x2 = touchs.pageX;
        this.candelete = index

        if(this.clientNum.x2 > this.clientNum.x1 &&
          this.clientNum.x2 - this.clientNum.x1 > 10) { //you
          if(index > 0) {
            this.sty.transform = 'translateX(-' + 100 * (index - 1) + 'vw)'
            this.i = index
          }
          if(index === 0){
          	Toast('现在已经是第一张');
          }
        } else if(this.clientNum.x2 < this.clientNum.x1 &&
          Math.abs(this.clientNum.x2 - this.clientNum.x1) > 10 
        ) { //zuo
        	if(index !== this.imgList.length-1){
        		this.sty.transform = 'translateX(-' + 100 * (index + 1) + 'vw)'
          this.i = index + 2
        	}
          console.log(this.i)
          if(index === this.imgList.length -1){
          	Toast('现在已经是最后一张');
          }
        }
      },
    }
  }
</script>

<style scoped>
  .picture {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  li {
    list-style: none;
  }
  
  li>img {
    width: 3rem;
  }
  
  .mo {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #000;
  }
  
  .mo {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .mo>img {
    width: 100vw;
    margin-bottom: 1rem;
  }
  
  .mo2 {
    animation: am 1s;
  }
  
  @keyframes am {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .list {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
  }
  
  .count {
    display: inline-block;
    width: 100vw;
    text-align: center;
    position: absolute;
    bottom: 0rem;
    color: #fff;
  }
  
  .list>img {
    transition: all .5s;
    width: 100vw;
    box-shadow: 0 0 5px rgba(30, 166, 240, .5);
  }
  
  .img_div {
    background: #000;
    overflow: hidden;
    display: flex;
    position: fixed;
    top: 0;
    width: ;
  }
  
  .img_div::-webkit-scrollbar {
    display: none;
  }
</style>