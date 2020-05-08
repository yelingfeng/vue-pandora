import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const constantRouterMap = [
  {
    path: '/demo',
    component: () => import('@/views/demo.vue')
  },
  {
    path: '/default',
    component: () => import('@/views/default.vue')
  }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: constantRouterMap
})
export default router
