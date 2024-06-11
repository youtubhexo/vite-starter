import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // ?前端路由的两种解决方案
  //  #/about  hash模式
  //  /about   webhistory模式
  //  SEO   ssr   //?Nuxt.js  描述: 一个基于 Vue.js 的框架，提供了 SSR 和静态站点生成功能。

  routes
})

export default router
