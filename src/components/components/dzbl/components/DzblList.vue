<template>
  <div class="dzbllistbody">
    <div  style="height:39px   ;background: #775637;text-align: center">
      <router-link to="/my">
        <span class="icon iconfont youjiantou" style="float: left">&#xe624;</span>
      </router-link>
      <span style="height: 39px;line-height: 39px;color: white;font-size: 16px">电子病历</span>
    </div>
    <p class="dzbllisttitle">
      <span class="patienname">患者姓名:</span>
      <el-select v-model="value"  @change="selectChange">
        <el-option
          v-for="item in dzblList"
          :key="item.natmehaPatientDTO.itemcode"
          :label="item.natmehaPatientDTO.patientName"
          :value="item.natmehaPatientDTO.patientName"
        >
        </el-option>
      </el-select>
    </p>
    <table class=table4_1>
      <tr>
        <th>患者名称</th><th>就诊日期</th><th>操作</th>
      </tr>
      <tr  v-for="(dzbl,index) in tabledata" :key="dzbl.itemcode">
        <td>{{ dzbl.natmehaPatientDTO.patientName}}</td>
        <td>{{ dzbl.natmehaPatientDTO.natmehaMedRecordsDTO.visitDtime}}</td>
        <td>
          <router-link :to="{name:'dzbldetail',params:{dzbldetail:dzbl}}">
            <span class="icon iconfont " style="color: #3394FE">&#xe60f;</span><span style="color: #3394FE;padding-left: 5px">查看</span>
          </router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import moment from "moment";

export default {
  name: "dzbllist",
  data() {
    return{
      value: '',
      tabledata:[]
    }
  },
  methods:{
    ...mapActions(['getmycostlist']),
    timeformat() {
      this.tabledata=this.costList
      for (let i = 0; i <this.tabledata.length ; i++) {
        this.tabledata[i].natmehaPatientDTO.natmehaMedRecordsDTO.visitDtime=moment(this.tabledata[i].natmehaPatientDTO.natmehaMedRecordsDTO.visitDtime).format("YYYY-MM-DD")
      }
    },
    selectChange(val) {
      let tempdata=[]
      this.tabledata=this.costList
      for (let i = 0; i <this.tabledata.length ; i++) {
        if (this.tabledata[i].natmehaPatientDTO.patientName==val) {
          this.tabledata[i].natmehaPatientDTO.natmehaMedRecordsDTO.visitDtime=moment(this.tabledata[i].natmehaPatientDTO.natmehaMedRecordsDTO.visitDtime).format("YYYY-MM-DD")
          tempdata.push(this.tabledata[i])
        }
      }
      this.tabledata=tempdata
    }
  },
  created() { // 生命周期钩子函数
    const itemid=this.getLogUser.itemid;
    const itemcode=this.getLogUser.itemcode
    this.getmycostlist({itemid,itemcode})

    setTimeout(this.timeformat, 500);
  },
  computed: {
    // 将 Vuex 中的 getter 属性映射为组件的计算属性，也就说是组件有了一个 scenicSpotDetail 属性
    ...mapGetters(['costList','getLogUser'])
  },
}
</script>

<style scoped>
.dzbllistbody{
  color: #8C7866;
  background: #F5F5F5;
}
.youjiantou{
  font-size: 18px;
  margin-top: 7px;
}
.dzbllisttitle{
  margin-top: 20px;
}
.patienname{
  font-size: 20px;
  font-weight: bold;
  margin-left: 2%;
  color: black;
}
/deep/  .dzbllisttitle  .el-input__inner{
  border: none;
  color: #8C7866;
  font-size: 14px;
  background: #F5F5F5;
  width: 100px;
}
/deep/ .el-select .el-input .el-select__caret{
  color: white;
}

table {
  width:96%;
  margin-left: 2%;
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
