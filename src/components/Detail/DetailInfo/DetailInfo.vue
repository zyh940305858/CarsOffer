<template>
  <div class="info">
      <p>{{infodata.dealer_price}}</p>
      <p>指导价 {{infodata.official_refer_price}}</p>
      <div><button @click="toQuotationPage">询问底价</button></div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
    props:["infodata"], //接受父组件传的数据

    methods:{
        ...mapMutations({
            setDefault:'detail/setDefault'
        }),
        
        //跳转到表单页 首先提交一个百度统计  然后把默认的数据设置到carinfo中方便以后用
        toQuotationPage(){
            _hmt.push(['_trackEvent','汽车名称', '跳转','表单页', this.infodata.official_refer_price]);
            this.setDefault();
            this.$router.push('/quotation');
        }
    }
}
</script>

<style lang="stylus" scoped>
@import './DetailInfo.styl';
</style>