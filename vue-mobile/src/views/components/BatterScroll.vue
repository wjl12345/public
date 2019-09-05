<!--<template>
  <div class="public">
    <div class="carousel">
      <div class="car" ref="swiper">
        <p ref="ritem" class="p_list" 
        	v-for="(item, index) in newlist" 
        	@touchstart="touchStart($event)" 
        	@touchmove="touchMove($event)" 
        	@touchend="touchEnd($event)" 
        	:style="{backgroundImage: 'url('+ item.src +')'} ">
        	{{index}}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {

    data() {
      return {
        startX: '',
        moveX: '',
        list: [{
          src: '../../../static/img/1.jpg'
        }, {
          src: '../../../static/img/2.jpg'
        }, {
          src: '../../../static/img/3.jpg'
        }, {
          src: '../../../static/img/4.jpg'
        }],
        contenter: this.$refs.swiper,
        active: -1,
        off: true,
        autoplay: 1000,
        start: null,

      }
    },
    mounted: function() {
      this.$nextTick(() => {
        this.backlate();
        this.backtime();
        this._autoplay()

      })
    },

    computed: {
      //生成新的图片组合
      newlist: function() {
        this.list.push(this.list[0]);
        this.list.unshift(this.list[(this.list.length - 2)]);
        return this.list;
      }
    },
    methods: {
      //图片移动
      backlate(offert) {
        let _that = this;
        if(!offert) offert = 0;
        (this.list).forEach((item, index) => {
          this.$refs.ritem[index].style.transform = 'translate3d(' + ((index + this.active) * _that.$refs.ritem[index].clientWidth + offert) + 'px,0,0)'
        })
      },
      //图片移动时间
      backtime(duration) {
        if(!duration) duration = '0ms';
        (this.$refs.ritem).forEach((item) => {
          item.style.webkitTransition = duration
          item.style.transition = duration;
        })
      },
      touchStart(e) {
        this.startX = e.touches[0].pageX;
      },
      touchMove(e) {
        e.preventDefault()
        e.stopPropagation()
        this.moveX = e.touches[0].pageX - this.startX;
        this.backlate(this.moveX)

      },
      touchEnd(e) {
        this.backtime('300ms');
        if(this.moveX > 100) {
          this.backlate(this.$refs.ritem[0].clientWidth)
          this.active++;
        } else if(this.moveX < -100) {
          this.backlate(-this.$refs.ritem[0].clientWidth)
          this.active--;
        }

        this.setactive(this.active)
        setTimeout(() => {
          this._autoplay()
        })
      },
      //循环滚动处理
      setactive(active) {
        if(active == 0) {
          this.active = 0
        } else if(active == -7) {
          this.active = -7
        } else {
          return false;
        }
        this.backtime()
        setTimeout(() => {
          this.backlate()
        }, 300)

      },
      next() {
        this.backtime('300ms');
        this.active--;
        this.backlate()
        this.setactive(this.active)
      },
      _autoplay() {
        if(this.autoplay != '') {
          this.cleartime()
          /*this.start = setTimeout(() => {
            this.next()
            this._autoplay()
          }, this.autoplay)*/
        }
      },
      cleartime() {
        clearTimeout(this.start)
        this.start = null;
      }

    }
  }
</script>
<style>
  .carousel {
    overflow: hidden;
    width: 100%;
    height: 500px;
    position: relative;
  }
  
  .car {
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  p {
    position: absolute;
    width: 100%;
    flex: 1;
    height: 100%;
    background-size: 100%;
    text-align: center;
    font-size: 30px;
    color: #fff;
    line-height: 500px;
  }
  .p_list{
  	
  }
</style>-->
<template>
	<div class="img_div">
		<div v-for="(item,index) in list" class="list"
			 @touchstart="touchStart(index)"
			 @touchend="touchEnd(index)"
			 >

			<img :src="item.src"  :style="sty"/>
			<span class="count">{{i}}/{{list.length}}</span>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				list: [{
          src: '../../../static/img/1.jpg'
        }, {
          src: '../../../static/img/2.jpg'
        }, {
          src: '../../../static/img/3.jpg'
        }, {
          src: '../../../static/img/4.jpg'
        }],
        clientNum:{},
        sty:{
        	transform:'translateX(0)'
        },
        i:1
			}
		},
		methods:{
			touchStart(index) {
        let touchs = event.changedTouches[0];
        this.clientNum.x1 = touchs.pageX;
      },
      touchEnd(index) {
        let touchs = event.changedTouches[0]
        this.clientNum.x2 = touchs.pageX;
        	this.candelete = index
        	
        	if(this.clientNum.x2 > this.clientNum.x1 && 
        	this.clientNum.x2-this.clientNum.x1 >10 ) {//you
        		if(index !==0){
        			this.sty.transform = 'translateX(-' + 100 * (index - 1) + 'vw)'
        			this.i =index
        		}
        	}else if(this.clientNum.x2 < this.clientNum.x1 && 
        	Math.abs(this.clientNum.x2-this.clientNum.x1 ) >10 &&
        	index !== this.list.length-1
        	){//zuo
            this.sty.transform = 'translateX(-' + 100 * (index + 1) + 'vw)'
      	    	this.i =index+2
        	}
      },
		}
	}
</script>
<style scoped>
	.list{
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		position: relative; 
	}
	.count{
		display: inline-block;
		width: 100vw;
		text-align: center;
		position: absolute;
		bottom: 3rem;
		color: #fff;
	}
	.list>img{
		transition: all .5s;
	  width: 100vw;
	  box-shadow: 0 0 5px rgba(30,166,240,.5);
	}
	.img_div{
		background: #000;
		overflow: hidden;
		display: flex;
	}
	.img_div::-webkit-scrollbar{
		display: none;
	}
</style>
