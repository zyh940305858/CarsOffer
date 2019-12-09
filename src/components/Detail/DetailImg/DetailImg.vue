<template>
  <div class="detailimg" @click="goImg">
      <img :src="imgdata.url" alt="">
      <span>{{imgdata.pic_group_count}}张照片</span>

  </div>
</template>

<script>
 
export default {
  props:["imgdata"],
  methods: {
    goImg() {
      const { SerialID } = this.$route.query
      this.$router.push(`/img?id=${SerialID}`)
    }
  } 
}
</script>

<style lang="stylus" scoped>
@import './DetailImg.styl';
</style>