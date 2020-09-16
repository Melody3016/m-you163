<template>
  <div class="login">
    <login-header>网易严选</login-header>
    <div class="logoWrap">
      <img src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png">
    </div>
    <div class="btns">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="username"
          placeholder="请输入用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-button type="primary" block color="#DD1A21" native-type="submit">
          登录
        </van-button>
      </van-form>
    </div>
  </div>
</template>

<script>
import LoginHeader from '@/components/Header'
import Vue from 'vue'
import { Form, Field, Button, Toast } from 'vant'

Vue.use(Form)
Vue.use(Field)
Vue.use(Button)
Vue.use(Toast)
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
      // 提示信息
      Toast.loading({
        message: '登录中...',
        forbidClick: true,
        onClose: () => {
          console.log(111)
          // 添加登录信息
          localStorage.setItem('loginInfo', 'success')
          this.$router.push('/home')
          Toast.success('登录成功')
        }
      })
    }
  },
  components: {
    LoginHeader
  }
}
</script>

<style lang="less" scoped>
.login {
  padding-top: 1rem;
  position: relative;
  height: 100vh;
  background: #fff;
  .logoWrap {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    img {
      width: 2.68rem;
      height: .9rem;
      margin: 0 auto;
    }
  }
  .btns {
    padding: 0 .4rem;
    .van-cell{
      &:nth-of-type(2) {
        margin-top: .4rem;
        margin-bottom: .4rem;
      }
    }
  }
}
</style>
