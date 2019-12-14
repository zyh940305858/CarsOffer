<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  created() {
    this.$nextTick(() => {
      this.scrollinit();
    });
  },
  computed: {
    ...mapState({
      Page: state => state.img.Page,
      PageSize: state => state.img.PageSize,
      classimagelist: state => state.img.classimagelist,
      carinfo: state => state.img.carinfo
    })
  },
  methods: {
    ...mapActions({
      getClassImageList: "img/getClassImageList",
      setPullUpData:'img/setPullUpData'
    }),
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
            this.$emit("toClassImageList");
          }, 2000);
        } else if (pos.y < this.MScroll.maxScrollY - 30) {
          //下拉加载
          setTimeout(() => {
          let obj = {
            SerialID: this.carinfo.SerialID,
            ImageID: sessionStorage.getItem('ImageID'),
            Page: this.Page,
            PageSize: this.PageSize,
            ColorID: this.carinfo.ColorID
          };
          this.setPullUpData(obj);
          }, 2000);
        }
      });
    }
  }
};
</script>

<style scoped>
.wrapper {
  background-color: red;
  width: 100%;
  height: 100%;
  background-color: #ccc;
  position: relative;
}
.content {
  width: 100%;
}
li {
  height: 200px;
  background-color: red;
  border-bottom: 1px solid #ddd;
}
.top_msg {
  height: 30px;
  line-height: 30px;
  text-align: center;
  position: absolute;
}
</style>