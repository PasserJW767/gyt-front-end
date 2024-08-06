<template>
<div class="todayHot">
  <div id="nav">
    <home-header :msg="msg"></home-header>
  </div>
  <div id="container">
    <hot-icons></hot-icons>
    <home-hot-list :type="type" :hotList="hotList"></home-hot-list>
  </div>

</div>
</template>

<script>
import HomeHeader from "../home/components/HomeHeader";
import HotIcons from "./components/HotIcons";
import HomeHotList from "../home/components/HomeHotList";
import {mapActions, mapGetters} from "vuex";
export default {
  name: "TodayHot",
  data() {
    return {
      msg: '今日热点',
    }
  },
  components:{
    HotIcons,
    HomeHeader,
    HomeHotList,
  },
  methods:{
    ...mapActions(['getHotList']),
  },
  computed:{
    ...mapGetters(['hotList','type']),
  },
  mounted() {
    this.getHotList('0')
  }
}
</script>

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
