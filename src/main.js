import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//Vuet图片懒加载  i
import VueLazyload from 'vue-lazyload'


//清除浏览器默认样式
import '../node_modules/normalize.css/normalize.css'

//自适应rem
import '../node_modules/amfe-flexible/index.js'

//vant框架
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.use(VueLazyload,{
  perLoad:1.3,
  loading:'./assets/img/loading.gif',
  attempt:3
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
