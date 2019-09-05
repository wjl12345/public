<template>
  <div class="all">
    <div class="">
      <input v-model="inputData" class="input1" />
      <button @click="handleCopy(inputData,$event)">复制</button>
      <button @click="Clear(1)">清空</button>

      <input v-model="paste" class="input1" />
      <button @click="Paste()">粘贴</button>
      <button @click="Clear(2)">清空</button>
      <div class="touch" @touchstart='touchStart' @touchend='touchEnd' @mouseout="mouseOut" @click="Leave">
        <div class="scroll" :class="({'colors':colors === true})">
          <span class="left">滑动删除</span>
          <span class="right" @click.stop="">删除</span>
          <span class="right2" @click.stop="Cancel">取消</span>
        </div>
      </div>
      <img :src="img" />
      <button @click="saveImage">保存图片</button>
      <tap></tap>
    </div>
  </div>
</template>
<script>
  import clip from '@/assets/utils/utils'
  import Tap from './tap'
  export default {
  	components:{
  		Tap
  	},
    name: "index",
    data() {
      return {
        inputData: "",
        temp: '',
        paste: '',
        a: 0,
        b: 0,
        colors: false,
        img:'@/../static/logo.png'
      }
    },
    methods: {

      saveImage() {
        if(!window.plus) return;
        plus.gallery.save(this.img, function() {
          plus.nativeUI.alert("保存图片到相册成功");
        }, function() {
          plus.nativeUI.alert("保存失败");
        });
      },

      handleCopy(text, event) {
        clip(text, event)
        console.log(text)
        this.temp = text
        console.log(event)
      },
      Paste() {
        this.paste = this.temp
      },
      Clear(val) {
        if(val === 1) {
          this.inputData = ''
        } else {
          this.paste = ''
        }
      },
      touchStart(e) {
        //console.log(e.changedTouches[0].pageX)
        this.a = e.changedTouches[0].pageX
      },
      touchEnd(e) {
        //console.log(e.changedTouches[0].pageX)
        this.b = e.changedTouches[0].pageX
        console.log(this.a - this.b)
        if(this.a - this.b > 10) {
          this.colors = true
          e.preventDefault()
        }
      },
      mouseOut() {
        console.log(666)
        this.colors = false
      },
      Leave() {
        this.colors = false
      },
      Cancel() {
        this.colors = false
      }
    }
  }
</script>

<style scoped>
  .input1 {
    height: 1rem;
    border: 0;
    font-size: .5rem;
    border-radius: .5rem;
    padding-left: .4rem;
    margin-top: .5rem;
    /*width: calc(100vw - .4rem);*/
  }
  
  button {
    height: .8rem;
    font-size: .4rem;
    border-radius: .1rem;
    color: #fff;
    border: 0;
    background: #409eff;
  }
  
  .all {
    width: 100%;
    font-size:.5rem ;
  }
  
  .touch {
    margin-top: 2rem;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    background: #fff;
    font-size: .5rem;
    overflow: hidden;
  }
  
  .colors {
    transform: translateX(-4rem);
  }
  
  .scroll {
    transition: all .5s;
    position: relative;
  }
  
  .left {
    position: absolute;
    left: 0;
    background: #fff;
    display: inline-block;
    width: 100%;
  }
  
  .right {
    position: absolute;
    z-index: 2;
    right: -2rem;
    width: 2rem;
    text-align: center;
    color: #fff;
    background: red;
  }
  
  .right2 {
    position: absolute;
    z-index: 2;
    right: -4rem;
    width: 2rem;
    text-align: center;
    color: #fff;
    background: #ccc;
  }
</style>