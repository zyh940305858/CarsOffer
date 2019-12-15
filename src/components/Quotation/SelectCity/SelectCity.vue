<template>
  <div class="select_city">
    <div class="province">
      <div class="location">
        <p>自动定位</p>
        <p>{{position.CityName}}</p>
      </div>
      <div class="list">
        <p>省市</p>
        <ul>
          <li @click="showCityPage(item.CityID)" :data-id="item.CityID" v-for="(item,index) in provineclist" :key="index">{{item.CityName}}</li>
        </ul>
      </div>
    </div>
    <div :class="cityflag ? 'city active':''" @click="hideCity(false)">
      <ul id="city_list">
        <li @click="setCityId(item)" v-for="(item,index) in citylist" :key="index">{{item.CityName}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex';

export default {
  computed:{
    ...mapState({
      provineclist: state => state.quotation.provineclist,
      cityflag: state => state.quotation.cityflag,
      citylist: state => state.quotation.citylist,
      position: state => state.quotation.position
    })
  },
  methods:{
    ...mapMutations({
      hideProvinec:'quotation/hideProvinec',
      showCity:'quotation/showCity',
      hideCity:'quotation/hideCity',
      showProvinec:'quotation/showProvinec',
      setUserInfo:'quotation/setUserInfo'
    }),
    ...mapActions({
      getProvinecList:'quotation/getProvinecList',
      getCityList:'quotation/getCityList',
      getDealerList:'quotation/getDealerList'
    }),
    showCityPage(id){
      this.getCityList(id);
      this.showCity(true);
    },
    async setCityId(obj){
      await this.setUserInfo(obj);
      let obj1 = {
            carId:JSON.parse(sessionStorage.getItem('carinfo')).car_Id,
            cityId: JSON.parse(sessionStorage.getItem('userinfo')).CityID
      }
      await this.getDealerList(obj1);
      this.hideProvinec(false);
    }
  },
  created(){
    this.getProvinecList()
  }
};
</script>

<style lang="stylus" scoped>
@import './SelectCity.styl';
</style>