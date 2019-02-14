import Vue from 'vue'
import Router from 'vue-router'
import Layout from './../views/Layout.vue';
import LiveRoomManage from './../views/LiveRoomManage.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/',
          component: LiveRoomManage
        },
      ]
    }
  ]
})
