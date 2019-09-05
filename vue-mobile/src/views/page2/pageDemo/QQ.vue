<template>
  <div class="qq" ref='qq'>
    <!--logo-->
    <div class="logo">
      <img src="../../../assets/images/img/QQ.png" />
      <span>QQ</span>
    </div>
    <!--input-->
    <div class="input">
      <div>
        <img src="../../../assets/images/img/head.jpg" class="head" />
        <input type="text" placeholder="QQ号/手机号/邮箱" v-model="account" @focus="accFocus" @blur="accBlur"/>
        <img v-show="accClear === true && account !==''" src="../../../assets/images/img/clear.png" class="clear acc_clear" @click.stop="accClears" />
        <img src="../../../assets/images/img/triangle.png" class="triangle" />
      </div>
      <div>
        <img src="../../../assets/images/img/hide.png" @click.stop="showEye" class="hide" v-show="eye === false " />
        <img  src="../../../assets/images/img/show.png" @click.stop="showEye" class="hide" v-show="eye === true " />
        <input type="text" placeholder="输入密码" v-model="psd" @focus="Focus" @blur="Blur"/>
        <img v-show="psdClear === true && psd !==''" src="../../../assets/images/img/clear.png" class="clear clear_icon" @click.stop="Clear" />
        <img src="../../../assets/images/img/rgba.png" class="clear" />
      </div>
    </div>
    <!--login-->
    <div class="login" @click="Log">
    	<img src="../../../assets/images/img/arrow.png" class="btn"/>
    	<!--<img src="../../../assets/images/img/btn2.gif" class="btn2"/>-->
    </div>
  </div>
</template>

<script>
  import html2canvas from 'html2canvas'
  export default {
    data() {
      return {
      	psdClear:false,
      	eye:false,
      	account:'',
      	psd:'',
      	accClear:false
      }
    },
    mounted(){
    	
    },
    methods: {
    	Log() {
        var this1 = this;
          html2canvas(this1.$refs.qq, {
            backgroundColor: '#fff'
          }).then((canvas) => {
            let dataURL = canvas.toDataURL("image/png");
            this1.downImg = dataURL;
            console.log(dataURL)
          });
      },
      Focus() {
      	this.psdClear = true
      },
      Blur(){
      	this.psdClear = false
      },
      accFocus() {
      	this.accClear = true
      },
      accBlur(){
      	this.accClear = false
      },
      Clear(){
      	this.psd = ''
      },
      accClears(){
      	this.account = ''
      },
      showEye(){
      	this.eye = !this.eye
      }
    },

  }
</script>

<style scoped>
  .qq {
    /*padding-top: 1rem;*/
    background: #fff;
    height: 100vh;
    overflow: hidden;
    padding-bottom: .01rem;
  }
  
  .logo {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  }
  
  .logo img {
    width: 1rem;
  }
  
  .input {
    padding-top: .5rem;
  }
  
  .input div {
    width: 90%;
    height: 1rem;
    background: #F2F3F7;
    margin: 0 auto;
    border-radius: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: .2rem;
    position: relative;
  }
  
  .input div input {
    border: 0;
    background: #F2F3F7;
    text-align: center;
    font-size: .4rem;
    outline: none;
  }
  
  input::-webkit-input-placeholder {
    color: #CCCCCC;
  }
  
  .head {
    width: .8rem;
    border-radius: 100%;
  }
  
  .triangle {
    width: .6rem;
  }
  
  .hide {
    width: .5rem;
  }
  
  .clear {
    width: .3rem;
  }
  .clear_icon{
  	position: absolute;
  	right: .6rem;
  }
  .acc_clear{
  	position: absolute;
  	right: 1.5rem;
  }
  .login{
  	height: 1.5rem;
  	width: 1.5rem;
  	border-radius:1rem;
  	margin: 0 auto;
  	/*border: 1px solid red;*/
  	position: relative;
  	overflow: hidden;
  	background: -webkit-linear-gradient(left,#007AFF,#0000FF);
  }
  .btn{
  	position: absolute;
  	top: 50%;
  	left: 50%;
  	transform: translate(-50%,-50%);
  	height: 50%;
  	z-index: 2;
  }
  .btn2{
  	position: absolute;
  	top: 50%;
  	left: 50%;
  	transform: translate(-50%,-50%);
  	height: 100%;
  }
</style>