import { getModelImageYearColor } from '@/services'  

const state = {
    Colorlist: []
}

const mutations = {
    updateList(state, payload) {
        state.Colorlist = payload
    }
}

const actions = {
    async getModelImageYearColor({commit}, payload) {
        const res = await getModelImageYearColor(payload)
        await commit('updateList', res.data)
        // console.log(res.data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}