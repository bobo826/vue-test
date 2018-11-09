import Vue from 'vue'
import Router from 'vue-router'
import Login from '../page/login/Login'
import Index from '../page/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
