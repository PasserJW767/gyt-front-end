<template>
  <div class="AppointmentRemind">
    <div class="allDiv">
      <!-- 顶部提示框 -->
      <div class="remindDiv">
        <!-- 顶部提示图标 -->
        <span class="remindIcon iconfont icon-zhengque"></span>
        <!-- 顶部提示语 -->
        <div class="remindInfo">
          <span class="remindDetail">恭喜您，挂号成功！</span>
        </div>
      </div>
      <hr>
      <!-- 底部信息框 -->
      <div class="infoDiv">
        <div class="infoTitle">
          <span class="infoTitleDetail">挂号信息</span>
        </div>
        <div class="rectangle">
          <!-- 就诊机构 -->
          <div class="hospital">
            <span class="hospitalTitle">就诊机构:</span>
            <span class="hospitalContent">{{ this.doctorInfo.natmehaHospitalDTO.hospitalName }}</span>
          </div>
          <!-- 就诊科室 -->
          <div class="otherDiv">
            <span class="otherTitle">就诊科室:</span>
            <span class="otherContent">{{ this.doctorInfo.deptCode }}</span>
          </div>
          <!-- 就诊医师 -->
          <div class="otherDiv">
            <span class="otherTitle">就诊医师:</span>
            <span class="otherContent">{{ this.doctorInfo.doctorName }}</span>
            <span class="id">{{ this.appointmentDoctorSignalInfo.registerCount }}</span>
          </div>
          <!-- 挂号号别 -->
          <div class="otherDiv">
            <span class="otherTitle">挂号号别:</span>
            <span class="otherContent">{{ this.appointmentDoctorSignalInfo.registerType }}</span>
          </div>
          <!-- 就诊时间 -->
          <div class="otherDiv">
            <span class="otherTitle">就诊时间:</span>
            <span class="otherContent">{{ this.appointmentConfirmDate.year }}-{{ this.appointmentConfirmDate.month }}-{{ this.appointmentConfirmDate.date }}&nbsp;{{ this.appointmentConfirmDate.weekDay }}&nbsp;{{ this.timeScope }}</span>
          </div>
          <!-- 就诊患者 -->
          <div class="otherDiv">
            <span class="otherTitle">就诊患者:</span>
            <span class="otherContent">{{ this.appointmentChoosePatient.patientName }}</span>
          </div>
          <!-- 身份证号 -->
          <div class="otherDiv">
            <span class="otherTitle">身份证号:</span>
            <span class="otherContent">{{ this.appointmentChoosePatient.idcardNo }}</span>
          </div>
          <!-- 手机号码 -->
          <div class="bottomDiv">
            <span class="bottomTitle">手机号码:</span>
            <span class="bottomContent">{{ this.appointmentPatientTel }}</span>
          </div>
        </div>
      </div>

      <!-- 确认按钮 -->
      <router-link tag="div" class="confirmButtonDiv" to="/home">
        <span class="confirmButton">确认并返回首页</span>
      </router-link>

    </div>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  name: "AppointmentRemind",
  methods: {
    ...mapActions(['insertSignalSource'])
  },
  computed: {
    ...mapGetters(['doctorInfo','appointmentChoosePatient','appointmentPatientTel','timeScope','appointmentConfirmDate','appointmentDoctorSignalInfo'])
  },
  created() {
    this.insertSignalSource();
  }
}
</script>

<style lang="stylus" scoped>
.AppointmentRemind
  .allDiv
    .remindDiv
      text-align center
      .remindIcon
        color rgb(119,86,55)
        font-size 100px
      .remindInfo
        margin-bottom 20px
        .remindDetail
          color rgb(102,102,102)
          font-size 20px
          font-family '微软雅黑'
          font-weight bold
    .infoDiv
      margin-top 15px
      .infoTitle
        margin-left 10px
        .infoTitleDetail
          color rgb(102,102,102)
          font-size 20px
          font-family '微软雅黑'
          font-weight bold
      .rectangle
        background white
        margin 10px 15px 0 15px
        border-radius 15px
        border 2px solid RGB(242,242,242)
        box-shadow 0 5px 5px 0 RGB(183,183,183)
        .hospital
          margin-top 20px
          margin-left 20px
          .hospitalTitle
            color rgb(102,102,102)
            font-family '微软雅黑'
            font-size 15px
          .hospitalContent
            margin-left 10px
            color rgb(102,102,102)
            font-weight bold
            font-family '微软雅黑'
            font-size 15px
        .otherDiv
          margin-top 12px
          margin-left 20px
          .otherTitle
            color rgb(102,102,102)
            font-family '微软雅黑'
            font-size 15px
          .otherContent
            margin-left 10px
            color rgb(102,102,102)
            font-weight bold
            font-family '微软雅黑'
            font-size 15px
          .id
            font-family '微软雅黑'
            font-weight bold
            float right
            margin-right 10px
            color rgb(243,63,43)
            font-size 45px
            margin-top -35px
            padding-right 15px
        .bottomDiv
            margin-top 12px
            margin-left 20px
            margin-bottom 12px
            .bottomTitle
              color rgb(102,102,102)
              font-family '微软雅黑'
              font-size 15px
            .bottomContent
              margin-left 10px
              color rgb(102,102,102)
              font-weight bold
              font-family '微软雅黑'
              font-size 15px
    .confirmButtonDiv
      display flex
      margin 30px 20px 0 20px
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

</style>
