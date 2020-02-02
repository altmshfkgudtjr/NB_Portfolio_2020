import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Router from 'vue-router'
import VueResource from 'vue-resource'

// Base Axios
Vue.prototype.$http = axios

Vue.use(VueResource);

new Vue({
  el: '#app',
  mounted() {
  	AOS.init();
  },
  render: h => h(App)
})

// Animation Run
window.onload = () => {
	setTimeout(function() {
		AOS.init();
	}, 3000);
}