<template>
    <div class="type">
      <p @click="toback">全部车款</p>
      <div>
        <div class="c_type">
          <span
            @click="setCurrentIndex(index)"
            :class="currentindex == index ? 'active':''"
            v-for="(item,index) in newarr"
            :key="index"
          >{{item}}</span>
        </div>
        <div>
          <div v-for="(item,index) in currentlist" :key="index">
            <p class="tip">{{item.key}}</p>
            <ul>
              <li  @click="setCaridFn(item1)" :car-id="item1.car_id" v-for="(item1,index1) in item.list" :key="index1">
                <p>
                  <span>{{item1.market_attribute.year}}款{{item1.car_name}}</span>
                  <span>{{item1.market_attribute.dealer_price_min}}万起</span>
                </p>
                <p>
                  <span>{{item1.horse_power}}马力{{item1.gear_num}}档{{item1.trans_type}}</span>
                  <span>指导价:{{item1.market_attribute.official_refer_price}}</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex';

export default {
  computed:{
    ...mapState({
      newarr: state => state.type.newarr,
      typelist: state => state.type.typelist,
      currentlist: state => state.type.currentlist,
      currentindex: state => state.type.currentindex,
      carinfo:state => state.img.carinfo
    })
  },
  methods: {
    ...mapMutations({
      setCarId:'type/setCarId',
      setCarInfo:'img/setCarInfo'
    }),
    ...mapActions({
      getCurrentList:'type/getCurrentList',
      getImgList:'img/getImgList'
    }),
    setCurrentIndex(index) {
      this.getCurrentList(index);
    },
    setCarid(item1){
      this.setCarId(item1);
      this.setCarInfo();
      let obj = {SerialID:this.carinfo.SerialID, CarId:this.carinfo.car_Id, ColorID:this.carinfo.ColorId };
      this.getImgList(obj);
      this.hideTypePage();
    },
    toback(){
      this.$router.go(-1);
    },
    setCaridFn(item){
      this.setCarId(item);
      this.$router.go(-1);
    }
  },
  created() {
    this.getCurrentList(0);
  }
};
</script>

<style lang="stylus" scoped>
@import './Type.styl';
</style>