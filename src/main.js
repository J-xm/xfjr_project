// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import mixins from './mixins'
import filters from './utils/filters'
import directives from './utils/directives'
import axiosPlugin from './utils/axios'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'normalize.css'
import '@/assets/css/common.css'
import './utils/iconfont/iconfont.js'
import './utils/rem'

// register global mixins.
Vue.mixin(mixins)

//添加全局过滤器
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
})

//添加全局指令
Object.keys(directives).forEach((key) => {
  Vue.directive(key, directives[key]);
})

Vue.use(Mint)

Vue.use(axiosPlugin);

// import { Swipe, SwipeItem } from 'mint-ui';

// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})

//开发调试

import eruda from "eruda"

eruda.init()
