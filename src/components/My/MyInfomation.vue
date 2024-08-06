<template>
<div class="myinforbody">
  <div  style="height:39px   ;background: #775637;text-align: center">
    <router-link to="/my">
    <span class="icon iconfont youjiantou" style="float: left">&#xe624;</span>
    </router-link>
    <span style="height: 39px;line-height: 39px;color: white;font-size: 16px">个人信息</span>

  </div>
<!--  <form action="http://localhost:8000/user/updatauser" method="post">-->
  <el-row type="flex" class="myinfor" justify="space-around">
    <el-col :span="12" :pull="1"   class="myinforcell1"  style="margin-left: 20px">头像</el-col>
    <el-col :span="5"   class="myinforcell2">  <img  class="headportrait" :src=updateuser.portrait alt=""></el-col>
    <el-col :span="1"   class="myinforcell3">
      <div class="icon iconfont" style="height: 20px">&#xe665;
        <el-upload
          class="avatar-uploader"
          action=""
          :show-file-list="false"
          :auto-upload="false"
          :on-change="handleChange"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl"  class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div></el-col>
  </el-row>
  <el-row type="flex" class="myinfor" justify="space-around">
    <el-col :span="8" :pull="2" class="myinforcell1" style="margin-left: 20px">姓名</el-col>
    <el-col :span="8"   class="myinforcell2" > <el-input v-model="updateuser.name" placeholder="请输入内容"   name="name" style="text-align: right"></el-input></el-col>
  </el-row>
  <el-row type="flex" class="myinfor" justify="space-around">
    <el-col :span="8" class="myinforcell1"  style="margin-left: 15px">性别</el-col>
    <el-col :span="16"    class="myinforcell2">
      <el-radio-group v-model="updateuser.gender" size="mini" fill="#B78454"  style="margin-left: 50px" name="gender">
        <el-radio-button label="男" ></el-radio-button>
        <el-radio-button label="女"></el-radio-button>
      </el-radio-group>
     </el-col>
  </el-row>
  <el-row type="flex" class="myinfor" justify="space-around">
    <el-col :span="8"   class="myinforcell1" style="margin-left: 15px">出生日期</el-col>
    <el-col :span="16"   class="myinforcell2 " >
      <el-date-picker
        v-model="updateuser.birth"
        type="date"
        placeholder="选择日期"
        format="yyyy/MM/dd"
        name="birth"
        clearable="false"
       >
      </el-date-picker>
    </el-col>
  </el-row>
  <el-row type="flex" class="myinfor" justify="space-around">
    <el-col :span="8"  class="myinforcell1" style="margin-left: 15px">手机号码</el-col>
    <el-col :span="16"   class="myinforcell2">
      <el-input v-model="updateuser.mobilephone" placeholder="请输入内容" maxlength="11"  name="mobilephone"></el-input>
    </el-col>
  </el-row>
  <div class="save">
    <button type="submit" class="el-button--danger el-button--mini" @click="saveupdate" >保存</button>
  </div>
<!--  </form>-->
</div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
import axios from 'axios'
import moment from 'moment';
export default {
  name: "MyInfomation",
  data(){
    return{
      updateuser:'',
      img:null,
      params:new FormData(),
    }
  },
  methods:{
    handleChange(file, fileList) {
      this.params.append('file',file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    ...mapActions(['storeuserDetail']),
    saveupdate() {
      this.params.set('mobilephone',this.updateuser.mobilephone)
      this.params.set('gender',this.updateuser.gender)
      this.params.set('portrait',this.updateuser.portrait)
      this.params.set('birth',moment(this.updateuser.birth).format('l'))
      this.params.set('name',this.updateuser.name)
      this.params.set('itemid',this.updateuser.itemid)
      this.params.set('itemcode',this.updateuser.itemcode)
      let this_=this
/*
      axios.post(`/api/user/updatauser?mobilephone=${this.updateuser.mobilephone}&gender=${this.updateuser.gender}&portrait=${this.updateuser.portrait}&birth=${moment(this.updateuser.birth).format('l')}&name=${this.updateuser.name}&itemid=${this.updateuser.itemid}&itemcode=${this.updateuser. itemcode}&file=${this.img}`)
*/    axios.post('/api/user/updatauser',this.params)
        .then((resp)=>{
          if (resp.status == 200) {
            this.updateuser= resp.data.data
            this.$store.commit('storeLogUser',resp.data.data)
            swal({
              title: "成功",
              text: "修改成功！",
              icon: "success",
              button: "确定",
            });
          }
          else {
            swal({
              title: "失败",
              text: "修改失败！",
              icon: "error",
              button: "确定",
            });
          }
        },(error)=>{
          console.error()

        })


    }
  },
  computed: {
    // 将 Vuex 中的 getter 属性映射为组件的计算属性，也就说是组件有了一个 scenicSpotDetail 属性
    ...mapGetters(['getLogUser']),
  },
  mounted() {
  this.updateuser=this.getLogUser;

  },
  watch:{
    test: function (val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>
.myinforbody{
background: #F5F5F5;
  width: 100%;
}
.youjiantou{
  font-size: 18px;
  margin-top: 7px;
}
.myinfor{
  background: white;
  height: 52px;
  border-bottom: #D8D8D8 solid 0.6px;
}
.headportrait{
  border-radius: 24px;
  height: 48px;
  width: 48px;
  border: #D8D8D8 solid 0.6px;
}
.myinforcell1{
  font-size: 14px;
  margin-top: 17px;
}
.myinforcell2{
  margin-top: 1px;
  text-align: right;
  line-height: 50px;
  font-size: 14px;
}
.myinforcell3{
  margin-top: 15px;
}
/*  /deep/  样式穿透*/
/deep/ .el-radio-button__inner{
  margin-left: 10px;
  background: #F7F7F7;
}
/deep/ .el-radio-button .el-radio-button__inner{
  border-radius: 10px;
  width: 38px;
  height: 19px;
}

/deep/ .el-radio-button--mini .el-radio-button__inner{
  padding: 3px 13px;
}
/deep/ .el-input__inner{
  border: none;
  text-align: right;
}
/deep/.el-date-editor.el-input, .el-date-editor.el-input__inner{
  width: 100%
}
/deep/.el-input--suffix .el-input__inner{
  padding: 0px 15px 0px 0px;
}
/deep/ .el-input__icon{
  opacity: 0;
}
.save{
  text-align: center;
  margin-top: 40px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
}
.avatar {
  width: 20px;
  height: 20px;
  display: block;
}
.avatar-uploader{
  height: 20px;
  position: relative;
  top: -22px;
  right: 8px;
  opacity: 0;
}
</style>
