// 对axios的实例重新封装成一个plugin ,方便 Vue.use(xxxx)
import apiList from './interface'

const install = Vue => {
  if (install.installed)
    return;
  install.installed = true;

  Object.defineProperties(Vue.prototype, {
    // 注意哦，此处挂载在 Vue 原型的 $axios 对象上
    $axios: {
      get() {
        return apiList
      }
    }
  })
}

export default install
