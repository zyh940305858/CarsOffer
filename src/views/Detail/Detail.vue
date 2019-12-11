<template>
  <div class="detail">
    <div class="content">
    <DetailImg :imgdata="Object.assign({},{url:cardetaildata.CoverPhoto,pic_group_count:cardetaildata.pic_group_count,SerialID:cardetaildata.SerialID})"></DetailImg>
    <DetailInfo v-if="cardetaildata.market_attribute" :infodata="Object.assign({},{dealer_price:cardetaildata.market_attribute.dealer_price,official_refer_price:cardetaildata.market_attribute.official_refer_price})"></DetailInfo>
    <DetailCarList :currentlist="currentlist" :currentindex="currentindex" :newarr="newarr"></DetailCarList>
    </div>
    <DetailBottom></DetailBottom>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
import DetailImg from '@/components/Detail/DetailImg/DetailImg.vue';
import DetailInfo from '@/components/Detail/DetailInfo/DetailInfo.vue';
import DetailCarList from '@/components/Detail/DetailCarList/DetailCarList.vue';
import DetailBottom from '@/components/Detail/DetailBottom/DetailBottom.vue'


export default {
  components:{
    DetailImg,
    DetailInfo,
    DetailCarList,
    DetailBottom
  },
  computed:{
    ...mapState({
      cardetaildata: state => state.detail.cardetaildata,//详情页全部数据
      currentindex: state => state.detail.currentindex,
      currentlist: state => state.detail.currentlist,
      newarr: state => state.detail.newarr
    })
  },
  methods:{
    ...mapActions({
      getMasterCarDetail:'detail/getMasterCarDetail' //抛出详情页异步函数
    })
  },
  created(){
    this.getMasterCarDetail(this.$route.query.SerialID); //请求详情页数据
  }
}
</script>

<style lang="stylus" scoped>
@import './Detail.styl';
</style>