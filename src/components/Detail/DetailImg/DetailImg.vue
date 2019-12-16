<template>
  <div class="detailimg" @click="toImgPage(cardetaildata.SerialID)">
      <img :src="imgdata.url" alt="">
      <span>{{imgdata.pic_group_count}}张照片</span>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  props:['imgdata'],

  computed: {
    ...mapState({
      cardetaildata: state => state.detail.cardetaildata //原始的详情页数据
    })
  },


  methods: {
    ...mapMutations({
      setCurrentId:'detail/setCurrentId'
    }),

    //设置选中的车系id 跳转到图片页
    toImgPage(SerialID){
      this.setCurrentId();
      this.$router.push(`/img`);
    }
  }

};
</script>

<style lang="stylus" scoped>
@import './DetailImg.styl';
</style>