/**
 * 扩展 VuePress 应用
 */
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/default.css'
// import Element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import '../../mock/index.ts'
export default ({
  Vue // VuePress 正在使用的 Vue 构造函数
}) => {
  // ...做一些其他的应用级别的优化
  // Vue.use(VueHighlightJS, {
  //   // Register only languages that you want
  //   languages: {
  //     css,
  //     javascript,
  //     vue
  //   }
  // })
  Vue.use(VueHighlightJS)
  // Vue.use(Element)
}
