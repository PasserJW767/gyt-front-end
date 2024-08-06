<template>
      <div class="addpatienbody"  >
      <div  style="height:39px   ;background: #775637;text-align: center">
        <router-link to="/patienmanage" >
          <span class="icon iconfont youjiantou" style="float: left">&#xe624;</span>
        </router-link>
        <span style="height: 39px;line-height: 39px;color: white;font-size: 16px">就诊人管理</span>
      </div>
        <div class="tention"><span class="iconfont icon ">&#xe645;</span>请进行实名登记</div>
        <div class="addrow">
          <el-input placeholder="请输入身份证号码" v-model=" patieninfo.idcardNo" >
            <template slot="prepend">身份证</template>
          </el-input>
        </div>
        <div class="addrow">
          <el-input placeholder="请输入真实姓名" v-model="patieninfo.patientName" >
            <template slot="prepend">姓名</template>
          </el-input>
        </div>
        <div class="addrow">
          <div style="display: inline-block;line-height: 40px;height: 40px;font-size: 14px;color: #909399;margin-left: 20px" >性别</div>
          <el-radio-group v-model="patieninfo.gender" size="mini" fill="#B78454"   style="float: right">
            <el-radio-button label="男" ></el-radio-button>
            <el-radio-button label="女"></el-radio-button>
          </el-radio-group>
        </div>
        <div class="addrow birthrow">
          <div style="display: inline-block;line-height: 40px;height: 40px;font-size: 14px;color: #909399;margin-left: 20px" >出生日期</div>
          <el-date-picker
            v-model="patieninfo.birthdate"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            style="float: right;">
          </el-date-picker>
        </div>
        <div class="addrow">
          <div style="display: inline-block;line-height: 40px;height: 40px;font-size: 14px;color: #909399;margin-left: 20px" >住址</div>
          <el-cascader
            :options="addrees"
            clearable style="float: right;"
            separator="-"
            v-model="patieninfo.alladdrees"
          ></el-cascader>
        </div>
        <div class="addrow marriyrow">
          <div style="display: inline-block;line-height: 40px;height: 40px;font-size: 14px;color: #909399;margin-left: 20px" >婚姻情况</div>
          <el-cascader
            :options="marriy"
            v-model="patieninfo.maritalStatus"
            clearable style="float: right;"></el-cascader>
        </div>
        <div class="addrow" style="margin-bottom: 5px">
          <el-input placeholder="请输入手机号码" v-model="patieninfo.phone" >
            <template slot="prepend">手机号码</template>
          </el-input>
        </div>
        <div  class="relationrow">
          <div style="line-height: 26px;height: 26px;font-size: 14px;color: #909399;margin-left: 20px" >关系</div>
          <el-radio-group v-model="patieninfo.relationship" size="mini" fill="#B78454" class="relationchosee"  >
            <el-radio-button label="本人" ></el-radio-button>
            <el-radio-button label="爱人"></el-radio-button>
            <el-radio-button label="子女"></el-radio-button>
            <el-radio-button label="其他"></el-radio-button>
          </el-radio-group>
        </div>
        <div style="height: 50px;line-height: 50px;background: white;border-bottom:1px solid #F2F2F2 ">
          <span style="margin-left: 20px;font-size: 14px;">默认就诊人</span>
          <input type="radio" value="0"  v-model="patieninfo.defaultPatient" @click="isSendMessage" style="float: right;margin-right: 20px;margin-top: 18px">
        </div>
          <button type="submit" class="addpatien" @click="addpatien">保存</button>

      </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment';
