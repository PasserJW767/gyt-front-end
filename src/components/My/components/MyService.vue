<template>
<div class="myservicebody">
  <p class="myservicetitle">我的服务</p>
  <div class="service">
    <div class="servicedatail">
      <router-link to="/mycollect">
      <el-row type="flex" class="servicerow"  justify="space-around">
        <el-col :span="2" >  <span class="icon iconfont serviceiconfront rowcell1">&#xe604;</span></el-col>
        <el-col :span="6" :pull="5"> <span class="rowcell2">我的收藏</span></el-col>
        <el-col :span="2"><span class="icon iconfont rowcell3" >&#xe665;</span></el-col>
      </el-row>
      </router-link>
    </div>
    <div class="fengexian"></div>
    <router-link to="/assessment">
    <div class="servicedatail">
      <el-row type="flex" class="servicerow"  justify="space-around">
        <el-col :span="2" >  <span class="icon iconfont serviceiconfront rowcell1">&#xe6c6;</span></el-col>
        <el-col :span="6" :pull="5"> <span class="rowcell2">效果评价</span></el-col>
        <el-col :span="2"><span class="icon iconfont rowcell3" >&#xe665;</span></el-col>
      </el-row>
    </div>
    </router-link>
    <div class="fengexian"></div>
    <router-link to="/bodyIndex">
    <div class="servicedatail">
      <el-row type="flex" class="servicerow"  justify="space-around">
        <el-col :span="2" >  <span class="icon iconfont serviceiconfront rowcell1">&#xe688;</span></el-col>
        <el-col :span="6" :pull="5"> <span class="rowcell2">体制辨别表</span></el-col>
        <el-col :span="2"><span class="icon iconfont rowcell3" >&#xe665;</span></el-col>
      </el-row>
    </div>
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: "MyService"
}
</script>

<style scoped>
.myservicebody{
  margin-top: 12px;
  width: 100%;
}
.myservicetitle{
  font-size: 16px;
  margin-left: 36px;
  margin-bottom: 3.6px;
}
.service{
  background: white;
  height: 150px;
  width: 94%;
  margin-left: 3%;
  border-radius: 24px;
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
}
.fengexian{
  border: 1px #F5F5F5 solid;
}
.servicedatail{
 height: 31%;
}
.servicerow{
height: 100%;

}
.rowcell1{
position: relative;
  top: 10px;
}
.rowcell2{
  position: relative;
  top: 15px;
}
.rowcell3{
  position: relative;
  top: 10px;
}
.serviceiconfront{
  font-size: 20px;
  color: #97800B;
}

</style>
