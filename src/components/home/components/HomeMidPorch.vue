<template>
<div class="homeMidPorch">
  <div class="tcm" @click="toTcm" v-bind:style="{backgroundImage:'url(' + tcmBg + ')',
        backgroundRepeat:'no-repeat',
        backgroundSize:'100% 100%'}">
    <div class="tcm-text">
      <span class="tcmText">中医健康管理</span><br>
      <span class="tcmText">知识宣传</span>
    </div>
  </div>
  <div class="body-identify" @click="toBodyIdentify" >
    <div class="title">
      <span class="bodyIdentifyTitle">【体质辨识】</span><br>
      <span class="bodyIdentifyText">判定量表</span>
    </div>
    <div class="img">
      <img src="http://localhost:8081/gyt/image/u230.png" alt="">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "HomeMidPorch",
  data() {
    return {
      tcmBg: 'http://localhost:8081/gyt/image/u233.png',
    }
  },
  methods:{
    toTcm(){
      this.$router.push({
        path: '/healthManage'})
    },
    toBodyIdentify(){
      this.$router.push({
        path: '/bodyIndex'})
    }
  }
}
</script>

<style scoped>
.homeMidPorch{
  display: flex;
  flex-direction: row;
  background: rgba(242, 242, 242, 1);
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(228, 228, 228, 1);
}
.tcm{
  flex: 1;
  height: 99px;
  width:180px;
  margin: 10px 13.2px 10px 0 ;
}
.tcm-text{
  text-align: center;
  margin-top: 20px;
}
.body-identify{
  position: relative;
  background: #E7F0F9;
  flex: 1;
  height: 99px;
  width:180px;
  margin: 10px 0 10px 0 ;
}
.tcmText{
  font-family: '汉仪南宫体简 Bold', '汉仪南宫体简 regular', '汉仪南宫体简';
  font-weight: 700;
  font-style: normal;
  font-size: 20px;
  color: #64482F;
}
.title{
  position: absolute;
  left: 10px;
  top: 10px;
  text-align: center;
  width: 108px;
  height: 51px;
}
.bodyIdentifyTitle{
  font-family: '微软雅黑';
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  color: #775637;
}
.bodyIdentifyText{
  font-family: '微软雅黑';
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  color: #555555;
}
.img{
  position: absolute;
  right: 0;
  bottom: 0;
  width: 92px;
  height: 79px;
}
.img img{
  width: 92px;
  height: 79px;
}
</style>
