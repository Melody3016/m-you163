import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* import VConsole from 'vconsole'

const isDebug = true
if (isDebug) {
  new VConsole()
} */
Vue.config.productionTip = false

// 全局前置守卫，进行登录拦截
router.beforeEach((to, from, next) => {
  // 判断要前往的路径
  const path = to.path
  // 登录状态
  const loginState = localStorage.getItem('loginInfo') === 'success'
  // 购物车和个人页面需要进行登录拦截
  if (path !== '/cart/home' && path !== '/user') {
    // 登录后不能前往登录页
    if ((path === '/login/choose' || path === '/login/lg') && loginState) {
      router.push('/home').catch(err => err)
    } else {
      next()
    }
  } else {
    // 是否登录
    if (loginState) {
      next()
    } else if (path === '/cart/home') {
      // 跳转到购物车登录页面
      // next('/cart/login')
      router.push('/cart/login').catch(err => err)
    } else if (path === '/user') {
      // 跳转到登录页面
      // next('/login')
      router.push('/login').catch(err => err)
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
