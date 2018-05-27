# Admin Lite
> 该模板适用于从 0 到 1 开始搭建项目，内置基础的页面，路由和菜单展示。

> cnpm i 后  如果提示：no such file or directory  xxxx \node_modules\node-sass\vendor
 那么请  cnpm install --save-dev node-sass   貌似阿里的一个bug  node-sass 初始化的时候 安装不上
 
 
## 项目截图
          (http://github.com/yourname/your-repository/raw/master/images-folder/xxx.png)


   ##  技术栈: (未完待续)
       # 前端：vue.js 2.5 + element-UI + jsonserver + mock.js
         1.采用 Vue-Video-Player 视频播放插件
         2.采用 audio 音频播放插件
         3.采用 谷歌 guava Java核心库
       # 后端：springboot + Mybatis + SpringSecurity
         1.采用 easypoi 插件 对表格进行导入导出 
         2.采用 Hibernate Validator 插件 对数据进行校检
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
  #新版 Vue-cli 3.0 的详细配置说明 请参考 尤大 GitHub 
   ```
   [Vue-cli 3.0 配置](https://github.com/vuejs/vue-cli/blob/dev/docs/config.md)   
   
   

       
 
  ##  联系我
   ![image](https://github.com/yangfancoming/Vue_Ice_Learning/raw/master/Screenshots/me.png)
        

