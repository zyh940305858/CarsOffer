import { getImageList } from '@/services'  

const state = {
    list: []
}

const mutations = {
    updateList(state, payload) {
        state.list = payload
    }
}

const actions = {
    async getImgList({commit}, payload) {
        const res = await getImageList(payload)
        res.data.forEach(item => {
            item.List.forEach(item2 => {
                item2.Url = item2.Url.replace('{0}', 3)
            })
        })
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