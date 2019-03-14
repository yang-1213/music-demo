import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'

// tap移动端点击事件
import vueTap from 'v-ztap';
Vue.use(vueTap);

// 重置样式
import '@/style/reset.css'

// 引入fundebug
import * as fundebug from "fundebug-javascript";
import fundebugVue from "fundebug-vue";
fundebug.apikey = "9816ef7058e3c108c57cb5c774f3b6141edf5b53ce3e6704d84b7da7df71c573"
fundebugVue(fundebug, Vue);

// 引入vant所有组件
import Vant from 'vant';
import 'vant/lib/index.css';
// vant ui 组件库文档
// https://youzan.github.io/vant/#/zh-CN/intro
Vue.use(Vant);

Vue.config.productionTip = false

let vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')