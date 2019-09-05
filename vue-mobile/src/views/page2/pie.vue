<template>
  <div >
  	<button class="log" @click="Log">打印</button>
    <div class="pie" ref="pies">
      <annular ></annular>
      <div class="pie_table" >
        <div class="pie_title">{{date}}</div>
        <div class="pie_all">
          <div class="pie_echarts" ref="pie"></div>
          <div class="legend">
            <div v-for="(i,index) in list" :class="sst[index]">
              <span></span>
              <div>{{i}}</div>
            </div>
          </div>
        </div>
      </div>
      <table-str-sdd></table-str-sdd>
      <table-str-sdd></table-str-sdd>
    </div>
  </div>
</template>

<script>
  import TableStrSdd from './tables'
  import annular from './annular'
  import html2canvas from 'html2canvas'
  
  export default {
    props: {

    },
    components: {
      TableStrSdd,
      annular
    },
    data() {
      return {
        value: '',
        date: '截止至2019年6月30日',
        option: {},
        data: [],
        data2: [],
        sum: 0,
        list: ['保本理财', '保证金', '人民币保证金', '预付类', '应收类', '定期存款'],
        sst: ['s1', 's2', 's3', 's4', 's5', 's6']
      }
    },
    created() {
      this.data = [{
          name: '保本理财',
          value: 500
        },
        {
          name: '保证金',
          value: 200
        },
        {
          name: '人民币保证金',
          value: 150
        },
        {
          name: '预付类',
          value: 400
        },
        {
          name: '应收类',
          value: 200
        },
        {
          name: '定期存款',
          value: 1200
        },
      ]
      this.data.forEach((item, index) => {
        this.sum += item.value
      })
      this.data.forEach((item, index) => {
        this.data2.push({
          name: item.name,
          value: item.value,
          sum: this.sum
        })
      })
    },
    mounted() {
      this.init()
    },
    methods: {
      Log() {
        var this1 = this;
          console.log(this1.$refs.pies.clientHeight)
          html2canvas(this1.$refs.pies, {
          	allowTaint: true,
          	taintTest: false,
            backgroundColor: '#fff',
            height:this1.$refs.pies.clientHeight,
          }).then((canvas) => {
               //通过html2canvas将html渲染成canvas，然后获取图片数据
                 //let dataURL = canvas.toDataURL("image/png");
            let imgData = canvas.toDataURL('image/jpg');
            // console.log(imgData);
            console.log(canvas.width,canvas.height);
             console.log(imgData)
            //初始化pdf，设置相应格式
            let doc = new jsPDF("p", "mm", "a4");
            // let doc = new jsPDF('', 'pt', 'a4')

            //这里设置的是a4纸张尺寸
            doc.addImage(imgData, 'JPEG', 0, 0,210,297);

            //输出保存命名为content的pdf
            doc.save('report.pdf');
            console.log(imgData)
          });
      },
      S() {
        console.log(typeof this.value)
      },
      init() {
        let myChart = echarts.init(this.$refs.pie)
        this.option = {
          /*title: {
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            x: 'center'
          },*/
          tooltip: {
            confine: true,
            trigger: 'item',
            formatter(a) {
              var s = a.name + ':' + (a.value * 100 / a.data.sum).toFixed(2) + '%';
              return s
            }
          },
          label: {
            show: false
          },
          /*legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          },*/
          color: ['#a7dd6e', 'orange', '#f7586c', '#00d8ff', '#f36552', '#68a9fb'],
          series: [{
            name: '访问来源',
            type: 'pie',
            radius: '80%',
            center: ['45%', '50%'],
            data: this.data2,
            labelLine: {
              show: false //隐藏引线
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
              normal: {
                label: {
                  show: false //隐藏文字
                },
              }
            }
          }]
        };
        myChart.setOption(this.option);
      }
    }
  }
</script>

<style scoped>
	.log{
		position: fixed;
		bottom: 10px;
	}
  .pie_table {
    padding: .4rem;
    background: #2e3036;
    width: 85%;
    margin: 0 auto;
    border-radius: .2rem;
  }
  
  .s1 {
    color: #a7dd6e;
  }
  
  .s2 {
    color: orange;
  }
  
  .s3 {
    color: #f7586c;
  }
  
  .s4 {
    color: #00d8ff;
  }
  
  .s5 {
    color: #f36552;
  }
  
  .s6 {
    color: #68a9fb;
  }
  
  .s1 span {
    background: #a7dd6e;
  }
  
  .s2 span {
    background: orange;
  }
  
  .s3 span {
    background: #f7586c;
  }
  
  .s4 span {
    background: #00d8ff;
  }
  
  .s5 span {
    background: #f36552;
  }
  
  .s6 span {
    background: #68a9fb;
  }
  
  .legend>div {
    font-size: .4rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: .2rem;
    width: 100%;
  }
  
  .legend {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .legend span {
    display: inline-block;
    width: .2rem;
    height: .2rem;
    border-radius: .1rem;
    /*background: red;*/
    margin-right: .2rem;
  }
  
  .pie {
    min-height: 100vh;
  }
  
  .pie_all {
    display: flex;
    align-items: center;
  }
  
  .pie_echarts {
    width: 65%;
    height: 6rem;
  }
  
  .pie_title {
    text-align: right;
    font-size: .4rem;
    color: #fff;
  }
</style>