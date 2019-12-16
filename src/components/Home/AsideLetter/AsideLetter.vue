<template>
  <div
    class="aside_letter"
    ref="container"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd"
  >
    <ul>
      <li v-for="(item,index) in arr" :key="index" @click="jump(item)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    arr: {
      type: Array,
      default() {
        return [];
      }
    }
  },

  //监听arr变化函数
  watch: {
    arr: function() {
      this.$nextTick(() => {
        this.offsetTop =
          (window.innerHeight - this.$refs.container.offsetHeight) / 2;
        // console.log("offsetTop...", this.offsetTop);
      });
    }
  },
  methods: {
    //点击触发回调
    jump(item) {
      this.$emit("Parent_jump", item);
    },
    touchStart(e) {
      //当前点击位置相对于页面  和  相对于父元素位
      let y = e.touches[0].pageY - this.offsetTop;
      let index = Math.floor(y / 18);   //除18得出当前在第几个字母上
      // console.log("start...", e.touches[0], this.arr[index]);
    },
    touchMove(e) {
      let y = e.touches[0].pageY - this.offsetTop;//当前点击位置相对于页面  和  相对于父元素位
      let index = Math.floor(y / 18);//除18得出当前在第几个字母上
      // 处理边界
      index < 1
        ? (index = 1)
        : index > this.arr.length - 1
        ? (index = this.arr.length - 1)
        : null;
      this.$emit("Parent_jump", this.arr[index]);
      // console.log("start...", this.arr[index]);
    },
    touchEnd(e) {

    }
  }
};
</script>

<style lang="stylus" scoped>
@import './AsideLetter.styl';
</style>