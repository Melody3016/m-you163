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
        { icon: 'user-circle-o', text: '账号管理' },
        { icon: 'calendar-o', text: '周六一起拼' },
        { icon: 'after-sale', text: '售后服务' },
        { icon: 'cash-on-deliver', text: '邀请返利' },
        { icon: 'goods-collect-o', text: '优先购' },
        { icon: 'gold-coin-o', text: '积分中心' },
        { icon: 'diamond-o', text: '会员俱乐部' },
        { icon: 'location-o', text: '地址管理' },
        { icon: 'certificate', text: '支付安全' },
        { icon: 'service-o', text: '帮助与客服' },
        { icon: 'records', text: '意见反馈' }
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
    margin-bottom: 0.2rem;
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
.van-dialog__message {
  font-size: 0.36rem;
}
</style>
