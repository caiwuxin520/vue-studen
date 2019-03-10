import Vue from 'vue'
import App from './App'
import router from './router'

//css初始化
import '@/status/styles/commone.css'

//引入vantUI
import Vant from 'vant';
import 'vant/lib/index.css';

//引入tabbar组件
import tabbar from '@/components/tabbar/tabbar'
Vue.component('tabbar',tabbar)


Vue.use(Vant);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
