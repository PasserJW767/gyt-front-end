<template>
<div class="assessmentbody">
  <div  style="height:39px   ;background: #775637;text-align: center">
    <router-link to="/my">
    <span class="icon iconfont youjiantou" style="float: left">&#xe624;</span>
    </router-link>
    <span style="height: 39px;line-height: 39px;color: white;font-size: 16px">效果评价</span>
  </div>
  <div class="assessmentchoose1">
    <el-tabs v-model="activeName" >
      <el-tab-pane label="已评价" name="已评价" >
        <table class=table4_1>
          <tr>
            <th>日期</th><th>疾病</th><th>总体评分</th><th>操作</th>
          </tr>
          <tr v-for="(eva,index) in Evaluatedlist" :key="eva.itemcode">
            <td>{{eva.itemupdateat}}</td>
            <td>{{eva.illness}}</td>
            <td>{{eva.source}}</td>
            <td>
              <router-link :to="{name:'ImpactAssessmentDetail',params:{assessment:eva}}">
                <span class="icon iconfont " style="color: #3394FE">&#xe60f;</span><span style="color: #3394FE;padding-left: 5px">查看</span>
              </router-link>
            </td>
          </tr>
        </table>
      </el-tab-pane>


      <el-tab-pane label="未评价" name="未评价">
        <table class=table4_1>
          <tr>
            <th>日期</th><th>疾病</th><th>总体评分</th><th>操作</th>
          </tr>
          <tr v-for="(uneva,index) in unEvaluatedlist" :key="uneva.itemcode">
            <td>{{uneva.itemupdateat}}</td>
            <td>{{uneva.illness}}</td>
            <td>{{uneva.source}}</td>
            <td>
              <router-link :to="{name:'ImpactAssessmentDetail',params:{assessment:uneva}}">
                <span class="icon iconfont " style="color: #3394FE">&#xe60f;</span><span style="color: #3394FE;padding-left: 5px">查看</span>
              </router-link>
            </td>
          </tr>
        </table>
      </el-tab-pane>
    </el-tabs>
  </div>

</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import moment from "moment";
export default {
  name: "ImpactAssessment",
  data() {
    return {
      activeName:'已评价',
      Evaluatedlist:[],
      unEvaluatedlist:[],
    }
  },
  methods:{

    fliter(){
      for (let i = 0; i <this.myregisterlist.length ; i++) {
        this.myregisterlist[i].itemupdateat=moment(this.myregisterlist[i].itemupdateat).format('YYYY-MM-DD')
      if (this.myregisterlist[i].source != null&&this.myregisterlist[i].serviceSource != null &&this.myregisterlist[i].effectSource != null&&this.myregisterlist[i].environmentSource != null&&this.myregisterlist[i].environmentSource != null) {
        this.Evaluatedlist.push(this.myregisterlist[i]);
        } else {
          this.unEvaluatedlist.push(this.myregisterlist[i])
        }
      }
    },
    ...mapActions(['getmyregister']),
  },
  created() {
      const itemid=this.getLogUser.itemid;
      const itemcode=this.getLogUser.itemcode
      this.getmyregister({itemid,itemcode})
      /*   console.log(itemid,itemcode)
          console.log(this.myregisterlist)*/
      /*   console.log(this.myregisterlist)*/
    //后台加载数据进行延迟
    setTimeout(this.fliter,300)

  },
  computed: {
    // 将 Vuex 中的 getter 属性映射为组件的计算属性，也就说是组件有了一个 scenicSpotDetail 属性
    ...mapGetters(['getLogUser','myregisterlist'])
  },
  watch:{

  }
}
</script>

<style scoped>
.assessmentbody{
  background:  #F2F2F2;
  color: #666666;
  width: 100%;
}
.youjiantou{
  font-size: 18px;
  padding-top: 8px;
  color: black;
  font-weight: bold;
}
.assessmentchoose{
  height: 40px;
  text-align: center;
}
.assessmentchoosecell{
  font-size: 16px;
  height: 35px;
  line-height: 50px;
}
.xianhuaxian{
  color: #775637;
  font-size: 60px;
  position: relative;
  top: -43px;
}
/deep/ .el-table .cell{
  padding-right: 0px;
}
/deep/ .assessmentchoose1 .el-tabs__active-bar{
      width: 50%;
}
/deep/ .el-tabs__nav {
  width: 100%;
 }
/deep/ .el-tabs__item{
  width: 50%;
  padding: 0px;
  text-align: center;
}
/deep/ .el-tabs__item:hover{
  color: #333333;
}
/deep/ .el-tabs__active-bar{
  background:  #775637;
}
/deep/ .el-table td div{
  text-align: center;
}
/deep/ .el-table th, .el-table tr{
    background: #E6A365;
}
/deep/ .el-table th>.cell{
  color: #666666;
  font-size: 14px;
  font-weight: bolder;
  text-align: center;
}
table {
  width:100%;
  margin:15px 0;
  border:0;
}
.table4_1 th {
  background-color:#E6A365;
  color:#666666;
  font-size: 14px;
  font-weight: bold;
}
.table4_1,.table4_1 th,.table4_1 td {
  text-align:center;
  border-collapse:collapse;
  height: 45px;
}
.table4_1 tr:nth-child(odd){
  background-color:#F9F9F9;
}
.table4_1 tr:nth-child(even){
  background-color:#FFFFFF;
}

</style>
