import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: "/Index",
    name: "Index",
    component: () => import('./views/index.vue'),
    children: [{
        path: '/Edit-table',
        name: 'edit-table',
        component: () => import( /* webpackChunkName: "about" */ './views/table/edit-table.vue')
      },
      {
        path: "/Export-table",
        name: "export-table",
        component: () => import('./views/table/export-table.vue')
      },
      {
        path: "/drag-table",
        name: "drag-table",
        component: () => import('./views/table/drag-table.vue')
      },
      {
        path: "/Edit-from",
        name: "edit-from",
        component: () => import('./views/from/Edit-from.vue')
      },
      {
        path: "/login",
        name: "login",
        component: () => import('./views/from/login.vue')
      },
      {
        path: "/tabs",
        name: "tabs",
        component: () => import('./views/rest/tabs.vue')
      },
      {
        path: "/transfer",
        name: "transfer",
        component: () => import('./views/rest/transfer.vue')
      },
      {
        path: "/Tree-iview",
        name: "tree-iview",
        component: () => import('./views/rest/Tree-iview.vue')
      },
      {
        path: "/Grid",
        name: "grid",
        component: () => import('./views/rest/grid/grid.vue')
      },
      {
        path: "/Collapse",
        name: "collapse",
        component: () => import('./views/rest/collapse.vue')
      }
    ]
  }, ]
})