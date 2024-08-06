<template>
  <div v-wechat-title="$route.meta.title">
    <appointment-top></appointment-top>
    <appointment-choose></appointment-choose>
    <appointment-location></appointment-location>
    <appointment-list></appointment-list>
  </div>
</template>

<script>
import AppointmentTop from "./components/AppointmentTop"
import AppointmentChoose from "./components/AppointmentChoose"
import AppointmentLocation from "./components/AppointmentLocation";
import AppointmentList from "./components/AppointmentList"

export default {
  name: "AppointmentIndex",
  components: {
    AppointmentTop,
    AppointmentChoose,
    AppointmentLocation,
    AppointmentList
  }
}
</script>

<style scoped>

</style>
