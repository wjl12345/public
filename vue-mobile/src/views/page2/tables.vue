<template>
  <div class="table">
    <div>
      <div class="table_title">
        <span >名称</span>
        <span>创利</span>
        <span>总额</span>
      </div>
      <div v-for="item in data" class="tab">
        <span class="name">{{item.name}}</span>
        <span>{{item.m1}}</span>
        <span>{{item.m2}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [{
            name: '平安银行深圳分部',
            m1: '45334',
            m2: '334'
          },
          {
            name: '平安银行',
            m1: '34353434',
            m2: '43534'
          },
          {
            name: '平安银行',
            m1: '3437',
            m2: '43537'
          },
          {
            name: '平安银行',
            m1: '5343',
            m2: '53434'
          },
          {
            name: '平安银行',
            m1: '42323',
            m2: '43534'
          },
          {
            name: '平安银行',
            m1: '423',
            m2: '457767'
          },
          {
            name: '平安银行',
            m1: '4354',
            m2: '234'
          },
          {
            name: '平安银行',
            m1: '87543',
            m2: '34378'
          },
          {
            name: '平安银行',
            m1: '4357',
            m2: '537864'
          },
          {
            name: '平安银行',
            m1: '763',
            m2: '34537'
          },
        ]
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
	.name{
		text-decoration: underline;
	}
  .table_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  
  .table_title span {
    width: calc(100vw / 3);
    text-align: center;
  }
  
  .table {
    width: 85%;
    font-size: .4rem;
    margin: auto;
    background: #2e3036;
    margin-top: .2rem;
    border-radius: .2rem;
    color: #fff;
    padding:.4rem;
    
  }
  
  .tab {
    display: flex;
    align-items: center;
    margin: .2rem 0;
  }
  
  .tab span {
    width: calc(100vw / 3);
    line-height: .8rem;
  }
</style>