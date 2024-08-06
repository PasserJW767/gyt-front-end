<template>
  <div>
    <ul>

      <li v-show="show" @click="toNotChMedinDetail(item.natmehaHotspotDTO)" class="item border-bottom" v-for="(item,index) in hotList" :key="index">
        <div  class="item-img-wrapper">
          <img class="item-img" :src="item.natmehaHotspotDTO.natmehaFileDTO.filePath" :alt="item.natmehaHotspotDTO.hotspotTitle">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.natmehaHotspotDTO.hotspotTitle}}</p>
          <span class="item-time">{{ item.natmehaHotspotDTO.itemcreateat}}</span>
          <div class="item-desc" v-html="item.natmehaHotspotDTO.hotspotContent">{{ item.desc}}</div>
        </div>
      </li>

<!--      <li v-show="!show"  @click="toChMedinDetail(item.id)" class="item border-bottom" v-for="(item,index) in hotList" :key="index+item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.url" :alt="item.title">
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <span class="item-time">{{ item.time }}</span>
          <div class="item-desc" v-html="'主治:'+item.function"></div>
        </div>
      </li>-->
    </ul>
    <div class="wrapper">
      <span class="line"></span>
      <span class="content">我是有底线的</span>
      <span class="line"></span>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "HotList",
  data() {
    return {
      show:true
    }
  },
  methods:{
    toNotChMedinDetail(item){
      this.$router.push({
        path: '/myhotDetail',name:'myhotdetail',query:{item:JSON.stringify(item)}})
    },
    // toChMedinDetail(id){
    //   this.$router.push({
    //     path: '/chinMedicineDetail',query:{id:id}})
    // },
  },
  props:{
    type:String,
    //父组件传回来的热点列表
    hotList:Array
  },

  watch:{
    type(newVal,oldVal){
      console.log(newVal,oldVal)
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
  margin-top: 20px;
  height: 66px
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
