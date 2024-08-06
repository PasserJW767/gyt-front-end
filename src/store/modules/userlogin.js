import axios from "axios";
const state = {
  logUser: {}
}

const actions = {
  /*登录*/
   getUserForLogin({commit},{username,password}) {
     return axios.get(`/api/user/login?username=${username}&password=${password}`)
      .then(response => {
        commit('storeLogUser', response.data.data)
        const data = response.data.data;
        return data;
      })
      .catch(err => {
        throw new Error(err)
      })
  },

}

//同步
const mutations = {
  /*存储登录用户*/
  storeLogUser(state, data) {
    state.logUser = data;
  },
}

const getters = {
  /*获取登录用户*/
  getLogUser: (state) => {
    return state.logUser;
  },
}
export default {
  state,
  actions,
  mutations,
  getters,
}
