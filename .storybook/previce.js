import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VuePandora from '../index'
import '../src/index.css'
Vue.use(ElementUI)
Vue.use(VuePandora)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}
