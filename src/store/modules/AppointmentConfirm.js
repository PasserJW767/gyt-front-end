import axios from "axios"

const state = {
  doctorItemId: 0,  //医生ItemId
  doctorItemCode: '', //医生ItemCode
  doctorInfo: {}, //医生信息（包括其所在医院信息）
  timeScope: '',  //时间范围-“上午”,“下午”,“上午，下午”。日期及星期在AppointmentDetail的chooseDate里
  appointmentConfirmDate:{
    date: '',
    month: '',
    year: '',
    weekDay: ''
  },
  appointmentUserCode: '',  //传进来的用户Code
  appointmentPatientList: [],  //当前用户Code下所对应的就诊人列表
  appointmentDoctorSignalInfo: {}, //该医生最新的一个未挂号
  appointmentChoosePatientCode: -1, //用户选择的病人的itemcode
  appointmentChoosePatient: {},   //用户所选择的病人信息
  appointmentPatientTel: '', //用户输入的病人手机号
}

const actions = {
  //获取被选择的医生及其所在医院信息
  getDoctorInfoForConfirm({commit}) {
    axios.get(`/api/Appointment/getDoctorInfoForConfirm?itemId=${state.doctorItemId}&itemCode=${state.doctorItemCode}`)
      .then(response => {
        const data = response.data.data;
        commit('mDoctorInfo', data);
      })
      .catch(err => {
        throw new Error(err);
      })
  },
  //获取当前userCode的就诊人列表
  getPatientInfoByUserCode({commit}) {
    axios.get(`/api/Appointment/getPatientInfoByUserCode?userCode=${state.appointmentUserCode}`)
      .then(response => {
        const data = response.data.data;
        commit('mAppointmentPatientList', data);
      })
      .catch(err => {
        throw new Error(err);
      })
  },
  //获取当前医生的最新一个未挂号
  getDoctorNewlySignal({commit}) {
    axios.get(`/api/Appointment/getDoctorNewlySignal?doctorCode=${state.doctorItemCode}&dateStr=${state.appointmentConfirmDate.year}-${state.appointmentConfirmDate.month}-${state.appointmentConfirmDate.date}`)
      .then(response => {
        const data = response.data.data;
        commit('mAppointmentDoctorSignalInfo',data);
      })
      .catch(err => {
        throw new Error(err);
      })
  },
  //插入挂号数据
  insertSignalSource({commit}){
    axios.get(`/api/Appointment/insertSignalSource?sourceCode=${state.appointmentDoctorSignalInfo.itemcode}&registerNum=${state.appointmentDoctorSignalInfo.registerCount}&patientCode=${state.appointmentChoosePatient.itemcode}&userCode=${state.appointmentChoosePatient.userCode}`)
      .then(response => {
      })
      .catch(err => {
        throw new Error(err);
      })
  }
}

const mutations = {
  mDoctorItemId(state, data) {
    state.doctorItemId = data;
  },
  mDoctorItemCode(state, data) {
    state.doctorItemCode = data;
  },
  mDoctorInfo(state, data) {
    state.doctorInfo = data;
  },
  mTimeScope(state, data) {
    state.timeScope = data;
  },
  mAppointmentUserCode(state, data) {
    state.appointmentUserCode = data;
  },
  mAppointmentPatientList(state, data) {
    state.appointmentPatientList = data;
  },
  mAppointmentConfirmDate(state, data) {
    state.appointmentConfirmDate = data;
  },
  mAppointmentDoctorSignalInfo(state, data) {
    state.appointmentDoctorSignalInfo = data;
  },
  mAppointmentChoosePatientCode(state, data) {
    state.appointmentChoosePatientCode = data;
  },
  mAppointmentChoosePatient(state, data) {
    state.appointmentChoosePatient = data;
  },
  mAppointmentPatientTel(state, data) {
    state.appointmentPatientTel = data;
  }
}

const getters = {
  doctorItemId(state) {
    return state.doctorItemId;
  },
  doctorItemCode(state) {
    return state.doctorItemCode;
  },
  doctorInfo(state) {
    return state.doctorInfo;
  },
  timeScope(state) {
    return state.timeScope;
  },
  appointmentUserCode(state) {
    return state.appointmentUserCode;
  },
  appointmentPatientList(state) {
    return state.appointmentPatientList;
  },
  appointmentDoctorSignalInfo(state) {
    return state.appointmentDoctorSignalInfo;
  },
  appointmentChoosePatientCode(state) {
    return state.appointmentChoosePatientCode;
  },
  appointmentChoosePatient(state) {
    return state.appointmentChoosePatient;
  },
  appointmentPatientTel(state) {
    return state.appointmentPatientTel;
  },
  appointmentConfirmDate(state) {
    return state.appointmentConfirmDate;
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
