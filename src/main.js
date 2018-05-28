import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css';
import './styles/index.scss';
import App from './App.vue';
import router from './router.js';

import store from './store' // 1.sos 引入 vuex 模块
import './utils/VeeValidate'

import axios from 'axios'
Vue.prototype.$axios = axios // SOS 给vue原型挂载一个属性 这样一来 就可以全局使用了 this.$axios

import moment from "moment";
Vue.prototype.$moment = moment //


Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
    router,
    store,  // 2.sos 引入 vuex 模块
    render: h => h(App),
}).$mount('#app');
// router.push({ path: '/login' })