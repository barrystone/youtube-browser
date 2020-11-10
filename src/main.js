import Vue from 'vue';
import App from './App';

new Vue({
  // whehre we want to render to in our dom
  //   el: '#app',
  render: (h) => h(App),
}).$mount('#app');
