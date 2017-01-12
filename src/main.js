import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
// import Vuex from 'vuex'


import infiniteScroll from 'vue-infinite-scroll';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Lazyload     from 'vue-lazyload';

import routes from './router/router.js';
import App from './App'
import store from './store/store.js' 



import 'assets/css/common.css';
import 'vue-swipe/dist/vue-swipe.css';

Vue.config.debug = true  //开启debug模式
window.log = console.log

// Vue.use(VueResource)
Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(infiniteScroll)

Vue.use(Lazyload, {
  preLoad: 1.3, // 预设的高比
  error: 'assets/images/lazy.png',  
  loading: 'http://img.zcool.cn/community/01443f564897a432f87512f6eed753.gif',
  attempt: 1,
  listenEvents: [ 'scroll' ]
})

const router = new VueRouter({
    routes,
    linkActiveClass: 'custom-active',  
    mode : 'history',
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
})


router.beforeEach(({meta, path}, from, next) => {
    
    next()
})

let data = {
  store, 
  router, 
  ...App
}

new Vue(data).$mount('#app');

 
