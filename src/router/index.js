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
    component: () => import('../views/cart')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/user')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search')
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
