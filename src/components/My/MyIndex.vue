
<template>
    <div class="myindexbody"  v-wechat-title="$route.meta.title">
            <my-header/>
              <register-and-patient-bar/>
            <health-data/>
            <my-service/>
      <router-view/>
    </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import RegisterAndPatientBar from "./components/RegisterAndPatientBar";
import HealthData from "./components/HealthData";
import MyService from "./components/MyService";
import {mapActions, mapGetters} from "vuex";
export default {
  name: "MyIndex",
  components: {
    MyHeader,
    RegisterAndPatientBar,
    HealthData,
    MyService
  }
}
</script>

<style scoped>
    .myindexbody{
      background: #F5F5F5;
      width: 100%;
    }

</style>
