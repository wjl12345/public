<template>
  <div class="progress">
    <div>进度条</div>
    <div class="line_out">
      <div class="line1" :style="width"></div>
    </div>
    <div class="num">{{i+'/'+list.length}}</div>

    <div class="list_out">
      <div v-for="(i,index) in list" :class="({'color':num === index})" class="list_style" :style="[sty1,sty2]">
        <!--{{i}}-->
        <!--<img src="../../../dist/static/player.png" style="width: 40%;" />-->
        <div class="box">
          {{i}}
          <input type="text" value="" placeholder="账号" autocomplete="off" />
          <input type="password" value="" placeholder="密码" autocomplete="off" />
        </div>
      </div>
    </div>
    <button @click="Pre">上一步</button>
    <button @click="Next">{{next}}</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        next: '下一步',
        num: 0,
        width: {
          width: '20%',
        },
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        i: 1,
        sty1: {
          transform: 'translateX(0vw)'
        },
        sty2: {}
      }
    },
    created() {
      this.width.width = 100 / this.list.length + '%';
    },
    methods: {
      Pre() {
        this.i--
          this.next = '下一步'
        if(this.i <= 1) {
          this.i = 1
        }
        this.num = this.i - 1
        this.sty1.transform = 'translateX(-' + 100 * (this.i - 1) + 'vw)'
        this.width.width = (100 / this.list.length) * this.i + '%'
      },
      Next() {
        this.i++
          if(this.next === '提交') {
            this.i = this.list.length
          } else {
            if(this.i > this.list.length) {
              this.i = 1
            }
            this.sty1.transform = 'translateX(-' + 100 * (this.i - 1) + 'vw)'
            this.num = this.i - 1
            this.width.width = (100 / this.list.length) * this.i + '%'
            if(this.i === this.list.length) {
              this.next = '提交'
            }
          }
      }
    }
  }
</script>

<style scoped>
  .box {
    background: #fff;
    height: 4rem;
    width: 90%;
    margin: 0 auto;
    border-radius: .3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  input {
    color: #007AFF;
    font-size: .4rem;
    margin: .3rem 0;
    width: 80%;
    height: .8rem;
    border-radius: .1rem;
    border: 1px solid #ccc;
    padding-left: .4rem;
    line-height: .5rem;
    outline: none;
  }
  
  .list_out {
    display: flex;
    width: 100vw;
    overflow: hidden;
  }
  
  .list_style {
    /*background: #1989FA;*/
    color: #fff;
    width: 100vw;
    height: 5rem;
    transition: all .8s;
    flex-shrink: 0;
  }
  
  .list_all {
    width: 100vw;
    height: 1rem;
  }
  
  .num {
    text-align: left;
  }
  
  .line_out {
    width: 100vw;
    height: .5rem;
    background: #fff;
    border-radius: .5rem;
    overflow: hidden;
  }
  
  .color {
    color: red;
  }
  
  @keyframes str {
    from {
      transform: translateX(-100vw);
    }
    to {
      transform: translateX(0);
    }
  }
  
  @keyframes str2 {
    from {
      transform: translateX(100vw);
    }
    to {
      transform: translateX(0);
    }
  }
  
  .line1 {
    height: .5rem;
    background: #007AFF;
    transition: all .5s;
    box-shadow: 0 0 .1rem #ccc;
  }
  
  button {
    background: #07C160;
    border: 0;
    color: #fff;
    font-size: .4rem;
    height: 1rem;
    width: 2rem;
    border-radius: .1rem;
  }
</style>