import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './axios'
import './assets/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faBars, faEnvelope, faPhoneSquareAlt, faMapMarkerAlt, faUsers, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faBars, faEnvelope, faPhoneSquareAlt, faMapMarkerAlt, faUsers, faFilePdf)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
