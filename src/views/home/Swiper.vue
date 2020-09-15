<template>
  <div class="banner">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#ff734c">
      <van-swipe-item v-for="(item, index) in list" :key="index">
        <van-image :src="item.picUrl + '?type=webp&imageView&quality=75&thumbnail=750x0'" />
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
    height: 3.7rem;
    width: 7.5rem;
    position: relative;
    .van-image__img {
      width: 100%;
      height: auto;
      position: absolute;
      left: 0;
      top: 40%;
      transform: translateY(-50%);
    }
  }
}
</style>
