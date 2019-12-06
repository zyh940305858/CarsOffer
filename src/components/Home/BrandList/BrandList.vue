<template>
    <div class="brand_list">
        <div v-for="(item,index) in list" :key="index" :id="item.title">
            <p @click="hideRightProup(false)">{{item.title}}</p>
            <ul>
                <li :id="item1.MasterID" v-for="(item1,index1) in item.children" :key="index1" @click="setTypeList(item1.MasterID)">
                    <img v-lazy="item1.CoverPhoto">
                    <span>{{item1.Name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapActions,mapMutations} from 'vuex'

export default {
    props:['list'],
    methods:{
        ...mapActions({
            //抛出获取品牌列表函数
            getMasterTypeList:"home/getMasterTypeList"
        }),
        ...mapMutations({
            //抛出展示和隐藏划出层函数
            showRightProup:"home/showRightProup",
            hideRightProup: "home/hideRightProup"
        }),
        setTypeList(id){
            this.getMasterTypeList(id);
            this.showRightProup(true);
        }
    }
}
</script>

<style lang="stylus" scoped>
@import './BrandList.styl';
</style>