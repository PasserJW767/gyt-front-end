<template>
  <div class="q">
    <div class="peo"v-for="question in questions" :key="question.qid">
      <table >
      <tr>
        <td style="width: 300px;height: 40px">{{question.qid}}{{question.qtext}}</td>
      </tr>
      </table>
      <div>
<!--        <div v-if="question.qid==9" style="display: flex">-->
<!--        <input type="radio" :id="'a1'+question.qid" value=1 v-model="fenshu[question.qid]" v-on:click="change('c1'+question.qid,1,question.qid)" style="display:none">-->
<!--        <label :for="'a1'+question.qid" :id="'c1'+question.qid" v-bind:class="classname"  >没有（根本不）(BMI<24)</label>-->
<!--        </div>-->
        <input type="radio" :id="'a1'+question.qid" value=1 v-model="fenshu[question.qid]" v-on:click="change('c1'+question.qid,1,question.qid)" style="display:none">
        <label :for="'a1'+question.qid" :id="'c1'+question.qid" v-bind:class="classname"  >没有（根本不）</label>
        &nbsp;&nbsp;
        <input type="radio" :id="'a2'+question.qid" value=2 v-model="fenshu[question.qid]" v-on:click="change('c2'+question.qid,2,question.qid)" style="display:none">
        <label :for="'a2'+question.qid" :id="'c2'+question.qid" v-bind:class="classname"  >很少（有一点）</label>
        &nbsp;&nbsp;
        <input type="radio" :id="'a3'+question.qid" value=3 v-model="fenshu[question.qid]" v-on:click="change('c3'+question.qid,3,question.qid)" style="display:none">
        <label :for="'a3'+question.qid" :id="'c3'+question.qid" v-bind:class="classname"  >有时（有些）</label>
        &nbsp;&nbsp;
        <input type="radio" :id="'a4'+question.qid" value=4 v-model="fenshu[question.qid]" v-on:click="change('c4'+question.qid,4,question.qid)" style="display:none">
        <label :for="'a4'+question.qid" :id="'c4'+question.qid" v-bind:class="classname"  >经常（相当）</label>
        &nbsp;&nbsp;
        <input type="radio" :id="'a5'+question.qid" value=5 v-model="fenshu[question.qid]" v-on:click="change('c5'+question.qid,5,question.qid)" style="display:none">
        <label :for="'a5'+question.qid" :id="'c5'+question.qid" v-bind:class="classname"  >总是（非常）</label>


      </div>
    </div>
    <div class="start">
      <router-link :to="{name:'BodyResult',params:{fenshu:this.fenshu}}">
<!--       <button @click="toSearch">查询结果</button>-->
        <p @click="savedata">查询结果</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
    export default {
      name: "PgText",
      data () {
        return {
          question: {
            qid: '',
            qtext: '',
            optionsText:'',
            optionsValue: '',
          },
          classname:'choice-item',
          x:1,
          isActive:false,
          questions: [],
          fenshu:[]
        }
      },
      methods: {
        ...mapMutations(['updateData']),
        ischange(){
          return this.isActive = true
        },
        showquestion(){
          var _this = this;
          this.$axios.get('api/question/show')
            .then(function (response) {
              const data=response.data.data
              // console.log(data)
              data.forEach(function (item){
               item.qid=parseInt(item.qid)
              })
              _this.questions = data;
            })
            .catch(function (error) {
              console.log(error);
            });
        },
        //改变样式
        change(i,index,qid){
          for (let j = 1; j <= 5; j++) {
            if(j==index){
              document.querySelector('#'+i).setAttribute('class','active')
            }
            else{
              document.querySelector('#c'+j+qid).setAttribute('class','choice-item')
            }
          }
        },
        savedata(){
          //this.$store.commit('updateData', this.fenshu)
          //this.$router.push('/searchIndex')
          //this.updateData(this.fenshu);
         // this.$store.commit('updateData',this.fenshu)
        }
      },
      mounted() {
        this.showquestion();
      }
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/variables.styl"  // 导入样式
.q
  touch-action: pan-y;
  .peo
    height: 125px /* 43px */
    width: 375px
    background: white       /* #00bcd4 */
    border-radius:10px
    margin 10px
  .start
    color white
    padding-top 2px
    margin: 0 auto
    text-align center
    height: 25px /* 43px */
    width: 280px
    border-radius:20px
    background red
    font-size large
  .choice-item
    line-height: 30px;
    margin: 2px;
    padding: 0 10px;
    background-color: #1abc9c;
    color: white;
    border-radius: 4px;
    font-size: 13px;
    cursor: pointer;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    overflow: hidden;
    transition: 0.25s linear;
  .active
    line-height: 30px;
    margin: 2px;
    padding: 0 10px;
    background-color: #775637;
    color: white;
    border-radius: 4px;
    font-size: 13px;
    cursor: pointer;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    overflow: hidden;
    transition: 0.25s linear;
  .a
    background-color: #775637;
</style>
