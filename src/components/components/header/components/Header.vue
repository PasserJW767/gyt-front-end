<template>
  <div class="homeHeader">
    <div class="headerFont">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props:{
    msg:String
  }
}
</script>

<style lang="stylus" scoped>
.homeHeader
  background: rgba(119, 86, 55, 1);
  .headerFont
    font-family: '微软雅黑';
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    color: #FFFFFF;
    text-align center
    padding-top 10px
</style>
