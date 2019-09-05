<template>
  <div class="all">
    <div class="title" v-if="hide">
      <img src="../../../assets/images/back.png" @click="goback" />
      <marquee class="marquee">{{audioURl.substring(18,audioURl.length)}}</marquee>
    </div>
    <!--专辑-->
    <div class="bgd" >
      <img src="../../../../static/player.png" :style="[Logo]" @click="Start" />
    </div>
    <!--播放器主体-->
    <div class="player" >
      <div class="audioOff">
        <div class="ofplayBox">
          <audio id="audio" :src="audioURl" @canplay="canplay"></audio>
          <!--slider进度条-->
          <div class="progress">
            <span>{{starttime}}</span>
            <div class="line_out">
              <div class="line_in" v-if="Width.width" :style="[Width]">
                <!--<div>
                <div class="d"></div>
              </div>-->
                <img src="../../../../static/btn.png" />
              </div>
            </div>
            <span class="right-timer">{{duration}}</span>
          </div>
        </div>
      </div>
      <!--按钮-->
      <div class="change" >
        <img @click="Pre();Start()" src="../../../../static/pre.png" />
        <!--开始播放-->
        <img v-if="!playflg" @click="play();Start()" src="../../../../static/play.png" />
        <!--暂停-结束播放-->
        <img v-if="playflg" @click="stop();Clear()" src="../../../../static/stop.png" />
        <img @click="Next();Start()" src="../../../../static/next2.png" />
      </div>
    </div>
    <!--曲目-->
    <div class="music" :class="({'hide':hide === true})">
      <img src="../../../../static/down-arror.png" class="down_arror" @click="Hide" />
      <div>
        <div v-for="(item,index) in list" @click="Plays(item,index);Start()" :class="({'isplay':index === Index})">
          {{item.audioURl.substring(18,item.audioURl.length)}}
          <img src="../../../../static/audio/isplay.gif" v-show="index === Index" />
        </div>
      </div>
    </div>
    <!--<div class="touch" @touchmove="touchMove"></div>-->
  </div>
</template>
<script>
  export default {
    name: 'audioMsg',
    data() {
      return {
        Logo: {
          transform: 'rotateZ(0deg)',
          width: '5rem',
          'border-radius':'2.5rem',
          'box-shadow':'0 0 .2rem rgba(0,0,0,.5)'
          },
        hide: true,
        Index: 0,
        timer: 0,
        list: [{
            audioURl: '@/../static/audio/陈奕迅-陪你度过漫长岁月.flac'
          },
          {
            audioURl: '@/../static/audio/0_a01.mp3'
          },
          {
            audioURl: '@/../static/audio/林忆莲+-+为你我受冷风吹.flac'
          },
          {
            audioURl: '@/../static/audio/飞儿乐团+-+月牙湾.flac'
          }, {
            audioURl: '@/../static/audio/买辣椒也用券 - 起风了.mp3'
          }, {
            audioURl: '@/../static/audio/孙燕姿 - 遇见.flac'
          }, {
            audioURl: '@/../static/audio/夏天Alex - 不再联系.mp3'
          }, {
            audioURl: '@/../static/audio/央广合唱团 - 我爱你中国.mp3'
          }, {
            audioURl: '@/../static/audio/周传雄_-_关不上的窗.mp3'
          }, {
            audioURl: '@/../static/audio/周传雄+-+黄昏.flac'
          }, {
            audioURl: '@/../static/audio/周传雄+-+寂寞沙洲冷.flac'
          }, {
            audioURl: '@/../static/audio/周传雄 - 冬天的秘密.mp3'
          }, {
            audioURl: '@/../static/audio/逃跑计划 - 夜空中最亮的星.mp3'
          }, {
            audioURl: '@/../static/audio/小幸运 - 田馥甄.mp3'
          },
        ],
        //这首歌时间有点长 大家测试的时候可以换一个短点的MP3文件
        audioURl: '@/../static/audio/陈奕迅+-+陪你度过漫长岁月+(国语).flac',
        playflg: false,
        rangeValue: -1,
        starttime: '00:00', //正在播放时长
        duration: '00:00', //总时长
        offset: 0,
        offset2: 0,
        i: 0,
        Width: {
          width: '0%',
          height: '.2rem',
          background: '#BC2F2E'
        },
        s: 0,
        inter: ''

      }
    },
    watch: {
      offset2(val) {
        console.log(999)
        console.log(val)
        var a = Number(parseInt(val / 60))
        var b = val % 60 < 10 ? '0' + val % 60 : val % 60
        this.duration = a + ":" + b
      }
    },
    methods: {
    	goback(){
    		this.$router.go(-1)
    		clearInterval(this.timer)
    	},
    	//曲目列表隐藏
      Hide() {
        this.hide = !this.hide
      },
      //下一曲
      Next() {
        this.i++
          if(this.i === this.list.length) {
            this.i = 0
          }
        this.list.forEach((item, next) => {
          if(this.i === next) {
            console.log(this.i)
            console.log(item.audioURl.substring(18, item.audioURl.length))
            this.Index = this.i
            this.audioURl = item.audioURl
            //this.stop()
            setTimeout(() => {
              clearInterval(this.timer)
              this.play()
            }, 10)
          }
        })
      },
      //专辑开始旋转
      Start() {
        this.inter = setInterval(() => {
          this.s++
            this.Logo.transform = 'rotateZ(' + this.s + 'deg)'
          console.log(this.s)
        }, 100)
      },
      //上一曲
      Pre() {
        this.i--
          if(this.i <= 0) {
            this.i = 0
          }
        this.list.forEach((item, next) => {
          if(this.i === next) {
            console.log(this.i)
            console.log(item.audioURl.substring(18, item.audioURl.length))
            this.Index = this.i
            this.audioURl = item.audioURl
            this.stop()
            setTimeout(() => {
              clearInterval(this.timer)
              this.play()
            }, 10)
          }
        })
      },
      touchMove(e) {
        console.log(e.changedTouches[0].clientX)
        console.log(e.changedTouches[0].screenX)
      },
      //点击某一首
      Plays(item, index) {
        this.i = index
        this.Index = index
        this.audioURl = item.audioURl
        this.stop()
        setTimeout(() => {
          //clearInterval(this.timer)
          this.play()
        }, 10)
        //this.canplay()
      },
      //播放后自动触发
      canplay() {
        var audio = document.querySelector('#audio');
        this.offset2 = parseInt(audio.duration);
        console.log(this.offset2)
      }, //开始播放
      //点击播放按钮
      play() {
        this.Index = this.i
        audio.play();
        //this.Index = index
        //this.audioURl = item.audioURl
        //this.canplay()
        console.log('iiiii')
        console.log(this.offset2)
        this.playflg = true
        console.log(this.duration)
        if(this.playflg = true) {
          this.timer = setInterval(() => {
            var min = "0" + parseInt(audio.currentTime / 60);
            var max = parseInt(audio.duration);
            var sec = parseInt(audio.currentTime % 60);
            if(sec < 10) {
              sec = "0" + sec;
            };
            this.starttime = min + ':' + sec; /*  00:00  */
            this.rangeValue = parseInt(audio.currentTime)
            if(this.rangeValue == this.offset2) {
              console.log(777)
              console.log(this.rangeValue)
              console.log(this.offset2)
              console.log(666)
              this.rangeValue = 0; /*播放结束后进度条归零*/
              this.starttime = '00:00'; /*播放结束后时间归零*/
              this.stop()
              clearInterval(this.timer)
              this.Next()
            }
            this.Width.width = this.rangeValue / this.offset2 * 100 + "%"
          }, 1000)
        }
      }, 
      //暂停-结束
      stop() {
        var audio = document.querySelector('#audio');
        audio.pause();
        clearInterval(this.timer)
        this.playflg = false
        console.log(this.playflg)
        clearInterval(this.inter)
        console.log('暂停播放')
      },
      //清空定时器
      Clear() {
        console.log(this.inter)
        if(this.playflg === false) {
          console.log(this.inter)
        }
      }
      //滑动进度条

    },

  }
