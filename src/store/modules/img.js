import { getImgList,getClassImageList } from '@/services/index';

const state = {
    data:[],//汽车五个部位的展示图片
    Page:1,
    PageSize:30,
    classimagelist:[],
    classlistflag:false,
    colorpageflag:false,
    carinfo:JSON.parse(sessionStorage.getItem("carinfo"))
};

const mutations = {
    //获取到所有图片数据
    getImgListData(state,data){
        state.data = data;
    },
    //获取到图片类型数据
    setClassImageList(state,data){
        state.classimagelist = data;
    },
    showClassList(state,data){
        state.classlistflag = data;
    },
    hideClassList(state,data){
        state.classlistflag = data;
    },
    setCarInfo(state,data){
         state.carinfo = JSON.parse(sessionStorage.getItem("carinfo"));
    },
    showColorPage(state,data){
        state.colorpageflag = true;
    },
    hideColorPage(state,data){
        state.colorpageflag = false;
    }
};

//重构数据方法使图片可用
function reconstructionList (list) {
    if(list[0].List){
        list.forEach(item=>{
            item.List.forEach(value=>{
               value.Url=value.Url.replace("{0}",value.LowSize)
            })
        })
    }else{
        list.forEach(item=>{
            item.Url=item.Url.replace("{0}",item.LowSize)
        })
    }
    return list;
}

const actions = {
    async getImgList({commit},payload){
        let res = await getImgList(payload);
        console.log(res)
        if(res.data.length > 0){
            let data = await reconstructionList(res.data);
            await commit('hideClassList',false);
            await commit('getImgListData',data);
        }else{
            await commit('getImgListData',[]);
        }
    },
    async getClassImageList({commit},payload){
        let res = await getClassImageList(payload);
        let data = await reconstructionList(res.data.List);
        await commit("setClassImageList",data);
        await commit('showClassList',true);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}