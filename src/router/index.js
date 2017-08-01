import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/pages/Login'
import Main from '@/components/pages/Main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path:'/login',
      name:'Login',
      component:Login
    },{
      path:'/main',
      name:'Main',
      component:Main
    }
  ]
})
