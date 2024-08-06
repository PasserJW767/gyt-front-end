<template>
  <div class="homeHeader">
    <span class="iconfont icon-fanhui" @click="fanhui"></span>
    <div class="headerFont">今日热点</div>
  </div>
</template>

<script>
export default {
  name: "HotDetailHeader",
  methods:{
    fanhui() {
      this.$router.push({
        name: 'todayHot'})
    }
  }
}
</script>

<style scoped>
.homeHeader{
  position :relative;
  height: 50px;
  background: rgba(119, 86, 55, 1);
}
.headerFont{
  font-family: '微软雅黑';
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  color: #FFFFFF;
  text-align :center;
  padding-top: 10px;
}
.iconfont{
  left: 10px;
  top: 10px;
  font-size: 18px;
  font-weight: 600;
  position: absolute;
}
</style>
