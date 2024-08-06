<template>
<div class="GuoYiTangHotTitle">
  <router-link to="/home" style="color: white;">
    <span class="iconfont icon-fanhui back-icon"></span>
  </router-link>
  <div class="headerFont">医院</div>
</div>
</template>

<script>
export default {
  name: "GuoYiTangHotTitle"
}
</script>

<style lang="stylus" scoped>
.GuoYiTangHotTitle
  background: rgba(119, 86, 55, 1);
  display flex
  flex-direction row //盒子内元素行排（默认）
  justify-content center  //盒子内元素垂直居中
  align-items center //盒子内元素垂直居中
  height 50px
  .back-icon
    font-size 16px
    padding-left 15px
    padding-top 10px
    font-weight bold
  .headerFont
    flex 1
    font-family '微软雅黑'
    font-weight 400
    font-style normal
    font-size 16px
    color #FFFFFF
    text-align center
    padding-top 10px
    margin-left -10px
</style>
