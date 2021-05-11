import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home.vue'
import Singer from '@/views/singer.vue'
import Search from '@/views/search.vue'
import Rank from '@/views/rank.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'Home',
    meta: { keepAlive: true }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { keepAlive: true }
  },
  {
    path: '/singer',
    name: 'Singer',
    component: Singer,
    meta: { keepAlive: true }
  },
  {
    path: '/rank',
    name: 'Rank',
    component: Rank,
    meta: { keepAlive: true }
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    meta: { keepAlive: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // 新增
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      //解决页面从列表页跳转到详情页返回,初始在原来位置
      return savePosition
    } else {
      //解决页面跳转后页面高度和前一个页面高度一样
      return { x: 0, y: 0 }
    }
  }
})

export default router
