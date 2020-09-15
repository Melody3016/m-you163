<template>
  <div class="header">
    <div class="left" @click="goHome">
      <van-icon name="wap-home-o" />
    </div>
    <div class="center">
      <slot></slot>
    </div>
    <div class="right">
      <van-icon name="search" @click="goSearch" />
      <van-icon name="shopping-cart-o" @click="goCart" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Icon } from 'vant'

Vue.use(Icon)
export default {
  methods: {
    goHome () {
      this.$router.push('/home')
    },
    goSearch () {
      this.$router.push('/search')
    },
    goCart () {
      this.$router.push('/cart')
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 1rem;
  background-color: #fff;
  z-index: 99;
  .van-icon {
    font-size: .5rem;
    color: #666;
  }
  .van-icon-search {
    margin-right: .3rem;
  }
  .center {
    text-align: center;
    line-height: 1rem;
    font-size: .36rem;
  }
  .left,
  .right {
    position: absolute;
    top: .2rem;
  }
  .left {
    left: .24rem;
  }
  .right {
    right: .24rem;
  }
}
</style>
