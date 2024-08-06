<template>
  <div class="AppointmentTop">
    <div class="header-title">
      <div class="headerFont">预约成功</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppointmentTop"
}
</script>

<style lang="stylus" scoped>
.AppointmentTop
  background: rgba(119, 86, 55, 1);
  .header-title
    display flex
    flex-direction row //盒子内元素行排（默认）
    justify-content center  //盒子内元素垂直居中
    align-items center //盒子内元素垂直居中
    height 50px
    .headerFont
      flex 1
      font-family '微软雅黑'
      font-weight 400
      font-style normal
      font-size 16px
      color #FFFFFF
      text-align center
      padding-top 10px
</style>
