<template>
  <div class="AppointmentChoose">
    <div class="rectangle" @click="changeColor">
      <span class="locationFont">按距离<span class="iconfont icon-dingwei locationIcon"></span></span>
    </div>
    <el-dropdown class="dropdown" @command="handleCommand">
      <span class="el-dropdown-link" >
        筛选<span class="iconfont icon-shaixuan"></span>
      </span>
      <el-dropdown-menu class="dropdownMenu" slot="dropdown">
        <el-dropdown-item class="dropdownItem" command="1">
          <span class="iconfont icon-paihangbang dropdownIcon"></span>
          评分
        </el-dropdown-item>
        <el-dropdown-item class="dropdownItem" command="2" divided>
          <span class="iconfont icon-xiangzi dropdownIcon"></span>
          剩余量
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapMutations,mapGetters } from 'vuex'
export default {
  name: "AppointmentChoose",
  data() {
    return {
    }
  },
  methods: {
    ...mapMutations(['mChoiceFlag1','mPageSize1','mGytHospitalList1']),
    changeColor() {
      let rectangle = document.querySelector('.rectangle');
      let locationFont = document.querySelector('.locationFont');
      if (rectangle.style.background == 'white'){
        rectangle.style.background = 'rgba(119, 86, 55, 1)';
        locationFont.style.color = 'white';
        this.mChoiceFlag1(1);
        let list = this.gytHospitalList1;
        let len = list.length;
        for (let i = 0; i < len-1; i++) {
          for (let j = 0; j < len - 1 - i; j++) {
            // 相邻元素两两对比，元素交换，距离大的元素交换到前面
            if (list[j].hospitalDistance > list[j + 1].hospitalDistance) {
              let temp = list[j];
              list[j] = list[j+1];
              list[j+1] = temp;
            }
          }
        }
        this.mGytHospitalList1([]);  //将其置空
        this.mGytHospitalList1(list);  //将其置list
      } else {
        rectangle.style.background = 'white';
        locationFont.style.color = 'RGB(127,102,151)';
        this.mChoiceFlag1(0);
        let list = this.gytHospitalList1;
        let len = list.length;
        for (let i = 0; i < len-1; i++) {
          for (let j = 0; j < len - 1 - i; j++) {
            // 相邻元素两两对比，元素交换，小的元素交换到前面
            if (list[j].itemid < list[j + 1].itemid) {
              let temp = list[j];
              list[j] = list[j+1];
              list[j+1] = temp;
            }
          }
        }
        this.mGytHospitalList1([]);  //将其置空
        this.mGytHospitalList1(list);  //将其置list
      }

    },
    handleCommand(command) {
      let rectangle = document.querySelector('.rectangle');
      let locationFont = document.querySelector('.locationFont');
      //当rectangle背景颜色不是白色的时候，说明当前被选中按距离排序，把按距离排序取消掉
      if (rectangle.style.background != 'white') {
        rectangle.style.background = 'white';
        locationFont.style.color = 'RGB(127,102,151)';
      }
      if(command == 1){
        //按评分进行排序
        let list = this.gytHospitalList1;
        let len = list.length;
        for (let i = 0; i < len-1; i++) {
          for (let j = 0; j < len - 1 - i; j++) {
            // 相邻元素两两对比，元素交换，大的元素交换到前面
            if (list[j].hospitalSource < list[j + 1].hospitalSource) {
              let temp = list[j];
              list[j] = list[j+1];
              list[j+1] = temp;
            }
          }
        }
        this.mGytHospitalList([]);  //将其置空
        this.mGytHospitalList(list);  //将其置list
      }
      else if(command == 2){
        //按剩余量进行排序
        let list = this.gytHospitalList1;
        let len = list.length;
        for (let i = 0; i < len-1; i++) {
          for (let j = 0; j < len - 1 - i; j++) {
            // 相邻元素两两对比，元素交换，大的元素交换到前面
            if (list[j].surplus < list[j + 1].surplus) {
              let temp = list[j];
              list[j] = list[j+1];
              list[j+1] = temp;
            }
          }
        }
        this.mGytHospitalList1([]);  //将其置空
        this.mGytHospitalList1(list);  //将其置list
      }
    }
  },
  mounted() {
    let rectangle = document.querySelector('.rectangle');
    rectangle.style.background = 'white';
  },
  computed: {
    ...mapGetters(['choiceFlag1','gytHospitalList1'])
  },
}
</script>

<style lang="stylus" scoped>
.AppointmentChoose
  display flex
  .rectangle
    width 50%
    text-align center
    padding-top 12px
    justify-content center  //水平居中
    align-items center //盒子内元素垂直居中
    height 30px
    border-bottom 1px solid RGB(215,215,215)
    border-left 1px solid RGB(215,215,215)
    margin-right -1px //修正适应border的左边框
    margin-left -1px  //修正border
    .locationFont
      font-size 16px
      color RGB(127,102,151)
      .locationIcon
        font-size 16px
  .dropdown
    width 50%
    text-align center
    padding-top 12px
    justify-content center  //水平居中
    align-items center //盒子内元素垂直居中
    height 30px
    border-bottom 1px solid RGB(215,215,215)
    border-left 1px solid RGB(215,215,215)
    margin-right -1px //修正适应border的左边框
    margin-left -1px  //修正border
    .el-dropdown-link
      font-size 15px
      cursor pointer
      color RGB(127,102,151)
      .el-icon-arrow-down
        font-size 12px
    .dropdownMenu
      .dropdownItem
        font-size 14px
        .dropdownIcon
          font-size 14px
  /*.dropdown2
    border 1px solid red
    .el-dropdown-link
      cursor pointer
      color #409EFF
      .el-icon-arrow-down
        font-size 12px*/
</style>
