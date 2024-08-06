<template>
  <div class="AppointmentTop">
    <div class="header-title">
      <router-link tag="div" :to="{name: 'AppointmentIndex',params:{keyWord:''}}">
        <span class="iconfont icon-fanhui back-icon"></span>
      </router-link>
      <div class="headerFont">预约挂号</div>
    </div>
    <div class="headerInput">
      <span class="iconfont icon-sousuo input-sousuo"/>
      <input class="header-input" type="text" placeholder="搜索">
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
    .back-icon
      font-size 16px
      padding-left 10px
      padding-top 10px
      padding-right 10px
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
      margin-left -20px
  .headerInput
    position relative
    display flex
    .input-sousuo
      position absolute
      font-weight bold
      left 20px
      top 10px
      color #bbb
    .header-input
      flex 1
      font-family: 'Arial Normal', 'Arial'
      font-weight: 400
      margin:7px 10px 10px 10px
      font-size: 15px
      height 28px
      color: #666666
      text-align: center
      border none
      border-radius: 20px
</style>
