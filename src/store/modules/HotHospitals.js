import axios from 'axios'

// 驱动应用的数据源
const state = {
  theFirstTwoHos: [],
  hosDetailIndexInfo:{},
}

/*
Action 类似于 mutation，不同在于：
  (1) Action 提交的是 mutation，而不是直接变更状态。
  (2) Action 可以包含任意异步操作。
*/
const actions = {
  // 得到热门国医堂排序评分最前的两个
  getTheFirstTwo ({commit}) {
    axios.get('/api/natmehaHospital/getTheFirstTwoHos')
      .then((resp) => { // success callback function
        //console.dir(resp);//看resp是否为空

        const theFirstTwoHos = resp.data.data
        //console.dir(theFirstTwoHos);

        commit('storeTheFirstTwoHos', theFirstTwoHos)

      }, (error) => { // failure callback function
        console.error(error)
        throw new Error(error)
      })
  },
  // 根据国医堂itemCode查询此医院详情（相关电话、地址等信息）
  getHosDetailIndexInfoByHosItemCode({commit},hosItemCode){
    axios.get(`/api/natmehaHospital/getHosDetailIndexInfoByHosItemCode?itemCode=${hosItemCode}`)
      .then((resp) => { // success callback function
        //console.dir(resp);//看resp空的

        const hosDetailIndexInfo = resp.data.data
        //console.dir(hosDetailIndexInfo);

        commit('storeHosDetailIndexInfo', hosDetailIndexInfo)
      }, (error) => { // failure callback function
        console.error(error)
        throw new Error(error)
      })
  },
}

/*
更改Vuex的store中的状态的唯一方法
mutations中的操作是同步的
*/
const mutations = {
  // 将数据存储到Vuex的 state 对象中
  storeTheFirstTwoHos (state, theFirstTwoHos) {
    state.theFirstTwoHos = theFirstTwoHos
  },
  storeHosDetailIndexInfo(state,hosDetailIndexInfo){
    state.hosDetailIndexInfo=hosDetailIndexInfo
  },

}

/*
可以认为是 store 的计算属性,用于获取 state 中的数据。
*/
const getters = {
  theFirstTwoHos:(state)=>{
    //这里可以根据需求再做一些数据的封装
    return state.theFirstTwoHos
  },
  hosDetailIndexInfo:(state)=>{
    return state.hosDetailIndexInfo
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}
