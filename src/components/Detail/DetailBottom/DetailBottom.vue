<template>
  <div class="detail_bottom flex-centerY flex-column" @click="toQuotationPage">
    <p>询问底价</p>
    <p>本地经销商为你报价</p>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
  methods:{
    ...mapMutations({
      setDefault:'detail/setDefault'
    }),
    toQuotationPage(){
      this.setDefault();
      this.$router.push('/quotation');
    }
  }
};
</script>

<style lang="stylus" scoped>
@import './DetailBottom.styl';
</style>