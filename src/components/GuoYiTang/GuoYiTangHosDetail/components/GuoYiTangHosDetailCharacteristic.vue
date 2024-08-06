<template>
  <div class="GuoYiTangHosDetailCharacteristic">
    <!--每一个的样式 -->
    <div class="rectangle" v-for="item in hosDetailCharacteristic" :key="item.itemcode">
      <div class="imgDiv">
        <img class="img" :src="item.natmehaFileDTO.filePath"/>
      </div>
      <div class="characteristic-right">
        <router-link :to="{name:'GuoYiTangHosDetailCharacteristicDetail',params:{characteristic:item}}">
          <div class="characteristicName">中医针刺疗法</div>
          <div class="starDiv">
            <el-rate
              v-model="item.projectSorce"
              disabled
              score-template="{value}">
            </el-rate>
          </div>
          <!-- 浏览量&价钱-->
          <div class="characteristicDetail">
            <div class="characteristicView">
              浏览量:
              <div class="characteristicViewNum">{{ item.visitNum }}</div>
            </div>
            <div class="characteristicMoney">
              <img src="">
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
  name: "GuoYiTangHosDetailCharacteristic",
  data() {
    return {
      starValue:3,
    }
  },
  created() {//生命周期钩子函数
    //console.log("bbb"+this.$route.params.hosItemCode)
    const hosItemCode=this.$route.params.hosItemCode
    this.getHosDetailCharacteristic(hosItemCode)
  },
  methods:{
    ...mapActions(['getHosDetailCharacteristic'])
  },
  computed:{
    ...mapGetters(['hosDetailCharacteristic'])
  },
}
</script>

<style lang="stylus" scoped>
.GuoYiTangHosDetailCharacteristic
  min-height: 340px
  .rectangle
    display flex
    margin 0 6px 0 6px
    border-radius 10px
    border 2px solid RGB(242,242,242)
    box-shadow 0 5px 5px 0 RGB(183,183,183)
    height 120px
    background white
    font-family '微软雅黑'
    margin-bottom 3%
    .imgDiv
      width 30%
      .img
        margin-top 15%
        margin-left 15%
        width 85%
        height 70%
        border-radius 10px
    .characteristic-right
      width 70%
      margin-left 5%
      .characteristicName
        margin-top 15px
        margin-left 15px
        font-size 16px
        font-weight bold
        color dimgrey
      .starDiv
        margin-left 5%
        margin-top 3%
      .characteristicDetail
        margin-left 5%
        display flex
        .characteristicView
          margin-top 3%
          display flex
          font-size 16px
          color dimgrey
          width 100%
          .characteristicViewNum
            color rgb(289,54,54)
            margin-left 5%
        .characteristicMoney
          float right
          padding-right 30px
          font-size 14px
</style>
