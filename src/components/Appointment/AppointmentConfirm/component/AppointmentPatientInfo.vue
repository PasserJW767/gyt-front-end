<template>
  <div class="AppointmentPatientInfo">
    <div class="allDiv">
      <!-- 就诊时间 -->
      <div class="appointmentTime">
        <span class="appointmentTimeTitle">就诊时间</span>
        <span class="appointmentTimeContent">{{ this.chooseDate.year }}-{{ this.chooseDate.month }}-{{ this.chooseDate.date }}&nbsp;{{ this.chooseDate.weekDay }}&nbsp;{{ this.timeScope }}</span>
      </div>
      <!-- 就诊人姓名 -->
      <div class="appointmentPatient">
        <span class="appointmentPatientTitle">就诊人姓名</span>
        <router-link to="/appointmentSelectPatient">
          <span class="appointmentPatientContent">
            <span v-if="appointmentChoosePatientCode==-1">请选择</span>
            <span v-if="appointmentChoosePatientCode!=-1">{{ appointmentChoosePatient.patientName }}</span>
            <span class="appointmentPatientArrow iconfont icon-arrow-right-bold"></span>
          </span>
        </router-link>

      </div>
      <!-- 就诊人身份证 -->
      <div class="appointmentIDCard">
        <span class="appointmentIDCardTitle">身份证号</span>
        <span v-if="appointmentChoosePatientCode!=-1" class="appointmentIDCardContent">{{ appointmentChoosePatient.idcardNo }}</span>
        <span v-if="appointmentChoosePatientCode==-1" class="appointmentIDCardContent">请先选择就诊人</span>
      </div>
      <!-- 就诊人手机号码 -->
      <div class="appointmentTel">
        <span class="appointmentTelTitle">手机号</span>
        <input type="text" class="appointmentTelContent" placeholder="请输入手机号码" v-model="tel" v-on:input="inputTel" />
      </div>

      <!-- 确认按钮 -->
      <router-link tag="div" to="/appointmentSuccess" class="confirmButtonDiv">
        <span class="confirmButton">确认</span>
      </router-link>

      <!-- 填充div -->
      <div class="fixDiv"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters,mapMutations } from 'vuex'
export default {
  name: "AppointmentPatientInfo",
  data() {
    return {
      tel: '',
    }
  },
  methods: {
    ...mapMutations(['mTimeScope','mAppointmentUserCode','mAppointmentPatientTel']),
    inputTel(){
      this.mAppointmentPatientTel(this.tel);
    }
  },
  computed: {
    ...mapGetters(['chooseDate','timeScope','appointmentChoosePatientCode','appointmentChoosePatient','getLogUser']),
  },
  created() {
    let userCode = this.getLogUser.itemcode;
    console.log(userCode);
    this.mAppointmentUserCode(userCode);
    this.mTimeScope(this.$route.params.timeScope);
  }
}
</script>

<style lang="stylus" scoped>
.AppointmentPatientInfo
  .allDiv
    margin-top 30px
    background-color rgb(242,242,242)
    .appointmentTime
      padding-top 15px
      padding-bottom 15px
      background-color white
      border-bottom 2px solid rgb(228,228,228)
      .appointmentTimeTitle
        margin-left 20px
        font-size 16px
        color rgb(102,102,102)
        font-family '微软雅黑'
      .appointmentTimeContent
        font-size 16px
        font-family '微软雅黑'
        color rgb(102,102,102)
        margin-right 25px
        float right
    .appointmentPatient
      padding-top 15px
      padding-bottom 15px
      background-color white
      border-bottom 2px solid rgb(228,228,228)
      .appointmentPatientTitle
        margin-left 20px
        font-size 16px
        color rgb(102,102,102)
        font-family '微软雅黑'
      .appointmentPatientContent
        font-size 16px
        font-family '微软雅黑'
        color rgb(102,102,102)
        margin-right 5px
        float right
        .appointmentPatientArrow
          color rgb(119,86,55)
    .appointmentIDCard
      padding-top 15px
      padding-bottom 15px
      background-color white
      border-bottom 2px solid rgb(228,228,228)
      .appointmentIDCardTitle
        margin-left 20px
        font-size 16px
        color rgb(102,102,102)
        font-family '微软雅黑'
      .appointmentIDCardContent
        font-size 16px
        font-family '微软雅黑'
        color rgb(102,102,102)
        margin-right 25px
        float right
    .appointmentTel
      padding-top 15px
      padding-bottom 15px
      background-color white
      border-bottom 2px solid rgb(228,228,228)
      .appointmentTelTitle
        margin-left 20px
        font-size 16px
        color rgb(102,102,102)
        font-family '微软雅黑'
      .appointmentTelContent
        text-align right
        border none
        font-size 16px
        font-family '微软雅黑'
        color rgb(102,102,102)
        margin-right 25px
        float right
    .confirmButtonDiv
      display flex
      margin 70px 20px 0 20px
      .confirmButton
        font-family '微软雅黑'
        width 100%
        color white
        border-radius 50px
        height 35px
        padding-top 9px
        font-size 18px
        background-color rgb(212,0,0)
        text-align center
    .fixDiv
      height 100%
      background-color rgb(242,242,242)

</style>
