# Admin Lite
> 前言：正式当一名程序员已经快两年了，涉及的领域比较杂，
bootstrap easyui ssm 等前后端项目，
C#做PC端上位机，
andriod studio 做安卓原生应用，
weex 混合式开发，
AutoCAD Excel Word 等办公软件的二次开发等等。
在学习的过程中 遇到很多的问题 都是靠 baidu google GitHub 等查找解决方法。很感谢那些乐于分享的小伙伴们。
最近在学习 vue 和 springboot 因此 把自己学习中 遇到的坑和经验总结 在这里分享给大家，希望能够帮到一起学习的小伙伴们。
因为我也是新手，文档和项目中 如果不合理或错误的地方 希望大神不吝指教，万分感谢！

> 该项目使用阿里的 icework模板生成工具 从 0 到 1 开始搭建项目，内置基础的页面，路由和菜单展示。
   并详细讲解 各个插件和自定义页面的引入和使用。以便学习vue的小伙伴能够快速的搭建 vue 后台管理系统。

> cnpm i 后  如果提示：no such file or directory  xxxx \node_modules\node-sass\vendor
 那么请  cnpm install --save-dev node-sass   貌似阿里的一个bug  node-sass 初始化的时候 安装不上
 
 
## 项目截图
          (http://github.com/yourname/your-repository/raw/master/images-folder/xxx.png)
   ![image](https://github.com/yangfancoming/Vue_Ice_Learning/raw/master/Screenshots/all1.png)
   ![image](https://github.com/yangfancoming/Vue_Ice_Learning/raw/master/Screenshots/all_add.png)

   ##  技术栈: (未完待续)
       # 前端：vue.js 2.5 + element-UI + jsonserver + mock.js
         1.采用 Vue-Video-Player 视频播放插件
         2.采用 audio 音频播放插件
         3.采用 谷歌 guava Java核心库
         3.采用 vee-validate 对前台表单数据 进行校检
       # 后端：springboot + Mybatis + SpringSecurity
         1.采用 easypoi 插件 对表格进行导入导出 
         2.采用 Hibernate Validator 插件 对Excel导入数据 进行校检
         3.采用 Mybatis 分页插件 PageHelper


  ##  引入登录页面:
    # 由于 使用阿里的icework生成的项目 并没有登录页 所以我们需要引入登录页面
    # 1.routerConfig.js 文件中  
    import Login from './pages/Login/Login.vue';  // sos 2. 这里加入 登录页面
    # 2.routerConfig.js 文件中
    { path: '/login',layout: Login,component: Login,},// sos 注意这里加入 login登录页面的 方式！

  ##  引入新增页面:
    # 1.menuConfig.js 文件中 
     { path: '/test',name: '测试页', },  // sos 1. 这里加入 新增页面信息
    # 2.routerConfig.js 文件中  
    import Test from './pages/Test/Test.vue';  // sos 2. 这里加入 新增页面
    # 3.routerConfig.js 文件中
    { path: '/dashboard/test',layout: HeaderAsideLayout,component: Test,},  // sos 3. 这里加入 新增页面信息
    
  ##  引入异常信息页面 (基本异常页面、404页面、无授权页面、空页面):
    # 和以上引入方式相同 这里不再赘述

  ##  引入 Vuex
    # 1. 在 main.js 入口文件中   加入  import store from './store' // 1.sos 引入 vuex 模块
    # 2. 在 main.js 入口文件  new Vue({
            router,
            store,  // 2.sos 引入 vuex 模块
            render: h => h(App),
        }).$mount('#app');
    # 3. 在 xxx.vue 文件中  即 可以 通过 {{ $store.state.count }} 使用
  ##  引入 vee_validate 插件
    # 1. 安装vee_validate 插件  cnpm install vee-validate --save
    # 2. 在main.js文件中  加入 import './veevalidate/Validate' 
    # 3. 在对应路径下 加入 Validate.js 文件  文件内容 参考源码
    # 4. 这里有一个大坑，由于   vee_validate 版本更新  网络上很多方法 不再适用  新版本的 需要额外引入vue-i18n  
    # 5. cnpm install vue-i18n
  ##  引入 moment 插件
    # 1. cnpm install --save moment
    # 2. 在 main.js 文件中  import moment from "moment"; Vue.prototype.$moment = moment 在vue原型上进行挂载
    # 3. 在 xxx.vue 文件中  通过 this.$moment 方式 使用 eg: this.$moment(date).format("YYYY-MM-DD");

  ##  引入 axios 
    # 引入方法 和 moment插件 一模一样 不再赘述，可以参见 项目中源码   
      
  ##  引入 mock数据  json-server
          1.引入两个依赖： "json-server": "^0.12.1",  "underscore": "^1.8.3"
          2.建立mock文件夹 其内容 参考 项目中的 json文件 和 server.js文件
          3.在 package.json 文件中 加入 "mock": "node mock/server.js", 在命令行 输入 npm run mock 命令 即可开启 jsonserver 服务
          4.服务开启后 在浏览器中 输入 http://127.0.0.1:9090/db 可以看到 本地json文件中的数据 正常响应。
          ps： http://127.0.0.1:9090/json文件名  可以直接访问 文件中的数据。(此配置 支持多个json文件)
          
   ##  配置请求接口代理(Vue-cli 3.0 配置方法) 
          由于 icework 生成的项目 使用的是  Vue-cli 3.0 在项目中 你再也看不到config、build等目录
          在 vue.config.js 文件中 写入 如下配置
          
   ![image](https://github.com/yangfancoming/Vue_Ice_Learning/raw/master/Screenshots/2.png)
   
   ```
  #新版 Vue-cli 3.0 的详细配置说明 请参考 尤大 GitHub  [Vue-cli 3.0 配置](https://github.com/vuejs/vue-cli/blob/dev/docs/config.md)
   ```
  ##  使用 谷歌的 postman 测试api请求接口 
        get 请求：
   ![image](https://github.com/yangfancoming/Vue_Ice_Learning/raw/master/Screenshots/all_get.png)
   
        post 请求：
   ![image](https://github.com/yangfancoming/Vue_Ice_Learning/raw/master/Screenshots/all_post.png)   
   
         patch 请求：
   ![image](https://github.com/yangfancoming/Vue_Ice_Learning/raw/master/Screenshots/all_patch.png)      
   
         delete 请求：
   ![image](https://github.com/yangfancoming/Vue_Ice_Learning/raw/master/Screenshots/all_delete.png)   
  ##  封装很多页面 都要用到的 新增弹框和编辑弹框 将其拆分成组件的形式  然后使用:vuex统一管理 弹框的显示和隐藏
    # 1. list页面的新增按钮加入 @click="$store.state.dialog_store.show=true"   表示显示 新增弹框
    # 2. add 对话框页面 中  确定和取消按钮中 加入   @click="$store.state.dialog_store.show=false" 来控制弹框的隐藏
    # 3. add 对话框页面 中  右上角关闭按钮中  加入  @click="$store.state.dialog_store.show=false" 来控制弹框的隐藏
    # 4. add 对话框页面 中 加入 :visible.sync="show_state" 绑定 store 中dialog_store模块中的显示状态 来控制弹框的显示
          使用 mapGetters 来获取 dialog_store 中的show属性   
          import { mapGetters } from 'vuex' 
          computed: mapGetters([ 'show_state' ]), 为此属性 添加 watch 监视弹框的 显示和隐藏动作
          显示：  清空新增框 中的所有内容 防止记录上次内容
          隐藏：  隐藏新增框 时 清除校检信息 防止记录上次的校检信息

  ##  联系我
   ![image](https://github.com/yangfancoming/Vue_Ice_Learning/raw/master/Screenshots/me.png)
        

