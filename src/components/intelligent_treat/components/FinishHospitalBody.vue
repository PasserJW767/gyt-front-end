<template>
  <div class="body04">
    <div class="hospital-label">
      <span>附近的医院：</span>
    </div>
    <div class="recommendhospitals">
      <ul  v-for="hospital in hospitalList" :key="hospital.itemid">
        <li class="item border-bottom">
          <!--图片-->
          <div class="item-img-wrapper" style="margin: auto" >
      <!--  <img class="item-img" src="http://localhost/gyt/images/hospital.png">-->
            <img class="item-img" :src="hospital.natmehaFileDTO.filePath">
          </div>

          <div class="item-info">
      <!--  <p class="item-title">东里社区卫生服务中心</p>-->
            <!--医院名称-->
            <p class="item-title">{{hospital.hospitalName}}</p>
            <p class="item-desc">
              <!--评分-->
              <el-rate v-model="hospital.hospitalSource" disabled></el-rate>
            </p>
            <!--预约量-->
            <p class="item-price">
              今日预约量 {{hospital.hospitalBooking}}
              <span class="item-location"></span>
            </p>
          </div>
        </li>
      </ul>
    </div>
</div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: "FinishHospitalBody",
    components: {

    },
    data(){
      return{
        options: {timeout: 9000},
        position: {
          city:"",
          province:""
        }//位置
      }
    },
    methods:{
      ...mapActions(['getHospitalList']),

      //定位获得当前位置信息
      getMyLocation() {
        var geolocation = new qq.maps.Geolocation("2WABZ-2VCL5-ZQWIB-QVBUE-AFWRK-5DBZE","gyt");
        geolocation.getLocation(this.setPosition, this.showErr,this.options);
      },
     setPosition(position) {//精准定位
        console.log(position);
        this.$data.position = position;

      },
      showErr() {
        console.log("定位失败");
        //this.getMyLocation();//定位失败再请求定位，测试使用
      },

    },
    mounted(){
       this.getMyLocation();
       this.getHospitalList(this.position);
    },
    computed: {
      // 将 Vuex 中的 getter 属性映射为组件的计算属性，也就说是组件有了一个 scenicSpotDetail 属性
      ...mapGetters(['hospitalList'])
    },


  }
</script>

<style lang="stylus" scoped>
.body04
  display flex
  flex-direction column
  overflow-x hidden
  .step
    margin-top 7px
    margin-bottom 7px
  .recommendhospitals
    .item
      margin auto
      overflow hidden
      display flex
      height 115px
      width 350px
      .item-img
        width 70px
        height 70px
        padding 15px
      .item-info
        margin-right 50px
        text-align left
        flex 1
        padding 15px
        min-width 0
        font-size 14px
        .item-title
          line-height 27px
          font-weight bold
          font-size 16px
          font-family Arial
          color #d98d2a
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
        .item-desc
          line-height 20px
        .item-price
          line-height 22px
          margin-top 10px
          color #aaa
          font-size 14px
          .item-location
            display inline-block
            float right
            right 20px
            bottom 5px
            color #616161
            font-size 12px
  .hospital-label
    font-size large
    font-weight bold
    color #775637
    text-align left
    margin-left 5px
</style>
