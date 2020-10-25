import Vue from 'vue'
import * as firebase from "firebase"

import App from './App.vue'
import router from './router'
import store from './store/store'
import { firebaseConfig } from './config/fireabase.config'


Vue.config.productionTip = false

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
