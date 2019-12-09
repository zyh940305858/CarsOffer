const state = {
    cityflag:false
};

const mutations = {
    showCity(state,data){
        state.cityflag = data;
    },
    hideCity(state,data){
        state.cityflag = data;
    }
};

const actions = {
    async showCity({commit},payload){
        await commit('showCity',payload);
    },
    async hideCity({commit},payload){
        await commit('hideCity',payload);
    }
};

export default {
    namespaced:true,
    state,
    mutations,
    actions
}