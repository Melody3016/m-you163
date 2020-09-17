<template>
  <div class="home">
    <home-header />
    <home-banner />
    <home-classify />
    <home-content />
    <footer-nav />
  </div>
</template>

<script>
import FooterNav from '@/components/FooterNav'
import HomeHeader from './Header'
import HomeBanner from './Swiper'
import HomeClassify from './Classify'
import HomeContent from './Content'
import axios from 'axios'

export default {
  components: {
    FooterNav,
    HomeHeader,
    HomeBanner,
    HomeClassify,
    HomeContent
  },
  created () {
    // 请求数据
    axios.get('/getData/xhr/index.json', {
      params: {
        __timestamp: Date.now()
      }
    })
      .then((res) => {
        this.$store.commit('setIndexData', res.data.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style lang="less" scoped>
.home {
  padding: 1.48rem 0 .98rem 0;
  background-color: #eee;
}
</style>
