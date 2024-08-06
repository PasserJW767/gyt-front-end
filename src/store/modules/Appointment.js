import axios from "axios";

const state = {
  choiceFlag1: 0, //用户选择
  pageSize1: 0,  //当前页数
  allSize1: 0,  //总共页数
  gytHospitalList1: [], //国医堂的医院列表,
  locateLongitude1: 0, //用户所在经度
  locateLatitude1: 0,  //用户所在纬度
  keyWord1: '',  //用户给出的搜索关键字
}

//负责发ajax请求域后端的api服务系统交互，获得数后提交给mutations
const actions = {
  getHospitalListCount1({commit}){
    axios.get(`/api/Appointment/getHospitalListCount?keyWord=${state.keyWord1}`)
      .then(response => {
        commit('mAllSize1', response.data.data);
      })
      .catch(err => {
        throw new Error(err);
      })
  },
  //向api中获取普通排序、按评分排序、按剩余量排序、按距离排序
  getAppointmentList({commit}) {
    state.pageSize1 += 1;
    // if(state.pageSize1 > state.allSize1){
    //   return ;
    // }
    // console.log('当前页数：', state.pageSize1);
    axios.get(`/api/Appointment/getHospitalList?keyWord=${state.keyWord1}&pageNum=${state.pageSize1}`)
      .then(response => {
        //拿到数据,获得了数据库中医院的地址信息
        const data = response.data.data;
        let item = data[0];
        let addr = item.hospitalPro + item.hospitalCity + item.hospitalCountry + item.hospitalAdress;
        axios.get("/qqMap/ws/geocoder/v1?address=" + addr + '&key=D7PBZ-BDAW6-YGZS3-MG6JI-BLLEF-6XF7T')
          .then(response =>{
            if(response.status != 404) {
              //获得了数据库医院地址信息的经纬度
              let lat = response.data.result.location.lat;
              let lng = response.data.result.location.lng;
              //定位的经纬度
              let to = lat + "," + lng;
              let from = state.locateLatitude1 + "," + state.locateLongitude1;
              axios.get("/qqMap/ws/distance/v1/matrix/?mode=driving&from=" + from + "&to=" + to + "&key=D7PBZ-BDAW6-YGZS3-MG6JI-BLLEF-6XF7T")
                .then(response => {
                  if(response.status != 404){
                    if (response.data.status == 0) {
                      let distance = response.data.result.rows[0].elements[0].distance;
                      distance = distance / 1000;
                      data[0].hospitalDistance = distance;
                    }
                    else {
                      data[0].hospitalDistance = 0;
                      // console.log(data);
                    }
                    commit('mAppendGytHospitalList1', data);
                  } else {
                    data[0].hospitalDistance = 0;
                  }

                })
                .catch(err => {
                  throw new Error(err);
                })
            } else {
              data[0].hospitalDistance = 0;
              commit('mAppendGytHospitalList1', data);
            }
          }).
          catch(err => {
            throw new Error(err);
          })
      })
      .catch(err => {
        throw new Error(err);
      })
  },

}

//  mutations中的操作时同步的
const mutations = {
  mChoiceFlag1(state,data){
    state.choiceFlag1 = data;
  },
  mAllSize1(state, data) {
    state.allSize1 = data;
    // console.log("总页数", state.allSize1);
  },
  mPageSize1(state,data){
    state.pageSize1 = data;
    // console.log(state.pageSize1);
  },
  mGytHospitalList1(state, data) {
    state.gytHospitalList1 = data;
  },
  mAppendGytHospitalList1(state,data) {
    let merge = [...state.gytHospitalList1, ...data];
    state.gytHospitalList1 = merge;
    // console.log(state.gytHospitalList1);
  },
  mLocateLongitude1(state, data) {
    state.locateLongitude1 = data;
  },
  mLocateLatitude1(state, data) {
    state.locateLatitude1 = data;
  },
  mKeyWord1(state, data) {
    state.keyWord1 = data;
  }
}

const getters = {
  choiceFlag1(state){
    return state.choiceFlag1;
  },
  pageSize1(state){
    return state.pageSize1;
  },
  gytHospitalList1(state) {
    return state.gytHospitalList1;
  },
  allSize1(state) {
    return state.allSize1;
  },
  locateLongitude1(state) {
    return state.locateLongitude1;
  },
  locateLatitude1(state) {
    return state.locateLatitude1;
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
