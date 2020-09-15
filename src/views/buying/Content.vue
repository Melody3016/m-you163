<template>
  <div class="content">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多数据了"
      @load="onLoad"
    >
      <div class="wrap">
      <!--左侧栏-->
        <div class="column">
          <div class="column-item"
            v-for="(item, index) in firList" :key="index"
          >
            <img :src="item.layoutType === 2 ? item.picUrl + '?imageView&thumbnail=345y345&quality=95' : item.picUrl + '?imageView&thumbnail=345y191.66666666666669&quality=95'" alt=""  :class="item.layoutType === 1 ? 'smallImg' : 'bigImg'">
            <p>{{ item.title }}</p>
            <div class="item-bot">
              <div class="info">
                <img :src="item.avatar" alt="">
                <span class="name">{{ item.nickname }}</span>
              </div>
              <div class="look">
                <!--icon-->
                <van-icon name="eye-o" />
                <span class="nums">{{ item.readCount }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="column-item"
            v-for="(item, index) in secList" :key="index"
          >
            <img :src="item.layoutType === 2 ? item.picUrl + '?imageView&thumbnail=345y345&quality=95' : item.picUrl + '?imageView&thumbnail=345y191.66666666666669&quality=95'" alt=""  :class="item.layoutType === 1 ? 'smallImg' : 'bigImg'">
            <p>{{ item.title }}</p>
            <div class="item-bot">
              <div class="info">
                <img :src="item.avatar" alt="">
                <span class="name">{{ item.nickname }}</span>
              </div>
              <div class="look">
                <!--icon-->
                <van-icon name="eye-o" />
                <span class="nums">{{ item.readCount }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--右侧栏-->
    </van-list>
  </div>
</template>

<script>
import Vue from 'vue'
import { List, Icon } from 'vant'
import axios from 'axios'

Vue.use(List)
Vue.use(Icon)
export default {
  data () {
    return {
      loading: false,
      finished: false,
      page: 1,
      firList: [],
      secList: [],
      allData: ''
    }
  },
  watch: {
    allData (val) {
      console.log(val)
      val.forEach(items => {
        // 再遍历item
        items.topics.forEach((item, index) => {
          // 判断index奇偶
          if (index % 2) {
            this.secList.push(item)
          } else {
            this.firList.push(item)
          }
        })
      })
    }
  },
  methods: {
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      /* setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false
        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000) */
      axios.get('getData/topic/v1/find/recAuto.json?size=5&exceptIds=', {
        params: {
          page: this.page++
        }
      })
        .then(res => {
          this.allData = res.data.data.result
          // 加载状态结束
          this.loading = false
          if (this.page === 3) {
            // 数据全部加载完成
            this.finished = true
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    axios.get('getData/topic/v1/find/recAuto.json?size=5&exceptIds=', {
      params: {
        page: this.page
      }
    })
      .then(res => {
        this.allData = res.data.data.result
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style lang="less" scoped>
.content {
  background-color: #eee;
  .wrap {
    width: 7.1rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding-top: 0.3rem;
    .column-item {
      width: 3.45rem;
      margin-bottom: .2rem;
      border-radius: .16rem;
      overflow: hidden;
      background-color: #fff;
      &>img {
        width: 3.45rem;
        &.smallImg {
          height: 1.91667rem;
        }
        &.bigImg {
          height: 3.45rem;
        }
      }
      &>p {
        width: 3.43rem;
        padding: .18rem .16rem 0;
        color: #333;
        font-size: .28rem;
        line-height: .4rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: 'PingFangSC-Regular';
        text-align: left;
      }
      .item-bot {
        display: flex;
        justify-content: space-between;
        padding: .17rem .16rem .24rem;
        .info {
          img {
            width: .48rem;
            height: .48rem;
            border-radius: .24rem;
            border: 1px solid #d9d9d9;
            display: inline-block;
            vertical-align: top;
          }
          .name {
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: .22rem;
            color: #7f7f7f;
            height: .48rem;
            line-height: .48rem;
            margin-left: .08rem;
          }
        }
        .look {
          .van-icon {
            width: .32rem;
            height: .32rem;
            vertical-align: bottom;
            color: #999;
          }
          .nums {
            font-size: .24rem;
            color: #7f7f7f;
            max-width: .9rem;
            height: .32rem;
            line-height: .32rem;
            margin-left: .02rem;
          }
        }
      }
    }
  }
}
</style>
