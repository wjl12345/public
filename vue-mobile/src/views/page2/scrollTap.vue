<template>
	<div class="all_tap" ref="tap" @click="strs">
		
  <div class="scroll_tap"  @scroll.stop="Scroll" ref="scroll">
    <a v-for='(i,index) in tapList' @click="show(index)"  :class="({'lis':a ===index })" :style="[sty]" >
    	<div>{{i}}</div>
    </a>
  </div>
  <span class="span" :style="stt"></span>
  <div v-for="i in 100">{{i}}</div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        tapList: ['内容一', '内容二', '内容三', '内容四', '内容五', '内容六', '内容七', '内容八', '内容九', '内容十'],
//      tapList: ['内容一', '内容二', '内容三', '内容四'],
        lis: ['l1', 'l2', 'l3', 'l4', 'l5'],
        a: 0,
        href:'#lis1',
        w:'',
        b:'',
        str:'',
        sty:{
        	transform:'translateX(0)'
        },
        stt:{
        	left:'calc(100vw / 12)'
        }
      }
    },
    created(){


document.body.scrollTo(100,0)
    },
    mounted(){
    		this.$refs.tap.scrollTo(0,30)
    },
    methods: {
    	strs(){
    		console.log(999)
    		this.$refs.tap.scrollTo(0,300)
    	},
      show(i) {
        this.a = i
        
        if(i === this.tapList.length-1){
        this.stt.left = 'calc((100vw / 12) * '+(i+2)+')'
        	
        }else{
        this.stt.left = 'calc((100vw / 12) * '+(i+1)+')'
        }
        if(i<this.tapList.length-1){
        	console.log(i*0.5)
        	this.sty.transform = 'translateX(-'+this.w*i+'px)'
        }
        /*if(i !== this.tapList.length-1){
        	this.b = this.w*i
        setTimeout(()=>{
        	this.str =this.b
        },0)
        	console.log(this.b)
        	if(this.str <this.b){
        		console.log(999)
        		this.$refs.scroll.scrollBy(this.w,0);
        	}else{
        		this.$refs.scroll.scrollBy(-this.w,0);
        	}
        }*/
      },
      Scroll(e){
      	console.log(e.srcElement.scrollLeft)
      },
      Scroll2(e){
      	console.log(e.srcElement.scrollTop)
      }
    }
  }
</script>

<style scoped>
  .scroll_tap {
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: space-between;
    overflow: scroll;
  }
  
  .scroll_tap::-webkit-scrollbar {
    display: none;
  }
  
  .scroll_tap>a {
    height: 1rem;
    width: calc(100vw / 6);
    flex-shrink: 0;
    transition: all .2s;
    display: flex;
   align-items: center;
   justify-content: center;
    color: black;
  }
  .span{
  	display: inline-block;
  	width: .55rem;
  	height: .1rem;
  	background: red;
  	transition: all .5s;
  	position: absolute;
  	left: calc(100vw / 12);
  	transform: translateX(-50%);
  }
  
  .lis {
    color: red !important;
    
    /*background: #354D61;*/
  }
  .all_tap{
  	position: relative;
  	height: 100vh;
  	overflow: scroll;
  }
</style>