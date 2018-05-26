// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import HeaderAsideLayout from './layouts/HeaderAsideLayout';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

import Vuex from './pages/Vuex/Vuex.vue'; // sos 2. 这里加入 新增页面信息
import Todolist from './pages/TodoList/TodoList.vue';
import Login from './pages/Login/Login.vue';
import ExceptionPages from './pages/ExceptionPages/ExceptionPages.vue';

const routerConfig = [
    { path: '/login',layout: Login,component: Login,},// sos 注意这里加入 login登录页面的 方式！
    { path: '/exceptionpages',layout: HeaderAsideLayout,component: ExceptionPages,},
  {
    path: '/',layout: HeaderAsideLayout,component: Dashboard,
    children: [
      { path: '/dashboard/analysis',layout: HeaderAsideLayout,component: Dashboard, },
      { path: '/dashboard/todolist',layout: HeaderAsideLayout,component: Todolist,},
      { path: '/dashboard/vuex', layout: HeaderAsideLayout, component: Vuex }, // sos 3. 这里加入 新增页面信息
      { path: '/dashboard/workplace',layout: HeaderAsideLayout,component: NotFound,},
    ],
  },
  {
    path: '/table',
    layout: HeaderAsideLayout,
    component: NotFound,
    children: [
      { path: '/table/basic', layout: HeaderAsideLayout, component: NotFound },
      { path: '/table/fixed', layout: HeaderAsideLayout, component: NotFound },
    ],
  },
  {
    path: '/form',
    layout: HeaderAsideLayout,
    component: NotFound,
    children: [
      {
        path: '/form/basic',
        layout: HeaderAsideLayout,
        component: NotFound,
      },
      {
        path: '/form/signup',
        layout: HeaderAsideLayout,
        component: NotFound,
      },
    ],
  },
  {
    path: '/charts',
    layout: HeaderAsideLayout,
    component: NotFound,
    children: [
      {
        path: '/charts/line',
        layout: HeaderAsideLayout,
        component: NotFound,
      },
      {
        path: '/charts/histogram',
        layout: HeaderAsideLayout,
        component: NotFound,
      },
      {
        path: '/charts/bar',
        layout: HeaderAsideLayout,
        component: NotFound,
      },
    ],
  },
  {
    path: '/profile',
    layout: HeaderAsideLayout,
    component: NotFound,
    children: [
      {
        path: '/profile/success',
        layout: HeaderAsideLayout,
        component: NotFound,
      },
      {
        path: '/profile/fail',
        layout: HeaderAsideLayout,
        component: NotFound,
      },
    ],
  },
  {
    path: '/result',
    layout: HeaderAsideLayout,
    component: NotFound,
    children: [
      {
        path: '/result/success',
        layout: HeaderAsideLayout,
        component: NotFound,
      },
      {
        path: '/result/fail',
        layout: HeaderAsideLayout,
        component: NotFound,
      },
    ],
  },

    { path: '*',layout: HeaderAsideLayout,component: NotFound,},// sos  这里是有顺序的  不能放在最前面 否则 点击任何页面都是404

];

export default routerConfig;
