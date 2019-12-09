<template>
  <div class="img-default">
    <ul v-for="(item,index) in list" :key="index">
      <li v-for="(item2,index2) in item.List" :key="index2">
        <img :src="item2.Url" alt />
        <div v-if="index2==0" @click="imgList(item.List)">
          <p>{{item.Name}}</p>
          <p>{{item.Count}}张</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      list: state => state.img.list
    })
  },
  methods: {
    ...mapActions({
      getImgList: "img/getImgList"
    }),
    imgList(itemlist){
      // console.log(itemlist)
      this.$router.push({path:'/itemlist',query:{itemlist:itemlist}})
    }
  },
  mounted() {
      
    const { id } = this.$route.query;
    this.getImgList({ SerialID: id });
  }
};
</script>
<style scoped lang="stylus">
@import './ImgList.styl';
</style>