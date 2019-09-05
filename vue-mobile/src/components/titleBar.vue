<template>
  <div class="titleBar">
    <p @click="goBack">
      <img :src="backImg" />
    </p>
    <p>{{title}}</p>
    <p>
      <img :src="moreImg" />
    </p>
  </div>
</template>

<script>
  export default {
    props: {
      back: {
        type: String,
        default: '返回'
      },
      title: {
        type: String,
        default: '标题'
      },
      choose: {
        type: String,
        default: '更多'
      }
    },
    data() {
      return {
        backImg: require('@/assets/images/back.png'),
        moreImg: require('@/../static/more.png')
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .titleBar {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #409EFF;
    color: white;
    height: 1.333333rem;
    line-height: 1.333333rem;
    font-size: .4rem;
  }
  
  p {
    margin: 0 15px;
  }
  
  img {
    width: .5rem;
    vertical-align: middle;
  }
</style>