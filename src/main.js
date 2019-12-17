import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Vuet图片懒加载  i
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
  perLoad:1.3,
  loading:require('@/assets/img/icon-brand.jpg'),
  attempt:3
})

//清除浏览器默认样式
import '../node_modules/normalize.css/normalize.css'

//自适应rem
import '../node_modules/amfe-flexible/index.js'

//vant引入图片预览
import { ImagePreview } from 'vant';
Vue.use(ImagePreview);

//fastclick
import FastClick from 'fastclick';
FastClick.attach(document.body);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
