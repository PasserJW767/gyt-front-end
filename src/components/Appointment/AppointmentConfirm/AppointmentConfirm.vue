<template>
  <div class="AppointmentConfirm" v-wechat-title="$route.meta.title">
    <appointment-top></appointment-top>
    <appointment-detail></appointment-detail>
    <appointment-patient-info></appointment-patient-info>
  </div>
</template>

<script>
import AppointmentTop from "./component/AppointmentTop";
import AppointmentDetail from "./component/AppointmentDetail";
import AppointmentPatientInfo from "./component/AppointmentPatientInfo";
export default {
  name: "AppointmentConfirm",
  components: {
    AppointmentTop,
    AppointmentDetail,
    AppointmentPatientInfo
  }
}
</script>

<style lang="stylus" scoped>
.AppointmentConfirm
  //position fixed
  height 100%
  width 100%
  background-color rgb(242,242,242)
</style>
