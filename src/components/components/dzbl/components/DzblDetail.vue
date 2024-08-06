<template>
  <div class="dzbldetailbody">
    <div  style="height:39px   ;background: #775637;text-align: center">
      <router-link to="/dzbllist">
        <span class="icon iconfont youjiantou" style="float: left">&#xe624;</span>
      </router-link>
      <span style="height: 39px;line-height: 39px;color: white;font-size: 16px">病历详情</span>
      <el-card class="box-card cardbody">
        <div class="cardbody">
          <h4 class="cardtitle">电子病历-门诊信息</h4>
          <div>
            <p class="cardrow"><span class="rowtitel">就诊机构:</span><span class="rowtext">{{this.$route.params.dzbldetail.natmehaPatientDTO.natmehaMedRecordsDTO.visitOrgName}}</span></p>
            <p class="cardrow"><span class="rowtitel">就诊科室:</span><span class="rowtext">{{this.$route.params.dzbldetail.natmehaPatientDTO.natmehaMedRecordsDTO.visitDeptName}}</span></p>
            <p class="cardrow"><span  class="rowtitel">就诊医师:</span><span class="rowtext">{{this.$route.params.dzbldetail.natmehaPatientDTO.natmehaMedRecordsDTO.respDoctorName}}</span></p>
          </div>
          <div>
            <p class="cardrow"><span class="rowtitel">就诊时间:</span><span class="rowtext">{{this.time}}</span></p>
            <p class="cardrow"><span class="rowtitel">门诊诊断:</span><span class="rowtext">{{this.$route.params.dzbldetail.natmehaPatientDTO.natmehaMedRecordsDTO.outpatDiagName}}</span></p>
            <p class="cardrow"><span class="rowtitel">诊断日期:</span><span class="rowtext">{{this.dagtime}}</span></p>
            <p class="cardrow"><span class="rowtitel">健康问题评估:</span><span class="rowtext">{{this.$route.params.dzbldetail.natmehaPatientDTO.natmehaMedRecordsDTO.healthProblemEval}}</span></p>
          </div>
          <div style="height: 20px">
          </div>
        </div>
      </el-card>

      <el-card class="box-card cardbody">
        <div class="cardbody">
          <h4 class="cardtitle">电子病历-住院信息</h4>
          <div>
            <p class="cardrow"><span class="rowtitel">入院科室:</span><span class="rowtext">{{this.$route.params.dzbldetail.natmehaPatientDTO.natmehaMedRecordsDTO.inDeptName}}</span></p>
            <p class="cardrow"><span class="rowtitel">入院时间:</span><span class="rowtext">{{this.intime}}</span></p>
            <p class="cardrow"><span  class="rowtitel">入院床号:</span><span class="rowtext">{{this.$route.params.dzbldetail.natmehaPatientDTO.natmehaMedRecordsDTO.inBed}}</span></p>
          </div>
          <div>
            <p class="cardrow"><span class="rowtitel">住院原因:</span><span class="rowtext">{{this.$route.params.dzbldetail.natmehaPatientDTO.natmehaMedRecordsDTO.inReasonCode}}</span></p>
            <p class="cardrow"><span class="rowtitel">其他医学处置:</span><span class="rowtext">{{this.$route.params.dzbldetail.natmehaPatientDTO.natmehaMedRecordsDTO.otherMedicalTreatment}}</span></p>
            <p class="cardrow"><span class="rowtitel">出院日期:</span><span class="rowtext">{{this.outtime}}</span></p>
            <p class="cardrow"><span class="rowtitel">出院科室:</span><span class="rowtext">{{this.$route.params.dzbldetail.natmehaPatientDTO.natmehaMedRecordsDTO.outDeptName}}</span></p>
          </div>
          <div style="height: 20px">
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "dzbletail",
  data() {
    return{
      //parseint解析字符串中的整数
      /*      num:parseInt(this.$route.params.dzbldetail.natmehaPatientDTO.natmehaMedRecordsDTO.num)*/
      time:moment(this.$route.params.dzbldetail.natmehaPatientDTO.natmehaMedRecordsDTO.visitDtime).format('YYYY-MM-DD 星期E A'),
      intime:moment(this.$route.params.dzbldetail.natmehaPatientDTO.natmehaMedRecordsDTO.inDtime).format("YYYY-MM-DD"),
      outtime:moment(this.$route.params.dzbldetail.natmehaPatientDTO.natmehaMedRecordsDTO.outDtime).format("YYYY-MM-DD"),
      dagtime:moment(this.$route.params.dzbldetail.natmehaPatientDTO.natmehaMedRecordsDTO.diagDate).format("YYYY-MM-DD"),
    }
  }
}
</script>

<style scoped>
.dzbldetailbody{
  color: black;
  background: #F5F5F5;
  height: 800px;
}
.box-card cardbody{
  width: 395px;
}
.youjiantou{
  font-size: 18px;
  margin-top: 7px;
}
/deep/ .el-card__body{
  padding: 0 0 0 20px;
}
/deep/.el-card{
  width: 96%;
  margin-left: 2%;
  border-radius: 20px;
}
.cardbody{
  margin-top: 20px;
  background-color: white;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 8px;

}
.cardrow{
  text-align: left;
  color: black;
  margin-top: 10px;
  padding: 0 90px;
}
.cardtitle{
  font-size: 16px;
  font-weight: bold;
  margin-right: 20px;
}
.rowtitel{
  font-size: 14px;
  font-weight: bold;
}
.rowtext{
  font-size: 14px;
  margin-left: 10px;
}
.time{
  color: red;
  font-size: 20px;
  font-weight: bold;
  float: right;
  margin-right: 10px;
}
</style>
