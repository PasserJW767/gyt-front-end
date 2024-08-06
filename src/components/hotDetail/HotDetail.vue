<template>
<div class="hotDetail">
  <div id="nav">
    <hot-detail-header></hot-detail-header>
  </div>
  <div id="container">
    <hot-detail-text :hotDetail="hotDetail" :itemCode="itemCode" ></hot-detail-text>
  </div>
</div>
</template>

<script>
import HomeHeader from "../home/components/HomeHeader";
import HotDetailText from "./components/HotDetailText";
import {mapActions,mapGetters} from "vuex"
import HotDetailHeader from "../hotDetailHeader/HotDetailHeader";
export default {
  name: "HotDetail",
  methods:{
      ...mapActions(['getHotDetail'])
  },
  computed:{
    ...mapGetters(['hotDetail']),
    itemCode(){
      return this.$route.query.itemCode
    }
  },
  components:{
    HotDetailHeader,
    HomeHeader,
    HotDetailText,
  },
  mounted() {
    const itemCode=this.$route.query.itemCode
    this.getHotDetail(itemCode)
  }
}
</script>

<style scoped>
#nav{
  width: 100%;
  height: 50px;
  top: 0;
  z-index: 100;
  position: fixed;
}
#container{
  margin-top: 50px;
}

</style>
