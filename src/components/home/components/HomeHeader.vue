<template>
  <div class="homeHeader">
    <div class="head">
      <span @click="fanhuiSouye" v-show="displayFanhui" class="iconfont icon-fanhui"/>
      <div class="headerFont">{{ msg }}</div>
    </div>

    <div class="headerInput">
      <span class="iconfont icon-sousuo input-sousuo"/>
      <input v-model="param"  @click="clickChange" class="header-input" type="text" :placeholder="sousuo">
      <button class="btn" @click="searchHots" v-show="displayBtn">搜索</button>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "HomeHeader",
  data() {
    return {
      param:'',
      displayBtn:false,
      sousuo:'',
      displayFanhui:false
    }
  },
  props:{
    msg:String,
  },
  methods:{
    clickChange() {
      this.displayBtn=true
    },
    searchHots() {
      if (this.msg==='今日热点') {
        this.getHotList({'dataType':'','hotspotName':this.param})
      }else {
        this.$router.push({
          name: 'AppointmentIndex',
          params:{keyWord:this.param}})
      }
      this.displayBtn=false;
      this.param=''
    },
    fanhuiSouye() {
      this.$router.push({
        name: 'Home'})
    },
    ...mapActions(['getHotList'])
  },
  mounted() {
    if (this.msg==='今日热点') {
      this.sousuo='搜索今日热点'
      this.displayFanhui=true
    }
    if (this.msg==='首页') {
      this.sousuo='搜索国医堂'
      this.displayFanhui=false
    }
  }
}
</script>

<style lang="stylus" scoped>
.homeHeader{
  background: rgba(119, 86, 55, 1);
}
  .head{
    position: relative;
  }
    .iconfont{
      left: 12px;
      top: 10px;
      font-size: 16px;
      font-weight: 600;
      position: absolute;
    }
  .headerFont{
    font-family: '微软雅黑';
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    color: #FFFFFF;
    text-align center
    padding-top 10px
  }
  .headerInput{
    position relative
    display flex
  }
    .input-sousuo{
      position absolute
      left 20px
      top 8px
      font-weight bold
      color #bbb
    }
    .header-input{
      flex 1
      font-family: 'Arial Normal', 'Arial';
      font-weight: 400;
      margin:7px 10px 10px 10px
      font-size: 15px;
      height 28px
      color: #666666;
      text-align: center;
      border none
      border-radius: 20px;
    }
      .btn{
          height 28px;
        margin-top 7px;
        margin-right  5px
        background blue
        color white
        width 40px
        border-radius 6px
        font-weight: 600;
        font-style: normal;
        font-size: 14px;
      }

</style>
