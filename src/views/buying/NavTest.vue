<template>
  <div class="nav">
    <div class="swiper-title">
      <img src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png" class="u-title">
      <div class="u-text">严选好物&nbsp;用心生活</div>
      <img src="https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png" class="u-bg">
    </div>
    <div class="swiper">
      <div class="swiper-container my-swiper" ref="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="item" style="background: red"></div>
          </div>
          <div class="swiper-slide">
            <div class="item" style="background: red"></div>
          </div>
          <div class="swiper-slide">
            <div class="item" style="background: red"></div>
          </div>
          <div class="swiper-slide">
            <div class="item" style="background: red"></div>
          </div>
          <div class="swiper-slide">
            <div class="item" style="background: red"></div>
          </div>
          <div class="swiper-slide">
            <div class="item" style="background: red"></div>
          </div>
        </div>
        <!-- Add Scrollbar -->
        <div class="swiper-scrollbar" ref="scrollbar"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
// import axios from 'axios'
import 'swiper/swiper-bundle.css'

export default {
  data () {
    return {
      swiperData: []
    }
  },
  methods: {
    init () {
      this.swiper = new Swiper(this.$refs.swiper, {
        slidesPerView: 4,
        spaceBetween: 30,
        scrollbar: {
          el: this.$refs.scrollbar
        }
      })
    }
  },
  created () {
    // 发送ajax请求，获取数据
    /* axios.get('/getData/topic/v1/know/navWap.json')
      .then(res => {
        this.swiperData = res.data.data.navList
        this.$nextTick(() => {
          this.init()
        })
      })
      .catch(err => {
        console.log(err)
      }) */
  },
  computed: {
    list () {
      var newArr = []
      var i = -1
      this.swiperData.forEach((item, index) => {
        if (index % 2 === 0) {
          i++
          newArr[i] = []
        }
        newArr[i].push(item)
      })
      return newArr
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="less" scoped>
.nav {
  position: relative;
  padding-top: 1.45rem;
  background: #eee;
  .swiper-title {
    position: absolute;
    top: 0;
    .u-title {
      position: absolute;
      width: 1.3rem;
      height: auto;
      top: .6rem;
      left: .12rem;
    }
    .u-text {
      font-size: .3rem;
      line-height: .44rem;
      height: .44rem;
      position: absolute;
      font-family: 'PingFangSC-Regular';
      left: 1.46rem;
      top: .79rem;
      color: #FFF;
    }
    .u-bg {
      width: 7.5rem;
      height: auto;
    }
  }
  .swiper {
    position: relative;
    width: 7.1rem;
    background: #fff;
    border-radius: 0.16rem;
    margin: 0 auto;
    .my-swiper {
      height: 5.4rem;
      background: #FFF;
      border-radius: .16rem;
      .swiper-wrapper {
        .swiper-slide {
          .item {
            width: 100%;
            height: 5.4rem;
          }
        }
      }
    }
  }
}
</style>
