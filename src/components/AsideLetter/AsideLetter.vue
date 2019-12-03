<template>
  <div class="aside_letter">
    <ul v-for="(item,index) in arr" :key="index">
      <li>{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["arr"]
};
</script>

<style lang="stylus" scoped>
@import './AsideLetter.styl';
</style>