<template>
  <div class="content">
    <!--个人中心列表-->
    <div class="user-list">
      <van-grid
        :column-num="3"
        icon-size=".5rem"
        :clickable="true"
        :border="false"
        gutter=".02rem"
      >
        <van-grid-item v-for="(value,index) in userList" :key="index" :icon="value.icon" :text="value.text" />
      </van-grid>
    </div>
    <!--退出登录-->
    <div class="loginout" @click="loginout">
      退出登录
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Grid, GridItem, Dialog } from 'vant'

Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Dialog)
export default {
  data () {
    return {
      userList: [
        { icon: 'orders-o', text: '我的订单' },
        { icon: 'orders-o', text: '账号管理' },
        { icon: 'orders-o', text: '周六一起拼' },
        { icon: 'orders-o', text: '售后服务' },
        { icon: 'orders-o', text: '邀请返利' },
        { icon: 'orders-o', text: '优先购' },
        { icon: 'orders-o', text: '积分中心' },
        { icon: 'orders-o', text: '会员俱乐部' },
        { icon: 'orders-o', text: '地址管理' },
        { icon: 'orders-o', text: '支付安全' },
        { icon: 'orders-o', text: '帮助与客服' },
        { icon: 'orders-o', text: '意见反馈' }
      ]
    }
  },
  methods: {
    loginout () {
      Dialog.confirm({
        message: '退出登录？'
      })
        .then(() => {
          // on confirm
          localStorage.removeItem('loginInfo')
          this.$router.push('/')
        })
        .catch(() => {
          // on cancel
        })
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  .user-list {
    margin-bottom: .4rem;
  }
  .loginout {
    height: 0.96rem;
    line-height: .96rem;
    text-align: center;
    font-size: .28rem;
    background-color: #fff;
    margin-bottom: .2rem;
  }
}
</style>

<style lang="less">
.user-list {
  .van-grid-item__icon {
    color: #999;
  }
  .van-grid-item__text {
    font-size: .24rem;
    color: #333;
  }
}
</style>
