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
          <div class="swiper-slide"
            v-for="(items, index) in list"
            :key="index"
          >
            <div class="u-group">
              <a href="javascript:;" class="u-item"
                v-for="(item, index) in items"
                :key="index"
              >
                <div class="m-topContainer">
                  <img :src="item.picUrl" class="u-topPic">
                </div>
                <div class="m-detail">
                  <div class="u-mainText">{{ item.mainTitle }}</div>
                  <div class="u-descText">{{ item.viceTitle }}</div>
                </div>
              </a>
            </div>
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
import axios from 'axios'
import 'swiper/css/swiper.css'

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
        spaceBetween: 5,
        scrollbar: {
          el: this.$refs.scrollbar,
          dragSize: 20
        }
      })
      this.swiper.scrollbar.$dragEl.css('background', '#DD1A21')
    }
  },
  created () {
    // 发送ajax请求，获取数据
    axios.get('/getData/topic/v1/know/navWap.json')
      .then(res => {
        this.swiperData = res.data.data.navList
        this.$nextTick(() => {
          this.init()
        })
      })
      .catch(err => {
        console.log(err)
      })
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
        height: 5.4rem;
        .swiper-slide {
          width: 88.75px;
          .u-group {
            padding: .06rem;
            width: 1.68rem;
            height: 4.28rem;
            padding-top: .36rem;
            .u-item {
              display: inline-block;
              position: relative;
              width: 1.68rem;
              height: 2.01rem;
              word-wrap: break-word;
              word-break: normal;
              &:last-child {
                margin-top: .3rem;
              }
              .m-topContainer {
                position: relative;
                width: 1.2rem;
                height: 1.2rem;
                margin: 0 auto;
                .u-topPic {
                  width: 1.2rem;
                  height: 1.2rem;
                }
              }
              .m-detail {
                width: 1.68rem;
                margin-top: 0.08rem;
                .u-mainText {
                  font-family: 'PingFang-SC-Bold';
                  font-weight: bold;
                  font-size: .28rem;
                  width: 1.68rem;
                  height: .4rem;
                  white-space: nowrap;
                  overflow: hidden;
                  color: #333333;
                  text-align: center;
                  line-height: .4rem;
                }
                .u-descText {
                  width: 1.68rem;
                  margin-top: .02rem;
                  font-family: 'PingFangSC-Regular';
                  font-size: .2rem;
                  color: #999999;
                  text-align: center;
                  height: .3rem;
                  line-height: .3rem;
                  white-space: nowrap;
                  overflow: hidden;
                }
              }
            }
          }
        }
      }
      .swiper-scrollbar {
        height: 0.03rem;
        width: 2rem;
        left: 50%;
        bottom: .25rem;
        transform: translateX(-50%);
      }
    }
  }
}
</style>
