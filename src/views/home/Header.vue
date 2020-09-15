<template>
  <div class="header">
    <div class="h-top">
      <h1>网易严选</h1>
      <div class="search">
        <van-icon name="search" />
        <span>搜索商品, 共37046款好物</span>
      </div>
      <div class="loginBtn">登录</div>
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
  </div>
</template>

<script>
import Vue from 'vue'
import { Icon } from 'vant'
import BScroll from 'better-scroll'

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
    justify-content: space-between;
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
      .van-icon-search {
        font-size: .36rem;
        vertical-align: bottom;
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
        }
        .rotate {
          transform: rotate(180deg);
        }
      }
    }
  }
}
</style>
