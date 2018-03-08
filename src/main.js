// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import infiniteScroll from  'vue-infinite-scroll'

import Vuex from 'vuex'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './assets/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(infiniteScroll);
Vue.use(Vuex);
//创建状态Vuex状态树
const store = new Vuex.Store({
  //全局状态管理的数据
  state: {
    nickName:'',
    cartCount:0,
    userId:''
  },
  //mutations 事件 改变Vuex的state的状态
  mutations: {
    //更新用户信息
    updateUserInfo(state, nickName) {
      state.nickName = nickName;
    },
    updateUserId(state,userId){
      state.userId = userId;
    },
    updateCartCount(state,cartCount){
      state.cartCount += cartCount;
    },
    updateCartCount1(state,cartCount){
      state.cartCount = cartCount;
    }
  }
});
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
