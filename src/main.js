/*
 * @Author: Davidbieber
 * @Email: davidbieber@163.com
 * @Date: 2021-03-26 10:33:57
 * @Description: 123
 */
import Vue from 'vue'
import App from './App'
import store from './store'
// eslint-disable-next-line
import router from './router'
import { RouterMount } from 'uni-simple-router'
import uView from 'uview-ui'
// 自定义navbar
import Navbar from '@/components/navbar/index'

Vue.use(uView)
Vue.component('nav-bar', Navbar)
// #ifdef H5
// 引入mock
// require('./mock')
// #endif

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
// v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
RouterMount(app, '#app')
// #endif

// #ifndef H5
app.$mount() // 为了兼容小程序及app端必须这样写才有效果
// #endif
