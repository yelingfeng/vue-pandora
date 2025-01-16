import { version } from '../package.json'
import VAdaptivePage from './adaptive-page'
import VDetail from './detail'
import VDialog from './dialog'
import VForm from './Form/index.vue'
import VLayoutPage from './layout-page'
import VLayoutPageItem from './layout-page-item'
import VQueryCondition from './query-condition'
import VSelect from './select'
import VSelectTable from './select-table'
import VTable from './Table/index.vue'
import VTreeSelect from './tree-select'

// 存储组件列表
const components = [
  VLayoutPage,
  VSelect,
  VSelectTable,
  VTreeSelect,
  VLayoutPageItem,
  VForm,
  VTable,
  VQueryCondition,
  VAdaptivePage,
  VDetail,
  VDialog
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
  // 判断是否安装
  if (install.installed) return
  install.installed = true
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
// 按需引入
export {
  VAdaptivePage,
  VDetail,
  VDialog,
  VForm,
  VLayoutPage,
  VLayoutPageItem,
  VQueryCondition,
  VSelect,
  VSelectTable,
  VTable,
  VTreeSelect
}
export default {
  version,
  ...components,
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install
}
