<template>
  <div class="three">
    <intelligent-treat-header></intelligent-treat-header>
    <intelligent-treat-progress-bar v-bind:active="active" :stepOfState1="stepOfState1" :stepOfState2="stepOfState2" :stepOfState3="stepOfState3"></intelligent-treat-progress-bar>
    <div >{{message}}</div>
    <div class="three_icon">
      <span class="iconfont icon-shiliangzhinengduixiang1 three_icon_xiangqing"></span>
      <span class="three_icon_text" >请选择不适症状{{symptom}}</span>
    </div>
    <hr style="background-color:#d3d7d4; height: 1px;border: none;">

    <div class="three_selectors">
      <input type="checkbox" id="bisai" value="鼻塞" v-model="symptom"class="three_selector">
      <label for="bisai">鼻塞</label>
      <hr style="background-color:#d3d7d4; height: 1px;border: none;">

      <input type="checkbox" id="touteng" value="头疼" v-model="symptom" class="three_selector">
      <label for="touteng">头疼</label>
      <hr style="background-color:#d3d7d4; height: 1px;border: none;">

      <input type="checkbox" id="tanhuang" value="痰黄" v-model="symptom"class="three_selector">
      <label for="tanhuang">痰黄</label>

      <hr style="background-color:#d3d7d4; height: 1px;border: none;">
      <input type="checkbox" id="qiduan" value="气短" v-model="symptom"class="three_selector">
      <label for="qiduan">气短</label>

      <hr style="background-color:#d3d7d4; height: 1px;border: none;">
      <input type="checkbox" id="kesou" value="咳嗽" v-model="symptom"class="three_selector">
      <label for="kesou">咳嗽</label>
      <hr style="background-color:#d3d7d4; height: 1px;border: none;">

      <div class="three_icon2">
        <span class="iconfont icon-shiliangzhinengduixiang1 three_icon_xiangqing"></span>
        <span class="three_icon_text2" >辅助症状描述:</span>
        <input type="text" id="describe"  v-model="describe" class="three_icon_describe">
      </div>

      <hr style="background-color:#d3d7d4; height: 1px;border: none;">
    </div>

    <div class="three_next">
      <el-button class="bar-btn"  @click="pre">上一步</el-button>
      <el-button class="bar-btn"  @click="next">提交</el-button>
    </div>

  </div>
</template>


<script>
  import IntelligentTreatHeader from "./components/IntelligentTreatHeader";
  import IntelligentTreatProgressBar from "./components/IntelligentTreatProgressBar";
  import {mapMutations,mapActions} from "vuex"

  export default {
    name: "ThreeStepIntelligentTreat",
    data() {
      return {
        active:2,
        stepOfState1:"已完成",
        stepOfState2:"已完成",
        stepOfState3:"进行中",
        symptom: [],/*不适症状*/
        describe:"",/*辅助症状描述*/
        message:"",
      }
    },
    methods: {
      ...mapMutations(["setDescribe","setSymptom"]),
      ...mapActions(["insertGuide"]),

      pre(){/*上一步*/
        this.$router.push("/treatToSecond")
      },
      next() {/*提交*/
        if ((this.symptom == null || this.symptom.length <=0)) {
          this.$message({
            message: '所填信息不能为空',
            type: 'warning'
          })
        }else {
          this.$store.commit('setDescribe',this.describe)//提交后台
          this.$store.commit('setSymptom',this.symptom)//提交后台
          console.log("111");
          this.insertGuide();
          console.log("222");
          this.$router.replace('/treatToFinish');
          console.log("333");
        }
      }
    },
    components:{
      IntelligentTreatHeader,
      IntelligentTreatProgressBar,
    }
  }
</script>
<style lang="stylus" scoped>
@import "~styles/mixins.styl";
.three
  overflow hidden
  font-family:'微软雅黑'
  .three_icon
    margin-top 20px
    grayBorder()
  .iconfont
    iconfontStyle()
  .three_icon_text
    color #aaa;
  .three_selectors
    margin-left:10px
    .three_selector:checked
      background:rgba(119,86,55,1)
    .three_selector
      width:25px;
      height:25px;
      background-color:#ffffff;
      border:solid 1px #dddddd;
      -webkit-border-radius:50%;
      border-radius:50%;
      font-size:0.8rem;
      margin:0;
      padding:0;
      position:relative;
      display:inline-block;
      vertical-align:top;
      cursor:default;
      -webkit-appearance:none;
      -webkit-user-select:none;
      user-select:none;
      -webkit-transition:background-color ease 0.1s;
      transition:background-color ease 0.1s;
    .three_selector:checked::after
      content:'';
      top:5px;
      left:5px;
      position:absolute;
      background:transparent;
      border:#fff solid 2px;
      border-top:none;
      border-right:none;
      height:6px;
      width:10px;
      -moz-transform:rotate(-45deg);
      -ms-transform:rotate(-45deg);
      -webkit-transform:rotate(-45deg);
      transform:rotate(-45deg);
  .three_icon2
    width:100%
    margin-top 0px
    grayBorder()
    .three_icon_text2
      width:40%
      color: #aaa
    .three_icon_describe
      width:60%
      height:auto;
      color:#000
  .three_next
    .bar-btn
      margin-left 20%;
      barOfNextBtn()
      margin-top 30px
</style>
