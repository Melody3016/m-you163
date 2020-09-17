<template>
  <div class="header">
    <div class="h-top">
      <h1>网易严选</h1>
      <div class="search"
        :class="loginState?'':'login'"
        @click="searchHandle"
      >
        <van-icon name="search" />
        <span>搜索商品, 共37046款好物</span>
      </div>
      <div class="loginBtn" @click="loginHandle" v-if="loginState">登录</div>
    </div>
    <div class="h-nav">
      <div class="navs">
        <div class="wrapper" ref="wrapper">
          <ul class="content">
            <li
              v-for="(item, index) in navs"
              :key="index"
              :class="showIndex === index ? 'active' : ''"
              @click="liClickHandle(index,$event)"
            >{{item}}</li>
          </ul>
        </div>
        <p @click="clickDown">
          <van-icon :class="toggleRotate?'rotate':''" name="arrow-down" />
        </p>
      </div>
    </div>
    <van-popup duration="0" :overlay-style="{'top':'0.89rem'}" v-model="toggleRotate" position="top" :style="{ height: '30%' }">
      <h2>全部频道</h2>
      <div class="popup-list">
        <div class="item"
          v-for="(item, index) in navs"
          :key="index"
          :class="showIndex === index ? 'active' : ''"
          >{{ item }}</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Vue from 'vue'
import { Icon, Popup } from 'vant'
import BScroll from 'better-scroll'

Vue.use(Popup)
Vue.use(Icon)
export default {
  data () {
    return {
      navs: ['推荐', '居家生活', '服饰鞋包', '美食酒水', '个护清洁', '母婴亲子', '运动旅行', '数码家电', '严选全球'],
      showIndex: 0,
      toggleRotate: false
    }
  },
  methods: {
    liClickHandle (index, e) {
      this.showIndex = index
      this.scroll.scrollToElement(e.target, 0, 0)
    },
    clickDown () {
      this.toggleRotate = !this.toggleRotate
    },
    searchHandle () {
      this.$router.push('/search')
    },
    loginHandle () {
      this.$router.push('/login')
    }
  },
  computed: {
    loginState () {
      return !(localStorage.getItem('loginInfo') === 'success')
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      scrollX: true // 沿着x轴滚动
    })
  }
}
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 7.5rem;
  z-index: 9;
  background-color: #fff;
  .h-top {
    height: .88rem;
    display: flex;
    // justify-content: space-between;
    align-items: center;
    padding: .16rem .3rem;
    h1 {
      font-size: 0.32rem;
    }
    .search {
      background-color: #ededed;
      font-size: .28rem;
      color: #666;
      padding: .08rem .46rem;
      border-radius: 4px;
      margin-left: .3rem;
      margin-right: .1rem;
      .van-icon-search {
        font-size: .36rem;
        vertical-align: bottom;
      }
      &.login {
        padding: .08rem .76rem;
      }
    }
    .loginBtn {
      width: .72rem;
      height: .38rem;
      line-height: .38rem;
      text-align: center;
      color: #dd1a21;
      border: 1px solid #dd1a21;
      border-radius: 4px;
      font-size: .24rem;
    }
  }
  .h-nav {
    position: relative;
    .navs {
      overflow: hidden;
      padding-left: 0.4rem;
      .wrapper {
        width: 6.5rem;
        height: 0.6rem;
        .content {
          width: 240%;
          height: 0.6rem;
          display: flex;
          li {
            padding: 0 0.16rem;
            margin-right: .24rem;
            line-height: 0.6rem;
            font-size: 0.28rem;
            color: #333;
          }
          li.active {
            border-bottom: 0.04rem solid #dd1a21;
            color: #dd1a21;
          }
        }
      }
      p {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 9999;
        width: 1rem;
        height: 0.6rem;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #999;
        i {
          transition: all .3s;
          z-index: 9999;
        }
        .rotate {
          transform: rotate(180deg);
        }
      }
    }
  }
  .van-popup--top {
    top: 0.88rem;
  }
  h2 {
    padding-left: .3rem;
    font-size: .28rem;
    color: #333;
    margin-top: .1rem;
  }
  .popup-list {
    padding: .3rem .3rem 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .item {
      width: 1.48rem;
      height: .54rem;
      line-height: .54rem;
      text-align: center;
      float: left;
      margin-bottom: .4rem;
      background: #fafafa;
      border: 1px solid #ccc;
      border-radius: .04rem;
      font-size: .24rem;
      color: #333;
      &.active {
        border: 1px solid #dd1a21;
        color: #dd1a21;
      }
    }
  }
}
</style>
