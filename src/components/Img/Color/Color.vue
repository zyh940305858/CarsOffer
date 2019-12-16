<template>
  <div class="color">
      <p @click="hideColorPage">全部颜色</p>
      <div>
          <!-- 颜色列表 -->
          <p class="type">
              <span  @click="getCurrentIndex(index)" :class="index === currentindex ? 'active':''" v-for="(item,index) in yearsarr" :key="index">{{item}}</span>
          </p>

          <!-- 颜色内容 -->
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
            yearsarr:state => state.color.yearsarr, //颜色数组
            currentindex:state => state.color.currentindex, //选中的下标
            currentlist:state => state.color.currentlist, //选中的列表
            currentcolorlist:state => state.color.currentcolorlist, //选中的颜色列表
            carinfo:state => state.img.carinfo //sessionstroage中的carinfo
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

        //跳转到图片页  设置颜色到carinfo 并重新请求数据  隐藏颜色页面
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

    //获取到SerialID 请求颜色列表  知道选中的下标
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