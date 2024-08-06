<template>
<div class="GuoYiTangHosDetailHosInfo" >
  <div class="hosInfoDiv" v-for="item in list" :key="item.itemcode">
    <div class="hosName">{{ item.hospitalName }}</div>
    <div class="hosInfo">
      <div class="imgDiv">
        <img class="img" :src="item.natmehaFileDTO.filePath"/>
      </div>
      <div class="textDiv">
        <div class="reservation">
          预约量 {{ item.hospitalBooking }}
        </div>
        <div class="comment">
          评价
          <div class="starDiv">
            <el-rate
              v-model="item.hospitalSource"
              disabled
              text-color="#ff9900"
              score-template="{value}">
            </el-rate>
          </div>
          <router-link :to="{name:'GuoYiTangHosDetailInfo',params: {hospital:item}}">
            <div class="intro" >
              医院简介
              <span class="iconfont icon-arrow-right"></span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="hosAddress" v-for="item in list" :key="item.itemcode">
    <div class="addressDiv">
      <span class="icon-dizhi1 iconfont"></span>
      <div class="fontAdd">{{item.hospitalPro}}{{item.hospitalCity}}{{item.hospitalCountry}}{{item.hospitalAdress}}</div>
    </div>
  </div>
  <div class="hosPhone" v-for="item in list" :key="item.itemcode">
    <span class="icon-dianhua iconfont"></span>
    <div class="phoneNum">{{ item.hospitalPhone}}</div>
  </div>
  <!--预约挂号  -->
  <router-link tag="div" v-for="item in list" :key="item.itemcode" :to="{name: 'AppointmentDetail', params:{hospitalItemCode: item.itemcode}}" class="order" >
    <span class="icon-hongshizi iconfont"></span>
    <div class="text">预约挂号</div>
  </router-link>
</div>
</template>

<script>
export default {
  name: "GuoYiTangHosDetailHosInfo",
  data() {
    return {
      starvalue: 4
    }
  },
  props:{
    list:Array
  },
}
</script>

<style lang="stylus" scoped>
.GuoYiTangHosDetailHosInfo
  height: 300px;
  font-family '微软雅黑'
  .hosInfoDiv
    padding-top 15px
    background white
    height 130px
    .hosName
      margin-left 15px
      font-size 16px
      font-weight bold
    .hosInfo
      display flex
      height 100px
      padding-top 10px
      .imgDiv
        width: 30%
        padding-left 5%
        .img
          width 80%
          height 80%
          border-radius 5px
      .textDiv
        width: 70%
        .reservation
          color #939292
          font-size 15px
        .comment
          display flex
          color #6d6b6b
          font-size 15px
          margin-top 40px
          .intro
            margin-left 25%
            width 90px
            .iconfont
              size 100%
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
  .order
    margin-top 10px
    height 80px
    background white
    border-radius 20px
    width 80%
    margin-left 10%
    margin-bottom 10px
    font-size 15px
    .iconfont
      font-size 250%
      margin-left 45%
      color red
    .text
      margin-left 40%
</style>
