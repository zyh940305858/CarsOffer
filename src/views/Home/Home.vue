<template>
  <div class="home">
    <!-- 品牌列表  -->
    <BrandList :list="list"></BrandList>
    <!-- 右侧侧滑栏 -->
    <RightPopup :v-show="homeproupflag"></RightPopup>
    <!-- 字母侧边栏 -->
    <AsideLetter :arr="arr" @Parent_jump="jump"></AsideLetter>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from "vuex";
import BrandList from "@/components/BrandList/BrandList.vue";
import AsideLetter from "@/components/AsideLetter/AsideLetter.vue";
import RightPopup from "@/components/RightPopup/RightPopup.vue";

export default {
  name: "home",
  components: {
    BrandList,
    AsideLetter,
    RightPopup
  },
  computed: {
    ...mapState({
      list: state => state.home.list,
      arr: state => state.home.arr,
      typelist: state => state.home.typelist,
      homeproupflag: state => state.home.homeproupflag
    })
  },
  methods: {
    ...mapActions({
      getMasterBrandList: "home/getMasterBrandList"
    }),
    //点击右侧字母索引栏触发事件
    jump(item) {
      document.querySelector(".brand_list").scrollTop = document.querySelector(
        `#${item}`
      ).offsetTop;
    }
  },
  created() {
    //获取所有的品牌数据
    this.getMasterBrandList();
  }
};
</script>

<style lang="stylus" scoped>
@import './Home.styl';
</style>
