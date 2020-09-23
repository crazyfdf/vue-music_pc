import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import commonApi from '@/assets/content/commonApi'

import ElementUI from 'element-ui';
import '../theme/index.css'
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$commonApi = commonApi
Vue.prototype.$bus = new Vue()


new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')


import {
  request
} from './network/request'
