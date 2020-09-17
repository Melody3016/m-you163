<template>
  <div class="category">
    <cate-header />
    <cate-nav />
    <footer-nav />
  </div>
</template>

<script>
import FooterNav from '@/components/FooterNav'
import CateHeader from './Header'
import CateNav from './Nav'

export default {
  components: {
    FooterNav,
    CateHeader,
    CateNav
  }
}
</script>

<style lang="less" scoped>
.category {
  padding-top: .88rem;
  padding-bottom: .98rem;
  height: 100%;
}
</style>
