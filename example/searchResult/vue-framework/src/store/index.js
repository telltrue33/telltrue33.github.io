import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchList: []
  },
  getters: {
    getSearchList(state) {
        return state.searchList;
    }
  },
  mutations: {
    setSearchList(state, newData) {
        state.searchList = newData;
    }
  },
  actions: {
    setSearchList(context, newData) {
        context.commit('setSearchList', newData)
    }
  }
})
