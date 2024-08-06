<template>
  <div>
    <div class="bodyResult" v-for="item in tkType" :key="tkType.typeId">
      <div class="header">
        <div class="iconfont icon-fanhui back-icon "  @click='prev'></div>
        <div class="text1">
          体质辨识
        </div>
      </div>

      <div class="u541">
        <div class="u541-text">
          <p style="font-size:14px;">
            <span style="font-family:'Apple Color Emoji Regular', 'Apple Color Emoji';">🔊</span>
            <span style="font-family:'Microsoft YaHei Regular', 'Microsoft YaHei';"> </span>
            <span style="font-family:'Microsoft YaHei Regular', 'Microsoft YaHei';font-size:16px;">您的体质为：</span>
          </p>
        </div>
      </div>

      <div class="u542">
        <div class="u542-text">
          <p><span>是 </span></p>
        </div>
        <div class="u543">
          <p><span>  {{ item.typeName }} </span></p>
        </div>
      </div>



      <div class="u546">
        <div class="u536-text">
          <p>
            <span>
                主要表现是：{{ item.lbCjbx }}
            </span>
          </p>
        </div>
      </div>


      <div class="u547">

        <div class="u548-text">
          <p><span>指导意见:</span></p>
        </div>

        <div class="u549">
<!--          @open="handleOpen"-->
<!--          @close="handleClose"-->
          <el-row class="tac">
            <el-col :span="12">

              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                text-color="#fff"

                background-color="rgb(218 169 105)"
              >

                <el-submenu index="1" class="el-submenu1">
                  <template slot="title">

                    <span class="qzts">情志调摄</span>
                  </template>
                  <el-menu-item-group style="background-color: white">
                     <p><span style="color:black ">
                       {{ item.tlQztj }}
                     </span></p>
                  </el-menu-item-group>
                </el-submenu>
