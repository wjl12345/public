<template>
  <div>
    <div class="tap">
      <div class="tap-list" v-for="(i,index) in list" @click="Check(index)">
        {{i}}
        <span class="line" :style="Left"></span>
      </div>

    </div>
    <div class="">
      <select name="">
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
    <tap></tap>
  </div>
</template>

<script>
	import tap from './tap2'
  export default {
  	components:{
  		tap
  	},
    data() {
      return {
        Index: 0,
        list: [
          'tap-1',
          'tap-2',
          'tap-3',
          'tap-4',
          'tap-5',
        ],
        Left: {
          left: '0',
          "font-size": '.6rem'
        }
      }
    },
    methods: {
      Check(i) {
        this.Index = i
        this.Left = {
          left: 20 * i + '%',
        }
      }
    }
  }
</script>

<style scoped>
  .tap {
    width: 90%;
    height: 1rem;
    background: #fff;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    position: relative;
    font-size: .5rem;
  }
  
  .tap-list {
    /*overflow: hidden;*/
    /*position: relative;*/
    height: 100%;
  }
  
  .line {
    display: inline-block;
    width: 20%;
    height: .1rem;
    background: red;
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    bottom: 0;
    transition: all .3s;
  }
</style>