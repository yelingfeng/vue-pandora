import Vue from 'vue'
import VForm from './packages/Form/index.vue'
import VTable from './packages/Table/index.vue'

import './src/index.css'
const install = function(vue: typeof Vue, opts = {}) {
  vue.component(VForm.name, VForm)
  vue.component(VTable.name, VTable)
  // vue.component(VGisMap.name, VGisMap)
}

const VuePandora = {
  install,
  VForm,
  VTable
}
export { VForm, VTable }

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default VuePandora
