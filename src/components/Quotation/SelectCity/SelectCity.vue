<template>
  <div class="select_city">
    <div class="province">
      <div class="location">
        <p>自动定位</p>
        <p>北京</p>
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
        <li @click="hideProvinecPage(item)" v-for="(item,index) in citylist" :key="index">{{item.CityName}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';

export default {
  computed:{
    ...mapState({
      provineclist: state => state.quotation.provineclist,
      cityflag: state => state.quotation.cityflag,
      citylist: state => state.quotation.citylist
    })
  },
  methods:{
    ...mapActions({
      getProvinecList:'quotation/getProvinecList',
      hideProvinec:'quotation/hideProvinec',
      getCityList:'quotation/getCityList',
      showCity:'quotation/showCity',
      hideCity:'quotation/hideCity'
    }),
    showCityPage(id){
      this.getCityList(id);
      this.showCity(true);
    },
    hideProvinecPage(obj){
      sessionStorage.setItem('userinfo',JSON.stringify(obj));
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