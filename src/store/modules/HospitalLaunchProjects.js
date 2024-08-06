import axios from 'axios'

// 驱动应用的数据源
const state = {
  hosDetailLaunchProjects: [],
}

/*
Action 类似于 mutation，不同在于：
  (1) Action 提交的是 mutation，而不是直接变更状态。
  (2) Action 可以包含任意异步操作。
*/
const actions = {
  // 根据国医堂itemCode查询此医院开展的项目
  getHosDetailLaunchProjects({commit},hosItemCode){
    axios.get(`/api/natmehaHospital/getHosDetailLaunchProjects?hosItemCode=${hosItemCode}`)
      .then((resp) => { // success callback function
        //console.dir(resp);//看resp是否为空

        const hosDetailLaunchProjects = resp.data.data
        //console.dir(hosDetailLaunchProjects);

        commit('storeHosDetailLaunchProjects', hosDetailLaunchProjects)

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
  storeHosDetailLaunchProjects(state,hosDetailLaunchProjects){
    state.hosDetailLaunchProjects=hosDetailLaunchProjects
  },
}

/*
可以认为是 store 的计算属性,用于获取 state 中的数据。
*/
const getters = {
  hosDetailLaunchProjects:(state)=>{
    //console.dir(state.hosDetailLaunchProjects);
    return state.hosDetailLaunchProjects
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}
