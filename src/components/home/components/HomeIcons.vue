<template>
<div class="homeIcons">
  <div class="icon-wrap" @click="toHospital">
    <img src="http://localhost:8081/gyt/image/u218.png" alt=""><br>
    <span class="text">国医堂</span>
  </div>
  <div class="icon-wrap" @click="toBookReg">
    <img src="http://localhost:8081/gyt/image/u221.png" alt=""><br>
    <span class="text">预约挂号</span>
  </div>
  <div class="icon-wrap" @click="toDiagnose">
    <img src="http://localhost:8081/gyt/image/u224.png" alt=""><br>
    <span class="text">智能导诊</span>
  </div>
</div>
</template>

<script>
export default {
  name: "HomeIcons",
  methods:{
    //整合时改路径
    toHospital() {
      this.$router.push({
        path: '/GuoYiTangHotIndex'})
    },
    toBookReg(){
      this.$router.push({
        name: 'AppointmentIndex',
        params:{keyWord:''}})
    },
    toDiagnose(){
      this.$router.push({
        path: 'treat'})
    }
  }
}
</script>

<style scoped>
  .homeIcons{
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  .icon-wrap{
    flex: 1;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .icon-wrap img{
    height: 50px;
    width:50px;
    margin-bottom: 10px;
  }
  .text{
    font-family: '微软雅黑';
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
    color: #666666;
  }
</style>
