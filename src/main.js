/*!

 =========================================================
 * Vue Paper Dashboard - v2.0.0
 =========================================================

 * Product Page: http://www.creative-tim.com/product/paper-dashboard
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from "vue";
import App from "./App";
import router from "./router/index";

import axios from 'axios';
Vue.prototype.$axios=axios;

import COS from 'cos-js-sdk-v5'
Vue.prototype.$COS=COS;

/* import {cosUtil} from './common/cos.js'
Vue.prototype.$cosUtil=cosUtil; */

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";
// 注册全局组件
import {requestGet,requestPost} from './common/request.js'
Vue.prototype.$requestGet=requestGet;
Vue.prototype.$requestPost=requestPost;

Vue.use(PaperDashboard);

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
