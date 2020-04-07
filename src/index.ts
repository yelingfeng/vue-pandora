import VForm from './components/Form/index.vue'
import VTable from './components/Table/index.vue'

const install = function(Vue: any, opts = {}) {
  Vue.component('VForm', VForm)
  Vue.component('VTable', VTable)
}

const VuePandora = {
  version: '0.0.1',
  install,
  VForm,
  VTable
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default VuePandora
