<template>
  <div class="AppointmentDoctorList">
    <div class="allDiv">
      <div class="rectangle" v-for="(item,index) in this.detailDoctorList" :key="index">
        <!-- 医生照片 -->
        <div class="doctorImageDiv">
            <el-image
              class="doctorImage"
              style="width: 60px; height: 60px"
              :src="item.doctorInfo.natmehaFileDTO.filePath"
              fit="fit"></el-image>
        </div>
        <!-- 右侧详情 -->
        <div class="detailInfoDiv">
          <!-- 医生姓名和职位 -->
          <div class="doctorNameAndPosition">
            <span class="doctorName">{{ item.doctorInfo.doctorName }}</span>
            <span class="doctorPosition">{{ item.doctorInfo.doctorTitle }}</span>
          </div>
          <!-- 医生姓名和职位 -->
          <div class="doctorStrongPoint">
            <span class="strongPointTitle">擅长治疗：</span>
            <span class="strongPointDetail">{{ item.doctorInfo.doctorTreatment }}</span>
          </div>
          <!-- 医生工作时间 -->
          <div class="doctorWorkTime">
            <span class="workTimeDate">{{ chooseDate.year }}-{{ chooseDate.month }}-{{ chooseDate.date }}</span>
            <span class="workTimeWeek">{{ chooseDate.weekDay }}</span>
            <span class="workTimeMOA">{{ item.signalInfo[0] }}</span>
          </div>
          <!-- 已预约人数 -->
          <div class="doctorAlreadyBook">
            <span class="alreadyBookTitle">可预约</span>
            <span class="alreadyBookNum">{{ item.signalInfo[1] }}</span>
            <router-link v-if="item.signalInfo[1]!=0" :to="{name: 'AppointmentConfirm', params:{doctorId: item.doctorInfo.itemid,doctorCode: item.doctorInfo.itemcode,timeScope: item.signalInfo[0],hospitalItemCode:hospitalItemCode}}">
              <span class="bookButton">挂号</span>
            </router-link>
            <span v-if="item.signalInfo[1]<=0" class="bookButtonCanNotClick">挂号</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations,mapActions,mapGetters } from 'vuex'
export default {
  name: "AppointmentDoctorList",
  data() {
    return {
      hospitalItemCode: '',
      uCode:''
    }
  },
  methods: {
    ...mapMutations(['mChooseDateYear','mChooseDateMonth','mChooseDateDate','mChooseWeekDay','mDetailDoctorList']),
    ...mapActions(['getWorkDoctorListByHospital'])
  },
  computed: {
    ...mapGetters(['chooseDate','detailDoctorList'])
  },
  // 挂载函数
  created() {
    console.log('aaaaa',this.$route.params);
    this.hospitalItemCode = this.$route.params.hospitalItemCode;
    console.log('this.hospitalItemCode', this.hospitalItemCode);
    //初始化今天的日期 year:date.getFullYear(),month:month,day:day
    let date = new Date();
    let month = '';
    let day = '';
    if(date.getMonth() < 10)
      month = '0' + (date.getMonth()+1);
    else
      month = date.getMonth()+1;
    if(date.getDate() < 10)
      day = '0' + (date.getDate());
    else
      day = date.getDate();
    this.mChooseDateYear(date.getFullYear());
    this.mChooseDateMonth(month);
    this.mChooseDateDate(day);

    //初始化今天星期几:weekday
    let d = date.getDay();
    let weekday = '';
    if (d == 0) {
      weekday = '日';
    } else if (d == 1) {
      weekday = '一';
    } else if (d == 2) {
      weekday = '二';
    } else if (d == 3) {
      weekday = '三';
    } else if (d == 4) {
      weekday = '四';
    } else if (d == 5) {
      weekday = '五';
    } else if (d == 6) {
      weekday = '六';
    }
    this.mChooseWeekDay('周' + weekday);
  },
}
</script>

<style lang="stylus" scoped>
.AppointmentDoctorList
  .allDiv
    padding-top 10px
    margin-bottom 5px
    .rectangle
      background white
      display flex
      margin 10px 15px 0 15px
      border-radius 15px
      border 2px solid RGB(242,242,242)
      box-shadow 0 5px 5px 0 RGB(183,183,183)
      height 150px
      .doctorImageDiv
        margin-top 40px
        margin-left 15px
        .doctorImage
          border-radius 50%
      .detailInfoDiv
        width 100%
        .doctorNameAndPosition
          margin-left 20px
          margin-top 20px
          .doctorName
            color rgb(51,51,51)
            font-family '微软雅黑'
            font-size 16px
            font-weight bold
          .doctorPosition
            margin-left 10px
            color rgb(85,85,85)
            font-family '微软雅黑'
            font-size 15px
        .doctorStrongPoint
          margin-left 20px
          margin-top 5px
          .strongPointTitle
            color rgb(85,85,85)
            font-size 14px
            font-family '微软雅黑'
          .strongPointDetail
            color rgb(85,85,85)
            font-size 14px
            font-family '微软雅黑'
        .doctorWorkTime
          margin-left 20px
          margin-top 10px
          .workTimeDate
            color rgb(85,85,85)
            font-size 14px
            font-family '微软雅黑'
          .workTimeWeek
            margin-left 5px
            color rgb(85,85,85)
            font-size 14px
            font-family '微软雅黑'
          .workTimeMOA
            margin-left 5px
            color rgb(85,85,85)
            font-size 14px
            font-family '微软雅黑'
        .doctorAlreadyBook
          margin-left 20px
          margin-top 8px
          .alreadyBookTitle
            color rgb(85,85,85)
            font-size 14px
            font-family '微软雅黑'
          .alreadyBookNum
            margin-left 5px
            color rgb(165,106,37)
            font-size 20px
            font-family '微软雅黑'
            font-weight bold
          .bookButton
            margin-right 10px
            text-align center
            display inline-block
            padding-top 5px
            padding-bottom 5px
            float right
            width 70px
            height 20px
            border-radius 10px
            font-size 14px
            color white
            background-color rgb(165,106,37)
          .bookButtonCanNotClick
            margin-right 10px
            text-align center
            display inline-block
            padding-top 5px
            padding-bottom 5px
            float right
            width 70px
            height 20px
            border-radius 10px
            font-size 14px
            color white
            background-color gray


</style>
