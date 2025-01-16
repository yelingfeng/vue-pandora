/**
 * 扩展 VuePress 应用
 */
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css' //样式文件
import Vue from 'vue'
import '../../lib/vuepandora.css'
import VuePandora from '../../lib/vuepandora.umd'
import '../../mock/index.ts'
// import '../../packages/index.js'
// import VueCompositionAPI from '@vue/composition-api'
import './index.less'
// 注册指令
Vue.directive('highlight', function(el) {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach(block => {
    hljs.highlightBlock(block)
  })
})
export default ({
  Vue // VuePress 正在使用的 Vue 构造函数
}) => {
  // console.log(window.BMap)
  // console.log(window.BMapLib)
  // ...做一些其他的应用级别的优化
  Vue.use(Element)
  Vue.use(VuePandora)
  // Vue.use(VueCompositionAPI)
}
