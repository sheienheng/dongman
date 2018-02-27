import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import Tenyuan from '@/view/classity/tenyuan'
import Clothes from '@/view/classity/clothes'
import Life from '@/view/classity/life'
import Prototype from '@/view/classity/prototype'
import Strap from '@/view/classity/strap'
import Model from '@/view/classity/model'
import signIn from '@/view/sign-in'
import signOut from '@/view/sign-out'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/sign-in',
      component: signIn
    },
    {
      path: '/sign-out',
      component: signOut
    },
    {
      path:'/home',
      component: Home
    },
    {
      path:'/classity/tenyuan',
      component: Tenyuan
    },
    {
      path:'/classity/model',
      component: Model
    },
    {
      path:'/classity/clothes',
      component: Clothes
    },
    {
      path:'/classity/strap',
      component: Strap
    },
    {
      path:'/classity/life',
      component: Life
    },
    {
      path:'/classity/prototype',
      component: Prototype
    }
  ]
})
