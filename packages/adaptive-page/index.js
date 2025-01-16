import VAdaptivePage from './src'

/* istanbul ignore next */
VAdaptivePage.install = function(Vue) {
  Vue.component(VAdaptivePage.name, VAdaptivePage)
}

export default VAdaptivePage
