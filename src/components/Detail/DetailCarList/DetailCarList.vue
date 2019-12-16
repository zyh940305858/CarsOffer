<template>
  <div class="carlist">
    <div class="cartype">
      <span
        :class="currentindex == index ? 'active':''"
        v-for="(item,index) in newarr"
        :key="index"
        @click="setCurrentIndex(index)"
      >{{item}}</span>
    </div>
    <div>
      <div v-for="(item,index) in currentlist" :key="index">
        <p>{{item.key}}</p>
        <ul>
          <li v-for="(item1,index1) in item.list" :key="index1">
            <p>{{item1.market_attribute.year}}款{{item1.car_name}}</p>
            <p>{{item1.horse_power}}马力{{item1.gear_num}}档{{item1.trans_type}}</p>
            <p>
              <span>指导价 {{item1.market_attribute.official_refer_price}}</span>
              <span>{{item1.market_attribute.dealer_price_min}}</span>
            </p>
            <button @click="toQuotation(item1)">询问底价</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions,mapMutations } from "vuex";

export default {
  props: ["currentlist", "currentindex", "newarr"],
  methods: {
      ...mapActions({
          setCurrentIndex:'detail/setCurrentIndex'
      }),
      ...mapMutations({
        setCarId:'detail/setCarId'
      }),
      toQuotation(item){
        this.setCarId(item);
        this.$router.push('/quotation');
      }
  }
};
</script>

<style lang="stylus" scoped>
@import './DetailCarList.styl';
</style>