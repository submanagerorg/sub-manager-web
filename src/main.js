import Vue from 'vue'
import App from './App.vue'
import './styles/_bootstrap.scss'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify'
import BootstrapVue from 'bootstrap-vue'
import './styles/main.scss'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

store.commit('initialiseStore')

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
