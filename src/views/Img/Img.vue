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
              @click.self="showPreview(item,index1)"
          />
          <div class="p" v-if="index1 == 0" :data-id="item.Id" @click="toClassImageList(item.Id)">
            <p>{{item.Name}}</p>
            <p>{{item.Count}}张></p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="img_default">未获取到数据</div>

    <!-- 详细展示页面 -->
    <ClassList v-if="classlistflag" class="img_list" :classimagelist="classimagelist" @toClassImageList="toClassImageList">
      <ul class="content">
        <div class="top_msg" :style="{top:-30+'px',bottom: 0 +'px'}">正在加载</div>
        <li v-for="(item,index) in classimagelist" :key="index">
          <img
            :style="{
              background:'url('+item.Url+')',
              backgroundSize:'cover',  
              backgroundRepeat:'no-repeat',
              backgroundPosition:'center'}"
          />
        </li>
        <div>正在加载</div>
      </ul>
    </ClassList>


    <!-- <ImgSwiper v-if="imagepreview"> -->
      <!-- <van-image-preview
        v-model="imagepreview"
        :images="imagepreviewlist"
        @change="getPreviewIndex"
        :start-position="previewindex"
      >
        <template v-slot:previewindex>第{{ previewindex }}页</template>
      </van-image-preview> -->

      <van-image-preview
        v-model="previewShowa"
        :images="imgList"
        @change="onChange"
        :start-position="index"
        :loop="false"
      >
        <template v-slot:index>{{index + 1}}/{{imgCount}}</template>
      </van-image-preview>
    <!-- </ImgSwiper> -->
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import Color from "@/components/Img/Color/Color.vue";
import ClassList from "@/components/Img/ClassList/ClassList.vue";
export default {

  data() {
    return {
      images: []
    }
  },
  components: {
    Color,
    ClassList
  },  
  computed: {

    previewShowa: {
      get: function() {
        return this.show
      },
      set: function(value) {
        this.showa(value)
      }
    },

    ...mapState({
      // 获取图片的length
      arrLen: state => state.img.arrLen,
      // 获取图片的 index 
      index: state => state.img.imgIndex,
      // 获取所有的图片
      imgList: state => state.img.imgList,
      // preview 的显示/隐藏
      show: state => state.img.show,
      data: state => state.img.data,
      Page: state => state.img.Page,
      PageSize: state => state.img.PageSize,
      classimagelist: state => state.img.classimagelist,
      classlistflag: state => state.img.classlistflag,
      colorpageflag: state => state.img.colorpageflag,
      carinfo: state => state.img.carinfo,
      imagepreview: state => state.img.imagepreview,
      previewindex: state => state.img.previewindex,
      imagepreviewlist: state => state.img.imagepreviewlist,
      imgCount: state => state.img.count
    })
  },
  methods: {
    onChange(i) {
      console.log(arrLen)


      this.saveIndex(i)
      // this.index = index;
    },
    ...mapActions({
      getImgList: "img/getImgList",
      getClassImageList: "img/getClassImageList",
      showImagePreview:'img/showImagePreview',
      concatPreviewList:'img/concatPreviewList',
      setPreviewIndex:'img/setPreviewIndex',
    }),
    ...mapMutations({
      showColorPage: "img/showColorPage",
      hideColorPage: "img/hideColorPage",
      setCarInfo: "img/setCarInfo", 
      setPage:'img/setPage',
      saveIndex:'img/saveIndex',
      showa: 'img/previewShow'
    }),
    toTypePage() {
      this.$router.push("/type");
    },
    toClassImageList(ImageID) {
      if(ImageID){
        sessionStorage.setItem('ImageID',ImageID)
      }
      let obj = {
        SerialID: this.carinfo.SerialID,
        ImageID: sessionStorage.getItem('ImageID'),
        Page: this.Page,
        PageSize: this.PageSize,
        ColorID: this.carinfo.ColorID
      };
      this.getClassImageList(obj);
    },
    getPreviewIndex(index){
      if(index >= (this.imagepreviewlist.length - 5)){
        let obj = {
          SerialID: this.carinfo.SerialID,
          ImageID: sessionStorage.getItem('ImageID'),
          Page: this.Page,
          PageSize: this.PageSize,
          ColorID: this.carinfo.ColorID,
          Index:index
        };
        this.concatPreviewList(obj);
      }
    },
    showPreview(item,index){
      console.log(index)
      // preview显示
      this.showa(true)
      // 左右滑动设置index
      this.saveIndex(index)

      sessionStorage.setItem('ImageID',item.Id)
      let obj = {
        SerialID: this.carinfo.SerialID,
        ImageID: item.Id,
        Page: this.Page,
        PageSize: this.PageSize,
        ColorID: this.carinfo.ColorID
      };
      this.showImagePreview(obj)
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