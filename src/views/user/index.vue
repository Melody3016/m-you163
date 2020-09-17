<template>
  <div class="user">
    <user-header />
    <user-nav />
    <user-con />
    <footer-nav />
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
  padding-bottom: .98rem;
}
</style>
