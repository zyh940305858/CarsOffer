<template>
    <div>
        颜色
    </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
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
        ...mapState({
            Colorlist : state => state.color.Colorlist
        })
    },
    methods:{
        ...mapActions({
            getModelImageYearColor : 'color/getModelImageYearColor'
        }),
    },
    created(){
        
    },
    mounted(){
        const { id } = this.$route.query;
        console.log(this.Colorlist)
        this.getModelImageYearColor(id);
    }
}
</script>
<style scoped lang="">

</style>