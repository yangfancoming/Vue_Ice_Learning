import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css';
import './styles/index.scss';
import App from './App.vue';
import router from './router';

import store from './store' // 1.sos 引入 vuex 模块

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
    router,
    store,  // 2.sos 引入 vuex 模块
    render: h => h(App),
}).$mount('#app');
