<template>
  <div class="user-login">
    <div class="user-login-bg" :style="{'background-image':`url(${backgroundImage})`}"></div>
    <div class="content-wrapper">
      <h2 class="slogan"> 欢迎来到 <br /> Vue 学习系统 </h2>

      <div class="form-container">
        <h2 class="form-title">登录</h2>
        <el-form ref="form"  :model="user" label-width="0">
            <el-form-item prop="username">
                <span class="svg-container svg-container_login">账号：</span>   <el-input name="username" v-model="user.username" type="text"  autoComplete="on" placeholder="请输入账号" />
            </el-form-item>

            <el-form-item prop="password">
                <span class="svg-container">密码：</span>   <el-input type='password'  @keyup.enter.native="handleLogin"  name="password"  v-model="user.password" autoComplete="on" placeholder="请输入密码"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="success" class="submit-btn" size="small" @click="handleLogin"> 登 录</el-button>    <!--<a href="/" class="link"> 可以直接跳转 </a>-->
            </el-form-item>
        </el-form>

      </div>
    </div>
  </div>
</template>

<script>
import BasicContainer from '@vue-materials/basic-container';
const backgroundImage =  'https://img.alicdn.com/tfs/TB1zsNhXTtYBeNjy1XdXXXXyVXa-2252-1500.png';

export default {
  components: { BasicContainer },
  name: 'UserLogin',

  data() {
    return {
      backgroundImage: backgroundImage,
      user: {  username: '',password: ''},
    };
  },


  methods: {
      handleLogin() {
          console.log(this.user,'login');
          this.$axios('http://127.0.0.1:8063/login', this.user).then(function (res) {
                  console.log(res);
              }).catch(function (error) { console.log(error);});

    },
  },
};
</script>

<style lang="scss" scoped>
@import './UserLogin.scss';
</style>
