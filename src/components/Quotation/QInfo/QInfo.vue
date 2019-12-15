<template>
  <keep-alive>
    <div class="content">
      <div @click="showType" class="q_info flex-row">
        <img :src="carinfo.pic" />
        <div class="flex-column flex-centerX">
          <p>{{carinfo.AliasName}}</p>
          <p>{{carinfo.year}}款{{carinfo.car_name}}</p>
        </div>
      </div>
      <div class="self_info">
        <p class="tip">个人信息</p>
        <ul>
          <li>
            <span>姓名</span>
            <input type="text" pattern="[*{3,4}]" placeholder="输入你的真实中文姓名" maxlength="4" />
          </li>
          <li>
            <span>手机</span>
            <input type="tel" pattern="[0-9]{11}" placeholder="输入你的真实手机号码" maxlength="11" />
          </li>
          <li>
            <span>城市</span>
            <span @click="showProvinec(true)" v-if="currentcity.CityName">{{currentcity.CityName}}</span>
            <span @click="showProvinec(true)" v-else>{{position.CityName}}</span>
          </li>
        </ul>
        <div class="quotation">
          <button>询最低价</button>
        </div>
      </div>
      <div class="dealer_info">
        <p class="tip">选择报价经销商</p>
        <ul>
          <li v-for="(item,index) in dealerlist" :data-id="item.dealerId" :class="index<=2 ? 'active':''" :key="index">
            <p>
              <span>{{item.dealerShortName}}</span>
              <span>{{parseInt(item.promotePrice)}}万</span>
            </p>
            <p>
              <span>{{item.address}}</span>
              <span>售{{item.saleRange}}</span>
            </p>
          </li>
        </ul>
      </div>
      <div class="supp_info"></div>
    </div>
  </keep-alive>
</template>

<script>
import { mapState, mapActions,mapMutations } from "vuex";

export default {
  computed:{
    ...mapState({
      carinfo: state => state.quotation.carinfo,
      dealerlist: state => state.quotation.dealerlist,
      position: state => state.quotation.position,
      currentcity: state => state.quotation.currentcity
    })
  },
  methods: {
    ...mapMutations({
        showProvinec: "quotation/showProvinec",
        setCarInfo: "quotation/setCarInfo"
    }),
    showType(){
      this.$router.push('/type');
    }
  },
  created(){
    this.setCarInfo();
  }
};
</script>

<style lang="stylus" scoped>
@import './QInfo.styl';
</style>