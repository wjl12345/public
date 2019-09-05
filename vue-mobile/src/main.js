// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import animate from 'animate.css'
import titleBar from '@/components'
import Vant from 'vant';
import 'vant/lib/index.css';

import filters from '@/filters'
import focus from '@/directive/directive'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from '@/store'
import echarts from 'echarts'
import highcharts from 'highcharts'
import watermark from '@/assets/js/watermark.js'
import Vconsole from 'vconsole';
const vConsole = new Vconsole();
export default vConsole;
import './mock/index.js';
import { Toast } from 'vant';

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));
window.echarts = require('echarts');
window.highcharts = require('highcharts');
Vue.use(VueAwesomeSwiper)
Vue.use(Vant);
Vue.use(titleBar)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
router.beforeEach((to,form,next)=>{
	//console.log(sessionStorage.getItem('Status'))
	if(to.meta.requireAuth){
		if(sessionStorage.getItem('Status') === '200'){
			next()
		}else{
      Toast.fail('您还未登录，请先进行登录');
			next({
				path:'/home',
				query:{redirect:'/home'}
			})
		}
	}else{
		next()
	}
})
