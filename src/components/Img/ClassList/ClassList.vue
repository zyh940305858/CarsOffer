<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
        <div class="top_msg" :style="{top:-30+'px',bottom: 0 +'px'}">正在刷新</div>
      <li v-for="(item,index) in [1,2,3,4,5,6,7,8,9]" :key="index">{{item}}</li>
      <div>正在加载</div>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  created() {
    this.$nextTick(() => {
      let MScroll = new BScroll(this.$refs.wrapper, {
        pullDownRefresh: {
          threshold: 50,
          stop: 30
        },
        pullUpLoad: {
          threshold: 50
        }
      });
    });
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
.top_msg{
    height: 30px;
    line-height: 30px;
    text-align: center;
    position: absolute;
}
</style>