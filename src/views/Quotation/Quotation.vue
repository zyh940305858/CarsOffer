<template>
  <div class="q">
      <header>
          <p>可向多个商家咨询最低价，商家及时回复</p>
          <img src="@/assets/img/icon-help.png" alt="">
      </header>
      <QInfo :cardetaildata="cardetaildata" :currentlist="currentlist"></QInfo>
      <SelectCity :class="provinecflag ? 'active':''"></SelectCity>
      <footer>
          <button data-hover="hover">询最低价</button>
      </footer>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
import QInfo from '@/components/Quotation/QInfo/QInfo.vue';
import SelectCity from '@/components/Quotation/SelectCity/SelectCity.vue';

export default {
    components:{
        QInfo,
        SelectCity
    },
    computed:{
        ...mapState({
            cardetaildata: state => state.detail.cardetaildata,
            currentlist: state => state.detail.currentlist,
            provinecflag: state => state.quotation.provinecflag
        })
    }
}
</script>

<style lang="stylus" scoped>
@import './Quotation.styl';
</style>