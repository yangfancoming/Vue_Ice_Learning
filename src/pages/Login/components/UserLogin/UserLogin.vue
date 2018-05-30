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
import {postRequest} from '../../../../utils/request.js'
import ElButton from "../../../../../node_modules/element-ui/packages/button/src/button";
export default {

  components: {
      ElButton,
      BasicContainer },
  name: 'UserLogin',
    created(){
        this.handleLogin();
    },
  data() {
    return {
      backgroundImage: backgroundImage,
      user: {  username: '',password: ''},

    };
  },

//    http://127.0.0.1:9966/api/auth/login
  methods: {
      handleLogin() {
//          var _this = this;
//          postRequest('/api/auth/login', {
//              username: this.user.username,
//              password: this.user.password
//          }).then(resp=> {
//              _this.loading = false;
//              if (resp.status == 200) {
//                  //成功
//                  var json = resp.data;
//                  if (json.status == 'success') {
//                      _this.$router.replace({path: '/home'});
//                  } else {
//                      _this.$alert('登录失败!', '失败!');
//                  }
//              } else {
//                  //失败
//                  _this.$alert('登录失败!', '失败!');
//              }
//          }, resp=> {
//              _this.loading = false;
//              _this.$alert('找不到服务器⊙﹏⊙∥!', '失败!');
//          });
//          console.log(this.user,'1111111');
//          this.user.username = 'guest';
//          this.user.password = '123456';
////          this.$axios.post('/login', this.user).then(function (res) {
////          this.$axios.post('/api/sys_user/queryList', this.user).then(function (res) {
////                  console.log(res);
////              }).catch(function (error) { console.log(error);});
////          this.$axios.post('/hello',this.user).then(  // sos 全局引用 方法 在main.js中 加入import axios from 'axios' 和 Vue.prototype.$ajax = axios
          this.$axios.post('/api/auth/login', this.user).then(  // sos 全局引用 方法 在main.js中 加入import axios from 'axios' 和 Vue.prototype.$ajax = axios
              (res) => { console.log(res.data,'请求成功');this.tableData = res.data;},
              (err)=>  { console.log(err,'请求失败');});
    },

//      getuser(){
//          this.$axios.post('/api/sys_user/queryList',this.listQuery).then(  // sos 全局引用 方法 在main.js中 加入import axios from 'axios' 和 Vue.prototype.$ajax = axios
//              (res) => { console.log(res.data,'请求成功');this.tableData = res.data;},
//              (err)=>  { console.log(err,'请求失败');});
//      },
  },
};
</script>

<style lang="scss" scoped>
@import './UserLogin.scss';
</style>
