<template>
<div class="hotDetailText">
  <div class="text-header" >
    <span class="title">{{ this.hotDetail.hotspotTitle }}</span>
    <span class="time">{{ this.hotDetail.itemcreateat }}</span>
  </div>
  <div class="start" @click="collect(hotDetail.itemCode,11)">
    <img :src="startImg" alt="">
  </div>
  <div class="text-img">
    <img :src="this.hotDetail.natmehaFileDTO.filePath" alt="">
  </div>
  <div class="text-body" v-html="this.hotDetail.hotspotContent">{{ this.hotDetail.hotspotContent }}</div>
  <div class="wrapper">
    <span class="line"></span>
    <span class="content">我是有底线的</span>
    <span class="line"></span>
  </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
  name: "MyHotDetailText",
  data() {
    return {
      startImg:'http://localhost:8081/gyt/images/u1237.svg',
      isCollect:false,
    }
  },
  methods:{
    collect(hotCode,userCode){
      this.isCollect=!this.isCollect
      if (this.isCollect) {
        this.collMessage({ 'hotCode':11,'userCode':22 })
          .then(res => {
            // TODO 执行后续的任务
            if (res.data.message === "success") {
              console.log('收藏成功')
            }
          })
          .catch(err => {
            // TODO 处理异常情况
            throw new Error(err);
          });
      }else {
        console.log('取消收藏')
      }
      this.displayStart()
    },
    displayStart(){
      if (this.isCollect) {
        this.startImg='http://localhost:8081/gyt/image/u447.png'
      }else {
        this.startImg='http://localhost:8081/gyt/image/u1237.svg'
      }
    },

    ...mapActions(['queryMessage','collMessage']),
  },

  props: {
    hotDetail: Object,
  },
  mounted() {
    this.queryMessage({ 'hotCode':11,'userCode':22 })
      .then(res => {
        // TODO 执行后续的任务
        if (res.data.message === '已收藏') {
          this.isCollect=true
        }else if (res.data.message==='未收藏'){
          this.isCollect=false
        }
        this.displayStart()
      })
      .catch(err => {
        // TODO 处理异常情况
        throw new Error(err);
      });
  }
}
</script>

<style scoped>
.title{
  font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
  font-weight: 700;
  font-style: normal;
  font-size: 18px;
  color: #333333;
  text-align: left;
}
.hotDetailText{
  position: relative;
  background-color: rgba(255, 255, 255, 1);
}
.text-header{
 padding: 25px 20px 0 20px;
  display: flex;
  flex-direction: column;
}
.time{
  font-size: 14px;
  text-align: left;
  margin-top: 10px;
  font-family: 'Arial Normal', 'Arial';
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  color: #666666;
}
.start{
  position: absolute;
  right: 25px;
  top: 30px;
}
.start img{
  width: 25px;
  height: 25px;
}
.text-img{
  text-align: center;
  padding: 0 25px;
  margin-top: 5px;
}
.text-img img{
  width: 100%;
  height: 114px;
}
.text-body{
  font-family: 'Arial Normal', 'Arial';
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  letter-spacing: normal;
  color: #333333;
  text-align: left;
  padding: 0 20px;
  margin-top: 5px;
}
.wrapper {
  text-align: center;
  margin-top: 20px;
}
.wrapper .line {
  width: 20%;
  display: inline-block;
  border: 0.4px solid #ddd;
  vertical-align: middle;
}
.wrapper .content {
  color: #ccc;
  font-size: 14px;
}
</style>
