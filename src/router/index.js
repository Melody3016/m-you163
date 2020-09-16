import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/category')
  },
  {
    path: '/buying',
    name: 'Buying',
    component: () => import('../views/buying')
  },
  {
    path: '/cart',
    name: 'Cart',
    redirect: '/cart/home',
    component: () => import('../views/cart/'),
    children: [
      {
        // 已登录购物车页面
        path: 'home',
        component: () => import('../views/cart/Cart.vue')
      },
      {
        // 未登录购物车页面
        path: 'login',
        component: () => import('../views/cart/NotLogin.vue')
      }
    ]
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/user')
  },
  {
    path: '/login',
    name: 'Login',
    redirect: '/login/choose',
    component: () => import('../views/login'),
    children: [
      {
        // 选择登录方式页面
        path: 'choose',
        component: () => import('../views/login/Choose')
      },
      {
        // 登录页面
        path: 'lg',
        component: () => import('../views/login/Login')
      }
    ]
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/search')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/404')
  }
]

const router = new VueRouter({
  routes
})

export default router
