import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import blog from '../views/Blog.vue'
import user from '../views/User.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'blog',
    component: blog
  },
  {
    path: '/user',
    name: 'user',
    component: user
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
