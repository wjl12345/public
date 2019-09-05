<template>
  <div class="animated ">
    <title-bar :title="title" :back="back" :choose="choose"></title-bar>
    <button class="btn" @click="Start">第二页</button><br><br />
    <input type="text" maxlength="10" v-model="num" v-focus /><br> {{num|test}}
    <br />
    <button @click="Test" class="test-btn">测试</button><br> {{sta|status}}
    	 <button @click="VuexTest">vuex</button>
    {{d|date}}
   {{this.$store.state.count}}
    
    <div class="mainframe-banner">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item,index) in list1" :key="index">
          <img :src="item.imgUrl" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="icon-list">
      <span v-for="item in list1">
    		<img :src="item.imgUrl" />
    		<p>{{item.name}}</p>
    	</span>
    </div><br />
    <div class="icon-list">
      <span v-for="item in list2">
    		<img :src="item.imgUrl" />
    		<p>{{item.name}}</p>
    	</span>
    </div>
    <div class="footer">
      <span v-for="item in list2">
    		<img :src="item.imgUrl" />
    		<p>{{item.name}}</p>
    	</span>
    </div>
  </div>
</template>
<script>
	import {mapState} from 'vuex'
  export default {
    data() {
      return {
      	d:'',
        swiperOption: {
          loop: true,
          notNextTick: true,
          mousewheelControl: true,
          autoplayDisableOnInteraction: false,
          observer: true, //修改swiper自己或子元素时，自动初始化swiper
          observeParents: true, //修改swiper的父元素时，自动初始化swiper
          paginationClickable: true,
          autoplay: {
            delay: 3000
          },
          observer: true,
          speed: 300,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },

        choose: '选项',
        title: '首页',
        back: '返回',
        num: '',
        sta: 0,
        list1: [{
            imgUrl: require('@/assets/images/deposit.png'),
            name: '存款'
          },
          {
            imgUrl: require('@/assets/images/deposit.png'),
            name: '存款'
          },
          {
            imgUrl: require('@/assets/images/deposit.png'),
            name: '存款'
          },
          {
            imgUrl: require('@/assets/images/deposit.png'),
            name: '存款'
          }
        ],
        list2: [{
            imgUrl: require('@/assets/images/deposit.png'),
            name: '存款'
          },
          {
            imgUrl: require('@/assets/images/deposit.png'),
            name: '存款'
          },
          {
            imgUrl: require('@/assets/images/deposit.png'),
            name: '存款'
          },
          {
            imgUrl: require('@/assets/images/deposit.png'),
            name: '存款'
          }
        ]
      }
    },
    computed:{
    	...mapState(['count'])
    },
    watch:{
    	count(val){
    		console.log(val)
    	}
    },
    methods: {
      VuexTest() {
      	var num = 1
		this.$store.dispatch('Handle',num)
//		this.$store.commit('Handle',num)
      },
      Start() {
          this.$router.push({
                path:'/demo'
        })
      },
      Test() {
      	console.log(this.count)
        this.sta++
          if(this.sta > 2) {
            this.sta = 0
          }
      }
    },
    created(){
    this.d = new Date();
    }
  }
</script>
<style scoped>
  .swiper-container {
    text-align: center;
    height: 10rem;
    box-shadow: 2px 2px 3px #ccc;
    border-radius: 3px;
    width: 90%;
    border: 2px solid #ccc;
  }
  
  * {
    font-size: 14px;
  }
  
  .footer {
    height: 62px;
    width: 100%;
    border-top: 1px solid #ccc;
    box-shadow: -2px 0px 3px #ccc;
    position: fixed;
    bottom: 0;
  }
  
  .footer>span>img {
    width: 2.5rem;
  }
  
  p {
    margin: 0;
  }
  
  .icon-list,
  .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
  img {
    width: 1rem;
  }
  
  input {
    outline: none;
    width: 99%;
    height: 2rem;
    border-radius: 0.2rem;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px #ccc;
  }
  
  .test-btn {
    height: 4rem;
    width: 4rem;
    border-radius: 2rem;
    background: #D2000F;
    box-shadow: 2px 2px 3px #000;
    border: 0;
    color: white;
  }
  
  .btn {
    cursor: pointer;
    margin-top: 10px;
    width: 100px;
    height: 32px;
    color: #fff;
    background: #409eff;
    border: 0;
    border-radius: 3px;
  }
</style>