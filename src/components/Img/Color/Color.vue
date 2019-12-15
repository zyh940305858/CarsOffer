<template>
  <div class="color">
      <p @click="hideColorPage">全部颜色</p>
      <div>
          <p class="type">
              <span  @click="getCurrentIndex(index)" :class="index === currentindex ? 'active':''" v-for="(item,index) in yearsarr" :key="index">{{item}}</span>
          </p>
          <ul>
              <li @click="toImgPage(item)" v-for="(item,index) in currentlist" :color-id="item.ColorId" :key="index">
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
            currentcolorlist:state => state.color.currentcolorlist,
            carinfo:state => state.img.carinfo
        })
    },
    methods:{
        ...mapActions({
            getColorList:'color/getColorList',
            getCurrentIndex:'color/getCurrentIndex',
            getImgList:'img/getImgList'
        }),
        ...mapMutations({
            hideColorPage:'img/hideColorPage',
            setCarInfo:'img/setCarInfo',
            setColorId:'color/setColorId'
        }),
        toImgPage(item){
            this.setColorId(item);
            this.setCarInfo();
            if(this.carinfo.car_Id){
                let obj = {SerialID:this.carinfo.SerialID,CarId:this.carinfo.car_Id, ColorID:this.carinfo.ColorId };
                this.getImgList(obj);
            }else{
                let obj = {SerialID:this.carinfo.SerialID, ColorID:this.carinfo.ColorId }
                this.getImgList(obj);
            }
            this.hideColorPage();
        }
    },
    
    async created(){
        let SerialID = this.carinfo.SerialID;
        await this.getColorList(SerialID);
        this.getCurrentIndex(0);
    }
}
</script>

<style lang="stylus" scoped>
@import './Color.styl';
</style>