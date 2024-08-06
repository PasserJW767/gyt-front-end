import axios from 'axios'

// 驱动应用的数据源
const state = {
  hosDetailCharacteristic:[],
}

/*
Action 类似于 mutation，不同在于：
  (1) Action 提交的是 mutation，而不是直接变更状态。
  (2) Action 可以包含任意异步操作。
*/
const actions = {
  // 根据国医堂itemCode查询此医院功效特色
  getHosDetailCharacteristic({commit},hosItemCode){
    axios.get(`/api/natmehaHospital/getHosDetailCharacteristic?hosItemCode=${hosItemCode}`)
      .then((resp) => { // success callback function
        //console.dir(resp);//看resp是否为空

        const hosDetailCharacteristic = resp.data.data
        //console.dir(hosDetailCharacteristic);

        commit('storeHosDetailCharacteristic', hosDetailCharacteristic)

      }, (error) => { // failure callback function
        console.error(error)
        throw new Error(error)
      })
  },

  // 根据国医堂itemCode查询此医院功效特色详情
  getHosDetailCharacteristicDetail({commit},characteristic){
    axios.get(`/api/natmehaHospital/getHosDetailCharacteristicDetail?hosItemCode=${hosItemCode}`)
      .then((resp) => { // success callback function
        console.dir(resp);//看resp是否为空

        const hosDetailCharacteristic = resp.data.data
        //console.dir(hosDetailCharacteristic);

        commit('storeHosDetailCharacteristic', hosDetailCharacteristic)

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
  storeHosDetailCharacteristic(state,hosDetailCharacteristic){
    state.hosDetailCharacteristic=hosDetailCharacteristic
  }
}

/*
可以认为是 store 的计算属性,用于获取 state 中的数据。
*/
const getters = {
  hosDetailCharacteristic:(state)=>{
    return state.hosDetailCharacteristic
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
