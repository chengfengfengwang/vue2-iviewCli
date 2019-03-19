import Vue from 'vue'
import Router from 'vue-router'

import Login from './../views/Login.vue';
import Layout from './../views/Layout.vue';
import LiveRoomManage from './../views/LiveRoomManage.vue';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          name: 'LiveRoomManage',
          path: '/',
          component: LiveRoomManage
        }
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    }
  ]
})
export default router