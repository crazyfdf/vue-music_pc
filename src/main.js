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

axios({
  url: "http://123.207.32.32:8000/home/multidata",
  method: 'get'
}).then((res) => {
  console.log(res);
});

axios({
  url: 'http://123.207.32.32:8000/home/data',
  params: {
    type: 'pop',
    page: 1
  }
}).then(res => {
  console.log(res);
})
axios.all([axios({
  url: "http://123.207.32.32:8000/home/multidata",
}), axios({
  url: 'http://123.207.32.32:8000/home/data',
  params: {
    type: 'sell',
    page: 5
  }
})]).then(results => {

})