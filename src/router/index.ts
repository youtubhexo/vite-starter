import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // ?前端路由的两种解决方案
  //  #/about  hash模式
  //  /about   webhistory模式
  //  SEO   ssr   //?Nuxt.js  描述: 一个基于 Vue.js 的框架，提供了 SSR 和静态站点生成功能。
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
