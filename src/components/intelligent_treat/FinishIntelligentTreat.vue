<template>
  <div class="body">
    <intelligent-treat-header></intelligent-treat-header>
    <intelligent-treat-progress-bar v-bind:active="active" :stepOfState1="stepOfState1" :stepOfState2="stepOfState2" :stepOfState3="stepOfState3"></intelligent-treat-progress-bar>
    <hr style="background-color:#d3d7d4; height: 1px;border: none;">

    <finish-hospital-body></finish-hospital-body>

    <el-button class="bar-btn1"  @click="reTest">重新测试</el-button>
    <el-button class="bar-btn"  @click="Finish">完成</el-button>

  </div>
</template>
<script type="text/JavaScript">

  import IntelligentTreatHeader from "./components/IntelligentTreatHeader";
  import IntelligentTreatProgressBar from "./components/IntelligentTreatProgressBar";
  import FinishHospitalBody from "./components/FinishHospitalBody";
  export default {
    name: "FinishIntelligentTreat",
    data() {
      return {
        active:3,
        stepOfState1:"已完成",
        stepOfState2:"已完成",
        stepOfState3:"已完成",
      }
    },
    methods: {
      reTest(){//重新测试
        this.$router.push("/treat")
      },
      Finish() {//转跳回首页
        this.$router.push("/home")
      },
    },
    components:{
      IntelligentTreatHeader,
      IntelligentTreatProgressBar,
      FinishHospitalBody,

    },

  }
</script>
<style lang="stylus" scoped>
  @import "~styles/mixins.styl";
  .body
    overflow-x hidden
    .bar-btn1
      margin-left 20%;
      padding:-10px;
      barOfNextBtn()
      margin-top 20px
      width 90px;
    .bar-btn
      margin-left 20%;
      barOfNextBtn()
      margin-top 20px
</style>

