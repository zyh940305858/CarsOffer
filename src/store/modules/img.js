import { getImgList } from '@/services/index';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

const state = {
    imglist:[],
    listarr:[]
};

const mutations = {
    //获取到所有图片数据
    getImgListData(state,data){
        let listarr = [];
        data.forEach(item=>{
            for(var i = 0;i<item.List.length;i++){
                item.List[i].Url = item.List[i].Url.replace('{0}',1);
            }
            listarr.push(...item.List)
        })
        state.listarr = listarr;
        console.log(state.listarr)
    }
};

const actions = {
    async getImgList({commit},payload){
        let res = await getImgList(payload);
        await commit('getImgListData',res.data)
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}