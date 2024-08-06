<template>
  <div class="patienmanagerbody">
    <div class="AppointmentTop">
      <div class="header-title">
        <router-link tag="div" :to="{name:'AppointmentConfirm',params:{doctorId: this.doctorItemId,doctorCode: this.doctorItemCode,timeScope: this.timeScope}}">
          <span class="iconfont icon-fanhui back-icon"></span>
        </router-link>
        <div class="headerFont">预约挂号</div>
      </div>
    </div>
    <el-card class="patiencard" shadow="always" v-for="(item,index) in appointmentPatientList" :key="index">
      <div class="cardrow">
        <span class="patienname">{{ item.patientName }}</span>
        <span style="margin-left: 3%" >{{ item.gender }}</span>
      </div>
      <div class="cardrow">
        <span >身份证号：</span>
        <span >{{ item.idcardNo }}</span>
      </div>
      <div class="cardrow">
        <span >住址：</span>
        <span >{{ item.adressPro }}{{ item.adressCity }}{{ item.adressCountry }}{{ item.adress }}</span>
      </div>
      <div style="border: #eaeaea solid 1px;position: relative;right: 1%;width: 98%"></div>
      <div class="cardrow operation">
<!--        <el-radio v-model="item.defaultPatient" value="index" label="index">选为就诊人</el-radio>-->
        <input type="radio" name="radios" :value="item" v-model="defaultman">选为就诊人
        <span class="icon iconfont" style="margin-left: 30%;line-height: 24px">&#xe601;</span>
        <span class="delandep">编辑</span>
        <span class="icon iconfont delandep" style="margin-left: 5px" >&#xe638;</span>
        <span class="delandep">删除</span>
      </div>
    </el-card>
    <div class="addpatien">
      添加就诊人
    </div>
  </div>
</template>

<script>
import { mapGetters,mapActions,mapMutations } from 'vuex'
export default {
  name: "PatienManager",
  data() {
    return{
      defaultman:'1'
    }
  },
  methods: {
    ...mapActions(['getPatientInfoByUserCode']),
    ...mapMutations(['mAppointmentChoosePatientCode','mAppointmentChoosePatient'])
  },
  computed: {
    ...mapGetters(['doctorItemId','doctorItemCode','timeScope','appointmentUserCode','appointmentPatientList']),
  },
  created() {
    this.getPatientInfoByUserCode(this.appointmentUserCode);
  },
  watch:{
    defaultman: function (val) {
      this.mAppointmentChoosePatientCode(1);
      this.mAppointmentChoosePatient(val);
    }
  }
}
</script>

<style scoped>
.patienmanagerbody{
  background: #F5F5F5;
  height: 800px;
}
.AppointmentTop{
  background: rgba(119, 86, 55, 1);
}
.header-title{
  display: flex;
  flex-direction: row; /*盒子内元素行排（默认）*/
  justify-content: center;  /*盒子内元素垂直居中*/
  align-items: center; /*盒子内元素垂直居中*/
  height: 50px;
}
.headerFont{
  flex: 1;
  font-family: '微软雅黑';
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  color: #FFFFFF;
  text-align: center;
  padding-top: 10px;
  margin-left: -20px;
}
.back-icon{
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
  font-weight: bold;
}
.chooseAsPatient{
  float: right;
}

.youjiantou{
  font-size: 18px;
  margin-top: 7px;
}
.title{
  color: white;
  line-height: 42px;
  font-size: 16px;
}
.mysharebar{
  border: white 1px solid;
  border-radius: 14.4px;
  display: flex;
  flex-direction: row;
  width: 78px;
  height: 28.08px;
  margin-top: 6px;
}
.share{
  padding: 2.4px 6px;
  margin-left: 10%;
  line-height:28.08px ;
  font-size: 18px;
  color: black;
}
.return{
  padding: 2.4px 6px;
  line-height:28.08px ;
  color: black;
}
.sharefengexian{
  border-left: white solid 1px;
  height: 12px;
  margin-top: 9.6px;
}
.patiencard{
  width: 90%;
  margin-left: 5%;
  margin-top: 15px;
  height: 140px;
  font-size: 14px;
  color: #666666;
  text-align: center;
  border-radius: 20px;
}
/deep/ .el-card.is-always-shadow{
  -webkit-box-shadow: 3px 3px 3px #B9B9B9;
}
/deep/ .el-card__body{
  padding: 20px 0px 0px 20px;
  height: 194px;
}
.cardrow{
  margin-bottom: 5px;
  text-align: left;
  display: flex;
}
.patienname{
  font-weight: bold;
}
.operation{
  margin-top: 10px;
}
/deep/ .el-radio__input.is-checked .el-radio__inner {
  border-color: rgb(243,63,43);
  background: rgb(243,63,43);
}
/deep/ .el-radio__input.is-checked+.el-radio__label {
  color: rgb(243,63,43);
}
.delandep{
  line-height: 24px
}
.addpatien{
  color: white;
  background: #D40000;
  text-align: center;
  height: 45px;
  width: 80%;
  margin-left: 10%;
  line-height: 45px;
  margin-top: 20px;
  border-radius: 60px;
  font-size: 16px;
}
</style>
