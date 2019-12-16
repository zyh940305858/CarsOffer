<template>
  <div class="select_city">
    <div class="province">
      <div class="location">
        <p>自动定位</p>
        <p @click="setCityFn(position)">{{position.CityName}}</p>
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
      provineclist: state => state.quotation.provineclist, //省市列表
      cityflag: state => state.quotation.cityflag,//城市控制
      citylist: state => state.quotation.citylist,//城市列表
      position: state => state.quotation.position,//position定位
      carinfo: state => state.quotation.carinfo,//sessioninfo的car对象
      currentcity: state => state.quotation.currentcity//选中的城市
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
      getDealerList:'quotation/getDealerList',
      autoGetPosition:'quotation/autoGetPosition'
    }),

    //展示城市页
    showCityPage(id){
      this.getCityList(id);
      this.showCity(true);
    },

    //设置城市id
    async setCityId(obj){
      await this.setUserInfo(obj);
      let obj1 = {
            carId:this.carinfo.car_Id,
            cityId: this.currentcity.CityID
      }
      await this.getDealerList(obj1);
      this.hideProvinec(false);
    },

    //设置城市id
    async setCityFn(pos){
      await this.setUserInfo(pos);
      let obj1 = {
            carId:this.carinfo.car_Id,
            cityId: this.position.CityID
      }
      await this.getDealerList(obj1);
      this.hideProvinec(false);
    }
  },

  //加载完成前让他定位
  async created(){
    await this.autoGetPosition();
    await this.getProvinecList()
  }
};
</script>

<style lang="stylus" scoped>
@import './SelectCity.styl';
</style>