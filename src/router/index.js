import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/home/Home";
import TodayHot from "../components/todayHot/TodayHot";
import HotDetail from "../components/hotDetail/HotDetail";
import ChinMedicineDetail from "../components/ChinMedicineDetail/ChinMedicineDetail";
import GuoYiTangHotIndex from "@/components/GuoYiTang/GuoYiTangHot/GuoYiTangHotIndex";
import GuoYiTangHosDetailIndex from "@/components/GuoYiTang/GuoYiTangHosDetail/GuoYiTangHosDetailIndex";
import GuoYiTangHosDetailInfo from "../components/GuoYiTang/GuoYiTangHosDetail/GuoYiTangHosDetailInfo";
import MyIndex from "@/components/My/MyIndex";
import MyInfomation from "../components/My/MyInfomation";
import MyRegister from "../components/My/MyRegister";
import PatienManager from "../components/My/PatienManager";
import AddPatien from "../components/My/AddPatien";
import ImpactAssessment from "../components/My/ImpactAssessment";
import ImpactAssessmentDetail from "../components/My/ImpactAssessmentDetail";
import UpdataPatien from "../components/My/UpdataPatien";
import MedicalExpenses from "../components/My/MedicalExpenses";
import CostDetail from "../components/My/CostDetail";
import FirstStepIntelligentTreat from '@/components/intelligent_treat/FirstStepIntelligentTreat'
import SecondStepIntelligentTreat from '@/components/intelligent_treat/SecondStepIntelligentTreat'
import ThreeStepIntelligentTreat from '@/components/intelligent_treat/ThreeStepIntelligentTreat'
import FinishIntelligentTreat from '@/components/intelligent_treat/FinishIntelligentTreat'
import UserLogin from '@/components/user/UserLogin'

import HealthManage from '../components/Health/HealthManage'
import HealthRecord from '../components/Health/HealthRecord'
import BodyIndex from '@/components/home/hhbbody/BodyIndex.vue'
import PgIndex from '@/components/home/hhbpg/PgIndex'
import SearchIndex from '@/components/home/hhbsearch/SearchIndex'
import BodyResult from "../components/home/hhbsearch/BodyResult";

