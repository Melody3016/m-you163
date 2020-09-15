<template>
  <div class="footers">
    <van-tabbar route  z-index="99" inactive-color="#666" active-color="#dd1a21">
      <van-tabbar-item :to="item.path" :icon="item.icon"
        v-for="(item, index) in navs" :key="index"
      >
        {{ item.text }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'

Vue.use(Tabbar)
Vue.use(TabbarItem)
export default {
  data () {
    return {
      navs: [
        { path: '/home', icon: 'wap-home-o', text: '首页' },
        { path: '/category', icon: 'apps-o', text: '分类' },
        { path: '/buying', icon: 'cash-on-deliver', text: '值得买' },
        { path: '/cart', icon: 'shopping-cart-o', text: '购物车' },
        { path: '/user', icon: 'user-o', text: '个人' }
      ]
    }
  }
}
</script>

<style lang="less">
.footers {
  .van-tabbar {
    height: 0.98rem;
    background-color: #fff;
    .van-tabbar-item__icon {
      font-size: .4rem;
    }
    .van-tabbar-item__text {
        font-size: .24rem;
    }
  }
}
</style>
