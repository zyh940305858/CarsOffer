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
          <li data-id="1">安徽</li>
          <li data-id="2">北京</li>
          <li data-id="31">重庆</li>
          <li data-id="3">福建</li>
          <li data-id="4">甘肃</li>
          <li data-id="5">广东</li>
          <li data-id="6">广西</li>
          <li data-id="7">贵州</li>
          <li data-id="8">海南</li>
          <li data-id="9">河北</li>
          <li data-id="11">黑龙江</li>
          <li data-id="10">河南</li>
          <li data-id="12">湖北</li>
          <li data-id="13">湖南</li>
          <li data-id="15">江苏</li>
          <li data-id="16">江西</li>
          <li data-id="14">吉林</li>
          <li data-id="17">辽宁</li>
          <li data-id="18">内蒙古</li>
          <li data-id="19">宁夏</li>
          <li data-id="20">青海</li>
          <li data-id="23">陕西</li>
          <li data-id="21">山东</li>
          <li data-id="24">上海</li>
          <li data-id="22">山西</li>
          <li data-id="25">四川</li>
          <li data-id="26">天津</li>
          <li data-id="28">新疆</li>
          <li data-id="27">西藏</li>
          <li data-id="29">云南</li>
          <li data-id="30">浙江</li>
        </ul>
      </div>
    </div>
    <div class="city">
      <ul id="cityList"></ul>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';

export default {
  methods:{
    ...mapActions({
      getCityList:'quotation/getCityList'
    })
  },
  created(){
    this.getCityList()
  }
};
</script>

<style lang="stylus" scoped>
@import './SelectCity.styl';
</style>