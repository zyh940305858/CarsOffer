import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import home from './modules/home'
import detail from './modules/detail'
import img from './modules/img'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    loadingflag:false
  },
  mutations:{
    showloading(state){
        state.loadingflag = true;
    },
    hideloading(state){
        state.loadingflag = false;
    }
  },
  modules:{
    home,
    detail,
    img
  },
  plugins:[createLogger()]
})
