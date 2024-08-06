<template>
  <div id="healthRecord">
    <div style="overflow:hidden;">
      <div class="header">
        <div class="header-left">
          <button class="btn-fanhui" @click="$router.back()">
            <div class="back-icon iconfont icon-fanhui">返回</div>
          </button>
        </div>
        <div class="header-title">
          <p>
            <span>健康档案</span>
          </p>
        </div>
      </div>
    </div>

    <div class="pagebody">
      <div class="title">
        <p><span>个人基本信息</span></p>
      </div>
      <div class="content">
        <p class="message">
          <span class="type">姓名：</span>
          <span class="detail">{{healthBase.name}}</span>
        </p>
      </div>
      <div class="content">
        <p class="message">
          <span class="type">性别：</span>
          <span class="detail">{{healthBase.sex}}</span>
        </p>
      </div>
      <div class="content">
        <p class="message">
          <span class="type">出生日期：</span>
          <span class="detail">{{healthBase.birthDate}}</span>
        </p>
      </div>
      <div class="content">
        <p class="message">
          <span class="type">证件类型：</span>
          <span class="detail">{{healthBase.idType}}</span>
        </p>
      </div>
      <div class="content">
        <p class="message">
          <span class="type">证件号码：</span>
          <span class="detail">{{healthBase.idNo}}</span>
        </p>
      </div>
      <div class="content">
        <p class="message">
          <span class="type">文化程度：</span>
          <span class="detail">{{healthBase.education}}</span>
        </p>
      </div>
      <div class="content">
        <p class="message">
          <span class="type">户口性质：</span>
          <span class="detail">{{healthBase.accoProperty}}</span>
        </p>
      </div>
      <div class="content">
        <p class="message">
          <span class="type">婚姻情况：</span>
          <span class="detail">{{healthBase.marriage}}</span>
        </p>
      </div>
      <div class="content">
        <p class="message">
          <span class="type">民族：</span>
          <span class="detail">{{healthBase.nationality}}</span>
        </p>
      </div>
      <div class="content">
        <p class="message">
          <span class="type">移动号码：</span>
          <span class="detail">{{healthBase.mobilePhone}}</span>
        </p>
      </div>
      <div class="content">
        <p class="message">
          <span class="type">出生地：</span>
          <span class="detail">{{healthBase.birthPlace}}</span>
        </p>
      </div>
      <div class="content">
        <p class="message">
          <span class="type">既往患病史：</span>
          <span class="detail">{{healthBase.pastSicknessType}}</span>
        </p>
      </div>
      <div class="content">
        <p class="message">
          <span class="type">家庭患病史：</span>
          <span class="detail">{{healthBase.familyDisease}}</span>
        </p>
      </div>
      <div class="content">
        <p class="message">
          <span class="type">患者与本人关系：</span>
          <span class="detail">{{healthBase.patientRelation}}</span>
        </p>
      </div>
      <div class="bottom"></div>
    </div>

