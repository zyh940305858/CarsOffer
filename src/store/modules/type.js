
const state = {
    newarr: [],
    typelist: [],
    currentlist: [],
    currentindex: 0
};

function sortCurrentList(list) {
    list.sort((a, b) => {
      if (a.exhaust_str == b.exhaust_str) {
        if (a.max_power_str == b.max_power_str) {
          return b.inale_type > a.inhale_type;
        } else {
          return a.max_power - b.max_power;
        }
      } else {
        return a.exhaust - b.exhaust;
      }
    });
    return list;
  }


  function formatlist(list) {
    //拼接每款车的key  排量/功率 吸气方式
    list = list.map(item => {
      item.key = `${item.exhaust_str}/${item.max_power_str} ${item.inhale_type}`;
      return item;
    });

    let newlist = [];
    list.forEach(item => {
      let index = newlist.findIndex(value => value.key == item.key);
      if (index !== -1) {
        newlist[index].list.push(item);
      } else {
        newlist.push({
          key: item.key,
          list: [item]
        });
      }
    });
    return newlist;
  }

const mutations = {
    getCurrentList (state,data) {
        let list = state.typelist.filter( item => item.market_attribute.year == state.newarr[state.currentindex]);
        list = sortCurrentList(list);
        state.currentlist = formatlist(list);
    },
    setCurrentIndex(state,data){
        state.currentindex = data;
    },
    setNewArr(state,data){
      state.newarr = JSON.parse(sessionStorage.getItem("yeararr"));
    },
    setTypeList(state,data){
      state.typelist = JSON.parse(sessionStorage.getItem("typelist"));
    },
    setCarId(state,data){
      console.log(data)
      let carinfo = JSON.parse(sessionStorage.getItem('carinfo'));
      carinfo.car_Id = data.car_id;
      carinfo.year = data.market_attribute.year;
      carinfo.car_name = data.car_name;
      sessionStorage.setItem('carinfo',JSON.stringify(carinfo));
    }
};

const actions = {
    async getCurrentList({commit},payload){
        await commit('setCurrentIndex',payload)
        await commit('setNewArr')
        await commit('setTypeList')
        await commit('getCurrentList')
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}