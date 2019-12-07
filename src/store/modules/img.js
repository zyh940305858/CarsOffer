import { getImgList } from '@/services/index';

const state = {
    
};

const mutations = {
    getImgListData(state,data){
        console.log(data)
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