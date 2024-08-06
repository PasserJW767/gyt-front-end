<template>
    <div class="patienmanagerbody">
      <div  style="height:39px   ;background: #775637;text-align: center">
        <router-link to="/my">
        <span class="icon iconfont youjiantou" style="float: left">&#xe624;</span>
        </router-link>
        <span style="height: 39px;line-height: 39px;color: white;font-size: 16px">就诊人管理</span>
      </div>
      <el-card class="patiencard" shadow="always" v-for="(patien,index) in patienlist" :key="patien.idcardNo">
        <div class="cardrow"><span class="patienname">{{patien.patientName}}</span>
          <span style="margin-left: 3%" >{{ patien.age }}岁</span></div>
        <div class="cardrow"><span >身份证号：</span> <span >{{patien.idcardNo}}</span></div>
        <div class="cardrow"><span >住址：</span> <span >{{patien.adressPro}}{{patien.adressCity}}{{patien.adressCountry}}</span></div>
        <div style="border: #eaeaea solid 1px;position: relative;right: 1%;width: 98%"></div>
        <div class="cardrow operation">
          <el-radio v-model="patien.defaultPatient" label="1"  disabled>默认就诊人</el-radio>
          <div style="margin-left: 20%">
            <span class="icon iconfont" style="line-height: 24px">&#xe601;</span>
          <router-link :to="{name:'UpdataPatien',params:{itemid:patien.itemid,itemcode:patien.itemcode,patien:patien}}" >
            <span class="delandep">编辑</span>
          </router-link>
            <span class="icon iconfont delandep" >&#xe638;</span>
            <span class="delandep" @click="deletepatient(patien.itemcode,patien.itemid)">删除</span>
          </div>
        </div>
      </el-card>
      <router-link to="/addpatien">
      <div class="addpatien">添加就诊人</div>
      </router-link>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import axios from "axios";
export default {
  name: "PatienManager",
  data() {
    return{
      defaultman:'2'
    }
  },
  methods: {
    ...mapActions(['getmypatent']),
    deletepatient(itemcode, itemid) {
      let this_=this
      let router=this.$router
      axios.delete(`/api/user/deletepatient?itemcode=${itemcode}&itemid=${itemid}&usercode=${this.getLogUser.itemcode}`)
        .then(function (resp) {
          if (resp.data.data === 1) {
            this_.$toast("删除成功");
            router.go(0)
          }
          else {this_.$toast("删除失败");}
      }).then(function (error) {
        console.log(error)
      });
    },
  },
  created() { // 生命周期钩子函数
    const itemid=this.getLogUser.itemid;
    const itemcode=this.getLogUser.itemcode
    this.getmypatent({itemid,itemcode})
    /*console.log(this.getLogUser)*/
  },
  computed: {
    // 将 Vuex 中的 getter 属性映射为组件的计算属性，也就说是组件有了一个 scenicSpotDetail 属性
    ...mapGetters(['getLogUser','patienlist'])
  },
}
</script>

<style scoped>
.patienmanagerbody{
background: #F5F5F5;
  width: 100%;
}
.youjiantou{
  font-size: 18px;
  margin-top: 7px;
}
.patiencard{
  width: 90%;
  margin-left: 5%;
  margin-top: 15px;
  height: 160px;
  font-size: 14px;
  color: #666666;
  text-align: center;
  border-radius: 20px;
}
/deep/ .el-card.is-always-shadow{
  -webkit-box-shadow: 3px 3px 3px #B9B9B9;
}
/deep/ .el-card__body{
  padding: 20px 0px 0px 20px;
  height: 194px;
}
.cardrow{
  margin-bottom: 5px;
  text-align: left;
  display: flex;
}
.patienname{
  font-weight: bold;
}
.operation{
  margin-top: 10px;
}
/deep/ .el-radio__input.is-checked .el-radio__inner {
      border-color: #775637;
  background: #775637;
}
/deep/ .el-radio__input.is-checked+.el-radio__label {
  color: #775637;
}
.delandep{
  margin-left: 5px;
  line-height: 24px;
  color:#775637;
}
.addpatien{
  color: white;
  background: #D40000;
  text-align: center;
  height: 45px;
  width: 80%;
  margin-left: 10%;
  line-height: 45px;
  margin-top: 20px;
  border-radius: 60px;
  font-size: 16px;
}
</style>
