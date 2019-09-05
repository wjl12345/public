<template>
  <div>
    <title-bar :title="title"></title-bar>
    一、水平方向</br>
    默认flex-direction: row;</br>
    起点在右边flex-direction: row-reverse;</br>
    1. flex-direction:flex-start
    </br>
    <div class="box1">
      <div class="b1"></div>
      <div class="b2"></div>
      <div class="b3"></div>
    </div>
    2. flex-direction:center
    </br>
    <div class="box2">
      <div class="b1"></div>
      <div class="b2"></div>
      <div class="b3"></div>
    </div>
    3. flex-direction:flex-end
    </br>
    <div class="box3">
      <div class="b1"></div>
      <div class="b2"></div>
      <div class="b3"></div>
    </div>
    4. flex-direction:space-around
    </br>
    <div class="box4">
      <div class="b1"></div>
      <div class="b2"></div>
      <div class="b3"></div>
    </div>
    5. flex-direction: row;</br>
    flex-direction:space-between</br>
    <div class="box5">
      <div class="b1"></div>
      <div class="b2"></div>
      <div class="b3"></div>
    </div>
    二：flex-wrap: nowrap不换行,wrap换行,wrap-reverse换行后倒序排列
    <div class="box6">
      <div class="b1"></div>
      <div class="b2"></div>
      <div class="b3"></div>
    </div>
    三：flex-flow: 属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap
    <div class="box7">
      <div class="b1"></div>
      <div class="b2"></div>
      <div class="b3"></div>
    </div>
    四：align-items:定义项目在交叉轴上如何对齐</br>
    flex-start：交叉轴的起点对齐。</br>
    flex-end：交叉轴的终点对齐。</br>
    center：交叉轴的中点对齐。</br>
    baseline: 项目的第一行文字的基线对齐。</br>
    stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度</br>
    <div class="box8">
      <div class="b4"></div>
      <div class="b5"></div>
      <div class="b6"></div>
    </div>
    五：align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
    <div class="box9">
      <div class="b4"></div>
      <div class="b5"></div>
      <div class="b6"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: '弹性布局(display:flex)'
      }
    }
  }
</script>

<style scoped>
	
  
  * {
    font-size: .5rem;
  }
  
  .box1 {
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  
  .box2 {
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  
  .box3 {
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  
  .box4 {
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  
  .box5 {
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  
  .box6 {
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
  }
  
  .box7 {
    border: 1px solid red;
    display: flex;
    flex-flow: row wrap;
  }
  
  .box8 {
    height: 3rem;
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
  
  .box9 {
    height: 10rem;
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: flex-start;
  }
  /**/
  
  .b1,
  .b2,
  .b3 {
    height: 1.33333rem;
    width: 1rem;
  }
  
  .b4,
  .b5,
  .b6 {
    height: 1rem;
  }
  
  .b4 {
    width: 4rem;
  }
  
  .b5 {
    width: 4rem;
  }
  
  .b6 {
    width: 4rem;
  }
  
  .b1,
  .b4 {
    background: red;
  }
  
  .b2,
  .b5 {
    background: green;
  }
  
  .b3,
  .b6 {
    background: blue;
  }
</style>