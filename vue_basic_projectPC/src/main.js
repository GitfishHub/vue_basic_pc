import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//获取vue的版本号,根据不同的版本号采取不同的策略
// console.log(Vue.version)
require('less');
//适配
import 'lib-flexible'

Vue.config.productionTip = false
import store from './store'


//全局过滤器的导入
import vFilter from '@/static/js/filter'
for (let key in vFilter) {
  Vue.filter(key, vFilter[key])
}

Vue.prototype.$EventBus = new Vue()
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')