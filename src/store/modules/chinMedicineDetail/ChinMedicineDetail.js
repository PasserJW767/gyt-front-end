import axios from "axios";
const state={
  chinMedicineDetail:{}
}

const actions={
  getChinMedicineDetail({commit},itemCode) {
    let requestPath='/api/gyt/natmehaChineseMedicineDetail'//实际加上itemcode参数取api查找数据
    axios.get(requestPath,{params:{'itemCode':itemCode}})
      .then(response=>{
        commit('storeChinMedicineDetail',response.data.data)
      })
      .catch(err=>{
        throw err;
      });
  }
}

const mutations={
  storeChinMedicineDetail(state, data) {
    state.chinMedicineDetail=data
  }
}

const getters={
  chinMedicineDetail: (state)=>{
    return state.chinMedicineDetail
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}
