<template>
<div class="GuoYiTangHosPages">
  <div class="toptitle">
    <div class="serviceTeam" :style="getStyle(select1)" @click="toSelect(1)">
      <div class="serviceTeam-font" :style="getFontStyle(select1)">团队服务</div>
    </div>
    <div class="launchProjects" :style="getStyle(select2)" @click="toSelect(2)">
      <div class="launchProjects-font" :style="getFontStyle(select2)">开展项目</div>
    </div>
    <div class="characteristic" :style="getStyle(select3)" @click="toSelect(3)">
      <div class="characteristic-font" :style="getFontStyle(select3)">功效特色</div>
    </div>
  </div>
  <div class="dispaly">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "GuoYiTangHosPages",
  data() {
    return {
      select1:true,
      select2:false,
      select3:false,
      hosItemCode:''
    }
  },
  methods:{
    getStyle(select){
      if(select){
        return {'background-color':'rgb(289,54,54)'}
      }
    },
    getFontStyle(select){
      if(select){
        return {'color':'white'}
      }
    },
    toSelect(num){
      if(num==1){
        this.select1 = true;
        this.select2 = false;
        this.select3 = false;
        this.$router.push({name:'GuoYiTangHosDetailServiceTeam',params:{hosItemCode:this.hosItemCode}})//由于动态路由也是传递params的，所以在 this.$router.push() 方法中 path不能和params一起使用，否则params将无效。需要用name来指定页面。
      }else if(num==2){
        this.select1 = false;
        this.select2 = true;
        this.select3 = false;
        this.$router.push({name:'GuoYiTangHosDetailLaunchProjects',params:{hosItemCode:this.hosItemCode}})
      }else {
        this.select1 = false;
        this.select2 = false;
        this.select3 = true;
        this.$router.push({name:'GuoYiTangHosDetailCharacteristic',params:{hosItemCode:this.hosItemCode}})
      }
    },
  },
  created() {//生命周期钩子函数
    //console.log("aaa"+this.$route.params.itemcode)
    const hosItemCode=this.$route.params.itemcode
    this.hosItemCode=hosItemCode

    const num=this.$route.params.num
/*    console.log('num', num);*/
    this.toSelect(num)
  },
}
</script>

<style lang="stylus" scoped>
.GuoYiTangHosPages
  margin-left 0.5%
  margin-right 0.5%
  .toptitle
    display flex
    margin-bottom 20px
    .serviceTeam
      width 33%
      height 100%
      text-align center
      border rgb(289,54,54) solid 1px
      border-bottom-left-radius 10px
      border-top-left-radius 10px
      .serviceTeam-font
        font-size 15px
        color rgb(289,54,54)
        font-family '微软雅黑'
        padding-top 3px
    .launchProjects
      width 34%
      height 100%
      text-align center
      border rgb(289,54,54) solid 1px
      .launchProjects-font
        font-size 15px
        color rgb(289,54,54)
        font-family '微软雅黑'
        padding-top 3px
    .characteristic
      width 33%
      height 100%
      text-align center
      border rgb(289,54,54) solid 1px
      border-bottom-right-radius 10px
      border-top-right-radius 10px
      .characteristic-font
        font-size 15px
        color rgb(289,54,54)
        font-family '微软雅黑'
        padding-top 3px

</style>
