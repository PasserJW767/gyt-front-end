<template>
  <div class="home">
    <div id="nav">
      <home-header :msg="msg"></home-header>
    </div>
    <div id="container">
      <home-hot-list  :hotList="this.data"></home-hot-list>
    </div>

  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeHotList from "./components/HotList";
import {mapActions, mapGetters} from "vuex";
import moment from "moment";
export default {
  name: 'Home',
  data () {
    return {
      msg:'我的',
      data:[],
    }
  },
  components:{
    HomeHeader,
    HomeHotList,
  },
  methods:{
    ...mapActions(['getmycollect']),
    timeformat() {
      for (let i = 0; i <this.mycollectList.length ; i++) {
        this.mycollectList[i].natmehaHotspotDTO.itemcreateat=moment(this.mycollectList[i].natmehaHotspotDTO.itemcreateat).format("YYYY-MM-DD")
      }
      this.data=this.mycollectList
    }
  },
  created() { // 生命周期钩子函数
    let itemid=this.getLogUser.itemid
    let itemcode=this.getLogUser.itemcode
    this.getmycollect({itemid,itemcode})

  },
  computed:{
    ...mapGetters(['mycollectList','getLogUser'])
  },
  mounted() {
    //参数
    setTimeout(this.timeformat,'400')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav{
  width: 100%;
  height: 80px;
  top: 0;
  z-index: 100;
  position: fixed;
}
#container{
  margin-top: 80px;
}
</style>
