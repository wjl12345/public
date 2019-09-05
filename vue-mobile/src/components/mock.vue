<template>
  <div class="all">
    <button @click="go">返回</button>
    <ul @click="getdata">
      <li v-for="(item,index) in list" :class="{move:candelete.id ===item.id}" @touchstart="touchStart(item)" @touchend="touchEnd(item)">
        {{item.text}} {{item.id}}
        <div class="del" @click="Delete(index)">删除</div>
      </li>
    </ul>
    <div v-for="(item,index) in dataShow" :key="index" v-show="flag" class="list">
      <p>{{item.name}}</p>
      <p>{{item.age}}</p>
      <p>{{item.dept}}</p>
      <p>{{item.position}}</p>
    </div>
    <div class="group-container" v-infinite-scroll="getActiveByAxios" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    </div>
    <div tip="正在加载" v-if="showLoading"></div>
    <!--删除确认提示-->
    <transition name="fade">
      <div class="notice" v-show="isShow">
        <div class="notice-msg">
          <p>是否确认删除？</p>
          <p>
            <button class="cancel-btn" @click="Cancel">取消</button>
            <button @click="Confirm">确认</button>
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import Vue from 'vue'
  import api from './../axios/api.js'
  import axios from 'axios'
  import { Toast } from 'vant';
  import infiniteScroll from 'vue-infinite-scroll'
  Vue.use(infiniteScroll)
  export default {
    name: 'Mock',
    data() {
      return {
        flag: false,
        index: '',
        isShow: false,
        candelete: {},
        dataShow: [],
        dataShow2: [],
        sta1: 'wei',
        sta2: 'jl',
        list: [{
          text: '请左滑删除',
          id: 1,
        }, {
          text: '请左滑删除',
          id: 2,
        }, {
          text: '请左滑删除',
          id: 3,
        }, {
          text: '请左滑删除',
          id: 4,
        }, {
          text: '请左滑删除',
          id: 5,
        }],
        showLoading: true,
        busy: false,
        pageInfo: {
          count: 0,
          pageIndex: 1,
          pageSize: 5
        },
        clientNum: {}
      }
    },
    created() {
      this.getdata()
      //
      var str = '韦君龙韦';
      console.log(str.length)
      console.log(str.charAt(0))
      console.log(String.fromCharCode(65))
      console.log(str.concat('1','2'))
      console.log(str.indexOf(''))
    },
    methods: {
      getActiveByAxios() {
        const that = this
        if((that.pageInfo.pageIndex - 1) * that.pageInfo.pageSize > that.pageInfo.count) {
          that.busy = false;
          that.showLoading = false;
          return;
        }
        var params = {
          pageSize: that.pageInfo.pageSize,
          pageNum: that.pageInfo.pageIndex
        }
        axios.post('/local/acccountManage.do', params).then(res => {
          this.dataShow2 = res.data.DataList;
          this.flag = true
          Toast.clear();
        })
      },
      Confirm() {
        console.log(666)
        this.isShow = false
        this.list.splice(this.index, 1)
      },
      Cancel() {
        this.isShow = false
      },
      Delete(index) {
        this.isShow = true
        this.index = index

      },
      touchStart(item) {
        //
        let touchs = event.changedTouches[0];
        this.clientNum.x1 = touchs.pageX;
        this.candelete = {}
      },
      touchEnd(item) {
        let touchs = event.changedTouches[0]
        this.clientNum.x2 = touchs.pageX;
        this.candelete = {}
        if(this.clientNum.x2 < this.clientNum.x1 &&
          Math.abs(this.clientNum.x1) - Math.abs(this.clientNum.x2) > 10) {
          this.candelete = item;
          event.preventDefault();
        } else if(this.clientNum.x2 > this.clientNum.x1 &&
          Math.abs(this.clientNum.x2) - Math.abs(this.clientNum.x1) > 1) {
          this.candelete = {}
          event.preventDefault();
        }
      },
      Show() {
        this.sta1 += "123"
      },
      go() {
        this.$router.go(-1)
      },
      getdata() {
        Toast.loading({
          duration: 0, // 持续展示 toast
          forbidClick: true, // 禁用背景点击
          loadingType: 'spinner',
          message: '加载中...'
        });
        this.flag = false
        var params = {

        }
        axios.post('/local/acccountManage.do', params).then(res => {
          this.dataShow = res.data.DataList;
          this.flag = true
          Toast.clear();
        })
      }
    },
    computed: {
      sta() {
        return this.sta1 + this.sta2
      }
    },
    watch: {
      sta1(news, old) {}
    }

  }
</script>
<style scoped>
  .list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 2rem;
    background: #fff;
    margin-bottom: .1rem;
  }
  
  .loading {
    text-align: center;
  }
  
  .loading>>>div {
    margin: 0 auto;
    margin-top: 2rem;
  }
  
  .all {
    font-size: .5rem;
  }
  /*出场过程用时，和最后的位置(一般都写)*/
  
  .fade-leave-active {
    transition: all .5s;
    transform: translateY(-350px);
  }
  /*进场过程用时，和最后的位置(默认可不写)*/
  
  .fade-enter-active {
    transition: all 1s;
    transform: translateY(0);
  }
  /*进/出场开始状态，出场开始状态不影响开始出场的位置*/
  
  .fade-enter,
  .fade-leave {
    transform: translateY(-350px);
  }
  /*	.fade-leave-active{
		transition: all .5s; 
		transform: rotateX(90deg);
	}
	.fade-leave{
		transform: rotateX(0);
	}
	.fade-enter-active{
		transition: all .5s; 
		transform: rotateX(0);
	}
	.fade-enter{
		transform: rotateX(90deg);
	}*/
  /*.fade-leave-active,.fade-enter-active{
		transition: opacity 1s; 
		
	}
	.fade-leave,.fade-enter{
		opacity: 0;
	}
	*/
  
  .cancel-btn {
    background: #ccc !important;
  }
  
  .notice {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
  }
  
  .notice-msg {
    height: 100px;
    width: 300px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 3px;
    margin: 0 auto;
    margin-top: 250px;
  }
  
  .notice-msg>p {
    margin: 0;
    height: 50px;
    line-height: 50px;
  }
  
  .notice-msg>p>button {
    height: 30px;
    line-height: 30px;
    border: 0;
    color: #fff;
    background: #409EFF;
    margin: 0 10px;
    border-radius: 3px;
  }
  
  li {
    background: #fff;
    border-bottom: 1px solid #F5F5F5;
    height: 40px;
    line-height: 40px;
    position: relative;
    transform: translateX(0px);
    transition: all .5s;
  }
  
  ul {
    overflow: hidden;
  }
  
  .move {
    transform: translateX(-60px);
  }
  
  .del {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 3;
    width: 60px;
    height: 100%;
    text-align: center;
    color: #FFF;
    background: red;
    transform: translateX(60px);
  }
  
  .bgd {
    margin-top: 10px;
    width: 100%;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background: #fd6d4b;
  }
  
  .str {
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
    font-size: 3rem;
    color: #fff;
    background: #fff;
    border: 0;
    border-radius: 1.5rem;
    box-shadow: 1px 1px 10px #000;
    text-shadow: 1px 1px 5px #000;
  }
  
  .str:active {
    background: #f1f1f1;
  }
  
  .table-list {
    margin: 0 auto;
    text-align: center;
    text-shadow: 2px 2px 3px #ccc;
    font-size: 20px;
  }
  
  td {
    border: 1px solid #ccc;
  }
</style>