<template>
  <div class="end">
    <img class="imgsize" :src="identificationImage" >
    <p>
      <span style="color:#999999;">由于测评题目比较多，按照正常语速完成测评需要至少</span>
      <span style="color:#FF0000;">5</span><span style="color:#999999;">分钟时间，请您合理安排体质辨析测评时间；</span>
    </p>
  </div>
</template>

<script>
    export default {
        name: "BodyEnd",
      data() {
        return {
          identificationImage: require("../../../assets/warn.png")
        }
      },
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  .end
    display flex
    width: 250px
    background: white       /* #00bcd4 */
    margin 0 auto
  .imgsize
    width: 30px
    height 30px
    margin-top 10px

</style>

