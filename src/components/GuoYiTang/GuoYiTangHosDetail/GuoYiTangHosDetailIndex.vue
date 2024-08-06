<template>
<div class="GuoYiTangHosDetailIndex">
  <guo-yi-tang-hos-detail-title/>
  <guo-yi-tang-hos-detail-hos-info :list="hosDetailIndexInfo"/>
  <guo-yi-tang-hos-pages :hosItemCode="hosDetailIndexInfo.itemcode"/>
</div>
</template>

<script>
import GuoYiTangHosDetailTitle from "./components/GuoYiTangHosDetailTitle";
import GuoYiTangHosDetailHosInfo from "./components/GuoYiTangHosDetailHosInfo";
import GuoYiTangHosPages from "./components/GuoYiTangHosPages";
import { mapGetters,mapActions} from 'vuex';
export default {
  name: "GuoYiTangHosDetailIndex",
  data() {
    return {
    }
  },
  components: {
    GuoYiTangHosDetailTitle,
    GuoYiTangHosDetailHosInfo,
    GuoYiTangHosPages,
  },
  methods:{
    ...mapActions(['getHosDetailIndexInfoByHosItemCode'])
  },
  created() {//生命周期钩子函数
    console.log(this.$route.params.itemcode)
    const hosItemCode=this.$route.params.itemcode //与 const spotId=this.$route.params.id 效果一样
    this.getHosDetailIndexInfoByHosItemCode(hosItemCode)
  },
  computed:{
    //将Vuex的getter属性映射为组件的计算属性，也就是组件有了一个scenicSpotDetail
    ...mapGetters(['hosDetailIndexInfo'])
  },
}
</script>

<style lang="stylus" scoped>
.GuoYiTangHosDetailIndex
  overflow:auto
  height: 100%
  width: 100%
  background-color rgb(245,245,245)
</style>
