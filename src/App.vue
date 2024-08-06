<template>
  <div id="app">
    <div id="router-view">
      <router-view/>
    </div>
    <div id="nav" v-show="this.show">
      <bottombar :routePath="routePath"></bottombar>
    </div>
  </div>
</template>

<script>
import Bottombar from "./components/public/Bottombar";
import {mapActions, mapGetters} from "vuex";
export default {
  name: 'App',
  components:{
    Bottombar,
    show:true
  },
  methods: {
   /* ...mapActions(['getuserDetail'])*/
  },
  created() { // 生命周期钩子函数
    //解决vuex刷新页面后数据丢失问题
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))));
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('store', JSON.stringify(this.$store.state));
    });
/*    const itemid=2;
    const itemcode='3e369810-76dd-4b26-8b83-cf8162aa26f5';
    this.getuserDetail({itemid,itemcode});*/

  },
  computed: {
    // 将 Vuex 中的 getter 属性映射为组件的计算属性，也就说是组件有了一个 scenicSpotDetail 属性
/*    ...mapGetters(['userDetail']),*/
    routePath() {
      return this.$route.path
    }
  },
  watch:{
    routePath(vv,ov){
      if (this.$route.path==='/') {
        this.show=false
      }else {
        this.show=true
      }
    }
  }

}
</script>

<style scoped>

*{
  border: 0;
  margin: 0;
  padding: 0;
}
#nav{
  width: 100%;
  height: 80px;
  bottom: 0;
  position: fixed;}

#router-view {
/*  height: calc(100vh - 80px);*/
  margin-bottom: 200px;
  overflow: auto;
}
</style>
