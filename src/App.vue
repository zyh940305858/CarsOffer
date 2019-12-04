<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
// import {mapState} from 'vuex';
// import Loading from '@/components/Loading/Loading.vue';
export default {
  // components:{
  //   Loading
  // },
  // computed:{
  //   ...mapState({
  //     loadingflag:state => state.loading.loadingflag
  //   })
  // }
}
</script>


<style lang="stylus">
*
  margin 0
  padding 0
  list-style none
  box-sizing border-box
html,body,#app
  width 100%
  height 100%
#app
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
</style>
