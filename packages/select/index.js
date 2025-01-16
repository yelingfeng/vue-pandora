import VSelect from './src'

/* istanbul ignore next */
VSelect.install = function(Vue) {
  Vue.component(VSelect.name, VSelect)
}

export default VSelect
