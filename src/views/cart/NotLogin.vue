<template>
  <div class="cart-login">
    <!--头部-->
    <cart-header>
      <!-- <div class="ticket">领券</div> -->
      <div class="txt">领券</div>
    </cart-header>
    <!--内容部分-->
    <cart-con>
      <!-- <div class="txt">去添加点什么吧</div> -->
      <van-button type="danger" @click="loginHandler">登录</van-button>
    </cart-con>
    <footer-nav />
  </div>
</template>

<script>
import FooterNav from '@/components/FooterNav'
import CartHeader from './Header'
import CartCon from './Content'
import Vue from 'vue'
import { Button } from 'vant'

Vue.use(Button)
export default {
  components: {
    FooterNav,
    CartHeader,
    CartCon
  },
  methods: {
    loginHandler () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.cart-login {
  background-color: #f4f4f4;
  height: 100vh;
  position: relative;
}
</style>
