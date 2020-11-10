import Vue from 'vue'
import App from './App'
//axios
import axios from 'util/request.js'
Vue.prototype.$axios=axios;
//vuex
import store from 'store/index'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
