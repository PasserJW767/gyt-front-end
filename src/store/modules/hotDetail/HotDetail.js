import axios from "axios";
const state={
  hotDetail:{}
}

const actions={
  getHotDetail({commit},itemCode) {
    let requestPath='/api/gyt/natmehaHotspotDetail'//实际加上itemcode参数取api查找数据
    axios.get(requestPath,{params:{'itemCode':itemCode}})
      .then(response=>{
        commit('storeHotDetail',response.data.data)
      })
      .catch(err=>{
        throw err;
      });
  }
}

const mutations={
  storeHotDetail(state, data) {
    state.hotDetail=data
  }
}

const getters={
  hotDetail: (state)=>{
    return state.hotDetail
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}
