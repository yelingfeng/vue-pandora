import VForm from './packages/Form/index.vue'
import VTable from './packages/Table/index.vue'
import Vue from 'vue'
import './src/index.css'
const install = function(vue: typeof Vue, opts = {}) {
  vue.component('VForm', VForm)
  vue.component('VTable', VTable)
}

const VuePandora = {
  version: '1.0.1',
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
