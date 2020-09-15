<template>
  <div class="header">
    <div class="search" @click="searchHandle">
      <van-icon name="search" />
      <span class="txt">搜索商品, 共37217款好物</span>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Icon } from 'vant'

Vue.use(Icon)
export default {
  methods: {
    searchHandle () {
      this.$router.push('/search')
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  height: 0.88rem;
  padding: 0 .3rem;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  background-color: #fff;
  .search {
    width: 100%;
    height: 0.56rem;
    background-color: #ededed;
    border-radius: .06rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .txt {
      font-size: .28rem;
      color: #666;
    }
    .van-icon-search {
      font-size: .36rem;
      color: #666;
    }
  }
}
</style>
