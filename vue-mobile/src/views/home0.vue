<template>
  <div class="home">
    <!--<van-nav-bar title="首页" left-text="返回" left-arrow right-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <van-button type="default" @click.native="over">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info" class="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-button plain type="primary">朴素按钮</van-button>
    <van-button plain type="danger">朴素按钮</van-button>-->
    <div class="top_input">
      <div class="input">
        <img src="../../static/img/搜索.png" />
        <input type="text" v-model="num" @click="over" placeholder="请输入关键字" />
      </div>
    </div>
    <div class="infos" v-for="i in 8">
      <div class="info_left">
        <img src="../../build/logo.png" />
      </div>
      <div class="info_right">
        <span>辅导辅导费</span>
        <span>2019-06-26</span>
      </div>
    </div>

    <div class="keyboard" :class="({'Kshow':keyshow === false})">
      <div class="board_top" @click="over">
        <span>
        	<img src="../../dist/static/down-arror.png" />
        </span>
      </div>
      <div class="num">
        <div v-for="(i,index) in numList" @click="clickKey(index,i)">
          <div :class="({'click':Index === index})">{{i}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Watermark from '@/assets/js/watermark.js'
  import { Toast } from 'vant';
  export default {
    data() {
      return {
        Index: -1,
        keyshow: false,
        numList: [
          '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', 0, '删除'
        ],
        num: '',
        list: [
          '打发打发打发打发', '房贷首付', '大厦', '电费水费电费发送的防盗防的'
        ]
      }
    },
    mounted: function() {
      Watermark.set("版权所有，翻版必究")
    },
    computed: {
      inputmsg() {
        return this.num
      },
      sst() {
        return this.list.sort((a, b) => a.length - b.length)
        //return this.list.sort((a,b)=> a.length-b.length).reverse()
      }

    },
    created() {},
    methods: {
      onClickLeft() {
        Toast('返回');
      },
      onClickRight() {
        Toast('按钮');
      },
      clickKey(index, i) {
        if(index === 11) {
          this.num = this.num.substr(0, this.num.length - 1)
        } else {
          this.num += i
        }
        this.Index = index
        setTimeout(() => {
          this.Index = -1
        }, 100)
      },
      over() {
        this.keyshow = !this.keyshow
      }
    }
  }
</script>

<style scoped>
  .top_input {
    height: 1.5rem;
    display: flex;
    align-items: center;
    width: 100vw;
    position: fixed;
    top: 0;
    background: #354d61;
  }
  
  .input {
    padding-left: .4rem;
    width: 90vw;
    background: #0f2c44;
    margin: 0 auto;
    border-radius: .1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 1rem;
  }
  
  .input>img {
    width: .5rem;
    margin-right: .4rem;
  }
  
  input {
    font-size: .5rem;
    width: 85%;
    border-radius: .1rem;
    outline: 0;
    height: .9rem;
    background: #0f2c44;
    color: #fff;
    border: 0;
  }
  
  input::-ms-input-placeholder {
    color: red;
  }
  
  .home {
    padding-top: 1.5rem;
    min-height: calc(100vh - 1.5rem);
    background: #354d61;
    font-size: .5rem;
    padding-bottom: .01rem;
    animation: home0 1s;
  }
  
  @keyframes home0 {
    from {
      transform: translateY(90deg);
    }
    to {
      transform: translateY(0deg);
    }
  }
  
  .home>>>.van-nav-bar__title {
    color: red;
  }
  
  .info {
    border: 0;
  }
  /**/
  
  .infos {
    height: 2rem;
    width: 95%;
    margin: 0 auto;
    background: #61737f;
    margin-bottom: .1rem;
    border-radius: .1rem;
    display: flex;
    align-items: center;
  }
  
  .info_left {
    text-align: center;
    min-width: 2rem;
  }
  
  .infos img {
    width: 1rem;
  }
  
  .info_left {
    min-height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .info_right {
    display: flex;
    flex-direction: column;
    color: #fff;
  }
  /**/
  
  .keyboard {
    position: fixed;
    bottom: 0;
    width: 100vw;
    transition: all .5s;
    background: #333;
  }
  
  .Kshow {
    transform: translateY(100%);
  }
  
  .board_top {
    font-size: .5rem;
    background: #333;
    color: #409EFF;
    color: #fff;
  }
  
  .board_top img {
    width: 1rem;
  }
  
  .num {
    font-size: .5rem;
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    justify-content: center;
    align-items: center;
  }
  
  .num>div {
    width: calc(100vw / 3);
    height: 1.5rem;
    line-height: 1.5rem;
    background: #333;
    text-align: center;
  }
  
  .num>div>div {
    transition: all .5s;
    background: #333;
    color: #fff;
    width: calc(100vw / 3 - .04rem);
    height: calc(1.5rem - .02rem);
    /*line-height: 1.5rem;*/
    margin: 0 auto;
  }
  
  .click {
    background: #F5F5F5 !important;
  }
</style>