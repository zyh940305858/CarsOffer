<template>
  <div id="app">
    <router-view/>
    <Loading v-show="loadingflag"></Loading>
  </div>
</template>


<script>
import {mapState} from 'vuex';
import Loading from '@/components/Loading/Loading.vue';
export default {
  components:{
    Loading
  },
  computed:{
    ...mapState(['loadingflag'])
  }
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
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
#app
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
#app>div {
    width: 100%;
}
// p {
//     display: block;
//     margin-block-start: 1em;
//     margin-block-end: 1em;
//     margin-inline-start: 0px;
//     margin-inline-end: 0px;
// }
.flex-centerY {
    -webkit-box-align: center;
    align-items: center;
}
.flex-column {
    -webkit-box-orient: vertical;
    flex-direction: column;
}
.flex-row {
    display: -webkit-box;
    display: flex;
    -webkit-box-direction: normal;
}
</style>
