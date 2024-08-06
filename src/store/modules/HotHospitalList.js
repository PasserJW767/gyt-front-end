import axios from 'axios'

// 驱动应用的数据源
const state = {
  choiceFlag: 0, //用户选择
  pageSize: 0,  //当前页数
  allSize: 1,  //总共页数
  gytHospitalList: [], //国医堂的医院列表,
  locateLongitude: 0, //用户所在经度
  locateLatitude: 0,  //用户所在纬度
  keyWord: ''
}

const actions = {
  //获得医院的总数
  getHospitalListCount({commit}){
    axios.get(`/api/Appointment/getHospitalListCount?keyWord=${state.keyWord}`)
      .then(response => {
        commit('mAllSize', response.data.data);
      })
      .catch(err => {
        throw new Error(err);
      })
  },
  //向api中获取普通排序、按评分排序、按剩余量排序、按距离排序
  getAppointmentListTest({commit}) {
    state.pageSize += 1;
    axios.get(`/api/Appointment/getHospitalList?keyWord=${state.keyWord}&pageNum=${state.pageSize}`)
      .then(response => {
        //拿到数据,获得了数据库中医院的地址信息
        const data = response.data.data;
        let item = data[0];
        let addr = item.hospitalPro + item.hospitalCity + item.hospitalCountry + item.hospitalAdress;
        axios.get("/qqMap/ws/geocoder/v1?address=" + addr + '&key=D7PBZ-BDAW6-YGZS3-MG6JI-BLLEF-6XF7T')
          .then(response =>{
            //==200即请求成功
            if(response.status != 404) {
              //获得了数据库医院地址信息的经纬度
              let lat = response.data.result.location.lat;
              let lng = response.data.result.location.lng;
              //定位的经纬度
              let to = lat + "," + lng;
              let from = state.locateLatitude + "," + state.locateLongitude;
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
                    commit('mAppendGytHospitalList', data);
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

const mutations = {
  mChoiceFlag(state,data){
    state.choiceFlag = data;
  },
  mAllSize(state, data) {
    state.allSize = data;
    // console.log("state.allSize:",state.allSize)
  },
  mPageSize(state,data){
    state.pageSize = data;
  },
  mGytHospitalList(state, data) {
    state.gytHospitalList = data;
  },
  mAppendGytHospitalList(state,data) {
    let merge = [...state.gytHospitalList, ...data];
    state.gytHospitalList = merge;
    console.log("mergeResult", merge);
  },
  mLocateLongitude(state, data) {
    state.locateLongitude = data;
  },
  mLocateLatitude(state, data) {
    state.locateLatitude = data;
  },
  mKeyWord(state, data) {
    state.keyWord = data;
  }
}

const getters = {
  choiceFlag(state){
    return state.choiceFlag;
  },
  pageSize(state){
    return state.pageSize;
  },
  gytHospitalList(state) {
    return state.gytHospitalList;
  },
  allSize(state) {
    return state.allSize;
  },
  locateLongitude(state) {
    return state.locateLongitude;
  },
  locateLatitude(state) {
    return state.locateLatitude;
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
