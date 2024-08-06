import axios from "axios";
import {dateFormat} from "../../util/DateFormatUtil"
const state = {
  isSuccess:false,
  hospitalList: {},//附近医院列表
  gender:"",
  birth:"",//出生日期
  discomfortSite:"",//不适部位，
  symptom:"",//不适症状
  describe:"",//辅助描述症状

}

const actions = {
  /*智能导诊：获取附近医院*/
  getHospitalList({commit},position) {
    console.dir("市区:"+position.city+" 省份："+position.province)
    var path='';
    if(position!=null){
     path=`/api/natmehaHospital/selectNearBy?hospitalCity=${position.city}&hospitalPro=${position.province}`;
    }else {
      path=`/api/natmehaHospital/selectNearBy`;
    }
    axios.get(path)
      .then(response => {
        const data = response.data.data
        console.log("附近医院列表："+data)
        commit('storeHospitalList', data)
      })
      .catch(err => {
        throw new Error(err)
      })
  },
  /*智能导诊：信息插入数据库*/
  insertGuide({commit}) {
    console.log("state.gender", state.gender);
    console.log("state.birth", state.birth);
    console.log("state.birth",dateFormat(state.birth));
    console.log("state.discomfortSite", state.discomfortSite);
    console.log("state.symptom", state.symptom);
    console.log("state.describe", state.describe);
    axios.post(`/api/natmehaInteTreat/insert?gender=${state.gender}&birth=${dateFormat(state.birth)}&discomfortSite=${state.discomfortSite}&symptom=${state.symptom}&describe=${state.describe}`)
      .then(response => {
      })
      .catch(err => {
        throw new Error(err)
      });
  },

}

//同步
const mutations = {
  storeHospitalList(state, data) {
    state.hospitalList = data
  },

  setGender(state,gender){
    state.gender = gender
  },
  setBirthday(state,birth){
    state.birth = birth
  },
  //不适症状
  setSymptom(state,symptom){
    state.symptom = symptom
  },
  //不适部位
  setDiscomfortSite(state,discomfortSite){
  state.discomfortSite = discomfortSite
},
  //辅助描述症状
  setDescribe(state,describe){
    state.describe = describe
  },
}

const getters = {
  hospitalList: (state) => {
    return state.hospitalList
  },


}


export default {
  state,
  actions,
  mutations,
  getters,
}
