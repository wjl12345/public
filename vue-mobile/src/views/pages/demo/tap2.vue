<template>
  <div>
    <div class="tap">
      <div class="tap-list" v-for="(i,index) in list" @click="Check(index)">
        {{i}}
        <span class="line" :style="Left" :class="({'line2':index === Index})"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
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
      }
    },
    methods: {
      Check(i) {
        this.Index = i
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
    /*position: relative;*/
    font-size: .5rem;
  }
  
  .tap-list {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  
  .line {
    display: inline-block;
    width: 50%;
    height: .1rem;
    background: red;
    display: flex;
    align-items: center;
    transition: all .3s;
    transform: scale(0,0);
    font-size: .5rem;
  }
  .line2{
  	transform: scale(1,1);
  }
</style>