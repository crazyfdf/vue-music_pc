import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$store = store
new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
// requestAnimationFrame('./assets/css/base.css')

// axios.defaults.baseURL = "http://123.207.32.32:8000"
// axios.defaults.timeout = 5

// axios.all([axios({
//   url: "http://123.207.32.32:8000/home/multidata"
// }), axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })]).then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }))

// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })
// instance1({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// }).then(res => {
//   console.log(res);
// })
// instance1({
//   url: "http://123.207.32.32:8000/home/multidata"
// }).then(res => {
//   console.log(res);
// })

// const instance2 = axios.create({

// })

import {
  request
} from './network/request'
request({
  url: '/home/multidata',

}, res => {
  console.log(res);
}, err => {
  console.log(err);
})