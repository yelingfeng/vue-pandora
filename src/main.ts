import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import App from './App.vue'
// import VuePandora from '../lib/vuepandora.umd'
import VueCompositionAPI from '@vue/composition-api'
import '../mock/index.ts'
import VuePandora from '../packages/index'
import './_common.less'
import './index.css'
import router from './router'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VuePandora)
Vue.use(VueCompositionAPI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