import {mapGetters} from "vuex";
export default {
  name: "AddPatien",
  data() {
    return{
       patieninfo:{
              patientName:'',
              idcardNo:'',
              phone:'',
              gender:'',
              relationship:'',
              birthdate:'',
              defaultPatient:'1',
              maritalStatus:'',
              alladdrees:''},
      num:0,
      marriy:[
        {
          value:'已婚',
          label:'已婚'
        },
        {
          value: '未婚',
          label: '未婚'
        }
      ],
      addrees: [{
        value: '东南',
        label: '东南',
        children: [{
          value: '上海',
          label: '上海',
          children: [
            { value: '普陀', label: '普陀' },
            { value: '黄埔', label: '黄埔' },
            { value: '徐汇', label: '徐汇' }
          ]
        }, {
          value: '江苏',
          label: '江苏',
          children: [
            { value: '南京' , label: '南京' },
            { value: '苏州', label: '苏州' },
            { value: '无锡', label: '无锡' }
          ]
        }, {
          value: '浙江',
          label: '浙江',
          children: [
            { value: '杭州', label: '杭州' },
            { value: '宁波', label: '宁波' },
            { value: '嘉兴', label: '嘉兴' }
          ]
        }]
      }, {
        value: '西北',
        label: '西北',
        children: [{
          value:  '陕西',
          label: '陕西',
          children: [
            { value: '西安', label: '西安' },
            { value: '延安', label: '延安' }
          ]
        }, {
          value: '新疆维吾尔族自治区',
          label: '新疆维吾尔族自治区',
          children: [
            { value: '乌鲁木齐' , label: '乌鲁木齐' },
            { value: '克拉玛依' , label: '克拉玛依' }
          ]
        }]
      }]
    }
  },
  methods:{
    isSendMessage() {
      // let num = 0
      this.num++
/*      console.log(this.num)*/
      if(this.num % 2) {
        this.patieninfo.defaultPatient = '1'
      }else {
        this.patieninfo.defaultPatient = '0'
      }
     console.log(  this.patieninfo.defaultPatient )
    },
    addpatien() {
      let this_=this
      axios.post( `/api/user/addpatient?patientName=${this.patieninfo.patientName.trim()}&idcardNo=${this.patieninfo.idcardNo.trim()}&phone=${this.patieninfo.phone.trim()}&gender=${this.patieninfo.gender}&relationship=${this.patieninfo.relationship}&birthdate=${moment(this.patieninfo.birthdate).format('l')}&defaultPatient=${this.patieninfo.defaultPatient}&maritalStatus=${this.patieninfo.maritalStatus}&adressPro=${this.patieninfo.alladdrees[0]}&adressCountry=${this.patieninfo.alladdrees[1]}&adressCity=${this.patieninfo.alladdrees[2]}&userCode=${this.getLogUser.itemcode}&creater=${this.getLogUser.username}`)
        .then(function (response) {
          if (response.data.data == 1) {
            this_.$toast("添加成功")
          }
          else {this_.$toast('添加失败')}
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log('xxxx')
    }
  },
  computed: {
    // 将 Vuex 中的 getter 属性映射为组件的计算属性，也就说是组件有了一个 scenicSpotDetail 属性
    ...mapGetters(['getLogUser'])
  }

  }
</script>

<style scoped>
.addpatienbody{
  background: #F2F2F2;
  color: #666666;
  width: 100%;
}
.youjiantou{
  font-size: 18px;
  padding-top: 5px;
  color: black;
  font-weight: bold;
}

.tention{
  height: 40px;
  line-height: 40px;
  margin-left: 5%;
  font-weight: 400;
  font-style: normal;
  color: #999999;
  font-size: 14px;
}
.tention>span{
  color: #7BA4FC;
  font-size: 16px;
  margin-right: 1%;
}
.addrow{
  border-bottom: 1px solid #F2F2F2;
  height: 41px;
  background: white;
}
/deep/ .el-input-group__prepend{
  border: none;
  background: white;
}
/deep/.el-input-group--prepend .el-input__inner, .el-input-group__append{
  border: none;
  text-align: right;
}
/deep/ .el-radio-button__inner{
  margin-left: 10px;
  background: #F7F7F7;
}
/deep/ .el-radio-button .el-radio-button__inner{
  border-radius: 10px;
  height: 19px;
}
/deep/ .el-radio-button--mini .el-radio-button__inner{
  padding: 3px 13px;
}
/deep/ .addrow>.el-radio-group{
  height: 40px;
  line-height: 40px;
  margin-right: 10px;
}
/deep/  .el-input__inner{
  border: none;
  text-align: center;
}
/deep/ .relationrow>.el-radio-group{
      margin-left: 10px;
      height: 40px;
      line-height: 40px;
}
.relationrow{
  margin-bottom: 5px;
  height: 81px;
  background: white;
  border-bottom: 1px solid #F2F2F2;
}
/deep/ .relationchosee> .el-radio-button .el-radio-button__inner{
  margin-right: 15px;
  margin-left: 0px;
}
/deep/.el-input-group>.el-input__inner{
  width: 95%;
}
/deep/ .birthrow>.el-date-editor.el-input, .el-date-editor.el-input__inner {
  width: 190px
}
/deep/ .el-cascader{
  width: 190px;
}
.addpatien{
   color: white;
   background: #D40000;
   text-align: center;
   height: 45px;
   width: 80%;
   margin-left: 10%;
   line-height: 45px;
   margin-top: 100px;
   border-radius: 60px;
   font-size: 16px;
  border: none;
 }
</style>
