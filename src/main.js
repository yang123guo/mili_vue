/*---以下是从node_modules引入的包---*/
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store/store.js' 
import axios from 'axios'
import VueAxios from 'vue-axios'
/*---以上是从node_modules引入的包---*/

import routes from './router/router.js';
import App from './App'

import './common/rem';  // 引入rem单位
import FastClick from 'fastclick' // 引入解决点击延迟问题

Vue.config.debug = true  //开启debug模式
window.log = console.log


//实例化Vue的filter
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

// 注册FastClick事件
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.use(VueAxios, axios)
Vue.use(VueRouter)

import 'assets/css/common.css';


/*Vue.use(Lazyload, {
  preLoad: 1.3, // 预设的高比
  error: 'assets/images/lazy.png',  
  loading: 'http://img.zcool.cn/community/01443f564897a432f87512f6eed753.gif',
  attempt: 1,
  listenEvents: [ 'scroll' ]
})*/


const router = new VueRouter({
    routes : routes.routers,
    linkActiveClass: 'custom-active',  
    mode : 'history',
    scrollBehavior
})

// 所有路由都处理
router.beforeEach(({meta, path}, from, next) => {    
    next()
})


let data = {
  store, 
  router, 
  ...App
}

new Vue(data).$mount('#app');

 
