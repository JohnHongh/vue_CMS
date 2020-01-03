import Vue from 'vue'
import Router from 'vue-router'
import { resolve } from 'url';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: resolve => require(['../components/Login/Login.vue'], resolve),
      name: 'Login'
    },
    {
        path: '*',
        redirect: '/404'
    },
  ]
})
