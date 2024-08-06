<template>
    <div class="bar">
      <el-steps :active="active" finish-status="success" class="bar-content">
        <el-step  class="bar_content_step" :title="stepOfState1"></el-step>
        <el-step  class="bar_content_step" :title="stepOfState2"></el-step>
        <el-step  class="bar_content_step" :title="stepOfState3"></el-step>
      </el-steps>
    </div>
</template>
<script>
  export default {
    name: "IntelligentTreatProgressBar",
    props:{
      active:Number,
      stepOfState1:String,
      stepOfState2:String,
      stepOfState3:String,
    }
  }
</script>

<style lang="stylus" scoped>
.bar
  overflow hidden
  padding-top:20px;
  font-size: 15px;
  font-family: "微软雅黑";
  width: 70%;
  margin-left: 15%;
  .bar-content
    font-size: 14px;
    .bar_content_step/*每一步的字体大小和字体*/
      font-family: '微软雅黑';
      font-size:14px;
     .bar_content_step >>>.el-step__title.is-process /*进行中样式覆盖*/
        font-weight: 520;
        font-family: '微软雅黑';
        color: rgba(119,86,55,1);
     .bar_content_step >>>.el-step__head.is-process /*进行中圆覆盖*/
       color: rgba(119,86,55,1);
       border-color:rgba(119,86,55,1);
     .bar_content_step >>>.el-step__title.is-success/*待进行样式覆盖*/
       color:rgba(119,86,55,1);
       font-family: '微软雅黑';
     .bar_content_step >>>.el-step__icon-inner.is-status/*勾样式覆盖*/
       color:rgba(119,86,55,1);
     .bar_content_step >>>.el-step__head.is-success/*圆圈样式覆盖*/
       color: rgba(119,86,55,1);
       border-color:rgba(119,86,55,1);
       border-top-color: rgba(119,86,55,1);
       border-right-color:rgba(119,86,55,1);
       border-bottom-color: rgba(119,86,55,1);
       border-left-color: rgba(119,86,55,1);
</style>
