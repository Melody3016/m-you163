<template>
  <div class="content">
    <div class="box" ref="box">
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
        <div class="group"
          v-for="(groupItem, cIndex) in categoryGroupList"
          :key="cIndex"
        >
          <div class="title" v-if="groupItem.name">{{ groupItem.name }}</div>
          <!--三级分类-->
          <div class="list">
            <div class="item"
            v-for="(item, index) in groupItem.categoryList"
            :key="index"
          >
              <img :src="item.wapBannerUrl" alt="" v-lazy="item.wapBannerUrl">
              <div class="txt">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem, Lazyload } from 'vant'

Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
export default {
  data () {
    return {
      bannerList: [],
      categoryGroupList: []
    }
  },
  props: ['list'],
  watch: {
    list (val) {
      this.bannerList = val.currentCategory.bannerList
      this.categoryGroupList = val.categoryGroupList
      this.$refs.box.scrollTop = 0
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  flex: 1;
  height: 100%;
  padding: .3rem .28rem .2rem;
  border-left: 1px solid #ccc;
  margin-left: 1.62rem;
  .box {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
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
      .title {
        font-size: .28rem;
        font-weight: bold;
        border-bottom: 1px solid #eee;
        line-height: .5rem;
        margin-bottom: .2rem;
      }
      .list {
        display: flex;
        flex-wrap: wrap;
        .item {
          width: 1.44rem;
          height: 2.16rem;
          margin-right: .27rem;
          margin-bottom: .1rem;
          img {
            width: 1.44rem;
            height: 1.44rem;
          }
          .txt {
            font-size: .24rem;
            text-align: center;
          }
          &:nth-child(3n){
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>

<style lang="less">
.van-swipe {
  transform: translateZ(0);
  .van-swipe__indicator {
    width: 0.4rem;
    height: 0.04rem;
    background-color: #fff;
    opacity: .4;
    border-radius: 0;
  }
  .van-swipe__indicator--active {
    opacity: 1;
  }
}
</style>
