<template>
  <div class="buying">
    <buy-header>值得买</buy-header>
    <buy-nav />
    <buy-con />
    <footer-nav />
  </div>
</template>

<script>
import FooterNav from '@/components/FooterNav'
import BuyHeader from '@/components/Header'
import BuyNav from './Nav'
import BuyCon from './Content'

export default {
  components: {
    FooterNav,
    BuyHeader,
    BuyNav,
    BuyCon
  }
}
</script>

<style lang="less" scoped>
.buying {
  padding: 1rem 0 .98rem 0;
}
</style>
