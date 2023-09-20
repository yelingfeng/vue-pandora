import Vue from 'vue'
import VForm from './packages/Form/index.vue'
import VTable from './packages/Table/index.vue'
// import VChart from './packages/Charts/index.vue'

import './src/index.css'
const install = function(vue: typeof Vue, opts = {}) {
  vue.component('VForm', VForm)
  vue.component('VTable', VTable)
  // vue.component('VChart', VChart)
}

const VuePandora = {
  install,
  VForm,
  VTable
  // VChart
}
export { VForm, VTable }

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default VuePandora
