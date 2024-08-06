import axios from "axios";
const state={
  hotList:[],
  type:''
}

const actions={
  getHotList({commit},{dataType,hotspotName}) {
    state.type=dataType
    let requestPath=''
    if (dataType === '6') {
      requestPath='/api/gyt/natmehaChineseMedicines';
      axios.get(requestPath)
        .then(response=>{
          commit('storeHotList',response.data.data)
        })
        .catch(err=>{
          throw err;
        });
    }else {
      requestPath='/api/gyt/natmehaHotspots';
      axios.get(requestPath,{params:{'dataType':dataType,'hotspotName':hotspotName}})
        .then(response=>{
          commit('storeHotList',response.data.data)
        })
        .catch(err=>{
          throw err;
        });
    }

  }
}

const mutations={
  storeHotList(state, data) {
    state.hotList=data
  }
}

const getters={
  hotList: (state)=>{
    return state.hotList
  },
  type: (state)=>{
    return state.type
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
