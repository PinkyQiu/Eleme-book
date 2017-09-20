import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import seller from './components/seller/seller'
import 'common/stylus/index.styl'

Vue.use(VueRouter)
Vue.use(VueResource)
let app = Vue.extend(App)
let router = new VueRouter({
	linkActiveClass:'active'
})
router.map({
	'/goods':{
      component:goods
	},
	'/ratings':{
      component:ratings
	},
	'/seller':{
      component:seller
	}
})
router.start(app, '#app')
router.go('/goods')

// 兼容 better-scroll 从pc模式切换到手机模式不能滚动
window.addEventListener('resize', () => {
  window.location.reload()
}, false)
