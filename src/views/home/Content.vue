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
            <div class="r-top">
              <div class="cnt">
                <div class="cnt-title">福利社</div>
                <div class="subTitle">今日特价</div>
              </div>
              <img src="https://yanxuan-item.nosdn.127.net/ac0c99a7494504ef506de1bb03bbacc7.png">
              <div class="discount">
                <div class="line1">¥88</div>
                <div class="line2">¥99</div>
              </div>
            </div>
            <div class="r-bot">
              <div class="cnt">
                <div class="cnt-title">新人拼团</div>
                <div class="subTitle"></div>
                <div class="tag">1元起包邮</div>
              </div>
              <img src="https://yanxuan-item.nosdn.127.net/5cf6ae7b82cce67ef3b3216cd3689632.png">
              <div class="discount">
                <div class="line1">¥169</div>
                <div class="line2">¥199</div>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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
          .r-top,
          .r-bot {
            width: 3.43rem;
            height: 2.15rem;
            padding: 0.2rem 0 0 0.3rem;
            position: relative;
          }
          .r-top {
            background: #fbe2d3;
            margin-bottom: .04rem;
          }
          .r-bot {
            background: #ffecc2;
          }
          .cnt {
            .subTitle {
              font-size: .24rem;
              color: #7f7f7f;
            }
            .tag {
              color: #fff;
              font-size: .21rem;
              background: #cbb693;
              width: 1.2rem;
              height: 0.32rem;
              text-align: center;
              border-radius: 2px;
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
    }
  }
}
</style>
