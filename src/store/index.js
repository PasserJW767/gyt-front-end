import Vue from 'vue'
import Vuex from 'vuex'
// 状态管理插件
Vue.use(Vuex)
import TodayHotList from "./modules/hotList/TodayHotList";
import CollectMsg from "./modules/collect/CollectMsg";
import ChinMedicineDetail from "./modules/chinMedicineDetail/ChinMedicineDetail";
import HotHospitals from "./modules/HotHospitals";
import HotHospitalList from "./modules/HotHospitalList";
import HospitalLaunchProjects from "./modules/HospitalLaunchProjects";
import HospitalCharacteristic from "./modules/HospitalCharacteristic";
import HospitalServiceTeam from "./modules/HospitalServiceTeam";
import Appointment from './modules/Appointment'
import AppointmentDetail from './modules/AppointmentDetail'
import AppointmentConfirm from './modules/AppointmentConfirm'
import My from './modules/My'
import HotDetail from "./modules/hotDetail/HotDetail";
import intelligentTreat from "./modules/intelligentTreat";
import userlogin from "./modules/userlogin";
import sstore from "./modules/sstore"


export default new Vuex.Store({
  modules: { // Vuex模块
   TodayHotList,
    CollectMsg,
    ChinMedicineDetail,
    HotDetail,
    HotHospitals, // 加载./modules/HotHospitals.js
    HotHospitalList,
    HospitalLaunchProjects,
    HospitalCharacteristic,
    HospitalServiceTeam,
    Appointment, //加载./modules/Appointment.js,
    AppointmentDetail,
    AppointmentConfirm,
    My,
    intelligentTreat,
    userlogin,
    sstore
  }
})
