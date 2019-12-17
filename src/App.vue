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
html {
    -webkit-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    
}
html,body,#app
  width 100%
  height 100%
  -webkit-transform-style: preserve-3d;
  -webkit-backface-visibility:hidden;
  -webkit-animation: a .4s ease forwards;
  animation: a .4s ease forwards;
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
#app>div{
   width 100%
   height 100%
} 
@keyframes a {
    0% {
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
    }
    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
}
#app>.home,.detail,.img,.q {
    width: 100%;
    height 100%;
    -webkit-transform-style: preserve-3d;
    -webkit-backface-visibility:hidden;
    -webkit-animation: a .2s ease forwards;
    animation: a .2s ease forwards;
}
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
.flex-center, .flex-centerX {
    -webkit-box-pack: center;
    justify-content: center;
}
a, button, input {
    outline: none;
    -webkit-appearance: none;
    border: none;
}
</style>
