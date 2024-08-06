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
    ...mapActions(['getAppointmentListTest','getHospitalListCount']),
    ...mapMutations(['mLocateLongitude','mLocateLatitude','mChoiceFlag','mPageSize','mGytHospitalList','mAppointmentUserCode','mKeyWord','mAllSize']),
    getMyLocation() {
      this.city = "正在加载中...";
      let geolocation = new window.qq.maps.Geolocation("252BZ-OYKKJ-UWOFJ-K5JBG-6ZLXF-ZJFPC", "国医堂App-医院定位");
      geolocation.getLocation(this.showPosition, this.showErr);
    },
    showPosition(position) {
      // console.log(position);
      this.mLocateLatitude(position.lat);
      this.mLocateLongitude(position.lng);
      this.city = position.province + position.city + position.addr;
      // console.log('position.latitude:', this.locateLatitude, 'position.locateLatitude', this.locateLongitude);

      this.mGytHospitalList([]);
      this.mAllSize(0);
      this.mPageSize(0);
      this.getHospitalListCount();
      this.getAppointmentListTest();
    },
    showErr() {
      this.$toast('定位失败!请尝试重新定位!');
      // console.log("定位失败");
      this.city = "北京市东城区东长安街天安门";
      this.mLocateLongitude(116.232927);
      this.mLocateLatitude(39.541900);

      this.mGytHospitalList([]);
      this.mAllSize(0);
      this.mPageSize(0);
      this.getHospitalListCount();
      this.getAppointmentListTest();
    },
  },
  mounted() {
    let geolocation = new window.qq.maps.Geolocation("252BZ-OYKKJ-UWOFJ-K5JBG-6ZLXF-ZJFPC", "国医堂App-医院定位");
    geolocation.getLocation(this.showPosition, this.showErr);
  },
  computed: {
    ...mapGetters(['locateLongitude','locateLatitude'])
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
