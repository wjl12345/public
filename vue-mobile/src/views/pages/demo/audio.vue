<template>
  <div>
    <audio controls="controls" id="audio">
      <source src="@/../static/audio/陈奕迅-陪你度过漫长岁月.flac" type="audio/flac" />
    </audio>
    <audio controls="controls" id="audio">
      <source src="@/../static/audio/林忆莲+-+为你我受冷风吹.flac" type="audio/flac" />
    </audio>
    <div class="line-wrapper" ref="line">
      <div class="line-bg" :style="{width: audioWidth + 'px'}"></div>
    </div>

    <div class="play" @click="Play">播放</div>
    <div class="stop" @click="Stop">暂停</div>
    <span v-if="time">{{parseInt(time/60) < 10?'0'+parseInt(time/60):parseInt(time/60)}}:{{time%60 < 10?'0'+time%60:time%60}}</span>
    <div class='clip' v-if="Width.width" id="context" :style="[Width]"></div>
    <span v-if="c">{{b}}:{{a}}{{num}}</span>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        play: '',
        audioHttp: '',
        audio: '',
        audioWidth: '',
        time: '',
        num: 0,
        b: "0",
        a: "0",
        c: '0',
        Width: {
          width: '0%',
          height: '10px',
          background: '#409eff'
        }
      }
    },
    mounted() {},
    methods: {
      Play() {
        console.log('播放')
        this.Width.width = '0%'
        this.audio = document.getElementById('audio')
        this.time = this.audio.duration - 0.4
        var a, b, c
        setInterval(() => {
          this.num++
            this.c = this.num + ''
          if(this.num >= 10) {
            this.a++
              this.num = 0
            if(this.a >= 6) {
              this.b++
                this.a = 0
            }
          }
          if(Number(this.b+''+this.a+'.'+this.num) < 100) {
          	
          	var x = Number(this.b)*60+Number(this.a)*10+this.num
          	var y = 4*60+2
          	var z = x/this.audio.duration*100
            this.Width.width = z + '%'
            console.log(Number(this.b)*60)
            console.log(Number(this.a)*10)
            console.log(this.num)
            console.log(z)
          } else {
            //        	this.Width.width = 100 + '%'
            z = 100
          }
          //console.log(this.b+'.'+this.a+''+this.num)
        }, 1000)
        
        this.audio.play()
      },
      Stop() {
        console.log('暂停')
        this.audio = document.getElementById('audio')
        this.audio.pause()
      }
    }
  }
</script>

<style scoped>
  .play,
  .stop {
    width: 1rem;
    height: 1rem;
    line-height: 1rem;
    border-radius: .5rem;
    background: #409eff;
    color: #fff;
    text-align: center;
    font-size: .3rem;
  }
  
  .stop {
    background: red;
  }
</style>