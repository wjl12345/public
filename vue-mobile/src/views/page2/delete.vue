<template>
	<div class="delete" ref='del'>
		<button @click="log">打印</button>
		<div class="" v-for="i in list1" @click="setItem(i)">
			{{i}}
		</div>
		<div v-for="(i,index) in list3" style="margin-top: 1rem;" >
			{{i}}
			<span @click="del(i,index)" style="color: red;">
				删除
			</span>
		</div>
	</div>
</template>

<script>
  import html2canvas from 'html2canvas'
	export default{
		data(){
			return{
				list1:[
				'测试1',
				'测试2',
				'测试3',
				'测试4',
				'测试5'
				],
				list2:JSON.parse(localStorage.getItem('setLocal')) ||[],
				list3:[]
			}
		},
		mounted(){
			
		},
		methods:{
			log(){
			  var this1 = this;
          html2canvas(this1.$refs.del, {
            backgroundColor: '#fff'
          }).then((canvas) => {
            let dataURL = canvas.toDataURL("image/png");
            this1.downImg = dataURL;
            console.log(dataURL)
          });
			},
			setItem(i){
				this.list2.push(i)
				localStorage.setItem('setLocal',JSON.stringify(this.list2))
				this.list3 = JSON.parse(localStorage.getItem('setLocal'))
				console.log(this.list3)
			},
			del(i,index){
				this.list2.splice(index,1)
				localStorage.setItem('setLocal',JSON.stringify(this.list2))
				this.list3 = JSON.parse(localStorage.getItem('setLocal'))
				console.log(JSON.parse(localStorage.getItem('setLocal')))
			}
		},
		created(){
				this.list3 = JSON.parse(localStorage.getItem('setLocal'))
		}
	}
</script>

<style scoped>
	
</style>
<!--<template>
  <div class="item" v-for="(item, index) in divList" :key="index" draggable="true" 
  	@dragstart="handleDragStart($event, item)" 
  	@dragenter="handleDragEnter($event, item)" 
  	@dragover.prevent="handleDragover($event, item)"
  	 @drop="handleDrop($event, item)" @dragend="handleDragEnd($event, item)">
    {{item.name}}
  </div>
</template>
<script>
  export default {
    data() {
      return {
        divList: [{
            key: 1,
            name: 'one'
          },
          {
            key: 2,
            name: 'two'
          },
          {
            key: 3,
            name: 'three'
          }
        ],
        dragging: null
      }
    },
    methods: {
      // 当元素被拖动时
      handleDragStart(e, item) {
        this.dragging = item
      },
      // 当被鼠标拖动的对象进入其容器范围内时触发此事件
      handleDragEnter(e) {
        // 为需要移动的元素设置dragstart事件
        e.dataTransfer.effectAllowed = 'move'
      },
      // 当某被拖动的对象在另一对象容器范围内拖动时触发此事件
      handleDragover(e) {
        // 首先把div变成可以放置的元素，即重写dragenter/dragover
        // 在dragenter中针对放置目标来设置!
        e.dataTransfer.dropEffect = 'move'
      },
      // 当放置被拖元素时
      handleDrop(e, item) {
        e.dataTransfer.dropEffect = 'move'
        if(item === this.dragging) {
          return
        }
        const newItems = [...this.divList]
        const from = newItems.indexOf(this.dragging)
        const to = newItems.indexOf(item)
        newItems[from] = item
        newItems[to] = this.dragging
        this.divList = newItems
      },
      // 完成元素拖动后触发
      handleDragEnd() {
        this.dragging = null
      }
    }

  }
</script>-->