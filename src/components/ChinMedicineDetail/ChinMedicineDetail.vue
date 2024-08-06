<template>
<div class="chinMedicineDetail">
  <div id="nav">
    <hot-detail-header></hot-detail-header>
  </div>
  <div id="container">
    <chin-medicine-detail-text :chinMedicineDetail="chinMedicineDetail"  :itemCode="itemCOde"></chin-medicine-detail-text>
  </div>
</div>

</template>

<script>
import ChinMedicineDetailText from "./components/ChinMedicineDetailText";
import HomeHeader from "../home/components/HomeHeader";
import HotDetailHeader from "../hotDetailHeader/HotDetailHeader";
import {mapActions,mapGetters} from 'vuex'
export default {
  name: "ChinMedicineDetail",

  components:{
    ChinMedicineDetailText,
    HomeHeader,
    HotDetailHeader,
  },
  methods:{
      ...mapActions(['getChinMedicineDetail'])
  },
  computed:{
    ...mapGetters(['chinMedicineDetail']),
    itemCOde(){
      return this.$route.query.itemCode
    }
  },
  mounted() {
    const itemCode=this.$route.query.itemCode
    this.getChinMedicineDetail(itemCode)
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
