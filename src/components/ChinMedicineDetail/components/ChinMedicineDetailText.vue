<template>
<div class="ChinMedicineDetailText">
  <div class="header-img">
    <img v-if="this.chinMedicineDetail.natmehaFileDTO===null" src="http://localhost:8081/gyt/image/u184.png" alt="">
    <img v-else  :src="this.chinMedicineDetail.natmehaFileDTO.filePath" alt="">
  </div>
  <div class="body">
    <div class="title">
      <span class="itemName">{{ ellipsis(this.chinMedicineDetail.name) }}</span>
      <span class="function">{{ this.chinMedicineDetail.classification }}</span>
    </div>
    <div class="start" @click="collect">
      <img :src="startImg" alt="">
    </div>
    <div class="text">
      <span class="text-title">【别&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名】</span>
      <span class="body-text">{{ this.chinMedicineDetail.asName }}</span>
    </div>
    <div class="text">
      <span class="text-title">【采&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;制】</span>
      <span class="body-text">{{ this.chinMedicineDetail.harvesting }}</span>
    </div>
    <div class="text">
      <span class="text-title">【性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;味】</span>
      <span class="body-text">{{ this.chinMedicineDetail.taste }}</span>
    </div>
    <div class="text">
      <span class="text-title">【归&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;经】</span>
      <span class="body-text">{{ this.chinMedicineDetail.merTropism }}</span>
    </div>
    <div class="text">
      <span class="text-title">【功效主治】</span>
      <span class="body-text" v-html="this.chinMedicineDetail.governance">{{ this.chinMedicineDetail.governance }}</span>
    </div>
    <div class="text">
      <span class="text-title">【用量用法】</span>
      <span class="body-text">{{ this.chinMedicineDetail.usage }}</span>
    </div>
    <div class="wrapper">
      <span class="line"></span>
      <span class="content">我是有底线的</span>
      <span class="line"></span>
    </div>
  </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "ChinMedicineDetailText",
  data() {
    return {
      startImg:'http://localhost:8081/gyt/image/u1237.svg',
      isCollect:false
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
            throw new Error(err);
          });
      }else {
        this.cancelCollect({'hotspotCode':this.itemCode,'userCode':this.getLogUser.itemcode })
          .then(res => {
            if (res === "success") {
              this.$toast('取消收藏成功!')
            }else {
              this.$toast('取消收藏失败!')
            }
          })
          .catch(err => {
            throw new Error(err);
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
    chinMedicineDetail: Object,
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
.ChinMedicineDetailText{
  background-color: rgba(255, 255, 255, 1);
}
.body{
  position: relative;
  margin-top: 10px;
  padding: 0 20px;
}
  .header-img{
    padding: 20px 20px 0 20px;
  }
  .header-img img{
    border-radius: 8px;
    height: 150px;
    width: 100%;
  }
  .start{
    position: absolute;
    right: 30px;
    top: 10px;
  }
  .start img{
    width: 25px;
    height: 25px;
  }
  .title{
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .itemName{
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #D40000;
  }
  .function{
    font-family: '微软雅黑';
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
  .text{
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }
  .text-title{
    font-family: '微软雅黑';
   /* flex: 1;*/
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #D40000;
  }
  .body-text{
    font-family: '微软雅黑';
    flex: 1;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
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
