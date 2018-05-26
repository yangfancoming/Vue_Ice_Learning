# Admin Lite
> 该模板适用于从 0 到 1 开始搭建项目，内置基础的页面，路由和菜单展示。

> cnpm i 后  如果提示：no such file or directory  xxxx \node_modules\node-sass\vendor
 那么请  cnpm install --save-dev node-sass   貌似阿里的一个bug  node-sass 初始化的时候 安装不上
 
 
## 项目截图

![image](https://github.com/jwfl724168/Vue_Ice_Learning/tree/master/src/assets/1.png)


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
        

