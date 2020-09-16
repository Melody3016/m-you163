<template>
  <div class="cart">
    <!--头部-->
    <cart-header>
      <!--领券-->
      <div class="ticket">领券</div>
      <!-- <div class="txt">领券</div> -->
    </cart-header>
    <!--内容部分-->
    <cart-con>
      <div class="txt">去添加点什么吧</div>
      <!-- <van-button type="danger">登录</van-button> -->
    </cart-con>
    <footer-nav />
  </div>
</template>

<script>
import FooterNav from '@/components/FooterNav'
import CartHeader from './Header'
import CartCon from './Content'

export default {
  components: {
    FooterNav,
    CartHeader,
    CartCon
  }
}
</script>

<style lang="less" scoped>
.cart {
  background-color: #f4f4f4;
  height: 100vh;
  position: relative;
}
</style>
