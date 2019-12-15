import { getCityList, autoGetPosition, getDealerList } from '@/services';

const state = {
    provinecflag:false,
    provineclist:[],
    cityflag:false,   
    citylist:[],
    carinfo:JSON.parse(sessionStorage.getItem('carinfo')),
    typeflag:false,
    carinfo:{},
    position:{},
    dealerlist:[],
    currentcity:{}
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
        state.provineclist = data;
    },
    getCityList(state,data){
        state.citylist = data;
    },
    setCarInfo(state,data){
        state.carinfo = JSON.parse(sessionStorage.getItem('carinfo'));
    },
    setPosition(state,data){
        localStorage.setItem('position',JSON.stringify(data));
        state.position = data;
    },
    setDealerList(state,data){
        state.dealerlist = data.list;
    },
    setUserInfo(state,data){
        sessionStorage.setItem('userinfo',JSON.stringify(data));
        state.currentcity = data;
    }
};

const actions = {
    async getProvinecList({commit},payload){
        let res = await getCityList();
        commit('getProvinecList',res.data)
    },
    async getCityList({commit},payload){
        let res = await getCityList(payload);
        commit('getCityList',res.data)
    },
    async autoGetPosition({commit},payload){
        let res = await autoGetPosition();
        commit('setPosition',res.data)
    },
    async getDealerList({commit},payload){
        let {carId, cityId} = payload;
        let res = await getDealerList(carId, cityId);
        commit('setDealerList',res.data)
    }
};

export default {
    namespaced:true,
    state,
    mutations,
    actions
}