</script>
<style scoped>
  .bgd {
    height: calc(100vh - 4rem);
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  
  .all {
    width: 100%;
    height: 100vh;
    background: #fff;
  }
  
  .title {
    position: fixed;
    top: 0;
    height: 1rem;
    width: 100%;
    background: #151515;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 .4rem;
    align-items: center;
    color: #fff;
  }
  
  .title>img {
    width: .5rem;
    margin-right: .5rem;
  }
  
  .player {
    position: fixed;
    bottom: 1rem;
    width: 100%;
  }
  
  .hide {
    transform: translateY(calc(100% - 3rem));
  }
  
  .hide>img {
    transform: rotateZ(180deg);
  }
  
  .marquee {
    font-size: .5rem;
  }
  
  .change {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
  .change>img {
    width: .6rem;
  }
  
  .touch {
    width: 100%;
    height: 1rem;
    background: #409EFF;
  }
  
  .isplay {
    background: #BC2F2E !important;
    color: #fff !important;
  }
  
  .music {
    width: 100%;
    position: fixed;
    top:1rem;
    font-size: .5rem;
    transition: all .5s;
    height: 106vh;
  }
  
  .music>div {
    padding: .2rem 0;
    background: #fff;
    height: calc(100vh - 1rem);
  }
  
  .music>div>div {
    height: 1rem;
    line-height: 1rem;
    width: 90%;
    background: #fff;
    border-bottom: 1px solid #ccc;
    text-align: left;
    margin: 0 auto;
    margin-top: .2rem;
    padding: 0 .2rem;
    overflow-x: scroll;
    color: #000;
    display: flex;
    align-items: baseline;
  }
  
  .music>div>div>img {
    width: .8rem;
  }
  
  .down_arror {
    width: .6rem;
    transition: all .5s;
  }
  
  .line_out {
    width: 70%;
    background: #ccc;
    height: .2rem;
    border-radius: .1rem;
  }
  
  .line_in {
    width: 1rem;
    height: .2rem;
    position: relative;
    border-radius: .1rem;
  }
  
  .line_in>div {
    height: .5rem;
    width: .5rem;
    background: #fff;
    border-radius: .5rem;
    position: absolute;
    top: 50%;
    transform: translate(50%, -50%);
    right: 0;
    box-shadow: 0 0 5px 2px #ccc;
    line-height: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .line_in>img {
    width: .5rem;
    border-radius: .5rem;
    background: #fff;
    position: absolute;
    top: 50%;
    transform: translate(50%, -50%);
    right: 0;
    box-shadow: 0 0 5px 2px #ccc;
  }
  
  .d {
    border-radius: .1rem;
    background: #BC2F2E;
    width: .2rem;
    height: .2rem;
  }
  
  .audioOff {
    width: 100%;
    padding: 0.4rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .ofplayBox {
    width: 95%;
    height: 1.36rem;
    display: flex;
    align-items: center;
    border-radius: 0.1rem;
  }
  
  .isPlayImg {
    width: 1rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .isPlayImg img {
    width: 0.66rem;
    height: 0.66rem;
  }
  
  .progress {
    flex: 1;
    height: 0.66rem;
    font-size: 0.26rem;
    margin-top: 0.2rem;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  .duration {
    display: flex;
    justify-content: space-between;
    font-size: .5rem;
  }
</style>