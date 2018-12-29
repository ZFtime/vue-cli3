import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path:"/MyCompany",
      name:"MyCompany",
      component:()=> import ('./views/MyCompany.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/test',
      name:'test',
      component:()=> import ('./views/test.vue')
    }
  ]
})
