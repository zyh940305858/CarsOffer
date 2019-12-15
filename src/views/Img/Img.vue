<template>
  <div class="img">
    <!-- 头部导航栏 -->
    <div class="flex-row title">
      <p @click="showColorPage">
        <span v-if="carinfo.ColorName">{{carinfo.ColorName}}</span>
        <span v-else>颜色</span>
      </p>
      <p @click="showTypePage">
        <span v-if="carinfo.year && carinfo.car_name!=='车款'">{{carinfo.year}}款{{carinfo.car_name}}</span>
        <span v-else>全部车款</span>
      </p>
    </div>

    <!-- 默认展示页面 -->
    <div class="img_default" v-if="imglist.length">
      <div v-for="(item,index) in imglist" :key="index">
        <div :index="index1" v-for="(item1,index1) in item.List" :key="index1">
          <img
            :style="{
              background:'url('+item1.Url+')',
              backgroundSize:'cover',  
              backgroundRepeat:'no-repeat',
              backgroundPosition:'center'}"
          />
          <div class="p" v-if="index1 == 0" :data-id="item.Id" @click="showDetailImg(item.Id)">
            <p>{{item.Name}}</p>
            <p>{{item.Count}}张></p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="img_default">未获取到数据</div>

    <!-- 颜色组件 -->
    <Color v-if="colorpageflag"></Color>

    <!-- 详细展示页面 -->
    <ClassList v-if="detailimgflag" class="img_list"></ClassList>

    <!-- swiper轮播页面 -->
    <van-image-preview
        v-model="imgswiperflag"
        :images="imgswiperlist"
        :loop="false"
        :start-position="imgswiperindex"
        @change="onChange"
        @close="hideImgSwiperPage"
    >
    </van-image-preview>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import Color from "@/components/Img/Color/Color.vue";
import ClassList from "@/components/Img/ClassList/ClassList.vue";
export default {
  components:{
    Color,
    ClassList  
  },
  computed:{
    imgswiperflag:{
      get:function (){
        return this.imgswiperflag;
      },
      set:function(){
        return this.hideImgSwiperPage();
      }
    },
    ...mapState({
      colorpageflag: state => state.img.colorpageflag,
      typepageflag: state => state.img.typepageflag,
      detailimgflag: state => state.img.detailimgflag,
      imgswiperflag: state => state.img.imgswiperflag,
      carinfo: state => state.img.carinfo,
      imglist: state => state.img.imglist,
      detailimglist: state => state.img.detailimglist,
      page: state => state.img.page,
      pagesize : state => state.img.pagesize,
      imgswiperindex : state => state.img.imgswiperindex,
      imgswiperlist: state => state.img.imgswiperlist,
      imageid: state => state.img.imageid
    })
  },
  methods:{
    ...mapActions({
      getImgList:'img/getImgList',
      getClassImageList:'img/getClassImageList'
    }),

    ...mapMutations({
      showColorPage:'img/showColorPage',
      showDetailImgPage: 'img/showDetailImgPage',
      hideDetailImgPage: 'img/hideDetailImgPage',
      setCarInfo:'img/setCarInfo',
      hideColorPage:'img/hideColorPage',
      hideTypePage:'img/hideTypePage',
      setImageId:'img/setImageId',
      hideImgSwiperPage:'img/hideImgSwiperPage',
      setPage:'img/setPage',
      setImgSwiperIndex:'img/setImgSwiperIndex'
    }),

    showDetailImg(ImageID){
      this.setImageId(ImageID);
      let obj = {
        SerialID: this.carinfo.SerialID,
        ImageID,
        Page: this.page,
        PageSize: this.pagesize,
        ColorID: this.carinfo.ColorId
      };
      this.getClassImageList(obj);
      this.showDetailImgPage();
    },

    onChange(index){
      if(this.imgswiperlist.length - index == 1){
        this.setPage();
        let obj = {
          SerialID: this.carinfo.SerialID,
          ImageID: this.imageid,
          Page: this.page,
          PageSize: this.pagesize,
          ColorID: this.carinfo.ColorId
        };
        this.setImgSwiperIndex(index);
        this.getClassImageList(obj);
      }
    },

    showTypePage(){
      this.$router.push('/type');
    }
  },
  created(){
    this.hideColorPage();
    this.hideTypePage();
    this.setCarInfo();
    let obj = {SerialID:this.carinfo.SerialID, ColorID:this.carinfo.ColorId};
    this.getImgList(obj);
  }
}
</script>

<style lang="stylus" scoped>
@import './Img.styl';
</style>