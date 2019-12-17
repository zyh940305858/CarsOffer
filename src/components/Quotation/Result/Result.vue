<template>
  <div class="result">
      <div class="wrap">
          <img :src="require('@/assets/img/wrap-icon.png')" alt="">
          <p>询价成功</p>
          <p>稍后有专业汽车顾问为你服务<br>请保持手机畅通</p>
          <div @click="hideResult"><button>确定</button></div>
      </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
    methods:{
        ...mapMutations({
            hideResult:'quotation/hideResult'
        })
    }
}
</script>

<style lang="stylus" scoped>
@import './Result.styl';
</style>