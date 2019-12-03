<template>
    <div class="brand_list">
        <div v-for="(item,index) in list" :key="index" :id="item.title">
            <p>{{item.title}}</p>
            <ul>
                <li :id="item1.MasterID" v-for="(item1,index1) in item.children" :key="index1">
                    <img :src="item1.CoverPhoto" alt="">
                    <span>{{item1.Name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:['list']
}
</script>

<style lang="stylus" scoped>
@import './BrandList.styl';
</style>