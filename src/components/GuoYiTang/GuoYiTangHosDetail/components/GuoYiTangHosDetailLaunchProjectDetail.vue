<template>
  <div class="GuoYiTangHosDetailLaunchProjects">
    <div class="headDiv">
      <router-link v-for="item in project" :key="item.itemcode" :to="{name:'GuoYiTangHosDetailIndex',params: {itemcode:item.natmehaHospitalDTO.itemcode,num:2}}" style="color: white;">
        <span class="iconfont icon-fanhui back-icon"></span>
      </router-link>
      <div class="headerFont">项目详情</div>
    </div>

    <!-- 正文 -->
    <div class="info-head" v-for="item in project" :key="item.itemcode">
      <div class="head-left">
        <div class="info-title">{{ item.name}}</div>
        <div class="hosName">{{ item.natmehaHospitalDTO.hospitalPro }}{{ item.natmehaHospitalDTO.hospitalCity }}{{ item.natmehaHospitalDTO.hospitalCountry }}{{ item.natmehaHospitalDTO.hospitalAdress}}</div>
      </div>
    </div>
    <div class="info-picture" v-for="item in project" :key="item.itemcode">
      <img class="img" :src="item.natmehaFileDTO.filePath" />
    </div>
    <!-- 正文 -->
    <div class="info-content" v-for="item in project" :key="item.itemcode" v-html="item.content">
      {{ item.content}}
    </div>
  </div>
</template>

<script>
export default {
  name: "GuoYiTangHosDetailLaunchProjectDetail",
  data() {
    return {
      project: []
    }
  },
  created() {//生命周期钩子函数
    //console.log(this.$route.params)
    this.project=this.$route.params
  },
}
</script>

<style lang="stylus" scoped>
.GuoYiTangHosDetailLaunchProjects
  .headDiv
    background: rgba(119, 86, 55, 1);
    flex-direction row //盒子内元素行排（默认）
    justify-content center  //盒子内元素垂直居中
    align-items center //盒子内元素垂直居中
    display flex
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
</style>
