<template>
  <div class="home">
    <div id="nav">
      <home-header :msg="msg"></home-header>
    </div>
    <div id="container">
      <home-swiper></home-swiper>
      <home-icons></home-icons>
      <home-mid-porch></home-mid-porch>
      <home-today-hot></home-today-hot>
      <home-hot-list :type="type" :hotList="hotList"></home-hot-list>
    </div>

  </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader";
import HomeSwiper from "./components/HomeSwiper";
import HomeIcons from "./components/HomeIcons";
import HomeMidPorch from "./components/HomeMidPorch";
import HomeTodayHot from "./components/HomeTodayHot";
import HomeHotList from "./components/HomeHotList";
import {mapActions, mapGetters} from "vuex";
export default {
  name: 'Home',
  data () {
    return {
      msg:'首页',
    }
  },
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeMidPorch,
    HomeTodayHot,
    HomeHotList,
  },
  methods:{
    ...mapActions(['getHotList'])
  },
  computed:{
    ...mapGetters(['hotList','type'])
  },
  mounted() {
    this.getHotList('')
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
