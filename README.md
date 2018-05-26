# Admin Lite
> 该模板适用于从 0 到 1 开始搭建项目，内置基础的页面，路由和菜单展示。


 - cnpm i 后  如果提示：no such file or directory  xxxx \node_modules\node-sass\vendor
 那么请  cnpm install --save-dev node-sass   貌似阿里的一个bug  node-sass 初始化的时候 安装不上

 - 1.menuConfig.js
   { path: '/test',name: '测试页', },  // sos 1. 这里加入 新增页面信息
 - 2.routerConfig.js
    import Test from './pages/Test/Test.vue';  // sos 2. 这里加入 新增页面信息
 - 3.routerConfig.js
    { path: '/dashboard/test',layout: HeaderAsideLayout,component: Test,},  // sos 3. 这里加入 新增页面信息