import router from './router'
import store from './store'
// import NProgress from 'nprogress' // Progress 进度条
// import 'nprogress/nprogress.css'// Progress 进度条样式
// import { Message } from 'element-ui'
// import { getToken } from '@/utils/auth' // 验权

const whiteList = ['/login','/404'] // 不重定向白名单
router.beforeEach((to, from, next) => {   /*在任意时刻 任意路由 发生变化，即将跳转之前执行*/
  // console.log(to,'beforeEach钩子 to');
  // console.log(from,'beforeEach钩子 from');
  // console.log(store.getters.token,'store.getters.token');
  // console.log(store.state.user.token,'store.state.user.token');
  var token = JSON.parse(localStorage.getItem('token'));
    // console.log(token,'token');
    // $store.state.user.token
  if (token) {
  // if (store.state.user.token) {
  //     console.log('检测到token 可以登录');
      if (to.path === '/login') {
          // console.log('beforeEach钩子 走咯' + to.path );
          next({ path: '/' }) // next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航
      }
      else {
          next();
          // if (store.getters.roles.length !== 0) {
          //     console.log('beforeEach钩子 没走成  需要 拉取用户信息' + to.path );
          //     store.dispatch('GetInfo').then(res => { // 拉取用户信息
          //         next()
          //     }).catch(() => {
          //         store.dispatch('FedLogOut').then(() => {   /*组件的methods中去提交action。只是提交actions的时候使用的是dispatch函数，而mutations则是用commit函数。*/
          //             Message.error('验证失败,请重新登录')
          //             next({ path: '/login' })
          //         })
          //     })
          // } else {
          //     next()
          // }
      }
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // SOS 如果  to.path 在白名单中 则不进行重定向 直接跳转过去
      // console.log('beforeEach钩子 222222'+ to.path );
      next()
    } else {  // SOS 如果  to.path 不在白名单中 则进行重定向 跳转到登录页
      // console.log('beforeEach钩子 3333333' );
      next('/login')
    }
  }
})

router.afterEach(() => {
})

