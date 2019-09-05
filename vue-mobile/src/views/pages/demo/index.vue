<template>
  <div class="animated all">
    <title-bar :title="title" class="title"></title-bar>
    <!--{{this.$store.state.count}}-->
    1.限制宽度
    <div class="van-ellipsis">这是一段宽度限制 250px 的文字，后面的内容会省略</div><br /> 2.分割线（上下左右全）
    <div class="van-hairline--top"></div>
    <div class="van-hairline--bottom"></div>
    <div class="van-hairline--left"></div>
    <div class="van-hairline--right"></div>
    <div class="van-hairline--surround"></div><br/> 
    3.动画
    <transition name="van-fade">
      <div v-show="visible">Fade</div>
    </transition><br/>
    4.按钮 <br />
    <van-button type="default">默认按钮</van-button><br/>
    <van-button type="primary">主要按钮</van-button><br/>
    <van-button type="info" class="info-btn">信息按钮</van-button><br/>
    <van-button type="warning">警告按钮</van-button><br/>
    <van-button type="danger">危险按钮</van-button><br/>
    4.1朴素按钮<br/>
    <van-button plain type="primary">朴素按钮</van-button><br/>
    <van-button plain type="danger">朴素按钮</van-button><br/>
    4.2禁用<br/>
    <van-button disabled type="primary">禁用状态</van-button><br/>
	<van-button disabled type="danger">禁用状态</van-button><br/>
    4.3加载<br/>
    <van-button loading type="primary" /><br/>
	<van-button loading type="danger" loading-text="加载中..." /><br/>
	4.4形状<br/>
	<van-button square type="primary">方形按钮</van-button><br/>
	<van-button round type="danger">圆形按钮</van-button><br/>
	4.5尺寸<br/>
	<van-button size="large">大号按钮</van-button><br/>
	<van-button size="normal">普通按钮</van-button><br/>
	<van-button size="small">小型按钮</van-button><br/>
	<van-button size="mini">迷你按钮</van-button><br/><br/>
    5.Cell单元格
    <van-cell-group>
  		<van-cell title="单元格" value="内容" />
  		<van-cell title="单元格" value="内容" label="描述信息" />
	</van-cell-group><br />
	6.图标<br />
	<van-icon name="close" /><br />
	<van-icon name="location-o" /><br />
	7.微标<br/>
	<van-icon name="chat" info="9" /><br />
	<van-icon name="chat" info="99+" /><br />
	8.layout布局<br />
	<van-row class="row">
		<van-col span="8">span: 8</van-col>
	 	<van-col span="8">span: 8</van-col>
	 	<van-col span="8">span: 8</van-col>
	</van-row>

	<van-row class="row3">
	  <van-col span="4">span: 4</van-col>
	  <van-col span="10" offset="4">offset: 4, span: 10</van-col>
	</van-row>

	<van-row class="row2">
	  <van-col offset="12" span="12">offset: 12, span: 12</van-col>
	</van-row>
	列元素间距<br />
	<van-row  class="row1">
  		<van-col span="8">span: 8</van-col>
  		<van-col span="8">span: 8</van-col>
  		<van-col span="8">span: 8</van-col>
	</van-row>
	9.弹性布局
	<!-- 左对齐 -->
<van-row type="flex" class="flex1">
  <van-col span="6">左对齐</van-col>
  <van-col span="6">span: 6</van-col>
  <van-col span="6">span: 6</van-col>
</van-row>

<!-- 居中 -->
<van-row type="flex" justify="center" class="flex2">
  <van-col span="6">局中</van-col>
  <van-col span="6">span: 6</van-col>
  <van-col span="6">span: 6</van-col>
</van-row>

<!-- 右对齐 -->
<van-row type="flex" justify="end" class="flex3">
  <van-col span="6"右对齐</van-col>
  <van-col span="6">span: 6</van-col>
  <van-col span="6">span: 6</van-col>
</van-row>

<!-- 两端对齐 -->
<van-row type="flex" justify="space-between" class="flex4">
  <van-col span="6">两端对齐</van-col>
  <van-col span="6">span: 6</van-col>
  <van-col span="6">span: 6</van-col>
</van-row>

<!-- 每个元素的两侧间隔相等 -->
<van-row type="flex" justify="space-around" class="flex5">
  <van-col span="6">平分对齐</van-col>
  <van-col span="6">span: 6</van-col>
  <van-col span="6">span: 6</van-col>
</van-row>
10.弹出层<br />
    <van-button type="primary" @click="Show">主要按钮</van-button><br/>
	<van-popup v-model="show">内容</van-popup>
	<van-popup v-model="show" position="top" :overlay="false">内容2</van-popup>
	<van-popup v-model="show" position="bottom" :overlay="false">内容3</van-popup>
  11.数字键盘
  <van-number-keyboard
  extra-key="."
   :show="show2"
  close-button-text="完成"
  @input="onInput"
   @blur="show2 = false"
  @delete="onDelete"
/><br />
<span @click="showNumkey">12.滑块</span>
<van-slider v-model="value" @change="onChange" :step="1"  bar-height="20px"
  active-color="#409eff">
	<div class="value">{{value}}</div>
</van-slider>





  </div>
  
</template>

<script>
  export default {
    data() {
      return {
        title: '第二页',
        visible: true,
        show:false,
        show2:false,
        str:'',
        value: 50,
      }
    },
    methods:{
    	//
    	showNumkey(){
    		this.show2 =true
    	},
    onChange(value) {
      this.$toast('当前值：' + value);
    },
	onInput(value){
		this.str+=value
		if(this.str.length >6){
			this.str = this.str.slice(6)
		}
		console.log(Number(this.str))
	},
	onDelete(value){
		console.log(this.str)
	},
	Show(){
		this.show = true
	}
    },
    created(){
      	/*setInterval(()=>{
    		this.value++
    		if(this.value >= 101){
    			this.value = 0
    		}
    		console.log(this.value)
    	},100)*/
  }
  }
</script>

<style scoped>
	.info-btn{
		border: 1px solid #DDDDDD;
	}
	.value{
		width: 100%;
		height: 3rem;
	}
	.all>>>.van-slider__bar{
		box-shadow: 2px 2px 3px #ccc;
		 background: linear-gradient(to right,#B6DAFF, #409eff) !important; /* 标准的语法 */
	}
	.all>>>.van-slider__button-wrapper::after,
	.all>>>.van-slider__button{
		display: none;
	}
	.custom-button{
		text-align: left;
	}
	.van-ellipsis{
		margin-top: 3rem;
	}
	.title{
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 10;
	}
	.flex1{
		background: red;
	}
	.flex2{
		background: green;
	}
	.flex3{
		background: #0000FF;
	}
	.flex4{
		background: #CCCCCC;
	}
	.flex5{
		background: #2C3E50;
	}
	.flex1,
	.flex2,
	.flex3,
	.flex4,
	.flex5{
		color: white;
	}
	.row,
	.row1,
	.row2,
	.row3{
		color: white;
	}
  .row1{
	background: red;
  }
  .row{
	background: red;
  }
  .row2{
	background: yellow;
  }
  .row3{
	background: blue;
  }
  .all {
    text-align: left;
  }
  
  .swipers {
    height: 20rem;
    width: 100%;
  }
  
  .mt-swiper {
    background: red;
    box-shadow: 2px 2px 3px #ccc;
  }
</style>