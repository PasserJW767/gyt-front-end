import axios from 'axios'

// 驱动应用的数据源
const state = {
  hosDetailServiceTeam:[]
}

/*
Action 类似于 mutation，不同在于：
  (1) Action 提交的是 mutation，而不是直接变更状态。
  (2) Action 可以包含任意异步操作。
*/
const actions = {
  // 根据国医堂itemCode查询此医院服务团队
  getHosDetailServiceTeam({commit},hosItemCode){
    axios.get(`/api/natmehaHospital/getHosDetailServiceTeam?hosItemCode=${hosItemCode}`)
      .then((resp) => { // success callback function
        console.dir(resp);//看resp是否为空

        const hosDetailServiceTeam = resp.data.data
        //console.dir(hosDetailServiceTeam);

        commit('storeHosDetailServiceTeam', hosDetailServiceTeam)

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
  storeHosDetailServiceTeam (state, hosDetailServiceTeam) {
    state.hosDetailServiceTeam = hosDetailServiceTeam
  },

}

/*
可以认为是 store 的计算属性,用于获取 state 中的数据。
*/
const getters = {
  hosDetailServiceTeam:(state)=>{
    //这里可以根据需求再做一些数据的封装
    return state.hosDetailServiceTeam
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}
