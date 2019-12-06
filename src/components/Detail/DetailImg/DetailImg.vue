<template>
  <div class="detailimg">
      <img :src="imgdata.url" alt="">
      <span>{{imgdata.pic_group_count}}张照片</span>
  </div>
</template>

<script>
export default {
  props:["imgdata"]
}
</script>

<style lang="stylus" scoped>
@import './DetailImg.styl';
</style>