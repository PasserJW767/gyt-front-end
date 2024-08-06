import axios from "axios";
const state={
  loading: false
}

const actions={
  queryMessage ({ commit },  {hotspotCode,userCode}) {
    let requestPath='/api/gyt/queryNatmehaHotsCollRef'
    commit(UPDATE_LOADING, true);
    return axios.get(requestPath, {params:{'hotspotCode':hotspotCode,'userCode':userCode}})
      .then(res => {
        const { data } = res.data;
        console.log(data)
        return data;
      })
      .finally(() => {
        commit(UPDATE_LOADING, false);
      });
  },
  collMessage ({ commit },  {hotspotCode,userCode}) {
    let requestPath='/api/gyt/insertHotspot'
    commit(UPDATE_LOADING, true);
    return axios.get(requestPath, { params:{'hotspotCode':hotspotCode,'userCode':userCode} })
      .then(res => {
        const { data } = res.data;
        return data;
      })
      .finally(() => {
        commit(UPDATE_LOADING, false);
      });
  },
  cancelCollect({ commit },  {hotspotCode,userCode}){
    let requestPath='/api/gyt/deleteHotspot'
    commit(UPDATE_LOADING, true);
    return axios.get(requestPath, { params:{'hotspotCode':hotspotCode,'userCode':userCode} })
      .then(res => {
        const { data } = res.data;
        return data;
      })
      .finally(() => {
        commit(UPDATE_LOADING, false);
      });
  }
}
const UPDATE_LOADING = 'updateLoading';
const mutations={
  updateLoading (state, loading) {
    state.loading = loading;
  }

}



export default {
  state,
  actions,
  mutations,
};
