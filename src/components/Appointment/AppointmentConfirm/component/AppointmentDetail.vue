<template>
  <div class="AppointmentDetail">
    <!-- 提示语 -->
    <div class="remind">
      <span class="iconfont icon-tongzhi remindImage"></span>
      <span class="remindFont">请确认挂号详情</span>
    </div>
    <!-- 信息展示 -->
    <div class="rectangle">
      <!-- 就诊机构 -->
      <div class="chooseHospital">
        <span class="chooseHospitalTitle">就诊机构:</span>
        <span class="chooseHospitalDetail">{{ this.doctorInfo.natmehaHospitalDTO.hospitalName }}</span>
      </div>
      <!-- 就诊科室 -->
      <div class="chooseDepartment">
        <span class="chooseDepartmentTitle">就诊科室:</span>
        <span class="chooseDepartmentDetail">{{ this.doctorInfo.deptCode }}</span>
      </div>
      <!-- 就诊医师 -->
      <div class="chooseDoctor">
        <span class="chooseDoctorTitle">就诊医师:</span>
        <span class="chooseDoctorDetail">{{ this.doctorInfo.doctorName }}</span>
      </div>
      <!-- 挂号号别 -->
      <div class="chooseLevel">
        <span class="chooseLevelTitle">挂号号别:</span>
        <span class="chooseLevelDetail">{{ this.appointmentDoctorSignalInfo.registerType }}</span>
        <span class="id">{{ this.appointmentDoctorSignalInfo.registerCount }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions,mapMutations,mapGetters } from 'vuex'
export default {
  name: "AppointmentDetail",
  methods: {
    ...mapActions(['getDoctorInfoForConfirm','getDoctorNewlySignal']),
    ...mapMutations(['mDoctorItemId','mDoctorItemCode','mAppointmentConfirmDate'])
  },
  computed: {
    ...mapGetters(['doctorInfo','chooseDate','appointmentDoctorSignalInfo'])
  },
  created() {
    this.mDoctorItemId(this.$route.params.doctorId);
    this.mDoctorItemCode(this.$route.params.doctorCode);
    this.mAppointmentConfirmDate(this.chooseDate);
    this.getDoctorInfoForConfirm();
    this.getDoctorNewlySignal();
  }
}
</script>

<style lang="stylus" scoped>
.AppointmentDetail
  .remind
    margin-top 10px
    margin-left 20px
    .remindImage
      color rgb(51,153,255)
      font-size 17px
    .remindFont
      margin-left 10px
      font-size 14px
      font-family '微软雅黑'
      color rgb(153,153,153)
  .rectangle
    background white
    margin 10px 15px 0 15px
    border-radius 15px
    border 2px solid RGB(242,242,242)
    box-shadow 0 5px 5px 0 RGB(183,183,183)
    height 170px
    .chooseHospital
      margin-top 25px
      margin-left 17px
      .chooseHospitalTitle
        font-family '微软雅黑'
        color rgb(102,102,102)
        font-size 15px
      .chooseHospitalDetail
        color rgb(102,102,102)
        font-family '微软雅黑'
        margin-left 5px
        font-weight bold
        font-size 15px
    .chooseDepartment
      margin-top 10px
      margin-left 17px
      .chooseDepartmentTitle
        font-family '微软雅黑'
        color rgb(102,102,102)
        font-size 15px
      .chooseDepartmentDetail
        color rgb(102,102,102)
        font-family '微软雅黑'
        margin-left 5px
        font-weight bold
        font-size 15px
    .chooseDoctor
      margin-top 10px
      margin-left 17px
      .chooseDoctorTitle
        font-family '微软雅黑'
        color rgb(102,102,102)
        font-size 15px
      .chooseDoctorDetail
        color rgb(102,102,102)
        font-family '微软雅黑'
        margin-left 5px
        font-weight bold
        font-size 15px
    .chooseLevel
      margin-top 10px
      margin-left 17px
      .chooseLevelTitle
        font-family '微软雅黑'
        color rgb(102,102,102)
        font-size 15px
      .chooseLevelDetail
        font-family '微软雅黑'
        margin-left 5px
        background-color rgb(243,63,43)
        color white
        padding 3px 5px 3px 5px
        font-size 14px
      .id
        font-family '微软雅黑'
        font-weight bold
        float right
        margin-right 17px
        color rgb(243,63,43)
        font-size 45px
        margin-top -35px



</style>
