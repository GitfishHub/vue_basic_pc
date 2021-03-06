import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueCreateDM from 'vue-create-dm'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import { Dialog as eleModal, Drawer as eleDrawer } from 'element-ui'
Vue.use(VueCreateDM, {
  eleModal,
  eleDrawer,
  store,
  router
})
//获取vue的版本号,根据不同的版本号采取不同的策略
// console.log(Vue.version)
require('less')
//适配
import 'lib-flexible'

Vue.config.productionTip = false

import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'

Vue.use(VXETable)
//全局过滤器的导入
import vFilter from '@/static/js/filter'
for (let key in vFilter) {
  Vue.filter(key, vFilter[key])
}

Vue.prototype.$EventBus = new Vue()
new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount('#app')
