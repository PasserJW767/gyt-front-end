// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import router from './router'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import fastclick from 'fastclick'
fastclick.attach(document.body)
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
// require styles
import 'swiper/dist/css/swiper.css'
// 引入Element-UI
import 'element-ui/lib/theme-chalk/index.css';
import Element from 'element-ui';
Vue.use(Element, { size: 'small', zIndex: 3000 });
import store from './store'
import swal from 'sweetalert';
//修改浏览器标题
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)
Vue.use(VueAwesomeSwiper, /* { default global options } */)
import moment from 'moment'
Vue.prototype.$moment = moment;
Vue.config.productionTip = false
//导入全局样式
import  'styles/iconfont/iconfont.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import showToast from './components/toast/index'
Vue.use(showToast);
//导入全局样式
import  './assets/styles/iconfont/iconfont.css'
/* eslint-disable no-new */
Vue.prototype.$axios=axios
new Vue({
  el: '#app',
  axios,
  router,
  ElementUI,
  store,
  swal,
  components: { App },
  template: '<App/>'
})
