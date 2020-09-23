import axios from 'axios'
import $store from '@/store/index'

let ajaxTimer = 0;
export function request(config) {
  //1.创建axios的实例
  $store.commit('showLoading')
  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeOut: 5000
  })
  //2,axios的拦截器
  instance.interceptors.request.use(res => {
      ajaxTimer++;
      res.headers["Content-Type"] = "application/x-www-form-urlencoded"
      return res;
    },
    err => {
      console.log(err);
      ajaxTimer--;
      if (ajaxTimer === 0) {
        $store.commit('hiddenLoading')
      }
    })

  //2.2响应拦截
  instance.interceptors.response.use(res => {
      ajaxTimer--;
      setTimeout(() => {
        if (ajaxTimer === 0) {
          $store.commit('hiddenLoading')
        }
      }, 1000);
      return res.data
    },
    err => {
      console.log(err);
      ajaxTimer--;
      if (ajaxTimer === 0) {
        $store.commit('hiddenLoading')
      }
    })
  return instance(config)
}
