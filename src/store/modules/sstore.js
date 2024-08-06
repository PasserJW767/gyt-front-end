import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fenshu:[],
  },
  mutations: {
    updateData(state,data){
      state.fenshu = data
    }
  },
})

