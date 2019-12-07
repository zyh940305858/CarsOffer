<template>
  <div class="detail_bottom flex-centerY flex-column" @click="getImgList(cardetaildata.SerialID)">
    <p>询问底价</p>
    <p>本地经销商为你报价</p>
  </div>
</template>

<script>
import { state, mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      cardetaildata: state => state.detail.cardetaildata
    })
  },
  methods: {
    ...mapActions({
      getImgList: "img/getImgList"
    })
  }
};
</script>

<style lang="stylus" scoped>
@import './DetailBottom.styl';
</style>