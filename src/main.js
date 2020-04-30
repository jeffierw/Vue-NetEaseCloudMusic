import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import Router from './router'
import Fastclick from 'fastclick'

Vue.config.productionTip = false

import 'common/stylus/index.styl'

Fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:Router,
  render: h => h(App)
})
