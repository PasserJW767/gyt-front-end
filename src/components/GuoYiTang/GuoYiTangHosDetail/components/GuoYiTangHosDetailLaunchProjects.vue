<template>
<div class="GuoYiTangHosDetailLaunchProjects">
  <!--每一个的样式 -->
  <div tag="div" class="rectangle" v-for="item in hosDetailLaunchProjects" :key="item.itemCode" >
    <div class="imgDiv">
      <img class="img" :src="item.natmehaFileDTO.filePath"/>
    </div>
    <div class="project-right">
      <router-link :to="{name:'GuoYiTangHosDetailLaunchProjectDetail',params: {project:item}}">
        <div class="projectName">{{ item.name}}</div>
        <div class="starDiv">
          <el-rate
            v-model="item.projectSorce"
            disabled
            score-template="{value}">
          </el-rate>
        </div>
        <!-- 浏览量&价钱-->
        <div class="projectDetail">
          <div class="projectView">
            浏览量:
            <div class="projectViewNum">{{ item.visitNum}}</div>
          </div>
          <div class="projectMoney">
            <span class="icon-qian iconfont"/>
            <div class="detailMoney">{{ item.price }}</div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
  name: "GuoYiTangHosDetailLaunchProjects",
  data() {
    return {
      starValue:3,
      hosItemCode:'',
    }
  },
  created() {//生命周期钩子函数
    /*console.log("bbb"+this.$route.params.hosItemCode)*/
    const hosItemCode=this.$route.params.hosItemCode
    this.hosItemCode=hosItemCode
    this.getHosDetailLaunchProjects(hosItemCode)
  },
  methods:{
    ...mapActions(['getHosDetailLaunchProjects'])
  },
  computed:{
    ...mapGetters(['hosDetailLaunchProjects'])
  },
}
</script>

<style lang="stylus" scoped>
.GuoYiTangHosDetailLaunchProjects
  min-height: 340PX
  .rectangle
    display flex
    margin 0 6px 0 6px
    border-radius 10px
    border 2px solid RGB(242,242,242)
    box-shadow 0 5px 5px 0 RGB(183,183,183)
    height 120px
    background white
    font-family '微软雅黑'
    margin-bottom 3%
    .imgDiv
      width 30%
      .img
        margin-top 15%
        margin-left 15%
        width 85%
        height 70%
        border-radius 10px
    .project-right
      width 70%
      margin-left 5%
      .projectName
        margin-top 15px
        margin-left 15px
        font-size 16px
        font-weight bold
        color dimgrey
      .starDiv
        margin-left 5%
        margin-top 3%
      .projectDetail
        margin-left 5%
        display flex
        .projectView
          margin-top 3%
          display flex
          font-size 16px
          color dimgrey
          width 100%
          .projectViewNum
            color rgb(289,54,54)
            margin-left 5%
        .projectMoney
          width 100%
          margin-left 35%
          margin-top 2%
          color red
          display flex
          .icon-qian
            width 50%
          .detailMoney
            width 50%
            font-size 16px
            font-weight bold
            margin-left -20%
</style>
