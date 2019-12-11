<template>
  <keep-alive>
    <div class="type">
      <p @click="back">全部车款</p>
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
              <li :car-id="item1.car_id" v-for="(item1,index1) in item.list" :key="index1">
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
  </keep-alive>
</template>

<script>
import {mapState,mapActions} from 'vuex';

export default {
  computed:{
    ...mapState({
      newarr: state => state.type.newarr,
      typelist: state => state.type.typelist,
      currentlist: state => state.type.currentlist,
      currentindex: state => state.type.currentindex,
    })
  },
  methods: {
    ...mapActions({
      getCurrentList:'type/getCurrentList'
    }),
    back() {
      this.$router.back(-1);
    },
    setCurrentIndex(index) {
      this.getCurrentList(index);
    },
  },
  created() {
    this.getCurrentList(0);
  }
};
</script>

<style lang="stylus" scoped>
@import './Type.styl';
</style>