<template>
  <div class="img">
    <!-- 头部导航栏 -->
    <div class="flex-row title">
      <p @click="showColorPage">
        <span v-if="carinfo.ColorName">{{carinfo.ColorName}}</span>
        <span v-else>颜色</span>
      </p>
      <p>
        <span @click="toTypePage">车款</span>
      </p>
    </div>

    <!-- 颜色组件 -->
    <Color v-show="colorpageflag"></Color>


    <!-- 默认展示页面 -->
    <div class="img_default" v-if="data.length">
      <div v-for="(item,index) in data" :key="index">
        <div :index="index1" v-for="(item1,index1) in item.List" :key="index1">
          <img
            :style="{
              background:'url('+item1.Url+')',
              backgroundSize:'cover',  
              backgroundRepeat:'no-repeat',
              backgroundPosition:'center'}"
          />
          <div class="p" v-if="index1 == 0" :data-id="item.Id" @click="toClassImageList(item.Id)">
            <p>{{item.Name}}</p>
            <p>{{item.Count}}张></p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="img_default">
      未获取到数据  
    </div> 

    <!-- 详细展示页面 -->
    <ClassList v-if="classlistflag" class="img_list"></ClassList>
    <!-- <ul v-if="" >
      <li v-for="(item,index) in classimagelist" :key="index">
        <img
          :style="{
              background:'url('+item.Url+')',
              backgroundSize:'cover',  
              backgroundRepeat:'no-repeat',
              backgroundPosition:'center'}"
        />
      </li>
    </ul> -->
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import Color from "@/components/Img/Color/Color.vue";
import ClassList from '@/components/Img/ClassList/ClassList.vue';
export default {
  components: {
    Color,
    ClassList
  },
  computed: {
    ...mapState({
      data: state => state.img.data,
      Page: state => state.img.Page,
      PageSize: state => state.img.PageSize,
      classimagelist: state => state.img.classimagelist,
      classlistflag: state => state.img.classlistflag,
      colorpageflag: state => state.img.colorpageflag,
      carinfo: state => state.img.carinfo
    })
  },
  methods: {
    ...mapActions({
      getImgList: "img/getImgList",
      getClassImageList: "img/getClassImageList"
    }),
    ...mapMutations({
      showColorPage: "img/showColorPage",
      hideColorPage: "img/hideColorPage",
      setCarInfo:"img/setCarInfo"
    }),
    toTypePage() {
      this.$router.push("/type");
    },
    toClassImageList(ImageID) {
      let obj = {
        SerialID: this.carinfo.SerialID,
        ImageID,
        Page: this.Page,
        PageSize: this.PageSize,
        ColorID: this.carinfo.ColorID
      };
      this.getClassImageList(obj);
    }
  },
  created() {
    this.hideColorPage();
    this.setCarInfo();
    if (JSON.parse(sessionStorage.getItem("carinfo")).ColorId) {
      let obj = {
        SerialID: this.carinfo.SerialID,
        CarId: this.carinfo.car_Id,
        ColorID: this.carinfo.ColorId
      };
      this.getImgList(obj);
    } else {
      let obj = { SerialID: this.carinfo.SerialID, CarId: this.carinfo.car_Id };
      this.getImgList(obj);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import './Img.styl';
</style>