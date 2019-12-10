<template>
    <div>
        <div>
            <p :class="ind==0?'active':''" v-for="(item,ind) in listind" :key="ind" @click="dj(item,ind)" ref="ps">{{item}}</p>
            <ul>
                <li v-for="(items,inds) in list" :key="inds">
                    {{items.Name}}
                </li>
            </ul>
        </div>
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
            listind:[],
            list:[],
            sid:0
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
        dj(ind,id){
            this.list=this.Colorlist[ind]
            this.$refs.ps[this.sid].className='';
            this.$refs.ps[id].className='active'
            this.sid=id;
        }
    },
    created(){
        let arr=[];
        for(let ind in this.Colorlist){
            arr.push(ind);
        }
        this.listind=arr;
        this.list=this.Colorlist[arr[0]];
    },
    mounted(){
        const { id } = this.$route.query;
        // console.log(this.Colorlist)
        this.getModelImageYearColor(id);
    }
}
</script>
<style>
.active{
    color: red;
}
</style>