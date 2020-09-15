<template>
  <div class="classify">
    <!--servicePolicy-->
    <div class="servicePolicy">
      <a>
        <van-icon name="passed" />
        <span class="txt">网易自营品牌</span>
      </a>
      <a>
        <van-icon name="passed" />
        <span class="txt">30天无忧退货</span>
      </a>
      <a>
        <van-icon name="passed" />
        <span class="txt">48小时快速退款</span>
      </a>
    </div>
    <!--kingKongModule-->
    <div class="kingKongModule">
      <div class="swiper-wrapper">
        <div class="s-item"
          v-for="(item, index) in itemList"
          :key="index"
        >
          <img :src="item.picUrl" alt="">
          <span>{{ item.text }}</span>
        </div>
      </div>
    </div>
    <!--indexBigPromotionModule-->
    <div class="indexBigPromotionModule">
      <div class="floorTop">
        <img :src="floorTop" alt="">
      </div>
      <div class="floorBottom">
        <a
          v-for="(item, index) in floorBottom"
          :key="index"
        >
          <img :src="item.picUrl" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      itemList: [],
      floorTop: '',
      floorBottom: []
    }
  },
  computed: {
    indexData () {
      return this.$store.state.indexData
    }
  },
  watch: {
    indexData (val) {
      this.itemList = val.kingKongModule.kingKongList
      this.floorTop = val.bigPromotionModule.floorList[0].cells[0].picUrl
      this.floorBottom = val.bigPromotionModule.floorList[1].cells
    }
  }
}
</script>

<style lang="less" scoped>
.classify {
  .servicePolicy {
    background-color: #fff;
    height: 0.72rem;
    padding: 0 .3rem;
    display: flex;
    align-items: center;
    &>a {
      flex: 1;
      margin-right: .2rem;
      .van-icon {
        font-size: .26rem;
        color: #dd1a21;
        vertical-align: text-bottom;
        margin-right: .08rem;
      }
      .txt {
        font-size: .24rem;
      }
    }
  }
  .kingKongModule {
    height: 3.72rem;
    background-color: #fff;
    .swiper-wrapper {
      height: 3.55rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-content: space-between;
      .s-item {
        margin: 0.1rem 0.2rem;
        width: 1.1rem;
        height: 1.54rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        img {
          width: 1.1rem;
          height: 1.1rem;
        }
        span {
          font-size: .24rem;
          color: #333;
        }
      }
    }
  }
  .indexBigPromotionModule {
    background-color: rgb(247, 180, 135);
    background-image: none;
    background-size: 100% 100%;
    height: 5.81rem;
    .floorTop {
      height: 3.21rem;
      img {
        height: 3.21rem;
      }
    }
    .floorBottom {
      width: 7.1rem;
      margin: .2rem;
      display: flex;
      justify-content: space-between;
      img {
        width: 2.3rem;
      }
    }
  }
}
</style>
