<template>
  <keep-alive>
    <div class="content">
      <div @click="toTypePage" class="q_info flex-row">
        <img :src="infoobj.pic" />
        <div class="flex-column flex-centerX">
          <p>{{infoobj.AliasName}}</p>
          <p>{{infoobj.year}}款{{infoobj.car_name}}</p>
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
            <span @click="showCity(true)">北京</span>
          </li>
        </ul>
        <div class="quotation">
          <button>询最低价</button>
        </div>
      </div>
      <div class="dealer_info">
        <p class="tip">选择报价经销商</p>
        <ul>
          <li data-hover="hover" data-id="6989" class="active">
            <p>
              <span>北京中润发奥迪</span>
              <span>万</span>
            </p>
            <p>
              <span>北京市丰台区丽泽路99号</span>
              <span>售本市</span>
            </p>
          </li>
          <li data-hover="hover" data-id="9357" class="active">
            <p>
              <span>北京奥嘉世茂奥迪</span>
              <span>万</span>
            </p>
            <p>
              <span>中国北京市朝阳区东苇路东苇路北北京金港展览展示有限公司C区19号</span>
              <span>售本市</span>
            </p>
          </li>
          <li data-hover="hover" data-id="8295" class="active">
            <p>
              <span>北京华阳奥通</span>
              <span>万</span>
            </p>
            <p>
              <span>北京市朝阳区来广营乡北苑东路顾家庄桥北300米路西</span>
              <span>售本市</span>
            </p>
          </li>
          <li data-hover="hover" data-id="11979" class>
            <p>
              <span>北京运通博奥</span>
              <span>万</span>
            </p>
            <p>
              <span>北京市朝阳区东四环南路小武基桥西南366号</span>
              <span>售本市</span>
            </p>
          </li>
          <li data-hover="hover" data-id="3270" class>
            <p>
              <span>北京兴奥晟通奥迪</span>
              <span>万</span>
            </p>
            <p>
              <span>北京市大兴区西红门镇中鼎路21-1号</span>
              <span>售本市</span>
            </p>
          </li>
          <li data-hover="hover" data-id="1311" class>
            <p>
              <span>北京国服信奥众</span>
              <span>万</span>
            </p>
            <p>
              <span>北京市丰台区南四环东路榴乡桥东200米路北</span>
              <span>售本市</span>
            </p>
          </li>
          <li data-hover="hover" data-id="3277" class>
            <p>
              <span>北京国服信奥兴</span>
              <span>万</span>
            </p>
            <p>
              <span>北京市石景山区古城大街(特钢公司厂内)</span>
              <span>售多市</span>
            </p>
          </li>
          <li data-hover="hover" data-id="12662" class>
            <p>
              <span>北京百得利奥迪中心</span>
              <span>万</span>
            </p>
            <p>
              <span>北京市北京经济技术开发区东环北路1号-甲1号楼</span>
              <span>售多市</span>
            </p>
          </li>
          <li data-hover="hover" data-id="7069" class>
            <p>
              <span>北京奥吉通国门奥迪中心</span>
              <span>万</span>
            </p>
            <p>
              <span>北京市顺义区李桥镇李天路南半壁店14号</span>
              <span>售本市</span>
            </p>
          </li>
          <li data-hover="hover" data-id="12663" class>
            <p>
              <span>北京百得利海淀奥迪中心</span>
              <span>万</span>
            </p>
            <p>
              <span>北京市海淀区五孔桥35号68号楼一层</span>
              <span>售本市</span>
            </p>
          </li>
          <li data-hover="hover" data-id="8766" class>
            <p>
              <span>北京奥吉通奥迪中心</span>
              <span>万</span>
            </p>
            <p>
              <span>北京市朝阳区朝阳北路甲45号</span>
              <span>售多市</span>
            </p>
          </li>
        </ul>
      </div>
      <div class="supp_info"></div>
    </div>
  </keep-alive>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data(){
    return {
      infoobj:JSON.parse(sessionStorage.getItem('infoObj'))
    }
  },
  methods: {
    toTypePage() {
      this.$router.push("/type");
    },
    ...mapActions({
      showCity: "quotation/showCity"
    })
  }
};
</script>

<style lang="stylus" scoped>
@import './QInfo.styl';
</style>