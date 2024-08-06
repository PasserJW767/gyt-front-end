<template>
<div class="registerbody">
  <div  style="height:39px   ;background: #775637;text-align: center">
    <router-link to="/my">
    <span class="icon iconfont youjiantou" style="float: left">&#xe624;</span>
    </router-link>
    <span style="height: 39px;line-height: 39px;color: white;font-size: 16px">我的挂号</span>
  </div>
  <el-card class="card" shadow="always" v-for="(reg,index) in regData" :key="reg.itemcode+reg.itemid">
      <div class="cardrow"><span class="regtitle">就诊人：</span> <span class="reginfor">{{reg.natmehaPatientDTO.patientName}}</span></div>
    <div class="cardrow"><span class="regtitle">就诊机构：</span> <span class="reginfor">{{reg.natmehaSignalSourceDTO.natmehaDoctorDTO.natmehaHospitalDTO.hospitalName}}</span></div>
    <div class="cardrow"><span class="regtitle">就诊科室：</span> <span class="reginfor">{{reg.natmehaSignalSourceDTO.natmehaDoctorDTO.deptCode}}</span></div>
    <div class="cardrow"><span class="regtitle">就诊医师：</span> <span class="reginfor">{{reg.natmehaSignalSourceDTO.natmehaDoctorDTO.doctorName}}</span></div>
    <div class="cardrow"><span class="regtitle">预约时间：</span> <span class="reginfor">{{reg.itemcreateat}}</span></div>
                    <span  v-bind:class="{ commentClass:reg.natmehaSignalSourceDTO.registerType=='普通号',
                                          zhClass:reg.natmehaSignalSourceDTO.registerType=='专家号',
                                          tecClass:reg.natmehaSignalSourceDTO.registerType=='适宜技术号',
                                           unzero:reg.registerStatus!='已就诊',
                                           zero:reg.registerStatus=='已就诊',}">
          {{reg.natmehaSignalSourceDTO.registerType}}</span>
    <span class="score" v-if="reg.registerStatus!='已就诊'"
          v-bind:class="{ commentNum:reg.natmehaSignalSourceDTO.registerType=='普通号',
                                          zhNum:reg.natmehaSignalSourceDTO.registerType=='专家号',
                                          tecNum:reg.natmehaSignalSourceDTO.registerType=='适宜技术号'}"
    >{{reg.registerNum}}</span>
    <router-link :to="{name:'ImpactAssessmentDetail',params:{assessment:reg}}">
      <span class="gotoscore" v-if="reg.registerStatus=='已就诊'"
            v-bind:class="{ commentClass:reg.natmehaSignalSourceDTO.registerType=='普通号',
                                          zhClass:reg.natmehaSignalSourceDTO.registerType=='专家号',
                                          tecClass:reg.natmehaSignalSourceDTO.registerType=='适宜技术号'}">去评价</span>
    </router-link>

  </el-card>
<!--  <el-card class="card" shadow="always" v-for="(reg,index) in regData" :key="reg.itemcode+reg.itemid">
    <div>{{reg.natmehaSignalSourceDTO.natmehaDoctorDTO.natmehaHospitalDTO.hospitalName}}</div>
  </el-card>-->
</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import moment from 'moment';
export default {
  name: "MyRegister",
  methods: {
    ...mapActions(['getmyregister']),
    formattime() {
      for (let i = 0; i <this.myregisterlist.length ; i++) {
        this.myregisterlist[i].itemcreateat=moment(this.myregisterlist[i].itemcreateat).format('YYYY-MM-DD 星期E A')
      }
      this.regData=this.myregisterlist
    }
  },
  data() {
    return{
      regData:[]
    }
  },
  created() { // 生命周期钩子函数
    const itemid=this.getLogUser.itemid;
    const itemcode=this.getLogUser.itemcode
    this.getmyregister({itemid,itemcode})
/*   console.log(itemid,itemcode)
    console.log(this.myregisterlist)*/
 /*   console.log(this.myregisterlist)*/
    setTimeout(this.formattime,500)
  },
  computed: {
    // 将 Vuex 中的 getter 属性映射为组件的计算属性，也就说是组件有了一个 scenicSpotDetail 属性
    ...mapGetters(['getLogUser','myregisterlist'])
  },
}
</script>

<style scoped>
.registerbody{
  background: #F5F5F5;

  width: 100%;
}
.youjiantou{
  font-size: 18px;
  margin-top: 7px;
}
.card{
  width: 90%;
  margin-left: 5%;
  margin-top: 15px;
  height: 192px;
  border-radius: 20px;
}
/deep/ .el-card.is-always-shadow{
  -webkit-box-shadow: 3px 3px 3px #B9B9B9;
}
/deep/ .el-card__body{
  padding: 20px 0px 0px 10px;
  height: 194px;
}
.cardrow{
  margin-bottom: 5px;
}
.regtitle{
font-size: 14px;
  color: #666666;
}
.reginfor{
  font-size: 15px;
  color: #666666;
  font-weight: bold;
}
.score{
  font-size: 40px;
  position: relative;
  top: -20px;
  right: -70%;
  font-weight: bold;
}
.commentClass{
  background: #775637;
}
.tecClass{
  background: #ECA12F;
}
.zhClass{
  background: red;
}
.commentNum{
  color:  #775637;
}
.tecNum{
  color: #ECA12F;
}
.zhNum{
  color: red;
}
.gotoscore{
  position: relative;
  top: 0px;
  right: -60%;
  padding: 4px 10px 4px 10px;
  border-radius: 20px;
  color: white;
}
.unzero{
  color: white;
  padding: 2px 5px 2px 5px;
  border-radius: 5px;
  position: relative;
  top: -25px;
  right: -5px;
}
.zero{
  color: white;
  padding: 2px 5px 2px 5px;
  border-radius: 5px;
  position: relative;
  top: 0px;
  right: -5px;
}
</style>
