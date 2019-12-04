<template>
  <div class="right_popup" :class="this.homeproupflag ? 'active':''"  @click="hideRightProup(false)">
    <div v-for="(item,index) in typelist" :key="index">
      <p class="typelist_name" @click="hideRightProup(false)">{{item.GroupName}}</p>
      <ul class="typelist_ul">
        <li
          v-for="(item1,index1) in item.GroupList"
          :key="index1"
          @click="toDetailPage(item1.SerialID)"
        >
          <img :src="item1.Picture" alt />
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
      typelist: state => state.home.typelist,
      homeproupflag: state => state.home.homeproupflag
    })
  },
  methods: {
    ...mapMutations({
      hideRightProup: "home/hideRightProup"
    }),
    toDetailPage(id) {
      this.hideRightProup(false);
      this.$router.push(`/detail?SerialID=${id}`);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import './RightPopup.styl';
</style>