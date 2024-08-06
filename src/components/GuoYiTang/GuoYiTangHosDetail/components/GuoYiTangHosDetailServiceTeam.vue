<template>
<div class="GuoYiTangHosDetailServiceTeam">
  <div class="rectangle" v-for="item in hosDetailServiceTeam" :key="item.itemCode">
    <div class="doctor-left">
      <!-- 医生图片   -->
      <div class="imgDiv">
        <div class="imgBackbround" @click="magnifyImg(item.natmehaFileDTO.filePath)">
          <el-image
            style="width: 70px; height: 70px;margin-top:11%;margin-left:7%;border-radius:50px"
            :src="item.natmehaFileDTO.filePath"
            :preview-src-list="srcList">
          </el-image>
        </div>
      </div>
      <div class="doctorName">{{ item.doctorName }}</div>
      <div class="doctorMeeted">
        问诊量:
        <div class="doctorMeetedNum">{{ item.natmehaSignalSourceDTO.registerCount}}</div>
      </div>
    </div>

    <div class="doctor-right">
      <!-- 职位，评分   -->
      <div class="doctorInfo">
        <div class="doctor-position">{{ item.doctorTitle }}</div>
        <div class="starDiv">
          <el-rate
            v-model="item.doctorSorce"
            text-color="#ff9900"
            disabled
            score-template="{value}">
          </el-rate>
        </div>
      </div>
      <!-- 擅长治疗 -->
      <div class="doctor-treatment">
        擅长治疗:
        <div class="doctor-treatment-detail">{{ item.doctorTreatment}}</div>
      </div>
      <!-- 机构、医院  -->
      <div class="doctor-hos">{{item.natmehaHospitalDTO.hospitalPro}}{{item.natmehaHospitalDTO.hospitalCity}}{{item.natmehaHospitalDTO.hospitalCountry}}{{item.natmehaHospitalDTO.hospitalAdress}}</div>
    </div>
  </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
  name: "GuoYiTangHosDetailServiceTeam",
  data() {
    return {
      starValue:3,
      hosItemCode:'',
      srcList:[]
    }
  },
  created() {//生命周期钩子函数
    //console.log("bbb"+this.$route.params.hosItemCode)
    const hosItemCode=this.$route.params.hosItemCode
    this.hosItemCode=hosItemCode
    this.getHosDetailServiceTeam(hosItemCode)
  },
  methods:{
    ...mapActions(['getHosDetailServiceTeam']),
    magnifyImg(img){
      this.srcList=[]
      this.srcList.push(img);
      if(srcList.length>0){
        console.log(this.srcList)
      }
    }
  },
  computed:{
    ...mapGetters(['hosDetailServiceTeam'])
  },
}
</script>

<style lang="stylus" scoped>
.GuoYiTangHosDetailServiceTeam
  height auto
  min-height: 340px
  .rectangle
    display flex
    margin 0 6px 0 6px
    border-radius 10px
    border 2px solid RGB(242,242,242)
    box-shadow 0 5px 5px 0 RGB(183,183,183)
    height 120px
    background white
    margin-bottom 5%
    .doctor-left
      height 120px
      .imgDiv
        width 110px
        height 80px
        .imgBackbround
          margin-top -15%
          margin-left 9%
          border-radius 40px
          background white
          width 80px
          height 80px
      .doctorName
        height 20px
        font-size 16px
        font-weight bold
        font-family '微软雅黑'
        margin-left 24%
      .doctorMeeted
        display flex
        height 20px
        font-size 15px
        font-family '微软雅黑'
        margin-left 18%
        margin-top 8%
        .doctorMeetedNum
          margin-left 2%
          color rgb(289,54,54)
    .doctor-right
      margin-top 3%
      font-family '微软雅黑'
      font-size 15px
      width 100%
      color #6d6b6b
      .doctorInfo
        display flex
        .starDiv
          margin-left 15%
      .doctor-treatment
        height 30px
        margin-top 4%
        display flex
      .doctor-hos
        height 30px
        margin-top 3%
</style>
