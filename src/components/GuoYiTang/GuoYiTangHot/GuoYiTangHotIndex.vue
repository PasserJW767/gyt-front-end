<template>
<div class="GuoYiTangHotIndex">
  <guo-yi-tang-hot-title/>
  <guo-yi-tang-hot-the-first-two :list="theFirstTwoHos"/>
  <guo-yi-tang-hot-choose/>
  <guo-yi-tang-location/>
  <guo-yi-tang-hos-list/>
</div>
</template>

<script>
import GuoYiTangHotTitle from "./components/GuoYiTangHotTitle";
import GuoYiTangHotTheFirstTwo from "./components/GuoYiTangHotTheFirstTwo";
import GuoYiTangHotChoose from "./components/GuoYiTangHotChoose";
import GuoYiTangHosList from "./components/GuoYiTangHosList";
import GuoYiTangLocation from "./components/GuoYiTangLocation";
import {mapGetters,mapActions} from "vuex"

export default {
  name: "GuoYiTangHotIndex",
  components: {
    GuoYiTangHotTitle,
    GuoYiTangHotTheFirstTwo,
    GuoYiTangHotChoose,
    GuoYiTangHosList,
    GuoYiTangLocation
  },
  methods:{
    ...mapActions(['getTheFirstTwo'])
  },
  mounted() {
    this.getTheFirstTwo()
  },
  computed:{
    ...mapGetters(['theFirstTwoHos'])
  }
}
</script>

<style lang="stylus" scoped>
.GuoYiTangHotIndex
  //position fixed
  height: 100%
  width: 100%
  background-color rgb(245,245,245)
</style>
