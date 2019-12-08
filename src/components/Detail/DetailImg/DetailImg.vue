<template>
  <div class="detailimg" @click="toImgPage(cardetaildata.SerialID)">
      <img :src="imgdata.url" alt="">
      <span>{{imgdata.pic_group_count}}张照片</span>
  </div>
</template>

<script>
import { state, mapActions, mapState } from "vuex";
export default {
  props:['imgdata'],
  computed: {
    ...mapState({
      cardetaildata: state => state.detail.cardetaildata
    })
  },
  methods: {
    ...mapActions({
      getImgList: "img/getImgList"
    }),
    toImgPage(SerialID){
      sessionStorage.setItem('SerialID',SerialID);
      this.$router.push(`/img`);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import './DetailImg.styl';
</style>