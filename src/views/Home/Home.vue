<template>
  <div class="home">
    <BrandList :list='list'></BrandList>
    <AsideLetter :arr='arr'></AsideLetter>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions,mapState} from 'vuex'
import BrandList from '@/components/BrandList/BrandList.vue'
import AsideLetter from '@/components/AsideLetter/AsideLetter.vue'

export default {
  name: 'home',
  components:{
    BrandList,
    AsideLetter
  },
  computed:{
    ...mapState({
      list:state => state.home.list,
      arr:state => state.home.arr
    })
  },
  methods:{
    ...mapActions({
      getMasterBrandList: 'home/getMasterBrandList'
    })
  },
  created(){
    this.getMasterBrandList()
  }
}
</script>

<style lang="stylus" scoped>
@import './Home.styl';
</style>
