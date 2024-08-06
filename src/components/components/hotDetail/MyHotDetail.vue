<template>
<div class="hotDetail">
  <div id="nav">
    <home-header :msg="msg"></home-header>
  </div>
  <div id="container">
    <hot-detail-text :hotDetail="this.item" ></hot-detail-text>
  </div>
</div>
</template>

<script>
import HomeHeader from "../header/components/Header";
import HotDetailText from "./components/MyHotDetailText";
import {mapActions, mapGetters} from "vuex";
export default {
  name: "MyHotDetail",
  data() {
    return {
      msg: '今日热点',
      item:{}
    }
  },
  methods:{
  /*  ...mapActions(['getHotDetail']),*/
  },
  computed:{
   /* ...mapGetters(['hotDetail']),*/
  },
  components:{
    HomeHeader,
    HotDetailText,
  },
  mounted() {
    this.item=JSON.parse(this.$route.query.item)
  },
  watch:{
    item: function (val) {
      console.log(val)
    }
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
