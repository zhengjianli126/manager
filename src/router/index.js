import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
      // 重定向
    },{
      path:'/login',
      name:'Login',
      component:resolve => require(['../components/pages/Login.vue'], resolve)
      // 异步
    },
    {
      path:'/readme',
      component:resolve => require(['../components/common/Home.vue'],resolve)
    }
  ]
})
