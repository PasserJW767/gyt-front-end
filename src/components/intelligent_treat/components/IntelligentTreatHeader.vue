<!--智能导诊头部-->
<template>
  <div class="top">
    <div class="header-title">
      <div @click="backHome" class>
        <span class="iconfont icon-fanhui back-icon"></span>
      </div>
      <div class="headerFont">智能导诊</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "IntelligentTreatHeader",
    methods:{
      //返回首页
      backHome(){
        this.$router.push('/home')
      }
    }
  }
</script>

<style lang="css" scoped>
  .top{
    overflow-x: hidden;
    background: rgba(119, 86, 55, 1);
  }
  .header-title{
    padding-top: 10px;
    padding-bottom: 5px;
    display: flex;
    flex-direction: row; //盒子内元素行排（默认）
    justify-content: center;  //盒子内元素垂直居中
    align-items: center; //盒子内元素垂直居中
    height: 50px;
  }
  .back-icon{
    font-size: 16px;
    padding-left: 10px;
    padding-right: 10px;
    font-weight: bold;
  }
  .headerFont{
    flex: 1;
    font-family: '微软雅黑';
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    color: #FFFFFF;
    text-align: center;
    margin-left: -20px;
  }


</style>
