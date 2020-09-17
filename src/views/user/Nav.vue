<template>
  <div class="nav">
    <div class="title">
      <h1>我的资产</h1>
    </div>
    <!-- <div class="assetList">
      <div class="asset-item">
        <p class="count" dot>
          <span class="unit">￥</span>
          <span class="value">0</span>
        </p>
        <p class="name">回馈金</p>
      </div>
    </div> -->
    <van-tabbar active-color="#333" inactive-color="#333">
      <van-tabbar-item
        v-for="(item, index) in navList"
        :key="index"
        :dot="item.hasDot"
      >
        <p class="count">
          <span class="unit" v-if="item.isMoney">￥</span>
          <span class="value">{{ item.value }}</span>
        </p>
        <p class="name">{{ item.name }}</p>
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
      navList: [
        { name: '回馈金', value: 0, isMoney: true, hasDot: true },
        { name: '红包', value: 2, isMoney: false, hasDot: false },
        { name: '优惠券', value: 1, isMoney: false, hasDot: false },
        { name: '津贴', value: 0, isMoney: true, hasDot: false },
        { name: '礼品卡', value: 0, isMoney: false, hasDot: false }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.nav {
  color: #333;
  margin-bottom: .2rem;
  background-color: #fff;
  .title {
    padding-left: .3rem;
    h1 {
      font-size: .28rem;
      border-bottom: 0.01rem solid #D9D9D9;
      color: #333;
      line-height: 1rem;
    }
  }
  .van-tabbar {
    position: relative;
    height: 1.6rem;
    .name {
      font-size: .26rem;
    }
    .count {
      font-weight: bold;
      margin-bottom: .15rem;
      font-size: .32rem;
      text-align: center;
      .unit {
        font-size: .2rem;
        margin-right: .02rem;
      }
    }
  }
  .assetList {
    height: 1.6rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .asset-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      .name {
        font-size: .26rem;
      }
      .count {
        font-weight: bold;
        margin-bottom: .1rem;
        .unit {
          font-size: .2rem;
          margin-right: .05rem;
        }
      }
    }
  }
}
</style>

<style lang="less">
.nav {
  .van-info {
    right: -.22rem;
  }
  .van-info--dot {
    width: .1rem;
  }
}
</style>
