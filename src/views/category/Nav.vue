<template>
  <div class="container">
    <div class="nav-bar">
      <ul class="cateNavVert">
        <li class="item"
          v-for="(item, index) in navList"
          :key="index"
          :class="activeIndex === index ? 'active' : ''"
          @click="clickHandle(index, item.id)"
        >{{ item.name }}</li>
      </ul>
    </div>
    <cate-con :list="contentData" />
  </div>
</template>

<script>
import axios from 'axios'
import CateCon from './Content'

export default {
  data () {
    return {
      navList: [],
      activeIndex: 0,
      contentData: ''
    }
  },
  methods: {
    clickHandle (index, id) {
      this.activeIndex = index
      // 根据id发送ajax请求
      axios.get('getData/item/cateList.json?__timestamp=1600138418696', {
        params: {
          categoryId: id
        }
      })
        .then((res) => {
          this.contentData = res.data.data
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  created () {
    axios.get('getData/item/cateList.json?__timestamp=1600138418696&categoryId=')
      .then((res) => {
        this.navList = res.data.data.categoryL1List
        this.contentData = res.data.data
      })
      .catch((err) => {
        console.log(err)
      })
  },
  components: {
    CateCon
  }
}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  overflow: auto;
  .nav-bar {
    width: 1.62rem;
    height: 1130px;
    border-right: 1px solid #ccc;
    .cateNavVert {
      padding: .4rem 0;
      position: relative;
      .item {
        height: 0.5rem;
        text-align: center;
        width: 100%;
        font-size: .3rem;
        line-height: .5rem;
        &.active {
          position: relative;
          color: #ab2b2b;
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: .06rem;
            background-color: #ab2b2b;
          }
        }
      }
      .item+.item {
        margin-top: .4rem;
      }
    }
  }
}
</style>
