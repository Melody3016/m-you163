<template>
  <div class="header">
    <h2>购物车</h2>
    <div class="h-right">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.header {
  height: 0.88rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    margin-left: .3rem;
    font-size: .36rem;
  }
  .h-right {
    margin-right: .5rem;
    .ticket {
      margin-right: .2rem;
      position: relative;
      width: 0.64rem;
      height: 0.38rem;
      background-image: linear-gradient(-45deg,#FC865F 0,#FC625F 100%);
      color: #fff;
      font-size: 0.2rem;
      line-height: .4rem;
      text-align: center;
      border-radius: .02rem;
      &::before,
      &::after {
        content: '';
        position: absolute;
        width: 0.14rem;
        height: 0.14rem;
        border-radius: 50%;
        background-color: #fff;
        top: 0.1rem;
      }
      &::before {
        left: -.1rem;
      }
      &::after {
        right: -.1rem;
      }
    }
    .txt {
      color: #DD1A21;
    }
  }
}
</style>
