import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//清除浏览器默认样式
import '../node_modules/normalize.css/normalize.css'

//自适应rem
import '../node_modules/amfe-flexible/index.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
