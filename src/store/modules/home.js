import { getMasterBrandList } from '@/services/index'

const state = {
    list: [],
    arr:[]
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
        console.log(newList)
        state.list = newList;
    }
};

const actions = {
    async getMasterBrandList({commit}, payload) {
        let res = await getMasterBrandList();
        await commit('setArr', res.data);
        await commit('setAllList', res.data);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}