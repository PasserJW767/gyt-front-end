<template>
    <div class="healthdatabody">
        <p class="healthdatatitle">健康数据</p>
      <el-row type="flex"  justify="space-around" class="healthdatachosee">
        <el-col :span="6">
          <router-link to="/HealthRecord" style="color: black">
          <div class="icon iconfont healthdataiconfont" style="color: #7BA4FC" >&#xe602;</div>
          <span>健康档案</span>
          </router-link>
        </el-col>

        <el-col :span="6">
          <router-link to="/dzbllist" style="color: black">
          <div class="icon iconfont healthdataiconfont" style="color:#FF9A5E;">&#xe611;</div>
          <span>电子病历</span>
          </router-link>
        </el-col>

        <el-col :span="6">
          <router-link to="/costlist" style="color: black">
          <div class="icon iconfont healthdataiconfont" style="color:#FE8878;">&#xe664;</div>
          <span>就诊费用</span>
          </router-link>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: "HealthData"
}
</script>

<style scoped>
.healthdatabody{
  margin-top: 12px;
  width: 100%;
}
.healthdatatitle{
  font-size: 16px;
  margin-left: 36px;
  margin-bottom: 3.6px;
}
.healthdatachosee{
  width: 94%;
  height:120px ;
  background: white;
  margin-left: 3%;
}
.healthdataiconfont{
  font-size: 40px;
  padding-left: 24px;
  margin-top: 12px;
}
.healthdataiconfont+span{
    position: relative;
  font-size: 14.4px;
      right: -15.6px;

}
</style>
