<template>
<div class="today-hot">
  <div class="title" v-bind:style="{backgroundImage:'url(' + hotBg + ')',
        backgroundRepeat:'no-repeat',
        backgroundSize:'100% 100%'}">
    <span class="hotText">今日热点</span>
  </div>
  <div class="moreIcon" @click="toMore">
    <div class="content">
      <span class="moreText">更多</span>
      <span class="iconfont icon-arrow-right"></span>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: "HomeTodayHot",
  data() {
    return {
      hotBg:'http://localhost:8081/gyt/image/u225.png'
    }
  },
  methods:{
    toMore(){
      this.$router.push({
        path: '/todayHot'})
    }
  }
}
</script>

<style scoped>
.today-hot{
  position: relative;
  display: flex;
  height: 50px;
  border-bottom: 1px solid rgba(242, 242, 242, 1);
  background: #FFFFFF00;
}
.title{
  text-align: center;
  margin: auto;
  height: 35px;
  width: 241px;
}
.hotText{
  font-family: '方正小标宋简体';
  margin-left: 25px;
  letter-spacing:8px;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  color: #333333;
}
.moreIcon{
  position: absolute;
  right: 0;
  text-align: center;
}
.content{
  width: 58px;
  margin-top: 13px;
}
.moreText{
  font-family: '微软雅黑';
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  color: #999999;
  text-align: right;
  line-height: 24px;
}
.iconfont{
  font-family: '微软雅黑';
  font-weight:bold;
  font-style: normal;
  font-size: 12px;
  color: #999999;
  text-align: right;
  line-height: 24px;
}
</style>
