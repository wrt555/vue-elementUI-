import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index.vue'
import User from '@/views/user/user'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/user',
    children: [
      {
        name: 'user',
        path: '/user',
        component: User
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
