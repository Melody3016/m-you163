<template>
  <div class="header">
    <!--头像-->
    <div class="ava">
      <img src="https://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png" alt="">
    </div>
    <!--用户信息-->
    <div class="user-info">
      <div class="name">用户26632644</div>
      <div class="level">普通用户</div>
    </div>
    <!--其他信息-->
    <div class="other">
      <div class="other-top">
        <a href="javascript:;">
          <img src="https://yanxuan.nosdn.127.net/0372c180c25a3db515936145fc2699fd.png" alt="">
        </a>
        <a href="javascript:;">
          <van-icon name="qr" />
        </a>
      </div>
      <div class="other-bot">
        <van-icon name="gem-o" />
        <div class="word">
          <div class="line1">Pro会员</div>
          <div class="line2">
            <span>立即试用</span>
            <van-icon name="passed" />
          </div>
        </div>
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
.header {
  height: 2.7rem;
  overflow: hidden;
  background: linear-gradient(to right, #F3C575, #FEDD94);
  display: flex;
  align-items: center;
  padding-left: 0.3rem;
  .ava {
    width: 1.52rem;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .user-info {
    width: 3.38rem;
    margin-left: 0.3rem;
    color: #fff;
    .name {
      font-size: .36rem;
      margin-bottom: .04rem;
    }
    .level {
      font-size: .28rem;
    }
  }
  .other {
    margin-left: .17rem;
    width: 2.1rem;
    height: 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .other-top {
      position: relative;
      a {
        position: absolute;
        left: .58rem;
        top: 0.1rem;
        width: 0.44rem;
        height: 0.44rem;
        display: inline-block;
        img {
          width: 100%;
          height: 100%;
        }
        .van-icon {
          font-size: .5rem;
          color: #333;
          vertical-align: text-bottom;
        }
        &:last-child {
          top: .08rem;
          left: 1.4rem;
        }
      }
    }
    .other-bot {
      margin-top: .2rem;
      display: flex;
      width: 2.03rem;
      height: .84rem;
      background-image: linear-gradient(180deg,#574E44 0,#0E0E0E 100%);
      border-top-left-radius: .42rem;
      border-bottom-left-radius: .42rem;
      overflow: hidden;
      animation: shake 1s linear 3;
      margin-left: .3rem;
      .van-icon-gem-o {
        margin-top: .16rem;
        margin-left: .13rem;
        margin-right: .1rem;
        font-size: .5rem;
        color: #F9E0C0;
      }
      .word {
        color: #F9E0C0;
        .line1 {
          font-size: .26rem;
          line-height: .5rem;
        }
        .line2 {
          font-size: .2rem;
          line-height: .3rem;
          .van-icon-passed {
            font-size: .16rem;
          }
        }
      }
    }
  }
}

@keyframes shake {
  50%, 0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(.13rem);
  }
  75% {
    transform: translateX(-.13rem);
  }
}
</style>
