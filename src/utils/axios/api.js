import axios from 'axios' // 注意先安装哦
import config from './config.js' // 导入默认配置
import $store from '@/store'
import {
  Toast
} from 'mint-ui';

export default function $axios(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create(Object.assign({}, config))

    // request 拦截器
    instance.interceptors.request.use(
      config => {
        $store.state.loading = true
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )

    // response 拦截器
    instance.interceptors.response.use(
      response => {
        $store.state.loading = false
        return response;
      },
      err => {
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              err.message = '请求错误'
              break

            case 401:
              err.message = '未授权，请登录'
              break

            case 403:
              err.message = '拒绝访问'
              break

            case 404:
              err.message = `请求地址出错: ${err.response.config.url}`
              break

            case 408:
              err.message = '请求超时'
              break

            case 500:
              err.message = '服务器内部错误'
              break

            case 501:
              err.message = '服务未实现'
              break

            case 502:
              err.message = '网关错误'
              break

            case 503:
              err.message = '服务不可用'
              break

            case 504:
              err.message = '网关超时'
              break

            case 505:
              err.message = 'HTTP版本不受支持'
              break

            default:
              err.message = `连接错误${err.response.status}`
          }
        }
        Toast({
          message: err.message
        });
        $store.state.loading = false
        console.error(err)
        return Promise.reject(err) // 返回接口返回的错误信息
      }
    )

    //请求处理
    instance(options)
      .then((res) => {
        //统一错误处理-不同设备登录
        if (res.data.logoutFlag) {
          if (res.data.logoutFlag == "true" && res.data.loginOtherDevice == "true") {
            context.clearToken()
            context.replaceStage("login")
          }
        } else if (res.data.jsonError) {
          Toast({
            message: res.data.jsonError[0]._exceptionMessage
          });
        } else if (res.data.encryptBody) {
          var resData = JSON.parse(res.data.encryptBody).Head
          if (resData.RespCode != "000000") {
            Toast({
              message: resData.RespMessage
            });
          }
        }
        console.log(res.config.url + ":" + JSON.stringify(res.data))
        resolve(res)
        return false
      })
      .catch((error) => {
        // reject(error)
      })
  })
}
