import VQueryCondition from './src'

/* istanbul ignore next */
VQueryCondition.install = function(Vue) {
  Vue.component(VQueryCondition.name, VQueryCondition)
}

export default VQueryCondition
