import titleBar from './titleBar.vue'
import Btn from './Button.vue'
import List from './list.vue'

const components = {
	install(Vue){
		Vue.component('title-bar', titleBar)
		Vue.component('btn', Btn)
		Vue.component('list', List)
	}
}
export default components
