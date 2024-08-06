<template>
  <div id="healthManage">
    <div style="overflow:hidden;">
      <div class="header">
        <div class="header-left">
          <button class="btn-fanhui" @click="$router.back()">
            <div class="back-icon iconfont icon-fanhui">返回</div>
          </button>
        </div>
        <div class="header-title">
          <p>
            <span>健康管理</span>
          </p>
        </div>
      </div>
    </div>

    <div class="pagebody">
      <div class="top">
        <div class="top-left">
          <div class="title">{{ title }}</div>
          <div class="author">{{author}}</div>
          <div class="date">{{date}}</div>
        </div>
        <div v-if="false" class="top-right">
            <div class="shoucang iconfont icon-collec_selected" v-if="!isCollect" @click="collect"></div>
            <div class="shoucang iconfont icon-shoucang" v-if="isCollect" @click="cancelCollect"></div>
        </div>
      </div>
      <div class="middle">
        <div class="content">
          <p v-html="content"></p>
        </div>
      </div>
    </div>

    <div class="bottom">
      <div class="text">
        <p>附件：</p>
      </div>
      <div class="fujian">
        <p class="p"><a class="a" href="../../../static/老年人中医药健康管理服务记录表.pdf" download="老年人中医药健康管理服务记录表.pdf">1.老年人中医药健康管理服务记录表</a></p>
        <p class="p"><a class="a" href="../../../static/老年人中医药健康管理服务技术规范.doc" download="老年人中医药健康管理服务技术规范.doc">2.老年人中医药健康管理服务技术规范</a></p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HealthManage",
      data() {
          return {
            title:'中医中医药健康管理服务规范',
            author:'河北省中医药管理局',
            date:'2020-09-17     11：02：17',
            isCollect: false,
            content:'<p><span>老年人中医药健康管理服务</span></p>' +
              '<p><span>一、服务对象</span></p>' +
              '<p><span>辖区内 65 岁及以上常住居民。</span></p>' +
              '<p><span>二、服务内容</span></p>' +
              '<p><span>每年为 65 岁及以上老年人提供 1 次中医药健康管理服务，内容包括中医体质辨识和中医药保健指导。</span></p>' +
              '<p><span>（一）中医体质辨识</span></p>' +
              '<p><span>按照老年人中医药健康管理服务记录表前 33 项问题采集信息，根据体质判定标准进行体质辨识，并将辨识结果告知服务对象。</span></p>' +
              '<p><span>（二）中医药保健指导</span></p>' +
              '<p><span>根据不同体质从情志调摄、饮食调养、起居调摄、运动保健、穴位保健等方面进行相应的中医药保健指导。</span></p>' +
              '<p><span>四、服务要求</span></p>' +
              '<p><span>（一）开展老年人中医药健康管理服务可结合老年人健康体检和慢性病患者管理及日常诊疗时间。</span></p>' +
              '<p><span>（二）开展老年人中医药健康管理服务的乡镇卫生院、村卫生室和社区卫生服务中心（站）应当具备相应的设备和条件。有条件的地区应利用信息化手段开展老年人中医药健康管理服务。</span></p>' +
              '<p><span>（三）开展老年人中医体质辨识工作的人员应当为接受过老年人中医药知识和技能培训的卫生技术人员。开展老年人中医药保健指导工作的人员应当为中医类别执业（助理）医师或接受过中医药知识和技能专门培训能够提供上述服务的其他类别医师（含乡村医生）。</span></p>' +
              '<p><span>（四）服务机构要加强与村（居）委会、派出所等相关部门的联系，掌握辖区内老年人口信息变化。</span></p>' +
              '<p><span>（五）服务机构要加强宣传，告知服务内容，使更多的老年人愿意接受服务。</span></p>' +
              '<p><span>（六）每次服务后要及时、完整记录相关信息，纳入老年人健康档案。</span></p>' +
              '<p><span>五、工作指标</span></p>' +
              '<p><span>（一）老年人中医药健康管理率＝年内接受中医药健康管理服务的 65 岁及以上居民数/年内辖区内 65 岁及以上常住居民数×100％。</span></p>' +
              '<p><span>注：接受中医药健康管理是指建立了健康档案、接受了中医体质辨识、中医药保健指导、服务记录表填写完整。</span></p>'
          }
      },

      props: {

      },
      methods: {
        back(){
          this.$router.go(-1)
        },
        collect(){
          this.isCollect = true
        },
        cancelCollect(){
          this.isCollect = false
        }
      },
      beforeRouteEnter(to, from, next) {
        // 添加背景色 margin:0;padding:0是为了解决vue四周有白边的问题
        document.querySelector('body').setAttribute('style', 'margin:0;padding:0')
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
      margin-left 20%
      text-align center
      font-size 14px

  .pagebody
    margin 60px 10px 0 10px
    .top
      margin-top 20px
      .top-left
        float left
        width 70%
        height 90px
        .title
          font-size 18px
          font-weight bold
          text-align: left
        .author
          margin-top 5px
          font-size 14px
          font-weight 400
          text-align: left
        .date
          margin-top 5px
          font-size: 14px
          font-weight 400
          text-align: left
      .top-right
        line-height 90px
        width 30%
        float right
        .shoucang
          text-align center
          font-size 30px
          color #ee9900
    .middle
      word-wrap: break-word
      color: #333333
      width 100%
      display: flex
      line-height: 24px
      .content
        color #333333
        align-self: flex-start
        display block
        letter-spacing normal
        width 100%
        font-size 14px
        text-align left
  .bottom
    margin 10px 10px 0 10px
    text-align left
    line-height 16px
    .text
      color #333333
      font-size 14px
    .fujian
      font-size 14px
      .p
        .a
          text-decoration none
</style>
