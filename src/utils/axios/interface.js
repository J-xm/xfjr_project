import axios from './api' // 导入 api

//公共数据
var commonData = {
  BankId: "9999",
  LoginType: "P",
  _locale: "zh_CN",
  _ChannelId: "PMBS"
}

export default {
  get(url, params = {}) {
    return axios({
      url,
      method: 'get',
      params: Object.assign(commonData, params)
    })
  },
  post(url, data = {}) {
    return axios({
      url,
      method: 'post',
      data: Object.assign(commonData, data)
    })
  },
  postFile(url, data) {
    return axios({
      url,
      method: 'post',
      data: data
    })
  }
}
