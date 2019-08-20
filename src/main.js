import Vue from 'vue'
import App from './App.vue'
import elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'

Vue.use(elementui)
Vue.use(Mint);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
