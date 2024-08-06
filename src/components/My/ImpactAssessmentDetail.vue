<template>
  <div class="assessmentdetailbody">
  <div  style="height:39px   ;background: #775637;text-align: center">
    <router-link to="/assessment">
    <span class="icon iconfont youjiantou" style="float: left">&#xe624;</span>
    </router-link>
    <span style="height: 39px;line-height: 39px;color: white;font-size: 16px;">效果评价</span>
  </div>

    <div class="detailtitle">
      <p>就诊记录</p>
      <div >
        <input type="radio" v-model="anonymous" @click="isSendMessage" value="true">
        <span >匿名评价</span>
      </div>
    </div>
    <div class="firstcard">
        <p v-model="time" style="font-size: 14px;margin-top: 10px;text-align: center">{{time}}</p>
      <p style="text-align: left;margin-left: 50px;font-weight: bold">所患疾病</p>
      <el-checkbox-group v-model="checkboxGroup">
        <el-checkbox-button v-for="illness in illnesslist" :label="illness" :key="illness">{{illness}}</el-checkbox-button>
      </el-checkbox-group>
      <el-input v-model="other" placeholder="请输入内容" style="margin-top: 20px"></el-input>
    </div>
    <el-card class="secondcard" >
      <div class="secondcardrow"> <span >服务态度</span><el-rate v-model="serviceSource" class="start" ></el-rate></div>
      <div class="secondcardrow"> <span>诊疗环境</span><el-rate v-model="environmentSource"  class="start"></el-rate></div>
      <div class="secondcardrow"> <span>诊疗效果</span><el-rate v-model="effectSource"  class="start"></el-rate></div>
      <div class="secondcardrow"> <span>总体评价</span><el-rate v-model="overallSource"  class="start"></el-rate></div>
    </el-card>
      <button type="submit" class="addpatien" @click="updatasource">确定</button>
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
import {mapGetters} from "vuex";

const illnessOptions = ['高血压', '肺结核', '感冒', '咳嗽'];
export default {
  name: "ImpactAssessmentDetail",
  data() {
    return{
      num:0,
      anonymous:this.$route.params.assessment.anonymous,
      time:moment(this.$route.params.assessment.itemcreateat).format('YYYY年MM月DD日'),
      checkboxGroup: [],
      illnesslist: illnessOptions,
      other:'',
      serviceSource:this.$route.params.assessment.serviceSource,
      effectSource:this.$route.params.assessment.effectSource,
      environmentSource:this.$route.params.assessment.environmentSource,
      overallSource:this.$route.params.assessment.overallSource,
    }
  } ,
  methods:{
    isSendMessage() {
      // let num = 0
      this.num++
      if(this.num % 2) {
        this.anonymous = 'true'
      }else {
        this.anonymous = 'false'
      }
    },
    updatasource() {
      let this_=this
      axios.post(`/api/user/updataRegResource?anonymous=${this.anonymous}&serviceSource=${this.serviceSource}&effectSource=${this.effectSource}&environmentSource=${this.environmentSource}&overallSource=${this.overallSource}&illness=${this.other}&updater=${this.getLogUser.name}&source=${this.serviceSource+this.effectSource+this.environmentSource+this.overallSource}&itemcode=${this.$route.params.assessment.itemcode}&itemid=${this.$route.params.assessment.itemid}`,)
        .then((resp)=>{
          if (resp.data.data == 1) {
            this_.$toast('修改成功')
          }else {
            this_.$toast('修改失败')
          }
        },(error)=>{
          console.error()
        })
    },
    //数据库illness字符串转为数组
    illnessToarray() {
      this.checkboxGroup=this.$route.params.assessment.illness.split(',')
      //console.log(this.checkboxGroup)
    }
  },
  computed: {
    // 将 Vuex 中的 getter 属性映射为组件的计算属性，也就说是组件有了一个 scenicSpotDetail 属性
    ...mapGetters(['getLogUser']),
  },
  created() {
    this.illnessToarray()
  },
  watch:{
    checkboxGroup: function (val) {
      //映射到other中
        this.other=this.checkboxGroup.toString()
    }
  }
}
</script>

<style scoped>
.assessmentdetailbody{
  background: #F5F5F5;
  color: #999999;
  width: 100%;
}
.youjiantou{
  font-size: 18px;
  padding-top: 8px;
  color: black;
  font-weight: bold;
}
.detailtitle{
  margin-top: 30px;
  text-align: center;
}
.detailtitle>p{
  font-size: 16px;
  font-weight: bold;
  color: #666666;
}
.detailtitle>div{
  float: right;
  position: relative;
  right: 50px;
  font-size: 14px;
}
.firstcard{
  position: relative;
  width: 90%;
  margin-left: 5%;
  height: 200px;
  border: 2px solid #E4E4E4;
  margin-top:50px;
  background: white;

}
.firstcard::before,.firstcard::after{
  display: inline-block;
  content:'';
  position: absolute;
  border: 30px solid transparent;
}
.firstcard::before{
  left: 46%;
  top: -62px;
  border-bottom-color:#E4E4E4;
}
.firstcard::after{
  left: 46%;
  top: -59px;
  border-bottom-color:#fff;
}
/deep/ .el-checkbox-button__inner{
  margin-left: 20px;
  margin-top: 10px;
  width: 90px;
  height: 23px;
  padding: 0px;
  line-height: 23px;
  border: 1px solid #DCDFE6;
}
/deep/.el-checkbox-button .el-checkbox-button__inner{
border-radius: 20px;
}
/deep/ .el-checkbox-button.is-checked .el-checkbox-button__inner{
  border-color: rgba(254, 148, 0, 1);
  background-color: rgba(254, 148, 0, 0.0980392156862745);
  color: rgba(254, 148, 0, 1);
}
/deep/ .el-checkbox-button__inner:hover{
  color:#999999 ;
}
/deep/.el-checkbox-button.is-focus .el-checkbox-button__inner{
  border-color:  rgba(254, 148, 0, 1);
}
.secondcard{
  margin-top: 20px;
  width: 90%;
  margin-left: 5%;
  border-radius: 20px;
}
.start{
  display: inline-block;
  margin-left: 10px;
}
/deep/ .el-rate__icon{
font-size: 24px;
}
.secondcardrow{
  height: 24px;
}
.addpatien{
  color: white;
  background: #D40000;
  text-align: center;
  height: 45px;
  width: 80%;
  margin-left: 10%;
  line-height: 45px;
  margin-top: 40px;
  border-radius: 60px;
  font-size: 16px;
  border: none;
}
/deep/ .el-input__inner{
  border:none;
}
</style>
