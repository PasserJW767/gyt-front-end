<template>
  <div class="second">
    <intelligent-treat-header></intelligent-treat-header>
    <intelligent-treat-progress-bar v-bind:active="active" :stepOfState1="stepOfState1" :stepOfState2="stepOfState2" :stepOfState3="stepOfState3"></intelligent-treat-progress-bar>
    <div >{{message}}</div>

    <div class="second_icon">
      <span class="iconfont icon-shiliangzhinengduixiang1 second_icon_xiangqing"></span>
      <span class="second_icon_text" >请选择不适部位{{discomfortSite}}</span>
    </div>
    <hr style="background-color:#d3d7d4; height: 1px;border: none;">

    <div class="second_selectors">


      <input type="checkbox" id="head" value="头" v-model="discomfortSite" class="second_selector">
      <label for="head">头</label>
      <hr style="background-color:#d3d7d4; height: 1px;border: none;">

      <input type="checkbox" id="wei" value="胃" v-model="discomfortSite"class="second_selector">
      <label for="wei">胃</label>
      <hr style="background-color:#d3d7d4; height: 1px;border: none;">

      <input type="checkbox" id="shou" value="腰" v-model="discomfortSite"class="second_selector">
      <label for="shou">腰</label>
      <hr style="background-color:#d3d7d4; height: 1px;border: none;">

      <input type="checkbox" id="bizi" value="鼻子" v-model="discomfortSite"class="second_selector">
      <label for="bizi">鼻子</label>
      <hr style="background-color:#d3d7d4; height: 1px;border: none;">

      <input type="checkbox" id="tanhuang" value="喉咙" v-model="discomfortSite"class="second_selector">
      <label for="tanhuang">喉咙</label>
      <hr style="background-color:#d3d7d4; height: 1px;border: none;">


    </div>
    <div class="second_next">
      <el-button class="bar-btn"  @click="pre">上一步</el-button>
      <el-button class="bar-btn"  @click="next">下一步</el-button>
    </div>

  </div>
</template>

<script>
  import IntelligentTreatHeader from "./components/IntelligentTreatHeader";
  import IntelligentTreatProgressBar from "./components/IntelligentTreatProgressBar";
  import {mapMutations} from "vuex"

  export default {
    name: "SecondStepIntelligentTreat",
    data() {
      return {
        active:1,
        stepOfState1:"已完成",
        stepOfState2:"进行中",
        stepOfState3:"待进行",
        discomfortSite: [],/*不适部位*/
        message:""
      }
    },
    methods: {
      ...mapMutations(["setDiscomfortSite"]),
      next() {//下一步
         console.log("discomfortSite:"+this.discomfortSite)
        if (this.discomfortSite == null || this.discomfortSite.length <=0) {
          this.$message({
            message: '选项不能为空',
            type: 'warning'
          })
        }else {
          this.$store.commit('setDiscomfortSite',this.discomfortSite)//提交后台
          this.$router.replace('/treatToThree')
        }
      },
      pre() {//上一步
        this.$router.push("/treat")
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
.second
  font-family:'微软雅黑'
  .second_icon
    margin-top 20px
    grayBorder()
  .iconfont
    iconfontStyle()
  .second_icon_text
    color #aaa;
  .second_selectors
     margin-left:10px
  .second_selector:checked
    background:rgba(119,86,55,1)
  .second_selector
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
  .second_selector:checked::after
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
  .second_next
    .bar-btn
      margin-left 20%;
      margin-top 25px
      barOfNextBtn()
</style>








