<template>
  <div class="AppointmentLocation">
    <div class="containBox" @click="getMyLocation">
      <span class="locationTitle">您的位置：</span><br>
      <span class="iconfont icon-dingwei locationIcon"></span>
      <span class="locationFont">{{ city }}</span>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
  name: "AppointmentLocation",
  data() {
    return {
      city: '正在加载中...'
    }
  },
  methods: {
    ...mapActions(['getAppointmentList','getHospitalListCount1']),
    ...mapMutations(['mLocateLongitude1','mLocateLatitude1','mChoiceFlag1','mPageSize1','mGytHospitalList1','mAppointmentUserCode1','mKeyWord1','mAllSize1']),
    getMyLocation() {
      this.city = "正在加载中...";
      let geolocation = new window.qq.maps.Geolocation("252BZ-OYKKJ-UWOFJ-K5JBG-6ZLXF-ZJFPC", "国医堂App-医院定位");
      geolocation.getLocation(this.showPosition, this.showErr);
    },
    showPosition(position) {
      console.log(position);
      this.mLocateLatitude1(position.lat);
      this.mLocateLongitude1(position.lng);
      this.city = position.province + position.city + position.addr;
      console.log('当前位置坐标:', this.locateLatitude1, 'position.locateLatitude', this.locateLongitude1);

      this.mGytHospitalList1([]);
      this.mAllSize1(0);
      this.mPageSize1(0);
      this.getHospitalListCount1();
      this.getAppointmentList();
    },
    showErr() {
      this.$toast('定位失败!请尝试重新定位!');
      console.log("定位失败");
      this.city = "北京市东城区东长安街天安门";
      this.mLocateLongitude1(116.232927);
      this.mLocateLatitude1(39.541900);

      this.mGytHospitalList1([]);
      this.mAllSize1(0);
      this.mPageSize1(0);
      this.getHospitalListCount1();
      this.getAppointmentList();
    },
  },
  mounted() {
    let geolocation = new window.qq.maps.Geolocation("252BZ-OYKKJ-UWOFJ-K5JBG-6ZLXF-ZJFPC", "国医堂App-医院定位");
    geolocation.getLocation(this.showPosition, this.showErr);
  },
  computed: {
    ...mapGetters(['locateLongitude1','locateLatitude1'])
  },
}
</script>

<style lang="stylus" scoped>
.AppointmentLocation
  .containBox
    width 95%
    height auto
    margin auto
    margin-top 5px
    border 1px solid RGB(119,86,55)
    border-radius 5px
    .locationTitle
      font-size 16px
      padding-left 10px
      font-family '微软雅黑'
    .locationIcon
      color #0202e7
      font-size 20px
    .locationFont
      padding-bottom 3px
      font-family '微软雅黑'
      height 15px
      width 100%
      font-size 14px
      justify-content center

</style>