<!--index="2"-->
                <el-submenu index="2">
                  <template slot="title">

                    <span>饮食调养</span>
                  </template>
                  <el-menu-item-group style="background-color: white" >
                     <div class="u1000">
                       <p><span style="color:black ">
                         {{ item.tlTyfsYs }}
                    </span></p>
                     </div>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu  index="3">
                  <template slot="title">

                    <span>起居调摄</span>
                  </template>
                  <el-menu-item-group style="background-color: white">
                    <p><span style="color:black ">
                       {{ item.tlTyfsQj }}
                     </span></p>
                  </el-menu-item-group>
                </el-submenu>


                <el-submenu  index="4">
                  <template slot="title">

                    <span>运动保健</span>
                  </template>
                  <el-menu-item-group style="background-color: white">
                    <p><span style="color:black ">
                      {{ item.tlTyfsYd }}

                     </span></p>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu  index="5">
                  <template slot="title">

                    <span>穴位保健</span>
                  </template>
                  <el-menu-item-group style="background-color: white">
                    <p><span style="color:black ">
                       {{ item.tlTyfsXwbj }}

                     </span></p>
                  </el-menu-item-group>
                </el-submenu>

              </el-menu>
            </el-col>

          </el-row>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BodyResult",
  data() {
    return {
      fenshu: [], //批量保存数组
      qixu:0,
      yangxu:0,
      yinxu:0,
      tanshi:0,
      shire:0,
      xueyu:0,
      qiyu:0,
      tebing:0,
      pinghe:0,
      typeId:'',
      tkType:{
        typeId:'',
        typeName:'',
        lbZttz:'',
        lbXttz:'',
        lbCjbx:'',
        lbXltz:'',
        lbFbqx:'',
        lbDwjhjsynl:'',
        tlZttz:'',
        tlZdrq:'',
        tlQztj:'',
        tlTyfsYs:'',
        tlTyfsQj:'',
        tlTyfsYd:'',
        tlTyfsXwbj:'',
      },
    }
  },
  created() {
    this.fenshu=this.$route.params.fenshu;
    //console.log(this.$route.params);

     //this.fenshu = this.$store.state.fenshu
    //this.fenshu=this.$store.state.fenshu
    for (let i = 1; i <this.fenshu.length ; i++) {
      this.fenshu[i]=parseInt(this.fenshu[i]);
    }


  },
  methods:{
    js(){
      this.qixu=this.fenshu[2]+this.fenshu[3]+this.fenshu[4]+this.fenshu[14];
      this.yangxu=this.fenshu[11]+this.fenshu[12]+this.fenshu[13]+this.fenshu[29];
      this.yinxu=this.fenshu[10]+this.fenshu[21]+this.fenshu[26]+this.fenshu[31];
      this.tanshi=this.fenshu[9]+this.fenshu[16]+this.fenshu[28]+this.fenshu[32];
      this.shire=this.fenshu[23]+this.fenshu[25]+this.fenshu[27]+this.fenshu[30];
      this.xueyu=this.fenshu[19]+this.fenshu[22]+this.fenshu[24]+this.fenshu[33];
      this.qiyu=this.fenshu[5]+this.fenshu[6]+this.fenshu[7]+this.fenshu[8];
      this.tebing=this.fenshu[15]+this.fenshu[17]+this.fenshu[18]+this.fenshu[20];
      this.pinghe=Math.abs(this.fenshu[1]-6)+Math.abs(this.fenshu[2]-6)+Math.abs(this.fenshu[4]-6)+Math.abs(this.fenshu[5]-6)+Math.abs(this.fenshu[13]-6);

      if(this.qixu>=11){
        this.typeId="2";
      }
      else if(this.yangxu>=11){
        this.typeId="3";
      }
      else if(this.yinxu>=11){
        this.typeId="4";
      }
      else if(this.tanshi>=11){
        this.typeId="5";
      }
      else if(this.shire>=11){
        this.typeId="6";
      }
      else if(this.xueyu>=11){
        this.typeId="7";
      }
      else if(this.qiyu>=11){
        this.typeId="8";
      }
      else if(this.tebing>=11){
        this.typeId="9";
      }
      else if(this.pinghe>=17&&this.qixu<=8&&this.yangxu<=8&&this.yinxu<=8&&this.tanshi<=8&&this.shire<=8&&this.xueyu<=8&&this.qiyu<=8&&this.tebing<=8){
        this.typeId="1";
      }

      console.log("tizhi: "+this.typeId)
      var athis = this;
      this.$axios.get('api/question/ppresult?typeId='+this.typeId)
        .then(function (response) {
          const data=response.data
          console.log(data)
          athis.tkType= data;
          console.dir(athis.tkType)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    prev(){
      this.$router.go(-1)
    }
  },
  mounted() {
    this.js();
  }
}
</script>

<style lang="stylus" scoped>
  .header
    flex 1
    background: inherit;
    background-color: rgba(119, 86, 55, 1);
    border-width: 0px;
    position: absolute;
    left: 0px;
    width: 375px;
    height: 40px;
    display: flex;
    font-family: '微软雅黑';
    font-weight: 400;
    font-style: normal;
    line-height: 28px;
    .el-icon-arrow-left
      top 30px;
      flex 1
      left:100px
      .text1
        top :2px
        position: absolute;
  .u1556
    border-width: 0px;
    position: absolute;
    left: 20px;
    top: 40px;
    width: 84px;
    height: 19px;
    background: inherit;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    box-shadow: none;
    font-family: 'Microsoft YaHei Regular', 'Microsoft YaHei';
    font-weight: 400;
    font-style: normal;
    color: #1A76D1;
  .u541
    border-width: 0px;
    position: absolute;
    left: 20px;
    top: 60px;
    width: 176px;
    height: 35px;
    background: inherit;
    background-color: rgba(242, 242, 242, 0);
    border: none;
    border-radius: 0px;
    moz-box-shadow: none;
    webkit-box-shadow: none;
    box-shadow: none;
    color: #333333;
    text-align: left;
    .u541-text
      position: absolute;
      align-self: center;
      padding: 2px 2px 2px 2px;
      box-sizing: border-box;
      width: 100%;
  .u542
    position: absolute;
    left: 55px;
    top: 72px;
    width: 200px;
    height: 18px;
    display: flex;
    .u542-text
      position: absolute;
      left: -31px;
      top: 20px;
      width: 16px;
      height: 18px;
      font-size: 16px;
    .u543
      font-size: 14px;
      position: absolute;
      left: 53px;
      top: 20px;
      width: 50px;
      height: 18px;
      font-size: 16px;
      border-width: 0px;
      position: absolute;
      background: inherit;
      background-color: rgba(255, 255, 255, 0);
      box-shadow: none;
      font-family: 'Microsoft YaHei Regular', 'Microsoft YaHei';
      font-weight: 400;
      font-style: normal;
      color: #1A76D1;
  .u544
    position: absolute;
    left: 55px;
    top: 86px;
    width: 200px;
    height: 18px;
    display: flex;
    .u544-text
      position: absolute;
      left: -31px;
      top: 40px;
      width: 50px;
      height: 18px;
      font-size: 16px;
    .u545
      font-size: 14px;
      position: absolute;
      left: 53px;
      top: 40px;
      width: 50px;
      height: 18px;
      font-size: 16px;
      border-width: 0px;
      position: absolute;
      background: inherit;
      background-color: rgba(255, 255, 255, 0);
      box-shadow: none;
      font-family: 'Microsoft YaHei Regular', 'Microsoft YaHei';
      font-weight: 400;
      font-style: normal;
      color: #1A76D1;
  .u546
    border-width: 0px;
    position: absolute;
    left: 18px;
    top: 155px;
    width: 336px;
    height: 90px;
    display: flex;
    line-height: 30px;
    .u536-text
      border-width: 0px;
      position: absolute;
      left: 0px;
      top: 0px;
      width: 336px;
      height: 90px;
      background: inherit;
      background-color: rgba(255, 255, 255, 0);
      box-shadow: none;
      line-height: 30px;
      font-size 14px
  .u547
    border-width: 0px;
    position: absolute;
    left: 18px;
    top: 280px;
    width: 336px;
    height: 500px;
    line-height: 30px;
    .u548-text
      border-width: 0px;
      position: absolute;
      left: 0px;
      top: 0px;
      width: 90px;
      height: 21px;
      box-shadow: none;
      font-size: 18px;
    .u549
      color #f5f7fa
      top 50px
      border-width: 0px;
      width 375px
      position: absolute;
      .tac>>>.el-menu-vertical-demo
        background-color rgb(218 169 105)
      .el-menu-vertical-demo>>>.el-submenu
        width 350px
        border 1px solid back
        border-radius 20px
      .el-menu-vertical-demo>>>.img1
        border-width: 0px;
        position: absolute;
        left: 10px;
        top: 15px;
        width: 25px;
        height: 25px;
      .el-submenu1>>>.qzts
        left 10px
</style>
