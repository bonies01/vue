import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import axios from 'axios'

//Vue.prototype.$axios=axios
//Vue.prototype.HOME='/api'
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
