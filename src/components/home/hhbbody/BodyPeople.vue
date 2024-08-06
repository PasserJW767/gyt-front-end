<template>
    <div class="peo">
      <div class="p1">
        <table style="margin: 10px;border-collapse:separate;border-spacing:3px;">
          <tr>
            <th>2000人</th>
          </tr>
          <tr>
            <th>
              已经参与体质辨别判定评估
            </th>
          </tr>
        </table>
      </div>
    </div>
</template>

<script>
    export default {
        name: "BodyPeople"
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/variables.styl"  // 导入样式
  .peo
    display: flex
    height: 90px /* 43px */
    width: 365px
    background: white       /* #00bcd4 */
    border-radius:10px
    margin 5px
    box-shadow 0 5px 5px 0 RGB(183,183,183);
    .p1
      width:250px
      font-size 1.5em
</style>
