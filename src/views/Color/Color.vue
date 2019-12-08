<template>
  <div class="color">
      <p>全部颜色</p>
      <div>
          <p class="type">
              <span  @click="getCurrentIndex(index)" :class="index === currentindex ? 'active':''" v-for="(item,index) in yearsarr" :key="index">{{item}}</span>
          </p>
          <ul>
              <li v-for="(item,index) in currentlist" :color-id="item.ColorId" :key="index">
                  <span :style="currentcolorlist[index]"></span>
                  {{item.Name}}
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex';
export default {
    computed:{
        ...mapState({
            yearsarr:state => state.color.yearsarr,
            currentindex:state => state.color.currentindex,
            currentlist:state => state.color.currentlist,
            currentcolorlist:state => state.color.currentcolorlist
        })
    },

    methods:{
        ...mapActions({
            getColorList:'color/getColorList',
            getCurrentIndex:'color/getCurrentIndex'
        })
    },
    
    async created(){
        let SerialID = await sessionStorage.getItem('SerialID');
        await this.getColorList(SerialID);
        await this.getCurrentIndex(0);
    }
}
</script>

<style lang="stylus" scoped>
@import './Color.styl';
</style>