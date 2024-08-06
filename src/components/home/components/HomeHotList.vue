<template>
  <div>
    <ul>

      <li v-show="show" @click="toNotChMedinDetail(item.itemCode)" class="item border-bottom" v-for="(item,index) in hotList" :key="index">
          <div  class="item-img-wrapper">
            <img v-if="item.natmehaFileDTO===null" class="item-img" src="http://localhost:8081/gyt/image/u184.png" alt="">
            <img v-else class="item-img" :src="item.natmehaFileDTO.filePath" alt="">
          </div>
          <div class="item-info">
            <p class="item-title" v-html="item.hotspotTitle" >{{ item.hotspotTitle }}</p>
            <span class="item-time">{{ dateFormat(item.itemcreateat) }}</span>
            <div class="item-desc" v-html="item.hotspotContent">{{ item.hotspotContent}}</div>
          </div>
      </li>

      <li v-show="!show"  @click="toChMedinDetail(item.itemCode)" class="item border-bottom" v-for="(item,index) in hotList" :key="index+'index'">
        <div class="item-img-wrapper">
          <img v-if="item.natmehaFileDTO===null" class="item-img" src="http://localhost:8081/gyt/image/u184.png" alt="">
          <img v-else class="item-img" :src="item.natmehaFileDTO.filePath" alt="">
        </div>
        <div class="item-info">
          <p class="item-title" v-html="item.name">{{ item.name }}</p>
          <span class="item-time">{{ dateFormat(item.itemcreateat) }}</span>
          <div class="item-desc" v-html="'主治:'+item.governance"></div>
        </div>
      </li>
    </ul>
    <div class="wrapper">
      <span class="line"></span>
      <span class="content">我是有底线的</span>
      <span class="line"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHotList",
  data() {
    return {
      show:true
    }
  },
  methods:{
    ellipsis(value) {
      if (!value) return "";

      if (value.length > 20) {
        return value.slice(0, 20) + "...";
      }
      return value;
    },
    toNotChMedinDetail(itemCode){
      this.$router.push({
        path: '/hotDetail',query:{itemCode:itemCode}})
    },
    toChMedinDetail(itemCode){
      this.$router.push({
        path: '/chinMedicineDetail',query:{itemCode:itemCode}})
    },
    dateFormat(timestamp) {
      const date=new Date(timestamp)
      date.setHours(date.getHours()+16)
      const Y = date.getFullYear() + '-';
      const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      const D = ((date.getDate()-1) < 10 ? '0' + (date.getDate()-1) : (date.getDate()-1));
      const dateString = Y + M + D;
      return dateString;
    },
  },
  props:{
    type:String,
    //父组件传回来的热点列表
    hotList:Array
  },
  watch:{
    type(newVal,oldVal){
      if (newVal === '6') {
        this.show=false
      }else {
        this.show=true
      }
    }
  }
}
</script>

<style scoped>
.item{
  overflow: hidden;
  display: flex;
  height: 111px;
  background: inherit;
  background-color: rgba(255, 255, 255, 1);
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(242, 242, 242, 1);
}
.item-img-wrapper{
  padding: 0 10px;
  margin-top: 20px ;
  height: 66px;
}
.item-img{
  width: 100px;
  border-radius: 6px;
  height: 66px
}
.item-info{
  flex: 1;
  margin-top: 20px;
  min-width: 0;
  height: 66px;
  font-size: 14px;
  position: relative;
}
.item-desc{
  position: absolute;
  bottom: 0;
  left:  0;
  overflow:hidden;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2;
  font-family: '微软雅黑';
  line-height: 20px;
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  color: #7F7F7F;
}
.item-title{
  position: absolute;
  left: 0;
  top: 0;
  padding-right: 110px;
  overflow:hidden;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:1;
  font-family: '微软雅黑';
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  color: #333333;
}
/*.span-title{
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}*/
.item-time{
  position: absolute;
  right:  10px;
  top: 2px;
  font-family: '微软雅黑';
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  color: #7F7F7F;
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
