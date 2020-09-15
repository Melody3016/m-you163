<template>
  <div class="search">
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <h2>热门搜索</h2>
    <div class="popup-list">
      <div class="item"
        v-for="(item, index) in list"
        :key="index"
        :class="item.highlight === 1 ? 'active' : ''"
        >{{ item.keyword }}</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Search } from 'vant'
import axios from 'axios'

Vue.use(Search)
export default {
  data () {
    return {
      value: '',
      list: []
    }
  },
  methods: {
    onSearch (val) {
      console.log(val)
    },
    onCancel () {
      this.$router.push('/home')
    }
  },
  created () {
    axios.get('getData/xhr/search/init.json')
      .then(res => {
        this.list = res.data.data.hotKeywordVOList
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style lang="less" scoped>
.search {
  h2 {
    padding-left: .3rem;
    font-size: .28rem;
    color: #999;
    margin-top: .1rem;
  }
  .popup-list {
    padding: .3rem .3rem 0;
    display: flex;
    flex-wrap: wrap;
    .item {
      height: .54rem;
      line-height: .54rem;
      text-align: center;
      float: left;
      margin-bottom: .4rem;
      background: #fafafa;
      border: 1px solid #ccc;
      border-radius: .04rem;
      font-size: .24rem;
      color: #333;
      margin-right: .2rem;
      padding: 0 .1rem;
      &.active {
        border: 1px solid #dd1a21;
        color: #dd1a21;
      }
    }
  }
}
</style>
