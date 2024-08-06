<template>
    <div class="sm">
      <div class="tp">
        <img width="15px" height="15px" style="margin-top: 35px"  :src="smimg" ><p style="margin-top: 35px">说明</p>
      </div>
      <div style="font-size: 5px;margin-left: 10px">
        <p>以下问题根据您一年的的体验和感觉回答</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "PgSm",
      data() {
        return {
          smimg: require("../../../assets/huism.svg")
        }
      },
    }
</script>

<style lang="stylus" scoped>

  @import "~styles/variables.styl"
  .sm
    height: 80px /* 43px */
    width: 100%
    background: white       /* #00bcd4 */
    color: #555555
    font-size 20px
    .tp
      display flex
      margin-left 10px
      font-size 0.5em
      color:#999999;
    .imgsize
      width: 15px
      height 15px
      margin-top 10px
      margin-left  10px
</style>

