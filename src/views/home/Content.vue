<template>
  <div class="content">
    <div class="c-wrap">
      <div class="cw-1">
        <div class="title">
          <span class="txt">新人专享礼</span>
        </div>
        <div class="con">
          <div class="left">
            <h2>新人专享礼包</h2>
            <img src="https://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt="">
          </div>
          <div class="right">
            <div class="r-con"
              v-for="(item, index) in cw1List"
              :key="index"
            >
              <div class="cnt">
                <div class="cnt-title">{{ item.title }}</div>
                <div class="subTitle">{{ item.subTitle }}</div>
                <div class="tag"
                  :class="item.tag !== '' ? 'bg' : ''"
                >{{ item.tag }}</div>
              </div>
              <img :src="item.showPicUrl" v-lazy="item.showPicUrl">
              <div class="discount">
                <div class="line1">{{ item.activityPrice }}</div>
                <div class="line2">{{ item.originPrice }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="c-wrap">
      <div class="cw-2">
        <div class="title">
          类目热销榜
        </div>
        <div class="con">
          <div class="line1">
            <div class="item"
              v-for="(item, index) in categoryList.slice(0,2)" :key="index"
            >
              <div class="txt">{{ item.categoryName }}</div>
              <img :src="item.showPicUrl" alt="" v-lazy="item.showPicUrl">
            </div>
          </div>
          <div class="line2">
            <div class="item"
              v-for="(item, index) in categoryList.slice(2)" :key="index"
            >
              <div class="txt">{{ item.categoryName }}</div>
              <img :src="item.showPicUrl" alt="" v-lazy="item.showPicUrl">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--底部-->
    <div class="c-footer">
      <div class="f-btns">
        <span>下载APP</span>
        <span>电脑版</span>
      </div>
      <p class="copyright">网易公司版权所有 © 1997-2020<br>食品经营许可证：JY13301080111719</p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Lazyload } from 'vant'

Vue.use(Lazyload)
export default {
  data () {
    return {
      cw1List: [],
      categoryList: []
    }
  },
  computed: {
    indexData () {
      return this.$store.state.indexData
    }
  },
  watch: {
    indexData (val) {
      this.cw1List = val.indexActivityModule
      this.categoryList = val.categoryHotSellModule.categoryList
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  .c-wrap {
    margin-top: .2rem;
    .cw-1 {
      background-color: #fff;
      padding-bottom: .3rem;;
      .title {
        height: 0.9rem;
        line-height: .9rem;
        text-align: center;
        .txt {
          position: relative;
          &::before,
          &::after {
            position: absolute;
            content: '';
            width: 0.24rem;
            height: 0.03rem;
            background: #000;
            top: .16rem;
          }
          &::before {
            left: -.4rem;
          }
          &::after {
            left: 1.76rem;
          }
        }
      }
      .con {
        display: flex;
        justify-content: space-between;
        padding: 0 .3rem;
        .left {
          background: #f9e9cf;
          width: 3.43rem;
          height: 4.34rem;
          h2 {
            padding: .3rem 0 0 .3rem;
          }
          img {
            width: 2.58rem;
            height: 2.57rem;
            margin: 0.37rem 0.425rem;
          }
        }
        .right {
          .r-con {
            width: 3.43rem;
            height: 2.15rem;
            padding: 0.2rem 0 0 0.3rem;
            position: relative;
          }
          .r-con:first-child {
            background: #fbe2d3;
            margin-bottom: .04rem;
          }
          .r-con:last-child {
            background: #ffecc2;
          }
          .cnt {
            .subTitle {
              font-size: .24rem;
              color: #7f7f7f;
            }
            .tag {
              display: inline-block;
              color: #fff;
              font-size: .21rem;
              height: 0.32rem;
              text-align: center;
              border-radius: 2px;
              padding: 0 .1rem;
              &.bg {
                background: #cbb693;
              }
            }
          }
          img {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 2rem;
            height: 2rem;
          }
          .discount {
            position: absolute;
            width: 0.8rem;
            height: 0.8rem;
            border-radius: 50%;
            background: #f59524;
            padding-top: .18rem;
            color: #fff;
            text-align: center;
            opacity: .8;
            top: 0.1rem;
            right: .3rem;
            .line1 {
              font-size: .24rem;
            }
            .line2 {
              font-size: .2rem;
              text-decoration: line-through;
            }
          }
        }
      }
    }
    .cw-2 {
      background-color: #fff;
      padding: .3rem;
      padding-top: 0;
      .title {
        height: 0.9rem;
        line-height: .9rem;
      }
      .con {
        .line1,
        .line2 {
          display: flex;
          justify-content: space-between;
        }
        .line1 {
          .item {
            position: relative;
            width: 3.4rem;
            height: 2rem;
            border-radius: .04rem;
            img {
              position: absolute;
              right: 0;
              top: 0;
              width: 2rem;
              height: 2rem;
            }
            .txt {
              font-size: .28rem;
              color: #333;
              position: relative;
              margin-left: .3rem;
              margin-top: .7rem;
              &::before {
                content: '';
                position: absolute;
                left: 0;
                bottom: -.16rem;
                width: .48rem;
                height: .04rem;
                background: #333;
              }
            }
          }
          .item:first-child {
            background: #f9f3e4;
          }
          .item:last-child {
            background: #ebeff6;
          }
        }
        .line2 {
          flex-wrap: wrap;
          .item {
            border-radius: .04rem;
            background: #f5f5f5;
            width: 1.65rem;
            height: 1.8rem;
            text-align: center;
            margin-top: .1rem;
            .txt {
              font-size: .24rem;
              margin-top: .1rem;
            }
            img {
              width: 1.2rem;
              height: 1.2rem;
              margin: 0 auto;
            }
          }
        }
      }
    }
  }
  .c-footer {
    margin-top: .2rem;
    height: 2.45rem;
    background-color: #414141;
    padding: .54rem .2rem .28rem;
    .f-btns {
      text-align: center;
      margin-top: .12rem;
      span {
        width: 1.72rem;
        display: inline-block;
        height: 0.6rem;
        border: 1px solid #999;
        line-height: .6rem;
        color: #fff;
        border-radius: .04rem;
        font-size: .24rem;
      }
      span:first-child {
        margin-right: .5rem;
      }
    }
    .copyright {
      margin-top: .4rem;
      text-align: center;
      font-size: .24rem;
      line-height: .3rem;
      color: #999;
    }
  }
}
</style>
