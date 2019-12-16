<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li v-for="(item,index) in detailimglist" :key="index" @click="showImgSwiper(index)">
        <img
          :style="{
              background:'url('+item.Url+')',
              backgroundSize:'cover',  
              backgroundRepeat:'no-repeat',
              backgroundPosition:'center'}"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  //创建后初始化better-Scroll
  created() {
    this.$nextTick(() => {
      this.scrollinit();
    });
  },


  computed: {
    ...mapState({
      page: state => state.img.page, //页数
      pagesize: state => state.img.pagesize,  //每页展示数量
      detailimglist: state => state.img.detailimglist, //详细图片列表
      carinfo: state => state.img.carinfo, //sessionstorage中的汽车数据
      imageid: state => state.img.imageid //图片的id
    })
  },


  methods: {
    ...mapActions({
      getClassImageList: "img/getClassImageList",
      setPullUpData: "img/setPullUpData",
      getPullDownRefresh:'img/getPullDownRefresh'
    }),
    
    ...mapMutations({
      setPage: 'img/setPage',
      showImgSwiperPage: 'img/showImgSwiperPage',
      setImgSwiperIndex: 'img/setImgSwiperIndex'
    }),

    //显示图片展示 设置选中国的swiper下标
    showImgSwiper(index){
      this.showImgSwiperPage();
      this.setImgSwiperIndex(index);
    },

    //初始化better-scroll
    scrollinit() {
      this.MScroll = new BScroll(this.$refs.wrapper, {
        probeType: 1,
        click: true
      });

      //滑动结束松开事件
      this.MScroll.on("touchEnd", pos => {
        //上拉刷新
        if (pos.y > 30) {
          setTimeout(() => {
            let obj = {
              SerialID: this.carinfo.SerialID,
              ImageID:this.imageid,
              Page: 1,
              PageSize: this.pagesize,
              ColorID: this.carinfo.ColorID
            };
            this.getPullDownRefresh(obj);
          }, 1000);
        } else if (pos.y < this.MScroll.maxScrollY - 30) {
          
          //下拉加载
          setTimeout(() => {
            this.setPage();
            let obj = {
              SerialID: this.carinfo.SerialID,
              ImageID: this.imageid,
              Page: this.page,
              PageSize: this.pagesize,
              ColorID: this.carinfo.ColorID
            };
            this.getClassImageList(obj);
          }, 2000);
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
@import './ClassList.styl'
</style>