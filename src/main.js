import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
