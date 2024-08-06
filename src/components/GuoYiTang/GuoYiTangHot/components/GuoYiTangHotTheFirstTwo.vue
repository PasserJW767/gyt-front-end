<template>
<div class="GuoYiTangHotTheFirstTwo">
  <div class="title">
    <div class="title-font">
      热门国医堂
    </div>
  </div>
  <!-- 按评分/预约量排之后展示前2个 -->
  <div class="two-list">
    <router-link tag="div" class="two-hos" v-for="item in list" :key="item.itemcode" :to="{name:'GuoYiTangHosDetailIndex',params: {itemcode:item.itemcode,num:1}}">
      <div class="hos-img">
        <img class="img" :src="item.natmehaFileDTO.filePath">
      </div>
      <div class="hos-name">{{ item.hospitalName}}</div>
      <div class="hos-star">
        <el-rate
          v-model="item.hospitalSource"
          disabled
          text-color="#ff9900">
        </el-rate>
      </div>
    </router-link>
  </div>
  <!--  -->
</div>
</template>

<script>
export default {
  name: "GuoYiTangHotTheFirstTwo",
  data() {
    return {
      starvalue: 4.1,
    }
  },
  props:{
    list:Array
  },
}
</script>

<style lang="stylus" scoped>
.GuoYiTangHotTheFirstTwo
  height 230px
  .title
    background  #FFFFFF
    padding-top 10px
    padding-bottom 10px
    .title-font
      font-family '微软雅黑'
      font-weight 550
      font-size 16px
      color rgb(128,110,125)
      padding-left 20px
  .two-list
    display flex
    height: 180px
    background rgb(245,245,245)/*灰色*/
    .two-hos
      background rgb(248,242,229)
      width 190px
      margin-left 10px
      .hos-img
        margin-top 10px
        margin-left 10px
        height 120px
        width 170px
        .img
          margin-top 5%
          margin-left 5%
          width  90%
          height 90%
      .hos-name
        text-align center
        font-weight 200px
        font-family '微软雅黑'
        font-size 14px
      .hos-star
        margin-left 30px
</style>
