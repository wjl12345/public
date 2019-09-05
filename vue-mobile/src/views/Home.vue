<template>
  <div class="first-page">
    <title-bar :title="title" :choose="choose" class="title-bar"></title-bar>
    <button type="primary" @click="Show">mock</button><br/>
    <button @click="Show2">hello</button><br/>
    <button class="btn" @click="Less">less</button>
    <button @click="OpenLogin">登录</button>
    <button @click="Logout">退出登录</button>
    <list title="弹性布局" @gotoNext="gotoFlex"></list>
    <list title="项目首页"></list>
    <list title="音频" @gotoNext="Audio"></list>
    <list title="滑动" @gotoNext="Touch"></list>
    <list title="标题" @gotoNext="Demo"></list>

    <div class="login_modal" :class="({'show':modal})" >
      <div class="input_box">
        <div>
          <div class="title">账号</div>
          <div>
            <input type="text" class="username" placeholder="账号" />
          </div>
        </div>
        <div>
          <div class="title">密码</div>
          <div>
            <input type="password" class="password" placeholder="密码" />
          </div>
        </div>
        <button @click="confirm">登录</button>
      </div>

      <div class="bottom_btn" @click="CloseLogin">
        关闭登录窗口
      </div>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'vant';
  import axios from 'axios'
  import { MP } from '@/assets/js//map.js'
  export default {
    data() {
      return {
        isShow: true,
        num: '',
        title: '列表',
        choose: '更多',
        show: false,
        username: 'weijunlong',
        password: '123456',
        Data: {},
        modal: false
      }
    },
    created(){
    	if(sessionStorage.getItem('Status') === '200'){
    		this.modal= true
    	}
    },
    methods: {
    	Demo(){
    		this.$router.push({
          path: '/Animate'
        })
    	},
      Touch() {
        this.$router.push({
          path: '/touch'
        })
      },
      CloseLogin() {
        this.isShow = false
        this.modal = true
      },
      OpenLogin() {
        this.modal = false
      },
      //退出
      Logout() {
        //sessionStorage.clear()//清除所有sessionStorage
        Toast.success('退出登录成功');
        sessionStorage.removeItem('Status'); //清楚对应的sessionStorage
      },
      //登录
      confirm() {
        if(sessionStorage.getItem('Status') === '200') {
          Toast.fail('你已成功登录，无需再进行登录');
        } else {
          Toast.loading({
            duration: 0, // 持续展示 toast
            forbidClick: true, // 禁用背景点击
            loadingType: 'spinner',
            message: '正在登录...'
          });
          this.flag = false
          var params = {
            username: this.username,
            password: this.password,
          }
          axios.post('/local/login.do', params).then(res => {
            this.Data = res.data.data
            sessionStorage.setItem('Status', this.Data.status)
            console.log(this.Data.msg)
            if(this.Data.status == 200) {
              Toast.clear();
              Toast.success('登录成功');
              setTimeout(() => {
                this.$router.push({
                  path: '/home'
                })
              }, 1000)
              this.modal= true
            } else {
              Toast.clear();
              Toast.fail('登录失败');
            }
          })
        }
      },
      addressDetail() {
        this.show = true
      },
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
      },
      Audio() {
        console.log(6666)
        this.$router.push({
          path: '/audio2'
        })
      }

    }
  }
</script>

<style scoped>
  .input_box {
    width: 90%;
    margin: 0 auto;
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .input_box>div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: .8rem;
  }
  
  .title {
    margin-right: .2rem;
  }
  
  .username,
  .password {
    border: 1px solid #ccc;
    height: 1rem;
    line-height: 1rem;
    width: 80%;
    border-radius: .1rem;
  }
  
  .bottom_btn {
    position: absolute;
    top: 0;
    height: 1.33333rem;
    color: #409eff;
    font-size: .5rem;
    line-height: 1.33333rem;
    width: 100%;
  }
  
  .login_modal {
    font-size: .5rem;
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
    background: #fff;
    transition: all .5s;
  }
  
  .show {
    transform: translateX(-100%);
  }
  
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