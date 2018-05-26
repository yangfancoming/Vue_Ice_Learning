import Vue from 'vue'
import Vuex from 'vuex'
// import app from './modules/app'
// import user from './modules/user'
import dialog_store from './modules/dialog_store'
// import getters from './getters'

Vue.use(Vuex)

const store1 = new Vuex.Store({

  state:{ show:false, count:2, }, // 存放状态
  // getters ,// state的计算属性

// 更改state中状态的逻辑，同步操作
    mutations:{  // mutations 存在意义 就在于 更改 state中的属性值 类似于  get set方法
    add(state,n){state.count+=  n;}, // 第一个参数是默认的  第二个是手动传参
    reduce(state){state.count--;}
    },
  actions: {
    // 提交mutation，异步操作  sos context 是 state 的父级，包含  state、getters
  },
  // modules: { app , user ,dialog_store},
  modules: { dialog_store},
})

export default store1
/**

 sos 如果将store分成一个个的模块的话，则需要用到modules。然后在每一个module中写state, getters, mutations, actions等。
 modules: {
        a: moduleA,
        b: moduleB,
        // ...
    }
 * */
