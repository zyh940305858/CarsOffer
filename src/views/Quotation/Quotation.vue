<template>
  <div class="q">
      <header>
          <p>可向多个商家咨询最低价，商家及时回复</p>
          <img src="@/assets/img/icon-help.png" alt="">
      </header>

      <!-- 表单经销商页 -->
      <QInfo :cardetaildata="cardetaildata" :currentlist="currentlist"></QInfo>

      <!-- 城市列表页 -->
      <SelectCity :class="provinecflag ? 'active':''"></SelectCity>

      <!-- 点击相应页 -->
      <Result v-if="resultflag"></Result>
      <footer>
          <button @click="showResult">询最低价</button>
      </footer>
  </div>
</template>

<script>
import {mapState,mapActions, mapMutations} from 'vuex';
import QInfo from '@/components/Quotation/QInfo/QInfo.vue';
import SelectCity from '@/components/Quotation/SelectCity/SelectCity.vue';
import Result from '@/components/Quotation/Result/Result.vue'

export default {
    components:{
        QInfo,
        SelectCity,
        Result
    },
    computed:{
        ...mapState({
            cardetaildata: state => state.detail.cardetaildata,
            currentlist: state => state.detail.currentlist,
            provinecflag: state => state.quotation.provinecflag,
            userinfo: state => state.detail.userinfo,
            carinfo: state => state.quotation.carinfo,
            position: state => state.quotation.position,
            resultflag: state => state.quotation.resultflag
        })
    },
    methods:{
        ...mapActions({
            autoGetPosition:'quotation/autoGetPosition',
            getDealerList:'quotation/getDealerList'
        }),
        ...mapMutations({
            setUserInfo:'quotation/setUserInfo',
            showResult: "quotation/showResult"
        })
    },
    async created(){
        await this.autoGetPosition();
        await this.setUserInfo(JSON.parse(sessionStorage.getItem('userinfo')));
        if(sessionStorage.getItem('userinfo') == null){
            let obj = {
                carId:JSON.parse(sessionStorage.getItem('carinfo')).car_Id,
                cityId: JSON.parse(sessionStorage.getItem('userinfo')).CityID
            }
            await this.getDealerList(obj);
        }else{
            let obj = {
                carId:JSON.parse(sessionStorage.getItem('carinfo')).car_Id,
                cityId: this.position.CityID
            }
            await this.getDealerList(obj);
        }
    }
}
</script>

<style lang="stylus" scoped>
@import './Quotation.styl';
</style>