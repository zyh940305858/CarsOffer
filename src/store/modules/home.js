import { getMasterBrandList,getMasterTypeList } from '@/services/index'

const state = {
    list: [],
    arr:[],
    homeproupflag:false,
    typelist:[]
};

const mutations = {
    setArr(state,data){
        state.arr = ['#'].concat([...new Set(data.map(item => {
            return item.Spelling[0]
        }))]);
    },
    setAllList(state, data) {
        let newarr = state.arr;
        let newList = newarr.slice(1).map((ele,index) => {
            return {
                title:ele,
                children:data.filter((item,index)=>{
                    return item.Spelling.slice(0,1) === ele;
                })
            };
        });
        state.list = newList;
    },
    getTypeList(state,data){
        state.typelist = data;
    },
    showRightProup(state,data){
        state.homeproupflag = data;
    },
    hideRightProup(state,data){
        state.homeproupflag = data;
    }
};

const actions = {
    async getMasterBrandList({commit}, payload) {
        let res = await getMasterBrandList();
        await commit('setArr', res.data);
        await commit('setAllList', res.data);
    },
    async getMasterTypeList({commit},payload){
        console.log(payload)
        let res = await getMasterTypeList(payload);
        await commit('getTypeList',res.data);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}