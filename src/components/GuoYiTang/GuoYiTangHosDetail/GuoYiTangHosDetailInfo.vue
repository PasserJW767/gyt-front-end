<template>
<div class="GuoYiTangHosDetailInfo">
  <div class="DetailTitle">
    <router-link tag="div" v-for="item in hosDetailInfo" :key="item.itemcode" :to="{name:'GuoYiTangHosDetailIndex',params: {itemcode:item.itemcode}}" style="color: white;">
      <span class="iconfont icon-fanhui back-icon"></span>
    </router-link>
    <div class="headerFont">医院详情</div>
  </div>
  <div class="info-head" v-for="item in hosDetailInfo">
    <div class="head-left">
      <div class="info-title">医院简介</div>
      <div class="hosName">{{item.hospitalName}}</div>
    </div>
    <div class="head-right" @click="joinToCollect(itemCode)">
      <span class="icon-collec_selected iconfont" v-if="starSelect==false"></span>
      <span class="icon-shoucang iconfont" v-if="starSelect==true"></span>
    </div>
  </div>
  <div class="info-picture" v-for="item in hosDetailInfo">
    <img class="img" :src="item.natmehaFileDTO.filePath"/>
  </div>
  <!-- 正文 -->
  <div class="info-content" v-for="item in hosDetailInfo" v-html="item.introduce">{{ item.introduce }}</div>
  <!-- 分界线 -->
  <div class="line"></div>
  <!-- 地址，电话 -->
  <div class="hosAddress" v-for="item in hosDetailInfo">
    <div class="addressDiv">
      <span class="icon-dizhi1 iconfont"></span>
      <div class="fontAdd">{{item.hospitalPro}}{{item.hospitalCity}}{{item.hospitalCountry}}{{item.hospitalAdress}}</div>
    </div>
  </div>
  <div class="hosPhone" v-for="item in hosDetailInfo">
    <span class="icon-dianhua iconfont"></span>
    <div class="phoneNum">{{ item.hospitalPhone}}</div>
  </div>
</div>
</template>

<script>
import GuoYiTangHosDetailTitle from "./components/GuoYiTangHosDetailTitle";
import {mapActions, mapGetters} from "vuex";
export default {
  name: "GuoYiTangHosDetailInfo",
  components: {
    GuoYiTangHosDetailTitle,
  },
  data() {
    return {
      starSelect:false,
      hosDetailInfo:{},
      hosIcon:'',
    }
  },

  methods:{
    joinToCollect(itemCode){
      //console.log("点了星")
      this.starSelect = (!this.starSelect)
    },
  },
  created() {//生命周期钩子函数
    console.log("numde",this.$route.params.num);
    /*console.log(this.$route.params)*/
    const hospital=this.$route.params//与 const spotId=this.$route.params.id 效果一样
    this.hosDetailInfo=hospital

    var str = hospital.introduce;
    var data = [];
    str.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/g, function (match, capture) {
      data.push(capture);
    });
    console.log(data)
  },
}
</script>

<style lang="stylus" scoped>
.GuoYiTangHosDetailInfo
  background white
  font-family '微软雅黑'
  .DetailTitle
    background rgba(119, 86, 55, 1)
    display flex
    flex-direction row //盒子内元素行排（默认）
    justify-content center  //盒子内元素垂直居中
    align-items center //盒子内元素垂直居中
    height 50px
    .back-icon
      font-size 16px
      padding-left 15px
      padding-top 10px
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
      margin-left -10px
  .info-head
    height 70px
    display flex
    .head-left
      width 80%
      .info-title
        font-size 16px
        font-weight bold
        margin-left 7%
        padding-top 10px
      .hosName
        padding-top 5px
        margin-left 7%
        font-size 15px
    .head-right
      width 20%
      padding-top 10px
      .iconfont
        margin-left 25%
        font-size 250%
        color #fccb41
  .info-picture
    height 120px
    .img
      width 90%
      height 90%
      margin-left 5%
      border-radius 5px
  .info-content
    height auto
    font-size 15px
    padding-left 4%
    padding-right 4%
    line-height:35px
    text-indent:2em
  .line
    background rgb(245,245,245)
    width 100%
    height 2px
  .hosAddress
    background white
    margin-top 3px
    height auto
    display block
    .addressDiv
      display flex
      .iconfont
        color red
        margin-left 4%
        height 150%
      .fontAdd
        font-size 14px
        margin-left 2%
        color #6d6b6b
  .hosPhone
    padding-top  3px
    background white
    height auto
    size 100%
    display flex
    .iconfont
      margin-left 4%
      height 150%
    .phoneNum
      font-size 14px
      color #6d6b6b
</style>
