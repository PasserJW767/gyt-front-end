import axios from "axios"

const state = {
  chooseDate:{
    date: '',
    month: '',
    year: '',
    weekDay: ''
  },
  detailDoctorList: {},
}

const actions = {
  getWorkDoctorListByHospital({commit},itemCode){
    axios.get(`/api/Appointment/getWorkDoctorListByHospital?itemCode=${itemCode}&dateStr=${state.chooseDate.year}-${state.chooseDate.month}-${state.chooseDate.date}`)
      .then(response => {
        console.log('doctorList:',response);
        const data = response.data.data;
        if(data.length == 0){
          commit('mDetailDoctorList',{});
          swal({
            title: "暂未排号",
            text: "请您选择其他日期",
            icon: "error",
            button: "重新选择",
          });
          console.log("doctorList",state.detailDoctorList);
        }
        else
          commit('mDetailDoctorList',data);
      })
      .catch(err => {
        throw new Error(err);
      })
  }
}

const mutations = {
  //以下四项用于修改state中的year,month,state
  mChooseDateYear(state, data) {
    state.chooseDate.year = data;
  },
  mChooseDateMonth(state, data) {
    state.chooseDate.month = data;
  },
  mChooseDateDate(state, data) {
    state.chooseDate.date = data;
  },
  mChooseWeekDay(state, data) {
    state.chooseDate.weekDay = data;
  },
  //修改state中的DetailDoctorList对象
  mDetailDoctorList(state, data) {
    state.detailDoctorList = data;
  }
}

const getters = {
  chooseDate(state) {
    return state.chooseDate
  },
  detailDoctorList(state) {
    return state.detailDoctorList;
  }

}

export default {
  state,
  actions,
  mutations,
  getters
}
