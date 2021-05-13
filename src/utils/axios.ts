import Axios, { AxiosInstance } from 'axios'
import { Toast } from 'vant'
const baseURL = 'http://localhost:3000'

const axios: AxiosInstance = Axios.create({
  baseURL,
  timeout: 10000 //  超时10秒
})

let toast: any
// 前置拦截器，发起请求之前拦截
axios.interceptors.request.use(
  (config) => {
    /**
     * 处理
     */
    // toast = Toast.loading({
    //   message: '加载中...',
    //   forbidClick: true,
    //   loadingType: 'spinner',
    //   duration: 0
    // })

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
// 后置拦截器，（获取到响应式的拦截）
axios.interceptors.response.use(
  (response) => {
    /**
     * 处理
     */

    if (response.status == 200) {
      //   toast.clear()
      return response.data
    } else {
    }
  },
  (error) => {
    toast.clear()
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
    }
  }
)

export default axios
