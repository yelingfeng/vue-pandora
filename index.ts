import Vue from 'vue'
import { version } from './package.json'
import VForm from './packages/Form/index.vue'
import VTable from './packages/Table/index.vue'

import './src/index.css'

// 存储组件列表
const components = [VForm, VTable]

const install = function(vue: typeof Vue, opts = {}) {
  // 遍历注册全局组件
  components.map(component => vue.component(component.name, component))
}

export { VForm, VTable }

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
