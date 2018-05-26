# Admin Lite
> 该模板适用于从 0 到 1 开始搭建项目，内置基础的页面，路由和菜单展示。
> cnpm i 后  如果提示：no such file or directory  xxxx \node_modules\node-sass\vendor
 那么请  cnpm install --save-dev node-sass   貌似阿里的一个bug  node-sass 初始化的时候 安装不上
 
  ##  引入新增页面方法:
    # 1.menuConfig.js 文件中 
     { path: '/test',name: '测试页', },  // sos 1. 这里加入 新增页面信息
    # 2.routerConfig.js 文件中  
    import Test from './pages/Test/Test.vue';  // sos 2. 这里加入 新增页面信息
    # 3.routerConfig.js 文件中
    { path: '/dashboard/test',layout: HeaderAsideLayout,component: Test,},  // sos 3. 这里加入 新增页面信息
    
  ##  引入 Vuex
    # 1. 在 main.js 入口文件中   加入  import store from './store' // 1.sos 引入 vuex 模块
    # 2. 在 main.js 入口文件  new Vue({
            router,
            store,  // 2.sos 引入 vuex 模块
            render: h => h(App),
        }).$mount('#app');
    # 3. 在 xxx.vue 文件中  即 可以 通过 {{ $store.state.count }} 使用
        

