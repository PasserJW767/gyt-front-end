<template>
  <div class="first">
    <intelligent-treat-header></intelligent-treat-header>
    <intelligent-treat-progress-bar v-bind:active="active" :stepOfState1="stepOfState1" :stepOfState2="stepOfState2" :stepOfState3="stepOfState3"></intelligent-treat-progress-bar>
    <div >{{message}}</div>

    <div class="first_icon">
      <span class="iconfont icon-shiliangzhinengduixiang1 first_icon_xiangqing"></span>
      <span class="first_icon_text">请输入基本信息</span>
    </div>
    <hr style="background-color:#d3d7d4; height: 1px;border: none;">
    <div  class="first_gender">
      <span class="first_gender_text">性别</span>
      <div class="first_gender_person"  >
        <el-radio  class="first_gender_man"  v-model="gender"  label="男" value="男"border>男</el-radio>
        <el-radio  class="first_gender_man" v-model="gender" label="女" value="女" border>女</el-radio>
      </div>
    </div>
    <hr style="background-color:#d3d7d4; height: 1px;border: none;">

    <div class="first_birth">
      <span class="first_birth_text">出生日期</span>
      <el-date-picker class="first_birth_date" v-model="birth" type="date" placeholder="请选择日期  >" suffix-icon="el-icon-arrow-right"  ></el-date-picker>
    </div>
    <hr style="background-color:#d3d7d4; height: 1px;border: none;">
    <div class="first_next">
      <el-button class="bar-btn"  @click="next">下一步</el-button>
    </div>
  </div>
</template>

<script>
  import IntelligentTreatHeader from "./components/IntelligentTreatHeader";
  import IntelligentTreatProgressBar from "./components/IntelligentTreatProgressBar";
  import {mapMutations} from "vuex"
  export default {
    name: "FirstStepIntelligentTreat",
    data() {
      return {
        active:0,/*第几步*/
        stepOfState1:"进行中",
        stepOfState2:"待进行",
        stepOfState3:"待进行",
        gender:"",
        birth:"",
        message:"",
      }
    },
    methods: {
      ...mapMutations(["setBirthday","setGender"]),
      next() {
        if ((this.birth == null || this.birth.length <=0) || (this.gender == null || this.gender.length <=0)) {
          this.$message({
            message: '所填信息不能为空',
            type: 'warning'
          })
        }else {

          this.$store.commit('setBirthday',this.birth)//提交后台
          this.$store.commit('setGender',this.gender)//提交后台
          this.$router.replace('/treatToSecond')
        }
      },
    },
      components: {
        IntelligentTreatHeader,
        IntelligentTreatProgressBar,
      },
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl";
.first
  overflow-x hidden
  font-family:'微软雅黑'
  .first_icon
    margin-top 20px
    grayBorder()
    .iconfont
      iconfontStyle()
    .first_icon_text
      color #aaa;
  .first_gender
    width:100%
    grayBorder();
    .first_gender_text
      float:left
      width:20%
      position: relative;
    .first_gender_person
      width:90%;
      text-align:right
    .first_gender_person>>>.el-radio.is-bordered.is-checked /*覆盖选中的背景颜色*/
      border-color:rgba(119,86,55,1)
      background-color:rgba(119,86,55,1);
    .first_gender_person>>>.el-radio__input.is-checked+.el-radio__label/*覆盖选中性别的字体颜色*/
      color: #fff;
    .first_gender_person>>>.el-radio__inner/*去掉单选框内部的圆*/
      display:none
    .first_gender_person>>>.el-radio/*去掉边距*/
      margin-right:0px
  .first_birth
    width:100%;
    grayBorder();
    .first_birth_text
      width: 20%;
    .first_birth_date
      position: relative;
      width: 80%;
    .first_birth_date>>>.el-icon-date:before/*去掉前面的日期图标*/
      content: "";
    .first_birth_date>>>.el-input__inner/*日期边框去掉*/
      padding:0px;
      text-align:right;
      border: 0px;
  .first_next
    .bar-btn
      margin-left 40%;
      margin-top 50px
      barOfNextBtn()

</style>
