<template>
  <div class="AppointmentDetail" v-wechat-title="$route.meta.title">
    <appointment-top></appointment-top>
    <appointment-date-picker></appointment-date-picker>
    <appointment-doctor-list></appointment-doctor-list>
  </div>
</template>

<script>
import AppointmentTop from "./components/AppointmentTop"
import AppointmentDatePicker from "./components/AppointmentDatePicker";
import AppointmentDoctorList from "./components/AppointmentDoctorList";
export default {
  name: "AppointmentDetail",
  components: {
    AppointmentTop,
    AppointmentDatePicker,
    AppointmentDoctorList
  }
}
</script>

<style lang="stylus" scoped>
.AppointmentDetail
  height auto
  width 100%
  background-color rgb(245,245,245)

</style>
