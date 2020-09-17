<template>
  <div class="user">
    <div class="box">
      <user-header />
      <user-nav />
      <user-con />
      <footer-nav />
    </div>
  </div>
</template>

<script>
import FooterNav from '@/components/FooterNav'
import UserHeader from './Header'
import UserNav from './Nav'
import UserCon from './Content'

export default {
  components: {
    FooterNav,
    UserHeader,
    UserNav,
    UserCon
  }
}
</script>

<style lang="less" scoped>
.user {
  background-color: #eee;
  height: 100%;
  padding-bottom: 0.98rem;
  .box {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>
