import Vue from 'vue'
import Router from 'vue-router'
// 主页
import Main from '@/view/Main/main'
// import Login from '@/view/login/Login'
// // 存款
// import gaoq from './gaoq.js'
// // 公告
// import lyuj from './lyuj.js'
// // 我的银行卡
// import ws from './ws.js'
// // 易理财
// import easyfinance from './easyfinance.js'
// // 生活
// import zjinwei from './zjinwei.js'
// // 营销
// import myreward from './myreward.js'

let routerSwitch = true;

Vue.use(Router)

let router = new Router({
  routes: [{
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (routerSwitch) {
    router.indexRouter = to.path
    routerSwitch = false
  }
  next()
})
export default router
