<template>
    <div class="content">
      <!-- 表单页头部数据 -->
      <div @click="showType" class="q_info flex-row">
        <img :src="carinfo.pic" />
        <div class="flex-column flex-centerX">
          <p>{{carinfo.AliasName}}</p>
          <p>{{carinfo.year}}款{{carinfo.car_name}}</p>
        </div>
      </div>

      <!-- 个人信息表单 -->
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

      <!-- 经销商列表 -->
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
</template>

<script>
import { mapState, mapActions,mapMutations } from "vuex";

export default {
  computed:{
    ...mapState({
      carinfo: state => state.quotation.carinfo,  //sessionstrage里的汽车对象
      dealerlist: state => state.quotation.dealerlist,//经销商列表
      position: state => state.quotation.position,//定位
      currentcity: state => state.quotation.currentcity//选中的下标
    })
  },

  methods: {
    ...mapMutations({
        showProvinec: "quotation/showProvinec",
        setCarInfo: "quotation/setCarInfo"
    }),

    //展示类型
    showType(){
      this.$router.push('/type');
    }
  },

  //页面初次加载就设置carinfo
  created(){
    this.setCarInfo();
  }
};
</script>

<style lang="stylus" scoped>
@import './QInfo.styl';
</style>