import axios from 'axios'

// 驱动应用的数据源
const state = {
  userDetail:{},
  myregisterlist:{},
  patienlist:{},
  costList:{},
  mycollectList:{},
}

/*
Action 类似于 mutation，不同在于：
  (1) Action 提交的是 mutation，而不是直接变更状态。
  (2) Action 可以包含任意异步操作。
*/
const actions = {
  // 后端API的调用
  // 查询用户详情
  getuserDetail ({commit}, {itemid,itemcode}) {
    axios.get(`/api/user/userDetail?itemid=${itemid}&itemcode=${itemcode}`)
      .then((resp) => { // success callback function
        const userDtail = resp.data.data
/*        console.log(userDtail)*/
        // commit to mutations
        commit('storeuserDetail', userDtail)
      }, (error) => { // failure callback function
        console.error(error)
      })
  },
  //查询按到当前挂号列表
  getmyregister({commit}, {itemid,itemcode}) {
    axios.get(`/api/user/regRef?itemid=${itemid}&itemcode=${itemcode}`)
      .then((resp)=>{
/*        console.log(resp)
        console.log(resp.data.data.natmehaRegisterRefDTOList)*/
        const myregister=resp.data.data.natmehaRegisterRefDTOList
        commit('storemyregisterlist',myregister)
      },(error)=>{
        console.error(error)
      })
  },

  //查询当前就诊人列表
  getmypatent({commit}, {itemid,itemcode}) {
    axios.get(`/api/user/patient?itemid=${itemid}&itemcode=${itemcode}`)
      .then((resp)=>{
        const patienlist=resp.data.data.natmehaPatientDTOList;
/*            console.log(patienlist)*/
        commit('storepatienlist',patienlist)
      },(error)=>{
        console.error(error)
      })
  },
  //查询就诊费用
  getmycostlist({commit}, {itemid, itemcode}) {
    axios.get(`/api/user/costList?itemcode=${itemcode}&itemid=${itemid}`)
      .then((resp) => {
/*        console.log(resp.data.data.natmehaRegisterRefDTOList)*/
        commit('stroecostList',resp.data.data.natmehaRegisterRefDTOList)
      }, (error) => {
        console.log(error)
      });
  },
  getmycollect({commit}, {itemid, itemcode}) {
    axios.get(`/api/user/collhotspotList?itemcode=${itemcode}&itemid=${itemid}`)
      .then((resp) => {
        //console.log(resp.data.natmehaHotsCollRefDTOList)
        commit('stroemycollectList',resp.data.data.natmehaHotsCollRefDTOList)
      }, (error) => {
        console.log(error)
      });
  }
}

/*
更改Vuex的store中的状态的唯一方法
*/
const mutations = {
  // 将数据存储到Vuex的 state 对象中
  storeuserDetail (state, userDetail) {
    state.userDetail = userDetail
  },
  storemyregisterlist(state, myregister) {
    state.myregisterlist=myregister
  },
  storepatienlist(state, patienlist) {
    state.patienlist=patienlist
  },
  stroecostList(state, costList) {
    state.costList=costList
  },
  stroemycollectList(state, collectlist) {
    state.mycollectList=collectlist
  }
}

const getters = {
  userDetail (state) {
    return state.userDetail
  },
  myregisterlist(state) {
    return state.myregisterlist
  },
  patienlist(state) {
    return state.patienlist
  },
  costList(state) {
    return state.costList
  },
  mycollectList(state) {
    return state.mycollectList
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
