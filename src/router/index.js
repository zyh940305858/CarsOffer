import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/detail',
    name: 'detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Detail/Detail.vue')
  },
  {
    path:'/img',
    name:'img',
    component:() => import('../views/Img/Img.vue')
  },
  {
    path:'/color',
    name:'color',
    component:() => import('../views/Color/Color.vue')
  },
  {
    path:'/type',
    name:'type',
    component:() => import('../views/Type/Type.vue')
  },
  {
    path:'/quotation',
    name:'quotation',
    component:() => import('../views/Quotation/Quotation.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
