import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VuePandora from '../index'
import router from './router'
import VueCompositionAPI from '@vue/composition-api'
import ECharts from 'vue-echarts'
import 'echarts'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VuePandora)
Vue.use(VueCompositionAPI)
Vue.component('v-chart', ECharts)
import '../mock/index.ts'
import './index.css'
import './_common.less'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
