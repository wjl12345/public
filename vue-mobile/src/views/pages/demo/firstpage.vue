<template>
  <div class="first-page">
    <title-bar :title="title" :choose="choose" class="title-bar"></title-bar>
    <button type="primary" @click="Show">mock</button><br/>
    <button @click="Show2">hello</button><br/>
    <button @click="showRecords">客户访问记录</button><br/>
    <button class="btn" @click="Less">less</button>
    <div class="input-div">
      <input class="input" type="text" v-model="num" placeholder="请输入像素值" />
    </div>
    {{num/37.5}}rem
    <button @click="addressDetail">定位</button>
    <list title="弹性布局" @gotoNext="gotoFlex"></list>
    <list title="标题"></list>
    <list title="标题"></list>
    <list title="标题"></list>
    <list title="标题"></list>
  </div>
</template>

<script>
  import { MP } from '@/assets/js//map.js'
  export default {
    data() {
      return {
        num: '',
        title: '列表',
        choose: '更多'
      }
    },
    methods: {
      addressDetail() {},
      Show() {
        this.$router.push({
          path: '/mock'
        })
      },
      Show2() {
        this.$router.push({
          path: '/hello'
        })
      },
      showRecords() {
        this.$router.push({
          path: '/records'
        })

      },
      Less() {
        this.$router.push({
          path: '/stylecomponent'
        })
      },
      gotoFlex() {
        this.$router.push({
          path: '/flex'
        })
      }

    }
  }
</script>

<style scoped>
  .input-div {
    width: 100%;
  }
  
  .input-div>input {
    width: 90%;
  }
  
  button {
    margin: .1rem 0;
    width: 9.2rem;
    height: 1.333333rem;
    font-size: .373333rem;
    background: #409EFF;
    border: 0;
    border-radius: .08rem;
    color: #fff;
  }
  
  .title-bar {
    position: fixed;
    top: 0;
  }
  
  .first-page {
    padding-top: 1.333333rem;
    background: #fff;
    font-size: .373333rem;
  }
</style>