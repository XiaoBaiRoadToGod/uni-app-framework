import {
  getDataLists
} from '@/apis/home'
export default {
  namespaced: true,
  state: {
    text: 'home',
    dataLists: []
  },
  mutations: {
    updateDataLists(state, data) {
      state.dataLists = data
    }

  },
  actions: {
    getDataLists({ commit, getters }, par) {
      // console.log(store)
      return new Promise(async(resolve, reject) => {
        try {
          const data = await getDataLists(par)
          const lists = getters.dataLists.concat(data.data.rows)
          if (data.data.code) {
            commit('updateDataLists', lists)
          }

          resolve(data)
        } catch (e) {
          reject(e)
        }
      })
    }
  },
  getters: {
    dataLists(state) {
      return state.dataLists
    }
  }
}
