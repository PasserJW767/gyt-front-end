<template>
  <div class="AppointmentDatePicker">
    <div class="allDiv">
      <!-- 留白Div -->
      <div class="remindDiv"></div>
      <!-- 提示Div -->
      <div class="remindFont">
        <span class="remindFontDetail">请选择日期</span>
      </div>
      <!-- 今日日期Div -->
      <div class="todayDiv">
        <span class="todayDetail">{{ today }}&nbsp;{{ week }}</span>
      </div>
      <!-- datePicker组件 -->
      <div class="datePickerDiv">
        <!--
          对组件的一些解释
          swipeSpace:一次滑动几天
          sundayText:星期日怎么称呼，可以改成日/天...任何想要的文字
          choosedDate:当前默认选中的日期所处的位置
          choosedItemColor:选中日期的背景颜色
          minDate:可选中的最小日期
          maxDate:可选中的最大日期
          showBorderTop:是否显示日历组件的顶部边框
          resizeable:屏幕尺寸改变时，是否重绘日历组件
          v-on:firstDayChange:通过组件提供的'firstDayChange'事件，动态变更当前周所在的年月数据(该事件会返回当前最左侧日期的数据)
          v-on:change:选择日期后进行的操作
         -->
        <vue-horizontal-calendar
          class="datepicker"
          swipeSpace="2"
          sundayText="日"
          :choosedDate="getThisMondayDate"
          choosedItemColor="rgb(119, 86, 55)"
          :minDate="minDate"
          :showBorderTop="true"
          :resizeable="false"
          v-on:firstDayChange="firstDayChange"
          v-on:change="selectDate"
          v-on:swipeToEnd="swipeToEnd"
        >
          <span class="iconfont icon-arrow-left-bold" slot="leftIcon" style="width:20px;margin-top:11px;color: rgb(119, 86, 55);font-weight: bold"></span>
          <span class="iconfont icon-arrow-right-bold" slot="rightIcon" style="width:20px;margin-top:11px;color: rgb(119, 86, 55);font-weight: bold"></span>
        </vue-horizontal-calendar>
      </div>
      <!-- 留白Div -->
      <div class="remindDiv2"></div>
    </div>
  </div>
</template>

<script>
import VueHorizontalCalendar from 'vue-horizontal-calendar'
import {mapActions, mapMutations} from "vuex";

export default {
  name: "AppointmentDatePicker",
  components:{
    VueHorizontalCalendar
  },
  data() {
    return {
      today: '',
      week: '',
      minDate: '',
      currentFirstDay: {
        dateFormat: "",
        year: "",
        month: "",
        date: "",
        day: "",
        timestamp: ""
      },
    }
  },
  methods: {
    ...mapMutations(['mChooseDateYear','mChooseDateMonth','mChooseDateDate','mChooseWeekDay']),
    ...mapActions(['getWorkDoctorListByHospital']),
    //获得今天的日期，用于设置当前日期、星期以及VueHorizontalCalendar的最小日期
    getToday() {
      let date = new Date();
      let d = date.getDay();
      let day = '';
      if (d == 0) {
        day = '日';
      } else if (d == 1) {
        day = '一';
      } else if (d == 2) {
        day = '二';
      } else if (d == 3) {
        day = '三';
      } else if (d == 4) {
        day = '四';
      } else if (d == 5) {
        day = '五';
      } else if (d == 6) {
        day = '六';
      }
      let str =  date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
      this.today = str;
      str = '星期' + day;
      this.week = str;
      str = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
      this.minDate = str;
    },
    // VueHorizontalCalendar要求的更改滑动时候日期必须的函数
    firstDayChange(day) {
      this.currentFirstDay = day;
    },
    // VueHorizontalCalendar改变日期时触发的函数
    selectDate(day){
      //设置年份
      this.mChooseDateYear(day.year);
      //获得月和日并设置
      let month = '';
      let ri = '';
      if(day.month < 10)
        month = '0' + day.month;
      else
        month = day.month;
      if(day.date < 10)
        ri = '0' + day.date;
      else
        ri = day.date;
      this.mChooseDateMonth(month);
      this.mChooseDateDate(ri);
      //设置星期
      this.mChooseWeekDay('周' + day.day);
      //初始化医院的itemId
      let itemCode = this.$route.params.hospitalItemCode;
      //  进行列表的获取
      this.getWorkDoctorListByHospital(itemCode);
    },
    // VueHorizontalCalendar滑动到极限时触发的函数
    swipeToEnd(){
      swal({
        title: "日期选择错误",
        text: "请您选择当天及当天以后的日期",
        icon: "error",
        button: "重新选择",
      });
    }
  },
  created() {
    this.getToday();
  },
  computed: {
    // 获取当前日期所在的周‘周一’的日期
    getThisMondayDate(){
      let today = new Date();
      let today_weekCode = today.getDay() == 0? 7: today.getDay();
      let monday_timestamp = today.getTime() - (today_weekCode - 1) * 1000*3600*24;
      let monday = new Date(monday_timestamp);
      // return monday.getFullYear() + "/" + (monday.getMonth() + 1) + "/" + monday.getDate();
      return today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
    }
  },
}
</script>

<style lang="stylus" scoped>
.AppointmentDatePicker
  .allDiv
    background white
    .remindDiv
      height 10px
      background RGB(245,245,245)
    .remindFont
      margin 10px 0 0 10px
      .remindFontDetail
        font-size 14px
        color RGB(102,102,102)
        font-family '微软雅黑'
    .todayDiv
      margin auto
      text-align center
      .todayDetail
        font-size 14px
        font-weight bold
        color RGB(85,85,85)
        font-family '微软雅黑'
    .datePickerDiv
      margin-top 10px
    .datepicker
      width 360px
      margin 0 auto
      margin-top 20px
    .remindDiv2
      height 30px
      background white
</style>
