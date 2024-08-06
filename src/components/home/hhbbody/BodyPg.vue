<template>
    <div class="pg">
      <div class="title">
        <p>
            中医体质辨识软件是判断中医体质分类的标准化工具，依据中华中医药学会《中医体质分类与判定》标准开发。
          软件是在中医体质理论指导下，根据量表设计原理，以问询录入的方式，采集居民健康信息；通过对9种体质分值的结果
          分析，来判断体质类型。
        </p>
      </div>
      <div class="start">
        <router-link to="/pgIndex">
        <p>开始评估</p>
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "BodyPg"
    }
</script>

<style lang="stylus" scoped>

  @import "~styles/variables.styl"
  .pg
    height: 255px /* 43px */
    width: 365px
    background: white       /* #00bcd4 */
    margin-left  5px
    margin-top  8px
    padding-top 15px
    padding-left 8px
    margin-bottom 15px
    .title
      font-size large
      margin-bottom 10px
    .start
      color white
      padding-top 13px
      margin: 0 auto
      text-align center
      height: 45px /* 43px */
      width: 280px
      border-radius:20px
      background red
      font-size large
</style>
