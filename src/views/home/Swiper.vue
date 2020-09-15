<template>
  <div class="banner">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#ff734c">
      <van-swipe-item v-for="(item, index) in list" :key="index">
        <van-image :src="item.picUrl" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem, Image } from 'vant'

Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Image)
export default {
  data () {
    return {
      list: []
    }
  },
  computed: {
    indexData () {
      return this.$store.state.indexData
    }
  },
  watch: {
    indexData (val) {
      this.list = val.focusList
    }
  }
}
</script>

<style lang="less" scoped>
.banner {
  height: 2.96rem;
  .my-swipe {
    height: 2.96rem;
  }
}
</style>

<style lang="less">
.banner {
  .van-swipe {
    transform: translateZ(0)
  }
  .van-image {
    height: 2.96rem;
    width: 7.5rem;
    .van-image__img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
