<template>
  <div class="AppointmentSuccess" v-wechat-title="$route.meta.title">
    <appointment-top></appointment-top>
    <appointment-remind></appointment-remind>
  </div>
</template>

<script>
import AppointmentTop from "./components/AppointmentTop";
import AppointmentRemind from "./components/AppointmentRemind";
export default {
  name: "AppointmentSuccess",
  components: {
    AppointmentTop,
    AppointmentRemind
  }
}
</script>

<style scoped>

</style>
