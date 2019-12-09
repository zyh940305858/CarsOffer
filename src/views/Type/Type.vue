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
export default {
  data() {
    return {
      newarr: JSON.parse(sessionStorage.getItem("yeararr")),
      typelist: JSON.parse(sessionStorage.getItem("typelist")),
      currentlist: [],
      currentindex: 0
    };
  },
  methods: {
    sortCurrentList(list) {
      list.sort((a, b) => {
        if (a.exhaust_str == b.exhaust_str) {
          if (a.max_power_str == b.max_power_str) {
            return b.inale_type > a.inhale_type;
          } else {
            return a.max_power - b.max_power;
          }
        } else {
          return a.exhaust - b.exhaust;
        }
      });
      return list;
    },
    formatlist(list) {
      //拼接每款车的key  排量/功率 吸气方式
      list = list.map(item => {
        item.key = `${item.exhaust_str}/${item.max_power_str} ${item.inhale_type}`;
        return item;
      });

      let newlist = [];
      list.forEach(item => {
        let index = newlist.findIndex(value => value.key == item.key);
        if (index !== -1) {
          newlist[index].list.push(item);
        } else {
          newlist.push({
            key: item.key,
            list: [item]
          });
        }
      });
      return newlist;
    },
    back() {
      this.$router.back(-1);
    },
    setCurrentIndex(index) {
      this.currentindex = index;
      this.getCurrentList();
    },
    getCurrentList() {
      let list = this.typelist.filter(
        item => item.market_attribute.year == this.newarr[this.currentindex]
      );
      list = this.sortCurrentList(list);
      this.currentlist = this.formatlist(list);
    }
  },
  created() {
    this.getCurrentList();
  }
};
</script>

<style lang="stylus" scoped>
@import './Type.styl';
</style>