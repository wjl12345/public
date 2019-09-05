<template>
  <div class="scroll" >
  	<div class="date">
  		<img class="ss_icon" src="../../assets/images/ss.png" />
    	<input type="text"  @click="showYear"/>
    	<button class="btn_scroll">确定</button>
    </div>
    <div class='list' v-for="(i,index) in 5" 
    	:class="({'candelete':index === candelete})" 
    	@touchstart.stop="touchStart(index)" 
    	@touchend.stop="touchEnd(index)">
    	<!--内容-->
    	<div class="info">
    		内容
    	</div>
    	<!--选项-->
    	<div class="menu" >
    		<span @click.stop="deletes(index)">删除</span>
    		<span>编辑</span>
    	</div>
    </div>
    
    
    <div class="year_list" :class="({'year_list2':flag})">
    	<div v-for="i in yearList">
    		{{i}}
    	</div>
    </div>
    
    <!--弹窗-->
    <div class="modal" v-show="flag2">
    	12
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        candelete: '',
        clientNum:{},
        yearList:[
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
        ],
        flag:false,
        flag2:false,
      }
    },
    created(){
      window.scrollTo(0,0)
    },
    methods: {
    	showYear(){
    		this.flag = !this.flag
    	},
    	deletes(index){
        this.candelete = index;
        this.flag2 = !this.flag2;
    	},
      touchStart(index) {
        let touchs = event.changedTouches[0];
        this.clientNum.x1 = touchs.pageX;
      },
      touchEnd(index) {
        let touchs = event.changedTouches[0]
        this.clientNum.x2 = touchs.pageX;
        if(this.candelete === index){
        	this.candelete = index
        	if(this.clientNum.x2 > this.clientNum.x1 &&
        	  Math.abs(this.clientNum.x2) - Math.abs(this.clientNum.x1) > 10) {
        	  	this.candelete = -1
        	  }
        }else{
        	if(this.clientNum.x2 < this.clientNum.x1 &&
        	  Math.abs(this.clientNum.x1) - Math.abs(this.clientNum.x2) > 10) {
        	  this.candelete = index;
        	  console.log(this.candelete)
        	  //event.preventDefault();//清除默认事件
        	} else if(this.clientNum.x2 > this.clientNum.x1 &&
        	  Math.abs(this.clientNum.x2) - Math.abs(this.clientNum.x1) > 10) {
        	  //this.candelete = {}
        	  //event.preventDefault();
        	}
        }
      },
    }
  }
</script>

<style scoped>
	.modal{
	  position: fixed;
	  left: 50%;
	  top: 50%;
	  transform: translate(-50%,-50%) ;
	  background: red;
	  width: 5rem;
	  height: 3rem;
	  animation: mo .5s;
		box-shadow: 0 0 20px #ccc;
		perspective: inherit;
	}
	@keyframes mo{
		0%{transform: translate(-50%,-50%) scale(0,0)}
		90%{transform: translate(-50%,-50%) scale(1.2,1.2)}
		100%{transform: translate(-50%,-50%) scale(1,1)}
	}
	.date{
		display: flex;
		align-items: center;
		justify-content: space-around;
		position: relative;
	}
	.ss_icon{
		position: absolute;
		left: .4rem;
		width: .5rem;
	}
	.btn_scroll{
		background: #5bacff;
		color: #fff;
		font-size: .4rem;
		border: 0;
		border-radius:.1rem ;
		box-shadow: 0 0 3px #CCC ;
		height: 1rem;
	}
	.btn_scroll:active{
		background: #409eff;
	}
	.date input{
		border: 0;
		height: 1.2rem;
		line-height: .6rem;
		width: 8rem;
		border-radius:.1rem ;
		box-shadow: 0 0 3px #CCC ;
		text-indent: 2em;
	}
	.year_list{
		height: 3rem;
		position: fixed;
		bottom: 0rem;
		width: 100%;
		overflow: scroll;
		display: flex;
		flex-direction: column;
		transform: translateY(3rem);
		transition: all .3s;
		color: #fff;
		box-shadow: 0 0 20px #ccc;
	}
	.info{
	width: 100vw;
	}
	.year_list::-webkit-scrollbar{
		display: none;
	}
	.year_list2{
		transform: translateY(0rem);
		/*bottom: 0;*/
	}
	.year_list>div{
		padding: .3rem 0;
		background: #409eff;
		margin: .2rem 0;
  	box-shadow: 0px 0px  3px #ccc;
	}

	.scroll{
		padding-top:.2rem ;
		padding-bottom:.01rem ;
		width: 100%;
		height: calc(100vh - 2rem);
		overflow: hidden;
	}
  .list {
  	background: #fff;
  	height: 1rem;
  	width: calc(100vw + 2.5rem);
  	box-shadow: 0px 0px 5px #ccc;
    font-size: 0.5rem;
    transition: all .5s;
    margin: .2rem 0;
    position: relative;
    border-radius: .1rem;
  }
  .list>div{
  	height: 1rem;
  	line-height: 1rem;
  }
  .menu{
  	position: absolute;
  	top: 0;
  	right: 0;
  	/*transform: translateX(1rem);*/
  	height: 1rem;
  	width: 2.5rem;
  	display: flex;
  	justify-content: space-around;
  	font-size: .4rem;
  	color: #fff;
  	align-items: center;
  }
  .menu>span{
  	background: red;
  	height: .8rem;
  	line-height: .8rem;
  	width: 1rem;
  	border-radius: .1rem;
  	box-shadow: 0 0 5px #CBCBCB;
  }
  .candelete{
  	transform: translateX(-2.5rem);
  }
</style>