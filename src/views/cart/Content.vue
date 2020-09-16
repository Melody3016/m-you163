<template>
  <div class="content">
    <!--上部的信息-->
    <div class="info">
      <div class="info-item">
        <van-icon name="passed" />
        <span>30天无忧退货</span>
      </div>
      <div class="info-item">
        <van-icon name="passed" />
        <span>48小时快速退款</span>
      </div>
      <div class="info-item">
        <van-icon name="passed" />
        <span>满99元免邮费</span>
      </div>
    </div>
    <!--中心信息-->
    <div class="main">
      <div class="m-box">
        <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
        <!-- <div class="txt">去添加点什么吧</div> -->
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Icon } from 'vant'

Vue.use(Icon)
export default {

}
</script>

<style lang="less" scoped>
.content {
  .info {
    height: 0.7rem;
    background: #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .3rem;
    .info-item {
      font-size: .24rem;
      color: #666;
      .van-icon {
        font-size: .1rem;
        margin-right: .06rem;
      }
    }
  }
  .main {
    position: absolute;
    top: 0.88rem;
    bottom: 0.98rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .m-box{
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 2.48rem;
        height: 2.48rem;
      }
      .txt {
        font-size: .28rem;
        color: #666;
      }
      .van-button {
        width: 4.8rem;
        height: 0.92rem;
      }
    }
  }
}
</style>
