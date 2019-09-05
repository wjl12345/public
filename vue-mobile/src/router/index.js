import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo from '@/views/pages/demo/index'
import First from '@/views/pages/demo/firstpage'
import Mock from '@/components/mock'
import Flex from '@/views/pages/demo/Flex'
import Audio from '@/views/pages/demo/audio'
import Audio2 from '@/views/pages/demo/audio2'
import Touch from '@/views/pages/demo/touch'
import Home from '@/views/Home'
import Copy from '@/views/pages/demo/Copy'
import Ocr from '@/views/pages/demo/ocr'

import Tree from '@/views/pages/tree'
import Tree2 from '@/views/pages/demo/tree'

import Tree3 from '@/views/pages/tree/demo2'
import Dag from '@/views/pages/tree/dag'
import Vuetree from '@/views/pages/tree/vue_tree'
import Animate from '@/views/pages/demo/animate'
import FirstPage from '@/views/pages/FirstPage'
import Video from '@/views/pages/demo/video'
import ScrollLeft from '@/views/components/ScrollLeft'
import BatterScroll from '@/views/components/BatterScroll'
Vue.use(Router)
const router = new Router({
  routes: [{
      path: '/pageDemo',
      name: 'pageDemo',
      component: resolve=>require(['@/views/page2/pageDemo.vue'],resolve),
      meta: {
        title: '例子页面',
      }
    },{
      path: '/Carousel',
      name: 'Carousel',
      component: resolve=>require(['@/views/page2/Carousel.vue'],resolve),
      meta: {
        title: '图片轮播',
      }
    },{
      path: '/delete',
      name: 'delete',
      component: resolve=>require(['@/views/page2/delete'],resolve),
      meta: {
        title: '单项删除记录',
      }
    },{
      path: '/batter',
      name: 'batter',
      component: resolve=>require(['@/views/page2/batter'],resolve),
      meta: {
        title: '上啦加载，下拉刷新',
      }
    },{
      path: '/picture',
      name: 'picture',
      component: resolve=>require(['@/views/page2/picture'],resolve),
      meta: {
        title: '图片查看',
      }
    },{
      path: '/scrollTap',
      name: 'scrollTap',
      component: resolve=>require(['@/views/page2/scrollTap'],resolve),
      meta: {
        title: '橫向滑动菜单',
      }
    },{
      path: '/tables',
      name: 'tables',
      component: resolve=>require(['@/views/page2/tables'],resolve),
      meta: {
        title: '表格',
      }
    },{
      path: '/pie',
      name: 'pie',
      component: resolve=>require(['@/views/page2/pie'],resolve),
      meta: {
        title: '饼图',
      }
    },{
      path: '/menu',
      name: 'menu',
      component: resolve=>require(['@/views/page2/menu'],resolve),
      meta: {
        title: 'progress',
      }
    },{
      path: '/progress',
      name: 'progress',
      component: resolve=>require(['@/views/page2/progress'],resolve),
      meta: {
        title: 'progress',
      }
    },{
      path: '/',
      name: 'first',
      component: resolve=>require(['@/views/first'],resolve),
      meta: {
        title: '首页',
      }
    },{
      path: '/home0',
      name: 'home0',
      component: resolve=>require(['@/views/home0'],resolve),
      meta: {
        title: 'home0',
      }
    },{
      path: '/video',
      name: 'Video',
      component: Video,
      meta: {
        title: 'Video',
      }
    },{
      path: '/Dag',
      name: 'Dag',
      component: Dag,
      meta: {
        title: 'Dag',
      }
    },{
      path: '/FirstPage',
      name: 'FirstPage',
      component: FirstPage,
      meta: {
        title: 'FirstPage',
      }
    },{
      path: '/Animate',
      name: 'Animate',
      component: Animate,
      meta: {
        title: 'Animate',
      }
    },{
      path: '/vue_tree',
      name: 'Vuetree',
      component: Vuetree,
      meta: {
        title: 'Vuetree',
      }
    },{
      path: '/Tree3',
      name: 'Tree3',
      component: Tree3,
      meta: {
        title: '树图3',
      }
    },{
      path: '/tree',
      name: 'Tree',
      component: Tree,
      meta: {
        title: '树图',
      }
    },{
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        title: '首页',
        index: '0'
      }
    }, {
      path: '/touch',
      name: 'Touch',
      component: Touch,
      meta: {
        title: '滑动',
        index: '000'
      }
    },{
      path: '/ocr',
      name: 'Ocr',
      component: Ocr,
      meta: {
        title: '扫一扫',
        index: '00110'
      }
    },{
      path: '/copy',
      name: 'Copy',
      component: Copy,
      meta: {
        title: '复制',
        index: '010'
      }
    },{
      path: '/flex',
      name: 'flex',
      component: Flex,
      meta: {
        title: '弹性布局'
      }
    },{
      path: '/audio',
      name: 'audio',
      component: Audio,
      meta: {
        title: '播放器'
      }
    },{
      path: '/audio2',
      name: 'audio2',
      component: Audio2,
      meta: {
        title: '播放器2'
      }
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        index: 1,
        requireAuth: true
      }
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo,
      meta: {
        index: 2
      }
    },{
      path: '/scroll',
      name: 'scroll',
      component: ScrollLeft,
      meta: {
        index: 2
      }
    }, {
      path: '/batterscroll',
      name: 'batterscroll',
      component: BatterScroll,
      meta: {
        index: 2
      }
    }, {
      path: '/mock',
      name: 'mock',
      component: Mock,
      meta: {
        index: 3,
        requireAuth: true
      }
    }

  ]
})
router.beforeEach((to, from, next) => { //beforeEach是router的钩子函数，在进入路由前执行
  if(to.meta.title) { //判断是否有标题
    document.title = to.meta.title
  }
  next() //执行进入路由，如果不写就不会进入目标页
})
//向外暴露路由
export default router