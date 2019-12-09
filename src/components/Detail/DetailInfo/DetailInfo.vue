<template>
  <div class="info">
      <p>{{infodata.dealer_price}}</p>
      <p>指导价 {{infodata.official_refer_price}}</p>
      <div><button @click="toQuotationPage">询问底价</button></div>
  </div>
</template>

<script>
export default {
    props:["infodata"],
    created(){
        console.log(this.infodata)
    },
    methods:{
        toQuotationPage(){
            this.$router.push('/quotation');
        }
    }
}
</script>

<style lang="stylus" scoped>
@import './DetailInfo.styl';
</style>