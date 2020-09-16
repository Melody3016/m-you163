<template>
  <div class="login">
    <login-header>网易严选</login-header>
    <div class="logoWrap">
      <img src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png">
    </div>
    <div class="btns">
      <van-button type="primary" block color="#DD1A21" @click="loginHandler">
        <van-icon name="desktop-o" />
        <span>手机号快捷登录</span>
      </van-button>
      <van-button plain type="primary" block color="#DD1A21" @click="loginHandler">
        <van-icon name="envelop-o" />
        <span>邮箱帐号登录</span>
      </van-button>
    </div>
  </div>
</template>

<script>
import LoginHeader from '@/components/Header'
import Vue from 'vue'
import { Button, Icon } from 'vant'

Vue.use(Button)
Vue.use(Icon)
export default {
  components: {
    LoginHeader
  },
  methods: {
    loginHandler () {
      this.$router.push('/login/lg')
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  padding-top: 1rem;
  position: relative;
  height: 100vh;
  background: #F2F5F4;
  .logoWrap {
    padding-top: 1.6rem;
    padding-bottom: 2.32rem;
    img {
      width: 2.68rem;
      height: .9rem;
      margin: 0 auto;
    }
  }
  .btns {
    padding: 0 .4rem;
    .van-button {
      margin-bottom: .32rem;
    }
    .van-icon {
      font-size: .4rem;
      vertical-align: text-bottom;
      margin-right: .2rem;
    }
  }
}
</style>
