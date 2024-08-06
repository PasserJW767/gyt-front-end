<template>
  <div class="header" style="z-index: 100">
    <div class="header-left">
      <div class="iconfont icon-fanhui back-icon "  @click='prev'></div>
    </div>

    <div class="header-input" >
      <span >体质辨识</span>
    </div>
    <div class="header-right"></div>

  </div>
</template>

<script>

    export default {
        name: "PgHeader",
      methods: {
        prev(){
          this.$router.go(-1)
        }
      }
    }
</script>

<style lang="stylus" scoped>

  @import "~styles/variables.styl"
  .header
    position fixed
    width 100%

    line-height: $headerHeight /* 43px */
    background: $bgColor       /* #00bcd4 */
    color: black
    .header-left
      width: 30px
      float: left
      padding-left 1px
      padding-right 1px
      .back-icon
      .back-icon
        text-align center
        font-size 10px
        font-weight bold
    .header-input

      height 22px
      line-height 22px
      color white
      margin-left  165px
      margin-top 5px
      border-radius 5px
      .input-sousuo
        color #534f4f
    .header-right
      /*width: 62px*/
      float: right
      padding-left 5px
      padding-right 4px
      text-align: center;
      color #fff
      font-size 16px
</style>
