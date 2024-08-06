<template>
  <div class="user_login">
    <div class="input" >
      <div class="head">
        <div class="hua">
          <img src="http://localhost:8081/gyt/image/image64.png" alt="">
        </div>
        <div class="loginHeader"  v-bind:style="{backgroundImage:'url(' + tcmBg + ')',
        backgroundRepeat:'no-repeat',
        backgroundSize:'100% 100%'}">
        </div>
        <div class="logo" >
          <img src="http://localhost:8080/assets/logo.png" alt="">
        </div>
      </div>

      <div class="mianban">
        <div class="login-box" >
          <div class="username">
            <el-input v-model="username"  class="input_username" placeholder="请输入用户名"></el-input>
          </div>
          <div class="password">
            <el-input v-model="password" class="input_password" placeholder="请输入密码" type="password" show-password></el-input>
          </div>
          <div class="btn">
            <el-button  @click="login" class="btnLogin">登录</el-button>
          </div>
        </div>
      </div>
    </div>
</div>

</template>

<script>
  import { mapGetters,mapActions } from 'vuex'
    export default {
        name: "UserLogin",
        data() {
          return {
            username: '',
            password:'',
            tcmBg:'http://localhost:8081/gyt/image/logHeader.png'
          }
        },
      methods: {
        ...mapActions(['getUserForLogin']),

        login() {
          if (!this.username) {
            this.$toast('请输入用户名');
            return;
          }
          if (!this.password) {
            this.$toast('请输入密码');
            return;
          }
          if(this.username&&this.password) {
            this.getUserForLogin({username: this.username, password: this.password})
              .then(res => {
                if (res!==null) {
                  this.$router.push('/home')
                }else {
                  this.$message.error('登陆失败！请检查您的用户名和密码');
                }
              })
              .catch(err => {
                throw err;
              });
          }
        }
      },
      computed: {
        ...mapGetters(['getLogUser'])
      }
    }
</script>

<style scoped>
.user_login{
  position: fixed;
  background-image: url("http://www.guoyitang.cc/template/ais56_com_sly/ais56/bg.jpg");
  background-size:cover;
  background-attachment:fixed;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
}
.hua img{
  height: 50px;
  position: absolute;
}
  .loginHeader{
    height: 50px;
  }
  .logo{
    text-align: center;
    margin-top: 30px;
    padding-bottom: 30px;
  }
  .logo img {
    width: 150px;
  }
  .head{
    background-image: url("http://www.guoyitang.cc/template/ais56_com_sly/ais56/bg.jpg");
    background-size:cover;
    background-attachment:fixed;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(228, 228, 228, 1);
  }
  .mianban{
    text-align: center;
  }
  .login-box{
    margin: auto;
    margin-top: 25%;
    width: 300px;
    height: 200px;
    border: 1px solid rgba(228, 228, 228, 1);
  }

  .username{
    text-align: center;
  }
  .input_username {
    margin-top: 40px;
    width: 200px;
    height: 50px;
  }
  .password {
    text-align: center;
  }
  .input_password{
    width: 200px;
    height: 50px;
  }
  .btnLogin {
    width: 200px;
    background-color: saddlebrown;
    font-weight: 400;
    color: #ffffff;
  }
.btn{
  text-align: center;
}
</style>
