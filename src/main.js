import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Styles: SCSS
import './assets/scss/main.scss';

import "./plugins/veeValidate";

// ElementUI Components
import './plugins/elementUIComponents';

import Utils from "./utils";

Vue.config.productionTip = false
Vue.use(Utils);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
