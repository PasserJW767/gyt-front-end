<template>
  <div class="AppointmentList">
    <div class="infinite-list-wrapper" style="overflow:auto">
      <ul class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
        <li v-for="(item,index) in gytHospitalList1" class="list-item" :key="index">
          <router-link tag="class" class="rectangle" :to="{name: 'AppointmentDetail', params:{hospitalItemCode: item.itemcode}}">
            <div class="imgDiv">
<!--              item.natmehaFileDTO.filePath-->
              <img class="img" src="https://img1.baidu.com/it/u=4194336928,3537078240&fm=26&fmt=auto" />
            </div>
            <div class="detailDiv">
              <div class="detailHospName">{{ item.hospitalName }}
              </div>
              <div class="starDiv">
                <el-rate
                  v-model="item.hospitalSource"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate>
              </div>
              <div class="surplusDiv">
                <div class="surplusDetail">
                  <span class="surplusFont">剩余{{ item.surplus }}</span>
                </div>
                <div class="Location">
                  <span class="surplusLocation">{{ item.hospitalDistance }} km</span>
                </div>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
      <p v-if="loading"></p>
      <p v-if="noMore"></p>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  data () {
    return {
      value: 4.5,
      loading: false
    }
  },
  computed: {
    noMore () {
      // console.log("this.allSize1:", this.allSize1);
      // console.log("this.pageSize1:", this.pageSize1);
      return this.allSize1 <= this.pageSize1
    },
    disabled () {
      return this.loading || this.noMore
    },
    ...mapGetters(['choiceFlag1','pageSize1','gytHospitalList1','allSize1']),
  },
  methods: {
    load () {
      this.loading = true
      setTimeout(() => {
        this.getAppointmentList();
        this.loading = false;
      }, 500)
    },
    ...mapActions(['getAppointmentList','getHospitalListCount1']),
    ...mapMutations(['mChoiceFlag1','mPageSize1','mGytHospitalList1','mAppointmentUserCode1','mKeyWord1','mAllSize1'])
  },
  created() {
    let keyWord = this.$route.params.keyWord;
    this.mKeyWord1(keyWord);
  }
}
</script>

<style lang="stylus" scoped>
.AppointmentList
  .infinite-list-wrapper
    .list
      .list-item
        .rectangle
          display flex
          margin 10px 15px 0 15px
          border-radius 15px
          border 2px solid RGB(242,242,242)
          box-shadow 0 5px 5px 0 RGB(183,183,183)
          height 120px
          .imgDiv
            width 110px
            height 80px
            .img
              margin-top 15px
              margin-left 10px
              width 90%
              height 90%
              border-radius 10px
          .detailDiv
            width 100%
            .detailHospName
              margin-top 15px
              margin-left 15px
              font-size 16px
              font-weight bold
              font-family '微软雅黑'
          .starDiv
            margin-left 15px
            margin-top 10px
          .surplusDiv
            margin-left 15px
            margin-top 10px
            .surplusDetail
              float left
              .surplusFont
                font-size 14px
            .Location
              float right
              padding-right 30px
              font-size 14px
</style>
