import Vue from 'vue'
import App from './App.vue'

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