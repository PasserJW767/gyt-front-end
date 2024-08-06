<template>
<div class="hotDetailText">
  <div class="toast" v-show="toastShow">
    {{toastText}}
  </div>
  <div class="text-header" >
    <span class="title">{{ ellipsis(this.hotDetail.hotspotTitle) }}</span>
    <span class="time">{{ dateFormat(this.hotDetail.itemcreateat)}}</span>
  </div>
  <div class="start" @click="collect">
    <img :src="startImg" alt="">
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
  name: "HotDetailText",
  data() {
    return {
      startImg:'http://localhost:8081/gyt/image/u1237.svg ',
      isCollect:false,
      toastShow: false,
      toastText: ''
    }
  },
  methods:{
    ellipsis(value) {
      if (!value) return "";

      if (value.length > 8) {
        return value.slice(0, 8) + "...";
      }
      return value;
    },
    dateFormat(timestamp) {
      const date=new Date(timestamp)
      date.setHours(date.getHours()+16)
      const Y = date.getFullYear() + '-';
      const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      const D = ((date.getDate()-1) < 10 ? '0' + (date.getDate()-1) : (date.getDate()-1)) + '  ';
      const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
      const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())+ ':';
      const s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()); // 秒
      const dateString = Y + M + D + h + m+s;
      return dateString;
    },
    collect(){
      this.isCollect=!this.isCollect
      if (this.isCollect) {
        this.collMessage({ 'hotspotCode':this.itemCode,'userCode':this.getLogUser.itemcode })
          .then(res => {
            if (res === "success") {
              this.$toast('收藏成功!')
            }else {
              this.$toast('收藏失败!')
            }
          })
          .catch(err => {
            throw err;
          });
      }else {
        this.cancelCollect({ 'hotspotCode':this.itemCode,'userCode':this.getLogUser.itemcode })
          .then(res => {
            if (res === "success") {
              this.$toast('取消收藏成功!')
            }else {
              this.$toast('取消收藏失败!')
            }
          })
          .catch(err => {
            throw err;
          });
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

    ...mapActions(['queryMessage','collMessage','cancelCollect']),
  },

  props: {
    hotDetail: Object,
    itemCode:String
  },
  computed:{
    ...mapGetters(['getLogUser'])
  },
  mounted() {
    this.queryMessage({'hotspotCode':this.itemCode,'userCode':this.getLogUser.itemcode})
      .then(res => {
        if (res === 'exist') {
          this.isCollect=true
        }else if (res==='noexist'){
          this.isCollect=false
        }
        this.displayStart()
      })
      .catch(err => {
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
  height: 82.2px;
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
.toast{
  position: fixed;
  left: auto;
  top: auto;
}
</style>
