<template>
<div class="hot-icon">
  <ul class="iconList">
    <li @click="displayList('0')">
      <div class="icon-Box">
        <img src="../../../../static/home/jqys.svg" alt=""><br>
        <span>节气养生</span>
      </div>
    </li>
    <li @click="displayList('1')">
      <div class="icon-Box">
        <img src="../../../../static/home/zwbj.svg" alt=""><br>
        <span>自我保健</span>
      </div>
    </li>
    <li @click="displayList('2')">
      <div class="icon-Box">
        <img src="../../../../static/home/yssl.svg" alt=""><br>
        <span>药膳食疗</span>
      </div>
    </li>
    <li @click="displayList('6')">
      <div class="icon-Box">
        <img src="../../../../static/home//zycs.svg" alt=""><br>
        <span>中药常识</span>
      </div>
    </li>
    <li @click="displayList('3')">
      <div class="icon-Box">
        <img src="../../../../static/home/zzwh.svg" alt=""><br>
        <span>中医文化</span>
      </div>
    </li>
    <li @click="displayList('4')">
      <div class="icon-Box">
        <img src="../../../../static/home/ekjk.svg" alt=""><br>
        <span>儿科健康</span>
      </div>
    </li>
  </ul>
  <div class="gap"></div>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "HotIcons",
  methods:{
    displayList(type){
      this.getHotList({'dataType':type,'hotspotName':''})
    },
    ...mapActions(['getHotList'])
  },


}
</script>

<style scoped>
.iconList{
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* fr 单位是一个自适应单位*/
  grid-auto-rows: minmax(25px, auto);
}
.icon-Box{
  margin-top: 15px;
}
.iconList li{
  text-align: center;
  height: 86px;
  background: inherit;
  background-color: rgba(255, 255, 255, 1);
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(242, 242, 242, 1);
}
.iconList li img{
  width: 37px;
  height: 36px;
}
.iconList li span{
  font-family: '微软雅黑';
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #666666;
}
.gap{
  height: 10px;
  background:rgba(242, 242, 242, 1);;
}
</style>
