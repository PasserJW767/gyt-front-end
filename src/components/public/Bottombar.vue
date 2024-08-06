<template>

  <div class="bottom-bar" >
    <div class="bottom-wrap">
      <div class="warp" @click="toHome">
<!--        <img  :src="homeImg" alt=""><br>-->
        <img  src="../../../static/home/home.png" alt=""><br>
        <span class="text" :class="{'selected':judgeHome}">首页</span>
      </div>
      <div class="warp" @click="toTodayHot">
<!--        <img  :src="knowledgeImg" alt=""><br>-->
        <img  src="../../../static/home/knowledge.png" alt=""><br>
        <span class="text" :class="{'selected':judgeKnowledge}">今日热点</span>
      </div>
      <div class="warp" @click="toHealth">
<!--        <img  :src="healthImg" alt=""><br>-->
        <img  src="../../../static/home/health.png" alt=""><br>
        <span class="text" :class="{'selected':judgeHealth}">健康档案</span>
      </div>
      <div class="warp" @click="toWode">
        <img :src="selfImg" alt=""><br>
<!--        <img  src="../../../static/home/self.png" alt=""><br>-->
        <span class="text" :class="{'selected':judgeSelf}">我的</span>
      </div>
    </div>
  </div>
</template>

<script >
export default{
  data:function(){
    return{
      homeImg:'',
      knowledgeImg:'',
      healthImg:'',
      selfImg:'',
      judgeHome:true,
      judgeKnowledge:false,
      judgeHealth:false,
      judgeSelf:false,
      home:'http://localhost:8081/gyt/image/home.png',
      homeSelected:'http://localhost:8081/gyt/image/homeSelected.png',
      knowledge:'http://localhost:8081/gyt/image/knowledge.png',
      knowledgeSelected:'http://localhost:8081/gyt/image/knowledgeSelected.png',
      health:'http://localhost:8081/gyt/image/health.png',
      healthSelected:'http://localhost:8081/gyt/image/healthSelected.png',
      self:'http://localhost:8081/gyt/image/self.png',
      selfSelected:'http://localhost:8081/gyt/image/selfSelected.png'
    }
  },
  props:{
    routePath:String
  },
  watch:{
    routePath(vv,ov) {
      if (vv === '/home') {
        this.judgeHome=true
        this.judgeKnowledge=false
        this.judgeHealth=false
        this.judgeSelf=false
        this.setImg()
      }
      if (vv === '/todayHot') {
        this.judgeHome=false
        this.judgeKnowledge=true
        this.judgeHealth=false
        this.judgeSelf=false
        this.setImg()
      }
      if (vv === '/HealthRecord') {
        this.judgeHome=false
        this.judgeKnowledge=false
        this.judgeHealth=true
        this.judgeSelf=false
        this.setImg()
      }
      if (vv === '/my') {
        this.judgeHome=false
        this.judgeKnowledge=false
        this.judgeHealth=false
        this.judgeSelf=true
        this.setImg()
      }

    }
  },
  methods:{
    setImg() {
      if (this.judgeHome) {
        this.homeImg=this.homeSelected
      }else {
        this.homeImg=this.home
      }
      if (this.judgeKnowledge) {
        this.knowledgeImg=this.knowledgeSelected
      }else {
        this.knowledgeImg=this.knowledge
      }
      if (this.judgeHealth) {
        this.healthImg=this.healthSelected
      }else {
        this.healthImg=this.health
      }
      if (this.judgeSelf) {
        this.selfImg=this.selfSelected
      }else {
        this.selfImg=this.self
      }
    },
    toHome(){
      if (!this.judgeHome) {
        this.judgeHome=true
        this.judgeKnowledge=false
        this.judgeHealth=false
        this.judgeSelf=false
      }
      this.setImg()
      this.$router.push({
        path: '/home'})
        .catch(err => err)
    },
    toTodayHot(){
      if (!this.judgeKnowledge) {
        this.judgeHome=false
        this.judgeKnowledge=true
        this.judgeHealth=false
        this.judgeSelf=false
      }
      this.setImg()
      this.$router.push({
        path: '/todayHot'})
        .catch(err => err)
    },
    toHealth(){
      if (!this.judgeHealth) {
        this.judgeHome=false
        this.judgeKnowledge=false
        this.judgeHealth=true
        this.judgeSelf=false
      }
      this.setImg()
      this.$router.push({
        path: '/HealthRecord'})
        .catch(err => err)
    },
    toWode(){
      if (!this.judgeSelf) {
        this.judgeHome=false
        this.judgeKnowledge=false
        this.judgeHealth=false
        this.judgeSelf=true
      }
      this.setImg()
      this.$router.push({
        path: '/my'})
        .catch(err => err)
    }
  },
  mounted() {
    this.homeImg=this.homeSelected
    this.knowledgeImg=this.knowledge
    this.healthImg=this.health
    this.selfImg=this.self
  },

}
</script>
<style scoped>
.bottom-wrap{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 -1px 1px #e6e6e6;
  background-color: #fff;
}
.text{
  text-align: center;
  font-weight: 500;
  font-size: 15px;
}
.warp{
  flex: 1;
  width: 50px;
  height: 80px;
  color: #CCCCCC;
  text-align: center;
  margin-top: 15px;
}
.warp img{
  width: 25px;
  height: 25px;
}
.selected {
  color: #D40000;
  text-align: center;
  font-weight: 500;
  font-size: 15px;
}
</style>
