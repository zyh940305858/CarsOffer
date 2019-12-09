<template>
    <div>
        <ul>
            <li v-for="(item,index) in itemlist" :key="index">
                <img :src="item.Url" alt />
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            itemlist:{}
        }
    },
    computed:{
        
    },
    methods:{
        
    },
    created(){
        const { itemlist } = this.$route.query
        this.itemlist = itemlist;
    },
    mounted(){
    }
}
</script>
<style scoped lang="stylus">
@import './Itemlist.styl'
</style>