import GuoYiTangHosDetailServiceTeam from "../components/GuoYiTang/GuoYiTangHosDetail/components/GuoYiTangHosDetailServiceTeam";
import GuoYiTangHosDetailLaunchProjects from "../components/GuoYiTang/GuoYiTangHosDetail/components/GuoYiTangHosDetailLaunchProjects";
import GuoYiTangHosDetailCharacteristic  from "../components/GuoYiTang/GuoYiTangHosDetail/components/GuoYiTangHosDetailCharacteristic";
import GuoYiTangHosDetailLaunchProjectDetail from "../components/GuoYiTang/GuoYiTangHosDetail/components/GuoYiTangHosDetailLaunchProjectDetail";
import GuoYiTangHosDetailCharacteristicDetail  from "@/components/GuoYiTang/GuoYiTangHosDetail/components/GuoYiTangHosDetailCharacteristicDetail";
import AppointmentIndex from "@/components/Appointment/AppointmentIndex/AppointmentIndex"
import AppointmentDetail from "@/components/Appointment/AppointmentDetail/AppointmentDetail";
import AppointmentConfirm from "@/components/Appointment/AppointmentConfirm/AppointmentConfirm";
import AppointmentSuccess from "@/components/Appointment/AppointmentSuccess/AppointmentSuccess";
import AppointmentSelectPatient from "@/components/Appointment/AppointmentSelectPatient/AppointmentSelectPatient";
//修改
import MyCollect from "../components/components/header/MyCollect";
import DzblList from "../components/components/dzbl/components/DzblList";
import DzblDetail from "../components/components/dzbl/components/DzblDetail";
import MyHotDetail from "../components/components/hotDetail/MyHotDetail";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserLogin',
      component: UserLogin,
      //修改浏览器标题 在对应组件的根元素上加  v-wechat-title="$route.meta.title"
      meta:{
        title: "登录"
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path:'/todayHot',
      name:'todayHot',
      component:TodayHot
    },
    {
      path:'/hotDetail',
      name:'hotDetail',
      component:HotDetail
    },
    {
      path:'/chinMedicineDetail',
      name:'chinMedicineDetail',
      component:ChinMedicineDetail
    },
    {
      path: '/GuoYiTangHotIndex',
      name: 'GuoYiTangHotIndex',
      component: GuoYiTangHotIndex,
      //修改浏览器标题 在对应组件的根元素上加  v-wechat-title="$route.meta.title"
      meta:{
        title: "医院"
      }
    },
    {
      path: '/GuoYiTangHosDetailIndex',
      name: 'GuoYiTangHosDetailIndex',
      component: GuoYiTangHosDetailIndex,
      //修改浏览器标题 在对应组件的根元素上加  v-wechat-title="$route.meta.title"
      meta:{
        title: "医院详情"
      },
      children:[
        {
          path: '/GuoYiTangHosDetailServiceTeam',
          name: 'GuoYiTangHosDetailServiceTeam',
          component: GuoYiTangHosDetailServiceTeam,
        },
        {
          path: '/GuoYiTangHosDetailLaunchProjects',
          name: 'GuoYiTangHosDetailLaunchProjects',
          component: GuoYiTangHosDetailLaunchProjects,
        },
        {
          path: '/GuoYiTangHosDetailCharacteristic',
          name: 'GuoYiTangHosDetailCharacteristic',
          component: GuoYiTangHosDetailCharacteristic,
        },
      ]
    },
    {
      path:'/GuoYiTangHosDetailInfo',
      name:'GuoYiTangHosDetailInfo',
      component:GuoYiTangHosDetailInfo,
      meta:{
        title: "医院简介"
      },
    },
    {
      path:'/GuoYiTangHosDetailLaunchProjectDetail',
      name:'GuoYiTangHosDetailLaunchProjectDetail',
      component:GuoYiTangHosDetailLaunchProjectDetail,
      meta:{
        title: "项目详情"
      },
    },
    {
      path:'/GuoYiTangHosDetailCharacteristicDetail',
      name:'GuoYiTangHosDetailCharacteristicDetail',
      component:GuoYiTangHosDetailCharacteristicDetail,
      meta:{
        title: "功效详情"
      },
    },
    {
      path: '/appointmentIndex',
      name: 'AppointmentIndex',
      component: AppointmentIndex,
      meta:{
        title: "预约挂号"
      }
    },
    {
      path: '/appointmentDetail',
      name: 'AppointmentDetail',
      component: AppointmentDetail,
      meta:{
        title: "预约挂号"
      }
    },
    {
      path:'/my',
      name:'MyIndex',
      component:MyIndex,
      meta:{
        title: "我的"
      },
    },
    {
      path:'/myinfromation',
      name:'MyInformation',
      component:MyInfomation
    },
    {
      path:'/myregister',
      name:'MyRegister',
      component:MyRegister
    },
    {
      path:'/patienmanage',
      name:'PatienManager',
      component:PatienManager
    },
    {
      path:'/addpatien',
      name:'AddPatien',
      component:AddPatien
    },
    {
      path:'/assessment',
      name:'ImpactAssessment',
      component:ImpactAssessment
    },
    {
      path:'/assessmentdetail',
      name:'ImpactAssessmentDetail',
      component:ImpactAssessmentDetail
    },
    {
      path:'/updatapatien',
      name:'UpdataPatien',
      component:UpdataPatien
    },
    {
      path:'/costlist',
      name:'MedicalExpenses',
      component:MedicalExpenses
    },
    {
      path:'/costdetail',
      name:'CostDetail',
      component:CostDetail
    },
    {
      path: '/appointmentConfirm',
      name: 'AppointmentConfirm',
      component: AppointmentConfirm,
      meta:{
        title: "预约挂号"
      }
    },
    {
      path: '/treat',//智能导诊第一步
      name: 'FirstStepIntelligentTreat',
      component: FirstStepIntelligentTreat,
    },
    {
      path: '/treatToSecond',//智能导诊第二步
      name: 'SecondStepIntelligentTreat',
      component: SecondStepIntelligentTreat,
    },
    {
      path: '/treatToThree',//智能导诊第三步
      name: 'ThreeStepIntelligentTreat',
      component: ThreeStepIntelligentTreat,
    },
    {
      path: '/treatToFinish',//智能导诊第三步
      name: 'FinishIntelligentTreat',
      component: FinishIntelligentTreat,
    },

    {
      path: '/appointmentSuccess',
      name: 'AppointmentSuccess',
      component: AppointmentSuccess,
      meta:{
        title: "预约成功"
      }
    },
    {
      path: '/appointmentSelectPatient',
      name: 'AppointmentSelectPatient',
      component: AppointmentSelectPatient,
      meta: {
        title: "选择就诊人"
      }
    },
    {
      path: '/HealthManage',
      name: 'HealthManage',
      component: HealthManage,
    },
    {
      path: '/HealthRecord',
      name: 'HealthRecord',
      component: HealthRecord,
    },
    {
      path: '/bodyIndex',
      name: 'BodyIndex',
      component: BodyIndex
    },
    {
      path: '/pgIndex',
      name: 'PgIndex',
      component: PgIndex
    },
    {
      path:'/seachIndex',
      name: 'SearchIndex',
      component: SearchIndex
    },
    {
      path:'/bodyResult',
      name:'BodyResult',
      component:BodyResult
    }
    ,
    {
      path:'/myhotsdetail',
      name:'myhotdetail',
      component:MyHotDetail
    },
    {
      path:'/mycollect',
      name:'MyCollect',
      component:MyCollect,
    },
    {
      path:'/dzbllist',
      name:'dzbllist',
      component:DzblList,
    },
    {
      path:'/dzbldetail',
      name:'dzbldetail',
      component:DzblDetail
    }
  ]
})
