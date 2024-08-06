<template>
<div class="barbody">
  <el-row type="flex"  justify="space-around"   class="bar">
    <el-col :span="12" ><div  >
      <router-link to="/myregister"  >
      <span class="icon iconfont barchosee" >&#xe60a;</span>
      </router-link>
      <router-link to="/myregister" style="color:#666666;">
      <span class="barchoseeinfo" >我的挂号</span>
      </router-link>
    </div></el-col>
      <div class="fengexian"></div>
    <el-col :span="12" ><div >
      <router-link to="/patienmanage">
      <span class="icon iconfont barchosee">&#xe622;</span>
      </router-link>
      <router-link to="/patienmanage" style="color:#666666;">
      <span class="barchoseeinfo">就诊人管理</span>
      </router-link>
    </div></el-col>
  </el-row>
</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "RegisterAndPatientBar",
  computed: {
    // 将 Vuex 中的 getter 属性映射为组件的计算属性，也就说是组件有了一个 scenicSpotDetail 属性
    ...mapGetters(['getLogUser'])
  },
}
</script>

<style scoped>
.barbody{
  height: 84px;
  background: white;
  width: 94%;
  margin-left: 3%;
  border-radius: 24px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  text-align: center;
}
.barchosee{
  font-size: 35.04px;
  color: #D40000;
}
.barchoseeinfo{
 font-size: 16px;
  position: relative;
  top: 0px;
}
.bar{
padding-top: 22px;
}
.fengexian{
  border-left: #EBEBEB solid 2px;
  height: 54px;
}

</style>
