<template>
  <div class="user-login">
    <div class="user-login-bg" :style="{'background-image':`url(${backgroundImage})`}"></div>
    <div class="content-wrapper">
      <h2 class="slogan"> 欢迎来到 <br /> Vue 学习系统 </h2>

      <div class="form-container">
        <h2 class="form-title">登录</h2>
        <el-form ref="form"  label-width="0">
            <el-form-item prop="username">
                <span class="svg-container svg-container_login"><svg-icon icon-class="user" /></span>
                <el-input name="username" type="text"  autoComplete="on" placeholder="username" />
            </el-form-item>

            <el-form-item prop="password">
                <span class="svg-container"><svg-icon icon-class="password"></svg-icon></span>
                <el-input name="password"  autoComplete="on" placeholder="password"></el-input>
                <span class="show-pwd" ><svg-icon icon-class="eye" /></span>
            </el-form-item>


            <el-form-item>
                <el-button type="primary" class="submit-btn" size="small" @click="submitBtn"> 登 录</el-button>    <!--<a href="/" class="link"> 可以直接跳转 </a>-->
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
      user: {  username: '',password: '',},
    };
  },


  methods: {
    submitBtn() {
        this.$router.push('/');
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.$message({
            message: '登录成功',
            type: 'success',
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import './UserLogin.scss';
</style>