<!--    <div v-if="hcshowif">
      <div class="pagebody">
        <div class="title">
          <p><span>新生儿健康档案体检信息</span></p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">新生儿姓名：</span>
            <span class="detail">{{healthChildren.newBornName}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">新生儿性别：</span>
            <span class="detail">{{healthChildren.newBornSex}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">新生儿出生日期：</span>
            <span class="detail">{{healthChildren.newBornBirthDate}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">总检结论：</span>
            <span class="detail">{{healthChildren.examSummary}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">新生儿证件类型：</span>
            <span class="detail">{{healthChildren.newBornIdType}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">新生儿证件号码：</span>
            <span class="detail">{{healthChildren.newBornIdNo}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">父亲姓名：</span>
            <span class="detail">{{healthChildren.fatherName}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">母亲姓名：</span>
            <span class="detail">{{healthChildren.motherName}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">出生体重：</span>
            <span class="detail">{{healthChildren.birthWeight}}kg</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">出生身长：</span>
            <span class="detail">{{healthChildren.birthLength}}cm</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">体重：</span>
            <span class="detail">{{healthChildren.weight}}kg</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">身长：</span>
            <span class="detail">{{healthChildren.length}}cm</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">喂养方式：</span>
            <span class="detail">{{healthChildren.feedWay}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">药物使用途径：</span>
            <span class="detail">{{healthChildren.drugRoute}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">每天吃奶次数：</span>
            <span class="detail">{{healthChildren.dailyFeedingTimes}}次</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">每天吃奶量：</span>
            <span class="detail">{{healthChildren.dailyFeedingAmount}}ml</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">既往患病种类：</span>
            <span class="detail">{{healthChildren.stoolTimes}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">随访医生名称：</span>
            <span class="detail">{{healthChildren.visitDoctorName}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">本次访问日期：</span>
            <span class="detail">{{healthChildren.thisVisitDate}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">下次访问日期：</span>
            <span class="detail">{{healthChildren.nextVisitDate}}</span>
          </p>
        </div>
        <div class="bottom"></div>
      </div>
    </div>

    <div v-if="hdshowif">
      <div class="pagebody">
        <div class="title">
          <p><span>2型糖尿病患者随访信息</span></p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">责任医师姓名：</span>
            <span class="detail">{{healthDiabetes.respDoctorName}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">随访方式：</span>
            <span class="detail">{{healthDiabetes.visitWay}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">本次随访日期：</span>
            <span class="detail">{{healthDiabetes.thisFollowupVisitDate}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">随访评价结果：</span>
            <span class="detail">{{healthDiabetes.visitWay}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">下次随访日期：</span>
            <span class="detail">{{healthDiabetes.nextFollowupDate}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">随访医师姓名：</span>
            <span class="detail">{{healthDiabetes.followupVisitDoctorName}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">症状名称：</span>
            <span class="detail">{{healthDiabetes.symptomName}}</span>
          </p>
        </div>

        <div class="bottom"></div>
      </div>
    </div>

    <div v-if="hhshowif">
      <div class="pagebody">
        <div class="title">
          <p><span>高血压患者随访信息</span></p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">责任医师姓名：</span>
            <span class="detail">{{healthHyper.respDoctorName}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">随访方式：</span>
            <span class="detail">{{healthHyper.visitWay}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">本次随访日期：</span>
            <span class="detail">{{healthHyper.thisFollowupVisitDate}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">心理调整评价结果：</span>
            <span class="detail">{{healthHyper.psyAdjustResult}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">随访遵医行为评价结果：</span>
            <span class="detail">{{healthHyper.complianceResult}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">随访评价结果：</span>
            <span class="detail">{{healthHyper.visitEvalResult}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">下次随访日期：</span>
            <span class="detail">{{healthHyper.nextFollowupDate}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">随访医师姓名：</span>
            <span class="detail">{{healthHyper.followupVisitDoctorName}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">症状名称：</span>
            <span class="detail">{{healthHyper.symptomName}}</span>
          </p>
        </div>

        <div class="bottom"></div>
      </div>
    </div>

    <div v-if="hpshowif">
      <div class="pagebody">
        <div class="title">
          <p><span>产后42天健康健康检查</span></p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">健康状况详细描述：</span>
            <span class="detail">{{healthPostpartum.healthConditionDescr}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">心理状况详细描述：</span>
            <span class="detail">{{healthPostpartum.psychologyConditionDescr}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">伤口愈合状况：</span>
            <span class="detail">{{healthPostpartum.woundHealing}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">产妇健康状况评估：</span>
            <span class="detail">{{healthPostpartum.puerperaHealthEvalDescr}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">访视医师姓名：</span>
            <span class="detail">{{healthPostpartum.visitDoctorName}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">孕产妇健康指导类别：</span>
            <span class="detail">{{healthPostpartum.pregHealthGuide}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">备注：</span>
            <span class="detail">{{healthPostpartum.notes}}</span>
          </p>
        </div>
        <div class="bottom"></div>
      </div>
    </div>

    <div v-if="hrshowif">
      <div class="pagebody">
        <div class="title">
          <p><span>健康档案信息</span></p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">姓名：</span>
            <span class="detail">{{healthRecords.name}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">性别：</span>
            <span class="detail">{{healthRecords.gender}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">出生日期：</span>
            <span class="detail">{{healthRecords.birth}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">电话号码：</span>
            <span class="detail">{{healthRecords.phone}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">地区省份：</span>
            <span class="detail">{{healthRecords.adressCountry}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">地址：</span>
            <span class="detail">{{healthRecords.adress}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">民族：</span>
            <span class="detail">{{healthRecords.nation}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">血型：</span>
            <span class="detail">{{healthRecords.bloodType}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">文化程度：</span>
            <span class="detail">{{healthRecords.education}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">职业：</span>
            <span class="detail">{{healthRecords.occupation}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">身高：</span>
            <span class="detail">{{healthRecords.height}}cm</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">体重：</span>
            <span class="detail">{{healthRecords.weight}}kg</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">BMI：</span>
            <span class="detail">{{healthRecords.bmi}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">疾病史：</span>
            <span class="detail">{{healthRecords.diseaseHistory}}</span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">过敏：</span>
            <span class="detail">{{healthRecords.allergy}}</span>
          </p>
        </div>
        <div class="bottom"></div>
      </div>
    </div>

    <div v-if="false">
      <div class="pagebody">
        <div class="title">
          <p><span>老年人中医药健康管理服务信息</span></p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">姓名：</span>
            <span class="detail"></span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">责任医师姓名：</span>
            <span class="detail"></span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">随访方式：</span>
            <span class="detail"></span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">本次随访日期：</span>
            <span class="detail"></span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">摄盐量分级：</span>
            <span class="detail"></span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">目标摄盐量分级：</span>
            <span class="detail"></span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">心理调整评价结果：</span>
            <span class="detail"></span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">随访遵医行为评价结果：</span>
            <span class="detail"></span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">下次随访日期：</span>
            <span class="detail"></span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">随访医师姓名：</span>
            <span class="detail"></span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">主要体质：</span>
            <span class="detail"></span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">情志调摄指导：</span>
            <span class="detail"></span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">饮食调养指导：</span>
            <span class="detail"></span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">起居调摄指导：</span>
            <span class="detail"></span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">运动保健指导：</span>
            <span class="detail"></span>
          </p>
        </div>
        <div class="content">
          <p class="message">
            <span class="type">穴位保健指导：</span>
            <span class="detail"></span>
          </p>
        </div>
        <div class="bottom"></div>
      </div>
    </div>-->


  </div>
</template>

<script>
  import moment from 'moment'
  import {mapGetters} from "vuex";

    export default {
        name: "HealthRecord",
      data() {
        return {
          healthBase:{
            name:'',
            sex:'',
            birthDate:'',
            idType:'',
            idNo:'',
            education:'',
            accoProperty:'',
            marriage:'',
            nationality:'',
            mobilePhone:'',
            birthPlace:'',
            pastSicknessType:'',
            familyDisease:'',
            patientRelation:'',
          },
          healthChildren:{
            newBornName:'',
            newBornSex:'',
            newBornBirthDate:'',
            examSummary:'',
            newBornIdType:'',
            newBornIdNo:'',
            fatherName:'',
            motherName:'',
            birthWeight:'',
            birthLength:'',
            weight:'',
            length:'',
            feedWay:'',
            drugRoute:'',
            dailyFeedingTimes:'',
            dailyFeedingAmount:'',
            stoolTimes:'',
            visitDoctorName:'',
            thisVisitDate:'',
            nextVisitDate:'',
          },
          healthDiabetes:{
            respDoctorName:'',
            visitWay:'',
            thisFollowupVisitDate:'',
            visitEvalResult:'',
            nextFollowupDate:'',
            followupVisitDoctorName:'',
            symptomName:'',
          },
          healthHyper:{
            respDoctorName:'',
            visitWay:'',
            thisFollowupVisitDate:'',
            psyAdjustResult:'',
            complianceResult:'',
            visitEvalResult:'',
            nextFollowupDate:'',
            followupVisitDoctorName:'',
            symptomName:'',
          },
          healthPostpartum:{
            healthConditionDescr:'',
            psychologyConditionDescr:'',
            woundHealing:'',
            puerperaHealthEvalDescr:'',
            visitDoctorName:'',
            pregHealthGuide:'',
            notes:'',
          },
          healthRecords:{
            name:'',
            gender:'',
            birth:'',
            phone:'',
            adressPro:'',
            adressCity:'',
            adressCountry:'',
            adress:'',
            nation:'',
            bloodType:'',
            education:'',
            occupation:'',
            height:'',
            weight:'',
            bmi:'',
            diseaseHistory:'',
            allergy:'',
            userCode:'',
          },
          //判断是否存在
          hcshowif:true,
          hdshowif:true,
          hhshowif:true,
          hpshowif:true,
          hrshowif:true,
          id:1,//用户传的itemid
        }
      },

      mounted() {
         this.id=this.getLogUser.itemid
        this.show();
      },

      computed:{
        ...mapGetters(['getLogUser'])
      },
      methods: {
        dateFormat(row, column) {
          var date = row[column.property];
          if (date == undefined) {
            return "";
          }
          return moment(date).format("YYYY-MM-DD HH:mm:ss");
        },
        show(){
          var _this = this;
          this.$axios.get('api/healthBase/select?id='+_this.id)
            .then(function (response) {
              const data=response.data.data
              console.log(data)
              if(data!=null) {
                _this.healthBase = response.data.data;
                _this.healthBase.birthDate = moment(_this.healthBase.birthDate).format("YYYY-MM-DD");
              }
            })
            .catch(function (error) {
              console.log(error);
            });
          this.$axios.get('api/healthChildren/select?id='+_this.id)
            .then(function (response) {
              const data=response.data.data
              console.log()
              if(!data) {
                _this.hcshowif = false
                console.log(_this.hcshowif)
              }
              else{
                console.log(data)
                _this.healthChildren = response.data.data;
                _this.healthChildren.newBornBirthDate = moment(_this.healthChildren.newBornBirthDate).format("YYYY-MM-DD");
                _this.healthChildren.thisVisitDate = moment(_this.healthChildren.thisVisitDate).format("YYYY-MM-DD");
                _this.healthChildren.nextVisitDate = moment(_this.healthChildren.nextVisitDate).format("YYYY-MM-DD");
              }
            })
            .catch(function (error) {
              console.log(error);
            });
          this.$axios.get('api/healthDiabetes/select?id='+_this.id)
            .then(function (response) {
              const data=response.data.data
              if(!data) {
                _this.hdshowif = false
              }
              else {
                console.log(data)
                _this.healthDiabetes = response.data.data;
                _this.healthDiabetes.thisFollowupVisitDate = moment(_this.healthDiabetes.thisFollowupVisitDate).format("YYYY-MM-DD");
                _this.healthDiabetes.nextFollowupDate = moment(_this.healthDiabetes.nextFollowupDate).format("YYYY-MM-DD");
              }
            })
            .catch(function (error) {
              console.log(error);
            });
          this.$axios.get('api/healthHyper/select?id='+_this.id)
            .then(function (response) {
              const data=response.data.data
              if(!data)
                _this.hhshowif = false
              else {
                console.log(data)
                _this.healthHyper = response.data.data;
                _this.healthHyper.thisFollowupVisitDate = moment(_this.healthDiabetes.thisFollowupVisitDate).format("YYYY-MM-DD");
                _this.healthHyper.nextFollowupVisitDate = moment(_this.healthDiabetes.nextFollowupVisitDate).format("YYYY-MM-DD");
              }
            })
            .catch(function (error) {
              console.log(error);
            });
          this.$axios.get('api/healthPostpartum/select?id='+_this.id)
            .then(function (response) {
              const data=response.data.data
              if(!data)
                _this.hpshowif = false
              else {
                console.log(data)
                _this.healthPostpartum = response.data.data;
              }
            })
            .catch(function (error) {
              console.log(error);
            });
          this.$axios.get('api/healthRecords/select?id='+_this.id)
            .then(function (response) {
              const data=response.data.data
              if(!data)
                _this.hrshowif = false
              else {
                console.log(data)
                _this.healthRecords = response.data.data;
                _this.healthRecords.birth = moment(_this.healthRecords.birth).format("YYYY-MM-DD");
              }
              //this.reload();
            })
            .catch(function (error) {
              console.log(error);
            });
          }
      },

      props: {

      },
      beforeRouteEnter(to, from, next) {
        // 添加背景色 margin:0;padding:0是为了解决vue四周有白边的问题
        document.querySelector('body').setAttribute('style', 'margin:0;padding:0;background-color:#F5F5F5')
        next()
      },
      beforeRouteLeave(to, from, next) {
        // 去除背景色
        document.querySelector('body').setAttribute('style', '')
        next()
      },
    }
</script>

<style lang="stylus" scoped>
  .header
    position fixed
    display: flex
    line-height: 20px
    height 40px
    width:100%
    background: #ffffff
    color: #000000
    .header-left
      float: left
      width: 20%
      height 16px
      text-align center
      padding-left 1px
      padding-right 1px
      .btn-fanhui
        border: none
        width: 100%
        height: 100%
        background-color: #ffffff
        .back-icon
          margin-top 14px
          color:#000000
          text-align center
          font-size 14px
          font-weight bold
    .header-title
      margin-top 8px
      margin-left 20%
      text-align center
      font-size 14px

  .pagebody
    margin 0 10px 0 10px
    .title
      background-color #ffffff
      border-radius: 20px 20px 0 0
      height 50px
      margin-top 60px
      margin-bottom -16px
      text-align center
    .content
      background-color #ffffff
      width 100%
      line-height 24px
      text-align left
      margin-bottom 2px
      .message
        margin-left 10%
        text-align left
        margin-top 5px
        .type
          width 20%
          font-size 14px
          color #333333
        .detail
          margin-left 0
          font-size 14px
          color #666666
    .bottom
      background-color #ffffff
      border-radius: 0 0 20px 20px
      height 20px
</style>
