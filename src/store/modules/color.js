import { getColorList } from '@/services';

const state = {
    colorlist:[],           //颜色的全部数据
    yearsarr:[],            //颜色的年份数据
    currentindex:0,         //当前点击的下标
    currentlist:[],         //点击下标对应的列表
    currentcolorlist:[]     //背景颜色展示的列表
};

//整理背景颜色数据格式
function setBackgroundColor(list) {
    let currentcolorlist = list.map(item=>{return  `background-color:${item.Value}`})
    return currentcolorlist;
}

const mutations = {
    //设置全部的颜色数据
    setColorList(state,data){
        state.colorlist = data;
    },

    //设置年份数组
    setYearsArr(state,data){
        state.yearsarr = Object.keys(data);
        console.log(Object.keys(data));
    },

    //设置当前点击下标 并触发对应的数据改变
    setCurrentIndex(state,data){
        state.currentindex = data;
        console.log(state.colorlist[state.yearsarr[data]])
        state.currentlist = state.colorlist[state.yearsarr[data]];
        state.currentcolorlist = setBackgroundColor(state.currentlist);
    },

    //设置颜色id 改变本地存储的carinfo对象
    setColorId(state,data){
        let carinfo = JSON.parse(sessionStorage.getItem('carinfo'));
        carinfo.ColorId = data.ColorId;
        carinfo.ColorName = data.Name;
        sessionStorage.setItem('carinfo',JSON.stringify(carinfo));
    }
};

const actions = {
    //获取到颜色全部数据
    async getColorList({commit},payload){
        let res = await getColorList(payload);
        console.log(res)
        await commit('setColorList',res.data);
        await commit('setYearsArr',res.data)
    },

    //获取到当前点击下标
    async getCurrentIndex({commit},payload){
        await commit('setCurrentIndex',payload);
    }
};


export default {
    namespaced: true,
    state,
    mutations,
    actions
}