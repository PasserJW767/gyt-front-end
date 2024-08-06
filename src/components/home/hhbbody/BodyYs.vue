<template>
  <div class="ys">
    <div class="title">
      <h2>&nbsp;&nbsp;中医治未病&nbsp;辨质识养生</h2>
      <table style="margin-left: 15px; font-size:0.5em;color: black;border-collapse:separate; border-spacing:30px 10px;">
        <tr>
          <th>情志调摄</th>
          <th>饮食调养</th>
        </tr>
        <tr>
          <td>起居调节</td>
          <td>运动保健</td>
        </tr>
        <tr>
          <td>穴位保健</td>
        </tr>
      </table>
    </div>

     <div >
        <img class="imgsize" :src="identificationUrl" >
     </div>
  </div>
</template>

<script>

    export default {
        name: "BodyYs",
      data() {
        return {
            identificationUrl: require("../../../assets/ysmedicine.png")
        }
      },
    }
</script>

<style lang="stylus" scoped>

  @import "~styles/variables.styl"
  .ys
    display: flex
    height: 150px /* 43px */
    width: 100%
    background: antiquewhite       /* #00bcd4 */
    color: #775637
    font-size 20px
    .title
      width: 225px
      margin-top 15px
    .imgsize
      width: 150px
      height 150px
</style>
<style>
  table tr th{
    font-weight: normal;
  }
</style>
