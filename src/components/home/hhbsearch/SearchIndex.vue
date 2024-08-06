<template>
<div>
  <ul>
  <li>
    您的体质为：
  </li>
    <li>
      {{this.tkType.typeName}}
    </li>
    <li>
      {{this.tkType.lbXltz}}
    </li>
</ul>
</div>
</template>

<script>
export default {
  name: "SearchIndex",
  data() {
    return {
      fenshu: [], //批量保存数组
      qixu:0,
      yangxu:0,
      yinxu:0,
      tanshi:0,
      shire:0,
      xueyu:0,
      qiyu:0,
      tebing:0,
      pinghe:0,
      typeId:'',
      tkType:{
        typeId:'',
        typeName:'',
        lbZttz:'',
        lbXttz:'',
        lbCjbx:'',
        lbXltz:'',
        lbFbqx:'',
        lbDwjhjsynl:'',
        tlZttz:'',
        tlZdrq:'',
        tlQztj:'',
        tlTyfsYs:'',
        tlTyfsQj:'',
        tlTyfsYd:'',
        tlTyfsXwbj:'',
      },
    }
  },
  created() {
    // this.fenshu = this.$store.state.fenshu
    this.fenshu=this.$store.state.fenshu
    for (let i = 1; i <this.fenshu.length ; i++) {
      this.fenshu[i]=parseInt(this.fenshu[i]);
    }
   // console.log(this.fenshu[1]+this.fenshu[2])

  },
  methods:{
    js(){
      this.qixu=this.fenshu[2]+this.fenshu[3]+this.fenshu[4]+this.fenshu[14];
      this.yangxu=this.fenshu[11]+this.fenshu[12]+this.fenshu[13]+this.fenshu[29];
      this.yinxu=this.fenshu[10]+this.fenshu[21]+this.fenshu[26]+this.fenshu[31];
      this.tanshi=this.fenshu[9]+this.fenshu[16]+this.fenshu[28]+this.fenshu[32];
      this.shire=this.fenshu[23]+this.fenshu[25]+this.fenshu[27]+this.fenshu[30];
      this.xueyu=this.fenshu[19]+this.fenshu[22]+this.fenshu[24]+this.fenshu[33];
      this.qiyu=this.fenshu[5]+this.fenshu[6]+this.fenshu[7]+this.fenshu[8];
      this.tebing=this.fenshu[15]+this.fenshu[17]+this.fenshu[18]+this.fenshu[20];
      this.pinghe=Math.abs(this.fenshu[1]-6)+Math.abs(this.fenshu[2]-6)+Math.abs(this.fenshu[4]-6)+Math.abs(this.fenshu[5]-6)+Math.abs(this.fenshu[13]-6);

      if(this.qixu>=11){
        this.typeId="2";
      }
      else if(this.yangxu>=11){
        this.typeId="3";
      }
      else if(this.yinxu>=11){
        this.typeId="4";
      }
      else if(this.tanshi>=11){
        this.typeId="5";
      }
      else if(this.shire>=11){
        this.typeId="6";
      }
      else if(this.xueyu>=11){
        this.typeId="7";
      }
      else if(this.qiyu>=11){
        this.typeId="8";
      }
      else if(this.tebing>=11){
        this.typeId="9";
      }
      else if(this.pinghe>=17&&this.qixu<=8&&this.yangxu<=8&&this.yinxu<=8&&this.tanshi<=8&&this.shire<=8&&this.xueyu<=8&&this.qiyu<=8&&this.tebing<=8){
        this.typeId="1";
      }

      console.log(this.typeId)
      var _this = this;
      this.$axios.get('api/question/ppresult?typeId='+this.typeId)
        .then(function (response) {
          const data=response.data.data
          // console.log(data)
          // data.forEach(function (item){
          //   item.qid=parseInt(item.qid)
          // })
          console.log(data)
          _this.tkType= data;
          console.log(_this.tkType)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
    mounted() {
    this.js();
    }
}
</script>

<style scoped>

</style>
