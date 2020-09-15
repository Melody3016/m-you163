<template>
  <div class="content">
    <!--轮播图-->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        v-for="(item, index) in bannerList" :key="index"
      >
        <img :src="item.picUrl" alt="">
      </van-swipe-item>
    </van-swipe>
    <!--二级分类-->
    <div class="secList">
      <div class="item"
        v-for="(item, index) in categoryL2List"
        :key="index"
      >
        <img :src="item.wapBannerUrl" alt="">
        <div class="txt">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'

Vue.use(Swipe)
Vue.use(SwipeItem)
export default {
  data () {
    return {
      bannerList: [],
      categoryL2List: []
    }
  },
  props: ['list'],
  watch: {
    list (val) {
      this.bannerList = val.currentCategory.bannerList
      this.categoryL2List = val.categoryL2List
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  width: 5.48rem;
  padding: .3rem .3rem .2rem;
  .my-swipe{
    width: 5.28rem;
    height: 1.92rem;
    margin-bottom: .32rem;
    .van-swipe-item {
      img {
        width: 5.28rem;
        height: 1.92rem;
      }
    }
  }
  .secList {
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 1.44rem;
      height: 2.16rem;
      margin-right: .28rem;
      img {
        width: 1.44rem;
        height: 1.44rem;
      }
      .txt {
        font-size: .26rem;
        text-align: center;
      }
      &:nth-child(3n){
        margin-right: 0;
      }
    }
  }
}
</style>
