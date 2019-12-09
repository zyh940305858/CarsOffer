<template>
    <div class="header">
        <p @click="Color()">颜色</p>
        <p>车款</p>
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

        }
    },
    computed:{
        
    },
    methods:{
        Color(){
            const { id } = this.$route.query
            // console.log(id)
            this.$router.push({path:'/color',query:{id}})
        }
    },
    created(){
        // // this.getModelImageYearColor({ SerialID: id });
        // console.log(this.$route.query)
    },
    mounted(){

    }
}
</script>
<style scoped lang="stylus">
@import './ImgTit.styl'
</style>