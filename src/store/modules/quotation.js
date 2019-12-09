import { getCityList } from '@/services';

const state = {
    cityflag:false,
    citylist:[]
};

const mutations = {
    showCity(state,data){
        state.cityflag = data;
    },
    hideCity(state,data){
        state.cityflag = data;
    },
    getCityList(state,data){
        console.log(data)
        state.citylist = data;
    }
};

const actions = {
    async showCity({commit},payload){
        await commit('showCity',payload);
    },
    async hideCity({commit},payload){
        await commit('hideCity',payload);
    },
    async getCityList({commit},payload){
        let res = await getCityList();
        await commit('getCityList',res.data)
    }
};

export default {
    namespaced:true,
    state,
    mutations,
    actions
}