
<template>
    <div class="myheader-body">
      <div  style="height:39px   ;background: #775637;text-align: center">
        <span style="height: 39px;line-height: 39px;color: white;font-size: 16px;">我的</span>
      </div>
      <div class="fengexian"></div>
      <div class="myinformation">
        <div>
          <img  class="headportrait" :src=getLogUser.portrait alt="">
                <span class="username">{{getLogUser.name}}</span>
        <router-link to="/myinfromation" >
        <span class="icon iconfont myinfoyoujiantou">&#xe665;</span>
        </router-link>
        </div>
      </div>
    </div>

</template>

<script>
import { mapActions,mapGetters } from 'vuex'
export default {
  name: "MyHeader",
  data() {
    return{}
  },
/*  methods: {
    ...mapActions(['getgetLogUser'])
  },
  created() { // 生命周期钩子函数
    const itemid=2;
    const itemcode='3e369810-76dd-4b26-8b83-cf8162aa26f5';
    this.getgetLogUser({itemid,itemcode});
    console.log(itemid,itemcode)
  },*/
  computed: {
    // 将 Vuex 中的 getter 属性映射为组件的计算属性，也就说是组件有了一个 scenicSpotDetail 属性
    ...mapGetters(['getLogUser'])
  },
}
</script>

<style scoped>
      .myheader-body{
         background: #775637;
        height: 114px;
        text-align: center;
        width: 100%;
      }

      .fengexian{
        border-bottom: white solid 1.2px;
      }
      .myinformation {
        height: 136.8px;
        background: #775637;
      }
      .headportrait{
        border-radius: 24px;
        height: 48px;
        width: 48px;
/*        position: relative;
        top: 9.6px;
        right: 120px;*/
        border: #D8D8D8 solid 0.6px;
        float: left;
        margin-left: 40px;
        margin-top: 10px;
      }
      .myinfoyoujiantou{
        color: white;
        font-size: 21.6px;
/*        position: relative;
        right: -120px;
        top: 14.4px*/
        float: right;
        margin-top: 20px;
        margin-right: 25px;
      }
      .username{
        color: white;
        font-size:17.04px;
/*        position: relative;
        top: 14.4px;
        right: 108px*/
        float: left;
        margin-top: 25px;
        margin-left: 20px;
      }

</style>
