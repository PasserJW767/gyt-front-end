<template>
<div class="costdetailbody">
  <div  style="height:39px   ;background: #775637;text-align: center">
    <router-link to="/costlist">
      <span class="icon iconfont youjiantou" style="float: left">&#xe624;</span>
    </router-link>
    <span style="height: 39px;line-height: 39px;color: white;font-size: 16px">费用详情</span>
    <el-card class="box-card cardbody" style="overflow: unset">
          <div class="cardbody">
            <h4 class="cardtitle">就诊费用-门诊信息</h4>
            <div>
              <p class="cardrow"><span class="rowtitel">就诊机构:</span><span class="rowtext">{{this.$route.params.costdetail.natmehaPatientDTO.natmehaMedRecordsDTO.natmehaMedCostDTO.visitOrgName}}</span></p>
              <p class="cardrow"><span class="rowtitel">就诊科室:</span><span class="rowtext">{{this.$route.params.costdetail.natmehaPatientDTO.natmehaMedRecordsDTO.natmehaMedCostDTO.visitDeptName}}</span></p>
              <p class="cardrow"><span  class="rowtitel">就诊医师:</span><span class="rowtext">{{this.$route.params.costdetail.natmehaPatientDTO.natmehaMedRecordsDTO.respDoctorName}}</span></p>
            </div>
          <div>
            <p class="cardrow"><span class="rowtitel">价格名称:</span><span class="rowtext">{{this.$route.params.costdetail.natmehaPatientDTO.natmehaMedRecordsDTO.natmehaMedCostDTO.specifications}}</span></p>
            <p class="cardrow"><span class="rowtitel">单价:</span><span class="rowtext">{{this.$route.params.costdetail.natmehaPatientDTO.natmehaMedRecordsDTO.natmehaMedCostDTO.price}}</span></p>
            <p class="cardrow"><span class="rowtitel">数量:</span><span class="rowtext">{{this.$route.params.costdetail.natmehaPatientDTO.natmehaMedRecordsDTO.natmehaMedCostDTO.num}}</span></p>
            <p class="cardrow"><span class="rowtitel">门诊费用:</span><span class="rowtext">{{this.$route.params.costdetail.natmehaPatientDTO.natmehaMedRecordsDTO.natmehaMedCostDTO.outpatSelfPayment}}</span><span class="time">{{this.time}}</span></p>
          </div>
            <div style="height: 20px">
            </div>
          </div>
    </el-card>

    <el-card class="box-card cardbody" style="overflow: unset">
      <div class="cardbody">
        <h4 class="cardtitle">就诊费用-住院信息</h4>
        <div>
          <p class="cardrow"><span class="rowtitel">住院原因:</span><span class="rowtext">{{this.$route.params.costdetail.natmehaPatientDTO.natmehaMedRecordsDTO.inReasonCode}}</span></p>
          <p class="cardrow"><span class="rowtitel">床号:</span><span class="rowtext">{{this.$route.params.costdetail.natmehaPatientDTO.natmehaMedRecordsDTO.inBed}}</span></p>
          <p class="cardrow"><span  class="rowtitel">门诊诊断名称:</span><span class="rowtext">{{this.$route.params.costdetail.natmehaPatientDTO.natmehaMedRecordsDTO.outpatDiagName}}</span></p>
        </div>
        <div>
          <p class="cardrow"><span class="rowtitel">住院时间:</span><span class="rowtext">{{this.intime}}</span></p>
          <p class="cardrow"><span class="rowtitel">出院时间:</span><span class="rowtext">{{this.outtime}}</span></p>
          <p class="cardrow"><span class="rowtitel">住院费用:</span><span class="rowtext">{{this.$route.params.costdetail.natmehaPatientDTO.natmehaMedRecordsDTO.natmehaMedCostDTO.inpatSelfPayment}}</span><span class="time">{{this.time}}</span></p>
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
  name: "CostDetail",
  data() {
    return{
      //parseint解析字符串中的整数
/*      num:parseInt(this.$route.params.costdetail.natmehaPatientDTO.natmehaMedRecordsDTO.natmehaMedCostDTO.num)*/
      time:moment(this.$route.params.costdetail.natmehaPatientDTO.natmehaMedRecordsDTO.natmehaMedCostDTO.visitDtime).format("YYYY.MM.DD"),
      intime:moment(this.$route.params.costdetail.natmehaPatientDTO.natmehaMedRecordsDTO.inDtime).format("YYYY-MM-DD"),
      outtime:moment(this.$route.params.costdetail.natmehaPatientDTO.natmehaMedRecordsDTO.outDtime).format("YYYY-MM-DD"),
    }
  }
}
</script>

<style scoped>
.costdetailbody{
  color: #8C7866;
  background: #F5F5F5;

  height: 100%;
  width: 100%;
}
.youjiantou{
  font-size: 18px;
  margin-top: 7px;
}
/deep/ .el-card__body{
  padding: 0 0 0 20px;
}
/deep/ .el-card{
  width: 96%;
  margin-left: 2%;
  border-radius: 20px;
}
.cardbody{
  margin-top: 20px;
}
.cardrow{
text-align: left;
  color: #8C7866;
  margin-top: 10px;
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
