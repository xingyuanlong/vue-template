import Vue from 'vue';
import Home from './home.vue';
import 'babel-polyfill';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { Home },
  template: '<Home />'
});
