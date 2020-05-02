import Vue from 'vue';
import Index from './index.vue';
import 'babel-polyfill';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { Index },
  template: '<Index />'
});
