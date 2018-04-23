import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'

import { store } from './store/store';

Vue.use(VueResource)
Vue.http.options.root = 'https://portfolio-e8b5e.firebaseio.com/'
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
