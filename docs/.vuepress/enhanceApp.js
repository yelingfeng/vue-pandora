/**
 * 扩展 VuePress 应用
 */
import VueHighlightJS from 'vue-highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import css from 'highlight.js/lib/languages/css'
import javascript from 'highlight.js/lib/languages/javascript'
import vue from 'vue-highlight.js/lib/languages/vue'
// import 'highlight.js/styles/atom-one-dark.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../../mock/index.ts'
import vuepandora from 'vue-pandora'
import 'core-js'
export default ({
  Vue // VuePress 正在使用的 Vue 构造函数
}) => {
  // ...做一些其他的应用级别的优化
  Vue.use(VueHighlightJS, {
    // Register only languages that you want
    languages: {
      css,
      javascript,
      vue
    }
  })
  Vue.use(Element)
  Vue.use(vuepandora)
}
