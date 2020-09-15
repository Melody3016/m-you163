import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    indexData: []
  },
  mutations: {
    setIndexData (state, data) {
      state.indexData = data
    }
  },
  actions: {
    /* getIndexData (store, data) {
      store.commit('setIndexData', data)
    } */
  },
  modules: {
  }
})
