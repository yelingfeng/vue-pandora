import Vue from 'vue'
import { version } from './package.json'
import VForm from './packages/Form/index.vue'
import VTable from './packages/Table/index.vue'
import VAdaptivePage from './packages/adaptive-page'
// import VChart from './packages/Charts/index.vue'
import VDetail from './packages/detail'
import VDialog from './packages/dialog'
import VLayoutPage from './packages/layout-page'
import VLayoutPageItem from './packages/layout-page-item'
import VQueryCondition from './packages/query-condition'
import VSelect from './packages/select'
import VSelectTable from './packages/select-table'
import TTable from './packages/t-table'
import VTreeSelect from './packages/tree-select'

import './src/index.css'

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
  TTable,
  VDialog
]

const install = function(vue: typeof Vue, opts = {}) {
  // 遍历注册全局组件
  components.map(component => vue.component(component.name, component))
}

export {
  TTable,
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

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version,
  ...components,
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install
}
