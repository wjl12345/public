<template>
  <div class="annular">
    <div class="top_title">{{titles}}</div>
    <div class="pi">
      <div class="annular_pie" ref="annular"></div>
      <div class="right_list">
        <div v-for='(i,index) in list2' class="list" :class="sty[index]">
          <span></span>
          <div>{{i}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        titles: '截止至2019年6月30日',
        sty: ['t1', 't2', 't3'],
        list2: ['三级产品', '四级产品', '代理产品'],
        option: {},
        data2: [{
            name: '保本理财',
            value: '351'
          },
          {
            name: '保证金',
            value: '403'
          },
          {
            name: '人民币保证金',
            value: '251'
          }
        ],
        sum:0,
        data3:[]
      }
    },
    mounted() {
    	this.data2.forEach(item=>{
    		this.sum += Number(item.value)
    		console.log(this.sum)
    	})
    		const val1 = ((this.data2[0].value*100)/this.sum).toFixed(2)
    		const val2 = ((this.data2[1].value*100)/this.sum).toFixed(2)
    		const val3 = (100-val1-val2).toFixed(2)
    	const	pacent1 = val1+'%'
    	const	pacent2 = val2+'%'
    	const	pacent3 = val3+'%'
    		this.data3.push({
    			name:'保本理财',
    			value:this.data2[0].value,
    			val:pacent1
    		},{
    			name:'保证金',
    			value:this.data2[1].value,
    			val:pacent2
    		},{
    			name:'人民币保证金',
    			value:this.data2[2].value,
    			val:pacent3
    		})
    		console.log(this.data3)
      this.init()
    },
    methods: {
      init() {
        var pie = echarts.init(this.$refs.annular)
        console.log(pie)

        this.option = {
          tooltip: {
            confine: true,
            trigger: 'item',
            formatter(a){
            	return a.data.val
            }
          },
          color: ['#fca74e', '#d34153', '#6ea8fd'],
          legend: {
            show: false,
            orient: 'vertical',
            x: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          },
          series: [{
            //          name: '访问来源',
            type: 'pie',
            radius: ['50%', '80%'],
            center: ['45%', '50%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: { //点击是否显示文字
                show: false,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.data3
          }]
        };
        pie.setOption(this.option);

      }
    }
  }
</script>

<style scoped>
  .top_title {
  	text-align: right;
  }
  
  .t1 {
    color: #fca74e;
  }
  
  .t2 {
    color: #6ea8fd;
  }
  
  .t3 {
    color: #d34153;
  }
  
  .t1 span {
    background: #fca74e;
  }
  
  .t2 span {
    background: #6ea8fd;
  }
  
  .t3 span {
    background: #d34153;
  }
  
  .list {
    display: flex;
    align-items: center;
    margin-bottom: .2rem;
  }
  
  .list span {
    display: inline-block;
    width: .2rem;
    height: .2rem;
    border-radius: .5rem;
    margin-right: .2rem;
  }
  
  .pi {
    display: flex;
    align-items: center;
  }
  
  .annular {
    background: #2e3036;
    width: 85%;
    border-radius: .2rem;
    margin: 0 auto;
    padding: .4rem;
    margin-bottom: .2rem;
    color: #fff;
    font-size: .4rem;
  }
  
  .annular_pie {
    width: 60%;
    height: 5rem;
  }
</style>