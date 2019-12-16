<template>
    <!-- 左滑弹出层 -->
  <div class="right_popup" :class="this.homeproupflag ? 'active':''" @click="hideRightProup(false)">
    <div v-for="(item,index) in typelist" :key="index">
      <p class="typelist_name" @click="hideRightProup(false)">{{item.GroupName}}</p>

      <!-- 汽车类型列表 -->
      <ul class="typelist_ul">
        <li
          v-for="(item1,index1) in item.GroupList"
          :key="index1"
          @click="toDetailPage(item1.SerialID)"
        >
          <img v-lazy="item1.Picture" />
          <div>
            <p class="car_name">{{item1.AliasName}}</p>
            <p class="car_money">{{item1.DealerPrice}}</p>
          </div>
        </li>
      </ul>
      
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState({
      typelist: state => state.home.typelist,  //类型列表
      homeproupflag: state => state.home.homeproupflag   //弹出层控制
    })
  },


  methods: {
    ...mapMutations({
      //抛出隐藏弹出层函数
      hideRightProup: "home/hideRightProup"
    }),

    //跳转到detail  隐藏首页的省市
    toDetailPage(id) {
      this.hideRightProup(false);
      //跳转详情
      this.$router.push(`/detail?SerialID=${id}`);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import './RightPopup.styl';
</style>