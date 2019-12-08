import { getMasterCarDetail } from '@/services/index';

const state = {
    cardetaildata:{},   //原始数据
    yeararr:[],         //年份数组
    currentindex:0,     //选中下标
    currentlist:[],     //选中的数据
    newarr:[]      
}

//选中数据排序方法
function sortCurrentList(list){
    list.sort((a,b)=>{
        if(a.exhaust_str == b.exhaust_str){
            if(a.max_power_str == b.max_power_str){
                return b.inale_type > a.inhale_type;
            }else{
                return a.max_power - b.max_power;
            }
        }else{
            return a.exhaust - b.exhaust;
        }
    })
    return list;
}

//格式化数据
function formatlist(list){
    //拼接每款车的key  排量/功率 吸气方式
    list = list.map(item => {
        item.key = `${item.exhaust_str}/${item.max_power_str} ${item.inhale_type}`;
        return item;
    })

    let newlist = [];
    list.forEach(item => {
        let index = newlist.findIndex(value => value.key == item.key);
        if(index !== -1){
            newlist[index].list.push(item);
        }else{
            newlist.push({
                key:item.key,
                list:[item]
            })
        }
    });
    return newlist;
}


const mutations = {
    setCarDeailData(state,data){
        state.cardetaildata = data;
        //1.拿到年份
        let yeararr = ["全部"];
        let year = data.list.map(item => item.market_attribute.year);
        yeararr = yeararr.concat([...new Set(year)]);
        state.newarr = yeararr;
        //2.拿到当前选择年份的数据
        let currentlist = [];
        if(state.currentindex == 0 || state.newarr.length == 1){
            currentlist = data.list;
        }else{
            currentlist = data.list.filter(item => item.market_attribute.year == state.newarr[state.currentindex])
        }
        //3.给当前车型排序
        currentlist = sortCurrentList(currentlist);
        //4.聚合key相同的车款数据
        currentlist = formatlist(currentlist);
        state.currentlist = currentlist;
    },

    setCurrentIndex(state,data){
        //拿到当前下标
        state.currentindex = data;
        
        let currentlist = [];
        //判断如果选中下标为0  或者只有两项内容
        if(state.currentindex == 0 || state.newarr.length == 1){
            currentlist = state.cardetaildata.list;  //把整个列表给当前列表
        }else{
            //根据内容筛选数据
            currentlist = state.cardetaildata.list.filter(item => item.market_attribute.year == state.newarr[state.currentindex])
        }
        currentlist = sortCurrentList(currentlist);
        currentlist = formatlist(currentlist);
        state.currentlist = currentlist;
    }
}

const actions = {
    //拿到所有数据
    async getMasterCarDetail ({commit},payload) {
        let res = await  getMasterCarDetail(payload);
        await commit('setCarDeailData',res.data)
    },

    //设置当前下标及数据
    async setCurrentIndex({commit},payload){
        console.log(payload)
        await commit('setCurrentIndex',payload)
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}