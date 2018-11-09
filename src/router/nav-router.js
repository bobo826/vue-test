import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/index'
import Home from '../page/home/Home'
import Mine from '../page/mine/Mine'
import Login from '../page/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
