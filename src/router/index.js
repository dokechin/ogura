import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Setting from '@/components/Setting'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    }

  ]
})
