import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export const constantRouterMap = [
  {
    path:'/',
   // redirect: '/index',
    component:_import('index'),
    name:'index'
  },
  {
    path:'/login',
    component:_import('login'),
    name:'login'
  }
]
export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap,
  mode: 'history',

})

