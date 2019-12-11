import { getCityList } from '@/services';

const state = {
    provinecflag:false,
    provineclist:[],
    cityflag:false,   
    citylist:[],
    carinfo:JSON.parse(sessionStorage.getItem('carinfo'))
};

const mutations = {
    showProvinec(state,data){
        state.provinecflag = data;
    },
    hideProvinec(state,data){
        state.provinecflag = data;
    },
    showCity(state,data){
        state.cityflag = data;
    },
    hideCity(state,data){
        state.cityflag = data;
    },
    getProvinecList(state,data){
        console.log(data)
        state.provineclist = data;
    },
    getCityList(state,data){
        console.log(data)
        state.citylist = data;
    }
};

const actions = {
    async showProvinec({commit},payload){
        await commit('showProvinec',payload);
    },
    async hideProvinec({commit},payload){
        await commit('hideProvinec',payload);
    },
    async showCity({commit},payload){
        await commit('showCity',payload);
    },
    async hideCity({commit},payload){
        await commit('hideCity',payload);
    },
    async getProvinecList({commit},payload){
        let res = await getCityList();
        await commit('getProvinecList',res.data)
    },
    async getCityList({commit},payload){
        let res = await getCityList(payload);
        await commit('getCityList',res.data)
    }
};

export default {
    namespaced:true,
    state,
    mutations,
    actions
}