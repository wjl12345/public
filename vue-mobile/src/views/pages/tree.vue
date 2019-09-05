<template>
  <div>
    <div class="tree" ref='tree'></div>
    <div class="tree2" ref='tree2'></div>
  </div>
</template>

<script>
  import treeJson from './tree.json'
  export default {
    data() {
      return {
        data: []
      }
    },
    created() {
      this.data = []
      this.data.push(treeJson)
    },
    mounted() {
      this.Tree()
      this.Tree2()
    },
    methods: {
      Tree() {
        //console.log(this.data)
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(this.$refs.tree)
        // 绘制图表
        myChart.setOption({
          title: {
            text: '树图'
          },
          tooltip: {
            trigger: 'item',
            formatter(a) {
              console.log(a)
            }
          },
          grid: {
            show: false
          },
          tooltip: {},
          xAxis: {
            show: false
          },
          dataZoom: [ //缩放
            {
              type: 'slider', //对应第一个y轴
              zoomOnMouseWheel:true,
              show: false,
              start: 0, //%
              end: 20,
              // handleSize: 8
            },
            {
              type: 'inside', //区域缩放
              start: 0,
              end: 10
            },
//          {
//            type: 'slider',
//            show: false,
//            yAxisIndex: 1, //第二个y轴
//            filterMode: 'empty',
//            width: 12,
//            height: '70%',
//            // handleSize: 8,
//            showDataShadow: false,
//            left: '93%'
//          }
          ],
          yAxis: {
            show: false
          },
          series: [{
          	roam:'scale',
            type: 'tree',
            //连接线长度
            layerPadding: 30,
            //结点间距
            nodePadding: 20,
            //图形形状
            symbol: 'rect',
            //尺寸大小
            symbolSize: 20,
            data: this.data,
            top: '18%',
            bottom: '14%',
            layout: 'radial',
            symbol: 'emptyCircle',
            symbolSize: 7,
            initialTreeDepth: 3,
            animationDurationUpdate: 100

          }]
        });
      },
      Tree2() {
        //console.log(this.data)
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(this.$refs.tree2)
        // 绘制图表

        var option = {
        	
          title: {
            show: false
          },
          tooltip: {
            trigger: 'item',
            formatter: "{b}"
            //formatter: "{b}: {c}"
          },
          //那个右上角的工具栏
          toolbox: {
            show: false,
          },
          calculable: false,
          series: [{
          	roam:'scale',
            smooth: false,
            name: '树图',
            type: 'tree',
            //排列方式，横向、纵向
            orient: 'vertical',
            //根节点的位置
            rootLocation: {
              x: '0',
              y: '10%'
            },
            //连接线长度
            layerPadding: 300,
            //结点间距
            nodePadding: 500,
            //图形形状
            symbol: 'rect',
            //尺寸大小
            symbolSize: 30,
            //图的一些样式设置
            itemStyle: {
              //正常情况显示
              normal: {
                label: {
                  show: true,
                  position: 'inside',
                  textStyle: {
                    //字体颜色、大小、加粗
                    color: 'blue',
                    fontSize: 15,
                    fontWeight: 'bolder'
                  }
                },
                color: '#fff',
                borderColor:'red',
                padding:100,
                lineStyle: {
                  color: '#ccc',
                  width: 1,
                  curveness: 0,
                  type: 'solid'
                }
              },
              //鼠标移上去样式
              emphasis: {
                label: {
                  show: false,
                  textStyle: {
                    align: 'center',
                    verticalAlign: 'middle'
                  }
                },
                color: '#fff',
                borderWidth: 1
              }
            },
            data: this.data
          }]
        };
        myChart.setOption(option);

      }
    }
  }
</script>

<style scoped>
  .tree,
  .tree2 {
    width: 100%;
    height: 500px;
    overflow:scroll;
  }
</style>
<!--<template>
  <div class="str" ref="myEchart">
  </div>
</template>
<script>
  import strs from './str.json'
  export default {
    data() {
      return {
        chart: null,
        data: {}
      }
    },
    mounted() {
      this.initChart();
    },
    methods: {
      initChart() {
        this.data = strs
        let myChart = echarts.init(this.$refs.myEchart)
        console.log(this.data)
        myChart.hideLoading();
        setTimeout(() => {
        myChart.showLoading();
          let option = {
            tooltip: {
              trigger: 'item',
              triggerOn: 'mousemove'
            },
            series: [{
              type: 'tree',
              data: this.data,
              top: '18%',
              bottom: '14%',

              layout: 'radial',

              symbol: 'emptyCircle',

              symbolSize: 7,

              initialTreeDepth: 3,

              animationDurationUpdate: 750

            }]
          }
          myChart.setOption(option);
        }, 1000)
      }
    }
  }
</script>
<style scoped>
  .str {
    width: 500px;
    height: 500px;
  }
</style>-->