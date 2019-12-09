import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home'

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
    component: () => import('../views/Detail/Detail.vue')
  },
  {
    path: '/img',
    name: 'img',
    component: () => import('../views/Img/Img.vue')
  },
  {
    path:'/itemlist',
    name:'itemlist',
    component: () => import('../components/Img/Itemlist/Itemlist.vue')
  },
  {
    path:'/color',
    name:'color',
    component: () => import('../components/Img/Color/Color.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
