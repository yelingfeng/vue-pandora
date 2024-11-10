import Vue from 'vue'
import VueRouter from 'vue-router'
import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const constantRouterMap = [
  {
    path: '/demo',
    component: () => import('@/views/demo.vue')
  },
  {
    path: '/default',
    component: () => import('@/views/default.vue')
  },
  {
    path: '/form',
    component: () => import('@/views/formDemo.vue')
  },
  {
    path: '/tableDemo',
    component: () => import('@/views/tableDemo.vue')
  },
  {
    path: '/formList',
    component: () => import('@/views/formList.vue')
  },
  {
    path: '/hooks',
    component: () => import('@/views/hooksDemo.vue')
  },
  {
    path: '/tooltipDemo',
    component: () => import('@/views/custormTableTooltip.vue')
  },
  {
    path: '/multiSort',
    component: () => import('@/views/multiSort.vue')
  }
  // {
  //   path: '/treeDemo',
  //   component: () => import('@/views/treeTable.vue')
  // }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  scrollBehavior: (to: any, from: any, savedPosition: any) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: constantRouterMap
})
export default router
