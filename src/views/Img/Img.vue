<template>
  <div class="img">
      <div class="flex-row title">
        <p @click="toColorPage"><span>颜色</span></p>
        <p><span>车款</span></p>
      </div>
      <ul class="img_list">
        <li v-for="(item,index) in listarr" :key="index">

        </li>
      </ul>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
export default {
  computed:{
    ...mapState({
      imglist:state => state.img.imglist,
      listarr:state => state.img.listarr
    })
  },
  methods:{
    ...mapActions({
      getImgList:'img/getImgList'
    }),
    toColorPage(){
      let SerialID = sessionStorage.getItem('SerialID');
      this.$router.push('/color');
    }
  },
  created(){
    let SerialID = sessionStorage.getItem('SerialID');
    this.getImgList(SerialID);
  }
}
</script>

<style lang="stylus" scoped>
@import './Img.styl';
</style>