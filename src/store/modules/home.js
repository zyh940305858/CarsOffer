import { getMasterBrandList,getMasterTypeList } from '@/services/index'

const state = {
    list: [],   //品牌列表
    arr:[], //右侧侧边栏数组
    homeproupflag:false,//弹出框控制
    typelist:[]  //类型列表
};

const mutations = {
    //设置侧边栏数据
    setArr(state,data){
        state.arr = ['#'].concat([...new Set(data.map(item => {
            return item.Spelling[0]
        }))]);
    },

    //设置品牌数据
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

    //设置类型列表
    setTypeList(state,data){
        state.typelist = data;
    },

    //展示弹出框
    showRightProup(state,data){
        state.homeproupflag = data;
    },
    
    //隐藏弹出框
    hideRightProup(state,data){
        state.homeproupflag = data;
    }
};

const actions = {
    //获取到首页所有数据
    async getMasterBrandList({commit}, payload) {
        let res = await getMasterBrandList();
        await commit('setArr', res.data);
        await commit('setAllList', res.data);
    },

    //获取到类型列表
    async getMasterTypeList({commit},payload){
        console.log(payload)
        let res = await getMasterTypeList(payload);
        await commit('setTypeList',res.data);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}